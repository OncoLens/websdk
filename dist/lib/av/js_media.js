! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.JsMediaSDK_Instance = t() : e.JsMediaSDK_Instance = t()
}(window, function() {
  return function(e) {
      var t = {};

      function n(i) {
          if (t[i]) return t[i].exports;
          var r = t[i] = {
              i: i,
              l: !1,
              exports: {}
          };
          return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
      }
      return n.m = e, n.c = t, n.d = function(e, t, i) {
          n.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: i
          })
      }, n.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }), Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }, n.t = function(e, t) {
          if (1 & t && (e = n(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var i = Object.create(null);
          if (n.r(i), Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: e
              }), 2 & t && "string" != typeof e)
              for (var r in e) n.d(i, r, function(t) {
                  return e[t]
              }.bind(null, r));
          return i
      }, n.n = function(e) {
          var t = e && e.__esModule ? function() {
              return e.default
          } : function() {
              return e
          };
          return n.d(t, "a", t), t
      }, n.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      }, n.p = "", n(n.s = 202)
  }([function(e, t) {
      var n = e.exports = {
          version: "2.5.7"
      };
      "number" == typeof __e && (__e = n)
  }, function(e, t) {
      e.exports = function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
  }, function(e, t) {
      var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n)
  }, function(e, t, n) {
      var i = n(2),
          r = n(0),
          a = n(9),
          o = n(11),
          u = n(13),
          s = function(e, t, n) {
              var d, c, l, f = e & s.F,
                  h = e & s.G,
                  _ = e & s.S,
                  E = e & s.P,
                  p = e & s.B,
                  S = e & s.W,
                  A = h ? r : r[t] || (r[t] = {}),
                  I = A.prototype,
                  v = h ? i : _ ? i[t] : (i[t] || {}).prototype;
              for (d in h && (n = t), n)(c = !f && v && void 0 !== v[d]) && u(A, d) || (l = c ? v[d] : n[d], A[d] = h && "function" != typeof v[d] ? n[d] : p && c ? a(l, i) : S && v[d] == l ? function(e) {
                  var t = function(t, n, i) {
                      if (this instanceof e) {
                          switch (arguments.length) {
                              case 0:
                                  return new e;
                              case 1:
                                  return new e(t);
                              case 2:
                                  return new e(t, n)
                          }
                          return new e(t, n, i)
                      }
                      return e.apply(this, arguments)
                  };
                  return t.prototype = e.prototype, t
              }(l) : E && "function" == typeof l ? a(Function.call, l) : l, E && ((A.virtual || (A.virtual = {}))[d] = l, e & s.R && I && !I[d] && o(I, d, l)))
          };
      s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
  }, function(e, t, n) {
      var i = n(55)("wks"),
          r = n(40),
          a = n(2).Symbol,
          o = "function" == typeof a;
      (e.exports = function(e) {
          return i[e] || (i[e] = o && a[e] || (o ? a : r)("Symbol." + e))
      }).store = i
  }, function(e, t) {
      e.exports = function(e) {
          return "object" == typeof e ? null !== e : "function" == typeof e
      }
  }, function(e, t, n) {
      var i = n(8),
          r = n(76),
          a = n(48),
          o = Object.defineProperty;
      t.f = n(7) ? Object.defineProperty : function(e, t, n) {
          if (i(e), t = a(t, !0), i(n), r) try {
              return o(e, t, n)
          } catch (e) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e
      }
  }, function(e, t, n) {
      e.exports = !n(14)(function() {
          return 7 != Object.defineProperty({}, "a", {
              get: function() {
                  return 7
              }
          }).a
      })
  }, function(e, t, n) {
      var i = n(5);
      e.exports = function(e) {
          if (!i(e)) throw TypeError(e + " is not an object!");
          return e
      }
  }, function(e, t, n) {
      var i = n(28);
      e.exports = function(e, t, n) {
          if (i(e), void 0 === t) return e;
          switch (n) {
              case 1:
                  return function(n) {
                      return e.call(t, n)
                  };
              case 2:
                  return function(n, i) {
                      return e.call(t, n, i)
                  };
              case 3:
                  return function(n, i, r) {
                      return e.call(t, n, i, r)
                  }
          }
          return function() {
              return e.apply(t, arguments)
          }
      }
  }, function(e, t, n) {
      e.exports = n(114)
  }, function(e, t, n) {
      var i = n(6),
          r = n(27);
      e.exports = n(7) ? function(e, t, n) {
          return i.f(e, t, r(1, n))
      } : function(e, t, n) {
          return e[t] = n, e
      }
  }, function(e, t, n) {
      var i = n(45),
          r = n(46);
      e.exports = function(e) {
          return i(r(e))
      }
  }, function(e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function(e, t) {
          return n.call(e, t)
      }
  }, function(e, t) {
      e.exports = function(e) {
          try {
              return !!e()
          } catch (e) {
              return !0
          }
      }
  }, function(e, t, n) {
      e.exports = n(130)
  }, function(e, t, n) {
      var i = n(10);

      function r(e, t, n, r, a, o, u) {
          try {
              var s = e[o](u),
                  d = s.value
          } catch (e) {
              return void n(e)
          }
          s.done ? t(d) : i.resolve(d).then(r, a)
      }
      e.exports = function(e) {
          return function() {
              var t = this,
                  n = arguments;
              return new i(function(i, a) {
                  var o = e.apply(t, n);

                  function u(e) {
                      r(o, i, a, u, s, "next", e)
                  }

                  function s(e) {
                      r(o, i, a, u, s, "throw", e)
                  }
                  u(void 0)
              })
          }
      }
  }, function(e, t) {
      e.exports = {}
  }, function(e, t, n) {
      var i = n(46);
      e.exports = function(e) {
          return Object(i(e))
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var r = i(n(180)),
          a = function() {};
      a.prototype = {
          publish: function() {
              return r.default.publish.apply(this, arguments)
          },
          publishSync: function() {
              return r.default.publishSync.apply(this, arguments)
          },
          trigger: function() {
              return this.publish.apply(this, arguments)
          },
          triggerSync: function() {
              return this.publishSync.apply(this, arguments)
          },
          emit: function() {
              return this.publish.apply(this, arguments)
          },
          subscribe: function() {
              return r.default.subscribe.apply(this, arguments)
          },
          on: function() {
              return this.subscribe.apply(this, arguments)
          },
          unsubscribe: function() {
              return r.default.unsubscribe.apply(this, arguments)
          },
          clearAllSubscriptions: function() {
              r.default.clearAllSubscriptions()
          }
      };
      var o = new a;
      t.default = o
  }, function(e, t, n) {
      var i = n(109),
          r = n(77);
      e.exports = function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
              for (var n in e)
                  if (Object.prototype.hasOwnProperty.call(e, n)) {
                      var a = r && i ? i(e, n) : {};
                      a.get || a.set ? r(t, n, a) : t[n] = e[n]
                  } return t.default = e, t
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(115)(!0);
      n(53)(String, "String", function(e) {
          this._t = String(e), this._i = 0
      }, function() {
          var e, t = this._t,
              n = this._i;
          return n >= t.length ? {
              value: void 0,
              done: !0
          } : (e = i(t, n), this._i += e.length, {
              value: e,
              done: !1
          })
      })
  }, function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.SHARING_DATA = t.SHARING_DEC_THREAD_OK = t.CURRENT_VIDEO_RESOLUTION = t.USER_GRANT_CAPTURE_AUDIO = t.INIT_SUCCESS_SHARING = t.INIT_SUCCESS_AUDIO = t.INIT_SUCCESS_VIDEO = t.INIT_SUCCESS = t.Video_Enc_WebSocket_FAILED = t.Sharing_Dec_WebSocket_FAILED = t.Sharing_Handle_FAILED = t.Audio_Mute = t.Sharing_Dec_WASM_FAILED = t.Video_Enc_Handle_FAILED = t.Video_Enc_WASM_FAILED = t.Video_Dec_WebSocket_FAILED = t.Video_Dec_Handle_FAILED = t.Video_Dec_WASM_FAILED = t.Audio_Enc_Handle_FAILED = t.Audio_Enc_WASM_FAILED = t.Audio_Dec_WebSocket_FAILED = t.Audio_Dec_Handle_FAILED = t.Audio_Dec_WASM_FAILED = t.SHARING_GET_IMAGE_DATA_WRONG = t.SHARING_RENDER_MONITOR_LOG = t.Sharing_Width_And_Height_Info = t.VIDEO_RENDER_MONITOR_LOG = t.VIDEO_RESOLUTION_UPDATE = t.AUDIO_ENCODED_DATA = t.VIDEO_DATA_DROP_RATIO = t.VIDEO_DROP_RATIO_FROM_WCL = t.VIDEO_ENCODED_DATA = t.SHARING_DECODE_MESSAGE = t.MOUSE_DATA_VIDEO_MODE = t.SHARING_DATA_VIDEO_MODE = t.WCL_TROUBLESHOOTING_INFO = t.DELTA_S = t.DELTA_C = t.DELTA_D = t.APP_TROUBLESHOOTING_INFO = t.DOWNLOAD_WASM_FROM_MAIN_THREAD = t.MONITOR_MESSAGE = t.Video_Capture_Tick = t.Video_Enc_WebSocket_OK = t.DECODE_MESSAGE = t.Sharing_Data = t.Sharing_Handle_OK = t.Sharing_Dec_WebSocket_OK = t.AUDIO_DELAY = t.Sharing_Dec_PICTURE = t.Sharing_Dec_WASM_OK = t.Video_Enc_Handle_OK = t.Video_Enc_WASM_OK = t.Video_Dec_WebSocket_OK = t.Video_Dec_Handle_OK = t.Video_Dec_WASM_OK = t.Audio_Enc_Handle_OK = t.Audio_Enc_WASM_OK = t.Audio_Dec_WebSocket_OK = t.Audio_Dec_Handle_OK = t.Audio_Dec_WASM_OK = t.RESEND_REMOTE_CONTROL_POSITION_PDU = t.COMMAND_SOCKET_MESSAGE_NOTIFY = t.CHANGE_CURRENT_SHARING_ACTIVE_SSRC = t.SWITCH_CANVAS_FOR_SHARING_CAPTURE = t.CHECK_CHROME_SHARING_EXTENSION = t.RESUME_DESKTOP_SHARING = t.PAUSE_DESKTOP_SHARING = t.STOP_DESKTOP_SHARING = t.START_DESKTOP_SHARING = t.UPDATE_SUBSCRIBE_VIDEO = t.CANCEL_REMOTE_CONTROL = t.UPDATE_REMOTE_CONTROL_PROPERTIES = t.START_REMOTE_CONTROL = t.SWITCH_CANVAS_FOR_VIDEO_CAPTURE = t.STOP_SHARING = t.START_SHARING = t.JOIN_COMPUTER_AUDIO = t.LEAVE_COMPUTER_AUDIO = t.REMOVE_RENDER_AUDIO = t.WEBRTC_RESTART = t.CHANGE_AUDIO_MIC = t.END_MEDIA = t.MEETING_FAIL_OVER = t.LEAVE_MEETING = t.REMOVE_AUDIO_CAPTURE = t.CHANGE_CURRENT_ACTIVE_SSRC = t.CHANGE_VIDEO_CAPTURE_DEVICE = t.CHANGE_AUDIO_SPEAKER = t.CHANGE_VIDEO_RESOLUTION = t.CHANGE_FRAME_RATE = t.MUTE_AUDIO = t.UNMUTE_AUDIO = t.STOP_RENDER_AUDIO = t.ADD_RENDER_AUDIO = t.STOP_CAPTURE_VIDEO = t.START_CAPTURE_VIDEO = t.STOP_RENDER_VIDEO = t.ADD_RENDER_VIDEO = t.START_MEDIA = void 0, t.MEDIA_VIDEO_REPORT_RTT = t.MEDIA_VIDEO_REPORT_DROP_RATIO = t.PUBSUB_EVT = t.ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT = t.ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT = t.ZOOM_CONNECTION_VIDEO_OFFER_EVT = t.VIDEO_ENCODE_DATA_FROM_WORKER = t.AUDIO_DATA_FROM_WORKER = t.VIDEO_DATA_FROM_WORKER = t.SHARING_PARAM_INFO_FROM_SOCKET = t.AUDIO_ILLEGAL = t.AUDIO_REMOVE = t.AUDIO_START = t.AUDIO_STOP = t.AUDIO_CLIPPING = t.DESKTOP_SHARING_SYSTEM_ERROR = t.AUDIO_SPEAKER_SET_ERROR = t.DESKTOP_SHARING_ERROR = t.DESKTOP_SHARING_TIME_OUT = t.DESKTOP_SHARING_PERMISSION_DENIED = t.DESKTOP_SHARING_CHROME_EXTENSION_UNINSTALLED = t.USER_CANCEL_PERMISSION_REQUEST = t.USER_STOP_DESKTOP_SHARING = t.REMOTE_CONTROL_PASTE_TEXT_LENGTH_OVERFLOW = t.CANCEL_REMOTE_CONTROL_FAILED = t.START_REMOTE_CONTROL_FAILED = t.STOP_VIDEO_CAPTURE_FAILED = t.USER_CAMERA_IS_TAKEN_BY_OTHER_PROGRAMS = t.USER_FORBIDDED_CAPTURE_VIDEO = t.AUDIO_CTX_SAMPLERATE = t.AUDIO_ZERO_DATA = t.SHARING_DEC_THREAD_FAILED = t.VIDEO_WEBSOCKET_BROKEN = t.AUDIO_WEBSOCKET_BROKEN = t.USER_FORBIDDED_CAPTURE_AUDIO = t.INIT_FAILED_SHARING = t.INIT_FAILED_AUDIO = t.INIT_FAILED_VIDEO = t.INIT_FAILED = t.SEND_MESSAGE_TO_RWG = t.CHECK_CHROME_SHARING_EXTENSION_RESPONSE = t.DESKTOP_SHARING_CAPTURE_SUCCESS = t.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT = t.MONITOR_LOG = t.REMOTE_CONTROL_COPIED_TEXT_NOTIFY = t.CANCEL_REMOTE_CONTROL_SUCCESS = t.START_REMOTE_CONTROL_SUCCESS = t.STOP_VIDEO_CAPTURE_SUCCESS = t.START_VIDEO_CAPTURE_SUCCESS = t.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT = t.SHARING_DECODE_MAX_SIZE = t.VIDEO_DECODE_MAX_SIZE = t.SHARING_PARA = void 0, t.START_MEDIA = 0, t.ADD_RENDER_VIDEO = 1, t.STOP_RENDER_VIDEO = 2, t.START_CAPTURE_VIDEO = 3, t.STOP_CAPTURE_VIDEO = 4, t.ADD_RENDER_AUDIO = 5, t.STOP_RENDER_AUDIO = 6, t.UNMUTE_AUDIO = 7, t.MUTE_AUDIO = 8, t.CHANGE_FRAME_RATE = 9, t.CHANGE_VIDEO_RESOLUTION = 10, t.CHANGE_AUDIO_SPEAKER = 11, t.CHANGE_VIDEO_CAPTURE_DEVICE = 12, t.CHANGE_CURRENT_ACTIVE_SSRC = 13, t.REMOVE_AUDIO_CAPTURE = 14, t.LEAVE_MEETING = 15, t.MEETING_FAIL_OVER = 16, t.END_MEDIA = 17, t.CHANGE_AUDIO_MIC = 18, t.WEBRTC_RESTART = 19, t.REMOVE_RENDER_AUDIO = 20, t.LEAVE_COMPUTER_AUDIO = 21, t.JOIN_COMPUTER_AUDIO = 22, t.START_SHARING = 23, t.STOP_SHARING = 24, t.SWITCH_CANVAS_FOR_VIDEO_CAPTURE = 25, t.START_REMOTE_CONTROL = 26, t.UPDATE_REMOTE_CONTROL_PROPERTIES = 27, t.CANCEL_REMOTE_CONTROL = 28, t.UPDATE_SUBSCRIBE_VIDEO = 29, t.START_DESKTOP_SHARING = 30, t.STOP_DESKTOP_SHARING = 31, t.PAUSE_DESKTOP_SHARING = 32, t.RESUME_DESKTOP_SHARING = 33, t.CHECK_CHROME_SHARING_EXTENSION = 34, t.SWITCH_CANVAS_FOR_SHARING_CAPTURE = 35, t.CHANGE_CURRENT_SHARING_ACTIVE_SSRC = 36, t.COMMAND_SOCKET_MESSAGE_NOTIFY = 40, t.RESEND_REMOTE_CONTROL_POSITION_PDU = 41, t.Audio_Dec_WASM_OK = 1, t.Audio_Dec_Handle_OK = 2, t.Audio_Dec_WebSocket_OK = 3, t.Audio_Enc_WASM_OK = 4, t.Audio_Enc_Handle_OK = 5, t.Video_Dec_WASM_OK = 7, t.Video_Dec_Handle_OK = 8, t.Video_Dec_WebSocket_OK = 9, t.Video_Enc_WASM_OK = 10, t.Video_Enc_Handle_OK = 11, t.Sharing_Dec_WASM_OK = 12, t.Sharing_Dec_PICTURE = 13, t.AUDIO_DELAY = 14, t.Sharing_Dec_WebSocket_OK = 15, t.Sharing_Handle_OK = 16, t.Sharing_Data = 17, t.DECODE_MESSAGE = 18, t.Video_Enc_WebSocket_OK = 19, t.Video_Capture_Tick = 20, t.MONITOR_MESSAGE = 21, t.DOWNLOAD_WASM_FROM_MAIN_THREAD = 30, t.APP_TROUBLESHOOTING_INFO = 31, t.DELTA_D = 32, t.DELTA_C = 33, t.DELTA_S = 34, t.WCL_TROUBLESHOOTING_INFO = 35, t.SHARING_DATA_VIDEO_MODE = 36, t.MOUSE_DATA_VIDEO_MODE = 37, t.SHARING_DECODE_MESSAGE = 38, t.VIDEO_ENCODED_DATA = 39, t.VIDEO_DROP_RATIO_FROM_WCL = 40, t.VIDEO_DATA_DROP_RATIO = 41, t.AUDIO_ENCODED_DATA = 42, t.VIDEO_RESOLUTION_UPDATE = 50, t.VIDEO_RENDER_MONITOR_LOG = 51, t.Sharing_Width_And_Height_Info = 52, t.SHARING_RENDER_MONITOR_LOG = 53, t.SHARING_GET_IMAGE_DATA_WRONG = 54, t.Audio_Dec_WASM_FAILED = -1, t.Audio_Dec_Handle_FAILED = -2, t.Audio_Dec_WebSocket_FAILED = -3, t.Audio_Enc_WASM_FAILED = -4, t.Audio_Enc_Handle_FAILED = -5, t.Video_Dec_WASM_FAILED = -7, t.Video_Dec_Handle_FAILED = -8, t.Video_Dec_WebSocket_FAILED = -9, t.Video_Enc_WASM_FAILED = -10, t.Video_Enc_Handle_FAILED = -11, t.Sharing_Dec_WASM_FAILED = -12, t.Audio_Mute = -13, t.Sharing_Handle_FAILED = -14, t.Sharing_Dec_WebSocket_FAILED = -15, t.Video_Enc_WebSocket_FAILED = -16, t.INIT_SUCCESS = 1, t.INIT_SUCCESS_VIDEO = 1.1, t.INIT_SUCCESS_AUDIO = 1.2, t.INIT_SUCCESS_SHARING = 1.3, t.USER_GRANT_CAPTURE_AUDIO = 2, t.CURRENT_VIDEO_RESOLUTION = 3, t.SHARING_DEC_THREAD_OK = 4, t.SHARING_DATA = 5, t.SHARING_PARA = 6, t.VIDEO_DECODE_MAX_SIZE = 7, t.SHARING_DECODE_MAX_SIZE = 18, t.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT = 8, t.START_VIDEO_CAPTURE_SUCCESS = 9, t.STOP_VIDEO_CAPTURE_SUCCESS = 10, t.START_REMOTE_CONTROL_SUCCESS = 11, t.CANCEL_REMOTE_CONTROL_SUCCESS = 12, t.REMOTE_CONTROL_COPIED_TEXT_NOTIFY = 13, t.MONITOR_LOG = 14, t.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT = 15, t.DESKTOP_SHARING_CAPTURE_SUCCESS = 16, t.CHECK_CHROME_SHARING_EXTENSION_RESPONSE = 17, t.SEND_MESSAGE_TO_RWG = 20, t.INIT_FAILED = -1, t.INIT_FAILED_VIDEO = -1.1, t.INIT_FAILED_AUDIO = -1.2, t.INIT_FAILED_SHARING = -1.3, t.USER_FORBIDDED_CAPTURE_AUDIO = -2, t.AUDIO_WEBSOCKET_BROKEN = -3, t.VIDEO_WEBSOCKET_BROKEN = -4, t.SHARING_DEC_THREAD_FAILED = -5, t.AUDIO_ZERO_DATA = -6, t.AUDIO_CTX_SAMPLERATE = -7, t.USER_FORBIDDED_CAPTURE_VIDEO = -8, t.USER_CAMERA_IS_TAKEN_BY_OTHER_PROGRAMS = -9, t.STOP_VIDEO_CAPTURE_FAILED = -10, t.START_REMOTE_CONTROL_FAILED = -11, t.CANCEL_REMOTE_CONTROL_FAILED = -12, t.REMOTE_CONTROL_PASTE_TEXT_LENGTH_OVERFLOW = -14, t.USER_STOP_DESKTOP_SHARING = -15, t.USER_CANCEL_PERMISSION_REQUEST = -16, t.DESKTOP_SHARING_CHROME_EXTENSION_UNINSTALLED = -17, t.DESKTOP_SHARING_PERMISSION_DENIED = -18, t.DESKTOP_SHARING_TIME_OUT = -19, t.DESKTOP_SHARING_ERROR = -20, t.AUDIO_SPEAKER_SET_ERROR = -21, t.DESKTOP_SHARING_SYSTEM_ERROR = -22, t.AUDIO_CLIPPING = -23, t.AUDIO_STOP = 0, t.AUDIO_START = 1, t.AUDIO_REMOVE = 2, t.AUDIO_ILLEGAL = -1, t.SHARING_PARAM_INFO_FROM_SOCKET = "SHARING_PARAM_INFO_FROM_SOCKET", t.VIDEO_DATA_FROM_WORKER = "VIDEO_DATA_FROM_WORKER", t.AUDIO_DATA_FROM_WORKER = "AUDIO_DATA_FROM_WORKER", t.VIDEO_ENCODE_DATA_FROM_WORKER = "VIDEO_ENCODE_DATA_FROM_WORKER", t.ZOOM_CONNECTION_VIDEO_OFFER_EVT = 24321, t.ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT = 24322, t.ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT = 24322, t.PUBSUB_EVT = {
          ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT: "ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT",
          ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT: "ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT",
          END_MEDIA: "END_MEDIA",
          DESTROY: "DESTROY",
          VIDEO_DATACHANNEL_SPEED: "VIDEO_DATACHANNEL_SPEED",
          DC_COMING_MESSAGE: "DC_COMING_MESSAGE"
      }, t.MEDIA_VIDEO_REPORT_DROP_RATIO = 100, t.MEDIA_VIDEO_REPORT_RTT = 101
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var r = i(n(159)),
          a = i(n(72)),
          o = {},
          u = [],
          s = 1e3,
          d = 1,
          c = "object" === ("undefined" == typeof localStorage ? "undefined" : (0, a.default)(localStorage)) && localStorage.__islogdebug,
          l = "object" === ("undefined" == typeof localStorage ? "undefined" : (0, a.default)(localStorage)) && localStorage.__islogdebug;
      var h = function(e, t) {
          function n() {
              var t = [],
                  n = "log-".concat(e, "-").concat(d);
              return t.push.apply(t, arguments), t.push({
                      fn: function(e) {
                          return function() {
                              return o[e]
                          }
                      }(n)
                  }),
                  function(e, t) {
                      if (c && (u.push(e), o[e] = t, u.length > s)) {
                          var n = u.shift();
                          delete o[n]
                      }
                  }(n, (new Error).stack), d++, t
          }!0 === t && (c = !0, l = !0);
          var i = function() {
              var t;
              l && (t = console).log.apply(t, [e].concat((0, r.default)(n(arguments))))
          };
          return ["log", "info", "warn", "error"].forEach(function(t) {
              i[t] = function() {
                  var i;
                  l && (i = console)[t].apply(i, [e].concat((0, r.default)(n(arguments))))
              }
          }), i.isEnable = function() {
              return l
          }, i
      };
      h.isEnable = function() {
          return l
      };
      var _ = h;
      t.default = _
  }, function(e, t) {
      e.exports = function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
  }, function(e, t, n) {
      var i = n(77);

      function r(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), i(e, r.key, r)
          }
      }
      e.exports = function(e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e
      }
  }, function(e, t) {
      var n = {}.toString;
      e.exports = function(e) {
          return n.call(e).slice(8, -1)
      }
  }, function(e, t) {
      e.exports = function(e, t) {
          return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
          }
      }
  }, function(e, t) {
      e.exports = function(e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e
      }
  }, function(e, t) {
      e.exports = !0
  }, function(e, t, n) {
      var i = n(79),
          r = n(56);
      e.exports = Object.keys || function(e) {
          return i(e, r)
      }
  }, function(e, t, n) {
      var i = n(6).f,
          r = n(13),
          a = n(4)("toStringTag");
      e.exports = function(e, t, n) {
          e && !r(e = n ? e : e.prototype, a) && i(e, a, {
              configurable: !0,
              value: t
          })
      }
  }, function(e, t, n) {
      var i = n(9),
          r = n(83),
          a = n(84),
          o = n(8),
          u = n(39),
          s = n(71),
          d = {},
          c = {};
      (t = e.exports = function(e, t, n, l, f) {
          var h, _, E, p, S = f ? function() {
                  return e
              } : s(e),
              A = i(n, l, t ? 2 : 1),
              I = 0;
          if ("function" != typeof S) throw TypeError(e + " is not iterable!");
          if (a(S)) {
              for (h = u(e.length); h > I; I++)
                  if ((p = t ? A(o(_ = e[I])[0], _[1]) : A(e[I])) === d || p === c) return p
          } else
              for (E = S.call(e); !(_ = E.next()).done;)
                  if ((p = r(E, A, _.value, t)) === d || p === c) return p
      }).BREAK = d, t.RETURN = c
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var r = i(n(95)),
          a = i(n(35)),
          o = n(69),
          u = n(74),
          s = n(75),
          d = (0, i(n(23)).default)("sdk.variables");

      function c() {}
      c.prototype.initDB = function() {
          var e, t = {},
              n = this;
          t.init = function(i) {
              if (this.db_name = i.db_name, this.db_version = i.db_version, this.db_store_name = i.db_store_name, indexedDB) {
                  try {
                      e = indexedDB.open(this.db_name, this.db_version)
                  } catch (e) {
                      return d(e), void(n.indexDbObject = null)
                  }
                  e.onerror = function(e) {
                      n.indexDbObject = null
                  }, e.onupgradeneeded = function(e) {
                      this.db = e.target.result, this.db.createObjectStore(t.db_store_name)
                  }, e.onsuccess = function(e) {
                      t.db = e.target.result, n.openIndexFlag = !0, n.indexDbObject.select("delay")
                  }
              } else n.indexDbObject = null
          }, t.put = function(e, n) {
              try {
                  var i = t.db.transaction(t.db_store_name, "readwrite").objectStore(t.db_store_name).put(e, n);
                  i.onsuccess = function() {}, i.onerror = function(e) {
                      d("Set Delay failed!")
                  }
              } catch (e) {
                  d("IndexDb put Failed!")
              }
          }, t.delete = function(n) {
              (e = t.db.transaction(t.db_store_name, "readwrite").objectStore(t.db_store_name).delete(n)).onsuccess = function() {
                  d("Delete the key:" + n)
              }
          }, t.select = function(e) {
              try {
                  var i = t.db.transaction(t.db_store_name, "readwrite").objectStore(t.db_store_name);
                  if (e) var r = i.get(e);
                  else r = i.getAll();
                  r.onsuccess = function() {
                      n.audioDelay = r.result
                  }, r.onerror = function() {
                      n.audioDelay = 0
                  }
              } catch (e) {
                  d("IndexDb Select Failed")
              }
          }, t.clear = function() {
              t.db.transaction(t.db_store_name, "readwrite").objectStore(t.db_store_name).clear().onsuccess = function() {
                  d("Clear the IndexDb Successfully")
              }
          }, t.close = function() {
              t.db && t.db.close()
          }, this.indexDbObject = t, this.indexDbObject.init({
              db_name: "AEC",
              db_version: 1,
              db_store_name: "delay"
          })
      }, c.prototype.Notify_APPUI_SAFE = function() {
          this.Notify_APPUI && this.Notify_APPUI.apply(this, arguments)
      }, c.prototype.reinit = function() {
          this.SPECIAL_ID = 0, this.Notify_APPUI = null, this.localAudioDecMGR = null, this.localVideoDecMGR = null, this.localAudioEncMGR = null, this.localVideoEncMGR = null, this.localSharingDecMGR = null, this.localMouseDecMGR = null, this.localSharingEncMGR = null, this.localAudioPara = null, this.localVideoPara = null, this.localSharingPara = null, this.Audio_WebSocket_Ip_Address = null, this.Video_WebSocket_Ip_Address = null, this.Sharing_WebSocket_Ip_Address = null, this.mediaSDKHandle = null, this.audio_pcm_queue = new r.default, this.int16Array = null, this.isInitialFailed = !1, this.isAudioEncodeWASMOK = !1, this.isAudioDecodeWASMOK = !1, this.isVideoEncodeWASMOK = !1, this.isVideoDecodeWASMOK = !1, this.isSharingDecodeWASMOK = !1, this.isSharingEncodeWASMOK = !1, this.audioEncWorkerPath = "", this.audioDecWorkerPath = "", this.videoDecWorkerPath = "", this.videoEncWorkerPath = "", this.sharingDecWorkerPath = "", this.sharingEncWorkerPath = "", this.isAudioEncodePostStart = !1, this.isAudioDecodePostStart = !1, this.isVideoDecodePostStart = !1, this.isVideoEncodePostStart = !1, this.isSharingDecodePostStart = !1, this.isSharingEncodePostStart = !1, this.isAudioEncodeThreadStart = !1, this.isAudioDecodeThreadStart = !1, this.isVideoDecodeThreadStart = !1, this.isSharingDecodeThreadStart = !1, this.isVideoEncodeThreadStart = !1, this.isSharingEncodeThreadStart = !1, this.isAudioPlayWork = !1, this.isVideoPlayWork = !1, this.isSharingPlayWork = !1, this.shareBufferSampleNumb = 30, this.initialSuccessNumb = 0, this.TotalWaitEvent = 0, this.audioPostInterval = null, this.sharedBuffer = null, this.indexDbObject = null, this.audioDelay = 0, this.openIndexFlag = !1, this.audioBufferSize = a.default.browser.isEdge || a.default.browser.isFirefox ? 30 : 15, this.monitorEncodeVideo = null, this.monitorDecodeVideo = null, this.monitorEncodeSharing = null, this.monitorDecodeSharing = null, this.monitorEncodeAudio = null, this.monitorDecodeAudio = null, this.monitorVideoCapture = null, this.monitorAudioCapture = null, this.monitorIntervalHandle = null, this.monitorVideoUserID = null, this.monitorAudioUserID = null, this.monitorSharingUserID = null, this.monitorSharingEncodeAPPInfo = null, this.monitorVideoDecodeAPPInfo = null, this.monitorVideoEncodeAPPInfo = null, this.monitorCid = null, this.e2eencrypt = !1, this.AudioNode = null, this.CurrentSSRC = 0, this.CurrentSSRCTime = 0, this.videoDecResponseText = null, this.videoEncResponseText = null, this.sharingDecodeResponse = null, this.sharingEncodeResponse = null, this.sharingDecInitInstance = new o.SharingInit, this.sharingEncInitInstance = new o.SharingInit, this.videoInitInstance = new u.VideoInit, this.audioDecInitInstance = new s.AudioInit, this.audioEncodeInitInstance = new s.AudioInit, this.videoDecInitInstance = new u.VideoInit, this.audioDecodeResponse = null, this.audioEncodeResponse = null, this.initDB()
      };
      var l = new c;
      t.default = l
  }, function(e, t, n) {
      n(120);
      for (var i = n(2), r = n(11), a = n(17), o = n(4)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
          var d = u[s],
              c = i[d],
              l = c && c.prototype;
          l && !l[o] && r(l, o, d), a[d] = a.Array
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var r = i(n(15)),
          a = i(n(16)),
          o = i(n(10)),
          u = i(n(107)),
          s = {};

      function d(e, t, n) {
          var i = e.match(t);
          return i && i.length >= n && parseInt(i[n], 10)
      }
      var c, l = function() {
              var e = window.navigator,
                  t = {
                      browser: null,
                      version: null
                  };
              if ("undefined" == typeof window || !window.navigator) return t.browser = "Not a browser.", t;
              if (e.mozGetUserMedia) t.browser = "firefox", t.version = d(e.userAgent, /Firefox\/(\d+)\./, 1);
              else if (e.webkitGetUserMedia) t.browser = "chrome", t.version = d(e.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
              else if (e.mediaDevices && e.userAgent.match(/Edge\/(\d+).(\d+)$/)) t.browser = "edge", t.version = d(e.userAgent, /Edge\/(\d+).(\d+)$/, 2);
              else {
                  if (!window.RTCPeerConnection || !e.userAgent.match(/AppleWebKit\/(\d+)\./)) return t.browser = "Not a supported browser.", t;
                  t.browser = "safari", t.version = d(e.userAgent, /AppleWebKit\/(\d+)\./, 1)
              }
              return t
          }(),
          f = {
              getDocumentHandle: function(e) {
                  return document.getElementById(e)
              },
              browserType: l,
              browser: {
                  isFirefox: "firefox" === l.browser,
                  isChrome: "chrome" === l.browser,
                  isEdge: "edge" === l.browser,
                  isSafari: "safari" === l.browser
              },
              isOpera65: function() {
                  try {
                      var e = navigator.userAgent.match(/OPR\/(\d+)\./);
                      return !!(e && Number(e[1]) < 66)
                  } catch (e) {
                      return !1
                  }
              },
              isAndroidBrowser: function() {
                  try {
                      var e = navigator.userAgent || navigator.vendor || window.opera;
                      return !!/android/i.test(e)
                  } catch (e) {
                      return !1
                  }
              },
              download: function(e) {
                  if (s[e]) return s[e];
                  var t = new o.default(function(t, n) {
                      var i = new XMLHttpRequest;
                      i.addEventListener("load", function() {
                          t(this.responseText)
                      }, i), i.onerror = function(e) {
                          n(e)
                      }, i.open("get", e, !0), i.send()
                  });
                  return s[e] = t, t
              },
              downloadBinary: function(e) {
                  if (s[e]) return s[e];
                  var t = new o.default(function(t, n) {
                      var i = new XMLHttpRequest;
                      i.responseType = "arraybuffer", i.addEventListener("load", function() {
                          t(this.response)
                      }, i), i.onerror = function(e) {
                          n(e)
                      }, i.open("get", e, !0), i.send()
                  });
                  return s[e] = t, t
              },
              readBlob: function(e) {
                  return new o.default(function(t, n) {
                      var i = new FileReader;
                      i.onload = function() {
                          t(i.result)
                      }, i.readAsText(e)
                  })
              },
              readBlobAsBuffer: function(e) {
                  return new o.default(function(t, n) {
                      var i = new FileReader;
                      i.onload = function(e) {
                          t(e.target.result)
                      }, i.readAsArrayBuffer(e)
                  })
              },
              lengthInUtf8Bytes: function(e) {
                  var t = encodeURIComponent(e).match(/%[89ABab]/g);
                  return e.length + (t ? t.length : 0)
              },
              isLittleEndian: function() {
                  var e = new ArrayBuffer(2),
                      t = new Uint8Array(e),
                      n = new Uint16Array(e);
                  return t[0] = 170, t[1] = 187, 48042 === n[0]
              },
              sleep: function(e) {
                  return new o.default(function(t, n) {
                      setTimeout(function() {
                          t(!0)
                      }, e)
                  })
              },
              isSDKSupportMultiThread: (c = (0, a.default)(r.default.mark(function e() {
                  return r.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if ("chrome" != l.browser) {
                                  e.next = 6;
                                  break
                              }
                              return e.next = 3, u.default.threads();
                          case 3:
                              e.sent, e.next = 7;
                              break;
                          case 6:
                          case 7:
                              return e.abrupt("return", !1);
                          case 8:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })), function() {
                  return c.apply(this, arguments)
              })
          };
      t.default = f
  }, function(e, t, n) {
      var i = n(100),
          r = n(187),
          a = n(188),
          s = i ? i.toStringTag : void 0;
      e.exports = function(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? r(e) : a(e)
      }
  }, function(e, t) {
      t.f = {}.propertyIsEnumerable
  }, function(e, t, n) {
      var i = n(8),
          r = n(117),
          a = n(56),
          o = n(54)("IE_PROTO"),
          u = function() {},
          s = function() {
              var e, t = n(49)("iframe"),
                  i = a.length;
              for (t.style.display = "none", n(80).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; i--;) delete s.prototype[a[i]];
              return s()
          };
      e.exports = Object.create || function(e, t) {
          var n;
          return null !== e ? (u.prototype = i(e), n = new u, u.prototype = null, n[o] = e) : n = s(), void 0 === t ? n : r(n, t)
      }
  }, function(e, t, n) {
      var i = n(52),
          r = Math.min;
      e.exports = function(e) {
          return e > 0 ? r(i(e), 9007199254740991) : 0
      }
  }, function(e, t) {
      var n = 0,
          i = Math.random();
      e.exports = function(e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
      }
  }, function(e, t, n) {
      var i = n(26),
          r = n(4)("toStringTag"),
          a = "Arguments" == i(function() {
              return arguments
          }());
      e.exports = function(e) {
          var t, n, o;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
              try {
                  return e[t]
              } catch (e) {}
          }(t = Object(e), r)) ? n : a ? i(t) : "Object" == (o = i(t)) && "function" == typeof t.callee ? "Arguments" : o
      }
  }, function(e, t) {
      e.exports = function(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t)
      }
  }, function(e, t, n) {
      e.exports = n(132)
  }, function(e, t) {
      e.exports = function(e) {
          return null != e && "object" == typeof e
      }
  }, function(e, t, n) {
      var i = n(26);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
          return "String" == i(e) ? e.split("") : Object(e)
      }
  }, function(e, t) {
      e.exports = function(e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e
      }
  }, function(e, t, n) {
      var i = n(37),
          r = n(27),
          a = n(12),
          o = n(48),
          u = n(13),
          s = n(76),
          d = Object.getOwnPropertyDescriptor;
      t.f = n(7) ? d : function(e, t) {
          if (e = a(e), t = o(t, !0), s) try {
              return d(e, t)
          } catch (e) {}
          if (u(e, t)) return r(!i.f.call(e, t), e[t])
      }
  }, function(e, t, n) {
      var i = n(5);
      e.exports = function(e, t) {
          if (!i(e)) return e;
          var n, r;
          if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
          if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
          if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
          throw TypeError("Can't convert object to primitive value")
      }
  }, function(e, t, n) {
      var i = n(5),
          r = n(2).document,
          a = i(r) && i(r.createElement);
      e.exports = function(e) {
          return a ? r.createElement(e) : {}
      }
  }, function(e, t, n) {
      var i = n(3),
          r = n(0),
          a = n(14);
      e.exports = function(e, t) {
          var n = (r.Object || {})[e] || Object[e],
              o = {};
          o[e] = t(n), i(i.S + i.F * a(function() {
              n(1)
          }), "Object", o)
      }
  }, function(e, t) {}, function(e, t) {
      var n = Math.ceil,
          i = Math.floor;
      e.exports = function(e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(29),
          r = n(3),
          a = n(78),
          o = n(11),
          u = n(17),
          s = n(116),
          d = n(31),
          c = n(81),
          l = n(4)("iterator"),
          f = !([].keys && "next" in [].keys()),
          h = function() {
              return this
          };
      e.exports = function(e, t, n, _, E, p, S) {
          s(n, t, _);
          var A, I, v, D = function(e) {
                  if (!f && e in C) return C[e];
                  switch (e) {
                      case "keys":
                      case "values":
                          return function() {
                              return new n(this, e)
                          }
                  }
                  return function() {
                      return new n(this, e)
                  }
              },
              g = t + " Iterator",
              O = "values" == E,
              m = !1,
              C = e.prototype,
              R = C[l] || C["@@iterator"] || E && C[E],
              y = R || D(E),
              T = E ? O ? D("entries") : y : void 0,
              M = "Array" == t && C.entries || R;
          if (M && (v = c(M.call(new e))) !== Object.prototype && v.next && (d(v, g, !0), i || "function" == typeof v[l] || o(v, l, h)), O && R && "values" !== R.name && (m = !0, y = function() {
                  return R.call(this)
              }), i && !S || !f && !m && C[l] || o(C, l, y), u[t] = y, u[g] = h, E)
              if (A = {
                      values: O ? y : D("values"),
                      keys: p ? y : D("keys"),
                      entries: T
                  }, S)
                  for (I in A) I in C || a(C, I, A[I]);
              else r(r.P + r.F * (f || m), t, A);
          return A
      }
  }, function(e, t, n) {
      var i = n(55)("keys"),
          r = n(40);
      e.exports = function(e) {
          return i[e] || (i[e] = r(e))
      }
  }, function(e, t, n) {
      var i = n(0),
          r = n(2),
          a = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
      (e.exports = function(e, t) {
          return a[e] || (a[e] = void 0 !== t ? t : {})
      })("versions", []).push({
          version: i.version,
          mode: n(29) ? "pure" : "global",
          copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
      })
  }, function(e, t) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function(e, t) {
      e.exports = function(e, t, n, i) {
          if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
          return e
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(28);
      e.exports.f = function(e) {
          return new function(e) {
              var t, n;
              this.promise = new e(function(e, i) {
                  if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                  t = e, n = i
              }), this.resolve = i(t), this.reject = i(n)
          }(e)
      }
  }, function(e, t, n) {
      var i = n(11);
      e.exports = function(e, t, n) {
          for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
          return e
      }
  }, function(e, t) {
      t.f = Object.getOwnPropertySymbols
  }, function(e, t, n) {
      t.f = n(4)
  }, function(e, t, n) {
      var i = n(40)("meta"),
          r = n(5),
          a = n(13),
          o = n(6).f,
          u = 0,
          s = Object.isExtensible || function() {
              return !0
          },
          d = !n(14)(function() {
              return s(Object.preventExtensions({}))
          }),
          c = function(e) {
              o(e, i, {
                  value: {
                      i: "O" + ++u,
                      w: {}
                  }
              })
          },
          l = e.exports = {
              KEY: i,
              NEED: !1,
              fastKey: function(e, t) {
                  if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                  if (!a(e, i)) {
                      if (!s(e)) return "F";
                      if (!t) return "E";
                      c(e)
                  }
                  return e[i].i
              },
              getWeak: function(e, t) {
                  if (!a(e, i)) {
                      if (!s(e)) return !0;
                      if (!t) return !1;
                      c(e)
                  }
                  return e[i].w
              },
              onFreeze: function(e) {
                  return d && l.NEED && s(e) && !a(e, i) && c(e), e
              }
          }
  }, function(e, t, n) {
      var i = n(2),
          r = n(0),
          a = n(29),
          o = n(61),
          u = n(6).f;
      e.exports = function(e) {
          var t = r.Symbol || (r.Symbol = a ? {} : i.Symbol || {});
          "_" == e.charAt(0) || e in t || u(t, e, {
              value: o.f(e)
          })
      }
  }, function(e, t, n) {
      e.exports = n(144)
  }, function(e, t, n) {
      var i = n(72),
          r = n(169);
      e.exports = function(e, t) {
          return !t || "object" !== i(t) && "function" != typeof t ? r(e) : t
      }
  }, function(e, t, n) {
      var i = n(170),
          r = n(97);

      function a(t) {
          return e.exports = a = r ? i : function(e) {
              return e.__proto__ || i(e)
          }, a(t)
      }
      e.exports = a
  }, function(e, t, n) {
      var i = n(176),
          r = n(179);
      e.exports = function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = i(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && r(e, t)
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var r = i(n(24)),
          a = i(n(25)),
          o = function() {
              function e() {
                  (0, r.default)(this, e), this.handler = !1, this.wasm = !1, this.socket = !1
              }
              return (0, a.default)(e, [{
                  key: "setHanderSuccess",
                  value: function() {
                      this.handler = !0
                  }
              }, {
                  key: "setWasmSuccess",
                  value: function() {
                      this.wasm = !0
                  }
              }, {
                  key: "setSocketSuccess",
                  value: function() {
                      this.socket = !0
                  }
              }, {
                  key: "checkInitSuccess",
                  value: function() {
                      return this.handler && this.wasm && this.socket
                  }
              }, {
                  key: "isSocketInitSuccess",
                  value: function() {
                      return this.socket
                  }
              }]), e
          }();
      t.default = o
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.Sharing = t.SHARING_INIT_EVENT = t.SharingInit = void 0;
      var r = i(n(10)),
          a = i(n(24)),
          o = i(n(25)),
          u = i(n(65)),
          s = i(n(66)),
          d = i(n(67)),
          c = i(n(68)),
          l = i(n(19)),
          f = {
              SHARING_DECODE_SUCCESS: "SHARING_DECODE_INIT_SUCCESS",
              SHARING_DECODE_FAILED: "SHARING_DECODE__INIT_FAILED",
              SHARING_ENCODE_SUCCESS: "SHARING_ENCODE_INIT_SUCCESS",
              SHARING_ENCODE_FAILED: "SHARING_ENCODE__INIT_FAILED"
          };
      t.SHARING_INIT_EVENT = f;
      var h = function(e) {
          function t() {
              return (0, a.default)(this, t), (0, u.default)(this, (0, s.default)(t).call(this))
          }
          return (0, d.default)(t, e), (0, o.default)(t, null, [{
              key: "publishSharingDecodeSuccessEvent",
              value: function() {
                  l.default.trigger(f.SHARING_DECODE_SUCCESS)
              }
          }, {
              key: "publishSharingDecodeFailedEvent",
              value: function() {
                  l.default.trigger(f.SHARING_DECODE_FAILED)
              }
          }, {
              key: "publishSharingEncodeSuccessEvent",
              value: function() {
                  l.default.trigger(f.SHARING_ENCODE_SUCCESS)
              }
          }, {
              key: "publishSharingEncodeFailedEvent",
              value: function() {
                  l.default.trigger(f.SHARING_ENCODE_FAILED)
              }
          }]), t
      }(c.default);
      t.SharingInit = h;
      var _ = function() {
          function e() {
              (0, a.default)(this, e)
          }
          return (0, o.default)(e, null, [{
              key: "onSharingDecodeSuccess",
              value: function() {
                  return new r.default(function(e, t) {
                      l.default.on(f.SHARING_DECODE_SUCCESS, function() {
                          e(!0)
                      })
                  })
              }
          }, {
              key: "waitSharingDecodeResult",
              value: function() {
                  return new r.default(function(e, t) {
                      l.default.on(f.SHARING_DECODE_SUCCESS, function() {
                          e(!0)
                      }), l.default.on(f.SHARING_DECODE_FAILED, function() {
                          e(!1)
                      })
                  })
              }
          }, {
              key: "waitSharingEncodeResult",
              value: function() {
                  return new r.default(function(e, t) {
                      l.default.on(f.SHARING_ENCODE_SUCCESS, function() {
                          e(!0)
                      }), l.default.on(f.SHARING_ENCODE_FAILED, function() {
                          e(!1)
                      })
                  })
              }
          }]), e
      }();
      t.Sharing = _
  }, function(e, t, n) {
      "use strict";
      var i = n(20),
          r = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var a = r(n(96)),
          o = r(n(64)),
          u = i(n(22)),
          s = r(n(33)),
          d = function() {
              function e() {
                  this.base_time = null, this.monitor = "", this.last_get_monitor_time = 0, this.checkIsNecessaryLogMap = new o.default, this.highfrequencyerror = new o.default
              }
              return e.prototype = {
                  init: function() {
                      this.base_time = (new Date).getTime() / 1e3, this.checkIsNecessaryLogMap = new o.default
                  },
                  add_monitor: function(e) {
                      if (e) try {
                          var t = !1;
                          "F" != e[e.length - 1] && "f" != e[e.length - 1] || (t = !0);
                          var n = (new Date).getTime() / 1e3 - this.base_time;
                          this.monitor ? this.monitor = this.monitor + e + "(" + Math.ceil(n) + ")" : this.monitor = e + "(" + Math.ceil(n) + ")", t && this.send_instant_monitor()
                      } catch (e) {}
                  },
                  get_monitor: function() {
                      var e = this.monitor,
                          t = (new Date).getTime() / 1e3;
                      return null != e && (e.length > 80 || t - this.last_get_monitor_time > 180) ? (this.last_get_monitor_time = t, this.monitor = null, "WCL_M, " + e) : ""
                  },
                  get_instant_monitor: function() {
                      var e = this.monitor;
                      return this.monitor = null, "WCL_M, " + e
                  },
                  send_instant_monitor: function() {
                      var e = this.get_instant_monitor();
                      e && s.default.Notify_APPUI(u.MONITOR_LOG, {
                          evt: 4167,
                          seq: 1,
                          body: {
                              data: e
                          }
                      })
                  },
                  add_monitor2: function(e) {
                      e && (this.monitor ? this.monitor = this.monitor + e + "()" : this.monitor = e + "()")
                  },
                  add_monitor3: function(e) {
                      e && (this.highfrequencyerror[e] ? this.highfrequencyerror[e] += 1 : this.highfrequencyerror[e] = 1, 0 == (this.highfrequencyerror[e] & this.highfrequencyerror[e] - 1) && this.add_monitor(e.substring(0, e.length - 1) + this.highfrequencyerror[e] + "F"))
                  },
                  checkIsNecessaryExceptionLogAndReturnRepeatTimes: function(e) {
                      var t = this,
                          n = !0,
                          i = 0;
                      try {
                          return this.checkIsNecessaryLogMap.get(e) && this.checkIsNecessaryLogMap.get(e) % 100 != 0 && (n = !1), {
                              isNecessary: n,
                              repeatNumber: void 0 === (i = this.checkIsNecessaryLogMap.get(e)) ? 0 : i
                          }
                      } catch (e) {
                          return {
                              isNecessary: !0,
                              repeatNumber: 0
                          }
                      } finally {
                          var r = this.checkIsNecessaryLogMap.get(e) || 0;
                          if (this.checkIsNecessaryLogMap.set(e, r + 1), this.checkIsNecessaryLogMap.size > 200) {
                              var o = (0, a.default)(this.checkIsNecessaryLogMap.keys()).slice(0, 20);
                              o.forEach(function(e) {
                                  return t.checkIsNecessaryLogMap.delete(e)
                              })
                          }
                      }
                  }
              }, new e
          }();
      t.default = d
  }, function(e, t, n) {
      var i = n(41),
          r = n(4)("iterator"),
          a = n(17);
      e.exports = n(0).getIteratorMethod = function(e) {
          if (null != e) return e[r] || e["@@iterator"] || a[i(e)]
      }
  }, function(e, t, n) {
      var i = n(135),
          r = n(137);

      function a(e) {
          return (a = "function" == typeof r && "symbol" == typeof i ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : typeof e
          })(e)
      }

      function o(t) {
          return "function" == typeof r && "symbol" === a(i) ? e.exports = o = function(e) {
              return a(e)
          } : e.exports = o = function(e) {
              return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : a(e)
          }, o(t)
      }
      e.exports = o
  }, function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.WORKER_TYPE = t.workerStartTypeToDevToolWorkerNameEnum = t.workerStartTypeEnum = t.OS_ENUM = t.ConnectionType = t.EncodeDecodeEnum = t.ZOOM_CONNECTION_TYPE = void 0, t.ZOOM_CONNECTION_TYPE = {
          ZOOM_CONNECTION_COMMAND: 0,
          ZOOM_CONNECTION_AUDIO: 1,
          ZOOM_CONNECTION_VIDEO: 2,
          ZOOM_CONNECTION_SHARING_JPEG: 3,
          ZOOM_CONNECTION_SHARING_VIDEO: 4,
          ZOOM_CONNECTION_MEDIA_LOG: 5,
          ZOOM_CONNECTION_SHARING_REMOTE_CONTROL: 6,
          ZOOM_CONNECTION_UNKNOW: 7
      }, t.EncodeDecodeEnum = {
          encode: 1,
          decode: 2
      }, t.ConnectionType = {
          AUDIO: 1,
          SHARING: 2,
          VIDEO: 3
      }, t.OS_ENUM = {
          UNKNOWN: 0,
          WIN: 1,
          MAC: 2,
          PAD: 3,
          MOBILE: 4,
          CALL_IN: 5,
          LINUX: 6,
          WEB: 7,
          CHROME: 8
      }, t.workerStartTypeEnum = {
          videoEnc: "videoEnc",
          videoDec: "videoDec",
          audioEnc: "audioEnc",
          audioDec: "audioDec",
          sharingEnc: "sharingEnc",
          sharingDec: "sharingDec"
      }, t.workerStartTypeToDevToolWorkerNameEnum = {
          videoEnc: "27D10C2BC0312F11BE79BF9AA0668220",
          videoDec: "D5AC365D95ACF72EE1E8D0FED594C0CD",
          audioEnc: "AEF36FC5C22CE7AAF5DC05913633EDF7",
          audioDec: "BD3DF97B715748F6B6A5F59271A2D1A0",
          sharingEnc: "D0AEDC804599C31391A946904C74595F",
          sharingDec: "65DEAF0AA73F220ED401B90CFFCDFF23"
      }, t.WORKER_TYPE = {
          VIDEO_ENCODE: 0,
          VIDEO_DECODE: 1,
          AUDIO_ENCODE: 2,
          AUDIO_DECODE: 3,
          SHARING_ENCODE: 4,
          SHARING_DECODE: 5
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.Video = t.VIDEO_EVENT = t.VideoInit = void 0;
      var r = i(n(65)),
          a = i(n(66)),
          o = i(n(67)),
          u = i(n(10)),
          s = i(n(24)),
          d = i(n(25)),
          c = i(n(19)),
          l = i(n(68)),
          f = {
              VIDEO_ENCODE_INIT_SUCCESS: "VIDEO_ENCODE_INIT_SUCCESS",
              VIDEO_DECODE_INIT_SUCCESS: "VIDEO_DECODE_INIT_SUCCESS",
              VIDEO_ENCODE_INIT_FAILED: "VIDEO_ENCODE_INIT_FAILED",
              VIDEO_DECODE_INIT_FAILED: "VIDEO_DECODE_INIT_FAILED"
          };
      t.VIDEO_EVENT = f;
      var h = function() {
          function e() {
              (0, s.default)(this, e)
          }
          return (0, d.default)(e, null, [{
              key: "onVideoEncodeInitSuccess",
              value: function() {
                  return new u.default(function(e, t) {
                      c.default.on(f.VIDEO_ENCODE_INIT_SUCCESS, function() {
                          return e(!0)
                      })
                  })
              }
          }, {
              key: "onVideoDecodeInitSuccess",
              value: function() {
                  return new u.default(function(e, t) {
                      c.default.on(f.VIDEO_DECODE_INIT_SUCCESS, function() {
                          return e(!0)
                      })
                  })
              }
          }, {
              key: "waitVideoEncodeInitResult",
              value: function() {
                  return new u.default(function(e, t) {
                      c.default.on(f.VIDEO_ENCODE_INIT_SUCCESS, function() {
                          return e(!0)
                      }), c.default.on(f.VIDEO_ENCODE_INIT_FAILED, function() {
                          return e(!1)
                      })
                  })
              }
          }, {
              key: "waitVideoDecodeInitResult",
              value: function() {
                  return new u.default(function(e, t) {
                      c.default.on(f.VIDEO_DECODE_INIT_SUCCESS, function() {
                          return e(!0)
                      }), c.default.on(f.VIDEO_DECODE_INIT_FAILED, function() {
                          return e(!1)
                      })
                  })
              }
          }, {
              key: "onVideoSuccess",
              value: function() {
                  return u.default.all([e.onVideoEncodeInitSuccess(), e.onVideoDecodeInitSuccess()])
              }
          }]), e
      }();
      t.Video = h;
      var _ = function(e) {
          function t() {
              return (0, s.default)(this, t), (0, r.default)(this, (0, a.default)(t).call(this))
          }
          return (0, o.default)(t, e), (0, d.default)(t, null, [{
              key: "publishEncodeInitSuccessEvent",
              value: function() {
                  c.default.publish(f.VIDEO_ENCODE_INIT_SUCCESS)
              }
          }, {
              key: "publishDecodeInitSuccessEvent",
              value: function() {
                  c.default.publish(f.VIDEO_DECODE_INIT_SUCCESS)
              }
          }, {
              key: "publishEncodeInitFAILEDEvent",
              value: function() {
                  c.default.publish(f.VIDEO_ENCODE_INIT_FAILED)
              }
          }, {
              key: "publishDecodeInitFAILEDEvent",
              value: function() {
                  c.default.publish(f.VIDEO_DECODE_INIT_FAILED)
              }
          }]), t
      }(l.default);
      t.VideoInit = _
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.AudioService = t.AUDIO_INIT_EVENT = t.AudioInit = void 0;
      var r = i(n(10)),
          a = i(n(24)),
          o = i(n(25)),
          u = i(n(65)),
          s = i(n(66)),
          d = i(n(67)),
          c = i(n(68)),
          l = i(n(19)),
          f = {
              AUDIO_ENCODE_SUCCESS: "AUDIO_ENCODE_INIT_SUCCESS",
              AUDIO_DECODE_SUCCESS: "AUDIO_DECODE_INIT_SUCCESS",
              AUDIO_ENCODE_FAILED: "AUDIO_ENCODE_INIT_FAILED",
              AUDIO_DECODE_FAILED: "AUDIO_DECODE_INIT_FAILED"
          };
      t.AUDIO_INIT_EVENT = f;
      var h = function(e) {
          function t() {
              return (0, a.default)(this, t), (0, u.default)(this, (0, s.default)(t).call(this))
          }
          return (0, d.default)(t, e), (0, o.default)(t, null, [{
              key: "publishAudioEncodeSuccessEvent",
              value: function() {
                  l.default.trigger(f.AUDIO_ENCODE_SUCCESS)
              }
          }, {
              key: "publishAudioDecodeSuccessEvent",
              value: function() {
                  l.default.trigger(f.AUDIO_DECODE_SUCCESS)
              }
          }, {
              key: "publishAudioEncodeFAILEDEvent",
              value: function() {
                  l.default.trigger(f.AUDIO_ENCODE_FAILED)
              }
          }, {
              key: "publishAudioDecodeFAILEDEvent",
              value: function() {
                  l.default.trigger(f.AUDIO_DECODE_FAILED)
              }
          }]), t
      }(c.default);
      t.AudioInit = h;
      var _ = function() {
          function e() {
              (0, a.default)(this, e)
          }
          return (0, o.default)(e, null, [{
              key: "onAudioEncodeInitSuccess",
              value: function() {
                  return new r.default(function(e, t) {
                      l.default.on(f.AUDIO_ENCODE_SUCCESS, function() {
                          e(!0)
                      })
                  })
              }
          }, {
              key: "onAudioDecodeInitSuccess",
              value: function() {
                  return new r.default(function(e, t) {
                      l.default.on(f.AUDIO_DECODE_SUCCESS, function() {
                          e(!0)
                      })
                  })
              }
          }, {
              key: "waitAudioEncodeInitResult",
              value: function() {
                  return new r.default(function(e, t) {
                      l.default.on(f.AUDIO_ENCODE_SUCCESS, function() {
                          e(!0)
                      }), l.default.on(f.AUDIO_ENCODE_FAILED, function() {
                          e(!1)
                      })
                  })
              }
          }, {
              key: "waitAudioDecodeInitResult",
              value: function() {
                  return new r.default(function(e, t) {
                      l.default.on(f.AUDIO_DECODE_SUCCESS, function() {
                          e(!0)
                      }), l.default.on(f.AUDIO_DECODE_FAILED, function() {
                          e(!1)
                      })
                  })
              }
          }]), e
      }();
      t.AudioService = _
  }, function(e, t, n) {
      e.exports = !n(7) && !n(14)(function() {
          return 7 != Object.defineProperty(n(49)("div"), "a", {
              get: function() {
                  return 7
              }
          }).a
      })
  }, function(e, t, n) {
      e.exports = n(112)
  }, function(e, t, n) {
      e.exports = n(11)
  }, function(e, t, n) {
      var i = n(13),
          r = n(12),
          a = n(118)(!1),
          o = n(54)("IE_PROTO");
      e.exports = function(e, t) {
          var n, u = r(e),
              s = 0,
              d = [];
          for (n in u) n != o && i(u, n) && d.push(n);
          for (; t.length > s;) i(u, n = t[s++]) && (~a(d, n) || d.push(n));
          return d
      }
  }, function(e, t, n) {
      var i = n(2).document;
      e.exports = i && i.documentElement
  }, function(e, t, n) {
      var i = n(13),
          r = n(18),
          a = n(54)("IE_PROTO"),
          o = Object.prototype;
      e.exports = Object.getPrototypeOf || function(e) {
          return e = r(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
      }
  }, function(e, t) {
      e.exports = function(e, t) {
          return {
              value: t,
              done: !!e
          }
      }
  }, function(e, t, n) {
      var i = n(8);
      e.exports = function(e, t, n, r) {
          try {
              return r ? t(i(n)[0], n[1]) : t(n)
          } catch (t) {
              var a = e.return;
              throw void 0 !== a && i(a.call(e)), t
          }
      }
  }, function(e, t, n) {
      var i = n(17),
          r = n(4)("iterator"),
          a = Array.prototype;
      e.exports = function(e) {
          return void 0 !== e && (i.Array === e || a[r] === e)
      }
  }, function(e, t, n) {
      var i = n(8),
          r = n(28),
          a = n(4)("species");
      e.exports = function(e, t) {
          var n, o = i(e).constructor;
          return void 0 === o || null == (n = i(o)[a]) ? t : r(n)
      }
  }, function(e, t, n) {
      var i, r, a, o = n(9),
          u = n(123),
          s = n(80),
          d = n(49),
          c = n(2),
          l = c.process,
          f = c.setImmediate,
          h = c.clearImmediate,
          _ = c.MessageChannel,
          E = c.Dispatch,
          p = 0,
          S = {},
          A = function() {
              var e = +this;
              if (S.hasOwnProperty(e)) {
                  var t = S[e];
                  delete S[e], t()
              }
          },
          I = function(e) {
              A.call(e.data)
          };
      f && h || (f = function(e) {
          for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
          return S[++p] = function() {
              u("function" == typeof e ? e : Function(e), t)
          }, i(p), p
      }, h = function(e) {
          delete S[e]
      }, "process" == n(26)(l) ? i = function(e) {
          l.nextTick(o(A, e, 1))
      } : E && E.now ? i = function(e) {
          E.now(o(A, e, 1))
      } : _ ? (a = (r = new _).port2, r.port1.onmessage = I, i = o(a.postMessage, a, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (i = function(e) {
          c.postMessage(e + "", "*")
      }, c.addEventListener("message", I, !1)) : i = "onreadystatechange" in d("script") ? function(e) {
          s.appendChild(d("script")).onreadystatechange = function() {
              s.removeChild(this), A.call(e)
          }
      } : function(e) {
          setTimeout(o(A, e, 1), 0)
      }), e.exports = {
          set: f,
          clear: h
      }
  }, function(e, t) {
      e.exports = function(e) {
          try {
              return {
                  e: !1,
                  v: e()
              }
          } catch (e) {
              return {
                  e: !0,
                  v: e
              }
          }
      }
  }, function(e, t, n) {
      var i = n(8),
          r = n(5),
          a = n(58);
      e.exports = function(e, t) {
          if (i(e), r(t) && t.constructor === e) return t;
          var n = a.f(e);
          return (0, n.resolve)(t), n.promise
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(2),
          r = n(0),
          a = n(6),
          o = n(7),
          u = n(4)("species");
      e.exports = function(e) {
          var t = "function" == typeof r[e] ? r[e] : i[e];
          o && t && !t[u] && a.f(t, u, {
              configurable: !0,
              get: function() {
                  return this
              }
          })
      }
  }, function(e, t, n) {
      var i = n(4)("iterator"),
          r = !1;
      try {
          var a = [7][i]();
          a.return = function() {
              r = !0
          }, Array.from(a, function() {
              throw 2
          })
      } catch (e) {}
      e.exports = function(e, t) {
          if (!t && !r) return !1;
          var n = !1;
          try {
              var a = [7],
                  o = a[i]();
              o.next = function() {
                  return {
                      done: n = !0
                  }
              }, a[i] = function() {
                  return o
              }, e(a)
          } catch (e) {}
          return n
      }
  }, function(e, t, n) {
      var i = n(26);
      e.exports = Array.isArray || function(e) {
          return "Array" == i(e)
      }
  }, function(e, t, n) {
      var i = n(79),
          r = n(56).concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function(e) {
          return i(e, r)
      }
  }, function(e, t, n) {
      var i = n(5);
      e.exports = function(e, t) {
          if (!i(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
          return e
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.AudioQueueMGR = s, t.VideoQueueMGR = l, t.SharingQueueMGR = p, t.VideoMGR = h, t.SharingMGR = S, t.AudioMGR = t.SharingInfoMGR = t.SharingInfo = t.VideoInfoMGR = t.VideoInfo = t.VideoData = t.AudioData = void 0;
      var r = i(n(64)),
          a = i(n(95)),
          o = function(e, t) {
              this.timeStamp = t, this.buf = e
          };
      t.AudioData = o;
      var u = function(e, t) {
          this.timeStamp = t, this.buf = e
      };

      function s() {
          this.ssrcQueueMap = new r.default, s.prototype.AddQueue = function(e) {
              var t = new a.default;
              return this.ssrcQueueMap.set(e, t), t
          }, s.prototype.DeleteQueue = function(e) {
              this.ssrcQueueMap.delete(e)
          }, s.prototype.GetQueue = function(e) {
              return this.ssrcQueueMap.get(e)
          }, s.prototype.GetQueueData = function(e) {
              return this.ssrcQueueMap.get(e).dequeue()
          }, s.prototype.PutQueueData = function(e, t) {
              this.ssrcQueueMap.get(e).enqueue(t)
          }, s.prototype.GetQueueLength = function(e) {
              var t = this.ssrcQueueMap.get(e);
              return null !== t ? t.getLength() : 0
          }
      }
      t.VideoData = u;
      var d = function() {
          this.frames = 0, this.ntp = new a.default
      };
      t.VideoInfo = d, d.prototype = {
          UpdateVideoInfo: function(e) {
              this.frames++, this.ntp.getLength() > 30 && this.ntp.dequeue(), this.ntp.enqueue(e)
          },
          GetVideoFpsInfo: function() {
              var e = this.ntp.getLength();
              if (!(e < 5)) {
                  for (var t = 0, n = 0, i = 0, r = 0, a = 0; a < e; a++) {
                      var o = this.ntp.dequeue();
                      0 == o && 0 == i ? n++ : 0 != o ? (r = 0, 0 == i && (i = o), t = o) : 0 != i && t != i && 0 == o && r++
                  }
                  return 0 == t || t == i ? 0 : e - n - r - 1 != 0 ? (t - i) / (e - n - r - 1) : 0
              }
          }
      };
      var c = function() {
          this.ssrcInfoMap = new r.default
      };

      function l() {
          this.ssrcQueueMap = new r.default, this.ssrcInfo = new c, l.prototype.AddQueue = function(e) {
              var t = new a.default;
              return this.ssrcQueueMap.set(e, t), t
          }, l.prototype.DeleteQueue = function(e) {
              this.ssrcQueueMap.delete(e)
          }, l.prototype.GetQueue = function(e) {
              return this.ssrcQueueMap.get(e)
          }, l.prototype.ClearQueue = function() {
              this.ssrcQueueMap.clear()
          }, l.prototype.GetQueueData = function(e) {
              return this.ssrcQueueMap.get(e).dequeue()
          }, l.prototype.PutQueueData = function(e, t) {
              this.ssrcQueueMap.get(e).enqueue(t)
          }, l.prototype.GetQueueLength = function(e) {
              var t = this.ssrcQueueMap.get(e);
              return t ? t.getLength() : 0
          }, l.prototype.UpdateInfo = function(e, t) {
              this.ssrcInfo.UpdateSSRCInfo(e, t)
          }, l.prototype.GetFpsInfo = function(e) {
              return this.ssrcInfo.GetSSRCFpsInfo(e)
          }
      }
      t.VideoInfoMGR = c, c.prototype = {
          UpdateSSRCInfo: function(e, t) {
              var n = this.ssrcInfoMap.get(e);
              n ? n.UpdateVideoInfo(t) : (n = new d, this.ssrcInfoMap.set(e, n), n.UpdateVideoInfo(t))
          },
          GetSSRCFpsInfo: function(e) {
              var t = this.ssrcInfoMap.get(e);
              return t ? t.GetVideoFpsInfo() : 0
          }
      };
      var f = function() {
          function e() {
              this.map = new r.default, this.AudioQueueMGR = new s, this.timemap = new r.default
          }
          return e.prototype.Add = function(e, t) {
              this.map.set(e, t), this.AudioQueueMGR.AddQueue(e)
          }, e.prototype.Clear = function() {
              this.map.clear()
          }, e.prototype.Keys = function() {
              return this.map.keys()
          }, e.prototype.UpdateSSRCTimeMap = function(e) {
              this.timemap = e
          }, e.prototype.GetSSRCTimeMap = function(e) {
              return this.timemap ? this.timemap.get(e) : null
          }, e
      }();

      function h() {
          this.map = new r.default, this.VideoQueueMGR = new l
      }
      t.AudioMGR = f, h.prototype.Add = function(e, t) {
          this.map.set(e, t)
      }, h.prototype.Clear = function() {
          this.map.clear()
      }, h.prototype.Keys = function() {
          return this.map.keys()
      };
      var _ = function() {
          this.frames = 0, this.ntp = new a.default
      };
      t.SharingInfo = _, _.prototype = {
          UpdateSharingInfo: function(e) {
              this.frames++, this.ntp.getLength() > 30 && this.ntp.dequeue(), this.ntp.enqueue(e)
          },
          GetSharingFpsInfo: function() {
              var e = this.ntp.getLength();
              if (!(e < 5)) {
                  for (var t = 0, n = 0, i = 0, r = 0, a = 0; a < e; a++) {
                      var o = this.ntp.dequeue();
                      0 == o && 0 == i ? n++ : 0 != o ? (r = 0, 0 == i && (i = o), t = o) : 0 != i && t != i && 0 == o && r++
                  }
                  return 0 == t || t == i ? 0 : e - n - r - 1 != 0 ? (t - i) / (e - n - r - 1) : 0
              }
          }
      };
      var E = function() {
          this.ssrcInfoMap = new r.default
      };

      function p() {
          this.ssrcQueueMap = new r.default, this.ssrcInfo = new E, p.prototype.AddQueue = function(e) {
              var t = new a.default;
              return this.ssrcQueueMap.set(e, t), t
          }, p.prototype.DeleteQueue = function(e) {
              this.ssrcQueueMap.delete(e)
          }, p.prototype.GetQueue = function(e) {
              return this.ssrcQueueMap.get(e)
          }, p.prototype.ClearQueue = function() {
              this.ssrcQueueMap.clear()
          }, p.prototype.GetQueueData = function(e) {
              return this.ssrcQueueMap.get(e).dequeue()
          }, p.prototype.PutQueueData = function(e, t) {
              this.ssrcQueueMap.get(e).enqueue(t)
          }, p.prototype.GetQueueLength = function(e) {
              var t = this.ssrcQueueMap.get(e);
              return t ? t.getLength() : 0
          }, p.prototype.UpdateInfo = function(e, t) {
              this.ssrcInfo.UpdateSSRCInfo(e, t)
          }, p.prototype.GetFpsInfo = function(e) {
              return this.ssrcInfo.GetSSRCFpsInfo(e)
          }
      }

      function S() {
          this.map = new r.default, this.sQueue = new a.default, this.SharingQueueMGR = new p
      }
      t.SharingInfoMGR = E, E.prototype = {
          UpdateSSRCInfo: function(e, t) {
              var n = this.ssrcInfoMap.get(e);
              n ? n.UpdateSharingInfo(t) : (n = new _, this.ssrcInfoMap.set(e, n), n.UpdateSharingInfo(t))
          },
          GetSSRCFpsInfo: function(e) {
              var t = this.ssrcInfoMap.get(e);
              return t ? t.GetSharingFpsInfo() : 0
          }
      }, S.prototype.Clear = function() {
          this.map.clear()
      }, S.prototype.Keys = function() {
          return this.map.keys()
      }, S.prototype.Add = function(e, t) {
          this.map.set(e, t)
      }, S.prototype.Get = function(e) {
          return this.map.get(e)
      }, S.prototype.PutData = function(e) {
          e && this.sQueue && this.sQueue.enqueue(e)
      }, S.prototype.GetData = function() {
          if (this.sQueue) return this.sQueue.dequeue()
      }, S.prototype.ClearBuffer = function() {
          this.sQueue && (this.sQueue = new a.default)
      }
  }, function(e, t, n) {
      "use strict";

      function i() {
          this.a = [], this.b = 0, this.residue = null
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0, i.prototype.getLength = function() {
          return this.a.length - this.b
      }, i.prototype.isEmpty = function() {
          return 0 == this.a.length
      }, i.prototype.enqueue = function(e) {
          this.a.push(e)
      }, i.prototype.dequeue = function() {
          if (0 != this.a.length) {
              var e = this.a[this.b];
              return 2 * ++this.b >= this.a.length && (this.a = this.a.slice(this.b), this.b = 0), e
          }
          return null
      }, i.prototype.peek = function() {
          return 0 < this.a.length ? this.a[this.b] : void 0
      };
      var r = i;
      t.default = r
  }, function(e, t, n) {
      e.exports = n(162)
  }, function(e, t, n) {
      e.exports = n(173)
  }, function(e, t, n) {
      var i = n(182);
      e.exports = function(e) {
          return i(2, e)
      }
  }, function(e, t, n) {
      var i = n(42),
          r = n(185),
          o = /^\s+|\s+$/g,
          u = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          d = /^0o[0-7]+$/i,
          c = parseInt;
      e.exports = function(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return NaN;
          if (i(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = i(t) ? t + "" : t
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(o, "");
          var n = s.test(e);
          return n || d.test(e) ? c(e.slice(2), n ? 2 : 8) : u.test(e) ? NaN : +e
      }
  }, function(e, t, n) {
      var i = n(101).Symbol;
      e.exports = i
  }, function(e, t, n) {
      var i = n(186),
          r = "object" == typeof self && self && self.Object === Object && self,
          a = i || r || Function("return this")();
      e.exports = a
  }, function(e, t) {
      var n;
      n = function() {
          return this
      }();
      try {
          n = n || new Function("return this")()
      } catch (e) {
          "object" == typeof window && (n = window)
      }
      e.exports = n
  }, function(e, t, n) {
      var i = n(193),
          r = n(42);
      e.exports = function(e, t, n) {
          var o = !0,
              u = !0;
          if ("function" != typeof e) throw new TypeError("Expected a function");
          return r(n) && (o = "leading" in n ? !!n.leading : o, u = "trailing" in n ? !!n.trailing : u), i(e, t, {
              leading: o,
              maxWait: t,
              trailing: u
          })
      }
  }, function(e, t, n) {
      var i = n(36),
          r = n(44);
      e.exports = function(e) {
          return "number" == typeof e || r(e) && "[object Number]" == i(e)
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(20),
          r = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.UpdateAudioPlayStatus = function(e) {
          g.default.isAudioPlayWork = e
      }, t.UpdateVideoPlayStatus = function(e) {
          g.default.isVideoPlayWork = e
      }, t.UpdateSharingPlayStatus = function(e) {
          g.default.isSharingPlayWork = e
      }, t.ClearSharingBuffer = function() {
          g.default.localSharingDecMGR && g.default.localSharingDecMGR.ClearBuffer()
      }, t.SetLocalAudioPara = function(e) {
          g.default.localAudioPara = e
      }, t.JsVideoEngine_PreInit = function(e) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t) {
                  var n, i;
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (O("video pre init", t), g.default.localVideoDecMGR || (g.default.localVideoDecMGR = new l.VideoMGR), g.default.localVideoEncMGR || (g.default.localVideoEncMGR = new l.VideoMGR), g.default.videoDecWorkerPath = t.videoDecWorkerPath, g.default.videoEncWorkerPath = t.videoEncWorkerPath, t.videoDecWorkerPath !== t.videoEncWorkerPath) {
                                  e.next = 13;
                                  break
                              }
                              return e.next = 8, C(t.videoDecWorkerPath);
                          case 8:
                              n = e.sent, g.default.videoDecResponseText = n, g.default.videoEncResponseText = n, e.next = 18;
                              break;
                          case 13:
                              return e.next = 15, s.default.all([C(t.videoDecWorkerPath), C(t.videoEncWorkerPath)]);
                          case 15:
                              i = e.sent, g.default.videoDecResponseText = i[0], g.default.videoEncResponseText = i[1];
                          case 18:
                              g.default.mediaSDKHandle = t.handle, fe(0, null);
                          case 20:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.initVideoEncode = function(e, t) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t, n) {
                  var i;
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return g.default.localVideoEncMGR || (g.default.localVideoEncMGR = new l.VideoMGR), g.default.videoEncWorkerPath = t, e.next = 4, C(t);
                          case 4:
                              return i = e.sent, g.default.videoEncResponseText = i, fe(0, null, n), e.next = 9, N(n);
                          case 9:
                              le();
                          case 10:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.initVideoDecode = function(e, t) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t, n) {
                  var i;
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return g.default.localVideoDecMGR || (g.default.localVideoDecMGR = new l.VideoMGR), g.default.videoDecWorkerPath = t, e.next = 4, C(t);
                          case 4:
                              return i = e.sent, g.default.videoDecResponseText = i, ce(0, null, n), e.next = 9, N(n);
                          case 9:
                              de();
                          case 10:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.initAudioEncode = function(e, t) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t, n) {
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return $(), g.default.localAudioEncMGR || (g.default.localAudioEncMGR = new l.AudioMGR), g.default.audioEncWorkerPath = t, e.next = 5, C(t);
                          case 5:
                              g.default.audioEncodeResponse = e.sent, Se(0, n), k(n).then(function() {
                                  pe()
                              }).catch(function(e) {
                                  O(e)
                              });
                          case 8:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.initAudioDecode = function(e, t) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t, n) {
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return $(), g.default.localAudioDecMGR || (g.default.localAudioDecMGR = new l.AudioMGR), g.default.audioDecWorkerPath = t, e.next = 5, C(t);
                          case 5:
                              g.default.audioDecodeResponse = e.sent, _e(0, null, n), L(n).then(function() {
                                  he()
                              }).catch(function(e) {
                                  O(e)
                              });
                          case 8:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.initSharingDecode = function(e, t) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t, n) {
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return g.default.localSharingDecMGR || (g.default.localSharingDecMGR = new l.SharingMGR), g.default.localMouseDecMGR || (g.default.localMouseDecMGR = new l.SharingMGR), g.default.sharingDecWorkerPath = t, e.next = 5, C(t);
                          case 5:
                              g.default.sharingDecodeResponse = e.sent, z(n), F(n).then(function() {
                                  H()
                              }).catch(function(e) {
                                  O(e)
                              });
                          case 8:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.initSharingEncode = function(e, t) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t, n) {
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return g.default.localSharingEncMGR || (g.default.localSharingEncMGR = new l.SharingMGR), g.default.sharingEncWorkerPath = t, e.next = 4, C(t);
                          case 4:
                              g.default.sharingEncodeResponse = e.sent, Z(n), W(n).then(function() {
                                  K()
                              }).catch(function(e) {
                                  O(e)
                              });
                          case 7:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.SetTotalEvent = function(e) {
          e.videoDecWorkerPath && (g.default.TotalWaitEvent += 6), e.audioDecWorkerPath && (g.default.TotalWaitEvent += 6), e.imageDecWorkerPath && (g.default.TotalWaitEvent += 3)
      }, t.JsSharingEngine_PreInit = function(e) {
          g.default.localSharingDecMGR || (g.default.localSharingDecMGR = new l.SharingMGR), g.default.localMouseDecMGR || (g.default.localMouseDecMGR = new l.SharingMGR), g.default.sharingDecWorkerPath = e.imageDecWorkerPath, z()
      }, t.Sharing_Decode_Post_message = H, t.Sharing_Encode_Post_message = K, t.JsAudioEngine_PreInit = function(e) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t) {
                  var n;
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if ($(), g.default.localAudioDecMGR || (g.default.localAudioDecMGR = new l.AudioMGR), g.default.localAudioEncMGR || (g.default.localAudioEncMGR = new l.AudioMGR), g.default.audioDecWorkerPath = t.audioDecWorkerPath, g.default.audioEncWorkerPath = t.audioEncWorkerPath, t.audioDecWorkerPath !== t.audioEncWorkerPath) {
                                  e.next = 13;
                                  break
                              }
                              return e.next = 8, C(t.audioDecWorkerPath);
                          case 8:
                              n = e.sent, g.default.audioEncodeResponse = n, g.default.audioDecodeResponse = n, e.next = 15;
                              break;
                          case 13:
                              return e.next = 15, s.default.all([C(t.audioEncWorkerPath), C(t.audioDecWorkerPath)]).then(function(e) {
                                  g.default.audioEncodeResponse = e[0], g.default.audioDecodeResponse = e[1]
                              });
                          case 15:
                              Se(0);
                          case 16:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.JsSharingEngine_Init = function(e, t) {
          g.default.localSharingPara || (g.default.localSharingPara = t), g.default.localSharingDecMGR || (g.default.localSharingDecMGR = new l.SharingMGR), g.default.localMouseDecMGR || (g.default.localMouseDecMGR = new l.SharingMGR), ne(e), z(0)
      }, t.setSharingEngineInitProperties = function(e, t) {
          g.default.localSharingPara ? (0, u.default)(g.default.localSharingPara, t) : g.default.localSharingPara = t, ne(e)
      }, t.JsAudioEngine_Init = function(e, t) {
          g.default.localAudioPara || (g.default.localAudioPara = t), g.default.localAudioDecMGR || (g.default.localAudioDecMGR = new l.AudioMGR), g.default.localAudioEncMGR || (g.default.localAudioEncMGR = new l.AudioMGR), te(e), Se(0)
      }, t.setAudioEngineInitProperties = function(e, t) {
          g.default.localAudioPara ? (0, u.default)(g.default.localAudioPara, t) : g.default.localAudioPara = t, te(e)
      }, t.setVideoEngineInitProperties = function(e, t) {
          var n;
          g.default.localVideoPara ? (0, u.default)(g.default.localVideoPara, t) : g.default.localVideoPara = t, n = e, g.default.Video_WebSocket_Ip_Address || (g.default.Video_WebSocket_Ip_Address = n)
      }, t.JsAudioEngine_UnInit = function() {
          (function(e) {
              if (e = g.default.SPECIAL_ID, g.default.localAudioEncMGR) {
                  var t = g.default.localAudioEncMGR.map.get(e);
                  t && (t.postMessage({
                      command: "closeMedia"
                  }), g.default.localAudioEncMGR.map.delete(e)), g.default.isAudioEncodePostStart = !1
              }
          })(g.default.SPECIAL_ID),
          function(e) {
              if (e = g.default.SPECIAL_ID, g.default.localAudioDecMGR) {
                  var t = g.default.localAudioDecMGR.map.get(g.default.SPECIAL_ID);
                  t && (t.postMessage({
                      command: "closeMedia"
                  }), g.default.localAudioDecMGR.map.delete(e)), g.default.isAudioDecodePostStart = !1
              }
          }(g.default.SPECIAL_ID), g.default.localAudioDecMGR = null, g.default.localAudioEncMGR = null
      }, t.JsVideoEngine_UnInit = function() {
          (function(e) {
              if (e = g.default.SPECIAL_ID, g.default.localVideoDecMGR) {
                  var t = g.default.localVideoDecMGR.map.get(e);
                  t && (t.postMessage({
                      command: "closeMedia"
                  }), g.default.localVideoDecMGR.map.delete(e)), g.default.isVideoDecodePostStart = !1
              }
          })(g.default.SPECIAL_ID), g.default.localVideoDecMGR = null, g.default.localVideoEncMGR = null
      }, t.JsSharingEngine_UnInit = function() {
          ! function() {
              var e = g.default.SPECIAL_ID;
              if (g.default.localSharingDecMGR) {
                  var t = g.default.localSharingDecMGR.Get(e);
                  t && (t.postMessage({
                      command: "closeMedia"
                  }), g.default.localSharingDecMGR = null), g.default.isSharingDecodeThreadStart = !1
              }
          }()
      }, t.Uint8ToString = function(e) {
          for (var t = [], n = 0; n < e.length; n += 32768) t.push(String.fromCharCode.apply(null, e.subarray(n, n + 32768)));
          return t.join("")
      }, t.Audio_Encode_Frame = function(e, t, n, i) {
          if (e = g.default.SPECIAL_ID, g.default.localAudioEncMGR) {
              var r = g.default.localAudioEncMGR.map.get(e);
              if (r) {
                  var a = {
                      command: "EncodeAudioFrame",
                      data: t
                  };
                  r.postMessage(a, [a.data.buffer])
              }
          }
      }, t.Video_Encode_Frame = function(e, t, n, i) {
          if (g.default.localVideoEncMGR) {
              var r = g.default.localVideoEncMGR.map.get(e);
              if (r) {
                  var a = {
                      command: "encodeVideoFrame",
                      data: t
                  };
                  r.postMessage(a, [a.data.buffer])
              }
          }
      }, t.Sharing_Encode_Frame = function(e, t, n, i, r, a) {
          if (g.default.localSharingEncMGR) {
              var o, u = g.default.localSharingEncMGR.map.get(e);
              u && (t ? (o = {
                  command: "encodeSharingFrame",
                  data: t,
                  width: r,
                  height: a
              }, u.postMessage(o, [o.data.buffer])) : (o = {
                  command: "encodeSharingFrame"
              }, u.postMessage(o)))
          }
      }, t.Clear_Decoded_Sharing_Frame = function() {
          return g.default.localSharingDecMGR ? g.default.localSharingDecMGR.SharingQueueMGR.ClearQueue() : g.default.localMouseDecMGR ? g.default.localMouseDecMGR.SharingQueueMGR.ClearQueue() : 0
      }, t.Get_Decoded_Audio_Buffer_Length = oe, t.Get_Decoded_Audio_Frame = function(e, t, n) {
          if (g.default.localAudioDecMGR) {
              e = g.default.SPECIAL_ID;
              var i = n,
                  r = g.default.localAudioDecMGR.AudioQueueMGR.GetQueue(e),
                  a = null;
              if (r) {
                  if (r.residue) {
                      if (r.residue.buffer.length > n) return a = r.residue.buffer.slice(0, n), r.residue.buffer = r.residue.buffer.slice(n), ue(r.residue.ntptime), a;
                      if (r.residue.buffer.length === n) return a = r.residue.buffer, ue(r.residue.ntptime), r.residue = null, a;
                      a = r.residue.buffer, ue(r.residue.ntptime), r.residue = null, n -= a.length
                  }
                  for (var o = r.dequeue(); o && o.buffer.length < n;) ue(o.ntptime), a = y(a, o.buffer), n -= o.buffer.length, o = r.dequeue();
                  if (o && (ue(o.ntptime), 0 !== n && o.buffer.length === n ? a = y(a, o.buffer) : 0 !== n && o.buffer.length > n && (a = y(a, o.buffer.slice(0, n)), r.residue = {
                          buffer: o.buffer.slice(n),
                          ntptime: o.ntptime
                      })), a) {
                      if (a.length < i) return r.residue = {
                          buffer: a,
                          ntptime: null
                      }, null;
                      if (a.length == i) return a
                  }
              }
              return null
          }
      }, t.Add_Video_Decode_Thread = ce, t.Clear_Audio_Interval = function() {
          (function() {
              var e = g.default.SPECIAL_ID;
              if (g.default.localAudioEncMGR)
                  for (var t = g.default.audio_pcm_queue.dequeue(); t;) {
                      var n = g.default.localAudioEncMGR.map.get(e);
                      g.default.isAudioEncodeWASMOK && n && n.postMessage(t, [t.data.buffer]), t = g.default.audio_pcm_queue.dequeue()
                  }
          })(), clearInterval(g.default.audioPostInterval), g.default.audioPostInterval = null
      }, t.Add_Audio_Decode_Thread = _e, t.Get_SSRC_Latest_Time = Ee, t.Get_Video_SSRC_Latest_Time = function(e) {
          return "function" == typeof AudioWorklet ? g.default.CurrentSSRCTime : Ee(e)
      }, t.Meeting_Fail_Over = function(e, t) {
          var n = g.default.SPECIAL_ID,
              i = g.default.localVideoDecMGR.map.get(n);
          i.postMessage({
              command: "failover",
              websocket_ip_address: t
          }), (i = g.default.localAudioDecMGR.map.get(n)).postMessage({
              command: "failover",
              websocket_ip_address: e
          })
      }, t.Modify_Audio_SampleRate = function(e) {
          for (var t, n = g.default.SPECIAL_ID, i = g.default.audio_pcm_queue.dequeue(); i;) i = g.default.audio_pcm_queue.dequeue();
          g.default.localAudioEncMGR && (t = g.default.localAudioEncMGR.map.get(n)) && g.default.isAudioEncodePostStart && t.postMessage({
              command: "modifySampleRate",
              sampleRate: e
          }), g.default.localAudioDecMGR && (t = g.default.localAudioDecMGR.map.get(n)) && g.default.isAudioDecodePostStart && t.postMessage({
              command: "modifySampleRate",
              sampleRate: e
          })
      }, t.Notify_Audio_Thread_Status = function(e, t) {
          var n;
          (e = g.default.SPECIAL_ID, g.default.localAudioDecMGR) && ((n = g.default.localAudioDecMGR.map.get(e)) && n.postMessage({
              command: "mute",
              bOn: t
          }));
          g.default.localAudioEncMGR && ((n = g.default.localAudioEncMGR.map.get(e)) && n.postMessage({
              command: "mute",
              bOn: t
          }))
      }, t.Notify_Audio_Thread_Msg_Channel = function(e, t) {
          var i, n = g.default.SPECIAL_ID;
          g.default.localAudioDecMGR && ((i = g.default.localAudioDecMGR.map.get(n)) && i.postMessage({
              command: "decodeAudioPort"
          }, [e.port2]));
          g.default.localAudioEncMGR && ((i = g.default.localAudioEncMGR.map.get(n)) && i.postMessage({
              command: "encodeAudioPort"
          }, [t.port1]))
      }, t.Notify_Audio_Video_Thread_Msg_Channel = function(e) {
          var t = g.default.SPECIAL_ID;
          if (g.default.localVideoDecMGR) {
              var n = g.default.localVideoDecMGR.map.get(t);
              n && n.postMessage({
                  command: "decodeVideoPortWithAudio",
                  port: e.port1
              }, [e.port1])
          }
      }, t.Notify_Video_Encode_Thread = function(e) {
          var t = g.default.SPECIAL_ID;
          if (g.default.localVideoEncMGR) {
              var n = g.default.localVideoEncMGR.map.get(t);
              n && n.postMessage(e)
          }
      }, t.Notify_Video_Decode_Thread = function(e) {
          var t = g.default.SPECIAL_ID;
          if (g.default.localVideoDecMGR) {
              var n = g.default.localVideoDecMGR.map.get(t);
              n && n.postMessage(e)
          }
      }, t.Notify_Sharing_Decode_Thread = function(e) {
          var t = g.default.SPECIAL_ID;
          if (g.default.localSharingDecMGR) {
              var n = g.default.localSharingDecMGR.map.get(t);
              n && n.postMessage(e)
          }
      }, t.Notify_Audio_Thread_CurrentSSRC = function(e) {
          var t = g.default.SPECIAL_ID;
          if (g.default.localAudioDecMGR) {
              var n = g.default.localAudioDecMGR.map.get(t);
              n && n.postMessage({
                  command: "updateCurrentSSRC",
                  SSRC: e
              })
          }
      }, t.Reset_Aec = function() {
          var e = g.default.SPECIAL_ID;
          if (g.default.localAudioEncMGR) {
              var t = g.default.localAudioEncMGR.map.get(e);
              t && t.postMessage({
                  command: "resetAec"
              })
          }
      }, t.Set_Aec_Delay = function() {
          var e = g.default.SPECIAL_ID,
              t = 50;
          if (g.default.audioDelay && (t = g.default.audioDelay), g.default.localAudioEncMGR) {
              var n = g.default.localAudioEncMGR.map.get(e);
              n && n.postMessage({
                  command: "SetAECDelay",
                  delay: t
              })
          }
      }, t.Start_Monitor = function() {
          v.default.init(), window.addEventListener("error", Ie),
              function() {
                  try {
                      v.default.add_monitor(["BSAGT:", navigator.userAgent].join("")), v.default.add_monitor("BSLITEND:" + (f.default.isLittleEndian() ? 1 : 0)), window.navigator.hardwareConcurrency && v.default.add_monitor("OSCPUS:" + window.navigator.hardwareConcurrency)
                  } catch (e) {}
              }(), g.default.monitorIntervalHandle = setInterval(function() {
                  var e, t = v.default.get_monitor();
                  t && g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: t
                      }
                  }), (null != g.default.monitorAudioCapture || null != g.default.monitorEncodeVideo || null != g.default.monitorDecodeVideo || null != g.default.monitorVideoCapture || null != g.default.monitorEncodeSharing || null != g.default.monitorDecodeSharing || null != g.default.monitorSharingEncodeAPPInfo || null != g.default.monitorVideoDecodeAPPInfo || null != g.default.monitorVideoEncodeAPPInfo) && (null != g.default.monitorVideoCapture && (e = Ae(e = "CAMERA," + g.default.monitorVideoUserID + ",0,webcam," + g.default.monitorVideoCapture, 7), e += ",{[END]}", g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: e
                      }
                  }), g.default.monitorVideoCapture = null), null != g.default.monitorAudioCapture && (e = "AUDIOD," + g.default.monitorAudioUserID + ",1,0,wclaudi,0," + g.default.monitorAudioCapture + ",0", e += ",{[END]}", g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: e
                      }
                  }), g.default.monitorAudioCapture = null), null == g.default.monitorEncodeVideo && null == g.default.monitorDecodeVideo || null == g.default.monitorVideoUserID || (e = "MCM_VIDEO," + g.default.monitorVideoUserID + ",0,0,0", e = null != g.default.monitorEncodeVideo ? (e = Ae(e = e + ",{[SEND]}," + g.default.monitorEncodeVideo.monitor_video_max_sub_for_me + "," + g.default.monitorEncodeVideo.video_width + "," + g.default.monitorEncodeVideo.video_height + "," + g.default.monitorEncodeVideo.max_fps + "," + g.default.monitorEncodeVideo.min_fps + "," + g.default.monitorEncodeVideo.avg_fps, 12)) + "," + g.default.monitorEncodeVideo.video_encoded_max_fps + "," + g.default.monitorEncodeVideo.video_encoded_min_fps + "," + g.default.monitorEncodeVideo.video_encoded_avg_fps + "," + g.default.monitorEncodeVideo.video_encoded_width + "," + g.default.monitorEncodeVideo.video_encoded_heigth + "," + g.default.monitorEncodeVideo.video_total_encoded_frames + "," + g.default.monitorEncodeVideo.video_send_buffer : Ae(e += ",{[SEND]}", 25), e = Ae(e += ",{[RTS]}", 5), e = Ae(e += ",{[VC]}", 12), null != g.default.monitorEncodeVideo ? e += ",{[ENCO]}," + g.default.monitorEncodeVideo.monitor_video_max_encode_time + "," + g.default.monitorEncodeVideo.monitor_video_min_encode_time + "," + g.default.monitorEncodeVideo.monitor_video_avg_encode_time + "," + g.default.monitorEncodeVideo.monitor_video_sdev_encode_time : e = Ae(e += ",{[ENCO]}", 4), null != g.default.monitorDecodeVideo ? e = (e = Ae(e = (e = Ae(e += ",{[RECV]}", 16)) + "," + g.default.monitorDecodeVideo.max_fps + "," + g.default.monitorDecodeVideo.min_fps + "," + g.default.monitorDecodeVideo.avg_fps + "," + g.default.monitorDecodeVideo.video_width + "," + g.default.monitorDecodeVideo.video_height + "," + g.default.monitorDecodeVideo.monitor_video_max_size, 5)) + "," + g.default.monitorDecodeVideo.monitor_video_max_size : e = Ae(e += ",{[RECV]}", 28), e = Ae(e += ",{[VQ]}", 13), null != g.default.monitorDecodeVideo ? e += ",{[DECO]}," + g.default.monitorDecodeVideo.monitor_video_max_decoding_time + "," + g.default.monitorDecodeVideo.monitor_video_min_decoding_time + "," + g.default.monitorDecodeVideo.monitor_video_avg_decoding_time + "," + g.default.monitorDecodeVideo.monitor_video_sdev_decoding_time : e = Ae(e += ",{[DECO]}", 4), g.default.monitorDecodeVideo = null, g.default.monitorEncodeVideo = null, e += ",{[END]}", g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: e
                      }
                  })), null == g.default.monitorEncodeSharing && null == g.default.monitorDecodeSharing || null == g.default.monitorSharingUserID || (e = "MCM_AS," + g.default.monitorSharingUserID + ",,", g.default.monitorEncodeSharing && (e = (e = e + ",{[SEND]}," + g.default.monitorEncodeSharing.sharing_max_sub_for_me + "," + g.default.monitorEncodeSharing.sharing_width + "," + g.default.monitorEncodeSharing.sharing_height + "," + g.default.monitorEncodeSharing.max_fps + "," + g.default.monitorEncodeSharing.min_fps + "," + g.default.monitorEncodeSharing.avg_fps + ",,,," + g.default.monitorEncodeSharing.sharing_encoded_max_fps + "," + g.default.monitorEncodeSharing.sharing_encoded_min_fps + "," + g.default.monitorEncodeSharing.sharing_encoded_avg_fps + ",,,,,,,,," + g.default.monitorEncodeSharing.sharing_encode_total_frames + ",,," + g.default.monitorEncodeSharing.monitor_stream_index) + ",{[ENCO]}," + g.default.monitorEncodeSharing.sharing_max_encoding_time + "," + g.default.monitorEncodeSharing.sharing_min_encoding_time + "," + g.default.monitorEncodeSharing.sharing_avg_encoding_time + "," + g.default.monitorEncodeSharing.sharing_sdev_encoding_time), g.default.monitorDecodeSharing && (e = e + ",{[RECV]}," + g.default.monitorDecodeSharing.max_fps + "," + g.default.monitorDecodeSharing.min_fps + "," + g.default.monitorDecodeSharing.avg_fps + "," + g.default.monitorDecodeSharing.sharing_decode_width + "," + g.default.monitorDecodeSharing.sharing_decode_height + "," + g.default.monitorDecodeSharing.monitor_sharing_max_size), g.default.monitorEncodeSharing = null, g.default.monitorDecodeSharing = null, e += ",{[END]}", g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: e
                      }
                  })), null != g.default.monitorSharingEncodeAPPInfo && (g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: g.default.monitorSharingEncodeAPPInfo.data
                      }
                  }), g.default.monitorSharingEncodeAPPInfo = null), null != g.default.monitorVideoDecodeAPPInfo && (g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: g.default.monitorVideoDecodeAPPInfo.data
                      }
                  }), g.default.monitorVideoDecodeAPPInfo = null), null != g.default.monitorVideoEncodeAPPInfo && (g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: g.default.monitorVideoEncodeAPPInfo.data
                      }
                  }), g.default.monitorVideoEncodeAPPInfo = null))
              }, 1e4)
      }, t.Send_Render_Monitor_Log = function(e) {
          v.default.add_monitor2(e)
      }, t.Stop_Monitor = function() {
          window.removeEventListener("error", Ie), clearInterval(g.default.monitorIntervalHandle), v.default.send_instant_monitor()
      }, t.Update_Video_Encrpt = function(e) {
          var t = g.default.SPECIAL_ID;
          if (g.default.localVideoEncMGR) {
              var n = g.default.localVideoEncMGR.map.get(t);
              n && n.postMessage({
                  command: "ENCRYPT",
                  encrypt: e
              })
          }
      }, t.Update_Sharing_Encrpt = function(e) {
          var t = g.default.SPECIAL_ID;
          if (g.default.localSharingEncMGR) {
              var n = g.default.localSharingEncMGR.Get(t);
              n && n.postMessage({
                  command: "ENCRYPT",
                  encrypt: e
              })
          }
      }, t.Update_Sharing_Encode_Status = function(e) {
          if (g.default.localSharingEncMGR) {
              var t = g.default.localSharingEncMGR.Get(g.default.SPECIAL_ID);
              t && t.postMessage(e)
          }
      }, t.Notify_Sharing_Encode_Thread = function(e) {
          if (g.default.localSharingEncMGR) {
              var t = g.default.localSharingEncMGR.Get(g.default.SPECIAL_ID);
              t && t.postMessage(e)
          }
      }, t.Update_Audio_Encrpt = function(e) {
          var t = g.default.SPECIAL_ID;
          if (g.default.localAudioEncMGR) {
              var n = g.default.localAudioEncMGR.map.get(t);
              n && n.postMessage({
                  command: "ENCRYPT",
                  encrypt: e
              })
          }
      }, t.disableSocketReconnect = function() {
          var e = g.default.SPECIAL_ID;
          [g.default.localAudioDecMGR, g.default.localAudioEncMGR, g.default.localVideoDecMGR, g.default.localVideoEncMGR, g.default.localSharingDecMGR, g.default.localSharingEncMGR].forEach(function(t) {
              t && t.map.get(e) && t.map.get(e).postMessage({
                  command: "SOCKET_RECONNECT",
                  disable: !0
              })
          })
      }, t.destroyAllWorkers = function() {
          var e = g.default.SPECIAL_ID;
          [g.default.localAudioDecMGR, g.default.localAudioEncMGR, g.default.localVideoDecMGR, g.default.localVideoEncMGR, g.default.localSharingDecMGR, g.default.localSharingEncMGR].forEach(function(t) {
              t && t.map.get(e) && t.map.get(e).terminate()
          })
      }, t.pushMessageToWorker = function(e, t) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t, n) {
                  var i, r, o, u, s = arguments;
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (i = s.length > 2 && void 0 !== s[2] ? s[2] : "PUSH_MESSAGE_FROM_MAIN_TO_WORKER", r = s.length > 3 && void 0 !== s[3] && s[3], o = s.length > 4 && void 0 !== s[4] && s[4], e.prev = 3, u = De(t)) {
                                  e.next = 15;
                                  break
                              }
                              if (o) {
                                  e.next = 11;
                                  break
                              }
                              return O("worker handle not ready, drop!", t, n, i), e.abrupt("return");
                          case 11:
                              return O.warn("worker handle not ready, waiting!", t, n, i), e.next = 14, ve(t);
                          case 14:
                              u = e.sent;
                          case 15:
                              r ? u.postMessage({
                                  command: i,
                                  data: n
                              }, [n]) : u.postMessage({
                                  command: i,
                                  data: n
                              }), e.next = 22;
                              break;
                          case 18:
                              e.prev = 18, e.t0 = e.catch(3), O.warn("try to push message to workerType:".concat(t, ", but it does not exist. Command: ").concat(i, "; Message: ").concat(n)), O.warn(e.t0);
                          case 22:
                          case "end":
                              return e.stop()
                      }
                  }, e, this, [
                      [3, 18]
                  ])
              })).apply(this, arguments)
          }.apply(this, arguments)
      }, t.isVideoEncodeHandleReady = function() {
          return null !== De(_.WORKER_TYPE.VIDEO_ENCODE)
      }, t.transportOfflineCanvas = function(e, t) {
          var n = g.default.SPECIAL_ID;
          if (g.default.localVideoEncMGR) {
              var i = g.default.localVideoEncMGR.map.get(n);
              i && i.postMessage({
                  command: "OfflineCanvas",
                  canvas: e,
                  canvasname: t
              }, [e])
          }
      }, t.transportImageBitMap = function(e, t) {
          var n = g.default.SPECIAL_ID;
          if (g.default.localVideoEncMGR) {
              var i = g.default.localVideoEncMGR.map.get(n);
              i && (t ? i.postMessage({
                  command: "imagebitmap",
                  data: t,
                  canvasname: e
              }, [t]) : i.postMessage({
                  command: "imagebitmap"
              }))
          }
      };
      var a = r(n(15)),
          o = r(n(64)),
          u = r(n(43)),
          s = r(n(10)),
          d = r(n(16)),
          c = i(n(22)),
          l = i(n(94)),
          f = r(n(35)),
          h = (n(158), r(n(23))),
          _ = n(73),
          E = n(74),
          p = n(75),
          S = n(69),
          A = r(n(98)),
          I = r(n(19)),
          v = r(n(70)),
          D = n(189),
          g = r(n(33)),
          O = (0, h.default)("sdk.engine");

      function m() {
          return (m = (0, d.default)(a.default.mark(function e(t, n, i, r, o) {
              var s, d, c, l, f;
              return a.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          e.t0 = r, e.next = e.t0 === _.workerStartTypeEnum.videoEnc ? 3 : e.t0 === _.workerStartTypeEnum.videoDec ? 5 : e.t0 === _.workerStartTypeEnum.audioEnc ? 7 : e.t0 === _.workerStartTypeEnum.audioDec ? 9 : e.t0 === _.workerStartTypeEnum.sharingDec ? 11 : e.t0 === _.workerStartTypeEnum.sharingEnc ? 13 : 15;
                          break;
                      case 3:
                          return s = g.default.videoEncResponseText, e.abrupt("break", 15);
                      case 5:
                          return s = g.default.videoDecResponseText, e.abrupt("break", 15);
                      case 7:
                          return s = g.default.audioEncodeResponse, e.abrupt("break", 15);
                      case 9:
                          return s = g.default.audioDecodeResponse, e.abrupt("break", 15);
                      case 11:
                          return s = g.default.sharingDecodeResponse, e.abrupt("break", 15);
                      case 13:
                          return s = g.default.sharingEncodeResponse, e.abrupt("break", 15);
                      case 15:
                          if (s) {
                              e.next = 19;
                              break
                          }
                          return e.next = 18, C(t);
                      case 18:
                          s = e.sent;
                      case 19:
                          if (!o || !o.isDestroy) {
                              e.next = 21;
                              break
                          }
                          return e.abrupt("return", O("WorkerType:".concat(r, ";The relative SDK instance is destroy, don't start relative worker, avoid multiple same workers. ")));
                      case 21:
                          d = t.slice(0, t.lastIndexOf("/")), c = "wasmUrl = '" + d + "/';" + s, l = {}, _.workerStartTypeToDevToolWorkerNameEnum[r] && (0, u.default)(l, {
                              name: _.workerStartTypeToDevToolWorkerNameEnum[r]
                          }), f = new Worker(window.URL.createObjectURL(new Blob([c])), l), n && n.call(i, f);
                      case 27:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          }))).apply(this, arguments)
      }

      function C(e) {
          return f.default.download(e)
      }

      function R(e, t, n, i, r) {
          ! function(e, t, n, i, r) {
              m.apply(this, arguments)
          }(e, function(e) {
              var i = g.default.SPECIAL_ID;
              t && t.Add(i, e), e.onmessage = n
          }, this, i, r)
      }

      function y(e, t) {
          var n = 0;
          if (null !== e) {
              n = e.length;
              var i = new Float32Array(n + t.length);
              return i.set(e), i.set(t, n), i
          }
          return t
      }

      function N(e) {
          return new s.default(function(t, n) {
              var i = setInterval(function() {
                  if (e && e.isDestroy) return clearInterval(i), n("sdk destroy");
                  g.default.Video_WebSocket_Ip_Address && g.default.localVideoPara && g.default.localVideoPara.confId && (t(g.default.Video_WebSocket_Ip_Address), clearInterval(i))
              }, 1e3 / 24)
          })
      }

      function k(e) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t) {
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return e.abrupt("return", new s.default(function(e, n) {
                                  var i = setInterval(function() {
                                      if (t && t.isDestroy) return clearInterval(i), n("sdk destroy");
                                      var r = g.default.localAudioEncMGR.map.get(g.default.SPECIAL_ID);
                                      g.default.localAudioPara && r && g.default.isAudioEncodeWASMOK && (clearInterval(i), e(!0))
                                  }, 1e3 / 24)
                              }));
                          case 1:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }

      function L(e) {
          return function() {
              return (0, d.default)(a.default.mark(function e(t) {
                  return a.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return e.abrupt("return", new s.default(function(e, n) {
                                  var i = setInterval(function() {
                                      if (t && t.isDestroy) return clearInterval(i), n("sdk destroy");
                                      var r = g.default.localAudioDecMGR.map.get(g.default.SPECIAL_ID);
                                      g.default.localAudioPara && r && g.default.isAudioDecodeWASMOK && (clearInterval(i), e(!0))
                                  }, 1e3 / 24)
                              }));
                          case 1:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })).apply(this, arguments)
          }.apply(this, arguments)
      }

      function W(e) {
          return new s.default(function(t, n) {
              var i = setInterval(function() {
                  if (e && e.isDestroy) return clearInterval(i), n("sdk destroy");
                  g.default.localSharingEncMGR.Get(g.default.SPECIAL_ID) && g.default.isSharingEncodeWASMOK && g.default.localSharingPara && (clearInterval(i), t(!0))
              }, 1e3 / 24)
          })
      }

      function F(e) {
          return new s.default(function(t, n) {
              var i = setInterval(function() {
                  if (e && e.isDestroy) return clearInterval(i), n("sdk destroy");
                  g.default.localSharingDecMGR.Get(g.default.SPECIAL_ID) && g.default.isSharingDecodeWASMOK && g.default.localSharingPara && (clearInterval(i), t(!0))
              }, 1e3 / 24)
          })
      }

      function H() {
          if (g.default.localSharingDecMGR) {
              var e = g.default.localSharingDecMGR.Get(g.default.SPECIAL_ID);
              e && g.default.isSharingDecodeWASMOK && !g.default.isSharingDecodePostStart ? (e.postMessage({
                  command: "startMedia",
                  websocket_ip_address: g.default.Sharing_WebSocket_Ip_Address,
                  confId: g.default.localSharingPara.userid,
                  confKey: "",
                  logon: g.default.localSharingPara.logon,
                  meetingid: g.default.localSharingPara.meetingid,
                  meetingnumb: g.default.localSharingPara.meetingnumb,
                  multiThreadNum: 1
              }), g.default.isSharingDecodePostStart = !0) : g.default.isSharingDecodePostStart || setTimeout(H, 100)
          }
      }

      function K() {
          if (g.default.localSharingEncMGR) {
              var e = g.default.localSharingEncMGR.Get(g.default.SPECIAL_ID);
              if (e && g.default.isSharingEncodeWASMOK && !g.default.isSharingEncodePostStart) {
                  var t = g.default.localSharingPara.isSupportMultiThread ? 4 : 1;
                  v.default.add_monitor2("STN" + t), e.postMessage({
                      command: "startMedia",
                      encode: !0,
                      websocket_ip_address: g.default.Sharing_WebSocket_Ip_Address,
                      confId: g.default.localSharingPara.userid,
                      confKey: "",
                      logon: g.default.localSharingPara.logon,
                      isChromeOrEdge: f.default.browser.isChrome || f.default.browser.isEdge,
                      meetingid: g.default.localSharingPara.meetingid,
                      meetingnumb: g.default.localSharingPara.meetingnumb,
                      multiThreadNum: t
                  }), g.default.isSharingEncodePostStart = !0
              } else g.default.isSharingEncodePostStart || setTimeout(K, 100)
          }
      }

      function B(e) {
          var t = e.data;
          g.default.SPECIAL_ID;
          try {
              ! function() {
                  if (t.status === c.Sharing_Data)(function(e) {
                      try {
                          var t = e.ssrcFromPDU;
                          return null == t || (4294966272 & g.default.localSharingPara.userid) != (4294966272 & t)
                      } catch (e) {
                          return !0
                      }
                  })(t.data) && re(t.data);
                  else if (t.status === c.Sharing_Width_And_Height_Info) I.default.publish(c.SHARING_PARAM_INFO_FROM_SOCKET, {
                      body: {
                          width: t.logicWidth,
                          height: t.logicHeight,
                          logicWidth: t.logicWidth,
                          logicHeight: t.logicHeight
                      }
                  });
                  else if (t.status === c.SHARING_RENDER_MONITOR_LOG) v.default.add_monitor2(t.data);
                  else if (t.status === c.SHARING_DATA_VIDEO_MODE) ! function(e, t, n, i, r, a, o, u, s, d, c, l) {
                      if (g.default.isSharingPlayWork) {
                          var f = {
                              yuvdata: t,
                              ntptime: n,
                              ssrc: e,
                              width: i,
                              height: r,
                              r_x: a,
                              r_y: o,
                              r_w: u,
                              r_h: s,
                              logic_w: d,
                              logic_h: c,
                              yuv_limited: l
                          };
                          g.default.mediaSDKHandle.SharingRenderObj.Get_Sharing_Data_From_Queue(f)
                      }
                  }(t.sharing_ssrc, t.data, t.sharing_timestamp, t.sharing_width, t.sharing_height, t.rendering_x, t.rendering_y, t.rendering_w, t.rendering_h, t.logic_w, t.logic_h, t.yuv_limited);
                  else if (t.status === c.MOUSE_DATA_VIDEO_MODE) ! function(e, t, n, i, r, a, o, u, s, d) {
                      if (g.default.isSharingPlayWork) {
                          var c = {
                              buffer: t,
                              ntptime: n,
                              ssrc: e,
                              width: i,
                              height: r,
                              r_x: a,
                              r_y: o,
                              mLogic_w: u,
                              mLogic_h: s,
                              sync_id: d
                          };
                          g.default.mediaSDKHandle.SharingRenderObj.Get_Mouse_Data_From_Queue(c)
                      }
                  }(t.mouse_ssrc, t.data, t.mouse_timestamp, t.mouse_width, t.mouse_height, t.mouse_x, t.mouse_y, t.mLogic_w, t.mLogic_h, t.sync_id);
                  else if (t.status === c.SHARING_DECODE_MESSAGE) g.default.Notify_APPUI(c.SHARING_DECODE_MAX_SIZE, {
                      ssrc: t.ssrc,
                      size: t.size
                  });
                  else if (t.status === c.Sharing_Dec_WASM_OK) v.default.add_monitor("SDWS"), g.default.isSharingDecodeWASMOK = !0, g.default.sharingDecInitInstance.setWasmSuccess();
                  else if (t.status === c.Sharing_Dec_WASM_FAILED) v.default.add_monitor("SDWF"), g.default.isInitialFailed || (g.default.Notify_APPUI && g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), S.SharingInit.publishSharingDecodeFailedEvent();
                  else if (t.status === c.Sharing_Handle_OK) v.default.add_monitor("SDHS"), g.default.sharingDecInitInstance.setHanderSuccess();
                  else if (t.status === c.Sharing_Handle_FAILED) v.default.add_monitor("SHHF"), g.default.isInitialFailed || (g.default.Notify_APPUI && g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), S.SharingInit.publishSharingDecodeFailedEvent();
                  else if (t.status === c.Sharing_Dec_WebSocket_OK) v.default.add_monitor("SDSS"), g.default.sharingDecInitInstance.setSocketSuccess();
                  else if (t.status === c.Sharing_Dec_WebSocket_FAILED) v.default.add_monitor("SDSF"), g.default.isInitialFailed || (g.default.sharingDecInitInstance.isSocketInitSuccess() ? g.default.Notify_APPUI_SAFE(c.VIDEO_WEBSOCKET_BROKEN, null) : (g.default.Notify_APPUI_SAFE(c.INIT_FAILED, null), g.default.isInitialFailed = !0)), S.SharingInit.publishSharingDecodeFailedEvent();
                  else if (t.status == c.MONITOR_MESSAGE) g.default.monitorDecodeSharing = t;
                  else if (t.status === c.DOWNLOAD_WASM_FROM_MAIN_THREAD) {
                      var e = g.default.localSharingDecMGR.map.get(g.default.SPECIAL_ID);
                      X(t.url, e)
                  } else t.status == c.APP_TROUBLESHOOTING_INFO ? (g.default.monitorSharingDecodeAPPInfo = t, g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: g.default.monitorSharingDecodeAPPInfo.data
                      }
                  }), g.default.monitorSharingDecodeAPPInfo = null) : t.status == c.WCL_TROUBLESHOOTING_INFO && v.default.add_monitor("SD" + t.data)
              }()
          } catch (e) {
              O.error(e)
          }
          g.default.sharingDecInitInstance.checkInitSuccess() && S.SharingInit.publishSharingDecodeSuccessEvent()
      }

      function j(e) {
          var t = e.data;
          g.default.SPECIAL_ID;
          try {
              ! function() {
                  if (t.status === c.Sharing_Data) re(t.data);
                  else if (t.status === c.SHARING_GET_IMAGE_DATA_WRONG) v.default.add_monitor("GIDF");
                  else if (t.status === c.Sharing_Dec_WASM_OK) v.default.add_monitor("SEWS"), g.default.isSharingEncodeWASMOK = !0, g.default.sharingEncInitInstance.setWasmSuccess();
                  else if (t.status === c.Sharing_Dec_WASM_FAILED) v.default.add_monitor("SEWF"), g.default.isInitialFailed || (g.default.Notify_APPUI && g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), S.SharingInit.publishSharingEncodeFailedEvent();
                  else if (t.status === c.Sharing_Handle_OK) v.default.add_monitor("SEHS"), g.default.sharingEncInitInstance.setHanderSuccess();
                  else if (t.status === c.Sharing_Handle_FAILED) v.default.add_monitor("SEHF"), g.default.isInitialFailed || (g.default.Notify_APPUI && g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), S.SharingInit.publishSharingEncodeFailedEvent();
                  else if (t.status === c.Sharing_Dec_WebSocket_OK) v.default.add_monitor("SESS"), g.default.sharingEncInitInstance.setSocketSuccess();
                  else if (t.status === c.Sharing_Dec_WebSocket_FAILED) v.default.add_monitor("SEWF"), g.default.isInitialFailed || (g.default.sharingEncInitInstance.isSocketInitSuccess() ? g.default.Notify_APPUI_SAFE(c.VIDEO_WEBSOCKET_BROKEN, null) : (g.default.Notify_APPUI_SAFE(c.INIT_FAILED, null), g.default.isInitialFailed = !0)), S.SharingInit.publishSharingEncodeFailedEvent();
                  else if (t.status == c.Video_Capture_Tick) g.default.mediaSDKHandle.Process_Sharing();
                  else if (t.status == c.MONITOR_MESSAGE) g.default.monitorEncodeSharing = t;
                  else if (t.status == c.DOWNLOAD_WASM_FROM_MAIN_THREAD) {
                      var e = g.default.localSharingEncMGR.map.get(g.default.SPECIAL_ID);
                      X(t.url, e)
                  } else t.status == c.APP_TROUBLESHOOTING_INFO ? (g.default.monitorSharingEncodeAPPInfo = t, g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: g.default.monitorSharingEncodeAPPInfo.data
                      }
                  }), g.default.monitorSharingEncodeAPPInfo = null) : t.status == c.WCL_TROUBLESHOOTING_INFO && v.default.add_monitor("SE" + t.data)
              }()
          } catch (e) {
              O.error(e)
          }
          g.default.sharingEncInitInstance.checkInitSuccess() && S.SharingInit.publishSharingEncodeSuccessEvent()
      }

      function Q(e) {
          var t = e.data;
          g.default.SPECIAL_ID;
          try {
              ! function() {
                  if (t.status === c.VIDEO_DATA_DROP_RATIO);
                  else if (t.status === c.VIDEO_RESOLUTION_UPDATE) g.default.Notify_APPUI(c.CURRENT_VIDEO_RESOLUTION, {
                      width: t.width,
                      height: t.height
                  });
                  else if (t.status === c.VIDEO_RENDER_MONITOR_LOG) v.default.add_monitor2(t.data);
                  else if (t.status === c.VIDEO_DROP_RATIO_FROM_WCL) {
                      var e = t.data;
                      I.default.triggerSync(c.VIDEO_DATA_FROM_WORKER, e)
                  } else if (0 === t.status) ! function(e, t, n, i, r, a, o, u, s, d, c) {
                      if (g.default.isVideoPlayWork) {
                          var l = {
                              yuvdata: t,
                              ntptime: n,
                              ssrc: e,
                              width: i,
                              height: r,
                              r_x: a,
                              r_y: o,
                              r_w: u,
                              r_h: s,
                              rotation: d,
                              yuv_limited: c
                          };
                          g.default.mediaSDKHandle.VideoRenderObj.Get_Video_Data_From_Queue(l)
                      }
                  }(t.video_ssrc, t.data, t.video_timestamp, t.video_width, t.video_height, t.rendering_x, t.rendering_y, t.rendering_w, t.rendering_h, t.rotation, t.yuv_limited);
                  else if (t.status === c.Video_Dec_WASM_OK) v.default.add_monitor("VDWS"), g.default.isVideoDecodeWASMOK = !0, g.default.videoDecInitInstance.setWasmSuccess();
                  else if (t.status === c.DECODE_MESSAGE) g.default.Notify_APPUI(c.VIDEO_DECODE_MAX_SIZE, {
                      ssrc: t.ssrc,
                      size: t.size
                  });
                  else if (t.status === c.Video_Dec_WASM_FAILED) v.default.add_monitor("VDWF"), g.default.isInitialFailed || (g.default.Notify_APPUI && g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), E.VideoInit.publishDecodeInitFAILEDEvent();
                  else if (t.status === c.Video_Dec_Handle_OK) v.default.add_monitor("VDHS"), g.default.videoDecInitInstance.setHanderSuccess();
                  else if (t.status === c.Video_Dec_Handle_FAILED) v.default.add_monitor("VDHF"), g.default.isInitialFailed || (g.default.Notify_APPUI && g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), E.VideoInit.publishDecodeInitFAILEDEvent();
                  else if (t.status === c.Video_Dec_WebSocket_OK) v.default.add_monitor("VDSS"), g.default.videoDecInitInstance.setSocketSuccess();
                  else if (t.status === c.Video_Dec_WebSocket_FAILED) v.default.add_monitor("VDSF"), g.default.isInitialFailed || (g.default.videoDecInitInstance.isSocketInitSuccess() ? g.default.Notify_APPUI_SAFE(c.VIDEO_WEBSOCKET_BROKEN, null) : (g.default.Notify_APPUI_SAFE(c.INIT_FAILED, null), g.default.isInitialFailed = !0)), E.VideoInit.publishDecodeInitFAILEDEvent();
                  else if (t.status == c.MONITOR_MESSAGE) g.default.monitorDecodeVideo = t;
                  else if (t.status == c.APP_TROUBLESHOOTING_INFO) g.default.monitorVideoDecodeAPPInfo = t, g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: g.default.monitorVideoDecodeAPPInfo.data
                      }
                  }), g.default.monitorVideoDecodeAPPInfo = null;
                  else if (t.status == c.DOWNLOAD_WASM_FROM_MAIN_THREAD) {
                      var n = g.default.localVideoDecMGR.map.get(g.default.SPECIAL_ID);
                      X(t.url, n)
                  } else t.status == c.WCL_TROUBLESHOOTING_INFO && v.default.add_monitor("VD" + t.data)
              }()
          } catch (e) {
              O.error(e)
          }
          g.default.videoDecInitInstance.checkInitSuccess() && E.VideoInit.publishDecodeInitSuccessEvent()
      }

      function Y(e) {
          var t = e.data;
          g.default.SPECIAL_ID;
          try {
              ! function() {
                  if (t.status === c.VIDEO_DATA_DROP_RATIO);
                  else if (t.status === c.VIDEO_ENCODED_DATA) {
                      var e = t.data;
                      I.default.triggerSync(c.VIDEO_DATA_FROM_WORKER, e)
                  } else if (0 === t.status);
                  else if (t.status === c.Video_Enc_WASM_OK || t.status === c.Video_Dec_WASM_OK) v.default.add_monitor("VEWS"), ce(0, null), g.default.isVideoEncodeWASMOK = !0, g.default.videoInitInstance.setWasmSuccess();
                  else if (t.status === c.Video_Enc_WASM_FAILED) v.default.add_monitor("VEWF"), g.default.isInitialFailed || (g.default.Notify_APPUI && g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), E.VideoInit.publishEncodeInitFAILEDEvent();
                  else if (t.status === c.Video_Enc_Handle_OK || c.Video_Dec_Handle_OK === t.status) v.default.add_monitor("VEHS"), g.default.videoInitInstance.setHanderSuccess();
                  else if (t.status === c.Video_Enc_Handle_FAILED || c.Video_Dec_Handle_FAILED === t.status) v.default.add_monitor("VEHF"), g.default.isInitialFailed || (g.default.Notify_APPUI && g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), E.VideoInit.publishEncodeInitFAILEDEvent();
                  else if (t.status === c.Video_Enc_WebSocket_OK || c.Video_Dec_WebSocket_OK === t.status) v.default.add_monitor("VESS"), g.default.videoInitInstance.setSocketSuccess();
                  else if (t.status === c.Video_Enc_WebSocket_FAILED || t.status === c.Video_Dec_WebSocket_FAILED) v.default.add_monitor("VESF"), g.default.isInitialFailed || (g.default.videoInitInstance.isSocketInitSuccess() ? g.default.Notify_APPUI_SAFE(c.VIDEO_WEBSOCKET_BROKEN, null) : (g.default.Notify_APPUI_SAFE(c.INIT_FAILED, null), g.default.isInitialFailed = !0)), E.VideoInit.publishEncodeInitFAILEDEvent(), I.default.trigger(E.VideoInit.publishEncodeInitFAILEDEvent());
                  else if (t.status === c.Video_Capture_Tick) g.default.mediaSDKHandle.Process_Video();
                  else if (t.status == c.MONITOR_MESSAGE) g.default.monitorEncodeVideo = t;
                  else if (t.status == c.APP_TROUBLESHOOTING_INFO) g.default.monitorVideoEncodeAPPInfo = t, g.default.Notify_APPUI(c.MONITOR_LOG, {
                      evt: 4167,
                      seq: 1,
                      body: {
                          data: g.default.monitorVideoEncodeAPPInfo.data
                      }
                  }), g.default.monitorVideoEncodeAPPInfo = null;
                  else if (t.status === c.DOWNLOAD_WASM_FROM_MAIN_THREAD) {
                      var n = g.default.localVideoEncMGR.map.get(g.default.SPECIAL_ID);
                      X(t.url, n)
                  } else t.status == c.WCL_TROUBLESHOOTING_INFO && v.default.add_monitor("VE" + t.data)
              }()
          } catch (e) {
              O.error(e)
          }
          g.default.videoInitInstance.checkInitSuccess() && E.VideoInit.publishEncodeInitSuccessEvent()
      }

      function X(e, t) {
          f.default.downloadBinary(e).then(function(e) {
              t.postMessage({
                  command: "DOWNLOAD_WASM_FROM_MAIN_THREAD_OK",
                  data: e
              })
          }).catch(function(e) {
              t.postMessage({
                  command: "DOWNLOAD_WASM_FROM_MAIN_THREAD_FAILED",
                  data: e.message
              })
          })
      }

      function q(e) {
          var t = e.data,
              n = g.default.SPECIAL_ID;
          try {
              ! function() {
                  if (0 === t.status) {
                      if (t.time ? g.default.AudioNode ? g.default.AudioNode.postData("data", {
                              ssrc: g.default.CurrentSSRC,
                              data: t.data,
                              time: t.time
                          }) : ae(n, t.data, t.time) : g.default.AudioNode ? g.default.AudioNode.postData("data", {
                              ssrc: g.default.CurrentSSRC,
                              data: t.data,
                              time: null
                          }) : ae(n, t.data, null), g.default.localAudioEncMGR && !g.default.sharedBuffer) {
                          var e = g.default.localAudioEncMGR.map.get(n);
                          if (e && t.aec.length) {
                              var i = {
                                  command: "EchoCancel",
                                  data: t.aec,
                                  channels: t.channels,
                                  sampleHz: t.sampleHz
                              };
                              e.postMessage(i, [i.data.buffer])
                          }
                      }
                  } else if (t.status === c.Audio_Enc_WASM_OK || t.status === c.Audio_Dec_WASM_OK) v.default.add_monitor("ADWS"), g.default.isAudioDecodeWASMOK = !0, g.default.audioDecInitInstance.setWasmSuccess();
                  else if (t.status === c.Audio_Dec_WASM_FAILED) v.default.add_monitor("ADWF"), g.default.isInitialFailed || g.default.Notify_APPUI && (g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), p.AudioInit.publishAudioDecodeFAILEDEvent();
                  else if (t.status === c.Audio_Dec_Handle_OK) v.default.add_monitor("ADHS"), g.default.audioDecInitInstance.setHanderSuccess();
                  else if (t.status === c.Audio_Dec_Handle_FAILED) v.default.add_monitor("ADHF"), g.default.isInitialFailed || g.default.Notify_APPUI && (g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), p.AudioInit.publishAudioDecodeFAILEDEvent();
                  else if (t.status === c.Audio_Dec_WebSocket_OK) v.default.add_monitor("ADSS"), g.default.audioDecInitInstance.setSocketSuccess();
                  else if (t.status === c.Audio_Dec_WebSocket_FAILED) v.default.add_monitor("ADSF"), g.default.isInitialFailed || (g.default.audioDecInitInstance.isSocketInitSuccess() ? g.default.Notify_APPUI_SAFE(c.AUDIO_WEBSOCKET_BROKEN, null) : (g.default.Notify_APPUI_SAFE(c.INIT_FAILED, null), g.default.isInitialFailed = !0)), p.AudioInit.publishAudioDecodeFAILEDEvent();
                  else if (6 === t.status);
                  else if (-6 === t.status) g.default.isInitialFailed || g.default.Notify_APPUI && (g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), p.AudioInit.publishAudioDecodeFAILEDEvent();
                  else if (t.status == c.MONITOR_MESSAGE) g.default.monitorDecodeAudio = t;
                  else if (t.status === c.DOWNLOAD_WASM_FROM_MAIN_THREAD) {
                      var r = g.default.localAudioDecMGR.map.get(g.default.SPECIAL_ID);
                      X(t.url, r)
                  } else t.status == c.WCL_TROUBLESHOOTING_INFO && v.default.add_monitor("AD" + t.data)
              }()
          } catch (e) {
              O.error(e)
          }
          g.default.audioDecInitInstance.checkInitSuccess() && p.AudioInit.publishAudioDecodeSuccessEvent()
      }

      function J(e) {
        console.log("J(e)", e);
          if (g.default.localAudioDecMGR) {
              try {
                  ! function() {
                      var t = g.default.SPECIAL_ID,
                          n = e.data,
                          i = g.default.localAudioDecMGR.map.get(t);
                      if (0 == n.status) i && i.postMessage({
                          command: "EncodedAudioFrame",
                          data: n.data
                      }, [n.data.buffer]);
                      else if (n.status == c.AUDIO_ENCODED_DATA) I.default.triggerSync(c.AUDIO_DATA_FROM_WORKER, n.data);
                      else if (n.status === c.Audio_Enc_WASM_OK || n.status === c.Audio_Dec_WASM_OK) v.default.add_monitor("AEWS"), _e(0, null), g.default.isAudioEncodeWASMOK = !0, g.default.audioEncodeInitInstance.setWasmSuccess();
                      else if (n.status === c.Audio_Enc_WASM_FAILED || n.status === c.Audio_Dec_WASM_FAILED) v.default.add_monitor("AEWF"), g.default.isInitialFailed || g.default.Notify_APPUI && (g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), p.AudioInit.publishAudioEncodeFAILEDEvent();
                      else if (n.status === c.Audio_Dec_Handle_OK) v.default.add_monitor("AEHS"), g.default.audioEncodeInitInstance.setHanderSuccess();
                      else if (n.status === c.Audio_Dec_WebSocket_OK) v.default.add_monitor("AESS"), g.default.audioEncodeInitInstance.setSocketSuccess();
                      else if (n.status === c.Audio_Dec_WebSocket_FAILED) v.default.add_monitor("AESF"), g.default.isInitialFailed || (g.default.audioEncodeInitInstance.isSocketInitSuccess() ? g.default.Notify_APPUI_SAFE(c.AUDIO_WEBSOCKET_BROKEN, null) : (g.default.Notify_APPUI_SAFE(c.INIT_FAILED, null), g.default.isInitialFailed = !0)), p.AudioInit.publishAudioEncodeFAILEDEvent();
                      else if (n.status === c.Audio_Enc_Handle_FAILED || n.status === c.Audio_Dec_Handle_FAILED) v.default.add_monitor("AEHF"), g.default.isInitialFailed || g.default.Notify_APPUI && (g.default.Notify_APPUI(c.INIT_FAILED, null), g.default.isInitialFailed = !0), p.AudioInit.publishAudioEncodeFAILEDEvent();
                      else if (n.status === c.Audio_Mute) g.default.Notify_APPUI && g.default.Notify_APPUI(c.AUDIO_ZERO_DATA, null);
                      else if (n.status === c.AUDIO_DELAY) g.default.indexDbObject.put(n.delay, "delay"), g.default.openIndexFlag && g.default.indexDbObject.select("delay");
                      else if (n.status === c.DOWNLOAD_WASM_FROM_MAIN_THREAD) {
                          var r = g.default.localAudioEncMGR.map.get(g.default.SPECIAL_ID);
                          X(n.url, r)
                      } else n.status == c.WCL_TROUBLESHOOTING_INFO ? v.default.add_monitor("AE" + n.data) : (n.status, c.AUDIO_CLIPPING)
                  }()
              } catch (e) {
                  O.error(e)
              }
              g.default.audioEncodeInitInstance.checkInitSuccess() && p.AudioInit.publishAudioEncodeSuccessEvent()
          }
      }

      function Z(e) {
          if (e && e.isDestroy) return O("WorkerType:sharingEnc;The relative SDK instance is destroy, don't start relative worker, avoid multiple same workers. ");
          if (g.default.localSharingEncMGR)
              if (g.default.isSharingEncodeThreadStart) setTimeout(K, 100);
              else {
                  if (g.default.isSharingEncodeThreadStart = !0, "" == g.default.sharingEncWorkerPath) return;
                  R(g.default.sharingEncWorkerPath, g.default.localSharingEncMGR, j, _.workerStartTypeEnum.sharingEnc, e)
              }
      }

      function z(e) {
          if (e && e.isDestroy) return O("WorkerType:sharingDec;The relative SDK instance is destroy, don't start relative worker, avoid multiple same workers. ");
          if (g.default.localSharingDecMGR)
              if (g.default.isSharingDecodeThreadStart) setTimeout(H, 100);
              else {
                  if (g.default.isSharingDecodeThreadStart = !0, "" == g.default.sharingDecWorkerPath) return;
                  R(g.default.sharingDecWorkerPath, g.default.localSharingDecMGR, B, _.workerStartTypeEnum.sharingDec, e)
              }
      }
      var $ = (0, A.default)(function() {
          try {
              g.default.sharedBuffer = new SharedArrayBuffer(480 * g.default.shareBufferSampleNumb * Int32Array.BYTES_PER_ELEMENT + 12 * g.default.shareBufferSampleNumb);
              var e = new Int32Array(g.default.sharedBuffer);
              D.Lock.initialize(e, 0)
          } catch (e) {
              g.default.sharedBuffer = null
          }
      });

      function te(e) {
          g.default.Audio_WebSocket_Ip_Address || (g.default.Audio_WebSocket_Ip_Address = e)
      }

      function ne(e) {
          g.default.Sharing_WebSocket_Ip_Address || (g.default.Sharing_WebSocket_Ip_Address = e)
      }

      function re(e) {
          g.default.localSharingDecMGR && ("sharingPara" == e.type && (v.default.add_monitor("SHPA"), I.default.publish(c.SHARING_PARAM_INFO_FROM_SOCKET, e.data), g.default.Notify_APPUI(c.SHARING_PARA, e.data)), g.default.isSharingPlayWork && g.default.localSharingDecMGR.PutData(e))
      }

      function ae(e, t, n) {
          if (e = g.default.SPECIAL_ID, g.default.isAudioPlayWork && g.default.localAudioDecMGR) {
              var i = g.default.localAudioDecMGR.AudioQueueMGR.GetQueue(e);
              if (i || (i = g.default.localAudioDecMGR.AudioQueueMGR.AddQueue(e)), t = function(e) {
                      for (var t = new Int16Array(e.length / 2), n = 0; n < t.length; n++) t[n] = (255 & e[2 * n]) + ((255 & e[2 * n + 1]) << 8);
                      return function(e, t, n) {
                          for (var i = new Float32Array(e.length - 0), r = 0; r < n; r++) {
                              var a = e[r] / 32768;
                              a > 1 && (a = 1), a < -1 && (a = -1), i[r] = a
                          }
                          return i
                      }(t, 0, t.length)
                  }(t), n) {
                  var r = new o.default,
                      a = n.length / 12,
                      u = 0,
                      s = 0;
                  for (u = 0; u < a; u++) {
                      for (e = 0, s = 12 * u + 0; s < 12 * u + 4; s++) e += n[s] * Math.pow(256, s - 12 * u);
                      e >>= 10;
                      var d = 0;
                      for (s = 12 * u + 4; s < 12 * u + 12; s++) d += n[s] * Math.pow(256, s - 12 * u - 4);
                      r.set(e, d)
                  }
                  var c = {
                      buffer: t,
                      ntptime: r
                  }
              } else c = {
                  buffer: t,
                  ntptime: null
              };
              i.enqueue(c);
              var l = oe(e);
              if (l > g.default.audioBufferSize + 2 && O("the length is " + l), l > 50)
                  for (var f = l - g.default.audioBufferSize; f >= 0;) se(e), f--;
              else if (l > g.default.audioBufferSize) {
                  var h = g.default.localAudioDecMGR.map.get(g.default.SPECIAL_ID);
                  h && h.postMessage({
                      command: "delay"
                  })
              }
          }
      }

      function oe(e) {
          return e = g.default.SPECIAL_ID, g.default.localAudioDecMGR ? g.default.localAudioDecMGR.AudioQueueMGR.GetQueueLength(e) : 0
      }

      function ue(e) {
          g.default.localAudioDecMGR && g.default.localAudioDecMGR.UpdateSSRCTimeMap(e)
      }

      function se(e) {
          if (e = g.default.SPECIAL_ID, g.default.localAudioDecMGR) {
              var t = g.default.localAudioDecMGR.AudioQueueMGR.GetQueue(e);
              return t ? t.dequeue() : null
          }
      }

      function de() {
          if (g.default.localVideoDecMGR) {
              var e = g.default.localVideoDecMGR.map.get(g.default.SPECIAL_ID);
              e && g.default.isVideoDecodeWASMOK && !g.default.isVideoDecodePostStart && g.default.localVideoPara ? (e.postMessage({
                  command: "startMedia",
                  websocket_ip_address: g.default.Video_WebSocket_Ip_Address + "&mode=5",
                  confId: g.default.localVideoPara.confId,
                  confKey: "",
                  logon: g.default.localVideoPara.logon,
                  mtu_size: 0,
                  meetingid: g.default.localVideoPara.meetingid,
                  meetingnumb: g.default.localVideoPara.meetingnumb,
                  multiThreadNum: 1
              }), g.default.isVideoDecodePostStart = !0) : g.default.isVideoDecodePostStart || setTimeout(de, 100)
          }
      }

      function ce(e, t, n) {
          if (n && n.isDestroy) return O("WorkerType:videoDec;The relative SDK instance is destroy, don't start relative worker, avoid multiple same workers. ");
          if (g.default.SPECIAL_ID, g.default.localVideoDecMGR)
              if (g.default.isVideoDecodeThreadStart) setTimeout(de, 100);
              else {
                  if (g.default.isVideoDecodeThreadStart = !0, "" == g.default.videoDecWorkerPath) return;
                  R(g.default.videoDecWorkerPath, g.default.localVideoDecMGR, Q, _.workerStartTypeEnum.videoDec, n)
              }
      }

      function le() {
          if (g.default.localVideoEncMGR) {
              var e = g.default.localVideoEncMGR.map.get(g.default.SPECIAL_ID);
              if (e && g.default.isVideoEncodeWASMOK && !g.default.isVideoEncodePostStart && g.default.localVideoPara) {
                  var t;
                  t = "firefox" === f.default.browserType.browser ? 1080 : 1070, g.default.mediaSDKHandle.mtu_size = t, e.postMessage({
                      command: "startMedia",
                      websocket_ip_address: g.default.Video_WebSocket_Ip_Address + "&mode=2",
                      confId: g.default.localVideoPara.confId,
                      confKey: "",
                      logon: g.default.localVideoPara.logon,
                      sendvideo: !0,
                      isChromeOrEdge: f.default.browser.isEdge || f.default.browser.isChrome,
                      mtu_size: t,
                      meetingid: g.default.localVideoPara.meetingid,
                      meetingnumb: g.default.localVideoPara.meetingnumb,
                      multiThreadNum: 1
                  }), g.default.isVideoEncodePostStart = !0
              } else g.default.isVideoEncodePostStart || setTimeout(le, 100)
          }
      }

      function fe(e, t, n) {
          if (n && n.isDestroy) return O("WorkerType:videoEnc;The relative SDK instance is destroy, don't start relative worker, avoid multiple same workers. ");
          g.default.SPECIAL_ID, g.default.localVideoEncMGR && (g.default.isVideoEncodeThreadStart || (g.default.isVideoEncodeThreadStart = !0, R(g.default.videoEncWorkerPath, g.default.localVideoEncMGR, Y, _.workerStartTypeEnum.videoEnc, n)))
      }

      function he() {
          if (g.default.localAudioDecMGR) {
              var e = g.default.localAudioDecMGR.map.get(g.default.SPECIAL_ID);
              if (g.default.localAudioPara && e && g.default.isAudioDecodeWASMOK && !g.default.isAudioDecodePostStart) {
                  if (e.postMessage({
                          command: "startMedia",
                          websocket_ip_address: g.default.Audio_WebSocket_Ip_Address + "&mode=5",
                          sampleRate: g.default.localAudioPara.sampleRate,
                          userid: g.default.localAudioPara.userid,
                          logon: g.default.localAudioPara.logon,
                          isEdge: f.default.browser.isEdge,
                          decode: 1,
                          meetingid: g.default.localAudioPara.meetingid,
                          meetingnumb: g.default.localAudioPara.meetingnumb
                      }), g.default.sharedBuffer) try {
                      e.postMessage({
                          command: "sharedBuffer",
                          data: g.default.sharedBuffer
                      })
                  } catch (t) {
                      e.postMessage({
                          command: "sharedBuffer",
                          data: g.default.sharedBuffer
                      }, [g.default.sharedBuffer])
                  }
                  g.default.isAudioDecodePostStart = !0
              } else g.default.isAudioDecodePostStart || setTimeout(he, 100)
          }
      }

      function _e(e, t, n) {
          if (n && n.isDestroy) return O("WorkerType:audioDec;The relative SDK instance is destroy, don't start relative worker, avoid multiple same workers. ");
          g.default.SPECIAL_ID, g.default.localAudioDecMGR && (g.default.isAudioDecodeThreadStart || (g.default.isAudioDecodeThreadStart = !0, R(g.default.audioDecWorkerPath, g.default.localAudioDecMGR, q, _.workerStartTypeEnum.audioDec, n)))
      }

      function Ee(e) {
          if (e >>= 10, g.default.localAudioDecMGR) {
              var t = g.default.localAudioDecMGR.GetSSRCTimeMap(e);
              return null === t ? 0 : t
          }
      }

      function pe() {
          var e = g.default.localAudioEncMGR.map.get(g.default.SPECIAL_ID);
          if (g.default.localAudioPara && e && g.default.isAudioEncodeWASMOK && !g.default.isAudioEncodePostStart) {
              if (e.postMessage({
                      command: "startMedia",
                      websocket_ip_address: g.default.Audio_WebSocket_Ip_Address + "&mode=2",
                      sampleRate: g.default.localAudioPara.sampleRate,
                      userid: g.default.localAudioPara.userid,
                      encode: 1,
                      meetingid: g.default.localAudioPara.meetingid,
                      meetingnumb: g.default.localAudioPara.meetingnumb
                  }), g.default.sharedBuffer) try {
                  e.postMessage({
                      command: "sharedBuffer",
                      data: g.default.sharedBuffer
                  })
              } catch (t) {
                  e.postMessage({
                      command: "sharedBuffer",
                      data: g.default.sharedBuffer
                  }, [g.default.sharedBuffer])
              }
              g.default.isAudioEncodePostStart = !0
          } else setTimeout(pe, 100)
      }

      function Se(e, t) {
          if (t && t.isDestroy) return O("WorkerType:audioEnc;The relative SDK instance is destroy, don't start relative worker, avoid multiple same workers. ");
          g.default.SPECIAL_ID, g.default.isAudioEncodeThreadStart || (g.default.isAudioEncodeThreadStart = !0, R(g.default.audioEncWorkerPath, g.default.localAudioEncMGR, J, _.workerStartTypeEnum.audioEnc, t))
      }

      function Ae(e, t) {
          if (t <= 0) return e;
          for (var n = 0; n < t - 1; n++) e += ",";
          return e + ",0"
      }

      function Ie(e) {
          try {
              if (v.default && e) {
                  var t = ["ERR:", e.message, "f"].join(""),
                      n = v.default.checkIsNecessaryExceptionLogAndReturnRepeatTimes(t);
                  n.isNecessary ? (O("error repeat ".concat(n.repeatNumber), t), v.default.add_monitor(t + "(repeat:".concat(n.repeatNumber, ")"))) : O("error but ignore", e.message)
              }
          } catch (e) {
              O("_listenWindowErrorEvent error", e)
          }
      }

      function ve(e) {
          return new s.default(function(t, n) {
              var a = 0;
              ! function o() {
                  if (++a >= 40) return n("Timeout. wait for worker ".concat(e, " to be ready."));
                  De(e) ? t(De(e)) : setTimeout(o, 500)
              }()
          })
      }

      function De(e) {
          var t = new o.default;
          t.set(_.WORKER_TYPE.AUDIO_DECODE, g.default.localAudioDecMGR), t.set(_.WORKER_TYPE.AUDIO_ENCODE, g.default.localAudioEncMGR), t.set(_.WORKER_TYPE.VIDEO_DECODE, g.default.localVideoDecMGR), t.set(_.WORKER_TYPE.VIDEO_ENCODE, g.default.localVideoEncMGR), t.set(_.WORKER_TYPE.SHARING_DECODE, g.default.localSharingDecMGR), t.set(_.WORKER_TYPE.SHARING_ENCODE, g.default.localSharingEncMGR);
          var n = g.default.SPECIAL_ID,
              i = t.get(e);
          return i && i.map.get(n) ? i.map.get(n) : null
      }
  }, function(e, t, n) {
      e.exports = n(128)
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var r, a, o = i(n(15)),
          u = i(n(16)),
          s = function() {};
      s.prototype = {
          threads: (a = (0, u.default)(o.default.mark(function e() {
              return o.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return e.abrupt("return", function() {
                              var e = (0, u.default)(o.default.mark(function e(t) {
                                  return o.default.wrap(function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              if (WebAssembly.validate(t)) {
                                                  e.next = 2;
                                                  break
                                              }
                                              return e.abrupt("return", !1);
                                          case 2:
                                              return e.prev = 2, e.abrupt("return", ((new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)), !0));
                                          case 6:
                                              return e.prev = 6, e.t0 = e.catch(2), e.abrupt("return", !1);
                                          case 9:
                                          case "end":
                                              return e.stop()
                                      }
                                  }, e, this, [
                                      [2, 6]
                                  ])
                              }));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])));
                      case 1:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function() {
              return a.apply(this, arguments)
          }),
          simd: (r = (0, u.default)(o.default.mark(function e() {
              return o.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return e.abrupt("return", WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 4, 26, 11])));
                      case 1:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function() {
              return r.apply(this, arguments)
          })
      };
      var d = new s;
      t.default = d
  }, function(e, t, n) {
      e.exports = n(192)
  }, function(e, t, n) {
      e.exports = n(110)
  }, function(e, t, n) {
      n(111);
      var i = n(0).Object;
      e.exports = function(e, t) {
          return i.getOwnPropertyDescriptor(e, t)
      }
  }, function(e, t, n) {
      var i = n(12),
          r = n(47).f;
      n(50)("getOwnPropertyDescriptor", function() {
          return function(e, t) {
              return r(i(e), t)
          }
      })
  }, function(e, t, n) {
      n(113);
      var i = n(0).Object;
      e.exports = function(e, t, n) {
          return i.defineProperty(e, t, n)
      }
  }, function(e, t, n) {
      var i = n(3);
      i(i.S + i.F * !n(7), "Object", {
          defineProperty: n(6).f
      })
  }, function(e, t, n) {
      n(51), n(21), n(34), n(122), n(126), n(127), e.exports = n(0).Promise
  }, function(e, t, n) {
      var i = n(52),
          r = n(46);
      e.exports = function(e) {
          return function(t, n) {
              var a, o, u = String(r(t)),
                  s = i(n),
                  d = u.length;
              return s < 0 || s >= d ? e ? "" : void 0 : (a = u.charCodeAt(s)) < 55296 || a > 56319 || s + 1 === d || (o = u.charCodeAt(s + 1)) < 56320 || o > 57343 ? e ? u.charAt(s) : a : e ? u.slice(s, s + 2) : o - 56320 + (a - 55296 << 10) + 65536
          }
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(38),
          r = n(27),
          a = n(31),
          o = {};
      n(11)(o, n(4)("iterator"), function() {
          return this
      }), e.exports = function(e, t, n) {
          e.prototype = i(o, {
              next: r(1, n)
          }), a(e, t + " Iterator")
      }
  }, function(e, t, n) {
      var i = n(6),
          r = n(8),
          a = n(30);
      e.exports = n(7) ? Object.defineProperties : function(e, t) {
          r(e);
          for (var n, o = a(t), u = o.length, s = 0; u > s;) i.f(e, n = o[s++], t[n]);
          return e
      }
  }, function(e, t, n) {
      var i = n(12),
          r = n(39),
          a = n(119);
      e.exports = function(e) {
          return function(t, n, o) {
              var u, s = i(t),
                  d = r(s.length),
                  c = a(o, d);
              if (e && n != n) {
                  for (; d > c;)
                      if ((u = s[c++]) != u) return !0
              } else
                  for (; d > c; c++)
                      if ((e || c in s) && s[c] === n) return e || c || 0;
              return !e && -1
          }
      }
  }, function(e, t, n) {
      var i = n(52),
          r = Math.max,
          a = Math.min;
      e.exports = function(e, t) {
          return (e = i(e)) < 0 ? r(e + t, 0) : a(e, t)
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(121),
          r = n(82),
          a = n(17),
          o = n(12);
      e.exports = n(53)(Array, "Array", function(e, t) {
          this._t = o(e), this._i = 0, this._k = t
      }, function() {
          var e = this._t,
              t = this._k,
              n = this._i++;
          return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
      }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
  }, function(e, t) {
      e.exports = function() {}
  }, function(e, t, n) {
      "use strict";
      var i, r, a, o, u = n(29),
          s = n(2),
          d = n(9),
          c = n(41),
          l = n(3),
          f = n(5),
          h = n(28),
          _ = n(57),
          E = n(32),
          p = n(85),
          S = n(86).set,
          A = n(124)(),
          I = n(58),
          v = n(87),
          D = n(125),
          g = n(88),
          O = s.TypeError,
          m = s.process,
          C = m && m.versions,
          R = C && C.v8 || "",
          y = s.Promise,
          T = "process" == c(m),
          M = function() {},
          N = r = I.f,
          P = !! function() {
              try {
                  var e = y.resolve(1),
                      t = (e.constructor = {})[n(4)("species")] = function(e) {
                          e(M, M)
                      };
                  return (T || "function" == typeof PromiseRejectionEvent) && e.then(M) instanceof t && 0 !== R.indexOf("6.6") && -1 === D.indexOf("Chrome/66")
              } catch (e) {}
          }(),
          b = function(e) {
              var t;
              return !(!f(e) || "function" != typeof(t = e.then)) && t
          },
          k = function(e, t) {
              if (!e._n) {
                  e._n = !0;
                  var n = e._c;
                  A(function() {
                      for (var i = e._v, r = 1 == e._s, a = 0, o = function(t) {
                              var n, a, o, u = r ? t.ok : t.fail,
                                  s = t.resolve,
                                  d = t.reject,
                                  c = t.domain;
                              try {
                                  u ? (r || (2 == e._h && V(e), e._h = 1), !0 === u ? n = i : (c && c.enter(), n = u(i), c && (c.exit(), o = !0)), n === t.promise ? d(O("Promise-chain cycle")) : (a = b(n)) ? a.call(n, s, d) : s(n)) : d(i)
                              } catch (e) {
                                  c && !o && c.exit(), d(e)
                              }
                          }; n.length > a;) o(n[a++]);
                      e._c = [], e._n = !1, t && !e._h && w(e)
                  })
              }
          },
          w = function(e) {
              S.call(s, function() {
                  var t, n, i, r = e._v,
                      a = L(e);
                  if (a && (t = v(function() {
                          T ? m.emit("unhandledRejection", r, e) : (n = s.onunhandledrejection) ? n({
                              promise: e,
                              reason: r
                          }) : (i = s.console) && i.error && i.error("Unhandled promise rejection", r)
                      }), e._h = T || L(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
              })
          },
          L = function(e) {
              return 1 !== e._h && 0 === (e._a || e._c).length
          },
          V = function(e) {
              S.call(s, function() {
                  var t;
                  T ? m.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({
                      promise: e,
                      reason: e._v
                  })
              })
          },
          U = function(e) {
              var t = this;
              t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), k(t, !0))
          },
          x = function(e) {
              var t, n = this;
              if (!n._d) {
                  n._d = !0, n = n._w || n;
                  try {
                      if (n === e) throw O("Promise can't be resolved itself");
                      (t = b(e)) ? A(function() {
                          var i = {
                              _w: n,
                              _d: !1
                          };
                          try {
                              t.call(e, d(x, i, 1), d(U, i, 1))
                          } catch (e) {
                              U.call(i, e)
                          }
                      }): (n._v = e, n._s = 1, k(n, !1))
                  } catch (e) {
                      U.call({
                          _w: n,
                          _d: !1
                      }, e)
                  }
              }
          };
      P || (y = function(e) {
          _(this, y, "Promise", "_h"), h(e), i.call(this);
          try {
              e(d(x, this, 1), d(U, this, 1))
          } catch (e) {
              U.call(this, e)
          }
      }, (i = function(e) {
          this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
      }).prototype = n(59)(y.prototype, {
          then: function(e, t) {
              var n = N(p(this, y));
              return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = T ? m.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && k(this, !1), n.promise
          },
          catch: function(e) {
              return this.then(void 0, e)
          }
      }), a = function() {
          var e = new i;
          this.promise = e, this.resolve = d(x, e, 1), this.reject = d(U, e, 1)
      }, I.f = N = function(e) {
          return e === y || e === o ? new a(e) : r(e)
      }), l(l.G + l.W + l.F * !P, {
          Promise: y
      }), n(31)(y, "Promise"), n(89)("Promise"), o = n(0).Promise, l(l.S + l.F * !P, "Promise", {
          reject: function(e) {
              var t = N(this);
              return (0, t.reject)(e), t.promise
          }
      }), l(l.S + l.F * (u || !P), "Promise", {
          resolve: function(e) {
              return g(u && this === o ? y : this, e)
          }
      }), l(l.S + l.F * !(P && n(90)(function(e) {
          y.all(e).catch(M)
      })), "Promise", {
          all: function(e) {
              var t = this,
                  n = N(t),
                  i = n.resolve,
                  r = n.reject,
                  a = v(function() {
                      var n = [],
                          a = 0,
                          o = 1;
                      E(e, !1, function(e) {
                          var u = a++,
                              s = !1;
                          n.push(void 0), o++, t.resolve(e).then(function(e) {
                              s || (s = !0, n[u] = e, --o || i(n))
                          }, r)
                      }), --o || i(n)
                  });
              return a.e && r(a.v), n.promise
          },
          race: function(e) {
              var t = this,
                  n = N(t),
                  i = n.reject,
                  r = v(function() {
                      E(e, !1, function(e) {
                          t.resolve(e).then(n.resolve, i)
                      })
                  });
              return r.e && i(r.v), n.promise
          }
      })
  }, function(e, t) {
      e.exports = function(e, t, n) {
          var i = void 0 === n;
          switch (t.length) {
              case 0:
                  return i ? e() : e.call(n);
              case 1:
                  return i ? e(t[0]) : e.call(n, t[0]);
              case 2:
                  return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
              case 3:
                  return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
              case 4:
                  return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
          }
          return e.apply(n, t)
      }
  }, function(e, t, n) {
      var i = n(2),
          r = n(86).set,
          a = i.MutationObserver || i.WebKitMutationObserver,
          o = i.process,
          u = i.Promise,
          s = "process" == n(26)(o);
      e.exports = function() {
          var e, t, n, d = function() {
              var i, r;
              for (s && (i = o.domain) && i.exit(); e;) {
                  r = e.fn, e = e.next;
                  try {
                      r()
                  } catch (i) {
                      throw e ? n() : t = void 0, i
                  }
              }
              t = void 0, i && i.enter()
          };
          if (s) n = function() {
              o.nextTick(d)
          };
          else if (!a || i.navigator && i.navigator.standalone)
              if (u && u.resolve) {
                  var c = u.resolve(void 0);
                  n = function() {
                      c.then(d)
                  }
              } else n = function() {
                  r.call(i, d)
              };
          else {
              var l = !0,
                  f = document.createTextNode("");
              new a(d).observe(f, {
                  characterData: !0
              }), n = function() {
                  f.data = l = !l
              }
          }
          return function(i) {
              var r = {
                  fn: i,
                  next: void 0
              };
              t && (t.next = r), e || (e = r, n()), t = r
          }
      }
  }, function(e, t, n) {
      var i = n(2).navigator;
      e.exports = i && i.userAgent || ""
  }, function(e, t, n) {
      "use strict";
      var i = n(3),
          r = n(0),
          a = n(2),
          o = n(85),
          u = n(88);
      i(i.P + i.R, "Promise", {
          finally: function(e) {
              var t = o(this, r.Promise || a.Promise),
                  n = "function" == typeof e;
              return this.then(n ? function(n) {
                  return u(t, e()).then(function() {
                      return n
                  })
              } : e, n ? function(n) {
                  return u(t, e()).then(function() {
                      throw n
                  })
              } : e)
          }
      })
  }, function(e, t, n) {
      "use strict";
      var i = n(3),
          r = n(58),
          a = n(87);
      i(i.S, "Promise", {
          try: function(e) {
              var t = r.f(this),
                  n = a(e);
              return (n.e ? t.reject : t.resolve)(n.v), t.promise
          }
      })
  }, function(e, t, n) {
      n(129), e.exports = n(0).Object.keys
  }, function(e, t, n) {
      var i = n(18),
          r = n(30);
      n(50)("keys", function() {
          return function(e) {
              return r(i(e))
          }
      })
  }, function(e, t, n) {
      var i = function() {
              return this
          }() || Function("return this")(),
          r = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0,
          a = r && i.regeneratorRuntime;
      if (i.regeneratorRuntime = void 0, e.exports = n(131), r) i.regeneratorRuntime = a;
      else try {
          delete i.regeneratorRuntime
      } catch (e) {
          i.regeneratorRuntime = void 0
      }
  }, function(e, t) {
      ! function(t) {
          "use strict";
          var n, i = Object.prototype,
              r = i.hasOwnProperty,
              a = "function" == typeof Symbol ? Symbol : {},
              o = a.iterator || "@@iterator",
              u = a.asyncIterator || "@@asyncIterator",
              s = a.toStringTag || "@@toStringTag",
              d = "object" == typeof e,
              c = t.regeneratorRuntime;
          if (c) d && (e.exports = c);
          else {
              (c = t.regeneratorRuntime = d ? e.exports : {}).wrap = v;
              var l = "suspendedStart",
                  f = "suspendedYield",
                  h = "executing",
                  _ = "completed",
                  E = {},
                  p = {};
              p[o] = function() {
                  return this
              };
              var S = Object.getPrototypeOf,
                  A = S && S(S(P([])));
              A && A !== i && r.call(A, o) && (p = A);
              var I = m.prototype = g.prototype = Object.create(p);
              O.prototype = I.constructor = m, m.constructor = O, m[s] = O.displayName = "GeneratorFunction", c.isGeneratorFunction = function(e) {
                  var t = "function" == typeof e && e.constructor;
                  return !!t && (t === O || "GeneratorFunction" === (t.displayName || t.name))
              }, c.mark = function(e) {
                  return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(I), e
              }, c.awrap = function(e) {
                  return {
                      __await: e
                  }
              }, C(R.prototype), R.prototype[u] = function() {
                  return this
              }, c.AsyncIterator = R, c.async = function(e, t, n, i) {
                  var r = new R(v(e, t, n, i));
                  return c.isGeneratorFunction(t) ? r : r.next().then(function(e) {
                      return e.done ? e.value : r.next()
                  })
              }, C(I), I[s] = "Generator", I[o] = function() {
                  return this
              }, I.toString = function() {
                  return "[object Generator]"
              }, c.keys = function(e) {
                  var t = [];
                  for (var n in e) t.push(n);
                  return t.reverse(),
                      function n() {
                          for (; t.length;) {
                              var i = t.pop();
                              if (i in e) return n.value = i, n.done = !1, n
                          }
                          return n.done = !0, n
                      }
              }, c.values = P, N.prototype = {
                  constructor: N,
                  reset: function(e) {
                      if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(M), !e)
                          for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                  },
                  stop: function() {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type) throw e.arg;
                      return this.rval
                  },
                  dispatchException: function(e) {
                      if (this.done) throw e;
                      var t = this;

                      function i(i, r) {
                          return u.type = "throw", u.arg = e, t.next = i, r && (t.method = "next", t.arg = n), !!r
                      }
                      for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                          var o = this.tryEntries[a],
                              u = o.completion;
                          if ("root" === o.tryLoc) return i("end");
                          if (o.tryLoc <= this.prev) {
                              var s = r.call(o, "catchLoc"),
                                  d = r.call(o, "finallyLoc");
                              if (s && d) {
                                  if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                  if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                              } else if (s) {
                                  if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                              } else {
                                  if (!d) throw new Error("try statement without catch or finally");
                                  if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                              }
                          }
                      }
                  },
                  abrupt: function(e, t) {
                      for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                          var i = this.tryEntries[n];
                          if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                              var a = i;
                              break
                          }
                      }
                      a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                      var o = a ? a.completion : {};
                      return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, E) : this.complete(o)
                  },
                  complete: function(e, t) {
                      if ("throw" === e.type) throw e.arg;
                      return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), E
                  },
                  finish: function(e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), E
                      }
                  },
                  catch: function(e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.tryLoc === e) {
                              var i = n.completion;
                              if ("throw" === i.type) {
                                  var r = i.arg;
                                  M(n)
                              }
                              return r
                          }
                      }
                      throw new Error("illegal catch attempt")
                  },
                  delegateYield: function(e, t, i) {
                      return this.delegate = {
                          iterator: P(e),
                          resultName: t,
                          nextLoc: i
                      }, "next" === this.method && (this.arg = n), E
                  }
              }
          }

          function v(e, t, n, i) {
              var r = t && t.prototype instanceof g ? t : g,
                  a = Object.create(r.prototype),
                  o = new N(i || []);
              return a._invoke = function(e, t, n) {
                  var i = l;
                  return function(r, a) {
                      if (i === h) throw new Error("Generator is already running");
                      if (i === _) {
                          if ("throw" === r) throw a;
                          return b()
                      }
                      for (n.method = r, n.arg = a;;) {
                          var o = n.delegate;
                          if (o) {
                              var u = y(o, n);
                              if (u) {
                                  if (u === E) continue;
                                  return u
                              }
                          }
                          if ("next" === n.method) n.sent = n._sent = n.arg;
                          else if ("throw" === n.method) {
                              if (i === l) throw i = _, n.arg;
                              n.dispatchException(n.arg)
                          } else "return" === n.method && n.abrupt("return", n.arg);
                          i = h;
                          var s = D(e, t, n);
                          if ("normal" === s.type) {
                              if (i = n.done ? _ : f, s.arg === E) continue;
                              return {
                                  value: s.arg,
                                  done: n.done
                              }
                          }
                          "throw" === s.type && (i = _, n.method = "throw", n.arg = s.arg)
                      }
                  }
              }(e, n, o), a
          }

          function D(e, t, n) {
              try {
                  return {
                      type: "normal",
                      arg: e.call(t, n)
                  }
              } catch (e) {
                  return {
                      type: "throw",
                      arg: e
                  }
              }
          }

          function g() {}

          function O() {}

          function m() {}

          function C(e) {
              ["next", "throw", "return"].forEach(function(t) {
                  e[t] = function(e) {
                      return this._invoke(t, e)
                  }
              })
          }

          function R(e) {
              var t;
              this._invoke = function(n, i) {
                  function a() {
                      return new Promise(function(t, a) {
                          ! function t(n, i, a, o) {
                              var u = D(e[n], e, i);
                              if ("throw" !== u.type) {
                                  var s = u.arg,
                                      d = s.value;
                                  return d && "object" == typeof d && r.call(d, "__await") ? Promise.resolve(d.__await).then(function(e) {
                                      t("next", e, a, o)
                                  }, function(e) {
                                      t("throw", e, a, o)
                                  }) : Promise.resolve(d).then(function(e) {
                                      s.value = e, a(s)
                                  }, function(e) {
                                      return t("throw", e, a, o)
                                  })
                              }
                              o(u.arg)
                          }(n, i, t, a)
                      })
                  }
                  return t = t ? t.then(a, a) : a()
              }
          }

          function y(e, t) {
              var i = e.iterator[t.method];
              if (i === n) {
                  if (t.delegate = null, "throw" === t.method) {
                      if (e.iterator.return && (t.method = "return", t.arg = n, y(e, t), "throw" === t.method)) return E;
                      t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                  }
                  return E
              }
              var r = D(i, e.iterator, t.arg);
              if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, E;
              var a = r.arg;
              return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, E) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, E)
          }

          function T(e) {
              var t = {
                  tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
          }

          function M(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t
          }

          function N(e) {
              this.tryEntries = [{
                  tryLoc: "root"
              }], e.forEach(T, this), this.reset(!0)
          }

          function P(e) {
              if (e) {
                  var t = e[o];
                  if (t) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                      var i = -1,
                          a = function t() {
                              for (; ++i < e.length;)
                                  if (r.call(e, i)) return t.value = e[i], t.done = !1, t;
                              return t.value = n, t.done = !0, t
                          };
                      return a.next = a
                  }
              }
              return {
                  next: b
              }
          }

          function b() {
              return {
                  value: n,
                  done: !0
              }
          }
      }(function() {
          return this
      }() || Function("return this")())
  }, function(e, t, n) {
      n(133), e.exports = n(0).Object.assign
  }, function(e, t, n) {
      var i = n(3);
      i(i.S + i.F, "Object", {
          assign: n(134)
      })
  }, function(e, t, n) {
      "use strict";
      var i = n(30),
          r = n(60),
          a = n(37),
          o = n(18),
          u = n(45),
          s = Object.assign;
      e.exports = !s || n(14)(function() {
          var e = {},
              t = {},
              n = Symbol(),
              i = "abcdefghijklmnopqrst";
          return e[n] = 7, i.split("").forEach(function(e) {
              t[e] = e
          }), 7 != s({}, e)[n] || Object.keys(s({}, t)).join("") != i
      }) ? function(e, t) {
          for (var n = o(e), s = arguments.length, d = 1, c = r.f, l = a.f; s > d;)
              for (var f, h = u(arguments[d++]), _ = c ? i(h).concat(c(h)) : i(h), E = _.length, p = 0; E > p;) l.call(h, f = _[p++]) && (n[f] = h[f]);
          return n
      } : s
  }, function(e, t, n) {
      e.exports = n(136)
  }, function(e, t, n) {
      n(21), n(34), e.exports = n(61).f("iterator")
  }, function(e, t, n) {
      e.exports = n(138)
  }, function(e, t, n) {
      n(139), n(51), n(142), n(143), e.exports = n(0).Symbol
  }, function(e, t, n) {
      "use strict";
      var i = n(2),
          r = n(13),
          a = n(7),
          o = n(3),
          u = n(78),
          s = n(62).KEY,
          d = n(14),
          c = n(55),
          l = n(31),
          f = n(40),
          h = n(4),
          _ = n(61),
          E = n(63),
          p = n(140),
          S = n(91),
          A = n(8),
          I = n(5),
          v = n(12),
          D = n(48),
          g = n(27),
          O = n(38),
          m = n(141),
          C = n(47),
          R = n(6),
          y = n(30),
          T = C.f,
          M = R.f,
          N = m.f,
          P = i.Symbol,
          b = i.JSON,
          k = b && b.stringify,
          w = h("_hidden"),
          L = h("toPrimitive"),
          V = {}.propertyIsEnumerable,
          U = c("symbol-registry"),
          x = c("symbols"),
          G = c("op-symbols"),
          W = Object.prototype,
          F = "function" == typeof P,
          H = i.QObject,
          K = !H || !H.prototype || !H.prototype.findChild,
          B = a && d(function() {
              return 7 != O(M({}, "a", {
                  get: function() {
                      return M(this, "a", {
                          value: 7
                      }).a
                  }
              })).a
          }) ? function(e, t, n) {
              var i = T(W, t);
              i && delete W[t], M(e, t, n), i && e !== W && M(W, t, i)
          } : M,
          j = function(e) {
              var t = x[e] = O(P.prototype);
              return t._k = e, t
          },
          Q = F && "symbol" == typeof P.iterator ? function(e) {
              return "symbol" == typeof e
          } : function(e) {
              return e instanceof P
          },
          Y = function(e, t, n) {
              return e === W && Y(G, t, n), A(e), t = D(t, !0), A(n), r(x, t) ? (n.enumerable ? (r(e, w) && e[w][t] && (e[w][t] = !1), n = O(n, {
                  enumerable: g(0, !1)
              })) : (r(e, w) || M(e, w, g(1, {})), e[w][t] = !0), B(e, t, n)) : M(e, t, n)
          },
          X = function(e, t) {
              A(e);
              for (var n, i = p(t = v(t)), r = 0, a = i.length; a > r;) Y(e, n = i[r++], t[n]);
              return e
          },
          q = function(e) {
              var t = V.call(this, e = D(e, !0));
              return !(this === W && r(x, e) && !r(G, e)) && (!(t || !r(this, e) || !r(x, e) || r(this, w) && this[w][e]) || t)
          },
          J = function(e, t) {
              if (e = v(e), t = D(t, !0), e !== W || !r(x, t) || r(G, t)) {
                  var n = T(e, t);
                  return !n || !r(x, t) || r(e, w) && e[w][t] || (n.enumerable = !0), n
              }
          },
          Z = function(e) {
              for (var t, n = N(v(e)), i = [], a = 0; n.length > a;) r(x, t = n[a++]) || t == w || t == s || i.push(t);
              return i
          },
          z = function(e) {
              for (var t, n = e === W, i = N(n ? G : v(e)), a = [], o = 0; i.length > o;) !r(x, t = i[o++]) || n && !r(W, t) || a.push(x[t]);
              return a
          };
      F || (u((P = function() {
          if (this instanceof P) throw TypeError("Symbol is not a constructor!");
          var e = f(arguments.length > 0 ? arguments[0] : void 0),
              t = function(n) {
                  this === W && t.call(G, n), r(this, w) && r(this[w], e) && (this[w][e] = !1), B(this, e, g(1, n))
              };
          return a && K && B(W, e, {
              configurable: !0,
              set: t
          }), j(e)
      }).prototype, "toString", function() {
          return this._k
      }), C.f = J, R.f = Y, n(92).f = m.f = Z, n(37).f = q, n(60).f = z, a && !n(29) && u(W, "propertyIsEnumerable", q, !0), _.f = function(e) {
          return j(h(e))
      }), o(o.G + o.W + o.F * !F, {
          Symbol: P
      });
      for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; $.length > ee;) h($[ee++]);
      for (var te = y(h.store), ne = 0; te.length > ne;) E(te[ne++]);
      o(o.S + o.F * !F, "Symbol", {
          for: function(e) {
              return r(U, e += "") ? U[e] : U[e] = P(e)
          },
          keyFor: function(e) {
              if (!Q(e)) throw TypeError(e + " is not a symbol!");
              for (var t in U)
                  if (U[t] === e) return t
          },
          useSetter: function() {
              K = !0
          },
          useSimple: function() {
              K = !1
          }
      }), o(o.S + o.F * !F, "Object", {
          create: function(e, t) {
              return void 0 === t ? O(e) : X(O(e), t)
          },
          defineProperty: Y,
          defineProperties: X,
          getOwnPropertyDescriptor: J,
          getOwnPropertyNames: Z,
          getOwnPropertySymbols: z
      }), b && o(o.S + o.F * (!F || d(function() {
          var e = P();
          return "[null]" != k([e]) || "{}" != k({
              a: e
          }) || "{}" != k(Object(e))
      })), "JSON", {
          stringify: function(e) {
              for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);
              if (n = t = i[1], (I(t) || void 0 !== e) && !Q(e)) return S(t) || (t = function(e, t) {
                  if ("function" == typeof n && (t = n.call(this, e, t)), !Q(t)) return t
              }), i[1] = t, k.apply(b, i)
          }
      }), P.prototype[L] || n(11)(P.prototype, L, P.prototype.valueOf), l(P, "Symbol"), l(Math, "Math", !0), l(i.JSON, "JSON", !0)
  }, function(e, t, n) {
      var i = n(30),
          r = n(60),
          a = n(37);
      e.exports = function(e) {
          var t = i(e),
              n = r.f;
          if (n)
              for (var o, u = n(e), s = a.f, d = 0; u.length > d;) s.call(e, o = u[d++]) && t.push(o);
          return t
      }
  }, function(e, t, n) {
      var i = n(12),
          r = n(92).f,
          a = {}.toString,
          o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      e.exports.f = function(e) {
          return o && "[object Window]" == a.call(e) ? function(e) {
              try {
                  return r(e)
              } catch (e) {
                  return o.slice()
              }
          }(e) : r(i(e))
      }
  }, function(e, t, n) {
      n(63)("asyncIterator")
  }, function(e, t, n) {
      n(63)("observable")
  }, function(e, t, n) {
      n(51), n(21), n(34), n(145), n(151), n(154), n(156), e.exports = n(0).Map
  }, function(e, t, n) {
      "use strict";
      var i = n(146),
          r = n(93);
      e.exports = n(147)("Map", function(e) {
          return function() {
              return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
      }, {
          get: function(e) {
              var t = i.getEntry(r(this, "Map"), e);
              return t && t.v
          },
          set: function(e, t) {
              return i.def(r(this, "Map"), 0 === e ? 0 : e, t)
          }
      }, i, !0)
  }, function(e, t, n) {
      "use strict";
      var i = n(6).f,
          r = n(38),
          a = n(59),
          o = n(9),
          u = n(57),
          s = n(32),
          d = n(53),
          c = n(82),
          l = n(89),
          f = n(7),
          h = n(62).fastKey,
          _ = n(93),
          E = f ? "_s" : "size",
          p = function(e, t) {
              var n, i = h(t);
              if ("F" !== i) return e._i[i];
              for (n = e._f; n; n = n.n)
                  if (n.k == t) return n
          };
      e.exports = {
          getConstructor: function(e, t, n, d) {
              var c = e(function(e, i) {
                  u(e, c, t, "_i"), e._t = t, e._i = r(null), e._f = void 0, e._l = void 0, e[E] = 0, null != i && s(i, n, e[d], e)
              });
              return a(c.prototype, {
                  clear: function() {
                      for (var e = _(this, t), n = e._i, i = e._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                      e._f = e._l = void 0, e[E] = 0
                  },
                  delete: function(e) {
                      var n = _(this, t),
                          i = p(n, e);
                      if (i) {
                          var r = i.n,
                              a = i.p;
                          delete n._i[i.i], i.r = !0, a && (a.n = r), r && (r.p = a), n._f == i && (n._f = r), n._l == i && (n._l = a), n[E]--
                      }
                      return !!i
                  },
                  forEach: function(e) {
                      _(this, t);
                      for (var n, i = o(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                          for (i(n.v, n.k, this); n && n.r;) n = n.p
                  },
                  has: function(e) {
                      return !!p(_(this, t), e)
                  }
              }), f && i(c.prototype, "size", {
                  get: function() {
                      return _(this, t)[E]
                  }
              }), c
          },
          def: function(e, t, n) {
              var i, r, a = p(e, t);
              return a ? a.v = n : (e._l = a = {
                  i: r = h(t, !0),
                  k: t,
                  v: n,
                  p: i = e._l,
                  n: void 0,
                  r: !1
              }, e._f || (e._f = a), i && (i.n = a), e[E]++, "F" !== r && (e._i[r] = a)), e
          },
          getEntry: p,
          setStrong: function(e, t, n) {
              d(e, t, function(e, n) {
                  this._t = _(e, t), this._k = n, this._l = void 0
              }, function() {
                  for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                  return this._t && (this._l = t = t ? t.n : this._t._f) ? c(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, c(1))
              }, n ? "entries" : "values", !n, !0), l(t)
          }
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(2),
          r = n(3),
          a = n(62),
          o = n(14),
          u = n(11),
          s = n(59),
          d = n(32),
          c = n(57),
          l = n(5),
          f = n(31),
          h = n(6).f,
          _ = n(148)(0),
          E = n(7);
      e.exports = function(e, t, n, p, S, A) {
          var I = i[e],
              v = I,
              D = S ? "set" : "add",
              g = v && v.prototype,
              O = {};
          return E && "function" == typeof v && (A || g.forEach && !o(function() {
              (new v).entries().next()
          })) ? (v = t(function(t, n) {
              c(t, v, e, "_c"), t._c = new I, null != n && d(n, S, t[D], t)
          }), _("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
              var t = "add" == e || "set" == e;
              e in g && (!A || "clear" != e) && u(v.prototype, e, function(n, i) {
                  if (c(this, v, e), !t && A && !l(n)) return "get" == e && void 0;
                  var r = this._c[e](0 === n ? 0 : n, i);
                  return t ? this : r
              })
          }), A || h(v.prototype, "size", {
              get: function() {
                  return this._c.size
              }
          })) : (v = p.getConstructor(t, e, S, D), s(v.prototype, n), a.NEED = !0), f(v, e), O[e] = v, r(r.G + r.W + r.F, O), A || p.setStrong(v, e, S), v
      }
  }, function(e, t, n) {
      var i = n(9),
          r = n(45),
          a = n(18),
          o = n(39),
          u = n(149);
      e.exports = function(e, t) {
          var n = 1 == e,
              s = 2 == e,
              d = 3 == e,
              c = 4 == e,
              l = 6 == e,
              f = 5 == e || l,
              h = t || u;
          return function(t, u, _) {
              for (var E, p, S = a(t), A = r(S), I = i(u, _, 3), v = o(A.length), D = 0, g = n ? h(t, v) : s ? h(t, 0) : void 0; v > D; D++)
                  if ((f || D in A) && (p = I(E = A[D], D, S), e))
                      if (n) g[D] = p;
                      else if (p) switch (e) {
                  case 3:
                      return !0;
                  case 5:
                      return E;
                  case 6:
                      return D;
                  case 2:
                      g.push(E)
              } else if (c) return !1;
              return l ? -1 : d || c ? c : g
          }
      }
  }, function(e, t, n) {
      var i = n(150);
      e.exports = function(e, t) {
          return new(i(e))(t)
      }
  }, function(e, t, n) {
      var i = n(5),
          r = n(91),
          a = n(4)("species");
      e.exports = function(e) {
          var t;
          return r(e) && ("function" != typeof(t = e.constructor) || t !== Array && !r(t.prototype) || (t = void 0), i(t) && null === (t = t[a]) && (t = void 0)), void 0 === t ? Array : t
      }
  }, function(e, t, n) {
      var i = n(3);
      i(i.P + i.R, "Map", {
          toJSON: n(152)("Map")
      })
  }, function(e, t, n) {
      var i = n(41),
          r = n(153);
      e.exports = function(e) {
          return function() {
              if (i(this) != e) throw TypeError(e + "#toJSON isn't generic");
              return r(this)
          }
      }
  }, function(e, t, n) {
      var i = n(32);
      e.exports = function(e, t) {
          var n = [];
          return i(e, !1, n.push, n, t), n
      }
  }, function(e, t, n) {
      n(155)("Map")
  }, function(e, t, n) {
      "use strict";
      var i = n(3);
      e.exports = function(e) {
          i(i.S, e, {
              of: function() {
                  for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                  return new this(t)
              }
          })
      }
  }, function(e, t, n) {
      n(157)("Map")
  }, function(e, t, n) {
      "use strict";
      var i = n(3),
          r = n(28),
          a = n(9),
          o = n(32);
      e.exports = function(e) {
          i(i.S, e, {
              from: function(e) {
                  var t, n, i, u, s = arguments[1];
                  return r(this), (t = void 0 !== s) && r(s), null == e ? new this : (n = [], t ? (i = 0, u = a(s, arguments[2], 2), o(e, !1, function(e) {
                      n.push(u(e, i++))
                  })) : o(e, !1, n.push, n), new this(n))
              }
          })
      }
  }, function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.SOCKET_STATE = void 0, t.SOCKET_STATE = {
          audio: {
              decode: !1,
              encode: !1
          },
          video: {
              decode: !1,
              encode: !1
          }
      }
  }, function(e, t, n) {
      var i = n(160),
          r = n(161),
          a = n(168);
      e.exports = function(e) {
          return i(e) || r(e) || a()
      }
  }, function(e, t) {
      e.exports = function(e) {
          if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n
          }
      }
  }, function(e, t, n) {
      var i = n(96),
          r = n(165);
      e.exports = function(e) {
          if (r(Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) return i(e)
      }
  }, function(e, t, n) {
      n(21), n(163), e.exports = n(0).Array.from
  }, function(e, t, n) {
      "use strict";
      var i = n(9),
          r = n(3),
          a = n(18),
          o = n(83),
          u = n(84),
          s = n(39),
          d = n(164),
          c = n(71);
      r(r.S + r.F * !n(90)(function(e) {
          Array.from(e)
      }), "Array", {
          from: function(e) {
              var t, n, r, l, f = a(e),
                  h = "function" == typeof this ? this : Array,
                  _ = arguments.length,
                  E = _ > 1 ? arguments[1] : void 0,
                  p = void 0 !== E,
                  S = 0,
                  A = c(f);
              if (p && (E = i(E, _ > 2 ? arguments[2] : void 0, 2)), null == A || h == Array && u(A))
                  for (n = new h(t = s(f.length)); t > S; S++) d(n, S, p ? E(f[S], S) : f[S]);
              else
                  for (l = A.call(f), n = new h; !(r = l.next()).done; S++) d(n, S, p ? o(l, E, [r.value, S], !0) : r.value);
              return n.length = S, n
          }
      })
  }, function(e, t, n) {
      "use strict";
      var i = n(6),
          r = n(27);
      e.exports = function(e, t, n) {
          t in e ? i.f(e, t, r(0, n)) : e[t] = n
      }
  }, function(e, t, n) {
      e.exports = n(166)
  }, function(e, t, n) {
      n(34), n(21), e.exports = n(167)
  }, function(e, t, n) {
      var i = n(41),
          r = n(4)("iterator"),
          a = n(17);
      e.exports = n(0).isIterable = function(e) {
          var t = Object(e);
          return void 0 !== t[r] || "@@iterator" in t || a.hasOwnProperty(i(t))
      }
  }, function(e, t) {
      e.exports = function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance")
      }
  }, function(e, t) {
      e.exports = function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }
  }, function(e, t, n) {
      e.exports = n(171)
  }, function(e, t, n) {
      n(172), e.exports = n(0).Object.getPrototypeOf
  }, function(e, t, n) {
      var i = n(18),
          r = n(81);
      n(50)("getPrototypeOf", function() {
          return function(e) {
              return r(i(e))
          }
      })
  }, function(e, t, n) {
      n(174), e.exports = n(0).Object.setPrototypeOf
  }, function(e, t, n) {
      var i = n(3);
      i(i.S, "Object", {
          setPrototypeOf: n(175).set
      })
  }, function(e, t, n) {
      var i = n(5),
          r = n(8),
          a = function(e, t) {
              if (r(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
          };
      e.exports = {
          set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, i) {
              try {
                  (i = n(9)(Function.call, n(47).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
              } catch (e) {
                  t = !0
              }
              return function(e, n) {
                  return a(e, n), t ? e.__proto__ = n : i(e, n), e
              }
          }({}, !1) : void 0),
          check: a
      }
  }, function(e, t, n) {
      e.exports = n(177)
  }, function(e, t, n) {
      n(178);
      var i = n(0).Object;
      e.exports = function(e, t) {
          return i.create(e, t)
      }
  }, function(e, t, n) {
      var i = n(3);
      i(i.S, "Object", {
          create: n(38)
      })
  }, function(e, t, n) {
      var i = n(97);

      function r(t, n) {
          return e.exports = r = i || function(e, t) {
              return e.__proto__ = t, e
          }, r(t, n)
      }
      e.exports = r
  }, function(e, t, n) {
      (function(e) {
          ! function(n, i) {
              "use strict";
              var r = {};
              n.PubSub = r;
              var a = n.define;
              ! function(e) {
                  var t = {},
                      n = -1;

                  function i(e) {
                      var t;
                      for (t in e)
                          if (e.hasOwnProperty(t)) return !0;
                      return !1
                  }

                  function r(e, t, n) {
                      try {
                          e(t, n)
                      } catch (e) {
                          setTimeout(function(e) {
                              return function() {
                                  throw e
                              }
                          }(e), 0)
                      }
                  }

                  function a(e, t, n) {
                      e(t, n)
                  }

                  function o(e, n, i, o) {
                      var u, s = t[n],
                          d = o ? a : r;
                      if (t.hasOwnProperty(n))
                          for (u in s) s.hasOwnProperty(u) && d(s[u], e, i)
                  }

                  function u(e, n, r, a) {
                      var u = function(e, t, n) {
                          return function() {
                              var i = String(e),
                                  r = i.lastIndexOf(".");
                              for (o(e, e, t, n); - 1 !== r;) r = (i = i.substr(0, r)).lastIndexOf("."), o(e, i, t, n)
                          }
                      }(e, n, a);
                      return !! function(e) {
                          for (var n = String(e), r = Boolean(t.hasOwnProperty(n) && i(t[n])), a = n.lastIndexOf("."); !r && -1 !== a;) a = (n = n.substr(0, a)).lastIndexOf("."), r = Boolean(t.hasOwnProperty(n) && i(t[n]));
                          return r
                      }(e) && (!0 === r ? u() : setTimeout(u, 0), !0)
                  }
                  e.publish = function(t, n) {
                      return u(t, n, !1, e.immediateExceptions)
                  }, e.publishSync = function(t, n) {
                      return u(t, n, !0, e.immediateExceptions)
                  }, e.subscribe = function(e, i) {
                      if ("function" != typeof i) return !1;
                      t.hasOwnProperty(e) || (t[e] = {});
                      var r = "uid_" + String(++n);
                      return t[e][r] = i, r
                  }, e.subscribeOnce = function(t, n) {
                      var i = e.subscribe(t, function() {
                          e.unsubscribe(i), n.apply(this, arguments)
                      });
                      return e
                  }, e.clearAllSubscriptions = function() {
                      t = {}
                  }, e.clearSubscriptions = function(e) {
                      var n;
                      for (n in t) t.hasOwnProperty(n) && 0 === n.indexOf(e) && delete t[n]
                  }, e.unsubscribe = function(n) {
                      var i, r, a, o = "string" == typeof n && (t.hasOwnProperty(n) || function(e) {
                              var n;
                              for (n in t)
                                  if (t.hasOwnProperty(n) && 0 === n.indexOf(e)) return !0;
                              return !1
                          }(n)),
                          u = !o && "string" == typeof n,
                          s = "function" == typeof n,
                          d = !1;
                      if (!o) {
                          for (i in t)
                              if (t.hasOwnProperty(i)) {
                                  if (r = t[i], u && r[n]) {
                                      delete r[n], d = n;
                                      break
                                  }
                                  if (s)
                                      for (a in r) r.hasOwnProperty(a) && r[a] === n && (delete r[a], d = !0)
                              } return d
                      }
                      e.clearSubscriptions(n)
                  }
              }(r), "function" == typeof a && a.amd ? a(function() {
                  return r
              }) : (void 0 !== e && e.exports && (t = e.exports = r), t.PubSub = r, e.exports = t = r)
          }("object" == typeof window && window || this)
      }).call(this, n(181)(e))
  }, function(e, t) {
      e.exports = function(e) {
          return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                  return e.l
              }
          }), Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                  return e.i
              }
          }), e.webpackPolyfill = 1), e
      }
  }, function(e, t, n) {
      var i = n(183);
      e.exports = function(e, t) {
          var n;
          if ("function" != typeof t) throw new TypeError("Expected a function");
          return e = i(e),
              function() {
                  return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
              }
      }
  }, function(e, t, n) {
      var i = n(184);
      e.exports = function(e) {
          var t = i(e),
              n = t % 1;
          return t == t ? n ? t - n : t : 0
      }
  }, function(e, t, n) {
      var i = n(99);
      e.exports = function(e) {
          return e ? (e = i(e)) === 1 / 0 || e === -1 / 0 ? 1.7976931348623157e308 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
  }, function(e, t, n) {
      var i = n(36),
          r = n(44);
      e.exports = function(e) {
          return "symbol" == typeof e || r(e) && "[object Symbol]" == i(e)
      }
  }, function(e, t, n) {
      (function(t) {
          var n = "object" == typeof t && t && t.Object === Object && t;
          e.exports = n
      }).call(this, n(102))
  }, function(e, t, n) {
      var i = n(100),
          r = Object.prototype,
          a = r.hasOwnProperty,
          o = r.toString,
          u = i ? i.toStringTag : void 0;
      e.exports = function(e) {
          var t = a.call(e, u),
              n = e[u];
          try {
              e[u] = void 0;
              var i = !0
          } catch (e) {}
          var r = o.call(e);
          return i && (t ? e[u] = n : delete e[u]), r
      }
  }, function(e, t) {
      var n = Object.prototype.toString;
      e.exports = function(e) {
          return n.call(e)
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.Lock = void 0;
      var r = i(n(24)),
          a = i(n(25)),
          o = 1,
          u = function() {
              function e(t, n) {
                  if ((0, r.default)(this, e), !(t instanceof Int32Array && n | 0 === n && n >= 0 && n + o <= t.length)) throw new Error("Bad arguments to Lock constructor: ".concat(t, " ").concat(n));
                  this.iab = t, this.ibase = n
              }
              return (0, a.default)(e, [{
                  key: "lock",
                  value: function() {
                      var e, t = this.iab,
                          n = this.ibase;
                      if (0 !== (e = Atomics.compareExchange(t, n, 0, 1)))
                          do {
                              2 !== e && 0 === Atomics.compareExchange(t, n, 1, 2) || Atomics.wait(t, n, 2, Number.POSITIVE_INFINITY)
                          } while (0 !== (e = Atomics.compareExchange(t, n, 0, 2)))
                  }
              }, {
                  key: "tryLock",
                  value: function() {
                      var e = this.iab,
                          t = this.ibase;
                      return 0 === Atomics.compareExchange(e, t, 0, 1)
                  }
              }, {
                  key: "unlock",
                  value: function() {
                      var e = this.iab,
                          t = this.ibase;
                      1 !== Atomics.sub(e, t, 1) && (Atomics.store(e, t, 0), Atomics.wake(e, t, 1))
                  }
              }, {
                  key: "toString",
                  value: function() {
                      return "Lock:{ibase:" + this.ibase + "}"
                  }
              }], [{
                  key: "initialize",
                  value: function(e, t) {
                      if (!(e instanceof Int32Array && t | 0 === t && t >= 0 && t + o <= e.length)) throw new Error("Bad arguments to Lock constructor: ".concat(e, " ").concat(t));
                      return Atomics.store(e, t, 0), t
                  }
              }]), e
          }();
      t.Lock = u
  }, function(e, t, n) {
      var i = n(36),
          r = n(42);
      e.exports = function(e) {
          if (!r(e)) return !1;
          var t = i(e);
          return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }
  }, function(e, t, n) {
      "use strict";
      (function(e) {
          var i = n(20),
              r = n(1);
          Object.defineProperty(t, "__esModule", {
              value: !0
          }), t.default = void 0;
          var a, o, u, s, d, c = r(n(108)),
              l = r(n(106)),
              f = r(n(43)),
              h = r(n(15)),
              _ = r(n(16)),
              E = r(n(10)),
              p = r(n(103)),
              S = r(n(23)),
              A = r(n(19)),
              I = i(n(22)),
              v = r(n(104)),
              D = r(n(195)),
              g = r(n(35)),
              O = n(73),
              m = (0, S.default)("sdk.remoteControl");

          function k(e) {
              var t = this;
              this.dom = e.dom, this.socketURL = e.socketURL, this.meetingID = e.meetingID, this.condID = e.condID, this.blobSocket = null;
              var n = this._keyMouseEventHandler.bind(this);
              this.keyMouseEventHandler = function(e) {
                  t.keyMouseFilters(e).then(function(e) {
                      n(e)
                  })
              }, this.keyMouseEventHandlerThrottle = (0, p.default)(function(e) {
                  t.keyMouseEventHandler(e)
              }, 1e3 / 24), this.pasteOnDocument = this._pasteOnDocument.bind(this), this.copyOnDocument = this._copyOnDocument.bind(this), this.cutOnDocument = this._cutOnDocument.bind(this), this.focus = this._focus.bind(this), this.PUBSUB_SHARING_PARAM_INFO_TOKEN = null, this.preventDefault = this._preventDefault.bind(this), this.positionMap = {
                  canvas: {
                      offsetX: 0,
                      offsetY: 0
                  },
                  src: {
                      x: 0,
                      y: 0,
                      w: 0,
                      h: 0,
                      scaleWidth: 0,
                      scaleHeight: 0
                  },
                  dst: {
                      x: 0,
                      y: 0,
                      w: 0,
                      h: 0
                  }
              }, this.blockedKeyboardEventOfPaste = [], this.keydownupMergeRemoveMap = {}, this.keyMouseEventHandlerFilter_every_keyup_must_have_keydown_before_Map = {}, this.PASTE_MAX_BYTE_LENGTH = 64e3, this.currentMousePositionProps = {
                  clientX: 0,
                  clientY: 0,
                  x2video: 0,
                  y2video: 0
              }, this.isControllerNow = !0, this.remoteOS = O.OS_ENUM.UNKNOWN, this.localOS = this.getLocalOS(), this._blockedCopyKeyboardList = []
          }
          k.prototype = {
              start: function() {
                  var t, e = this;
                  return new E.default((t = (0, _.default)(h.default.mark(function t(n, i) {
                      return h.default.wrap(function(t) {
                          for (;;) switch (t.prev = t.next) {
                              case 0:
                                  return t.prev = 0, m("remote control start"), e.modifyDom(), e.bindEvent(), e.subscribeSharingWidthOrHeightChange(), e.checkAndClearKeydownupMergeRemoveMap(), t.next = 8, e.connectSocket();
                              case 8:
                                  e.sendPostionPDU(), e.socketBlobMessageHandler(), n(!0), t.next = 16;
                                  break;
                              case 13:
                                  t.prev = 13, t.t0 = t.catch(0), i(t.t0);
                              case 16:
                              case "end":
                                  return t.stop()
                          }
                      }, t, this, [
                          [0, 13]
                      ])
                  })), function(e, n) {
                      return t.apply(this, arguments)
                  }))
              },
              destroy: function() {
                  var e = this;
                  return new E.default(function(t, n) {
                      try {
                          m("destroy remote control"), e.unbindEvent(), e.uncheckAndClearKeydownupMergeRemoveMap(), e.destroySocket(), A.default.unsubscribe(e.PUBSUB_SHARING_PARAM_INFO_TOKEN), t(!0)
                      } catch (e) {
                          m(e), t(!1)
                      }
                  })
              },
              modifyDom: function() {
                  try {
                      this.dom.setAttribute("tabindex", "0"), this.dom.focus()
                  } catch (e) {}
              },
              _focus: function() {
                  this.dom.focus()
              },
              getLocalOS: function() {
                  var t = e.navigator.platform;
                  return /win/i.test(t) ? O.OS_ENUM.WIN : /mac/i.test(t) ? O.OS_ENUM.MAC : O.OS_ENUM.UNKNOWN
              },
              setIsControlerNow: function(e) {
                  this.isControllerNow = e
              },
              blobSocketCheckAndSend: function(e) {
                  this.isControllerNow && this.blobSocket.send(e)
              },
              isKeyboardEvent: function(e) {
                  return !!e && e.type && -1 !== ["keydown", "keyup"].indexOf(e.type.toLowerCase())
              },
              isThisKeyIgnoreCase: function(e, t) {
                  return e.key && e.key.toLowerCase() == t.toLowerCase()
              },
              _copyOnDocument: (d = (0, _.default)(h.default.mark(function e(t) {
                  var n;
                  return h.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (this.isFocusNow()) {
                                  e.next = 2;
                                  break
                              }
                              return e.abrupt("return");
                          case 2:
                              if ("done" != (n = this._blockedCopyKeyboardList)[n.length - 1]) {
                                  e.next = 8;
                                  break
                              }
                              return e.abrupt("return");
                          case 8:
                              this._blockedCopyKeyboardList = [], this._blockedCopyKeyboardList.push("done");
                          case 10:
                              m("copyOnDocument", t), this.processMonitorCtrlMetaWithKey("c");
                          case 12:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })), function(e) {
                  return d.apply(this, arguments)
              }),
              _cutOnDocument: (s = (0, _.default)(h.default.mark(function e(t) {
                  return h.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (this.isFocusNow()) {
                                  e.next = 2;
                                  break
                              }
                              return e.abrupt("return");
                          case 2:
                              m("_cutOnDocument", t), this.processMonitorCtrlMetaWithKey("x");
                          case 4:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })), function(e) {
                  return s.apply(this, arguments)
              }),
              processMonitorCtrlMetaWithKey: function(e) {
                  var t = this,
                      a = this.remoteOS === O.OS_ENUM.MAC,
                      o = {
                          t: "keydown",
                          event_type: 1,
                          repeat: !1,
                          alt: !1,
                          shift: !1,
                          capslock: !1,
                          numlock: !0,
                          pduType: 85,
                          ctrl: !a,
                          super: a
                      },
                      u = (0, f.default)({}, o, {
                          charCode: 0,
                          keyCode: a ? 91 : 17,
                          key: a ? "Meta" : "Control"
                      }),
                      s = (0, f.default)({}, o, {
                          charCode: e.charCodeAt(0),
                          keyCode: e.toUpperCase().charCodeAt(0),
                          key: e
                      }),
                      d = (0, f.default)({}, u, {
                          input_event_type: 0
                      }),
                      c = (0, f.default)({}, u, {
                          input_event_type: 2
                      }),
                      l = (0, f.default)({}, s, {
                          input_event_type: 0
                      }),
                      h = (0, f.default)({}, s, {
                          input_event_type: 2
                      }),
                      _ = (0, f.default)({}, u, {
                          t: "keyup",
                          ctrl: !1,
                          super: !1,
                          input_event_type: 1
                      }),
                      E = (0, f.default)({}, s, {
                          t: "keyup",
                          ctrl: !1,
                          super: a,
                          input_event_type: 1
                      });
                  (a ? [d, c, l, h, E, _] : [d, c, l, h, _, E]).forEach(function(e) {
                      t.processEvent(e)
                  })
              },
              isFocusNow: function() {
                  return this.dom === document.activeElement
              },
              _pasteOnDocument: (u = (0, _.default)(h.default.mark(function e(t) {
                  var n, i, r, a, o, u, s, d, c, l, f;
                  return h.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              if (this.isFocusNow()) {
                                  for (n = (t.clipboardData || window.clipboardData).getData("text"), m("_pasteOnDocument", n), i = [], r = 0; r < n.length; r++)
                                      for (a = n[r], o = D.default.encode(a), u = 0; u < o.length; u++) i.push(o.charCodeAt(u));
                                  for (s = new ArrayBuffer(8 + i.length), d = new Uint8Array(s), c = new DataView(s, 4, 4), l = new Uint8Array(s, 8), d[0] = 87, c.setUint32(0, i.length, !0), f = 0; f < i.length; f++) l[f] = i[f];
                                  i.length > this.PASTE_MAX_BYTE_LENGTH ? (this.triggerPasteTextLengthOverflow(), this.dropAllEventFromBlockedKeyboardEventOfPaste()) : (this.blobSocketCheckAndSend(s), this.processMonitorCtrlMetaWithKey("v"))
                              }
                              case 1:
                              case "end":
                                  return e.stop()
                      }
                  }, e, this)
              })), function(e) {
                  return u.apply(this, arguments)
              }),
              onReturnCopiedText: function(e) {
                  !this._onReturnCopiedText_list && (this._onReturnCopiedText_list = []), this._onReturnCopiedText_list.push(e)
              },
              triggerReturnCopiedText: function(e) {
                  this._onReturnCopiedText_list && this._onReturnCopiedText_list.forEach(function(t) {
                      return t(e)
                  })
              },
              onPasteTextLengthOverflow: function(e) {
                  !this._onPasteTextLengthOverflow_list && (this._onPasteTextLengthOverflow_list = []), this._onPasteTextLengthOverflow_list.push(e)
              },
              triggerPasteTextLengthOverflow: function() {
                  this._onPasteTextLengthOverflow_list && this._onPasteTextLengthOverflow_list.forEach(function(e) {
                      return e()
                  })
              },
              dropAllEventFromBlockedKeyboardEventOfPaste: function() {
                  this.blockedKeyboardEventOfPaste = []
              },
              createParamsFromKeyboardEvent: function(e) {
                  return {
                      key: e.key,
                      code: e.code,
                      shiftKey: e.shiftKey,
                      altKey: e.altKey,
                      repeat: e.repeat,
                      charCode: e.charCode,
                      keyCode: e.keyCode,
                      which: e.which,
                      ctrlKey: e.ctrlKey,
                      metaKey: e.metaKey
                  }
              },
              sendAllEventFromBlockedKeyboardEventOfPaste: function() {
                  for (m("blockedKeyboardEventOfPaste.length", this.blockedKeyboardEventOfPaste.length); this.blockedKeyboardEventOfPaste.length > 0;) {
                      var e = this.blockedKeyboardEventOfPaste.shift();
                      this._keyMouseEventHandler(e)
                  }
              },
              _preventDefault: function(e) {
                  if (-1 !== ["keydown", "keyup"].indexOf(e.type))
                      for (var t = ["v", "c", "x"], n = 0; n < t.length; n++)
                          if (e.ctrlKey ^ e.metaKey && this.isThisKeyIgnoreCase(e, t[n])) return;
                  e.preventDefault()
              },
              subscribeSharingWidthOrHeightChange: function() {
                  var e = this;
                  this.PUBSUB_SHARING_PARAM_INFO_TOKEN = A.default.on(I.SHARING_PARAM_INFO_FROM_SOCKET, function(t, n) {
                      m("subscribeSharingWidthOrHeightChange", n.body), e.positionMap.dst.w = n.body.logicWidth, e.positionMap.dst.h = n.body.logicHeight, e.positionMap.src.w = n.body.logicWidth, e.positionMap.src.h = n.body.logicHeight, e.sendPostionPDU()
                  })
              },
              setDstWidthAndHeight: function(e, t) {
                  if (!e || !t) throw new Error("the value of destination sharing video width/height are not correct");
                  this.positionMap.dst.w = e, this.positionMap.dst.h = t
              },
              setSrcWidthAndHeight: function(e, t) {
                  if (!e || !t) throw new Error("the value of source sharing video width/height are not correct");
                  this.positionMap.src.w = e, this.positionMap.src.h = t
              },
              setSrcWidthAndHeightAndSendPDU: function(e, t) {
                  if (!e || !t) throw new Error("the value of source sharing video width/height are not correct");
                  this.positionMap.src.w !== e && this.positionMap.src.h !== t && (this.setSrcWidthAndHeight(e, t), this.sendPostionPDU())
              },
              setSrcOffsetXYAndSendPDU: function(e, t) {
                  e = Math.floor(e), t = Math.floor(t), this.positionMap.canvas.offsetX === e && this.positionMap.canvas.offsetY === t || (this.setSrcOffsetXY(e, t), this.sendPostionPDU())
              },
              setSrcScaleWidthAndHeight: function(e, t) {
                  if (!e || !t) throw new Error("the value of source sharing video scaleWidth/scaleHeight are not correct");
                  this.positionMap.src.scaleWidth = e, this.positionMap.src.scaleHeight = t
              },
              setSrcOffsetXY: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                      n = Math.floor(e),
                      i = Math.floor(t);
                  if (!(0, v.default)(n) && !(0, v.default)(i)) throw new Error("the value of source offset x or y is not correct");
                  this.positionMap.canvas.offsetX = n, this.positionMap.canvas.offsetY = i
              },
              sendPostionPDU: function() {
                  var e = new ArrayBuffer(36),
                      t = new Uint8Array(e),
                      n = new DataView(e, 4),
                      i = new DataView(e, 20);
                  t[0] = 82, n.setInt32(0, this.positionMap.src.x, !0), n.setInt32(4, this.positionMap.src.y, !0), n.setInt32(8, this.positionMap.src.w, !0), n.setInt32(12, this.positionMap.src.h, !0), i.setInt32(0, this.positionMap.dst.x, !0), i.setInt32(4, this.positionMap.dst.y, !0), i.setInt32(8, this.positionMap.dst.w, !0), i.setInt32(12, this.positionMap.dst.h, !0), m("send position pdu");
                  try {
                      this.blobSocket.send(e)
                  } catch (e) {}
              },
              unbindEvent: function() {
                  var e = this.dom;
                  e.removeEventListener("click", this.focus), e.removeEventListener("keydown", this.keyMouseEventHandler), e.removeEventListener("keyup", this.keyMouseEventHandler), document.removeEventListener("paste", this.pasteOnDocument), document.removeEventListener("copy", this.copyOnDocument), document.removeEventListener("cut", this.cutOnDocument), e.removeEventListener("contextmenu", this.preventDefault), e.removeEventListener("wheel", this.preventDefault), e.removeEventListener("dblclick", this.preventDefault), e.removeEventListener("keydown", this.preventDefault), e.removeEventListener("keyup", this.preventDefault), e.removeEventListener("dblclick", this.keyMouseEventHandler), e.removeEventListener("mousedown", this.keyMouseEventHandler), e.removeEventListener("mouseup", this.keyMouseEventHandler), e.removeEventListener("mousemove", this.keyMouseEventHandlerThrottle), e.removeEventListener("wheel", this.keyMouseEventHandler)
              },
              bindEvent: function() {
                  var e = this.dom;
                  m("dom", e), e.addEventListener("click", this.focus), e.addEventListener("keydown", this.keyMouseEventHandler), e.addEventListener("keyup", this.keyMouseEventHandler), document.addEventListener("paste", this.pasteOnDocument), document.addEventListener("copy", this.copyOnDocument), document.addEventListener("cut", this.cutOnDocument), e.addEventListener("contextmenu", this.preventDefault), e.addEventListener("wheel", this.preventDefault), e.addEventListener("dblclick", this.preventDefault), e.addEventListener("keydown", this.preventDefault), e.addEventListener("keyup", this.preventDefault), e.addEventListener("dblclick", this.keyMouseEventHandler), e.addEventListener("mousedown", this.keyMouseEventHandler), e.addEventListener("mouseup", this.keyMouseEventHandler), e.addEventListener("mousemove", this.keyMouseEventHandlerThrottle), e.addEventListener("wheel", this.keyMouseEventHandler)
              },
              recordCurrentMousePosition: function(e) {
                  try {
                      var t = this.positionMap,
                          n = e.clientX,
                          i = e.clientY;
                      (0, f.default)(this.currentMousePositionProps, {
                          clientX: n,
                          clientY: i,
                          x2video: n - t.canvas.offsetX,
                          y2video: i - t.canvas.offsetY
                      })
                  } catch (e) {}
              },
              resolvePosition: function(e) {
                  var t = e.clientX,
                      n = e.clientY,
                      i = this.positionMap;
                  return t -= i.canvas.offsetX, n -= i.canvas.offsetY, t *= i.dst.w / i.src.scaleWidth, n *= i.dst.h / i.src.scaleHeight, {
                      x: t = Math.floor(t),
                      y: n = Math.floor(n)
                  }
              },
              generateBuffer: function(e) {
                  if (void 0 !== e.key && !/^[\x00-\x7F]*$/.test(e.key)) throw new Error("params.key must only contain ascii character");
                  var t = 8;
                  84 === (e = (0, f.default)({
                      v: 0,
                      x: 0,
                      y: 0,
                      dx: 0,
                      dy: 0,
                      repeat: 0
                  }, e)).pduType && (t += 4);
                  var n = new ArrayBuffer(t),
                      i = new Uint8Array(n),
                      r = new DataView(n, 4),
                      a = new DataView(n, 4);
                  if (i[0] = e.pduType, i[1] = 63 & e.input_event_type, 83 === e.pduType) r.setUint16(0, e.x, !0), r.setUint16(2, e.y, !0);
                  else if (84 === e.pduType) a.setInt16(0, e.x, !0), a.setInt16(2, e.y, !0), a.setInt16(4, e.dx, !0), a.setInt16(6, e.dy, !0);
                  else if (85 === e.pduType) {
                      var o = new DataView(n, 4),
                          u = new DataView(n, 6),
                          s = new Uint8Array(n, 2);
                      o.setUint16(0, e.keyCode, !0), u.setUint16(0, e.charCode, !0);
                      var d = {
                              shift: 1,
                              capslock: 2,
                              ctrl: 4,
                              alt: 8,
                              numlock: 16,
                              super: 32
                          },
                          c = 0;
                      (0, l.default)(d).forEach(function(t) {
                          !0 === e[t] && (c += d[t])
                      }), s[0] = c, e.repeat && (i[1] = 32 | i[1])
                  }
                  return n
              },
              processEvent: function(e) {
                  this.blobSocket && this.blobSocketCheckAndSend(this.generateBuffer(e))
              },
              debug: function(e) {
                  var t = {};
                  (85 === e.pduType ? ["t", "keyCode", "charCode", "key"] : ["t", "x", "y", "dx", "dy", "input_event_type"]).forEach(function(n) {
                      t[n] = e[n]
                  }), m("debug", (0, c.default)(t))
              },
              blockedPasteKeyboard: function(e) {
                  var t = this;
                  return new E.default(function(n, i) {
                      t.isKeyboardEvent(e) && t.isPasteEvent(e) ? t.blockedKeyboardEventOfPaste.push(e) : n(e)
                  })
              },
              isPasteEvent: function(e) {
                  var t = this.isThisKeyIgnoreCase(e, "v");
                  return !!(e.ctrlKey ^ e.metaKey && t)
              },
              isCopyEvent: function(e) {
                  var t = this.isThisKeyIgnoreCase(e, "c");
                  return !!(e.ctrlKey ^ e.metaKey && t)
              },
              isCutEvent: function(e) {
                  var t = this.isThisKeyIgnoreCase(e, "x");
                  return !!(e.ctrlKey ^ e.metaKey && t)
              },
              returnNewEventByTransformCtrlKeyOrCommandKey: function(e) {
                  var t = this.createParamsFromKeyboardEvent(e);
                  switch (this.remoteOS) {
                      case O.OS_ENUM.WIN:
                          (0, f.default)(t, {
                              ctrlKey: !0,
                              metaKey: !1
                          });
                          break;
                      case O.OS_ENUM.MAC:
                          (0, f.default)(t, {
                              ctrlKey: !1,
                              metaKey: !0
                          });
                          break;
                      case O.OS_ENUM.UNKNOWN:
                  }
                  return new e.constructor(e.type, t)
              },
              transformCtrlCAndCommandC: function(e) {
                  var t = this,
                      n = this;
                  return new E.default(function(i, r) {
                      t.isKeyboardEvent(e) && (e.ctrlKey || e.metaKey) && n.isThisKeyIgnoreCase(e, "c") ? (n.createParamsFromKeyboardEvent(e), i(n.returnNewEventByTransformCtrlKeyOrCommandKey(e))) : i(e)
                  })
              },
              keyMouseEventHandlerFilter_MatainKeyDownUpMergeMap: function(e) {
                  var t = this;
                  return new E.default(function(n, i) {
                      try {
                          t.isKeyboardEvent(e) && e.key && ("keydown" !== e.type || e.repeat || (t.keydownupMergeRemoveMap[e.key] = {
                              t: +new Date,
                              e: e
                          }), "keydown" === e.type && e.repeat && delete t.keydownupMergeRemoveMap[e.key], "keyup" === e.type && delete t.keydownupMergeRemoveMap[e.key])
                      } catch (e) {
                          m.error(e)
                      }
                      n(e)
                  })
              },
              checkAndClearKeydownupMergeRemoveMap: function() {
                  var e = this;
                  this.checkAndClearKeydownupMergeRemoveMapInterval = setInterval(function() {
                      e._checkAndClearKeydownupMergeRemoveMap(500)
                  }, 100)
              },
              _checkAndClearKeydownupMergeRemoveMap: function(e) {
                  var t = this,
                      n = this.keydownupMergeRemoveMap;
                  (0, l.default)(n).forEach(function(i) {
                      var r = n[i];
                      if (+new Date - r.t >= e) {
                          var a = new r.e.constructor("keyup", r.e);
                          try {
                              t._keyMouseEventHandler(a)
                          } catch (e) {}
                          delete t.keydownupMergeRemoveMap[i]
                      }
                  })
              },
              uncheckAndClearKeydownupMergeRemoveMap: function() {
                  this._checkAndClearKeydownupMergeRemoveMap(0), clearInterval(this.checkAndClearKeydownupMergeRemoveMapInterval)
              },
              keyMouseFilters: function(e) {
                  var t = this;
                  return new E.default(function(t, n) {
                      t(e)
                  }).then(function(e) {
                      return t.blockedPasteKeyboard(e)
                  }).then(function(e) {
                      return t.blockedSingleMetaKey(e)
                  }).then(function(e) {
                      return t.blockedCopyKeyboard(e)
                  }).then(function(e) {
                      return t.blockedCutKeyboard(e)
                  }).then(function(e) {
                      return t.keyMouseEventHandlerFilter_MatainKeyDownUpMergeMap(e)
                  }).then(function(e) {
                      return t.blockedSomeKeyboardEventNotHaveKeydownBefore(e)
                  }).then(function(e) {
                      return t.keyMouseEventHandlerFilter_EVERY_KEYUP_MUST_HAVE_KEYDOWN_BEFORE(e)
                  })
              },
              blockedSingleMetaKey: function(e) {
                  var t = this;
                  return new E.default(function(n, i) {
                      t.isKeyboardEvent(e) && e.key && (/command/i.test(e.key) || /meta/i.test(e.key) || /control/i.test(e.key)) && !e.shiftKey && !e.altKey && e.ctrlKey ^ e.metaKey || n(e)
                  })
              },
              blockedCutKeyboard: function(e) {
                  var t = this;
                  return new E.default(function(n, i) {
                      t.isKeyboardEvent(e) && t.isCutEvent(e) || n(e)
                  })
              },
              blockedCopyKeyboard: function(e) {
                  var t = this;
                  return new E.default(function(n, i) {
                      t.isKeyboardEvent(e) && t.isCopyEvent(e) ? t._blockedCopyKeyboardList.push(e) : n(e)
                  })
              },
              blockedSomeKeyboardEventNotHaveKeydownBefore: function(e) {
                  var t = this;
                  return new E.default(function(n, i) {
                      if (t.isKeyboardEvent(e) && e.key) {
                          var r = !1;
                          if (["x", "c", "v"].forEach(function(n) {
                                  t.isThisKeyIgnoreCase(e, n) && (r = !0)
                              }), "keyup" === e.type && r && !t.keyMouseEventHandlerFilter_every_keyup_must_have_keydown_before_Map[e.key]) return
                      }
                      n(e)
                  })
              },
              keyMouseEventHandlerFilter_EVERY_KEYUP_MUST_HAVE_KEYDOWN_BEFORE: function(e) {
                  var t = this;
                  return new E.default(function(n, i) {
                      try {
                          if (t.isKeyboardEvent(e) && e.key && ("keydown" === e.type && (t.keyMouseEventHandlerFilter_every_keyup_must_have_keydown_before_Map[e.key] = e), "keyup" === e.type)) {
                              var r = !!t.keyMouseEventHandlerFilter_every_keyup_must_have_keydown_before_Map[e.key];
                              delete t.keyMouseEventHandlerFilter_every_keyup_must_have_keydown_before_Map[e.key];
                              var a = !1;
                              if (["meta"].forEach(function(n) {
                                      t.isThisKeyIgnoreCase(e, n) && (a = !0)
                                  }), !r && !a) {
                                  m.warn("keyup trigger, but no keydown before");
                                  var o = new e.constructor("keydown", e);
                                  t._keyMouseEventHandler(o)
                              }
                          }
                      } catch (e) {
                          m.error(e)
                      }
                      n(e)
                  })
              },
              _keyMouseEventHandler: function(e) {
                  this.isKeyboardEvent(e) && m("_keyMouseEventHandler keyboard", e);
                  var t = {},
                      n = {
                          keydown: 0,
                          keyup: 1,
                          keychar: 2
                      },
                      i = {
                          mousemove: 0,
                          mousedown: {
                              left: 1,
                              right: 4,
                              middle: 7
                          },
                          mouseup: {
                              left: 2,
                              right: 5,
                              middle: 8
                          },
                          mouseleftdbldown: 3,
                          mouserightdbldown: 6,
                          wheel: 10
                      },
                      r = e.getModifierState ? function(t) {
                          return e.getModifierState(t)
                      } : function(e, t) {
                          return t
                      },
                      a = 0,
                      o = e.key && 1 === e.key.length;
                  if (-1 !== ["keydown", "keyup"].indexOf(e.type)) t.event_type = 1, a = 85, void 0 !== n[e.type] && (t.input_event_type = n[e.type]);
                  else {
                      if (-1 === ["mousedown", "mouseup", "mousemove", "wheel", "click", "dblclick", "contextmenu"].indexOf(e.type)) return void m.warn("the event type cannot be handled");
                      t.event_type = 0, this.recordCurrentMousePosition(e);
                      var u = this.resolvePosition(e);
                      if ((0, f.default)(t, {
                              x: u.x,
                              y: u.y
                          }), a = "wheel" === e.type ? 84 : 83, void 0 !== i[e.type] && (t.input_event_type = i[e.type]), -1 !== ["mousedown", "mouseup"].indexOf(e.type)) {
                          var s;
                          switch (e.button) {
                              case 0:
                                  s = "left";
                                  break;
                              case 1:
                                  s = "middle";
                                  break;
                              case 2:
                                  s = "right";
                                  break;
                              default:
                                  s = "left"
                          }
                          t.input_event_type = i[e.type][s]
                      } - 1 !== ["dblclick"].indexOf(e.type) && (t.input_event_type = i.mouseleftdbldown)
                  }
                  if ("wheel" === e.type) {
                      var d = {
                          deltaX: "dx",
                          deltaY: "dy"
                      };
                      (0, l.default)(d).forEach(function(n) {
                          e[n] && (t[d[n]] = e[n] > 0 ? -100 : 100)
                      })
                  }
                  if ((0, f.default)(t, {
                          t: e.type,
                          pduType: a,
                          keyCode: e.keyCode,
                          charCode: o ? e.key.charCodeAt(0) : 0,
                          key: e.key,
                          repeat: e.repeat,
                          ctrl: e.ctrlKey,
                          alt: e.altKey,
                          super: e.metaKey,
                          shift: e.shiftKey,
                          capslock: r("CapsLock", !1),
                          numlock: r("NumLock", !1)
                      }), this.isKeyboardEvent(e) && m("processEvent", (0, c.default)(t)), this.processEvent(t), "keydown" === e.type) {
                      var h = (0, f.default)({}, t, {
                          input_event_type: n.keychar
                      });
                      this.processEvent(h)
                  }
              },
              isCapslock: function(e) {
                  var t = e.keyCode,
                      n = e.key,
                      i = e.shiftKey;
                  return !!/[a-zA-Z]/.test(n) && (n.charCodeAt(0) !== t ? !i : i)
              },
              stop: (o = (0, _.default)(h.default.mark(function e() {
                  return h.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              this.blobSocket && this.blobSocket.close(), this.blobSocket = null;
                          case 2:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })), function() {
                  return o.apply(this, arguments)
              }),
              connectSocket: (a = (0, _.default)(h.default.mark(function e() {
                  var t;
                  return h.default.wrap(function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return e.next = 2, this.createBlobSocket("".concat(this.socketURL, "/wc/media/").concat(this.meetingID, "?type=r&mode=2&cid=").concat(this.condID));
                          case 2:
                              return (t = e.sent).binaryType = "blob", this.blobSocket = t, e.abrupt("return", !0);
                          case 6:
                          case "end":
                              return e.stop()
                      }
                  }, e, this)
              })), function() {
                  return a.apply(this, arguments)
              }),
              socketBlobMessageHandler: function() {
                  if (this.blobSocket) {
                      var e = this;
                      this.blobSocket.addEventListener("message", (t = (0, _.default)(h.default.mark(function t(n) {
                          var i, r, a, o, u, s, d;
                          return h.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                  case 0:
                                      return i = n.data, t.next = 3, g.default.readBlobAsBuffer(i, i.size);
                                  case 3:
                                      if (r = t.sent, a = new Int8Array(r), 88 !== (o = a[0])) {
                                          t.next = 14;
                                          break
                                      }
                                      return u = i.slice(8), t.next = 10, g.default.readBlob(u);
                                  case 10:
                                      s = t.sent, d = a[4], m("COPY_TEXT_FROM_RWG", s, d), e.triggerReturnCopiedText({
                                          data: s,
                                          x: e.currentMousePositionProps.x2video,
                                          y: e.currentMousePositionProps.y2video
                                      });
                                  case 14:
                                      0 === o && e.blobSocket.send(r);
                                  case 15:
                                  case "end":
                                      return t.stop()
                              }
                          }, t, this)
                      })), function(e) {
                          return t.apply(this, arguments)
                      }))
                  }
                  var t
              },
              destroySocket: function() {
                  try {
                      this.blobSocket.close(), this.blobSocket = null
                  } catch (e) {
                      m("destroySocket", e)
                  }
              },
              createBlobSocket: function(e) {
                  return new E.default(function(t, n) {
                      var i = new WebSocket(e);
                      i.addEventListener("open", function() {}), i.addEventListener("message", function(e) {
                          try {
                              var n = JSON.parse(e.data);
                              0 === n.evt && n.body && t(i)
                          } catch (e) {}
                      }), i.addEventListener("error", function(e) {
                          n(e)
                      }), i.addEventListener("close", function() {
                          n(new Error("socket close"))
                      })
                  })
              },
              setRemoteOS: function(e) {
                  void 0 !== e && (this.remoteOS = e)
              }
          };
          var w = k;
          t.default = w
      }).call(this, n(102))
  }, function(e, t, n) {
      var i = n(0),
          r = i.JSON || (i.JSON = {
              stringify: JSON.stringify
          });
      e.exports = function(e) {
          return r.stringify.apply(r, arguments)
      }
  }, function(e, t, n) {
      var i = n(42),
          r = n(194),
          a = n(99),
          u = Math.max,
          s = Math.min;
      e.exports = function(e, t, n) {
          var d, c, l, f, h, _, E = 0,
              p = !1,
              S = !1,
              A = !0;
          if ("function" != typeof e) throw new TypeError("Expected a function");

          function I(t) {
              var n = d,
                  i = c;
              return d = c = void 0, E = t, f = e.apply(i, n)
          }

          function v(e) {
              var n = e - _;
              return void 0 === _ || n >= t || n < 0 || S && e - E >= l
          }

          function D() {
              var e = r();
              if (v(e)) return g(e);
              h = setTimeout(D, function(e) {
                  var n = t - (e - _);
                  return S ? s(n, l - (e - E)) : n
              }(e))
          }

          function g(e) {
              return h = void 0, A && d ? I(e) : (d = c = void 0, f)
          }

          function O() {
              var e = r(),
                  n = v(e);
              if (d = arguments, c = this, _ = e, n) {
                  if (void 0 === h) return function(e) {
                      return E = e, h = setTimeout(D, t), p ? I(e) : f
                  }(_);
                  if (S) return h = setTimeout(D, t), I(_)
              }
              return void 0 === h && (h = setTimeout(D, t)), f
          }
          return t = a(t) || 0, i(n) && (p = !!n.leading, l = (S = "maxWait" in n) ? u(a(n.maxWait) || 0, t) : l, A = "trailing" in n ? !!n.trailing : A), O.cancel = function() {
              void 0 !== h && clearTimeout(h), E = 0, d = _ = c = h = void 0
          }, O.flush = function() {
              return void 0 === h ? f : g(r())
          }, O
      }
  }, function(e, t, n) {
      var i = n(101);
      e.exports = function() {
          return i.Date.now()
      }
  }, function(e, t, n) {
      ! function(e) {
          var t, n, i, r = String.fromCharCode;

          function a(e) {
              for (var t, n, i = [], r = 0, a = e.length; r < a;)(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < a ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--) : i.push(t);
              return i
          }

          function o(e) {
              if (e >= 55296 && e <= 57343) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value")
          }

          function u(e, t) {
              return r(e >> t & 63 | 128)
          }

          function s(e) {
              if (0 == (4294967168 & e)) return r(e);
              var t = "";
              return 0 == (4294965248 & e) ? t = r(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (o(e), t = r(e >> 12 & 15 | 224), t += u(e, 6)) : 0 == (4292870144 & e) && (t = r(e >> 18 & 7 | 240), t += u(e, 12), t += u(e, 6)), t + r(63 & e | 128)
          }

          function d() {
              if (i >= n) throw Error("Invalid byte index");
              var e = 255 & t[i];
              if (i++, 128 == (192 & e)) return 63 & e;
              throw Error("Invalid continuation byte")
          }

          function c() {
              var e, r;
              if (i > n) throw Error("Invalid byte index");
              if (i == n) return !1;
              if (e = 255 & t[i], i++, 0 == (128 & e)) return e;
              if (192 == (224 & e)) {
                  if ((r = (31 & e) << 6 | d()) >= 128) return r;
                  throw Error("Invalid continuation byte")
              }
              if (224 == (240 & e)) {
                  if ((r = (15 & e) << 12 | d() << 6 | d()) >= 2048) return o(r), r;
                  throw Error("Invalid continuation byte")
              }
              if (240 == (248 & e) && (r = (7 & e) << 18 | d() << 12 | d() << 6 | d()) >= 65536 && r <= 1114111) return r;
              throw Error("Invalid UTF-8 detected")
          }
          e.version = "3.0.0", e.encode = function(e) {
              for (var t = a(e), n = t.length, i = -1, r = ""; ++i < n;) r += s(t[i]);
              return r
          }, e.decode = function(e) {
              t = a(e), n = t.length, i = 0;
              for (var o, u = []; !1 !== (o = c());) u.push(o);
              return function(e) {
                  for (var t, n = e.length, i = -1, a = ""; ++i < n;)(t = e[i]) > 65535 && (a += r((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), a += r(t);
                  return a
              }(u)
          }
      }(t)
  }, function(e, t, n) {
      var i = n(36),
          r = n(44);
      e.exports = function(e) {
          return !0 === e || !1 === e || r(e) && "[object Boolean]" == i(e)
      }
  }, function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.MONITOR_LOG_DASHBOARD_DATACHANNEL_PARSE_SEPARATOR = t.CONFIG = t.default = void 0, t.default = {
          SOCKET_CLOSE_TIMEOUT: 4e3
      }, t.CONFIG = {
          IS_SUPPORT_VIDEO_DATACHANNEL: !0
      }, t.MONITOR_LOG_DASHBOARD_DATACHANNEL_PARSE_SEPARATOR = "{[WLCCONT]}"
  }, function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.serverHeartbeatMaxTimeoutSeconds = t.SHARING_GET_IMAGE_DATA_WRONG = t.SHARING_RENDER_MONITOR_LOG = t.Sharing_Width_And_Height_Info = t.VIDEO_RENDER_MONITOR_LOG = t.CURRENT_VIDEO_RESOLUTION = t.MEDIA_VIDEO_RTCP = t.MEDIA_VIDEO_DATA = t.MEDIA_AUDIO_RTCP = t.MEDIA_AUDIO_DATA = t.MEDIA_VIDEO_REPORT_DROP_RATIO = t.AUDIO_CLIPPING = t.Sharing_Dec_WebSocket_FAILED = t.Sharing_Handle_FAILED = t.Audio_Mute = t.Sharing_Dec_WASM_FAILED = t.Video_Enc_Handle_FAILED = t.Video_Enc_WASM_FAILED = t.Video_Dec_WebSocket_FAILED = t.Video_Dec_Handle_FAILED = t.Video_Dec_WASM_FAILED = t.Audio_Enc_Handle_FAILED = t.Audio_Enc_WASM_FAILED = t.Audio_Dec_WebSocket_FAILED = t.Audio_Dec_Handle_FAILED = t.Audio_Dec_WASM_FAILED = t.THREAD_STATE_CREATED = t.THREAD_STATE_CREATING = t.THREAD_STATE_IDLE = t.AUDIO_ENCODED_DATA = t.VIDEO_DATA_DROP_RATIO = t.VIDEO_DROP_RATIO_FROM_WCL = t.VIDEO_ENCODED_DATA = t.SHARING_DECODE_MESSAGE = t.MOUSE_DATA_VIDEO_MODE = t.SHARING_DATA_VIDEO_MODE = t.WCL_TROUBLESHOOTING_INFO = t.DELTA_S = t.DELTA_C = t.DELTA_D = t.APP_TROUBLESHOOTING_INFO = t.DOWNLOAD_WASM_FROM_MAIN_THREAD = t.MONITOR_MESSAGE = t.Video_Capture_Tick = t.DECODE_MESSAGE = t.Sharing_Data = t.Sharing_Handle_OK = t.Sharing_Dec_WebSocket_OK = t.AUDIO_DELAY = t.Sharing_Dec_PICTURE = t.Sharing_Dec_WASM_OK = t.Video_Enc_Handle_OK = t.Video_Enc_WASM_OK = t.Video_Dec_WebSocket_OK = t.Video_Dec_Handle_OK = t.Video_Dec_WASM_OK = t.Audio_Enc_Handle_OK = t.Audio_Enc_WASM_OK = t.Audio_Dec_WebSocket_OK = t.Audio_Dec_Handle_OK = t.Audio_Dec_WASM_OK = void 0, t.Audio_Dec_WASM_OK = 1, t.Audio_Dec_Handle_OK = 2, t.Audio_Dec_WebSocket_OK = 3, t.Audio_Enc_WASM_OK = 4, t.Audio_Enc_Handle_OK = 5, t.Video_Dec_WASM_OK = 7, t.Video_Dec_Handle_OK = 8, t.Video_Dec_WebSocket_OK = 9, t.Video_Enc_WASM_OK = 10, t.Video_Enc_Handle_OK = 11, t.Sharing_Dec_WASM_OK = 12, t.Sharing_Dec_PICTURE = 13, t.AUDIO_DELAY = 14, t.Sharing_Dec_WebSocket_OK = 15, t.Sharing_Handle_OK = 16, t.Sharing_Data = 17, t.DECODE_MESSAGE = 18, t.Video_Capture_Tick = 20, t.MONITOR_MESSAGE = 21, t.DOWNLOAD_WASM_FROM_MAIN_THREAD = 30, t.APP_TROUBLESHOOTING_INFO = 31, t.DELTA_D = 32, t.DELTA_C = 33, t.DELTA_S = 34, t.WCL_TROUBLESHOOTING_INFO = 35, t.SHARING_DATA_VIDEO_MODE = 36, t.MOUSE_DATA_VIDEO_MODE = 37, t.SHARING_DECODE_MESSAGE = 38, t.VIDEO_ENCODED_DATA = 39, t.VIDEO_DROP_RATIO_FROM_WCL = 40, t.VIDEO_DATA_DROP_RATIO = 41, t.AUDIO_ENCODED_DATA = 42, t.THREAD_STATE_IDLE = 43, t.THREAD_STATE_CREATING = 44, t.THREAD_STATE_CREATED = 45, t.Audio_Dec_WASM_FAILED = -1, t.Audio_Dec_Handle_FAILED = -2, t.Audio_Dec_WebSocket_FAILED = -3, t.Audio_Enc_WASM_FAILED = -4, t.Audio_Enc_Handle_FAILED = -5, t.Video_Dec_WASM_FAILED = -7, t.Video_Dec_Handle_FAILED = -8, t.Video_Dec_WebSocket_FAILED = -9, t.Video_Enc_WASM_FAILED = -10, t.Video_Enc_Handle_FAILED = -11, t.Sharing_Dec_WASM_FAILED = -12, t.Audio_Mute = -13, t.Sharing_Handle_FAILED = -14, t.Sharing_Dec_WebSocket_FAILED = -15, t.AUDIO_CLIPPING = -23, t.MEDIA_VIDEO_REPORT_DROP_RATIO = 100, t.MEDIA_AUDIO_DATA = 1, t.MEDIA_AUDIO_RTCP = 6, t.MEDIA_VIDEO_DATA = 2, t.MEDIA_VIDEO_RTCP = 7, t.CURRENT_VIDEO_RESOLUTION = 50, t.VIDEO_RENDER_MONITOR_LOG = 51, t.Sharing_Width_And_Height_Info = 52, t.SHARING_RENDER_MONITOR_LOG = 53, t.SHARING_GET_IMAGE_DATA_WRONG = 54, t.serverHeartbeatMaxTimeoutSeconds = 65
  }, function(e, t, n) {
      "use strict";

      function i() {}
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0, i.prototype.Get_WaterMarkRGBA = function(e, t, n, i, r, a) {
          if (t && n && i) {
              n *= 1, r = i *= 1, e.width = n, e.height = i;
              var o = e.getContext("2d");
              o.clearRect(0, 0, e.width, e.height), o.translate(e.width / 2, e.height / 2), o.rotate(-45 * Math.PI / 180), o.lineWidth = 1, o.fillStyle = "rgba(90,90,90,0.25)";
              var u = Math.SQRT2 * r / t.length;
              o.imageSmoothingEnabled = !0, o.font = u + "px  'Segoe UI'";
              var s = o.measureText(t);
              if (1 == t.length) o.fillText(t, -s.width / 2, s.width / 2);
              else {
                  for (u = 2, o.font = u + "px  'Segoe UI'", s = o.measureText(t); s.width < Math.SQRT2 * r - 2 * o.measureText(t[0]).width;) u += 1, o.font = u + "px  'Segoe UI'", s = o.measureText(t);
                  o.fillText(t, -Math.SQRT2 * r / 2 + Math.abs(Math.SQRT2 * r / 2 - s.width / 2), o.measureText(t[0]).width / 2)
              }
              var d = o.getImageData(0, 0, o.canvas.width, o.canvas.height);
              return new Uint8Array(d.data.buffer)
          }
      };
      var r = i;
      t.default = r
  }, function(e, t, n) {
      "use strict";

      function i(e, t, n) {
          if (this.canvasElement = e, this.contextOptions = n, this.glInitSucceed = 0, i.prototype.ROTATION_CLOCK0 = 0, i.prototype.ROTATION_CLOCK90 = 1, i.prototype.ROTATION_CLOCK180 = 2, i.prototype.ROTATION_CLOCK270 = 3, t || this.initContextGL(), this.contextGL) {
              this.initProgram(), this.initBuffers(), this.initTextures();
              var r = new ArrayBuffer(4);
              this.dummpyCursor = new Uint8Array(r), this.dummpyWaterMark = new Uint8Array(r), this.glInitSucceed = this.contextGL.getError() ? 0 : 1, this.cursorWidth = 0, this.cursorHeight = 0, this.hasCursor = 0, this.hasWaterMark = 0, this.hasWholeFrame = 0, this.croppingParams = {}, this.croppingParams.top = 0, this.croppingParams.left = 0, this.croppingParams.width = 0, this.croppingParams.height = 0, this.textureWidth = 0, this.textureHeight = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.picRotation = -1, this.bgColor = [0, 0, 0], this.cx = 0, this.cy = 0, this.cw = 0, this.ch = 0, this.colorRange = -1
          }
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0, i.prototype.isWebGL = function() {
          return this.contextGL
      }, i.prototype.initContextGL = function() {
          for (var e = this.canvasElement, t = null, n = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], i = 0; !t && i < n.length;) {
              var r = n[i];
              try {
                  t = this.contextOptions ? e.getContext(r, this.contextOptions) : e.getContext(r)
              } catch (e) {
                  t = null
              }
              t && "function" == typeof t.getParameter || (t = null), ++i
          }
          this.contextGL = t
      }, i.prototype.initProgram = function() {
          var e = this.contextGL,
              t = ["attribute vec4 vertexPos;", "attribute vec4 texturePos;", "varying vec2 textureCoord;", "void main()", "{", "gl_Position = vertexPos;", "textureCoord = texturePos.xy;", "}"].join("\n"),
              n = ["precision highp float;", "varying highp vec2 textureCoord;", "uniform sampler2D ySampler;", "uniform sampler2D uSampler;", "uniform sampler2D vSampler;", "uniform sampler2D cursorSampler;", "uniform sampler2D waterMarkSampler;", "uniform vec4 cursorInfo;", "uniform int colorRange;", "const mat4 YUV2RGB_L = mat4", "(", "1.1643828125, 0, 1.59602734375, -.87078515625,", "1.1643828125, -.39176171875, -.81296875, .52959375,", "1.1643828125, 2.017234375, 0, -1.081390625,", "0, 0, 0, 1", ");", "const mat4 YUV2RGB_F = mat4", "(", "1.0, 0, 1.402, -.701,", "1.0, -.34413, -.71414, .529135,", "1.0, 1.772, 0, -.886,", "0, 0, 0, 1", ");", "void main(void) {", "highp float y = texture2D(ySampler,  textureCoord).r;", "highp float u = texture2D(uSampler,  textureCoord).r;", "highp float v = texture2D(vSampler,  textureCoord).r;", "vec4 c;", "if (colorRange == 0)", "{", "  c = vec4(y, u, v, 1) * YUV2RGB_L;", "} else {", "  c = vec4(y, u, v, 1) * YUV2RGB_F;", "}", "if (cursorInfo.z > 0.0 && textureCoord.x >= cursorInfo.x && textureCoord.y >= cursorInfo.y && ", "    textureCoord.x < cursorInfo.x+cursorInfo.z && textureCoord.y < cursorInfo.y+cursorInfo.w ){", " vec2 cursorCoord = textureCoord - cursorInfo.xy;", " cursorCoord /= cursorInfo.zw;", " vec4 cursor = texture2D(cursorSampler, cursorCoord);", " c = c*(1.0-cursor.a) + cursor*cursor.a;", "}", " vec4 waterMark = texture2D(waterMarkSampler, textureCoord);", "if(waterMark.r != 0.0 || waterMark.g != 0.0 || waterMark.b != 0.0){", " //waterMark.a = 0.5", " c = waterMark* waterMark.a+ c*(1.0-waterMark.a);", "}", "c.a = 1.0;", "gl_FragColor = c;", "}"].join("\n"),
              i = e.createShader(e.VERTEX_SHADER);
          e.shaderSource(i, t), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS);
          var r = e.createShader(e.FRAGMENT_SHADER);
          e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS);
          var a = e.createProgram();
          e.attachShader(a, i), e.attachShader(a, r), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS), e.useProgram(a), this.shaderProgram = a
      }, i.prototype.initBuffers = function() {
          var e = this.contextGL,
              t = this.shaderProgram,
              n = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), e.STATIC_DRAW);
          var i = e.getAttribLocation(t, "vertexPos");
          e.enableVertexAttribArray(i), e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0), this.vertexPosBuffer = n;
          var r = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, r), e.bufferData(e.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), e.STATIC_DRAW);
          var a = e.getAttribLocation(t, "texturePos");
          e.enableVertexAttribArray(a), e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0), this.texturePosBuffer = r
      }, i.prototype.initTextures = function() {
          var e = this.contextGL,
              t = this.shaderProgram;
          e.pixelStorei(e.UNPACK_ALIGNMENT, 1);
          var n = this.initTexture(),
              i = e.getUniformLocation(t, "ySampler");
          e.uniform1i(i, 0), this.yTextureRef = n;
          var r = this.initTexture(),
              a = e.getUniformLocation(t, "uSampler");
          e.uniform1i(a, 1), this.uTextureRef = r;
          var o = this.initTexture(),
              u = e.getUniformLocation(t, "vSampler");
          e.uniform1i(u, 2), this.vTextureRef = o;
          var s = this.initTexture(),
              d = e.getUniformLocation(t, "cursorSampler");
          e.uniform1i(d, 3), this.cursorTextureRef = s;
          var c = this.initTexture(),
              l = e.getUniformLocation(t, "waterMarkSampler");
          e.uniform1i(l, 4), this.waterMarkTextureRef = c;
          var f = e.getUniformLocation(t, "cursorInfo");
          this.cursorInfoRef = f;
          var h = e.getUniformLocation(t, "colorRange");
          this.colorRangeRef = h
      }, i.prototype.initTexture = function() {
          var e = this.contextGL,
              t = e.createTexture();
          return e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindTexture(e.TEXTURE_2D, null), t
      }, i.prototype.cleanup = function() {
          if (this.glInitSucceed) {
              var e = this.contextGL;
              e.deleteProgram(this.program), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, null), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, null), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, null), e.activeTexture(e.TEXTURE3), e.bindTexture(e.TEXTURE_2D, null), e.bindBuffer(e.ARRAY_BUFFER, null), e.deleteTexture(this.yTextureRef), e.deleteTexture(this.uTextureRef), e.deleteTexture(this.vTextureRef), e.deleteTexture(this.cursorTextureRef), e.deleteTexture(this.waterMarkTextureRef), e.deleteBuffer(this.vertexPosBuffer), e.deleteBuffer(this.texturePosBuffer), this.contextGL = null, this.glInitSucceed = 0
          }
      }, i.prototype.drawNextOutputPicture = function(e, t, n, i) {
          var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          this.contextGL ? this.drawNextOuptutPictureGL(e, t, n, i, r) : this.drawNextOuptutPictureRGBA(e, t, n, i)
      }, i.prototype.drawNextOuptutPictureGL = function(e, t, n, i, r) {
          var a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              o = this.contextGL,
              u = (this.texturePosBuffer, this.yTextureRef),
              s = this.uTextureRef,
              d = this.vTextureRef;
          if (o.enable(o.BLEND), o.blendFunc(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA), o && this.glInitSucceed && !(e <= 0 || t <= 0 || !i || !i.length || i.length != e * t * 3 / 2 || n && (n.top < 0 || n.left < 0 || n.left + n.width > e || n.top + n.height > t))) {
              r = r || this.ROTATION_CLOCK0;
              var c = (n = n || {
                      top: 0,
                      left: 0,
                      width: e,
                      height: t
                  }).width != this.croppingParams.width || n.height != this.croppingParams.height,
                  l = n.top != this.croppingParams.top || n.left != this.croppingParams.left,
                  f = o.canvas.width != this.canvasWidth || o.canvas.height != this.canvasHeight,
                  h = e != this.textureWidth || t != this.textureHeight,
                  _ = r != this.picRotation;
              (c || f || _) && function(e, t, n, i) {
                  var r, a, o, u, s = e.contextGL,
                      d = i == e.ROTATION_CLOCK90 || i == e.ROTATION_CLOCK270 ? n : t,
                      c = i == e.ROTATION_CLOCK90 || i == e.ROTATION_CLOCK270 ? t : n,
                      l = d / c * s.canvas.height,
                      f = c / d * s.canvas.width;
                  l > s.canvas.width ? (r = 0, o = 1, u = 1 - (a = (s.canvas.height - f) / 2 / s.canvas.height)) : (a = 0, u = 1, o = 1 - (r = (s.canvas.width - l) / 2 / s.canvas.width)), r = 2 * r - 1, o = 2 * o - 1, a = 1 - 2 * a, u = 1 - 2 * u;
                  var h = new Float32Array([o, a, r, a, o, u, r, u]);
                  s.bindBuffer(s.ARRAY_BUFFER, e.vertexPosBuffer), s.bufferData(s.ARRAY_BUFFER, h, s.DYNAMIC_DRAW)
              }(this, n.width, n.height, r), (c || l || h || _) && function(e, t, n, i, r) {
                  var a = e.contextGL,
                      o = i.top / n,
                      u = i.left / t,
                      s = o + i.height / n,
                      d = u + i.width / t,
                      c = [u, o, d, o, d, s, u, s];
                  r == e.ROTATION_CLOCK90 && (c.unshift(c[6], c[7]), c = c.slice(0, 8)), r == e.ROTATION_CLOCK180 && (c.unshift(c[4], c[5], c[6], c[7]), c = c.slice(0, 8)), r == e.ROTATION_CLOCK270 && (c.push(c[0], c[1]), c = c.slice(2));
                  var l = c[0],
                      f = c[1];
                  c[0] = c[2], c[1] = c[3], c[2] = l, c[3] = f;
                  var h = new Float32Array(c);
                  a.bindBuffer(a.ARRAY_BUFFER, e.texturePosBuffer), a.bufferData(a.ARRAY_BUFFER, h, a.DYNAMIC_DRAW)
              }(this, e, t, n, r);
              var E = a ? 0 : 1;
              E != this.colorRange && (o.uniform1i(this.colorRangeRef, E), this.colorRange = E), o.viewport(0, 0, o.canvas.width, o.canvas.height), this.croppingParams = n, this.textureWidth = e, this.textureHeight = t, this.picRotation = r, this.canvasWidth = o.canvas.width, this.canvasHeight = o.canvas.height, o.clearColor(this.bgColor[0], this.bgColor[1], this.bgColor[2], 255), o.clear(o.COLOR_BUFFER_BIT);
              var p = i,
                  S = e * t,
                  A = p.subarray(0, S);
              o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, u), o.texImage2D(o.TEXTURE_2D, 0, o.LUMINANCE, e, t, 0, o.LUMINANCE, o.UNSIGNED_BYTE, A);
              var I = e / 2 * t / 2,
                  v = p.subarray(S, S + I);
              o.activeTexture(o.TEXTURE1), o.bindTexture(o.TEXTURE_2D, s), o.texImage2D(o.TEXTURE_2D, 0, o.LUMINANCE, e / 2, t / 2, 0, o.LUMINANCE, o.UNSIGNED_BYTE, v);
              var D = I,
                  g = p.subarray(S + I, S + I + D);
              o.activeTexture(o.TEXTURE2), o.bindTexture(o.TEXTURE_2D, d), o.texImage2D(o.TEXTURE_2D, 0, o.LUMINANCE, e / 2, t / 2, 0, o.LUMINANCE, o.UNSIGNED_BYTE, g), o.activeTexture(o.TEXTURE3), o.bindTexture(o.TEXTURE_2D, this.cursorTextureRef), this.hasCursor || o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, 1, 1, 0, o.RGBA, o.UNSIGNED_BYTE, this.dummpyCursor), o.activeTexture(o.TEXTURE4), o.bindTexture(o.TEXTURE_2D, this.waterMarkTextureRef), this.hasWaterMark || o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, 1, 1, 0, o.RGBA, o.UNSIGNED_BYTE, this.dummpyWaterMark), o.uniform4f(this.cursorInfoRef, this.cx, this.cy, this.cw, this.ch), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), this.hasWholeFrame = 1
          }
      }, i.prototype.updateTextureBlock = function(e, t, n, i, r) {
          var a = this.contextGL;
          if (a && this.glInitSucceed) {
              var o = r;
              if (!(!this.hasWholeFrame || e <= 0 || t <= 0 || n < 0 || i < 0 || n + e > this.textureWidth || i + t > this.textureHeight) && r && r.length == e * t * 3 / 2) {
                  var u = this.yTextureRef,
                      s = this.uTextureRef,
                      d = this.vTextureRef,
                      c = e * t,
                      l = o.subarray(0, c);
                  a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, u), a.texSubImage2D(a.TEXTURE_2D, 0, n, i, e, t, a.LUMINANCE, a.UNSIGNED_BYTE, l);
                  var f = e / 2 * t / 2,
                      h = o.subarray(c, c + f);
                  a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, s), a.texSubImage2D(a.TEXTURE_2D, 0, n / 2, i / 2, e / 2, t / 2, a.LUMINANCE, a.UNSIGNED_BYTE, h);
                  var _ = f,
                      E = o.subarray(c + f, c + f + _);
                  a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, d), a.texSubImage2D(a.TEXTURE_2D, 0, n / 2, i / 2, e / 2, t / 2, a.LUMINANCE, a.UNSIGNED_BYTE, E)
              }
          }
      }, i.prototype.updateCursor = function(e, t, n) {
          var i = this.contextGL;
          i && this.glInitSucceed && (e <= 0 || t <= 0 || !n || n.length != e * t * 4 || (i.activeTexture(i.TEXTURE3), i.bindTexture(i.TEXTURE_2D, this.cursorTextureRef), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, e, t, 0, i.RGBA, i.UNSIGNED_BYTE, n), this.cursorWidth = e, this.cursorHeight = t, this.hasCursor = 1))
      }, i.prototype.updateWatherMark = function(e, t, n) {
          var i = this.contextGL;
          i && this.glInitSucceed && (e <= 0 || t <= 0 || !n || n.length != e * t * 4 || (i.activeTexture(i.TEXTURE4), i.bindTexture(i.TEXTURE_2D, this.waterMarkTextureRef), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, e, t, 0, i.RGBA, i.UNSIGNED_BYTE, n), this.hasWaterMark = 1))
      }, i.prototype.draw = function(e, t, n, i, r) {
          var a = this.contextGL;
          if (a && this.glInitSucceed && !(!this.hasWholeFrame || e && (i < 0 || r < 0))) {
              a.viewport(0, 0, a.canvas.width, a.canvas.height), this.texturePosBuffer;
              var o = this.yTextureRef,
                  u = this.uTextureRef,
                  s = this.vTextureRef,
                  d = this.cursorTextureRef;
              if (a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, o), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, u), a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, s), a.activeTexture(a.TEXTURE3), a.bindTexture(a.TEXTURE_2D, d), a.activeTexture(a.TEXTURE4), a.bindTexture(a.TEXTURE_2D, this.waterMarkTextureRef), this.hasWaterMark || a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 1, 1, 0, a.RGBA, a.UNSIGNED_BYTE, this.dummpyWaterMark), e && this.hasCursor) {
                  var c = t / this.croppingParams.width,
                      l = n / this.croppingParams.height,
                      f = i / this.croppingParams.width,
                      h = r / this.croppingParams.height;
                  this.cx = c, this.cy = l, this.cw = f, this.ch = h, a.uniform4f(this.cursorInfoRef, c, l, f, h)
              } else a.uniform4f(this.cursorInfoRef, 0, 0, 0, 0);
              a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
          }
      }, i.prototype.clear = function() {
          var e = this.contextGL;
          e && this.glInitSucceed && (e.clearColor(this.bgColor[0], this.bgColor[1], this.bgColor[2], 255), e.clear(e.COLOR_BUFFER_BIT), this.hasWholeFrame = 0, this.hasCursor = 0)
      }, i.prototype.test_changeColorRange = function(e) {
          var t = this.contextGL;
          t && this.glInitSucceed && (colorRange = e ? 0 : 1, colorRange != this.colorRange && (t.uniform1i(this.colorRangeRef, colorRange), this.colorRange = colorRange, this.draw(0)))
      }, i.prototype.drawNextOuptutPictureRGBA = function(e, t, n, i) {
          var r = i,
              a = this.canvasElement.getContext("2d"),
              o = a.getImageData(0, 0, e, t);
          o.data.set(r), a.putImageData(o, 0, 0)
      };
      var r = i;
      t.default = r
  }, , function(e, t, n) {
      "use strict";
      var i = n(203);
      e.exports = i
  }, function(e, t, n) {
      "use strict";
      var i = n(20),
          r = n(1),
          a = r(n(10)),
          o = r(n(106)),
          u = r(n(15)),
          s = r(n(16)),
          d = r(n(43)),
          c = r(n(72)),
          l = r(n(204)),
          f = r(n(35)),
          h = i(n(22)),
          _ = r(n(33)),
          E = i(n(105)),
          p = n(205),
          S = r(n(23)),
          A = r(n(19)),
          I = (r(n(107)), n(74)),
          v = n(75),
          D = n(69),
          g = r(n(190)),
          O = r(n(191)),
          m = n(73),
          C = r(n(98)),
          R = r(n(196)),
          y = r(n(104)),
          T = r(n(103));
      n(206);
      var M, N, P, b, k, w, L, V, U, x, G, W, F, H, K = r(n(70)),
          B = n(207),
          j = r(n(208)),
          Q = r(n(209)),
          Y = r(n(200)),
          X = (0, S.default)("sdk"),
          q = function e() {
              try {
                  K.default.add_monitor("JSBN:".concat(e.buildNumber)), X("JSBN:".concat(e.buildNumber))
              } catch (e) {
                  X(e)
              }
              if (this.isSupportThread = "object" === ("undefined" == typeof WebAssembly ? "undefined" : (0, c.default)(WebAssembly)) && "function" == typeof Worker, !this.isSupportThread) throw new Error("Webassemly or worker is not supported on this browser");
              _.default.reinit(), this.audioCtx = new(window.AudioContext || window.webkitAudioContext), this.audioPlayNode = null, this.audioRecordNode = null, this.webrtcAudioNode = null, this.videoRenderArray = [], this.videoCaptureValue = null, this.audioRenderArray = [], this.audioCapture = null, this.display = [], this.AudioMediaStream = null, this.VideoMediaStram = null, this.isMediaStart = !1, this.sampleRate = this.audioCtx.sampleRate, this.videoRenderIntervalHandle = null, this.audioDomNode = null, this.audioSpeakerValue = null, this.audionodebuffersize = this.sampleRate <= 32e3 || f.default.browser.isSafari ? 2048 : 1024, this.audionoderecordbuffersize = 2048, this.lastresidual = null, this.currentactive = 0, this.audioPlay = !1, this.sharingInterval = null, this.sharingIntervalTime = 100, this.sharingDisplay = null, this.currentshareactive = 0, this.videorenderinterval = 10, this.waterMarkCanvas = document.createElement("canvas"), this.isSetCursor = !1, this.captureAudioStatus = h.AUDIO_ILLEGAL, this.logon = !1, this.canvas = null, this.firstSetDelay = !0, this.isSupportAudioWorklet = "function" == typeof AudioWorklet, this.isSupportImageCapture = "function" == typeof ImageCapture && "function" == typeof OffscreenCanvas && !f.default.isAndroidBrowser(), this.isSupportOffscreenCanvas = "function" == typeof OffscreenCanvas && !f.default.isOpera65(), this.isCaputureNodeConnect = !1, this.audioWorkletJsPath = null, this.videoCaptureInterval = 0, this.isStartVideoCapture = !1, this.videoCaptureWidth = 0, this.videoCaptureHeight = 0, this.videoCaptureContext = null, this.isCreateVideoWaterMark = !1, this.videoWaterMarkName = "", this.sharingWaterMarkName = "", this.isCreateSharingWaterMark = !1, this.isStartDesktopSharing = !1, this.desktopSharingValue = null, this.desktopCaptureContext = null, this.desktopSharingMediaStram = null, this.desktopSharingCaptureWidth = 0, this.desktopSharingCaptureHeight = 0, this.desktopSharingSend = !1, this.isdesktopCaptureLoadedmetadata = !1, this.captureVideoOutputCanvasDomList = [], this.isVideoCaptureLoadedmetadata = !1, this.VALUE_CACHE_FOR_START_CAPTURE_VIDEO = {}, this.isMediaDevicesGetUserMediaNow = !1, this.vMonitorCount = 0, this.sMonitorCount = 0, this.mMonitorCount = 0, this.videoImageCapture, this.wecancapturevideo = !0, this.isSendVideoOfflineCanvas = !1, _.default.mediaSDKHandle = this, this._preloadMeetingParam = null, this.is32bitbrowser = -1 != navigator.userAgent.indexOf("WOW64"), this.flipSend = !0, this.mtu_size = 0, this.sharingImageCapture = null, this.sharingRenderCanvas = null, this.VideoRenderObj = null, this.SharingRenderObj = null, this.sharingWidthAndHeightInfo = {
                  ctiveNodeID: 0,
                  height: 0,
                  logicHeight: 0,
                  logicWidth: 0,
                  width: 0
              }, this.remoteControl = null, this.listenInitEvent = (0, C.default)(function() {
                  this._listenInitEvent()
              }).bind(this), this.isInitVideoDataChannel = !1, this.isInitAudioDataChannel = !1, this.rtcPeerConnectionList = [], this.isDestroy = !1
          };
      q.buildNumber = 5241, q.version = "1.8.5241", q.prototype = {
          JsMediaSDK_Log: function(e) {
              this.logon && X(e)
          },
          JsMediaSDK_PreLoad: function(e, t) {
              this.setPropsBeforeInit({
                  callback: t,
                  audioWorkerPath: e.audioWorkerPath,
                  isEnableListenInitEvent: !0
              }), this._preloadMeetingParam = e, E.Start_Monitor(), K.default.add_monitor("JSPLD")
          },
          recordSharingParamInfo: function() {
              var e = this;
              A.default.on(h.SHARING_PARAM_INFO_FROM_SOCKET, function(t, n) {
                  (0, d.default)(e.sharingWidthAndHeightInfo, n.body)
              })
          },
          throwErrorWhenParameterIsEmpty: function(e) {
              if (!e) throw new Error("parameter can not be empty")
          },
          setCallback: function(e) {
              if (!(0, g.default)(e)) throw new Error("callback must be function");
              _.default.Notify_APPUI = e
          },
          setPropsBeforeInit: function(e) {
              e.callback && this.setCallback(e.callback), e.audioWorkerPath && (this.audioWorkletJsPath = e.audioWorkerPath), e.isEnableListenInitEvent && this.listenInitEvent(), e.e2eEncrypt ? _.default.e2eencrypt = !0 : _.default.e2eencrypt = !1
          },
          checkISDatachannelOrWebsocket: function() {
              var e = (0, T.default)(function() {}, 1e3),
                  t = (0, T.default)(function() {}, 1e3);
              A.default.on(h.PUBSUB_EVT.DC_COMING_MESSAGE, function() {
                  e()
              }), A.default.on(h.VIDEO_DATA_FROM_WORKER, function(e, n) {
                  -1 !== [2, 7].indexOf(n[0]) && t()
              })
          },
          initVideoDataChannel: (H = (0, s.default)(u.default.mark(function e(t, n) {
              var i;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          if (!this.isInitVideoDataChannel) {
                              e.next = 2;
                              break
                          }
                          return e.abrupt("return");
                      case 2:
                          this.isInitVideoDataChannel = !0, K.default.add_monitor("INITVDC"), X("initVideoDataChannel", t), (i = new B.RTCPeerConnectionUtil).setUserid(n), i.setConnectionType(m.ConnectionType.VIDEO), X("rtc", i), i.onConnectionCreated(function() {
                              var e = (0, s.default)(u.default.mark(function e(t) {
                                  var n, r, a;
                                  return u.default.wrap(function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              return n = t.localDescription, X("localDesc", n), _.default.Notify_APPUI_SAFE(h.SEND_MESSAGE_TO_RWG, {
                                                  evt: h.ZOOM_CONNECTION_VIDEO_OFFER_EVT,
                                                  offer: {
                                                      sdp: n.sdp,
                                                      type: m.ZOOM_CONNECTION_TYPE.ZOOM_CONNECTION_VIDEO
                                                  }
                                              }), e.next = 5, i.waitForAnswerFromRWG(h.PUBSUB_EVT.ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT);
                                          case 5:
                                              r = e.sent, X("jsEvent.PUBSUB_EVT.ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT", r), i.setRemoteDescription(r.answer), i.closeIfTimeout(), a = r.answer.sdp.match(/a=candidate:.+/)[0], X("received candidate", a), a = a.replace(/^a=/, ""), i.addIceCandidate(a), i.listenOnDataAndSend(h.VIDEO_DATA_FROM_WORKER), i.onMessage(function(e) {
                                                  var t = new Uint8Array(e);
                                                  A.default.trigger(h.PUBSUB_EVT.DC_COMING_MESSAGE), t[0] == h.MEDIA_VIDEO_REPORT_DROP_RATIO || t[0] == h.MEDIA_VIDEO_REPORT_RTT ? E.pushMessageToWorker(m.WORKER_TYPE.VIDEO_ENCODE, e, void 0, !0) : E.pushMessageToWorker(m.WORKER_TYPE.VIDEO_DECODE, e, void 0, !0)
                                              }), i.dataChannel.addEventListener("open", function() {
                                                  E.pushMessageToWorker(m.WORKER_TYPE.VIDEO_DECODE, {
                                                      isDataChannelOpen: !0
                                                  }, "UPDATE_DATACHANNEL_STATUS", !1, !0), E.pushMessageToWorker(m.WORKER_TYPE.VIDEO_ENCODE, {
                                                      isDataChannelOpen: !0
                                                  }, "UPDATE_DATACHANNEL_STATUS", !1, !0)
                                              }), i.dataChannel.addEventListener("close", function() {
                                                  E.pushMessageToWorker(m.WORKER_TYPE.VIDEO_DECODE, {
                                                      isDataChannelOpen: !1
                                                  }, "UPDATE_DATACHANNEL_STATUS"), E.pushMessageToWorker(m.WORKER_TYPE.VIDEO_ENCODE, {
                                                      isDataChannelOpen: !1
                                                  }, "UPDATE_DATACHANNEL_STATUS");
                                                  var e = new ArrayBuffer(12);
                                                  new Uint8Array(e)[0] = 100, E.pushMessageToWorker(m.WORKER_TYPE.VIDEO_ENCODE, e, void 0, !0)
                                              });
                                          case 17:
                                          case "end":
                                              return e.stop()
                                      }
                                  }, e, this)
                              }));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()), i.initConnection(t).catch(function(e) {
                              X.warn("initConnection", e), K.default.add_monitor("INITVDCERR:" + e.message)
                          }), this.rtcPeerConnectionList.push(i), A.default.on(h.PUBSUB_EVT.VIDEO_DATACHANNEL_SPEED, function(e, t) {
                              X("VIDEO_DATACHANNEL_SPEED", t), E.pushMessageToWorker(m.WORKER_TYPE.VIDEO_ENCODE, {
                                  speed: t
                              }, "UPDATE_BANDWIDTH_SPEED")
                          });
                      case 13:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t) {
              return H.apply(this, arguments)
          }),
          initAudioDataChannel: (F = (0, s.default)(u.default.mark(function e(t, n) {
              var i;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          if (!this.isInitAudioDataChannel) {
                              e.next = 2;
                              break
                          }
                          return e.abrupt("return");
                      case 2:
                          this.isInitAudioDataChannel = !0, K.default.add_monitor("INITADC"), X("initAudioDataChannel", t), (i = new B.RTCPeerConnectionUtil).setUserid(n), i.setConnectionType(m.ConnectionType.AUDIO), X("rtc", i), i.onConnectionCreated(function() {
                              var e = (0, s.default)(u.default.mark(function e(t) {
                                  var n, r, a;
                                  return u.default.wrap(function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              return n = t.localDescription, X("localDesc", n), _.default.Notify_APPUI_SAFE(h.SEND_MESSAGE_TO_RWG, {
                                                  evt: h.ZOOM_CONNECTION_VIDEO_OFFER_EVT,
                                                  offer: {
                                                      sdp: n.sdp,
                                                      type: m.ZOOM_CONNECTION_TYPE.ZOOM_CONNECTION_AUDIO
                                                  }
                                              }), e.next = 5, i.waitForAnswerFromRWG(h.PUBSUB_EVT.ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT);
                                          case 5:
                                              r = e.sent, X("answer", r), i.setRemoteDescription(r.answer), i.closeIfTimeout(), a = r.answer.sdp.match(/a=candidate:.+/)[0], X("received candidate", a), a = a.replace(/^a=/, ""), i.addIceCandidate(a), i.listenOnDataAndSendAudio(h.AUDIO_DATA_FROM_WORKER), i.onMessage(function(e) {
                                                  E.pushMessageToWorker(m.WORKER_TYPE.AUDIO_DECODE, e, void 0, !0)
                                              }), i.dataChannel.addEventListener("open", function() {
                                                  E.pushMessageToWorker(m.WORKER_TYPE.AUDIO_DECODE, {
                                                      isDataChannelOpen: !0
                                                  }, "UPDATE_DATACHANNEL_STATUS", !1, !0), E.pushMessageToWorker(m.WORKER_TYPE.AUDIO_ENCODE, {
                                                      isDataChannelOpen: !0
                                                  }, "UPDATE_DATACHANNEL_STATUS", !1, !0)
                                              }), i.dataChannel.addEventListener("close", function() {
                                                  E.pushMessageToWorker(m.WORKER_TYPE.AUDIO_DECODE, {
                                                      isDataChannelOpen: !1
                                                  }, "UPDATE_DATACHANNEL_STATUS"), E.pushMessageToWorker(m.WORKER_TYPE.AUDIO_ENCODE, {
                                                      isDataChannelOpen: !1
                                                  }, "UPDATE_DATACHANNEL_STATUS")
                                              });
                                          case 17:
                                          case "end":
                                              return e.stop()
                                      }
                                  }, e, this)
                              }));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()), i.initConnection(t, "ZoomWebclientAudioDataChannel").catch(function(e) {
                              X.warn("initConnection", e), K.default.add_monitor("INITADCERR:" + e.message)
                          }), this.rtcPeerConnectionList.push(i);
                      case 12:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t) {
              return F.apply(this, arguments)
          }),
          initVideoEncode: (W = (0, s.default)(u.default.mark(function e(t, n, i) {
              var r, a, o, s, d, c, l = arguments;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return r = l.length > 3 && void 0 !== l[3] && l[3], a = l.length > 4 ? l[4] : void 0, o = l.length > 5 ? l[5] : void 0, X("initVideoEncode"), K.default.add_monitor("INITVE"), this.throwErrorWhenParameterIsEmpty(t), e.next = 8, f.default.isSDKSupportMultiThread();
                      case 8:
                          return s = e.sent, t = s ? t.substr(0, t.lastIndexOf("/")) + "/video_m.min.js" : t.substr(0, t.lastIndexOf("/")) + "/video_s.min.js", d = new URL(n).searchParams.get("cid"), this.initVideoDataChannel(d, i), _.default.monitorCid = d, c = {
                              log: r,
                              confId: i,
                              meetingid: a,
                              meetingnumb: o
                          }, E.setVideoEngineInitProperties(n, c), e.next = 17, E.initVideoEncode(t, this);
                      case 17:
                          return e.next = 19, I.Video.waitVideoEncodeInitResult();
                      case 19:
                          return e.abrupt("return", e.sent);
                      case 20:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t, n) {
              return W.apply(this, arguments)
          }),
          initVideoDecode: (G = (0, s.default)(u.default.mark(function e(t, n, i) {
              var r, a, o, s, d, c, l = arguments;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return r = l.length > 3 && void 0 !== l[3] && l[3], a = l.length > 4 ? l[4] : void 0, o = l.length > 5 ? l[5] : void 0, X("initVideoDecode"), K.default.add_monitor("INITVD"), this.throwErrorWhenParameterIsEmpty(t), e.next = 8, f.default.isSDKSupportMultiThread();
                      case 8:
                          return s = e.sent, t = s ? t.substr(0, t.lastIndexOf("/")) + "/video_m.min.js" : t.substr(0, t.lastIndexOf("/")) + "/video_s.min.js", d = new URL(n).searchParams.get("cid"), this.initVideoDataChannel(d, i), _.default.monitorCid = d, c = {
                              log: r,
                              confId: i,
                              meetingid: a,
                              meetingnumb: o
                          }, E.setVideoEngineInitProperties(n, c), e.next = 17, E.initVideoDecode(t, this);
                      case 17:
                          return e.next = 19, I.Video.waitVideoDecodeInitResult();
                      case 19:
                          return e.abrupt("return", e.sent);
                      case 20:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t, n) {
              return G.apply(this, arguments)
          }),
          initAudioEncode: (x = (0, s.default)(u.default.mark(function e(t, n, i) {
              var r, a, o, s, d = arguments;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return r = d.length > 3 && void 0 !== d[3] && d[3], a = d.length > 4 ? d[4] : void 0, o = d.length > 5 ? d[5] : void 0, X("initAudioEncode"), K.default.add_monitor("INITAE"), this.throwErrorWhenParameterIsEmpty(t), _.default.monitorCid = new URL(n).searchParams.get("cid"), this.initAudioDataChannel(_.default.monitorCid, i), s = {
                              sampleRate: this.audioCtx.sampleRate,
                              userid: i,
                              log: r,
                              meetingid: a,
                              meetingnumb: o
                          }, E.setAudioEngineInitProperties(n, s), e.next = 12, E.initAudioEncode(t, this);
                      case 12:
                          return e.next = 14, v.AudioService.waitAudioEncodeInitResult();
                      case 14:
                          return e.abrupt("return", e.sent);
                      case 15:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t, n) {
              return x.apply(this, arguments)
          }),
          initAudioDecode: (U = (0, s.default)(u.default.mark(function e(t, n, i) {
              var r, a, o, s, d = arguments;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return r = d.length > 3 && void 0 !== d[3] && d[3], a = d.length > 4 ? d[4] : void 0, o = d.length > 5 ? d[5] : void 0, X("initAudioDecode"), K.default.add_monitor("INITAD"), this.throwErrorWhenParameterIsEmpty(t), _.default.monitorCid = new URL(n).searchParams.get("cid"), this.initAudioDataChannel(_.default.monitorCid, i), s = {
                              sampleRate: this.audioCtx.sampleRate,
                              userid: i,
                              log: r,
                              meetingid: a,
                              meetingnumb: o
                          }, E.setAudioEngineInitProperties(n, s), e.next = 12, E.initAudioDecode(t, this);
                      case 12:
                          return e.next = 14, v.AudioService.waitAudioDecodeInitResult();
                      case 14:
                          return e.abrupt("return", e.sent);
                      case 15:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t, n) {
              return U.apply(this, arguments)
          }),
          initSharingDecode: (V = (0, s.default)(u.default.mark(function e(t, n, i) {
              var r, a, o, s, d, c = arguments;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return r = c.length > 3 && void 0 !== c[3] && c[3], a = c.length > 4 ? c[4] : void 0, o = c.length > 5 ? c[5] : void 0, X("initSharingDecode"), K.default.add_monitor("INITSD"), this.recordSharingParamInfo(), this.throwErrorWhenParameterIsEmpty(t), _.default.monitorCid = new URL(n).searchParams.get("cid"), e.next = 10, f.default.isSDKSupportMultiThread();
                      case 10:
                          return s = e.sent, t = s ? t.substr(0, t.lastIndexOf("/")) + "/sharing_m.min.js" : t.substr(0, t.lastIndexOf("/")) + "/sharing_s.min.js", d = {
                              log: r,
                              userid: i,
                              meetingid: a,
                              meetingnumb: o,
                              isSupportMultiThread: s
                          }, E.setSharingEngineInitProperties(n, d), e.next = 16, E.initSharingDecode(t, this);
                      case 16:
                          return e.next = 18, D.Sharing.waitSharingDecodeResult();
                      case 18:
                          return e.abrupt("return", e.sent);
                      case 19:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t, n) {
              return V.apply(this, arguments)
          }),
          initSharingEncode: (L = (0, s.default)(u.default.mark(function e(t, n, i) {
              var r, a, o, s, d, c = arguments;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return r = c.length > 3 && void 0 !== c[3] && c[3], a = c.length > 4 ? c[4] : void 0, o = c.length > 5 ? c[5] : void 0, X("initSharingEncode"), K.default.add_monitor("INITSE"), this.throwErrorWhenParameterIsEmpty(t), e.next = 8, f.default.isSDKSupportMultiThread();
                      case 8:
                          return s = e.sent, t = s ? t.substr(0, t.lastIndexOf("/")) + "/sharing_m.min.js" : t.substr(0, t.lastIndexOf("/")) + "/sharing_s.min.js", _.default.monitorCid = new URL(n).searchParams.get("cid"), d = {
                              log: r,
                              userid: i,
                              meetingid: a,
                              meetingnumb: o,
                              isSupportMultiThread: s
                          }, E.setSharingEngineInitProperties(n, d), e.next = 15, E.initSharingEncode(t, this);
                      case 15:
                          return e.next = 17, D.Sharing.waitSharingEncodeResult();
                      case 17:
                          return e.abrupt("return", e.sent);
                      case 18:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t, n) {
              return L.apply(this, arguments)
          }),
          _listenInitEvent: function() {
              var e = {
                      VIDEO_ENCODE_INIT: I.VIDEO_EVENT.VIDEO_ENCODE_INIT_SUCCESS,
                      VIDEO_DECODE_INIT: I.VIDEO_EVENT.VIDEO_DECODE_INIT_SUCCESS,
                      AUDIO_ENCODE: v.AUDIO_INIT_EVENT.AUDIO_ENCODE_SUCCESS,
                      AUDIO_DECODE: v.AUDIO_INIT_EVENT.AUDIO_DECODE_SUCCESS,
                      SHARING_DECODE: D.SHARING_INIT_EVENT.SHARING_DECODE_SUCCESS,
                      SHARING_ENCODE: D.SHARING_INIT_EVENT.SHARING_ENCODE_SUCCESS
                  },
                  t = {
                      VIDEO_ENCODE_INIT: I.VIDEO_EVENT.VIDEO_ENCODE_INIT_FAILED,
                      VIDEO_DECODE_INIT: I.VIDEO_EVENT.VIDEO_DECODE_INIT_FAILED,
                      AUDIO_ENCODE: v.AUDIO_INIT_EVENT.AUDIO_ENCODE_FAILED,
                      AUDIO_DECODE: v.AUDIO_INIT_EVENT.AUDIO_DECODE_FAILED,
                      SHARING_DECODE: D.SHARING_INIT_EVENT.SHARING_DECODE_FAILED,
                      SHARING_ENCODE: D.SHARING_INIT_EVENT.SHARING_ENCODE_FAILED
                  },
                  n = {
                      VIDEO_ENCODE_INIT: {
                          success: h.INIT_SUCCESS_VIDEO,
                          failed: h.INIT_FAILED_VIDEO,
                          callbackDataValue: m.EncodeDecodeEnum.encode
                      },
                      VIDEO_DECODE_INIT: {
                          success: h.INIT_SUCCESS_VIDEO,
                          failed: h.INIT_FAILED_VIDEO,
                          callbackDataValue: m.EncodeDecodeEnum.decode
                      },
                      AUDIO_ENCODE: {
                          success: h.INIT_SUCCESS_AUDIO,
                          failed: h.INIT_FAILED_AUDIO,
                          callbackDataValue: m.EncodeDecodeEnum.encode
                      },
                      AUDIO_DECODE: {
                          success: h.INIT_SUCCESS_AUDIO,
                          failed: h.INIT_FAILED_AUDIO,
                          callbackDataValue: m.EncodeDecodeEnum.decode
                      },
                      SHARING_DECODE: {
                          success: h.INIT_SUCCESS_SHARING,
                          failed: h.INIT_FAILED_SHARING,
                          callbackDataValue: m.EncodeDecodeEnum.decode
                      },
                      SHARING_ENCODE: {
                          success: h.INIT_SUCCESS_SHARING,
                          failed: h.INIT_FAILED_SHARING,
                          callbackDataValue: m.EncodeDecodeEnum.encode
                      }
                  },
                  i = (0, o.default)(e).map(function(n) {
                      return {
                          k: n,
                          promise: new a.default(function(i, r) {
                              A.default.on(e[n], function() {
                                  i(!0)
                              }), A.default.on(t[n], function() {
                                  i(!1)
                              })
                          })
                      }
                  }).map(function(e) {
                      return e.promise = e.promise.then(function(t) {
                          return X("init => ".concat(e.k, " => ").concat(t)), t ? n[e.k] && n[e.k].success && _.default.Notify_APPUI(n[e.k].success, n[e.k].callbackDataValue) : n[e.k] && n[e.k].failed && _.default.Notify_APPUI(n[e.k].failed, n[e.k].callbackDataValue), t
                      }), e
                  }),
                  r = {
                      video: {
                          success: h.INIT_SUCCESS_VIDEO,
                          failed: h.INIT_FAILED_VIDEO
                      },
                      audio: {
                          success: h.INIT_SUCCESS_AUDIO,
                          failed: h.INIT_FAILED_AUDIO
                      },
                      sharing: {
                          success: h.INIT_SUCCESS_SHARING,
                          failed: h.INIT_FAILED_SHARING
                      }
                  };
              (0, o.default)(r).map(function(e) {
                  var t = i.filter(function(t) {
                      return -1 !== t.k.toLowerCase().indexOf(e)
                  }).map(function(e) {
                      return e.promise
                  });
                  return a.default.all(t).then(function(e) {
                      return !(e.filter(function(e) {
                          return !e
                      }).length > 0)
                  })
              })
          },
          JsMediaSDK_UnInit: function() {
              E.Stop_Monitor(), E.JsAudioEngine_UnInit(), E.JsVideoEngine_UnInit(), E.JsSharingEngine_UnInit(), this.videoRenderArray.length && this.videoRenderArray.forEach(function(e) {
                  e.display && (e.display.cleanup(), e.display = null)
              }), _.default.Notify_APPUI = null
          },
          StartAudioMediaCapture: function() {
              this.EndAudioMediaStream();
              var e, t = null;
              this.audioCapture && (t = this.audioCapture.AudioSelectValue), e = {
                  audio: !!this.audioCapture && {
                      deviceId: t ? {
                          exact: t
                      } : void 0,
                      autoGainControl: !1
                  },
                  video: !1
              };
              var n = this.handleAudioCapture.bind(this),
                  i = this.handleAudioError.bind(this);
              navigator.mediaDevices.getUserMedia(e).then(n, i)
          },
          StartDesktopMediaCapture: (w = (0, s.default)(u.default.mark(function e() {
              var t, n, i, r, a;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          t = this, f.default.browser.isEdge ? (n = this.handleDesktopCapture.bind(this), i = this.handleCaptureError.bind(this), navigator.getDisplayMedia({
                              video: !0
                          }).then(n, i)) : navigator.mediaDevices.getDisplayMedia ? (r = this.handleDesktopCapture.bind(this), a = this.handleCaptureError.bind(this), navigator.mediaDevices.getDisplayMedia({
                              video: !0
                          }).then(r, a)) : window.getScreenId(function(e, n, i) {
                              if (e) {
                                  var r;
                                  switch (e) {
                                      case "WCL.userCancel":
                                          r = h.USER_CANCEL_PERMISSION_REQUEST;
                                          break;
                                      case "WCL.extensionUninstalled":
                                          r = h.DESKTOP_SHARING_CHROME_EXTENSION_UNINSTALLED;
                                          break;
                                      case "WCL.PermissionDeniedError":
                                          r = h.DESKTOP_SHARING_PERMISSION_DENIED
                                  }
                                  t.StopSharingCapture(), r && (K.default.add_monitor("SCSF"), _.default.Notify_APPUI(r, null))
                              } else navigator.mediaDevices.getUserMedia(i).then(function(e) {
                                  t.desktopSharingMediaStram = e, _.default.Notify_APPUI(h.DESKTOP_SHARING_CAPTURE_SUCCESS, null), t.desktopSharingMediaStram.getVideoTracks()[0].onended = function() {
                                      K.default.add_monitor("SSBB"), _.default.Notify_APPUI(h.USER_STOP_DESKTOP_SHARING, null), t.StopSharingCapture()
                                  }, t.Start_Desktop_Sharing()
                              }).catch(function(e) {
                                  K.default.add_monitor("SCCF"), t.StopSharingCapture(), _.default.Notify_APPUI(h.DESKTOP_SHARING_ERROR, null)
                              })
                          });
                      case 2:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function() {
              return w.apply(this, arguments)
          }),
          StartVideoMediaCapture: (k = (0, s.default)(u.default.mark(function e() {
              var t, n, i, r, a;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          return this.EndVideoMediaStream(), t = null, n = null, null, this.videoCaptureValue && (t = this.videoCaptureValue.VideoSelectValue), i = !!this.videoCaptureValue && (!!f.default.browser.isSafari || {
                              width: this.videoCaptureValue.width ? this.videoCaptureValue.width : 320,
                              height: this.videoCaptureValue.height ? this.videoCaptureValue.height : 180,
                              deviceId: t ? {
                                  exact: t
                              } : void 0
                          }), X("try to getusermedia", n = {
                              audio: !1,
                              video: i
                          }), e.prev = 9, r = this.videoCaptureValue, this.isMediaDevicesGetUserMediaNow = !0, e.prev = 12, e.next = 15, navigator.mediaDevices.getUserMedia(n);
                      case 15:
                          a = e.sent, e.next = 23;
                          break;
                      case 18:
                          return e.prev = 18, e.t0 = e.catch(12), e.next = 22, navigator.mediaDevices.getUserMedia((0, d.default)({}, n, {
                              video: !0
                          }));
                      case 22:
                          a = e.sent;
                      case 23:
                          return this.isMediaDevicesGetUserMediaNow = !1, X("mediaStream is ok"), this.videoCaptureValue = r, e.next = 28, this.handleVideoCapture(a);
                      case 28:
                          e.sent && (_.default.monitorVideoCapture = !0, _.default.Notify_APPUI(h.START_VIDEO_CAPTURE_SUCCESS, null)), e.next = 35;
                          break;
                      case 32:
                          e.prev = 32, e.t1 = e.catch(9), this.handleVideoError(e.t1);
                      case 35:
                      case "end":
                          return e.stop()
                  }
              }, e, this, [
                  [9, 32],
                  [12, 18]
              ])
          })), function() {
              return k.apply(this, arguments)
          }),
          Start_Audio_Play: function() {
              if (this.audioPlay = !0, this.isSupportAudioWorklet) _.default.AudioNode && _.default.AudioNode.postCMD("startPlayAudio", null);
              else if (this.audioPlayNode && this.audioCtx) this.audioPlayNode.connect(this.audioCtx.destination);
              else {
                  this.audioPlayNode = this.audioCtx.createScriptProcessor(this.audionodebuffersize, 1, 1);
                  var e = this;
                  this.audioPlayNode.onaudioprocess = function(t) {
                      e.JsMediaSDK_OnAudioprocess(t)
                  }, this.audioPlayNode.connect(this.audioCtx.destination)
              }
              E.UpdateAudioPlayStatus(!0)
          },
          Stop_Audio_Play: function() {
              if (E.UpdateAudioPlayStatus(!1), this.isSupportAudioWorklet) _.default.AudioNode && _.default.AudioNode.postCMD("stopPlayAudio", null);
              else if (this.audioPlay = !1, this.audioPlayNode) try {
                  this.audioPlayNode.disconnect(this.audioCtx.destination)
              } catch (e) {
                  this.JsMediaSDK_Log(e)
              }
          },
          Remove_Audio_Play: function() {
              if (E.UpdateAudioPlayStatus(!1), this.audioPlay = !1, this.isSupportAudioWorklet) _.default.AudioNode && _.default.AudioNode.postCMD("stopPlayAudio", null);
              else if (this.audioPlayNode) {
                  try {
                      this.audioPlayNode.disconnect(this.audioCtx.destination)
                  } catch (e) {
                      this.JsMediaSDK_Log(e)
                  }
                  this.audioPlayNode = null
              }
          },
          Meeting_Fail_Over: function(e, t) {
              E.Meeting_Fail_Over(e, t)
          },
          Start_Audio_Capture: function() {
              if (!(this.audioRecordNode && this.audioCtx.destination && this.AudioMediaStream))
                  if (this.AudioMediaStream) {
                      var e = this.audioCtx.createMediaStreamSource(this.AudioMediaStream);
                      if (this.webrtcAudioNode = e, this.isSupportAudioWorklet) this.isCaputureNodeConnect || (this.webrtcAudioNode.connect(_.default.AudioNode), _.default.AudioNode.postCMD("StartCaptureAudio", null), this.isCaputureNodeConnect = !0);
                      else {
                          this.audioRecordNode = this.audioCtx.createScriptProcessor(this.audionoderecordbuffersize, 1, 1), e.connect(this.audioRecordNode), this.audioRecordNode.connect(this.audioCtx.destination);
                          var t = this;
                          this.audioRecordNode.onaudioprocess = function(e) {
                              if (t.captureAudioStatus === h.AUDIO_REMOVE);
                              else {
                                  var n = e.inputBuffer.getChannelData(0),
                                      i = new Float32Array(n);
                                  E.Audio_Encode_Frame(t.audioCapture.ssrc, i, n.length, 0)
                              }
                          }
                      }
                  } else this.StartAudioMediaCapture(), this.captureAudioStatus = h.AUDIO_START
          },
          Stop_Audio_Capture: function() {
              this.captureAudioStatus = h.AUDIO_STOP, E.Notify_Audio_Thread_Status(_.default.SPECIAL_ID, h.AUDIO_STOP)
          },
          Start_Video_Capture: function() {
              var e = this;
              if (this.VideoMediaStram) {
                  var t = this;
                  return new a.default(function(n, i) {
                      var r = function e() {
                          var n, i;
                          t.isSupportImageCapture ? (n = t.videoCaptureWidth, i = t.videoCaptureHeight) : (t.isVideoCaptureLoadedmetadata = !0, n = t.videoCaptureValue.videoCtrl.videoWidth, i = t.videoCaptureValue.videoCtrl.videoHeight, t.videoCaptureValue.canvasCtrl.width = n, t.videoCaptureValue.canvasCtrl.height = i, t.videoCaptureWidth = n, t.videoCaptureHeight = i, t.videoCaptureContext = t.videoCaptureValue.canvasCtrl.getContext("2d"), t.captureVideoOutputCanvasDomList.forEach(function(e) {
                              e.width = n, e.height = i
                          }), t.videoCaptureValue.videoCtrl.removeEventListener("loadedmetadata", e)), E.Notify_Video_Encode_Thread({
                              command: "startVideoEncode",
                              width: t.videoCaptureWidth,
                              height: t.videoCaptureHeight,
                              fps: t.videoCaptureValue.fps,
                              ssid: t.videoCaptureValue.ssid,
                              mtu_size: t.mtu_size
                          }), E.Notify_Video_Encode_Thread({
                              command: "updateVideoPara",
                              width: n,
                              height: i,
                              fps: t.videoCaptureValue.fps
                          }), _.default.monitorVideoUserID = t.videoCaptureValue.ssid, _.default.Notify_APPUI(h.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT, {
                              width: n,
                              height: i
                          })
                      };
                      if (e.isSupportImageCapture) return r(), t.videoCaptureValue.videoCtrl.srcObject = t.VideoMediaStram, void n(!0);
                      t.videoCaptureValue.videoCtrl.addEventListener("loadedmetadata", r), setTimeout(function() {
                          e.VideoMediaStram ? !1 === e.VideoMediaStram.active ? i(new p.CameraOccupiedError("VideoMediaStram.active equals false")) : n(!0) : i(!1)
                      }, 1e3), t.videoCaptureValue.videoCtrl.setAttribute("playsinline", !0);
                      try {
                          t.videoCaptureValue.videoCtrl.srcObject = t.VideoMediaStram
                      } catch (n) {
                          t.videoCaptureValue.videoCtrl.src = URL.createObjectURL(e.VideoMediaStram)
                      }
                      t.videoCaptureValue.videoCtrl.play()
                  })
              }
              this.StartVideoMediaCapture()
          },
          Stop_Video_Capture: function() {
              E.Notify_Video_Encode_Thread({
                  command: "stopVideoEncode"
              }), this.isStartVideoCapture = !1, this.isVideoCaptureLoadedmetadata = !1, clearInterval(this.videoCaptureInterval), this.videoCaptureInterval = 0, this.EndVideoMediaStream(), this.videoCaptureValue && this.videoCaptureValue.videoCtrl && this.videoCaptureValue.videoCtrl.pause(), this.videoCaptureValue = null
          },
          Remove_Video_Capture: function() {
              clearInterval(this.videoCaptureInterval), this.videoCaptureInterval = 0, this.EndVideoMediaStream(), this.videoCaptureValue = null, this.videoCaptureValue.videoCtrl && this.videoCaptureValue.videoCtrl.pause()
          },
          Start_Desktop_Sharing: function() {
              if (this.desktopSharingMediaStram) {
                  var e = this;
                  return new a.default(function(t, n) {
                      var i = function() {
                          var t = (0, s.default)(u.default.mark(function t(n) {
                              var r, a, o, s, d, c, l;
                              return u.default.wrap(function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                      case 0:
                                          if (!e.isSupportImageCapture) {
                                              t.next = 13;
                                              break
                                          }
                                          return o = e.desktopSharingMediaStram.getVideoTracks()[0], e.sharingImageCapture = new ImageCapture(o), t.next = 5, e.sharingImageCapture.grabFrame();
                                      case 5:
                                          s = t.sent, e.desktopSharingCaptureWidth = s.width, e.desktopSharingCaptureHeight = s.height, r = s.width, a = s.height;
                                          try {
                                              e.sharingOffscreenCanvas = e.desktopSharingValue.canvas.transferControlToOffscreen(), d = _.default.SPECIAL_ID, _.default.localSharingEncMGR && (c = _.default.localSharingEncMGR.map.get(d)) && (l = {
                                                  command: "newSharingPara",
                                                  data: e.sharingOffscreenCanvas,
                                                  width: r,
                                                  height: a,
                                                  flipSend: e.flipSend,
                                                  is32bitbrowser: e.is32bitbrowser
                                              }, c.postMessage(l, [l.data]))
                                          } catch (t) {
                                              d = _.default.SPECIAL_ID, _.default.localSharingEncMGR && (c = _.default.localSharingEncMGR.map.get(d)) && (l = {
                                                  command: "newSharingPara",
                                                  flipSend: e.flipSend,
                                                  is32bitbrowser: e.is32bitbrowser
                                              }, c.postMessage(l))
                                          }
                                          t.next = 22;
                                          break;
                                      case 13:
                                          e.isdesktopCaptureLoadedmetadata = !0, r = e.desktopSharingValue.video.videoWidth, a = e.desktopSharingValue.video.videoHeight, e.desktopSharingValue.canvas.width = r, e.desktopSharingValue.canvas.height = a, e.desktopSharingCaptureWidth = r, e.desktopSharingCaptureHeight = a, e.desktopCaptureContext = e.desktopSharingValue.canvas.getContext("2d"), e.desktopSharingValue.video.removeEventListener("loadedmetadata", i);
                                      case 22:
                                          _.default.monitorSharingUserID = e.desktopSharingValue.ssid, E.Notify_Sharing_Encode_Thread({
                                              command: "startSharingEncode",
                                              width: r,
                                              height: a,
                                              fps: 8,
                                              ssid: e.desktopSharingValue.ssid
                                          }), _.default.Notify_APPUI(h.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT, {
                                              width: r,
                                              height: a
                                          });
                                      case 25:
                                      case "end":
                                          return t.stop()
                                  }
                              }, t, this)
                          }));
                          return function(e) {
                              return t.apply(this, arguments)
                          }
                      }();
                      if (e.isSupportImageCapture) {
                          i();
                          try {
                              e.desktopSharingValue.video.srcObject = e.desktopSharingMediaStram
                          } catch (t) {
                              e.desktopSharingValue.video.src = URL.createObjectURL(e.desktopSharingMediaStram)
                          }
                          t(!0)
                      } else {
                          e.desktopSharingValue.video.addEventListener("loadedmetadata", i), e.desktopSharingValue.video.setAttribute("playsinline", !0);
                          try {
                              e.desktopSharingValue.video.srcObject = e.desktopSharingMediaStram
                          } catch (t) {
                              e.desktopSharingValue.video.src = URL.createObjectURL(e.desktopSharingMediaStram)
                          }
                          e.desktopSharingValue.video.play(), t(!0)
                      }
                  })
              }
              this.StartDesktopMediaCapture()
          },
          Process_Sharing: (b = (0, s.default)(u.default.mark(function e() {
              var t, n, i, r, a, o, s, d, c;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          if (this.desktopSharingValue && this.desktopSharingSend) {
                              e.next = 2;
                              break
                          }
                          return e.abrupt("return");
                      case 2:
                          if (!this.isSupportImageCapture) {
                              e.next = 21;
                              break
                          }
                          return e.prev = 4, e.next = 7, this.sharingImageCapture.grabFrame();
                      case 7:
                          r = e.sent, t = r.width, n = r.height, a = _.default.SPECIAL_ID, _.default.localSharingEncMGR && (o = _.default.localSharingEncMGR.map.get(a)) && (s = {
                              command: "encodeSharingFrame",
                              data: r,
                              isImage: !0
                          }, o.postMessage(s, [s.data])), e.next = 19;
                          break;
                      case 14:
                          e.prev = 14, e.t0 = e.catch(4), K.default.add_monitor3("SICF"), a = _.default.SPECIAL_ID, _.default.localSharingEncMGR && (o = _.default.localSharingEncMGR.map.get(a)) && (s = {
                              command: "encodeSharingFrame"
                          }, o.postMessage(s));
                      case 19:
                          e.next = 24;
                          break;
                      case 21:
                          i = this.desktopSharingValue.video, t = i.videoWidth, n = i.videoHeight;
                      case 24:
                          t == this.desktopSharingCaptureWidth && n == this.desktopSharingCaptureHeight || (_.default.Notify_APPUI(h.CURRENT_DESKTOP_SHARING_WIDTH_HEIGHT, {
                              width: t,
                              height: n
                          }), this.desktopSharingCaptureWidth = t, this.desktopSharingCaptureHeight = n);
                          try {
                              this.isdesktopCaptureLoadedmetadata && i && (this.desktopSharingValue.canvas.width = t, this.desktopSharingValue.canvas.height = n, d = this.desktopCaptureContext, !this.is32bitbrowser || this.flipSend ? (d.drawImage(i, 0, 0, t, n, 0, 0, t, n), c = d.getImageData(0, 0, t, n), E.Sharing_Encode_Frame(_.default.SPECIAL_ID, c.data, c.data.length, 0, t, n), this.flipSend = !1) : (this.flipSend = !0, E.Sharing_Encode_Frame(_.default.SPECIAL_ID, null, 0, 0, 0, 0)))
                          } catch (e) {
                              K.default.add_monitor3("GIDF"), setTimeout(function() {
                                  E.Sharing_Encode_Frame(_.default.SPECIAL_ID, null, 0, 0, 0, 0)
                              }, 1e3)
                          }
                          case 26:
                          case "end":
                              return e.stop()
                  }
              }, e, this, [
                  [4, 14]
              ])
          })), function() {
              return b.apply(this, arguments)
          }),
          Process_Video: (P = (0, s.default)(u.default.mark(function e() {
              var t, n, i, r, a, o, s, d;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          if (!this.isSupportImageCapture) {
                              e.next = 6;
                              break
                          }
                          if (!this.wecancapturevideo) {
                              e.next = 5;
                              break
                          }
                          this.wecancapturevideo = !1, e.next = 6;
                          break;
                      case 5:
                          return e.abrupt("return");
                      case 6:
                          if (this.videoCaptureValue && this.isStartVideoCapture) {
                              e.next = 9;
                              break
                          }
                          return this.wecancapturevideo = !0, e.abrupt("return");
                      case 9:
                          if (t = this, r = this.videoCaptureWidth, a = this.videoCaptureHeight, n = r, i = a, this.isSupportImageCapture || (o = this.videoCaptureValue.videoCtrl, n = o.videoWidth, i = o.videoHeight), r && a && (n !== r || i !== a) && (X("video width/height changed old => begin", r, a, n, i), _.default.Notify_APPUI(h.CURRENT_CAPTURE_VIDEO_WIDTH_HEIGHT, {
                                  width: n,
                                  height: i
                              }), E.Notify_Video_Encode_Thread({
                                  command: "updateVideoPara",
                                  width: n,
                                  height: i,
                                  fps: this.videoCaptureValue.fps
                              }), this.videoCaptureWidth = n, this.videoCaptureHeight = i), !this.isSupportImageCapture) {
                              e.next = 31;
                              break
                          }
                          return e.prev = 17, this.VideoMediaStram.getVideoTracks()[0].muted, e.next = 21, this.videoImageCapture.grabFrame();
                      case 21:
                          s = e.sent, E.transportImageBitMap(this.captureVideoOutputCanvasDomList[0].id, s), e.next = 29;
                          break;
                      case 25:
                          e.prev = 25, e.t0 = e.catch(17), K.default.add_monitor3("VICF"), E.transportImageBitMap(this.captureVideoOutputCanvasDomList[0].id, null);
                      case 29:
                          return this.wecancapturevideo = !0, e.abrupt("return");
                      case 31:
                          this.isVideoCaptureLoadedmetadata && o && ((o.paused || o.ended) && o.play(), t.captureVideoOutputCanvasDomList[0].height = i, t.captureVideoOutputCanvasDomList[0].width = n, t.videoCaptureContext.drawImage(o, 0, 0, t.videoCaptureWidth, t.videoCaptureHeight, 0, 0, t.videoCaptureWidth, t.videoCaptureHeight), d = t.videoCaptureContext.getImageData(0, 0, t.videoCaptureWidth, t.videoCaptureHeight), E.Video_Encode_Frame(_.default.SPECIAL_ID, d.data, d.data.length, 0));
                      case 32:
                      case "end":
                          return e.stop()
                  }
              }, e, this, [
                  [17, 25]
              ])
          })), function() {
              return P.apply(this, arguments)
          }),
          Remove_Audio_Capture: function() {
              if (E.Notify_Audio_Thread_Status(_.default.SPECIAL_ID, h.AUDIO_REMOVE), this.captureAudioStatus = h.AUDIO_REMOVE, this.firstSetDelay = !0, this.audioRecordNode) {
                  try {
                      this.audioRecordNode.disconnect(this.audioCtx.destination)
                  } catch (e) {
                      this.JsMediaSDK_Log(e)
                  }
                  this.audioRecordNode = null
              }
              if (this.webrtcAudioNode && this.isSupportAudioWorklet && _.default.AudioNode) {
                  try {
                      this.webrtcAudioNode.disconnect(_.default.AudioNode)
                  } catch (e) {
                      this.JsMediaSDK_Log(e)
                  }
                  this.webrtcAudioNode = null
              }
          },
          Start_Video_Play: function() {
              this.videoRenderIntervalHandle || (this.videoRenderIntervalHandle = this.JsMediaSDK_VideoRenderInterval(this.videorenderinterval))
          },
          Stop_Video_Play: function() {
              E.UpdateVideoPlayStatus(!1), this.VideoRenderObj && (this.VideoRenderObj.ClearQueue(), this.VideoRenderObj.Set_WaterMark_Info(this.waterMarkCanvas, this.isCreateVideoWaterMark, this.videoWaterMarkName)), this.videoRenderIntervalHandle && (clearInterval(this.videoRenderIntervalHandle), this.videoRenderIntervalHandle = null)
          },
          Remove_Video_Play: function() {
              E.UpdateVideoPlayStatus(!1), this.videoRenderIntervalHandle && (clearInterval(this.videoRenderIntervalHandle), this.videoRenderIntervalHandle = null), E.Notify_Video_Decode_Thread({
                  command: "removeVideoPlay"
              })
          },
          EndMedia: function() {
              try {
                  this.rtcPeerConnectionList.forEach(function(e) {
                      e && (e.forceClose(), e = null)
                  }), this.rtcPeerConnectionList = []
              } catch (e) {
                  X.error("clear rtcPeerConnectionList err", e)
              }
              try {
                  this.AudioMediaStream && (this.AudioMediaStream.getTracks().forEach(function(e) {
                      e.stop()
                  }), this.AudioMediaStream = null), this.Remove_Audio_Play(), this.Remove_Audio_Capture(), this.Remove_Video_Play(), this.audioCtx && (this.audioCtx.close(), this.audioCtx = null), this.EndVideoMediaStream(), this.EndSharingMediaStream()
              } catch (e) {
                  X("endMedia", e)
              }
              try {
                  E.disableSocketReconnect()
              } catch (e) {
                  X("endMedia", e)
              }
              try {
                  this.remoteControl && this.remoteControl.destroy()
              } catch (e) {
                  X("endMedia", e)
              }
          },
          EndAudioMediaStream: function() {
              this.AudioMediaStream && (this.AudioMediaStream.getTracks().forEach(function(e) {
                  e.stop()
              }), this.AudioMediaStream = null)
          },
          EndVideoMediaStream: function() {
              this.VideoMediaStram && (this.VideoMediaStram.getTracks().forEach(function(e) {
                  e.stop()
              }), this.VideoMediaStram = null)
          },
          EndSharingMediaStream: function() {
              this.desktopSharingMediaStram && (this.desktopSharingMediaStram.getTracks().forEach(function(e) {
                  e.stop()
              }), this.desktopSharingMediaStram = null)
          },
          StopSharingCapture: function() {
              this.EndSharingMediaStream(), this.desktopSharingSend = !1, this.isStartDesktopSharing = !1, this.desktopSharingMediaStram = null, this.desktopSharingValue = null
          },
          UnMuteAudio: function() {
              this.captureAudioStatus = h.AUDIO_START, E.Notify_Audio_Thread_Status(_.default.SPECIAL_ID, h.AUDIO_START)
          },
          MuteAudio: function() {
              this.Stop_Audio_Capture()
          },
          handleDesktopCapture: function(e) {
              this.desktopSharingMediaStram = e;
              var t = this;
              this.desktopSharingMediaStram.getVideoTracks()[0].onended = function() {
                  K.default.add_monitor("SSBB"), _.default.Notify_APPUI(h.USER_STOP_DESKTOP_SHARING, null), t.StopSharingCapture()
              }, this.Start_Desktop_Sharing(), _.default.Notify_APPUI(h.DESKTOP_SHARING_CAPTURE_SUCCESS, null)
          },
          handleCaptureError: function(e) {
              this.StopSharingCapture(), K.default.add_monitor("SCCF"), "Permission denied by system" == e.message ? _.default.Notify_APPUI(h.DESKTOP_SHARING_SYSTEM_ERROR, null) : _.default.Notify_APPUI(h.DESKTOP_SHARING_ERROR, null)
          },
          handleAudioCapture: function(e) {
              _.default.monitorAudioCapture = !0, _.default.Notify_APPUI(h.USER_GRANT_CAPTURE_AUDIO, null), this.AudioMediaStream = e, this.Start_Audio_Capture()
          },
          handleVideoCapture: function(e) {
              var i, t = this,
                  n = this;
              return new a.default((i = (0, s.default)(u.default.mark(function i(r, a) {
                  var o;
                  return u.default.wrap(function(i) {
                      for (;;) switch (i.prev = i.next) {
                          case 0:
                              if (e) {
                                  i.next = 2;
                                  break
                              }
                              return i.abrupt("return", a(new Error("no stream")));
                          case 2:
                              return n.VideoMediaStram = e, n.isSupportImageCapture && (t.videoImageCapture = new ImageCapture(e.getVideoTracks()[0]), t.videoCaptureWidth = 640, t.videoCaptureHeight = 360), i.prev = 4, i.next = 7, n.Start_Video_Capture();
                          case 7:
                              o = i.sent, r(o), i.next = 15;
                              break;
                          case 11:
                              i.prev = 11, i.t0 = i.catch(4), X("Start_Video_Capture", i.t0), a(new Error("media stream is ok, but start video capture fail"));
                          case 15:
                          case "end":
                              return i.stop()
                      }
                  }, i, this, [
                      [4, 11]
                  ])
              })), function(e, t) {
                  return i.apply(this, arguments)
              }))
          },
          handleAudioError: function(e) {
              K.default.add_monitor("HADF"), this.AudioMediaStream = null, _.default.monitorAudioCapture = !1, _.default.Notify_APPUI(h.USER_FORBIDDED_CAPTURE_AUDIO, null)
          },
          handleVideoError: function(e) {
              _.default.monitorVideoCapture = !1, X("handleVideoError", e), e instanceof p.CameraOccupiedError || e.name && -1 !== ["NotReadableError", "SourceUnavailableError"].indexOf(e.name) ? _.default.Notify_APPUI(h.USER_CAMERA_IS_TAKEN_BY_OTHER_PROGRAMS, null) : (K.default.add_monitor("HVDF"), _.default.Notify_APPUI(h.USER_FORBIDDED_CAPTURE_VIDEO, null)), this.Stop_Video_Capture()
          },
          switchCanvasForVideoCapture: function(e) {
              var t = [].concat(e),
                  n = t[0];
              if (this.captureVideoOutputCanvasDomList = t, this.videoCaptureValue.canvasCtrl = n, !this.isSupportImageCapture) {
                  var i = this.videoCaptureValue.videoCtrl.videoWidth,
                      r = this.videoCaptureValue.videoCtrl.videoHeight;
                  t.forEach(function(e) {
                      e.width = i, e.height = r
                  }), this.videoCaptureValue.canvasCtrl.width = i, this.videoCaptureValue.canvasCtrl.height = r, this.videoCaptureContext = n.getContext("2d")
              }
          },
          Notify_MeidaSDK: (N = (0, s.default)(u.default.mark(function e(t, n) {
              var i, r, o, s, c, p, S, I, v, D, g, C, T, M, N, P = this;
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          X(t, n), i = 0, K.default.add_monitor2("B" + t), e.t0 = t, e.next = e.t0 === h.START_MEDIA ? 6 : e.t0 === h.ADD_RENDER_VIDEO ? 9 : e.t0 === h.STOP_RENDER_VIDEO ? 13 : e.t0 === h.SWITCH_CANVAS_FOR_VIDEO_CAPTURE ? 18 : e.t0 === h.START_CAPTURE_VIDEO ? 24 : e.t0 === h.STOP_CAPTURE_VIDEO ? 31 : e.t0 === h.ADD_RENDER_AUDIO ? 34 : e.t0 === h.STOP_RENDER_AUDIO ? 36 : e.t0 === h.UNMUTE_AUDIO ? 38 : e.t0 === h.MUTE_AUDIO ? 40 : e.t0 === h.START_SHARING ? 42 : e.t0 === h.STOP_SHARING ? 48 : e.t0 === h.CHANGE_FRAME_RATE ? 56 : e.t0 === h.CHANGE_VIDEO_RESOLUTION ? 57 : e.t0 === h.CHANGE_AUDIO_SPEAKER ? 58 : e.t0 === h.CHANGE_VIDEO_CAPTURE_DEVICE ? 60 : e.t0 === h.CHANGE_CURRENT_ACTIVE_SSRC ? 64 : e.t0 === h.CHANGE_CURRENT_SHARING_ACTIVE_SSRC ? 68 : e.t0 === h.LEAVE_MEETING ? 71 : e.t0 === h.MEETING_FAIL_OVER ? 73 : e.t0 === h.END_MEDIA ? 75 : e.t0 === h.CHANGE_AUDIO_MIC ? 79 : e.t0 === h.WEBRTC_RESTART ? 82 : e.t0 === h.LEAVE_COMPUTER_AUDIO ? 84 : e.t0 === h.JOIN_COMPUTER_AUDIO ? 94 : e.t0 === h.START_REMOTE_CONTROL ? 96 : e.t0 === h.CANCEL_REMOTE_CONTROL ? 108 : e.t0 === h.UPDATE_REMOTE_CONTROL_PROPERTIES ? 110 : e.t0 === h.RESEND_REMOTE_CONTROL_POSITION_PDU ? 112 : e.t0 === h.START_DESKTOP_SHARING ? 114 : e.t0 === h.STOP_DESKTOP_SHARING ? 127 : e.t0 === h.PAUSE_DESKTOP_SHARING ? 136 : e.t0 === h.RESUME_DESKTOP_SHARING ? 144 : e.t0 === h.CHECK_CHROME_SHARING_EXTENSION ? 153 : e.t0 === h.COMMAND_SOCKET_MESSAGE_NOTIFY ? 159 : 171;
                          break;
                      case 6:
                          return this.isMediaStart = !0, this.StartAudioMediaCapture(), e.abrupt("break", 172);
                      case 9:
                          if (this.isCreateVideoWaterMark = n.enableWaterMark, this.isCreateVideoWaterMark ? this.videoWaterMarkName = n.waterMarkText : this.videoWaterMarkName = "", this.isSupportOffscreenCanvas) try {
                              r = n.canvas.id, o = n.canvas.transferControlToOffscreen(), s = _.default.SPECIAL_ID, _.default.localVideoDecMGR && (c = _.default.localVideoDecMGR.map.get(s)) && (p = {
                                  command: "renderOfflineCanvas",
                                  ssrc: n.ssrc,
                                  rendercanvasID: r,
                                  canvas: o,
                                  isCreateVideoWaterMark: this.isCreateVideoWaterMark,
                                  videoWaterMarkName: this.videoWaterMarkName
                              }, c.postMessage(p, [o]))
                          } catch (e) {
                              s = _.default.SPECIAL_ID, _.default.localVideoDecMGR && (c = _.default.localVideoDecMGR.map.get(s)) && (p = {
                                  command: "renderOfflineCanvas",
                                  rendercanvasID: r,
                                  ssrc: n.ssrc,
                                  videoWaterMarkName: this.videoWaterMarkName,
                                  isCreateVideoWaterMark: this.isCreateVideoWaterMark
                              }, c.postMessage(p))
                          } else this.videoRenderArray.push(n), this.VideoRenderObj || (this.VideoRenderObj = new j.default((0, d.default)({}, {
                              Notify_APPUI: _.default.Notify_APPUI,
                              isSupportOffscreenCanvas: !1,
                              jsMediaEngine: E
                          }))), this.VideoRenderObj.Set_Render_Array(this.videoRenderArray), this.VideoRenderObj.Set_WaterMark_Info(this.waterMarkCanvas, this.isCreateVideoWaterMark, this.videoWaterMarkName), this.Start_Video_Play(), E.UpdateVideoPlayStatus(!0);
                          return e.abrupt("break", 172);
                      case 13:
                          if (this.videoWaterMarkName = "", this.isCreateVideoWaterMark = !1, this.isSupportOffscreenCanvas && E.Notify_Video_Decode_Thread({
                                  command: "stopVideoRender",
                                  ssrc: n.ssrc
                              }), this.videoRenderArray.length)
                              for (i = 0; i < this.videoRenderArray.length; i++) this.videoRenderArray[i].ssrc == n.ssrc && (this.videoRenderArray[i].display && this.videoRenderArray[i].display.cleanup(), this.videoRenderArray[i].display = null, this.videoRenderArray.splice(i, 1), 0 == this.videoRenderArray.length && this.Stop_Video_Play());
                          return e.abrupt("break", 172);
                      case 18:
                          return S = [], n instanceof Array ? S = n : S.push(n), I = this.videoCaptureValue.canvasCtrlList, v = I.filter(function(e) {
                              return -1 !== S.indexOf(e.k)
                          }).map(function(e) {
                              return e.dom
                          }), this.switchCanvasForVideoCapture(v), e.abrupt("break", 172);
                      case 24:
                          if (E.Update_Video_Encrpt(_.default.e2eencrypt), E.isVideoEncodeHandleReady()) {
                              e.next = 29;
                              break
                          }
                          return X.warn("not isVideoEncodeHandleReady so return"), K.default.add_monitor("not isVideoEncodeHandleReady so return"), e.abrupt("return");
                      case 29:
                          if (this.isStartVideoCapture) X.warn("video capture is already started, do not call again.");
                          else {
                              if (this.VALUE_CACHE_FOR_START_CAPTURE_VIDEO = (0, d.default)({}, n), this.isStartVideoCapture = !0, n.canvasCtrlList = [], n.canvas instanceof Array) {
                                  for (i = 0; i < n.canvas.length; i++)
                                      if (n.canvasCtrlList.push({
                                              k: n.canvas[i],
                                              dom: f.default.getDocumentHandle(n.canvas[i])
                                          }), this.isSupportImageCapture) try {
                                          E.transportOfflineCanvas(f.default.getDocumentHandle(n.canvas[i]).transferControlToOffscreen(), n.canvas[i])
                                      } catch (e) {}
                                  this.isSupportImageCapture && (this.isSendVideoOfflineCanvas = !0)
                              } else n.canvasCtrlList.push({
                                  k: n.canvas,
                                  dom: f.default.getDocumentHandle(n.canvas)
                              });
                              n.canvasCtrl = n.canvasCtrlList[0].dom, this.captureVideoOutputCanvasDomList = [].concat(n.canvasCtrl), f.default.browser.isSafari ? ((D = document.createElement("video")).setAttribute("style", "position:fixed;top:-10000px;left:-10000px;visibility:hidden;"), document.body.appendChild(D), n.videoCtrl = D) : n.videoCtrl = f.default.getDocumentHandle(n.video), this.videoCaptureValue = n, this.Start_Video_Capture()
                          }
                          return e.abrupt("break", 172);
                      case 31:
                          return g = this, e.abrupt("return", new a.default(function(e, t) {
                              try {
                                  if (P.isMediaDevicesGetUserMediaNow) return _.default.Notify_APPUI(h.STOP_VIDEO_CAPTURE_FAILED, null), t(new Error("Too many calls : the device is opening camera now, cannot stop video capture"));
                                  g.isStartVideoCapture && g.Stop_Video_Capture(), _.default.Notify_APPUI(h.STOP_VIDEO_CAPTURE_SUCCESS, null), e(!0)
                              } catch (e) {
                                  _.default.Notify_APPUI(h.STOP_VIDEO_CAPTURE_FAILED, null), t(e)
                              }
                          }));
                      case 34:
                          return 0 == this.audioRenderArray.length && (this.audioRenderArray.push(n), this.Start_Audio_Play()), e.abrupt("break", 172);
                      case 36:
                          if (this.audioRenderArray.length > 0)
                              for (this.Stop_Audio_Play(), i = 0; i < this.audioRenderArray.length; i++) this.audioRenderArray[i].ssrc == n.ssrc && this.audioRenderArray.splice(i, 1);
                          return e.abrupt("break", 172);
                      case 38:
                          return this.UnMuteAudio(), e.abrupt("break", 172);
                      case 40:
                          return this.MuteAudio(), e.abrupt("break", 172);
                      case 42:
                          if (this.currentshareactive = n.ssrc, null == this.currentshareactive && K.default.add_monitor2("SSRC"), this.isCreateSharingWaterMark = n.enableWaterMark, this.isCreateSharingWaterMark ? this.sharingWaterMarkName = n.waterMarkText : this.sharingWaterMarkName = "", this.isSupportOffscreenCanvas) try {
                              this.sharingRenderCanvas = n.canvas.transferControlToOffscreen(), s = _.default.SPECIAL_ID, _.default.localSharingDecMGR && (c = _.default.localSharingDecMGR.map.get(s), p = {
                                  command: "sharingRenderCanvas",
                                  canvas: this.sharingRenderCanvas,
                                  ssrc: this.currentshareactive,
                                  isCreateSharingWaterMark: this.isCreateSharingWaterMark,
                                  sharingWaterMarkName: this.sharingWaterMarkName
                              }, c.postMessage(p, [p.canvas]))
                          } catch (e) {
                              s = _.default.SPECIAL_ID, _.default.localSharingDecMGR && (c = _.default.localSharingDecMGR.map.get(s), p = {
                                  command: "sharingRenderCanvas",
                                  ssrc: this.currentshareactive,
                                  isCreateSharingWaterMark: this.isCreateSharingWaterMark,
                                  sharingWaterMarkName: this.sharingWaterMarkName
                              }, c.postMessage(p))
                          } else this.SharingRenderObj || (this.SharingRenderObj = new Q.default((0, d.default)({}, {
                              Notify_APPUI: _.default.Notify_APPUI,
                              PubSub: A.default,
                              jsMediaEngine: E
                          }))), this.sharingDisplay = new Y.default(n.canvas), this.SharingRenderObj.Set_Render_WebGL(this.sharingDisplay), this.SharingRenderObj.Change_Current_SSRC(this.currentshareactive), this.SharingRenderObj.Set_WaterMark_Info(this.waterMarkCanvas, this.isCreateSharingWaterMark, this.sharingWaterMarkName), this.sharingInterval || (this.sharingInterval = this.JsMediaSDK_SharingRenderInterval(this.sharingIntervalTime)), E.UpdateSharingPlayStatus(!0);
                          return e.abrupt("break", 172);
                      case 48:
                          return E.UpdateSharingPlayStatus(!1), this.isSupportOffscreenCanvas && E.Notify_Sharing_Decode_Thread({
                              command: "stopSharingRender"
                          }), this.isCreateSharingWaterMark = !1, this.sharingWaterMarkName = "", this.sharingInterval && (clearInterval(this.sharingInterval), this.sharingInterval = 0), this.sharingDisplay && (this.sharingDisplay.clear(), this.sharingDisplay.cleanup(), this.sharingDisplay = null), this.SharingRenderObj && (this.SharingRenderObj.ClearQueue(), this.SharingRenderObj.Set_WaterMark_Info(this.waterMarkCanvas, this.isCreateSharingWaterMark, this.sharingWaterMarkName)), e.abrupt("break", 172);
                      case 56:
                      case 57:
                          return e.abrupt("break", 172);
                      case 58:
                          return n.AudioSelectValue && this.audioDomNode && (this.audioSpeakerValue = n.AudioSelectValue, this.audioDomNode.setSinkId(n.AudioSelectValue).catch(function(e) {
                              K.default.add_monitor("AODF"), _.default.Notify_APPUI(h.AUDIO_SPEAKER_SET_ERROR, null)
                          })), e.abrupt("break", 172);
                      case 60:
                          if (C = (0, d.default)({}, this.VALUE_CACHE_FOR_START_CAPTURE_VIDEO, n), this.Stop_Video_Capture(), !this.isStartVideoCapture) {
                              if (this.isStartVideoCapture = !0, C.canvasCtrlList = [], C.canvas instanceof Array)
                                  for (i = 0; i < C.canvas.length; i++) C.canvasCtrlList.push({
                                      k: C.canvas[i],
                                      dom: f.default.getDocumentHandle(C.canvas[i])
                                  });
                              else C.canvasCtrlList.push({
                                  k: C.canvas,
                                  dom: f.default.getDocumentHandle(C.canvas)
                              });
                              C.canvasCtrl = C.canvasCtrlList[0].dom, C.videoCtrl = f.default.getDocumentHandle(C.video), this.videoCaptureValue = C, this.Start_Video_Capture()
                          }
                          return e.abrupt("break", 172);
                      case 64:
                          return this.currentactive != n.ssrc && (this.currentactive = n.ssrc, _.default.CurrentSSRC = this.currentactive), E.Notify_Audio_Thread_CurrentSSRC(_.default.CurrentSSRC), this.isSupportOffscreenCanvas ? (s = _.default.SPECIAL_ID, _.default.localVideoDecMGR && (c = _.default.localVideoDecMGR.map.get(s)) && (p = {
                              command: "CHANGE_CURRENT_ACTIVE_SSRC",
                              ssrc: n.ssrc
                          }, c.postMessage(p))) : (this.VideoRenderObj || (this.VideoRenderObj = new j.default((0, d.default)({}, {
                              Notify_APPUI: _.default.Notify_APPUI,
                              isSupportOffscreenCanvas: !1,
                              jsMediaEngine: E
                          }))), this.VideoRenderObj.Change_Current_SSRC(this.currentactive)), e.abrupt("break", 172);
                      case 68:
                          return this.currentshareactive != n.ssrc && (this.currentshareactive = n.ssrc), this.isSupportOffscreenCanvas ? (s = _.default.SPECIAL_ID, _.default.localSharingDecMGR && (c = _.default.localSharingDecMGR.map.get(s)) && (p = {
                              command: "CHANGE_CURRENT_SHARING_ACTIVE_SSRC",
                              ssrc: n.ssrc
                          }, c.postMessage(p))) : (this.SharingRenderObj || (this.SharingRenderObj = new Q.default((0, d.default)({}, {
                              Notify_APPUI: _.default.Notify_APPUI,
                              PubSub: A.default,
                              jsMediaEngine: E
                          }))), this.SharingRenderObj.Change_Current_SSRC(this.currentshareactive)), e.abrupt("break", 172);
                      case 71:
                          return this.Stop_Audio_Play(), e.abrupt("break", 172);
                      case 73:
                          return this.Meeting_Fail_Over(n.audio_websocket_address, n.video_websocket_address), e.abrupt("break", 172);
                      case 75:
                          return X("jsEvent.END_MEDIA"), A.default.trigger(h.PUBSUB_EVT.END_MEDIA), this.destroy().catch(function(e) {
                              return X.error(e)
                          }), e.abrupt("break", 172);
                      case 79:
                          if (this.audioCapture && n && this.audioCtx) {
                              this.Remove_Audio_Capture(), this.EndAudioMediaStream();
                              try {
                                  this.isCaputureNodeConnect = !1, this.audioCapture = n, this.audioCtx.sampleRate != this.sampleRate && (this.sampleRate = this.audioCtx.sampleRate, E.Modify_Audio_SampleRate(this.sampleRate)), this.isSupportAudioWorklet ? (this.Start_Audio_Capture(), E.Notify_Audio_Thread_Status(_.default.SPECIAL_ID, h.AUDIO_START), E.Reset_Aec()) : (isAudioPlaying && this.Start_Audio_Play(), this.Start_Audio_Capture(), E.Reset_Aec())
                              } catch (e) {
                                  this.JsMediaSDK_Log(e)
                              }
                          }
                          return e.abrupt("return");
                      case 82:
                          return n && (E.Notify_Audio_Thread_Status(_.default.SPECIAL_ID, h.AUDIO_START), this.EndAudioMediaStream(), this.Remove_Audio_Capture(), this.audioCapture = n, this.Start_Audio_Capture(), E.Reset_Aec()), e.abrupt("break", 172);
                      case 84:
                          this.Remove_Audio_Capture(), this.Remove_Audio_Play(), this.EndAudioMediaStream();
                          try {
                              _.default.AudioNode && (_.default.AudioNode.port = null)
                          } catch (e) {
                              X("AudioNode.port", e)
                          }
                          return _.default.AudioNode = null, this.audioCtx && (this.audioCtx.close(), this.isCaputureNodeConnect = !1), this.audioCtx = null, this.audioCapture = null, this.audioPlay = !1, e.abrupt("break", 172);
                      case 94:
                          try {
                              _.default.monitorAudioUserID = n.CaptureAudioInfo.ssrc, E.Update_Audio_Encrpt(_.default.e2eencrypt), this.Remove_Audio_Play(), this.Remove_Audio_Capture(), this.EndAudioMediaStream(), E.Notify_Audio_Thread_Status(_.default.SPECIAL_ID, h.AUDIO_START), this.audioCtx && (this.audioCtx.close(), this.isCaputureNodeConnect = !1), this.audioCtx = new(window.AudioContext || window.webkitAudioContext), this.audioCtx.sampleRate != this.sampleRate && (this.sampleRate = this.audioCtx.sampleRate, E.Modify_Audio_SampleRate(this.sampleRate)), this.isSupportAudioWorklet ? (g = this, this.audioCtx.audioWorklet.addModule(g.audioWorkletJsPath).then(function() {
                                  if (_.default.AudioNode = new l.default(g.audioCtx), f.default.browser.isChrome && !f.default.isAndroidBrowser()) {
                                      var e = g.audioCtx.createMediaStreamDestination();
                                      _.default.AudioNode.connect(e), g.audioDomNode || (g.audioDomNode = new Audio), g.audioDomNode.srcObject = e.stream, n.speakerInfo ? g.audioDomNode.setSinkId(n.speakerInfo.defaultDeviceId).catch(function(e) {
                                          K.default.add_monitor("AODF"), _.default.Notify_APPUI(h.AUDIO_SPEAKER_SET_ERROR, null)
                                      }) : g.audioDomNode.setSinkId("default").catch(function(e) {
                                          K.default.add_monitor("AODF"), _.default.Notify_APPUI(h.AUDIO_SPEAKER_SET_ERROR, null)
                                      }), g.audioDomNode.play()
                                  } else _.default.AudioNode.connect(g.audioCtx.destination);
                                  var t = new MessageChannel,
                                      i = new MessageChannel;
                                  if (_.default.AudioNode.port.postMessage({
                                          status: "encodeAudioPort"
                                      }, [i.port2]), _.default.AudioNode.port.postMessage({
                                          status: "decodeAudioPort"
                                      }, [t.port1]), E.Notify_Audio_Thread_Msg_Channel(t, i), g.Start_Audio_Play(), P.isSupportOffscreenCanvas) {
                                      var r = new MessageChannel;
                                      _.default.AudioNode.port.postMessage({
                                          status: "decodeAudioPortWithVideo"
                                      }, [r.port2]), E.Notify_Audio_Video_Thread_Msg_Channel(r)
                                  }
                                  n.CaptureAudio && (g.audioCapture = n.CaptureAudioInfo, g.Start_Audio_Capture(), P.firstSetDelay && (P.firstSetDelay = !1, E.Reset_Aec(), E.Set_Aec_Delay()))
                              })) : (this.Start_Audio_Play(), n.CaptureAudio && (this.audioCapture = n.CaptureAudioInfo, this.Start_Audio_Capture(), this.firstSetDelay && (this.firstSetDelay = !1, E.Reset_Aec(), E.Set_Aec_Delay())))
                          } catch (e) {
                              this.JsMediaSDK_Log(e)
                          }
                          return e.abrupt("break", 172);
                      case 96:
                          return X("sdk start remote control 1"), T = this.sharingWidthAndHeightInfo, M = new O.default((0, d.default)({
                              dom: document
                          }, n)), this.remoteControl = M, X("sharingInfo", T), M.setDstWidthAndHeight(T.logicWidth, T.logicHeight), M.setSrcWidthAndHeight(T.logicWidth, T.logicHeight), M.setSrcScaleWidthAndHeight(n.scaleWidth, n.scaleHeight), M.setSrcOffsetXY(n.srcOffsetX, n.srcOffsetY), M.setRemoteOS(n.os), e.abrupt("return", M.start().then(function(e) {
                              return _.default.Notify_APPUI(e ? h.START_REMOTE_CONTROL_SUCCESS : h.START_REMOTE_CONTROL_FAILED), e && (M.onPasteTextLengthOverflow(function() {
                                  _.default.Notify_APPUI(h.REMOTE_CONTROL_PASTE_TEXT_LENGTH_OVERFLOW)
                              }), M.onReturnCopiedText(function(e) {
                                  X(e), _.default.Notify_APPUI(h.REMOTE_CONTROL_COPIED_TEXT_NOTIFY, e)
                              })), e
                          }).catch(function(e) {
                              return X(e), _.default.Notify_APPUI(h.START_REMOTE_CONTROL_FAILED), K.default.add_monitor(["RMCT", e.message, "f"].join("")), a.default.reject(e)
                          }));
                      case 108:
                          return e.abrupt("return", this.remoteControl.destroy().then(function(e) {
                              return _.default.Notify_APPUI(e ? h.CANCEL_REMOTE_CONTROL_SUCCESS : h.CANCEL_REMOTE_CONTROL_FAILED), e
                          }));
                      case 110:
                          return this.remoteControl && (n.scaleWidth && n.scaleHeight && this.remoteControl.setSrcScaleWidthAndHeight(n.scaleWidth, n.scaleHeight), (n.srcOffsetX || n.srcOffsetY) && this.remoteControl.setSrcOffsetXYAndSendPDU(n.srcOffsetX, n.srcOffsetY), (0, R.default)(n.isControllerNow) && this.remoteControl.setIsControlerNow(n.isControllerNow), (0, y.default)(n.os) && this.remoteControl.setRemoteOS(n.os)), e.abrupt("break", 172);
                      case 112:
                          return this.remoteControl && this.remoteControl.sendPostionPDU(), e.abrupt("break", 172);
                      case 114:
                          if (this.flipSend = !0, this.isStartDesktopSharing) {
                              e.next = 125;
                              break
                          }
                          E.Update_Sharing_Encrpt(_.default.e2eencrypt), this.isStartDesktopSharing = !0, this.desktopSharingSend = !0, n.video = f.default.getDocumentHandle(n.video), n.canvas = f.default.getDocumentHandle(n.canvas), this.desktopSharingValue = n, this.Start_Desktop_Sharing(), e.next = 126;
                          break;
                      case 125:
                          return e.abrupt("return");
                      case 126:
                          return e.abrupt("break", 172);
                      case 127:
                          if (this.flipSend = !0, !this.isStartDesktopSharing) {
                              e.next = 134;
                              break
                          }
                          this.desktopSharingSend = !1, this.StopSharingCapture(), E.Update_Sharing_Encode_Status({
                              command: "stop"
                          }), e.next = 135;
                          break;
                      case 134:
                          return e.abrupt("return");
                      case 135:
                          return e.abrupt("break", 172);
                      case 136:
                          if (this.flipSend = !0, !this.isStartDesktopSharing) {
                              e.next = 142;
                              break
                          }
                          this.desktopSharingSend = !1, E.Update_Sharing_Encode_Status({
                              command: "pause"
                          }), e.next = 143;
                          break;
                      case 142:
                          return e.abrupt("return");
                      case 143:
                          return e.abrupt("break", 172);
                      case 144:
                          if (this.flipSend = !0, !this.isStartDesktopSharing) {
                              e.next = 151;
                              break
                          }
                          this.desktopSharingSend = !0, this.Process_Sharing(), E.Update_Sharing_Encode_Status({
                              command: "resume"
                          }), e.next = 152;
                          break;
                      case 151:
                          return e.abrupt("return");
                      case 152:
                          return e.abrupt("break", 172);
                      case 153:
                          return (N = document.createElement("img")).src = "chrome-extension://kgjfgplpablkjnlkjmjdecgdpfankdle/images/trash.png", N.onload = function() {
                              _.default.Notify_APPUI(h.CHECK_CHROME_SHARING_EXTENSION_RESPONSE, !0)
                          }, N.onerror = function() {
                              _.default.Notify_APPUI(h.CHECK_CHROME_SHARING_EXTENSION_RESPONSE, !1)
                          }, e.abrupt("break", 172);
                      case 159:
                          if (n.evt !== h.ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT && n.evt !== h.ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT) {
                              e.next = 170;
                              break
                          }
                          if (X("rwg answer from ui", n), n.answer) {
                              e.next = 163;
                              break
                          }
                          return e.abrupt("return");
                      case 163:
                          e.t1 = n.answer.type, e.next = e.t1 === m.ZOOM_CONNECTION_TYPE.ZOOM_CONNECTION_VIDEO ? 166 : e.t1 === m.ZOOM_CONNECTION_TYPE.ZOOM_CONNECTION_AUDIO ? 168 : 170;
                          break;
                      case 166:
                          return A.default.trigger(h.PUBSUB_EVT.ZOOM_CONNECTION_VIDEO_OFFER_RESPONSE_EVT, n), e.abrupt("break", 170);
                      case 168:
                          return A.default.trigger(h.PUBSUB_EVT.ZOOM_CONNECTION_AUDIO_OFFER_RESPONSE_EVT, n), e.abrupt("break", 170);
                      case 170:
                          return e.abrupt("break", 172);
                      case 171:
                          X("CAN NOT HANDLE THE EVENT!");
                      case 172:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function(e, t) {
              return N.apply(this, arguments)
          }),
          JsMediaSDK_OnAudioprocess: function(e) {
              if (this.audioPlay) {
                  var t = e.outputBuffer.numberOfChannels,
                      n = E.Get_Decoded_Audio_Frame(0, 0, this.audionodebuffersize);
                  if (n) {
                      n.length < this.audionodebuffersize && this.JsMediaSDK_Log("Audio is Not enough! length:" + n.length);
                      for (var i = 0; i < t; i++) {
                          (a = e.outputBuffer.getChannelData(i)).set(n);
                          for (var r = n.length; r < this.audionodebuffersize; r++) a[r] = 0
                      }
                  } else
                      for (this.JsMediaSDK_Log("Active Queue  audio:" + E.Get_Decoded_Audio_Buffer_Length()), i = 0; i < t; ++i) {
                          var a = e.outputBuffer.getChannelData(i),
                              o = new Uint8Array(a.length);
                          a.set(o)
                      }
              }
          },
          JsMediaSDK_VideoRenderInterval: function(e) {
              var t = this.VideoRenderObj.JsMediaSDK_VideoRender.bind(this.VideoRenderObj);
              return setInterval(t, e)
          },
          JsMediaSDK_SharingRenderInterval: function(e) {
              var t = this.SharingRenderObj.JsMediaSDK_SharingRender.bind(this.SharingRenderObj);
              return setInterval(t, e)
          },
          destroy: (M = (0, s.default)(u.default.mark(function e() {
              return u.default.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                      case 0:
                          X("destroy"), this.isDestroy = !0, this.EndMedia(), E.Stop_Monitor(), E.destroyAllWorkers(), A.default.clearAllSubscriptions();
                      case 6:
                      case "end":
                          return e.stop()
                  }
              }, e, this)
          })), function() {
              return M.apply(this, arguments)
          })
      }, e.exports = q
  }, function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n(105),
          r = n(33),
          a = n.n(r);
      let o = null;
      if ("function" == typeof AudioWorklet) {
          class e extends AudioWorkletNode {
              constructor(e) {
                  super(e, "zoomAudioWorklet"), this.port.onmessage = this.handleMessage.bind(this)
              }
              handleMessage(e) {
                  var t = e.data;
                  switch (t.status) {
                      case "delay":
                          if (a.a.localAudioDecMGR) {
                              var n = a.a.localAudioDecMGR.map.get(0);
                              n && n.postMessage({
                                  command: "delay"
                              })
                          }
                          break;
                      case "captureAudio":
                          i.Audio_Encode_Frame(0, t.data, t.data.length, 0);
                          break;
                      case "InstantAudioTime":
                          a.a.CurrentSSRCTime = t.data
                  }
              }
              postData(e, t) {
                  this.port.postMessage({
                      status: e,
                      data: t
                  }, [t.data.buffer])
              }
              postCMD(e, t) {
                  this.port.postMessage({
                      status: e,
                      data: t
                  })
              }
          }
          o = e
      }
      t.default = o
  }, function(e, t, n) {
      "use strict";

      function i(e) {
          this.name = "CameraOccupiedError", this.message = e, this.stack = (new Error).stack
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.CameraOccupiedError = i, i.prototype = new Error
  }, function(e, t, n) {
      "use strict";
      var i = n(1)(n(35)),
          r = {};
      r.screen = {
          chromeMediaSource: "desktop",
          screenCallback: null,
          getSourceId: function(e) {
              r.screenCallback = e, window.postMessage("WCL.getSourceID", "*")
          },
          onMessageCallback: function(e) {
              if ("WCL.PermissionDeniedError" == e.type && r.screenCallback) return r.screenCallback("WCL.PermissionDeniedError");
              "WCL.userCancel" == e.type && r.screenCallback("WCL.userCancel"), e.sourceId && (r.screen.sourceId = e.sourceId, r.screenCallback && r.screenCallback("WCL.PermisssionOK", r.screen.sourceId))
          },
          getChromeExtensionStatus: function(e) {
              var t = document.createElement("img");
              t.src = "chrome-extension://kgjfgplpablkjnlkjmjdecgdpfankdle/images/trash.png", t.onload = function() {
                  e("installed-enabled")
              }, t.onerror = function() {
                  e("not-installed")
              }
          }
      }, window.addEventListener("message", function(e) {
          e.data && ("string" == typeof e.data || e.data.sourceId || e.data.captureSourceId || e.data.getChromeExtensionStatus || e.data.type) && (e.data.captureSourceId && r.screen.getChromeExtensionStatus(function(e) {
              "installed-enabled" == e ? r.screen.getSourceId(function(e, t) {
                  window.postMessage({
                      typ: e,
                      chromeMediaSourceId: t
                  }, "*")
              }) : window.postMessage({
                  typ: "WCL.extensionUninstalled"
              }, "*")
          }), r.screen.onMessageCallback(e.data))
      }), window.getScreenId = function(e, t) {
          i.default.browser.isFirefox ? e(null, "firefox", {
              video: {
                  mediaSource: "screen"
              }
          }) : (window.addEventListener("message", function t(n) {
              n.data && n.data.typ && ("WCL.PermissionDeniedError" === n.data.typ || "WCL.extensionUninstalled" == n.data.typ || "WCL.userCancel" == n.data.typ ? e(n.data.typ) : "WCL.PermisssionOK" == n.data.typ && e(null, n.data.chromeMediaSourceId, function(e, t) {
                  var n = {
                      audio: !1,
                      video: {
                          mandatory: {
                              chromeMediaSource: "desktop",
                              maxWidth: window.screen.width > 1920 ? window.screen.width : 1920,
                              maxHeight: window.screen.height > 1080 ? window.screen.height : 1080
                          },
                          optional: []
                      }
                  };
                  return t && (n.video.mandatory.chromeMediaSourceId = t, n.audio && n.audio.mandatory && (n.audio.mandatory.chromeMediaSourceId = t)), n
              }(0, n.data.chromeMediaSourceId)), window.removeEventListener("message", t))
          }), window.postMessage({
              captureSourceId: !0
          }, "*"))
      }
  }, function(e, t, n) {
      "use strict";
      var i = n(20),
          r = n(1);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.RTCPeerConnectionUtil = void 0;
      var a = r(n(10)),
          o = r(n(15)),
          u = r(n(108)),
          s = r(n(16)),
          d = r(n(24)),
          c = r(n(25)),
          l = r(n(23)),
          f = r(n(19)),
          h = n(22),
          _ = i(n(70)),
          E = r(n(103)),
          p = n(197),
          S = (0, l.default)("sdk.rtcUtil"),
          A = function() {
              function e() {
                  var t = this;
                  (0, d.default)(this, e), this.rtcPeerConnection = null, this.dataChannel = null, this.dataChannelLabel = null, this.messageListener = null, this.rtcPeerConnectionCreatedListener = null, this.reconnectCount = 0, this.reconnectMax = 10, this.reconnectCountBetweenCloseAndOpenAndSetTo0WhenDCOpen = 0, this.connectionID = null, this.pubSubTokenList = [], this.isForceClosed = !1, this.SEND_VIDEO_PUB_SUB_EVENT = "RTCPeerConnectionUtil.VIDEO.SENDDATA", this.reconnectRTCPeerConnectionThrottle = (0, E.default)(function() {
                      t.reconnectRTCPeerConnection()
                  }, 2e3), this.timeoutThenCloseInterval = null, this.userid = null, this.connectionType = null
              }
              var t;
              return (0, c.default)(e, [{
                  key: "setUserid",
                  value: function(e) {
                      this.userid = e
                  }
              }, {
                  key: "setConnectionType",
                  value: function(e) {
                      this.connectionType = e
                  }
              }, {
                  key: "isSupportDataChannel",
                  value: function() {
                      return !!window.RTCDataChannel
                  }
              }, {
                  key: "initConnection",
                  value: (t = (0, s.default)(o.default.mark(function e(t) {
                      var n, i = this,
                          r = arguments;
                      return o.default.wrap(function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  if (n = r.length > 1 && void 0 !== r[1] ? r[1] : "ZoomWebclientVideoDataChannel", _.default.add_monitor("DCCONN"), this.isSupportDataChannel()) {
                                      e.next = 4;
                                      break
                                  }
                                  return e.abrupt("return");
                              case 4:
                                  return this.dataChannelLabel = n, this.connectionID = t, this.rtcPeerConnection = new RTCPeerConnection({
                                      iceCandidatePoolSize: 1
                                  }), this.rtcPeerConnection.addEventListener("close", function(e) {
                                      S("rtcPeerConnection.onclose", e), i.clear(), i.close(), i.reconnectRTCPeerConnectionThrottle()
                                  }), this.rtcPeerConnection.addEventListener("icecandidate", function(e) {
                                      S("onicecandidate", e)
                                  }), this.rtcPeerConnection.addEventListener("iceconnectionstatechange", function(e) {
                                      var t = i.rtcPeerConnection;
                                      "failed" !== t.iceConnectionState && "disconnected" !== t.iceConnectionState && "closed" !== t.iceConnectionState || (S("".concat(i.dataChannelLabel, " iceconnectionstatechange"), t.iceConnectionState), _.default.add_monitor("ICECONNSTATECHANGE:" + i.dataChannelLabel), t.close())
                                  }), this.createDataChannel(), e.next = 13, this.rtcPeerConnection.createOffer().then(function() {
                                      var e = (0, s.default)(o.default.mark(function e(n) {
                                          return o.default.wrap(function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                      return S("original offer", (0, u.default)(n)), n.sdp = n.sdp.replace(/a=ice-ufrag:.+/g, "a=ice-ufrag:".concat(t)), S("modified offer", n), e.abrupt("return", i.rtcPeerConnection.setLocalDescription(n));
                                                  case 4:
                                                  case "end":
                                                      return e.stop()
                                              }
                                          }, e, this)
                                      }));
                                      return function(t) {
                                          return e.apply(this, arguments)
                                      }
                                  }()).then(function() {
                                      i.rtcPeerConnectionCreatedListener.call(null, i.rtcPeerConnection)
                                  });
                              case 13:
                              case "end":
                                  return e.stop()
                          }
                      }, e, this)
                  })), function(e) {
                      return t.apply(this, arguments)
                  })
              }, {
                  key: "close",
                  value: function() {
                      _.default.add_monitor("RTCPeerConnUtil.CLOSE");
                      try {
                          try {
                              this.dataChannel.close()
                          } catch (e) {
                              S(e)
                          }
                          this.rtcPeerConnection.close()
                      } catch (e) {
                          S(e)
                      } finally {
                          this.dataChannel = null, this.rtcPeerConnection = null
                      }
                  }
              }, {
                  key: "forceClose",
                  value: function() {
                      _.default.add_monitor("DCFORCECLOSE:" + this.dataChannelLabel), S("forceClose : " + this.dataChannelLabel), this.isForceClosed = !0, this.clear(), this.close()
                  }
              }, {
                  key: "clear",
                  value: function() {
                      clearInterval(this.timeoutThenCloseInterval), this.messageListener = null, this.pubSubTokenList.forEach(function(e) {
                          f.default.unsubscribe(e)
                      }), this.pubSubTokenList = []
                  }
              }, {
                  key: "onConnectionCreated",
                  value: function(e) {
                      this.rtcPeerConnectionCreatedListener = e
                  }
              }, {
                  key: "reconnectRTCPeerConnection",
                  value: function() {
                      var e = this;
                      this.isForceClosed || this.reconnectCount < this.reconnectMax && this.reconnectCountBetweenCloseAndOpenAndSetTo0WhenDCOpen < this.reconnectMax && (S("".concat(this.dataChannelLabel, " reconnect reconnectTotalCount  : ").concat(this.reconnectCount, "; reconnectCountBetweenCloseAndOpenAndSetTo0WhenDCOpen : ").concat(this.reconnectCountBetweenCloseAndOpenAndSetTo0WhenDCOpen, ", reconnectMax : ").concat(this.reconnectMax)), this.reconnectCount += 1, this.reconnectCountBetweenCloseAndOpenAndSetTo0WhenDCOpen += 1, setTimeout(function() {
                          e.initConnection(e.connectionID, e.dataChannelLabel)
                      }, 1e3 * Math.pow(2, this.reconnectCountBetweenCloseAndOpenAndSetTo0WhenDCOpen)))
                  }
              }, {
                  key: "addDataChannelSpeedMonitor",
                  value: function() {
                      var e = this,
                          t = 0,
                          n = 0,
                          i = null,
                          r = 0,
                          o = f.default.on(this.SEND_VIDEO_PUB_SUB_EVENT, function(o, u) {
                              if (n) {
                                  var s = (new Date).getTime() / 1e3;
                                  if ((t = s - n) > 10) {
                                      var d = r - e.dataChannel.bufferedAmount;
                                      0 == e.dataChannel.bufferedAmount ? i = i ? .8 * i + 16e4 : 8e5 : i = i ? .8 * i + .2 * (8 * d / (1 * t)) : 8e5, f.default.publish(h.PUBSUB_EVT.VIDEO_DATACHANNEL_SPEED, i), r -= d, n = s
                                  }
                              } else r = 0, n = (new Date).getTime() / 1e3;
                              r += u.length
                          });
                      this.pubSubTokenList.push(o)
                  }
              }, {
                  key: "oneSingleLineLog",
                  value: function(e) {
                      setTimeout(function() {
                          _.default.send_instant_monitor(), _.default.add_monitor(e), _.default.send_instant_monitor()
                      }, 0)
                  }
              }, {
                  key: "createDataChannel",
                  value: function() {
                      var e = this;
                      if (this.dataChannel) try {
                          this.dataChannel.close()
                      } catch (e) {
                          S("close before createDataChannel error", e)
                      }
                      var t = this.rtcPeerConnection.createDataChannel(this.dataChannelLabel, {
                          ordered: !1,
                          maxRetransmits: 5,
                          reliable: !1
                      });
                      t.binaryType = "arraybuffer", t.addEventListener("open", function(t) {
                          e.reconnectCountBetweenCloseAndOpenAndSetTo0WhenDCOpen = 0, clearInterval(e.timeoutThenCloseInterval), _.default.add_monitor("DCOPEN:" + e.dataChannelLabel), e.oneSingleLineLog("".concat(p.MONITOR_LOG_DASHBOARD_DATACHANNEL_PARSE_SEPARATOR, ",").concat(e.userid, ",").concat(e.connectionType, ",DCOPEN,").concat(p.MONITOR_LOG_DASHBOARD_DATACHANNEL_PARSE_SEPARATOR)), S("dataChannel.onopen", t)
                      }), t.addEventListener("close", function(t) {
                          clearInterval(e.timeoutThenCloseInterval), S("dataChannel.onclose", t), _.default.add_monitor("DCCLOSE:" + e.dataChannelLabel), e.oneSingleLineLog("".concat(p.MONITOR_LOG_DASHBOARD_DATACHANNEL_PARSE_SEPARATOR, ",").concat(e.userid, ",").concat(e.connectionType, ",DCCLOSE,").concat(p.MONITOR_LOG_DASHBOARD_DATACHANNEL_PARSE_SEPARATOR)), e.clear(), e.close(), e.reconnectRTCPeerConnectionThrottle()
                      }), t.addEventListener("error", function(t) {
                          clearInterval(e.timeoutThenCloseInterval), _.default.add_monitor("DCERROR:".concat(e.dataChannelLabel, ":") + t.message), S("dataChannel.onerror", t)
                      }), t.addEventListener("message", function(t) {
                          e.messageListener && e.messageListener.call(null, t.data)
                      }), this.dataChannel = t
                  }
              }, {
                  key: "onMessage",
                  value: function(e) {
                      this.messageListener = e
                  }
              }, {
                  key: "waitForAnswerFromRWG",
                  value: function(e) {
                      var t = this;
                      return new a.default(function(n, i) {
                          var r = f.default.on(e, function(e, t) {
                              n(t)
                          });
                          t.pubSubTokenList.push(r)
                      })
                  }
              }, {
                  key: "setRemoteDescription",
                  value: function(e) {
                      S("setRemoteDescription", e), this.rtcPeerConnection.setRemoteDescription(new RTCSessionDescription({
                          type: "answer",
                          sdp: e.sdp
                      }))
                  }
              }, {
                  key: "closeIfTimeout",
                  value: function() {
                      var e = this;
                      clearInterval(this.timeoutThenCloseInterval), this.timeoutThenCloseInterval = setTimeout(function() {
                          S("closeIfTimeout"), e.close()
                      }, 1e4)
                  }
              }, {
                  key: "addIceCandidate",
                  value: function(e) {
                      this.rtcPeerConnection.addIceCandidate(new RTCIceCandidate({
                          candidate: e,
                          sdpMLineIndex: 0,
                          sdpMid: "0"
                      }))
                  }
              }, {
                  key: "sendVideoData",
                  value: function(e) {
                      try {
                          this.dataChannel.send(e)
                      } catch (e) {
                          S.error("sendVideoData", e)
                      }
                      f.default.publish(this.SEND_VIDEO_PUB_SUB_EVENT, e)
                  }
              }, {
                  key: "sendAudioData",
                  value: function(e) {
                      try {
                          this.dataChannel.send(e)
                      } catch (e) {
                          S.error("sendVideoData", e)
                      }
                  }
              }, {
                  key: "listenOnDataAndSend",
                  value: function(e) {
                      var t = this,
                          n = f.default.on(e, function(e, n) {
                              t.sendVideoData(n)
                          });
                      this.pubSubTokenList.push(n)
                  }
              }, {
                  key: "listenOnDataAndSendAudio",
                  value: function(e) {
                      var t = this,
                          n = f.default.on(e, function(e, n) {
                              t.sendAudioData(n)
                          });
                      this.pubSubTokenList.push(n)
                  }
              }]), e
          }();
      t.RTCPeerConnectionUtil = A
  }, function(e, t, n) {
      "use strict";
      var i = n(1),
          r = n(20);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var a = r(n(22)),
          o = r(n(198)),
          u = i(n(199)),
          s = i(n(200)),
          d = n(94);

      function c(e) {
          this.Notify_APPUI = e.Notify_APPUI, this.isSupportOffscreenCanvas = e.isSupportOffscreenCanvas, this.jsMediaEngine = e.jsMediaEngine, this.waterMarkCanvas = null, this.videoRenderLevel = 10, this.videoRenderLevelCount = 1, this.renderPeriodTotal = 100, this.renderPeriodCount = 0, this.renderPeriodTotalFps = 0, this.renderPeriodFpsCount = 0, this.lastRenderAudioTimeStamp = 0, this.videoBufEmptyCount = 0, this.videoBufCount = 0, this.videoRenderMaxLevel = 15, this.timestamp = 0, this.videoWaterMarkName = "", this.isCreateVideoWaterMark = !1, this.currentactive = 0, this.currentVideoHeight = 0, this.currentVideoWidth = 0, this.videoRenderArray = [], this.WaterMarkRGBA = new u.default, this.vMonitorCount = 0, this.videoQueue = new d.VideoQueueMGR
      }
      c.prototype.JsMediaSDK_VideoRender = function() {
          var e = 0;
          if (this.videoRenderLevelCount == this.videoRenderLevel) {
              if (this.videoRenderLevelCount = 1, 0 != this.videoRenderArray.length)
                  for (e = 0; e < this.videoRenderArray.length; e++) {
                      this.jsMediaEngine && (this.timestamp = this.jsMediaEngine.Get_Video_SSRC_Latest_Time(this.currentactive));
                      var t = this.Get_Decoded_Video_Frame(this.currentactive);
                      if (t) {
                          if (this.videoBufEmptyCount = 0, this.videoBufCount = this.Get_Decoded_Video_Buffer_Length(this.currentactive), this.renderPeriodCount == this.renderPeriodTotal) {
                              var n = this.renderPeriodTotalFps / this.renderPeriodFpsCount;
                              n && 0 != n || (n = 100);
                              var i = Math.round(n / this.videorenderinterval);
                              this.videoRenderLevel < i && this.videoRenderLevel++, this.renderPeriodCount = 0, this.renderPeriodTotalFps = 0, this.renderPeriodFpsCount = 0
                          }
                          this.renderPeriodCount++;
                          var r = this.Get_SSRC_VIDEO_FPS(this.currentactive);
                          0 != r && (this.renderPeriodFpsCount++, this.renderPeriodTotalFps += r);
                          var u = this.timestamp - t.ntptime;
                          0 != t.ntptime && 0 != this.timestamp && (u > 0 && u <= 1e3 || u < 0 && u >= -1e3 || (u < -1e3 ? this.lastRenderAudioTimeStamp != this.timestamp && (this.videoRenderLevel -= 1) : this.lastRenderAudioTimeStamp != this.timestamp && (this.videoRenderLevel += 1)), this.lastRenderAudioTimeStamp = this.timestamp);
                          var s = {
                              top: t.r_x,
                              left: t.r_y,
                              height: t.r_h,
                              width: t.r_w
                          };
                          if (this.isCreateVideoWaterMark || (this.currentVideoHeight != s.width || this.currentVideoWidth != s.height) && this.videoWaterMarkName && this.waterMarkCanvas) {
                              this.isCreateVideoWaterMark = !1;
                              var d = this.WaterMarkRGBA.Get_WaterMarkRGBA(this.waterMarkCanvas, this.videoWaterMarkName, t.width, t.height);
                              this.videoRenderArray[e].display.updateWatherMark(1 * t.width, 1 * t.height, d)
                          }
                          this.currentVideoHeight == s.height && this.currentVideoWidth == s.width || (this.Notify_APPUI ? this.Notify_APPUI(a.CURRENT_VIDEO_RESOLUTION, {
                              width: s.width,
                              height: s.height
                          }) : postMessage({
                              status: o.CURRENT_VIDEO_RESOLUTION,
                              width: s.width,
                              height: s.height
                          }), this.videoRenderArray[e].canvas.width = s.width, this.videoRenderArray[e].canvas.height = s.height, this.currentVideoHeight = s.height, this.currentVideoWidth = s.width), t.yuvdata.length == t.width * t.height * 3 / 2 && t.r_x >= 0 && t.r_y >= 0 && t.r_x + t.r_w <= t.width && t.r_y + t.r_h <= t.height && (8400 == this.vMonitorCount && (this.jsMediaEngine ? this.jsMediaEngine.Send_Render_Monitor_Log("VDGLM") : postMessage({
                              status: o.VIDEO_RENDER_MONITOR_LOG,
                              data: "VDGLW"
                          }), this.vMonitorCount = 0), this.vMonitorCount++, this.videoRenderArray[e].display.drawNextOuptutPictureGL(t.width, t.height, s, t.yuvdata, t.rotation, t.yuv_limited))
                      } else this.videoBufEmptyCount++, this.videoRenderLevel += 1, this.videoBufEmptyCount = 0;
                      this.videoBufCount * this.videoRenderLevel * 10 > 150 && (this.videoRenderLevel -= 1), this.videoRenderLevel < 1 ? this.videoRenderLevel = 1 : this.videoRenderLevel > this.videoRenderMaxLevel && (this.videoRenderLevel = this.videoRenderMaxLevel)
                  }
          } else this.videoRenderLevelCount++
      }, c.prototype.Get_Decoded_Video_Frame = function(e) {
          if (this.videoQueue) {
              var t = this.videoQueue.GetQueue(e);
              return t ? t.dequeue() : null
          }
      }, c.prototype.Set_SSRC_Latest_Time_Stamp = function(e) {
          this.timestamp = e
      }, c.prototype.Get_Decoded_Video_Buffer_Length = function(e) {
          return this.videoQueue ? this.videoQueue.GetQueueLength(e) : 0
      }, c.prototype.Get_SSRC_VIDEO_FPS = function(e) {
          if (e >>= 10, this.videoQueue && this.videoQueue.ssrcInfo) {
              var t = this.videoQueue.ssrcInfo.GetSSRCFpsInfo(e);
              if (t) return Math.round(t)
          }
          return 0
      }, c.prototype.Change_Current_SSRC = function(e) {
          this.currentactive = e, this.ClearQueue()
      }, c.prototype.Set_Render_Array = function(e) {
          if (this.videoRenderArray = e, this.videoRenderArray.length > 0)
              for (var t = 0; t < this.videoRenderArray.length; t++) this.videoRenderArray[t].display = new s.default(this.videoRenderArray[t].canvas)
      }, c.prototype.ClearQueue = function() {
          this.videoQueue && this.videoQueue.ClearQueue(), this.currentVideoHeight = 0, this.currentVideoWidth = 0
      }, c.prototype.Set_WaterMark_Info = function(e, t, n) {
          this.waterMarkCanvas = e, this.isCreateVideoWaterMark = t, this.videoWaterMarkName = n
      }, c.prototype.Get_Video_Data_From_Queue = function(e) {
          if (this.videoQueue) {
              var t = this.videoQueue.GetQueue(e.ssrc);
              if (t || (t = this.videoQueue.AddQueue(e.ssrc)), t.enqueue(e), this.videoQueue && this.videoQueue.ssrcInfo) {
                  var n = e.ssrc >> 10;
                  this.videoQueue.ssrcInfo.UpdateSSRCInfo(n, e.ntptime)
              }
              for (var i = this.videoQueue.GetQueueLength(e.ssrc) - 30; i >= 0;) this.Get_Decoded_Video_Frame(e.ssrc), i--
          }
      };
      var l = c;
      t.default = l
  }, function(e, t, n) {
      "use strict";
      var i = n(1),
          r = n(20);
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.default = void 0;
      var a = r(n(22)),
          o = r(n(198)),
          u = i(n(199)),
          s = n(94);

      function d(e) {
          this.Notify_APPUI = e.Notify_APPUI, this.PubSub = e.PubSub, this.jsMediaEngine = e.jsMediaEngine, this.currentshareactive = 0, this.sharingWidthAndHeightInfo = {
              logicHeight: 0,
              logicWidth: 0
          }, this.currentSharingHeight = 0, this.currentSharingWidth = 0, this.currentSharingLogicHeight = 0, this.currentSharingLogicWidth = 0, this.isCreateSharingWaterMark = !1, this.sharingWaterMarkName = "", this.Cursorx = null, this.Cursory = null, this.CursorWidth = null, this.CursorHeight = null, this.xratio = 1, this.yratio = 1, this.sharingDisplay = null, this.mouseQueue = new s.SharingQueueMGR, this.sharingQueue = new s.SharingQueueMGR, this.WaterMarkRGBA = new u.default, this.sMonitorCount = 0, this.mMonitorCount = 0
      }
      d.prototype.JsMediaSDK_SharingRender = function() {
          if (this.sharingDisplay) {
              var e = this.Get_Decoded_Sharing_Frame(this.currentshareactive),
                  t = this.Get_Decoded_Mouse_Frame(this.currentshareactive);
              if (e) {
                  this.sharingWidthAndHeightInfo.logicWidth == e.logic_w && this.sharingWidthAndHeightInfo.logicHeight == e.logic_h || (this.PubSub ? PubSub.publish(a.SHARING_PARAM_INFO_FROM_SOCKET, {
                      body: {
                          width: e.logic_w,
                          height: e.logic_h,
                          logicWidth: e.logic_w,
                          logicHeight: e.logic_h
                      }
                  }) : postMessage({
                      status: o.Sharing_Width_And_Height_Info,
                      logicWidth: e.logic_w,
                      logicHeight: e.logic_h
                  }), this.sharingWidthAndHeightInfo.logicWidth = e.logic_w, this.sharingWidthAndHeightInfo.logicHeight = e.logic_h);
                  var n = e.logic_h,
                      i = e.logic_w,
                      r = e.r_h,
                      u = e.r_w;
                  this.xratio = u / i, this.yratio = r / n;
                  var s = {
                      top: e.r_x,
                      left: e.r_y,
                      height: e.r_h,
                      width: e.r_w
                  };
                  if (this.currentSharingHeight == e.r_h && this.currentSharingWidth == e.r_w && this.currentSharingLogicHeight == e.logic_h && this.currentSharingLogicWidth == e.logic_w || (this.Notify_APPUI ? this.Notify_APPUI(a.SHARING_PARA, {
                          body: {
                              height: e.logic_h,
                              width: e.logic_w,
                              logicHeight: e.logic_h,
                              logicWidth: e.logic_w
                          }
                      }) : postMessage({
                          status: o.Sharing_Width_And_Height_Info,
                          logicWidth: e.logic_w,
                          logicHeight: e.logic_h
                      }), this.currentSharingHeight = e.r_h, this.currentSharingWidth = e.r_w, this.currentSharingLogicHeight = e.logic_h, this.currentSharingLogicWidth = e.logic_w), this.isCreateSharingWaterMark) {
                      this.isCreateSharingWaterMark = !1;
                      var d = this.WaterMarkRGBA.Get_WaterMarkRGBA(this.waterMarkCanvas, this.sharingWaterMarkName, e.r_w, e.r_h);
                      this.sharingDisplay.updateWatherMark(1 * e.r_w, 1 * e.r_h, d)
                  }
                  3e3 == this.sMonitorCount && (this.jsMediaEngine ? this.jsMediaEngine.Send_Render_Monitor_Log("SDIMM") : postMessage({
                      status: o.SHARING_RENDER_MONITOR_LOG,
                      data: "SDIMW"
                  }), this.sMonitorCount = 0), this.sMonitorCount++, this.sharingDisplay.drawNextOuptutPictureGL(e.width, e.height, s, e.yuvdata, null, e.yuv_limited)
              }
              t && (this.Cursorx = t.r_x * this.xratio, this.Cursory = t.r_y * this.yratio, this.CursorWidth = t.width * this.xratio, this.CursorHeight = t.height * this.yratio, this.sharingDisplay.updateCursor(t.width, t.height, t.buffer), 3e3 == this.mMonitorCount && (this.jsMediaEngine ? this.jsMediaEngine.Send_Render_Monitor_Log("SDSBM") : postMessage({
                  status: o.SHARING_RENDER_MONITOR_LOG,
                  data: "SDSBW"
              }), this.mMonitorCount = 0), this.mMonitorCount++, this.sharingDisplay.draw(1, this.Cursorx, this.Cursory, this.CursorWidth, this.CursorHeight))
          }
      }, d.prototype.Set_Render_WebGL = function(e) {
          this.sharingDisplay = e
      }, d.prototype.Change_Current_SSRC = function(e) {
          this.currentshareactive = e, this.currentSharingHeight = 0, this.currentSharingWidth = 0, this.currentSharingLogicHeight = 0, this.currentSharingLogicWidth = 0, this.ClearQueue()
      }, d.prototype.Set_WaterMark_Info = function(e, t, n) {
          this.waterMarkCanvas = e, this.isCreateSharingWaterMark = t, this.sharingWaterMarkName = n
      }, d.prototype.ClearQueue = function() {
          this.sharingQueue && this.sharingQueue.ClearQueue(), this.mouseQueue && this.mouseQueue.ClearQueue(), this.currentSharingHeight = 0, this.currentSharingWidth = 0, this.currentSharingLogicHeight = 0, this.currentSharingLogicWidth = 0
      }, d.prototype.Get_Decoded_Sharing_Frame = function(e) {
          if (this.sharingQueue) {
              var t = e >> 10,
                  n = this.sharingQueue.GetQueue(t);
              return n ? n.dequeue() : null
          }
      }, d.prototype.Get_Decoded_Mouse_Frame = function(e) {
          if (this.mouseQueue) {
              var t = e >> 10,
                  n = this.mouseQueue.GetQueue(t);
              return n ? n.dequeue() : null
          }
      }, d.prototype.Get_Sharing_Data_From_Queue = function(e) {
          if (this.sharingQueue) {
              var t = e.ssrc >> 10,
                  n = this.sharingQueue.GetQueue(t);
              n || (n = this.sharingQueue.AddQueue(t)), n.enqueue(e);
              for (var i = this.sharingQueue.GetQueueLength(t) - 10; i >= 0;) this.Get_Decoded_Sharing_Frame(e.ssrc), i--
          }
      }, d.prototype.Get_Mouse_Data_From_Queue = function(e) {
          if (this.mouseQueue) {
              var t = e.ssrc >> 10,
                  n = this.mouseQueue.GetQueue(t);
              n || (n = this.mouseQueue.AddQueue(t)), n.enqueue(e);
              for (var i = this.mouseQueue.GetQueueLength(t) - 10; i >= 0;) this.Get_Decoded_Mouse_Frame(e.ssrc), i--
          }
      };
      var c = d;
      t.default = c
  }])
});