// ==UserScript==
// @name         BiLivex - 哔哩哔哩直播增强
// @namespace    https://github.com/eeeachan27/BiLivex
// @version      1.0.2
// @license      MIT
// @description  B站直播间弹幕增强工具：① 弹幕 +1——漂浮弹幕悬停冻结驻留，可快捷 +1 回复；② 评论区——聊天区弹幕悬停显示 +1/复制按钮；③ 小尾巴——发送弹幕自动追加自定义文字；④ 一键点赞——连续点赞 30 次点亮粉丝团灯牌。开源地址：https://github.com/eeeachan27/BiLivex
// @author       eeeachan27
// @match        https://live.bilibili.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-idle
// ==/UserScript==

/*
 * BiLivex - 哔哩哔哩直播增强
 *
 * 核心功能：
 *   1) 弹幕 +1：漂浮弹幕悬停冻结驻留，提供快捷 +1 回复。
 *   2) 评论区：聊天区弹幕悬停显示 +1 / 复制按钮。
 *   3) 小尾巴：发送弹幕时自动在末尾追加自定义文字。
 *   4) 一键点赞：连续点赞 30 次点亮粉丝团灯牌。
 */

(function () {
  'use strict';

  // ---------- 主题调色板 ----------
  const THEMES = {
    blue: {
      name: '蓝色',
      primary: '#00AEEC',         // 主色：开关/按钮/标题渐变起点
      primaryEnd: '#5cc8ff',      // 主色渐变终点
      primaryRgb: '0,174,236',
      highlight: 'rgba(0,174,236,0.18)',   // 弹幕悬停高亮
      primaryShadow: 'rgba(0,174,236,0.25)',
      feedbackShadow: 'rgba(0,174,236,0.4)',
      accent: '#fb7299',          // 30连击按钮
      accentEnd: '#ff9ab2',
      accentGradient: 'linear-gradient(90deg,#fb7299 0%,#ff9ab2 100%)',
      titleGradient: 'linear-gradient(90deg,#00AEEC 0%,#5cc8ff 100%)',
      feedbackGradient: 'linear-gradient(135deg,#00AEEC,#5cc8ff)',
    },
    pink: {
      name: '粉色',
      primary: '#FB7299',         // B站粉
      primaryEnd: '#FFA3BC',      // 浅粉
      primaryRgb: '251,114,153',
      highlight: 'rgba(251,114,153,0.18)',
      primaryShadow: 'rgba(251,114,153,0.28)',
      feedbackShadow: 'rgba(251,114,153,0.45)',
      accent: '#1E88E5',          // 蓝系互补强调色
      accentEnd: '#5cc8ff',
      accentGradient: 'linear-gradient(90deg,#1E88E5 0%,#5cc8ff 100%)',
      titleGradient: 'linear-gradient(90deg,#FB7299 0%,#FFA3BC 100%)',
      feedbackGradient: 'linear-gradient(135deg,#FB7299,#FFA3BC)',
    },
  };

  // ---------- 折叠态圆形按钮配色 ----------
  // 折叠时面板整体变为粉色圆形 FAB：固定使用品牌粉 #FB7299，不随 blue/pink 主题切换。
  const COLLAPSED_BTN_SIZE = 56;
  const COLLAPSED_BTN_BG = '#FB7299';
  const COLLAPSED_BTN_BG_HOVER = '#E8628D';
  const COLLAPSED_BTN_SHADOW = '0 4px 12px rgba(251,114,153,0.35)';
  const COLLAPSED_BTN_SHADOW_HOVER = '0 6px 16px rgba(251,114,153,0.5)';

  // ---------- 默认设置 ----------
  const DEFAULT_CFG = {
    tailEnabled: true,         // 小尾巴开关
    tailText: '喵',            // 小尾巴文本
    plusOneEnabled: true,      // 聊天区 +1 功能开关
    floatDmPlus: true,         // 漂浮弹幕 +1 功能开关
    copyEnabled: true,         // 复制按钮开关
    panelCollapsed: false,     // 侧边菜单折叠
    panelPos: null,            // 拖拽后的面板位置 {left,top}，null 表示未拖拽过，使用默认+避让
    theme: 'blue',             // 主题 'blue' | 'pink'
  };

  function loadCfg() {
    try {
      const raw = GM_getValue('bilivex_cfg');
      if (!raw) return { ...DEFAULT_CFG };
      const obj = JSON.parse(raw);
      // 缺失 theme 时默认为 blue
      if (!obj.theme || (obj.theme !== 'blue' && obj.theme !== 'pink')) obj.theme = 'blue';
      return { ...DEFAULT_CFG, ...obj };
    } catch (e) {
      return { ...DEFAULT_CFG };
    }
  }

  function saveCfg(cfg) {
    try { GM_setValue('bilivex_cfg', JSON.stringify(cfg)); } catch (e) {}
  }

  let cfg = loadCfg();
  // 当前主题色板
  let currentTheme = THEMES[cfg.theme] || THEMES.blue;

  // ---------- 工具函数 ----------
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function setReactLikeValue(el, value) {
    const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    if (desc && desc.set) desc.set.call(el, value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function findChatInput() {
    const ta = document.querySelector('textarea.chat-input.border-box');
    if (ta) return ta;
    // 兜底：在聊天控制面板内找 textarea
    const ctl = document.querySelector('.chat-control-panel');
    if (ctl) {
      const t2 = ctl.querySelector('textarea');
      if (t2) return t2;
    }
    return null;
  }

  function findSendBtn() {
    const btn = document.querySelector('button.send-btn');
    if (btn) return btn;
    const ctl = document.querySelector('.chat-control-panel');
    if (ctl) return ctl.querySelector('button');
    return null;
  }

  // 填入并尝试发送。返回结果状态：'sent' | 'filled' | 'no-input'
  function fillAndSend(text, opts) {
    opts = opts || {};
    const ta = findChatInput();
    if (!ta) return { status: 'no-input', message: '未找到聊天输入框（可能未登录）' };
    // 触发聚焦，便于用户看到输入
    try { ta.focus(); } catch (e) {}
    setReactLikeValue(ta, text);
    // 小尾巴补齐：若启用，input 事件已触发，再确保文本以尾巴结尾
    if (cfg.tailEnabled && cfg.tailText && !text.endsWith(cfg.tailText)) {
      // 二次写入带尾巴（仅在文本未带尾巴时）
      const next = text + cfg.tailText;
      setReactLikeValue(ta, next);
    }
    if (opts.autoSend === false) return { status: 'filled' };
    // 模拟 Enter 键发送
    try {
      const ev = new KeyboardEvent('keydown', {
        key: 'Enter', code: 'Enter', keyCode: 13, which: 13,
        bubbles: true, cancelable: true,
      });
      ta.dispatchEvent(ev);
    } catch (e) {}
    // 兜底：点击发送按钮
    const btn = findSendBtn();
    if (btn && !btn.disabled) {
      try { btn.click(); } catch (e) {}
    }
    return { status: 'sent' };
  }

  // ---------- 主题应用 ----------
  function applyTheme() {
    currentTheme = THEMES[cfg.theme] || THEMES.blue;

    // 1. 面板标题渐变 + 阴影（折叠态固定粉色圆形按钮，不随主题切换）
    const panel = document.getElementById('bilivex-panel');
    if (panel) {
      const head = panel.firstElementChild;
      if (cfg.panelCollapsed) {
        if (head) head.style.background = COLLAPSED_BTN_BG;
        panel.style.boxShadow = COLLAPSED_BTN_SHADOW;
      } else {
        if (head) head.style.background = currentTheme.titleGradient;
        panel.style.boxShadow = '0 4px 16px ' + currentTheme.primaryShadow;
      }
    }

    // 2. 面板内所有开关（label/span 结构）按当前 checked 状态重染
    $$('#bilivex-panel label').forEach((lab) => {
      const inp = lab.querySelector('input[type=checkbox]');
      const slider = lab.querySelector('span');
      if (inp && slider) {
        slider.style.background = inp.checked ? currentTheme.primary : '#cfd5db';
      }
    });

    // 3. 主题选择按钮组的高亮
    $$('[data-bilivex-theme]').forEach((b) => {
      const isActive = b.dataset.bilivexTheme === cfg.theme;
      b.style.background = isActive ? currentTheme.primary : '#fff';
      b.style.color = isActive ? '#fff' : '#666';
      b.style.borderColor = isActive ? currentTheme.primary : '#e0e6ed';
    });

    // 4. 30连击按钮（accent 互补色）
    $$('#bilivex-panel button[data-bilivex-like="1"]').forEach((b) => {
      b.style.background = currentTheme.accentGradient;
    });

    // 5. 聊天区已悬浮弹幕上的 +1 按钮（ensureDanmakuOverlay 创建）
    $$('.bilivex-dm-btn').forEach((b) => {
      if (b.dataset.bilivexAction === 'plus1') {
        b.style.background = currentTheme.primary;
      }
    });

    // 6. 漂浮弹幕已绑定的 +1 按钮（ensureFloatingDmOverlay 创建）
    $$('.bilivex-float-plus-btn').forEach((b) => {
      b.style.background = currentTheme.primary;
      b.style.boxShadow = '0 2px 6px ' + currentTheme.primaryShadow;
    });

    // 7. 弹幕悬停高亮背景 + 细边框：仅刷新仍处于 hover 状态的弹幕（即 backgroundColor 非空）
    $$('.chat-item.danmaku-item').forEach((item) => {
      if (item.style.backgroundColor) {
        item.style.backgroundColor = currentTheme.highlight;
        // 同步刷新悬停细边框颜色（inset box-shadow，不影响布局）
        item.style.boxShadow = 'inset 0 0 0 1px ' + currentTheme.primary;
      }
    });

    // 8. 重新注入 keyframes 渐变（下次反馈动画使用新色）
    bilivexAnimInjected = false;
    injectFloatingDmAnim();
  }

  // ---------- 聊天区弹幕悬停按钮 ----------
  // 通过在每条弹幕上添加悬浮操作按钮实现 +1 / 复制

  function ensureDanmakuOverlay(item) {
    if (!item || item.dataset.bilivexInited) return;
    if (!item.classList.contains('danmaku-item')) return;
    item.dataset.bilivexInited = '1';
    item.style.position = item.style.position || 'relative';
    // 操作按钮容器：置于弹幕行右侧垂直居中（right:4px + top:50% + translateY(-50%)），
    const bar = document.createElement('div');
    bar.className = 'bilivex-dm-bar';
    bar.style.cssText = 'position:absolute;right:4px;top:50%;transform:translateY(-50%);' +
      'display:none;gap:6px;z-index:10;pointer-events:auto;align-items:center;';
    const mkBtn = (label, bg) => {
      const b = document.createElement('button');
      b.textContent = label;
      b.className = 'bilivex-dm-btn';
      if (label === '+1') b.dataset.bilivexAction = 'plus1';
      // 按钮增大（padding:5px 14px / font-size:14px / border-radius:12px），
      // line-height:18px 保持总高约 28px，适配弹幕行高不撑破布局；mousedown 按压反馈
      b.style.cssText = 'border:none;border-radius:12px;padding:5px 14px;cursor:pointer;' +
        `background:${bg};color:#fff;font-size:14px;line-height:18px;font-weight:600;` +
        'white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,0.25);' +
        'transition:transform .1s ease,filter .1s ease;';
      b.addEventListener('mousedown', () => { b.style.transform = 'scale(0.95)'; });
      b.addEventListener('mouseup', () => { b.style.transform = ''; });
      b.addEventListener('mouseleave', () => { b.style.transform = ''; });
      return b;
    };
    const plusBtn = mkBtn('+1', currentTheme.primary);
    const copyBtn = mkBtn('复制', 'rgba(0,0,0,0.55)');
    if (cfg.plusOneEnabled) bar.appendChild(plusBtn);
    if (cfg.copyEnabled) bar.appendChild(copyBtn);
    item.appendChild(bar);

    const text = item.dataset.danmaku || (item.querySelector('.danmaku-item-right') || {}).textContent || '';
    plusBtn.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      const r = fillAndSend(text);
      showToast(r.message || (r.status === 'sent' ? '已发送' : '已填入，请按回车'));
    });
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      copyToClipboard(text);
      showToast('已复制');
    });

    let hoverTimer = null;
    item._bilivexOnEnter = () => {
      clearTimeout(hoverTimer);
      bar.style.display = 'flex';
      // 弹幕高亮：背景 + 主题色细边框（inset box-shadow，不影响布局/行高跳动）
      item.style.backgroundColor = currentTheme.highlight;
      item.style.boxShadow = 'inset 0 0 0 1px ' + currentTheme.primary;
    };
    item._bilivexOnLeave = () => {
      hoverTimer = setTimeout(() => {
        bar.style.display = 'none';
        item.style.backgroundColor = '';
        item.style.boxShadow = '';
      }, 80);
    };
    item._bilivexCleanup = () => {
      clearTimeout(hoverTimer);
      item._bilivexOnEnter = null;
      item._bilivexOnLeave = null;
      item._bilivexCleanup = null;
    };
  }

  let boundChatList = null;
  function attachDanmakuHover(list) {
    if (!list) return;
    if (list.dataset.bilivexHoverBound) { boundChatList = list; return; }
    list.dataset.bilivexHoverBound = '1';
    boundChatList = list;
    const refresh = () => {
      $$('.chat-item.danmaku-item', list).forEach(ensureDanmakuOverlay);
    };
    refresh();
    const mo = new MutationObserver(() => refresh());
    mo.observe(list, { childList: true, subtree: true });
    list._bilivexHoverMO = mo;

    const findDmItem = (e) => {
      let n = e.target;
      while (n && n !== list) {
        if (n.classList && n.classList.contains('chat-item') && n.classList.contains('danmaku-item')) return n;
        n = n.parentElement;
      }
      return null;
    };
    $$('.chat-item.danmaku-item[data-bilivex-inited="1"]', list).forEach((item) => {
      if (typeof item._bilivexOnEnter === 'function') return;
      const oldBar = item.querySelector('.bilivex-dm-bar');
      if (oldBar) oldBar.remove();
      item.style.backgroundColor = '';
      item.style.boxShadow = '';
      delete item.dataset.bilivexInited;
      ensureDanmakuOverlay(item);
    });
    let currentItem = null;
    list.addEventListener('mouseover', (e) => {
      const item = findDmItem(e);
      if (!item) return;
      if (!item.dataset.bilivexInited) ensureDanmakuOverlay(item);
      // 若鼠标移到 bar 按钮上（已经是 currentItem 的子元素），不要重置
      if (currentItem === item) return;
      // 上一个 hover 项触发 onLeave
      if (currentItem && currentItem._bilivexOnLeave) currentItem._bilivexOnLeave();
      currentItem = item;
      if (item._bilivexOnEnter) item._bilivexOnEnter();
    });
    list.addEventListener('mouseout', (e) => {
      if (!currentItem) return;
      // 若鼠标移到 currentItem 的子元素（如按钮），不触发 onLeave
      const related = e.relatedTarget;
      if (related && currentItem.contains(related)) return;
      if (currentItem._bilivexOnLeave) currentItem._bilivexOnLeave();
      currentItem = null;
    });
    list._bilivexCleanup = () => {
      if (list._bilivexHoverMO) { list._bilivexHoverMO.disconnect(); list._bilivexHoverMO = null; }
      delete list._bilivexCleanup;
    };
  }

  // ---------- 漂浮弹幕悬停 +1 ----------

  // 漂浮弹幕容器就绪检测
  function findFloatingDmContainer() {
    const rots = document.querySelectorAll('body .bili-danmaku-x-dm-rotate');
    for (const r of rots) {
      if (r.querySelector('.bili-danmaku-x-dm')) return r;
    }
    const ctrs = document.querySelectorAll('body .danmaku-item-container');
    for (const c of ctrs) {
      if (c.querySelector('.bili-danmaku-x-dm')) return c;
    }
    return rots[0] || ctrs[0] || document.querySelector('body .web-player-danmaku');
  }

  let residentLayer = null;
  function getUiHost() {
    return (document.fullscreenElement && document.fullscreenElement.nodeType === 1) ? document.fullscreenElement : document.body;
  }
  function getResidentLayer() {
    if (residentLayer && document.body.contains(residentLayer)) return residentLayer;
    residentLayer = document.createElement('div');
    residentLayer.id = 'bilivex-dm-resident';
    residentLayer.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100vh;' +
      'pointer-events:none;overflow:hidden;z-index:2147483000;';
    getUiHost().appendChild(residentLayer);
    return residentLayer;
  }

  function syncFullscreenUi() {
    try {
      const host = getUiHost();
      ['bilivex-panel', 'bilivex-dm-resident', 'bilivex-toast'].forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.parentNode !== host) host.appendChild(el);
      });
    } catch (e) {}
  }

  // 返回「直播间画面」可视区边界（viewport 坐标）
  function getPlayerRect() {
    try {
      const ctr = document.querySelector('.danmaku-item-container') || document.querySelector('.web-player-danmaku');
      if (ctr) {
        const r = ctr.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
      }
      const p = document.getElementById('live-player');
      if (p) {
        const r = p.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
      }
    } catch (e) {}
    return null;
  }

  function extractFloatingDmText(item) {
    if (!item) return '';
    const textSpan = item.querySelector('.bili-danmaku-x-text');
    if (textSpan) {
      // 排除前后可能混入的图标 alt / 空文本
      const t = (textSpan.textContent || '').trim();
      if (t) return t;
    }
    try {
      const clone = item.cloneNode(true);
      clone.querySelectorAll('.bilivex-float-plus-btn').forEach((b) => b.remove());
      return (clone.textContent || '').trim();
    } catch (e) {
      let t = (item.textContent || '').trim();
      item.querySelectorAll('.bilivex-float-plus-btn').forEach((b) => {
        if (b.textContent) t = t.replace(b.textContent, '').trim();
      });
      return t;
    }
  }

  // 视觉反馈动画：点击 +1 后在弹幕位置弹出 "✓ 已 +1" 浮字动画
  function showFloatingPlusFeedback(item) {
    if (!item || !item.isConnected) return;
    const rect = item.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;
    const fb = document.createElement('div');
    fb.className = 'bilivex-float-plus-fb';
    fb.textContent = '✓ +1';
    fb.style.cssText = 'position:fixed;' +
      'left:' + (rect.left + rect.width / 2) + 'px;' +
      'top:' + (rect.top + rect.height / 2) + 'px;' +
      'transform:translate(-50%,-50%);' +
      `background:${currentTheme.feedbackGradient};` +
      'color:#fff;font-weight:700;font-size:14px;line-height:1;' +
      'padding:6px 12px;border-radius:14px;' +
      `box-shadow:0 4px 12px ${currentTheme.feedbackShadow};` +
      'pointer-events:none;z-index:2147483647;' +
      'animation:bilivex-float-plus 1s ease-out forwards;';
    getUiHost().appendChild(fb);
    // 动画结束后自动清理（避免页面堆积）
    setTimeout(() => { if (fb.parentNode) fb.parentNode.removeChild(fb); }, 1100);
  }

  function isDmPartiallyOutside(rect, prect) {
    if (!prect) return false;
    return (rect.right > prect.right + 20);
  }

  function createEdgePlusBtn(item, rect, prect) {
    try {
      const btn = document.createElement('button');
      btn.className = 'bilivex-float-plus-btn bilivex-float-edge-btn';
      btn.type = 'button';
      btn.textContent = '+1';
      btn.dataset.bilivexAction = 'plus1';
      const btnW = 48, btnH = 28, gap = 8;
      const left = prect.right - btnW - gap;
      const top = Math.min(Math.max(rect.top, prect.top), Math.max(prect.top, prect.bottom - btnH - 4));
      btn.style.cssText = 'position:fixed;left:' + left + 'px;top:' + top + 'px;' +
        `background:${currentTheme.primary};color:#fff;border:none;border-radius:12px;` +
        'padding:5px 14px;font-size:14px;line-height:18px;font-weight:600;' +
        'cursor:pointer;z-index:2147483001;pointer-events:auto;' +
        'box-shadow:0 1px 4px rgba(0,0,0,0.25);user-select:none;white-space:nowrap;';
      btn.addEventListener('mousedown', (e) => { e.stopPropagation(); });
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); e.preventDefault();
        const t = extractFloatingDmText(item);
        if (!t) { showToast('该弹幕无文本内容'); return; }
        const rr = fillAndSend(t);
        showFloatingPlusFeedback(btn);
        showToast(rr.message || (rr.status === 'sent' ? '已发送' : '已填入，请按回车'));
      });
      btn._bilivexFloatOnLeave = () => { try { if (btn.isConnected) btn.remove(); } catch (e) {} };
      getResidentLayer().appendChild(btn);
      return btn;
    } catch (e) { return null; }
  }

  // 增强单条漂浮弹幕：添加悬停 +1 按钮
  function ensureFloatingDmOverlay(item) {
    if (!item) return;
    if (!item.classList.contains('bili-danmaku-x-dm')) return;
    if (item.dataset.bilivexFloatInited) return;
    // 跳过被 B 站标记为禁用的弹幕
    if (item.classList.contains('bili-danmaku-x-disable')) return;
    item.dataset.bilivexFloatInited = '1';

    item.style.pointerEvents = 'auto';

    const r0 = item.getBoundingClientRect();
    if (r0.width === 0 || r0.height === 0) {
      item.style.minWidth = '60px';
      item.style.minHeight = '30px';
    }


    const btn = document.createElement('button');
    btn.className = 'bilivex-float-plus-btn';
    btn.type = 'button';
    btn.textContent = '+1';
    btn.dataset.bilivexAction = 'plus1';
    btn.style.cssText = 'position:absolute;left:50%;top:100%;transform:translateX(-50%);margin-top:6px;' +
      `background:${currentTheme.primary};color:#fff;border:none;border-radius:12px;` +
      'padding:5px 14px;font-size:14px;line-height:18px;font-weight:600;' +
      'cursor:pointer;z-index:10;pointer-events:auto;' +
      `box-shadow:0 1px 4px rgba(0,0,0,0.25);` +
      'display:none;user-select:none;white-space:nowrap;' +
      'transition:transform .1s ease,filter .1s ease;';
    btn.addEventListener('mousedown', (e) => { e.stopPropagation(); });
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      if (btn.dataset.bilivexBusy === '1') return;
      btn.dataset.bilivexBusy = '1';
      const liveText = extractFloatingDmText(item);
      if (!liveText) {
        showToast('该弹幕无文本内容');
        setTimeout(() => { btn.dataset.bilivexBusy = ''; }, 300);
        return;
      }
      const r = fillAndSend(liveText);
      // 视觉反馈：弹出 ✓ +1 动效
      showFloatingPlusFeedback(item);
      showToast(r.message || (r.status === 'sent' ? '已发送' : '已填入，请按回车'));
      setTimeout(() => { btn.dataset.bilivexBusy = ''; }, 300);
    });

    const onEnter = () => {
      if (!cfg.floatDmPlus) return null;
      try {
        if (item.dataset.bilivexResident === '1') return item;
        let origOpacity = '';
        try {
          const opVar = item.style.getPropertyValue('--opacity');
          if (opVar) {
            origOpacity = opVar;
          } else {
            const cs = getComputedStyle(item);
            const o = parseFloat(cs.opacity);
            origOpacity = (!isNaN(o) && o > 0) ? cs.opacity : '1';
          }
        } catch (e) { origOpacity = '1'; }
        if (!origOpacity) origOpacity = '1';
        let progress = 0;
        try {
          const anims = item.getAnimations();
          if (anims.length && anims[0].currentTime != null) progress = anims[0].currentTime;
        } catch (e) {}
        if (item.dataset && item.dataset.bilivexContinued === '1' && item._bilivexAnimProgress) {
          progress = (item._bilivexAnimProgress || 0) + progress;
        }
        const rect = item.getBoundingClientRect();
        try {
          const prectG = getPlayerRect();
          if (prectG && isDmPartiallyOutside(rect, prectG)) {
            return createEdgePlusBtn(item, rect, prectG);
          }
        } catch (e) {}
        const origParent = item.parentNode;
        const hoverId = String(Date.now()) + '-' + Math.random().toString(36).slice(2, 8);
        item.dataset.bilivexHoverPaused = hoverId;
        item._bilivexHoverId = hoverId;
        item._bilivexOrigParent = origParent;
        item._bilivexAnimProgress = progress;
        const clone = item.cloneNode(true);
        const oldBtn = clone.querySelector('.bilivex-float-plus-btn');
        if (oldBtn) oldBtn.remove();
        clone.dataset.bilivexResident = '1';
        clone._bilivexHoverId = hoverId;
        clone._bilivexAnimProgress = progress;
        clone._bilivexOrigParent = origParent;
        try {
          const fromCs = getComputedStyle(item);
          const toCs = getComputedStyle(clone);
          const vars = new Set();
          try { for (let i = 0; i < fromCs.length; i++) { const p = fromCs.item(i); if (p && p.charCodeAt(0) === 45 /*'-'*/) vars.add(p); } } catch (e3) {}
          ['--opacity','--fontSize','--scale','--translateX','--translateY','--translateZ','--duration','--offset','--fontWeight','--fontFamily','--color','--textShadow','--size','--top','--left','--bottom','--right','--width','--height','--precise-distance','--wrap-width','--fireIndex','--fireWidth','--top-show','--bottom-show','--left-show','--right-show'].forEach((v) => vars.add(v));
          vars.forEach((v) => {
            try {
              const fv = fromCs.getPropertyValue(v);
              const tv = toCs.getPropertyValue(v);
              if (fv !== '' && fv !== tv) clone.style.setProperty(v, fv);
            } catch (e3) {}
          });
        } catch (e2) {}
        item.classList.add('bili-danmaku-x-paused');
        item.style.visibility = 'hidden';
        clone.style.animation = 'none';
        clone.style.animationDelay = '';
        let cloneLeft = rect.left;
        let cloneTop = rect.top;
        try {
          const prect = getPlayerRect();
          if (prect) {
            const cw = rect.width || 0, ch = rect.height || 0;
            cloneLeft = Math.min(Math.max(rect.left, prect.left), Math.max(prect.left, prect.right - cw));
            cloneTop = Math.min(Math.max(rect.top, prect.top), Math.max(prect.top, prect.bottom - ch));
          }
        } catch (e) {}
        clone.style.position = 'fixed';
        clone.style.left = cloneLeft + 'px';
        clone.style.top = cloneTop + 'px';
        clone.style.margin = '0';
        clone.style.zIndex = '9999';
        clone.style.pointerEvents = 'auto';
        clone.style.visibility = '';
        clone.style.opacity = origOpacity;
        // 冻结 + 高亮 + 细边框
        clone.classList.add('bili-danmaku-x-paused');
        clone.style.backgroundColor = currentTheme.highlight;
        clone.style.boxShadow = 'inset 0 0 0 1px ' + currentTheme.primary;
        // 3) +1 按钮
        const cBtn = document.createElement('button');
        cBtn.className = 'bilivex-float-plus-btn';
        cBtn.type = 'button';
        cBtn.textContent = '+1';
        cBtn.dataset.bilivexAction = 'plus1';
        cBtn.style.cssText = 'position:absolute;left:50%;top:100%;transform:translateX(-50%);margin-top:6px;' +
          `background:${currentTheme.primary};color:#fff;border:none;border-radius:12px;` +
          'padding:5px 14px;font-size:14px;line-height:18px;font-weight:600;' +
          'cursor:pointer;z-index:10;pointer-events:auto;' +
          'box-shadow:0 1px 4px rgba(0,0,0,0.25);display:inline-block;user-select:none;white-space:nowrap;';
        cBtn.addEventListener('mousedown', (e) => { e.stopPropagation(); });
        cBtn.addEventListener('click', (e) => {
          e.stopPropagation(); e.preventDefault();
          const t = extractFloatingDmText(clone);
          if (!t) { showToast('该弹幕无文本内容'); return; }
          const rr = fillAndSend(t);
          showFloatingPlusFeedback(clone);
          showToast(rr.message || (rr.status === 'sent' ? '已发送' : '已填入，请按回车'));
        });
        clone.appendChild(cBtn);
        getResidentLayer().appendChild(clone);
        // +1 按钮置于弹幕正下方（水平居中、不遮挡弹幕文字）
        try {
          const prect = getPlayerRect();
          if (prect) {
            requestAnimationFrame(() => {
              try {
                if (!cBtn.isConnected) return;
                const br = cBtn.getBoundingClientRect();
                if (br.width === 0 || br.height === 0) return;
                if (br.bottom > prect.bottom - 2) {
                  const cr = clone.getBoundingClientRect();
                  const targetTop = prect.bottom - br.height - 4;
                  cBtn.style.top = (targetTop - cr.top) + 'px';
                }
              } catch (e2) {}
            });
          }
        } catch (e2) {}
        clone._bilivexFloatOnLeave = () => {
          try {
            const isContOriginal = !!(item && item.dataset && item.dataset.bilivexContinued === '1');
            cBtn.style.display = 'none';
            clone.style.backgroundColor = '';
            clone.style.boxShadow = '';
            clone.style.zIndex = '';
            if (!isContOriginal) {
              try {
                if (item && item.isConnected && item.dataset.bilivexHoverPaused === (clone._bilivexHoverId || '')) {
                  let dMs = 0;
                  try { dMs = (parseFloat(getComputedStyle(item).animationDuration) || 0) * 1000; } catch (e2) {}
                  const delay = Math.max(0, dMs - (clone._bilivexAnimProgress || 0)) + 1500;
                  const earlyTimer = setInterval(() => {
                    try {
                      if (!item || !item.isConnected) { clearInterval(earlyTimer); return; }
                      if (item.dataset.bilivexHoverPaused !== (clone._bilivexHoverId || '')) { clearInterval(earlyTimer); return; }
                      const stillPaused = item.classList.contains('bili-danmaku-x-paused');
                      const stillHidden = getComputedStyle(item).visibility === 'hidden';
                      if (!stillPaused || !stillHidden) {
                        delete item.dataset.bilivexHoverPaused;
                        clearInterval(earlyTimer);
                      }
                    } catch (e3) { clearInterval(earlyTimer); }
                  }, 250);
                  setTimeout(() => {
                    clearInterval(earlyTimer);
                    try {
                      if (item && item.isConnected && item.dataset.bilivexHoverPaused === (clone._bilivexHoverId || '')) {
                        if (item.classList.contains('bili-danmaku-x-roll')) {
                          item.classList.remove('bili-danmaku-x-paused');
                          item.style.visibility = '';
                        }
                        delete item.dataset.bilivexHoverPaused;
                      }
                    } catch (e3) {}
                  }, delay);
                }
              } catch (e2) {}
            }
            clone.classList.remove('bili-danmaku-x-paused');
            clone.dataset.bilivexResident = '';
            let op = clone._bilivexOrigParent;
            if (!op || !op.isConnected) {
              try { op = findFloatingDmContainer(); } catch (e2) {}
            }
            if (op && op.isConnected) {
              const cloneRect = clone.getBoundingClientRect();
              const opRect = op.getBoundingClientRect();
              const progress = clone._bilivexAnimProgress || 0;
              clone.style.animation = '';
              clone.style.animationDelay = '';
              let durMs = 0, txVal = 0;
              try {
                const cs = getComputedStyle(clone);
                durMs = parseFloat(cs.animationDuration) * 1000 || 0;
                const tx = cs.getPropertyValue('--translateX');
                const m = tx && tx.match(/(-?[\d.]+)/);
                if (m) txVal = Math.abs(parseFloat(m[1]));
              } catch (e2) {}
              clone.style.position = 'absolute';
              clone.style.left = (cloneRect.left - opRect.left) + 'px';
              clone.style.top = (cloneRect.top - opRect.top) + 'px';
              clone.style.margin = '0';
              clone.dataset.bilivexContinued = '1';
              op.appendChild(clone);
              if (durMs > 0 && txVal > 0 && progress > 0 && progress < durMs) {
                const remainingMs = durMs - progress;
                const remainingDist = txVal * (remainingMs / durMs);
                try {
                  clone.style.animation = 'none';
                  const wa = clone.animate(
                    [{ transform: 'translateX(0)' }, { transform: 'translateX(-' + remainingDist + 'px)' }],
                    { duration: remainingMs, fill: 'forwards', easing: 'linear' },
                  );
                  const fin = () => { try { if (clone.isConnected) clone.remove(); } catch (e2) {} };
                  wa.onfinish = fin;
                  wa.oncancel = fin;
                  setTimeout(fin, remainingMs + 1000);
                } catch (e2) {
                  clone.style.animation = 'none';
                  void clone.offsetWidth;
                  clone.style.animation = '';
                  if (progress > 0 && durMs > 0) {
                    clone.style.animationDelay = '-' + Math.min(progress, durMs) + 'ms';
                    const anims = clone.getAnimations();
                    if (anims.length) { try { anims[0].currentTime = progress; } catch (e3) {} }
                  }
                  const fin = () => { try { if (clone.isConnected) clone.remove(); } catch (e3) {} };
                  clone.addEventListener('animationend', fin, { once: true });
                  setTimeout(fin, 15000);
                }
              } else {
                clone.style.animation = 'none';
                void clone.offsetWidth;
                clone.style.animation = '';
                if (progress > 0 && durMs > 0) {
                  clone.style.animationDelay = '-' + Math.min(progress, durMs) + 'ms';
                  const anims = clone.getAnimations();
                  if (anims.length) { try { anims[0].currentTime = progress; } catch (e2) {} }
                }
                const fin = () => { try { if (clone.isConnected) clone.remove(); } catch (e3) {} };
                clone.addEventListener('animationend', fin, { once: true });
                setTimeout(fin, 15000);
              }
            }
            clone._bilivexFloatOnLeave = null;
            try {
              delete clone.dataset.bilivexHoverPaused;
              delete clone.dataset.bilivexFloatInited;
              ensureFloatingDmOverlay(clone);
            } catch (e2) {}
            if (isContOriginal) {
              try { if (item && item.isConnected) item.remove(); } catch (e2) {}
            }
          } catch (e5) {}
        };
        return clone;
      } catch (e) { return null; }
    };
    const onLeave = () => {
      try {
        item.classList.remove('bili-danmaku-x-paused');
        item.style.visibility = '';
      } catch (e) {}
    };

    try {
      item._bilivexFloatOnEnter = onEnter;
      item._bilivexFloatOnLeave = onLeave;
    } catch (e) {}

    item._bilivexFloatCleanup = () => {
      if (btn.parentNode) btn.parentNode.removeChild(btn);
      item.classList.remove('bili-danmaku-x-paused');
      item.style.backgroundColor = '';
      item.style.boxShadow = '';
      item.style.zIndex = '';
      try {
        item.classList.remove('bili-danmaku-x-paused');
        item.style.visibility = '';
      } catch (e) {}
      try {
        if (item.dataset && item.dataset.bilivexResident === '1' && item._bilivexOrigParent && item._bilivexOrigParent.isConnected) {
          item._bilivexOrigParent.appendChild(item);
          delete item.dataset.bilivexResident;
          item.style.position = '';
          item.style.left = '';
          item.style.top = '';
          item.style.margin = '';
        }
      } catch (e) {}
      item._bilivexFloatCleanup = null;
      item._bilivexFloatOnEnter = null;
      item._bilivexFloatOnLeave = null;
      item._bilivexOrigParent = null;
      item._bilivexAnimProgress = null;
      item._bilivexHoverId = null;
      try { delete item.dataset.bilivexHoverPaused; } catch (e) {}
    };
  }

  function isBilivexReleasingDm(d) {
    if (!d) return false;
    try {
      if (!(d.dataset && d.dataset.bilivexHoverPaused)) return false;
      if (!(d.classList && d.classList.contains('bili-danmaku-x-paused'))) return false;
      if (getComputedStyle(d).visibility !== 'hidden') return false;
      return true;
    } catch (e) {}
    return false;
  }

  // ==================== 全局几何悬停引擎 ====================
  const FloatingDmEngine = {
    hovered: null,       // 当前悬停弹幕
    px: -1, py: -1,      // 最近指针坐标
    rafId: 0,
    bound: false,        // 全局监听只绑一次
    keepTimer: null,
    _lastMoveTs: 0,      // 上一次 pointermove 时间戳（用于速度计算）
    _lastVelocity: 0,    // 上一次 pointermove 瞬时速度（px/ms），快速滑移判定
    _cand: null,         // 当前帧的悬停候选弹幕
    _candHits: 0,        // 候选命中帧计数
    _candMiss: 0,        // 候选 miss 计数
    _followRaf: 0,

    start() {
      if (this.bound) return;
      this.bound = true;
      const onMove = (e) => {
        const now = Date.now();
        const prevPx = this.px, prevPy = this.py, prevTs = this._lastMoveTs;
        this.px = e.clientX; this.py = e.clientY;
        this._lastMoveTs = now;
        if (prevPx >= 0 && prevPy >= 0 && prevTs > 0) {
          const dt = Math.max(1, now - prevTs);
          const dx = this.px - prevPx, dy = this.py - prevPy;
          this._lastVelocity = Math.sqrt(dx * dx + dy * dy) / dt;
        } else {
          this._lastVelocity = 0;
        }
        if (this.rafId) return;
        this.rafId = requestAnimationFrame(() => { this.rafId = 0; this.check(); });
      };
      document.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('mousemove', onMove, { passive: true });
      // 兜底：鼠标离开窗口时清除悬停
      const onLeaveWin = () => { if (this.hovered) this.leave(this.hovered); };
      document.addEventListener('pointerleave', onLeaveWin);
      document.addEventListener('mouseleave', onLeaveWin);

      const onAnimEndBlock = (e) => {
        const cur = this.hovered;
        if (!cur) return;
        if (!cur.classList.contains('bili-danmaku-x-paused')) return;
        const t = e.target;
        if (t === cur || (t && t.nodeType === 1 && cur.contains(t))) {
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      };
      window.addEventListener('animationend', onAnimEndBlock, true);
      window.addEventListener('animationcancel', onAnimEndBlock, true);
    },

    getBodyRect(item) {
      const r = item.getBoundingClientRect();
      return { l: r.left - 6, r: r.right + 6, t: r.top - 6, b: r.bottom + 6 };
    },
    getHotRect(item) {
      const r = item.getBoundingClientRect();
      return { l: r.left - 6, r: r.right + 20, t: r.top - 6, b: r.bottom + 60 };
    },

    // 向上找最近的弹幕节点
    findDm(el) {
      let n = el;
      while (n && n !== document.body) {
        if (n.classList && n.classList.contains('bili-danmaku-x-dm')) return n;
        n = n.parentElement;
      }
      return null;
    },

    _computeCandidate(px, py) {
      try {
        const el = document.elementFromPoint(px, py);
        const item = el ? this.findDm(el) : null;
        if (item && !item.classList.contains('bili-danmaku-x-disable') && !isBilivexReleasingDm(item)) {
          if (!item.dataset.bilivexFloatInited) ensureFloatingDmOverlay(item);
          if (typeof item._bilivexFloatOnEnter === 'function') return item;
        }
      } catch (e) {}
      const container = findFloatingDmContainer();
      if (container) {
        const dms = container.querySelectorAll('.bili-danmaku-x-dm');
        for (const d of dms) {
          if (d.classList.contains('bili-danmaku-x-disable')) continue;
          if (isBilivexReleasingDm(d)) continue;
          let r = d.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) {
            if (!d.dataset.bilivexFloatInited) ensureFloatingDmOverlay(d);
            r = d.getBoundingClientRect();
          }
          if (r.width === 0 || r.height === 0) continue;
          if (d.dataset.bilivexFloatInited === '1') {
            try { if (getComputedStyle(d).pointerEvents !== 'none') continue; } catch (e) { continue; }
          }
          if (px >= r.left - 6 && px <= r.right + 6 && py >= r.top - 6 && py <= r.bottom + 6) {
            if (!d.dataset.bilivexFloatInited) ensureFloatingDmOverlay(d);
            if (typeof d._bilivexFloatOnEnter !== 'function') continue;
            return d;
          }
        }
      }
      return null;
    },

    check() {
      const { px, py } = this;
      const cur = this.hovered;
      const fastMove = (this._lastVelocity || 0) > 2.5;
      if (px >= 0 && py >= 0) {
        try {
          const topEl = document.elementFromPoint(px, py);
          if (topEl && topEl.closest && topEl.closest('#bilivex-panel, .bilivex-dm-bar')) {
            if (cur) this.leave(cur);
            this._cand = null;
            this._candHits = 0;
            this._candMiss = 0;
            return;
          }
        } catch (e) {}
      }
      if (cur && cur.isConnected) {
        const hr = this.getHotRect(cur);
        if (px >= hr.l && px <= hr.r && py >= hr.t && py <= hr.b) return;
      }
      if (cur) this.leave(cur);
      if (fastMove) { this._cand = null; this._candHits = 0; this._candMiss = 0; return; }
      const cand = this._computeCandidate(px, py);
      if (!cand) {
        if (this._cand) {
          this._candMiss = (this._candMiss || 0) + 1;
          if (this._candMiss <= 1) {
            if (!this._followRaf) {
              this._followRaf = requestAnimationFrame(() => { this._followRaf = 0; this.check(); });
            }
            return;
          }
        }
        this._cand = null; this._candHits = 0; this._candMiss = 0;
        return;
      }
      if (this._cand === cand) {
        this._candHits = (this._candHits || 0) + 1;
        this._candMiss = 0;
        if (this._candHits >= 2) {
          this._cand = null; this._candHits = 0; this._candMiss = 0;
          this.hover(cand);
          return;
        }
      } else if (!this._cand || (this._candMiss || 0) > 1) {
        this._cand = cand; this._candHits = 1; this._candMiss = 0;
      } else {
        this._candMiss = (this._candMiss || 0) + 1;
        if (this._candMiss > 1) {
          this._cand = cand; this._candHits = 1; this._candMiss = 0;
        }
      }
      if (!this._followRaf) {
        this._followRaf = requestAnimationFrame(() => { this._followRaf = 0; this.check(); });
      }
    },

    hover(item) {
      let visual = item;
      if (item._bilivexFloatOnEnter) {
        const ret = item._bilivexFloatOnEnter();
        if (ret) visual = ret;
      }
      this.hovered = visual;
      this.startKeepAlive();
    },

    leave(item) {
      if (item && item._bilivexFloatOnLeave) item._bilivexFloatOnLeave();
      this.hovered = null;
      this.stopKeepAlive();
    },

    startKeepAlive() {
      this.stopKeepAlive();
      this._keepRect = null;   // 悬停弹幕最近一次有效位置
      this.keepTimer = setInterval(() => this.keepAliveCheck(), 300);
    },
    stopKeepAlive() {
      if (this.keepTimer) { clearInterval(this.keepTimer); this.keepTimer = null; }
      this._keepRect = null;
    },
    keepAliveCheck() {
      const item = this.hovered;
      if (!item) { this.stopKeepAlive(); return; }
      if (item.isConnected) {
        try {
          const r = item.getBoundingClientRect();
          if (r.width > 0 && r.height > 0) {
            this._keepRect = { left: r.left, top: r.top, width: r.width, height: r.height };
          }
        } catch (e) {}
        return;
      }
      if (!(item.classList && item.classList.contains('bili-danmaku-x-dm'))) {
        try { if (item._bilivexFloatOnLeave) item._bilivexFloatOnLeave(); } catch (e) {}
        this.hovered = null;
        this.stopKeepAlive();
        return;
      }
      const isResident = item.dataset && item.dataset.bilivexResident === '1';
      const container = isResident ? getResidentLayer() : findFloatingDmContainer();
      if (!container) { this.stopKeepAlive(); return; }
      const clone = item.cloneNode(true);
      delete clone.dataset.bilivexFloatInited;
      const oldBtn = clone.querySelector('.bilivex-float-plus-btn');
      if (oldBtn) oldBtn.remove();
      clone.classList.remove('bili-danmaku-x-paused');
      clone.style.backgroundColor = '';
      clone.style.boxShadow = '';
      clone.style.zIndex = '9999';
      clone.style.position = isResident ? 'fixed' : 'absolute';
      // 重挂载到记录的原位置（找不到记录则用鼠标附近位置兜底）
      const k = this._keepRect;
      if (k && k.width > 0) {
        clone.style.left = k.left + 'px';
        clone.style.top = k.top + 'px';
        clone.style.width = k.width + 'px';
        clone.style.height = k.height + 'px';
        clone.style.margin = '0';
      } else if (this.px >= 0 && this.py >= 0) {
        clone.style.left = (this.px - 100) + 'px';
        clone.style.top = (this.py - 15) + 'px';
      } else {
        clone.style.left = '200px';
        clone.style.top = '100px';
      }
      clone.style.pointerEvents = 'auto';
      clone.style.visibility = '';
      try {
        clone.style.opacity = item.style.opacity || getComputedStyle(item).opacity || '1';
      } catch (e3) { clone.style.opacity = '1'; }
      container.appendChild(clone);
      if (isResident) {
        clone.dataset.bilivexResident = '1';
        clone._bilivexOrigParent = item._bilivexOrigParent;
        clone._bilivexAnimProgress = item._bilivexAnimProgress || 0;
        clone._bilivexFloatOnLeave = () => {
          try {
            clone.classList.remove('bili-danmaku-x-paused');
            clone.style.backgroundColor = '';
            clone.style.boxShadow = '';
            clone.style.zIndex = '';
            clone.dataset.bilivexResident = '';
            let op = clone._bilivexOrigParent;
            if (!op || !op.isConnected) {
              try { op = findFloatingDmContainer(); } catch (e2) {}
            }
            if (op && op.isConnected) {
              const cloneRect = clone.getBoundingClientRect();
              const opRect = op.getBoundingClientRect();
              const progress = clone._bilivexAnimProgress || 0;
              clone.style.animation = '';
              clone.style.animationDelay = '';
              let durMs = 0, txVal = 0;
              try {
                const cs = getComputedStyle(clone);
                durMs = parseFloat(cs.animationDuration) * 1000 || 0;
                const tx = cs.getPropertyValue('--translateX');
                const m = tx && tx.match(/(-?[\d.]+)/);
                if (m) txVal = Math.abs(parseFloat(m[1]));
              } catch (e2) {}
              clone.style.position = 'absolute';
              clone.style.left = (cloneRect.left - opRect.left) + 'px';
              clone.style.top = (cloneRect.top - opRect.top) + 'px';
              clone.style.margin = '0';
              clone.dataset.bilivexContinued = '1';
              op.appendChild(clone);
              if (durMs > 0 && txVal > 0 && progress > 0 && progress < durMs) {
                const remainingMs = durMs - progress;
                const remainingDist = txVal * (remainingMs / durMs);
                try {
                  clone.style.animation = 'none';
                  const wa = clone.animate(
                    [{ transform: 'translateX(0)' }, { transform: 'translateX(-' + remainingDist + 'px)' }],
                    { duration: remainingMs, fill: 'forwards', easing: 'linear' },
                  );
                  const fin = () => { try { if (clone.isConnected) clone.remove(); } catch (e2) {} };
                  wa.onfinish = fin;
                  wa.oncancel = fin;
                  setTimeout(fin, remainingMs + 1000);
                } catch (e2) {
                  clone.style.animation = 'none';
                  void clone.offsetWidth;
                  clone.style.animation = '';
                  if (progress > 0 && durMs > 0) {
                    clone.style.animationDelay = '-' + Math.min(progress, durMs) + 'ms';
                    const anims = clone.getAnimations();
                    if (anims.length) { try { anims[0].currentTime = progress; } catch (e3) {} }
                  }
                  const fin = () => { try { if (clone.isConnected) clone.remove(); } catch (e3) {} };
                  clone.addEventListener('animationend', fin, { once: true });
                  setTimeout(fin, 15000);
                }
              } else if (progress > 0 && durMs > 0) {
                clone.style.animation = 'none';
                void clone.offsetWidth;
                clone.style.animation = '';
                clone.style.animationDelay = '-' + Math.min(progress, durMs) + 'ms';
                const anims = clone.getAnimations();
                if (anims.length) { try { anims[0].currentTime = progress; } catch (e2) {} }
                const fin = () => { try { if (clone.isConnected) clone.remove(); } catch (e3) {} };
                clone.addEventListener('animationend', fin, { once: true });
                setTimeout(fin, 15000);
              }
            }
            clone._bilivexFloatOnLeave = null;
            try {
              delete clone.dataset.bilivexHoverPaused;
              delete clone.dataset.bilivexFloatInited;
              ensureFloatingDmOverlay(clone);
            } catch (e2) {}
          } catch (e2) {}
        };
      } else {
        ensureFloatingDmOverlay(clone);
        if (clone._bilivexFloatOnEnter) clone._bilivexFloatOnEnter();
      }
      this.hovered = clone;
      this._keepRect = k;
      showToast('弹幕保活：已防止消失');
    }
  };

  let boundFloatContainer = null;
  function attachFloatingDmHover(rotate) {
    if (!rotate) return;
    if (rotate.dataset.bilivexFloatBound) { boundFloatContainer = rotate; return; }
    rotate.dataset.bilivexFloatBound = '1';
    boundFloatContainer = rotate;
    const refresh = () => {
      $$(':scope .bili-danmaku-x-dm', rotate).forEach(ensureFloatingDmOverlay);
    };
    refresh();
    const mo = new MutationObserver(() => refresh());
    mo.observe(rotate, { childList: true, subtree: true });
    rotate._bilivexFloatMO = mo;
    $$(':scope .bili-danmaku-x-dm[data-bilivex-float-inited="1"]', rotate).forEach((item) => {
      if (typeof item._bilivexFloatOnEnter === 'function') return;
      const oldBtn = item.querySelector('.bilivex-float-plus-btn');
      if (oldBtn) oldBtn.remove();
      item.classList.remove('bili-danmaku-x-paused');
      item.style.backgroundColor = '';
      item.style.boxShadow = '';
      delete item.dataset.bilivexFloatInited;
      ensureFloatingDmOverlay(item);
    });
    FloatingDmEngine.start();
  }

  // 漂浮弹幕 +1 开关切换：开关关闭时解除已绑定弹幕的监听器
  function toggleFloatingDmEnabled() {
    const rotate = findFloatingDmContainer();
    if (!rotate) return;
    if (cfg.floatDmPlus) {
      if (rotate._bilivexFloatMO) {
        try { rotate._bilivexFloatMO.disconnect(); } catch (e) {}
      }
      attachFloatingDmHover(rotate);
    } else {
      // 关闭：移除所有已增强弹幕的监听器与按钮
      FloatingDmEngine.leave(FloatingDmEngine.hovered);
      if (rotate._bilivexFloatMO) {
        try { rotate._bilivexFloatMO.disconnect(); } catch (e) {}
        rotate._bilivexFloatMO = null;
      }
      $$('.bili-danmaku-x-dm', rotate).forEach(item => {
        if (typeof item._bilivexFloatCleanup === 'function') {
          try { item._bilivexFloatCleanup(); } catch (e) {}
        }
        item.dataset.bilivexFloatInited = '';
      });
      rotate.dataset.bilivexFloatBound = '';
      if (residentLayer && document.body.contains(residentLayer)) {
        $$('.bili-danmaku-x-dm', residentLayer).forEach(item => {
          if (typeof item._bilivexFloatCleanup === 'function') {
            try { item._bilivexFloatCleanup(); } catch (e) {}
          } else {
            try {
              if (item._bilivexOrigParent && item._bilivexOrigParent.isConnected) {
                item._bilivexOrigParent.appendChild(item);
                item.style.position = '';
                item.style.left = '';
                item.style.top = '';
                item.style.margin = '';
                item.style.visibility = '';
                item.classList.remove('bili-danmaku-x-paused');
              }
            } catch (e2) {}
          }
          item.dataset.bilivexFloatInited = '';
        });
      }
    }
  }

  // ---------- 全局守护 ----------
  let guardianStarted = false;

  let boundTailCtl = null;
  function rebindInputTailHandler() {
    // 在每个新出现的 textarea 上做小尾巴补齐
    const apply = (ta) => {
      if (!ta || ta.dataset.bilivexTailBound) return;
      ta.dataset.bilivexTailBound = '1';
      ta.addEventListener('input', (e) => {
        if (!cfg.tailEnabled || !cfg.tailText) return;
        const v = ta.value;
        // 仅在用户光标在末尾时自动补尾巴，避免破坏正在编辑的中间内容
        if (v && !v.endsWith(cfg.tailText) && (ta.selectionStart === v.length)) {
          const proto = HTMLTextAreaElement.prototype;
          const desc = Object.getOwnPropertyDescriptor(proto, 'value');
          desc.set.call(ta, v + cfg.tailText);
          ta.dispatchEvent(new Event('input', { bubbles: true }));
          // 还原光标到末尾
          try { ta.setSelectionRange(ta.value.length, ta.value.length); } catch (e) {}
        }
      }, true);
    };
    const ctl = document.querySelector('.chat-control-panel');
    if (!ctl || ctl.dataset.bilivexTailCtlBound) return;
    ctl.dataset.bilivexTailCtlBound = '1';
    boundTailCtl = ctl;
    apply(ctl.querySelector('textarea.chat-input, textarea'));
    const mo = new MutationObserver(() => apply(ctl.querySelector('textarea')));
    mo.observe(ctl, { childList: true, subtree: true });
    ctl._bilivexTailMO = mo;
  }

  // ---------- 一键点赞（30 连击点亮粉丝团灯牌） ----------
  // B 站规则：直播中连续点赞 30 次可点亮粉丝团灯牌。
  const LIKE_COUNT = 30;          // 灯牌激活阈值
  let liking = false;             // 防重复点击保护：点赞过程中禁用面板按钮

  function bindLike() {
    const btn = document.querySelector('.like-btn');
    if (!btn || btn.dataset.bilivexLikeBound) return;
    btn.dataset.bilivexLikeBound = '1';
    // 不替换原点击行为，仅在面板提供快捷入口
  }

  function oneClickLike() {
    // 防重复点击：点赞过程中禁用面板按钮
    if (liking) { showToast('正在点赞中，请稍候…'); return; }
    const initial = document.querySelector('.like-btn');
    if (!initial) { showToast('未找到点赞按钮'); return; }
    if (initial.disabled || initial.getAttribute('aria-disabled') === 'true') {
      showToast('点赞按钮暂时不可用'); return;
    }
    liking = true;

    // 视觉反馈：禁用面板按钮
    const setPanelBtnState = (busy) => {
      const pb = document.querySelector('#bilivex-panel button[data-bilivex-like="1"]');
      if (!pb) return;
      pb.disabled = busy;
      pb.style.opacity = busy ? '0.6' : '';
      pb.style.cursor = busy ? 'wait' : 'pointer';
    };
    setPanelBtnState(true);

    let count = 0;
    let stopped = false;
    let stopReason = '';
    let timer = null;
    // 按钮冷却中等待的最大总时长（防止无限等待）
    let waitBudget = 30000;
    let noFeedbackStreak = 0;   // 连续无反馈次数
    const NO_FEEDBACK_THRESHOLD = 3; // 连续 3 次无反馈 → 判定「无反馈环境」（游客态）
    let blindMode = false;      // 游客态盲计数模式

    const finish = () => {
      if (timer !== null) { clearTimeout(timer); timer = null; }
      liking = false;
      setPanelBtnState(false);
      if (stopped) {
        showToast('已点赞 ' + count + ' 次（' + stopReason + '）');
      } else if (count >= LIKE_COUNT) {
        showToast('已点赞 ' + count + ' 次 ♥ 灯牌即将点亮');
      } else {
        showToast('已点赞 ' + count + ' 次');
      }
    };

    const tick = () => {
      timer = null;
      const cur = document.querySelector('.like-btn');
      if (!cur) { stopped = true; stopReason = '按钮已消失'; finish(); return; }
      if (cur.disabled || cur.getAttribute('aria-disabled') === 'true') {
        waitBudget -= 150;
        if (waitBudget <= 0) { stopped = true; stopReason = '按钮持续冷却'; finish(); return; }
        timer = setTimeout(tick, 150);
        return;
      }
      if (blindMode) {
        try { cur.click(); count++; }
        catch (e) { stopped = true; stopReason = '点击异常'; finish(); return; }
        if (count >= LIKE_COUNT) { finish(); return; }
        timer = setTimeout(tick, 350 + Math.floor(Math.random() * 250));
        return;
      }
      const beforeCls = (cur.className || '').toString();
      const beforePressed = cur.getAttribute('aria-pressed');
      try { cur.click(); }
      catch (e) { stopped = true; stopReason = '点击异常'; finish(); return; }
      timer = setTimeout(() => {
        const cls = (cur.className || '').toString();
        const pressed = cur.getAttribute('aria-pressed');
        const hasFeedback = cls !== beforeCls || pressed !== beforePressed ||
          /clicked|active|liked/i.test(cls) || pressed === 'true';
        if (hasFeedback) {
          noFeedbackStreak = 0;
          count++;
          if (count >= LIKE_COUNT) { finish(); return; }
          const isMultipleOf5 = (count % 5 === 0);
          timer = setTimeout(tick, (isMultipleOf5 ? 900 : 450) + Math.floor(Math.random() * 150));
        } else {
          noFeedbackStreak++;
          if (noFeedbackStreak >= NO_FEEDBACK_THRESHOLD) {
            blindMode = true;
            count++;
            if (count >= LIKE_COUNT) { finish(); return; }
            timer = setTimeout(tick, 350 + Math.floor(Math.random() * 250));
            return;
          }
          waitBudget -= 250;
          if (waitBudget <= 0) { stopped = true; stopReason = '点击无反馈'; finish(); return; }
          timer = setTimeout(tick, 250);
        }
      }, 150);
    };
    timer = setTimeout(tick, 0);
  }

  // ---------- 悬浮主菜单 ----------
  function buildPanel() {
    // 如果已存在则重建
    const old = document.getElementById('bilivex-panel');
    if (old) old.remove();

    const panel = document.createElement('div');
    panel.id = 'bilivex-panel';
    const collapsed = !!cfg.panelCollapsed;
    panel.style.cssText = [
      'position:fixed',
      (cfg.panelPos && cfg.panelPos.left != null && cfg.panelPos.top != null)
        ? ('left:' + cfg.panelPos.left + 'px;top:' + cfg.panelPos.top + 'px;right:auto')
        : 'right:18px;top:96px',
      'z-index:10000',
      // 折叠态为 56×56 粉色圆形按钮；展开态维持 220px 矩形面板
      collapsed
        ? ('width:' + COLLAPSED_BTN_SIZE + 'px;height:' + COLLAPSED_BTN_SIZE + 'px;' +
           'background:' + COLLAPSED_BTN_BG + ';border:none;border-radius:50%;' +
           'box-shadow:' + COLLAPSED_BTN_SHADOW + ';color:#fff;')
        : ('width:220px;background:rgba(255,255,255,0.96);border:1px solid #e0e6ed;' +
           'border-radius:12px;box-shadow:0 4px 16px ' + currentTheme.primaryShadow + ';color:#222;'),
      'font:13px/1.5 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif',
      'user-select:none',
      // 原位折叠/展开时 width/height/border-radius/box-shadow 平滑过渡
      'transition:width .25s ease,height .25s ease,border-radius .25s ease,box-shadow .25s ease,background .25s ease',
    ].join(';');

    // 标题栏：展开态使用当前主题渐变色；折叠态整个 head 即粉色圆形按钮
    const head = document.createElement('div');
    head.style.cssText = collapsed
      ? 'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
        'width:100%;height:100%;padding:0;border-bottom:none;' +
        'background:' + COLLAPSED_BTN_BG + ';border-radius:50%;cursor:move;' +
        'transition:background .25s ease;'
      : 'display:flex;align-items:center;justify-content:space-between;' +
        'padding:9px 12px;border-bottom:1px solid #f0f2f5;' +
        'background:' + currentTheme.titleGradient + ';' +
        'color:#fff;border-radius:11px 11px 0 0;cursor:move;' +
        'transition:background .25s ease;';
    const title = document.createElement('span');
    title.textContent = 'BiLivex';
    title.style.cssText = collapsed
      ? 'font-weight:600;font-size:13px;letter-spacing:.3px;line-height:15px;color:#fff;white-space:nowrap;'
      : 'font-weight:600;font-size:13px;letter-spacing:.3px;line-height:18px;';
    const tog = document.createElement('span');
    tog.textContent = collapsed ? '▸' : '▾';
    tog.style.cssText = collapsed
      ? 'cursor:pointer;font-size:9px;line-height:10px;opacity:.95;color:#fff;'
      : 'cursor:pointer;font-size:14px;line-height:18px;opacity:.92;';
    head.appendChild(title);
    head.appendChild(tog);
    panel.appendChild(head);

    const body = document.createElement('div');
    body.style.cssText = 'padding:10px 12px 12px;' + (collapsed ? 'display:none;' : '');
    panel.appendChild(body);

    // ---- 通用构造器 ----

    // 分组小标题 + 分隔线：用于把功能区按「弹幕增强/点赞」分组
    const section = (sectionTitle) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'margin-top:8px;';
      wrap.className = 'bilivex-section';
      if (sectionTitle) {
        const h = document.createElement('div');
        h.textContent = sectionTitle;
        h.className = 'bilivex-section-title';
        h.style.cssText = 'font-size:11px;font-weight:600;color:#9099a3;letter-spacing:.6px;' +
          'line-height:18px;margin-bottom:4px;text-transform:uppercase;';
        wrap.appendChild(h);
        const hr = document.createElement('div');
        hr.style.cssText = 'height:1px;background:#f0f2f5;margin-bottom:4px;';
        wrap.appendChild(hr);
      }
      body.appendChild(wrap);
      return wrap;
    };

    // 单行容器：min-height 保证不同高度控件视觉对齐
    const row = (children, opts) => {
      opts = opts || {};
      const r = document.createElement('div');
      r.className = 'bilivex-row';
      r.style.cssText = 'display:flex;align-items:center;justify-content:space-between;' +
        'gap:8px;min-height:30px;padding:2px 0;margin-bottom:6px;' +
        (opts.mb ? 'margin-bottom:' + opts.mb + ';' : '');
      children.forEach(c => r.appendChild(c));
      const target = currentSection || body;
      target.appendChild(r);
      return r;
    };

    // 标签：line-height 与开关高度匹配
    const lbl = (text, opts) => {
      opts = opts || {};
      const s = document.createElement('span');
      s.textContent = text;
      s.className = 'bilivex-label';
      s.style.cssText = 'color:#3a3f45;font-size:12px;line-height:18px;flex:1;min-width:0;' +
        (opts.bold ? 'font-weight:500;' : '') +
        (opts.muted ? 'color:#9099a3;' : '');
      return s;
    };

    // 开关（使用当前主题主色）
    const sw = (checked, onChange) => {
      const wrap = document.createElement('label');
      wrap.className = 'bilivex-switch';
      wrap.style.cssText = 'position:relative;display:inline-block;width:32px;height:18px;cursor:pointer;flex-shrink:0;';
      const inp = document.createElement('input');
      inp.type = 'checkbox'; inp.checked = checked;
      inp.style.cssText = 'opacity:0;width:0;height:0;margin:0;';
      const slider = document.createElement('span');
      slider.className = 'bilivex-switch-slider';
      slider.style.cssText = 'position:absolute;inset:0;' +
        'background:' + (checked ? currentTheme.primary : '#cfd5db') +
        ';border-radius:18px;transition:.2s;';
      const knob = document.createElement('span');
      knob.style.cssText = 'position:absolute;left:' + (checked ? '16px' : '2px') +
        ';top:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:.2s;' +
        'box-shadow:0 1px 3px rgba(0,0,0,0.2);';
      slider.appendChild(knob);
      inp.addEventListener('change', () => {
        const v = inp.checked;
        slider.style.background = v ? currentTheme.primary : '#cfd5db';
        knob.style.left = v ? '16px' : '2px';
        onChange(v);
      });
      wrap.appendChild(inp); wrap.appendChild(slider);
      return wrap;
    };

    // 单行文本输入
    const txt = (value, placeholder, onChange) => {
      const i = document.createElement('input');
      i.type = 'text'; i.value = value; i.placeholder = placeholder;
      i.style.cssText = 'flex:1;min-width:0;padding:5px 8px;border:1px solid #e0e6ed;border-radius:6px;' +
        'font-size:12px;line-height:18px;color:#222;background:#fff;outline:none;transition:border-color .15s;';
      i.addEventListener('focus', () => { i.style.borderColor = currentTheme.primary; });
      i.addEventListener('blur', () => { i.style.borderColor = '#e0e6ed'; });
      i.addEventListener('change', () => onChange(i.value));
      return i;
    };

    // 按钮（统一圆角、内边距、行高，确保与开关视觉节奏匹配）
    const btn = (text, bg, onClick, opts) => {
      opts = opts || {};
      const b = document.createElement('button');
      b.textContent = text;
      b.style.cssText = `background:${bg};color:#fff;border:none;border-radius:6px;` +
        'padding:5px 12px;cursor:pointer;font-size:12px;line-height:18px;font-weight:500;' +
        'transition:opacity .15s,transform .1s;' +
        (opts.flex ? 'flex:1;' : 'flex-shrink:0;');
      b.addEventListener('mousedown', () => { b.style.transform = 'scale(0.96)'; });
      b.addEventListener('mouseup', () => { b.style.transform = ''; });
      b.addEventListener('mouseleave', () => { b.style.transform = ''; });
      b.addEventListener('click', onClick);
      return b;
    };

    // 多行 textarea
    const ta = (value, placeholder, onChange) => {
      const t = document.createElement('textarea');
      t.value = value; t.placeholder = placeholder;
      t.style.cssText = 'width:100%;min-height:54px;padding:5px 8px;border:1px solid #e0e6ed;border-radius:6px;' +
        'font-size:12px;line-height:18px;resize:vertical;box-sizing:border-box;' +
        'color:#222;background:#fff;outline:none;margin-top:4px;transition:border-color .15s;';
      t.addEventListener('focus', () => { t.style.borderColor = currentTheme.primary; });
      t.addEventListener('blur', () => { t.style.borderColor = '#e0e6ed'; });
      t.addEventListener('change', () => onChange(t.value));
      return t;
    };

    // 主题选择按钮组
    const themeRow = (parent) => {
      const wrap = document.createElement('div');
      wrap.className = 'bilivex-theme-row';
      wrap.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:8px;' +
        'margin-bottom:8px;min-height:30px;';
      wrap.appendChild(lbl('主题'));
      const group = document.createElement('div');
      group.style.cssText = 'display:flex;gap:6px;flex-shrink:0;';
      ['blue', 'pink'].forEach((t) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.dataset.bilivexTheme = t;
        b.textContent = THEMES[t].name;
        b.style.cssText = 'padding:4px 12px;border-radius:6px;cursor:pointer;font-size:12px;' +
          'line-height:18px;border:1px solid #e0e6ed;background:#fff;color:#666;' +
          'transition:all .15s;';
        b.addEventListener('click', () => {
          if (cfg.theme === t) return;
          cfg.theme = t;
          saveCfg(cfg);
          applyTheme();
          showToast('已切换为' + THEMES[t].name + '主题');
        });
        group.appendChild(b);
      });
      wrap.appendChild(group);
      parent.appendChild(wrap);
      return wrap;
    };

    // ---- 构建面板内容 ----
    let currentSection = null;

    // 顶部：主题选择（始终在最上方，跨分组）
    themeRow(body);

    // 分组 1：弹幕增强
    currentSection = section('弹幕增强');
    row([lbl('小尾巴'), sw(cfg.tailEnabled, v => { cfg.tailEnabled = v; saveCfg(cfg); showToast(v ? '已开启小尾巴' : '已关闭小尾巴'); })]);
    // 小尾巴文本：单列布局（label + input 垂直堆叠）
    const tailWrap = document.createElement('div');
    tailWrap.style.cssText = 'margin-bottom:8px;box-sizing:border-box;width:100%;padding-right:0;';
    tailWrap.appendChild(lbl('尾巴内容', { muted: true }));
    const tailInput = txt(cfg.tailText, '如：喵', v => { cfg.tailText = v; saveCfg(cfg); });
    tailInput.style.cssText += 'box-sizing:border-box;max-width:100%;';
    tailWrap.appendChild(tailInput);
    currentSection.appendChild(tailWrap);
    // +1（聊天区）
    row([lbl('+1（聊天区）'), sw(cfg.plusOneEnabled, v => { cfg.plusOneEnabled = v; saveCfg(cfg); toggleDmBarVisibility(); })]);
    // +1（漂浮弹幕）
    row([lbl('+1（弹幕）'), sw(cfg.floatDmPlus, v => { cfg.floatDmPlus = v; saveCfg(cfg); toggleFloatingDmEnabled(); showToast(v ? '已开启弹幕 +1' : '已关闭弹幕 +1'); })]);
    // 复制按钮
    row([lbl('复制按钮'), sw(cfg.copyEnabled, v => { cfg.copyEnabled = v; saveCfg(cfg); toggleDmBarVisibility(); })]);

    // 分组 2：点赞
    currentSection = section('点赞');
    // 30连击按钮（使用主题 accent 互补色，与标题色形成对比）
    const likeBtn = btn('30连击 ♥', currentTheme.accentGradient, oneClickLike);
    likeBtn.dataset.bilivexLike = '1';
    // label + button 单行布局。
    const likeRow = document.createElement('div');
    likeRow.className = 'bilivex-row bilivex-row-like';
    likeRow.style.cssText = 'display:flex;align-items:center;gap:8px;min-height:30px;' +
      'margin-bottom:4px;';
    likeRow.appendChild(lbl('一键点赞'));
    likeRow.appendChild(likeBtn);
    currentSection.appendChild(likeRow);
    // 小字提示
    const likeHint = document.createElement('div');
    likeHint.textContent = '点一次 = 连续点赞 30 次，可点亮粉丝团灯牌';
    likeHint.className = 'bilivex-hint';
    likeHint.style.cssText = 'color:#9099a3;font-size:11px;line-height:1.5;margin:0 0 4px;padding-left:2px;word-break:break-all;overflow-wrap:anywhere;';
    currentSection.appendChild(likeHint);


    currentPanel = panel;
    head.addEventListener('mousedown', (e) => {
      pressState.down = true;
      pressState.x = e.clientX;
      pressState.y = e.clientY;
      pressState.moved = false;
      pressState.longPressed = false;
      pressState.panelRef = panel;
      clearTimeout(pressState.longTimer);
      pressState.longTimer = setTimeout(() => {
        if (pressState.down && !pressState.moved && pressState.panelRef) {
          pressState.longPressed = true;
          dragState.dragging = true;
          dragState.ox = pressState.x - pressState.panelRef.offsetLeft;
          dragState.oy = pressState.y - pressState.panelRef.offsetTop;
          pressState.panelRef.style.cursor = 'grabbing';
        }
      }, 220);
      e.preventDefault();
    });
    bindDragHandlers();

    getUiHost().appendChild(panel);

    if (collapsed) attachCollapsedHover(head, panel);

    // 主题应用：刷新主题按钮高亮与面板阴影
    applyTheme();

    avoidChatCollision(panel);
  }

  // 折叠态圆形按钮的 hover 加深效果
  function attachCollapsedHover(head, panel) {
    if (!head || head.dataset.bilivexCollapsedHover) return;
    head.dataset.bilivexCollapsedHover = '1';
    head.addEventListener('mouseenter', () => {
      if (!cfg.panelCollapsed) return;   // 仅折叠态生效，展开态 head 是主题渐变标题栏
      head.style.background = COLLAPSED_BTN_BG_HOVER;
      panel.style.boxShadow = COLLAPSED_BTN_SHADOW_HOVER;
    });
    head.addEventListener('mouseleave', () => {
      if (!cfg.panelCollapsed) return;
      head.style.background = COLLAPSED_BTN_BG;
      panel.style.boxShadow = COLLAPSED_BTN_SHADOW;
    });
  }

  // 原位切换面板的折叠/展开视觉
  let collapseAnimSeq = 0;   // 动画序号，防止快速连续点击时旧回调覆盖新状态
  function setPanelCollapsed(collapsed) {
    const panel = document.getElementById('bilivex-panel');
    if (!panel) return;
    const head = panel.firstElementChild;
    const body = head ? head.nextElementSibling : null;
    const title = head ? head.firstElementChild : null;
    const tog = head ? head.lastElementChild : null;
    const seq = ++collapseAnimSeq;

    if (collapsed) {
      if (body) body.style.display = 'none';
      const fromH = panel.offsetHeight;
      panel.style.height = fromH + 'px';
      requestAnimationFrame(() => {
        if (seq !== collapseAnimSeq) return;
        applyPanelCollapsedStyles(panel, head, title, tog, true);
        panel.style.height = COLLAPSED_BTN_SIZE + 'px';
        attachCollapsedHover(head, panel);
        avoidChatCollision(panel);
      });
      return;
    }

    if (body) body.style.display = '';
    const savedTransition = panel.style.transition;
    panel.style.transition = 'none';
    applyPanelCollapsedStyles(panel, head, title, tog, false);
    panel.style.width = '220px';
    panel.style.height = 'auto';
    const targetH = panel.offsetHeight;
    applyPanelCollapsedStyles(panel, head, title, tog, true);
    panel.style.width = COLLAPSED_BTN_SIZE + 'px';
    panel.style.height = COLLAPSED_BTN_SIZE + 'px';
    panel.style.transition = savedTransition;
    requestAnimationFrame(() => {
      if (seq !== collapseAnimSeq) return;
      applyPanelCollapsedStyles(panel, head, title, tog, false);
      panel.style.width = '220px';
      panel.style.height = targetH + 'px';
      setTimeout(() => {
        if (seq === collapseAnimSeq) panel.style.height = 'auto';
      }, 300);
      avoidChatCollision(panel);
    });
  }

  // 将面板/头部/标题/箭头切换到折叠或展开视觉（不处理 height，由调用方控制动画）。
  function applyPanelCollapsedStyles(panel, head, title, tog, collapsed) {
    if (!panel) return;
    if (collapsed) {
      panel.style.width = COLLAPSED_BTN_SIZE + 'px';
      panel.style.background = COLLAPSED_BTN_BG;
      panel.style.border = 'none';
      panel.style.borderRadius = '50%';
      panel.style.boxShadow = COLLAPSED_BTN_SHADOW;
      panel.style.color = '#fff';
    } else {
      panel.style.width = '220px';
      panel.style.background = 'rgba(255,255,255,0.96)';
      panel.style.border = '1px solid #e0e6ed';
      panel.style.borderRadius = '12px';
      panel.style.boxShadow = '0 4px 16px ' + currentTheme.primaryShadow;
      panel.style.color = '#222';
    }
    if (head) {
      head.style.cssText = collapsed
        ? 'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
          'width:100%;height:100%;padding:0;border-bottom:none;' +
          'background:' + COLLAPSED_BTN_BG + ';border-radius:50%;cursor:pointer;' +
          'user-select:none;-webkit-user-select:none;' +
          'transition:background .25s ease;'
        : 'display:flex;align-items:center;justify-content:space-between;' +
          'padding:9px 12px;border-bottom:1px solid #f0f2f5;' +
          'background:' + currentTheme.titleGradient + ';' +
          'color:#fff;border-radius:11px 11px 0 0;cursor:pointer;' +
          'user-select:none;-webkit-user-select:none;' +
          'transition:background .25s ease;';
    }
    if (title) {
      title.style.cssText = collapsed
        ? 'font-weight:600;font-size:13px;letter-spacing:.3px;line-height:15px;color:#fff;white-space:nowrap;'
        : 'font-weight:600;font-size:13px;letter-spacing:.3px;line-height:18px;';
    }
    if (tog) {
      tog.textContent = collapsed ? '▸' : '▾';
      tog.style.cssText = collapsed
        ? 'cursor:pointer;font-size:9px;line-height:10px;opacity:.95;color:#fff;'
        : 'cursor:pointer;font-size:14px;line-height:18px;opacity:.92;';
    }
  }

  function avoidChatCollision(panel) {
    try {
      const list = document.querySelector('.chat-history-list');
      if (!list || !panel || !panel.isConnected) return;
      const pr = panel.getBoundingClientRect();
      const lr = list.getBoundingClientRect();
      if (pr.right <= lr.left || pr.left >= lr.right || pr.bottom <= lr.top || pr.top >= lr.bottom) return;
      // 相交：改放到左侧
      panel.style.left = '18px';
      panel.style.top = '96px';
      panel.style.right = 'auto';
    } catch (e) {}
  }

  function toggleDmBarVisibility() {
    $$('.bilivex-dm-bar').forEach(bar => {
      const item = bar.parentElement;
      if (!item) return;
      if (typeof item._bilivexCleanup === 'function') {
        try { item._bilivexCleanup(); } catch (e) {}
      }
      bar.remove();
      item.dataset.bilivexInited = '';
      if (!item.isConnected) return;
      ensureDanmakuOverlay(item);
    });
  }

  // ---------- 面板交互（点击整个区域弹菜单 + 长按/快速拖动 + 边缘吸附） ----------
  let currentPanel = null;                       // 当前面板 DOM，供拖拽处理器引用
  const dragState = { dragging: false, ox: 0, oy: 0, moved: false };
  // 按压状态：区分「点击（toggle 菜单）」与「长按/快速拖动」
  const pressState = { down: false, x: 0, y: 0, moved: false, longPressed: false, longTimer: null, panelRef: null };
  let dragBound = false;
  // 吸附阈值（px）：小球中心距左/右视口边缘小于该值即吸附到侧边
  const SNAP_THRESHOLD = 120;
  function bindDragHandlers() {
    if (dragBound) return;                       // 全局监听器只绑定一次
    dragBound = true;
    document.addEventListener('mousemove', (e) => {
      // 拖动中：实时跟随
      if (dragState.dragging && currentPanel) {
        dragState.moved = true;
        currentPanel.style.left = (e.clientX - dragState.ox) + 'px';
        currentPanel.style.top = (e.clientY - dragState.oy) + 'px';
        currentPanel.style.right = 'auto';
        return;
      }
      // 按压未拖动：位移超过阈值 → 转为快速拖动
      if (pressState.down && !pressState.moved && pressState.panelRef) {
        const dx = e.clientX - pressState.x;
        const dy = e.clientY - pressState.y;
        if (Math.hypot(dx, dy) > 6) {
          pressState.moved = true;
          dragState.dragging = true;
          dragState.ox = e.clientX - pressState.panelRef.offsetLeft;
          dragState.oy = e.clientY - pressState.panelRef.offsetTop;
          pressState.panelRef.style.cursor = 'grabbing';
        }
      }
    });
    document.addEventListener('mouseup', (e) => {
      if (!pressState.down && !dragState.dragging) return;
      const panel = pressState.panelRef || currentPanel;
      clearTimeout(pressState.longTimer);
      pressState.down = false;
      const wasDrag = dragState.moved || pressState.longPressed;
      if (!wasDrag && panel) {
        // 点击（未移动、未长按）→ 切换主菜单（点击整个按钮区域即可弹出）
        cfg.panelCollapsed = !cfg.panelCollapsed;
        saveCfg(cfg);
        setPanelCollapsed(cfg.panelCollapsed);
      } else if (wasDrag && panel) {
        // 拖动结束 → 边缘吸附 + 保存位置
        snapPanelToEdge(panel);
      }
      if (panel) panel.style.cursor = '';
      dragState.dragging = false;
      dragState.moved = false;
      pressState.moved = false;
      pressState.longPressed = false;
      pressState.panelRef = null;
    });
  }

  function snapPanelToEdge(panel) {
    try {
      const r = panel.getBoundingClientRect();
      const centerX = r.left + r.width / 2;
      const vw = window.innerWidth;
      let snapLeft = null;
      if (centerX < SNAP_THRESHOLD) snapLeft = true;       // 靠近左缘 → 吸附左
      else if (centerX > vw - SNAP_THRESHOLD) snapLeft = false; // 靠近右缘 → 吸附右
      if (snapLeft !== null) {
        const savedTransition = panel.style.transition;
        panel.style.transition = savedTransition
          ? savedTransition + ', left 0.3s ease, right 0.3s ease, top 0.3s ease'
          : 'left 0.3s ease, right 0.3s ease, top 0.3s ease';
        if (snapLeft === true) {
          panel.style.left = '8px';
          panel.style.right = 'auto';
        } else {
          panel.style.left = (vw - r.width - 8) + 'px';
          panel.style.right = 'auto';
        }
        setTimeout(() => {
          if (panel.isConnected) panel.style.transition = savedTransition;
        }, 320);
      } else {
        // 距离远：不吸附，保留当前坐标
        panel.style.left = r.left + 'px';
        panel.style.right = 'auto';
      }
      const nr = panel.getBoundingClientRect();
      cfg.panelPos = { left: Math.round(nr.left), top: Math.round(nr.top) };
      saveCfg(cfg);
    } catch (err) {}
  }

  // ---------- 漂浮弹幕 +1 视觉反馈动画 keyframes ----------
  let bilivexAnimInjected = false;
  function injectFloatingDmAnim() {
    if (bilivexAnimInjected) return;
    if (!document.head) return;
    // 移除旧的（如有），确保颜色变量更新
    const old = document.getElementById('bilivex-float-dm-anim');
    if (old) old.remove();
    const style = document.createElement('style');
    style.id = 'bilivex-float-dm-anim';
    style.textContent = '@keyframes bilivex-float-plus{' +
      '0%{opacity:0;transform:translate(-50%,-50%) scale(0.5);}' +
      '18%{opacity:1;transform:translate(-50%,-90%) scale(1.25);}' +
      '70%{opacity:0.95;transform:translate(-50%,-160%) scale(1);}' +
      '100%{opacity:0;transform:translate(-50%,-220%) scale(0.9);}' +
      '}';
    document.head.appendChild(style);
    bilivexAnimInjected = true;
  }

  // ---------- Toast ----------
  let toastTimer = null;
  function showToast(text) {
    let t = document.getElementById('bilivex-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'bilivex-toast';
      t.style.cssText = 'position:fixed;left:50%;top:30%;transform:translateX(-50%);' +
        'background:rgba(0,0,0,0.78);color:#fff;padding:8px 16px;border-radius:6px;' +
        'font-size:13px;z-index:100000;pointer-events:none;opacity:0;transition:opacity .15s;';
      getUiHost().appendChild(t);
    }
    t.textContent = text;
    t.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.style.opacity = '0'; }, 1600);
  }

  // ---------- 剪贴板 ----------
  function copyToClipboard(text) {
    if (!text) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }
  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;left:-9999px;';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    ta.remove();
  }

  // ---------- 初始化 ----------
  function initRoom() {
    const list = document.querySelector('.chat-history-list');
    if (list) {
      attachDanmakuHover(list);
    }
    rebindInputTailHandler();
    bindLike();
    if (cfg.floatDmPlus) {
      const rotate = findFloatingDmContainer();
      if (rotate) attachFloatingDmHover(rotate);
    }
  }

  function guardianCheck() {
    try {
      const list = document.querySelector('.chat-history-list');
      if (list && list !== boundChatList && (!boundChatList || !boundChatList.isConnected)) {
        list.dataset.bilivexHoverBound = '';
        if (boundChatList && boundChatList._bilivexHoverMO) {
          try { boundChatList._bilivexHoverMO.disconnect(); } catch (e) {}
          boundChatList._bilivexHoverMO = null;
        }
        attachDanmakuHover(list);
      }
      if (cfg.floatDmPlus) {
        const rotate = findFloatingDmContainer();
        if (rotate && rotate !== boundFloatContainer && (!boundFloatContainer || !boundFloatContainer.isConnected)) {
          rotate.dataset.bilivexFloatBound = '';
          if (boundFloatContainer && boundFloatContainer._bilivexFloatMO) {
            try { boundFloatContainer._bilivexFloatMO.disconnect(); } catch (e) {}
            boundFloatContainer._bilivexFloatMO = null;
          }
          attachFloatingDmHover(rotate);
        }
      }
      const ctl = document.querySelector('.chat-control-panel');
      if (ctl && !ctl.dataset.bilivexTailCtlBound) {
        if (boundTailCtl && boundTailCtl !== ctl && boundTailCtl._bilivexTailMO) {
          try { boundTailCtl._bilivexTailMO.disconnect(); } catch (e) {}
          boundTailCtl._bilivexTailMO = null;
        }
        rebindInputTailHandler();
      }
    } catch (e) {}
  }

  function guardianObserveOnce() {
    if (guardianStarted) return;
    guardianStarted = true;
    const go = new MutationObserver(() => guardianCheck());
    go.observe(document.documentElement, { childList: true, subtree: true });
    window._bilivexGuardianMO = go;
    setInterval(guardianCheck, 20000);
    guardianCheck();
  }

  let initTimer = null;
  function tryInit() {
    if (document.querySelector('.chat-history-list') || document.querySelector('.chat-control-panel')) {
      initRoom();
      buildPanel();
      return true;
    }
    return false;
  }

  function start() {
    try {
      document.addEventListener('fullscreenchange', syncFullscreenUi);
      document.addEventListener('webkitfullscreenchange', syncFullscreenUi);
    } catch (e) {}
    // 注入视觉反馈动画 keyframes
    injectFloatingDmAnim();
    if (!tryInit()) {
      const mo = new MutationObserver(() => {
        if (tryInit()) {
          mo.disconnect();
          watchSpa();
        }
      });
      mo.observe(document.documentElement, { childList: true, subtree: true });
      setTimeout(() => { tryInit(); watchSpa(); }, 3000);
    } else {
      watchSpa();
    }
    guardianObserveOnce();
  }

  function watchSpa() {
    // 监听 URL 变化 + 顶层 DOM 重建
    let lastUrl = location.href;
    const wrap = document.getElementById('live-room-app') || document.body;
    const mo = new MutationObserver(() => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        // 重建：清理旧 panel 并重绑
        const old = document.getElementById('bilivex-panel'); if (old) old.remove();
        clearTimeout(initTimer);
        initTimer = setTimeout(() => {
          initRoom();
          buildPanel();
        }, 800);
      } else if (!document.querySelector('.chat-history-list') || !document.getElementById('bilivex-panel')) {
        clearTimeout(initTimer);
        initTimer = setTimeout(() => { initRoom(); buildPanel(); }, 600);
      }
      guardianCheck();
    });
    mo.observe(wrap, { childList: true, subtree: true });
  }

  // ---------- 启动 ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();