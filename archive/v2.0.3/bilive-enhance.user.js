// ==UserScript==
// @name         BiLivex - 哔哩哔哩直播增强
// @namespace    https://github.com/eeeachan27/BiLivex
// @version      2.0.3
// @license      MIT
// @description  B站直播间弹幕增强工具：① 弹幕 +1——漂浮弹幕悬停后可快捷 +1 回复；② 收藏夹——收藏、搜索、编辑与跨设备迁移常用弹幕；③ 评论区——聊天区弹幕悬停显示 +1/收藏/复制按钮；④ 小尾巴——发送弹幕自动追加自定义文字；⑤ 一键点赞——连续点赞 30 次点亮粉丝团灯牌；⑥ 自动检查更新——发现新版本时在悬浮球旁提醒，可一键更新。开源地址：https://github.com/eeeachan27/BiLivex
// @author       eeeachan27
// @icon         data:image/jpeg;base64,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
// @match        https://live.bilibili.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_xmlhttpRequest
// @connect      cdn.jsdelivr.net
// @run-at       document-idle
// ==/UserScript==

/*
 * BiLivex - 哔哩哔哩直播增强
 *
 * 核心功能：
 *   1) 弹幕 +1：悬停弹幕后快捷发送同内容弹幕。
 *   2) 收藏夹：收藏、搜索、编辑、导入和导出常用弹幕。
 *   3) 评论区：聊天区弹幕悬停显示 +1 / 收藏 / 复制按钮。
 *   4) 小尾巴：发送弹幕时自动在末尾追加自定义文字。
 *   5) 一键点赞：连续点赞 30 次点亮粉丝团灯牌。
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

  // ---------- 折叠态悬浮球（圆形 logo） ----------
  // 折叠态显示 BiLivex logo，圆形裁剪；其他主题色由面板内部控件承担。
  const COLLAPSED_BTN_SIZE = 56;
  const COLLAPSED_BTN_SHADOW = '0 4px 14px rgba(0,0,0,0.22)';
  const COLLAPSED_BTN_SHADOW_HOVER = '0 6px 18px rgba(0,0,0,0.28)';
  // 内置压缩 logo，面向大陆网络环境稳定显示。
  const LOGO_DATA_URI = 'data:image/jpeg;base64,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';

  // ---------- 默认设置 ----------
  const DEFAULT_CFG = {
    tailEnabled: true,         // 小尾巴开关
    tailText: '喵',            // 小尾巴文本
    plusOneEnabled: true,      // 聊天区 +1 功能开关
    floatDmPlus: true,         // 漂浮弹幕 +1 功能开关
    copyEnabled: true,         // 复制按钮开关
    panelCollapsed: false,     // 侧边菜单折叠
    panelPos: null,            // 拖拽后的面板位置 {left,top}，null 表示未拖拽过，使用默认+避让
    panelAnchor: null,         // 面板沿 left/right 一侧锚定，尺寸变化时保持同侧
    theme: 'blue',             // 主题 'blue' | 'pink'
    favoritesSchemaVersion: 1,
    favorites: [],
  };

  const FAVORITES_MAX_COUNT = 1000;
  const FAVORITE_TEXT_MAX_LENGTH = 200;
  // 收藏列表独立于面板开关、位置和主题配置保存。顶层面板与 iframe 内弹幕脚本会并行运行，
  // 独立存储可避免任一旧 cfg 快照在收起菜单时覆盖刚新增的收藏。
  const FAVORITES_STORAGE_KEY = 'bilivex_favorites';

  function normalizeFavoriteText(value) {
    if (typeof value !== 'string') return '';
    const text = value.trim();
    return text.length <= FAVORITE_TEXT_MAX_LENGTH ? text : text.slice(0, FAVORITE_TEXT_MAX_LENGTH);
  }

  function makeFavorite(text, old) {
    const now = Date.now();
    return {
      id: old && old.id ? String(old.id) : 'fav-' + now + '-' + Math.random().toString(36).slice(2, 8),
      text,
      createdAt: old && Number.isFinite(old.createdAt) ? old.createdAt : now,
      updatedAt: now,
    };
  }

  function normalizeFavorites(value) {
    const result = [];
    const seen = new Set();
    if (!Array.isArray(value)) return result;
    value.forEach((item) => {
      const text = normalizeFavoriteText(typeof item === 'string' ? item : item && item.text);
      if (!text || seen.has(text) || result.length >= FAVORITES_MAX_COUNT) return;
      seen.add(text);
      result.push(makeFavorite(text, typeof item === 'object' ? item : null));
    });
    return result;
  }

  function readStoredFavorites() {
    try {
      const raw = GM_getValue(FAVORITES_STORAGE_KEY);
      if (!raw) return null;
      return normalizeFavorites(JSON.parse(raw));
    } catch (e) {
      return null;
    }
  }

  function writeStoredFavorites(favorites) {
    const normalized = normalizeFavorites(favorites);
    try { GM_setValue(FAVORITES_STORAGE_KEY, JSON.stringify(normalized)); } catch (e) {}
    return normalized;
  }

  function loadCfg() {
    try {
      const raw = GM_getValue('bilivex_cfg');
      const obj = raw ? JSON.parse(raw) : {};
      if (!obj.theme || (obj.theme !== 'blue' && obj.theme !== 'pink')) obj.theme = 'blue';
      if (obj.panelAnchor !== 'left' && obj.panelAnchor !== 'right') obj.panelAnchor = null;
      // 兼容旧版本嵌在 cfg 内的收藏；首次读到旧列表时迁移到独立存储，
      // 后续顶层菜单与 iframe 实例只会读取同一份收藏数据。
      const storedFavorites = readStoredFavorites();
      const legacyFavorites = normalizeFavorites(obj.favorites);
      const favorites = storedFavorites === null ? legacyFavorites : storedFavorites;
      if (storedFavorites === null && legacyFavorites.length) writeStoredFavorites(legacyFavorites);
      return { ...DEFAULT_CFG, ...obj, favorites };
    } catch (e) {
      const storedFavorites = readStoredFavorites();
      return { ...DEFAULT_CFG, favorites: storedFavorites === null ? [] : storedFavorites };
    }
  }

  function updateCfg(patch) {
    // 每次从持久化存储合并，避免顶层页和 iframe 的旧快照相互覆盖。
    const latest = loadCfg();
    const next = { ...latest, ...patch, favorites: getFavorites() };
    try { GM_setValue('bilivex_cfg', JSON.stringify(next)); } catch (e) {
      console.warn('[BiLivex] 保存配置失败：' + String(e && e.message || e).slice(0, 160));
    }
    cfg = next;
    return next;
  }

  function getFavorites() {
    const storedFavorites = readStoredFavorites();
    return storedFavorites === null ? normalizeFavorites(loadCfg().favorites) : storedFavorites;
  }

  function addFavorite(text) {
    const clean = normalizeFavoriteText(text);
    if (!clean) return { status: 'invalid' };
    const favorites = getFavorites();
    if (favorites.some((item) => item.text === clean)) return { status: 'duplicate' };
    if (favorites.length >= FAVORITES_MAX_COUNT) return { status: 'limit' };
    favorites.push(makeFavorite(clean));
    const savedFavorites = writeStoredFavorites(favorites);
    cfg = { ...cfg, favorites: savedFavorites };
    return { status: 'added', item: savedFavorites[savedFavorites.length - 1] };
  }

  function replaceFavorites(favorites) {
    const savedFavorites = writeStoredFavorites(favorites);
    cfg = { ...cfg, favorites: savedFavorites };
    return savedFavorites;
  }

  // 面板在顶层、聊天控件在 iframe 时，各自的运行时配置不会自动同步。
  // 发送前重新读取持久化设置，确保手动发送与 +1 使用面板刚保存的小尾巴。
  function getTailText() {
    const latest = loadCfg();
    return latest.tailEnabled && latest.tailText ? latest.tailText : '';
  }

  let cfg = loadCfg();
  // 当前主题色板
  let currentTheme = THEMES[cfg.theme] || THEMES.blue;

  // ---------- 工具函数 ----------
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function setReactLikeValue(el, value) {
    const ownerWindow = el.ownerDocument.defaultView || window;
    const proto = el instanceof ownerWindow.HTMLTextAreaElement
      ? ownerWindow.HTMLTextAreaElement.prototype : ownerWindow.HTMLInputElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    if (!desc || !desc.set) return false;
    desc.set.call(el, value);
    const InputEventCtor = ownerWindow.InputEvent || ownerWindow.Event;
    el.dispatchEvent(new InputEventCtor('input', {
      bubbles: true, cancelable: true, composed: true,
      inputType: 'insertText', data: value,
    }));
    el.dispatchEvent(new ownerWindow.Event('change', {
      bubbles: true, cancelable: true, composed: true,
    }));
    return el.value === value;
  }

  function roomIdFromUrl(url) {
    if (!url) return '';
    try {
      const parsed = new URL(url, location.href);
      const queryRoomId = parsed.searchParams.get('room_id') || parsed.searchParams.get('roomid') || parsed.searchParams.get('id');
      if (/^\d+$/.test(queryRoomId || '')) return queryRoomId;
      const match = parsed.pathname.match(/^\/(?:blanc\/)?(\d+)(?:\/|$)/);
      return match ? match[1] : '';
    } catch (e) {
      return '';
    }
  }

  function findRoomId(root, ownerWindow) {
    const view = ownerWindow || window;
    const fromUrl = roomIdFromUrl(view.location && view.location.href);
    if (fromUrl) return fromUrl;
    const doc = root && root.querySelector ? root : document;
    const node = doc.querySelector('[data-room-id], [data-roomid]');
    const value = node && (node.getAttribute('data-room-id') || node.getAttribute('data-roomid'));
    return /^\d+$/.test(value || '') ? value : '';
  }

  // +1 请求按单账号串行，统一走 B 站原生聊天控件。
  let plusRequestSeq = 0;
  let plusSendTail = Promise.resolve();

  function nextPlusRequestId() {
    plusRequestSeq += 1;
    return 'plus-' + Date.now() + '-' + plusRequestSeq;
  }

  function tracePlus(event, details) {
    const entry = { event, ts: Date.now(), ...(details || {}) };
    try {
      const logs = window.__bilivexPlusLog || (window.__bilivexPlusLog = []);
      logs.push(entry);
      if (logs.length > 80) logs.shift();
      console.info('[BiLivex +1]', event, entry);
    } catch (e) {}
  }

  function enqueuePlusSend(task) {
    const run = plusSendTail.then(task, task);
    // ponytail：当前使用全局串行队列；只有实测吞吐不足时才按直播间或账号拆分。
    plusSendTail = run.catch(() => {});
    return run;
  }

  function findChatInput() {
    const selectors = [
      'textarea.chat-input.border-box',
      '#fullscreen-danmaku-vm input.chat-input',
      '.chat-control-panel textarea',
      'textarea[placeholder*="发言"]',
      'textarea[placeholder*="聊天"]',
      'textarea[data-e2e*="chat"]',
      'textarea.chat-input',
      'input.chat-input',
    ];
    const seen = new Set();
    const findInDocument = (root) => {
      if (!root || seen.has(root)) return null;
      seen.add(root);
      for (const selector of selectors) {
        const input = root.querySelector(selector);
        if (input && !input.disabled && input.offsetParent !== null) return input;
      }
      for (const frame of Array.from(root.querySelectorAll('iframe'))) {
        try {
          const input = findInDocument(frame.contentDocument);
          if (input) return input;
        } catch (e) {}
      }
      return null;
    };
    return findInDocument(document) || findInDocument(panelDocument);
  }

  const CHAT_SEND_SELECTORS = [
    'button.send-btn',
    '#fullscreen-danmaku-vm .send-danmaku',
    '#fullscreen-danmaku-vm button',
    'button[aria-label*="发送"]',
    'button[title*="发送"]',
    '[data-e2e*="send"]',
    '.send-button',
  ];

  function isEnabledChatSendButton(button, input) {
    if (!button || button === input || button.disabled || button.getAttribute('aria-disabled') === 'true') {
      return false;
    }
    const scope = input && input.closest('#fullscreen-danmaku-vm, .chat-control-panel, .chat-input-outer, .chat-input-panel');
    if (scope && !scope.contains(button)) return false;
    if (!CHAT_SEND_SELECTORS.some((selector) => button.matches(selector))) return false;
    // 参考项目的全屏通用按钮只在文案确认为“发送”时采用，避免误点表情或设置按钮。
    if (button.matches('#fullscreen-danmaku-vm button') &&
        !button.matches('.send-danmaku, .send-btn') &&
        !/^发送/.test((button.textContent || '').trim())) {
      return false;
    }
    return true;
  }

  function findSendBtn(input) {
    const ownerDocument = input && input.ownerDocument ? input.ownerDocument : document;
    const scope = input && input.closest('#fullscreen-danmaku-vm, .chat-control-panel, .chat-input-outer, .chat-input-panel');
    const roots = scope ? [scope, ownerDocument] : [ownerDocument];
    for (const root of roots) {
      for (const selector of CHAT_SEND_SELECTORS) {
        const button = root.querySelector(selector);
        if (isEnabledChatSendButton(button, input)) return button;
      }
    }
    return null;
  }

  // B 站普通图片表情缺少可读 alt 时，用资源哈希还原可发送的 [表情名]。
  // 映射来自 bili-danmu-plus1 v0.0.7，保留其已验证的最小集合。
  const EMOJI_ID_TO_NAME = Object.freeze({
    '05ef7849e7313e9c32887df922613a7c1ad27f12': '藏狐',
    '08f735d950a0fba267dda140673c9ab2edf6410d': '妙',
    '0a1ab3f0f2f2e29de35c702ac1ecfec7f90e325d': '三星堆',
    '0d5123cddf389302df6f605087189fd10919dc3c': 'OH',
    '10662d9c0d6ddb3203ecf50e77788b959d4d1928': '亲亲',
    '17435e60dcc28ce306762103a2a646046ff10b0a': '防护',
    '179c7e2d232cd74f30b672e12fc728f8f62be9ec': '呆',
    '1daaa5d284dafaa16c51409447da851ff1ec557f': '爱',
    '1e0a2baf088a34d56e2cc226b2de36a5f8d6c926': '摊手',
    '204413d3cf330e122230dcc99d29056f2a60e6f2': '囧',
    '23ae12d3a71b9d7a22c8773343969fcbb94b20d0': '汤圆',
    '241b13adb4933e38b7ea6f5204e0648725e76fbf': '保佑',
    '29533893115c4609a4af336f49060ea13173ca78': '泼水',
    '2b6b4cc33be42c3257dc1f6ef3a39d666b6b4b1a': '吐了啊',
    '2c69dad2e5c0f72f01b92746bc9d148aee1993b2': '生气',
    '2dd666d3651bafe8683acf770b7f4163a5f49809': '赞',
    '3b2fedf09b0ac79679b5a47f5eb3e8a38e702387': '响指',
    '3f170894dd08827ee293afcb5a3d2b60aecdb5b1': '抱拳',
    '4255ce6ed5d15b60311728a803d03dd9a24366b2': '撇嘴',
    '4428c84e694fbf4e0ef6c06e958d9352c3582740': 'dog',
    '4781a77be9c8f0d4658274eb4e3012c47a159f23': '无语',
    '492b10d03545b7863919033db7d1ae3ef342df2f': '疼',
    '4e029593562283f00d39b99e0557878c4199c71d': '比心',
    '4f2155b108047d60c1fa9dccdc4d7abba18379a0': '跪了',
    '5776481e380648c0fb3d4ad6173475f69f1ce149': '难过',
    '57dee478868ed9f1ce3cf25a36bc50bde489c404': '波吉',
    '5935e6a4103d024955f749d428311f39e120a58a': '奸笑',
    '5d86d55ba9a2f99856b523d8311cf75cfdcccdbc': '鬼魂',
    '5e01c237642c8b662a69e21b8e0fbe6e7dbc2aa1': '墨镜',
    '5e61223561203c50340b4c9b41ba7e4b05e48ae2': '牛',
    '607f74ccf5eec7d2b17d91b9bb36be61a5dd196b': '不行',
    '650c3e22c06edcbca9756365754d38952fc019c3': '哇',
    '69312e99a00d1db2de34ef2db9220c5686643a3f': '委屈',
    '6df760280b17a6cbac8c1874d357298f982ba4cf': '热',
    '6e496946725cd66e7ff1b53021bf1cc0fc240288': '哈欠',
    '7dd2ef03e13998575e4d8a803c6e12909f94e72b': '花',
    '7fa907ae85fa6327a0466e123aee1ac32d7c85f7': '白眼',
    '816402551e6ce30d08b37a917f76dea8851fe529': '大哭',
    '84c92239591e5ece0f986c75a39050a5c61c803c': '生病',
    '84fe12ecde5d3875e1090d83ac9027cb7d7fba9f': '调皮',
    '8624fd172037573c8600b2597e3731ef0e5ea983': '滑稽',
    '86268b09e35fbe4215815a28ef3cf25ec71c124f': 'OK',
    '8b99266ea7b9e86cf9d25c3d1151d80c5ba5c9a1': '龇牙',
    '8d436de0c3701d87e4ca9c1be01c01b199ac198e': '一般',
    '8e88e6a137463703e96d4f27629f878efa323456': '可怜',
    '98f842994035505c728e32e32045d649e371ecd6': '鼠',
    '98fd92c6115b0d305f544b209c78ec322e4bb4ff': '酸',
    '9c75761c5b6e1ff59b29577deb8e6ad996b86bd7': '惊喜',
    'a0c456b6d9e3187399327828a9783901323bfdb5': '问号',
    'a2ad0cc7e390a303f6d243821479452d31902a5f': '捂脸2',
    'a4df45c035b0ca0c58f162b5fb5058cf273d0d09': '阴险',
    'a51af0d7d9e60ce24f139c468a3853f9ba9bb184': '虎年',
    'a7feb260bb5b15f97d7119b444fc698e82516b9f': '抓狂',
    'a91a27f83c38b5576f4cd08d4e11a2880de78918': '笑',
    'abddb0b621b389fc8c2322b1cfcf122d8936ba91': '抱抱',
    'b00e2e02904096377061ec5f93bf0dd3321f1964': '流汗',
    'b159f90431148a973824f596288e7ad6a8db014b': '手机',
    'b51824125d09923a4ca064f0c0b49fc97d3fab79': '喝彩',
    'b5b44f099059a1bafb2c2722cfe9a6f62c1dc531': '傲娇',
    'b6226219384befa5da1d437cb2ff4ba06c303844': '嘘',
    'b6e8131897a9a718ee280f2510bfa92f1d84429b': '金钱豹',
    'b804118a1bdb8f3bec67d9b108d5ade6e3aa93a9': '冷',
    'bb8e95fa54512ffea07023ea4f2abee4a163e7a0': '出窍',
    'bc26f29f62340091737c82109b8b91f32e6675ad': '惊讶',
    'bea1f0497888f3e9056d3ce14ba452885a485c02': '歪嘴笑',
    'c409425ba1ad2c6534f0df7de350ba83a9c949e5': '嫌弃',
    'c5436c6806c32b28d471bb23d42f0f8f164a187a': '笑哭',
    'c6bed64ffb78c97c93a83fbd22f6fdf951400f31': '吓',
    'd1ba5f4c54332a21ed2ca0dcecaedd2add587839': '给力',
    'd581d0bc30c8f9712b46ec02303579840c72c42d': '鼓掌',
    'd8ce9b05c0e40cec61a15ba1979c8517edd270bf': '害羞',
    'e2589d086df0db8a7b5ca2b1273c02d31d4433d4': '大笑',
    'e2ba16f947a23179cdc00420b71cc1d627d8ae25': '偷笑',
    'e6073c6849f735ae6cb7af3a20ff7dcec962b4c5': '捂脸',
    'eb2d84ba623e2335a48f73fb5bef87bcf53c1239': '耶',
    'f408e2af700adcc2baeca15510ef620bed8d4c43': '再见',
    'f4ed20a70d0cb85a22c0c59c628aedfe30566b37': '鼻子',
    'f547cc853cf43e70f1e39095d9b3b5ac1bf70a8d': 'doge2',
    'f605dd8229fa0115e57d2f16cb019da28545452b': '微笑',
    'fbc3c8bc4152a65bbf4a9fd5a5d27710fbff2119': '加油',
    'fd35718ac5a278fd05fe5287ebd41de40a59259d': '瓜子',
    'ffb53c252b085d042173379ac724694ce3196194': '吃瓜',
  });

  function emojiHashFromSrc(src) {
    const match = String(src || '').match(/bfs\/(?:live|emote)\/([0-9a-f]+)/i);
    return match ? match[1].toLowerCase() : '';
  }

  function activateEmoticonTab(item) {
    const pane = item && item.closest ? item.closest('.img-pane') : null;
    if (!pane || !pane.parentNode) return;
    const panes = Array.from(pane.parentNode.children).filter((el) => el.classList && el.classList.contains('img-pane'));
    const tab = pane.parentNode.querySelectorAll('.tab-pane-item')[panes.indexOf(pane)];
    if (tab && !tab.classList.contains('active')) tab.click();
  }

  function findEmoticonItem(ownerDocument, hash) {
    if (!ownerDocument || !hash) return null;
    const scope = ownerDocument.fullscreenElement || ownerDocument;
    const items = Array.from(scope.querySelectorAll('.emoticon-item'));
    if (scope !== ownerDocument) items.push(...ownerDocument.querySelectorAll('.emoticon-item'));
    return items.find((item) => {
      const image = item.querySelector('img');
      return image && emojiHashFromSrc(image.getAttribute('src') || image.src) === hash;
    }) || null;
  }

  async function sendSpecialEmoji(hash, requestId) {
    const input = await waitForNativeChatInput();
    if (!input) return { status: 'failed', message: '未找到原生聊天输入框，请稍后重试' };
    const ownerDocument = input.ownerDocument;
    const scope = ownerDocument.fullscreenElement || ownerDocument;
    const panelButton = scope.querySelector('.emoticons-panel[title="表情包"], .icon-right-part .emoticons-panel, .emoticons-panel') ||
      ownerDocument.querySelector('.emoticons-panel[title="表情包"], .icon-right-part .emoticons-panel, .emoticons-panel');
    let item = findEmoticonItem(ownerDocument, hash);
    if (!item && panelButton) panelButton.click();
    for (let attempt = 0; attempt < 10 && !item; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 150));
      item = findEmoticonItem(ownerDocument, hash);
      if (!item && panelButton && attempt < 2) panelButton.click();
    }
    if (!item) return { status: 'failed', message: '未找到对应的特殊表情，可能尚未解锁' };
    activateEmoticonTab(item);
    await new Promise((resolve) => setTimeout(resolve, 60));
    const readyItem = findEmoticonItem(ownerDocument, hash);
    if (!readyItem) return { status: 'failed', message: '特殊表情面板已关闭，请重试' };
    readyItem.click();
    tracePlus('dom-emoticon-click', { requestId, hash });
    return { status: 'triggered', message: '已触发原生表情发送，无法确认服务端结果' };
  }

  function appendTailForManualSend(ta) {
    const originalText = ta && ta.value;
    const tailText = getTailText();
    if (!ta || !tailText || !originalText || originalText.endsWith(tailText)) {
      return;
    }
    if (ta._bilivexTailAppending) return;
    ta._bilivexTailAppending = true;
    try {
      // React 的发送处理可能晚于当前事件循环；保留最终文本直至页面自身消费/清空。
      setReactLikeValue(ta, originalText + tailText);
    } finally {
      ta._bilivexTailAppending = false;
    }
  }

  // 等待直播聊天组件就绪，兼容 iframe 和异步挂载的全屏输入框。
  function waitForNativeChatInput(timeoutMs) {
    const deadline = Date.now() + (timeoutMs || 2500);
    return new Promise((resolve) => {
      const poll = () => {
        const input = findChatInput();
        if (input || Date.now() >= deadline) {
          resolve(input || null);
          return;
        }
        setTimeout(poll, 100);
      };
      poll();
    });
  }

  function confirmTriggeredSend(input, expectedText, timeoutMs) {
    if (!input || !input.ownerDocument) {
      return Promise.resolve({ status: 'timeout', message: '已触发发送，但未确认结果' });
    }
    const deadline = Date.now() + (timeoutMs || 2000);
    const expected = String(expectedText || '').trim();
    return new Promise((resolve) => {
      const check = () => {
        const consumed = input && input.value !== expected;
        const ownMessage = Array.from(input.ownerDocument.querySelectorAll('.my-self')).some((node) => {
          return String(node.textContent || '').includes(expected);
        });
        if (consumed || ownMessage) {
          resolve({ status: 'confirmed', message: '弹幕已发送' });
        } else if (Date.now() >= deadline) {
          resolve({ status: 'timeout', message: '已触发发送，但未确认结果' });
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });
  }

  // 填入并尝试发送。triggered 仅表示已操作原生控件，绝不等同服务端成功。
  async function fillAndSend(text, opts) {
    opts = opts || {};
    const ta = await waitForNativeChatInput();
    if (!ta) return { status: 'no-input', message: '未找到原生聊天输入框，请稍后重试' };
    try { ta.focus(); } catch (e) {}
    const tailText = getTailText();
    const finalText = opts.finalText || (tailText && !text.endsWith(tailText)
      ? text + tailText
      : text);
    if (!setReactLikeValue(ta, finalText)) {
      return Promise.resolve({ status: 'failed', message: '输入框暂不可用' });
    }
    tracePlus('dom-input', { requestId: opts.requestId, textLength: finalText.length });
    if (opts.autoSend === false) return Promise.resolve({ status: 'filled', message: '已填入输入框' });
    // Vue 会在 input 后异步更新按钮状态，下一帧再点击真实发送按钮。
    const ownerWindow = ta.ownerDocument.defaultView || window;
    const schedule = typeof ownerWindow.requestAnimationFrame === 'function'
      ? ownerWindow.requestAnimationFrame.bind(ownerWindow)
      : (cb) => ownerWindow.setTimeout(cb, 0);
    return new Promise((resolve) => schedule(() => {
      const btn = findSendBtn(ta);
      if (btn && !btn.disabled && btn.getAttribute('aria-disabled') !== 'true') {
        try {
          btn.click();
          tracePlus('dom-click', { requestId: opts.requestId });
          resolve({ status: 'triggered', message: '已触发发送', input: ta });
          return;
        } catch (e) {
          tracePlus('dom-click-error', { requestId: opts.requestId, error: e && e.message });
        }
      }
      try {
        ta.focus();
        const KeyboardEventCtor = ownerWindow.KeyboardEvent || KeyboardEvent;
        const enterOptions = {
          key: 'Enter', code: 'Enter', keyCode: 13, which: 13,
          bubbles: true, cancelable: true,
        };
        ta.dispatchEvent(new KeyboardEventCtor('keydown', enterOptions));
        ta.dispatchEvent(new KeyboardEventCtor('keyup', enterOptions));
        tracePlus('dom-enter', { requestId: opts.requestId });
        resolve({ status: 'triggered', message: '已触发发送', input: ta });
      } catch (e) {
        tracePlus('dom-enter-error', { requestId: opts.requestId, error: e && e.message });
        resolve({ status: 'failed', message: '无法触发聊天框发送' });
      }
    }));
  }

  function sendPlusOne(payload) {
    const normalized = typeof payload === 'string' ? { type: 'text', text: payload } : (payload || {});
    const cleanText = String(normalized.text || '').trim();
    if (!cleanText) {
      showToast('该弹幕无文本内容');
      return Promise.resolve({ status: 'invalid', message: '该弹幕无文本内容' });
    }
    const requestId = nextPlusRequestId();
    tracePlus('queued', { requestId, textLength: cleanText.length, payloadType: normalized.type || 'text' });
    return enqueuePlusSend(async () => {
      if (normalized.type === 'emoji-special' && normalized.hash) {
        const result = await sendSpecialEmoji(normalized.hash, requestId);
        tracePlus('dom-result', { requestId, status: result.status, payloadType: normalized.type });
        showToast(result.message || (result.status === 'triggered' ? '已触发发送' : '发送失败'));
        return { ...result, requestId };
      }
      // 始终使用原生控件，让播放器沿用 B 站的本人弹幕状态与蓝色标识。
      const finalText = getTailText() && !cleanText.endsWith(getTailText())
        ? cleanText + getTailText() : cleanText;
      const domResult = await fillAndSend(finalText, { requestId, finalText });
      if (domResult.status === 'triggered') {
        const confirmed = await confirmTriggeredSend(domResult.input, finalText);
        tracePlus('dom-result', { requestId, status: confirmed.status });
        showToast(confirmed.message);
        return { ...confirmed, requestId };
      }
      if (domResult.status === 'filled') {
        tracePlus('dom-result', { requestId, status: domResult.status });
        showToast(domResult.message || '已填入输入框');
        return { ...domResult, requestId };
      }
      tracePlus('dom-unavailable', { requestId, status: domResult.status });
      const result = { status: 'failed', requestId, message: domResult.message || '未找到原生发送控件，请稍后重试' };
      tracePlus('send-unavailable', result);
      showToast(result.message);
      return result;
    }).catch((error) => {
      const message = '发送失败，请重试';
      tracePlus('queue-error', { requestId, error: error && error.message });
      showToast(message);
      return { status: 'failed', requestId, message };
    });
  }

  function runPlusButtonAction(button, action, onAccepted) {
    if (!button || button.dataset.bilivexBusy === '1') return Promise.resolve({ status: 'busy' });
    button.dataset.bilivexBusy = '1';
    button.setAttribute('aria-busy', 'true');
    button.disabled = true;
    return Promise.resolve().then(action).then((result) => {
      if (result && (result.status === 'triggered' || result.status === 'confirmed' || result.status === 'timeout' || result.status === 'filled')) {
        if (typeof onAccepted === 'function') onAccepted(result);
      }
      return result;
    }).catch((error) => {
      tracePlus('button-error', { error: error && error.message });
      showToast('发送失败，请重试');
      return { status: 'failed', message: '发送失败，请重试' };
    }).finally(() => {
      button.dataset.bilivexBusy = '';
      button.removeAttribute('aria-busy');
      button.disabled = false;
    });
  }

  // ---------- 主题应用 ----------
  function applyTheme() {
    currentTheme = THEMES[cfg.theme] || THEMES.blue;

    // 1. 面板标题渐变 + 阴影（折叠态固定 logo 圆形按钮，不随主题切换）
    const panel = panelDocument.getElementById('bilivex-panel');
    if (panel) {
      const head = panel.firstElementChild;
      if (cfg.panelCollapsed) {
        // 折叠态背景由 logo img 自带，不需 head 上渐变
        if (head) head.style.background = 'transparent';
        panel.style.boxShadow = COLLAPSED_BTN_SHADOW;
      } else {
        if (head) head.style.background = currentTheme.titleGradient;
        panel.style.boxShadow = '0 4px 16px ' + currentTheme.primaryShadow;
      }
    }

    // 2. 面板内所有开关（label/span 结构）按当前 checked 状态重染
    Array.from(panelDocument.querySelectorAll('#bilivex-panel label')).forEach((lab) => {
      const inp = lab.querySelector('input[type=checkbox]');
      const slider = lab.querySelector('span');
      if (inp && slider) {
        slider.style.background = inp.checked ? currentTheme.primary : '#cfd5db';
      }
    });

    // 3. 主题选择按钮组的高亮
    Array.from(panelDocument.querySelectorAll('[data-bilivex-theme]')).forEach((b) => {
      const isActive = b.dataset.bilivexTheme === cfg.theme;
      b.style.background = isActive ? currentTheme.primary : '#fff';
      b.style.color = isActive ? '#fff' : '#666';
      b.style.borderColor = isActive ? currentTheme.primary : '#e0e6ed';
    });

    // 4. 30连击按钮（accent 互补色）
    Array.from(panelDocument.querySelectorAll('#bilivex-panel button[data-bilivex-like="1"]')).forEach((b) => {
      b.style.background = currentTheme.accentGradient;
    });

    // 5. 聊天区已悬浮弹幕上的 +1 按钮（ensureDanmakuOverlay 创建）
    $$('.bilivex-dm-btn').forEach((b) => {
      if (b.dataset.bilivexAction === 'plus1') {
        b.style.background = currentTheme.primary;
      }
    });

    // 6. 漂浮弹幕已绑定的操作按钮（ensureFloatingDmOverlay 创建）
    Array.from(uiDocument.querySelectorAll('.bilivex-float-plus-btn')).forEach((b) => {
      b.style.background = currentTheme.primary;
      b.style.boxShadow = '0 2px 6px ' + currentTheme.primaryShadow;
    });
    Array.from(uiDocument.querySelectorAll('.bilivex-float-favorite-btn')).forEach((b) => {
      b.style.background = '#6c7a89';
    });
    Array.from(uiDocument.querySelectorAll('.bilivex-float-actions')).forEach((group) => {
      group.style.boxShadow = '0 2px 8px ' + currentTheme.primaryShadow;
    });

    // 7. 刷新反馈动画样式，使 +1 浮字使用新主题色
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
    const favoriteBtn = mkBtn('收藏', '#6c7a89');
    favoriteBtn.dataset.bilivexAction = 'favorite';
    if (cfg.plusOneEnabled) bar.appendChild(plusBtn);
    bar.appendChild(favoriteBtn);
    if (cfg.copyEnabled) bar.appendChild(copyBtn);
    item.appendChild(bar);

    const text = item.dataset.danmaku || (item.querySelector('.danmaku-item-right') || {}).textContent || '';
    plusBtn.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      runPlusButtonAction(plusBtn, () => sendPlusOne(text));
    });
    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      const result = addFavorite(text);
      showToast(result.status === 'added' ? '已收藏' : result.status === 'duplicate' ? '已在收藏夹中' : result.status === 'limit' ? '收藏夹已达上限' : '该弹幕无文本内容');
    });
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      copyToClipboard(text);
      showToast('已复制');
    });

    let hoverTimer = null;
    item._bilivexOnEnter = () => {
      clearTimeout(hoverTimer);
      // 聊天行的背景、边框和本人标记全部交给 B 站原生组件处理。
      bar.style.display = 'flex';
    };
    item._bilivexOnLeave = () => {
      hoverTimer = setTimeout(() => {
        bar.style.display = 'none';
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
      $$('.chat-item.danmaku-item', list).forEach((item) => {
        ensureDanmakuOverlay(item);
      });
    };
    refresh();
    let refreshQueued = false;
    const enhanceAddedNodes = (records) => {
      if (refreshQueued) return;
      refreshQueued = true;
      requestAnimationFrame(() => {
        refreshQueued = false;
        records.forEach((record) => record.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches('.chat-item.danmaku-item')) ensureDanmakuOverlay(node);
          node.querySelectorAll('.chat-item.danmaku-item').forEach(ensureDanmakuOverlay);
        }));
      });
    };
    const mo = new MutationObserver(enhanceAddedNodes);
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
      delete item._bilivexChatStyleSnapshot;
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

  let panelWindow = window;
  let panelDocument = document;
  try {
    if (window.top && window.top.document) {
      panelWindow = window.top;
      panelDocument = window.top.document;
    }
  } catch (e) {}
  const uiDocument = document;
  const valueChangeListenerIds = [];
  const sharedRuntime = panelWindow.__bilivexRuntime || (panelWindow.__bilivexRuntime = {});
  if (!Object.prototype.hasOwnProperty.call(sharedRuntime, 'residentLayer')) sharedRuntime.residentLayer = null;
  if (!Object.prototype.hasOwnProperty.call(sharedRuntime, 'hoverOwner')) sharedRuntime.hoverOwner = null;

  function applyConfigChange(previous, next) {
    cfg = next;
    if (previous.plusOneEnabled !== next.plusOneEnabled || previous.copyEnabled !== next.copyEnabled) {
      toggleDmBarVisibility();
    }
    if (previous.floatDmPlus !== next.floatDmPlus) toggleFloatingDmEnabled();
    if (previous.theme !== next.theme) applyTheme();
  }

  try {
    if (typeof GM_addValueChangeListener === 'function') {
      const configListenerId = GM_addValueChangeListener('bilivex_cfg', (_key, _oldValue, _newValue, remote) => {
        if (!remote) return;
        const previous = cfg;
        applyConfigChange(previous, loadCfg());
      });
      const favoritesListenerId = GM_addValueChangeListener(FAVORITES_STORAGE_KEY, (_key, _oldValue, _newValue, remote) => {
        if (remote) cfg = { ...cfg, favorites: getFavorites() };
      });
      if (configListenerId != null) valueChangeListenerIds.push(configListenerId);
      if (favoritesListenerId != null) valueChangeListenerIds.push(favoritesListenerId);
    }
  } catch (e) {
    console.warn('[BiLivex] 配置同步监听不可用：' + String(e && e.message || e).slice(0, 160));
  }

  function getFrameTransform() {
    let left = 0, top = 0, scaleX = 1, scaleY = 1;
    let currentWindow = window;
    try {
      while (currentWindow !== panelWindow && currentWindow.frameElement) {
        const frameElement = currentWindow.frameElement;
        const frameRect = frameElement.getBoundingClientRect();
        const layoutWidth = frameElement.offsetWidth || frameRect.width || 1;
        const layoutHeight = frameElement.offsetHeight || frameRect.height || 1;
        const frameScaleX = frameRect.width / layoutWidth || 1;
        const frameScaleY = frameRect.height / layoutHeight || 1;
        left = frameRect.left + (frameElement.clientLeft || 0) * frameScaleX + left * frameScaleX;
        top = frameRect.top + (frameElement.clientTop || 0) * frameScaleY + top * frameScaleY;
        scaleX *= frameScaleX;
        scaleY *= frameScaleY;
        currentWindow = currentWindow.parent;
      }
    } catch (e) {}
    return { left, top, scaleX, scaleY };
  }
  function toUiRect(rect) {
    if (!rect) return rect;
    const transform = getFrameTransform();
    if (transform.left === 0 && transform.top === 0 && transform.scaleX === 1 && transform.scaleY === 1) return rect;
    return {
      left: transform.left + rect.left * transform.scaleX,
      top: transform.top + rect.top * transform.scaleY,
      right: transform.left + rect.right * transform.scaleX,
      bottom: transform.top + rect.bottom * transform.scaleY,
      width: rect.width * transform.scaleX,
      height: rect.height * transform.scaleY,
      x: transform.left + rect.x * transform.scaleX,
      y: transform.top + rect.y * transform.scaleY,
      toJSON: rect.toJSON ? rect.toJSON.bind(rect) : undefined
    };
  }
  function toLocalRect(rect) {
    if (!rect) return rect;
    const transform = getFrameTransform();
    return {
      left: (rect.left - transform.left) / transform.scaleX,
      top: (rect.top - transform.top) / transform.scaleY,
      right: (rect.right - transform.left) / transform.scaleX,
      bottom: (rect.bottom - transform.top) / transform.scaleY,
      width: rect.width / transform.scaleX,
      height: rect.height / transform.scaleY
    };
  }
  function toUiPoint(x, y) {
    const transform = getFrameTransform();
    return {
      x: transform.left + x * transform.scaleX,
      y: transform.top + y * transform.scaleY
    };
  }
  function toLocalPoint(x, y) {
    const transform = getFrameTransform();
    return {
      x: (x - transform.left) / transform.scaleX,
      y: (y - transform.top) / transform.scaleY
    };
  }
  // 漂浮弹幕的指针坐标始终以顶层页面为准；仅跨 iframe 的弹幕需要换算位置，
  // 顶层操作栏本身不再叠加偏移，保证鼠标停在操作栏上时悬停不会丢失。
  function getFloatingUiRect(el) {
    if (!el || typeof el.getBoundingClientRect !== 'function') return null;
    const rect = el.getBoundingClientRect();
    return el.ownerDocument === uiDocument ? toUiRect(rect) : rect;
  }
  function getUiHost() {
    const localFullscreen = uiDocument.fullscreenElement;
    if (localFullscreen && localFullscreen.nodeType === 1) return localFullscreen;
    const topFullscreen = panelDocument.fullscreenElement;
    if (topFullscreen && topFullscreen.nodeType === 1) {
      // iframe 内元素进入原生全屏时，父文档的 fullscreenElement 是 iframe 本身；
      // 展示层必须放进 iframe 文档，顶层与子页实例才能落到同一宿主。
      if (topFullscreen.tagName === 'IFRAME') {
        try {
          const fullscreenDocument = topFullscreen.contentDocument;
          if (fullscreenDocument) {
            return fullscreenDocument.fullscreenElement || fullscreenDocument.body || fullscreenDocument.documentElement;
          }
        } catch (e) {}
      }
      return topFullscreen;
    }
    return panelDocument.body || panelDocument.documentElement;
  }

  // 悬停操作栏需要固定在播放器画面之上展示；
  // iframe 直播间网页大窗口 / 网页全屏下以 body 为定位基准，保证按钮不被放大后的播放器层遮挡。
  function getOverlayActionHost(ownerDocument) {
    if (!ownerDocument) return null;
    const fullscreen = ownerDocument.fullscreenElement;
    if (fullscreen && fullscreen.nodeType === 1) return fullscreen;
    return ownerDocument.body || ownerDocument.documentElement;
  }

  function getResidentLayer() {
    const host = getUiHost();
    if (!host) return null;
    let residentLayer = sharedRuntime.residentLayer;
    if (residentLayer && residentLayer.ownerDocument !== host.ownerDocument) {
      try {
        $$('[data-bilivex-resident="1"]', residentLayer).forEach((el) => {
          if (typeof el._bilivexFloatOnLeave === 'function') el._bilivexFloatOnLeave();
          else el.remove();
        });
        $$('.bilivex-float-actions, .bilivex-float-plus-btn', residentLayer).forEach((el) => el.remove());
        residentLayer.remove();
      } catch (e) {}
      residentLayer = null;
      sharedRuntime.residentLayer = null;
    }
    if (!residentLayer) {
      const existingLayer = host.ownerDocument.getElementById('bilivex-dm-resident');
      if (existingLayer) {
        residentLayer = existingLayer;
        sharedRuntime.residentLayer = residentLayer;
      }
    }
    if (!residentLayer) {
      const ownerDocument = host.ownerDocument || panelDocument;
      residentLayer = ownerDocument.createElement('div');
      residentLayer.id = 'bilivex-dm-resident';
      residentLayer.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100vh;' +
        'pointer-events:none;overflow:hidden;z-index:2147483000;';
      sharedRuntime.residentLayer = residentLayer;
    }
    // 首次进入直播间时，画面坐标还没就绪。如果沿用空白的范围（或最旧的一次），"操作栏被裁剪"的问题会复发——刷新页才能临时恢复。
    // 改为基于播放画面签名变化主动重算，新直播间一次刷新就生效。
    const playerRectUi = getPlayerRect();
    const vw = host.ownerDocument.documentElement.clientWidth || host.ownerDocument.defaultView.innerWidth;
    const vh = host.ownerDocument.documentElement.clientHeight || host.ownerDocument.defaultView.innerHeight;
    const hostKey = host === panelDocument.documentElement ? 'doc' : 'fs';
    const prKey = playerRectUi ? playerRectUi.left.toFixed(0) + ',' + playerRectUi.top.toFixed(0) + ',' + playerRectUi.right.toFixed(0) + ',' + playerRectUi.bottom.toFixed(0) : 'none';
    const sig = hostKey + '|' + prKey + '|' + vw + 'x' + vh;
    if (residentLayer._bilivexClipSig !== sig) {
      if (playerRectUi) {
        const localRect = host.ownerDocument === uiDocument
          ? toLocalRect(playerRectUi)
          : playerRectUi;
        const topClip = Math.max(0, localRect.top);
        const rightClip = Math.max(0, vw - localRect.right);
        const bottomClip = Math.max(0, vh - localRect.bottom);
        const leftClip = Math.max(0, localRect.left);
        const newClip = 'inset(' + topClip + 'px ' + rightClip + 'px ' + bottomClip + 'px ' + leftClip + 'px)';
        residentLayer.style.clipPath = newClip;
        residentLayer.style.webkitClipPath = newClip;
      } else {
        residentLayer.style.clipPath = '';
        residentLayer.style.webkitClipPath = '';
      }
      residentLayer._bilivexClipSig = sig;
    }
    if (residentLayer.parentNode !== host) host.appendChild(residentLayer);
    // 网页大窗口 / 网页全屏模式下，悬停弹幕展示层始终保持可见。
    residentLayer.style.setProperty('visibility', 'visible', 'important');
    return residentLayer;
  }

  function removeEmptyResidentLayer() {
    const residentLayer = sharedRuntime.residentLayer;
    if (!residentLayer || residentLayer.querySelector('[data-bilivex-resident="1"]')) return;
    try { if (residentLayer.isConnected) residentLayer.remove(); } catch (e) {}
    if (sharedRuntime.residentLayer === residentLayer) sharedRuntime.residentLayer = null;
  }

  function syncFullscreenUi() {
    try {
      const host = getUiHost();
      if (!host) return;
      const layer = getResidentLayer();
      if (layer && layer.parentNode !== host) host.appendChild(layer);
      if (layer) {
        $$('[data-bilivex-resident="1"]', layer).forEach((item) => {
          const actionGroup = item._bilivexFloatActionGroup || item._bilivexFloatBtn;
          const actionHost = getOverlayActionHost(item.ownerDocument);
          if (actionGroup && actionHost && actionGroup.parentNode !== actionHost) {
            actionHost.appendChild(actionGroup);
            item._bilivexFloatActionHost = actionHost;
          }
          if (typeof item._bilivexFloatReposition === 'function') item._bilivexFloatReposition();
        });
      }
      ['bilivex-toast', 'bilivex-panel'].forEach((id) => {
        const el = panelDocument.getElementById(id);
        if (el && el.ownerDocument === host.ownerDocument && el.parentNode !== host) host.appendChild(el);
      });
    } catch (e) {}
  }

  // 返回「直播间画面」可视区边界（viewport 坐标）
  function getPlayerRect() {
    try {
      const ctr = document.querySelector('.danmaku-item-container') || document.querySelector('.web-player-danmaku');
      if (ctr) {
        const r = ctr.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) return toUiRect(r);
      }
      const p = document.getElementById('live-player');
      if (p) {
        const r = p.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) return toUiRect(r);
      }
    } catch (e) {}
    return null;
  }

  function resolveEmojiNameFromImg(image) {
    if (!image) return '';
    const explicitName = image.dataset.name || image.getAttribute('alt') || '';
    if (explicitName.trim()) return explicitName.trim().replace(/^\[|\]$/g, '');
    const resourceId = image.dataset.resourceId || image.getAttribute('data-resource-id') ||
      image.getAttribute('data-resourceId') || image.dataset.id || image.getAttribute('data-id') ||
      emojiHashFromSrc(image.getAttribute('src') || image.src);
    return EMOJI_ID_TO_NAME[String(resourceId || '').toLowerCase()] || '';
  }

  function extractFloatingDmPayload(item) {
    if (!item) return { type: 'unknown', text: '' };
    const root = item.querySelector('.bili-danmaku-x-text') || item;
    const parts = [];
    const visit = (node) => {
      if (node.nodeType === 3) {
        const text = String(node.textContent || '').replace(/\s+/g, ' ');
        if (text.trim()) parts.push({ type: 'text', value: text });
        return;
      }
      if (node.nodeType !== 1 || (node.matches && node.matches(
        '.bilivex-float-actions, .bilivex-float-plus-btn, .bilivex-float-favorite-btn'
      ))) return;
      if (node.tagName === 'IMG') {
        const name = resolveEmojiNameFromImg(node);
        if (name) {
          parts.push({ type: 'emoji', value: '[' + name + ']' });
        } else {
          const hash = emojiHashFromSrc(node.getAttribute('src') || node.src);
          if (hash) parts.push({ type: 'emoji-special', value: hash, hash });
        }
        return;
      }
      Array.from(node.childNodes || []).forEach(visit);
    };
    visit(root);
    const specialParts = parts.filter((part) => part.type === 'emoji-special');
    const normalParts = parts.filter((part) => part.type !== 'emoji-special');
    if (specialParts.length && normalParts.length) return { type: 'mixed-special', text: '' };
    if (specialParts.length === 1) {
      return { type: 'emoji-special', text: specialParts[0].hash, hash: specialParts[0].hash };
    }
    if (specialParts.length > 1) return { type: 'mixed-special', text: '' };
    const text = normalParts.map((part) => part.value).join('').replace(/\s+/g, ' ').trim();
    const hasEmoji = normalParts.some((part) => part.type === 'emoji');
    const hasText = normalParts.some((part) => part.type === 'text');
    return { type: hasEmoji && hasText ? 'mixed' : hasEmoji ? 'emoji' : hasText ? 'text' : 'unknown', text };
  }

  // 视觉反馈动画：点击 +1 后在弹幕位置弹出 "✓ 已 +1" 浮字动画
  function showFloatingPlusFeedback(item) {
    if (!item) return;
    const rect = item.ownerDocument === uiDocument
      ? item.getBoundingClientRect()
      : toUiRect(item.getBoundingClientRect());
    if (rect.width === 0 && rect.height === 0) return;
    const fb = uiDocument.createElement('div');
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

  // 增强单条漂浮弹幕：添加悬停 +1 按钮
  function ensureFloatingDmOverlay(item) {
    if (!item) return;
    if (!item.classList.contains('bili-danmaku-x-dm')) return;
    if (item.dataset.bilivexFloatInited) return;
    // 跳过被 B 站标记为禁用的弹幕
    if (item.classList.contains('bili-danmaku-x-disable')) return;
    item.dataset.bilivexFloatInited = '1';

    const restoreFloatingSource = (source, hoverId) => {
      if (!source || !hoverId ||
          source.dataset.bilivexHoverPaused !== hoverId ||
          source._bilivexHoverId !== hoverId) {
        return false;
      }
      const visual = source._bilivexHoverVisual;
      delete source.dataset.bilivexHoverPaused;
      source._bilivexHoverId = null;
      source._bilivexHoverVisual = null;
      source._bilivexReleaseHoverSource = null;
      source.classList.remove('bili-danmaku-x-paused');
      if (source._bilivexOrigVisibility) {
        source.style.setProperty(
          'visibility',
          source._bilivexOrigVisibility.value,
          source._bilivexOrigVisibility.priority
        );
      } else {
        source.style.removeProperty('visibility');
      }
      source._bilivexOrigVisibility = null;
      if (visual && visual._bilivexHoverId === hoverId) visual._bilivexSource = null;
      return true;
    };

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
        // 只冻结脚本生成的视觉副本，原生动画必须继续运行，确保 B 站按时回收弹幕并释放轨道。
        FloatingDmEngine.bindAnimationEndRelease(item.ownerDocument);
        const sourceRect = item.getBoundingClientRect();
        const hoverId = String(Date.now()) + '-' + Math.random().toString(36).slice(2, 8);
        item.dataset.bilivexHoverPaused = hoverId;
        item._bilivexHoverId = hoverId;
        item._bilivexReleaseHoverSource = () => restoreFloatingSource(item, hoverId);
        item._bilivexOrigOpacity = origOpacity;
        // 悬停时显示弹幕文字与高亮，不影响原始弹幕的滚动。
        const residentHost = getResidentLayer();
        if (!residentHost) {
          restoreFloatingSource(item, hoverId);
          return null;
        }
        const overlayDocument = residentHost.ownerDocument || uiDocument;
        const clone = overlayDocument.createElement('div');
        clone.className = 'bilivex-float-highlight';
        clone.dataset.bilivexResident = '1';
        clone._bilivexHoverId = hoverId;
        clone._bilivexSource = item;
        item._bilivexHoverVisual = clone;
        // 开始悬停时固化发送内容，确保点击时仍对应当前弹幕。
        clone._bilivexPayload = extractFloatingDmPayload(item);
        const sourceText = item.querySelector('.bili-danmaku-x-text') || item;
        // 悬停展示与直播间原弹幕外观保持一致：完整保留徽章、表情图等富文本内容，
        // 避免出现两条弹幕、文字起点错位或表情被放大的观感问题。
        const textLayer = overlayDocument.createElement('div');
        textLayer.className = 'bilivex-float-text';
        textLayer.style.setProperty('display', 'block', 'important');
        textLayer.style.setProperty('width', '100%', 'important');
        textLayer.style.setProperty('height', '100%', 'important');
        textLayer.style.setProperty('overflow', 'visible', 'important');
        textLayer.style.setProperty('pointer-events', 'none', 'important');
        textLayer.style.setProperty('user-select', 'none', 'important');
        if (overlayDocument !== item.ownerDocument) {
          const frameTransform = getFrameTransform();
          if (frameTransform.scaleX !== 1 || frameTransform.scaleY !== 1) {
            textLayer.style.setProperty('width', (100 / frameTransform.scaleX) + '%', 'important');
            textLayer.style.setProperty('height', (100 / frameTransform.scaleY) + '%', 'important');
            textLayer.style.setProperty('transform-origin', '0 0', 'important');
            textLayer.style.setProperty(
              'transform',
              'scale(' + frameTransform.scaleX + ',' + frameTransform.scaleY + ')',
              'important'
            );
          }
        }
        try {
          // 字体 / 颜色 / 行高等从源弹幕读出，复制时仅带走"实际生效"的字体与对齐相关样式；
          // 尺寸属性走副本自身的占位策略，避免与源坐标冲突。
          const textStyle = getComputedStyle(sourceText);
          const styleKeys = ['color', 'font-family', 'font-size', 'font-weight', 'font-style', 'line-height',
            'letter-spacing', 'text-shadow', 'display', 'align-items'];
          styleKeys.forEach((name) => {
            const value = textStyle.getPropertyValue(name);
            if (value) textLayer.style.setProperty(name, value, 'important');
          });
          // 复制源弹幕的所有可见子节点到副本，剥离脚本注入的辅助元素后再搬入文本层。
          const sanitized = item.cloneNode(true);
          sanitized.querySelectorAll(
            '.bilivex-float-actions, .bilivex-float-plus-btn, .bilivex-float-favorite-btn,' +
            '[data-bilivex-resident], [data-bilivex-float-inited], [data-bilivex-hover-paused]'
          ).forEach((btn) => btn.remove());
          sanitized.removeAttribute('class');
          sanitized.removeAttribute('style');
          while (sanitized.firstChild) textLayer.appendChild(sanitized.firstChild);
          const sourceImages = Array.from(item.querySelectorAll('img'));
          const cloneImages = Array.from(textLayer.querySelectorAll('img'));
          cloneImages.forEach((img, index) => {
            const sourceImg = sourceImages[index];
            if (!sourceImg) return;
            const imageRect = sourceImg.getBoundingClientRect();
            if (imageRect.width > 0 && imageRect.height > 0) {
              img.style.setProperty('width', imageRect.width + 'px', 'important');
              img.style.setProperty('height', imageRect.height + 'px', 'important');
              img.style.setProperty('max-width', imageRect.width + 'px', 'important');
              img.style.setProperty('max-height', imageRect.height + 'px', 'important');
              img.style.setProperty('object-fit', 'contain', 'important');
              img.style.setProperty('vertical-align', 'middle', 'important');
            }
          });
        } catch (e) {}
        if (overlayDocument !== item.ownerDocument) {
          textLayer.style.setProperty('display', 'block', 'important');
        }
        clone.appendChild(textLayer);
        clone._bilivexTextLayer = textLayer;
        // 隐藏源弹幕时使用 important 并保存其原内联值，保证连续多次悬停后原弹幕能按原样恢复滚动。
        try {
          item._bilivexOrigVisibility = {
            value: item.style.getPropertyValue('visibility'),
            priority: item.style.getPropertyPriority('visibility')
          };
          item.style.setProperty('visibility', 'hidden', 'important');
        } catch (e) {}
        item.classList.add('bili-danmaku-x-paused');
        // 悬停高亮只绘制在独立展示层，移开鼠标后自动清理。
        // 悬停的弹幕与画面中的弹幕透明度保持一致（画面上下/边缘区域本身较淡，
        // 悬停后不应变得更醒目），观感自然统一。
        const opacityValue = origOpacity && origOpacity !== '1' ? origOpacity : '';
        if (opacityValue) clone.style.setProperty('opacity', opacityValue, 'important');
        clone._bilivexOrigOpacity = origOpacity;
        const rect = overlayDocument === item.ownerDocument ? sourceRect : toUiRect(sourceRect);
        const playerRectUi = getPlayerRect();
        const playerRect = overlayDocument === uiDocument && panelDocument !== uiDocument && playerRectUi
          ? toLocalRect(playerRectUi)
          : playerRectUi;
        // 悬停弹幕默认在直播画面范围内展示（不溢出到聊天区）。
        // 但当弹幕本身已贴近或越过画面边界时，若仍按画面裁剪，
        // 用户悬停位置（画面外的那部分文字）会被整段裁掉，看起来像"弹幕消失"。
        // 因此这种情形跳过画面裁剪，让整条弹幕完整显示，悬停永不消失。
        let hoverUsesResident = false;
        if (playerRect) {
          const clipTop = Math.max(0, playerRect.top - rect.top);
          const clipRight = Math.max(0, rect.right - playerRect.right);
          const clipBottom = Math.max(0, rect.bottom - playerRect.bottom);
          const clipLeft = Math.max(0, playerRect.left - rect.left);
          // 仅当弹幕整体在画面内（或仅亚像素级贴边 ≤2px）时才做画面内嵌裁剪。
          const fullyInside = clipTop <= 2 && clipRight <= 2 && clipBottom <= 2 && clipLeft <= 2;
          if (fullyInside) {
            hoverUsesResident = true;
            const clipInset = 'inset(' + clipTop + 'px ' + clipRight + 'px ' + clipBottom + 'px ' + clipLeft + 'px)';
            textLayer.style.setProperty('clip-path', clipInset, 'important');
            textLayer.style.setProperty('-webkit-clip-path', clipInset, 'important');
          } else {
            textLayer.style.setProperty('clip-path', 'none', 'important');
            textLayer.style.setProperty('-webkit-clip-path', 'none', 'important');
          }
        }
        // 悬停弹幕保持原位置完整显示，不被吸附到播放器角落，左缘弹幕也不跳动。
        clone.style.setProperty('position', 'fixed', 'important');
        clone.style.setProperty('left', rect.left + 'px', 'important');
        clone.style.setProperty('top', rect.top + 'px', 'important');
        clone.style.setProperty('width', rect.width + 'px', 'important');
        clone.style.setProperty('height', rect.height + 'px', 'important');
        clone.style.setProperty('box-sizing', 'border-box', 'important');
        clone.style.setProperty('margin', '0', 'important');
        clone.style.setProperty('padding', '0', 'important');
        clone.style.setProperty('border', '0', 'important');
        clone.style.setProperty('transform', 'none', 'important');
        clone.style.setProperty('z-index', '9999', 'important');
        clone.style.setProperty('pointer-events', 'none', 'important');
        clone.style.backgroundColor = currentTheme.highlight;
        clone.style.boxShadow = 'inset 0 0 0 1px ' + currentTheme.primary;
        // 3) 操作组：跟随弹幕显示，优先放在右侧，空间不足时回退左侧。
        const cloneHost = hoverUsesResident ? residentHost : getUiHost();
        const actionHost = getOverlayActionHost(overlayDocument);
        if (!cloneHost || !actionHost || cloneHost.ownerDocument !== overlayDocument || actionHost.ownerDocument !== overlayDocument) {
          restoreFloatingSource(item, hoverId);
          return null;
        }
        const actionGroup = overlayDocument.createElement('div');
        actionGroup.className = 'bilivex-float-actions';
        const cBtn = overlayDocument.createElement('button');
        cBtn.className = 'bilivex-float-plus-btn';
        cBtn.type = 'button';
        cBtn.textContent = '+1';
        cBtn.dataset.bilivexAction = 'plus1';
        const cFav = overlayDocument.createElement('button');
        cFav.className = 'bilivex-float-favorite-btn';
        cFav.type = 'button';
        cFav.textContent = '收藏';
        cFav.dataset.bilivexAction = 'favorite';
        // 操作栏始终限制在视口范围内：即使弹幕贴近画面上/左/右边缘，
        // 操作栏也保证在屏幕内完整露出，不会被画面边界裁切或遮挡。
        const leftLimit = 0;
        const topLimit = 0;
        // 操作组保留可见的 6px 留白；热区判定会单独连通这段空隙，避免为了可操作性牺牲视觉间距。
        const actionJoin = -6;
        actionGroup.style.cssText = 'position:fixed;left:0;top:0;transform:none;margin:0;display:flex;align-items:center;gap:4px;' +
          'padding:3px;border-radius:15px;background:rgba(255,255,255,.62);opacity:.88;' +
          'border:1px solid rgba(255,255,255,.42);box-shadow:0 2px 8px rgba(0,0,0,.14);' +
          'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);' +
          'transition:opacity .16s ease;z-index:2147483001;pointer-events:auto;user-select:none;white-space:nowrap;';
        [cBtn, cFav].forEach((button) => {
          button.style.cssText = 'border:none;border-radius:12px;padding:4px 10px;font-size:13px;line-height:18px;' +
            'font-weight:600;cursor:pointer;color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.2);' +
            'transition:transform .1s ease,filter .1s ease;';
          button.addEventListener('mousedown', (e) => { e.stopPropagation(); button.style.transform = 'scale(.95)'; });
          button.addEventListener('mouseup', () => { button.style.transform = ''; });
          button.addEventListener('mouseleave', () => { button.style.transform = ''; });
        });
        cBtn.style.background = currentTheme.primary;
        cFav.style.background = '#6c7a89';
        cBtn.addEventListener('click', (e) => {
          e.stopPropagation(); e.preventDefault();
          const payload = clone._bilivexPayload || extractFloatingDmPayload(item);
          if (!payload.text) { showToast('该弹幕无文本内容'); return; }
          runPlusButtonAction(cBtn, () => sendPlusOne(payload), (result) => {
            if (result.status === 'confirmed' || result.status === 'triggered' || result.status === 'timeout') showFloatingPlusFeedback(clone);
          });
        });
        cFav.addEventListener('click', (e) => {
          e.stopPropagation(); e.preventDefault();
          const payload = clone._bilivexPayload || extractFloatingDmPayload(item);
          const result = addFavorite(payload.type === 'emoji-special' ? '' : payload.text);
          showToast(result.status === 'added' ? '已收藏' : result.status === 'duplicate' ? '已在收藏夹中' : result.status === 'limit' ? '收藏夹已达上限' : '该弹幕无文本内容');
        });
        actionGroup.appendChild(cBtn);
        actionGroup.appendChild(cFav);
        clone._bilivexFloatBtn = actionGroup;
        clone._bilivexFloatActionGroup = actionGroup;
        clone._bilivexFloatActionHost = actionHost;
        actionGroup._bilivexFloatClone = clone;
        // 悬停弹幕通常在直播画面范围内展示（不溢出到聊天区）；
        // 贴近画面边界的弹幕则完整显示，保证悬停弹幕不会消失。
        cloneHost.appendChild(clone);
        // 操作栏与悬停弹幕同属当前展示层，保证始终完整可见、不被遮挡。
        actionHost.appendChild(actionGroup);
        const positionActionGroup = () => {
          const currentRect = clone.getBoundingClientRect();
          const actionRect = actionGroup.getBoundingClientRect();
          const viewportWidth = overlayDocument.documentElement.clientWidth || overlayDocument.defaultView.innerWidth;
          const viewportHeight = overlayDocument.documentElement.clientHeight || overlayDocument.defaultView.innerHeight;
          const actionWidth = actionRect.width;
          const actionHeight = actionRect.height;
          const rightLeft = currentRect.right - actionJoin;
          const leftLeft = currentRect.left + actionJoin - actionWidth;
          const minLeft = leftLimit;
          const maxLeft = Math.max(minLeft, viewportWidth - actionWidth);
          // 候选位置严格落在屏幕范围内：先右后左，两侧都不够时居中收拢。
          let actionLeft;
          if (rightLeft >= minLeft && rightLeft <= maxLeft) {
            actionLeft = rightLeft;
          } else if (leftLeft >= minLeft && leftLeft <= maxLeft) {
            actionLeft = leftLeft;
          } else {
            actionLeft = Math.min(maxLeft, Math.max(minLeft, currentRect.left));
          }
          let actionTop = currentRect.top + (currentRect.height - actionHeight) / 2;
          if (rightLeft > maxLeft && leftLeft < minLeft) {
            const belowTop = currentRect.bottom - actionJoin;
            const aboveTop = currentRect.top + actionJoin - actionHeight;
            actionTop = belowTop + actionHeight <= viewportHeight ? belowTop : Math.max(topLimit, aboveTop);
          }
          actionTop = Math.min(Math.max(topLimit, actionTop), Math.max(topLimit, viewportHeight - actionHeight));
          actionLeft = Math.min(maxLeft, Math.max(minLeft, actionLeft));
          actionTop = Math.min(Math.max(topLimit, actionTop), Math.max(topLimit, viewportHeight - actionHeight));
          actionGroup.style.left = actionLeft + 'px';
          actionGroup.style.top = actionTop + 'px';
        };
        clone._bilivexFloatReposition = positionActionGroup;
        positionActionGroup();
        // 弹幕、收藏按钮和 +1 按钮共用一个悬停操作组。
        clone._bilivexFloatOnLeave = () => {
          try {
            actionGroup.style.display = 'none';
            if (actionGroup.isConnected) actionGroup.remove();
            clone._bilivexFloatBtn = null;
            clone._bilivexFloatActionGroup = null;
            clone._bilivexFloatReposition = null;
            const source = clone._bilivexSource;
            const activeSource = source === item && source &&
              source.dataset.bilivexHoverPaused === (clone._bilivexHoverId || '') &&
              source._bilivexHoverId === (clone._bilivexHoverId || '');
            if (activeSource) restoreFloatingSource(source, clone._bilivexHoverId);
            clone._bilivexSource = null;
            clone._bilivexPayload = null;
            if (clone.isConnected) clone.remove();
            removeEmptyResidentLayer();
          } catch (e) {}
        };
        return clone;
      } catch (e) {
        // 悬停初始化任一步骤失败时不得留下隐藏源弹幕；立即回滚到原始状态。
        try { restoreFloatingSource(item, item._bilivexHoverId); } catch (restoreError) {}
        return null;
      }
    };
    const onLeave = () => {
      try { restoreFloatingSource(item, item._bilivexHoverId); } catch (e) {}
    };

    try {
      item._bilivexFloatOnEnter = onEnter;
      item._bilivexFloatOnLeave = onLeave;
    } catch (e) {}

    item._bilivexFloatCleanup = () => {
      const isResident = item.dataset && item.dataset.bilivexResident === '1';
      const actionGroup = item._bilivexFloatActionGroup || item._bilivexFloatBtn;
      if (actionGroup && actionGroup.isConnected) actionGroup.remove();
      item._bilivexFloatReposition = null;
      if (isResident && typeof item._bilivexFloatOnLeave === 'function') {
        item._bilivexFloatOnLeave();
      }
      if (isResident && item.isConnected) item.remove();
      item._bilivexFloatCleanup = null;
      item._bilivexFloatOnEnter = null;
      item._bilivexFloatOnLeave = null;
      if (isResident) {
        item._bilivexHoverId = null;
        try { delete item.dataset.bilivexHoverPaused; } catch (e) {}
      }
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

  // 只对仍可见且未禁用的弹幕启用悬停
  function hasActiveFloatingDmAnimation(item, knownPlayerRect, knownItemRect) {
    if (!item || !item.isConnected) return false;
    try {
      if (item.classList.contains('bili-danmaku-x-disable') || isBilivexReleasingDm(item)) return false;
      const rect = knownItemRect || item.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return false;
      const style = getComputedStyle(item);
      if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) <= 0) return false;
      const playerRectUi = knownPlayerRect === undefined ? getPlayerRect() : knownPlayerRect;
      const playerRect = knownPlayerRect === undefined && playerRectUi &&
        item.ownerDocument === uiDocument && panelDocument !== uiDocument
          ? toLocalRect(playerRectUi)
          : playerRectUi;
      if (playerRect && (rect.right < playerRect.left || rect.left > playerRect.right ||
          rect.bottom < playerRect.top || rect.top > playerRect.bottom)) return false;
      if (typeof item.getAnimations !== 'function') return true;
      const animations = item.getAnimations();
      if (animations.length === 0) return true;
      return animations.some((animation) => {
        const state = animation.playState;
        return state === 'running' || state === 'pending' || state === 'paused';
      });
    } catch (e) {
      return false;
    }
  }

  // ==================== 漂浮弹幕悬停检测 ====================
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
    _leaveTimer: null,
    _listenerCleanups: [],
    _animationReleaseDocuments: new Map(),

    cancelPendingLeave() {
      if (this._leaveTimer) {
        clearTimeout(this._leaveTimer);
        this._leaveTimer = null;
      }
    },

    scheduleLeave(item) {
      if (!item || this._leaveTimer) return;
      // 8px 操作组间距允许鼠标从弹幕平滑移入按钮，离开所有热区后才短暂延迟释放。
      this._leaveTimer = setTimeout(() => {
        this._leaveTimer = null;
        if (this.hovered === item) this.leave(item);
      }, 120);
    },

    bindAnimationEndRelease(ownerDocument) {
      const sourceDocument = ownerDocument || uiDocument;
      if (!sourceDocument || this._animationReleaseDocuments.has(sourceDocument)) return;
      const onNativeAnimationDone = (e) => {
        const source = e.target;
        if (!source || source.nodeType !== 1 || source.ownerDocument !== sourceDocument ||
            !(source.dataset && source.dataset.bilivexHoverPaused)) return;
        const release = source._bilivexReleaseHoverSource;
        if (typeof release === 'function') release();
      };
      sourceDocument.addEventListener('animationend', onNativeAnimationDone, true);
      sourceDocument.addEventListener('animationcancel', onNativeAnimationDone, true);
      this._animationReleaseDocuments.set(sourceDocument, onNativeAnimationDone);
    },

    start() {
      if (this.bound) return;
      this.bound = true;
      const listen = (target, type, handler, options) => {
        target.addEventListener(type, handler, options);
        this._listenerCleanups.push(() => target.removeEventListener(type, handler, options));
      };
      const onMoveAt = (clientX, clientY, addFrameOffset) => {
        const now = Date.now();
        const prevPx = this.px, prevPy = this.py, prevTs = this._lastMoveTs;
        const point = addFrameOffset ? toUiPoint(clientX, clientY) : { x: clientX, y: clientY };
        this.px = point.x;
        this.py = point.y;
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
      const onMove = (e) => onMoveAt(e.clientX, e.clientY, true);
      // pointermove 已覆盖鼠标与触控指针；仅在不支持 PointerEvent 时回退 mousemove，
      // 避免同一鼠标移动被两个事件重复计算候选。
      const moveEvent = typeof window.PointerEvent === 'function' ? 'pointermove' : 'mousemove';
      listen(uiDocument, moveEvent, onMove, { passive: true });
      // 兼容 iframe 直播间：鼠标从弹幕移到 +1 按钮时保持悬停，不因跨页面元素而中断。
      if (panelDocument !== uiDocument) {
        const onPanelMove = (e) => onMoveAt(e.clientX, e.clientY, false);
        listen(panelDocument, moveEvent, onPanelMove, { passive: true });
      }
      // 兜底：鼠标离开顶层窗口时清除悬停；iframe 实例不能在离开 iframe 时提前释放。
      const onLeaveWin = () => { if (this.hovered) this.leave(this.hovered); };
      const leaveDocument = panelDocument === uiDocument ? uiDocument : panelDocument;
      listen(leaveDocument, 'pointerleave', onLeaveWin);
      listen(leaveDocument, 'mouseleave', onLeaveWin);

      // 悬停冻结期间页面滚动：fixed 定位的悬停副本与随页面移动的源弹幕会分离成
      // “双弹幕”（副本吸附在指针旁、原位置残留低透明度副本）。
      // 指针静止时滚动页面一律判定为取消悬停：恢复源弹幕滚动并移除副本。
      const onPageScroll = (e) => {
        const hovered = this.hovered;
        if (!hovered) return;
        const target = e.target;
        const source = hovered.dataset && hovered.dataset.bilivexResident === '1'
          ? hovered._bilivexSource : hovered;
        // 仅响应页面级滚动，或滚动容器包含源弹幕（滚动会改变弹幕视口位置）的情况；
        // 聊天区等内部容器自动滚动不影响悬停。
        const affectsSource = target === uiDocument || target === panelDocument ||
          (target && target.nodeType === 1 && source && target !== source &&
            typeof target.contains === 'function' && target.contains(source));
        if (!affectsSource) return;
        this.leave(hovered);
        this._cand = null;
        this._candHits = 0;
        this._candMiss = 0;
      };
      listen(uiDocument, 'scroll', onPageScroll, { passive: true, capture: true });
      if (panelDocument !== uiDocument) {
        listen(panelDocument, 'scroll', onPageScroll, { passive: true, capture: true });
      }
      listen(uiDocument, 'visibilitychange', () => {
        if (uiDocument.hidden && this.hovered) this.leave(this.hovered);
      });

      this.bindAnimationEndRelease(uiDocument);
    },

    stop() {
      if (this.hovered) this.leave(this.hovered);
      else this.stopKeepAlive();
      this.cancelPendingLeave();
      if (this.rafId) window.cancelAnimationFrame(this.rafId);
      if (this._followRaf) window.cancelAnimationFrame(this._followRaf);
      this.rafId = 0;
      this._followRaf = 0;
      this._listenerCleanups.splice(0).forEach((cleanup) => {
        try { cleanup(); } catch (e) {}
      });
      this._animationReleaseDocuments.forEach((handler, sourceDocument) => {
        try {
          sourceDocument.removeEventListener('animationend', handler, true);
          sourceDocument.removeEventListener('animationcancel', handler, true);
        } catch (e) {}
      });
      this._animationReleaseDocuments.clear();
      this.bound = false;
      this.px = -1;
      this.py = -1;
      this._lastMoveTs = 0;
      this._lastVelocity = 0;
      this._cand = null;
      this._candHits = 0;
      this._candMiss = 0;
    },

    getBodyRect(item) {
      const r = toUiRect(item.getBoundingClientRect());
      return { l: r.left - 6, r: r.right + 6, t: r.top - 6, b: r.bottom + 6 };
    },

    getLocalPoint(px, py) {
      return toLocalPoint(px, py);
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
      if (!cfg.floatDmPlus) return null;
      const local = this.getLocalPoint(px, py);
      const playerRectUi = getPlayerRect();
      const playerRectLocal = playerRectUi && panelDocument !== uiDocument
        ? toLocalRect(playerRectUi)
        : playerRectUi;
      try {
        const el = document.elementFromPoint(local.x, local.y);
        const item = el ? this.findDm(el) : null;
        if (item && !item.classList.contains('bili-danmaku-x-disable') &&
            !isBilivexReleasingDm(item) && hasActiveFloatingDmAnimation(item, playerRectLocal)) {
          if (!item.dataset.bilivexFloatInited) ensureFloatingDmOverlay(item);
          if (typeof item._bilivexFloatOnEnter === 'function') return item;
        }
      } catch (e) {}
      const container = boundFloatContainer && boundFloatContainer.isConnected
        ? boundFloatContainer
        : findFloatingDmContainer();
      const candidateRoots = [];
      if (container) candidateRoots.push(container);
      const player = document.querySelector('.web-player-danmaku, .danmaku-item-container, #live-player');
      if (player && !candidateRoots.includes(player)) candidateRoots.push(player);
      const dms = new Set();
      candidateRoots.forEach((root) => {
        root.querySelectorAll('.bili-danmaku-x-dm').forEach((d) => {
          dms.add(d);
        });
      });
      for (const d of dms) {
        if (d.classList.contains('bili-danmaku-x-disable')) continue;
        if (isBilivexReleasingDm(d)) continue;
        let localRect = d.getBoundingClientRect();
        if (localRect.width === 0 || localRect.height === 0) {
          if (!d.dataset.bilivexFloatInited) ensureFloatingDmOverlay(d);
          localRect = d.getBoundingClientRect();
        }
        const r = toUiRect(localRect);
        if (r.width === 0 || r.height === 0) continue;
        if (px >= r.left && px <= r.right && py >= r.top && py <= r.bottom) {
          if (!hasActiveFloatingDmAnimation(d, playerRectLocal, localRect)) continue;
          if (!d.dataset.bilivexFloatInited) ensureFloatingDmOverlay(d);
            if (typeof d._bilivexFloatOnEnter !== 'function') continue;
            return d;
          }
        }
      return null;
    },

    check() {
      if (!cfg.floatDmPlus) {
        if (this.hovered) this.leave(this.hovered);
        return;
      }
      const { px, py } = this;
      const cur = this.hovered;
      if (px >= 0 && py >= 0) {
        try {
          const local = this.getLocalPoint(px, py);
          // panelDocument 使用顶层坐标；uiDocument（iframe）必须使用换算后的局部坐标。
          const panelEl = panelDocument.elementFromPoint(px, py);
          const sourceEl = uiDocument === panelDocument ? panelEl : uiDocument.elementFromPoint(local.x, local.y);
          if ([panelEl, sourceEl].some((el) => el && el.closest && el.closest('#bilivex-panel, .bilivex-dm-bar'))) {
            if (cur) this.leave(cur);
            this._cand = null;
            this._candHits = 0;
            this._candMiss = 0;
            return;
          }
        } catch (e) {}
      }
      if (cur && cur.isConnected) {
        try {
          const local = this.getLocalPoint(px, py);
          // 弹幕与操作栏不在同一页面时分别命中，避免把两套坐标混在一起造成悬停误判。
          const panelEl = panelDocument.elementFromPoint(px, py);
          const sourceEl = uiDocument === panelDocument ? panelEl : uiDocument.elementFromPoint(local.x, local.y);
          const topEl = panelEl || sourceEl;
          const actionGroup = cur._bilivexFloatActionGroup || cur._bilivexFloatBtn || cur.querySelector('.bilivex-float-actions');
          const source = cur.dataset && cur.dataset.bilivexResident === '1' ? cur._bilivexSource : cur;
          const sourceRect = source && source.isConnected ? getFloatingUiRect(source) : null;
          const visualRect = getFloatingUiRect(cur);
          const actionRect = actionGroup && actionGroup.isConnected ? getFloatingUiRect(actionGroup) : null;
          const inRect = (r) => r && px >= r.left && px <= r.right && py >= r.top && py <= r.bottom;
          if (topEl && (topEl === cur || cur.contains(topEl) || topEl === source ||
              (source && source.contains(topEl)) || topEl === actionGroup || (actionGroup && actionGroup.contains(topEl)))) {
            this.cancelPendingLeave();
            return;
          }
          // 弹幕、悬停副本与完整操作组均是热区；仅保留两者之间的最短连接通道，
          // 避免旧版整块包围矩形把空白区域错误识别为悬停。
          if (inRect(sourceRect) || inRect(visualRect) || inRect(actionRect)) {
            this.cancelPendingLeave();
            return;
          }
          if (actionRect) {
            const itemRect = sourceRect || visualRect;
            const horizontalBridge = itemRect.right <= actionRect.left || actionRect.right <= itemRect.left;
            const bridge = horizontalBridge
              ? {
                  left: Math.min(itemRect.right, actionRect.right),
                  right: Math.max(itemRect.left, actionRect.left),
                  top: Math.max(itemRect.top, actionRect.top),
                  bottom: Math.min(itemRect.bottom, actionRect.bottom)
                }
              : {
                  left: Math.max(itemRect.left, actionRect.left),
                  right: Math.min(itemRect.right, actionRect.right),
                  top: Math.min(itemRect.bottom, actionRect.bottom),
                  bottom: Math.max(itemRect.top, actionRect.top)
                };
            if (bridge.right >= bridge.left && bridge.bottom >= bridge.top && inRect(bridge)) {
              this.cancelPendingLeave();
              return;
            }
          }
        } catch (e) {}
      }
      const cand = this._computeCandidate(px, py);
      const curSource = cur && cur.dataset && cur.dataset.bilivexResident === '1' ? cur._bilivexSource : cur;
      if (cur && cand && cand === curSource) {
        this.cancelPendingLeave();
        return;
      }
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
        if (cur) this.scheduleLeave(cur);
        this._cand = null; this._candHits = 0; this._candMiss = 0;
        return;
      }
      if (cur && cand !== curSource) this.leave(cur);
      // 命中即切换悬停，避免快速移动的直播弹幕在切换时产生可感知延迟。
      this._cand = null; this._candHits = 0; this._candMiss = 0;
      this.hover(cand);
    },

    hover(item) {
      this.cancelPendingLeave();
      const sharedOwner = sharedRuntime.hoverOwner;
      if (sharedOwner && sharedOwner.engine !== this && sharedOwner.engine &&
          typeof sharedOwner.engine.leave === 'function') {
        sharedOwner.engine.leave(sharedOwner.item);
      }
      // 同一时刻只允许存在一个悬停弹幕：切换前先释放上一个，避免双弹幕共存。
      if (this.hovered && this.hovered !== item) this.leave(this.hovered);
      const visual = item._bilivexFloatOnEnter ? item._bilivexFloatOnEnter() : null;
      // 初始化失败时 onEnter 已回滚源节点；不能把源弹幕误记为悬停对象。
      if (!visual) return;
      this.hovered = visual;
      sharedRuntime.hoverOwner = { engine: this, item: visual };
      this.startKeepAlive();
    },

    leave(item) {
      this.cancelPendingLeave();
      const target = item || this.hovered;
      if (target && target._bilivexFloatOnLeave) target._bilivexFloatOnLeave();
      if (this.hovered === target) this.hovered = null;
      const sharedOwner = sharedRuntime.hoverOwner;
      if (sharedOwner && sharedOwner.engine === this && (!target || sharedOwner.item === target)) {
        sharedRuntime.hoverOwner = null;
      }
      this.stopKeepAlive();
      removeEmptyResidentLayer();
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
      let source = item.dataset && item.dataset.bilivexResident === '1' ? item._bilivexSource : null;
      if (source) {
        let sourceWasReused = false;
        try {
          const expected = item._bilivexPayload;
          const current = source.isConnected ? extractFloatingDmPayload(source) : null;
          sourceWasReused = !!(expected && current &&
            (expected.type !== current.type || expected.text !== current.text || expected.resourceId !== current.resourceId));
        } catch (e) {}
        if (!source.isConnected || sourceWasReused) {
          try {
            const release = source._bilivexReleaseHoverSource;
            if (typeof release === 'function') release();
          } catch (e) {}
          source = item._bilivexSource;
        }
      }
      const sourceIsDisabled = !!(source && source.classList.contains('bili-danmaku-x-disable'));
      const sourceHoverMatches = !source || (
        source.dataset.bilivexHoverPaused === item._bilivexHoverId &&
        source._bilivexHoverId === item._bilivexHoverId
      );
      // 页面重绘后仍保持当前悬停状态，展示层可自动恢复。
      if (item.dataset && item.dataset.bilivexResident === '1' &&
          !item.isConnected && !sourceIsDisabled && sourceHoverMatches) {
        try {
          const layer = getResidentLayer();
          if (layer) layer.appendChild(item);
          const actionGroup = item._bilivexFloatActionGroup || item._bilivexFloatBtn;
          const actionHost = getOverlayActionHost(item.ownerDocument);
          if (actionGroup && actionHost) {
            // 全屏宿主切换后，操作栏即使仍连接在旧 body 上，也必须迁移到当前全屏元素内。
            if (actionGroup.parentNode !== actionHost) actionHost.appendChild(actionGroup);
            item._bilivexFloatActionHost = actionHost;
          }
          if (typeof item._bilivexFloatReposition === 'function') item._bilivexFloatReposition();
        } catch (e) {}
      }
      // 悬停期间保持冻结；弹幕结束或失效时才释放悬停效果。
      // 面板尺寸动画结束后，位置已按最终布局稳定，直接保存最终坐标即可。
      if (item.isConnected && !sourceIsDisabled && sourceHoverMatches) {
        try {
          const actionGroup = item._bilivexFloatActionGroup || item._bilivexFloatBtn;
          const actionHost = getOverlayActionHost(item.ownerDocument);
          if (actionGroup && actionHost) {
            if (actionGroup.parentNode !== actionHost) actionHost.appendChild(actionGroup);
            item._bilivexFloatActionHost = actionHost;
          }
          if (typeof item._bilivexFloatReposition === 'function') item._bilivexFloatReposition();
          const r = item.getBoundingClientRect();
          if (r.width > 0 && r.height > 0) {
            this._keepRect = { left: r.left, top: r.top, width: r.width, height: r.height };
          }
        } catch (e) {}
        return;
      }
      // 即使弹幕内容短暂刷新，已选中的悬停内容仍继续显示。
      // 只有副本本身失效、源节点明确禁用或悬停标识冲突时才释放。
      this.leave(item);
    }
  };

  let boundFloatContainer = null;
  function attachFloatingDmHover(rotate) {
    if (!rotate) return;
    if (rotate.dataset.bilivexFloatBound) { boundFloatContainer = rotate; return; }
    rotate.dataset.bilivexFloatBound = '1';
    boundFloatContainer = rotate;
    const refresh = () => $$(':scope .bili-danmaku-x-dm', rotate).forEach(ensureFloatingDmOverlay);
    refresh();
    let refreshQueued = false;
    const mo = new MutationObserver((records) => {
      if (refreshQueued) return;
      refreshQueued = true;
      requestAnimationFrame(() => {
        refreshQueued = false;
        records.forEach((record) => record.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches('.bili-danmaku-x-dm')) ensureFloatingDmOverlay(node);
          node.querySelectorAll('.bili-danmaku-x-dm').forEach(ensureFloatingDmOverlay);
        }));
      });
    });
    mo.observe(rotate, { childList: true, subtree: true });
    rotate._bilivexFloatMO = mo;
    $$(':scope .bili-danmaku-x-dm[data-bilivex-float-inited="1"]', rotate).forEach((item) => {
      if (typeof item._bilivexFloatOnEnter === 'function') return;
      item.querySelectorAll('.bilivex-float-actions, .bilivex-float-plus-btn, .bilivex-float-favorite-btn').forEach((el) => el.remove());
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
    const containers = [];
    [rotate, boundFloatContainer].forEach((container) => {
      if (container && !containers.includes(container)) containers.push(container);
    });
    if (cfg.floatDmPlus) {
      if (!rotate) return;
      if (rotate._bilivexFloatMO) {
        try { rotate._bilivexFloatMO.disconnect(); } catch (e) {}
      }
      attachFloatingDmHover(rotate);
    } else {
      // 关闭：移除所有已增强弹幕的监听器与按钮
      FloatingDmEngine.stop();
      containers.forEach((container) => {
        if (container._bilivexFloatMO) {
          try { container._bilivexFloatMO.disconnect(); } catch (e) {}
          container._bilivexFloatMO = null;
        }
        $$('.bili-danmaku-x-dm', container).forEach((item) => {
          if (typeof item._bilivexFloatCleanup === 'function') {
            try { item._bilivexFloatCleanup(); } catch (e) {}
          }
          delete item.dataset.bilivexFloatInited;
        });
        delete container.dataset.bilivexFloatBound;
      });
      boundFloatContainer = null;
      // 关闭功能时同步清理悬停副本与操作栏，二者始终按引用成对删除。
      const residentHosts = [];
      const residentLayer = sharedRuntime.residentLayer;
      if (residentLayer) residentHosts.push(residentLayer.ownerDocument);
      if (uiDocument && !residentHosts.includes(uiDocument)) residentHosts.push(uiDocument);
      if (panelDocument && !residentHosts.includes(panelDocument)) residentHosts.push(panelDocument);
      residentHosts.forEach((hostDocument) => {
        $$('.bilivex-float-actions', hostDocument).forEach((group) => {
          const clone = group._bilivexFloatClone;
          if (clone && typeof clone._bilivexFloatOnLeave === 'function') {
            try { clone._bilivexFloatOnLeave(); } catch (e) {}
          } else if (group.isConnected) {
            group.remove();
          }
        });
        $$('[data-bilivex-resident="1"]', hostDocument).forEach((item) => {
          if (typeof item._bilivexFloatCleanup === 'function') {
            try { item._bilivexFloatCleanup(); } catch (e) {}
          } else if (item.dataset.bilivexResident === '1') {
            try {
              if (typeof item._bilivexFloatOnLeave === 'function') {
                item._bilivexFloatOnLeave();
              } else {
                const pairedGroup = item._bilivexFloatActionGroup || item._bilivexFloatBtn;
                if (pairedGroup && pairedGroup.isConnected) pairedGroup.remove();
                if (item.isConnected) item.remove();
              }
            } catch (e2) {}
          }
          delete item.dataset.bilivexFloatInited;
        });
      });
      removeEmptyResidentLayer();
    }
  }

  // ---------- 全局守护 ----------
  let guardianStarted = false;
  let guardianTimer = null;

  let boundTailCtl = null;
  function rebindInputTailHandler() {
    const apply = (ta) => {
      if (!ta || ta.dataset.bilivexTailBound) return;
      ta.dataset.bilivexTailBound = '1';
      ta.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' || event.shiftKey || event.altKey || event.ctrlKey || event.metaKey || event.isComposing) {
          return;
        }
        appendTailForManualSend(ta);
      }, true);
    };
    const ctl = document.querySelector('.chat-control-panel');
    if (!ctl || ctl.dataset.bilivexTailCtlBound) return;
    ctl.dataset.bilivexTailCtlBound = '1';
    boundTailCtl = ctl;
    apply(ctl.querySelector('textarea.chat-input, textarea'));
    ctl.addEventListener('click', (event) => {
      const ta = findChatInput();
      const target = event.target && event.target.closest ? event.target.closest('button, [role="button"]') : null;
      if (ta && isEnabledChatSendButton(target, ta)) appendTailForManualSend(ta);
    }, true);
    const mo = new MutationObserver(() => apply(ctl.querySelector('textarea')));
    mo.observe(ctl, { childList: true, subtree: true });
    ctl._bilivexTailMO = mo;
  }

  // ---------- 一键点赞（30 连击点亮粉丝团灯牌） ----------
  // B 站规则：直播中连续点赞 30 次可点亮粉丝团灯牌。
  const LIKE_COUNT = 30;          // 灯牌激活阈值
  let liking = false;             // 防重复点击保护：点赞过程中禁用面板按钮

  function bindLike() {
    const btn = findLikeButton();
    if (!btn || btn.dataset.bilivexLikeBound) return;
    btn.dataset.bilivexLikeBound = '1';
    // 不替换原点击行为，仅在面板提供快捷入口
  }

  function findLikeButton(root) {
    const doc = root || document;
    const local = doc.querySelector('.like-btn');
    if (local) return local;
    for (const frame of doc.querySelectorAll('iframe')) {
      try {
        const button = findLikeButton(frame.contentDocument);
        if (button) return button;
      } catch (e) {}
    }
    return null;
  }

  function oneClickLike() {
    // 防重复点击：点赞过程中禁用面板按钮
    if (liking) { showToast('正在点赞中，请稍候…'); return; }
    const initial = findLikeButton();
    if (!initial) { showToast('未找到点赞按钮'); return; }
    if (initial.disabled || initial.getAttribute('aria-disabled') === 'true') {
      showToast('点赞按钮暂时不可用'); return;
    }
    liking = true;

    // 视觉反馈：禁用面板按钮
    const setPanelBtnState = (busy) => {
      const pb = panelDocument.querySelector('#bilivex-panel button[data-bilivex-like="1"]');
      if (!pb) return;
      pb.disabled = busy;
      pb.style.opacity = busy ? '0.6' : '';
      pb.style.cursor = busy ? 'wait' : 'pointer';
    };
    setPanelBtnState(true);

    let triggeredCount = 0;
    let feedbackCount = 0;
    let stopped = false;
    let stopReason = '';
    let timer = null;
    let waitBudget = 30000;

    const finish = () => {
      if (timer !== null) { clearTimeout(timer); timer = null; }
      liking = false;
      setPanelBtnState(false);
      if (stopped) {
        showToast('已触发 ' + triggeredCount + ' 次点赞，其中观察到 ' + feedbackCount + ' 次界面反馈（' + stopReason + '）');
      } else if (triggeredCount >= LIKE_COUNT) {
        showToast('已触发 30 次点赞，其中观察到 ' + feedbackCount + ' 次界面反馈');
      } else {
        showToast('已触发 ' + triggeredCount + ' 次点赞，其中观察到 ' + feedbackCount + ' 次界面反馈');
      }
    };

    const tick = () => {
      timer = null;
      if (document.hidden) {
        timer = setTimeout(tick, 500);
        return;
      }
      const cur = findLikeButton();
      if (!cur) { stopped = true; stopReason = '按钮已消失'; finish(); return; }
      if (cur.disabled || cur.getAttribute('aria-disabled') === 'true') {
        waitBudget -= 150;
        if (waitBudget <= 0) { stopped = true; stopReason = '按钮持续冷却'; finish(); return; }
        timer = setTimeout(tick, 150);
        return;
      }
      const beforeCls = (cur.className || '').toString();
      const beforePressed = cur.getAttribute('aria-pressed');
      try { cur.click(); triggeredCount++; }
      catch (e) { stopped = true; stopReason = '点击异常'; finish(); return; }
      if (triggeredCount >= LIKE_COUNT) { finish(); return; }
      timer = setTimeout(() => {
        const cls = (cur.className || '').toString();
        const pressed = cur.getAttribute('aria-pressed');
        const hasFeedback = cls !== beforeCls || pressed !== beforePressed ||
          /clicked|active|liked/i.test(cls) || pressed === 'true';
        if (hasFeedback) {
          feedbackCount++;
          const isMultipleOf5 = (triggeredCount % 5 === 0);
          timer = setTimeout(tick, (isMultipleOf5 ? 900 : 450) + Math.floor(Math.random() * 150));
        } else {
          // 没有反馈仅影响“可观察反馈数”，不能把它伪装成服务端成功。
          timer = setTimeout(tick, 350 + Math.floor(Math.random() * 250));
        }
      }, 150);
    };
    timer = setTimeout(tick, 0);
  }

  // ---------- 悬浮主菜单 ----------
  function ensurePanelVisible(panel, host) {
    if (!panel || !host) return false;
    if (panel.parentNode !== host) host.appendChild(panel);
    panel.style.position = 'fixed';
    panel.style.zIndex = '2147483001';
    panel.style.display = 'block';
    panel.style.visibility = 'visible';
    panel.style.opacity = '1';
    panel.style.pointerEvents = 'auto';
    if (cfg.panelCollapsed) {
      panel.style.width = COLLAPSED_BTN_SIZE + 'px';
      panel.style.height = COLLAPSED_BTN_SIZE + 'px';
    } else {
      panel.style.width = '220px';
      panel.style.minHeight = '0';
    }
    // 旧版本可能保存过不同窗口尺寸下的位置；保证面板完整留在当前视口中。
    try {
      const r = panel.getBoundingClientRect();
      const vw = panelWindow.innerWidth;
      const vh = panelWindow.innerHeight;
      if (r.width > 0 && r.height > 0 && vw > 0 && vh > 0 &&
          (r.left < 8 || r.top < 8 || r.right > vw - 8 || r.bottom > vh - 8)) {
        const left = Math.max(8, Math.min(r.left, Math.max(8, vw - r.width - 8)));
        const top = Math.max(8, Math.min(r.top, Math.max(8, vh - r.height - 8)));
        panel.style.left = left + 'px';
        panel.style.top = top + 'px';
        panel.style.right = 'auto';
        updateCfg({ panelPos: { left: Math.round(left), top: Math.round(top) } });
      }
    } catch (e) {}
    return panel.isConnected;
  }

  function buildPanel() {
    // 面板在页面顶层，多个同源页面共用同一份；全屏时挂到全屏宿主。
    const existing = panelDocument.getElementById('bilivex-panel');
    // 同源 iframe 只负责自身直播间功能，面板及其事件统一由生命周期更稳定的顶层实例创建。
    if (document !== panelDocument) return !!existing;
    const host = getUiHost();
    if (!host) return false;
    if (existing) {
      // SPA/全屏切换可能留下脱离宿主的旧节点，重新挂载并恢复控制器引用。
      if (!ensurePanelVisible(existing, host)) return false;
      setCurrentPanel(existing);
      bindDragHandlers();
      return true;
    }

    const panel = panelDocument.createElement('div');
    panel.id = 'bilivex-panel';
    if (cfg.panelAnchor === 'left' || cfg.panelAnchor === 'right') panel.dataset.bilivexPanelAnchor = cfg.panelAnchor;
    const collapsed = !!cfg.panelCollapsed;
    panel.style.cssText = [
      'position:fixed',
      (cfg.panelPos && cfg.panelPos.left != null && cfg.panelPos.top != null)
        ? ('left:' + cfg.panelPos.left + 'px;top:' + cfg.panelPos.top + 'px;right:auto')
        : 'right:18px;top:96px;left:auto',
      'z-index:2147483001',
      // 折叠态为 56×56 圆形 logo 悬浮球；展开态维持 220px 矩形面板
      collapsed
        ? ('width:' + COLLAPSED_BTN_SIZE + 'px;height:' + COLLAPSED_BTN_SIZE + 'px;' +
           'background:transparent;border:none;border-radius:50%;' +
           'box-shadow:' + COLLAPSED_BTN_SHADOW + ';overflow:hidden;')
        : ('width:220px;background:rgba(255,255,255,0.96);border:1px solid #e0e6ed;' +
           'border-radius:12px;box-shadow:0 4px 16px ' + currentTheme.primaryShadow + ';color:#222;overflow:visible;'),
      'font:13px/1.5 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif',
      'user-select:none',
      // 原位折叠/展开时同步过渡尺寸与位置；右侧锚点需要 left 与 width 同步变化以保持右缘不跳动。
      'transition:width .25s ease,height .25s ease,left .25s ease,top .25s ease,border-radius .25s ease,box-shadow .25s ease,background .25s ease',
    ].join(';');

    // 标题栏：展开态使用当前主题渐变色；折叠态 head 仅承载 logo（视觉由 img 主导）
    const head = panelDocument.createElement('div');
    head.style.cssText = collapsed
      ? 'width:100%;height:100%;padding:0;border-bottom:none;' +
        'background:transparent;border-radius:50%;cursor:grab;' +
        'display:flex;align-items:center;justify-content:center;position:relative;' +
        'transition:transform .12s ease;'
      : 'display:flex;align-items:center;justify-content:space-between;' +
        'padding:9px 12px;border-bottom:1px solid #f0f2f5;' +
        'background:' + currentTheme.titleGradient + ';' +
        'color:#fff;border-radius:11px 11px 0 0;cursor:move;' +
        'transition:background .25s ease;';
    const title = panelDocument.createElement('span');
    title.textContent = 'BiLivex';
    title.style.cssText = collapsed
      ? 'display:none;'
      : 'font-weight:600;font-size:13px;letter-spacing:.3px;line-height:18px;';
    const tog = panelDocument.createElement('span');
    tog.textContent = collapsed ? '▸' : '▾';
    tog.style.cssText = collapsed
      ? 'position:absolute;right:2px;bottom:2px;background:rgba(0,0,0,0.55);color:#fff;' +
        'font-size:9px;line-height:1;padding:2px 3px 1px;border-radius:8px 4px 8px 4px;' +
        'cursor:pointer;user-select:none;'
      : 'cursor:pointer;font-size:14px;line-height:18px;opacity:.92;';
    head.appendChild(title);
    // logo 图（始终存在于 head 内，展开态隐藏，applyPanelCollapsedStyles 统一切换显隐）
    const logo = panelDocument.createElement('img');
    logo.id = 'bilivex-logo';
    logo.src = LOGO_DATA_URI;
    logo.alt = '';
    logo.draggable = false;
    logo.style.cssText = 'width:100%;height:100%;border-radius:50%;object-fit:cover;' +
      'display:' + (collapsed ? 'block' : 'none') + ';pointer-events:none;';
    head.appendChild(logo);
    head.appendChild(tog);
    panel.appendChild(head);

    const body = panelDocument.createElement('div');
    body.className = 'bilivex-panel-body';
    body.style.cssText = 'padding:10px 12px 12px;' + (collapsed ? 'display:none;' : '');
    panel.appendChild(body);

    // ---- 通用构造器 ----

    // 分组小标题 + 分隔线：用于把功能区按「弹幕增强/点赞」分组
    const section = (sectionTitle) => {
      const wrap = panelDocument.createElement('div');
      wrap.style.cssText = 'margin-top:8px;';
      wrap.className = 'bilivex-section';
      if (sectionTitle) {
        const h = panelDocument.createElement('div');
        h.textContent = sectionTitle;
        h.className = 'bilivex-section-title';
        h.style.cssText = 'font-size:11px;font-weight:600;color:#9099a3;letter-spacing:.6px;' +
          'line-height:18px;margin-bottom:4px;text-transform:uppercase;';
        wrap.appendChild(h);
        const hr = panelDocument.createElement('div');
        hr.style.cssText = 'height:1px;background:#f0f2f5;margin-bottom:4px;';
        wrap.appendChild(hr);
      }
      body.appendChild(wrap);
      return wrap;
    };

    // 单行容器：min-height 保证不同高度控件视觉对齐
    const row = (children, opts) => {
      opts = opts || {};
      const r = panelDocument.createElement('div');
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
      const s = panelDocument.createElement('span');
      s.textContent = text;
      s.className = 'bilivex-label';
      s.style.cssText = 'color:#3a3f45;font-size:12px;line-height:18px;flex:1;min-width:0;' +
        (opts.bold ? 'font-weight:500;' : '') +
        (opts.muted ? 'color:#9099a3;' : '');
      return s;
    };

    // 开关（使用当前主题主色）
    const sw = (checked, onChange) => {
      const wrap = panelDocument.createElement('label');
      wrap.className = 'bilivex-switch';
      wrap.style.cssText = 'position:relative;display:inline-block;width:32px;height:18px;cursor:pointer;flex-shrink:0;';
      const inp = panelDocument.createElement('input');
      inp.type = 'checkbox'; inp.checked = checked;
      inp.style.cssText = 'opacity:0;width:0;height:0;margin:0;';
      const slider = panelDocument.createElement('span');
      slider.className = 'bilivex-switch-slider';
      slider.style.cssText = 'position:absolute;inset:0;' +
        'background:' + (checked ? currentTheme.primary : '#cfd5db') +
        ';border-radius:18px;transition:.2s;';
      const knob = panelDocument.createElement('span');
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
      const i = panelDocument.createElement('input');
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
      const b = panelDocument.createElement('button');
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

    // 主题选择按钮组
    const themeRow = (parent) => {
      const wrap = panelDocument.createElement('div');
      wrap.className = 'bilivex-theme-row';
      wrap.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:8px;' +
        'margin-bottom:8px;min-height:30px;';
      wrap.appendChild(lbl('主题'));
      const group = panelDocument.createElement('div');
      group.style.cssText = 'display:flex;gap:6px;flex-shrink:0;';
      ['blue', 'pink'].forEach((t) => {
        const b = panelDocument.createElement('button');
        b.type = 'button';
        b.dataset.bilivexTheme = t;
        b.textContent = THEMES[t].name;
        b.style.cssText = 'padding:4px 12px;border-radius:6px;cursor:pointer;font-size:12px;' +
          'line-height:18px;border:1px solid #e0e6ed;background:#fff;color:#666;' +
          'transition:all .15s;';
        b.addEventListener('click', () => {
          if (cfg.theme === t) return;
          updateCfg({ theme: t });
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
    row([lbl('小尾巴'), sw(cfg.tailEnabled, v => { updateCfg({ tailEnabled: v }); showToast(v ? '已开启小尾巴' : '已关闭小尾巴'); })]);
    // 小尾巴文本：单列布局（label + input 垂直堆叠）
    const tailWrap = panelDocument.createElement('div');
    tailWrap.style.cssText = 'margin-bottom:8px;box-sizing:border-box;width:100%;padding-right:0;';
    tailWrap.appendChild(lbl('尾巴内容', { muted: true }));
    const tailInput = txt(cfg.tailText, '如：喵', v => { updateCfg({ tailText: v }); });
    tailInput.style.cssText += 'box-sizing:border-box;max-width:100%;';
    tailWrap.appendChild(tailInput);
    currentSection.appendChild(tailWrap);
    // +1（聊天区）
    row([lbl('+1（聊天区）'), sw(cfg.plusOneEnabled, v => { updateCfg({ plusOneEnabled: v }); toggleDmBarVisibility(); })]);
    // +1（漂浮弹幕）
    row([lbl('+1（弹幕）'), sw(cfg.floatDmPlus, v => { updateCfg({ floatDmPlus: v }); toggleFloatingDmEnabled(); showToast(v ? '已开启弹幕 +1' : '已关闭弹幕 +1'); })]);
    // 复制按钮
    row([lbl('复制按钮'), sw(cfg.copyEnabled, v => { updateCfg({ copyEnabled: v }); toggleDmBarVisibility(); })]);

    const favoriteMenuBtn = btn('收藏', currentTheme.primary, openFavoritesPanel);
    favoriteMenuBtn.style.cssText += 'width:100%;box-sizing:border-box;margin-top:2px;';
    row([favoriteMenuBtn], { mb: 2 });

    // 分组 2：点赞
    currentSection = section('点赞');
    // 30连击按钮（使用主题 accent 互补色，与标题色形成对比）
    const likeBtn = btn('30连击 ♥', currentTheme.accentGradient, oneClickLike);
    likeBtn.dataset.bilivexLike = '1';
    // label + button 单行布局。
    const likeRow = panelDocument.createElement('div');
    likeRow.className = 'bilivex-row bilivex-row-like';
    likeRow.style.cssText = 'display:flex;align-items:center;gap:8px;min-height:30px;' +
      'margin-bottom:4px;';
    likeRow.appendChild(lbl('一键点赞'));
    likeRow.appendChild(likeBtn);
    currentSection.appendChild(likeRow);
    // 小字提示
    const likeHint = panelDocument.createElement('div');
    likeHint.textContent = '点一次 = 连续点赞 30 次，可点亮粉丝团灯牌';
    likeHint.className = 'bilivex-hint';
    likeHint.style.cssText = 'color:#9099a3;font-size:11px;line-height:1.5;margin:0 0 4px;padding-left:2px;word-break:break-all;overflow-wrap:anywhere;';
    currentSection.appendChild(likeHint);


    setCurrentPanel(panel);
    head.addEventListener('pointerdown', (e) => {
      // 仅响应左键；指针 capture 后鼠标跨越 iframe 也不会丢事件
      if (e.button !== 0 && e.pointerType !== 'touch') return;
      pressState.down = true;
      pressState.x = e.clientX;
      pressState.y = e.clientY;
      pressState.moved = false;
      pressState.longPressed = false;
      pressState.pointerId = e.pointerId;
      pressState.panelRef = panel;
      try { head.setPointerCapture(e.pointerId); } catch (err) {}
      clearTimeout(pressState.longTimer);
      pressState.longTimer = setTimeout(() => {
        if (pressState.down && !pressState.moved && pressState.panelRef) {
          pressState.longPressed = true;
          dragState.dragging = true;
          const panelRect = pressState.panelRef.getBoundingClientRect();
          dragState.ox = pressState.x - panelRect.left;
          dragState.oy = pressState.y - panelRect.top;
          startPanelDrag(pressState.panelRef);
        }
      }, 220);
      e.preventDefault();
    });
    bindDragHandlers();

    // 使用当前 UI 宿主，保证播放器全屏时悬浮球仍处于全屏层级内。
    if (!ensurePanelVisible(panel, host)) return false;

    if (collapsed) attachCollapsedHover(head, panel);

    // 主题应用：刷新主题按钮高亮与面板阴影
    applyTheme();

    avoidChatCollision(panel);
    return true;
  }

  // 折叠态悬浮球的 hover 加深效果（仅阴影加深，不再有粉色变换）
  function attachCollapsedHover(head, panel) {
    if (!head || head.dataset.bilivexCollapsedHover) return;
    head.dataset.bilivexCollapsedHover = '1';
    head.addEventListener('mouseenter', () => {
      if (!cfg.panelCollapsed) return;   // 仅折叠态生效
      panel.style.boxShadow = COLLAPSED_BTN_SHADOW_HOVER;
    });
    head.addEventListener('mouseleave', () => {
      if (!cfg.panelCollapsed) return;
      panel.style.boxShadow = COLLAPSED_BTN_SHADOW;
    });
  }

  // 主菜单展开、收起和收藏夹变宽时保持同一侧贴边，避免尺寸变化时左右跳动。
  const PANEL_VIEWPORT_GAP = 8;

  function getPanelAnchor(panel, rect) {
    const stored = panel && panel.dataset ? panel.dataset.bilivexPanelAnchor : '';
    if (stored === 'left' || stored === 'right') return stored;
    if (cfg.panelAnchor === 'left' || cfg.panelAnchor === 'right') {
      if (panel && panel.dataset) panel.dataset.bilivexPanelAnchor = cfg.panelAnchor;
      return cfg.panelAnchor;
    }
    const r = rect || panel.getBoundingClientRect();
    const anchor = r.left + r.width / 2 >= panelWindow.innerWidth / 2 ? 'right' : 'left';
    if (panel && panel.dataset) panel.dataset.bilivexPanelAnchor = anchor;
    updateCfg({ panelAnchor: anchor });
    return anchor;
  }

  function placePanelAtAnchor(panel, previousRect, anchor) {
    const rect = panel.getBoundingClientRect();
    const vw = panelWindow.innerWidth;
    const vh = panelWindow.innerHeight;
    const maxLeft = Math.max(PANEL_VIEWPORT_GAP, vw - rect.width - PANEL_VIEWPORT_GAP);
    const maxTop = Math.max(PANEL_VIEWPORT_GAP, vh - rect.height - PANEL_VIEWPORT_GAP);
    const wantedLeft = anchor === 'right' ? previousRect.right - rect.width : previousRect.left;
    const left = Math.max(PANEL_VIEWPORT_GAP, Math.min(wantedLeft, maxLeft));
    const top = Math.max(PANEL_VIEWPORT_GAP, Math.min(previousRect.top, maxTop));
    panel.style.left = left + 'px';
    panel.style.top = top + 'px';
    panel.style.right = 'auto';
    panel.dataset.bilivexPanelAnchor = anchor;
    updateCfg({ panelAnchor: anchor, panelPos: { left: Math.round(left), top: Math.round(top) } });
    return { left, top, width: rect.width, height: rect.height };
  }

  function isFavoritesPanelOpen(panel) {
    const view = panel && panel.querySelector('.bilivex-favorites-view');
    return !!(view && view.style.display !== 'none');
  }

  // 原位切换面板的折叠/展开视觉；展开时根据小球位置智能选边，并最终吸附到视口边缘
  let collapseAnimSeq = 0;   // 动画序号，防止快速连续点击时旧回调覆盖新状态
  function setPanelCollapsed(collapsed) {
    const panel = panelDocument.getElementById('bilivex-panel');
    if (!panel) return;
    const head = panel.firstElementChild;
    const body = head ? head.nextElementSibling : null;
    const title = head ? head.firstElementChild : null;
    const tog = head ? head.lastElementChild : null;
    const seq = ++collapseAnimSeq;

    if (collapsed) {
      const preRect = panel.getBoundingClientRect();
      const anchor = getPanelAnchor(panel, preRect);
      const pinRight = anchor === 'right';
      const rightOffset = Math.max(0, panelWindow.innerWidth - preRect.right);
      // 右锚点不用同时插值 left 与 width，而是临时固定 right 再收窄宽度。
      // 这样浏览器始终以同一个右边缘排版，镜像左侧“固定起点、收缩尺寸”的动画。
      if (pinRight) {
        const savedTransition = panel.style.transition;
        panel.style.transition = 'none';
        panel.style.left = 'auto';
        panel.style.right = rightOffset + 'px';
        void panel.offsetWidth;
        panel.style.transition = savedTransition;
      } else {
        panel.style.left = preRect.left + 'px';
        panel.style.right = 'auto';
      }
      panel.style.top = preRect.top + 'px';
      if (body) body.style.display = 'none';
      const fromH = panel.offsetHeight;
      panel.style.height = fromH + 'px';
      requestAnimationFrame(() => {
        if (seq !== collapseAnimSeq) return;
        applyPanelCollapsedStyles(panel, head, title, tog, true);
        panel.style.height = COLLAPSED_BTN_SIZE + 'px';
        attachCollapsedHover(head, panel);
        avoidChatCollision(panel);
        setTimeout(() => {
          if (seq !== collapseAnimSeq || !panel.isConnected) return;
          const collapsedRect = panel.getBoundingClientRect();
          // 动画结束后保存最终位置，视觉位置不变。
          if (pinRight) {
            const savedTransition = panel.style.transition;
            panel.style.transition = 'none';
            panel.style.left = collapsedRect.left + 'px';
            panel.style.right = 'auto';
            void panel.offsetWidth;
            panel.style.transition = savedTransition;
          }
          updateCfg({ panelPos: { left: Math.round(collapsedRect.left), top: Math.round(collapsedRect.top) } });
        }, 300);
      });
      return;
    }

    if (body) body.style.display = '';
    // 展开与收藏夹变宽均使用同一锚点；右锚点同样先固定 right，再只过渡宽高。
    const preRect = panel.getBoundingClientRect();
    const savedTransition = panel.style.transition;
    const targetWidth = isFavoritesPanelOpen(panel) ? '340px' : '220px';
    const anchor = getPanelAnchor(panel, preRect);
    const pinRight = anchor === 'right';
    const rightOffset = Math.max(0, panelWindow.innerWidth - preRect.right);
    panel.style.transition = 'none';
    if (pinRight) {
      panel.style.left = 'auto';
      panel.style.right = rightOffset + 'px';
    } else {
      panel.style.left = preRect.left + 'px';
      panel.style.right = 'auto';
    }
    panel.style.top = preRect.top + 'px';
    applyPanelCollapsedStyles(panel, head, title, tog, false);
    panel.style.width = targetWidth;
    panel.style.height = 'auto';
    const targetRect = panel.getBoundingClientRect();
    const maxLeft = Math.max(PANEL_VIEWPORT_GAP, panelWindow.innerWidth - targetRect.width - PANEL_VIEWPORT_GAP);
    const maxTop = Math.max(PANEL_VIEWPORT_GAP, panelWindow.innerHeight - targetRect.height - PANEL_VIEWPORT_GAP);
    const nx = Math.max(PANEL_VIEWPORT_GAP, Math.min(anchor === 'right' ? preRect.right - targetRect.width : preRect.left, maxLeft));
    const ny = Math.max(PANEL_VIEWPORT_GAP, Math.min(preRect.top, maxTop));
    applyPanelCollapsedStyles(panel, head, title, tog, true);
    panel.style.width = COLLAPSED_BTN_SIZE + 'px';
    panel.style.height = COLLAPSED_BTN_SIZE + 'px';
    panel.style.transition = savedTransition;
    requestAnimationFrame(() => {
      if (seq !== collapseAnimSeq) return;
      applyPanelCollapsedStyles(panel, head, title, tog, false);
      if (pinRight) {
        panel.style.left = 'auto';
        panel.style.right = rightOffset + 'px';
      } else {
        panel.style.left = nx + 'px';
        panel.style.right = 'auto';
      }
      panel.style.top = ny + 'px';
      panel.style.width = targetWidth;
      panel.style.height = targetRect.height + 'px';
      panel.dataset.bilivexPanelAnchor = anchor;
      updateCfg({ panelAnchor: anchor, panelPos: { left: Math.round(nx), top: Math.round(ny) } });
      setTimeout(() => {
        if (seq !== collapseAnimSeq || !panel.isConnected) return;
        panel.style.height = 'auto';
        if (pinRight) {
          const expandedRect = panel.getBoundingClientRect();
          const stableTransition = panel.style.transition;
          panel.style.transition = 'none';
          panel.style.left = expandedRect.left + 'px';
          panel.style.right = 'auto';
          void panel.offsetWidth;
          panel.style.transition = stableTransition;
        }
      }, 300);
      avoidChatCollision(panel);
    });
  }

  // 将面板/头部/标题/箭头切换到折叠或展开视觉（不处理 height，由调用方控制动画）。
  function applyPanelCollapsedStyles(panel, head, title, tog, collapsed) {
    if (!panel) return;
    if (collapsed) {
      panel.style.width = COLLAPSED_BTN_SIZE + 'px';
      panel.style.background = 'transparent';
      panel.style.border = 'none';
      panel.style.borderRadius = '50%';
      panel.style.boxShadow = COLLAPSED_BTN_SHADOW;
      panel.style.color = '#fff';
      panel.style.overflow = 'hidden';
    } else {
      panel.style.width = '220px';
      panel.style.background = 'rgba(255,255,255,0.96)';
      panel.style.border = '1px solid #e0e6ed';
      panel.style.borderRadius = '12px';
      panel.style.boxShadow = '0 4px 16px ' + currentTheme.primaryShadow;
      panel.style.color = '#222';
      panel.style.overflow = 'visible';
    }
    if (head) {
      // 折叠态时 head 透明背景由 logo 自带；展开态 head 即标题渐变条
      const collapsedHeadCss = collapsed
        ? 'display:flex;align-items:center;justify-content:center;' +
          'width:100%;height:100%;padding:0;border-bottom:none;' +
          'background:transparent;border-radius:50%;cursor:grab;' +
          'user-select:none;-webkit-user-select:none;' +
          'position:relative;transition:transform .12s ease;'
        : 'display:flex;align-items:center;justify-content:space-between;' +
          'padding:9px 12px;border-bottom:1px solid #f0f2f5;' +
          'background:' + currentTheme.titleGradient + ';' +
          'color:#fff;border-radius:11px 11px 0 0;cursor:move;' +
          'user-select:none;-webkit-user-select:none;' +
          'transition:background .25s ease;';
      head.style.cssText = collapsedHeadCss;
    }
    // logo img 显隐（仅在折叠态可见）
    const logo = panel.querySelector('#bilivex-logo');
    if (logo) logo.style.display = collapsed ? '' : 'none';
    if (title) {
      title.style.cssText = collapsed
        ? 'display:none;'
        : 'font-weight:600;font-size:13px;letter-spacing:.3px;line-height:18px;';
    }
    if (tog) {
      tog.textContent = collapsed ? '▸' : '▾';
      tog.style.cssText = collapsed
        ? 'position:absolute;right:2px;bottom:2px;background:rgba(0,0,0,0.55);color:#fff;' +
          'font-size:9px;line-height:1;padding:2px 3px 1px;border-radius:8px 4px 8px 4px;' +
          'cursor:pointer;user-select:none;'
        : 'cursor:pointer;font-size:14px;line-height:18px;opacity:.92;';
    }
  }

  function avoidChatCollision(panel) {
    try {
      // 活动页聊天区在直播画面中，位置随画面布局变化，不做本地避让判断。
      if (panelDocument !== document) return;
      // 用户已拖拽/吸附定位后不强制避让（尊重用户意图，避免展开时菜单被推到另一侧）
      if (cfg.panelPos && cfg.panelPos.left != null) return;
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
  // 页面顶层的面板拖拽状态全局共享，保证同一页面上只有一个控制器在工作。
  const panelController = panelWindow._bilivexPanelController || (panelWindow._bilivexPanelController = {
    currentPanel: null,
    dragState: { dragging: false, ox: 0, oy: 0, moved: false, transitionSuspended: false, savedTransition: '' },
    pressState: { down: false, x: 0, y: 0, moved: false, longPressed: false, longTimer: null, panelRef: null, pointerId: -1 },
    dragBound: false,
    dragOwner: null,
    dragCleanup: null,
  });
  if (!Object.prototype.hasOwnProperty.call(panelController, 'dragOwner')) panelController.dragOwner = null;
  if (!Object.prototype.hasOwnProperty.call(panelController, 'dragCleanup')) panelController.dragCleanup = null;
  const dragState = panelController.dragState;
  const pressState = panelController.pressState;
  // 吸附阈值（px）：面板中心距左/右视口边缘小于该值即吸附到侧边
  const SNAP_THRESHOLD = 120;
  const DRAG_START_DISTANCE = 3;
  function setCurrentPanel(panel) {
    panelController.currentPanel = panel;
  }

  // 拖动时临时关闭主菜单的位置过渡，让面板实时跟随鼠标，松手后再恢复平滑动画。
  function startPanelDrag(panel) {
    if (!panel) return;
    if (!dragState.transitionSuspended) {
      dragState.savedTransition = panel.style.transition;
      dragState.transitionSuspended = true;
    }
    panel.style.transition = 'none';
    panel.style.willChange = 'left, top';
    panel.style.right = 'auto';
    panel.style.cursor = 'grabbing';
  }

  function finishPanelDrag(panel) {
    if (!panel) return;
    panel.style.willChange = '';
    if (dragState.transitionSuspended) {
      panel.style.transition = dragState.savedTransition || '';
      dragState.transitionSuspended = false;
      dragState.savedTransition = '';
    }
  }

  function movePanelWithPointer(panel, clientX, clientY) {
    if (!panel) return;
    panel.style.left = (clientX - dragState.ox) + 'px';
    panel.style.top = (clientY - dragState.oy) + 'px';
    panel.style.right = 'auto';
  }

  function bindDragHandlers() {
    if (panelController.dragBound) {
      // 顶层实例拥有更稳定的生命周期；若面板曾由临时 iframe 初始化，顶层接管监听器。
      if (document !== panelDocument || panelController.dragOwner === window) return;
      try { if (typeof panelController.dragCleanup === 'function') panelController.dragCleanup(); } catch (e) {}
    }
    panelController.dragBound = true;
    panelController.dragOwner = window;
    // 使用指针事件配合捕获，鼠标越过 iframe 边界也不会丢失拖动与悬停。
    const onPointerMove = (e) => {
      // 拖动时直接写入坐标，位置逐帧跟随指针，不做插值。
      if (dragState.dragging && panelController.currentPanel) {
        dragState.moved = true;
        movePanelWithPointer(panelController.currentPanel, e.clientX, e.clientY);
        return;
      }
      // 轻微移动即可进入拖动，避免原 6px 阈值和 220ms 长按共同造成“拖不动、慢半拍”的手感。
      if (pressState.down && !pressState.moved && pressState.panelRef) {
        const dx = e.clientX - pressState.x;
        const dy = e.clientY - pressState.y;
        if (Math.hypot(dx, dy) > DRAG_START_DISTANCE) {
          pressState.moved = true;
          dragState.dragging = true;
          dragState.moved = true;
          clearTimeout(pressState.longTimer);
          const panelRect = pressState.panelRef.getBoundingClientRect();
          dragState.ox = pressState.x - panelRect.left;
          dragState.oy = pressState.y - panelRect.top;
          startPanelDrag(pressState.panelRef);
          movePanelWithPointer(pressState.panelRef, e.clientX, e.clientY);
        }
      }
    };
    panelDocument.addEventListener('pointermove', onPointerMove, { passive: true });
    const finishDrag = (e) => {
      if (!pressState.down && !dragState.dragging) return;
      const panel = pressState.panelRef || panelController.currentPanel;
      clearTimeout(pressState.longTimer);
      pressState.down = false;
      const wasDrag = dragState.moved || pressState.longPressed;
      if (!wasDrag && panel) {
        // 点击（未移动、未长按）→ 切换主菜单（点击整个按钮区域即可弹出）
        updateCfg({ panelCollapsed: !cfg.panelCollapsed });
        setPanelCollapsed(cfg.panelCollapsed);
      } else if (wasDrag && panel) {
        // 先恢复平滑动画，再执行一次边缘吸附。
        finishPanelDrag(panel);
        snapPanelToEdge(panel);
      }
      if (panel) {
        finishPanelDrag(panel);
        panel.style.cursor = '';
      }
      dragState.dragging = false;
      dragState.moved = false;
      pressState.moved = false;
      pressState.longPressed = false;
      pressState.panelRef = null;
    };
    panelDocument.addEventListener('pointerup', finishDrag);
    panelDocument.addEventListener('pointercancel', finishDrag);
    panelController.dragCleanup = () => {
      panelDocument.removeEventListener('pointermove', onPointerMove, { passive: true });
      panelDocument.removeEventListener('pointerup', finishDrag);
      panelDocument.removeEventListener('pointercancel', finishDrag);
      panelController.dragBound = false;
      panelController.dragOwner = null;
      panelController.dragCleanup = null;
      clearTimeout(pressState.longTimer);
      pressState.down = false;
      dragState.dragging = false;
    };
  }

  function snapPanelToEdge(panel) {
    try {
      const r = panel.getBoundingClientRect();
    const vw = panelWindow.innerWidth;
    const vh = panelWindow.innerHeight;
      let nx = r.left, ny = r.top;
      // 先确保完全在视口内（Bug5：菜单不要溢出；展开后即使靠右也不超右边）
      if (nx + r.width > vw - 4) nx = Math.max(8, vw - r.width - 8);   // 右侧溢出
      if (nx < 8) nx = 8;                                              // 左侧溢出
      if (ny + r.height > vh - 4) ny = Math.max(8, vh - r.height - 8); // 底部溢出
      if (ny < 8) ny = 8;                                              // 顶部溢出
      // 再按中心判定侧边吸附
      const centerX = nx + r.width / 2;
      let snapLeft = null;
      if (centerX < SNAP_THRESHOLD) snapLeft = true;        // 靠近左缘 → 吸附左
      else if (centerX > vw - SNAP_THRESHOLD) snapLeft = false; // 靠近右缘 → 吸附右
      if (snapLeft !== null) {
        nx = snapLeft ? 8 : Math.max(8, vw - r.width - 8);
      }
      const savedTransition = panel.style.transition;
      panel.style.transition = savedTransition
        ? savedTransition + ', left 0.3s ease, top 0.3s ease'
        : 'left 0.3s ease, top 0.3s ease';
      panel.style.left = nx + 'px';
      panel.style.top = ny + 'px';
      panel.style.right = 'auto';
      panel.dataset.bilivexPanelAnchor = snapLeft === null
        ? (centerX >= vw / 2 ? 'right' : 'left')
        : (snapLeft ? 'left' : 'right');
      setTimeout(() => {
        if (panel.isConnected) panel.style.transition = savedTransition;
      }, 320);
      // 保存吸附后的最终位置。
      updateCfg({ panelAnchor: panel.dataset.bilivexPanelAnchor, panelPos: { left: Math.round(nx), top: Math.round(ny) } });
    } catch (err) {}
  }

  // ---------- 漂浮弹幕 +1 反馈动画样式 ----------
  let bilivexAnimInjected = false;
  function injectFloatingDmAnim() {
    if (bilivexAnimInjected) return;
    if (!uiDocument.head) return;
    // 移除旧的（如有），确保颜色变量更新
    const old = uiDocument.getElementById('bilivex-float-dm-anim');
    if (old) old.remove();
    const style = uiDocument.createElement('style');
    style.id = 'bilivex-float-dm-anim';
    style.textContent = '@keyframes bilivex-float-plus{' +
      '0%{opacity:0;transform:translate(-50%,-50%) scale(0.5);}' +
      '18%{opacity:1;transform:translate(-50%,-90%) scale(1.25);}' +
      '70%{opacity:0.95;transform:translate(-50%,-160%) scale(1);}' +
      '100%{opacity:0;transform:translate(-50%,-220%) scale(0.9);}' +
      '}';
    uiDocument.head.appendChild(style);
    bilivexAnimInjected = true;
  }

  // ---------- Toast ----------
  let toastTimer = null;
  function showToast(text) {
    const host = getUiHost();
    const toastDocument = host && host.ownerDocument ? host.ownerDocument : panelDocument;
    let t = toastDocument.getElementById('bilivex-toast');
    if (!t) {
      t = toastDocument.createElement('div');
      t.id = 'bilivex-toast';
      t.style.cssText = 'position:fixed;left:50%;top:30%;transform:translateX(-50%);' +
        'background:rgba(0,0,0,0.78);color:#fff;padding:8px 16px;border-radius:6px;' +
        'font-size:13px;z-index:100000;pointer-events:none;opacity:0;transition:opacity .15s;';
      host.appendChild(t);
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

  function favoriteButton(text, kind, onClick) {
    const b = panelDocument.createElement('button');
    b.type = 'button';
    b.textContent = text;
    b.dataset.bilivexFavoriteButton = kind || 'secondary';
    b.style.cssText = 'border:1px solid ' + (kind === 'primary' ? currentTheme.primary : '#dbe2ea') + ';' +
      'background:' + (kind === 'primary' ? currentTheme.primary : '#fff') + ';' +
      'color:' + (kind === 'primary' ? '#fff' : '#4d5966') + ';border-radius:6px;padding:5px 10px;' +
      'font-size:12px;line-height:18px;cursor:pointer;white-space:nowrap;transition:opacity .15s,transform .1s;';
    b.addEventListener('mousedown', () => { b.style.transform = 'scale(.96)'; });
    b.addEventListener('mouseup', () => { b.style.transform = ''; });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
    b.addEventListener('click', onClick);
    return b;
  }

  function resizePanelForFavorites(expanded) {
    const panel = panelDocument.getElementById('bilivex-panel');
    if (!panel || cfg.panelCollapsed) return;
    const beforeRect = panel.getBoundingClientRect();
    const anchor = getPanelAnchor(panel, beforeRect);
    const savedTransition = panel.style.transition;
    // 先关闭尺寸过渡取得目标的真实边界，再按既定边锚钳制，避免右侧展开越界或收起反向跳位。
    panel.style.transition = 'none';
    panel.style.width = expanded ? '340px' : '220px';
    panel.style.height = 'auto';
    placePanelAtAnchor(panel, beforeRect, anchor);
    panel.style.transition = savedTransition;
  }

  function closeFavoritesPanel() {
    const panel = panelDocument.getElementById('bilivex-panel');
    if (!panel) return;
    const body = panel.querySelector('.bilivex-panel-body');
    const view = body && body.querySelector('.bilivex-favorites-view');
    if (!body || !view) return;
    Array.from(body.children).forEach((child) => { if (child !== view) child.style.display = ''; });
    view.style.display = 'none';
    resizePanelForFavorites(false);
  }

  function saveFavoritesExport() {
    const favorites = getFavorites();
    if (!favorites.length) { showToast('暂无可导出的收藏'); return; }
    const content = JSON.stringify({ format: 'bilivex-favorites', schemaVersion: 1, exportedAt: new Date().toISOString(), favorites }, null, 2);
    const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = panelDocument.createElement('a');
    const date = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    a.href = url;
    a.download = 'BiLivex-弹幕收藏夹-' + date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate()) + '-' + pad(date.getHours()) + pad(date.getMinutes()) + '.json';
    a.style.display = 'none';
    panelDocument.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
    showToast('已导出收藏夹');
  }

  function importFavoritesFile(file, done) {
    if (!file) return;
    if (file.size > 1024 * 1024) { showToast('导入文件不能超过 1MB'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result || ''));
        if (!data || data.format !== 'bilivex-favorites' || data.schemaVersion !== 1 || !Array.isArray(data.favorites)) {
          throw new Error('invalid');
        }
        const before = getFavorites();
        const combined = normalizeFavorites(before.concat(data.favorites));
        const added = Math.max(0, combined.length - before.length);
        const supplied = normalizeFavorites(data.favorites).length;
        replaceFavorites(combined);
        if (typeof done === 'function') done();
        showToast('导入完成：新增 ' + added + ' 条，跳过 ' + Math.max(0, supplied - added) + ' 条');
      } catch (e) {
        showToast('导入失败：请选择有效的收藏文件');
      }
    };
    reader.onerror = () => showToast('导入文件读取失败');
    reader.readAsText(file, 'utf-8');
  }

  function renderFavoritesView(mode, query) {
    const panel = panelDocument.getElementById('bilivex-panel');
    const body = panel && panel.querySelector('.bilivex-panel-body');
    const view = body && body.querySelector('.bilivex-favorites-view');
    if (!view) return;
    const currentQuery = query == null ? (view.dataset.bilivexQuery || '') : query;
    view.dataset.bilivexQuery = currentQuery;
    view.textContent = '';
    const head = panelDocument.createElement('div');
    head.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;';
    const title = panelDocument.createElement('strong');
    title.textContent = mode === 'edit' ? '编辑收藏' : '弹幕收藏夹';
    title.style.cssText = 'font-size:13px;color:#303740;';
    head.appendChild(title);
    head.appendChild(favoriteButton('返回', 'secondary', () => mode === 'edit' ? renderFavoritesView('browse', currentQuery) : closeFavoritesPanel()));
    view.appendChild(head);

    if (mode === 'edit') {
      const list = panelDocument.createElement('div');
      list.style.cssText = 'display:flex;flex-direction:column;gap:7px;max-height:260px;overflow:auto;padding-right:2px;';
      getFavorites().forEach((item) => {
        const row = panelDocument.createElement('div');
        row.style.cssText = 'display:flex;gap:6px;align-items:flex-start;';
        const input = panelDocument.createElement('textarea');
        input.value = item.text;
        input.dataset.bilivexFavoriteId = item.id;
        input.style.cssText = 'flex:1;min-width:0;min-height:36px;resize:vertical;box-sizing:border-box;padding:5px 7px;border:1px solid #e0e6ed;border-radius:6px;font:12px/18px -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;color:#222;';
        row.appendChild(input);
        row.appendChild(favoriteButton('删除', 'danger', () => { row.remove(); }));
        list.appendChild(row);
      });
      const addInput = panelDocument.createElement('textarea');
      addInput.placeholder = '新增收藏弹幕（空白内容不会保存）';
      addInput.dataset.bilivexFavoriteNew = '1';
      addInput.style.cssText = 'width:100%;min-height:52px;box-sizing:border-box;margin-top:8px;padding:5px 7px;border:1px dashed #cbd5df;border-radius:6px;resize:vertical;font:12px/18px -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;color:#222;';
      view.appendChild(list);
      view.appendChild(addInput);
      const actions = panelDocument.createElement('div');
      actions.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:9px;';
      actions.appendChild(favoriteButton('取消', 'secondary', () => renderFavoritesView('browse', currentQuery)));
      actions.appendChild(favoriteButton('保存', 'primary', () => {
        const raw = Array.from(list.querySelectorAll('textarea')).map((input) => ({ id: input.dataset.bilivexFavoriteId, text: input.value }));
        raw.push({ text: addInput.value });
        const saved = replaceFavorites(raw);
        renderFavoritesView('browse', currentQuery);
        showToast('已保存 ' + saved.length + ' 条收藏');
      }));
      view.appendChild(actions);
      return;
    }

    const search = panelDocument.createElement('input');
    search.type = 'search';
    search.value = currentQuery;
    search.placeholder = '搜索收藏弹幕';
    search.style.cssText = 'width:100%;box-sizing:border-box;padding:6px 8px;border:1px solid #e0e6ed;border-radius:6px;font-size:12px;line-height:18px;color:#222;outline:none;';
    search.addEventListener('focus', () => { search.style.borderColor = currentTheme.primary; });
    search.addEventListener('blur', () => { search.style.borderColor = '#e0e6ed'; });
    search.addEventListener('input', () => renderFavoritesView('browse', search.value));
    view.appendChild(search);
    const list = panelDocument.createElement('div');
    list.style.cssText = 'display:flex;flex-direction:column;gap:6px;max-height:270px;overflow:auto;margin-top:8px;padding-right:2px;';
    const needle = currentQuery.trim().toLocaleLowerCase();
    const favorites = getFavorites().filter((item) => !needle || item.text.toLocaleLowerCase().includes(needle));
    if (!favorites.length) {
      const empty = panelDocument.createElement('div');
      empty.textContent = getFavorites().length ? '未找到匹配的收藏弹幕' : '暂无收藏，可在弹幕旁点击“收藏”添加';
      empty.style.cssText = 'padding:16px 4px;color:#9099a3;font-size:12px;text-align:center;line-height:1.6;';
      list.appendChild(empty);
    }
    favorites.forEach((item) => {
      const row = panelDocument.createElement('div');
      row.style.cssText = 'display:flex;align-items:stretch;border:1px solid #edf0f3;border-radius:7px;background:#fff;overflow:hidden;';
      const text = panelDocument.createElement('button');
      text.type = 'button'; text.textContent = item.text; text.title = item.text;
      text.style.cssText = 'flex:1;min-width:0;border:none;background:transparent;color:#3a3f45;text-align:left;padding:6px 8px;font:12px/18px -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
      text.addEventListener('click', () => { fillAndSend(item.text, { autoSend: false, finalText: item.text }).then((result) => showToast(result.message || '已填入输入框')); });
      const send = favoriteButton('+1', 'primary', (e) => { e.stopPropagation(); runPlusButtonAction(send, () => sendPlusOne(item.text)); });
      send.style.cssText += 'border-radius:0;border-top:none;border-bottom:none;border-right:none;border-left:1px solid rgba(255,255,255,.55);min-width:48px;';
      row.appendChild(text); row.appendChild(send); list.appendChild(row);
    });
    view.appendChild(list);
    const actions = panelDocument.createElement('div');
    actions.style.cssText = 'display:flex;gap:7px;margin-top:9px;';
    actions.appendChild(favoriteButton('修改', 'secondary', () => renderFavoritesView('edit', currentQuery)));
    actions.appendChild(favoriteButton('导出', 'secondary', saveFavoritesExport));
    const importer = panelDocument.createElement('input');
    importer.type = 'file'; importer.accept = 'application/json,.json'; importer.style.display = 'none';
    importer.addEventListener('change', () => importFavoritesFile(importer.files && importer.files[0], () => renderFavoritesView('browse', currentQuery)));
    actions.appendChild(favoriteButton('导入', 'secondary', () => importer.click()));
    view.appendChild(actions); view.appendChild(importer);
    try { search.focus(); } catch (e) {}
  }

  function openFavoritesPanel() {
    const panel = panelDocument.getElementById('bilivex-panel');
    const body = panel && panel.querySelector('.bilivex-panel-body');
    if (!body) return;
    let view = body.querySelector('.bilivex-favorites-view');
    if (!view) {
      view = panelDocument.createElement('div');
      view.className = 'bilivex-favorites-view';
      view.style.cssText = 'display:none;';
      body.appendChild(view);
    }
    Array.from(body.children).forEach((child) => { if (child !== view) child.style.display = 'none'; });
    view.style.display = '';
    renderFavoritesView('browse', view.dataset.bilivexQuery || '');
    resizePanelForFavorites(true);
  }

  // ---------- 自动检查更新 ----------
  // 定期拉取远端脚本头部的 @version 与本地版本比对；发现新版本时在悬浮球旁
  // 弹出小窗提示，提供「忽略」与「更新」两个选项；「更新」在新标签页打开
  // 油猴更新页（Greasy Fork 安装直链）。
  const UPDATE_CHECK_URL = 'https://cdn.jsdelivr.net/gh/eeeachan27/BiLivex@main/bilive-enhance.user.js';
  const UPDATE_INSTALL_URL = 'https://update.greasyfork.org/scripts/590601/BiLivex%20-%20%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E7%9B%B4%E6%92%AD%E5%A2%9E%E5%BC%BA.user.js';
  const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;   // 刷新页面最多每小时检测一次；新版本被发现的延迟最坏为 1 小时
  const UPDATE_STATE_KEY = 'bilivex_update_state';
  let updateCheckInFlight = false;
  let lastUpdateRoomKey = '';
  let updateTimerStarted = false;

  function getUpdateRoomKey() {
    return findRoomId(panelDocument, panelWindow) ||
      roomIdFromUrl(panelWindow.location.href) ||
      panelWindow.location.href.split('#')[0];
  }

  function getScriptVersion() {
    try {
      if (typeof GM_info !== 'undefined' && GM_info && GM_info.script && GM_info.script.version) {
        return String(GM_info.script.version);
      }
    } catch (e) {}
    return '2.0.3';
  }

  function compareVersions(a, b) {
    const pa = String(a || '').split('.');
    const pb = String(b || '').split('.');
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const na = parseInt(pa[i], 10) || 0;
      const nb = parseInt(pb[i], 10) || 0;
      if (na !== nb) return na - nb;
    }
    return 0;
  }

  function readUpdateState() {
    try {
      const raw = GM_getValue(UPDATE_STATE_KEY);
      const obj = raw ? JSON.parse(raw) : {};
      return obj && typeof obj === 'object' ? obj : {};
    } catch (e) {
      return {};
    }
  }

  function writeUpdateState(state) {
    try { GM_setValue(UPDATE_STATE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function fetchRemoteVersion(done) {
    const parse = (text) => {
      const m = /@version\s+([\w.\-]+)/.exec(String(text || '').split('==/UserScript==')[0]);
      done(m ? m[1] : null);
    };
    if (typeof GM_xmlhttpRequest === 'function') {
      try {
        GM_xmlhttpRequest({
          method: 'GET',
          url: UPDATE_CHECK_URL + '?t=' + Date.now(),
          timeout: 10000,
          onload: (res) => parse(res && res.responseText),
          onerror: () => done(null),
          ontimeout: () => done(null)
        });
        return;
      } catch (e) {}
    }
    fetch(UPDATE_CHECK_URL, { cache: 'no-store' })
      .then((res) => res.text())
      .then(parse)
      .catch(() => done(null));
  }

  function showUpdateNotice(remoteVersion) {
    if (!panelDocument.body) return;
    if (panelDocument.getElementById('bilivex-update-notice')) return;
    const doc = panelDocument;
    const localVersion = getScriptVersion();
    const box = doc.createElement('div');
    box.id = 'bilivex-update-notice';
    box.style.cssText = 'position:fixed;left:0;top:0;z-index:2147483100;width:240px;box-sizing:border-box;' +
      'background:rgba(255,255,255,.98);border:1px solid #e0e6ed;border-radius:12px;' +
      'box-shadow:0 8px 24px rgba(0,0,0,.2);padding:12px 14px 13px;color:#222;' +
      'font:13px/1.5 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;' +
      'user-select:none;opacity:0;transform:translateY(6px);' +
      'transition:opacity .25s ease,transform .25s ease;';
    const head = doc.createElement('div');
    head.style.cssText = 'display:flex;align-items:center;gap:6px;margin-bottom:6px;';
    const badge = doc.createElement('span');
    badge.textContent = 'NEW';
    badge.style.cssText = 'background:' + currentTheme.accentGradient + ';color:#fff;font-size:10px;' +
      'font-weight:700;line-height:1;padding:3px 6px;border-radius:8px 4px 8px 4px;letter-spacing:.5px;';
    const title = doc.createElement('strong');
    title.textContent = '发现新版本';
    title.style.cssText = 'font-size:13px;color:#303740;';
    head.appendChild(badge);
    head.appendChild(title);
    box.appendChild(head);
    const desc = doc.createElement('div');
    desc.textContent = 'BiLivex 已发布 v' + remoteVersion + '（当前 v' + localVersion + '），建议更新获得最新功能与修复。';
    desc.style.cssText = 'font-size:12px;color:#6b7683;margin-bottom:10px;';
    box.appendChild(desc);
    const actions = doc.createElement('div');
    actions.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;';
    const mkNoticeBtn = (label, primary) => {
      const b = doc.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.style.cssText = 'border:none;border-radius:8px;padding:5px 12px;font-size:12px;line-height:18px;' +
        'font-weight:600;cursor:pointer;transition:transform .1s ease,filter .1s ease;';
      if (primary) {
        b.style.background = currentTheme.feedbackGradient;
        b.style.color = '#fff';
        b.style.boxShadow = '0 1px 4px ' + currentTheme.feedbackShadow;
      } else {
        b.style.background = '#eef2f6';
        b.style.color = '#4d5966';
      }
      b.addEventListener('mousedown', () => { b.style.transform = 'scale(.96)'; });
      b.addEventListener('mouseup', () => { b.style.transform = ''; });
      b.addEventListener('mouseleave', () => { b.style.transform = ''; });
      return b;
    };
    const dismissNotice = () => {
      box.style.opacity = '0';
      box.style.transform = 'translateY(6px)';
      setTimeout(() => { if (box.isConnected) box.remove(); }, 260);
    };
    const ignoreBtn = mkNoticeBtn('忽略', false);
    ignoreBtn.addEventListener('click', () => {
      const state = readUpdateState();
      state.ignoredVersion = remoteVersion;
      writeUpdateState(state);
      dismissNotice();
    });
    const updateBtn = mkNoticeBtn('更新', true);
    updateBtn.addEventListener('click', () => {
      dismissNotice();
      try {
        panelWindow.open(UPDATE_INSTALL_URL, '_blank', 'noopener');
      } catch (e) {
        window.open(UPDATE_INSTALL_URL, '_blank', 'noopener');
      }
    });
    actions.appendChild(ignoreBtn);
    actions.appendChild(updateBtn);
    box.appendChild(actions);
    doc.body.appendChild(box);
    // 定位到悬浮球旁：优先放在球左侧，空间不足时放右侧，并钳制在视口内。
    try {
      const panel = doc.getElementById('bilivex-panel');
      const vw = panelWindow.innerWidth || doc.documentElement.clientWidth;
      const vh = panelWindow.innerHeight || doc.documentElement.clientHeight;
      const pr = panel ? panel.getBoundingClientRect()
        : { left: vw - 74, right: vw - 18, top: 96, bottom: 152 };
      const br = box.getBoundingClientRect();
      let left = pr.left - br.width - 12;
      if (left < 8) left = Math.min(Math.max(8, vw - br.width - 8), pr.right + 12);
      const top = Math.max(8, Math.min(pr.top, Math.max(8, vh - br.height - 8)));
      box.style.left = left + 'px';
      box.style.top = top + 'px';
    } catch (e) {
      box.style.left = 'auto';
      box.style.right = '84px';
      box.style.top = '96px';
    }
    requestAnimationFrame(() => {
      box.style.opacity = '1';
      box.style.transform = 'translateY(0)';
    });
  }

  function checkForUpdate(force) {
    try {
      // 只在顶层页面实例检查，避免 iframe 实例重复请求与重复弹窗。
      if (document !== panelDocument) return;
      // 真机调试入口：URL 带 #bilivex-update-test 时强制弹出更新提示，不走网络。
      if (/bilivex-update-test/.test(panelWindow.location.hash)) {
        setTimeout(() => showUpdateNotice('9.9.9'), 800);
        return;
      }
      if (updateCheckInFlight) return;
      const roomKey = getUpdateRoomKey();
      const state = readUpdateState();
      const now = Date.now();
      const sameRoom = roomKey && roomKey === lastUpdateRoomKey;
      if (!force && sameRoom && state.lastCheckAt && now - state.lastCheckAt < UPDATE_CHECK_INTERVAL_MS) return;
      updateCheckInFlight = true;
      fetchRemoteVersion((remoteVersion) => {
        updateCheckInFlight = false;
        // 网络失败：仅记录 lastFailAt 用于诊断，不锁住后续检查（避免请求瞬时失败导致 6 小时不再提醒）。
        if (!remoteVersion) {
          const failState = readUpdateState();
          failState.lastFailAt = Date.now();
          writeUpdateState(failState);
          return;
        }
        // 仅在请求成功后才写 lastCheckAt，保证"成功才冷却、失败可立即重试"。
        const latest = readUpdateState();
        latest.lastCheckAt = Date.now();
        writeUpdateState(latest);
        lastUpdateRoomKey = roomKey;
        if (latest.ignoredVersion === remoteVersion) return;
        if (compareVersions(remoteVersion, getScriptVersion()) > 0) showUpdateNotice(remoteVersion);
      });
    } catch (e) {
      updateCheckInFlight = false;
    }
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
          if (FloatingDmEngine.hovered) FloatingDmEngine.leave(FloatingDmEngine.hovered);
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
      // 兜底清理：已滚出视口且非当前悬停的冻结弹幕/按钮（防止残留累积）
      try {
        const residentLayer = sharedRuntime.residentLayer;
        const layer = residentLayer && residentLayer.isConnected
          ? residentLayer
          : panelDocument.getElementById('bilivex-dm-resident') ||
            (uiDocument !== panelDocument ? uiDocument.getElementById('bilivex-dm-resident') : null);
        const host = getUiHost();
        if (layer) {
          const hov = FloatingDmEngine.hovered;
          const hovGroup = hov && (hov._bilivexFloatActionGroup || hov._bilivexFloatBtn);
          const layerView = layer.ownerDocument.defaultView || window;
          $$('[data-bilivex-resident="1"], .bilivex-float-plus-btn', layer).forEach((el) => {
            if (el === hov || el === hovGroup || el === (hov && hov._bilivexFloatBtn)) return;
            const pairedClone = el._bilivexFloatClone;
            if (pairedClone === hov) return;
            const r = el.getBoundingClientRect();
            if (r.width === 0 && r.height === 0) {
              try {
                const pairedButton = el._bilivexFloatBtn;
                if (pairedButton && pairedButton.isConnected) pairedButton.remove();
                el.remove();
              } catch (e3) {}
              return;
            }
            if (r.right < -50 || r.left > layerView.innerWidth + 50 || r.bottom < -50 || r.top > layerView.innerHeight + 50) {
              try {
                const pairedButton = el._bilivexFloatBtn;
                if (pairedButton && pairedButton.isConnected) pairedButton.remove();
                el.remove();
              } catch (e3) {}
            }
          });
        }
        // 兜底清理：移除已失去关联的悬停操作栏，避免残留累积
        [host, residentLayer && residentLayer.ownerDocument, uiDocument, panelDocument]
          .filter((doc, index, docs) => doc && docs.indexOf(doc) === index)
          .forEach((actionDocument) => {
            $$('.bilivex-float-actions', actionDocument).forEach((group) => {
              if (group._bilivexFloatClone && group._bilivexFloatClone.isConnected) return;
              try { if (group.isConnected) group.remove(); } catch (e3) {}
            });
          });
      } catch (e2) {}
    } catch (e) {}
  }

  function guardianObserveOnce() {
    if (guardianStarted) return;
    guardianStarted = true;
    guardianTimer = setInterval(guardianCheck, 20000);
    guardianCheck();
  }

  let initTimer = null;
  let spaWatching = false;
  const lifecycleCleanups = [];
  function listenLifecycle(target, type, handler) {
    target.addEventListener(type, handler);
    lifecycleCleanups.push(() => target.removeEventListener(type, handler));
  }
  function tryInit() {
    // 面板属于顶层页面，不应依赖聊天区是否已完成异步渲染。
    const panelReady = buildPanel() !== false;
    initRoom();
    return panelReady;
  }

  function start() {
    try {
      listenLifecycle(document, 'fullscreenchange', syncFullscreenUi);
      listenLifecycle(document, 'webkitfullscreenchange', syncFullscreenUi);
      if (panelDocument !== document) {
        listenLifecycle(panelDocument, 'fullscreenchange', syncFullscreenUi);
        listenLifecycle(panelDocument, 'webkitfullscreenchange', syncFullscreenUi);
      }
    } catch (e) {}
    window.addEventListener('pagehide', () => {
      if (window._bilivexSpaMO) window._bilivexSpaMO.disconnect();
      if (boundChatList && boundChatList._bilivexHoverMO) boundChatList._bilivexHoverMO.disconnect();
      if (boundFloatContainer && boundFloatContainer._bilivexFloatMO) boundFloatContainer._bilivexFloatMO.disconnect();
      if (boundTailCtl && boundTailCtl._bilivexTailMO) boundTailCtl._bilivexTailMO.disconnect();
      if (guardianTimer) clearInterval(guardianTimer);
      if (initTimer) clearTimeout(initTimer);
      FloatingDmEngine.stop();
      lifecycleCleanups.splice(0).forEach((cleanup) => {
        try { cleanup(); } catch (e) {}
      });
      if (panelController.dragOwner === window && typeof panelController.dragCleanup === 'function') {
        try { panelController.dragCleanup(); } catch (e) {}
      }
      if (typeof GM_removeValueChangeListener === 'function') {
        valueChangeListenerIds.splice(0).forEach((listenerId) => {
          try { GM_removeValueChangeListener(listenerId); } catch (e) {}
        });
      }
      removeEmptyResidentLayer();
    }, { once: true });
    // 注入 +1 反馈动画样式
    injectFloatingDmAnim();
    tryInit();
    watchSpa();
    guardianObserveOnce();
    // 延迟检查更新，避开页面首屏渲染高峰；打开直播间时不受每小时冷却限制。
    if (document === panelDocument) {
      setTimeout(() => checkForUpdate(true), 2500);
      if (!updateTimerStarted) {
        updateTimerStarted = true;
        setInterval(() => checkForUpdate(false), UPDATE_CHECK_INTERVAL_MS);
      }
    }
  }

  function watchSpa() {
    // 兼容 iframe 直播间：各页面实例独立运行，共享的悬浮面板不被 iframe 实例误删。
    if (spaWatching || !document.documentElement) return;
    spaWatching = true;
    let lastUrl = location.href;
    let queued = false;
    const lifecycleSelector = '#bilivex-panel, iframe, .chat-history-list, .chat-control-panel,' +
      '.bili-danmaku-x-dm-rotate, .danmaku-item-container, .web-player-danmaku, #live-player';
    const touchesLifecycle = (records) => records.some((record) => {
      const nodes = Array.from(record.addedNodes).concat(Array.from(record.removedNodes));
      return nodes.some((node) => node.nodeType === 1 &&
        (node.matches(lifecycleSelector) || node.querySelector(lifecycleSelector)));
    });
    const mo = new MutationObserver((records) => {
      const urlChanged = location.href !== lastUrl;
      if (!urlChanged && !touchesLifecycle(records)) return;
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        const currentUrlChanged = location.href !== lastUrl;
        const panelMissing = !panelDocument.getElementById('bilivex-panel');
        if (currentUrlChanged || panelMissing) {
          lastUrl = location.href;
          clearTimeout(initTimer);
          initTimer = setTimeout(tryInit, currentUrlChanged ? 800 : 300);
          if (currentUrlChanged && document === panelDocument) checkForUpdate(true);
        } else {
          initRoom();
        }
        guardianCheck();
      });
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
    window._bilivexSpaMO = mo;
  }

  // ---------- 启动 ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
