// ==UserScript==
// @name         BiLivex - 哔哩哔哩直播增强
// @namespace    https://github.com/eeeachan27/BiLivex
// @version      3.1.0
// @license      MIT
// @description  B站直播间增强工具：六分类悬浮窗、带弹幕画中画、仅音频模式、直播间净化、特别关注开播提醒、独轮车、弹幕 +1、收藏夹、小尾巴、一键点赞、同步时间及可选观看设置。开源地址：https://github.com/eeeachan27/BiLivex
// @author       eeeachan27
// @icon         data:image/jpeg;base64,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
// @match        https://live.bilibili.com/*
// @match        https://bilibili.com/*
// @match        https://*.bilibili.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_listValues
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      cdn.jsdelivr.net
// @connect      api.live.bilibili.com
// @connect      api.bilibili.com
// @run-at       document-start
// ==/UserScript==
/* global GM_listValues, GM_deleteValue */

/*
 * BiLivex - 哔哩哔哩直播增强
 *
 * 核心功能：
 *   1) 弹幕操作：悬停直播画面中的弹幕，快捷发送同内容弹幕或收藏。
 *   2) 收藏夹：收藏、搜索、编辑、导入和导出常用弹幕。
 *   3) 评论区：点击评论，在原生评论菜单中使用评论+1 / 复制 / 收藏。
 *   4) 小尾巴：发送弹幕时自动在末尾追加自定义文字。
 *   5) 一键点赞：连续点赞 30 次点亮粉丝团灯牌。
 *   6) 同步时间：在播放器原生底栏一键跳到当前可播放的最新画面。
 *   7) 更多设置：可选自动最高画质、自动网页模式和 B 站原生 P2P 禁用路径。
 *   8) 带弹幕画中画：独立小窗弹幕、悬停操作栏与原生 +1 协调。
 *   9) 仅音频：独立音轨、停止视频加载、暂停卸载及原生视频恢复。
 */

(function () {
  'use strict';

  // 开播提醒仅在 B 站 HTTPS 顶层页运行；直播 iframe 保留现有房间功能。
  let liveAlertEmbeddedRoom = false;
  if (location.protocol === 'about:' && location.href === 'about:blank') {
    try { liveAlertEmbeddedRoom = window.top !== window && window.top.location.protocol === 'https:' && window.top.location.hostname === 'live.bilibili.com'; }
    catch (e) { /* 仅继承同源直播页 */ }
  }
  const liveAlertAllowed = liveAlertEmbeddedRoom || liveAlertPageKind(location.protocol, location.hostname, true) !== 'none';
  if (!liveAlertAllowed) return;
  const liveAlertRoomPage = liveAlertEmbeddedRoom || location.hostname === 'live.bilibili.com';
  let liveAlertTopPage = false;
  try { liveAlertTopPage = window.top === window; } catch (e) { /* 跨源页不参加协调 */ }
  if (!liveAlertTopPage && !liveAlertRoomPage) return;
  if (!liveAlertTopPage && liveAlertRoomPage && !liveAlertEmbeddedRoom) {
    try { if (window.top.location.origin !== location.origin) return; } catch (e) { return; }
  }
  const liveAlertController = liveAlertTopPage ? createLiveAlertController(liveAlertRoomPage) : null;
  if (!liveAlertRoomPage) return;

  function liveAlertUid(value) {
    const number = Number(value);
    return Number.isSafeInteger(number) && number > 0 ? number : 0;
  }

  function liveAlertImage(value) {
    const url = typeof value === 'string' ? value.trim().replace(/^http:\/\//i, 'https://') : '';
    return url.length <= 600 && /^https:\/\//i.test(url) ? url : '';
  }

  function liveAlertMedalLevels(data, accountUid) {
    if (!data || !Array.isArray(data.list) || (data.uid && liveAlertUid(data.uid) !== liveAlertUid(accountUid))) throw new Error('灯牌资料结构异常');
    const levels = {};
    for (const item of data.list) {
      const id = liveAlertUid(item && item.medal_info && item.medal_info.target_id);
      const level = Number(item && item.medal_info && item.medal_info.level);
      if (id && Number.isSafeInteger(level) && level > 0) levels[id] = Math.max(levels[id] || 0, level);
    }
    const count = data.count == null ? NaN : Number(data.count);
    return { levels, complete: Number.isSafeInteger(count) && count === data.list.length };
  }

  function sortLiveAlertStreamers(entries, currentRoomId, medalLevels) {
    const room = liveAlertUid(currentRoomId);
    const collator = new Intl.Collator('zh-CN', { numeric: true, sensitivity: 'base' });
    const levelOf = item => {
      const level = Number(medalLevels && medalLevels[item.uid]);
      return Number.isSafeInteger(level) && level > 0 ? level : 0;
    };
    return [...entries].sort((left, right) => {
      const leftCurrent = room && liveAlertUid(left.roomId) === room;
      const rightCurrent = room && liveAlertUid(right.roomId) === room;
      if (leftCurrent !== rightCurrent) return leftCurrent ? -1 : 1;
      const levelDiff = levelOf(right) - levelOf(left);
      if (levelDiff) return levelDiff;
      return collator.compare(String(left.uname || ''), String(right.uname || '')) || left.uid - right.uid;
    });
  }

  function liveAlertPageKind(protocol, hostname, topPage) {
    if (protocol !== 'https:' || !(hostname === 'bilibili.com' || hostname.endsWith('.bilibili.com'))) return 'none';
    if (!topPage) return hostname === 'live.bilibili.com' ? 'room-frame' : 'none';
    return hostname === 'live.bilibili.com' ? 'room' : 'monitor';
  }

  function liveAlertStateStep(previous, current, uid, now, selectionEpoch, enabledSince, accountEpoch) {
    if (!current || ![0, 1, 2].includes(current.liveStatus)) return { state: previous, eventId: '' };
    const old = previous && typeof previous === 'object' ? previous : null;
    const live = current.liveStatus === 1;
    const rawTime = liveAlertUid(current.liveTime);
    const time = rawTime && rawTime <= Math.floor(now / 1000) + 300 ? rawTime : 0;
    const fresh = !old || old.selectionEpoch !== selectionEpoch || old.baselineEnabledSince !== enabledSince || old.baselineAccountEpoch !== accountEpoch;
    const next = {
      liveStatus: live ? 1 : 0,
      liveTime: time,
      lastValidLiveTime: old ? old.lastValidLiveTime || 0 : 0,
      transitionSeq: old ? old.transitionSeq || 0 : 0,
      sessionKey: old ? old.sessionKey || '' : '',
      sessionOrigin: old ? old.sessionOrigin || 'none' : 'none',
      selectionEpoch, baselineEnabledSince: enabledSince, baselineAccountEpoch: accountEpoch,
      observedAt: now,
      observationStatus: 'valid',
      missingCount: 0,
      unknownSince: 0,
    };
    if (!live) return { state: { ...next, sessionKey: '', sessionOrigin: 'none' }, eventId: '' };
    if (fresh || old.liveStatus !== 1) {
      if (!fresh && time && old.lastValidLiveTime && time <= old.lastValidLiveTime) {
        return { state: { ...old, observationStatus: 'unknown', unknownSince: old.unknownSince || now }, eventId: '' };
      }
      next.transitionSeq += 1;
      next.sessionKey = time ? `${uid}:time:${time}` : `${uid}:seq:${selectionEpoch}:${next.transitionSeq}`;
      next.sessionOrigin = time ? 'time' : 'sequence';
      next.lastValidLiveTime = time;
      return { state: next, eventId: fresh ? '' : next.sessionKey };
    }
    if (time && old.lastValidLiveTime && time > old.lastValidLiveTime) {
      next.sessionKey = `${uid}:time:${time}`;
      next.sessionOrigin = 'time';
      next.lastValidLiveTime = time;
      return { state: next, eventId: next.sessionKey };
    }
    if (time && old.lastValidLiveTime && time < old.lastValidLiveTime) return { state: { ...old, observationStatus: 'unknown', unknownSince: old.unknownSince || now }, eventId: '' };
    if (time && !old.lastValidLiveTime) next.lastValidLiveTime = time;
    return { state: next, eventId: '' };
  }

  function createLiveAlertController(roomPage) {
    const ACCOUNTS_KEY = 'bilivex_live_alert_accounts_v1';
    const LEASE_KEY = 'bilivex_live_alert_lease_v1';
    const WAKE_KEY = 'bilivex_live_alert_wakeup_v1';
    const DISPLAY_KEY = 'bilivex_live_alert_display_v1';
    const EVENT_PREFIX = 'bilivex_live_alert_event_v1:';
    const ACK_PREFIX = 'bilivex_live_alert_ack_v1:';
    const ownerId = 'alert-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    const listeners = [];
    const timers = new Set();
    const activeRequests = new Set();
    let stopped = false, owner = false, runningCycleId = '';
    let pageEpoch = 0;
    let cycleTimer = null, leaseTimer = null, card = null, countdownTimer = null;
    let countdownRemaining = 5, countdownPaused = false;
    let activeAccount = '', knownRevision = -1, leaseGeneration = '', syncing = false, knownLoginUid = '';
    let medalCacheUid = 0, medalCacheAt = 0, medalCache = null;

    function read(key, fallback) {
      try {
        const value = GM_getValue(key);
        return value == null ? fallback : JSON.parse(value);
      } catch (e) { return null; }
    }
    function write(key, value) { GM_setValue(key, JSON.stringify(value)); }
    function emptyAccounts() { return { schemaVersion: 1, activeAccountUid: '', activeAccountEpoch: '', revision: 0, accounts: {} }; }
    function config() {
      const value = read(ACCOUNTS_KEY, emptyAccounts());
      return value && value.schemaVersion === 1 && Number.isSafeInteger(value.revision) && value.revision >= 0 &&
        value.accounts && typeof value.accounts === 'object' && !Array.isArray(value.accounts) &&
        (value.activeAccountUid === '' || !!liveAlertUid(value.activeAccountUid)) &&
        typeof value.activeAccountEpoch === 'string' ? value : null;
    }
    function account(cfg) {
      const key = String(cfg && cfg.activeAccountUid || '');
      return cfg && cfg.accounts[key] || null;
    }
    function token() { return ownerId + ':' + Date.now() + ':' + Math.random().toString(36).slice(2); }
    function revisionCurrent(cfg) {
      const now = config();
      return !!(now && cfg && now.revision === cfg.revision && now.activeAccountUid === cfg.activeAccountUid && now.activeAccountEpoch === cfg.activeAccountEpoch);
    }
    function enabled(cfg) {
      const a = account(cfg);
      return !!(cfg && liveAlertUid(cfg.activeAccountUid) && cfg.activeAccountEpoch && a && a.enabled === true &&
        Array.isArray(a.selectedUids) && a.selectedUids.length && a.selectionEpochByUid &&
        a.selectedUids.every(id => liveAlertUid(id) && a.selectionEpochByUid[id] && a.streamers && a.streamers[id]));
    }
    function later(callback, delay) {
      const id = setTimeout(() => { timers.delete(id); if (!stopped) callback(); }, delay);
      timers.add(id);
      return id;
    }
    function clearLater(id) { if (id != null) { clearTimeout(id); timers.delete(id); } }
    function readLease() { return read(LEASE_KEY, null); }
    function ownsLease() {
      const lease = readLease();
      return !!(lease && lease.ownerId === ownerId && lease.generation === leaseGeneration && lease.expiresAt > Date.now());
    }
    function stopPolling() {
      owner = false;
      runningCycleId = '';
      clearLater(cycleTimer); clearLater(leaseTimer);
      cycleTimer = leaseTimer = null;
      for (const request of activeRequests) if (request.kind === 'poll') request.abort();
    }
    function liveUid() {
      if (!roomPage) return '';
      const found = /(?:^|;\s*)DedeUserID=(\d+)/.exec(document.cookie || '');
      return found && liveAlertUid(found[1]) ? found[1] : '';
    }
    async function saveConfig(mutator, expectedRevision = null, expectedUid = null, expectedEpoch = null) {
      if (!roomPage || !window.navigator.locks || typeof window.navigator.locks.request !== 'function') throw new Error('浏览器不支持配置安全保存');
      const startedEpoch = pageEpoch;
      return window.navigator.locks.request('bilivex-live-alert-config-v1', async () => {
        if (stopped || pageEpoch !== startedEpoch) throw new Error('页面已离开，已取消保存');
        const latest = config();
        if (!latest) throw new Error('配置损坏，已停止写入');
        const uid = liveUid();
        if (!uid) throw new Error('请先在直播页登录 B 站');
        if (expectedUid !== null && uid !== expectedUid) throw new Error('登录账号已变化，旧草稿不可保存');
        if (expectedRevision !== null && (latest.revision !== expectedRevision || latest.activeAccountUid !== expectedUid || latest.activeAccountEpoch !== expectedEpoch)) throw new Error('配置已在其他页面更新，请重新加载后保存');
        const next = JSON.parse(JSON.stringify(latest));
        if (next.activeAccountUid !== uid) {
          next.activeAccountUid = uid;
          next.activeAccountEpoch = token();
        }
        if (!next.accounts[uid]) next.accounts[uid] = { enabled: false, enabledSince: 0, syncedAt: 0, selectedUids: [], selectionEpochByUid: {}, streamers: {} };
        if (!Array.isArray(next.accounts[uid].selectedUids) || !next.accounts[uid].streamers || typeof next.accounts[uid].streamers !== 'object' || Array.isArray(next.accounts[uid].streamers)) throw new Error('账号配置损坏，已停止写入');
        next.accounts[uid].enabled = next.accounts[uid].enabled === true;
        if (!next.accounts[uid].selectionEpochByUid) next.accounts[uid].selectionEpochByUid = {};
        const oldSelected = new Set(next.accounts[uid].selectedUids || []);
        await mutator(next.accounts[uid], next, uid);
        if (stopped || pageEpoch !== startedEpoch) throw new Error('页面已离开，已取消保存');
        next.accounts[uid].selectedUids = [...new Set(next.accounts[uid].selectedUids.map(liveAlertUid).filter(id => id && next.accounts[uid].streamers[id]))];
        for (const id of next.accounts[uid].selectedUids) if (!oldSelected.has(id) || !next.accounts[uid].selectionEpochByUid[id]) next.accounts[uid].selectionEpochByUid[id] = token();
        for (const id of Object.keys(next.accounts[uid].selectionEpochByUid)) if (!next.accounts[uid].selectedUids.includes(Number(id))) delete next.accounts[uid].selectionEpochByUid[id];
        next.accountConfirmedAt = Date.now();
        next.revision += 1;
        write(ACCOUNTS_KEY, next);
        const saved = config();
        if (!saved || saved.revision !== next.revision) throw new Error('保存校验失败');
        return saved;
      });
    }
    function accountChanged() {
      const cfg = config();
      if (!cfg || !enabled(cfg)) { stopPolling(); closeCard(); return; }
      if (activeAccount !== cfg.activeAccountUid || knownRevision !== cfg.revision) {
        stopPolling(); activeAccount = cfg.activeAccountUid; knownRevision = cfg.revision;
      }
      if (!owner) attemptLease();
      scanEvents();
    }
    function request(url, anonymous, kind = 'sync') {
      return new Promise((resolve, reject) => {
        const record = { kind, abort: () => {} };
        let finished = false, handle = null;
        const finish = (error, value) => {
          if (finished) return;
          finished = true; clearTimeout(timeoutId); activeRequests.delete(record);
          if (error) reject(error); else resolve(value);
        };
        const timeoutId = setTimeout(() => {
          finish(new Error('网络请求超时'));
          if (handle && typeof handle.abort === 'function') handle.abort();
        }, 10500);
        record.abort = () => {
          finish(new Error('请求已取消'));
          if (handle && typeof handle.abort === 'function') handle.abort();
        };
        activeRequests.add(record);
        try {
          handle = GM_xmlhttpRequest({
            method: 'GET', url, timeout: 10000, anonymous: !!anonymous,
            onload: (response) => {
              try {
                if (response.status === 412 || response.status === 429) {
                  const error = new Error('接口请求受限'); error.risk = true; finish(error); return;
                }
                const data = JSON.parse(response.responseText);
                if (response.status !== 200 || data.code !== 0 || (data.data && data.data.v_voucher)) {
                  const error = new Error(data.message || '接口拒绝请求');
                  error.risk = response.status === 429 || data.code === -352 || data.code === -412 || !!(data.data && data.data.v_voucher);
                  finish(error); return;
                }
                finish(null, data.data);
              } catch (e) { finish(e); }
            },
            onerror: () => finish(new Error('网络请求失败')),
            ontimeout: () => finish(new Error('网络请求超时')),
            onabort: () => finish(new Error('请求已取消')),
          });
        } catch (e) { finish(e); }
      });
    }
    async function loadMedalLevels(force = false) {
      const uid = liveUid();
      if (!uid) throw new Error('请先登录 B 站');
      if (!force && medalCacheUid === uid && medalCache && Date.now() - medalCacheAt < 300000) return medalCache;
      const data = await request('https://api.live.bilibili.com/xlive/web-ucenter/user/MedalWall?target_id=' + uid, false);
      const result = liveAlertMedalLevels(data, uid);
      medalCacheUid = uid; medalCacheAt = Date.now(); medalCache = result;
      return result;
    }
    function scheduleCycle(delay) {
      clearLater(cycleTimer);
      cycleTimer = later(() => { cycleTimer = null; void poll(); }, delay);
    }
    function renewLease() {
      if (!owner || !ownsLease()) { stopPolling(); attemptLease(); return; }
      try { write(LEASE_KEY, { ownerId, generation: leaseGeneration, accountUid: activeAccount, expiresAt: Date.now() + 90000 }); }
      catch (e) { stopPolling(); return; }
      leaseTimer = later(renewLease, 30000);
    }
    function attemptLease() {
      if (stopped || owner) return;
      const cfg = config();
      if (!cfg || !enabled(cfg)) return;
      const lease = readLease();
      if (lease && lease.ownerId === ownerId && lease.accountUid === cfg.activeAccountUid && lease.expiresAt > Date.now()) {
        leaseGeneration = lease.generation; owner = true; activeAccount = cfg.activeAccountUid;
        renewLease(); scheduleCycle(0); return;
      }
      if (lease && lease.expiresAt > Date.now()) {
        clearLater(leaseTimer);
        leaseTimer = later(attemptLease, Math.max(1000, lease.expiresAt - Date.now() + 10));
        return;
      }
      clearLater(leaseTimer);
      leaseTimer = later(() => {
        const current = readLease();
        if (current && current.expiresAt > Date.now()) { attemptLease(); return; }
        leaseGeneration = token();
        try { write(LEASE_KEY, { ownerId, generation: leaseGeneration, accountUid: cfg.activeAccountUid, expiresAt: Date.now() + 90000 }); }
        catch (e) { return; }
        if (!ownsLease()) { attemptLease(); return; }
        owner = true; activeAccount = cfg.activeAccountUid;
        renewLease(); scheduleCycle(0);
      }, Math.floor(Math.random() * 750));
    }
    function eventKeys() {
      try { return GM_listValues().filter(key => key.startsWith(EVENT_PREFIX)); }
      catch (e) { return []; }
    }
    function cleanupEvents() {
      try {
        for (const key of GM_listValues().filter(key => key.startsWith(EVENT_PREFIX) || key.startsWith(ACK_PREFIX))) {
          const value = read(key, null);
          if (value && value.expiresAt && value.expiresAt + 86400000 < Date.now()) GM_deleteValue(key);
        }
      } catch (e) { /* 存储异常时不影响现有事件 */ }
    }
    function acknowledged(eventId) {
      try { return GM_listValues().some(key => key.startsWith(ACK_PREFIX + eventId + ':')); }
      catch (e) { return true; }
    }
    function emitEvent(cfg, uid, state, info) {
      const a = account(cfg);
      const id = `${cfg.activeAccountUid}:${uid}:${state.selectionEpoch}:${state.sessionKey}`;
      const key = EVENT_PREFIX + id;
      if (read(key, null)) return true;
      cleanupEvents();
      if (eventKeys().length >= 1000) return false;
      const streamer = a.streamers[uid] || {};
      write(key, {
        eventId: id, accountUid: cfg.activeAccountUid, activeAccountEpoch: cfg.activeAccountEpoch,
        enabledSince: a.enabledSince, selectionEpoch: state.selectionEpoch, uid, sessionKey: state.sessionKey,
        roomId: liveAlertUid(info.room_id || streamer.roomId), uname: String(info.uname || streamer.uname || '').slice(0, 80),
        face: liveAlertImage(info.face || streamer.face), title: String(info.title || '').slice(0, 160),
        createdAt: Date.now(), expiresAt: Date.now() + 1800000,
      });
      if (!read(key, null)) return false;
      write(WAKE_KEY, Date.now());
      return true;
    }
    async function poll() {
      if (!owner || runningCycleId || !ownsLease()) { if (owner) scheduleCycle(60000); return; }
      const cfg = config(), a = account(cfg);
      if (!enabled(cfg) || !a || cfg.activeAccountUid !== activeAccount) { stopPolling(); return; }
      const runtimeKey = 'bilivex_live_alert_runtime_v1:' + activeAccount;
      let runtime = read(runtimeKey, { schemaVersion: 1, accountUid: activeAccount, statesByUid: {}, backoffUntil: 0, consecutiveRiskErrors: 0 });
      if (!runtime || !runtime.statesByUid) { stopPolling(); return; }
      if (runtime.backoffUntil > Date.now()) { scheduleCycle(runtime.backoffUntil - Date.now()); return; }
      const cycleId = token();
      runningCycleId = cycleId;
      let nextDelay = 60000 + Math.floor(Math.random() * 5000);
      try {
        const ids = [...new Set(a.selectedUids.map(liveAlertUid).filter(Boolean))];
        for (let offset = 0; offset < ids.length; offset += 200) {
          if (!owner || stopped || runningCycleId !== cycleId || !ownsLease() || !revisionCurrent(cfg)) break;
          const batch = ids.slice(offset, offset + 200);
          const query = batch.map(uid => 'uids%5B%5D=' + uid).join('&');
          let data;
          try { data = await request('https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids?' + query, true, 'poll'); }
          catch (e) {
            if (!owner || stopped || runningCycleId !== cycleId || !ownsLease() || !revisionCurrent(cfg)) break;
            runtime = read(runtimeKey, runtime);
            if (!runtime || !runtime.statesByUid) break;
            for (const uid of batch) {
              const old = runtime.statesByUid[uid];
              if (old) runtime.statesByUid[uid] = { ...old, observationStatus: 'unknown', unknownSince: old.unknownSince || Date.now(), missingCount: (old.missingCount || 0) + 1 };
            }
            if (e.risk) {
              runtime.consecutiveRiskErrors = (runtime.consecutiveRiskErrors || 0) + 1;
              runtime.backoffUntil = Date.now() + Math.min(1800000, 300000 * (2 ** Math.min(3, runtime.consecutiveRiskErrors - 1)));
              nextDelay = runtime.backoffUntil - Date.now();
            }
            write(runtimeKey, runtime);
            break;
          }
          if (!owner || stopped || runningCycleId !== cycleId || !ownsLease() || !revisionCurrent(cfg)) break;
          runtime = read(runtimeKey, runtime);
          if (!runtime || !runtime.statesByUid) break;
          for (const uid of batch) {
            const info = data && data[uid];
            if (!info || ![0, 1, 2].includes(Number(info.live_status))) {
              const old = runtime.statesByUid[uid];
              if (old) runtime.statesByUid[uid] = { ...old, observationStatus: 'unknown', unknownSince: old.unknownSince || Date.now(), missingCount: (old.missingCount || 0) + 1 };
              continue;
            }
            const prior = runtime.statesByUid[uid];
            const { state, eventId } = liveAlertStateStep(prior, { liveStatus: Number(info.live_status), liveTime: info.live_time }, uid, Date.now(), a.selectionEpochByUid[uid], a.enabledSince, cfg.activeAccountEpoch);
            if (eventId && a.enabled === true) {
              try { if (!emitEvent(cfg, uid, state, info)) continue; } catch (e) { continue; }
            }
            runtime.statesByUid[uid] = state;
          }
          runtime.lastSuccessAt = Date.now();
          runtime.backoffUntil = 0;
          runtime.consecutiveRiskErrors = 0;
          write(runtimeKey, runtime);
          write(WAKE_KEY, Date.now());
        }
      } finally {
        if (runningCycleId === cycleId) {
          runningCycleId = '';
          if (owner && ownsLease()) scheduleCycle(Math.max(1000, nextDelay));
        }
      }
    }

    function closeCard() {
      clearLater(countdownTimer); countdownTimer = null;
      if (card) card.remove();
      card = null;
    }
    function claimDisplay() {
      if (document.visibilityState !== 'visible' || !document.hasFocus()) return false;
      try { write(DISPLAY_KEY, { ownerId, at: Date.now(), roomPage }); }
      catch (e) { return false; }
      const current = read(DISPLAY_KEY, null);
      return !!(current && current.ownerId === ownerId);
    }
    function scanEvents() {
      if (stopped || card || document.visibilityState !== 'visible' || !document.hasFocus()) return;
      const cfg = config(), a = account(cfg);
      if (!enabled(cfg)) return;
      if (!claimDisplay()) return;
      let keys;
      try { keys = GM_listValues(); } catch (e) { return; }
      const acknowledgedIds = new Set(keys.filter(key => key.startsWith(ACK_PREFIX))
        .map(key => read(key, null)).filter(value => value && value.eventId && value.expiresAt > Date.now())
        .map(value => value.eventId));
      const candidate = keys.filter(key => key.startsWith(EVENT_PREFIX)).map(key => read(key, null)).filter(Boolean).filter(event =>
        event.accountUid === cfg.activeAccountUid && event.activeAccountEpoch === cfg.activeAccountEpoch &&
        event.enabledSince === a.enabledSince && a.selectedUids.includes(event.uid) &&
        event.selectionEpoch === a.selectionEpochByUid[event.uid] &&
        event.expiresAt > Date.now() && !acknowledgedIds.has(event.eventId));
      candidate.sort((left, right) => left.createdAt - right.createdAt || String(left.eventId).localeCompare(String(right.eventId)));
      for (const event of candidate.slice(0, 50)) if (showCard(event)) break;
    }
    function showCard(event) {
      if (!document.body) { later(scanEvents, 100); return false; }
      const runtime = read('bilivex_live_alert_runtime_v1:' + event.accountUid, null);
      const state = runtime && runtime.statesByUid && runtime.statesByUid[event.uid];
      if (!state || state.liveStatus !== 1 || state.observationStatus !== 'valid' || state.sessionKey !== event.sessionKey || Date.now() - state.observedAt > 120000) return false;
      if (!claimDisplay() || acknowledged(event.eventId)) return false;
      const host = document.createElement('div');
      host.id = 'bilivex-live-alert-host';
      host.style.cssText = 'position:fixed;right:12px;top:12px;z-index:2147483646;pointer-events:none;';
      if (roomPage) {
        const panel = document.getElementById('bilivex-panel');
        if (panel) {
          const r = panel.getBoundingClientRect();
          const left = r.left >= 332 ? r.left - 332 : Math.min(window.innerWidth - 332, r.right + 12);
          host.style.left = Math.max(12, left) + 'px'; host.style.right = 'auto';
          host.style.top = Math.max(12, Math.min(r.top, window.innerHeight - 170)) + 'px';
        }
      }
      const root = host.attachShadow({ mode: 'open' });
      const style = document.createElement('style');
      style.textContent = ':host{all:initial} .card{box-sizing:border-box;width:min(320px,calc(100vw - 24px));padding:14px;border-radius:12px;background:#fff;color:#222;box-shadow:0 6px 24px #0003;font:13px/1.5 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;pointer-events:auto}.head{display:flex;gap:10px;align-items:center}.avatar{width:42px;height:42px;border-radius:50%;object-fit:cover;background:#00aeec}.name{font-weight:700}.title{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.actions{display:flex;gap:8px;margin-top:12px}button{flex:1;padding:7px;border:0;border-radius:7px;cursor:pointer;background:#e9f7fd;color:#006b94}button.go{background:#00aeec;color:white}button:focus-visible{outline:2px solid #fb7299;outline-offset:2px}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}';
      const box = document.createElement('div'); box.className = 'card'; box.setAttribute('aria-label', '主播开播提醒');
      const head = document.createElement('div'); head.className = 'head';
      const avatar = document.createElement('div'); avatar.style.cssText = 'position:relative;width:42px;height:42px;flex:none;border-radius:50%;background:#00aeec;color:#fff;display:grid;place-items:center;font-weight:700;';
      avatar.textContent = String(event.uname || '播').slice(0, 1);
      const img = document.createElement('img'); img.className = 'avatar'; img.alt = ''; img.style.cssText = 'position:absolute;inset:0;';
      if (event.face) img.src = event.face;
      img.addEventListener('error', () => { img.remove(); }); avatar.appendChild(img);
      const desc = document.createElement('div');
      const name = document.createElement('div'); name.className = 'name'; name.textContent = event.uname + ' 正在直播'; name.setAttribute('aria-live', 'polite');
      const title = document.createElement('div'); title.className = 'title'; title.textContent = event.title; title.title = event.title;
      desc.append(name, title); head.append(avatar, desc);
      const actions = document.createElement('div'); actions.className = 'actions';
      const done = document.createElement('button'); done.type = 'button'; done.setAttribute('aria-label', '我知道了');
      const label = document.createTextNode('我知道了（'); const count = document.createElement('span'); count.setAttribute('aria-hidden', 'true'); count.textContent = '5s';
      done.append(label, count, document.createTextNode('）'));
      const go = document.createElement('button'); go.type = 'button'; go.className = 'go'; go.textContent = '火速前往';
      const room = liveAlertUid(event.roomId); go.disabled = !room;
      const finish = () => { closeCard(); scanEvents(); };
      done.addEventListener('click', finish);
      go.addEventListener('click', () => { if (room) window.open('https://live.bilibili.com/' + room, '_blank', 'noopener'); finish(); });
      box.addEventListener('mouseenter', () => { countdownPaused = true; });
      box.addEventListener('mouseleave', () => { countdownPaused = box.contains(root.activeElement); });
      box.addEventListener('focusin', () => { countdownPaused = true; });
      box.addEventListener('focusout', () => { countdownPaused = box.matches(':hover'); });
      actions.append(done, go); box.append(head, actions); root.append(style, box);
      document.body.appendChild(host); card = host; countdownRemaining = 5; countdownPaused = false;
      try { write(ACK_PREFIX + event.eventId + ':' + ownerId, { eventId: event.eventId, displayedAt: Date.now(), expiresAt: event.expiresAt }); }
      catch (e) { closeCard(); return false; }
      const tick = () => {
        if (!card) return;
        if (!countdownPaused) countdownRemaining -= 1;
        if (countdownRemaining <= 0) { finish(); return; }
        count.textContent = countdownRemaining + 's'; countdownTimer = later(tick, 1000);
      };
      countdownTimer = later(tick, 1000);
      return true;
    }
    function syncFollowing(onProgress) {
      if (!roomPage) return Promise.reject(new Error('请在直播页同步关注'));
      const uid = liveUid();
      const startedEpoch = pageEpoch;
      const syncActive = () => !stopped && pageEpoch === startedEpoch && uid === liveUid();
      if (!uid) return Promise.reject(new Error('请先登录 B 站'));
      if (syncing) return Promise.reject(new Error('关注列表正在同步'));
      if (!window.navigator.locks || typeof window.navigator.locks.request !== 'function') return Promise.reject(new Error('浏览器不支持安全同步'));
      return window.navigator.locks.request('bilivex-live-alert-sync-v1', { ifAvailable: true }, async (lock) => {
        if (!lock) throw new Error('其他直播页正在同步关注列表');
        if (!syncActive()) throw new Error('同步已取消或页面已离开');
        syncing = true;
        try {
        let startCfg = config();
        if (!startCfg) throw new Error('配置损坏，无法同步');
        if (startCfg.activeAccountUid !== uid) startCfg = await saveConfig(() => {});
        const list = new Map();
        let total = 0, primaryComplete = false, primaryError = null;
        const seenPrimary = new Set();
        try {
        for (let page = 1; page <= 100; page += 1) {
          if (!syncActive()) throw new Error('同步已取消或账号已变化');
          const data = await request(`https://api.live.bilibili.com/xlive/web-ucenter/user/following?page=${page}&page_size=29&ignoreRecord=1&hit_ab=true`, false);
          if (!syncActive()) throw new Error('同步已取消或页面已离开');
          if (!data || !Array.isArray(data.list)) throw new Error('关注列表结构异常');
          if (page === 1) total = Number(data.count);
          if (!Number.isSafeInteger(total) || total < 0 || Number(data.count) !== total || data.list.length !== Math.max(0, Math.min(29, total - (page - 1) * 29))) throw new Error('直播关注列表分页不完整');
          for (const item of data.list) {
            const id = liveAlertUid(item.uid), room = liveAlertUid(item.roomid);
            if (!id || seenPrimary.has(id)) throw new Error('直播关注列表出现重复主播');
            seenPrimary.add(id);
            if (id && room) list.set(id, { uid: id, roomId: room, uname: String(item.uname || '').slice(0, 80), face: liveAlertImage(item.face) });
          }
          onProgress(list.size, total);
          if (page * 29 >= total) { primaryComplete = true; break; }
          if (page === 100) throw new Error('关注列表页数超过上限');
          await new Promise(resolve => setTimeout(resolve, 800 + Math.floor(Math.random() * 700)));
        }
        } catch (error) { primaryError = error; list.clear(); }
        if (!syncActive()) throw new Error('同步已取消或页面已离开');
        let relationComplete = false, roomStatusComplete = true;
        const followed = new Map();
        try {
          let relationTotal = 0;
          for (let page = 1; page <= 100; page += 1) {
            if (!syncActive()) throw new Error('同步已取消或账号已变化');
            const data = await request(`https://api.bilibili.com/x/relation/followings?vmid=${uid}&pn=${page}&ps=50`, false);
            if (!syncActive()) throw new Error('同步已取消或页面已离开');
            if (!data || !Array.isArray(data.list)) throw new Error('关注关系列表结构异常');
            if (page === 1) relationTotal = Number(data.total);
            if (!Number.isSafeInteger(relationTotal) || relationTotal < 0 || Number(data.total) !== relationTotal || data.list.length !== Math.max(0, Math.min(50, relationTotal - (page - 1) * 50))) throw new Error('关注关系列表分页不完整');
            for (const item of data.list) {
              const id = liveAlertUid(item.mid);
              if (!id || followed.has(id)) throw new Error('关注关系列表出现重复主播');
              followed.set(id, { uid: id, uname: String(item.uname || '').slice(0, 80), face: liveAlertImage(item.face) });
            }
            onProgress(followed.size, relationTotal);
            if (page * 50 >= relationTotal) { relationComplete = followed.size === relationTotal; break; }
            if (page === 100) throw new Error('关注关系页数超过上限');
            await new Promise(resolve => setTimeout(resolve, 800 + Math.floor(Math.random() * 700)));
          }
          if (relationComplete) {
            const ids = [...followed.keys()];
            for (let offset = 0; offset < ids.length; offset += 200) {
              if (!syncActive()) throw new Error('同步已取消或账号已变化');
              const batch = ids.slice(offset, offset + 200);
              const query = batch.map(id => 'uids%5B%5D=' + id).join('&');
              const data = await request('https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids?' + query, true);
              if (!syncActive()) throw new Error('同步已取消或页面已离开');
              for (const id of batch) {
                const info = data && data[id];
                if (!info) { roomStatusComplete = false; continue; }
                const room = liveAlertUid(info.room_id);
                if (room) {
                  const relation = followed.get(id), fromLive = list.get(id);
                  list.set(id, { uid: id, roomId: room, uname: relation.uname || (fromLive && fromLive.uname) || '', face: relation.face || (fromLive && fromLive.face) || '' });
                }
              }
              onProgress(offset + batch.length, ids.length);
              if (offset + batch.length < ids.length) await new Promise(resolve => setTimeout(resolve, 800 + Math.floor(Math.random() * 700)));
            }
          }
        } catch (e) { relationComplete = false; }
        if (!syncActive()) throw new Error('同步已取消或页面已离开');
        if (!primaryComplete && !relationComplete) throw primaryError || new Error('关注列表无法完整读取');
        if (!syncActive()) throw new Error('同步期间账号已变化或页面已离开');
        await saveConfig((a) => {
          const complete = relationComplete && roomStatusComplete;
          a.streamers = complete ? Object.fromEntries(list) : { ...a.streamers, ...Object.fromEntries(list) };
          if (complete) a.selectedUids = a.selectedUids.filter(id => list.has(id));
          a.syncedAt = Date.now();
          a.syncComplete = complete;
        }, startCfg.revision, startCfg.activeAccountUid, startCfg.activeAccountEpoch);
        return list.size;
        } finally { syncing = false; }
      });
    }
    function begin() {
      if (stopped) return;
      knownLoginUid = liveUid();
      if (roomPage && liveUid()) {
        const cfg = config();
        if (cfg && cfg.activeAccountUid !== liveUid()) void saveConfig(() => {}).then(accountChanged).catch(() => {});
      }
      accountChanged();
      const watch = (key, callback) => {
        try { const id = GM_addValueChangeListener(key, callback); if (id != null) listeners.push(id); } catch (e) { /* 降级为页面恢复重读 */ }
      };
      watch(ACCOUNTS_KEY, accountChanged); watch(LEASE_KEY, () => { if (!owner) attemptLease(); });
      watch(WAKE_KEY, scanEvents);
      window.addEventListener('focus', onFocus);
      window.addEventListener('pointerdown', claimDisplay);
      window.addEventListener('pagehide', onPageHide);
      window.addEventListener('pageshow', onFocus);
      document.addEventListener('visibilitychange', onFocus);
    }
    function onPageHide(event) {
      if (event.persisted) {
        pageEpoch += 1;
        stopPolling(); closeCard();
        for (const request of activeRequests) request.abort();
        timers.forEach(clearTimeout); timers.clear();
        return;
      }
      dispose();
    }
    function onFocus() {
      if (document.visibilityState !== 'visible' || !document.hasFocus()) { closeCard(); return; }
      if (roomPage && knownLoginUid && !liveUid()) {
        void deactivateIfLoggedOut(knownLoginUid); knownLoginUid = '';
        return;
      }
      if (roomPage && liveUid()) {
        knownLoginUid = liveUid();
        const cfg = config();
        if (cfg && cfg.activeAccountUid !== liveUid()) { void saveConfig(() => {}).then(accountChanged).catch(() => {}); return; }
      }
      accountChanged();
    }
    async function deactivateIfLoggedOut(previousUid) {
      if (!window.navigator.locks || typeof window.navigator.locks.request !== 'function') return;
      const startedEpoch = pageEpoch;
      await new Promise(resolve => setTimeout(resolve, 500));
      if (stopped || pageEpoch !== startedEpoch || liveUid()) return;
      try {
        await window.navigator.locks.request('bilivex-live-alert-config-v1', () => {
          const latest = config();
          if (stopped || pageEpoch !== startedEpoch || !latest || liveUid() || latest.activeAccountUid !== previousUid) return;
          const next = JSON.parse(JSON.stringify(latest));
          next.activeAccountUid = ''; next.activeAccountEpoch = token(); next.revision += 1;
          write(ACCOUNTS_KEY, next);
        });
      } catch (e) { /* 无法确认登出时保持原配置，不覆盖账号缓存 */ }
      accountChanged();
    }
    function dispose() {
      stopped = true; pageEpoch += 1; stopPolling(); closeCard();
      for (const request of activeRequests) request.abort();
      timers.forEach(clearTimeout); timers.clear();
      listeners.forEach(id => { try { GM_removeValueChangeListener(id); } catch (e) { /* 页面退出 */ } });
      window.removeEventListener('focus', onFocus); window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('pointerdown', claimDisplay); window.removeEventListener('pageshow', onFocus);
      document.removeEventListener('visibilitychange', onFocus);
    }
    begin();
    return { config, account, liveUid, saveConfig, syncFollowing, loadMedalLevels, scanEvents };
  }

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
  // 内置项目正式标志原图，缩放清晰且不依赖网络资源。
  const LOGO_DATA_URI = 'data:image/jpeg;base64,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iXFDI7nGqlyiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggqVn2n0E7v3jwdNjH6HuPo3tZMLw35FRb11BKmdqz8Ctpc2lnbmF0dXJleBlzZWxmI2p1bWJmPWMycGEuc2lnbmF0dXJlY2FsZ2ZzaGEyNTYAAAM2anVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAnGp1bWIAAAAoanVtZGNib3IAEQAQgAAAqgA4m3EDYzJwYS5oYXNoLmRhdGEAAAAAbGNib3KkamV4Y2x1c2lvbnOBomVzdGFydBRmbGVuZ3RoGRjJY2FsZ2ZzaGEyNTZkaGFzaFggovXxwbNVoGDUcQPlSUvF3ZHoMTFSBBxWZbVdks/imJdjcGFkTgAAAAAAAAAAAAAAAAAAAAAB+Gp1bWIAAAApanVtZGNib3IAEQAQgAAAqgA4m3EDYzJwYS5hY3Rpb25zLnYyAAAAAcdjYm9yoWdhY3Rpb25zgqRmYWN0aW9ubGMycGEuY3JlYXRlZGtkZXNjcmlwdGlvbnggQ3JlYXRlZCBieSBHb29nbGUgR2VuZXJhdGl2ZSBBSS5xZGlnaXRhbFNvdXJjZVR5cGV4Rmh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvdHJhaW5lZEFsZ29yaXRobWljTWVkaWFqcGFyYW1ldGVyc6FraW5ncmVkaWVudHOBomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCBDz0EFJn7uvMHSBBy3UTXMLwBhbHgn7YgnufvOe1g5lqNmYWN0aW9ua2MycGEuZWRpdGVka2Rlc2NyaXB0aW9ueChBcHBsaWVkIGltcGVyY2VwdGlibGUgU3ludGhJRCB3YXRlcm1hcmsucWRpZ2l0YWxTb3VyY2VUeXBleEZodHRwOi8vY3YuaXB0Yy5vcmcvbmV3c2NvZGVzL2RpZ2l0YWxzb3VyY2V0eXBlL3RyYWluZWRBbGdvcml0aG1pY01lZGlhAAAAcWp1bWIAAAAsanVtZGNib3IAEQAQgAAAqgA4m3EDYzJwYS5pbmdyZWRpZW50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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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EQAQgAAAqgA4m3EDYzJwYS5oYXNoLmRhdGEAAAAAbGNib3KkamV4Y2x1c2lvbnOBomVzdGFydBghZmxlbmd0aBk9FmNhbGdmc2hhMjU2ZGhhc2hYIOqy0EUaMtH/FnU1CbZMg+4p7Q3xvzBqH0Khh2MkUzuWY3BhZE0AAAAAAAAAAAAAAAAAAAABhGp1bWIAAAApanVtZGNib3IAEQAQgAAAqgA4m3EDYzJwYS5hY3Rpb25zLnYyAAAAAVNjYm9yoWdhY3Rpb25zg6JmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggx+b52uUDOzIYYfNBhbD+xwo/NDOdeOFIqMAdPeccCBSjZmFjdGlvbmtjMnBhLmVkaXRlZGtkZXNjcmlwdGlvbndBZGRlZCB2aXNpYmxlIHdhdGVybWFya3FkaWdpdGFsU291cmNlVHlwZXg4aHR0cDovL2N2LmlwdGMub3JnL25ld3Njb2Rlcy9kaWdpdGFsc291cmNldHlwZS9jb21wb3NpdGWiZmFjdGlvbm5jMnBhLmNvbnZlcnRlZGtkZXNjcmlwdGlvbnFDb252ZXJ0ZWQgdG8gLnBuZwAABmNqdW1iAAAALGp1bWRjYm9yABEAEIAAAKoAOJtxA2MycGEuaW5ncmVkaWVudC52MwAAAAYvY2JvcqRscmVsYXRpb25zaGlwaHBhcmVudE9mcXZhbGlkYXRpb25SZXN1bHRzoW5hY3RpdmVNYW5pZmVzdKNnZmFpbHVyZYBnc3VjY2Vzc4qiZGNvZGVzdGltZVN0YW1wLnZhbGlkYXRlZGN1cmx4TXNlbGYjanVtYmY9L2MycGEvdXJuOmMycGE6ODBiMThlOGYtOGZlNC03ZDIyLTZjZDItNDYxYzI3NWY0ODg5L2MycGEuc2lnbmF0dXJlomRjb2RlcXRpbWVTdGFtcC50cnVzdGVkY3VybHhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTo4MGIxOGU4Zi04ZmU0LTdkMjItNmNkMi00NjFjMjc1ZjQ4ODkvYzJwYS5zaWduYXR1cmWiZGNvZGV4IXNpZ25pbmdDcmVkZW50aWFsLm9jc3Aubm90UmV2b2tlZGN1cmx4TXNlbGYjanVtYmY9L2MycGEvdXJuOmMycGE6ODBiMThlOGYtOGZlNC03ZDIyLTZjZDItNDYxYzI3NWY0ODg5L2MycGEuc2lnbmF0dXJlomRjb2RleBlzaWduaW5nQ3JlZGVudGlhbC50cnVzdGVkY3VybHhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTo4MGIxOGU4Zi04ZmU0LTdkMjItNmNkMi00NjFjMjc1ZjQ4ODkvYzJwYS5zaWduYXR1cmWiZGNvZGV4HWNsYWltU2lnbmF0dXJlLmluc2lkZVZhbGlkaXR5Y3VybHhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTo4MGIxOGU4Zi04ZmU0LTdkMjItNmNkMi00NjFjMjc1ZjQ4ODkvYzJwYS5zaWduYXR1cmWiZGNvZGV4GGNsYWltU2lnbmF0dXJlLnZhbGlkYXRlZGN1cmx4TXNlbGYjanVtYmY9L2MycGEvdXJuOmMycGE6ODBiMThlOGYtOGZlNC03ZDIyLTZjZDItNDYxYzI3NWY0ODg5L2MycGEuc2lnbmF0dXJlomRjb2RleBlhc3NlcnRpb24uaGFzaGVkVVJJLm1hdGNoY3VybHhhc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTo4MGIxOGU4Zi04ZmU0LTdkMjItNmNkMi00NjFjMjc1ZjQ4ODkvYzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M6JkY29kZXgZYXNzZXJ0aW9uLmhhc2hlZFVSSS5tYXRjaGN1cmx4XnNlbGYjanVtYmY9L2MycGEvdXJuOmMycGE6ODBiMThlOGYtOGZlNC03ZDIyLTZjZDItNDYxYzI3NWY0ODg5L2MycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjKiZGNvZGV4GWFzc2VydGlvbi5oYXNoZWRVUkkubWF0Y2hjdXJseF1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOjgwYjE4ZThmLThmZTQtN2QyMi02Y2QyLTQ2MWMyNzVmNDg4OS9jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGGiZGNvZGV4GGFzc2VydGlvbi5kYXRhSGFzaC5tYXRjaGN1cmx4XXNlbGYjanVtYmY9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ZWYyN3RjbGFpbV9nZW5lcmF0b3JfaW5mb6JkbmFtZXgiR29vZ2xlIEMyUEEgQ29yZSBHZW5lcmF0b3IgTGlicmFyeWd2ZXJzaW9uczk2MDM3NDAxNDo5NjAzNzQwMTRyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgguz9fs9mn26dYwSCsuI4d4E0DB4Y3K9e/EWFWNB8Crv6iY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYICi8tEz1q6teyXmkNR0cmQr2XzovGSn1IholMiZk1bb+omN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIFSfg0Y3px/3+mTpxRHGxUZIImqGAJl6IfBS33A9pORzaXNpZ25hdHVyZXgZc2VsZiNqdW1iZj1jMnBhLnNpZ25hdHVyZWNhbGdmc2hhMjU2AAAKZGp1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAAJxqdW1iAAAAKGp1bWRjYm9yABEAEIAAAKoAOJtxA2MycGEuaGFzaC5kYXRhAAAAAGxjYm9ypGpleGNsdXNpb25zgaJlc3RhcnQZEYpmbGVuZ3RoGVzZY2FsZ2ZzaGEyNTZkaGFzaFggsMx/qmHn01ioL1+PVz1WW2U96B9fWczabgMLhQ5kWg1jcGFkTAAAAAAAAAAAAAAAAAAAAc5qdW1iAAAAKWp1bWRjYm9yABEAEIAAAKoAOJtxA2MycGEuYWN0aW9ucy52MgAAAAGdY2JvcqFnYWN0aW9uc4KjZmFjdGlvbmtjMnBhLm9wZW5lZGtkZXNjcmlwdGlvbnBPcGVuZWQgYnkgR29vZ2xlanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgguz9fs9mn26dYwSCsuI4d4E0DB4Y3K9e/EWFWNB8Crv6jZmFjdGlvbm9jMnBhLnRyYW5zY29kZWRxZGlnaXRhbFNvdXJjZVR5cGV4Rmh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvYWxnb3JpdGhtaWNhbGx5RW5oYW5jZWRqcGFyYW1ldGVyc6FraW5ncmVkaWVudHOBomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCC7P1+z2afbp1jBIKy4jh3gTQMHhjcr178RYVY0HwKu/gAAB8lqdW1iAAAALGp1bWRjYm9yABEAEIAAAKoAOJtxA2MycGEuaW5ncmVkaWVudC52MwAAAAeVY2JvcqVpZGM6Zm9ybWF0aWltYWdlL3BuZ2xyZWxhdGlvbnNoaXBocGFyZW50T2ZxdmFsaWRhdGlvblJlc3VsdHOibmFjdGl2ZU1hbmlmZXN0o2dmYWlsdXJlgGdzdWNjZXNzi6JkY29kZXN0aW1lU3RhbXAudmFsaWRhdGVkY3VybHhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTpkYTZiOGQzZS02ZGU3LTkxY2YtZmVkNy00YzU0ZThkOTcyYjcvYzJwYS5zaWduYXR1cmWiZGNvZGVxdGltZVN0YW1wLnRydXN0ZWRjdXJseE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmRhNmI4ZDNlLTZkZTctOTFjZi1mZWQ3LTRjNTRlOGQ5NzJiNy9jMnBhLnNpZ25hdHVyZaJkY29kZXghc2lnbmluZ0NyZWRlbnRpYWwub2NzcC5ub3RSZXZva2VkY3VybHhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTpkYTZiOGQzZS02ZGU3LTkxY2YtZmVkNy00YzU0ZThkOTcyYjcvYzJwYS5zaWduYXR1cmWiZGNvZGV4GXNpZ25pbmdDcmVkZW50aWFsLnRydXN0ZWRjdXJseE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmRhNmI4ZDNlLTZkZTctOTFjZi1mZWQ3LTRjNTRlOGQ5NzJiNy9jMnBhLnNpZ25hdHVyZaJkY29kZXgdY2xhaW1TaWduYXR1cmUuaW5zaWRlVmFsaWRpdHljdXJseE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmRhNmI4ZDNlLTZkZTctOTFjZi1mZWQ3LTRjNTRlOGQ5NzJiNy9jMnBhLnNpZ25hdHVyZaJkY29kZXgYY2xhaW1TaWduYXR1cmUudmFsaWRhdGVkY3VybHhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTpkYTZiOGQzZS02ZGU3LTkxY2YtZmVkNy00YzU0ZThkOTcyYjcvYzJwYS5zaWduYXR1cmWiZGNvZGV4GWFzc2VydGlvbi5oYXNoZWRVUkkubWF0Y2hjdXJseGFzZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmRhNmI4ZDNlLTZkZTctOTFjZi1mZWQ3LTRjNTRlOGQ5NzJiNy9jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzomRjb2RleBlhc3NlcnRpb24uaGFzaGVkVVJJLm1hdGNoY3VybHhec2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTpkYTZiOGQzZS02ZGU3LTkxY2YtZmVkNy00YzU0ZThkOTcyYjcvYzJwYS5hc3NlcnRpb25zL2MycGEuYWN0aW9ucy52MqJkY29kZXgZYXNzZXJ0aW9uLmhhc2hlZFVSSS5tYXRjaGN1cmx4XXNlbGYjanVtYmY9L2MycGEvdXJuOmMycGE6ZGE2YjhkM2UtNmRlNy05MWNmLWZlZDctNGM1NGU4ZDk3MmI3L2MycGEuYXNzZXJ0aW9ucy9jMnBhLmhhc2guZGF0YaJkY29kZXgjaW5ncmVkaWVudC5jbGFpbVNpZ25hdHVyZS52YWxpZGF0ZWRjdXJseGFzZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmRhNmI4ZDNlLTZkZTctOTFjZi1mZWQ3LTRjNTRlOGQ5NzJiNy9jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzomRjb2RleBhhc3NlcnRpb24uZGF0YUhhc2gubWF0Y2hjdXJseF1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmRhNmI4ZDNlLTZkZTctOTFjZi1mZWQ3LTRjNTRlOGQ5NzJiNy9jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFtaW5mb3JtYXRpb25hbIBwaW5ncmVkaWVudERlbHRhc4GidmluZ3JlZGllbnRBc3NlcnRpb25VUkl4YXNlbGYjanVtYmY9L2MycGEvdXJu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';

  // Twemoji v17.0.3 图形，CC BY 4.0；来源和原始 SHA-256 见 THIRD_PARTY_NOTICES.md。
  const WHEEL_ICON_URI = 'data:image/svg+xml,' + '%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2036%2036%22%3E%3Cg%20fill%3D%22%23DD2E44%22%3E%3Cpath%20d%3D%22M11.83%2026.822l11.18.981c.274.024.518-.18.542-.454l.003-.03c.024-.274-.181-.518-.455-.542l-11.18-.981c-.274-.024-.518.18-.542.455l-.003.03c-.024.273.181.517.455.541z%22%2F%3E%3Cpath%20d%3D%22M23.01%2027.803l-.03-.003c-.274-.024-.478-.268-.455-.542l.452-5.161c.024-.274.268-.478.542-.455l.03.003c.274.024.478.268.455.542l-.452%205.161c-.024.274-.268.479-.542.455zm-11.062-7.809l-.03-.003c-.274-.024-.518.181-.542.454l-1.048%2011.977c-.024.274.181.518.455.542l.03.003c.274.024.518-.181.542-.454l1.048-11.977c.023-.274-.181-.518-.455-.542z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23292F33%22%20d%3D%22M22.207%2020.128c1.475-.212%202.919-.152%202.416.56-.504.713-1.623%201.963-3.521%201.759-1.899-.204.191-2.188%201.105-2.319z%22%2F%3E%3Cpath%20fill%3D%22%23292F33%22%20d%3D%22M21.101%2022.447l-10.262-.898c-1.026-.09-1.026-.09-.936-1.116.049-.564.552-.986%201.116-.936l10.262.898c.564.049.986.552.936%201.116-.089%201.025-.089%201.025-1.116.936z%22%2F%3E%3Cpath%20fill%3D%22%23DD2E44%22%20d%3D%22M21.645%2022.75l-11.318-.99c-.274-.024-.478-.268-.455-.542l.003-.03c.024-.274.268-.478.542-.455l11.318.99c.274.024.478.268.455.542l-.003.03c-.024.274-.268.479-.542.455z%22%2F%3E%3Cpath%20fill%3D%22%23292F33%22%20d%3D%22M26.074%208.654l-.898%2010.262c-.09%201.026-.09%201.026-1.116.936-.564-.049-.986-.552-.936-1.116l.898-10.262c.049-.564.552-.986%201.116-.936%201.026.09%201.026.09.936%201.116z%22%2F%3E%3Cpath%20fill%3D%22%23DD2E44%22%20d%3D%22M26.525%208.167l-.99%2011.318c-.024.274-.268.478-.542.455l-.03-.003c-.274-.024-.478-.268-.455-.542l.99-11.318c.024-.274.268-.478.542-.455l.03.003c.274.025.479.268.455.542z%22%2F%3E%3Cpath%20fill%3D%22%23292F33%22%20d%3D%22M23.337%2017.992l-7.78-.681c-.778-.068-.778-.068-.711-.836.037-.423.417-.738.845-.7l7.78.681c.428.037.748.414.711.836-.067.768-.067.768-.845.7z%22%2F%3E%3Cpath%20fill%3D%22%23DD2E44%22%20d%3D%22M21.207%2021.677c1.035.091%203.079.269%203.348-2.809s1.296-2.989%201.026.09-1.966%203.964-4.464%203.746c-2.052-.18-1.963-1.206.09-1.027zm-10.764-.941c2.053.171%202.464%201.255.412%201.07-.909-.082-.991.305-1.198%201.095-.195.743-.469%201.858-.884%203.418-.304%201.146-1.258.734-1.006-.265.423-1.679.822-3.142%201.083-4.072.267-.95.517-1.336%201.593-1.246z%22%2F%3E%3Cg%20fill%3D%22%2366757F%22%3E%3Ccircle%20cx%3D%2223.213%22%20cy%3D%2227.244%22%20r%3D%221.545%22%2F%3E%3Cpath%20d%3D%22M30.161%2030.661l-6.245-3.606%203.606-6.245-.892-.515-3.606%206.245-6.245-3.605-.515.892%206.245%203.605-3.605%206.245.892.515%203.605-6.245%206.245%203.606z%22%2F%3E%3Cpath%20d%3D%22M25.71%2034.573l-1.866-6.965%206.965-1.866-.267-.995-6.965%201.866-1.866-6.965-.995.266%201.866%206.966-6.965%201.866.266.995%206.966-1.866%201.866%206.965z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23292F33%22%20d%3D%22M23.213%2018.488c-4.836%200-8.756%203.92-8.756%208.756S18.377%2036%2023.213%2036s8.756-3.92%208.756-8.756-3.92-8.756-8.756-8.756zm0%2015.452c-3.698%200-6.696-2.998-6.696-6.696s2.998-6.696%206.696-6.696%206.696%202.998%206.696%206.696-2.998%206.696-6.696%206.696z%22%2F%3E%3Cpath%20fill%3D%22%2366757F%22%20d%3D%22M23.213%2019.518c-4.267%200-7.726%203.459-7.726%207.726s3.459%207.726%207.726%207.726%207.726-3.459%207.726-7.726-3.459-7.726-7.726-7.726zm0%2014.422c-3.698%200-6.696-2.998-6.696-6.696s2.998-6.696%206.696-6.696%206.696%202.998%206.696%206.696-2.998%206.696-6.696%206.696zm-9.428-.446l-2.23-1.288%201.287-2.23-.892-.515-1.287%202.23-2.231-1.288-.515.892%202.231%201.288-1.288%202.23.892.515%201.288-2.23%202.23%201.288z%22%2F%3E%3Cpath%20fill%3D%22%23292F33%22%20d%3D%22M10.851%2028.789c-1.991%200-3.605%201.614-3.605%203.605S8.86%2036%2010.851%2036s3.605-1.614%203.605-3.605-1.614-3.606-3.605-3.606zm0%206.181c-1.422%200-2.575-1.153-2.575-2.575%200-1.422%201.153-2.575%202.575-2.575s2.575%201.153%202.575%202.575c.001%201.422-1.152%202.575-2.575%202.575z%22%2F%3E%3Cpath%20fill%3D%22%23DD2E44%22%20d%3D%22M8.587%2025.046l-.029-.008c-.266-.071-.541.088-.612.354l-1.608%205.999c-.071.266.088.541.354.612l.029.008c.266.071.541-.088.612-.354l1.608-5.999c.07-.265-.089-.54-.354-.612z%22%2F%3E%3Cpath%20fill%3D%22%2366757F%22%20d%3D%22M6.72%2032.012l-4.009-1.074c-.266-.071-.425-.347-.354-.612l.008-.029c.071-.266.347-.425.612-.354l4.009%201.074c.266.071.425.347.354.612l-.008.029c-.07.266-.346.425-.612.354z%22%2F%3E%3Cpath%20fill%3D%22%23DD2E44%22%20d%3D%22M29%209.187l-3.073-.542c-.271-.048-.453-.308-.406-.579l.005-.03c.048-.271.308-.453.579-.406l3.073.542c.271.048.453.308.406.579l-.005.03c-.048.272-.309.454-.579.406z%22%2F%3E%3Cpath%20fill%3D%22%23292F33%22%20d%3D%22M29.999%209.364l-2.694-.482c-.279-.049-.268-.283-.219-.562.049-.279.119-.502.398-.453l2.694.482c.279.049.467.318.418.597-.049.279-.318.467-.597.418z%22%2F%3E%3C%2Fsvg%3E';

  // ---------- 独轮车内容编译：预览和执行共用 ----------
  function wheelInteger(value, fallback, min, max) {
    const number = Number(value);
    return Number.isFinite(number) ? Math.min(max, Math.max(min, Math.floor(number))) : fallback;
  }

  function wheelTiming(value) {
    const v = value || {};
    const min = wheelInteger(v.intervalMinSec, 5, 5, 3600);
    return { intervalMinSec: min, intervalMaxSec: wheelInteger(v.intervalMaxSec, min, min, 3600), randomize: v.randomize === true, timeLimitSec: wheelInteger(v.timeLimitSec, 0, 0, 86400) };
  }

  function normalizeWheelConfig(value) {
    const v = value && typeof value === 'object' ? value : {};
    const favoriteIds = [...new Set((v.text && Array.isArray(v.text.favoriteIds) ? v.text.favoriteIds : [])
      .filter(id => typeof id === 'string' && id.length > 0 && id.length < 160))].slice(0, FAVORITES_MAX_COUNT);
    const selectedByRoom = {};
    Object.entries(v.emotion && v.emotion.selectedByRoom || {}).slice(0, 100).forEach(([room, ids]) => {
      if (/^\d+$/.test(room) && Array.isArray(ids)) selectedByRoom[room] = [...new Set(ids.filter(id => typeof id === 'string' && id.length < 160 && decodeWheelEmotionId(id)))].slice(0, 100);
    });
    const byRoom = {};
    Object.entries(v.resume && v.resume.byRoom || {}).slice(0, 100).forEach(([room, mode]) => {
      if (/^\d+$/.test(room) && ['text', 'emotion'].includes(mode)) byRoom[room] = mode;
    });
    return {
      schemaVersion: 1,
      activeSource: ['text', 'emotion'].includes(v.activeSource) ? v.activeSource : 'text',
      text: { ...wheelTiming(v.text), content: String(v.text && v.text.content || '').slice(0, 20000), favoriteIds, maxLength: v.text && v.text.maxLength !== 'auto' && v.text.maxLength != null ? wheelInteger(v.text.maxLength, 20, 2, 200) : 'auto' },
      emotion: { ...wheelTiming(v.emotion), selectedByRoom },
      resume: { enabled: !!(v.resume && v.resume.enabled === true), byRoom },
      riskAccepted: v.riskAccepted === true,
    };
  }

  function wheelGraphemes(text) {
    if (typeof Intl.Segmenter !== 'function') throw new Error('当前浏览器不支持安全文字切分');
    return Array.from(new Intl.Segmenter('zh', { granularity: 'grapheme' }).segment(text), item => item.segment);
  }

  function wheelLength(text) {
    return wheelGraphemes(text).reduce((total, part) => total + (/\p{Extended_Pictographic}|\p{Regional_Indicator}|\u20e3/u.test(part) ? 2 : 1), 0);
  }

  function compileWheelText(text, limit, tail) {
    const available = limit - wheelLength(tail);
    if (available < 1) throw new Error('小尾巴已达到长度上限，请在主面板调整');
    const messages = [];
    String(text).replace(/\r\n?/g, '\n').split('\n').filter(line => line.trim()).forEach(line => {
      let chunk = '', length = 0;
      wheelGraphemes(line).forEach(part => {
        const size = wheelLength(part);
        if (size > available) throw new Error('单个表情超过剩余长度，请调整单条长度或小尾巴');
        if (length + size > available) { messages.push(chunk + tail); chunk = ''; length = 0; }
        chunk += part; length += size;
      });
      if (chunk) messages.push(chunk + tail);
    });
    if (!messages.length) throw new Error('请先准备有效内容');
    if (messages.length > 5000) throw new Error('切分后的内容过多，请缩短文字');
    return messages;
  }

  function wheelDelay(timing, random) {
    const t = wheelTiming(timing);
    return 1000 * (t.randomize ? t.intervalMinSec + Math.floor(Math.min(0.999999999, Math.max(0, random())) * (t.intervalMaxSec - t.intervalMinSec + 1)) : t.intervalMinSec);
  }

  function decodeWheelEmotionId(id) {
    const value = String(id || '');
    if (value.startsWith('text:')) {
      const text = value.slice(5);
      return /^\[[^\]\r\n]{1,80}\]$/.test(text) ? { type: 'text', text } : null;
    }
    const match = value.match(/^special:([0-9a-f]{8,128})$/i);
    return match ? { type: 'emoji-special', hash: match[1].toLowerCase() } : null;
  }

  function wheelEmotionLabel(message) {
    if (!message) return '';
    return message.type === 'emoji-special' ? (message.label || '房间专属表情') : String(message.text || message);
  }

  function filterFavoriteItems(items, query, roomOnly, roomId) {
    const needle = String(query || '').trim().toLocaleLowerCase();
    return items.filter(item => (!roomOnly || (roomId && item.sourceRoomIds.includes(roomId))) && (!needle || item.text.toLocaleLowerCase().includes(needle)));
  }

  function normalizeFavoriteLibrary(value) {
    const legacy = Array.isArray(value);
    if (!legacy && (!value || value.schemaVersion !== 2 || !Array.isArray(value.items))) throw new Error('收藏数据损坏，已停止写入');
    const rawItems = legacy ? value : value.items;
    if (rawItems.length > FAVORITES_MAX_COUNT) throw new Error('收藏数量超过 1000 条');
    const items = [], texts = new Map(), ids = new Set();
    rawItems.forEach(raw => {
      const text = typeof raw === 'string' ? raw.trim() : String(raw && raw.text || '').trim();
      if (text.length > FAVORITE_TEXT_MAX_LENGTH) throw new Error('单条收藏不能超过 200 字符');
      if (!text) return;
      const old = typeof raw === 'object' ? raw : {};
      let hash = 2166136261;
      for (const char of text) hash = Math.imul(hash ^ char.codePointAt(0), 16777619);
      const item = makeFavorite(text, { createdAt: 0, updatedAt: 0, ...old, id: old.id || 'legacy-' + (hash >>> 0).toString(36) + '-' + text.length });
      const duplicate = texts.get(text);
      if (duplicate) {
        duplicate.sourceRoomIds = [...new Set(duplicate.sourceRoomIds.concat(item.sourceRoomIds))];
        return;
      }
      if (ids.has(item.id)) throw new Error('收藏 ID 重复，请修复导入文件');
      ids.add(item.id); texts.set(text, item); items.push(item);
    });
    return { schemaVersion: 2, revision: legacy ? 0 : wheelInteger(value.revision, 0, 0, Number.MAX_SAFE_INTEGER), items };
  }

  function readFavoriteLibrary() {
    const raw = GM_getValue(FAVORITES_STORAGE_KEY);
    if (raw) return normalizeFavoriteLibrary(JSON.parse(raw));
    const legacy = JSON.parse(GM_getValue('bilivex_cfg') || '{}');
    return normalizeFavoriteLibrary(legacy.favorites || []);
  }

  // Web Locks 在同源标签页间提供真正互斥；不可用时拒绝写入，保留旧数据和编辑草稿。
  async function commitFavoriteLibrary(change, expectedRevision) {
    const locks = panelWindow.navigator.locks;
    if (!locks) throw new Error('当前页面不支持安全收藏写入，请在 HTTPS 直播页面重试');
    return locks.request('bilivex-favorites-write-v2', async () => {
      const library = readFavoriteLibrary();
      if (expectedRevision != null && library.revision !== expectedRevision) throw new Error('收藏已在其他页面修改，草稿已保留，请取消后重载');
      const raw = GM_getValue(FAVORITES_STORAGE_KEY);
      if (!GM_getValue('bilivex_favorites_backup_v1')) {
        GM_setValue('bilivex_favorites_backup_v1', JSON.stringify({ favorites: raw || null, config: GM_getValue('bilivex_cfg') || null }));
        if (!GM_getValue('bilivex_favorites_backup_v1')) throw new Error('收藏备份失败，未迁移');
      }
      const next = normalizeFavoriteLibrary(change(library) || library);
      next.revision = library.revision + 1;
      const encoded = JSON.stringify(next);
      GM_setValue(FAVORITES_STORAGE_KEY, encoded);
      if (GM_getValue(FAVORITES_STORAGE_KEY) !== encoded) throw new Error('收藏保存校验失败，请保留草稿');
      cfg = { ...cfg, favorites: next.items };
      favoriteLibraryChanged();
      return next;
    });
  }

  async function saveFavoritePatch(base, visibleIds, rows, merge) {
    const room = currentWheelRoom();
    return commitFavoriteLibrary(library => {
      const visible = new Set(visibleIds), existing = new Map(library.items.map(item => [item.id, item]));
      const edited = rows.filter(row => row.text.trim()).map(row => ({ ...existing.get(row.id), ...row, sourceRoomIds: existing.has(row.id) ? existing.get(row.id).sourceRoomIds : room ? [room] : [], updatedAt: Date.now() }));
      const items = library.items.filter(item => !visible.has(item.id)).concat(edited);
      if (!merge && new Set(items.map(item => item.text.trim())).size !== items.length) throw new Error('文本重复：再次点击“合并并保存”合并来源，或取消');
      library.items = items;
      return library;
    }, base.revision);
  }

  async function normalizeStoredFavoriteLibrary() {
    const raw = GM_getValue(FAVORITES_STORAGE_KEY);
    if (!raw) return;
    try {
      const normalized = normalizeFavoriteLibrary(JSON.parse(raw));
      if (JSON.stringify(normalized) !== raw) await commitFavoriteLibrary(library => library);
    } catch (error) {
      console.warn('[BiLivex] 收藏数据整理失败：' + String(error && error.message || error).slice(0, 160));
    }
  }

  // ---------- 默认设置 ----------
  const DEFAULT_CFG = {
    tailEnabled: true,         // 小尾巴开关
    tailText: '喵',            // 小尾巴文本
    floatDmPlus: true,         // 弹幕 +1 功能开关
    autoHighestQuality: false, // 播放器就绪后选择当前账号可用的最高固定画质
    autoWebMode: false,        // 播放器就绪后自动进入 B 站网页模式
    blockP2PUpload: false,     // 使用 B 站原生 wpdP2PType=0 初始化路径
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
  const BOOLEAN_CFG_KEYS = ['autoHighestQuality', 'autoWebMode', 'blockP2PUpload'];
  const P2P_URL_MARKER_KEY = 'bilivex_p2p_url_marker_v1';
  const P2P_RELOAD_MARKER_KEY = 'bilivex_p2p_reload_marker_v1';

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
      updatedAt: old && Number.isFinite(old.updatedAt) ? old.updatedAt : now,
      sourceRoomIds: [...new Set((old && Array.isArray(old.sourceRoomIds) ? old.sourceRoomIds : []).filter(id => typeof id === 'string' && /^\d+$/.test(id)))].slice(0, 100),
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
    try { return readFavoriteLibrary().items; } catch (e) { return []; }
  }

  function normalizeBooleanSettings(value) {
    const normalized = value && typeof value === 'object' && !Array.isArray(value) ? { ...value } : {};
    BOOLEAN_CFG_KEYS.forEach((key) => { normalized[key] = normalized[key] === true; });
    return normalized;
  }

  function loadCfg() {
    try {
      const raw = GM_getValue('bilivex_cfg');
      const parsed = raw ? JSON.parse(raw) : {};
      const obj = normalizeBooleanSettings(parsed);
      if (!obj.theme || (obj.theme !== 'blue' && obj.theme !== 'pink')) obj.theme = 'blue';
      if (obj.panelAnchor !== 'left' && obj.panelAnchor !== 'right') obj.panelAnchor = null;
      // 兼容旧版本嵌在 cfg 内的收藏；首次读到旧列表时迁移到独立存储，
      // 后续顶层菜单与 iframe 实例只会读取同一份收藏数据。
      const storedFavorites = readStoredFavorites();
      const legacyFavorites = normalizeFavorites(obj.favorites);
      const favorites = storedFavorites === null ? legacyFavorites : storedFavorites;
      // 收藏迁移只在互斥写入事务中执行，读取配置不写数据。
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

  async function addFavorite(text, sourceDocument) {
    const clean = typeof text === 'string' ? text.trim() : '';
    const room = canonicalRoom(sourceDocument || document);
    if (!clean || clean.length > FAVORITE_TEXT_MAX_LENGTH) return { status: 'invalid' };
    let result;
    try {
      await commitFavoriteLibrary(library => {
        const duplicate = library.items.find(item => item.text === clean);
        if (duplicate) {
          const added = room && !duplicate.sourceRoomIds.includes(room);
          if (added) duplicate.sourceRoomIds.push(room);
          result = { status: added ? 'associated' : 'duplicate' }; return library;
        }
        if (library.items.length >= FAVORITES_MAX_COUNT) throw new Error('收藏夹已达上限');
        const item = makeFavorite(clean, { sourceRoomIds: room ? [room] : [] });
        library.items.push(item); result = { status: 'added', item }; return library;
      });
      return result;
    } catch (error) { showToast(error.message); return { status: 'error' }; }
  }

  // 面板在顶层、聊天控件在 iframe 时，各自的运行时配置不会自动同步。
  // 发送前重新读取持久化设置，确保手动发送与 +1 使用面板刚保存的小尾巴。
  function getTailText() {
    const latest = loadCfg();
    return latest.tailEnabled && latest.tailText ? latest.tailText : '';
  }

  function isP2PManagedPage(href) {
    try {
      const url = new URL(href, location.href);
      if (url.hostname !== 'live.bilibili.com') return false;
      return /^\/(?:blanc\/)?\d+(?:\/|$)/.test(url.pathname) ||
        /^\d+$/.test(url.searchParams.get('room_id') || url.searchParams.get('roomid') || '');
    } catch (e) {
      return false;
    }
  }

  function p2pPageKey(href) {
    try {
      const url = new URL(href, location.href);
      return url.origin + url.pathname;
    } catch (e) {
      return '';
    }
  }

  function readSessionJson(storage, key) {
    try {
      const raw = storage.getItem(key);
      const value = raw ? JSON.parse(raw) : null;
      return value && typeof value === 'object' ? value : null;
    } catch (e) {
      return null;
    }
  }

  function writeSessionJson(storage, key, value) {
    try {
      if (value) storage.setItem(key, JSON.stringify(value));
      else storage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }

  function getP2PTargetUrl(href, enabled, marker) {
    if (!isP2PManagedPage(href)) return href;
    const url = new URL(href, location.href);
    if (enabled) {
      url.searchParams.set('wpdP2PType', '0');
    } else if (marker && marker.pageKey === p2pPageKey(href)) {
      if (marker.hadValue) url.searchParams.set('wpdP2PType', marker.value);
      else url.searchParams.delete('wpdP2PType');
    }
    return url.href;
  }

  function prepareP2PUrl(href, enabled, storage) {
    if (!isP2PManagedPage(href)) return { changed: false, href };
    const url = new URL(href, location.href);
    const pageKey = p2pPageKey(href);
    const stored = readSessionJson(storage, P2P_URL_MARKER_KEY);
    const markers = stored && stored.pages && typeof stored.pages === 'object' ? stored.pages : {};
    if (stored && stored.pageKey && !markers[stored.pageKey]) markers[stored.pageKey] = stored;
    let marker = markers[pageKey];
    if (enabled) {
      if (url.searchParams.get('wpdP2PType') === '0') {
        return { changed: false, href: url.href };
      }
      if (!marker) {
        marker = {
          pageKey,
          hadValue: url.searchParams.has('wpdP2PType'),
          value: url.searchParams.get('wpdP2PType') || '',
        };
        markers[pageKey] = marker;
        writeSessionJson(storage, P2P_URL_MARKER_KEY, { pages: markers });
      }
      return { changed: true, href: getP2PTargetUrl(url.href, true) };
    }
    if (!marker) {
      return { changed: false, href: url.href };
    }
    const nextHref = url.searchParams.get('wpdP2PType') === '0'
      ? getP2PTargetUrl(url.href, false, marker)
      : url.href;
    delete markers[pageKey];
    writeSessionJson(storage, P2P_URL_MARKER_KEY, Object.keys(markers).length ? { pages: markers } : null);
    return { changed: nextHref !== url.href, href: nextHref };
  }

  function clearSatisfiedP2PReloadMarker(storage, href) {
    const marker = readSessionJson(storage, P2P_RELOAD_MARKER_KEY);
    if (marker && marker.href === href) writeSessionJson(storage, P2P_RELOAD_MARKER_KEY, null);
  }

  function applyEarlyP2PSetting(enabled) {
    try {
      const currentHref = location.href;
      clearSatisfiedP2PReloadMarker(sessionStorage, currentHref);
      const target = prepareP2PUrl(currentHref, enabled, sessionStorage);
      if (!target.changed) return false;
      history.replaceState(history.state, '', target.href);
      clearSatisfiedP2PReloadMarker(sessionStorage, target.href);
      return true;
    } catch (e) {
      return false;
    }
  }

  let cfg = loadCfg();
  applyEarlyP2PSetting(cfg.blockP2PUpload);
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
  let nativeSendEpoch = 0;
  let nativeSendPageActive = true;
  let nativeSendUrlRoom = roomIdFromUrl(location.href);
  let nativeSendPanelUrlRoom = null;
  const nativeSendCancellations = new Set();

  function nativeSendCurrent(epoch) {
    if (!nativeSendPageActive || epoch !== nativeSendEpoch) return false;
    try {
      // 原生房号可能晚于 SPA 地址更新；先阻止本页或顶层已换房的旧请求。
      return roomIdFromUrl(location.href) === nativeSendUrlRoom &&
        (nativeSendPanelUrlRoom === null || roomIdFromUrl(panelWindow.location.href) === nativeSendPanelUrlRoom);
    } catch (e) { return false; }
  }

  function cancelNativeSends(message) {
    nativeSendEpoch += 1;
    nativeSendUrlRoom = roomIdFromUrl(location.href);
    try { nativeSendPanelUrlRoom = roomIdFromUrl(panelWindow.location.href); } catch (e) { nativeSendPanelUrlRoom = ''; }
    const result = { status: 'cancelled', message };
    // 卸载和 BFCache 可能冻结计时器与动画帧，取消不能等待旧回调恢复后才释放队列。
    [...nativeSendCancellations].forEach(cancel => { try { cancel(result); } catch (e) {} });
    nativeSendCancellations.clear();
  }

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

  function enqueuePlusSend(task, signal) {
    const epoch = nativeSendEpoch;
    const active = nativeSendPageActive;
    if (!active || signal?.aborted) return Promise.resolve({ status: 'cancelled', message: '页面已离开或任务已停止' });
    const previous = sharedRuntime.nativeSendTail || plusSendTail;
    const runTask = () => active && nativeSendCurrent(epoch) && !signal?.aborted ? task() : { status: 'cancelled', message: '页面已离开或任务已停止' };
    let cancel;
    const cancelled = new Promise(resolve => { cancel = resolve; nativeSendCancellations.add(cancel); });
    const onAbort = () => cancel({ status: 'cancelled', message: '任务已停止' });
    signal?.addEventListener('abort', onAbort, { once: true });
    const run = Promise.race([previous.then(runTask, runTask), cancelled]).finally(() => {
      nativeSendCancellations.delete(cancel); signal?.removeEventListener('abort', onAbort);
    });
    // ponytail：当前使用全局串行队列；只有实测吞吐不足时才按直播间或账号拆分。
    // 取消自动请求只结束该任务，后续请求仍等待前序手动请求，避免破坏串行顺序。
    plusSendTail = signal ? previous.catch(() => {}).then(() => run).catch(() => {}) : run.catch(() => {});
    sharedRuntime.nativeSendTail = plusSendTail;
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

  async function clickNativeSpecialEmoji(ownerDocument, hash, requestId, canClick, waitDelay = ms => new Promise(resolve => setTimeout(resolve, ms))) {
    const current = () => typeof canClick !== 'function' || canClick();
    const cancelled = { status: 'cancelled', message: '任务已停止、输入变化或直播间已变化' };
    if (!current()) return cancelled;
    const scope = ownerDocument.fullscreenElement || ownerDocument;
    const panelButton = scope.querySelector('.emoticons-panel[title="表情包"], .icon-right-part .emoticons-panel, .emoticons-panel') ||
      ownerDocument.querySelector('.emoticons-panel[title="表情包"], .icon-right-part .emoticons-panel, .emoticons-panel');
    let item = findEmoticonItem(ownerDocument, hash);
    if (!item && panelButton) panelButton.click();
    for (let attempt = 0; attempt < 10 && !item; attempt += 1) {
      if (await waitDelay(150) === false) return cancelled;
      if (!current()) return cancelled;
      item = findEmoticonItem(ownerDocument, hash);
      if (!item && panelButton && attempt < 2) panelButton.click();
    }
    if (!item) return { status: 'failed', message: '未找到对应的特殊表情，可能尚未解锁' };
    if (!current()) return cancelled;
    activateEmoticonTab(item);
    if (await waitDelay(60) === false) return cancelled;
    const readyItem = findEmoticonItem(ownerDocument, hash);
    if (!readyItem) return { status: 'failed', message: '特殊表情面板已关闭，请重试' };
    if (!current()) return cancelled;
    readyItem.click();
    tracePlus('dom-emoticon-click', { requestId, hash });
    return { status: 'triggered', message: '已触发原生表情发送，无法确认服务端结果' };
  }

  async function sendSpecialEmoji(hash, requestId, roomId, options = {}) {
    const epoch = nativeSendEpoch;
    const current = () => nativeSendCurrent(epoch) && !options.signal?.aborted && (!options.canContinue || options.canContinue());
    const input = await waitForNativeChatInput(null, current);
    if (!current()) return { status: 'cancelled', message: '任务已停止，取消发送' };
    if (!input) return { status: 'failed', message: '未找到原生聊天输入框，请稍后重试' };
    const ownerDocument = input.ownerDocument;
    const roomMatches = () => (!roomId || canonicalRoom(ownerDocument) === roomId) && (!options.ownerDocument || options.ownerDocument === ownerDocument);
    if (!roomMatches()) return { status: 'cancelled', message: '直播间已变化，取消发送' };
    const busy = () => !!input.value || composingInputs.has(input);
    if (busy()) return { status: 'user-busy', message: '请先处理输入框草稿或完成输入，再重试' };
    const result = await clickNativeSpecialEmoji(ownerDocument, hash, requestId,
      () => current() && roomMatches() && input.isConnected && findChatInput() === input && !busy());
    if (result.status === 'cancelled' && current() && roomMatches() && busy()) {
      return { status: 'user-busy', message: '输入框内容已变化，保留草稿并停止发送' };
    }
    return result;
  }

  function collectNativeEmoticons(ownerDocument) {
    const seen = new Set();
    const panes = Array.from(ownerDocument.querySelectorAll('.img-pane'));
    const packages = new Map(panes.map((pane, index) => {
      const siblings = Array.from(pane.parentElement.children).filter(node => node.matches('.img-pane'));
      const tab = pane.parentElement.querySelectorAll('.tab-pane-item')[siblings.indexOf(pane)];
      const cover = tab && tab.querySelector('img');
      const title = pane.querySelector('.title, .panel-title, .emoticon-title, .package-title');
      const labels = [pane.getAttribute('aria-label'), tab && tab.title, tab && tab.getAttribute('aria-label'), cover && cover.title, cover && cover.alt, title && title.textContent];
      const name = labels.map(value => String(value || '').trim()).find(value => value && !/^(?:https?:)?\/\//i.test(value)) || (pane.querySelector('.emoji-wrap') ? '常用表情' : '表情包 ' + (index + 1));
      const icon = (cover && (cover.currentSrc || cover.src)) || '';
      return [pane, { packageId: emojiHashFromSrc(icon) || 'pane-' + index, packageName: name, packageIcon: icon }];
    }));
    return Array.from(ownerDocument.querySelectorAll('.emoticon-item')).map(item => {
      const image = item.querySelector('img');
      const hash = image && emojiHashFromSrc(image.getAttribute('src') || image.src);
      if (!hash || seen.has(hash) || item.matches('[aria-disabled=true],.disabled,.locked') || item.querySelector('.locked,[aria-label*="未解锁"]')) return null;
      seen.add(hash);
      const name = resolveEmojiNameFromImg(image);
      const explicit = String(item.getAttribute('aria-label') || item.title || image.getAttribute('aria-label') || image.title || '').trim().replace(/^\[|\]$/g, '');
      return {
        id: 'special:' + hash,
        ...packages.get(item.closest('.img-pane')),
        hash,
        label: name ? '[' + name + ']' : (explicit || '房间专属表情'),
        inputText: name ? '[' + name + ']' : '',
        src: image.currentSrc || image.src || '',
      };
    }).filter(Boolean);
  }

  async function discoverNativeEmoticons() {
    const controls = strictWheelControls();
    if (!controls || !controls.room) throw new Error('暂无法读取当前直播间表情');
    const ownerDocument = controls.input.ownerDocument;
    const scope = ownerDocument.fullscreenElement || ownerDocument;
    const panelButton = scope.querySelector('.emoticons-panel[title="表情包"], .icon-right-part .emoticons-panel, .emoticons-panel') ||
      ownerDocument.querySelector('.emoticons-panel[title="表情包"], .icon-right-part .emoticons-panel, .emoticons-panel');
    let items = collectNativeEmoticons(ownerDocument);
    if (!items.length && panelButton) panelButton.click();
    for (let attempt = 0; attempt < 10 && !items.length; attempt += 1) {
      await new Promise(resolve => setTimeout(resolve, 150));
      items = collectNativeEmoticons(ownerDocument);
    }
    if (!items.length) throw new Error(panelButton ? '当前没有可用表情，请确认已登录或已解锁' : '未找到 B 站原生表情入口');
    return { room: controls.room, items };
  }

  function appendTailForManualSend(ta) {
    const originalText = ta && ta.value;
    // 自动任务已按启动快照编译尾巴，原生点击阶段不能再追加新配置。
    if (ta && ta._bilivexWheelText === originalText) return;
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
  function waitForNativeChatInput(timeoutMs, canContinue) {
    const deadline = Date.now() + (timeoutMs || 2500);
    return new Promise((resolve) => {
      const poll = () => {
        if (canContinue && !canContinue()) { resolve(null); return; }
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

  function confirmTriggeredSend(input, expectedText, timeoutMs, beforeOwn) {
    if (!input || !input.ownerDocument) {
      return Promise.resolve({ status: 'timeout', message: '已触发发送，但未确认结果' });
    }
    const deadline = Date.now() + (timeoutMs || 2000);
    const expected = String(expectedText || '').trim();
    const epoch = nativeSendEpoch;
    return new Promise((resolve) => {
      const check = () => {
        if (!nativeSendCurrent(epoch)) { resolve({ status: 'cancelled', message: '页面已离开，停止确认发送结果' }); return; }
        const consumed = input && input.value === '';
        const ownMessage = Array.from(input.ownerDocument.querySelectorAll('.my-self')).some((node) => {
          return (!beforeOwn || !beforeOwn.has(node)) && String(node.textContent || '').includes(expected);
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
    const epoch = nativeSendEpoch;
    const current = () => nativeSendCurrent(epoch) && !opts.signal?.aborted && (!opts.canContinue || opts.canContinue());
    const ta = await waitForNativeChatInput(null, current);
    if (!current()) return { status: 'cancelled', message: '任务已停止，取消发送' };
    if (!ta) return { status: 'no-input', message: '未找到原生聊天输入框，请稍后重试' };
    if (opts.ownerDocument && opts.ownerDocument !== ta.ownerDocument) return { status: 'cancelled', message: '输入框来源已变化，取消发送' };
    if (opts.roomId && canonicalRoom(ta.ownerDocument) !== opts.roomId) return { status: 'cancelled', message: '已换房，取消发送' };
    if (ta.value || composingInputs.has(ta)) return { status: 'user-busy', message: '请先处理输入框草稿或完成输入，再重试' };
    if (!opts.keepFocus) { try { ta.focus(); } catch (e) {} }
    const tailText = getTailText();
    const finalText = opts.finalText || (tailText && !text.endsWith(tailText)
      ? text + tailText
      : text);
    let inputChanged = false, writing = true, ownsInput = true;
    const onInputChange = event => { if (!writing || event.isTrusted) inputChanged = true; };
    const unbindInput = () => { ta.removeEventListener('input', onInputChange); ta.removeEventListener('beforeinput', onInputChange); };
    // 普通发送同样保护用户重建的同文草稿，不以是否传入取消信号区分。
    ta.addEventListener('input', onInputChange); ta.addEventListener('beforeinput', onInputChange);
    if (!setReactLikeValue(ta, finalText)) {
      unbindInput();
      return Promise.resolve({ status: 'user-busy', message: '输入框内容已变化，保留草稿并停止发送' });
    }
    writing = false;
    const clearPendingInput = () => {
      if (!ownsInput) return;
      ownsInput = false;
      if (!inputChanged && ta.value === finalText && !composingInputs.has(ta)) setReactLikeValue(ta, '');
    };
    if (!current()) {
      clearPendingInput();
      unbindInput();
      return { status: 'cancelled', message: '页面已离开，取消发送' };
    }
    tracePlus('dom-input', { requestId: opts.requestId, textLength: finalText.length });
    if (opts.autoSend === false) { unbindInput(); return Promise.resolve({ status: 'filled', message: '已填入输入框' }); }
    // Vue 会在 input 后异步更新按钮状态，下一帧再点击真实发送按钮。
    const ownerWindow = ta.ownerDocument.defaultView || window;
    const useAnimationFrame = typeof ownerWindow.requestAnimationFrame === 'function';
    const schedule = useAnimationFrame
      ? ownerWindow.requestAnimationFrame.bind(ownerWindow)
      : (cb) => ownerWindow.setTimeout(cb, 0);
    return new Promise((resolve) => {
      let completed = false, frameId = null, fallbackTimer = null;
      const finishScheduling = () => {
        if (fallbackTimer !== null) ownerWindow.clearTimeout(fallbackTimer);
        if (frameId !== null && useAnimationFrame) ownerWindow.cancelAnimationFrame(frameId);
        opts.signal?.removeEventListener('abort', onAbort);
        unbindInput();
      };
      const cancel = result => {
        if (completed) return;
        completed = true; nativeSendCancellations.delete(cancel);
        try {
          if (frameId !== null) {
            if (useAnimationFrame && typeof ownerWindow.cancelAnimationFrame === 'function') ownerWindow.cancelAnimationFrame(frameId);
            else ownerWindow.clearTimeout(frameId);
          }
          clearPendingInput();
        } catch (e) {}
        finishScheduling();
        resolve(result);
      };
      const onAbort = () => cancel({ status: 'cancelled', message: '小窗任务已停止，取消发送' });
      nativeSendCancellations.add(cancel);
      opts.signal?.addEventListener('abort', onAbort, { once: true });
      const execute = () => {
        if (completed) return;
        completed = true; nativeSendCancellations.delete(cancel);
        finishScheduling();
        if (!current() || !ta.isConnected || findChatInput() !== ta || (opts.roomId && canonicalRoom(ta.ownerDocument) !== opts.roomId)) {
          clearPendingInput();
          resolve({ status: 'cancelled', message: '页面或输入框已变化，取消发送' }); return;
        }
        if (inputChanged || ta.value !== finalText || composingInputs.has(ta)) { resolve({ status: 'user-busy', message: '输入框内容已变化，保留草稿并停止发送' }); return; }
        const beforeOwn = new Set(ta.ownerDocument.querySelectorAll('.my-self'));
        const btn = findSendBtn(ta);
        if (btn && !btn.disabled && btn.getAttribute('aria-disabled') !== 'true') {
          try {
            btn.click();
            tracePlus('dom-click', { requestId: opts.requestId });
            resolve({ status: 'triggered', message: '已触发发送', input: ta, beforeOwn });
            return;
          } catch (e) {
            tracePlus('dom-click-error', { requestId: opts.requestId, error: e && e.message });
          }
        }
        try {
          if (!opts.keepFocus) ta.focus();
          const KeyboardEventCtor = ownerWindow.KeyboardEvent || KeyboardEvent;
          const enterOptions = {
            key: 'Enter', code: 'Enter', keyCode: 13, which: 13,
            bubbles: true, cancelable: true,
          };
          ta.dispatchEvent(new KeyboardEventCtor('keydown', enterOptions));
          ta.dispatchEvent(new KeyboardEventCtor('keyup', enterOptions));
          tracePlus('dom-enter', { requestId: opts.requestId });
          resolve({ status: 'triggered', message: '已触发发送', input: ta, beforeOwn });
        } catch (e) {
          tracePlus('dom-enter-error', { requestId: opts.requestId, error: e && e.message });
          resolve({ status: 'failed', message: '无法触发聊天框发送' });
        }
      };
      frameId = schedule(execute);
      // 小窗操作不能无限等待后台页面的动画帧；两种回调共享一次执行标识。
      if (opts.signal) fallbackTimer = ownerWindow.setTimeout(execute, 100);
      if (opts.signal?.aborted) onAbort();
    });
  }

  function sendPlusOne(payload, options = {}) {
    const normalized = typeof payload === 'string' ? { type: 'text', text: payload } : (payload || {});
    const cleanText = String(normalized.text || '').trim();
    if (!cleanText) {
      showToast('该弹幕无文本内容');
      return Promise.resolve({ status: 'invalid', message: '该弹幕无文本内容' });
    }
    const requestId = nextPlusRequestId();
    const roomId = options.roomId || canonicalRoom(document);
    tracePlus('queued', { requestId, textLength: cleanText.length, payloadType: normalized.type || 'text' });
    return enqueuePlusSend(async () => {
      if (options.signal?.aborted || (options.canContinue && !options.canContinue()) || canonicalRoom(document) !== roomId) return { status: 'cancelled', requestId, message: '小窗或直播间已变化，取消发送' };
      const notify = message => { if (!options.silent) showToast(message); };
      if (normalized.type === 'emoji-special' && normalized.hash) {
        const result = await sendSpecialEmoji(normalized.hash, requestId, roomId, options);
        tracePlus('dom-result', { requestId, status: result.status, payloadType: normalized.type });
        notify(result.message || (result.status === 'triggered' ? '已触发发送' : '发送失败'));
        return { ...result, requestId };
      }
      // 始终使用原生控件，让播放器沿用 B 站的本人弹幕状态与蓝色标识。
      const finalText = getTailText() && !cleanText.endsWith(getTailText())
        ? cleanText + getTailText() : cleanText;
      const domResult = await fillAndSend(finalText, { ...options, requestId, finalText, roomId });
      if (domResult.status === 'triggered') {
        const confirmed = await confirmTriggeredSend(domResult.input, finalText, null, domResult.beforeOwn);
        tracePlus('dom-result', { requestId, status: confirmed.status });
        notify(confirmed.message);
        return { ...confirmed, requestId };
      }
      if (['filled', 'user-busy', 'cancelled'].includes(domResult.status)) {
        tracePlus('dom-result', { requestId, status: domResult.status });
        notify(domResult.message || '已填入输入框');
        return { ...domResult, requestId };
      }
      tracePlus('dom-unavailable', { requestId, status: domResult.status });
      const result = { status: 'failed', requestId, message: domResult.message || '未找到原生发送控件，请稍后重试' };
      tracePlus('send-unavailable', result);
      notify(result.message);
      return result;
    }, options.signal).catch((error) => {
      const message = '发送失败，请重试';
      tracePlus('queue-error', { requestId, error: error && error.message });
      if (!options.silent) showToast(message);
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
    syncWheelTheme();
    const themedPanel = getPanelRoot();
    if (themedPanel) { themedPanel.classList.toggle('blx-pink', cfg.theme === 'pink'); themedPanel.style.setProperty('--panel-tint', 'rgba(' + currentTheme.primaryRgb + ',.12)'); }

    // 1. 面板标题渐变 + 阴影（折叠态固定 logo 圆形按钮，不随主题切换）
    const panel = getPanelRoot();
    if (panel && panel.dataset.uiVersion !== '3') {
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
    Array.from(getPanelDocument().querySelectorAll('#bilivex-panel label')).forEach((lab) => {
      const inp = lab.querySelector('input[type=checkbox]');
      const slider = lab.querySelector('.bilivex-switch-slider');
      if (inp && slider) {
        slider.style.background = inp.checked ? currentTheme.primary : '#cfd5db';
      }
    });

    // 3. 主题选择按钮组的高亮
    Array.from(getPanelDocument().querySelectorAll('[data-bilivex-theme]')).forEach((b) => {
      const isActive = b.dataset.bilivexTheme === cfg.theme; b.setAttribute('aria-pressed', String(isActive));
      b.style.background = isActive ? currentTheme.primary : '#fff';
      b.style.color = isActive ? '#fff' : '#666';
      b.style.borderColor = isActive ? currentTheme.primary : '#e0e6ed';
    });

    // 4. 30连击按钮（accent 互补色）
    Array.from(getPanelDocument().querySelectorAll('#bilivex-panel button[data-bilivex-like="1"]')).forEach((b) => {
      b.style.background = currentTheme.accentGradient;
    });

    Array.from(getPanelDocument().querySelectorAll('#bilivex-panel button[data-bilivex-favorites="1"]')).forEach((b) => {
      b.style.background = currentTheme.primary;
    });
    Array.from(getPanelDocument().querySelectorAll('#bilivex-panel button[data-bilivex-live-alert-manager="1"]')).forEach((b) => {
      b.style.background = currentTheme.primary;
    });
    Array.from(getPanelDocument().querySelectorAll('#bilivex-panel button[data-bilivex-more-settings="1"]')).forEach((b) => {
      b.style.background = currentTheme.primary;
    });
    Array.from(getPanelDocument().querySelectorAll('#bilivex-panel [data-bilivex-more-settings-menu="1"]')).forEach((menu) => {
      menu.style.background = 'rgba(' + currentTheme.primaryRgb + ',.05)';
      menu.style.borderColor = 'rgba(' + currentTheme.primaryRgb + ',.16)';
    });

    // 5. 弹幕已绑定的操作按钮（ensureFloatingDmOverlay 创建）
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

    // 6. 刷新反馈动画样式，使 +1 浮字使用新主题色
    bilivexAnimInjected = false;
    injectFloatingDmAnim();
  }

  // ---------- 评论区原生菜单 ----------
  const COMMENT_MENU_WAIT_DELAYS = [16, 50, 120, 240];
  let boundChatList = null;
  let commentMenuSequence = 0;
  let commentMenuWaitTimers = [];
  let mountedCommentMenuCleanup = null;

  function extractChatDanmakuText(item) {
    if (!item || typeof item.matches !== 'function' || !item.matches('.chat-item.danmaku-item')) return '';
    const dataText = item.dataset && item.dataset.danmaku;
    const fallbackNode = !String(dataText || '').trim()
      ? item.querySelector('.danmaku-content, .danmaku-item-right') : null;
    const text = String(dataText || (fallbackNode && fallbackNode.textContent) || '').trim();
    if (!text) return '';
    const replyMid = String(item.dataset && item.dataset.replymid || '0').trim();
    if (!replyMid || replyMid === '0') return text;
    const replyNode = item.querySelector('[data-uname]');
    const replyName = String(replyNode && (replyNode.dataset && replyNode.dataset.uname || replyNode.getAttribute('data-uname')) || '').trim();
    return replyName ? '@' + replyName + ' ' + text : '';
  }

  function isCommentMenuVisible(menu) {
    if (!menu || !menu.isConnected || menu.hidden || menu.getAttribute('aria-hidden') === 'true') return false;
    const ownerWindow = menu.ownerDocument && menu.ownerDocument.defaultView;
    if (!ownerWindow) return false;
    const style = ownerWindow.getComputedStyle(menu);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    const rect = menu.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function findCommentMenuMount(ownerDocument) {
    if (!ownerDocument) return null;
    const menus = Array.from(ownerDocument.querySelectorAll('.danmaku-menu')).filter(isCommentMenuVisible);
    if (menus.length !== 1) return null;
    const containers = Array.from(menus[0].children).filter((child) => child.classList.contains('none-select'));
    return containers.length === 1 ? { menu: menus[0], container: containers[0] } : null;
  }

  function clearCommentMenuWaitTimers() {
    commentMenuWaitTimers.splice(0).forEach((timer) => clearTimeout(timer));
  }

  function clearMountedCommentMenu() {
    const cleanup = mountedCommentMenuCleanup;
    mountedCommentMenuCleanup = null;
    if (cleanup) cleanup();
  }

  function resetCommentMenuState() {
    commentMenuSequence += 1;
    clearCommentMenuWaitTimers();
    clearMountedCommentMenu();
  }

  function closeCommentMenu(menu) {
    if (!menu || !menu.ownerDocument) return;
    const ownerDocument = menu.ownerDocument;
    const ownerWindow = ownerDocument.defaultView;
    if (!ownerWindow) return;
    ownerDocument.documentElement.dispatchEvent(new ownerWindow.MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: ownerWindow,
    }));
    if (menu.isConnected) menu.style.display = 'none';
  }

  function showCommentActionFeedback(ownerDocument, point, text) {
    if (!ownerDocument || !point || !text) return;
    const ownerWindow = ownerDocument.defaultView;
    const host = ownerDocument.fullscreenElement || ownerDocument.body || ownerDocument.documentElement;
    if (!ownerWindow || !host) return;
    injectFloatingDmAnim();
    const safeX = Math.max(52, Math.min(ownerWindow.innerWidth - 52, point.x));
    const safeY = Math.max(36, Math.min(ownerWindow.innerHeight - 12, point.y));
    const feedback = ownerDocument.createElement('div');
    feedback.className = 'bilivex-comment-action-fb';
    feedback.textContent = text;
    feedback.style.cssText = 'position:fixed;' +
      'left:' + safeX + 'px;top:' + safeY + 'px;transform:translate(-50%,-50%);' +
      `background:${currentTheme.feedbackGradient};` +
      'color:#fff;font-weight:700;font-size:13px;line-height:1;' +
      'padding:6px 12px;border-radius:14px;white-space:nowrap;' +
      `box-shadow:0 4px 12px ${currentTheme.feedbackShadow};` +
      'pointer-events:none;z-index:2147483647;' +
      'animation:bilivex-float-plus 1s ease-out forwards;';
    host.appendChild(feedback);
    setTimeout(() => feedback.remove(), 1100);
  }

  function createCommentMenuButton(ownerDocument, label, action, onActivate) {
    const button = ownerDocument.createElement('button');
    button.type = 'button';
    button.className = 'bilivex-comment-action clickable bili-link pointer';
    button.dataset.bilivexCommentAction = action;
    button.textContent = label;
    button.style.cssText = 'display:block;width:100%;box-sizing:border-box;border:0;margin:0;padding:10px;' +
      'background:transparent;color:inherit;font:inherit;text-align:start;cursor:pointer;';
    button.addEventListener('mouseenter', () => { button.style.background = 'rgba(255,255,255,.1)'; });
    button.addEventListener('mouseleave', () => { button.style.background = 'transparent'; });
    button.addEventListener('focus', () => { button.style.background = 'rgba(255,255,255,.1)'; });
    button.addEventListener('blur', () => { button.style.background = 'transparent'; });
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const rect = button.getBoundingClientRect();
      const point = event.clientX || event.clientY
        ? { x: event.clientX, y: event.clientY }
        : { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      try {
        onActivate(button, point);
      } finally {
        closeCommentMenu(button.closest('.danmaku-menu'));
      }
    });
    return button;
  }

  function keepCommentMenuInViewport(menu) {
    const ownerWindow = menu && menu.ownerDocument && menu.ownerDocument.defaultView;
    if (!ownerWindow) return () => {};
    const rect = menu.getBoundingClientRect();
    const viewportHeight = ownerWindow.innerHeight || menu.ownerDocument.documentElement.clientHeight || 0;
    const safeMargin = 8;
    const overflow = rect.bottom - (viewportHeight - safeMargin);
    if (!viewportHeight || overflow <= 0) return () => {};
    const currentTop = Number.parseFloat(menu.style.top || ownerWindow.getComputedStyle(menu).top);
    if (!Number.isFinite(currentTop)) return () => {};
    const originalTop = menu.style.top;
    const adjustedTop = Math.max(safeMargin, currentTop - overflow) + 'px';
    menu.style.top = adjustedTop;
    return () => {
      if (menu.isConnected && menu.style.top === adjustedTop) menu.style.top = originalTop;
    };
  }

  function mountCommentMenuActions(mount, capturedText) {
    const { menu, container } = mount;
    container.querySelectorAll('[data-bilivex-comment-action]').forEach((node) => node.remove());
    const buttons = [
      createCommentMenuButton(menu.ownerDocument, '评论+1', 'plus1', (button, point) => {
        runPlusButtonAction(button, () => sendPlusOne(capturedText), (result) => {
          if (result.status === 'confirmed') {
            showCommentActionFeedback(menu.ownerDocument, point, '✓ +1');
          }
        });
      }),
      createCommentMenuButton(menu.ownerDocument, '复制', 'copy', (_button, point) => {
        copyToClipboard(capturedText).then((copied) => {
          if (copied) showCommentActionFeedback(menu.ownerDocument, point, '✓ 已复制');
          else showToast('复制失败，请手动复制');
        });
      }),
      createCommentMenuButton(menu.ownerDocument, '收藏', 'favorite', async (_button, point) => {
        const result = await addFavorite(capturedText, menu.ownerDocument);
        if (result.status === 'added') showCommentActionFeedback(menu.ownerDocument, point, '✓ 已收藏');
        else if (result.status === 'associated') showCommentActionFeedback(menu.ownerDocument, point, '已关联当前直播间');
        else if (result.status === 'duplicate') showCommentActionFeedback(menu.ownerDocument, point, '已在收藏夹中');
        else showToast(result.status === 'limit' ? '收藏夹已达上限' : '该评论无文本内容');
      }),
    ];
    buttons.forEach((button) => container.appendChild(button));
    const restoreMenuPosition = keepCommentMenuInViewport(menu);

    const observer = new MutationObserver(() => {
      if (!isCommentMenuVisible(menu)) clearMountedCommentMenu();
    });
    observer.observe(menu, { attributes: true, attributeFilter: ['style', 'class', 'hidden', 'aria-hidden'] });
    if (menu.parentNode) observer.observe(menu.parentNode, { childList: true });
    mountedCommentMenuCleanup = () => {
      observer.disconnect();
      buttons.forEach((button) => { if (button.isConnected) button.remove(); });
      restoreMenuPosition();
    };
  }

  function scheduleCommentMenuMount(ownerDocument, capturedText) {
    const sequence = commentMenuSequence;
    const attempt = () => {
      if (sequence !== commentMenuSequence) return;
      const mount = findCommentMenuMount(ownerDocument);
      if (!mount) return;
      clearCommentMenuWaitTimers();
      mountCommentMenuActions(mount, capturedText);
    };
    COMMENT_MENU_WAIT_DELAYS.forEach((delay) => {
      commentMenuWaitTimers.push(setTimeout(attempt, delay));
    });
  }

  function attachDanmakuMenu(list) {
    if (!list) return;
    if (list === boundChatList && list.dataset.bilivexCommentMenuBound === '1') return;
    if (boundChatList && boundChatList !== list && typeof boundChatList._bilivexCommentMenuCleanup === 'function') {
      boundChatList._bilivexCommentMenuCleanup();
    }
    const onCommentClick = (event) => {
      const target = event.target && event.target.closest ? event.target : null;
      const item = target && target.closest('.chat-item.danmaku-item');
      if (!item || !list.contains(item)) return;
      const capturedText = extractChatDanmakuText(item);
      resetCommentMenuState();
      if (!capturedText) return;
      scheduleCommentMenuMount(item.ownerDocument, capturedText);
    };
    list.addEventListener('click', onCommentClick);
    list.dataset.bilivexCommentMenuBound = '1';
    boundChatList = list;
    list._bilivexCommentMenuCleanup = () => {
      list.removeEventListener('click', onCommentClick);
      delete list.dataset.bilivexCommentMenuBound;
      delete list._bilivexCommentMenuCleanup;
      if (boundChatList === list) boundChatList = null;
      resetCommentMenuState();
    };
  }

  // ---------- 弹幕悬停 +1 ----------

  // 弹幕容器就绪检测
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
  nativeSendPanelUrlRoom = roomIdFromUrl(panelWindow.location.href);
  function getPanelRoot() {
    const node = panelWindow._bilivexPanelController?.currentPanel;
    return panelDocument.getElementById('bilivex-panel') || (node?.isConnected ? node : null);
  }
  function getPanelDocument() { return getPanelRoot()?.ownerDocument || panelDocument; }

  const valueChangeListenerIds = [];
  const sharedRuntime = panelWindow.__bilivexRuntime || (panelWindow.__bilivexRuntime = {});
  if (!Object.prototype.hasOwnProperty.call(sharedRuntime, 'residentLayer')) sharedRuntime.residentLayer = null;
  if (!Object.prototype.hasOwnProperty.call(sharedRuntime, 'hoverOwner')) sharedRuntime.hoverOwner = null;

  function applyConfigChange(previous, next) {
    cfg = next;
    if (previous.floatDmPlus !== next.floatDmPlus) toggleFloatingDmEnabled();
    if (previous.theme !== next.theme) applyTheme();
    syncMoreSettingsInputs();
    if (previous.autoHighestQuality !== next.autoHighestQuality) resetPlayerEnhancementSchedule('quality');
    if (previous.autoWebMode !== next.autoWebMode) resetPlayerEnhancementSchedule('web');
    if (previous.autoHighestQuality !== next.autoHighestQuality || previous.autoWebMode !== next.autoWebMode) {
      schedulePlayerEnhancements();
    }
    if (previous.blockP2PUpload !== next.blockP2PUpload && document === panelDocument) {
      reloadPlayerForP2P(next.blockP2PUpload);
    }
  }



  try {
    if (typeof GM_addValueChangeListener === 'function') {
      const configListenerId = GM_addValueChangeListener('bilivex_cfg', (_key, _oldValue, _newValue, remote) => {
        if (!remote) return;
        const previous = cfg;
        applyConfigChange(previous, loadCfg());
      });
      const favoritesListenerId = GM_addValueChangeListener(FAVORITES_STORAGE_KEY, (_key, _oldValue, _newValue, remote) => {
        if (remote) { cfg = { ...cfg, favorites: getFavorites() }; favoriteLibraryChanged(); }
      });
      if (configListenerId != null) valueChangeListenerIds.push(configListenerId);
      if (favoritesListenerId != null) valueChangeListenerIds.push(favoritesListenerId);
    }
  } catch (e) {
    console.warn('[BiLivex] 配置同步监听不可用：' + String(e && e.message || e).slice(0, 160));
  }

  // ---------- 独轮车运行状态：顶层面板只持有一个任务 ----------
  const WHEEL_CONFIG_KEY = 'bilivex_wheel_cfg_v1';
  const wheelOwnerId = 'wheel-' + Date.now() + '-' + Math.random().toString(36).slice(2);
  let wheelConfig;
  try { wheelConfig = normalizeWheelConfig(JSON.parse(GM_getValue(WHEEL_CONFIG_KEY) || '{}')); }
  catch (e) { wheelConfig = normalizeWheelConfig({}); }
  let wheelState = { status: 'idle', reason: '尚未开始', triggered: 0, confirmed: 0, unconfirmed: 0 };
  let wheelToken = 0, wheelTimer = null, wheelDeadlineTimer = null, wheelHeartbeatTimer = null, wheelRoomStatusTimer = null, wheelRelease = null;
  let wheelSendController = null;
  let wheelEntry = null, wheelControl = null, wheelControlObserver = null;
  let wheelResumeTimer = null, wheelResumeRoom = '', favoriteRoomOnly = false;
  let wheelChatDocument = null;
  const wheelEmotionCatalog = new Map();
  const wheelEmotionExpanded = new Map();
  const composingInputs = sharedRuntime.composingInputs || (sharedRuntime.composingInputs = new WeakSet());
  let wheelLastToast = { reason: '', at: 0 };
  if (document === panelDocument) {
    sharedRuntime.openWheelPanel = openWheelPanel;
    sharedRuntime.favoriteLibraryChanged = favoriteLibraryChanged;
    sharedRuntime.bindWheelEntry = bindWheelEntry;
    normalizeStoredFavoriteLibrary();
  }

  function saveWheelConfig() {
    wheelConfig = normalizeWheelConfig(wheelConfig);
    GM_setValue(WHEEL_CONFIG_KEY, JSON.stringify(wheelConfig));
  }

  function updateWheelResume(room, mode) {
    let latest;
    try { latest = normalizeWheelConfig(JSON.parse(GM_getValue(WHEEL_CONFIG_KEY) || '{}')); }
    catch (e) { latest = normalizeWheelConfig({}); }
    if (mode && !latest.resume.enabled) { wheelConfig.resume = latest.resume; return; }
    if (mode) latest.resume.byRoom[room] = mode;
    else delete latest.resume.byRoom[room];
    GM_setValue(WHEEL_CONFIG_KEY, JSON.stringify(latest));
    wheelConfig.resume = latest.resume;
  }

  function canonicalRoom(root) {
    const doc = root || document, view = doc.defaultView;
    try {
      const live = view === window ? unsafeWindow.BilibiliLive : view.BilibiliLive;
      if (live && /^\d+$/.test(String(live.ROOMID || ''))) return String(live.ROOMID);
      const node = doc.querySelector('[data-room-id], [data-roomid]');
      const id = node && (node.getAttribute('data-room-id') || node.getAttribute('data-roomid'));
      if (/^\d+$/.test(id || '')) return id;
      // URL 仅作普通长号兜底；短号未解析成功时失败关闭。
      const urlRoom = roomIdFromUrl(view.location.href);
      return urlRoom.length >= 5 ? urlRoom : '';
    } catch (e) { return ''; }
  }

  function currentWheelRoom() {
    const input = wheelChatDocument ? wheelChatDocument.querySelector('textarea.chat-input, input.chat-input') : findChatInput();
    return canonicalRoom(input ? input.ownerDocument : document);
  }

  function strictWheelControls() {
    if (wheelChatDocument) {
      try { const frame = wheelChatDocument.defaultView.frameElement; if (frame && !frame.isConnected) return null; } catch (e) { return null; }
    }
    const input = wheelChatDocument ? Array.from(wheelChatDocument.querySelectorAll('textarea.chat-input, input.chat-input, .chat-control-panel textarea')).find(node => !node.disabled && node.getBoundingClientRect().width > 0) : findChatInput();
    if (!input || !input.isConnected || input.readOnly) return null;
    const control = input.closest('.chat-control-panel, #fullscreen-danmaku-vm, .chat-input-outer, .chat-input-panel');
    if (!control) return null;
    const buttons = [...new Set(CHAT_SEND_SELECTORS.flatMap(selector => Array.from(control.querySelectorAll(selector))))].filter(button => isEnabledChatSendButton(button, input) && button.getBoundingClientRect().width > 0);
    if (buttons.length !== 1 || buttons[0].ownerDocument !== input.ownerDocument) return null;
    return { input, button: buttons[0], control, room: canonicalRoom(input.ownerDocument) };
  }

  function wheelNotify(reason) {
    if (wheelLastToast.reason !== reason || Date.now() - wheelLastToast.at >= 5000) {
      wheelLastToast = { reason, at: Date.now() }; showToast(reason);
    }
  }

  function wheelRuntimeKey(room) { return 'bilivex_wheel_runtime_v1_' + room; }

  function wheelPublish() {
    if (!wheelState.room || !wheelRelease) return;
    GM_setValue(wheelRuntimeKey(wheelState.room), JSON.stringify({ ownerId: wheelOwnerId, mode: wheelState.mode, status: wheelState.status, startedAt: wheelState.startedAt, updatedAt: Date.now(), nextSendAt: wheelState.nextSendAt || 0 }));
  }

  function stopWheel(reason, preserveResume) {
    wheelToken += 1;
    wheelSendController?.abort();
    [wheelTimer, wheelDeadlineTimer, wheelHeartbeatTimer, wheelResumeTimer].forEach(timer => clearTimeout(timer));
    wheelTimer = wheelDeadlineTimer = wheelHeartbeatTimer = wheelResumeTimer = null;
    if (wheelRelease) {
      const release = wheelRelease; wheelRelease = null;
      try { GM_setValue(wheelRuntimeKey(wheelState.room), ''); } catch (e) {}
      finally { release(); }
    }
    if (!preserveResume && wheelState.room) { try { updateWheelResume(wheelState.room, ''); } catch (e) {} }
    wheelState = { ...wheelState, status: /异常|未确认|不可用|禁言|失败/.test(reason || '') ? 'error' : 'idle', reason: reason || '已手动停止', nextSendAt: 0 };
    renderWheelStatus();
  }

  function stopWheelForRoomChange() {
    stopWheel('已换房，独轮车已停止', wheelConfig.resume.enabled);
  }

  function wheelSnapshot() {
    const controls = strictWheelControls();
    if (!controls || !controls.room) throw new Error('暂无法确定直播间或原生发送控件');
    const mode = wheelConfig.activeSource;
    const tail = getTailText();
    const nativeLimit = Number(controls.input.getAttribute('maxlength'));
    const limit = nativeLimit > 1 ? Math.min(200, nativeLimit) : 20;
    const actualLimit = mode === 'text' && wheelConfig.text.maxLength !== 'auto' ? Math.min(limit, wheelConfig.text.maxLength) : limit;
    const emotionIds = wheelConfig.emotion.selectedByRoom[controls.room] || [];
    const emotionCatalog = new Map((wheelEmotionCatalog.get(controls.room) || []).map(item => [item.id, item]));
    if (mode === 'emotion' && !wheelEmotionCatalog.has(controls.room)) throw new Error('正在读取当前直播间表情，请稍候');
    if (mode === 'emotion' && emotionIds.some(id => !emotionCatalog.has(id))) throw new Error('所选表情在当前直播间不可用，请刷新后重新选择');
    let favoriteItems = [];
    if (mode === 'text' && wheelConfig.text.favoriteIds.length) {
      const library = readFavoriteLibrary();
      const byId = new Map(library.items.map(item => [item.id, item]));
      const missing = wheelConfig.text.favoriteIds.filter(id => !byId.has(id));
      if (missing.length) throw new Error('独轮车序列中的收藏已被删除，请在收藏列表中移除');
      favoriteItems = wheelConfig.text.favoriteIds.map(id => byId.get(id));
    }
    const textSources = mode === 'text' ? [wheelConfig.text.content, ...favoriteItems.map(item => item.text)].filter(text => String(text).trim()) : [];
    const textMessages = mode === 'text' ? textSources.flatMap(text => compileWheelText(text, actualLimit, tail)) : [];
    if (textMessages.length > 5000) throw new Error('切分后的内容过多，请缩短文字');
    const groups = mode === 'text' ? [{ id: 'text', ...wheelConfig.text, messages: textMessages, cursor: 0 }] : [{
      id: 'emotion', ...wheelConfig.emotion,
      messages: emotionIds.map(id => ({ ...decodeWheelEmotionId(id), label: (emotionCatalog.get(id) || {}).label || '房间专属表情', inputText: (emotionCatalog.get(id) || {}).inputText || '' })).filter(message => message.type), cursor: 0,
    }];
    if (!groups[0].messages.length) throw new Error(mode === 'emotion' ? '请先选择至少一个表情' : '请先准备有效内容');
    return { room: controls.room, mode, groups, groupIndex: 0, timeLimitSec: wheelConfig[mode].timeLimitSec, limit: actualLimit, compatibleLimit: !(nativeLimit > 1), favoriteItems: favoriteItems.map(item => ({ id: item.id, text: item.text })) };
  }

  function favoriteLibraryChanged() {
    if (document !== panelDocument && sharedRuntime.favoriteLibraryChanged) { sharedRuntime.favoriteLibraryChanged(); return; }
    if (wheelRelease && wheelState.mode === 'text' && Array.isArray(wheelState.favoriteItems) && wheelState.favoriteItems.length) {
      let changed = false;
      try {
        const current = new Map(readFavoriteLibrary().items.map(item => [item.id, item.text]));
        changed = wheelState.favoriteItems.some(item => current.get(item.id) !== item.text);
      } catch (e) { changed = true; }
      if (changed) stopWheel('独轮车序列中的收藏已变化，已停止');
    }
    const view = getPanelDocument().querySelector('.bilivex-favorites-view');
    if (view && view.style.display !== 'none' && view.dataset.mode !== 'edit') renderFavoritesView('browse');
    const wheelView = panelDocument.getElementById('bilivex-wheel-window');
    if (wheelView && !wheelView.hidden && !wheelRelease && wheelConfig.activeSource === 'text') openWheelPanel();
  }

  function waitWheelDelay(delay, ownerDocument, signal) {
    if (signal.aborted) return Promise.resolve(false);
    const ownerWindow = ownerDocument.defaultView || window;
    return new Promise(resolve => {
      let completed = false, timer = null;
      const finish = ready => {
        if (completed) return;
        completed = true;
        ownerWindow.clearTimeout(timer);
        signal.removeEventListener('abort', cancel);
        nativeSendCancellations.delete(cancel);
        ownerWindow.removeEventListener('pagehide', onPageHide);
        resolve(ready);
      };
      const cancel = () => finish(false);
      const onPageHide = () => stopWheel('聊天页面已离开，独轮车已停止', true);
      signal.addEventListener('abort', cancel, { once: true });
      nativeSendCancellations.add(cancel);
      ownerWindow.addEventListener('pagehide', onPageHide);
      timer = ownerWindow.setTimeout(() => finish(true), delay);
    });
  }

  async function sendWheelMessage(message, token, room) {
    const controller = new window.AbortController();
    let unbindInput = () => {};
    wheelSendController = controller;
    try { return await enqueuePlusSend(async () => {
      const epoch = nativeSendEpoch;
      if (token !== wheelToken || !wheelRelease) return { status: 'cancelled' };
      let controls = strictWheelControls();
      if (!controls) return { status: 'missing' };
      if (controls.room !== room) return { status: 'room-changed' };
      const input = controls.input;
      if (input.value || composingInputs.has(input)) return { status: 'user-busy' };
      let inputChanged = false, writing = true;
      const onInputChange = event => { if (!writing || event.isTrusted) inputChanged = true; };
      input.addEventListener('input', onInputChange); input.addEventListener('beforeinput', onInputChange);
      unbindInput = () => { input.removeEventListener('input', onInputChange); input.removeEventListener('beforeinput', onInputChange); };
      const payload = typeof message === 'string' ? { type: 'text', text: message } : message;
      if (payload && payload.type === 'emoji-special' && payload.hash) {
        const warning = Array.from(controls.control.querySelectorAll('[role=alert], .input-limit-anchor, .chat-input-warning')).find(node => node.getBoundingClientRect().width && /禁言|频繁|频率|稍后再发/.test(node.textContent));
        if (warning) return { status: 'restricted' };
        const before = new Set(input.ownerDocument.querySelectorAll('.my-self'));
        const clicked = await clickNativeSpecialEmoji(input.ownerDocument, payload.hash, 'wheel-' + token,
          () => token === wheelToken && !!wheelRelease && nativeSendCurrent(epoch) && input.isConnected && canonicalRoom(input.ownerDocument) === room && !inputChanged && !input.value && !composingInputs.has(input),
          delay => waitWheelDelay(delay, input.ownerDocument, controller.signal));
        writing = false;
        if (clicked.status === 'cancelled') return { status: token !== wheelToken ? 'cancelled' : inputChanged || input.value || composingInputs.has(input) ? 'user-busy' : 'room-changed' };
        if (clicked.status !== 'triggered') return { status: 'emotion-missing' };
        let emojiInputCleanupDone = false;
        const clearPendingEmojiInput = () => {
          if (emojiInputCleanupDone) return;
          emojiInputCleanupDone = true;
          if (!inputChanged && payload.inputText && input.value === payload.inputText && !composingInputs.has(input)) setReactLikeValue(input, '');
        };
        controller.signal.addEventListener('abort', clearPendingEmojiInput, { once: true });
        let emojiReady;
        try { emojiReady = await waitWheelDelay(80, input.ownerDocument, controller.signal); }
        finally { controller.signal.removeEventListener('abort', clearPendingEmojiInput); }
        if (!emojiReady) { clearPendingEmojiInput(); return { status: 'cancelled' }; }
        controls = strictWheelControls();
        if (token !== wheelToken || !wheelRelease || !nativeSendCurrent(epoch) || !controls || controls.input !== input || controls.room !== room) {
          clearPendingEmojiInput(); return { status: token !== wheelToken ? 'cancelled' : 'room-changed' };
        }
        // 普通表情点击后会写入输入框；房间专属表情通常由原生面板直接发送。
        if (inputChanged) return { status: 'user-busy' };
        if (input.value) {
          const inserted = input.value;
          if (!payload.inputText || inserted !== payload.inputText) return { status: 'user-busy' };
          input._bilivexWheelText = inserted;
          try { controls.button.click(); } finally { delete input._bilivexWheelText; }
        }
        const deadline = Date.now() + 2000;
        while (Date.now() < deadline && token === wheelToken) {
          if (Array.from(input.ownerDocument.querySelectorAll('.my-self')).some(node => !before.has(node))) return { status: 'confirmed' };
          if (!await waitWheelDelay(100, input.ownerDocument, controller.signal)) return { status: 'cancelled' };
        }
        return { status: 'unconfirmed' };
      }
      const text = String(payload && payload.text || '');
      if (!setReactLikeValue(input, text)) return { status: 'user-busy' };
      writing = false;
      // 用户重新输入相同文字后，待发任务也不再拥有该草稿。
      const clearPendingInput = () => { if (!inputChanged && input.value === text && !composingInputs.has(input)) setReactLikeValue(input, ''); };
      if (token !== wheelToken || !wheelRelease || !nativeSendCurrent(epoch)) {
        clearPendingInput(); return { status: 'cancelled' };
      }
      const ownerWindow = input.ownerDocument.defaultView || window;
      const frameReady = await new Promise(resolve => {
        let completed = false, frameId = null;
        const finish = ready => {
          if (completed) return;
          completed = true;
          nativeSendCancellations.delete(cancel);
          controller.signal.removeEventListener('abort', cancel);
          ownerWindow.removeEventListener('pagehide', onPageHide);
          if (!ready) {
            try { if (frameId !== null) ownerWindow.cancelAnimationFrame(frameId); clearPendingInput(); } catch (e) {}
          }
          resolve(ready);
        };
        const cancel = () => finish(false);
        const onPageHide = () => stopWheel('聊天页面已离开，独轮车已停止', true);
        // 暂停、页面离开和聊天子文档卸载都立即释放待发帧，不依赖浏览器恢复回调。
        controller.signal.addEventListener('abort', cancel, { once: true }); nativeSendCancellations.add(cancel);
        ownerWindow.addEventListener('pagehide', onPageHide);
        frameId = ownerWindow.requestAnimationFrame(() => finish(true));
      });
      if (!frameReady) return { status: 'cancelled' };
      controls = strictWheelControls();
      if (token !== wheelToken || !wheelRelease || !nativeSendCurrent(epoch) || !controls || controls.input !== input || controls.room !== room) {
        clearPendingInput();
        return { status: token !== wheelToken ? 'cancelled' : controls && controls.room !== room ? 'room-changed' : 'missing' };
      }
      if (inputChanged || input.value !== text || composingInputs.has(input)) return { status: 'user-busy' };
      const warning = Array.from(controls.control.querySelectorAll('[role=alert], .input-limit-anchor, .chat-input-warning')).find(node => node.getBoundingClientRect().width && /禁言|频繁|频率|稍后再发/.test(node.textContent));
      if (warning) { if (input.value === text) setReactLikeValue(input, ''); return { status: 'restricted' }; }
      const before = new Set(input.ownerDocument.querySelectorAll('.my-self'));
      input._bilivexWheelText = text;
      try { controls.button.click(); } finally { delete input._bilivexWheelText; }
      const deadline = Date.now() + 2000;
      while (Date.now() < deadline && token === wheelToken) {
        const newOwn = Array.from(input.ownerDocument.querySelectorAll('.my-self')).some(node => !before.has(node) && node.textContent.includes(text));
        // 空输入仅代表原生控件消耗文本；不把旧评论或任意输入变化当成确认。
        if (newOwn || input.value === '') return { status: 'confirmed' };
        if (!await waitWheelDelay(100, input.ownerDocument, controller.signal)) return { status: 'cancelled' };
      }
      return { status: 'unconfirmed' };
    }, controller.signal); }
    finally {
      unbindInput();
      controller.abort();
      if (wheelSendController === controller) wheelSendController = null;
    }
  }

  async function startWheel() {
    if (!wheelConfig.riskAccepted || wheelRelease || wheelState.status === 'starting') return;
    let snapshot;
    try { snapshot = wheelSnapshot(); } catch (error) { wheelState.reason = error.message; renderWheelStatus(); return; }
    const locks = panelWindow.navigator.locks;
    if (!locks) { wheelState.reason = '当前页面不支持跨标签互斥，无法开始'; renderWheelStatus(); return; }
    const token = ++wheelToken;
    wheelState = { ...snapshot, status: 'starting', reason: '正在检查运行权限', triggered: 0, confirmed: 0, unconfirmed: 0, failures: 0, missingAt: 0, startedAt: Date.now() };
    renderWheelStatus();
    // 独立房间锁比 GM 读后写租约可靠；锁会在标签页关闭时由浏览器自动释放。
    locks.request('bilivex-wheel-room-' + snapshot.room, { ifAvailable: true }, async lock => {
      if (token !== wheelToken) return;
      if (!lock) { stopWheel('该房间已在另一标签页运行'); return; }
      await locks.request('bilivex-wheel-room-index', () => {
        let rooms; try { rooms = JSON.parse(GM_getValue('bilivex_wheel_rooms_v1') || '[]'); } catch (e) { rooms = []; }
        GM_setValue('bilivex_wheel_rooms_v1', JSON.stringify([...new Set(rooms.filter(room => /^\d+$/.test(room)).concat(snapshot.room))].slice(-100)));
      });
      if (token !== wheelToken) return;
      await new Promise(resolve => {
        wheelRelease = resolve;
        wheelState.status = 'running'; wheelState.reason = '运行中';
        if (wheelConfig.resume.enabled) updateWheelResume(snapshot.room, snapshot.mode);
        if (snapshot.timeLimitSec) wheelDeadlineTimer = setTimeout(() => stopWheel('已达到运行时限'), Math.max(0, wheelState.startedAt + snapshot.timeLimitSec * 1000 - Date.now()));
        const heartbeat = () => {
          if (token !== wheelToken) return;
          if (currentWheelRoom() !== snapshot.room) { stopWheelForRoomChange(); return; }
          if (snapshot.timeLimitSec && Date.now() >= wheelState.startedAt + snapshot.timeLimitSec * 1000) { stopWheel('已达到运行时限'); return; }
          wheelPublish(); renderWheelStatus();
          wheelHeartbeatTimer = setTimeout(heartbeat, 5000);
        };
        heartbeat();
        scheduleWheel(token, 0);
      });
    }).catch(error => { if (token === wheelToken) stopWheel('运行失败：' + error.message); });
  }

  function scheduleWheel(token, delay) {
    if (token !== wheelToken || !wheelRelease) return;
    wheelState.nextSendAt = Date.now() + delay;
    renderWheelStatus();
    wheelTimer = setTimeout(async () => {
      if (token !== wheelToken || !wheelRelease) return;
      if (wheelState.timeLimitSec && Date.now() >= wheelState.startedAt + wheelState.timeLimitSec * 1000) { stopWheel('已达到运行时限'); return; }
      const group = wheelState.groups[wheelState.groupIndex];
      try {
        // 同账号跨房间自动任务共享串行锁与 5 秒点击间隔，手动 +1 不被限流。
        const result = await panelWindow.navigator.locks.request('bilivex-wheel-native-send', async () => {
          if (token !== wheelToken) return { status: 'cancelled' };
          const last = Number(GM_getValue('bilivex_wheel_last_send_v1')) || 0;
          if (Date.now() - last < 5000) return { status: 'cooldown' };
          const sent = await sendWheelMessage(group.messages[group.cursor], token, wheelState.room);
          if (['confirmed', 'unconfirmed'].includes(sent.status)) GM_setValue('bilivex_wheel_last_send_v1', Date.now());
          return sent;
        });
        if (token !== wheelToken) return;
        if (result.status === 'restricted') { stopWheel('原生控件提示禁言或发送频率限制，已停止'); return; }
        if (result.status === 'emotion-missing') { stopWheel('所选表情在当前直播间不可用，已停止'); return; }
        if (result.status === 'room-changed') { stopWheelForRoomChange(); return; }
        if (result.status === 'cancelled') return;
        if (['confirmed', 'unconfirmed'].includes(result.status)) {
          wheelState.triggered++; wheelState[result.status]++;
          wheelState.failures = result.status === 'unconfirmed' ? wheelState.failures + 1 : 0;
          group.cursor = (group.cursor + 1) % group.messages.length;
          wheelState.groupIndex = (wheelState.groupIndex + 1) % wheelState.groups.length;
          wheelState.missingAt = 0;
          if (wheelState.failures >= 2) { stopWheel('连续两次发送未确认，已停止'); return; }
        } else if (result.status === 'missing') {
          wheelState.missingAt = wheelState.missingAt || Date.now();
          if (Date.now() - wheelState.missingAt >= 15000) { stopWheel('原生控件持续不可用，已停止'); return; }
        }
        wheelState.status = ['user-busy', 'missing', 'cooldown'].includes(result.status) ? 'paused' : 'running';
        wheelState.reason = result.status === 'user-busy' ? '等待用户输入完成' : result.status === 'missing' ? '等待原生控件恢复' : result.status === 'cooldown' ? '等待发送间隔' : result.status === 'unconfirmed' ? '已触发，未确认结果' : '运行中';
        if (wheelState.status === 'paused') wheelNotify(wheelState.reason);
        scheduleWheel(token, wheelDelay(wheelState.groups[wheelState.groupIndex], Math.random));
      } catch (error) { if (token === wheelToken) stopWheel('发送异常，已停止：' + error.message); }
    }, delay);
  }

  async function prepareWheelResume(room, mode) {
    const token = wheelToken;
    wheelConfig.activeSource = mode;
    try {
      if (mode === 'emotion' && !wheelEmotionCatalog.has(room)) {
        const result = await discoverNativeEmoticons();
        if (result.room !== room) throw new Error('直播间已变化');
        wheelEmotionCatalog.set(room, result.items);
      }
      if (token !== wheelToken || wheelRelease || wheelResumeRoom !== room || currentWheelRoom() !== room) return;
      wheelSnapshot();
      openWheelPanel(); wheelState.reason = '3 秒后恢复，可点击暂停取消'; renderWheelStatus();
      wheelResumeTimer = setTimeout(() => { wheelResumeTimer = null; startWheel(); }, 3000);
    } catch (error) {
      if (token !== wheelToken || wheelResumeRoom !== room || currentWheelRoom() !== room) return;
      openWheelPanel(); wheelState.reason = '无法自动恢复：' + error.message; renderWheelStatus();
    }
  }

  function bindWheelEntry() {
    // 活动页的顶层和同源 iframe 都会运行脚本。轮椅入口必须只由顶层实例维护，
    // 否则两个控件观察器会在同一个发送栏中反复移动各自按钮，造成页面卡死。
    if (document !== panelDocument) {
      if (typeof sharedRuntime.bindWheelEntry === 'function') sharedRuntime.bindWheelEntry();
      return;
    }
    const controls = strictWheelControls();
    if (wheelEntry && (!controls || wheelEntry.parentElement !== controls.button.parentElement)) { wheelEntry.remove(); wheelEntry = null; }
    if (!controls) return;
    const { button, control } = controls;
    if (control !== wheelControl) {
      if (wheelControlObserver) wheelControlObserver.disconnect();
      wheelControl = control;
      wheelControlObserver = new MutationObserver(() => bindWheelEntry());
      wheelControlObserver.observe(control, { childList: true, subtree: true });
    }
    if (!wheelEntry) {
      wheelEntry = createWheelButton(button.ownerDocument, false);
      const rect = button.getBoundingClientRect();
      wheelEntry.style.cssText = 'display:inline-flex;vertical-align:middle;align-items:center;justify-content:center;box-sizing:border-box;padding:0;margin-right:5px;border:1px solid transparent;border-radius:50%;background:transparent;cursor:pointer;position:relative;';
      wheelEntry.style.height = rect.height + 'px';
      wheelEntry.style.width = rect.height + 'px';
      wheelEntry.style.minWidth = rect.height + 'px';
      wheelEntry.firstElementChild.width = Math.max(16, Math.round(rect.height * .72));
      wheelEntry.firstElementChild.height = Math.max(16, Math.round(rect.height * .72));
      button.before(wheelEntry);
    }
    if (wheelEntry.nextElementSibling !== button) button.before(wheelEntry);
    if (wheelRelease && currentWheelRoom() !== wheelState.room) stopWheelForRoomChange();
    if (document === panelDocument && !wheelRelease && wheelConfig.resume.enabled && controls.room && wheelResumeRoom !== controls.room) {
      wheelResumeRoom = controls.room;
      const mode = wheelConfig.resume.byRoom[controls.room];
      if (mode && wheelConfig.riskAccepted) prepareWheelResume(controls.room, mode);
    }
  }

  function disposeWheel() {
    if (wheelRoomStatusTimer) clearTimeout(wheelRoomStatusTimer);
    wheelRoomStatusTimer = null;
    if (document === panelDocument) { const view = panelDocument.getElementById('bilivex-wheel-window'); if (view) view.remove(); const style = panelDocument.getElementById('bilivex-wheel-window-style'); if (style) style.remove(); }
    stopWheel('页面已离开', true);
    if (wheelControlObserver) wheelControlObserver.disconnect();
    if (wheelEntry) wheelEntry.remove();
    wheelControlObserver = wheelControl = wheelEntry = null;
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
  function computeFloatingVisibility(itemRect, playerRect, point) {
    if (!itemRect || !playerRect) return null;
    const values = [
      itemRect.left, itemRect.top, itemRect.right, itemRect.bottom,
      playerRect.left, playerRect.top, playerRect.right, playerRect.bottom
    ];
    if (!values.every(Number.isFinite) || itemRect.right <= itemRect.left || itemRect.bottom <= itemRect.top ||
        playerRect.right <= playerRect.left || playerRect.bottom <= playerRect.top) return null;
    const left = Math.max(itemRect.left, playerRect.left);
    const right = Math.min(itemRect.right, playerRect.right);
    const top = Math.max(itemRect.top, playerRect.top);
    const bottom = Math.min(itemRect.bottom, playerRect.bottom);
    if (right <= left || bottom <= top) return null;
    const clipTop = Math.max(0, playerRect.top - itemRect.top);
    const clipRight = Math.max(0, itemRect.right - playerRect.right);
    const clipBottom = Math.max(0, itemRect.bottom - playerRect.bottom);
    const clipLeft = Math.max(0, playerRect.left - itemRect.left);
    const edgeEpsilon = 0.5;
    return {
      visibleRect: { left, right, top, bottom, width: right - left, height: bottom - top },
      clipTop,
      clipRight,
      clipBottom,
      clipLeft,
      fullyVisible: clipTop <= edgeEpsilon && clipRight <= edgeEpsilon &&
        clipBottom <= edgeEpsilon && clipLeft <= edgeEpsilon,
      enteringFromRight: clipRight > edgeEpsilon,
      pointerInside: !!point && Number.isFinite(point.x) && Number.isFinite(point.y) &&
        point.x >= left && point.x <= right && point.y >= top && point.y <= bottom
    };
  }
  // 弹幕的指针坐标始终以顶层页面为准；仅跨 iframe 的弹幕需要换算位置，
  // 顶层操作栏本身不再叠加偏移，保证鼠标停在操作栏上时悬停不会丢失。
  function getFloatingUiRect(el) {
    if (!el || typeof el.getBoundingClientRect !== 'function') return null;
    const rect = el.getBoundingClientRect();
    return el.ownerDocument === uiDocument ? toUiRect(rect) : rect;
  }
  function getUiHost() {
    if (!panelDocument.fullscreenElement) sharedRuntime.panelLeavingDocument = null;
    if (sharedRuntime.panelLeavingDocument === uiDocument) return panelDocument.body || panelDocument.documentElement;
    const localFullscreen = uiDocument.fullscreenElement;
    if (localFullscreen && localFullscreen.nodeType === 1 && localFullscreen.tagName !== 'IFRAME') return localFullscreen;
    const topFullscreen = panelDocument.fullscreenElement || localFullscreen;
    if (topFullscreen && topFullscreen.nodeType === 1) {
      // iframe 内元素进入原生全屏时，父文档的 fullscreenElement 是 iframe 本身；
      // 展示层必须放进 iframe 文档，顶层与子页实例才能落到同一宿主。
      if (topFullscreen.tagName === 'IFRAME') {
        try {
          const fullscreenDocument = topFullscreen.contentDocument;
          if (fullscreenDocument) {
            if (fullscreenDocument === sharedRuntime.panelLeavingDocument) return panelDocument.body || panelDocument.documentElement;
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

  function ensureFloatingUiGuardStyle(ownerDocument) {
    if (!ownerDocument) return null;
    let style = ownerDocument.getElementById('bilivex-floating-ui-guard-style');
    if (style) return style;
    style = ownerDocument.createElement('style');
    style.id = 'bilivex-floating-ui-guard-style';
    // 活动页网页模式可能隐藏附加展示层；只锁定 visibility，弹幕副本仍按画面边界裁剪，
    // opacity 继续继承原弹幕。
    style.textContent = '#bilivex-dm-resident,.bilivex-float-highlight,.bilivex-float-actions{visibility:visible!important}';
    (ownerDocument.head || ownerDocument.documentElement).appendChild(style);
    return style;
  }

  function getResidentLayer() {
    const host = getUiHost();
    if (!host) return null;
    ensureFloatingUiGuardStyle(host.ownerDocument || panelDocument);
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
      if (document === panelDocument) { const panel = getPanelRoot(); if (panel) ensurePanelVisible(panel, host); }
      ['bilivex-toast'].forEach((id) => {
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

  // 增强单条弹幕：添加悬停 +1 按钮
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
        const hoverGeometry = computeFloatingVisibility(rect, playerRect);
        if (!hoverGeometry) {
          restoreFloatingSource(item, hoverId);
          return null;
        }
        const clipInset = 'inset(' + hoverGeometry.clipTop + 'px ' + hoverGeometry.clipRight + 'px ' +
          hoverGeometry.clipBottom + 'px ' + hoverGeometry.clipLeft + 'px)';
        clone.style.setProperty('clip-path', clipInset, 'important');
        clone.style.setProperty('-webkit-clip-path', clipInset, 'important');
        clone._bilivexEnteringFromRight = hoverGeometry.enteringFromRight;
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
        // 3) 操作组：部分进入的弹幕在左侧展开；完整弹幕仍右侧优先。
        const cloneHost = residentHost;
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
        cFav.addEventListener('click', async (e) => {
          e.stopPropagation(); e.preventDefault();
          const payload = clone._bilivexPayload || extractFloatingDmPayload(item);
          const result = await addFavorite(payload.type === 'emoji-special' ? '' : payload.text, item.ownerDocument);
          showToast(result.status === 'added' ? '已收藏' : result.status === 'associated' ? '已关联当前直播间' : result.status === 'duplicate' ? '已在收藏夹中' : result.status === 'limit' ? '收藏夹已达上限' : '该弹幕无文本内容');
        });
        actionGroup.appendChild(cBtn);
        actionGroup.appendChild(cFav);
        clone._bilivexFloatBtn = actionGroup;
        clone._bilivexFloatActionGroup = actionGroup;
        clone._bilivexFloatActionHost = actionHost;
        actionGroup._bilivexFloatClone = clone;
        ensureFloatingUiGuardStyle(overlayDocument);
        // 悬停副本始终进入画面裁剪层；未进入或已离开画面的内容不得恢复到评论区一侧。
        cloneHost.appendChild(clone);
        // 操作栏与悬停弹幕同属当前展示层，保证始终完整可见、不被遮挡。
        actionHost.appendChild(actionGroup);
        const positionActionGroup = () => {
          const currentRect = clone.getBoundingClientRect();
          const currentPlayerRectUi = getPlayerRect();
          const currentPlayerRect = overlayDocument === uiDocument && panelDocument !== uiDocument && currentPlayerRectUi
            ? toLocalRect(currentPlayerRectUi)
            : currentPlayerRectUi;
          const currentGeometry = computeFloatingVisibility(currentRect, currentPlayerRect);
          if (!currentGeometry) {
            // SPA 换房或播放器重建的中间态可能暂时没有有效画面范围；此时先失败关闭，
            // 再由保活检查成对释放副本、操作栏和源弹幕状态，避免控件悬在直播内容外。
            clone.style.setProperty('visibility', 'hidden', 'important');
            actionGroup.style.display = 'none';
            return false;
          }
          clone.style.setProperty('visibility', 'visible', 'important');
          actionGroup.style.display = 'flex';
          const currentClip = 'inset(' + currentGeometry.clipTop + 'px ' + currentGeometry.clipRight + 'px ' +
            currentGeometry.clipBottom + 'px ' + currentGeometry.clipLeft + 'px)';
          clone.style.setProperty('clip-path', currentClip, 'important');
          clone.style.setProperty('-webkit-clip-path', currentClip, 'important');
          clone._bilivexEnteringFromRight = currentGeometry.enteringFromRight;
          const actionRect = actionGroup.getBoundingClientRect();
          const viewportWidth = overlayDocument.documentElement.clientWidth || overlayDocument.defaultView.innerWidth;
          const viewportHeight = overlayDocument.documentElement.clientHeight || overlayDocument.defaultView.innerHeight;
          const actionWidth = actionRect.width;
          const actionHeight = actionRect.height;
          const rightLeft = currentRect.right - actionJoin;
          const leftLeft = currentRect.left + actionJoin - actionWidth;
          const minLeft = leftLimit;
          const maxLeft = Math.max(minLeft, viewportWidth - actionWidth);
          // 从右侧进入且尚未完整展示时固定放左侧；其他弹幕仍按右侧优先。
          let actionLeft;
          if (clone._bilivexEnteringFromRight) {
            actionLeft = Math.min(maxLeft, Math.max(minLeft, leftLeft));
          } else if (rightLeft >= minLeft && rightLeft <= maxLeft) {
            actionLeft = rightLeft;
          } else if (leftLeft >= minLeft && leftLeft <= maxLeft) {
            actionLeft = leftLeft;
          } else {
            actionLeft = Math.min(maxLeft, Math.max(minLeft, currentRect.left));
          }
          let actionTop = currentRect.top + (currentRect.height - actionHeight) / 2;
          if (!clone._bilivexEnteringFromRight && rightLeft > maxLeft && leftLeft < minLeft) {
            const belowTop = currentRect.bottom - actionJoin;
            const aboveTop = currentRect.top + actionJoin - actionHeight;
            actionTop = belowTop + actionHeight <= viewportHeight ? belowTop : Math.max(topLimit, aboveTop);
          }
          actionTop = Math.min(Math.max(topLimit, actionTop), Math.max(topLimit, viewportHeight - actionHeight));
          actionLeft = Math.min(maxLeft, Math.max(minLeft, actionLeft));
          actionTop = Math.min(Math.max(topLimit, actionTop), Math.max(topLimit, viewportHeight - actionHeight));
          actionGroup.style.left = actionLeft + 'px';
          actionGroup.style.top = actionTop + 'px';
          return true;
        };
        clone._bilivexFloatReposition = positionActionGroup;
        if (!positionActionGroup()) {
          actionGroup.remove();
          clone.remove();
          restoreFloatingSource(item, hoverId);
          removeEmptyResidentLayer();
          return null;
        }
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
      if (!computeFloatingVisibility(rect, playerRect)) return false;
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

  // ==================== 弹幕悬停检测 ====================
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
      if (!cfg.floatDmPlus || mediaSourceIsCovered()) return null;
      const local = this.getLocalPoint(px, py);
      const playerRectUi = getPlayerRect();
      if (!playerRectUi) return null;
      const playerRectLocal = playerRectUi && panelDocument !== uiDocument
        ? toLocalRect(playerRectUi)
        : playerRectUi;
      try {
        const el = document.elementFromPoint(local.x, local.y);
        const item = el ? this.findDm(el) : null;
        const itemRect = item ? item.getBoundingClientRect() : null;
        const hoverGeometry = itemRect
          ? computeFloatingVisibility(toUiRect(itemRect), playerRectUi, { x: px, y: py })
          : null;
        if (item && !item.classList.contains('bili-danmaku-x-disable') &&
            !isBilivexReleasingDm(item) && hoverGeometry && hoverGeometry.pointerInside &&
            hasActiveFloatingDmAnimation(item, playerRectLocal, itemRect)) {
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
        const hoverGeometry = computeFloatingVisibility(r, playerRectUi, { x: px, y: py });
        if (!hoverGeometry || !hoverGeometry.pointerInside) continue;
        if (!hasActiveFloatingDmAnimation(d, playerRectLocal, localRect)) continue;
        if (!d.dataset.bilivexFloatInited) ensureFloatingDmOverlay(d);
        if (typeof d._bilivexFloatOnEnter !== 'function') continue;
        return d;
      }
      return null;
    },

    check() {
      if (!cfg.floatDmPlus || mediaSourceIsCovered()) {
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
          if ([panelEl, sourceEl].some((el) => el && el.closest && el.closest('#bilivex-panel'))) {
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
          const actionGroup = cur._bilivexFloatActionGroup || cur._bilivexFloatBtn || cur.querySelector('.bilivex-float-actions');
          const visualRect = getFloatingUiRect(cur);
          const playerRect = getPlayerRect();
          const visibleGeometry = computeFloatingVisibility(visualRect, playerRect);
          const visibleRect = visibleGeometry ? visibleGeometry.visibleRect : null;
          const actionRect = actionGroup && actionGroup.isConnected ? getFloatingUiRect(actionGroup) : null;
          const inRect = (r) => r && px >= r.left && px <= r.right && py >= r.top && py <= r.bottom;
          const overActionElement = [panelEl, sourceEl].some((el) => el &&
            (el === actionGroup || (actionGroup && actionGroup.contains(el))));
          if (overActionElement) {
            this.cancelPendingLeave();
            return;
          }
          // 只有画面内实际可见的副本和完整操作组是热区；画面外的隐藏文字不得保活。
          if (inRect(visibleRect) || inRect(actionRect)) {
            this.cancelPendingLeave();
            return;
          }
          if (actionRect && visibleRect) {
            const itemRect = visibleRect;
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
          if (typeof item._bilivexFloatReposition === 'function' && item._bilivexFloatReposition() === false) {
            this.leave(item);
            return;
          }
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
          if (typeof item._bilivexFloatReposition === 'function' && item._bilivexFloatReposition() === false) {
            this.leave(item);
            return;
          }
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

  // 弹幕 +1 开关切换：开关关闭时解除已绑定弹幕的监听器
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
  let activeLikeCancel = null;

  function setPanelLikeBusy(busy) {
    const button = getPanelDocument().querySelector('#bilivex-panel button[data-bilivex-like="1"]');
    if (!button) return;
    button.disabled = busy;
    button.style.opacity = busy ? '0.6' : '';
    button.style.cursor = busy ? 'wait' : 'pointer';
  }

  function stopActiveLike(silent, reason) {
    if (typeof activeLikeCancel === 'function') activeLikeCancel(!!silent, reason || '任务已停止');
  }

  function bindLike() {
    const btn = findLikeButton();
    if (!btn || btn.dataset.bilivexLikeBound) return;
    btn.dataset.bilivexLikeBound = '1';
    // 不替换原点击行为，仅在面板提供快捷入口
  }

  function findLikeButton(root = document, visited = new Set()) {
    // 跨域 iframe 的 contentDocument 为 null；不能退回顶层文档重新递归。
    if (!root || visited.has(root)) return null;
    visited.add(root);
    const doc = root;
    const local = doc.querySelector('.like-btn');
    if (local) return local;
    for (const frame of doc.querySelectorAll('iframe')) {
      try {
        const button = findLikeButton(frame.contentDocument, visited);
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
    setPanelLikeBusy(true);

    let triggeredCount = 0;
    let feedbackCount = 0;
    let stopped = false;
    let stopReason = '';
    let timer = null;
    let waitBudget = 30000;
    const roomId = canonicalRoom(initial.ownerDocument);
    let cancelLikeRun = null;

    const finish = (silent) => {
      if (timer !== null) { clearTimeout(timer); timer = null; }
      liking = false;
      setPanelLikeBusy(false);
      if (activeLikeCancel === cancelLikeRun) activeLikeCancel = null;
      if (silent) return;
      if (stopped) {
        showToast('已触发 ' + triggeredCount + ' 次点赞，其中观察到 ' + feedbackCount + ' 次界面反馈（' + stopReason + '）');
      } else if (triggeredCount >= LIKE_COUNT) {
        showToast('已触发 30 次点赞，其中观察到 ' + feedbackCount + ' 次界面反馈');
      } else {
        showToast('已触发 ' + triggeredCount + ' 次点赞，其中观察到 ' + feedbackCount + ' 次界面反馈');
      }
    };
    cancelLikeRun = (silent, reason) => {
      stopped = true;
      stopReason = reason || '任务已停止';
      finish(silent);
    };
    activeLikeCancel = cancelLikeRun;

    const tick = () => {
      timer = null;
      if (document.hidden) {
        timer = setTimeout(tick, 500);
        return;
      }
      const cur = findLikeButton();
      if (!cur) { stopped = true; stopReason = '按钮已消失'; finish(); return; }
      if (roomId && canonicalRoom(cur.ownerDocument) !== roomId) {
        stopped = true; stopReason = '直播间已变化'; finish(); return;
      }
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
  function ensurePanelGuardStyle() {
    let style = panelDocument.getElementById('bilivex-panel-guard-style');
    if (style) return style;
    style = panelDocument.createElement('style');
    style.id = 'bilivex-panel-guard-style';
    // 活动页进入网页模式时会给 body 的附加子节点写入 visibility:hidden。
    // 样式表中的 important 规则用于抵抗这次外部内联改写，面板自身没有隐藏状态。
    style.textContent = '#bilivex-panel{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;z-index:2147483647!important}';
    (panelDocument.head || panelDocument.documentElement).appendChild(style);
    return style;
  }

  function ensurePanelVisible(panel, host) {
    if (!panel || !host) return false;
    ensurePanelGuardStyle();
    const changingDocument = panel.ownerDocument !== host.ownerDocument;
    if (changingDocument) sharedRuntime.cancelPanelMotion?.(panel);
    if (panel.parentNode !== host) host.appendChild(panel);
    if (changingDocument && document === panelDocument) schedulePanelEventRestore(panel);
    const panelStyle = sharedRuntime.panelStyle;
    if (panelStyle && panelStyle.ownerDocument !== host.ownerDocument) (host.ownerDocument.head || host.ownerDocument.documentElement).appendChild(panelStyle);
    if (document === panelDocument && panelController.dragBound && panelController.dragDocument !== panel.ownerDocument) bindDragHandlers();
    panel.style.position = 'fixed';
    panel.style.setProperty('z-index', '2147483647', 'important');
    panel.style.display = panel.dataset.uiVersion === '3' ? 'flex' : 'block';
    panel.style.visibility = 'visible';
    panel.style.opacity = '1';
    panel.style.pointerEvents = 'auto';
    // 尺寸过渡期间只维护宿主与可见性，结束后再校正边界，避免逐帧写入位置配置。
    if (panel.dataset.panelMotion === 'true') return panel.isConnected;
    if (cfg.panelCollapsed) {
      panel.style.width = COLLAPSED_BTN_SIZE + 'px';
      panel.style.height = COLLAPSED_BTN_SIZE + 'px';
    } else {
      panel.style.width = Math.min(360, panelWindow.innerWidth - 16) + 'px';
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

  function openLiveAlertManager() {
    if (!liveAlertController || !liveAlertRoomPage || !liveAlertTopPage) return;
    if (panelUi.detail !== 'following') { openPanelFeature('following'); return; }
    const panel = getPanelRoot();
    if (!panel || panelDocument.getElementById('bilivex-live-alert-manager')) return;
    const body = panel.querySelector('[data-panel-view]') || panel.querySelector('[data-panel-content]');
    if (!body) return;
    const view = panelDocument.createElement('section');
    view.id = 'bilivex-live-alert-manager';
    view.style.cssText = 'box-sizing:border-box;width:100%;max-height:min(70vh,550px);padding:12px;background:#fff;color:#222;display:flex;flex-direction:column;gap:8px;border-radius:0 0 12px 12px;';
    const header = panelDocument.createElement('div');
    header.style.cssText = 'display:flex;align-items:center;justify-content:space-between;';
    const heading = panelDocument.createElement('strong'); heading.textContent = '特别关注主播';
    const back = panelDocument.createElement('button'); back.type = 'button'; back.textContent = '返回';
    const status = panelDocument.createElement('div'); status.setAttribute('aria-live', 'polite'); status.style.cssText = 'font-size:11px;color:#667;';
    const search = panelDocument.createElement('input'); search.type = 'search'; search.placeholder = '搜索昵称或 UID'; search.setAttribute('aria-label', '搜索主播昵称或 UID');
    search.style.cssText = 'box-sizing:border-box;width:100%;padding:6px;border:1px solid #ccd;border-radius:6px;';
    const actions = panelDocument.createElement('div'); actions.style.cssText = 'display:flex;gap:4px;flex-wrap:wrap;';
    const list = panelDocument.createElement('div'); list.style.cssText = 'min-height:0;max-height:270px;overflow-y:auto;flex:1;border:1px solid #eee;border-radius:6px;';
    const footer = panelDocument.createElement('div'); footer.style.cssText = 'display:flex;gap:8px;justify-content:space-between;';
    const makeButton = (label, callback) => {
      const button = panelDocument.createElement('button'); button.type = 'button'; button.textContent = label;
      button.style.cssText = 'border:1px solid #ccd;background:#fff;border-radius:6px;padding:5px 7px;cursor:pointer;';
      listenPanelNode(button, 'click', callback); return button;
    };
    let cfg = liveAlertController.config(), a = liveAlertController.account(cfg);
    let original = a ? [...a.selectedUids] : [];
    let draft = new Set(original);
    let syncing = false;
    let medalLevels = {}, medalState = 'loading';
    let draftRevision = cfg && cfg.revision, draftUid = cfg && cfg.activeAccountUid, draftEpoch = cfg && cfg.activeAccountEpoch;
    const draftChanged = () => draft.size !== original.length || original.some(uid => !draft.has(uid));
    const restored = panelUi.followingDraft;
    if (restored && restored.uid === draftUid && restored.epoch === draftEpoch) {
      original = [...restored.original]; draft = new Set(restored.selected); draftRevision = restored.revision; search.value = restored.query;
    }
    const capture = () => {
      panelUi.followingDraft = { original: [...original], selected: [...draft], revision: draftRevision, uid: draftUid, epoch: draftEpoch, query: search.value }; refreshPanelStatus();
    };
    panelUi.captureFollowing = capture;
    listenPanelNode(back, 'click', panelBack);
    function render() {
      cfg = liveAlertController.config(); a = liveAlertController.account(cfg);
      if (cfg?.activeAccountUid !== draftUid || cfg?.activeAccountEpoch !== draftEpoch) { status.textContent = '账号已变化，旧草稿不可保存；请返回后重新打开'; list.replaceChildren(); save.disabled = true; refresh.disabled = true; return; }
      save.disabled = !!panelUi.followingSaving; refresh.disabled = syncing || !!panelUi.followingSaving; cancel.disabled = !!panelUi.followingSaving; actions.querySelectorAll('button').forEach(button => { button.disabled = !!panelUi.followingSaving; });
      const entries = Object.values(a && a.streamers || {}).filter(item => item && liveAlertUid(item.uid));
      const currentRoomId = canonicalRoom(panelDocument) || roomIdFromUrl(panelWindow.location.href);
      const q = search.value.trim().toLocaleLowerCase();
      const filtered = sortLiveAlertStreamers(entries.filter(item => !q || String(item.uid).includes(q) || String(item.uname || '').toLocaleLowerCase().includes(q)), currentRoomId, medalLevels);
      status.textContent = (draftChanged() ? '未保存 · ' : '') + `已选择 ${draft.size} 位 / 共 ${entries.length} 位` + (a && a.syncedAt ? ' · 更新于 ' + new Date(a.syncedAt).toLocaleString() : ' · 尚未同步') + (a && a.syncComplete === false ? ' · 名单可能不完整，旧选择已保留' : '') + (medalState === 'loading' ? ' · 正在读取灯牌等级' : medalState === 'partial' ? ' · 灯牌资料可能不完整' : medalState === 'error' ? ' · 灯牌等级暂不可用，按名称排序' : '');
      list.replaceChildren();
      if (!filtered.length) { const empty = panelDocument.createElement('p'); empty.textContent = entries.length ? '没有匹配的主播' : '暂无关注主播，请刷新关注列表'; empty.style.padding = '8px'; list.appendChild(empty); }
      for (const item of filtered) {
        const row = panelDocument.createElement('label');
        row.style.cssText = 'box-sizing:border-box;min-height:48px;display:flex;align-items:center;gap:8px;padding:5px 8px;border-bottom:1px solid #eee;';
        const avatar = panelDocument.createElement('span');
        avatar.style.cssText = 'position:relative;width:32px;height:32px;flex:none;border-radius:50%;background:' + currentTheme.primary + ';color:white;display:grid;place-items:center;font-weight:700;';
        avatar.textContent = String(item.uname || '播').slice(0, 1);
        const image = panelDocument.createElement('img'); image.alt = ''; image.loading = 'lazy'; image.referrerPolicy = 'no-referrer';
        if (liveAlertImage(item.face)) image.src = liveAlertImage(item.face);
        image.style.cssText = 'position:absolute;inset:0;width:32px;height:32px;border-radius:50%;object-fit:cover;';
        listenPanelNode(image, 'error', () => { image.remove(); }); avatar.appendChild(image);
        const info = panelDocument.createElement('span'); info.style.cssText = 'flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
        const isCurrent = currentRoomId && liveAlertUid(item.roomId) === liveAlertUid(currentRoomId);
        const medalLevel = Number(medalLevels[item.uid]) || 0;
        info.textContent = `${item.uname || '未知主播'} · ${item.uid}` + (isCurrent ? ' · 当前直播间' : '') + (medalLevel > 0 ? ` · 灯牌 Lv${medalLevel}` : '');
        const check = panelDocument.createElement('input'); check.type = 'checkbox'; check.checked = draft.has(item.uid); check.disabled = !!panelUi.followingSaving;
        check.setAttribute('aria-label', '特别关注 ' + (item.uname || item.uid));
        listenPanelNode(check, 'change', () => { if (check.checked) draft.add(item.uid); else draft.delete(item.uid); capture(); status.textContent = (draftChanged() ? '未保存 · ' : '') + `已选择 ${draft.size} 位 / 共 ${entries.length} 位`; });
        row.append(avatar, info, check); list.appendChild(row);
      }
    }
    async function loadMedals(force = false) {
      medalState = 'loading'; render();
      try {
        const result = await liveAlertController.loadMedalLevels(force);
        if (!view.isConnected) return;
        medalLevels = result.levels;
        medalState = result.complete ? 'ready' : 'partial';
      } catch (error) {
        if (!view.isConnected) return;
        medalLevels = {};
        medalState = 'error';
      }
      render();
    }
    listenPanelNode(search, 'input', render);
    actions.append(
      makeButton('全选全部', () => { Object.keys(a && a.streamers || {}).forEach(uid => draft.add(Number(uid))); render(); }),
      makeButton('全选搜索结果', () => { list.querySelectorAll('input[type="checkbox"]').forEach(input => { input.checked = true; input.dispatchEvent(new panelWindow.Event('change')); }); render(); }),
      makeButton('清空选择', () => { draft.clear(); render(); }),
    );
    const refresh = makeButton('刷新关注列表', async () => {
      if (syncing || panelUi.followingSaving) return;
      syncing = true; refresh.disabled = true;
      try {
        status.textContent = '正在同步关注主播…';
        await liveAlertController.syncFollowing((count, total) => { status.textContent = `已读取 ${count} 位 / 约 ${total} 位关注`; });
        if (!view.isConnected) return;
        cfg = liveAlertController.config(); a = liveAlertController.account(cfg);
        if (cfg?.activeAccountUid !== draftUid || cfg?.activeAccountEpoch !== draftEpoch) { render(); return; }
        if (a?.syncComplete !== false) draft = new Set([...draft].filter(uid => a && a.streamers[uid]));
        original = a ? [...a.selectedUids] : [];
        draftRevision = cfg && cfg.revision; draftUid = cfg && cfg.activeAccountUid; draftEpoch = cfg && cfg.activeAccountEpoch;
        render();
        void loadMedals(true);
      } catch (error) { status.textContent = '同步失败：' + String(error.message || error).slice(0, 80); }
      finally { syncing = false; refresh.disabled = false; }
    });
    const save = makeButton('保存', async () => {
      if (panelUi.followingSaving) return;
      panelUi.followingSaving = true;
      save.disabled = true; list.querySelectorAll('input').forEach(input => { input.disabled = true; }); actions.querySelectorAll('button').forEach(button => { button.disabled = true; }); refresh.disabled = true;
      try {
        await liveAlertController.saveConfig((current) => { current.selectedUids = [...draft].filter(uid => current.streamers[uid]); }, draftRevision, draftUid, draftEpoch);
        cfg = liveAlertController.config(); draftRevision = cfg && cfg.revision; draftUid = cfg && cfg.activeAccountUid; draftEpoch = cfg && cfg.activeAccountEpoch;
        original = [...draft]; capture(); if (view.isConnected) { render(); status.textContent = '特别关注已保存'; }
      } catch (error) { status.textContent = '保存失败：' + String(error.message || error).slice(0, 80); }
      finally { panelUi.followingSaving = false; if (view.isConnected) { const message = status.textContent; render(); status.textContent = message; save.disabled = false; refresh.disabled = false; actions.querySelectorAll('button').forEach(button => { button.disabled = false; }); } else if (panelUi.detail === 'following') { panelUi.captureFollowing = null; renderPanelView(); } }
    });
    save.dataset.followSave = '1';
    const cancel = makeButton('取消修改', () => { draft = new Set(original); capture(); render(); });
    footer.append(refresh, save, cancel); header.append(heading, back); view.append(header, status, search, actions, list, footer); body.appendChild(view);
    render();
    if (!a || !a.syncedAt) void refresh.click();
    else void loadMedals();
  }

  // ---------- 净化：独立偏好、按文档适配、未知类别保留 ----------
  const PURIFY_KEYS = ['purifyGiftBar', 'purifyRanking', 'purifyActivityEntry', 'purifyEntryMessage', 'purifyGiftMessage'];
  const PURIFY_LABELS = { purifyGiftBar: '隐藏礼物栏', purifyRanking: '隐藏排行榜', purifyActivityEntry: '隐藏活动入口', purifyEntryMessage: '隐藏进场提示', purifyGiftMessage: '隐藏礼物提示' };
  const PURIFY_AREAS = { purifyGiftBar: '.gift-control-section.gift-control-panel', purifyRanking: '.right-module-measure > .rank-entries', purifyActivityEntry: '.right-module-measure > .activity-gather-entry.activity-entry' };
  const PURIFY_PROTECTED = 'video,textarea,input,button.send-btn,.chat-control-panel,.danmaku-menu,.live-web-player-controller,#web-player-controller-wrap-el,#bilivex-panel,#bilivex-wheel-window,[data-bilivex-wheel-entry]';
  const PURIFY_OVERLAY_ROOT = '.chat-history-panel > .chat-overlay-layer';
  const PURIFY_WELCOME = PURIFY_OVERLAY_ROOT + ' > .welcome-section-bottom';
  const PURIFY_GIFT_BUBBLE = PURIFY_OVERLAY_ROOT + ' > .gift-bubble-setting > .bubble-list > div > .base-bubble-wrapper.super-gift-bubbles';
  const purifyShared = sharedRuntime.purify || (sharedRuntime.purify = { controllers: new Set(), stopped: new Set() });
  const PURIFY_STATUS_ATTRIBUTE = 'data-bilivex-purify-status';
  const PURIFY_STATUS_EVENT = 'bilivex-purify-status-change';
  function readPurify(key) { try { return GM_getValue('bilivex_purify_v1_' + key) === true; } catch (e) { return false; } }
  function classifyPurifyMessage(item) {
    if (!item || !item.matches('.chat-item,.brush-prompt-item')) return 'unknown';
    if (item.matches(PURIFY_PROTECTED) || item.querySelector(PURIFY_PROTECTED)) return 'protected';
    if (item.matches('.danmaku-item,.chat-emoticon,.my-self,.super-chat-item,.super-chat') || item.querySelector('.danmaku-item,.chat-emoticon,.my-self,.super-chat-item,.super-chat')) return 'protected';
    // 真实样本：聊天面板直属进场区；昵称与系统动作是两个独立节点。
    if (item.matches('.brush-prompt-item')) {
      if (item.matches('.chat-item,.gift-item') || !item.parentElement?.matches('.chat-history-panel > .brush-prompt')) return 'unknown';
      const names = item.querySelectorAll(':scope > .common-nickname-wrapper > .interact-name');
      const actions = item.querySelectorAll(':scope > span.flex-no-shrink.v-middle');
      if (names.length !== 1 || actions.length !== 1 || actions[0].childElementCount || actions[0].textContent.trim() !== '进入直播间') return 'unknown';
      if (item.querySelectorAll(':scope > .common-nickname-wrapper').length !== 1 || item.querySelectorAll(':scope > .fans-medal-item-ctnr').length > 1 || [...item.children].some(node => !node.matches('.common-nickname-wrapper,.fans-medal-item-ctnr,span.flex-no-shrink.v-middle'))) return 'unknown';
      if (item.querySelector('button,textarea,input,video,[role="button"]')) return 'protected';
      return 'entry';
    }
    // 真实样本：普通页 gift-item + gift-name/gift-num；不能以正文“送礼”判断。
    if (item.matches('.gift-item') && item.querySelector('.gift-name') && item.querySelector('.gift-num')) return 'gift';
    return 'unknown';
  }
  function purifySafeArea(node) { return !node.matches(PURIFY_PROTECTED) && !node.querySelector(PURIFY_PROTECTED); }
  function classifyPurifyOverlay(node) {
    if (!node || !purifySafeArea(node) || node.matches('button,[role="button"],.danmaku-item,.chat-emoticon,.my-self,.super-chat-item,.super-chat') || node.querySelector('input,textarea,button,[role="button"],.danmaku-item,.chat-emoticon,.my-self,.super-chat-item,.super-chat')) return 'protected';
    // 当前聊天框上方的原生进场动画：只允许专用区域中的单个画布及其空包装。
    if (node.matches(PURIFY_WELCOME)) {
      const wrapper = node.firstElementChild;
      if (node.childElementCount !== 1 || !wrapper.matches('div') || wrapper.childElementCount !== 1 || !wrapper.firstElementChild.matches('canvas')) return 'unknown';
      if (node.textContent.trim()) return 'unknown';
      return 'entry';
    }
    // 粉丝团灯牌等礼物使用独立气泡；类型由原生层级和礼物节点确认，不匹配正文。
    if (node.matches(PURIFY_GIFT_BUBBLE) && node.childElementCount === 2 &&
      node.querySelectorAll(':scope > .base-bubble').length === 1 && node.querySelectorAll(':scope > .content-ctnr').length === 1 &&
      node.querySelectorAll(':scope > .content-ctnr > .super-gift-item > .gift-info > .gift-section').length === 1 &&
      node.querySelectorAll(':scope > .content-ctnr > .super-gift-item > .gift-pic-count > .gift-frame').length === 1 &&
      node.querySelectorAll(':scope > .content-ctnr > .super-gift-item > .gift-pic-count > .combo-amount').length === 1) return 'gift';
    return 'unknown';
  }
  function setPurifyPreference(key, value) {
    if (!PURIFY_KEYS.includes(key)) return false;
    if (!value) purifyShared.stopped.add(key);
    try {
      GM_setValue('bilivex_purify_v1_' + key, value === true);
      if (GM_getValue('bilivex_purify_v1_' + key) !== (value === true)) throw new Error('写入未确认');
      purifyShared.stopped.delete(key); purifyShared.controllers.forEach(c => c.refresh()); refreshPanelStatus(); panelMessage('已保存'); return true;
    } catch (e) { purifyShared.stopped.add(key); purifyShared.controllers.forEach(c => c.refresh()); refreshPanelStatus(); panelMessage((value ? '保存失败：' : '本页已恢复，设置未保存：') + e.message); return false; }
  }
  function purifyStatus(key) {
    if (purifyShared.stopped.has(key)) return '本页已暂停；重新开启可重试';
    if (!readPurify(key)) return '已关闭';
    const states = [...purifyShared.controllers].filter(c => c.active()).map(c => c.status(key)).filter(Boolean);
    // 沙箱重建后不能依赖 window 属性跨实例共享；只读取同源文档发布的净化状态。
    const documents = [panelDocument], visited = new Set();
    for (const doc of documents) {
      if (!doc || visited.has(doc)) continue;
      visited.add(doc);
      try {
        const value = doc.documentElement?.getAttribute(PURIFY_STATUS_ATTRIBUTE);
        if (value && value.length < 2048) {
          const state = JSON.parse(value)[key];
          if (['生效中', '已启用，等待目标出现', '已启用，等待可识别的进场提示', '后台暂停过滤', '本页已暂停；重新开启可重试'].includes(state)) states.push(state);
        }
        for (const frame of doc.querySelectorAll('iframe')) { try { if (frame.contentDocument) documents.push(frame.contentDocument); } catch (e) {} }
      } catch (e) {}
    }
    if (states.includes('本页已暂停；重新开启可重试')) return '本页已暂停；重新开启可重试';
    if (states.includes('生效中')) return states.some(s => s !== '生效中') ? '部分生效；其他区域等待目标或未适配' : '生效中';
    return states[0] || '当前布局不支持';
  }
  function publishPurifyStatus() {
    const root = document.documentElement; if (!root) return;
    const states = {};
    if (purifyController?.active()) PURIFY_KEYS.forEach(key => {
      if (readPurify(key)) {
        const state = purifyShared.stopped.has(key) ? '本页已暂停；重新开启可重试' : purifyController.status(key);
        if (state) states[key] = state;
      }
    });
    const value = Object.keys(states).length ? JSON.stringify(states) : null;
    if (root.getAttribute(PURIFY_STATUS_ATTRIBUTE) === value) return;
    if (value) root.setAttribute(PURIFY_STATUS_ATTRIBUTE, value); else root.removeAttribute(PURIFY_STATUS_ATTRIBUTE);
    if (document !== panelDocument) panelDocument.dispatchEvent(new panelWindow.Event(PURIFY_STATUS_EVENT));
  }
  function createPurifyController() {
    let room = '', list = null, observer = null, areaObserver = null, timer = null, areaTimer = null, suspended = false;
    let areas = new Map(), pending = new Set(), marked = new Set();
    let entryRoot = null, entryPanel = null, entryList = null, entryObserver = null, entryTimer = null;
    let overlayRoot = null, overlayObserver = null, overlayTimer = null, overlayMode = '';
    const overlayMarked = new Map(), overlayPending = new Set();
    const entryPending = new Set(), entryMarked = new Set(), entrySpace = 'data-bilivex-entry-space';
    const style = document.createElement('style'); style.id = 'bilivex-purify-style';
    const attr = 'data-bilivex-purify';
    const enabled = key => !suspended && readPurify(key) && !purifyShared.stopped.has(key);
    const chatEnabled = () => enabled('purifyGiftMessage') && !document.hidden;
    const entryEnabled = () => enabled('purifyEntryMessage') && !document.hidden;
    const ensureStyle = () => {
      const rules = Object.entries(PURIFY_AREAS).filter(([key]) => enabled(key)).map(([key, selector]) => selector.split(',').map(s => s + '[' + attr + '="' + key + '"]').join(',') + '{display:none!important}');
      if (chatEnabled()) {
        rules.push('.chat-history-list .chat-item.gift-item:not(.danmaku-item):not(.my-self)[' + attr + '="gift"]{display:none!important}');
        rules.push(PURIFY_GIFT_BUBBLE + '[' + attr + '="gift"]{display:none!important}');
      }
      if (entryEnabled()) {
        rules.push('.chat-history-panel > .brush-prompt > .brush-prompt-item[' + attr + '="entry"]{display:none!important}');
        rules.push(PURIFY_WELCOME + '[' + attr + '="entry"]{display:none!important}');
        rules.push('.chat-history-panel[' + entrySpace + '="1"] > .chat-history-list.with-brush-prompt{height:100%!important}');
      }
      if (!rules.length) { style.remove(); return; }
      if (!style.isConnected) (document.head || document.documentElement).appendChild(style);
      const css = rules.join('\n'); if (style.textContent !== css) style.textContent = css;
    };
    const clearMark = node => { if (node?.nodeType === 1) node.removeAttribute(attr); marked.delete(node); };
    const stopChat = () => { if (observer) observer.disconnect(); observer = null; if (timer !== null) clearTimeout(timer); timer = null; pending.clear(); marked.forEach(clearMark); marked.clear(); list = null; };
    const clearEntrySpace = () => entryPanel?.removeAttribute(entrySpace);
    const clearEntryMark = node => { if (node?.nodeType === 1) node.removeAttribute(attr); entryMarked.delete(node); };
    const stopEntry = () => {
      entryObserver?.disconnect(); entryObserver = null;
      if (entryTimer !== null) clearTimeout(entryTimer); entryTimer = null;
      entryPending.clear(); entryMarked.forEach(clearEntryMark); clearEntrySpace();
      entryRoot = entryPanel = entryList = null;
    };
    const clearOverlayMarks = type => {
      overlayMarked.forEach((kind, node) => { if (!type || kind === type) { node.removeAttribute(attr); overlayMarked.delete(node); } });
    };
    const stopOverlay = () => {
      overlayObserver?.disconnect(); overlayObserver = null;
      if (overlayTimer !== null) clearTimeout(overlayTimer); overlayTimer = null;
      clearOverlayMarks(); overlayPending.clear(); overlayRoot = null; overlayMode = '';
    };
    const stopAreas = () => {
      if (areaObserver) areaObserver.disconnect(); areaObserver = null;
      if (areaTimer !== null) clearTimeout(areaTimer); areaTimer = null;
      areas.forEach(nodes => nodes.forEach(node => node.removeAttribute(attr))); areas.clear();
    };
    const refreshOtherControllers = () => purifyShared.controllers.forEach(c => { if (c !== controller) c.refresh(); });
    const failChat = () => { purifyShared.stopped.add('purifyGiftMessage'); ensureStyle(); stopChat(); clearOverlayMarks('gift'); refreshOtherControllers(); refreshPanelStatus(); };
    const failEntry = () => { purifyShared.stopped.add('purifyEntryMessage'); ensureStyle(); stopEntry(); clearOverlayMarks('entry'); refreshOtherControllers(); refreshPanelStatus(); };
    const failOverlay = () => {
      if (chatEnabled()) purifyShared.stopped.add('purifyGiftMessage');
      if (entryEnabled()) purifyShared.stopped.add('purifyEntryMessage');
      ensureStyle(); stopOverlay();
      if (!chatEnabled()) stopChat(); if (!entryEnabled()) stopEntry();
      refreshOtherControllers(); refreshPanelStatus();
    };
    const failAreas = () => {
      Object.keys(PURIFY_AREAS).forEach(key => { if (readPurify(key)) purifyShared.stopped.add(key); });
      ensureStyle(); stopAreas(); refreshOtherControllers(); refreshPanelStatus();
    };
    const process = () => {
      timer = null; if (!chatEnabled() || !list?.isConnected || canonicalRoom(document) !== room) { refresh(); return; }
      const started = Date.now(); let count = 0;
      try { for (const node of pending) {
        pending.delete(node); clearMark(node);
        if (node.isConnected && list.contains(node) && classifyPurifyMessage(node) === 'gift') { node.setAttribute(attr, 'gift'); marked.add(node); }
        if (++count >= 200 || Date.now() - started >= 4) break;
      } } catch (e) { failChat(); return; }
      if (pending.size) timer = setTimeout(process, 0);
      refreshPanelStatus();
    };
    const enqueue = node => { if (node && node.nodeType === 1 && node.matches('.chat-item')) { clearMark(node); if (list?.contains(node)) pending.add(node); } };
    const observeChat = target => {
      stopChat(); list = target; if (!list || !chatEnabled()) return;
      try {
      const initial = list.querySelectorAll('.chat-item'); if (initial.length > 1000) { failChat(); return; }
      initial.forEach(enqueue);
      observer = new MutationObserver(records => {
        try {
        if (!chatEnabled()) { refresh(); return; }
        // 先解除旧效果；超负载直接撤规则，不在回调中深搜大型容器。
        if (records.length > 1000) { failChat(); return; }
        let nodesSeen = 0;
        for (const record of records) {
          enqueue(record.target.nodeType === 1 ? record.target.closest('.chat-item') : record.target.parentElement?.closest('.chat-item'));
          for (const node of [...record.addedNodes, ...record.removedNodes]) {
            if (++nodesSeen > 1000) { failChat(); return; }
            if (node.nodeType !== 1) continue;
            if (node.matches('.chat-item')) enqueue(node);
            else if (node.childElementCount && !node.closest('.chat-item')) { failChat(); return; }
          }
        }
        marked.forEach(node => { if (!node.isConnected || !list.contains(node)) clearMark(node); });
        if (pending.size > 1000) { failChat(); return; }
        if (pending.size && timer === null) timer = setTimeout(process, 0);
        } catch (e) { failChat(); }
      });
      observer.observe(list, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'data-type'] });
      if (pending.size) timer = setTimeout(process, 0);
      } catch (e) { failChat(); }
    };
    const updateEntrySpace = () => {
      clearEntrySpace();
      if (!entryEnabled() || !entryRoot?.isConnected || entryRoot.parentElement !== entryPanel || !entryList?.matches('.chat-history-list.with-brush-prompt') || entryList.parentElement !== entryPanel) return;
      // 只收拢已确认的原生 30px 预留，其他同级提示占位或未知内容保持原样。
      if ([...entryList.classList].some(name => !['chat-history-list', 'h-100', 'p-relative', 'border-box', 'with-brush-prompt'].includes(name))) return;
      if ([...entryRoot.children].some(node => !entryMarked.has(node))) return;
      if ([...entryRoot.childNodes].some(node => node.nodeType === 3 && node.textContent.trim())) return;
      if (entryPanel.children.length > 50) return;
      const panelCss = getComputedStyle(entryPanel), listCss = getComputedStyle(entryList);
      if (['paddingTop', 'paddingBottom', 'borderTopWidth', 'borderBottomWidth'].some(key => parseFloat(panelCss[key]) !== 0) || ['marginTop', 'marginBottom'].some(key => parseFloat(listCss[key]) !== 0)) return;
      for (const node of entryPanel.children) {
        if (node === entryRoot || node === entryList) continue;
        const css = getComputedStyle(node);
        if (css.display !== 'none' && !['absolute', 'fixed'].includes(css.position) && node.getBoundingClientRect().height > 0) return;
      }
      entryPanel.setAttribute(entrySpace, '1');
    };
    const enqueueEntry = node => {
      if (!node || node.nodeType !== 1) return;
      clearEntryMark(node); clearEntrySpace();
      if (node.parentElement === entryRoot) entryPending.add(node);
    };
    const observeEntrySibling = node => {
      if (node.nodeType === 1 && node !== entryRoot && node !== entryList) entryObserver.observe(node, { childList: true, attributes: true, attributeFilter: ['class', 'style', 'hidden'] });
    };
    const processEntry = () => {
      entryTimer = null;
      if (!entryEnabled() || !entryRoot?.isConnected || canonicalRoom(document) !== room) { refresh(); return; }
      const started = Date.now(); let count = 0;
      try {
        for (const node of entryPending) {
          entryPending.delete(node); clearEntryMark(node);
          if (node.parentElement === entryRoot && classifyPurifyMessage(node) === 'entry') { node.setAttribute(attr, 'entry'); entryMarked.add(node); }
          if (++count >= 200 || Date.now() - started >= 4) break;
        }
        if (entryPending.size) entryTimer = setTimeout(processEntry, 0);
        else updateEntrySpace();
      } catch (e) { failEntry(); return; }
      refreshPanelStatus();
    };
    const observeEntry = target => {
      stopEntry(); if (!target || !entryEnabled()) return;
      try {
        entryRoot = target; entryPanel = target.parentElement;
        const lists = entryPanel.querySelectorAll(':scope > .chat-history-list');
        entryList = lists.length === 1 ? lists[0] : null;
        if (entryRoot.children.length > 1000) { failEntry(); return; }
        [...entryRoot.children].forEach(enqueueEntry);
        entryObserver = new MutationObserver(records => {
          try {
            clearEntrySpace();
            if (records.length > 1000) { failEntry(); return; }
            if (records.some(record => record.target === entryPanel && record.type === 'childList')) { stopEntry(); refresh(); return; }
            if (!entryEnabled() || !entryRoot.isConnected || !entryRoot.matches('.chat-history-panel > .brush-prompt') || entryList !== entryPanel.querySelector(':scope > .chat-history-list')) { refresh(); return; }
            let nodesSeen = 0;
            for (const record of records) {
              if (record.target === entryPanel || record.target === entryList || record.target === entryRoot) {
                for (const node of entryRoot.children) { if (++nodesSeen > 1000) { failEntry(); return; } enqueueEntry(node); }
              } else {
                const targetNode = record.target.nodeType === 1 ? record.target : record.target.parentElement;
                enqueueEntry(targetNode?.closest('.brush-prompt-item,[' + attr + '="entry"]'));
              }
              for (const node of [...record.addedNodes, ...record.removedNodes]) {
                if (++nodesSeen > 1000) { failEntry(); return; }
                if (node.parentElement === entryPanel && entryPanel.children.length <= 50) observeEntrySibling(node);
                if (node.parentElement === entryRoot || entryMarked.has(node)) enqueueEntry(node);
              }
            }
            entryMarked.forEach(node => { if (node.parentElement !== entryRoot) clearEntryMark(node); });
            if (entryPending.size > 1000) { failEntry(); return; }
            if (entryPending.size && entryTimer === null) entryTimer = setTimeout(processEntry, 0);
            else if (!entryPending.size) updateEntrySpace();
          } catch (e) { failEntry(); }
        });
        entryObserver.observe(entryRoot, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['class', 'data-type'] });
        entryObserver.observe(entryPanel, { childList: true, attributes: true, attributeFilter: ['class'] });
        if (entryList) entryObserver.observe(entryList, { attributes: true, attributeFilter: ['class'] });
        if (entryPanel.children.length <= 50) [...entryPanel.children].forEach(observeEntrySibling);
        if (entryPending.size) entryTimer = setTimeout(processEntry, 0);
      } catch (e) { failEntry(); }
    };
    const overlayCandidates = () => {
      // 仅走已观察到的三层包装，限制总节点数；不深搜新增的大型容器。
      const candidates = []; let visited = 0;
      const children = node => {
        if ((visited += node.children.length) > 1000) throw new Error('提示区域节点过多');
        return [...node.children];
      };
      for (const slot of children(overlayRoot)) {
        if (slot.matches('.welcome-section-bottom')) candidates.push(slot);
        if (!slot.matches('.gift-bubble-setting')) continue;
        for (const bubbles of children(slot)) {
          if (!bubbles.matches('.bubble-list')) continue;
          for (const wrapper of children(bubbles)) {
            if (!wrapper.matches('div')) continue;
            for (const node of children(wrapper)) if (node.matches('.base-bubble-wrapper')) candidates.push(node);
          }
        }
      }
      return candidates;
    };
    const processOverlay = () => {
      overlayTimer = null;
      if (!overlayRoot?.isConnected || !overlayRoot.matches(PURIFY_OVERLAY_ROOT) || canonicalRoom(document) !== room || (!chatEnabled() && !entryEnabled())) { refresh(); return; }
      try {
        const started = Date.now(); let count = 0;
        for (const node of overlayPending) {
          overlayPending.delete(node);
          const type = classifyPurifyOverlay(node);
          if ((type === 'gift' && chatEnabled()) || (type === 'entry' && entryEnabled())) { node.setAttribute(attr, type); overlayMarked.set(node, type); }
          if (++count >= 200 || Date.now() - started >= 4) break;
        }
        if (overlayPending.size) overlayTimer = setTimeout(processOverlay, 0);
      } catch (e) { failOverlay(); return; }
      refreshPanelStatus();
    };
    const queueOverlay = () => {
      clearOverlayMarks(); overlayPending.clear();
      overlayCandidates().forEach(node => overlayPending.add(node));
      if (overlayPending.size && overlayTimer === null) overlayTimer = setTimeout(processOverlay, 0);
      else if (!overlayPending.size) refreshPanelStatus();
    };
    const observeOverlay = (target, mode) => {
      stopOverlay(); if (!target) return;
      overlayRoot = target; overlayMode = mode;
      try {
        overlayObserver = new MutationObserver(records => {
          try {
            if (records.length > 1000) { failOverlay(); return; }
            if (!overlayRoot.isConnected || !overlayRoot.matches(PURIFY_OVERLAY_ROOT)) { stopOverlay(); refresh(); return; }
            queueOverlay();
          } catch (e) { failOverlay(); }
        });
        overlayObserver.observe(overlayRoot, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['class', 'role'] });
        overlayObserver.observe(overlayRoot.parentElement, { childList: true, attributes: true, attributeFilter: ['class'] });
        queueOverlay();
      } catch (e) { failOverlay(); }
    };
    const refresh = () => {
      const nextRoom = canonicalRoom(document);
      if (nextRoom !== room) { stopChat(); stopEntry(); stopOverlay(); room = nextRoom; }
      stopAreas();
      try {
      if (!suspended && room) {
        for (const [key, selector] of Object.entries(PURIFY_AREAS)) {
          if (!enabled(key)) continue;
          const nodes = [...document.querySelectorAll(selector)].filter(purifySafeArea);
          nodes.forEach(node => node.setAttribute(attr, key)); areas.set(key, nodes);
        }
        const roots = new Set([...areas.values()].flat().map(n => n.parentElement).filter(Boolean));
        if (roots.size) {
          areaObserver = new MutationObserver(() => {
            try {
            // 保护控件插入时立即恢复可见，随后合并布局重新检查。
            areas.forEach(nodes => nodes.forEach(node => { if (!purifySafeArea(node)) node.removeAttribute(attr); }));
            if (areaTimer === null) areaTimer = setTimeout(() => { areaTimer = null; refresh(); }, 80);
            } catch (e) { failAreas(); }
          });
          roots.forEach(root => areaObserver.observe(root, { childList: true }));
          [...areas.values()].flat().forEach(node => areaObserver.observe(node, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] }));
        }
      }
      } catch (e) { failAreas(); }
      ensureStyle();
      try {
        const nextList = !suspended && room && chatEnabled() ? document.querySelector('.chat-history-list') : null;
        if (nextList !== list || (nextList && !observer)) observeChat(nextList);
      } catch (e) { failChat(); }
      try {
        const nextEntry = !suspended && room && entryEnabled() ? document.querySelector('.chat-history-panel > .brush-prompt') : null;
        const lists = nextEntry?.parentElement.querySelectorAll(':scope > .chat-history-list');
        const nextEntryList = lists?.length === 1 ? lists[0] : null;
        if (nextEntry !== entryRoot || nextEntryList !== entryList || (nextEntry && !entryObserver)) observeEntry(nextEntry);
      } catch (e) { failEntry(); }
      try {
        const mode = (chatEnabled() ? 'gift' : '') + (entryEnabled() ? 'entry' : '');
        const nextOverlay = !suspended && room && mode ? document.querySelector(PURIFY_OVERLAY_ROOT) : null;
        if (nextOverlay !== overlayRoot || mode !== overlayMode || (nextOverlay && !overlayObserver)) observeOverlay(nextOverlay, mode);
      } catch (e) { failOverlay(); }
      refreshPanelStatus();
    };
    const controller = {
      refresh,
      active: () => !suspended && document.defaultView && !!room,
      status: key => key === 'purifyGiftMessage' ? (document.hidden ? '后台暂停过滤' : marked.size || [...overlayMarked.values()].includes('gift') ? '生效中' : list || overlayRoot ? '已启用，等待目标出现' : null) : key === 'purifyEntryMessage' ? (document.hidden ? '后台暂停过滤' : entryMarked.size || [...overlayMarked.values()].includes('entry') ? '生效中' : entryRoot || overlayRoot ? '已启用，等待可识别的进场提示' : null) : areas.get(key)?.length ? '生效中' : '已启用，等待目标出现',
      suspend: () => { suspended = true; stopChat(); stopEntry(); stopOverlay(); stopAreas(); style.remove(); refreshPanelStatus(); },
      resume: () => { suspended = false; purifyShared.controllers.add(controller); refresh(); },
      dispose: () => { controller.suspend(); purifyShared.controllers.delete(controller); }
    };
    purifyShared.controllers.add(controller); return controller;
  }
  let purifyController = null;
  function refreshPurification() { if (!purifyController) purifyController = createPurifyController(); purifyController.refresh(); }

  // ---------- 统一面板：导航只定位，业务动作沿用原服务 ----------
  const PANEL_CATEGORIES = ['常用', '观看', '弹幕', '收藏', '关注', '设置'];
  const PANEL_FEATURES = [
    ['favorites', '弹幕收藏', '收藏', '收藏夹 搜索收藏'], ['wheel', '独轮车', '弹幕', '连续发送'],
    ['floating', '弹幕操作', '弹幕', '弹幕+1'], ['tail', '小尾巴', '弹幕', '尾巴内容'],
    ['quality', '自动最高画质', '观看', '画质'], ['web', '自动网页模式', '观看', '网页全屏'],
    ['sync', '同步时间', '观看', '延迟 追上直播'], ['purify-room', '直播间净化', '观看', '礼物栏 排行榜 活动入口 聊天净化 礼物提示 进场提示 舰长 灯牌'],
    ['p2p', '防止 P2P 上传', '观看', '网络设置'],
    ['pip', '带弹幕画中画', '观看', '小窗 悬停 +1'], ['audio', '仅音频模式', '观看', '声音 恢复视频'],
    ['alerts', '开播提醒', '关注', '提醒'], ['following', '管理特别关注', '关注', '关注名单'],
    ['like', '一键点赞', '弹幕', '30连击'], ['theme', '外观主题', '设置', '蓝色 粉色'],
    ['quick', '常用入口配置', '设置', '排序'], ['position', '恢复窗口位置', '设置', '拖动 锚点'],
    ['about', '版本与更新', '设置', '版本号']
  ];
  const PANEL_PRESENTATION = {
    favorites: ['弹幕收藏', '搜索和管理常用弹幕', '▤'], wheel: ['互动', '文字与表情的独立任务窗口', '♿'],
    floating: ['互动', '只控制画面内的悬停入口', '＋'], tail: ['互动', '开启并编辑弹幕后缀', '〰'],
    quality: ['播放方式', '自动选择当前账号可用的最高画质', '◈'], web: ['播放方式', '进入房间时使用网页全屏', '□'],
    sync: ['播放方式', '查看本地缓冲，手动同步', '↻'], 'purify-room': ['画面与声音', '页面区域与聊天提示，分别设置', '◇'],
    p2p: ['网络与播放调节', '切换此项将重载播放器', '⇄'],
    pip: ['画面与声音', '置顶小窗，悬停弹幕操作', '▣'], audio: ['画面与声音', '独立音频流，随时恢复视频', '♫'],
    alerts: ['特别关注', '在打开的 B 站页面提醒', '♧'], following: ['特别关注', '选择需要提醒的主播', '◎'],
    like: ['互动', '明确点击后执行 30 连击', '♡'], theme: ['界面', '蓝／粉主题配色', '◐'],
    quick: ['界面', '最多四项，自由替换', '⊞'], position: ['界面', '恢复悬浮窗的默认停放位置', '⌖'],
    about: ['偏好与版本', '查看版本与更新入口', 'ⓘ']
  };
  const PANEL_DEFAULT_QUICK = ['favorites', 'wheel', 'floating', 'tail'];
  function normalizePanelPreferences(raw) {
    if (raw == null || raw === '') return { ids: [...PANEL_DEFAULT_QUICK], writable: true, error: '' };
    try {
      const value = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (!value || value.schemaVersion !== 1) return { ids: [...PANEL_DEFAULT_QUICK], writable: false, error: '未知常用配置版本，暂不可保存' };
      if (!Array.isArray(value.quickIds)) throw new Error('格式错误');
      const known = new Set(PANEL_FEATURES.map(item => item[0]));
      // 旧聊天净化入口合并到直播间净化，保留首次出现的位置并去重。
      return { ids: [...new Set(value.quickIds.map(id => id === 'purify-chat' ? 'purify-room' : id).filter(id => known.has(id)))].slice(0, 4), writable: true, error: '' };
    } catch (error) { return { ids: [...PANEL_DEFAULT_QUICK], writable: true, error: '常用配置损坏，当前显示默认值；保存前不覆盖原值' }; }
  }
  const panelUi = { category: '常用', detail: '', query: '', search: false, back: [], positions: new Map(), quickDraft: null, quickBase: null, notice: '', favoriteDraft: null, favoriteMode: 'browse', favoriteQuery: '', followingDraft: null };
  const PANEL_MOTION_EASING = 'cubic-bezier(.22,1,.36,1)';
  function panelMotionSnapshot(panel) {
    const rect = panel.getBoundingClientRect(), logo = panel.querySelector('#bilivex-logo')?.getBoundingClientRect();
    const radius = panel.ownerDocument.defaultView.getComputedStyle(panel).borderTopLeftRadius;
    const body = panel.querySelector('.bilivex-panel-body');
    return { left: rect.left, top: rect.top, right: rect.right, width: rect.width, height: rect.height,
      radius: radius.endsWith('%') ? Math.min(rect.width, rect.height) * parseFloat(radius) / 100 : parseFloat(radius),
      bodyOpacity: body && !body.hidden ? Number(panel.ownerDocument.defaultView.getComputedStyle(body).opacity) : .12,
      logo: logo && { left: logo.left - rect.left, top: logo.top - rect.top, width: logo.width, height: logo.height } };
  }
  function cancelPanelMotion(panel = getPanelRoot()) {
    const motion = sharedRuntime.panelMotion;
    if (!motion || motion.panel !== panel) return;
    motion.animations.forEach(animation => { animation.onfinish = null; animation.cancel(); });
    motion.animations.clear();
    const finish = motion.finish; motion.finish = null; finish?.();
    delete panel.dataset.panelMotion;
    // 真正卸载后的子文档已失去窗口；交还父文档前不读取其计算样式。
    if (panel.ownerDocument.defaultView) motion.last = panelMotionSnapshot(panel);
  }
  function preparePanelMotion(panel) {
    const from = panelMotionSnapshot(panel);
    cancelPanelMotion(panel);
    return from;
  }
  function panelViewSize(panel) {
    return ['[data-panel-view]', '[data-panel-drafts]', '[data-panel-task]'].map(selector => {
      const node = panel.querySelector(selector); return node ? node.offsetWidth + ':' + node.offsetHeight : '';
    }).join('|');
  }
  function animatePanelChange(panel, from, { entrance = false, folding = false, bodyWidth = 0 } = {}) {
    const motion = sharedRuntime.panelMotion;
    if (!motion || motion.panel !== panel) return;
    const body = panel.querySelector('.bilivex-panel-body'), to = panelMotionSnapshot(panel);
    const finish = () => {
      if (bodyWidth) { body.style.width = ''; body.style.flexShrink = ''; }
      if (folding) { body.hidden = true; body.style.display = 'none'; panel.querySelector('.blx-panel-head').style.width = ''; }
    };
    const moved = ['left', 'top', 'width', 'height'].some(key => Math.abs(from[key] - to[key]) > .5);
    if (!panel.isConnected || sharedRuntime.panelMotionPreference?.matches || (!moved && !entrance && !folding)) {
      finish(); motion.last = panelMotionSnapshot(panel); return;
    }
    motion.finish = finish;
    panel.dataset.panelMotion = 'true';
    const animate = (node, frames, duration) => {
      const animation = node.animate(frames, { duration, easing: PANEL_MOTION_EASING, fill: 'both', id: 'bilivex-panel-motion' });
      motion.animations.add(animation); return animation;
    };
    if (bodyWidth) { body.style.width = bodyWidth + 'px'; body.style.flexShrink = '0'; }
    if (folding) {
      body.hidden = false; body.style.display = 'flex';
      // 折叠头部以最终宽度定位标志，避免随外框居中造成二次位移。
      panel.querySelector('.blx-panel-head').style.width = COLLAPSED_BTN_SIZE + 'px';
    }
    const frames = [from, to].map(rect => ({ width: rect.width + 'px', height: rect.height + 'px', left: rect.left + 'px', top: rect.top + 'px', borderRadius: rect.radius + 'px' }));
    const geometry = animate(panel, frames, 300);
    const logo = panel.querySelector('#bilivex-logo');
    if (from.logo?.width && to.logo?.width && bodyWidth) {
      animate(logo, [{ transform: `translate(${from.logo.left - to.logo.left}px,${from.logo.top - to.logo.top}px) scale(${from.logo.width / to.logo.width},${from.logo.height / to.logo.height})` }, { transform: 'none' }], 300);
    }
    if (entrance || folding) {
      animate(folding || bodyWidth ? body : panel.querySelector('[data-panel-view]'), folding
        ? [{ opacity: from.bodyOpacity, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-4px)' }]
        : [{ opacity: bodyWidth ? from.bodyOpacity : .12, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }], folding ? 180 : 220);
    }
    geometry.onfinish = () => {
      cancelPanelMotion(panel);
      ensurePanelVisible(panel, getUiHost());
      motion.last = panelMotionSnapshot(panel);
    };
    motion.last = to;
  }
  const panelNodeListeners = new WeakMap();
  let panelEventRestoreTimer = null;
  function listenPanelNode(node, type, handler, options) {
    const bindings = panelNodeListeners.get(node) || [];
    bindings.push({ type, handler, options }); panelNodeListeners.set(node, bindings);
    node.addEventListener(type, handler, options);
  }
  function schedulePanelEventRestore(panel) {
    if (panelEventRestoreTimer !== null) clearTimeout(panelEventRestoreTimer);
    // Chrome 会在子文档真正卸载时清掉曾被接纳节点的隔离上下文监听。
    // 等卸载任务完成后恢复原回调，保留原节点、输入值、选区和未保存草稿。
    panelEventRestoreTimer = setTimeout(() => {
      panelEventRestoreTimer = null;
      if (!panel.isConnected || getPanelRoot() !== panel) return;
      [panel, ...panel.querySelectorAll('*')].forEach(node => {
        (panelNodeListeners.get(node) || []).forEach(({ type, handler, options }) => {
          node.removeEventListener(type, handler, options); node.addEventListener(type, handler, options);
        });
      });
    }, 0);
  }
  function panelElement(tag, text, className) {
    const node = panelDocument.createElement(tag);
    if (text != null) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function panelButton(text, action) {
    const node = panelElement('button', text, 'blx-btn'); node.type = 'button';
    listenPanelNode(node, 'click', action); return node;
  }
  function panelMessage(message) {
    panelUi.notice = message;
    const node = getPanelDocument().querySelector('[data-panel-notice]');
    if (node) { node.textContent = message; const panel = getPanelRoot(); if (panel) ensurePanelVisible(panel, getUiHost()); }
  }
  function savePanelConfig(patch) {
    const previous = cfg;
    try {
      const next = { ...loadCfg(), ...patch, favorites: getFavorites() };
      GM_setValue('bilivex_cfg', JSON.stringify(next));
      const actual = loadCfg();
      if (Object.keys(patch).some(key => JSON.stringify(actual[key]) !== JSON.stringify(patch[key]))) throw new Error('设置被其他页面修改');
      applyConfigChange(previous, actual); panelMessage('已保存'); return true;
    } catch (error) { cfg = previous; panelMessage('保存失败：' + error.message); return false; }
  }
  function panelViewKey() { return panelUi.search ? 'search:' + panelUi.query : panelUi.category + ':' + panelUi.detail; }
  function capturePanelView() {
    const content = getPanelDocument().querySelector('[data-panel-content]');
    if (content) panelUi.positions.set(panelViewKey(), content.scrollTop);
    if (panelUi.captureFollowing) panelUi.captureFollowing();
  }
  function openPanelView(category, detail = '', fromBack = false) {
    if (document !== panelDocument) { sharedRuntime.openPanelView?.(category, detail); return; }
    capturePanelView();
    if (!fromBack) {
      if (detail) panelUi.back.push({ category: panelUi.category, detail: panelUi.detail, search: panelUi.search, query: panelUi.query });
      else panelUi.back = [];
    }
    panelUi.category = category; panelUi.detail = detail; panelUi.search = false;
    closeWheelWindow();
    if (cfg.panelCollapsed) { cfg = { ...cfg, panelCollapsed: false }; setPanelCollapsed(false); }
    renderPanelView(true);
  }
  function panelBack() {
    capturePanelView();
    const leaving = panelUi.detail;
    const previous = panelUi.back.pop();
    if (previous) Object.assign(panelUi, previous);
    else { panelUi.detail = ''; panelUi.search = false; }
    renderPanelView(true);
    const entry = getPanelDocument().querySelector('[data-panel-feature="' + leaving + '"]') || getPanelDocument().querySelector('[role=tab][aria-selected=true]');
    entry?.focus({ preventScroll: true });
  }
  function openPanelFeature(id) {
    if (id === 'purify-chat') id = 'purify-room';
    const feature = PANEL_FEATURES.find(item => item[0] === id);
    if (!feature) return;
    if (id === 'wheel') { openWheelPanel(); return; }
    openPanelView(feature[2], id);
  }
  function panelToggle(parent, name, checked, change, key) {
    const row = panelElement('label', null, 'blx-row');
    if (key) row.dataset.bilivexSetting = key;
    row.appendChild(panelElement('strong', name, 'blx-row-main'));
    const input = panelElement('input'); input.type = 'checkbox'; input.className = 'blx-switch'; input.checked = checked; input.setAttribute('aria-label', name);
    listenPanelNode(input, 'change', async () => {
      const previous = checked;
      input.disabled = true;
      try { const result = await change(input.checked); if (result === false) input.checked = previous; else checked = input.checked; }
      catch (error) { input.checked = checked; panelMessage('操作失败：' + error.message); }
      finally {
        input.disabled = false;
        // 保存失败已停用本页净化，开关显示实际状态，避免旧成功值覆盖暂停结果。
        if (input.dataset.purifyInput) {
          const purifyKey = input.dataset.purifyInput;
          checked = input.checked = !purifyShared.stopped.has(purifyKey) && readPurify(purifyKey);
        }
      }
    }); row.appendChild(input); parent.appendChild(row); return input;
  }
  function refreshPanelStatus() {
    publishPurifyStatus();
    if (document !== panelDocument) { sharedRuntime.refreshPanelStatus?.(); return; }
    const panel = getPanelRoot(); if (!panel) return;
    const draftNote = panel.querySelector('[data-panel-drafts]');
    const favoriteDraft = panelUi.favoriteDraft;
    const favoriteDirty = favoriteDraft && (favoriteDraft.deleted.size || favoriteDraft.added.trim() || [...favoriteDraft.patches].some(([id, value]) => favoriteDraft.base.items.find(item => item.id === id)?.text !== value));
    const following = panelUi.followingDraft;
    const followingDirty = following && (following.selected.length !== following.original.length || following.original.some(id => !following.selected.includes(id)));
    if (draftNote) { draftNote.textContent = [favoriteDirty ? '收藏未保存' : '', followingDirty ? '关注未保存' : '', panelUi.quickDraft ? '常用正在编辑' : ''].filter(Boolean).join(' · '); draftNote.hidden = !draftNote.textContent; }
    const task = panel.querySelector('[data-panel-task]');
    const running = !!wheelRelease || wheelState.status === 'starting' || !!wheelResumeTimer;
    panel.dataset.taskRunning = String(running);
    if (task) { task.hidden = !running; task.querySelector('span').textContent = '独轮车：' + wheelState.reason; }
    const toggle = panel.querySelector('[data-panel-toggle]');
    if (toggle) { toggle.setAttribute('aria-label', (cfg.panelCollapsed ? '展开 BiLivex' : '收起 BiLivex') + (running ? '，独轮车运行中' : '')); toggle.setAttribute('aria-expanded', String(!cfg.panelCollapsed)); }
    panel.querySelectorAll('[data-purify-status]').forEach(node => { node.textContent = purifyStatus(node.dataset.purifyStatus); });
    panel.querySelectorAll('[data-bilivex-setting] input').forEach(node => { if (!node.disabled) node.checked = cfg[node.closest('[data-bilivex-setting]').dataset.bilivexSetting] === true; });
    panel.querySelectorAll('[data-quick-setting]').forEach(node => { if (!node.disabled) node.checked = cfg[node.dataset.quickSetting] === true; });
    const media = sharedRuntime.mediaController;
    panel.querySelectorAll('[data-media-status]').forEach(node => { node.textContent = media?.message || '未启用'; });
    panel.querySelectorAll('[data-media-start]').forEach(node => { node.disabled = !!media && media.mode !== 'idle'; });
    panel.querySelectorAll('[data-media-exit]').forEach(node => { node.disabled = !media || media.mode === 'idle' || media.mode === 'restoring'; node.textContent = media?.mode === 'recovery-needed' ? '重试恢复视频' : '退出当前模式'; });
    let mediaTask = panel.querySelector('[data-panel-media-task]');
    if (!mediaTask) {
      mediaTask = panelElement('div'); mediaTask.dataset.panelMediaTask = '1';
      mediaTask.style.cssText = 'padding:8px 12px;border-top:1px solid #e3edf3;display:flex;align-items:center;gap:8px';
      const label = panelElement('span'); label.style.cssText = 'flex:1;font-size:12px';
      const exit = panelButton('退出', () => { const current = getMediaController(); return current.mode === 'recovery-needed' ? current.recover() : current.stop(); });
      mediaTask.append(label, exit); task?.after(mediaTask);
    }
    mediaTask.hidden = !media || media.mode === 'idle';
    mediaTask.querySelector('span').textContent = media?.message || '';
    mediaTask.querySelector('button').textContent = media?.session?.kind === 'audio' || media?.mode === 'recovery-needed' ? '恢复视频' : '退出小窗';
    mediaTask.querySelector('button').disabled = media?.mode === 'restoring';
    panel.querySelectorAll('[data-purify-input]').forEach(node => { if (!node.disabled) node.checked = !purifyShared.stopped.has(node.dataset.purifyInput) && readPurify(node.dataset.purifyInput); });
    const categorySelect = panel.querySelector('[data-panel-category-select]'); if (categorySelect) categorySelect.value = panelUi.category;
    panel.querySelector('[data-panel-content]')?.setAttribute('aria-labelledby', 'bilivex-tab-' + PANEL_CATEGORIES.indexOf(panelUi.category));
    panel.querySelectorAll('[role=tab]').forEach(tab => { const selected = tab.textContent === panelUi.category; tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; tab.classList.toggle('blx-dirty', (tab.textContent === '收藏' && !!favoriteDirty) || (tab.textContent === '关注' && !!followingDirty)); });
    panel.querySelector('[role=tablist]')?.style.setProperty('--blx-tab-index', PANEL_CATEGORIES.indexOf(panelUi.category));
  }
  function renderPanelView(focus = false) {
    const panel = getPanelRoot();
    const viewport = panel?.querySelector('[data-panel-content]'); if (!viewport) return;
    const from = preparePanelMotion(panel);
    if (panelUi.captureFollowing) panelUi.captureFollowing(); panelUi.captureFollowing = null;
    const content = panelElement('div'); content.dataset.panelView = '1';
    viewport.replaceChildren(content); panelUi.notice = '';
    const title = panelElement('h3', panelUi.search ? '搜索功能' : panelUi.detail ? PANEL_FEATURES.find(f => f[0] === panelUi.detail)?.[1] || panelUi.category : panelUi.category === '常用' ? '常用入口' : panelUi.category === '收藏' ? '弹幕收藏' : panelUi.category);
    title.tabIndex = -1;
    const heading = panelElement('div', null, panelUi.detail || panelUi.search ? 'blx-detail-head' : 'blx-section-head');
    if (panelUi.detail || panelUi.search) { const back = panelButton('‹', panelBack); back.className = 'blx-back'; back.setAttribute('aria-label', '返回'); heading.appendChild(back); }
    heading.appendChild(title); content.appendChild(heading);
    if (!panelUi.detail && !panelUi.search && !['常用', '收藏', '关注'].includes(panelUi.category)) heading.className = 'blx-sr-only';
    const notice = panelElement('p', '', 'bilivex-status'); notice.dataset.panelNotice = '1'; notice.setAttribute('role', 'status'); content.appendChild(notice);
    const addLink = (feature, parent = content, quick = false, searching = false) => {
      const [group, description, symbol] = PANEL_PRESENTATION[feature[0]] || ['', '', '◇'];
      const row = panelElement('div', null, 'blx-row');
      const button = panelButton('', () => openPanelFeature(feature[0]));
      button.className = quick ? 'blx-quick' : 'blx-row-main'; button.dataset.panelFeature = feature[0];
      if (feature[0] === 'favorites') button.dataset.bilivexFavorites = '1';
      if (feature[0] === 'following') button.dataset.bilivexLiveAlertManager = '1';
      if (quick) { const icon = panelElement('span', symbol, 'blx-quick-symbol'); icon.setAttribute('aria-hidden', 'true'); button.appendChild(icon); }
      const name = panelElement('strong', feature[1]);
      const state = feature[0] === 'wheel' ? (wheelRelease ? '运行中 · 点击查看' : '已暂停') : feature[0] === 'floating' ? (cfg.floatDmPlus ? '已开启' : '已关闭') : feature[0] === 'tail' ? (cfg.tailEnabled ? '已开启' : '已关闭') : feature[0] === 'favorites' ? '按房间整理' : group;
      const small = panelElement('small', quick ? state : (searching ? feature[2] + ' · ' : '') + description);
      if (quick) { name.appendChild(small); button.appendChild(name); parent.appendChild(button); return; }
      button.append(name, small); row.appendChild(button);
      const key = !searching && { quality: 'autoHighestQuality', web: 'autoWebMode', floating: 'floatDmPlus' }[feature[0]];
      if (key) { const holder = panelElement('div'); const input = panelToggle(holder, feature[1], cfg[key], value => savePanelConfig({ [key]: value }), key); input.dataset.quickSetting = key; row.appendChild(input); }
      else row.appendChild(panelElement('span', '›', 'blx-chevron'));
      parent.appendChild(row);
    };
    if (panelUi.search) {
      const input = panelElement('input'); input.type = 'search'; input.placeholder = '搜索功能'; input.value = panelUi.query; input.setAttribute('aria-label', '搜索功能'); content.appendChild(input);
      const results = panelElement('div'); content.appendChild(results);
      const search = () => { panelUi.query = input.value; results.replaceChildren(); const q = input.value.trim().toLocaleLowerCase();
        PANEL_FEATURES.filter(f => (f[1] + ' ' + f[3]).toLocaleLowerCase().includes(q)).forEach(f => addLink(f, results, false, true));
        if (!results.childElementCount) results.textContent = '没有匹配的功能';
      }; listenPanelNode(input, 'input', e => { if (!e.isComposing) search(); }); listenPanelNode(input, 'compositionend', search); search();
      if (focus) input.focus();
    } else if (panelUi.detail === 'favorites' || (!panelUi.detail && panelUi.category === '收藏')) {
      const view = panelElement('div', null, 'bilivex-favorites-view'); content.appendChild(view);
      heading.appendChild(panelElement('span', getFavorites().length + ' 条', 'bilivex-status'));
      renderFavoritesView(panelUi.favoriteMode, panelUi.favoriteQuery);
    } else if (panelUi.detail === 'following') {
      openLiveAlertManager();
    } else if (panelUi.detail === 'quick') {
      const raw = GM_getValue('bilivex_panel_ui_v1'); const prefs = normalizePanelPreferences(raw);
      if (!panelUi.quickDraft) { panelUi.quickDraft = [...prefs.ids]; panelUi.quickBase = raw; }
      if (prefs.error) panelMessage(prefs.error);
      const selected = panelElement('div'); content.appendChild(selected);
      panelUi.quickDraft.forEach((id, index) => { const row = panelElement('div', null, 'bilivex-row'); row.appendChild(panelElement('span', PANEL_FEATURES.find(f => f[0] === id)?.[1] || id));
        row.appendChild(panelButton('上移', () => { if (index) [panelUi.quickDraft[index - 1], panelUi.quickDraft[index]] = [id, panelUi.quickDraft[index - 1]]; renderPanelView(); }));
        row.appendChild(panelButton('移除', () => { panelUi.quickDraft.splice(index, 1); renderPanelView(); })); selected.appendChild(row); });
      const picker = panelElement('select'); picker.setAttribute('aria-label', '添加常用功能');
      PANEL_FEATURES.filter(f => !panelUi.quickDraft.includes(f[0])).forEach(f => { const option = panelElement('option', f[1]); option.value = f[0]; picker.appendChild(option); }); content.appendChild(picker);
      content.appendChild(panelButton('添加', () => { if (panelUi.quickDraft.length >= 4) { panelMessage('最多四项常用入口'); return; } if (picker.value) panelUi.quickDraft.push(picker.value); renderPanelView(); }));
      content.appendChild(panelButton('恢复默认常用', () => { panelUi.quickDraft = [...PANEL_DEFAULT_QUICK]; renderPanelView(); }));
      const save = panelButton('保存常用', () => {
        try {
          const currentRaw = GM_getValue('bilivex_panel_ui_v1'); const currentPrefs = normalizePanelPreferences(currentRaw);
          if (!currentPrefs.writable) { panelMessage(currentPrefs.error); return; }
          if (currentRaw !== panelUi.quickBase) { panelUi.quickBase = currentRaw; panelMessage('常用已被其他页面修改，草稿已保留；核对后再次保存'); return; }
          const value = JSON.stringify({ schemaVersion: 1, quickIds: panelUi.quickDraft }); GM_setValue('bilivex_panel_ui_v1', value); if (GM_getValue('bilivex_panel_ui_v1') !== value) throw new Error('写入未确认'); panelUi.quickDraft = null; renderPanelView(); panelMessage('已保存常用入口'); }
        catch (e) { panelMessage('保存失败：' + e.message); }
      }); save.classList.add('blx-primary'); save.disabled = !prefs.writable; content.appendChild(save);
      content.appendChild(panelButton('取消编辑', () => { panelUi.quickDraft = null; panelBack(); }));
    } else if (panelUi.detail === 'purify-room') {
      content.appendChild(panelElement('p', '关闭后恢复原样。只改变显示，不阻止网络请求；未知内容保持可见。', 'blx-notice'));
      [['页面区域', PURIFY_KEYS.slice(0, 3)], ['聊天提示', PURIFY_KEYS.slice(3)]].forEach(([name, keys], index) => {
        const group = panelElement('section'); const heading = panelElement('h4', name, 'blx-group-label'); heading.id = 'bilivex-purify-group-' + index;
        group.setAttribute('aria-labelledby', heading.id); group.appendChild(heading); content.appendChild(group);
        if (index === 1) group.appendChild(panelElement('p', '进场提示包含上方进场动画；礼物提示包含粉丝团灯牌气泡。', 'blx-notice'));
        keys.forEach(key => { const input = panelToggle(group, PURIFY_LABELS[key], !purifyShared.stopped.has(key) && readPurify(key), value => setPurifyPreference(key, value)); input.dataset.purifyInput = key;
          const status = panelElement('p', purifyStatus(key), 'bilivex-status'); status.dataset.purifyStatus = key; const label = input.closest('label'); const main = panelElement('span', null, 'blx-row-main'); const title = label.firstElementChild; main.append(title, status); label.prepend(main); });
      });
      content.appendChild(panelElement('p', '恢复原样会关闭以上五项净化。', 'blx-notice'));
      content.appendChild(panelButton('恢复原样', () => { const failed = PURIFY_KEYS.filter(key => !setPurifyPreference(key, false)); panelMessage(failed.length ? '本页已恢复，部分设置未保存，刷新后可能重新生效' : '已关闭全部五项净化，恢复原样'); }));
    } else if (['pip', 'audio'].includes(panelUi.detail)) {
      renderMediaDetail(content, panelUi.detail);
    } else if (['quality', 'web', 'p2p', 'floating', 'tail'].includes(panelUi.detail)) {
      const map = { quality: ['autoHighestQuality', '自动最高画质'], web: ['autoWebMode', '自动网页模式'], p2p: ['blockP2PUpload', '防止 P2P 上传'], floating: ['floatDmPlus', '弹幕操作'], tail: ['tailEnabled', '小尾巴'] };
      const [key, label] = map[panelUi.detail];
      if (key === 'blockP2PUpload') content.appendChild(panelElement('p', '修改此设置会重载播放器，请先保存页面草稿。'));
      panelToggle(content, label, cfg[key], value => savePanelConfig({ [key]: value }), key);
      if (key === 'tailEnabled') { const input = panelElement('input'); input.value = cfg.tailText; input.placeholder = '如：喵'; input.setAttribute('aria-label', '尾巴内容'); listenPanelNode(input, 'change', () => savePanelConfig({ tailText: input.value })); content.appendChild(input); }
    } else if (panelUi.detail === 'alerts') {
      const account = liveAlertController?.account(liveAlertController.config());
      const input = panelToggle(content, '开播提醒', !!account?.enabled, async value => {
        try { const saved = await liveAlertController.saveConfig(current => { current.enabled = value && current.selectedUids.length > 0; current.enabledSince = current.enabled ? Date.now() : 0; });
          const actual = !!liveAlertController.account(saved)?.enabled; input.checked = actual;
          if (value && !actual) { openPanelFeature('following'); panelMessage('请先选择并保存特别关注主播'); } else panelMessage('已保存');
        } catch (e) { panelMessage('保存失败：' + e.message); return false; }
      }); input.dataset.bilivexLiveAlertToggle = '1';
      addLink(PANEL_FEATURES.find(f => f[0] === 'following'));
    } else if (panelUi.detail === 'theme') {
      ['blue', 'pink'].forEach(theme => { const button = panelButton(THEMES[theme].name, () => savePanelConfig({ theme })); button.dataset.bilivexTheme = theme; content.appendChild(button); });
    } else if (panelUi.detail === 'position') {
      content.appendChild(panelButton('恢复窗口位置', () => { if (savePanelConfig({ panelPos: null, panelAnchor: 'right' })) { panel.style.left = 'auto'; panel.style.right = '18px'; panel.style.top = '96px'; ensurePanelVisible(panel, getUiHost()); } }));
    } else if (panelUi.detail === 'about') {
      content.appendChild(panelElement('p', 'BiLivex ' + getScriptVersion() + (/[-]rc[.]/.test(getScriptVersion()) ? ' · 候选版' : '')));
      content.appendChild(panelButton('检查更新', () => checkForUpdate(true)));
    } else if (panelUi.detail === 'like') {
      content.appendChild(panelElement('p', '点击动作按钮会连续点赞 30 次。'));
      const like = panelButton('30连击 ♥', oneClickLike); like.classList.add('blx-primary'); like.dataset.bilivexLike = '1'; content.appendChild(like);
    } else if (panelUi.detail === 'sync') {
      content.appendChild(panelButton('立即同步', () => { const result = syncVideoToLiveEdge(findLiveSyncControl(panelDocument)); panelMessage(result.message || (result.status === 'synced' ? '已同步' : '暂不可用')); }));
    } else if (panelUi.category === '常用') {
      const edit = panelButton('编辑', () => openPanelFeature('quick')); edit.className = 'blx-link'; edit.setAttribute('aria-label', '编辑常用'); heading.appendChild(edit);
      const grid = panelElement('div', null, 'blx-quick-grid'); content.appendChild(grid);
      normalizePanelPreferences(GM_getValue('bilivex_panel_ui_v1')).ids.forEach(id => { const f = PANEL_FEATURES.find(f => f[0] === id); if (f) addLink(f, grid, true); });
      const guide = panelElement('p', null, 'blx-home-guide'); guide.append('功能按观看、弹幕、收藏和关注归类。', panelElement('br'), '新增功能进入分类，常用入口由你决定。'); content.appendChild(guide);
    } else {
      const features = PANEL_FEATURES.filter(f => f[2] === panelUi.category);
      const groupOf = feature => PANEL_PRESENTATION[feature[0]]?.[0] || '其他功能';
      [...new Set(features.map(groupOf))].forEach(group => { content.appendChild(panelElement('h4', group, 'blx-group-label')); features.filter(f => groupOf(f) === group).forEach(f => addLink(f)); });
    }
    const looseButtons = [...content.children].filter(node => node.tagName === 'BUTTON');
    if (looseButtons.length) { const actions = panelElement('div', null, 'blx-actions'); looseButtons[0].before(actions); looseButtons.forEach(button => actions.appendChild(button)); }
    applyTheme();
    viewport.scrollTop = panelUi.positions.get(panelViewKey()) || 0;
    refreshPanelStatus(); ensurePanelVisible(panel, getUiHost());
    sharedRuntime.panelViewResizeObserver?.disconnect();
    [content, panel.querySelector('[data-panel-drafts]'), panel.querySelector('[data-panel-task]')].forEach(node => sharedRuntime.panelViewResizeObserver?.observe(node));
    if (sharedRuntime.panelMotion) sharedRuntime.panelMotion.viewSize = panelViewSize(panel);
    if (panel.dataset.collapsed !== 'true') animatePanelChange(panel, from, { entrance: true });
    if (focus && !panelUi.search) title.focus({ preventScroll: true });
  }
  function buildPanel() {
    const existing = getPanelRoot();
    if (document !== panelDocument) return !!existing;
    const host = getUiHost(); if (!host) return false;
    ensurePanelGuardStyle();
    if (existing) { ensurePanelVisible(existing, host); setCurrentPanel(existing); bindDragHandlers(); return true; }
    if (sharedRuntime.panelMotion) cancelPanelMotion(sharedRuntime.panelMotion.panel);
    const panel = panelElement('div'); panel.id = 'bilivex-panel'; panel.dataset.uiVersion = '3';
    panel.style.cssText = 'position:fixed;right:18px;top:96px;z-index:2147483647;font:14px/1.55 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;box-sizing:border-box;';
    if (cfg.panelAnchor) panel.dataset.bilivexPanelAnchor = cfg.panelAnchor;
    if (cfg.panelPos) { panel.style.left = cfg.panelPos.left + 'px'; panel.style.top = cfg.panelPos.top + 'px'; panel.style.right = 'auto'; }
    // 沿用已确认原型的尺寸、色板及组件样式，所有规则限定在脚本面板内。
    const style = panelElement('style'); style.textContent = `
#bilivex-panel[data-ui-version="3"]{--accent:#007da7;--bright:#00aeec;--tint:#eaf7fc;--edge:#d5eaf3;max-height:min(600px,calc(100vh - 24px));background:#fff;border:1px solid #d8e3eb;border-radius:14px;box-shadow:0 16px 48px #243e5420,0 2px 8px #243e5408;overflow:hidden!important;display:flex;flex-direction:column;isolation:isolate;color:#283746;font:14px/1.55 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif}
#bilivex-panel.blx-pink{--accent:#b73d6d;--bright:#ef77a0;--tint:#fff0f5;--edge:#f5d8e4}
#bilivex-panel *,#bilivex-panel *::before,#bilivex-panel *::after{box-sizing:border-box}
#bilivex-panel button,#bilivex-panel input,#bilivex-panel select,#bilivex-panel textarea{font:inherit;max-width:100%;color:inherit}
#bilivex-panel button{cursor:pointer;border:0;background:transparent;box-shadow:none;transition:background-color .16s ease,border-color .16s ease,color .16s ease}
#bilivex-panel button:disabled,#bilivex-panel input:disabled{cursor:not-allowed;opacity:.55}
#bilivex-panel :focus-visible{outline:3px solid #0084ba;outline-offset:3px}
#bilivex-panel [hidden]{display:none!important}
#bilivex-panel .blx-panel-head{display:flex;align-items:center;gap:10px;min-height:52px;padding:8px 12px;background:linear-gradient(105deg,var(--tint),#fff);border-bottom:1px solid #edf1f4;flex-shrink:0;cursor:grab;touch-action:none;user-select:none}
#bilivex-panel .blx-brand-icon{width:32px;height:32px;border-radius:8px;object-fit:contain;background:#fff;display:block;flex-shrink:0;pointer-events:none;transform-origin:0 0}
#bilivex-panel .blx-brand{font-size:15px;font-weight:700;letter-spacing:.2px;flex:1}
#bilivex-panel .blx-icon-button{min-width:32px;min-height:32px;padding:4px 7px;border-radius:7px;font-size:18px;color:#283746;background:transparent}
#bilivex-panel .blx-icon-button:hover{background:var(--tint)}
#bilivex-panel .bilivex-panel-body{min-height:0;display:flex;flex-direction:column;overflow:hidden;padding:0}
#bilivex-panel [role=tablist]{position:relative;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:0;padding:0 8px;border-bottom:1px solid #e9eef2;flex-shrink:0}
#bilivex-panel [role=tablist]::after{content:'';position:absolute;left:8px;bottom:0;width:calc((100% - 16px)/6);height:2px;border-radius:2px;background:var(--bright);pointer-events:none;transform:translateX(calc(var(--blx-tab-index,0)*100%));transition:transform .28s cubic-bezier(.22,1,.36,1),background-color .16s ease}
#bilivex-panel [role=tab]{padding:12px 0 10px;color:#637684;font-size:13px;position:relative;border-bottom:2px solid transparent;white-space:nowrap;border-radius:0;min-width:0}
#bilivex-panel [role=tab][aria-selected=true]{color:var(--accent);font-weight:650}
#bilivex-panel [role=tab].blx-dirty::after{content:'';position:absolute;right:3px;top:9px;width:5px;height:5px;border-radius:50%;background:#ba7427}
#bilivex-panel [data-panel-category-select]{margin:0;padding:10px 12px;border:0;border-bottom:1px solid #e9eef2;background:white;color:var(--accent);font-size:13px;width:100%;flex-shrink:0;min-height:44px}
#bilivex-panel [data-panel-content]{overflow:auto;min-height:0;max-height:490px;padding:18px 16px 20px;overscroll-behavior:contain;scrollbar-width:thin}
#bilivex-panel [data-panel-view]{display:flow-root;min-width:0}
#bilivex-panel .blx-section-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px}
#bilivex-panel .blx-section-head h3,#bilivex-panel .blx-detail-head h3{font-size:15px;margin:0;font-weight:650}
#bilivex-panel .blx-detail-head{display:flex;align-items:center;gap:8px;margin-bottom:13px}
#bilivex-panel .blx-back{font-size:20px;padding:0 5px!important;min-height:32px;min-width:32px;border:0;background:transparent}
#bilivex-panel .blx-link{color:var(--accent)!important;font-size:12px;padding:5px 0!important;min-height:32px;border:0!important;background:transparent!important}
#bilivex-panel .blx-quick-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
#bilivex-panel .blx-quick{display:flex;flex-direction:column;align-items:flex-start;gap:12px;text-align:left;border:1px solid #e3ebf0!important;border-radius:10px;padding:14px!important;min-height:103px;background:transparent!important;color:#283746!important;min-width:0}
#bilivex-panel .blx-quick:hover{background:var(--tint)!important;border-color:var(--edge)!important}
#bilivex-panel .blx-quick-symbol{color:var(--accent);font-size:21px;line-height:1}
#bilivex-panel .blx-quick strong{font-size:13px;font-weight:550}
#bilivex-panel .blx-quick small{display:block;color:#6b7f8e;font-size:12px;font-weight:400;margin-top:2px}
#bilivex-panel .blx-home-guide{font-size:12px;color:#697d8b;margin:18px 0 0;line-height:1.8}
#bilivex-panel .blx-group-label{font-size:12px;color:#6a8090;letter-spacing:.6px;margin:20px 0 5px;font-weight:400}
#bilivex-panel .blx-group-label:first-of-type{margin-top:0}
#bilivex-panel .blx-row,#bilivex-panel .bilivex-row{display:flex;align-items:center;gap:9px;padding:12px 0;min-height:52px;border-bottom:1px solid #edf2f5;flex-wrap:nowrap}
#bilivex-panel .blx-row:last-child{border-bottom:0}
#bilivex-panel .blx-row-main{flex:1;min-width:0;text-align:left;padding:0!important;background:transparent!important;color:#283746!important;border:0!important;line-height:1.55}
#bilivex-panel .blx-row strong,#bilivex-panel .bilivex-row>span{font-weight:500;font-size:13px;display:block;overflow-wrap:anywhere;flex:1}
#bilivex-panel .blx-row small{display:block;color:#6b7c89;font-size:12px;margin-top:3px;overflow-wrap:anywhere}
#bilivex-panel .blx-chevron{font-size:20px;color:#8a9aa7;flex-shrink:0}
#bilivex-panel .blx-switch{appearance:none;-webkit-appearance:none;display:block;width:34px!important;height:20px!important;min-width:34px!important;min-height:20px!important;border:0!important;border-radius:20px!important;background:#b9c8d2!important;padding:3px!important;margin:0!important;flex-shrink:0;position:relative;cursor:pointer}
#bilivex-panel .blx-switch::before{content:'';display:block;width:14px;height:14px;background:white;border-radius:50%;box-shadow:0 1px 2px #0002;transition:transform .12s}
#bilivex-panel .blx-switch:checked{background:var(--bright)!important}
#bilivex-panel .blx-switch:checked::before{transform:translateX(14px)}
#bilivex-panel .blx-btn{border:1px solid #d7e2e9!important;background:white!important;border-radius:7px;padding:6px 11px!important;min-height:34px;font-size:12px;white-space:normal;line-height:1.55;color:#283746}
#bilivex-panel .blx-btn.blx-primary{background:var(--accent)!important;color:white!important;border-color:var(--accent)!important}
#bilivex-panel .blx-btn.blx-soft,#bilivex-panel [data-bilivex-theme][aria-pressed=true]{background:var(--tint)!important;color:var(--accent)!important;border-color:var(--edge)!important}
#bilivex-panel .blx-notice{font-size:12px;line-height:1.7;padding:10px 12px;border-radius:8px;background:var(--tint);color:#456675;margin:12px 0}
#bilivex-panel .bilivex-status{font-size:12px;color:#6a8090;line-height:1.7;margin:8px 0;overflow-wrap:anywhere}
#bilivex-panel .bilivex-status:empty{display:none}
#bilivex-panel [data-panel-notice]:not(:empty){padding:10px 12px;border-radius:8px;background:var(--tint);color:#456675}
#bilivex-panel [data-purify-status]{margin:3px 0 0}
#bilivex-panel .blx-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
#bilivex-panel [data-panel-content] input:not([type=checkbox]):not([type=file]),#bilivex-panel [data-panel-content] textarea,#bilivex-panel [data-panel-content] select{display:block;width:100%;margin:6px 0 12px;border:1px solid #d5e1e8;border-radius:7px;padding:9px 10px;font-size:13px;color:#334b59;background:#fff;min-width:0}
#bilivex-panel [data-panel-content] textarea{resize:vertical;min-height:72px}
#bilivex-panel [data-panel-content] input[type=checkbox]:not(.blx-switch){accent-color:var(--accent);width:16px;height:16px;flex-shrink:0}
#bilivex-panel [data-panel-task]{border-top:1px solid #e3edf3;padding:10px 12px;background:#f7fbfd;flex-shrink:0;display:flex;align-items:center;gap:8px}
#bilivex-panel [data-panel-task]>span{flex:1;min-width:0;font-size:12px;color:#45626f}
#bilivex-panel [data-panel-task]>span::before{content:'';display:inline-block;width:6px;height:6px;border-radius:50%;background:#c18830;margin-right:6px}
#bilivex-panel [data-panel-drafts]{font-size:11px;color:#916027;padding:0 4px}
#bilivex-panel #bilivex-live-alert-manager{max-height:none!important;padding:0!important;background:transparent!important}
#bilivex-panel #bilivex-live-alert-manager>div:first-child{display:none!important}
#bilivex-panel #bilivex-live-alert-manager label{border-bottom:1px solid #edf2f5!important;padding:13px 0!important;font-size:13px;gap:10px!important}
#bilivex-panel #bilivex-live-alert-manager button{border:1px solid #d7e2e9!important;background:white!important;border-radius:7px!important;padding:6px 11px!important;min-height:34px;font-size:12px!important;color:#283746}
#bilivex-panel .bilivex-favorites-view{min-height:0}
#bilivex-panel .blx-favorite-header{display:none!important}
#bilivex-panel .blx-filters{display:flex;gap:6px;flex-wrap:wrap;margin:10px 0 8px!important}
#bilivex-panel .blx-filters button{border:0!important;padding:4px 9px!important;font-size:12px!important;border-radius:6px!important;min-height:32px;background:transparent!important;color:#667d8b!important}
#bilivex-panel .blx-filters button[aria-pressed=true]{background:var(--tint)!important;color:var(--accent)!important}
#bilivex-panel .blx-favorite-list{gap:0!important;scrollbar-width:thin;border:0!important;padding:0!important}
#bilivex-panel .blx-favorite{display:block!important;border:0!important;border-bottom:1px solid #edf2f5!important;padding:12px 0;border-radius:0!important;background:transparent!important;flex-shrink:0}
#bilivex-panel .blx-favorite-top{display:flex;align-items:center;gap:8px}
#bilivex-panel .blx-favorite-top>button{border:0!important;padding:0!important;flex:1;font-size:13px!important;font-weight:400;white-space:normal!important;overflow-wrap:anywhere;color:#283746!important;line-height:1.55!important;background:transparent!important;min-height:0}
#bilivex-panel .blx-tag{font-size:11px;color:#596f7d;padding:2px 6px;background:#f1f5f7;border-radius:4px;white-space:nowrap}
#bilivex-panel .blx-favorite-actions{display:flex;gap:12px;margin-top:7px;align-items:center}
#bilivex-panel .blx-favorite-actions small{font-size:11px;color:#738693;flex:1}
#bilivex-panel .blx-favorite-actions button{font-size:12px!important;color:var(--accent)!important;min-height:28px;min-width:0!important;padding:0 2px!important;border:0!important;border-radius:0!important;background:transparent!important}
#bilivex-panel .bilivex-favorites-view[data-mode=edit] button{border:1px solid #d7e2e9!important;background:white!important;border-radius:7px!important;padding:6px 11px!important;min-height:34px;font-size:12px!important;color:#283746!important}
#bilivex-panel [data-favorite-save],#bilivex-panel #bilivex-live-alert-manager [data-follow-save]{background:var(--accent)!important;border-color:var(--accent)!important;color:white!important}
#bilivex-panel .blx-library-actions button{border:1px solid #d7e2e9!important;background:white!important;border-radius:7px!important;padding:6px 11px!important;min-height:34px;font-size:12px!important;color:#283746!important}
#bilivex-panel .blx-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
#bilivex-panel[data-collapsed=true]{border:0!important;border-radius:50%;background:#fff!important;box-shadow:0 6px 18px #007ca533!important}
#bilivex-panel[data-collapsed=true] .blx-panel-head{padding:0;min-height:56px;height:56px;border:0;background:transparent;justify-content:center;border-radius:50%}
#bilivex-panel[data-collapsed=true] .blx-brand-icon{width:56px;height:56px;border-radius:50%}
#bilivex-panel[data-collapsed=true][data-task-running=true]::after{content:'';position:absolute;right:3px;bottom:3px;width:11px;height:11px;border:2px solid #fff;border-radius:50%;background:#bf7d28;pointer-events:none}
@media(max-height:360px){#bilivex-panel[data-ui-version="3"]{overflow:auto!important}#bilivex-panel .bilivex-panel-body{overflow:visible;flex-shrink:0}#bilivex-panel [data-panel-content]{max-height:none;overflow:visible}}
@media(pointer:coarse){#bilivex-panel button{min-height:44px}#bilivex-panel .blx-switch{width:44px!important;height:28px!important;min-width:44px!important}#bilivex-panel .blx-switch::before{width:22px;height:22px}#bilivex-panel .blx-switch:checked::before{transform:translateX(16px)}}
@media(prefers-reduced-motion:reduce){#bilivex-panel,#bilivex-panel *,#bilivex-panel *::before,#bilivex-panel *::after{transition:none!important;animation:none!important}}
    `;
    panelDocument.getElementById('bilivex-panel-v3-style')?.remove(); panelDocument.head.appendChild(style); style.id = 'bilivex-panel-v3-style'; sharedRuntime.panelStyle = style;
    const head = panelElement('header', null, 'blx-panel-head');
    const logo = panelElement('img', null, 'blx-brand-icon'); logo.id = 'bilivex-logo'; logo.src = LOGO_DATA_URI; logo.alt = ''; logo.draggable = false; head.appendChild(logo);
    const title = panelElement('strong', 'BiLivex', 'blx-brand'); title.dataset.panelBrand = '1'; head.appendChild(title);
    const search = panelButton('⌕', () => { capturePanelView(); panelUi.back.push({ category: panelUi.category, detail: panelUi.detail, search: panelUi.search, query: panelUi.query }); panelUi.search = true; renderPanelView(true); }); search.className = 'blx-icon-button'; search.dataset.panelSearch = '1'; search.setAttribute('aria-label', '搜索功能'); head.appendChild(search);
    const toggle = panelButton('−', e => { if (e.detail && Date.now() - Number(panel.dataset.pointerFinished || 0) < 500) return; cfg = { ...cfg, panelCollapsed: !cfg.panelCollapsed }; setPanelCollapsed(cfg.panelCollapsed); updateCfg({ panelCollapsed: cfg.panelCollapsed }); }); toggle.className = 'blx-icon-button'; toggle.dataset.panelToggle = '1'; head.appendChild(toggle); panel.appendChild(head);
    const body = panelElement('div', null, 'bilivex-panel-body'); body.id = 'bilivex-panel-body'; toggle.setAttribute('aria-controls', body.id); panel.appendChild(body);
    const nav = panelElement('nav'); nav.setAttribute('role', 'tablist'); nav.setAttribute('aria-label', '功能分类'); body.appendChild(nav);
    PANEL_CATEGORIES.forEach((name, i) => { const button = panelButton(name, () => openPanelView(name)); button.className = ''; button.setAttribute('role', 'tab'); button.id = 'bilivex-tab-' + i; button.setAttribute('aria-controls', 'bilivex-panel-content');
      listenPanelNode(button, 'keydown', e => { const next = e.key === 'ArrowRight' ? (i + 1) % 6 : e.key === 'ArrowLeft' ? (i + 5) % 6 : e.key === 'Home' ? 0 : e.key === 'End' ? 5 : -1; if (next < 0) return; e.preventDefault(); nav.children[next].focus(); }); nav.appendChild(button); });
    const select = panelElement('select'); select.dataset.panelCategorySelect = '1'; select.setAttribute('aria-label', '当前分类'); PANEL_CATEGORIES.forEach(name => { const option = panelElement('option', '当前分类：' + name); option.value = name; select.appendChild(option); }); listenPanelNode(select, 'change', () => openPanelView(select.value)); body.appendChild(select);
    const content = panelElement('section'); content.id = 'bilivex-panel-content'; content.dataset.panelContent = '1'; content.setAttribute('role', 'tabpanel'); body.appendChild(content);
    const draftNote = panelElement('p', '', 'bilivex-status'); draftNote.dataset.panelDrafts = '1'; draftNote.style.cssText = 'margin:4px 12px;flex-shrink:0'; body.appendChild(draftNote);
    const task = panelElement('footer'); task.dataset.panelTask = '1'; task.hidden = true; task.append(panelElement('span'), panelButton('查看', () => openWheelPanel()), panelButton('暂停', () => stopWheel('已暂停'))); body.appendChild(task);
    listenPanelNode(panel, 'keydown', e => { if (e.key !== 'Escape' || e.isComposing) return; e.preventDefault(); if (panelUi.detail || panelUi.search) panelBack(); else { cfg = { ...cfg, panelCollapsed: true }; setPanelCollapsed(true); } });
    listenPanelNode(head, 'pointerdown', e => { panel.dataset.pointerFinished = '0'; if ((!cfg.panelCollapsed && e.target.closest('button,input,select,a')) || e.button !== 0) return;
      pressState.down = true; pressState.x = e.clientX; pressState.y = e.clientY; pressState.moved = false; pressState.longPressed = false; pressState.panelRef = panel; pressState.pointerId = e.pointerId; head.setPointerCapture(e.pointerId); e.preventDefault(); });
    ensurePanelVisible(panel, host); setCurrentPanel(panel); bindDragHandlers();
    sharedRuntime.openPanelView = openPanelView;
    sharedRuntime.refreshPanelStatus = refreshPanelStatus;
    sharedRuntime.restorePanel = (host = panelDocument.body || panelDocument.documentElement) => { const current = getPanelRoot(); if (current) ensurePanelVisible(current, host); };
    sharedRuntime.cancelPanelMotion = cancelPanelMotion;
    sharedRuntime.panelMotion = { panel, animations: new Set(), finish: null, last: panelMotionSnapshot(panel), viewSize: '' };
    const resize = () => { cancelPanelMotion(panel); const narrow = Math.min(360, panelWindow.innerWidth - 16) - 34 < 288; nav.hidden = narrow; select.hidden = !narrow; select.value = panelUi.category; setPanelCollapsed(cfg.panelCollapsed, false); };
    sharedRuntime.panelResizeCleanup?.();
    const removeResize = listenLifecycle(panelWindow, 'resize', resize);
    sharedRuntime.panelResizeCleanup = () => {
      removeResize();
      const index = lifecycleCleanups.indexOf(removeResize); if (index >= 0) lifecycleCleanups.splice(index, 1);
    };
    sharedRuntime.panelResizeObserver?.disconnect();
    sharedRuntime.panelResizeObserver = new panelWindow.ResizeObserver(() => {
      if (!panel.isConnected) return;
      ensurePanelVisible(panel, getUiHost());
      const motion = sharedRuntime.panelMotion;
      if (motion.animations.size) return;
      const rect = panelMotionSnapshot(panel);
      // 位置变化更新基准，内容高度变化留给内层观察器过渡。
      if (!motion.animations.size && Math.abs(rect.width - motion.last.width) < .5 && Math.abs(rect.height - motion.last.height) < .5) motion.last = rect;
    });
    sharedRuntime.panelResizeObserver.observe(panel);
    sharedRuntime.panelViewResizeObserver?.disconnect();
    sharedRuntime.panelViewResizeObserver = new panelWindow.ResizeObserver(() => {
      const motion = sharedRuntime.panelMotion, size = panelViewSize(panel);
      if (!panel.isConnected || cfg.panelCollapsed || size === motion.viewSize) return;
      motion.viewSize = size;
      const from = motion.animations.size ? panelMotionSnapshot(panel) : motion.last;
      cancelPanelMotion(panel); ensurePanelVisible(panel, getUiHost());
      animatePanelChange(panel, from);
    });
    sharedRuntime.panelMotionPreference = panelWindow.matchMedia('(prefers-reduced-motion: reduce)');
    sharedRuntime.panelMotionPreferenceCleanup?.();
    const removeMotionPreference = listenLifecycle(sharedRuntime.panelMotionPreference, 'change', () => { if (sharedRuntime.panelMotionPreference.matches) cancelPanelMotion(panel); });
    sharedRuntime.panelMotionPreferenceCleanup = () => {
      removeMotionPreference();
      const index = lifecycleCleanups.indexOf(removeMotionPreference); if (index >= 0) lifecycleCleanups.splice(index, 1);
    };
    renderPanelView(); resize(); applyTheme(); avoidChatCollision(panel); return true;
  }

  // 折叠态悬浮球的 hover 加深效果（仅阴影加深，不再有粉色变换）


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



  // 保留同一面板和草稿，尺寸、标志及内容同步过渡；重复布局校正不重播动画。
  function setPanelCollapsed(collapsed, animate = true) {
    const panel = getPanelRoot(); if (!panel) return;
    capturePanelView();
    const changed = panel.dataset.collapsed !== String(collapsed);
    const rect = preparePanelMotion(panel), anchor = getPanelAnchor(panel, rect);
    panel.style.transition = '';
    updateCfg({ panelCollapsed: collapsed });
    panel.dataset.collapsed = String(collapsed);
    const head = panel.firstElementChild, body = head.nextElementSibling;
    const returnFocus = collapsed && body.contains(panel.ownerDocument.activeElement);
    applyPanelCollapsedStyles(panel, head, head.querySelector('[data-panel-brand]'), head.querySelector('[data-panel-toggle]'), collapsed);
    panel.style.width = (collapsed ? COLLAPSED_BTN_SIZE : Math.min(360, panelWindow.innerWidth - 16)) + 'px';
    panel.style.height = collapsed ? COLLAPSED_BTN_SIZE + 'px' : 'auto';
    body.hidden = collapsed; body.style.display = collapsed ? 'none' : 'flex';
    body.inert = collapsed; body.setAttribute('aria-hidden', String(collapsed));
    head.querySelector('[data-panel-search]').hidden = collapsed;
    head.lastElementChild.textContent = collapsed ? '' : '−';
    head.lastElementChild.style.cssText = collapsed ? 'position:absolute;inset:0;width:100%;height:100%;background:transparent;border:0' : '';
    head.style.position = 'relative';
    placePanelAtAnchor(panel, rect, anchor); refreshPanelStatus();
    if (returnFocus) head.lastElementChild.focus({ preventScroll: true });
    // 展开自身带来的内层尺寸变化已纳入目标，不能当成异步内容变化取消整组动效。
    if (sharedRuntime.panelMotion) sharedRuntime.panelMotion.viewSize = panelViewSize(panel);
    if (animate && changed) animatePanelChange(panel, rect, { entrance: !collapsed, folding: collapsed, bodyWidth: Math.min(360, panelWindow.innerWidth - 16) - 2 });
    else if (sharedRuntime.panelMotion) sharedRuntime.panelMotion.last = panelMotionSnapshot(panel);
    if (!collapsed) closeWheelWindow(false);
  }

  // 将面板/头部/标题/箭头切换到折叠或展开视觉（不处理 height，由调用方控制动画）。
  function applyPanelCollapsedStyles(panel, head, title, tog, collapsed) {
    if (!panel) return;
    panel.style.background = '';
    panel.style.border = '';
    panel.style.borderRadius = '';
    panel.style.boxShadow = '';
    panel.style.color = '';
    panel.style.overflow = '';
    if (head) head.style.cssText = '';
    if (title) title.hidden = collapsed;
    const logo = panel.querySelector('#bilivex-logo'); if (logo) logo.style.display = '';
    if (tog) tog.textContent = collapsed ? '' : '−';
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
  // 按面板外边缘判定吸附；92px 与原 56px 悬浮球的 120px 中心阈值等价。
  const SNAP_EDGE_DISTANCE = 92;
  const DRAG_START_DISTANCE = 3;
  function setCurrentPanel(panel) {
    panelController.currentPanel = panel;
  }

  // 拖动时临时关闭主菜单的位置过渡，让面板实时跟随鼠标，松手后再恢复平滑动画。
  function startPanelDrag(panel) {
    if (!panel) return;
    sharedRuntime.cancelPanelMotion?.(panel);
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
    const motion = sharedRuntime.panelMotion;
    if (motion?.panel === panel) motion.last = { ...motion.last, left: clientX - dragState.ox, top: clientY - dragState.oy, right: clientX - dragState.ox + motion.last.width };
  }

  function bindDragHandlers() {
    const dragDocument = getPanelDocument();
    if (panelController.dragBound) {
      // 顶层实例拥有更稳定的生命周期；若面板曾由临时 iframe 初始化，顶层接管监听器。
      if (document !== panelDocument || (panelController.dragOwner === window && panelController.dragDocument === dragDocument)) return;
      try { if (typeof panelController.dragCleanup === 'function') panelController.dragCleanup(); } catch (e) {}
    }
    panelController.dragBound = true;
    panelController.dragOwner = window;
    panelController.dragDocument = dragDocument;
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
    dragDocument.addEventListener('pointermove', onPointerMove, { passive: true });
    const finishDrag = (e) => {
      if (!pressState.down && !dragState.dragging) return;
      const panel = pressState.panelRef || panelController.currentPanel;
      clearTimeout(pressState.longTimer);
      pressState.down = false;
      const wasDrag = dragState.moved || pressState.longPressed;
      if (panel) panel.dataset.pointerFinished = String(Date.now());
      if (!wasDrag && panel && e.type !== 'pointercancel') {
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
    dragDocument.addEventListener('pointerup', finishDrag);
    dragDocument.addEventListener('pointercancel', finishDrag);
    panelController.dragCleanup = () => {
      dragDocument.removeEventListener('pointermove', onPointerMove, { passive: true });
      dragDocument.removeEventListener('pointerup', finishDrag);
      dragDocument.removeEventListener('pointercancel', finishDrag);
      panelController.dragBound = false;
      panelController.dragOwner = null;
      panelController.dragDocument = null;
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
      // 按面板外边缘判定吸附，展开面板与悬浮球使用相同的触发距离。
      const centerX = nx + r.width / 2;
      const leftGap = nx;
      const rightGap = vw - nx - r.width;
      const snapLeft = Math.min(leftGap, rightGap) < SNAP_EDGE_DISTANCE ? leftGap <= rightGap : null;
      if (snapLeft !== null) {
        nx = snapLeft ? 8 : Math.max(8, vw - r.width - 8);
      }
      const savedTransition = panel.style.transition;
      panel.style.transition = savedTransition
        ? savedTransition + ', left 0.3s ease, top 0.3s ease'
        : 'left 0.3s ease, top 0.3s ease';
      const snapTransition = panel.style.transition;
      panel.style.left = nx + 'px';
      panel.style.top = ny + 'px';
      panel.style.right = 'auto';
      const motion = sharedRuntime.panelMotion;
      if (motion?.panel === panel) motion.last = { ...motion.last, left: nx, top: ny, right: nx + r.width };
      panel.dataset.bilivexPanelAnchor = snapLeft === null
        ? (centerX >= vw / 2 ? 'right' : 'left')
        : (snapLeft ? 'left' : 'right');
      setTimeout(() => {
        if (panel.isConnected && panel.style.transition === snapTransition) panel.style.transition = savedTransition;
      }, 320);
      // 保存吸附后的最终位置。
      updateCfg({ panelAnchor: panel.dataset.bilivexPanelAnchor, panelPos: { left: Math.round(nx), top: Math.round(ny) } });
    } catch (err) {}
  }

  // ---------- 弹幕 +1 反馈动画样式 ----------
  let bilivexAnimInjected = false;
  function injectFloatingDmAnim() {
    if (bilivexAnimInjected) return;
    if (!uiDocument.head) return;
    // 移除旧的（如有），确保颜色变量更新
    const old = uiDocument.getElementById('bilivex-float-dm-anim');
    if (old) old.remove();
    const style = uiDocument.createElement('style');
    style.id = 'bilivex-float-dm-anim';
    style.textContent = '[data-bilivex-wheel-entry]:focus-visible,.bilivex-wheel-view button:focus-visible{outline:2px solid ' + currentTheme.primary + ';outline-offset:2px;}' +
      '[data-bilivex-wheel-entry]{border-radius:50%!important;background:transparent!important;}' +
      '[data-bilivex-wheel-entry]:hover{border-color:' + currentTheme.primary + '!important;}' +
      '[data-bilivex-wheel-entry][data-wheel-status=running]{background:rgba(52,180,128,.22)!important;border-color:rgba(52,180,128,.65)!important;}' +
      '[data-bilivex-wheel-entry][data-wheel-status=paused]{background:rgba(225,166,57,.22)!important;border-color:rgba(225,166,57,.65)!important;}' +
      '[data-bilivex-wheel-entry][data-wheel-status=error]{background:rgba(222,101,101,.18)!important;border-color:rgba(222,101,101,.6)!important;}' +
      '.bilivex-wheel-view button:disabled{opacity:.55;cursor:not-allowed;}' +
      '.bilivex-wheel-view fieldset{min-inline-size:0;}' +
      '@media(prefers-reduced-motion:reduce){[data-bilivex-wheel-entry],.bilivex-wheel-view *{animation:none!important;transition:none!important;}}' +
      '@keyframes bilivex-float-plus{' +
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
    if (!text) return Promise.resolve(false);
    if (navigator.clipboard && window.isSecureContext) {
      return Promise.resolve().then(() => navigator.clipboard.writeText(text))
        .then(() => true)
        .catch(() => fallbackCopy(text));
    }
    return Promise.resolve(fallbackCopy(text));
  }
  function fallbackCopy(text) {
    if (!document.body) return false;
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;left:-9999px;';
    document.body.appendChild(ta);
    ta.select();
    let copied = false;
    try { copied = document.execCommand('copy') === true; } catch (e) {}
    ta.remove();
    return copied;
  }

  // ---------- 独轮车视图：复用主面板、收藏按钮和提示 ----------
  function createWheelButton(doc, favorites) {
    const button = doc.createElement('button');
    button.type = 'button'; button.id = favorites ? 'bilivex-favorites-wheel-entry' : 'bilivex-wheel-entry';
    button.dataset.bilivexWheelEntry = '1';
    button.setAttribute('aria-label', '打开独轮车面板'); button.title = '打开独轮车面板';
    const icon = doc.createElement('img'); icon.src = WHEEL_ICON_URI; icon.alt = ''; icon.width = 20; icon.height = 20;
    button.appendChild(icon);
    listenPanelNode(button, 'click', () => {
      const open = sharedRuntime.openWheelPanel;
      if (typeof open === 'function') open(undefined, favorites ? null : doc);
    });
    button.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:30px;height:30px;min-width:30px;margin-left:auto;border:1px solid transparent;border-radius:50%;background:transparent;padding:0;cursor:pointer;';
    button.dataset.wheelStatus = 'idle';
    return button;
  }

  function wheelField(parent, name, value, onChange, type) {
    const label = panelDocument.createElement('label'); label.className = 'wheel-field'; label.style.cssText = 'display:block;margin:8px 0;';
    const caption = panelDocument.createElement('span'); caption.textContent = ({'间隔秒数':'发送间隔 · 秒','运行时限（秒，0 为不限时）':'自动停止 · 秒（0 为不限）','单条长度（auto 为自动）':'单条长度 · auto 为自动'})[name] || name; label.appendChild(caption);
    const input = panelDocument.createElement(type === 'textarea' ? 'textarea' : 'input');
    if (type !== 'textarea') input.type = type || 'number';
    if (type === 'checkbox') input.checked = value; else input.value = value;
    input.setAttribute('aria-label', name);
    input.style.cssText = type === 'checkbox' ? 'margin-left:8px;' : 'display:block;width:100%;box-sizing:border-box;margin-top:4px;padding:5px;border:1px solid #cbd5df;border-radius:6px;color:inherit;background:transparent;font:inherit;';
    if (type === 'textarea') { input.rows = 4; input.maxLength = 20000; }
    input.addEventListener('input', () => { onChange(type === 'checkbox' ? input.checked : input.value); saveWheelConfig(); renderWheelPreview(); });
    label.appendChild(input); parent.appendChild(label); return input;
  }

  function setWheelFavoriteSelected(id, selected) {
    const favoriteId = String(id || '');
    if (!favoriteId) return 'missing';
    const ids = wheelConfig.text.favoriteIds;
    if (selected) {
      if (!getFavorites().some(item => item.id === favoriteId)) return 'missing';
      if (ids.includes(favoriteId)) return 'duplicate';
      wheelConfig.text.favoriteIds = ids.concat(favoriteId);
    } else {
      if (!ids.includes(favoriteId)) return 'missing';
      wheelConfig.text.favoriteIds = ids.filter(value => value !== favoriteId);
    }
    wheelConfig.activeSource = 'text';
    saveWheelConfig();
    renderWheelPreview();
    return selected ? 'added' : 'removed';
  }

  function renderWheelTextInputs(editor) {
    const section = panelDocument.createElement('section'); section.className = 'wheel-text-editor'; editor.appendChild(section);
    const heading = panelDocument.createElement('div'); heading.className = 'wheel-section-heading'; heading.textContent = '文字序列'; section.appendChild(heading);
    const note = panelDocument.createElement('p'); note.className = 'wheel-section-note'; note.textContent = '每个文本框是一条弹幕；超过直播间上限时会完整切分后依次发送。'; section.appendChild(note);
    const list = panelDocument.createElement('div'); list.className = 'wheel-text-list'; section.appendChild(list);
    let lines = String(wheelConfig.text.content || '').replace(/\r\n?/g, '\n').split('\n');
    if (!lines.length) lines = [''];

    const save = () => {
      wheelConfig.text.content = lines.join('\n');
      saveWheelConfig(); renderWheelPreview();
    };
    const render = (focusLast) => {
      list.textContent = '';
      lines.forEach((value, index) => {
        const row = panelDocument.createElement('div'); row.className = 'wheel-text-row';
        const input = panelDocument.createElement('input'); input.type = 'text'; input.value = value; input.maxLength = 20000;
        input.setAttribute('data-wheel-text-input', '1'); input.setAttribute('aria-label', '文字弹幕 ' + (index + 1));
        input.placeholder = '输入第 ' + (index + 1) + ' 条弹幕';
        input.addEventListener('input', () => { lines[index] = input.value; save(); });
        const remove = favoriteButton('×', 'secondary', () => {
          lines.splice(index, 1); if (!lines.length) lines.push(''); render(false); save();
        });
        remove.className = 'wheel-text-remove'; remove.setAttribute('aria-label', '删除第 ' + (index + 1) + ' 条文字弹幕');
        row.appendChild(input); row.appendChild(remove); list.appendChild(row);
      });
      if (focusLast) {
        const inputs = list.querySelectorAll('[data-wheel-text-input]');
        if (inputs.length) inputs[inputs.length - 1].focus();
      }
    };
    render(false);
    const add = favoriteButton('添加文本', 'secondary', () => { lines.push(''); render(true); save(); });
    add.className = 'wheel-text-add'; section.appendChild(add);
  }

  function renderWheelFavoritePicker(editor) {
    const details = panelDocument.createElement('details'); details.className = 'wheel-favorites-picker'; details.dataset.wheelFavoritesPicker = '1';
    const summary = panelDocument.createElement('summary'); details.appendChild(summary);
    const content = panelDocument.createElement('div'); content.className = 'wheel-favorites-picker-content'; details.appendChild(content); editor.appendChild(details);

    const render = () => {
      const selected = new Set(wheelConfig.text.favoriteIds);
      summary.textContent = '从收藏夹添加 · 已添加 ' + selected.size;
      content.textContent = '';
      const filters = panelDocument.createElement('div'); filters.className = 'wheel-favorite-filters'; content.appendChild(filters);
      ['全部', '仅当前直播间'].forEach((label, index) => {
        const button = favoriteButton(label, favoriteRoomOnly === !!index ? 'primary' : 'secondary', () => { favoriteRoomOnly = !!index; render(); });
        button.setAttribute('aria-pressed', String(favoriteRoomOnly === !!index)); filters.appendChild(button);
      });
      const list = panelDocument.createElement('div'); list.className = 'wheel-favorite-list'; content.appendChild(list);
      const allItems = getFavorites(), byId = new Map(allItems.map(item => [item.id, item]));
      const visible = filterFavoriteItems(allItems, '', favoriteRoomOnly, currentWheelRoom());
      if (!favoriteRoomOnly) {
        wheelConfig.text.favoriteIds.filter(id => !byId.has(id)).forEach(id => visible.push({ id, text: '收藏已删除', sourceRoomIds: [] }));
      }
      if (!visible.length) {
        const empty = panelDocument.createElement('p'); empty.className = 'wheel-favorite-empty';
        empty.textContent = favoriteRoomOnly && !currentWheelRoom() ? '暂无法确定当前直播间' : favoriteRoomOnly ? '当前直播间暂无收藏' : '暂无收藏'; list.appendChild(empty);
      }
      visible.forEach(item => {
        const row = panelDocument.createElement('div'); row.className = 'wheel-favorite-row'; row.dataset.wheelFavoriteId = item.id;
        const text = panelDocument.createElement('span'); text.textContent = item.text; text.title = item.text; row.appendChild(text);
        const active = selected.has(item.id);
        const button = favoriteButton(active ? '移除' : '添加', active ? 'primary' : 'secondary', () => { setWheelFavoriteSelected(item.id, !active); render(); });
        button.setAttribute('aria-pressed', String(active)); row.appendChild(button); list.appendChild(row);
      });
    };
    render();
  }

  function renderWheelStatus() {
    refreshPanelStatus();
    const view = panelDocument.querySelector('.bilivex-wheel-view');
    const running = !!wheelRelease || wheelState.status === 'starting' || !!wheelResumeTimer;
    if (view) {
      const editor = view.querySelector('fieldset'); if (editor) editor.disabled = running;
      const summary = view.querySelector('[data-wheel-summary]');
      if (summary) summary.textContent = wheelState.reason + '\n已触发 ' + wheelState.triggered + ' · 已确认 ' + wheelState.confirmed + ' · 未确认 ' + wheelState.unconfirmed;
      const start = view.querySelector('[data-wheel-start]');
      if (start) {
        start.textContent = running ? '暂停' : '开始';
        start.title = running ? '停止当前独轮车任务' : '开始发送';
        start.dataset.running = String(running);
        start.disabled = !running && !view.dataset.valid;
      }
    }
    [document, panelDocument, wheelChatDocument].filter((doc, index, docs) => doc && docs.indexOf(doc) === index).forEach(doc => {
      doc.querySelectorAll('[data-bilivex-wheel-entry]').forEach(button => {
        button.title = '独轮车：' + wheelState.reason + '，房间 ' + (wheelState.room || currentWheelRoom() || '未知');
        button.setAttribute('aria-busy', String(wheelState.status === 'starting'));
        button.dataset.wheelStatus = running ? wheelState.status === 'paused' ? 'paused' : 'running' : wheelState.status === 'error' ? 'error' : 'idle';
        button.style.boxShadow = '';
      });
    });
  }

  function renderWheelPreview() {
    const view = panelDocument.querySelector('.bilivex-wheel-view');
    if (!view) return;
    const preview = view.querySelector('[data-wheel-preview]');
    try {
      const snapshot = wheelSnapshot();
      view.dataset.valid = '1';
      const timing = snapshot.groups[0];
      const interval = timing.randomize ? timing.intervalMinSec + '～' + timing.intervalMaxSec : timing.intervalMinSec;
      preview.textContent = '首条立即发送 · 间隔 ' + interval + ' 秒\n' + snapshot.groups.flatMap(group => group.messages).slice(0, 3).map(wheelEmotionLabel).join('\n');
      const note = view.querySelector('[data-wheel-length-note]');
      if (note) note.textContent = (snapshot.compatibleLimit ? '当前使用兼容长度 20。' : '当前单条上限 ' + snapshot.limit + '。') + '预览已包含主面板设置的小尾巴，长文本会自动切分。';
    } catch (error) { view.dataset.valid = ''; preview.textContent = error.message; }
    renderWheelStatus();
  }

  function showInlineConfirmation(parent, message, action) {
    const previous = parent.querySelector('[data-wheel-confirm]'); if (previous) previous.remove();
    const area = panelDocument.createElement('div'); area.dataset.wheelConfirm = '1';
    area.style.cssText = 'padding:8px;margin-top:8px;border:1px solid #d99a21;border-radius:6px;';
    const text = panelDocument.createElement('p'); text.textContent = message; area.appendChild(text);
    area.appendChild(favoriteButton('取消', 'secondary', () => area.remove()));
    area.appendChild(favoriteButton('确认', 'primary', async () => {
      try { await action(); area.remove(); } catch (error) { text.textContent = error.message; }
    }));
    parent.appendChild(area);
  }

  function renderWheelEmotions(editor) {
    const room = currentWheelRoom();
    const help = panelDocument.createElement('div'); help.className = 'wheel-help'; help.innerHTML = '<strong>循环发送表情</strong><span>从当前直播间的 B 站表情面板选择，开车后按选择顺序循环。房间专属表情只保存在这个房间。</span>'; editor.appendChild(help);
    const toolbar = panelDocument.createElement('div'); toolbar.className = 'wheel-emotion-tools'; editor.appendChild(toolbar);
    const status = panelDocument.createElement('span'); status.textContent = room ? '正在读取房间表情…' : '暂无法确定当前直播间'; toolbar.appendChild(status);
    const refresh = favoriteButton('刷新表情', 'secondary', load); refresh.disabled = !room; toolbar.appendChild(refresh);
    const list = panelDocument.createElement('div'); list.className = 'wheel-emotion-list'; list.setAttribute('aria-label', '可选表情'); editor.appendChild(list);

    function render(items, message) {
      if (!editor.isConnected) return;
      list.textContent = '';
      const selected = new Set(wheelConfig.emotion.selectedByRoom[room] || []);
      const available = new Set(items.map(item => item.id));
      const rows = items.concat([...selected].filter(id => !available.has(id)).map(id => ({ id, label: '已选表情（当前未加载）', src: '' })));
      const packages = new Map();
      rows.forEach(item => {
        const key = item.packageId || 'other';
        if (!packages.has(key)) packages.set(key, { name: item.packageName || '其他表情', icon: item.packageIcon || item.src, items: [] });
        packages.get(key).items.push(item);
      });
      let packageIndex = 0;
      packages.forEach((pack, key) => {
        const detail = panelDocument.createElement('details'); detail.className = 'wheel-emotion-pack';
        const stateKey = room + ':' + key;
        detail.open = wheelEmotionExpanded.has(stateKey) ? wheelEmotionExpanded.get(stateKey) : packageIndex === 0;
        packageIndex += 1;
        const summary = panelDocument.createElement('summary');
        if (pack.icon) { const cover = panelDocument.createElement('img'); cover.src = pack.icon; cover.alt = ''; summary.appendChild(cover); }
        const title = panelDocument.createElement('strong'); title.textContent = pack.name; summary.appendChild(title);
        const count = panelDocument.createElement('small'); summary.appendChild(count); detail.appendChild(summary);
        const grid = panelDocument.createElement('div'); grid.className = 'wheel-emotion-grid'; detail.appendChild(grid);
        const updateCount = () => { const ids = wheelConfig.emotion.selectedByRoom[room] || []; count.textContent = pack.items.filter(item => ids.includes(item.id)).length + ' 已选 · ' + pack.items.length; };
        pack.items.forEach(item => {
          const button = panelDocument.createElement('button'); button.type = 'button'; button.className = 'wheel-emotion'; button.dataset.wheelEmotionId = item.id;
          const updateButton = () => { const active = (wheelConfig.emotion.selectedByRoom[room] || []).includes(item.id); button.setAttribute('aria-pressed', String(active)); button.setAttribute('aria-label', (active ? '取消选择 ' : '选择 ') + item.label); };
          updateButton();
          if (item.src) { const image = panelDocument.createElement('img'); image.src = item.src; image.alt = ''; image.loading = 'lazy'; button.appendChild(image); }
          const label = panelDocument.createElement('span'); label.textContent = item.label; button.appendChild(label);
          button.addEventListener('click', () => {
            const next = new Set(wheelConfig.emotion.selectedByRoom[room] || []);
            if (next.has(item.id)) next.delete(item.id); else next.add(item.id);
            wheelConfig.emotion.selectedByRoom[room] = [...next];
            saveWheelConfig(); updateButton(); updateCount();
            status.textContent = '已选 ' + next.size + ' 个 · ' + packages.size + ' 个表情包';
            renderWheelPreview();
          });
          grid.appendChild(button);
        });
        updateCount();
        detail.addEventListener('toggle', () => { wheelEmotionExpanded.set(stateKey, detail.open); });
        list.appendChild(detail);
      });
      status.textContent = message || (items.length ? '已选 ' + selected.size + ' 个 · ' + packages.size + ' 个表情包' : '没有读取到可用表情');
    }

    async function load() {
      if (!room || refresh.disabled) return;
      refresh.disabled = true; status.textContent = '正在读取房间表情…';
      try {
        const result = await discoverNativeEmoticons();
        if (result.room !== room) throw new Error('直播间已变化，请重新打开独轮车');
        wheelEmotionCatalog.set(room, result.items); render(result.items); renderWheelPreview();
      } catch (error) {
        if (editor.isConnected) { wheelEmotionCatalog.set(room, []); render([], error.message); renderWheelPreview(); }
      } finally {
        if (editor.isConnected) refresh.disabled = false;
      }
    }

    const cached = wheelEmotionCatalog.get(room);
    if (cached) render(cached); else if (room) load(); else render([]);
    const rhythm = panelDocument.createElement('div'); rhythm.className = 'wheel-rhythm'; editor.appendChild(rhythm);
    wheelField(rhythm, '间隔秒数', wheelConfig.emotion.intervalMinSec, value => { wheelConfig.emotion.intervalMinSec = value; });
    wheelField(rhythm, '运行时限（秒，0 为不限时）', wheelConfig.emotion.timeLimitSec, value => { wheelConfig.emotion.timeLimitSec = value; });
  }

  function ensureWheelWindow() {
    let view = panelDocument.getElementById('bilivex-wheel-window');
    if (view) return view;
    const style = panelDocument.createElement('style');
    style.id = 'bilivex-wheel-window-style';
    style.textContent = `
      #bilivex-wheel-window{--wheel-accent:#00aeec;--wheel-tint:rgba(0,174,236,.10);--wheel-gradient:linear-gradient(90deg,#00aeec,#5cc8ff);--wheel-shadow:rgba(0,174,236,.25);position:fixed;z-index:2147483647!important;right:24px;top:80px;width:360px;max-width:calc(100vw - 24px);max-height:calc(100vh - 32px);display:flex;flex-direction:column;box-sizing:border-box;color:#283543;background:rgba(255,255,255,.9);border:1px solid rgba(224,230,237,.9);border-radius:12px;box-shadow:0 4px 16px var(--wheel-shadow);backdrop-filter:blur(24px) saturate(150%);-webkit-backdrop-filter:blur(24px) saturate(150%);font:13px/1.5 -apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;overflow:hidden;isolation:isolate;outline:none}
      #bilivex-wheel-window[hidden]{display:none!important}
      #bilivex-wheel-window *{box-sizing:border-box}
      #bilivex-wheel-window .wheel-head{display:flex;align-items:center;gap:9px;padding:10px 12px;color:#fff;background:var(--wheel-gradient);border-bottom:1px solid rgba(255,255,255,.22);cursor:grab;touch-action:none;user-select:none;flex-shrink:0}
      #bilivex-wheel-window .wheel-symbol{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.88);display:grid;place-items:center;box-shadow:0 1px 4px rgba(0,0,0,.1)}
      #bilivex-wheel-window .wheel-heading{flex:1;min-width:0}
      #bilivex-wheel-window .wheel-heading strong{display:block;font-size:16px;font-weight:650;letter-spacing:.3px}
      #bilivex-wheel-window .wheel-heading small{font-size:11px;color:rgba(255,255,255,.82)}
      #bilivex-wheel-window button{font:inherit!important;border-radius:9px!important;box-shadow:none;transition:background .15s,color .15s,opacity .15s!important;max-width:100%}
      #bilivex-wheel-window button:focus-visible,#bilivex-wheel-window summary:focus-visible{outline:2px solid var(--wheel-accent);outline-offset:2px}
      #bilivex-wheel-window .wheel-close{border:0!important;background:rgba(255,255,255,.13)!important;color:#fff!important;width:28px;height:28px;padding:0!important;font-size:20px!important;cursor:pointer}
      #bilivex-wheel-window .wheel-close:hover{background:rgba(255,255,255,.24)!important}
      #bilivex-wheel-window .wheel-scroll{overflow:auto;min-height:0;padding:14px 14px 12px;scrollbar-width:thin;scrollbar-color:#cbd5df transparent}
      #bilivex-wheel-window fieldset{border:0;margin:0;padding:0;min-width:0}
      #bilivex-wheel-window .wheel-sources{display:flex;gap:3px;padding:4px;background:var(--wheel-tint);border-radius:9px;margin-bottom:12px}
      #bilivex-wheel-window .wheel-sources button{flex:1;border:0!important;background:transparent!important;color:#83909d!important;padding:7px 0!important;font-size:12px!important}
      #bilivex-wheel-window .wheel-sources button[aria-pressed=true]{color:#fff!important;background:var(--wheel-accent)!important;box-shadow:0 2px 6px var(--wheel-shadow)}
      #bilivex-wheel-window .wheel-field{display:block;margin:10px 0!important;color:#5f6c7b;font-size:12px}
      #bilivex-wheel-window .wheel-field>span{display:block;margin-bottom:7px}
      #bilivex-wheel-window input:not([type=checkbox]),#bilivex-wheel-window textarea{display:block;width:100%;min-width:0;border:1px solid rgba(154,177,196,.22)!important;background:rgba(255,255,255,.58)!important;border-radius:11px!important;padding:9px 11px!important;font-family:inherit;font-size:13px;line-height:1.65;color:#283543!important;outline:0}
      #bilivex-wheel-window input:focus,#bilivex-wheel-window textarea:focus{border-color:var(--wheel-accent)!important;box-shadow:0 0 0 3px var(--wheel-tint)}
      #bilivex-wheel-window textarea{min-height:112px;max-height:220px;resize:vertical;line-height:1.7!important}
      #bilivex-wheel-window textarea::placeholder,#bilivex-wheel-window input::placeholder{color:#a0aab5}
      #bilivex-wheel-window .wheel-section-heading{font-weight:600;color:#334354;margin-bottom:3px}
      #bilivex-wheel-window .wheel-section-note{margin:0 0 8px;color:#718091;font-size:11px;line-height:1.6}
      #bilivex-wheel-window .wheel-text-list{display:flex;flex-direction:column;gap:7px}
      #bilivex-wheel-window .wheel-text-row{display:flex;align-items:center;gap:7px}
      #bilivex-wheel-window .wheel-text-row input{white-space:nowrap;overflow-x:auto}
      #bilivex-wheel-window .wheel-text-remove{flex:0 0 34px;width:34px;height:34px;padding:0!important;font-size:17px!important}
      #bilivex-wheel-window .wheel-text-add{margin-top:8px;padding:6px 12px!important}
      #bilivex-wheel-window .wheel-favorites-picker{border:1px solid rgba(154,177,196,.20);border-radius:9px;padding:7px 9px;margin:12px 0!important}
      #bilivex-wheel-window .wheel-favorites-picker>summary{color:#536778;font-weight:500}
      #bilivex-wheel-window .wheel-favorite-filters{display:flex;gap:6px;margin:8px 0}
      #bilivex-wheel-window .wheel-favorite-filters button{padding:5px 9px!important}
      #bilivex-wheel-window .wheel-favorite-list{display:flex;flex-direction:column;gap:6px;max-height:220px;overflow-y:auto;scrollbar-width:thin}
      #bilivex-wheel-window .wheel-favorite-row{display:flex;align-items:center;gap:7px;min-height:34px;padding:4px 4px 4px 9px;border:1px solid rgba(154,177,196,.16);border-radius:8px;background:rgba(255,255,255,.35)}
      #bilivex-wheel-window .wheel-favorite-row>span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      #bilivex-wheel-window .wheel-favorite-row>button{flex-shrink:0;padding:4px 9px!important}
      #bilivex-wheel-window .wheel-favorite-empty{margin:8px 0;color:#8793a0;text-align:center}
      #bilivex-wheel-window .wheel-rhythm{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:8px 0}
      #bilivex-wheel-window .wheel-rhythm .wheel-field{margin:0!important}
      #bilivex-wheel-window .wheel-help{display:flex;flex-direction:column;gap:3px;margin:0 0 11px;padding:10px 11px;border:1px solid rgba(154,177,196,.18);border-left:3px solid var(--wheel-accent);border-radius:8px;background:rgba(255,255,255,.42)}
      #bilivex-wheel-window .wheel-help strong{font-size:13px;color:#334354}
      #bilivex-wheel-window .wheel-help span{font-size:11px;line-height:1.6;color:#718091}
      #bilivex-wheel-window .wheel-emotion-tools{display:flex;align-items:center;gap:8px;margin-bottom:9px}
      #bilivex-wheel-window .wheel-emotion-tools span{flex:1;color:#718091;font-size:11px}
      #bilivex-wheel-window .wheel-emotion-list{max-height:300px;overflow:auto;padding:2px;margin-bottom:8px}
      #bilivex-wheel-window .wheel-emotion-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px;padding:8px}
      #bilivex-wheel-window .wheel-emotion-pack{border:1px solid rgba(154,177,196,.20);border-radius:9px;margin:0 0 7px;overflow:hidden}
      #bilivex-wheel-window .wheel-emotion-pack>summary{padding:8px;background:var(--wheel-tint);gap:8px}
      #bilivex-wheel-window .wheel-emotion-pack>summary img{width:28px;height:28px;object-fit:contain;flex-shrink:0}
      #bilivex-wheel-window .wheel-emotion-pack>summary strong{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500}
      #bilivex-wheel-window .wheel-emotion-pack>summary small{font-size:10px;flex-shrink:0}
      #bilivex-wheel-window [data-bilivex-favorite-button=secondary]{background:var(--wheel-tint)!important;border-color:transparent!important;color:inherit!important}
      #bilivex-wheel-window [data-bilivex-favorite-button=primary]{background:var(--wheel-accent)!important;border-color:transparent!important;color:#fff!important}
      #bilivex-wheel-window [data-wheel-start][data-running=true]{background:#d89b36!important}
      #bilivex-wheel-window .wheel-emotion{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;min-width:0;padding:7px 3px!important;border:1px solid rgba(154,177,196,.22)!important;background:rgba(255,255,255,.48)!important;color:#627181!important;cursor:pointer}
      #bilivex-wheel-window .wheel-emotion img{width:30px;height:30px;object-fit:contain}
      #bilivex-wheel-window .wheel-emotion span{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;text-align:center}
      #bilivex-wheel-window .wheel-emotion[aria-pressed=true]{border-color:var(--wheel-accent)!important;background:var(--wheel-tint)!important;color:var(--wheel-accent)!important;box-shadow:inset 0 0 0 1px var(--wheel-accent)}
      #bilivex-wheel-window details{margin:10px 0;color:#7b8795;font-size:12px}
      #bilivex-wheel-window summary{cursor:pointer;list-style:none;display:flex;align-items:center;gap:6px;padding:3px 0}
      #bilivex-wheel-window summary:before{content:'›';font-size:16px;line-height:1;transition:transform .15s}
      #bilivex-wheel-window details[open]>summary:before{transform:rotate(90deg)}
      #bilivex-wheel-window .wheel-preview{margin-top:14px;padding:11px 12px;background:var(--wheel-tint);border-radius:12px;color:#536778;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;max-height:125px;overflow:auto}
      #bilivex-wheel-window .wheel-preview:before{content:'发送预览';display:block;font-size:10px;letter-spacing:.8px;color:#90a0ad;margin-bottom:5px}
      #bilivex-wheel-window .wheel-footer{flex-shrink:0;padding:11px 14px 13px;border-top:1px solid rgba(153,173,190,.16);background:rgba(255,255,255,.46)}
      #bilivex-wheel-window [data-wheel-summary]{font-size:11px;line-height:1.7;color:#8793a0;white-space:pre-line;margin-bottom:10px}
      #bilivex-wheel-window .wheel-actions{display:flex;gap:9px}
      #bilivex-wheel-window .wheel-actions button{height:38px;border:0!important;padding:0 16px!important}
      #bilivex-wheel-window [data-wheel-start]{flex:1;color:white!important;background:var(--wheel-accent)!important;font-weight:600!important}
      #bilivex-wheel-window button:disabled{opacity:.43;cursor:not-allowed!important}
      #bilivex-wheel-window [data-wheel-confirm]{margin:10px 20px;padding:12px!important;background:rgba(255,249,226,.9);max-height:190px;overflow:auto;flex-shrink:0}
      #bilivex-wheel-window [data-wheel-confirm] p{margin:0 0 10px}
      @supports not (backdrop-filter:blur(1px)){#bilivex-wheel-window{background:#f6f9fc}}
      @media(prefers-reduced-motion:reduce){#bilivex-wheel-window *{transition:none!important;animation:none!important}}
      :root[lab-style*=dark] #bilivex-wheel-window{background:rgba(30,38,50,.88);color:#e2eaf1;border-color:rgba(255,255,255,.13)}
      :root[lab-style*=dark] #bilivex-wheel-window input:not([type=checkbox]),:root[lab-style*=dark] #bilivex-wheel-window textarea{background:rgba(255,255,255,.07)!important;color:#e2eaf1!important}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-field{color:#bcc8d2}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-help,:root[lab-style*=dark] #bilivex-wheel-window .wheel-emotion{background:rgba(255,255,255,.05)!important}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-help strong{color:#e2eaf1}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-help span,:root[lab-style*=dark] #bilivex-wheel-window .wheel-emotion-tools span{color:#b7c5d0}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-section-heading,:root[lab-style*=dark] #bilivex-wheel-window .wheel-favorites-picker>summary{color:#e2eaf1}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-section-note{color:#b7c5d0}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-favorite-row{background:rgba(255,255,255,.04)}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-footer{background:rgba(255,255,255,.02)}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-preview{color:#c4d5e3}
      :root[lab-style*=dark] #bilivex-wheel-window .wheel-preview:before,:root[lab-style*=dark] #bilivex-wheel-window [data-wheel-summary],:root[lab-style*=dark] #bilivex-wheel-window details{color:#aebdca}
      :root[lab-style*=dark] #bilivex-wheel-window [data-wheel-confirm]{background:#3c3525;color:#f4e5bd}
    `;
    panelDocument.head.appendChild(style);
    view = panelDocument.createElement('section'); view.id = 'bilivex-wheel-window'; view.className = 'bilivex-wheel-view';
    view.setAttribute('role', 'dialog'); view.setAttribute('aria-label', '独轮车'); view.tabIndex = -1;
    panelDocument.body.appendChild(view);
    listenLifecycle(panelWindow, 'resize', clampWheelWindow);
    listenLifecycle(view, 'keydown', event => { if (event.key === 'Escape') { event.preventDefault(); closeWheelWindow(); } });
    return view;
  }

  function clampWheelWindow() {
    const view = panelDocument.getElementById('bilivex-wheel-window'); if (!view || view.hidden) return;
    const rect = view.getBoundingClientRect();
    view.style.left = Math.max(12, Math.min(rect.left, panelWindow.innerWidth - rect.width - 12)) + 'px';
    view.style.top = Math.max(12, Math.min(rect.top, panelWindow.innerHeight - rect.height - 12)) + 'px';
    view.style.right = 'auto';
  }

  function closeWheelWindow(restoreFocus = true) {
    if (wheelRoomStatusTimer) clearTimeout(wheelRoomStatusTimer);
    wheelRoomStatusTimer = null;
    const view = panelDocument.getElementById('bilivex-wheel-window'); if (view) view.hidden = true;
    const entry = panelDocument.getElementById('bilivex-wheel-entry'); if (entry && restoreFocus) entry.focus();
    if (wheelRelease) wheelNotify('独轮车仍在运行，可从轮椅图标打开并停止');
  }

  function renderOtherWheelRooms(details) {
    if (wheelRoomStatusTimer) clearTimeout(wheelRoomStatusTimer);
    wheelRoomStatusTimer = null;
    if (!details || !details.isConnected || !details.open) return;
    const list = details.querySelector('[data-wheel-room-status-list]');
    if (!list) return;
    list.textContent = '';
    let roomIds;
    try { roomIds = JSON.parse(GM_getValue('bilivex_wheel_rooms_v1') || '[]'); } catch (e) { roomIds = []; }
    const currentRoom = currentWheelRoom();
    const active = [];
    [...new Set(Array.isArray(roomIds) ? roomIds : [])].slice(-100).forEach(room => {
      if (!/^\d+$/.test(room) || room === currentRoom) return;
      try {
        const state = JSON.parse(GM_getValue(wheelRuntimeKey(room)) || 'null');
        if (state && Number.isFinite(state.updatedAt) && Date.now() - state.updatedAt < 15000) active.push({ room, state });
      } catch (e) {}
    });
    if (!active.length) {
      const empty = panelDocument.createElement('div'); empty.textContent = '暂无其他房间运行'; empty.dataset.wheelRoomStatusEmpty = '1'; list.appendChild(empty);
    } else {
      active.forEach(({ room, state }) => {
        const line = panelDocument.createElement('div'); line.dataset.wheelRoomStatus = room;
        const modeName = state.mode === 'emotion' ? '表情' : '文字';
        line.textContent = '房间 ' + room + ' · ' + modeName + ' · ' + (state.status === 'paused' ? '等待中' : '运行中'); list.appendChild(line);
      });
    }
    wheelRoomStatusTimer = setTimeout(() => renderOtherWheelRooms(details), 2000);
  }

  function syncWheelTheme() {
    const view = panelDocument.getElementById('bilivex-wheel-window'); if (!view) return;
    view.style.setProperty('--wheel-accent', currentTheme.primary);
    view.style.setProperty('--wheel-tint', 'rgba(' + currentTheme.primaryRgb + ',.09)');
    view.style.setProperty('--wheel-gradient', currentTheme.titleGradient);
    view.style.setProperty('--wheel-shadow', currentTheme.primaryShadow);
  }

  function openWheelPanel(source, sourceDocument) {
    if (sourceDocument && !wheelRelease) wheelChatDocument = sourceDocument;
    if (document !== panelDocument) { if (sharedRuntime.openWheelPanel) sharedRuntime.openWheelPanel(source, sourceDocument); return; }
    if (source && !wheelRelease) { wheelConfig.activeSource = source; saveWheelConfig(); }
    if (wheelRoomStatusTimer) clearTimeout(wheelRoomStatusTimer);
    wheelRoomStatusTimer = null;
    if (!cfg.panelCollapsed) setPanelCollapsed(true);
    const view = ensureWheelWindow();
    view.hidden = false; view.textContent = ''; syncWheelTheme();
    const head = panelDocument.createElement('header'); head.className = 'wheel-head';
    const symbol = panelDocument.createElement('span'); symbol.className = 'wheel-symbol';
    const icon = panelDocument.createElement('img'); icon.src = WHEEL_ICON_URI; icon.alt = ''; icon.width = 25; icon.height = 25; symbol.appendChild(icon); head.appendChild(symbol);
    const heading = panelDocument.createElement('div'); heading.className = 'wheel-heading';
    const title = panelDocument.createElement('strong'); title.textContent = '独轮车';
    const subtitle = panelDocument.createElement('small'); subtitle.textContent = '房间 ' + (currentWheelRoom() || '待连接');
    heading.appendChild(title); heading.appendChild(subtitle); head.appendChild(heading);
    const libraryButton = favoriteButton('☷', 'secondary', () => { closeWheelWindow(); openFavoritesPanel(); }); libraryButton.className = 'wheel-close'; libraryButton.setAttribute('aria-label', '返回收藏'); libraryButton.title = '打开收藏夹'; head.appendChild(libraryButton);
    const close = favoriteButton('−', 'secondary', closeWheelWindow); close.className = 'wheel-close'; close.setAttribute('aria-label', '收起独轮车'); close.title = '收起窗口，运行任务保持'; head.appendChild(close); view.appendChild(head);
    let drag = null;
    head.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.target.closest('button')) return;
      const rect = view.getBoundingClientRect(); drag = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      head.setPointerCapture(event.pointerId); event.preventDefault();
    });
    head.addEventListener('pointermove', event => { if (!drag) return; view.style.left = event.clientX - drag.x + 'px'; view.style.top = event.clientY - drag.y + 'px'; view.style.right = 'auto'; clampWheelWindow(); });
    head.addEventListener('pointerup', () => { drag = null; }); head.addEventListener('pointercancel', () => { drag = null; });
    const scroll = panelDocument.createElement('div'); scroll.className = 'wheel-scroll'; view.appendChild(scroll);
    const editor = panelDocument.createElement('fieldset'); scroll.appendChild(editor);
    const sources = panelDocument.createElement('div'); sources.className = 'wheel-sources';
    [['text', '文字'], ['emotion', '表情']].forEach(([key, label]) => {
      const button = favoriteButton(label, wheelConfig.activeSource === key ? 'primary' : 'secondary', () => openWheelPanel(key)); button.setAttribute('aria-pressed', String(wheelConfig.activeSource === key)); sources.appendChild(button);
    }); editor.appendChild(sources);
    const mode = wheelConfig.activeSource;
    const more = panelDocument.createElement('details'); const moreTitle = panelDocument.createElement('summary'); moreTitle.textContent = '更多发送选项'; more.appendChild(moreTitle);
    const lengthNote = panelDocument.createElement('p'); lengthNote.dataset.wheelLengthNote = '1'; more.appendChild(lengthNote);
    if (mode === 'text') {
      renderWheelTextInputs(editor);
      renderWheelFavoritePicker(editor);
      const rhythm = panelDocument.createElement('div'); rhythm.className = 'wheel-rhythm'; editor.appendChild(rhythm);
      wheelField(rhythm, '间隔秒数', wheelConfig.text.intervalMinSec, value => { wheelConfig.text.intervalMinSec = value; });
      wheelField(rhythm, '运行时限（秒，0 为不限时）', wheelConfig.text.timeLimitSec, value => { wheelConfig.text.timeLimitSec = value; });
      wheelField(more, '随机间隔', wheelConfig.text.randomize, value => { wheelConfig.text.randomize = value; }, 'checkbox');
      wheelField(more, '最大间隔秒数', wheelConfig.text.intervalMaxSec, value => { wheelConfig.text.intervalMaxSec = value; });
      wheelField(more, '单条长度（auto 为自动）', wheelConfig.text.maxLength, value => { wheelConfig.text.maxLength = value; }, 'text');
    } else {
      renderWheelEmotions(editor);
      wheelField(more, '随机间隔', wheelConfig.emotion.randomize, value => { wheelConfig.emotion.randomize = value; }, 'checkbox');
      wheelField(more, '最大间隔秒数', wheelConfig.emotion.intervalMaxSec, value => { wheelConfig.emotion.intervalMaxSec = value; });
    }
    wheelField(more, '返回房间后自动恢复（3 秒倒计时）', wheelConfig.resume.enabled, value => { wheelConfig.resume.enabled = value; if (!value) wheelConfig.resume.byRoom = {}; }, 'checkbox'); editor.appendChild(more);
    const preview = panelDocument.createElement('div'); preview.dataset.wheelPreview = '1'; preview.className = 'wheel-preview'; editor.appendChild(preview);
    const footer = panelDocument.createElement('footer'); footer.className = 'wheel-footer';
    const summary = panelDocument.createElement('div'); summary.dataset.wheelSummary = '1'; summary.setAttribute('role', 'status'); footer.appendChild(summary);
    const actions = panelDocument.createElement('div'); actions.className = 'wheel-actions'; footer.appendChild(actions);
    const start = favoriteButton('开始', 'primary', () => {
      if (wheelRelease || wheelState.status === 'starting' || wheelResumeTimer) { stopWheel('已暂停'); return; }
      if (!wheelConfig.riskAccepted) showInlineConfirmation(view, '连续发送可能导致禁言或账号限制。请仅发送直播间允许的内容。确认后不再提示。', () => { wheelConfig.riskAccepted = true; saveWheelConfig(); return startWheel(); });
      else startWheel();
    }); start.dataset.wheelStart = '1'; actions.appendChild(start);
    view.appendChild(footer);
    const rooms = panelDocument.createElement('details'); const roomsTitle = panelDocument.createElement('summary'); roomsTitle.textContent = '其他房间运行状态'; rooms.appendChild(roomsTitle);
    const roomList = panelDocument.createElement('div'); roomList.dataset.wheelRoomStatusList = '1'; rooms.appendChild(roomList);
    rooms.addEventListener('toggle', () => renderOtherWheelRooms(rooms)); more.appendChild(rooms);
    renderWheelPreview(); clampWheelWindow(); view.focus({ preventScroll: true });
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
    listenPanelNode(b, 'mousedown', () => { b.style.transform = 'scale(.96)'; });
    listenPanelNode(b, 'mouseup', () => { b.style.transform = ''; });
    listenPanelNode(b, 'mouseleave', () => { b.style.transform = ''; });
    listenPanelNode(b, 'click', onClick);
    return b;
  }



  function closeFavoritesPanel() { panelBack(); }

  function saveFavoritesExport() {
    const favorites = getFavorites();
    if (!favorites.length) { showToast('暂无可导出的收藏'); return; }
    const content = JSON.stringify({ format: 'bilivex-favorites', ...readFavoriteLibrary(), exportedAt: new Date().toISOString() }, null, 2);
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
        if (!data || data.format !== 'bilivex-favorites' || ![1, 2].includes(data.schemaVersion)) throw new Error('请选择有效的收藏文件');
        const incoming = normalizeFavoriteLibrary(data.schemaVersion === 1 ? data.favorites : data);
        const base = readFavoriteLibrary();
        const view = getPanelDocument().querySelector('.bilivex-favorites-view');
        showInlineConfirmation(view, '将合并导入 ' + incoming.items.length + ' 条收藏；相同文本会合并来源。', async () => {
          await commitFavoriteLibrary(library => {
            incoming.items.forEach(item => {
              const existing = library.items.find(old => old.text === item.text);
              if (existing) {
                existing.sourceRoomIds = [...new Set(existing.sourceRoomIds.concat(item.sourceRoomIds))];
              } else {
                const id = library.items.some(old => old.id === item.id) ? makeFavorite(item.text).id : item.id;
                library.items.push({ ...item, id });
              }
            });
            return library;
          }, base.revision);
          if (typeof done === 'function') done(); showToast('收藏导入完成');
        });
      } catch (error) { showToast('导入失败：' + error.message); }
    };
    reader.onerror = () => showToast('导入文件读取失败');
    reader.readAsText(file, 'utf-8');
  }

  function renderFavoritesView(mode, query) {
    const panel = getPanelRoot();
    const body = panel && panel.querySelector('.bilivex-panel-body');
    const view = body && body.querySelector('.bilivex-favorites-view');
    if (!view) return;
    const composingSearch = view.querySelector('input[type="search"]');
    if (mode === 'browse' && composingSearch && composingInputs.has(composingSearch)) return;
    const currentQuery = query == null ? (view.dataset.bilivexQuery || '') : query;
    panelUi.favoriteMode = mode; panelUi.favoriteQuery = currentQuery;
    view.dataset.bilivexQuery = currentQuery;
    view.dataset.mode = mode;
    view.textContent = '';
    const head = panelDocument.createElement('div');
    head.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;';
    const title = panelDocument.createElement('strong');
    title.textContent = mode === 'edit' ? '编辑收藏' : '弹幕收藏夹';
    title.style.cssText = 'font-size:13px;color:#303740;';
    head.className = 'blx-favorite-header'; head.appendChild(title);
    head.appendChild(favoriteButton('返回', 'secondary', () => closeFavoritesPanel()));
    view.appendChild(head);
    const filter = panelDocument.createElement('div'); filter.className = 'blx-filters'; filter.style.cssText = 'display:flex;gap:6px;margin-bottom:8px;';
    ['全部', '仅当前直播间'].forEach((label, index) => {
      const button = favoriteButton(label, favoriteRoomOnly === !!index ? 'primary' : 'secondary', () => {
        favoriteRoomOnly = !!index; renderFavoritesView(mode, currentQuery);
      });
      button.setAttribute('aria-pressed', String(favoriteRoomOnly === !!index)); filter.appendChild(button);
    }); view.appendChild(filter);

    if (mode === 'edit') {
      if (!panelUi.favoriteDraft) panelUi.favoriteDraft = { base: readFavoriteLibrary(), patches: new Map(), deleted: new Set(), added: '', saving: false, error: '', merge: false };
      const draft = panelUi.favoriteDraft;
      const note = panelElement('p', draft.error || '修改会保留到本页会话结束；保存包含其他筛选下的修改。', 'bilivex-status'); note.dataset.favoriteError = '1'; view.appendChild(note);
      const search = panelElement('input'); search.type = 'search'; search.placeholder = '搜索收藏弹幕'; search.value = currentQuery;
      listenPanelNode(search, 'change', () => renderFavoritesView('edit', search.value)); view.appendChild(search);
      const list = panelElement('div'); list.style.cssText = 'display:flex;flex-direction:column;gap:7px;max-height:260px;overflow:auto'; view.appendChild(list);
      const items = draft.base.items.map(item => ({ ...item, text: draft.patches.has(item.id) ? draft.patches.get(item.id) : item.text })).filter(item => !draft.deleted.has(item.id));
      filterFavoriteItems(items, currentQuery, favoriteRoomOnly, currentWheelRoom()).forEach(item => {
        const row = panelElement('div'); row.style.cssText = 'display:flex;gap:6px;flex-shrink:0';
        const input = panelElement('textarea'); input.value = item.text; input.dataset.bilivexFavoriteId = item.id; input.disabled = draft.saving;
        input.style.cssText = 'flex:1;min-width:0;min-height:40px;resize:vertical';
        listenPanelNode(input, 'input', () => { draft.patches.set(item.id, input.value); note.textContent = '未保存 · 包含其他筛选下的修改'; refreshPanelStatus(); }); row.appendChild(input);
        const remove = favoriteButton('删除', 'danger', () => { draft.deleted.add(item.id); renderFavoritesView('edit', currentQuery); }); remove.disabled = draft.saving; row.appendChild(remove); list.appendChild(row);
      });
      const added = panelElement('textarea'); added.placeholder = '新增收藏弹幕（空白内容不会保存）'; added.dataset.bilivexFavoriteNew = '1'; added.value = draft.added; added.disabled = draft.saving;
      listenPanelNode(added, 'input', () => { draft.added = added.value; note.textContent = '未保存 · 包含其他筛选下的修改'; refreshPanelStatus(); }); view.appendChild(added);
      const actions = panelElement('div', null, 'bilivex-row'); view.appendChild(actions);
      const cancel = favoriteButton('取消', 'secondary', () => { panelUi.favoriteDraft = null; renderFavoritesView('browse', currentQuery); }); cancel.disabled = draft.saving; actions.appendChild(cancel);
      const save = favoriteButton(draft.merge ? '合并并保存' : '保存', 'primary', async () => {
        if (draft.saving) return; draft.saving = true; renderFavoritesView('edit', currentQuery);
        const ids = [...new Set([...draft.patches.keys(), ...draft.deleted])];
        const rows = ids.filter(id => !draft.deleted.has(id)).map(id => ({ id, text: draft.patches.get(id) }));
        if (draft.added.trim()) rows.push({ text: draft.added });
        try {
          const saved = await saveFavoritePatch(draft.base, ids, rows, draft.merge);
          if (panelUi.favoriteDraft === draft) { panelUi.favoriteDraft = null; panelUi.favoriteMode = 'browse'; }
          if (getPanelDocument().querySelector('.bilivex-favorites-view')) renderFavoritesView('browse', currentQuery);
          showToast('已保存 ' + saved.items.length + ' 条收藏');
        } catch (error) { draft.error = error.message; if (error.message.startsWith('文本重复')) draft.merge = true; }
        finally { draft.saving = false; if (panelUi.favoriteDraft === draft && getPanelDocument().querySelector('.bilivex-favorites-view')) renderFavoritesView('edit', currentQuery); }
      }); save.dataset.favoriteSave = '1'; save.disabled = draft.saving; actions.appendChild(save); actions.appendChild(createWheelButton(panelDocument, true)); return;
    }

    const search = panelDocument.createElement('input');
    search.type = 'search';
    search.value = currentQuery;
    search.placeholder = '搜索收藏弹幕';
    search.style.cssText = 'width:100%;box-sizing:border-box;padding:6px 8px;border:1px solid #e0e6ed;border-radius:6px;font-size:12px;line-height:18px;color:#222;outline:none;';
    listenPanelNode(search, 'focus', () => { search.style.borderColor = currentTheme.primary; });
    listenPanelNode(search, 'blur', () => { search.style.borderColor = '#e0e6ed'; });
    listenPanelNode(search, 'input', event => { if (!event.isComposing) renderFavoritesView('browse', search.value); });
    listenPanelNode(search, 'compositionend', () => renderFavoritesView('browse', search.value));
    view.appendChild(search); view.appendChild(filter);
    const list = panelDocument.createElement('div');
    list.className = 'blx-favorite-list'; list.style.cssText = 'display:flex;flex-direction:column;gap:6px;max-height:270px;overflow:auto;margin-top:8px;padding-right:2px;';
    const favorites = filterFavoriteItems(getFavorites(), currentQuery, favoriteRoomOnly, currentWheelRoom());
    if (!favorites.length) {
      const empty = panelDocument.createElement('div');
      empty.textContent = favoriteRoomOnly && !currentWheelRoom() ? '暂无法确定当前直播间' : currentQuery ? '没有匹配的收藏' : favoriteRoomOnly ? '当前直播间暂无收藏' : '暂无收藏，可在弹幕旁点击“收藏”添加';
      empty.style.cssText = 'padding:16px 4px;color:#9099a3;font-size:12px;text-align:center;line-height:1.6;';
      list.appendChild(empty);
    }
    favorites.forEach((item) => {
      const row = panelDocument.createElement('div');
      row.className = 'blx-favorite'; row.dataset.bilivexFavoriteId = item.id;
      row.style.cssText = 'display:flex;align-items:stretch;flex-shrink:0;border:1px solid #edf0f3;border-radius:7px;background:#fff;overflow:hidden;';
      const text = panelDocument.createElement('button');
      text.type = 'button'; text.textContent = item.text; text.title = item.text + '\n来源房间：' + (item.sourceRoomIds.join('、') || '未知');
      text.style.cssText = 'flex:1;min-width:0;border:none;background:transparent;color:#3a3f45;text-align:left;padding:6px 8px;font:12px/18px -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
      listenPanelNode(text, 'click', () => { enqueuePlusSend(() => fillAndSend(item.text, { autoSend: false, finalText: item.text })).then((result) => showToast(result.message || '已填入输入框')); });
      const send = favoriteButton('+1', 'primary', (e) => { e.stopPropagation(); runPlusButtonAction(send, () => sendPlusOne(item.text)); });
      send.style.cssText += 'border-radius:0;border-top:none;border-bottom:none;border-right:none;border-left:1px solid rgba(255,255,255,.55);min-width:48px;';
      const selected = wheelConfig.text.favoriteIds.includes(item.id);
      const wheel = favoriteButton('车', 'secondary', (e) => {
        e.stopPropagation();
        const status = setWheelFavoriteSelected(item.id, true);
        if (status === 'added' || status === 'duplicate') {
          wheel.disabled = true; wheel.setAttribute('aria-pressed', 'true'); wheel.title = '已加入独轮车序列';
          showToast(status === 'added' ? '已加入独轮车序列' : '已在独轮车序列中');
        } else showToast('该收藏已不存在');
      });
      wheel.setAttribute('aria-label', '添加“' + item.text + '”到独轮车序列'); wheel.setAttribute('aria-pressed', String(selected));
      wheel.title = selected ? '已加入独轮车序列' : '添加到独轮车序列'; wheel.disabled = selected;
      wheel.style.cssText += 'border-radius:0;border-top:none;border-bottom:none;border-right:none;min-width:38px;padding-left:8px;padding-right:8px;';
      const top = panelElement('div', null, 'blx-favorite-top'); top.append(text, panelElement('span', item.sourceRoomIds.includes(currentWheelRoom()) ? '本房间' : '收藏', 'blx-tag'));
      const actions = panelElement('div', null, 'blx-favorite-actions'); const edit = favoriteButton('编辑', 'secondary', () => { renderFavoritesView('edit', currentQuery); getPanelDocument().querySelector('[data-bilivex-favorite-id="' + panelWindow.CSS.escape(item.id) + '"]')?.focus(); });
      actions.append(panelElement('small', '来源：' + (item.sourceRoomIds.includes(currentWheelRoom()) ? '当前房间' : item.sourceRoomIds.length ? '其他房间' : '未知')), edit, send, wheel); row.append(top, actions); list.appendChild(row);
    });
    view.appendChild(list);
    const actions = panelDocument.createElement('div');
    actions.className = 'blx-actions blx-library-actions'; actions.style.cssText = 'display:flex;gap:7px;margin-top:9px;';
    actions.appendChild(favoriteButton('修改', 'secondary', () => renderFavoritesView('edit', currentQuery)));
    actions.appendChild(favoriteButton('导出', 'secondary', saveFavoritesExport));
    const importer = panelDocument.createElement('input');
    importer.type = 'file'; importer.accept = 'application/json,.json'; importer.style.display = 'none';
    listenPanelNode(importer, 'change', () => importFavoritesFile(importer.files && importer.files[0], () => renderFavoritesView('browse', currentQuery)));
    actions.appendChild(favoriteButton('导入', 'secondary', () => importer.click()));
    actions.appendChild(createWheelButton(panelDocument, true));
    view.appendChild(actions); view.appendChild(importer);
    try { search.focus(); } catch (e) {}
  }

  function openFavoritesPanel() { openPanelView('收藏', 'favorites'); }

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
  let updateInitialTimer = null;
  let updateIntervalTimer = null;

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
    return '3.1.0';
  }

  function compareVersions(a, b) {
    const parse = (value) => {
      const match = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z.-]+))?$/.exec(String(value || '').trim());
      if (!match) return { core: [0, 0, 0], prerelease: ['0'] };
      return {
        core: [Number(match[1]), Number(match[2] || 0), Number(match[3] || 0)],
        prerelease: match[4] ? match[4].split('.') : []
      };
    };
    const pa = parse(a);
    const pb = parse(b);
    for (let i = 0; i < 3; i++) {
      if (pa.core[i] !== pb.core[i]) return pa.core[i] - pb.core[i];
    }
    if (!pa.prerelease.length || !pb.prerelease.length) {
      if (pa.prerelease.length === pb.prerelease.length) return 0;
      return pa.prerelease.length ? -1 : 1;
    }
    for (let i = 0; i < Math.max(pa.prerelease.length, pb.prerelease.length); i++) {
      if (pa.prerelease[i] === undefined) return -1;
      if (pb.prerelease[i] === undefined) return 1;
      const left = pa.prerelease[i];
      const right = pb.prerelease[i];
      if (left === right) continue;
      const leftNumeric = /^\d+$/.test(left);
      const rightNumeric = /^\d+$/.test(right);
      if (leftNumeric && rightNumeric) return Number(left) - Number(right);
      if (leftNumeric !== rightNumeric) return leftNumeric ? -1 : 1;
      return left.localeCompare(right);
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

  // ---------- 画中画与仅音频：会话归属顶层，媒体和原生操作归属来源文档 ----------
  const AUDIO_PLAYER_URL = 'https://cdn.jsdelivr.net/npm/mpegts.js@1.8.0/dist/mpegts.js';
  const AUDIO_PLAYER_INTEGRITY = 'sha384-0ULWmWrXKR9cXZCzOnbU6u30SGYIR9sB/zwIXPanKhS9yOFMvpssfdX9O7agZO2A';

  function mediaContentRect(rect, width, height) {
    if (!rect || !(width > 0 && height > 0 && rect.width > 0 && rect.height > 0)) return null;
    const scale = Math.min(rect.width / width, rect.height / height);
    const w = width * scale, h = height * scale;
    const left = rect.left + (rect.width - w) / 2, top = rect.top + (rect.height - h) / 2;
    return { left, top, right: left + w, bottom: top + h, width: w, height: h };
  }

  function audioPlayInfoUrl(room) {
    const url = new URL('https://api.live.bilibili.com/xlive/app-room/v2/index/getRoomPlayInfo');
    // 公开客户端协议字段用于只读取流，不使用账号令牌或签名密钥。
    url.search = new window.URLSearchParams({ room_id: String(room), only_audio: '1', only_video: '0',
      mobi_app: 'android', platform: 'android', protocol: '0,1', format: '0,2', codec: '0', qn: '250',
      http: '0', no_playurl: '0', play_type: '0', appkey: 'iVGUTjsxvpLeuDCf', build: '6215200',
      c_locale: 'zh_CN', s_locale: 'zh_CN', channel: 'bili', device: 'android', device_name: 'VTR-AL00',
      dolby: '1', free_type: '0', mask: '0', network: 'wifi',
      statistics: '{"appId":1,"platform":3,"version":"6.21.5","abtest":""}', ts: String(Math.floor(Date.now() / 1000)) }).toString();
    return url.href;
  }

  function selectAudioStream(response, all = false) {
    if (response?.code !== 0 || response.data?.live_status !== 1) throw new Error('当前直播未提供可用音频流');
    const candidates = [];
    for (const stream of response.data.playurl_info?.playurl?.stream || []) {
      if (stream.protocol_name !== 'http_stream') continue;
      for (const format of stream.format || []) {
        if (format.format_name !== 'flv') continue;
        for (const codec of format.codec || []) {
          for (const host of codec.url_info || []) {
            const url = new URL(String(codec.base_url || '') + String(host.extra || ''), host.host);
            if (url.protocol === 'https:' && /(^|\.)(bilivideo\.com|bilivideo\.cn|biliapi\.net)$/.test(url.hostname) && !candidates.includes(url.href)) candidates.push(url.href);
          }
        }
      }
    }
    if (!candidates.length) throw new Error('没有可播放的独立音频资源');
    return all ? candidates.slice(0, 2) : candidates[0];
  }

  function isAudioOnlyFlv(bytes) {
    return bytes && bytes.length >= 9 && bytes[0] === 70 && bytes[1] === 76 && bytes[2] === 86 &&
      bytes[3] === 1 && (bytes[4] & 4) !== 0 && (bytes[4] & 1) === 0;
  }

  function mediaPacket(operation, value) {
    const body = value == null ? new Uint8Array() : new window.TextEncoder().encode(JSON.stringify(value));
    const bytes = new Uint8Array(16 + body.length), view = new window.DataView(bytes.buffer);
    view.setUint32(0, bytes.length); view.setUint16(4, 16); view.setUint16(6, 1);
    view.setUint32(8, operation); view.setUint32(12, 1); bytes.set(body, 16);
    return bytes.buffer;
  }

  async function readMediaPackets(buffer, receive, current, depth = 0) {
    if (!current() || depth > 2 || buffer.byteLength > 2 * 1024 * 1024) return;
    const bytes = new Uint8Array(buffer), view = new window.DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    for (let offset = 0; offset + 16 <= bytes.length && current();) {
      const length = view.getUint32(offset), header = view.getUint16(offset + 4);
      const version = view.getUint16(offset + 6), op = view.getUint32(offset + 8);
      if (length < header || header < 16 || offset + length > bytes.length) return;
      const body = bytes.slice(offset + header, offset + length);
      if (version === 2 && op === 5) {
        const stream = new Blob([body]).stream().pipeThrough(new window.DecompressionStream('deflate'));
        const reader = stream.getReader(); const parts = []; let size = 0;
        try {
          for (;;) { const part = await reader.read(); if (part.done) break; size += part.value.length;
            if (size > 2 * 1024 * 1024 || !current()) { await reader.cancel(); return; } parts.push(part.value); }
          const all = new Uint8Array(size); let at = 0; for (const part of parts) { all.set(part, at); at += part.length; }
          await readMediaPackets(all.buffer, receive, current, depth + 1);
        } finally { reader.releaseLock(); }
      } else if ((op === 5 || op === 8) && version <= 1) {
        try { const data = JSON.parse(new window.TextDecoder().decode(body)); receive(op === 8 ? { cmd: '__BILIVEX_AUTH__', data } : data); } catch (e) { /* 未知消息不影响其他弹幕 */ }
      }
      offset += length;
    }
  }

  function registerMediaSource() {
    const sources = sharedRuntime.mediaSources || (sharedRuntime.mediaSources = new Map());
    const root = document.querySelector('#live-player, .live-player-mounter');
    const video = findActiveLiveVideo(root), player = getPageLivePlayer();
    const previous = sources.get(document);
    if (previous && previous.video === video && previous.player === player && previous.room === canonicalRoom(document) && previous.current()) return;
    const controller = sharedRuntime.mediaController;
    if (['restoring', 'recovery-needed'].includes(controller?.mode) && controller.recovery?.source.document === document && !controller.recovery.source.current()) {
      controller.stop('恢复来源已变化，请手动恢复当前直播视频', false);
    }
    if (controller?.session?.source.document === document) {
      const s = controller.session;
      if (s.kind === 'audio' && s.nativeStopped && root === s.source.root && s.source.current()) return;
      if (s.route === 'move' && s.video?.ownerDocument === s.pip?.document && root === s.source.root && s.source.current() && s.source.canReturnVideo(s)) return;
      controller.stop('播放器或直播间已变化', false);
    }
    if (!video || !player || !/^\d+$/.test(canonicalRoom(document))) { sources.delete(document); return; }
    const source = { document, window, root, video, player, room: canonicalRoom(document),
      urlRoom: roomIdFromUrl(location.href), panelUrlRoom: roomIdFromUrl(panelWindow.location.href),
      current: () => {
        try {
          return nativeSendPageActive && root.isConnected && document.querySelector('#live-player, .live-player-mounter') === root && roomIdFromUrl(location.href) === source.urlRoom &&
            roomIdFromUrl(panelWindow.location.href) === source.panelUrlRoom && canonicalRoom(document) === source.room && getPageLivePlayer() === player;
        } catch (e) { return false; }
      },
      config: () => cfg, webMode: () => isWebMode(), refreshControls: () => refreshPlayerMediaControls(),
      dismissHover: () => { if (FloatingDmEngine.hovered) FloatingDmEngine.leave(FloatingDmEngine.hovered); },
      send: (payload, context) => sendPlusOne(payload, context),
      suspend: () => resetPlayerEnhancementSchedule(), resume: () => { if (nativeSendPageActive) schedulePlayerEnhancements(true); },
      favorite: payload => addFavorite(payload.type === 'emoji-special' ? '' : payload.text, document) };
    const account = (document.cookie.match(/(?:^|;\s*)DedeUserID=(\d+)/) || [])[1] || '';
    const mediaCurrent = source.current;
    // 账号改变会取消会话；归还节点仍按原房间、播放器和锚点归属判断。
    source.canReturnVideo = s => mediaCurrent() && !!s.anchor?.parentNode?.isConnected && root.contains(s.anchor) &&
      [...root.querySelectorAll('video')].every(video => s.retainedVideos?.has(video));
    source.current = () => mediaCurrent() && ((document.cookie.match(/(?:^|;\s*)DedeUserID=(\d+)/) || [])[1] || '') === account;
    sources.set(document, source);
    sharedRuntime.refreshPanelStatus?.();
  }

  function getMediaController() {
    return sharedRuntime.mediaController || (sharedRuntime.mediaController = createMediaController());
  }

  function createMediaController() {
    const state = { mode: 'idle', message: '未启用', session: null, generation: 0, recovery: null, route: 'capture' };
    let cachedRecovery = null, restoreTask = null;
    const cancelRestore = () => { const task = restoreTask; restoreTask = null; task?.abort.abort(); };
    const update = message => { if (message) state.message = message; sharedRuntime.refreshPanelStatus?.(); sharedRuntime.mediaSources?.forEach(source => source.refreshControls?.()); };
    const sourceNow = ownerDocument => [...(sharedRuntime.mediaSources?.values() || [])].find(source => (!ownerDocument || source.document === ownerDocument) && source.current() && source.video.isConnected && getLivePlayerInfo(source.player)?.liveStatus === 1);
    const live = s => state.session === s && !s.abort.signal.aborted && s.source.current();
    const nativeModeConflict = source => {
      const documents = [panelDocument, source.document];
      return documents.some(doc => doc.fullscreenElement || doc.webkitFullscreenElement || doc.pictureInPictureElement) ||
        Number(getLivePlayerInfo(source.player)?.playerStatus) === 2 || !!panelWindow.documentPictureInPicture?.window;
    };
    const watch = (s, target, event, handler, options) => {
      target.addEventListener(event, handler, options); s.cleanups.push(() => target.removeEventListener(event, handler, options));
    };
    const later = (s, callback, delay) => {
      const timer = panelWindow.setTimeout(() => { s.timers.delete(timer); if (state.session === s && !s.abort.signal.aborted) callback(); }, delay);
      s.timers.add(timer); return timer;
    };
    const wait = (s, condition, duration, failure, start) => new Promise((resolve, reject) => {
      const end = Date.now() + duration;
      let settled = false, started = !start, poll = null;
      const finish = error => {
        if (settled) return; settled = true;
        if (poll !== null) { panelWindow.clearTimeout(poll); s.timers.delete(poll); }
        s.abort.signal.removeEventListener('abort', cancel);
        if (error) reject(error); else resolve();
      };
      const cancel = () => finish(new Error('任务已取消'));
      const fail = error => finish(error || new Error(failure));
      const check = () => {
        if (settled) return;
        try {
          if (!live(s)) { finish(new Error('来源已变化')); return; }
          if (started && condition()) { finish(); return; }
          if (Date.now() >= end) { finish(new Error(failure)); return; }
          poll = later(s, check, 100);
        } catch (error) { fail(error); }
      };
      s.abort.signal.addEventListener('abort', cancel, { once: true });
      // 原生方法返回的 Promise 与媒体就绪检查共用期限和取消边界。
      if (start && live(s)) {
        try { Promise.resolve(start()).then(() => { started = true; }, fail); }
        catch (error) { fail(error); }
      }
      check();
    });
    const json = async (s, url) => {
      const request = new panelWindow.AbortController(); const cancel = () => request.abort();
      s.abort.signal.addEventListener('abort', cancel, { once: true });
      const timer = panelWindow.setTimeout(cancel, 8000);
      try { const response = await panelWindow.fetch(url, { credentials: 'include', signal: request.signal });
        if (!response.ok) throw new Error('请求失败：' + response.status); return await response.json();
      } finally { panelWindow.clearTimeout(timer); s.abort.signal.removeEventListener('abort', cancel); }
    };
    const begin = (kind, source) => {
      cachedRecovery = null; cancelRestore();
      const s = { kind, source, route: state.route, generation: ++state.generation,
        abort: new panelWindow.AbortController(), timers: new Set(), cleanups: [], tracks: [], actions: new Set(),
        volume: source.video.volume, muted: source.video.muted, paused: source.video.paused, nativeStopped: false,
        webMode: source.webMode(), trigger: panelDocument.activeElement };
      state.session = s; state.mode = kind === 'pip' ? 'pip-opening' : 'audio-preparing'; state.recovery = null;
      // 使当前文档的画质/网页模式旧任务失效，实例间通过共享忙碌状态让权。
      source.suspend?.(); update('正在' + (kind === 'pip' ? '打开画中画' : '准备仅音频'));
      const onFullscreen = () => {
        if (state.session === s && [panelDocument, source.document].some(doc => doc.fullscreenElement || doc.webkitFullscreenElement)) stop('已退出媒体模式，请在退出全屏后重新开启');
      };
      [...new Set([panelDocument, source.document])].forEach(doc => {
        watch(s, doc, 'fullscreenchange', onFullscreen); watch(s, doc, 'webkitfullscreenchange', onFullscreen);
      });
      return s;
    };
    const resolveRoom = async s => {
      if (s.apiRoom) return s.apiRoom;
      const response = await json(s, 'https://api.live.bilibili.com/room/v1/Room/room_init?id=' + s.source.room);
      const id = Number(response?.data?.room_id);
      if (response?.code !== 0 || response.data.live_status !== 1 || !Number.isSafeInteger(id) || id <= 0) throw new Error('当前房间不是可用的直播');
      if (!live(s)) throw new Error('直播间已变化');
      s.apiRoom = String(id); return s.apiRoom;
    };

    async function restore(s) {
      if (!s.nativeStopped) return;
      if (!s.source.current()) throw new Error('原播放器已失效，请在当前直播间手动恢复视频');
      cancelRestore();
      const task = { abort: new panelWindow.AbortController(), generation: state.generation };
      restoreTask = task; state.recovery = s;
      try {
        // 整个恢复过程共用截止时间；页面取消可立即结束，迟到的 SDK 回调不再改动状态。
        await new Promise((resolve, reject) => {
          let settled = false, poll = null, deadline = null;
          const finish = error => {
            if (settled) return; settled = true;
            panelWindow.clearTimeout(poll); panelWindow.clearTimeout(deadline);
            task.abort.signal.removeEventListener('abort', cancel);
            if (error) reject(error); else resolve();
          };
          const cancel = () => finish(new Error('视频恢复已取消'));
          const fail = error => finish(error || new Error('原生视频重载失败，请点击恢复视频重试'));
          const current = () => {
            if (settled) return false;
            if (restoreTask !== task || state.generation !== task.generation || state.recovery !== s || !s.source.current()) {
              finish(new Error('播放器来源已变化')); return false;
            }
            return true;
          };
          const check = () => {
            try {
              if (!current()) return;
              const video = s.source.root.querySelector('video');
              if (video?.readyState >= 2) {
                video.volume = s.volume; video.muted = s.muted;
                if (s.paused) { video.pause(); finish(); }
                else Promise.resolve(video.play()).then(() => { if (current()) finish(); }, () => finish(new Error('请点击原生播放器恢复播放'))).catch(finish);
              } else poll = panelWindow.setTimeout(check, 100);
            } catch (error) { fail(error); }
          };
          task.abort.signal.addEventListener('abort', cancel, { once: true });
          deadline = panelWindow.setTimeout(() => finish(new Error('视频恢复超时，请点击恢复视频重试')), 6000);
          try { if (current()) Promise.resolve(s.source.player.reload()).then(check, fail); }
          catch (error) { fail(error); }
        });
        if (restoreTask === task) state.recovery = null;
      } finally { if (restoreTask === task) restoreTask = null; }
    }

    async function stop(message = '已退出媒体模式', restoreVideo = true) {
      cachedRecovery = null;
      const s = state.session;
      if (!s) {
        if (!restoreVideo && ['restoring', 'recovery-needed'].includes(state.mode)) {
          cancelRestore(); ++state.generation; state.recovery = null; state.mode = 'idle'; update(message);
        }
        return;
      }
      // 退出时读取实际设置，覆盖尚未派发的音量变化事件。
      if (s.audio) { s.volume = s.audio.volume; s.muted = s.audio.muted; }
      state.session = null; const generation = ++state.generation; state.mode = 'restoring'; s.abort.abort();
      s.actions.forEach(action => action.abort()); s.actions.clear();
      s.cleanups.splice(0).forEach(cleanup => { try { cleanup(); } catch (e) {} });
      s.timers.forEach(timer => panelWindow.clearTimeout(timer)); s.timers.clear();
      s.socket?.close(); s.releaseHover?.();
      for (const method of ['pause', 'unload', 'detachMediaElement', 'destroy']) {
        try { s.audioPlayer?.[method](); } catch (e) { /* 一个步骤失败仍继续释放其他资源 */ }
      }
      if (s.audio) { s.audio.pause(); s.audio.removeAttribute('src'); s.audio.load(); s.audio.remove(); }
      s.placeholder?.remove();
      s.tracks.forEach(track => { try { track.stop(); } catch (e) {} }); s.tracks = [];
      if (s.route === 'move' && s.video) {
        if (s.moveStyle) { s.video.style.width = s.moveStyle.width; s.video.style.height = s.moveStyle.height; }
        if (s.source.canReturnVideo(s)) s.anchor.replaceWith(s.video);
        else s.video.remove();
      } else if (s.video) s.video.srcObject = null;
      s.anchor?.remove();
      s.pip?.close();
      try {
        if (restoreVideo) await restore(s);
        if (state.generation === generation && state.mode === 'restoring') { state.mode = 'idle'; state.recovery = null; update(message); s.source.resume?.(); if (s.trigger?.isConnected) s.trigger.focus({ preventScroll: true }); }
      } catch (e) { if (state.generation !== generation) return; state.mode = s.source.current() ? 'recovery-needed' : 'idle'; state.recovery = state.mode === 'recovery-needed' ? s : null; update(e.message); }
    }

    async function connectMessages(s, receive) {
      const apiRoom = await resolveRoom(s);
      // 优先复用该来源页面正常取得的 WBI 签名请求，不拦截网络，也不导出签名和令牌。
      const observedRequest = () => {
        const entries = [...new Set([s.source.window, panelWindow])].flatMap(view => {
          try { return view.performance.getEntriesByType('resource'); } catch (e) { return []; }
        });
        for (let i = entries.length - 1; i >= 0; i--) {
          try { const url = new URL(entries[i].name);
            if (url.protocol === 'https:' && url.hostname === 'api.live.bilibili.com' &&
              url.pathname === '/xlive/web-room/v1/index/getDanmuInfo' &&
              url.searchParams.get('id') === apiRoom && url.searchParams.has('w_rid')) { s.source.messageRequestUrl = url.href; return url.href; }
          } catch (e) { /* 无关资源跳过 */ }
        }
        return s.source.messageRequestUrl || '';
      };
      let requestUrl = observedRequest();
      let data = await json(s, requestUrl || 'https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id=' + apiRoom + '&type=0');
      if (data?.code !== 0 && !requestUrl) {
        await wait(s, () => !!observedRequest(), 3000, '原页弹幕连接信息未就绪，请稍后重试');
        requestUrl = observedRequest(); data = await json(s, requestUrl);
      }
      if (!live(s)) return;
      const host = data?.code === 0 && data.data?.host_list?.find(h => /(^|\.)chat\.bilibili\.com$/.test(h.host));
      if (!host || !data.data.token) throw new Error('当前房间弹幕连接信息已失效，请刷新原页后重试');
      const account = await json(s, 'https://api.bilibili.com/x/web-interface/nav');
      const uid = Number(account?.data?.mid || 0);
      if (account?.code !== 0 || !Number.isSafeInteger(uid) || uid < 0) throw new Error('无法核对当前弹幕连接账号');
      const buvid = decodeURIComponent((s.source.document.cookie.match(/(?:^|;\s*)buvid3=([^;]+)/) || [])[1] || '');
      if (!live(s)) return;
      let retries = 0;
      const open = () => {
        if (!live(s)) return;
        const ws = new panelWindow.WebSocket('wss://' + host.host + ':' + (host.wss_port || 443) + '/sub');
        s.socket = ws; s.messageReady = false; ws.binaryType = 'arraybuffer'; let heartbeat;
        const packets = []; let reading = false;
        const readNext = async () => {
          if (reading) return; reading = true;
          try { while (packets.length && live(s) && s.socket === ws) {
            await readMediaPackets(packets.shift(), message => {
              if (message.cmd === '__BILIVEX_AUTH__') { if (message.data?.code === 0) s.messageReady = true; else stop('当前房间弹幕连接未获允许'); }
              else receive(message);
            }, () => live(s) && s.socket === ws);
          } } catch (e) { if (live(s)) update('弹幕消息解析失败'); }
          finally { reading = false; }
        };
        ws.onopen = () => {
          if (!live(s)) { ws.close(); return; }
          ws.send(mediaPacket(7, { uid, roomid: Number(apiRoom), protover: 2, buvid,
            support_ack: false, queue_uuid: '', scene: 'room', platform: 'web', type: 2, key: data.data.token }));
          const beat = () => { if (live(s) && ws.readyState === 1) { ws.send(mediaPacket(2)); heartbeat = later(s, beat, 30000); } };
          heartbeat = later(s, beat, 30000);
        };
        ws.onmessage = event => { if (live(s) && event.data?.byteLength <= 2 * 1024 * 1024 && packets.length < 8) { packets.push(event.data); readNext(); } };
        ws.onerror = () => ws.close();
        ws.onclose = () => {
          packets.length = 0;
          if (heartbeat) { panelWindow.clearTimeout(heartbeat); s.timers.delete(heartbeat); }
          if (!live(s)) return;
          if (++retries <= 3) later(s, open, 1000 * retries);
          else stop('弹幕连接已中断，画中画已退出');
        };
      }; open();
      await wait(s, () => s.messageReady, 8000, '弹幕连接未能就绪');
    }

    function buildPip(s) {
      const doc = s.pip.document;
      doc.title = 'BiLivex · 弹幕画中画';
      const style = doc.createElement('style');
      style.textContent = `html,body{margin:0;height:100%;background:#111;color:#fff;font:14px system-ui}
        body{position:relative;overflow:hidden}button,select{font:inherit;border:0;border-radius:8px;padding:5px 9px;cursor:pointer;background:#34404c;color:#fff}
        button:disabled{opacity:.5;cursor:default}button:focus-visible,input:focus-visible{outline:2px solid #ff86b0}
        #stage{position:relative;height:100%;overflow:hidden}video{width:100%;height:100%;object-fit:contain}
        #dm,#resident{position:absolute;inset:0;overflow:hidden;pointer-events:none}.dm{position:absolute;white-space:nowrap;font-size:20px;font-weight:600;text-shadow:1px 1px 3px #000;pointer-events:none}.dm img{height:32px;vertical-align:middle}
        #actions{position:fixed;display:flex;gap:4px;padding:4px;border-radius:10px;background:#253240ee;z-index:4}#actions button{min-height:30px}#plus{background:#c44174}
        #bar{position:absolute;bottom:0;left:0;right:0;display:flex;flex-wrap:wrap;gap:5px;align-items:center;padding:7px;background:#20242bee;z-index:6;opacity:0;visibility:hidden;transform:translateY(100%);pointer-events:none;transition:opacity .2s ease,transform .2s ease,visibility 0s linear .2s}
        #bar[data-visible="1"]{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;transition-delay:0s}#volume{width:80px}
        #notice{position:absolute;bottom:8px;left:8px;right:8px;display:flex;align-items:center;gap:8px;pointer-events:none;background:#172231da;border-radius:6px;padding:6px;z-index:5;font-size:12px}
        #notice[hidden]{display:none}#notice-text{flex:1;min-width:0;overflow-wrap:anywhere}#notice-close{flex:none;min-width:28px;min-height:28px;padding:2px 6px;pointer-events:auto}
        @media(prefers-reduced-motion:reduce){#bar{transition:none}}`;
      doc.head.appendChild(style);
      doc.body.innerHTML = '<main id="stage" tabindex="-1"><video muted playsinline></video><div id="dm"></div><div id="resident"></div></main><nav id="bar" aria-label="画中画控制"><button id="play">暂停</button><button id="mute">静音</button><input id="volume" type="range" min="0" max="1" step="0.05" aria-label="音量"><button id="dm-toggle">隐藏弹幕</button></nav><aside id="notice" hidden><span id="notice-text" role="status" aria-live="polite"></span><button id="notice-close" type="button" aria-label="关闭提示" title="关闭提示">×</button></aside>';
      const stage = doc.getElementById('stage'), layer = doc.getElementById('dm'), resident = doc.getElementById('resident');
      const bar = doc.getElementById('bar'), tip = doc.getElementById('notice'), tipText = doc.getElementById('notice-text');
      s.video = doc.querySelector('video'); s.records = new Set(); s.queue = []; s.tracksAt = []; s.danmakuVisible = true;
      let pointerInside = false, keyboardControls = false, noticeTimer = null, hover = null, leaveTimer = null;
      const syncBar = () => {
        const visible = pointerInside || keyboardControls;
        bar.dataset.visible = visible ? '1' : '0';
        // 提示始终避让底栏，鼠标进入时不移动关闭按钮的点击目标。
        tip.style.bottom = (bar.getBoundingClientRect().height + 8) + 'px';
        if (hover) reposition();
      };
      const cancelNoticeTimer = () => {
        if (noticeTimer !== null) { s.pip.clearTimeout(noticeTimer); noticeTimer = null; }
      };
      s.cleanups.push(cancelNoticeTimer);
      const dismissNotice = () => {
        cancelNoticeTimer();
        const focused = tip.contains(doc.activeElement);
        tip.hidden = true; tipText.textContent = '';
        if (hover) reposition();
        if (focused) (pointerInside || keyboardControls ? doc.getElementById('play') : stage).focus({ preventScroll: true });
      };
      const notice = message => {
        if (s.pip.closed || !live(s)) return;
        cancelNoticeTimer(); tipText.textContent = message; tip.hidden = false; syncBar();
        // 使用可见小窗自身的计时器，避免原页在后台时延迟提示关闭。
        noticeTimer = s.pip.setTimeout(() => { noticeTimer = null; if (live(s)) dismissNotice(); }, 5000);
      };
      s.notice = notice;
      watch(s, doc.getElementById('notice-close'), 'click', dismissNotice);
      watch(s, doc.documentElement, 'pointerenter', () => { pointerInside = true; syncBar(); });
      watch(s, doc.documentElement, 'pointerleave', () => { pointerInside = false; syncBar(); });
      watch(s, doc, 'pointerdown', () => { keyboardControls = false; syncBar(); });
      watch(s, doc, 'keydown', event => { if (event.key === 'Tab') { keyboardControls = true; syncBar(); } });
      watch(s, doc, 'focusout', () => later(s, () => {
        if (!bar.contains(doc.activeElement) && !tip.contains(doc.activeElement)) { keyboardControls = false; syncBar(); }
      }, 0));
      const contentRect = () => {
        const rect = stage.getBoundingClientRect();
        const area = mediaContentRect(rect, s.source.video.videoWidth || s.width, s.source.video.videoHeight || s.height);
        if (!area) return null;
        // 只裁去控件覆盖的区域，不用裁剪后的高度重新计算视频比例。
        if (bar.dataset.visible === '1') area.bottom = Math.min(area.bottom, rect.bottom - bar.getBoundingClientRect().height);
        if (!tip.hidden) area.bottom = Math.min(area.bottom, tip.getBoundingClientRect().top);
        area.height = Math.max(0, area.bottom - area.top);
        return area.height > 0 ? area : null;
      };
      const makeText = (node, record) => { if (record.image) { const image = doc.createElement('img'); image.src = record.image; image.alt = record.text; node.appendChild(image); } else node.textContent = record.text; };
      const inside = (rect, point) => rect && point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
      const release = () => {
        if (leaveTimer) { panelWindow.clearTimeout(leaveTimer); s.timers.delete(leaveTimer); leaveTimer = null; }
        if (!hover) return;
        if (hover.expire) { panelWindow.clearTimeout(hover.expire); s.timers.delete(hover.expire); }
        if (hover.record.node.isConnected) hover.record.node.style.visibility = '';
        hover.copy.remove(); hover.actions.remove(); hover = null;
      };
      s.releaseHover = release;
      const reposition = () => {
        if (!hover) return;
        const area = contentRect();
        const geometry = computeFloatingVisibility(hover.copy.getBoundingClientRect(), area);
        if (!geometry) { release(); return; }
        const g = geometry.visibleRect, r = hover.copy.getBoundingClientRect();
        hover.copy.style.clipPath = 'inset(' + geometry.clipTop + 'px ' + geometry.clipRight + 'px ' + geometry.clipBottom + 'px ' + geometry.clipLeft + 'px)';
        const a = hover.actions.getBoundingClientRect();
        const x = geometry.enteringFromRight || g.right + 6 + a.width > s.pip.innerWidth ? g.left - 6 - a.width : g.right + 6;
        hover.actions.style.left = Math.max(4, Math.min(x, s.pip.innerWidth - a.width - 4)) + 'px';
        hover.actions.style.top = Math.max(4, Math.min(r.top, area.bottom - a.height - 4)) + 'px';
      };
      const select = record => {
        if (!live(s) || !s.source.config().floatDmPlus || !s.danmakuVisible || !record.node.isConnected) return;
        if (hover?.record === record) return;
        release();
        const r = record.node.getBoundingClientRect();
        if (!computeFloatingVisibility(r, contentRect())) return;
        const copy = doc.createElement('div'); copy.className = 'dm'; makeText(copy, record);
        copy.style.cssText = 'position:fixed;left:' + r.left + 'px;top:' + r.top + 'px;color:' + record.color + ';pointer-events:none';
        resident.appendChild(copy); record.node.style.visibility = 'hidden';
        const actions = doc.createElement('div'); actions.id = 'actions'; actions.setAttribute('aria-label', '弹幕操作栏');
        const plus = doc.createElement('button'); plus.id = 'plus'; plus.textContent = '+1'; plus.setAttribute('aria-label', '发送这条弹幕 +1');
        plus.style.background = THEMES[s.source.config().theme]?.primary || currentTheme.primary;
        const favorite = doc.createElement('button'); favorite.textContent = '收藏';
        plus.disabled = record.busy || !record.payload.text;
        if (!record.payload.text) plus.title = '该内容暂不支持原生 +1';
        favorite.disabled = record.payload.type === 'emoji-special' || !record.payload.text;
        actions.append(plus, favorite); doc.body.appendChild(actions);
        hover = { record, copy, actions }; reposition();
        hover.expire = later(s, () => { if (hover?.record === record) release(); }, 15000);
        plus.addEventListener('click', event => {
          event.preventDefault(); event.stopPropagation();
          if (!live(s) || !s.source.config().floatDmPlus || record.busy || !record.payload.text) return;
          const action = new panelWindow.AbortController(); s.actions.add(action); record.busy = true;
          const deadline = Date.now() + 8000;
          const timer = later(s, () => action.abort(), 8000);
          runPlusButtonAction(plus, () => s.source.send(record.payload, { signal: action.signal, roomId: s.source.room,
            ownerDocument: s.source.document, silent: true, keepFocus: true,
            canContinue: () => live(s) && s.source.config().floatDmPlus && Date.now() < deadline })).then(result => {
            if (live(s)) notice(result.status === 'confirmed' ? '页面已观测到发送结果' : result.message || '未触发发送');
          }).finally(() => { record.busy = false; s.actions.delete(action); panelWindow.clearTimeout(timer); s.timers.delete(timer); });
        });
        favorite.addEventListener('click', async event => {
          event.stopPropagation();
          if (!live(s) || favorite.disabled) return;
          favorite.disabled = true;
          try { const result = await s.source.favorite(record.payload); if (live(s)) notice(result.status === 'added' ? '已收藏' : result.status === 'associated' ? '已关联来源房间' : result.status === 'duplicate' ? '已在收藏夹中' : '无法收藏该弹幕'); }
          catch (e) { notice('收藏失败'); }
          finally { if (favorite.isConnected) favorite.disabled = false; }
        });
      };
      watch(s, doc, 'pointermove', event => {
        if (!live(s)) return;
        if (!pointerInside) { pointerInside = true; syncBar(); }
        if (hover && !s.source.config().floatDmPlus) release();
        const point = { x: event.clientX, y: event.clientY };
        if ((bar.dataset.visible === '1' && inside(bar.getBoundingClientRect(), point)) || (!tip.hidden && inside(tip.getBoundingClientRect(), point))) { release(); return; }
        if (hover) {
          if (hover.actions.contains(event.target)) return;
          const g = computeFloatingVisibility(hover.copy.getBoundingClientRect(), contentRect());
          const a = hover.actions.getBoundingClientRect();
          const v = g?.visibleRect;
          const bridge = v && { left: Math.min(v.right, a.right), right: Math.max(v.left, a.left), top: Math.max(v.top, a.top), bottom: Math.min(v.bottom, a.bottom) };
          if (inside(v, point) || inside(a, point) || inside(bridge, point)) {
            if (leaveTimer) { panelWindow.clearTimeout(leaveTimer); s.timers.delete(leaveTimer); leaveTimer = null; } return;
          }
          if (!leaveTimer) leaveTimer = later(s, () => { leaveTimer = null; release(); }, 120);
          return;
        }
        const records = [...s.records].reverse();
        const record = records.find(item => computeFloatingVisibility(item.node.getBoundingClientRect(), contentRect(), point)?.pointerInside);
        if (record) select(record);
      });
      watch(s, doc, 'pointerleave', release);
      watch(s, s.pip, 'blur', () => { pointerInside = false; keyboardControls = false; syncBar(); release(); });
      watch(s, s.pip, 'resize', () => { syncBar(); reposition(); });
      watch(s, doc, 'keydown', event => { if (event.key === 'Escape') release(); });
      doc.getElementById('dm-toggle').onclick = () => { s.danmakuVisible = !s.danmakuVisible; layer.hidden = !s.danmakuVisible; release(); doc.getElementById('dm-toggle').textContent = s.danmakuVisible ? '隐藏弹幕' : '显示弹幕'; };
      const syncControls = () => {
        doc.getElementById('play').textContent = s.source.video.paused ? '播放' : '暂停';
        doc.getElementById('mute').textContent = s.source.video.muted ? '取消静音' : '静音';
        doc.getElementById('volume').value = String(s.source.video.volume);
        const sourceLabel = s.sourceCover?.querySelector('[data-bilivex-pip-source-label]');
        if (sourceLabel) sourceLabel.textContent = s.source.video.paused ? '增强画中画已暂停' : '正在增强画中画中播放';
        if (s.source.video.paused) s.records.forEach(record => record.animation.pause());
        else s.records.forEach(record => record.animation.play());
      };
      doc.getElementById('play').onclick = () => { if (s.source.video.paused) s.source.video.play().catch(() => notice('请在原页恢复播放')); else s.source.video.pause(); };
      doc.getElementById('mute').onclick = () => { s.source.video.muted = !s.source.video.muted; };
      doc.getElementById('volume').oninput = event => { s.source.video.volume = Number(event.target.value); };
      ['play', 'pause', 'volumechange'].forEach(event => watch(s, s.source.video, event, syncControls)); syncControls();
      s.receive = message => {
        const record = parsePipMessage(message);
        if (!record || !s.danmakuVisible || !live(s)) return;
        record.generation = s.generation; s.queue.push(record); if (s.queue.length > 200) s.queue.shift();
      };
      const pump = () => {
        if (!live(s)) return;
        if (!s.source.config().floatDmPlus && hover) { release(); s.actions.forEach(action => action.abort()); }
        const area = contentRect(), now = Date.now();
        if (area && s.queue.length && !s.source.video.paused && s.records.size < 80) {
          const track = Array.from({ length: Math.max(1, Math.floor(area.height / 36)) }, (_, i) => i).find(i => !s.tracksAt[i] || s.tracksAt[i] <= now);
          if (track !== undefined) {
            const record = s.queue.shift(), node = doc.createElement('div'); node.className = 'dm'; makeText(node, record);
            node.style.color = record.color; node.style.left = (area.right - stage.getBoundingClientRect().left) + 'px';
            node.style.top = (area.top - stage.getBoundingClientRect().top + track * 36) + 'px'; layer.appendChild(node);
            record.node = node;
            const duration = Math.max(6000, Math.min(14000, (area.width + node.offsetWidth) / 100 * 1000));
            record.animation = node.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-' + (area.width + node.offsetWidth) + 'px)' }], { duration, easing: 'linear', fill: 'forwards' });
            s.tracksAt[track] = now + duration; s.records.add(record);
            record.animation.onfinish = () => { node.remove(); s.records.delete(record); };
          }
        }
        later(s, pump, 80);
      }; pump();
      s.cleanups.push(() => { s.records.forEach(record => { record.animation.cancel(); record.node.remove(); }); s.records.clear(); s.queue = []; });
      notice('小窗独立弹幕暂不继承原生屏蔽词；悬停操作沿用弹幕操作开关');
    }

    function coverPipSource(s) {
      const doc = s.source.document, root = s.source.root;
      const mask = doc.createElement('div'); mask.dataset.bilivexPipSource = '1'; s.sourceCover = mask;
      s.cleanups.push(() => mask.remove());
      const control = root.querySelector('#web-player-controller-wrap-el, .live-web-player-controller');
      const controlZ = control ? Number(s.source.window.getComputedStyle(control).zIndex) : NaN;
      // 同层时将遮罩放在控件前面；覆盖原页视频和弹幕，保留原生底栏。
      mask.style.cssText = 'position:absolute;inset:0;z-index:' + (Number.isFinite(controlZ) && controlZ > 0 ? controlZ : 12) + ';background:#101419;color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;font:16px system-ui';
      const label = doc.createElement('p'); label.dataset.bilivexPipSourceLabel = '1';
      label.textContent = s.source.video.paused ? '增强画中画已暂停' : '正在增强画中画中播放'; label.style.margin = '0';
      const back = doc.createElement('button'); back.type = 'button'; back.textContent = '返回直播间';
      back.style.cssText = 'min-height:36px;padding:6px 16px;border:0;border-radius:8px;background:' + (THEMES[s.source.config().theme]?.primary || currentTheme.primary) + ';color:white;font:14px system-ui;cursor:pointer';
      mask.append(label, back);
      let anchor = control; while (anchor?.parentElement && anchor.parentElement !== root) anchor = anchor.parentElement;
      root.insertBefore(mask, anchor?.parentElement === root ? anchor : null);
      s.source.dismissHover?.();
      watch(s, mask, 'click', event => event.stopPropagation());
      watch(s, mask, 'dblclick', event => event.stopPropagation());
      watch(s, back, 'click', event => { event.stopPropagation(); if (live(s)) stop(); });
    }

    async function openPip(ownerDocument) {
      if (state.mode !== 'idle') { update('请先退出当前模式，再开启画中画'); return false; }
      const source = sourceNow(ownerDocument);
      if (!source) { update('未找到正在直播的原生视频'); return false; }
      if (!panelWindow.documentPictureInPicture) { update('当前浏览器不支持带弹幕画中画'); return false; }
      if (nativeModeConflict(source)) { update('请先退出全屏或已有画中画，再开启带弹幕画中画'); return false; }
      const s = begin('pip', source); s.width = source.video.videoWidth; s.height = source.video.videoHeight;
      try {
        // 开窗在用户点击链内发起；消息接口与媒体准备在获得窗口后进行。
        const pip = await panelWindow.documentPictureInPicture.requestWindow({ width: 670, height: 430 });
        if (!live(s)) { pip.close(); return false; }
        s.pip = pip; watch(s, pip, 'pagehide', () => { if (state.session === s) stop(); });
        buildPip(s);
        if (s.route === 'move') {
          s.moveStyle = { width: source.video.style.width, height: source.video.style.height };
          s.retainedVideos = new Set([...source.root.querySelectorAll('video')].filter(video => video !== source.video));
          s.anchor = source.document.createComment('BiLivex 视频原位'); source.video.before(s.anchor);
          s.video.replaceWith(source.video); s.video = source.video;
          s.video.style.width = '100%'; s.video.style.height = '100%';
          await wait(s, () => s.video.readyState >= 2 && s.video.videoWidth > 0 && s.video.videoHeight > 0, 5000, '原视频尚未就绪，请在直播画面恢复后重试');
        } else {
          if (typeof source.video.captureStream !== 'function') throw new Error('当前视频无法捕获，请选择搬移原视频后重试');
          const stream = source.video.captureStream(); s.tracks = stream.getTracks();
          const tracks = stream.getVideoTracks(); if (!tracks.length) throw new Error('没有可捕获的视频轨道');
          s.video.srcObject = new panelWindow.MediaStream(tracks); s.video.muted = true;
          await wait(s, () => s.video.videoWidth > 0 && s.video.readyState >= 2, 5000, '画面捕获不可用，请选择搬移原视频后重试', () => s.video.play());
          tracks.forEach(track => watch(s, track, 'ended', () => stop('源视频轨道已结束')));
        }
        coverPipSource(s);
        await connectMessages(s, s.receive);
        if (!live(s)) return false;
        state.mode = 'pip-active'; update('画中画生效 · 悬停弹幕可 +1');
        health(s); return true;
      } catch (error) { if (state.session === s) await stop('画中画开启失败：' + error.message); return false; }
    }

    async function loadAudioLibrary(s) {
      // 库注入 panelDocument，必须从该文档的页面上下文读取，不能误读来源 iframe。
      const page = typeof unsafeWindow === 'undefined' ? panelWindow : panelWindow === window ? unsafeWindow : unsafeWindow.top;
      if (page.mpegts?.createPlayer && page.mpegts.version === '1.8.0') return page.mpegts;
      let promise = sharedRuntime.audioLibraryPromise;
      if (!promise) {
        promise = new Promise((resolve, reject) => {
          const previous = page.mpegts;
          const script = panelDocument.createElement('script'); script.src = AUDIO_PLAYER_URL;
          script.integrity = AUDIO_PLAYER_INTEGRITY; script.crossOrigin = 'anonymous';
          const timer = panelWindow.setTimeout(() => { script.remove(); reject(new Error('音频播放器加载超时')); }, 10000);
          script.onload = () => { panelWindow.clearTimeout(timer); script.remove(); const library = page.mpegts; if (previous) page.mpegts = previous; if (library?.createPlayer && library.version === '1.8.0') resolve(library); else reject(new Error('当前页面无法加载音频播放器')); };
          script.onerror = () => { panelWindow.clearTimeout(timer); script.remove(); reject(new Error('音频播放器加载失败')); };
          panelDocument.head.appendChild(script);
        });
        sharedRuntime.audioLibraryPromise = promise;
        promise.catch(() => { if (sharedRuntime.audioLibraryPromise === promise) sharedRuntime.audioLibraryPromise = null; });
      }
      const library = await promise; if (!live(s)) throw new Error('任务已取消'); return library;
    }

    async function probeAudio(s, url) {
      const request = new panelWindow.AbortController(); const cancel = () => request.abort();
      s.abort.signal.addEventListener('abort', cancel, { once: true });
      const timer = panelWindow.setTimeout(cancel, 8000);
      try {
        const response = await panelWindow.fetch(url, { signal: request.signal, headers: { Range: 'bytes=0-12' } });
        if (!response.ok || !response.body) throw new Error('音频流不可访问（HTTP ' + response.status + '）');
        const reader = response.body.getReader(); const head = new Uint8Array(9); let used = 0;
        try { while (used < 9) { const part = await reader.read(); if (part.done) break; const take = Math.min(9 - used, part.value.length); head.set(part.value.subarray(0, take), used); used += take; } }
        finally { await reader.cancel().catch(() => {}); }
        if (used < 9 || !isAudioOnlyFlv(head)) throw new Error('返回的媒体包含视频或没有独立音轨');
      } finally { request.abort(); panelWindow.clearTimeout(timer); s.abort.signal.removeEventListener('abort', cancel); }
    }

    async function openAudio(ownerDocument) {
      if (state.mode !== 'idle') { update('请先退出当前模式，再开启仅音频'); return false; }
      const source = sourceNow(ownerDocument);
      if (!source) { update('当前直播视频尚未就绪，请等待后重试'); return false; }
      if (nativeModeConflict(source)) { update('请先退出全屏或已有画中画，再开启仅音频'); return false; }
      if (typeof source.player.stopPlayback !== 'function' || typeof source.player.reload !== 'function') { update('当前播放器不支持安全停止与恢复视频'); return false; }
      const s = begin('audio', source);
      try {
        const result = await json(s, audioPlayInfoUrl(await resolveRoom(s)));
        const candidates = selectAudioStream(result, true);
        const library = await loadAudioLibrary(s);
        if (!library.isSupported()) throw new Error('当前浏览器不支持音频流解封装');
        let url = '', lastError;
        for (const candidate of candidates) {
          try { await probeAudio(s, candidate); url = candidate; break; }
          catch (error) { lastError = error; if (!live(s)) return false; }
        }
        if (!url) throw lastError || new Error('当前房间音频源不可用');
        if (!live(s)) return false;
        // 先核实独立音轨，再停止原生下载；新音频流只在停止之后启动。
        s.nativeStopped = true;
        await wait(s, () => { const v = source.root.querySelector('video'); return !v || v.readyState < 2 || !v.currentSrc; }, 5000, '原生视频未能停止加载', () => source.player.stopPlayback());
        const audio = source.document.createElement('audio'); s.audio = audio; audio.volume = s.volume; audio.muted = s.muted;
        // 准备期间已允许调节音量和静音，立即保留用户设置。
        watch(s, audio, 'volumechange', () => { s.volume = audio.volume; s.muted = audio.muted; });
        audio.controls = false; audio.hidden = true; audio.setAttribute('aria-label', '仅音频播放器');
        const placeholder = source.document.createElement('div'); s.placeholder = placeholder;
        placeholder.id = 'bilivex-audio-mode';
        // stopPlayback 会显示层级 19 的原生封面，控制区域必须完整覆盖封面并接收指针。
        placeholder.style.cssText = 'position:absolute;inset:0;z-index:100;pointer-events:auto;background:#15202cee;color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px';
        ['click', 'dblclick', 'pointerdown', 'mousedown', 'keydown'].forEach(event => watch(s, placeholder, event, e => e.stopPropagation()));
        const text = source.document.createElement('p'); text.textContent = '仅音频模式 · 恢复视频可返回直播画面';
        const play = source.document.createElement('button'); play.textContent = s.paused ? '播放音频' : '暂停音频'; play.disabled = true;
        const back = source.document.createElement('button'); back.textContent = '恢复视频'; back.onclick = () => stop();
        const mute = source.document.createElement('button'); mute.textContent = audio.muted ? '取消静音' : '静音';
        mute.onclick = () => { audio.muted = !audio.muted; mute.textContent = audio.muted ? '取消静音' : '静音'; };
        const volume = source.document.createElement('input'); volume.type = 'range'; volume.min = '0'; volume.max = '1'; volume.step = '.05'; volume.value = String(audio.volume); volume.setAttribute('aria-label', '仅音频音量'); volume.oninput = () => { audio.volume = Number(volume.value); };
        [play, back, mute].forEach(button => { button.style.cssText = 'min-height:36px;padding:6px 14px;border:0;border-radius:8px;cursor:pointer;background:#35465b;color:white;font:14px system-ui'; });
        placeholder.append(text, audio, play, mute, volume, back); source.root.appendChild(placeholder);
        // 让解封装器读取实际轨道；不通过覆盖 hasVideo 制造“没有视频”的结果。
        const player = library.createPlayer({ type: 'flv', isLive: true, url },
          { enableWorker: false, enableStashBuffer: false, autoCleanupSourceBuffer: true, autoCleanupMaxBackwardDuration: 20, autoCleanupMinBackwardDuration: 5 });
        s.audioPlayer = player;
        let info = null;
        player.on(library.Events.MEDIA_INFO, data => { if (!live(s)) return; info = data; if (data.hasVideo || !data.hasAudio) stop('媒体轨道不符合仅音频要求'); });
        player.on(library.Events.ERROR, () => { if (live(s) && !(state.mode === 'audio-active' && s.paused)) stop('音频流失效，已尝试恢复视频'); });
        player.attachMediaElement(audio); player.load();
        await wait(s, () => info && info.hasAudio && !info.hasVideo, 10000, '音频轨道准备超时');
        if (!s.paused) { const time = audio.currentTime; await wait(s, () => audio.currentTime > time && !audio.paused, 10000, '音频未开始播放', () => player.play()); }
        else { player.pause(); player.unload(); }
        if (!live(s)) return false;
        play.onclick = async () => {
          if (!live(s) || play.disabled) return;
          play.disabled = true;
          try {
            if (s.paused) {
              // unload 后新直播从新的时间轴开始；重建媒体源，避免旧播放位置等待旧时长。
              state.mode = 'audio-preparing'; s.paused = false; info = null; update('正在重新加载音频');
              player.detachMediaElement(); player.attachMediaElement(audio); player.load();
              await wait(s, () => info && info.hasAudio && !info.hasVideo, 10000, '重新加载音频轨道超时');
              const time = audio.currentTime;
              await wait(s, () => audio.currentTime > time && !audio.paused, 10000, '音频未恢复播放', () => player.play());
              if (!live(s)) return; state.mode = 'audio-active'; play.textContent = '暂停音频';
            }
            else { s.paused = true; player.pause(); player.unload(); play.textContent = '播放音频'; }
            update(s.paused ? '仅音频已暂停，已停止加载' : '仅音频播放中');
          } catch (e) { if (live(s)) stop('音频播放被阻止，请恢复视频'); }
          finally { if (play.isConnected) play.disabled = false; }
        };
        watch(s, audio, 'pause', () => {
          if (live(s) && state.mode === 'audio-active' && audio.paused && !s.paused) {
            s.paused = true; player.unload(); play.textContent = '播放音频'; update('仅音频已暂停，已停止加载');
          }
        });
        play.disabled = false; state.mode = 'audio-active'; update(s.paused ? '仅音频已就绪，已暂停' : '仅音频播放中'); health(s); return true;
      } catch (error) { if (state.session === s) await stop('仅音频开启失败：' + error.message); return false; }
    }

    function health(s) {
      later(s, () => {
        if (!s.source.current()) { stop('播放器来源已变化', false); return; }
        if (s.source.webMode() !== s.webMode) { stop('网页模式已变化，已退出媒体模式'); return; }
        if (s.kind === 'pip') {
          if (!s.sourceCover?.isConnected) { stop('原页遮罩区域已重建，已退出增强画中画'); return; }
          if (s.pip.closed || (s.route !== 'move' && !s.source.video.isConnected)) { stop('源视频已重建'); return; }
        } else {
          if (!s.audio?.isConnected || !s.placeholder?.isConnected) { stop('音频控制区域已重建，已尝试恢复视频'); return; }
          const video = s.source.root.querySelector('video');
          if (video?.readyState >= 2 && !video.paused) { stop('原生视频已重新启动，退出仅音频'); return; }
        }
        health(s);
      }, 1500);
    }

    async function recover() {
      const s = state.recovery; if (!s || state.mode !== 'recovery-needed') return;
      const generation = ++state.generation; state.mode = 'restoring'; update('正在恢复视频');
      try { await restore(s); if (state.generation !== generation) return; state.mode = 'idle'; update('视频已恢复'); s.source.resume?.(); }
      catch (error) { if (state.generation !== generation) return; state.mode = s.source.current() ? 'recovery-needed' : 'idle'; state.recovery = state.mode === 'recovery-needed' ? s : null; update(error.message); }
    }
    function suspendPage(ownerDocument, persisted) {
      const s = state.session || state.recovery;
      if (ownerDocument !== panelDocument && s?.source.document !== ownerDocument && cachedRecovery?.source.document !== ownerDocument && state.recovery?.source.document !== ownerDocument) return;
      if (s) {
        const recovery = persisted && s.kind === 'audio' && s.nativeStopped ? s : null;
        stop('页面已离开', false);
        cachedRecovery = recovery;
      } else if (!persisted) stop('页面已离开', false);
    }
    function resumePage(ownerDocument) {
      const s = cachedRecovery;
      // 来源 iframe 的 pageshow 先恢复其生命周期状态，再允许重载原生视频。
      if (!s || s.source.document !== ownerDocument) return;
      cachedRecovery = null;
      if (state.mode !== 'idle' || state.session) return;
      if (!s.source.current()) { update('播放器来源已变化，请手动恢复当前直播视频'); return; }
      state.recovery = s; state.mode = 'recovery-needed'; recover();
    }
    state.openPip = openPip; state.openAudio = openAudio; state.stop = stop; state.recover = recover;
    state.suspendPage = suspendPage; state.resumePage = resumePage;
    state.sourceNow = sourceNow;
    return state;
  }

  function parsePipMessage(message) {
    if (!/^DANMU_MSG(?::|$)/.test(String(message?.cmd || '')) || !Array.isArray(message.info)) return null;
    const text = String(message.info[1] || ''); if (!text || text.length > 1000) return null;
    const metadata = Array.isArray(message.info[0]) ? message.info[0] : [];
    const color = Number(metadata[3]);
    const special = metadata.find(value => value && typeof value === 'object' && !Array.isArray(value) && typeof value.url === 'string' && value.emoticon_unique);
    let image = '';
    if (special && special.url.length <= 600) {
      try { const url = new URL(special.url); if (url.protocol === 'https:' && url.hostname.endsWith('.hdslb.com') && !url.username && !url.password) image = url.href; } catch (e) { /* 未知表情不可发送 */ }
    }
    const hash = emojiHashFromSrc(image);
    const payload = image ? (EMOJI_ID_TO_NAME[hash] ? { type: 'emoji', text: '[' + EMOJI_ID_TO_NAME[hash] + ']' } : hash ? { type: 'emoji-special', text: hash, hash } : { type: 'unknown', text: '' }) : special ? { type: 'unknown', text: '' } : { type: 'text', text };
    return { text, image, payload, color: Number.isSafeInteger(color) && color >= 0 && color <= 0xffffff ? '#' + color.toString(16).padStart(6, '0') : '#ffffff', busy: false };
  }

  function mediaIsBusy() { return !!sharedRuntime.mediaController && sharedRuntime.mediaController.mode !== 'idle'; }

  function mediaSourceIsCovered() {
    const s = sharedRuntime.mediaController?.session;
    return s?.kind === 'pip' && s.source.document === document && !!s.sourceCover?.isConnected;
  }

  function renderMediaDetail(content, kind) {
    const controller = getMediaController();
    const label = panelElement('p', controller.message, 'blx-notice'); label.dataset.mediaStatus = '1'; content.appendChild(label);
    if (kind === 'pip') {
      content.appendChild(panelElement('p', '带弹幕画中画支持悬停 +1 / 收藏，沿用“弹幕操作”开关。小窗弹幕暂不继承原生屏蔽词。'));
      const select = panelElement('select'); select.setAttribute('aria-label', '画中画视频呈现方式');
      [['capture', '捕获原视频流（优先）'], ['move', '搬移原视频（兼容选项）']].forEach(([value, text]) => { const option = panelElement('option', text); option.value = value; select.appendChild(option); });
      select.value = controller.route; select.disabled = controller.mode !== 'idle';
      listenPanelNode(select, 'change', () => { controller.route = select.value; }); content.appendChild(select);
    } else content.appendChild(panelElement('p', '独立音频播放；仅音频期间暂不执行自动画质、网页模式与视频同步。失败时尝试恢复视频。'));
    const start = panelButton(kind === 'pip' ? '开启带弹幕画中画' : '开启仅音频', () => kind === 'pip' ? controller.openPip() : controller.openAudio());
    start.dataset.mediaStart = kind; start.disabled = controller.mode !== 'idle'; content.appendChild(start);
    const exit = panelButton(controller.mode === 'recovery-needed' ? '重试恢复视频' : '退出当前模式', () => controller.mode === 'recovery-needed' ? controller.recover() : controller.stop());
    exit.dataset.mediaExit = '1'; exit.disabled = controller.mode === 'idle' || controller.mode === 'restoring'; content.appendChild(exit);
    if (kind === 'pip') content.appendChild(panelButton('普通画中画（不含弹幕及操作栏）', () => {
      const source = controller.sourceNow(); if (mediaIsBusy() || !source) { panelMessage('请先退出当前模式，并确认直播视频已就绪'); return; }
      source.video.requestPictureInPicture?.().catch(() => panelMessage('当前视频不支持普通画中画'));
    }));
  }

  // ---------- 更多设置：播放器功能 ----------
  const PLAYER_RETRY_DELAYS = [0, 150, 300, 600, 950, 1300, 1500, 150];
  const playerEnhancementState = {
    timer: null,
    sequence: 0,
    retryIndex: 0,
    playerSequence: 0,
    running: false,
    rerunRequested: false,
    rerunResetRequested: false,
    readyVideo: null,
    readyInstanceKey: '',
    qualityDone: new Set(),
    qualityReadyAt: new Map(),
    webDone: new Set(),
  };

  function syncMoreSettingsInputs() {
    try {
      BOOLEAN_CFG_KEYS.forEach((key) => {
        const input = getPanelDocument().querySelector('[data-bilivex-setting="' + key + '"] input[type="checkbox"]');
        if (!input || input.checked === cfg[key]) return;
        input.checked = cfg[key];
        const slider = input.nextElementSibling;
        const knob = slider && slider.firstElementChild;
        if (slider) slider.style.background = input.checked ? currentTheme.primary : '#cfd5db';
        if (knob) knob.style.left = input.checked ? '16px' : '2px';
      });
    } catch (e) {}
  }

  function selectHighestQualityCandidate(candidates) {
    if (!Array.isArray(candidates)) return null;
    const ranked = candidates.map((candidate) => ({
      candidate,
      qnNumber: Number(candidate && candidate.qn),
    })).filter((item) => Number.isFinite(item.qnNumber) && item.qnNumber >= 0)
      .sort((left, right) => right.qnNumber - left.qnNumber);
    return ranked.length ? ranked[0].candidate : null;
  }

  function currentQualityNumber(info) {
    if (!info || typeof info !== 'object') return null;
    const value = info.quality && typeof info.quality === 'object' ? info.quality.qn :
      (info.quality != null ? info.quality : info.currentQuality);
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function playUrlQualityNumber(info) {
    const match = /[?&]qn=([^&]+)/.exec(String(info && info.playurl || ''));
    if (!match) return null;
    const number = Number(decodeURIComponent(match[1]));
    return Number.isFinite(number) ? number : null;
  }

  function isInitialPlaybackStable(instanceKey) {
    const video = document.querySelector('#live-player video, .live-player-mounter video');
    if (!video || video.readyState < 4 || video.videoWidth <= 0 || video.videoHeight <= 0) {
      playerEnhancementState.qualityReadyAt.delete(instanceKey);
      return false;
    }
    const readyState = playerEnhancementState.qualityReadyAt.get(instanceKey);
    if (!readyState || readyState.video !== video) {
      playerEnhancementState.qualityReadyAt.set(instanceKey, { video, at: Date.now() });
      return false;
    }
    return Date.now() - readyState.at >= 1800;
  }

  function qualitySwitchSucceeded(result) {
    return result === 0 || result === true || !!(result && typeof result === 'object' &&
      (result.code === 0 || result.status === 0 || result.success === true));
  }

  function getPageLivePlayer() {
    try {
      if (typeof unsafeWindow === 'undefined' || !unsafeWindow) return null;
      return unsafeWindow.livePlayer ||
        (unsafeWindow.EmbedPlayer && unsafeWindow.EmbedPlayer.instance) || null;
    } catch (e) {
      return null;
    }
  }

  function getLivePlayerInfo(player) {
    try {
      return player && typeof player.getPlayerInfo === 'function' ? player.getPlayerInfo() : null;
    } catch (e) {
      return null;
    }
  }

  function getPlayerInstanceKey(info) {
    const root = document.querySelector('#live-player, .live-player-mounter');
    if (!root) return '';
    if (!root.dataset.bilivexPlayerInstance) {
      root.dataset.bilivexPlayerInstance = String(++playerEnhancementState.playerSequence);
    }
    const playerId = info && (info.playerId || info.player_id || info.cid) || root.dataset.bilivexPlayerInstance;
    const streamName = info && (info.streamName || info.stream_name || info.stream) || '';
    return [findRoomId(), String(playerId), String(streamName)].join(':');
  }

  async function applyHighestQuality(instanceKey, player, info) {
    if (player && info && Array.isArray(info.qualityCandidates)) {
      const highest = selectHighestQualityCandidate(info.qualityCandidates);
      if (!highest) return 'terminal';
      const highestQnNumber = Number(highest.qn);
      if (currentQualityNumber(info) === highestQnNumber) {
        const playUrlQuality = playUrlQualityNumber(info);
        return playUrlQuality === null || playUrlQuality === highestQnNumber ? 'done' : 'pending';
      }
      if (!isInitialPlaybackStable(instanceKey)) return 'pending';
      if (typeof player.switchQualityAsync !== 'function') return 'terminal';
      try {
        const result = await player.switchQualityAsync(
          highest.qn,
          highest.hdrType,
          false,
          'bilivex-auto-highest-quality'
        );
        if (!qualitySwitchSucceeded(result)) return 'terminal';
        const verified = getLivePlayerInfo(player);
        if (currentQualityNumber(verified) !== highestQnNumber) return 'terminal';
        const verifiedPlayUrlQuality = playUrlQualityNumber(verified);
        if (verifiedPlayUrlQuality !== null && verifiedPlayUrlQuality !== highestQnNumber) return 'pending';
        showToast('已切换至' + String(highest.desc || '最高画质').slice(0, 24));
        return 'done';
      } catch (e) {
        return 'terminal';
      }
    }
    return 'pending';
  }

  function isWebMode() {
    return !!document.body && document.body.classList.contains('player-full-win');
  }

  function isPlayerReadyForWebMode() {
    const video = document.querySelector('#live-player video, .live-player-mounter video');
    return !!video && video.readyState >= 3 && video.videoWidth > 0 && video.videoHeight > 0;
  }

  function isBrowserFullscreen(info) {
    return Number(info && info.playerStatus) === 2 || !!(document.fullscreenElement || document.webkitFullscreenElement);
  }

  async function applyWebMode(player, info, sequence) {
    if (isWebMode()) return 'done';
    if (isBrowserFullscreen(info)) return 'pending';
    if (!isPlayerReadyForWebMode()) return 'pending';
    if (!player || typeof player.setFullscreenStatus !== 'function') return 'pending';
    try {
      // 慢网时播放器可能只把状态写成 1，却没有真正建立网页模式布局。
      // 先留出一次完整的状态回落，再重新进入，避免连续调用被播放器吞掉。
      if (Number(info && info.playerStatus) === 1) {
        player.setFullscreenStatus(0);
        await new Promise((resolve) => setTimeout(resolve, 300));
        if (sequence !== playerEnhancementState.sequence || !cfg.autoWebMode) return 'terminal';
      }
      player.setFullscreenStatus(1);
      await new Promise((resolve) => setTimeout(resolve, 350));
      return isWebMode() ? 'done' : 'pending';
    } catch (e) {
      return 'terminal';
    }
  }

  function resetPlayerEnhancementSchedule(feature) {
    clearTimeout(playerEnhancementState.timer);
    playerEnhancementState.timer = null;
    playerEnhancementState.retryIndex = 0;
    playerEnhancementState.sequence += 1;
    if (!feature || feature === 'quality') {
      playerEnhancementState.qualityDone.clear();
      playerEnhancementState.qualityReadyAt = new Map();
    }
    if (!feature || feature === 'web') playerEnhancementState.webDone.clear();
  }

  async function runPlayerEnhancements(sequence) {
    playerEnhancementState.timer = null;
    if (playerEnhancementState.running) {
      playerEnhancementState.rerunRequested = true;
      return;
    }
    if (sequence !== playerEnhancementState.sequence || (!cfg.autoHighestQuality && !cfg.autoWebMode)) return;
    if (mediaIsBusy()) return;
    playerEnhancementState.running = true;
    let pending = false;
    try {
      const player = getPageLivePlayer();
      const info = getLivePlayerInfo(player);
      const instanceKey = getPlayerInstanceKey(info);
      playerEnhancementState.readyVideo = document.querySelector('#live-player video, .live-player-mounter video');
      playerEnhancementState.readyInstanceKey = instanceKey;
      if (!instanceKey) {
        pending = true;
        return;
      }
      if (cfg.autoHighestQuality && !playerEnhancementState.qualityDone.has(instanceKey)) {
        const result = await applyHighestQuality(instanceKey, player, info);
        if (sequence !== playerEnhancementState.sequence) return;
        if (result === 'pending') pending = true;
        else {
          playerEnhancementState.qualityDone.add(instanceKey);
          playerEnhancementState.qualityReadyAt.delete(instanceKey);
        }
      }
      const currentInfo = getLivePlayerInfo(player);
      if (cfg.autoWebMode && !playerEnhancementState.webDone.has(instanceKey)) {
        const result = await applyWebMode(player, currentInfo, sequence);
        if (sequence !== playerEnhancementState.sequence) return;
        if (result === 'pending') pending = true;
        else playerEnhancementState.webDone.add(instanceKey);
      }
    } finally {
      playerEnhancementState.running = false;
      const rerunRequested = playerEnhancementState.rerunRequested;
      const rerunResetRequested = playerEnhancementState.rerunResetRequested;
      playerEnhancementState.rerunRequested = false;
      playerEnhancementState.rerunResetRequested = false;
      // 同一播放器的重复事件只合并重试；换实例或退出浏览器全屏才重置次数。
      if (rerunRequested) schedulePlayerEnhancements(rerunResetRequested);
      else if (pending) schedulePlayerEnhancements();
    }
  }

  function schedulePlayerEnhancements(restartRetry) {
    if (mediaIsBusy()) return;
    if (!cfg.autoHighestQuality && !cfg.autoWebMode) return;
    if (playerEnhancementState.running) {
      playerEnhancementState.rerunRequested = true;
      if (restartRetry) playerEnhancementState.rerunResetRequested = true;
      return;
    }
    if (restartRetry) playerEnhancementState.retryIndex = 0;
    if (playerEnhancementState.timer !== null || playerEnhancementState.retryIndex >= PLAYER_RETRY_DELAYS.length) return;
    const delay = PLAYER_RETRY_DELAYS[playerEnhancementState.retryIndex++];
    const sequence = playerEnhancementState.sequence;
    playerEnhancementState.timer = setTimeout(() => { runPlayerEnhancements(sequence); }, delay);
  }

  function reloadP2PWindow(targetWindow, enabled) {
    try {
      const currentHref = targetWindow.location.href;
      const target = prepareP2PUrl(currentHref, enabled, targetWindow.sessionStorage);
      if (!target.changed) return false;
      const recent = readSessionJson(targetWindow.sessionStorage, P2P_RELOAD_MARKER_KEY);
      if (recent && recent.enabled === enabled && recent.href === target.href && Date.now() - recent.at < 10000) return false;
      writeSessionJson(targetWindow.sessionStorage, P2P_RELOAD_MARKER_KEY, {
        enabled,
        href: target.href,
        at: Date.now(),
      });
      targetWindow.location.replace(target.href);
      return true;
    } catch (e) {
      return false;
    }
  }

  function reloadPlayerForP2P(enabled) {
    if (document !== panelDocument) return false;
    if (mediaIsBusy()) { getMediaController().stop('正在退出媒体模式并重载播放器', false).then(() => reloadPlayerForP2P(enabled)); return true; }
    const frames = Array.from(panelDocument.querySelectorAll('iframe'));
    for (const frame of frames) {
      try {
        if (!frame.contentWindow || !isP2PManagedPage(frame.contentWindow.location.href) ||
            !/\/blanc\/\d+/.test(frame.contentWindow.location.pathname)) continue;
        const reloading = reloadP2PWindow(frame.contentWindow, enabled);
        if (reloading) showToast('正在按新设置重载播放器');
        return reloading;
      } catch (e) {}
    }
    const reloading = reloadP2PWindow(panelWindow, enabled);
    if (reloading) showToast('正在按新设置重载播放器');
    return reloading;
  }

  // ---------- 播放器同步时间 ----------
  const VIDEO_SYNC_SELECTOR = '[data-bilivex-video-sync="1"]';
  const VIDEO_SYNC_ICON = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.343-5.657L4 8"></path><path d="M4 4v4h4"></path><path d="M12 8.5V12l2.5 1.5"></path></svg>';

  function getVideoSyncTarget(video) {
    if (!video) return null;
    try {
      const buffered = video.buffered;
      const ranges = buffered && buffered.length ? buffered : video.seekable;
      if (!ranges || !ranges.length) return null;
      const lastRangeIndex = ranges.length - 1;
      const rangeStart = Number(ranges.start(lastRangeIndex));
      const rangeEnd = Number(ranges.end(lastRangeIndex));
      if (!Number.isFinite(rangeStart) || !Number.isFinite(rangeEnd) || rangeEnd < rangeStart) return null;
      // 与 DouyuEx 一样以本地最后一段缓冲区为准，并留 50 毫秒余量避免正好卡在 MSE 边界。
      return Math.max(rangeStart, rangeEnd - 0.05);
    } catch (e) {
      // MSE 更新分段时 TimeRanges 可能瞬时失效，本次点击静默退出即可。
      return null;
    }
  }

  function findVideoSyncMount() {
    const timeNodes = document.querySelectorAll('#live-player .text.time, .live-player-mounter .text.time');
    for (const timeNode of timeNodes) {
      const timeText = (timeNode.textContent || '').trim();
      if (timeText && !/^\d+:\d{2}(?::\d{2})?$/.test(timeText)) continue;
      const leftArea = timeNode.closest('.left-area');
      if (!leftArea) continue;
      let anchor = timeNode.closest('.tip-wrap') || timeNode;
      while (anchor.parentElement && anchor.parentElement !== leftArea) anchor = anchor.parentElement;
      if (anchor.parentElement !== leftArea) continue;
      const player = leftArea.closest('#live-player, .live-player-mounter') || document.querySelector('#live-player');
      if (player) return { anchor, leftArea, player };
    }
    return null;
  }

  function findActiveLiveVideo(player) {
    if (!player) return null;
    const videos = Array.from(player.querySelectorAll('video'));
    return videos.find((video) => {
      const rect = video.getBoundingClientRect();
      return video.readyState > 0 && rect.width > 0 && rect.height > 0;
    }) || videos.find((video) => video.readyState > 0) || videos[0] || null;
  }

  function findLiveSyncControl(root, visited = new Set()) {
    if (!root || visited.has(root)) return null;
    visited.add(root);
    const control = root.querySelector(VIDEO_SYNC_SELECTOR);
    if (control) return control;
    for (const frame of root.querySelectorAll('iframe')) {
      try { const found = findLiveSyncControl(frame.contentDocument, visited); if (found) return found; }
      catch (e) { /* 跨源播放器不参与控制 */ }
    }
    return null;
  }

  function syncVideoToLiveEdge(button) {
    if (sharedRuntime.mediaController?.session?.kind === 'audio') return { status: 'unavailable', message: '仅音频期间视频同步暂不可用' };
    const player = button && button.closest('#live-player, .live-player-mounter');
    const session = sharedRuntime.mediaController?.session;
    const video = session?.kind === 'pip' && session.source.document === (button?.ownerDocument || document) && session.source.current() ? session.source.video : findActiveLiveVideo(player || document.querySelector('#live-player, .live-player-mounter'));
    const target = getVideoSyncTarget(video);
    if (!video || target === null) return { status: 'unavailable' };
    const before = Number(video.currentTime) || 0;
    try {
      // 只调整播放位置，不调用 play/pause，保留用户原来的播放状态。
      video.currentTime = target;
      return { status: 'synced', before, target };
    } catch (e) {
      return { status: 'unavailable' };
    }
  }

  function bindVideoSync() {
    const mount = findVideoSyncMount();
    if (!mount) return null;
    let button = mount.leftArea.querySelector(VIDEO_SYNC_SELECTOR);
    if (!button) {
      button = document.createElement('span');
      const nativeIcon = Array.from(mount.leftArea.children).find((child) => child.classList.contains('icon'));
      button.className = nativeIcon ? nativeIcon.className : 'icon';
      button.classList.add('icon', 'bilivex-video-sync');
      button.dataset.bilivexVideoSync = '1';
      button.setAttribute('role', 'button');
      button.setAttribute('tabindex', '0');
      button.setAttribute('aria-label', '同步到最新直播画面');
      button.title = '同步时间';
      button.innerHTML = VIDEO_SYNC_ICON;
      const activate = () => {
        const result = syncVideoToLiveEdge(button);
        button.dataset.bilivexVideoSyncStatus = result.status;
      };
      button.addEventListener('click', activate);
      button.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        activate();
      });
    }
    if (mount.anchor.nextElementSibling !== button) mount.anchor.after(button);
    bindPlayerMediaControls(mount);
    return button;
  }

  // ---------- 原生底栏媒体入口：只使用已识别的音量和画中画锚点 ----------
  function findNativePipMount(player) {
    for (const area of player.querySelectorAll('.right-area')) {
      const anchors = Array.from(area.children).filter(node => !node.hasAttribute('data-bilivex-media-control'));
      const matches = anchors.filter(node => {
        if (node.matches('.pip-wrap, .picture-in-picture') || node.querySelector('[title="画中画"], [aria-label="画中画"], .pip-wrap, .picture-in-picture')) return true;
        if ((node.textContent || '').trim() === '画中画') return true;
        // 当前原生按钮没有名称属性；仅匹配已在实页确认的画中画 SVG 特征，不按位置猜测。
        return Array.from(node.querySelectorAll('svg path')).some(path => (path.getAttribute('d') || '').includes('M12.5 15.25C12.5 13.7312'));
      });
      if (matches.length === 1) return { anchor: matches[0], area };
    }
    return null;
  }

  function refreshPlayerMediaControls() {
    const controller = sharedRuntime.mediaController;
    const mode = controller?.mode || 'idle';
    const owner = controller?.session?.source.document || controller?.recovery?.source.document;
    const kind = controller?.session?.kind || (mode === 'recovery-needed' ? 'audio' : '');
    const available = !!controller?.sourceNow(document);
    const audioActive = kind === 'audio' && owner === document;
    document.querySelectorAll(VIDEO_SYNC_SELECTOR).forEach(button => {
      const title = audioActive ? '仅音频期间视频同步暂不可用' : '同步时间';
      if (button.title !== title) button.title = title;
      const disabled = String(audioActive); if (button.getAttribute('aria-disabled') !== disabled) button.setAttribute('aria-disabled', disabled);
    });
    document.querySelectorAll('[data-bilivex-media-control]').forEach(button => {
      const feature = button.dataset.bilivexMediaControl;
      const active = owner === document && kind === feature;
      const disabled = mode === 'idle' ? !available : !active || mode === 'restoring';
      const label = feature === 'pip' ? (active ? '退出增强画中画' : '增强画中画') : (active ? '恢复视频' : '仅音频模式');
      const title = disabled ? (mode === 'idle' ? '请等待当前直播视频就绪' : '请先退出当前媒体模式') : label;
      [['aria-label', label], ['title', title], ['aria-pressed', String(active)], ['aria-disabled', String(disabled)]].forEach(([key, value]) => { if (button.getAttribute(key) !== value) button.setAttribute(key, value); });
      button.style.opacity = disabled ? '.45' : '1';
      button.style.color = active ? '#00aeec' : '';
    });
  }

  function bindPlayerMediaControls(mount) {
    const controller = getMediaController();
    if (!document.getElementById('bilivex-media-controls-style')) {
      const style = document.createElement('style'); style.id = 'bilivex-media-controls-style';
      style.textContent = '#live-player .bilivex-media-control:focus-visible,.live-player-mounter .bilivex-media-control:focus-visible{outline:2px solid #00aeec;outline-offset:2px}';
      document.head.appendChild(style);
    }
    const volume = Array.from(mount.leftArea.children).find(node => node.matches('.volume, .volume-wrap'));
    const pip = findNativePipMount(mount.player);
    const make = (kind, anchor, area, icon) => {
      if (!anchor || !area) return;
      let button = area.querySelector('[data-bilivex-media-control="' + kind + '"]');
      if (!button) {
        button = document.createElement('span'); button.className = 'icon bilivex-media-control';
        button.dataset.bilivexMediaControl = kind; button.setAttribute('role', 'button'); button.setAttribute('tabindex', '0');
        button.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + icon + '</svg>';
        const activate = event => {
          event.preventDefault(); event.stopPropagation();
          if (button.getAttribute('aria-disabled') === 'true') return;
          if (controller.mode === 'recovery-needed') controller.recover();
          else if (controller.session?.source.document === document && controller.session.kind === kind) controller.stop();
          else if (kind === 'pip') controller.openPip(document);
          else controller.openAudio(document);
        };
        button.addEventListener('click', activate);
        button.addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && !event.repeat) activate(event); });
      }
      const layout = getComputedStyle(area);
      const rightBefore = (layout.flexDirection === 'row-reverse') !== (layout.direction === 'rtl');
      if (rightBefore) { if (anchor.previousElementSibling !== button) anchor.before(button); }
      else if (anchor.nextElementSibling !== button) anchor.after(button);
    };
    make('audio', volume, mount.leftArea, '<path d="M5 13v-1a7 7 0 0 1 14 0v1"></path><rect x="3" y="12" width="4" height="8" rx="2"></rect><rect x="17" y="12" width="4" height="8" rx="2"></rect>');
    make('pip', pip?.anchor, pip?.area, '<rect x="3" y="4" width="18" height="16" rx="2"></rect><rect x="12" y="12" width="7" height="6" rx="1"></rect><path d="M6 8h3M6 11h2"></path>');
    refreshPlayerMediaControls();
  }

  // ---------- 初始化 ----------
  function initRoom() {
    registerMediaSource();
    refreshPurification();
    bindWheelEntry();
    const list = document.querySelector('.chat-history-list');
    if (list) {
      attachDanmakuMenu(list);
    } else if (boundChatList && !boundChatList.isConnected && typeof boundChatList._bilivexCommentMenuCleanup === 'function') {
      boundChatList._bilivexCommentMenuCleanup();
    }
    rebindInputTailHandler();
    bindLike();
    bindVideoSync();
    schedulePlayerEnhancements();
    if (cfg.floatDmPlus) {
      const rotate = findFloatingDmContainer();
      if (rotate) attachFloatingDmHover(rotate);
    }
  }

  function guardianCheck() {
    try {
      registerMediaSource();
      refreshPurification();
      bindWheelEntry();
      bindVideoSync();
      const list = document.querySelector('.chat-history-list');
      if (list && list !== boundChatList) {
        attachDanmakuMenu(list);
      } else if (!list && boundChatList && !boundChatList.isConnected && typeof boundChatList._bilivexCommentMenuCleanup === 'function') {
        boundChatList._bilivexCommentMenuCleanup();
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
  function listenLifecycle(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    const cleanup = () => target.removeEventListener(type, handler, options);
    lifecycleCleanups.push(cleanup); return cleanup;
  }
  function tryInit() {
    // 面板属于顶层页面，不应依赖聊天区是否已完成异步渲染。
    const panelReady = buildPanel() !== false;
    initRoom();
    return panelReady;
  }

  function start() {
    try {
      let browserFullscreen = isBrowserFullscreen(getLivePlayerInfo(getPageLivePlayer()));
      const onFullscreenChange = () => {
        syncFullscreenUi();
        const nowFullscreen = isBrowserFullscreen(getLivePlayerInfo(getPageLivePlayer()));
        const changed = browserFullscreen !== nowFullscreen;
        browserFullscreen = nowFullscreen;
        schedulePlayerEnhancements(changed);
      };
      const onPlayerReady = (event) => {
        if (!event.target || event.target.tagName !== 'VIDEO') return;
        if (!event.target.closest('#live-player, .live-player-mounter')) return;
        const instanceKey = getPlayerInstanceKey(getLivePlayerInfo(getPageLivePlayer()));
        const changed = playerEnhancementState.readyVideo !== event.target ||
          playerEnhancementState.readyInstanceKey !== instanceKey;
        playerEnhancementState.readyVideo = event.target;
        playerEnhancementState.readyInstanceKey = instanceKey;
        schedulePlayerEnhancements(changed);
      };
      listenLifecycle(document, 'compositionstart', event => composingInputs.add(event.target), true);
      listenLifecycle(document, 'compositionend', event => composingInputs.delete(event.target), true);
      listenLifecycle(document, 'fullscreenchange', onFullscreenChange);
      listenLifecycle(document, 'webkitfullscreenchange', onFullscreenChange);
      listenLifecycle(document, 'canplay', onPlayerReady, true);
      listenLifecycle(document, 'playing', onPlayerReady, true);
      if (panelDocument !== document) {
        listenLifecycle(panelDocument, 'fullscreenchange', onFullscreenChange);
        listenLifecycle(panelDocument, 'webkitfullscreenchange', onFullscreenChange);
      }
    } catch (e) {}
    const onPageShow = (event) => {
      nativeSendPageActive = true;
      if (event.persisted) sharedRuntime.mediaController?.resumePage(document);
      if (sharedRuntime.panelLeavingDocument === document) { sharedRuntime.panelLeavingDocument = null; sharedRuntime.restorePanel?.(getUiHost()); }
      if (event.persisted && purifyController) purifyController.resume();
      if (event.persisted) { tryInit(); guardianCheck(); }
    };
    const onPageHide = (event) => {
      sharedRuntime.mediaController?.suspendPage(document, event.persisted);
      sharedRuntime.mediaSources?.delete(document);
      nativeSendPageActive = false; cancelNativeSends('页面已离开，任务已取消');
      sharedRuntime.cancelPanelMotion?.();
      // 子文档销毁前交还主面板，避免浏览器随 iframe 卸载移除面板原生事件监听。
      if (document !== panelDocument && getPanelRoot()?.ownerDocument === document) { sharedRuntime.panelLeavingDocument = document; sharedRuntime.restorePanel?.(); }
      if (purifyController) { if (event.persisted) purifyController.suspend(); else purifyController.dispose(); }
      capturePanelView();
      stopActiveLike(true, '页面已离开');
      disposeWheel();
      // BFCache 返回时复用原监听和观察器，恢复入口在 pageshow 重新检查页面。
      if (event.persisted) { resetPlayerEnhancementSchedule(); return; }
      if (document === panelDocument) {
        if (panelEventRestoreTimer !== null) clearTimeout(panelEventRestoreTimer);
        panelEventRestoreTimer = null;
        sharedRuntime.panelResizeObserver?.disconnect();
        sharedRuntime.panelViewResizeObserver?.disconnect();
        sharedRuntime.panelMotionPreferenceCleanup?.(); sharedRuntime.panelMotionPreferenceCleanup = null;
        sharedRuntime.panelResizeCleanup?.(); sharedRuntime.panelResizeCleanup = null;
      }
      if (window._bilivexSpaMO) window._bilivexSpaMO.disconnect();
      if (boundChatList && typeof boundChatList._bilivexCommentMenuCleanup === 'function') {
        boundChatList._bilivexCommentMenuCleanup();
      } else {
        resetCommentMenuState();
      }
      if (boundFloatContainer && boundFloatContainer._bilivexFloatMO) boundFloatContainer._bilivexFloatMO.disconnect();
      if (boundTailCtl && boundTailCtl._bilivexTailMO) boundTailCtl._bilivexTailMO.disconnect();
      if (guardianTimer) clearInterval(guardianTimer);
      if (initTimer) clearTimeout(initTimer);
      if (updateInitialTimer !== null) {
        clearTimeout(updateInitialTimer);
        updateInitialTimer = null;
      }
      if (updateIntervalTimer !== null) {
        clearInterval(updateIntervalTimer);
        updateIntervalTimer = null;
      }
      resetPlayerEnhancementSchedule();
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
      window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('pageshow', onPageShow);
    };
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);
    // 注入 +1 反馈动画样式
    injectFloatingDmAnim();
    PURIFY_KEYS.forEach(key => {
      try { const id = GM_addValueChangeListener('bilivex_purify_v1_' + key, () => { purifyShared.controllers.forEach(c => c.refresh()); }); if (id != null) valueChangeListenerIds.push(id); } catch (e) {}
    });
    if (document === panelDocument) listenLifecycle(panelDocument, PURIFY_STATUS_EVENT, refreshPanelStatus);
    listenLifecycle(document, 'visibilitychange', () => refreshPurification());
    listenLifecycle(window, 'focus', () => { refreshPurification(); refreshPanelStatus(); });
    tryInit();
    watchSpa();
    guardianObserveOnce();
    // 延迟检查更新，避开页面首屏渲染高峰；打开直播间时不受每小时冷却限制。
    if (document === panelDocument) {
      if (updateInitialTimer === null) {
        updateInitialTimer = setTimeout(() => {
          updateInitialTimer = null;
          checkForUpdate(true);
        }, 2500);
      }
      if (updateIntervalTimer === null) {
        updateIntervalTimer = setInterval(() => checkForUpdate(false), UPDATE_CHECK_INTERVAL_MS);
      }
    }
  }

  function watchSpa() {
    // 兼容 iframe 直播间：各页面实例独立运行，共享的悬浮面板不被 iframe 实例误删。
    if (spaWatching || !document.documentElement) return;
    spaWatching = true;
    let lastUrl = location.href;
    let queued = false;
    const lifecycleSelector = '#bilivex-panel, iframe, .chat-history-list, .chat-history-panel, .brush-prompt, .chat-overlay-layer, .chat-control-panel, button.send-btn,' +
      '.gift-control-section.gift-control-panel, .right-module-measure, .rank-entries, .activity-gather-entry.activity-entry,' +
      '.bili-danmaku-x-dm-rotate, .danmaku-item-container, .web-player-danmaku, #live-player,' +
      '.live-web-player-controller, #web-player-controller-wrap-el .right-area, .quality-wrap,' +
      '#live-player .left-area, #live-player video';
    const touchesLifecycle = (records) => records.some((record) => {
      const nodes = Array.from(record.addedNodes).concat(Array.from(record.removedNodes));
      // 活动页会持续插入含 iframe 的大型容器；只响应直接变动的生命周期节点，
      // 避免深搜后对尚在构建的整块页面反复初始化，令高负载直播间卡死。
      return nodes.some((node) => node.nodeType === 1 &&
        node.matches(lifecycleSelector));
    });
    const mo = new MutationObserver((records) => {
      const urlChanged = location.href !== lastUrl;
      if (!urlChanged && !touchesLifecycle(records)) return;
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        const currentUrlChanged = location.href !== lastUrl;
        const panelMissing = !getPanelRoot();
        if (currentUrlChanged || panelMissing) {
          if (currentUrlChanged) {
            if (sharedRuntime.mediaController?.session?.source.document === document || sharedRuntime.mediaController?.recovery?.source.document === document || document === panelDocument) sharedRuntime.mediaController?.stop('直播间已变化', false);
            cancelNativeSends('直播间已变化，任务已取消');
            if (purifyController) purifyController.refresh();
            stopActiveLike(true, '直播间已变化');
            stopWheelForRoomChange();
            resetPlayerEnhancementSchedule();
            if (cfg.blockP2PUpload) applyEarlyP2PSetting(true);
            lastUrl = location.href;
          }
          clearTimeout(initTimer);
          initTimer = setTimeout(tryInit, currentUrlChanged ? 800 : 300);
          if (currentUrlChanged && document === panelDocument) checkForUpdate(true);
        } else {
          initRoom();
          const video = document.querySelector('#live-player video, .live-player-mounter video');
          const instanceKey = getPlayerInstanceKey(getLivePlayerInfo(getPageLivePlayer()));
          const playerChanged = playerEnhancementState.readyVideo !== video ||
            playerEnhancementState.readyInstanceKey !== instanceKey;
          playerEnhancementState.readyVideo = video;
          playerEnhancementState.readyInstanceKey = instanceKey;
          schedulePlayerEnhancements(playerChanged);
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
