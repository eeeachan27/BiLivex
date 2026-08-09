// ==UserScript==
// @name         BiLivex - 哔哩哔哩直播增强
// @namespace    https://github.com/eeeachan27/BiLivex
// @version      1.0.1
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
  // blue 主题保留既有视觉；pink 主题以 B 站标志粉 #FB7299 为基调。
  // accent（30连击按钮、强调色）设计为与主色互补，在双主题间形成视觉层次：
  //   - blue 主题：accent 维持 #fb7299（粉），与蓝色主色互补
  //   - pink 主题：accent 切换为蓝绿系 #1E88E5，与粉色主色互补
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
      accent: '#1E88E5',          // 切换为蓝系作互补强调
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
    theme: 'blue',             // 主题 'blue' | 'pink'（兼容旧用户无此字段）
  };

  function loadCfg() {
    try {
      const raw = GM_getValue('bilivex_cfg');
      if (!raw) return { ...DEFAULT_CFG };
      const obj = JSON.parse(raw);
      // 兼容旧用户：缺失 theme 时默认为 blue
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
  // 当前主题色板（applyTheme 负责切换）
  let currentTheme = THEMES[cfg.theme] || THEMES.blue;

  // ---------- 工具函数 ----------
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function setReactLikeValue(el, value) {
    // 通用：原生 setter + input 事件，触发 Vue/React 受控组件更新
    const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    if (desc && desc.set) desc.set.call(el, value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function findChatInput() {
    // 登录态下是 textarea.chat-input.border-box；游客态是 div.chat-input.border-box.visitor-hint
    // 通过 tagName 区分
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
  // 切换主题色板后，遍历所有已创建的相关 DOM 元素更新颜色。
  // 主题色板同时作为运行时参考，ensureFloatingDmOverlay / ensureDanmakuOverlay 等
  // 动态创建元素的函数会通过 currentTheme 引用，避免硬编码颜色。
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
  // 用 mouseenter/leave 在 chat-history-list 上做事件委托，避免反复绑定

  function ensureDanmakuOverlay(item) {
    if (!item || item.dataset.bilivexInited) return;
    if (!item.classList.contains('danmaku-item')) return;
    item.dataset.bilivexInited = '1';
    item.style.position = item.style.position || 'relative';
    // 操作按钮容器：置于弹幕行右侧垂直居中（right:4px + top:50% + translateY(-50%)），
    // 避免用户视觉上误认为「右上角」
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
    // 不再在 item 上直接绑 mouseenter/leave（单条弹幕被 B 站替换后失效）。
    // 由 attachDanmakuHover 在 list 上做事件委托，对未初始化的新弹幕自动调用 ensureDanmakuOverlay。
    // 这里只保存 item 自身的 onEnter/onLeave，供事件委托回调调用。
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
    // 清理函数：清掉委托外直接绑定的残留（兼容老代码）
    item._bilivexCleanup = () => {
      clearTimeout(hoverTimer);
      item._bilivexOnEnter = null;
      item._bilivexOnLeave = null;
      item._bilivexCleanup = null;
    };
  }

  // 记录当前已绑定节点引用，供全局守护 observer 比对（SPA 重建后节点被替换时重绑）
  let boundChatList = null;
  function attachDanmakuHover(list) {
    if (!list) return;
    // 已绑定（含 cloneNode 继承 data-* 的情况）：仅同步引用，不重复绑定
    if (list.dataset.bilivexHoverBound) { boundChatList = list; return; }
    list.dataset.bilivexHoverBound = '1';
    boundChatList = list;
    const refresh = () => {
      // 仅处理可视范围内的前若干条，减少开销
      $$('.chat-item.danmaku-item', list).forEach(ensureDanmakuOverlay);
    };
    refresh();
    const mo = new MutationObserver(() => refresh());
    mo.observe(list, { childList: true, subtree: true });
    // 保存 observer 引用，供全局守护在节点被替换时断开旧 observer
    list._bilivexHoverMO = mo;

    // 事件委托——在 list 上统一处理 mouseover/mouseout，
    // 解决「B 站单条弹幕节点被替换后新节点没 onEnter/onLeave」导致的偶尔悬停失效。
    // 通过 e.target.closest('.chat-item.danmaku-item') 找到命中的弹幕，
    // 若未初始化自动 ensureDanmakuOverlay，再调用其 _bilivexOnEnter/OnLeave。
    // 兼容升级——若已有弹幕缺少 _bilivexOnEnter（旧版仅直接绑 mouseenter），
    //   强制重建 bar + onEnter/onLeave（先移除旧的 onEnter 残留引用避免冲突）。
    const findDmItem = (e) => {
      let n = e.target;
      while (n && n !== list) {
        if (n.classList && n.classList.contains('chat-item') && n.classList.contains('danmaku-item')) return n;
        n = n.parentElement;
      }
      return null;
    };
    // 升级已存在但缺 _bilivexOnEnter 的弹幕（旧版绑定）
    $$('.chat-item.danmaku-item[data-bilivex-inited="1"]', list).forEach((item) => {
      if (typeof item._bilivexOnEnter === 'function') return;
      // 移除旧 bar（旧版 ensureDanmakuOverlay 用直接 mouseenter 绑定 + bar），
      // 重新走 ensureDanmakuOverlay 重建（注意 dataset.bilivexInited 已存在会跳过，需要清掉）
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

  // 漂浮弹幕容器就绪检测（等待 SPA 异步加载）
  // 修复：部分房间弹幕直接挂在 .danmaku-item-container 下，
  // .bili-danmaku-x-dm-rotate 为空壳，导致 observer 绑错节点、漂浮 +1 永远不初始化。
  // 策略：优先返回实际包含 .bili-danmaku-x-dm 的容器，兼容两种渲染结构。
  // 遍历所有容器找「包含弹幕」的那个（页面可能存在多个同名容器/空壳，取含弹幕者）。
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

  // 驻留层：悬停中的弹幕从 B 站轨道容器移出后挂载于此，彻底脱离 B 站生命周期。
  // position:fixed 覆盖播放器区域；pointer-events:none 不拦截鼠标（弹幕自身 pointer-events:auto）。
  // 该层是 body 直属（非 .web-player-danmaku 子树），B 站清理逻辑遍历其容器时找不到驻留弹幕。
  // 全屏观看时插件 UI 全部失效——B 站全屏是把 #fullscreen-container
  // （含弹幕容器）整树全屏化，挂在 body 上的插件 UI（悬浮球/驻留层/toast）在全屏元素之外
  // 不被绘制 → 不可见不可交互。修复：getUiHost() 统一返回「当前应挂载插件 UI 的宿主」
  // （全屏时 = document.fullscreenElement，否则 = body），全屏切换时由 syncFullscreenUi 迁移。
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

  // 全屏切换时把插件 UI（悬浮球面板/驻留层/toast）迁入/迁出全屏宿主。
  // fullscreenElement 为 #fullscreen-container（实测 position:fixed + transform:none，
  // 铺满视口），其内 position:fixed 后代仍相对视口定位 → 迁移后 UI 位置不变。
  function syncFullscreenUi() {
    try {
      const host = getUiHost();
      ['bilivex-panel', 'bilivex-dm-resident', 'bilivex-toast'].forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.parentNode !== host) host.appendChild(el);
      });
    } catch (e) {}
  }

  // 返回「直播间画面」可视区边界（viewport 坐标），用于 +1 按钮 clamp。
  // 实测 .danmaku-item-container 与 .web-player-danmaku 矩形一致（= 播放器视频可视区），
  // 全屏时随 #fullscreen-container 铺满视口（0,0,屏幕宽高）——两种情况都是最准确的画面边界。
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

  // 从单条漂浮弹幕提取文本（与聊天区同源；聊天区 .danmaku-item 的 data-danmaku
  //   来自相同弹幕消息，此处从 DOM 内的 .bili-danmaku-x-text span 提取保证一致）
  function extractFloatingDmText(item) {
    if (!item) return '';
    const textSpan = item.querySelector('.bili-danmaku-x-text');
    if (textSpan) {
      // 排除前后可能混入的图标 alt / 空文本
      const t = (textSpan.textContent || '').trim();
      if (t) return t;
    }
    // 兜底修复：弹幕悬停后 +1 按钮会作为子元素追加到弹幕上（文本为 "+1"），
    // 直接取 item.textContent 会把按钮文本混入 → 发送内容变成「原文+1」。
    // 改为克隆节点并移除全部按钮后再取 textContent，保证只含弹幕本体文本。
    try {
      const clone = item.cloneNode(true);
      clone.querySelectorAll('.bilivex-float-plus-btn').forEach((b) => b.remove());
      return (clone.textContent || '').trim();
    } catch (e) {
      // 兜底：手工替换按钮文本（极端情况 clone 失败时）
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
    // 定位到弹幕中央偏上位置；position: fixed 避免被父元素 overflow / transform 影响
    // 挂载到全屏宿主（全屏时为 fullscreenElement），保证全屏下反馈动画可见
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

  // 判定「未完全进入画面」——弹幕右缘仍明显超出播放器可视区右缘
  // （如刚入场部分在画面右侧外）。此类弹幕悬停【不】创建驻留克隆：
  // 克隆按 getPlayerRect clamp 会把 left 收敛到 prect.right - 宽度 → 右缘贴死
  // 可视区右缘 → 弹幕从「仅露出一小截」被瞬间拉成「完整射入画面」。
  // 容差：仅尾部 20px 外露不视为未完全进入（clamp 微调 <20px 不可感知，
  // 保留对「大部分在画面内、小部分溢出」场景的黑色背景规避能力）。
  function isDmPartiallyOutside(rect, prect) {
    if (!prect) return false;
    return (rect.right > prect.right + 20);
  }

  // 未完全进入画面的弹幕 → 不暂停/不隐藏原弹幕（继续按原速从右侧
  // 进入），仅显示一个独立 +1 按钮：贴播放器可视区右边缘（水平 clamp）+ 垂直跟随弹幕
  // 当前 top（clamp 进可视区）。按钮作为引擎 hovered
  // 视觉节点（热区保持 + 离开清理由引擎驱动）；原弹幕悬停期间继续移动，完全进入后再次
  // 悬停即走正常驻留克隆路径。
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
  // 事件处理由全局几何引擎（FloatingDmEngine）驱动，item 只保存 onEnter/onLeave 回调。
  function ensureFloatingDmOverlay(item) {
    if (!item) return;
    if (!item.classList.contains('bili-danmaku-x-dm')) return;
    if (item.dataset.bilivexFloatInited) return;
    // 跳过被 B 站标记为禁用的弹幕
    if (item.classList.contains('bili-danmaku-x-disable')) return;
    item.dataset.bilivexFloatInited = '1';

    // 必须强制 pointer-events: auto，否则容器 .web-player-danmaku 的
    // pointer-events: none 会让命中检测失效
    item.style.pointerEvents = 'auto';

    // 无文本/无内容弹幕（表情/图片/空壳）可能尺寸为 0，几何扫描会跳过导致无法悬停。
    // 给最小可悬停尺寸（视觉不影响：弹幕文字本身撑开宽度；仅当确实无尺寸时兜底）。
    const r0 = item.getBoundingClientRect();
    if (r0.width === 0 || r0.height === 0) {
      item.style.minWidth = '60px';
      item.style.minHeight = '30px';
    }

    // 文本不再闭包缓存，click 时实时提取——B 站会复用弹幕节点并更新文本，
    // 若按钮闭包绑定旧 text 会「+1 发错内容」。无文本弹幕也能悬停（冻结+高亮），
    // 只是 +1 点击时提示无内容（解决「部分弹幕无法悬停」）。

    // 预创建 +1 按钮（悬停时才显示/追加，不预加载到每条弹幕后面）
    // 按钮置于弹幕正下方（left:50% + translateX(-50%)），不再贴右侧；
    // 热区由引擎控制（见 getHotRect 与 check）。此 btn 为兼容预留（实际悬停按钮在驻留克隆上）。
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
      // 关键修复：点击时实时从当前弹幕提取文本，
      // 避免 B 站复用节点更新文本后按钮仍发送旧内容（+1 发错内容）
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

    // onEnter/onLeave 由引擎驱动（不再绑 mouseenter/leave）。
    // 保活架构（修复幽灵弹幕 + 位置跳变）：
    // 「克隆驻留」虽根治了 B 站弹幕栈引用式销毁，但引入两个新问题：
    //  ① 取消悬定时克隆放回轨道 + 原节点同时恢复可见 → 两个弹幕同时在跑（幽灵堆叠）；
    //  ② visibility:hidden 不暂停 CSS 动画 → 原节点悬停期间动画继续播放（只是不可见），
    //     恢复可见时弹幕已跑到「原流速应出现的位置」（跳变）；原节点被栈删除时克隆放回从头播 → 消失。
    // 修正：
    //  - 悬停：原节点【真正暂停】动画（bili-danmaku-x-paused，animation-play-state:paused）
    //    而非仅 hidden，保证恢复时从暂停位置继续（y 轴/进度不跳变）；克隆驻留作视觉替身。
    //  - 取消悬定：若【原节点仍存活】→ 恢复原节点动画 + 【移除克隆】（消除双弹幕）；
    //    若【原节点已被 B 站栈删除】→ 克隆放回轨道续跑（这是克隆存在的唯一必要场景）。
    const onEnter = () => {
      if (!cfg.floatDmPlus) return null;
      try {
        // 已驻留（引擎 hovered 已是克隆，重复进入）→ 直接返回克隆
        if (item.dataset.bilivexResident === '1') return item;
        // 克隆透明度源 = 原节点「意图」透明度，而非瞬时计算值。
        // B 站机制 = 内联 --opacity CSS 变量 + 规则 .bili-danmaku-x-show { opacity: var(--opacity, 1) }。
        // 硬编码 opacity:1 会覆盖用户设置 → 悬停过弹幕永远 100% 不透明；
        // 改读 computed opacity → 又被 disable/fade 等 0.35s opacity 过渡的瞬时值冻住，
        // 表现为「悬停的克隆看起来半透明/无色」。修复：优先用内联 --opacity
        // 变量值（用户设置 + B 站意图），缺失再回退 computed，确保克隆显示用户期望透明度
        // 而非瞬时过渡值；最后兜底 '1'。
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
        // 1) 记录原节点动画进度，并【真正暂停】原节点动画（关键：paused 类 = animation-play-state:paused）
        let progress = 0;
        try {
          const anims = item.getAnimations();
          if (anims.length && anims[0].currentTime != null) progress = anims[0].currentTime;
        } catch (e) {}
        // 续跑克隆的 getAnimations()[0].currentTime 是「续跑已过时间」（WAAPI），
        // 不是原 CSS 时间线进度。需累加克隆在悬停时记录的 _bilivexAnimProgress（首次悬停时
        // 记录的 CSS 时间线等价进度），保证再次释放时 remainingMs = durMs - progress 算出正确的
        // 剩余时间与距离，从悬定位置以原流速准确续跑。
        if (item.dataset && item.dataset.bilivexContinued === '1' && item._bilivexAnimProgress) {
          progress = (item._bilivexAnimProgress || 0) + progress;
        }
        const rect = item.getBoundingClientRect();
        // 未完全进入画面的弹幕（部分在画面右侧外）被悬停时不创建驻留克隆——
        // 克隆按 clamp 会被强行拉进播放器可视区（视觉「完整射入画面」）。改为：原弹幕
        // 不暂停不隐藏、继续原速进入，仅显示 +1 边缘按钮（贴可视区右边缘）。判定与细节见
        // isDmPartiallyOutside / createEdgePlusBtn。
        try {
          const prectG = getPlayerRect();
          if (prectG && isDmPartiallyOutside(rect, prectG)) {
            return createEdgePlusBtn(item, rect, prectG);
          }
        } catch (e) {}
        const origParent = item.parentNode;
        // 长悬停场景 B 站可能复用/替换原节点（「复用节点更新文本」），
        // 通过 hover ID 标记让 onLeave 校验：标记消失 → 已被替换 → 走克隆续跑分支。
        const hoverId = String(Date.now()) + '-' + Math.random().toString(36).slice(2, 8);
        item.dataset.bilivexHoverPaused = hoverId;
        item._bilivexHoverId = hoverId;
        item._bilivexOrigParent = origParent;
        item._bilivexAnimProgress = progress;
        // 2) 克隆到驻留层（全新节点，B 站无引用，作视觉替身）
        //    ⚠️ 必须先克隆、后暂停原节点：cloneNode(true) 会复制内联样式，
        //    若先设 visibility:hidden 再克隆，克隆也会继承 hidden → 悬定弹幕消失看不见。
        const clone = item.cloneNode(true);
        const oldBtn = clone.querySelector('.bilivex-float-plus-btn');
        if (oldBtn) oldBtn.remove();
        clone.dataset.bilivexResident = '1';
        clone._bilivexHoverId = hoverId;
        clone._bilivexAnimProgress = progress;
        clone._bilivexOrigParent = origParent;
        // cloneNode(true) 只复制自身内联样式；若 B 站某变体（top/bottom/center 等动画
        // 使用 scale(var(--scale)) translateY(var(--translateY))）的变量由祖先容器设置并继承，
        // 克隆脱离子树后会丢失变量、回退到默认值，导致「克隆尺寸/位置与原节点不一致」。
        // 额外按 getComputedStyle 把原节点所有自定义属性（含从祖先继承的）物化到克隆，
        // 保证脱离子树后视觉与原节点完全一致；已知 B 站变量 + 通用兜底列表。
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
        // 暂停原节点动画（visibility:hidden 不暂停动画，必须用 paused 类）——放在克隆之后
        item.classList.add('bili-danmaku-x-paused');
        item.style.visibility = 'hidden';
        // 固定定位到原节点视觉位置（移除动画避免从头播放）
        // 克隆 fixed 定位按播放器可视区 clamp。弹幕刚进入画面（部分在画面外）
        // 时 rect 可能超出播放器右/左/下边界（实测弹幕从右侧入场 rect.left 可大于播放器右边缘），
        // 若直接按视口 rect 定位，克隆（高亮+边框+弹幕+按钮）会显示在播放器可视区外的黑色背景上。
        // 用 getPlayerRect() 把 left/top 收敛进播放器可视区：left ∈ [prect.left, prect.right-w]、
        // top ∈ [prect.top, prect.bottom-h]；弹幕完全在画面内时 clamp 不改变位置（行为不变），
        // 全屏时 prect 铺满视口（0,0,屏宽,屏高），clamp 同样不改变位置。
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
        // 确保克隆可见（防御：即便原节点带 hidden 样式被复制，也强制显示）
        // B 站 CSS 规则 .bili-danmaku-x-dm { opacity: 0 }——弹幕默认 opacity:0，
        // 由 B 站 JS/动画在播放时设为 1。我们克隆时移除了 animation（避免从头播放），
        // 若不移除 opacity 内联，克隆停在 opacity:0 → 悬定弹幕【直接消失看不见】。
        // 必须显式设置 opacity:1（内联最高优先级，覆盖 CSS 规则）。
        clone.style.visibility = '';
        // 克隆使用原节点「意图透明度」（--opacity 变量 → 用户设置），
        // 替代硬编码 opacity:1（永远 100%）；也替代 computed opacity
        // （瞬时 fade 值会被克隆冻住，表现为「半透明悬死」）。
        clone.style.opacity = origOpacity;
        // 冻结 + 高亮 + 细边框
        clone.classList.add('bili-danmaku-x-paused');
        clone.style.backgroundColor = currentTheme.highlight;
        clone.style.boxShadow = 'inset 0 0 0 1px ' + currentTheme.primary;
        // 3) 驻留层按钮（绑定 clone 的实时文本）
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
        // +1 按钮置于悬定弹幕正下方（水平居中、不遮挡弹幕文字）。
        // 若按钮正下方超出直播间画面下边缘（弹幕靠近画面底部），clamp 到画面底部边缘。
        // top:100% 需等布局完成才能量到按钮真实位置 → 下一帧测量并修正。
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
        // 4) 克隆的 onLeave（引擎 hovered 指向克隆时调用）：
        //    一律克隆续跑：原节点保持 paused+hidden，由 B 站在原定时间
        //    自然剥类回收；克隆放回轨道用 WAAPI 续跑剩余动画。
        clone._bilivexFloatOnLeave = () => {
          try {
            // 识别「原节点是否为插件续跑克隆」——若是，B 站无引用不会回收，
            // 应在续跑克隆放回轨道成功后直接 item.remove，避免与续跑克隆并存成幽灵；
            // B 站原生节点保持 paused+hidden，由下方 fallback 兜底处理。
            const isContOriginal = !!(item && item.dataset && item.dataset.bilivexContinued === '1');
            cBtn.style.display = 'none';
            clone.style.backgroundColor = '';
            clone.style.boxShadow = '';
            clone.style.zIndex = '';
            // 原节点「是否被 B 站复用」判定（累计修复）：
            // 长悬停时 B 站可能替换/复用原节点，isConnected 仍 true 但已是别的弹幕，不能直接恢复。
            // 实测 B 站对漂浮弹幕是【就地复用】：动画自然结束后不移除、也不清我们的 marker
            // （data-bilivex-hover-paused 幸存），仅重置 className/style 复用于新弹幕——只比对
            // marker 会把「属于别的弹幕的节点」恢复出来；真实复用必重置 className 移除我们加的
            // bili-danmaku-x-paused 类，故恢复原节点前必须额外验证原节点仍处于冻结态。
            // 实测 B 站回收机制：节点创建时按原始动画时长 D 排定【定时器】，到点直接移除
            // .bili-danmaku-x-roll 类（触发 animationcancel）约 1.9s 后就地复用，该定时器不受 paused
            // 影响 → 旧「恢复原节点」方案必然提前消失。故一律走克隆续跑方案：
            // 克隆是 B 站无引用新节点，定时器不作用，能完整跑完剩余动画再由 onfinish 清理；原节点
            // 保持 paused+hidden 不恢复，由 B 站在原定时间自然剥类回收，另加下方兜底清理防残留。
            // 兜底延迟必须读【原节点】动画时长——克隆 onEnter 已设 animation:none，
            // 读克隆为 0，旧 1500ms 会在克隆仍在续跑时提前恢复原节点 → 与原节点并存成幽灵双弹幕。
            // B 站复用前会移除 paused 类 + 恢复 visibility 但不清 marker，旧兜底 delay 后才删
            // marker，期间被复用节点带旧 marker → isBilivexReleasingDm 误判跳过（无法悬停）；下方用
            // 短间隔轮询：一旦原节点不再冻结（paused 没了 / visibility 非 hidden）立即删 marker。
            if (!isContOriginal) {
              try {
                if (item && item.isConnected && item.dataset.bilivexHoverPaused === (clone._bilivexHoverId || '')) {
                  let dMs = 0;
                  try { dMs = (parseFloat(getComputedStyle(item).animationDuration) || 0) * 1000; } catch (e2) {}
                  const delay = Math.max(0, dMs - (clone._bilivexAnimProgress || 0)) + 1500;
                  // B 站就地复用原节点前会移除 paused 类 + 重置 style（visibility 恢复），
                  // 但不清 marker（data-bilivex-hover-paused 幸存）。旧兜底 delay=remainingMs+1500 才删
                  // marker，期间被复用的节点 = 「新弹幕内容 + 旧 marker」→ isBilivexReleasingDm 误判跳过
                  // （偶发无法悬停）。修复：短间隔轮询检测「原节点是否已剥类/复用」——一旦不再
                  // 处于冻结态（paused 类没了 或 visibility 不再是 hidden）立即删 marker，让新弹幕尽快
                  // 恢复可悬停属性；仍冻结时保持 marker（幽灵防护依赖 marker+paused+hidden 三条件）。
                  // 轮询在下方兜底 setTimeout 执行时停止（兜底也会删 marker，双保险）。
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
                        // 仅当原节点仍带 roll（尚未被 B 站剥类回收）才恢复其可见/动画；
                        // 若已被 B 站剥类（等复用），保持 hidden 由 B 站复用重置 style 时恢复，
                        // 避免把「裸节点」提前显示成可见残留。
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
            // 原节点已被 B 站栈删除/替换（长悬停）或仍存活（短悬停也走克隆）→ 克隆放回轨道续跑
            // （克隆是 B 站无引用的新节点，B 站定时器不作用于它，能完整跑完剩余动画）
            clone.classList.remove('bili-danmaku-x-paused');
            clone.dataset.bilivexResident = '';
            // 长悬停期间 B 站 SPA 可能重建/移除轨道容器（罕见，如播放器
            // 切换线路/全屏过渡等），导致 op 断开。旧逻辑：if (op && op.isConnected) 为假 →
            // 克隆滞留在驻留层（fixed+animation:none+marker 在+无 onEnter = 静止+不可操作
            // = 「弹幕不动且无法操作」偶发卡死）。修复：op 断开时兜底回当前
            // findFloatingDmContainer()，克隆续跑不滞留。
            let op = clone._bilivexOrigParent;
            if (!op || !op.isConnected) {
              try { op = findFloatingDmContainer(); } catch (e2) {}
            }
            if (op && op.isConnected) {
              // 保留视觉位置续跑。
              // 旧逻辑直接清空 clone.style.position/left/top → 克隆回到容器 content origin，
              // 视觉位置瞬间跳到「自然位置」，用户看到的是「瞬间跳到原流速应在的位置」而非「从驻留位置续跑」。
              // 新逻辑：把 viewport-relative (fixed) 坐标换算为 op-relative (absolute)，
              // 并用 Web Animations API 从驻留位置驱动 transform 到剩余终点（线性，与原 CSS 动画一致）。
              const cloneRect = clone.getBoundingClientRect();
              const opRect = op.getBoundingClientRect();
              const progress = clone._bilivexAnimProgress || 0;
              // 先清掉 inline animation，让 B 站 CSS 规则的 computed 值能被 getComputedStyle 读到
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
              // 切换定位：fixed(viewport) → absolute(parent)，保留 hover 视觉位置
              clone.style.position = 'absolute';
              clone.style.left = (cloneRect.left - opRect.left) + 'px';
              clone.style.top = (cloneRect.top - opRect.top) + 'px';
              clone.style.margin = '0';
              // 标记续跑克隆——后续再次悬停→释放时识别「原节点是插件克隆」，
              // 直接移除（B 站无引用不回收，避免与再续跑克隆并存成幽灵）。
              clone.dataset.bilivexContinued = '1';
              op.appendChild(clone);
              // 用 Web Animations API 驱动 transform 从驻留位置续跑到剩余终点
              // （不依赖 CSS 动画重启动画的小技巧，规避 animationDelay 在重启后不生效的问题）
              if (durMs > 0 && txVal > 0 && progress > 0 && progress < durMs) {
                const remainingMs = durMs - progress;
                const remainingDist = txVal * (remainingMs / durMs);
                try {
                  // WAAPI 独占 transform——保持 animation:none，
                  // 避免上方 clone.style.animation='' 重启的 CSS roll 动画残留竞争 transform。
                  clone.style.animation = 'none';
                  const wa = clone.animate(
                    [{ transform: 'translateX(0)' }, { transform: 'translateX(-' + remainingDist + 'px)' }],
                    { duration: remainingMs, fill: 'forwards', easing: 'linear' },
                  );
                  // WAAPI 跑完即时清理。
                  // fill:forwards 的 WAAPI 动画结束不派发 animationend，
                  // 必须靠 onfinish 精确触发（跑完瞬间 remove）。
                  const fin = () => { try { if (clone.isConnected) clone.remove(); } catch (e2) {} };
                  wa.onfinish = fin;
                  wa.oncancel = fin;
                  // 兜底改为动态：remainingMs + 1s 余量（仅异常保护，正常靠 onfinish）。
                  // 旧固定 15s 在 remaining>15s 会提前删弹幕。
                  setTimeout(fin, remainingMs + 1000);
                } catch (e2) {
                  // clone.animate 异常 → 走 CSS 回退路径（原逻辑 + animationend + 15s）
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
                // 进度异常（0/durMs 边界）：按旧逻辑保留原 CSS 动画重启动画作兜底
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
            // 续跑克隆恢复可悬停属性——清除接管 marker（cloneNode 复制了
            // data-bilivex-hover-paused，被 isBilivexReleasingDm 判为「等待回收」跳过），
            // 并重挂 onEnter/onLeave（cloneNode 不复制 JS 属性）。同弹幕释放后可再次悬停。
            // 注意顺序：先 null 旧 onLeave，再 ensureFloatingDmOverlay 挂新 onLeave（设置
            // _bilivexFloatOnLeave），最后才不再 null（新 onLeave 必须存活）。
            clone._bilivexFloatOnLeave = null;
            try {
              delete clone.dataset.bilivexHoverPaused;
              delete clone.dataset.bilivexFloatInited;
              ensureFloatingDmOverlay(clone);
            } catch (e2) {}
            // 原节点若是插件续跑克隆（B 站无引用不回收）→ 移除（它已被
            // 放回轨道的续跑克隆取代），避免与续跑克隆并存形成第二类幽灵；B 站原生节点
            // 走上方 fallback setTimeout（保持 paused+hidden 由 B 站定时器自然回收）。
            if (isContOriginal) {
              try { if (item && item.isConnected) item.remove(); } catch (e2) {}
            }
          } catch (e5) {}
        };
        return clone;
      } catch (e) { return null; }
    };
    const onLeave = () => {
      // 原节点自身的 onLeave（异常路径兜底）——恢复原节点动画与可见性。
      // 正常情况下引擎 hovered 指向克隆，由克隆的 _bilivexFloatOnLeave 处理。
      // 不得调用 anims[0].play()（会破坏后续 paused 类冻结）。
      try {
        item.classList.remove('bili-danmaku-x-paused');
        item.style.visibility = '';
      } catch (e) {}
    };

    // 保存 onEnter/onLeave 到 item 上，供全局几何引擎调用
    try {
      item._bilivexFloatOnEnter = onEnter;
      item._bilivexFloatOnLeave = onLeave;
    } catch (e) {}

    // 保存清理函数（供 SPA 重建 / 开关切换时释放）
    item._bilivexFloatCleanup = () => {
      if (btn.parentNode) btn.parentNode.removeChild(btn);
      item.classList.remove('bili-danmaku-x-paused');
      item.style.backgroundColor = '';
      item.style.boxShadow = '';
      item.style.zIndex = '';
      // 原节点若被暂停/隐藏（克隆驻留时 paused + visibility:hidden），恢复动画与可见
      // 不得调用 anims[0].play()（会破坏后续 paused 类冻结）
      try {
        item.classList.remove('bili-danmaku-x-paused');
        item.style.visibility = '';
      } catch (e) {}
      // 若弹幕处于驻留层（轨道解耦中），开关关闭/SPA 重建时移回原容器，
      // 避免驻留层残留游离节点（保留视觉位置即可，不恢复动画——切换后本就不该再悬停）
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

  // 判定：该弹幕是否已被我们接管/释放（等待 B 站回收），不可再触发悬停。
  // 取消悬定后原节点保持 paused+visibility:hidden 等 B 站定时器剥类回收，但 rect 仍可测且仍带
  // _bilivexFloatOnEnter——若几何扫描命中它 → 新建驻留克隆，与轨道上仍在续跑的克隆并存 = 同文本
  // 双弹幕（幽灵）。判定三条件【必须同时满足】：marker（data-bilivex-hover-
  // paused，onEnter 打的接管标记）+ paused 类 + visibility:hidden。仅 marker/paused 任一命中会在
  // B 站【就地复用】场景误伤新弹幕：复用只重置 className（移除 paused 类）并恢复 visibility、不清
  // marker（实测幸存）→ 新弹幕带旧 marker 被误跳过；三条件同时满足则复用后必不满足 → 放过可悬停；
  // 续跑克隆 re-arm 后 marker 已清 → 放过可悬停；仍被我们冻结的原节点三条件都满足 → 跳过（幽灵
  // 防护不退化）。性能：先查 marker/paused（DOM 属性，快），仅两者都命中才 getComputedStyle 查
  // visibility。
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
    rafId: 0,            // rAF 节流句柄
    bound: false,        // 全局监听只绑一次
    keepTimer: null,     // 保活轮询句柄
    _lastMoveTs: 0,      // 上一次 pointermove 时间戳（用于速度计算）
    _lastVelocity: 0,    // 上一次 pointermove 瞬时速度（px/ms），快速滑移判定
    _cand: null,         // 当前帧的悬停候选弹幕（需下一帧同候选才确认触发，避免快速滑移单帧穿过误触发）
    _candHits: 0,        // 候选命中帧计数（≥2 且 miss≤1 即确认）
    _candMiss: 0,        // 候选 miss 计数（允许 1 帧被遮挡/划过，连续 2 帧 miss 才重置）
    _followRaf: 0,       // 候选确认用的跟进 rAF（鼠标停下后无新 pointermove，靠此推进第 2 帧确认）

    start() {
      if (this.bound) return;
      this.bound = true;
      // 同时监听 pointermove + mousemove（部分环境/自动化只派发 mousemove），
      // rAF 节流保证同帧只检查一次（真实浏览器 pointermove 后紧跟 mousemove，天然去重）。
      // 顺手计算两次 pointermove 之间的瞬时速度（px/ms），用于 check() 判定
      //   「快速滑移」并抑制新悬停——修复全屏右上角弹幕始发区大范围
      //   滑移时，几何兜底把「鼠标在 VIDEO 上、附近飘过的弹幕」误判悬停、大量同文本红框
      //   冻结在右上角的 Bug。
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

      // 核心：动画回收拦截（window 级 capture，事件流最顶端最先执行）。
      // B 站漂浮弹幕生命周期：CSS animation 播放（入场→存活）→ animationend 触发 →
      // B 站清理监听器 removeChild 回收（超时回收）。在 item 上绑 capture 拦截
      // 只能挡住「绑定在 item 自身」的监听器；若 B 站的清理监听器挂在父容器
      // （.danmaku-item-container/.bili-danmaku-x-dm-rotate）或 document 上，
      // 事件捕获顺序 window→document→父容器→item 会先执行上层监听，item 拦截失效，
      // 悬定弹幕在原弹幕应消失时仍被移除。修复：把拦截提升到 window capture——
      // 只要事件目标是 hovered 弹幕（或其子元素）且处于 paused（悬定）状态，
      // stopImmediatePropagation 立即阻断整条事件链，B 站任何层级的清理监听器都不会执行。
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
      // animationend：弹幕动画播放完毕（原弹幕应被回收的时刻）
      window.addEventListener('animationend', onAnimEndBlock, true);
      // animationcancel：动画被取消时（弹幕中途被打断）也可能触发 B 站回收，一并拦截
      window.addEventListener('animationcancel', onAnimEndBlock, true);
    },

    // 热区区分两种场景——
    //  - getBodyRect：弹幕本体（±6px 容错），用于「寻找新弹幕」：鼠标必须在弹幕本体上才触发悬停，
    //    避免「鼠标放在弹幕右侧空白（+1 按钮将来出现的位置）就误悬停」。
    //  - getHotRect：弹幕 + 下方60px（+1 按钮在弹幕正下方）用于「已悬停后的保持」：
    //    悬停后按钮出现在弹幕正下方，鼠标从弹幕下移到按钮全程保持；
    //    右侧收窄到 +20px 防抖动（按钮不再在右侧，旧 80px 热区会误保持悬停）。
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

    // 从 efp + 严格几何扫描中找「新悬停候选」弹幕，但【不】直接触发 hover——
    //   交给 check() 做 2 帧确认（快速滑移单帧穿过不会持续命中同一候选 → 永不触发，
    //   真实悬停场景用户移向目标后停止 → 下一帧同一候选 → 确认触发）。
    //   严格几何：对已初始化弹幕（pointer-events:auto）若 efp 未命中说明被覆盖 → 跳过
    //   （修复全屏右上角 elementFromPoint=VIDEO、附近飘过的弹幕被 ±6px 误命中）；
    //   未初始化弹幕（pointer-events:none）保留 ±6px 用于首次悬停兜底。
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
          // 已初始化弹幕 pointer-events:auto → 若 efp 未命中必有其它元素覆盖，跳过
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
      // 修复：全屏右上角大范围滑移 → 几何兜底误命中飘过的弹幕 → 红框冻结：
      // 快速滑移抑制——两次 pointermove 瞬时速度 > 2.5 px/ms（≈2500px/s 快速手势）→ 跳过本次新悬停
      // 判定（efp/几何/候选/跟进 rAF 均不执行）；热区保持/离开仍正常（不误伤已悬停弹幕）。
      // 速度取上一次 pointermove 瞬时值（无时间衰减）：持续滑移中即使帧间隔 >30ms 仍判快速滑移。
      // 已知折中：极少数「快速甩向目标后立刻停下」场景需再轻移一下触发二次 check——优于不抑制。
      const fastMove = (this._lastVelocity || 0) > 2.5;
      // 鼠标在插件自身 UI（悬浮球面板/菜单/输入框/聊天区按钮条）上时，
      // 不触发新悬停，并取消当前悬停（否则面板覆盖弹幕时，几何扫描会把面板位置误判为弹幕悬停）。
      // 注意：+1 按钮（.bilivex-float-plus-btn）不在排除之列——它是悬停弹幕的子元素，
      // 由下方热区逻辑保持悬停（鼠标从弹幕移到按钮路径不中断）。
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
      // 1) 当前悬停弹幕仍在 DOM 且鼠标在其热区内 → 保持（什么都不做）
      if (cur && cur.isConnected) {
        const hr = this.getHotRect(cur);
        if (px >= hr.l && px <= hr.r && py >= hr.t && py <= hr.b) return;
      }
      // 2) 鼠标离开当前热区 → 先取消悬停
      if (cur) this.leave(cur);
      // 快速滑移直接跳过新悬停判定（包括 efp/geo 候选构建 + 跟进 rAF 调度）。
      //   不调度跟进 rAF：持续滑移时 pointermove 持续刷新速度、check 持续被 fastMove 短路，
      //   不会无谓触发。鼠标停下后速度衰减，但本帧已 return，需等下一次 pointermove 才会
      //   再次进入 check（此时 fastMove=false 走正常 2 帧确认）——对真实悬停可接受。
      if (fastMove) { this._cand = null; this._candHits = 0; this._candMiss = 0; return; }
      // 3) 计算新悬停候选（efp + 严格几何），不直接 hover
      const cand = this._computeCandidate(px, py);
      // 4) 2 帧悬停确认——同一候选连续 2 帧命中（且非快速滑移，本函数 fastMove 已短路）
      //   才确认触发 hover。快速滑移场景下候选持续帧帧变化（不同弹幕）→ 永不确认 → 不冻结。
      //   真实悬停场景用户移向目标后停下 → 下一帧同一候选 → 确认（约 16-50ms 延迟可接受）。
      //   候选节点身份变化（B 站就地复用原节点替换为新内容）也判为不同候选，避免误触发。
      //   放宽为「同候选 2 帧内任一帧命中（容忍中间 1 帧 miss）」——
      //   高流量弹幕下：光标停在一帧被其它弹幕/UI 划过时，
      //   旧逻辑把 _cand 立即置 null 且不再调度跟进 rAF → 确认链中断，需用户重新移动
      //   鼠标才可能悬停（偶发「悬停未 engage」/释放后再悬停失败）。
      //   fix 后：候选命中计数保留，允许 1 帧 miss（_candMiss≤1）继续跟进 rAF；
      //   连续 2 帧 miss 或候选变化超限才重置。快速滑移（fastMove 短路）与严格几何
      //   （covered skip）防护不变 → 全屏右上角误悬停修复不回归。
      if (!cand) {
        if (this._cand) {
          this._candMiss = (this._candMiss || 0) + 1;
          if (this._candMiss <= 1) {
            if (!this._followRaf) {
              this._followRaf = requestAnimationFrame(() => { this._followRaf = 0; this.check(); });
            }
            return; // 保留候选，等 1 帧恢复后确认
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
        // 无旧候选 / 旧候选 miss 超限 → 切换为新候选（第 1 次命中）
        this._cand = cand; this._candHits = 1; this._candMiss = 0;
      } else {
        // 旧候选仍持有（miss≤1），当前帧命中不同候选：不计数新候选，继续跟进旧候选
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
      // onEnter 返回「视觉节点」（克隆驻留节点）；引擎 hovered 指向克隆，
      // 原节点不再参与交互。后续 check/leave 都作用于克隆。
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

    // ---------- 保活：悬停中的弹幕被 B 站移除时自动重挂载，保持不消失 ----------
    // 记录悬停弹幕最后一次有效位置（rect），重挂载到同一位置而非固定 200,100，
    // 视觉不跳变；重挂载后立即重新 onEnter（恢复 paused/z-index/按钮 + window 级拦截保护，
    // 防止二次回收）。
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
        // 记录最近有效位置（每次轮询刷新；仅当弹幕有实际尺寸时记录）
        try {
          const r = item.getBoundingClientRect();
          if (r.width > 0 && r.height > 0) {
            this._keepRect = { left: r.left, top: r.top, width: r.width, height: r.height };
          }
        } catch (e) {}
        return;
      }
      // 悬停对象是 +1 边缘按钮（未完全进入弹幕的视觉节点，非弹幕节点）
      // 且已断开 → 直接清理（边缘按钮挂在驻留层，只由 leave/清理逻辑移除），不做弹幕保活
      // 克隆（克隆按钮到轨道容器会成游离 +1 残留）。
      if (!(item.classList && item.classList.contains('bili-danmaku-x-dm'))) {
        try { if (item._bilivexFloatOnLeave) item._bilivexFloatOnLeave(); } catch (e) {}
        this.hovered = null;
        this.stopKeepAlive();
        return;
      }
      // 驻留弹幕（data-bilivex-resident=1）被全局清理时，克隆回【驻留层】而非 B 站轨道容器——
      // 回 B 站容器会被其生命周期立即再次移除；驻留层由插件独占管理，不会再被误杀。
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
      // 驻留克隆必须显式可见（B 站 CSS .bili-danmaku-x-dm { opacity: 0 }，
      // 移除动画后克隆停在 opacity:0 会不可见）
      clone.style.visibility = '';
      // 重挂载克隆继承原 inline opacity（驻留克隆携带 origOpacity；非驻留
      // 原节点无内联 → 回退 getComputedStyle 读用户设置）。保证保活后的克隆透明度一致。
      try {
        clone.style.opacity = item.style.opacity || getComputedStyle(item).opacity || '1';
      } catch (e3) { clone.style.opacity = '1'; }
      container.appendChild(clone);
      // 驻留克隆无 _bilivexFloatCleanup，需重新挂载 onLeave（放回轨道+恢复动画）
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
            // 保活路径同样处理 op 断开兜底——B 站 SPA 重建移除原容器时
            // 回退到当前 findFloatingDmContainer()，避免克隆滞留驻留层卡死。
            let op = clone._bilivexOrigParent;
            if (!op || !op.isConnected) {
              try { op = findFloatingDmContainer(); } catch (e2) {}
            }
            if (op && op.isConnected) {
              // 保留视觉位置续跑（与主分支 onLeave 一致）。
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
              // 标记续跑克隆——后续再次悬停→释放时识别「原节点是插件克隆」，
              // 直接移除（B 站无引用不回收，避免与再续跑克隆并存成幽灵）。
              clone.dataset.bilivexContinued = '1';
              op.appendChild(clone);
              if (durMs > 0 && txVal > 0 && progress > 0 && progress < durMs) {
                const remainingMs = durMs - progress;
                const remainingDist = txVal * (remainingMs / durMs);
                try {
                  // WAAPI 独占 transform，保持 animation:none
                  clone.style.animation = 'none';
                  const wa = clone.animate(
                    [{ transform: 'translateX(0)' }, { transform: 'translateX(-' + remainingDist + 'px)' }],
                    { duration: remainingMs, fill: 'forwards', easing: 'linear' },
                  );
                  // WAAPI 跑完即时清理 + 动态兜底
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
            // 保活路径的续跑克隆同样恢复可悬停属性——清 marker + 重挂 onEnter。
            // 与主分支 onLeave 的区别：保活路径没有原 B 站节点引用，无需移除 cont 原节点。
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

  // 绑定漂浮弹幕容器的 MutationObserver，监听新弹幕注入
  // 使用后代选择器 :scope .bili-danmaku-x-dm，兼容 rotate 直挂与
  // .danmaku-item-container 直挂两种结构；ensureFloatingDmOverlay 内部有 dataset 去重，
  // 不会重复初始化。
  // 记录当前已绑定的漂浮弹幕容器引用，供全局守护比对（节点被替换时重绑）。
  // 事件委托已废弃，由全局几何引擎（FloatingDmEngine）驱动；本函数只负责
  //   MutationObserver 初始化新弹幕 + 启动引擎。
  let boundFloatContainer = null;
  function attachFloatingDmHover(rotate) {
    if (!rotate) return;
    // 已绑定（含 cloneNode 继承 data-* 的情况）：仅同步引用，不重复绑定
    if (rotate.dataset.bilivexFloatBound) { boundFloatContainer = rotate; return; }
    rotate.dataset.bilivexFloatBound = '1';
    boundFloatContainer = rotate;
    const refresh = () => {
      $$(':scope .bili-danmaku-x-dm', rotate).forEach(ensureFloatingDmOverlay);
    };
    refresh();
    const mo = new MutationObserver(() => refresh());
    mo.observe(rotate, { childList: true, subtree: true });
    // 保存 observer 引用，便于开关切换时断开
    rotate._bilivexFloatMO = mo;
    // 升级兼容——已有弹幕缺 onEnter/onLeave（旧版直接绑 mouseenter）则重建
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
    // 启动全局几何引擎（幂等）
    FloatingDmEngine.start();
  }

  // 漂浮弹幕 +1 开关切换：开关关闭时解除已绑定弹幕的监听器
  function toggleFloatingDmEnabled() {
    const rotate = findFloatingDmContainer();
    if (!rotate) return;
    if (cfg.floatDmPlus) {
      // 开启：重新绑定容器 MO + 处理已存在的弹幕
      if (rotate._bilivexFloatMO) {
        try { rotate._bilivexFloatMO.disconnect(); } catch (e) {}
      }
      attachFloatingDmHover(rotate);
    } else {
      // 关闭：移除所有已增强弹幕的监听器与按钮，并停止引擎
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
      // 驻留层中的弹幕（轨道解耦中）一并清理——移回原容器 + 触发 cleanup
      if (residentLayer && document.body.contains(residentLayer)) {
        $$('.bili-danmaku-x-dm', residentLayer).forEach(item => {
          // 驻留层节点是克隆（无 _bilivexFloatCleanup），直接移回轨道容器并恢复可见
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

  // 记录已绑定的输入框容器引用，供全局守护比对（ctl 被替换时断开旧 observer）
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
          // 通过原生 setter 替换值，确保 v-model 拿到更新
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
    // 保存 observer 引用，供全局守护在 ctl 被替换时断开旧 observer
    ctl._bilivexTailMO = mo;
  }

  // ---------- 一键点赞（30 连击点亮粉丝团灯牌） ----------
  // B 站规则：直播中连续点赞 30 次可点亮粉丝团灯牌。
  // B 站点赞存在冷却间隔（点击后按钮短暂 disabled/aria-disabled），
  // 固定 120ms 间隔会撞上冷却导致计数中断。改为「轮询等待按钮可用再点 + 随机 350-600ms 间隔」，
  // 模拟真人点击节奏，避开固定间隔风控，确保 30 次全部生效。
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
    // 提到 30s——5 倍数特效期间按钮锁定更久，15s 会在 20 次左右耗尽
    let waitBudget = 30000;
    // 反馈验证——点击后 150ms 检测按钮状态变化确认本次点击「真正生效」。
    // B 站在连击 5 的倍数（5/10/15/20/25/30）时播放特殊动画，期间点击可能被吞：
    // 盲计数会导致 count 虚增、实际点赞不到 30。验证通过才计数，无效点击重试不计入。
    let noFeedbackStreak = 0;   // 连续无反馈次数
    const NO_FEEDBACK_THRESHOLD = 3; // 连续 3 次无反馈 → 判定「无反馈环境」（游客态）
    let blindMode = false;      // 游客态盲计数模式（保持旧行为，功能不退化）

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
      // 每次重新查询：SPA 切房/重建 DOM 时旧引用失效
      const cur = document.querySelector('.like-btn');
      if (!cur) { stopped = true; stopReason = '按钮已消失'; finish(); return; }
      // 按钮冷却中 → 等待 150ms 后再试（不计数、不占间隔），直到冷却结束
      if (cur.disabled || cur.getAttribute('aria-disabled') === 'true') {
        waitBudget -= 150;
        if (waitBudget <= 0) { stopped = true; stopReason = '按钮持续冷却'; finish(); return; }
        timer = setTimeout(tick, 150);
        return;
      }
      // 盲计数模式（已判定无反馈环境，如游客态）→ 保持旧行为
      if (blindMode) {
        try { cur.click(); count++; }
        catch (e) { stopped = true; stopReason = '点击异常'; finish(); return; }
        if (count >= LIKE_COUNT) { finish(); return; }
        timer = setTimeout(tick, 350 + Math.floor(Math.random() * 250));
        return;
      }
      // 反馈验证模式：点击前记录状态（class / aria-pressed）
      const beforeCls = (cur.className || '').toString();
      const beforePressed = cur.getAttribute('aria-pressed');
      try { cur.click(); }
      catch (e) { stopped = true; stopReason = '点击异常'; finish(); return; }
      // 150ms 后验证反馈：class 变化 / aria-pressed 变化 / 出现 clicked|active|liked 类
      timer = setTimeout(() => {
        const cls = (cur.className || '').toString();
        const pressed = cur.getAttribute('aria-pressed');
        const hasFeedback = cls !== beforeCls || pressed !== beforePressed ||
          /clicked|active|liked/i.test(cls) || pressed === 'true';
        if (hasFeedback) {
          // 本次点击真正生效 → 计数
          noFeedbackStreak = 0;
          count++;
          if (count >= LIKE_COUNT) { finish(); return; }
          // 5 的整数倍节点（5/10/15/20/25）→ 延长等待 900ms，
          // 让 B 站特殊连击动画完整播放完再点下一次（否则下次点击撞上特效被吞）。
          const isMultipleOf5 = (count % 5 === 0);
          timer = setTimeout(tick, (isMultipleOf5 ? 900 : 450) + Math.floor(Math.random() * 150));
        } else {
          // 点击被吞（5 倍数特效窗口 / 事件未生效）→ 不计数，稍后重试
          noFeedbackStreak++;
          if (noFeedbackStreak >= NO_FEEDBACK_THRESHOLD) {
            // 连续 3 次无反馈 → 该环境按钮无可见反馈（游客态）→ 切盲计数，避免死循环
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
      // 初始位置：若用户拖拽过（cfg.panelPos 持久化）则用拖拽位置，否则用 right:18px;top:96px；
      // 随后由 avoidChatCollision 在 append 后实测一次，若与聊天区相交则改放到 left:18px;top:96px。
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
      // 优先追加到当前 section，否则追加到 body
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
    // 修复 textarea 越界：wrap 强制 box-sizing + width:100%，input 也加 border-box，
    // 保证完全包含在外层 section（240px 含 padding）内不溢出。
    const tailWrap = document.createElement('div');
    tailWrap.style.cssText = 'margin-bottom:8px;box-sizing:border-box;width:100%;padding-right:0;';
    tailWrap.appendChild(lbl('尾巴内容', { muted: true }));
    // 修复配色越界：必须用 += 追加样式（不能用 = 覆盖，否则抹掉 txt() 默认的
    // color:#222/background:#fff/border 等——粉色主题下面板 body 是深背景，input 继承
    // 后变成深底深字=完全不可读）。追加 box-sizing + max-width 保证不越界即可。
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
    // 移除"一键点赞"开关：单次触发的功能（点一次跑 30 次），无需持久开关状态。
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

    // 折叠/展开与拖拽统一由「点击/长按拖动」逻辑处理（见 bindDragHandlers）。
    // 不再单独绑 tog click（避免与整区点击重复触发），tog 仅作视觉箭头。

    // 拖拽（document 级监听器在模块顶层只绑定一次，这里只更新共享状态）
    currentPanel = panel;
    head.addEventListener('mousedown', (e) => {
      // 按下记录起点与时间，由 document 级监听判断「点击(toggle) / 长按拖动 / 快速拖动」
      pressState.down = true;
      pressState.x = e.clientX;
      pressState.y = e.clientY;
      pressState.moved = false;
      pressState.longPressed = false;
      pressState.panelRef = panel;
      clearTimeout(pressState.longTimer);
      // 长按 220ms 后即使未移动也进入拖动模式（支持「按住小球稍等再拖」）
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

    // 挂载到全屏宿主，保证全屏下悬浮球可用（syncFullscreenUi 负责迁移）
    getUiHost().appendChild(panel);

    // 折叠态：初始即附加 hover 加深效果（展开态由 setPanelCollapsed 折叠时再附加）
    if (collapsed) attachCollapsedHover(head, panel);

    // 主题应用：刷新主题按钮高亮与面板阴影
    applyTheme();

    // 实测一次面板位置，若与 .chat-history-list 相交则改放到左侧。
    // 这是聊天区在右侧的常见布局下悬停+1失效的根本修复。
    // 折叠态同样调用一次（56×56 圆钮仍可能被拖到聊天区上方）。
    avoidChatCollision(panel);
  }

  // 折叠态圆形按钮的 hover 加深效果（幂等绑定，防止重建/切换时重复监听）。
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

  // 原位切换面板的折叠/展开视觉（不重建 DOM，保留拖拽位置与监听器）。
  // 折叠：先隐藏 body 内容并锁定当前高度，下一帧再切换到 56×56 圆形，触发平滑过渡。
  // 展开：先恢复 body 内容与 220px 宽度并测量目标高度，再过渡到目标高度，结束后还原 height:auto。
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
      // 折叠：立即隐藏内容，锁定当前高度，再动画收缩为 56×56 圆钮
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

    // 展开：临时关闭过渡以便在「展开视觉 + 220px 宽」下准确测量目标高度，
    // 随后恢复折叠视觉并回到 56px 起点，下一帧再从折叠态平滑动画展开。
    if (body) body.style.display = '';
    const savedTransition = panel.style.transition;
    panel.style.transition = 'none';
    applyPanelCollapsedStyles(panel, head, title, tog, false);
    panel.style.width = '220px';
    panel.style.height = 'auto';
    const targetH = panel.offsetHeight;
    // 恢复折叠视觉（同帧内完成，浏览器未重绘，无闪烁）
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

  // 若面板当前 rect 与 .chat-history-list rect 相交，重定位到 left:18px;top:96px。
  // 用实测 rect（含折叠态宽度）而非估算，避免尺寸假设偏差。仅当检测到相交才改写，
  // 不破坏用户已拖拽到安全位置（cfg.panelPos）的情况——若用户拖到了也碰巧相交的角落，
  // 这里会纠正为左侧，但 cfg.panelPos 保持不变，用户可再次拖回原位。
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
      // 先清理旧监听器（item 上绑定的 mouseenter/mouseleave），避免累积泄漏
      if (typeof item._bilivexCleanup === 'function') {
        try { item._bilivexCleanup(); } catch (e) {}
      }
      bar.remove();
      item.dataset.bilivexInited = '';
      // SPA 重建后 item 可能已脱离 DOM，跳过重建
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

  // 边缘吸附——小球中心距左/右视口边缘 < SNAP_THRESHOLD 时吸附到侧边（8px），
  // 否则保留当前位置（不吸附）。拖拽结束不再调用 avoidChatCollision：
  // 尊重用户拖动意图（拖到聊天区上方应保留，而非被强制拉回左侧）；防遮挡仅保留在初始加载。
  // 吸附时临时加 left/right/top 过渡动画（0.3s ease），避免瞬间闪现；
  // 动画结束后恢复原有 transition（保留折叠/展开的 width/height 过渡），并清除定位残留。
  function snapPanelToEdge(panel) {
    try {
      const r = panel.getBoundingClientRect();
      const centerX = r.left + r.width / 2;
      const vw = window.innerWidth;
      let snapLeft = null;
      if (centerX < SNAP_THRESHOLD) snapLeft = true;       // 靠近左缘 → 吸附左
      else if (centerX > vw - SNAP_THRESHOLD) snapLeft = false; // 靠近右缘 → 吸附右
      if (snapLeft !== null) {
        // 仅吸附时加位置过渡（保留原 transition 用于折叠/展开动画）
        const savedTransition = panel.style.transition;
        panel.style.transition = savedTransition
          ? savedTransition + ', left 0.3s ease, right 0.3s ease, top 0.3s ease'
          : 'left 0.3s ease, right 0.3s ease, top 0.3s ease';
        if (snapLeft === true) {
          panel.style.left = '8px';
          panel.style.right = 'auto';
        } else {
          // 修复右侧闪现：拖动全程用 left 定位（mousemove 中 style.left = ...），
          // 若吸附时切到 right:8px + left:auto，left/right 都会从具体数值跳变到 auto——
          // auto 无法参与 CSS transition 插值 → 右侧瞬间跳变（闪现）。
          // 统一用 left 定位（vw - width - 8），left 数值→数值可平滑插值，与左侧行为一致。
          panel.style.left = (vw - r.width - 8) + 'px';
          panel.style.right = 'auto';
        }
        // 动画结束后恢复原过渡（避免拖拽时位置过渡导致滞后）
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

  // ---------- 漂浮弹幕 +1 视觉反馈动画 keyframes（注入到 head，避免与 B 站 CSS 冲突） ----------
  // keyframes 内容本身不需要换主题色（动画位移/缩放不变），渐变色由元素 inline style 注入。
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
      // 挂载到全屏宿主，保证全屏下 toast 可见
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

  // ---------- 初始化与 SPA 重建 ----------
  function initRoom() {
    const list = document.querySelector('.chat-history-list');
    if (list) {
      attachDanmakuHover(list);
    }
    rebindInputTailHandler();
    bindLike();
    // 漂浮弹幕 +1：监听容器存在则立即绑定；否则在 SPA watch 中持续探测
    if (cfg.floatDmPlus) {
      const rotate = findFloatingDmContainer();
      if (rotate) attachFloatingDmHover(rotate);
    }
  }

  // 全局守护：绑定引用比对 + 重绑
  // 返回一个「检查函数」，幂等；被全局 observer / 定时心跳 / SPA 重建共同调用。
  // 判定「节点被替换」的标准：已绑定节点引用 boundChatList/boundFloatContainer
  // 已脱离 DOM（isConnected === false）且当前查询到的节点是另一个节点。
  // 注意不能只用 dataset 标记判断：B 站 SPA 可能 cloneNode 复制带 data-* 的新节点，
  // 此时新节点继承了 bilivexHoverBound/bilivexFloatBound，标记判断会漏掉；引用判断不漏。
  function guardianCheck() {
    try {
      // 1) 聊天区列表：比对引用
      const list = document.querySelector('.chat-history-list');
      if (list && list !== boundChatList && (!boundChatList || !boundChatList.isConnected)) {
        // 新节点可能继承旧标记（cloneNode），强制清理后重绑
        list.dataset.bilivexHoverBound = '';
        // 断开可能残留的旧 observer（若引用同节点则无需处理）
        if (boundChatList && boundChatList._bilivexHoverMO) {
          try { boundChatList._bilivexHoverMO.disconnect(); } catch (e) {}
          boundChatList._bilivexHoverMO = null;
        }
        attachDanmakuHover(list);
      }
      // 2) 漂浮弹幕容器：findFloatingDmContainer 返回值变化时重绑
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
      // 3) 输入框容器：.chat-control-panel 引用变化时重绑小尾巴
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
    // 方案 A：全局 observer（低开销，持续比对引用）
    const go = new MutationObserver(() => guardianCheck());
    go.observe(document.documentElement, { childList: true, subtree: true });
    window._bilivexGuardianMO = go;
    // 方案 B：定时心跳兜底（每 20s），覆盖 observer 漏报/极端时序
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
    // 监听全屏切换，迁移插件 UI 到全屏宿主（进入迁入、退出迁回）
    try {
      document.addEventListener('fullscreenchange', syncFullscreenUi);
      document.addEventListener('webkitfullscreenchange', syncFullscreenUi);
    } catch (e) {}
    // 注入视觉反馈动画 keyframes（一次性，与面板状态无关）
    injectFloatingDmAnim();
    // 初次
    if (!tryInit()) {
      const mo = new MutationObserver(() => {
        if (tryInit()) {
          mo.disconnect();
          // 启动后持续监听 SPA 重建
          watchSpa();
        }
      });
      mo.observe(document.documentElement, { childList: true, subtree: true });
      // 兜底：3 秒后强制检查
      setTimeout(() => { tryInit(); watchSpa(); }, 3000);
    } else {
      watchSpa();
    }
    // 漂浮弹幕容器可能比聊天区晚加载（播放器异步），单独观察
    // 统一由全局守护负责（observer + 心跳 + 引用比对）
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
      // 无论 URL 是否变化，都做一次引用比对（覆盖「节点被替换但选择器仍匹配」场景）
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