! function(e) {
  var t = {};

  function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
          i: r,
          l: !1,
          exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
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
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var o in e) n.d(r, o, function(t) {
              return e[t]
          }.bind(null, o));
      return r
  }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return n.d(t, "a", t), t
  }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 121)
}([function(e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(e, t) {
  var n = e.exports = {
      version: "2.5.7"
  };
  "number" == typeof __e && (__e = n)
}, function(e, t, n) {
  var r = n(41)("wks"),
      o = n(27),
      i = n(0).Symbol,
      a = "function" == typeof i;
  (e.exports = function(e) {
      return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
  }).store = r
}, function(e, t, n) {
  var r = n(0),
      o = n(1),
      i = n(7),
      a = n(8),
      s = n(10),
      c = function(e, t, n) {
          var u, f, l, _ = e & c.F,
              d = e & c.G,
              p = e & c.S,
              h = e & c.P,
              v = e & c.B,
              A = e & c.W,
              E = d ? o : o[t] || (o[t] = {}),
              y = E.prototype,
              m = d ? r : p ? r[t] : (r[t] || {}).prototype;
          for (u in d && (n = t), n)(f = !_ && m && void 0 !== m[u]) && s(E, u) || (l = f ? m[u] : n[u], E[u] = d && "function" != typeof m[u] ? n[u] : v && f ? i(l, r) : A && m[u] == l ? function(e) {
              var t = function(t, n, r) {
                  if (this instanceof e) {
                      switch (arguments.length) {
                          case 0:
                              return new e;
                          case 1:
                              return new e(t);
                          case 2:
                              return new e(t, n)
                      }
                      return new e(t, n, r)
                  }
                  return e.apply(this, arguments)
              };
              return t.prototype = e.prototype, t
          }(l) : h && "function" == typeof l ? i(Function.call, l) : l, h && ((E.virtual || (E.virtual = {}))[u] = l, e & c.R && y && !y[u] && a(y, u, l)))
      };
  c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function(e, t) {
  e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function(e, t, n) {
  e.exports = !n(11)(function() {
      return 7 != Object.defineProperty({}, "a", {
          get: function() {
              return 7
          }
      }).a
  })
}, function(e, t, n) {
  var r = n(9),
      o = n(38),
      i = n(37),
      a = Object.defineProperty;
  t.f = n(5) ? Object.defineProperty : function(e, t, n) {
      if (r(e), t = i(t, !0), r(n), o) try {
          return a(e, t, n)
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e
  }
}, function(e, t, n) {
  var r = n(14);
  e.exports = function(e, t, n) {
      if (r(e), void 0 === t) return e;
      switch (n) {
          case 1:
              return function(n) {
                  return e.call(t, n)
              };
          case 2:
              return function(n, r) {
                  return e.call(t, n, r)
              };
          case 3:
              return function(n, r, o) {
                  return e.call(t, n, r, o)
              }
      }
      return function() {
          return e.apply(t, arguments)
      }
  }
}, function(e, t, n) {
  var r = n(6),
      o = n(21);
  e.exports = n(5) ? function(e, t, n) {
      return r.f(e, t, o(1, n))
  } : function(e, t, n) {
      return e[t] = n, e
  }
}, function(e, t, n) {
  var r = n(4);
  e.exports = function(e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e
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
  var r = n(34),
      o = n(20);
  e.exports = function(e) {
      return r(o(e))
  }
}, function(e, t) {
  var n = {}.toString;
  e.exports = function(e) {
      return n.call(e).slice(8, -1)
  }
}, function(e, t) {
  e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
  }
}, function(e, t) {
  e.exports = {}
}, function(e, t, n) {
  var r = n(7),
      o = n(80),
      i = n(81),
      a = n(9),
      s = n(23),
      c = n(82),
      u = {},
      f = {};
  (t = e.exports = function(e, t, n, l, _) {
      var d, p, h, v, A = _ ? function() {
              return e
          } : c(e),
          E = r(n, l, t ? 2 : 1),
          y = 0;
      if ("function" != typeof A) throw TypeError(e + " is not iterable!");
      if (i(A)) {
          for (d = s(e.length); d > y; y++)
              if ((v = t ? E(a(p = e[y])[0], p[1]) : E(e[y])) === u || v === f) return v
      } else
          for (h = A.call(e); !(p = h.next()).done;)
              if ((v = o(h, E, p.value, t)) === u || v === f) return v
  }).BREAK = u, t.RETURN = f
}, function(e, t) {
  e.exports = function(e) {
      return e && e.__esModule ? e : {
          default: e
      }
  }
}, function(e, t, n) {
  var r = n(6).f,
      o = n(10),
      i = n(2)("toStringTag");
  e.exports = function(e, t, n) {
      e && !o(e = n ? e : e.prototype, i) && r(e, i, {
          configurable: !0,
          value: t
      })
  }
}, function(e, t, n) {
  var r = n(20);
  e.exports = function(e) {
      return Object(r(e))
  }
}, function(e, t) {
  e.exports = function(e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e
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
}, function(e, t, n) {
  var r = n(4),
      o = n(0).document,
      i = r(o) && r(o.createElement);
  e.exports = function(e) {
      return i ? o.createElement(e) : {}
  }
}, function(e, t, n) {
  var r = n(24),
      o = Math.min;
  e.exports = function(e) {
      return e > 0 ? o(r(e), 9007199254740991) : 0
  }
}, function(e, t) {
  var n = Math.ceil,
      r = Math.floor;
  e.exports = function(e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
  }
}, function(e, t, n) {
  var r = n(41)("keys"),
      o = n(27);
  e.exports = function(e) {
      return r[e] || (r[e] = o(e))
  }
}, function(e, t) {
  e.exports = !0
}, function(e, t) {
  var n = 0,
      r = Math.random();
  e.exports = function(e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
  }
}, function(e, t, n) {
  "use strict";
  var r = n(26),
      o = n(3),
      i = n(72),
      a = n(8),
      s = n(15),
      c = n(73),
      u = n(18),
      f = n(75),
      l = n(2)("iterator"),
      _ = !([].keys && "next" in [].keys()),
      d = function() {
          return this
      };
  e.exports = function(e, t, n, p, h, v, A) {
      c(n, t, p);
      var E, y, m, b = function(e) {
              if (!_ && e in S) return S[e];
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
          D = t + " Iterator",
          g = "values" == h,
          O = !1,
          S = e.prototype,
          I = S[l] || S["@@iterator"] || h && S[h],
          w = I || b(h),
          M = h ? g ? b("entries") : w : void 0,
          T = "Array" == t && S.entries || I;
      if (T && (m = f(T.call(new e))) !== Object.prototype && m.next && (u(m, D, !0), r || "function" == typeof m[l] || a(m, l, d)), g && I && "values" !== I.name && (O = !0, w = function() {
              return I.call(this)
          }), r && !A || !_ && !O && S[l] || a(S, l, w), s[t] = w, s[D] = d, h)
          if (E = {
                  values: g ? w : b("values"),
                  keys: v ? w : b("keys"),
                  entries: M
              }, A)
              for (y in E) y in S || i(S, y, E[y]);
          else o(o.P + o.F * (_ || O), t, E);
      return E
  }
}, function(e, t, n) {
  var r = n(8);
  e.exports = function(e, t, n) {
      for (var o in t) n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
      return e
  }
}, function(e, t) {
  e.exports = function(e, t, n, r) {
      if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
      return e
  }
}, function(e, t, n) {
  var r = n(13),
      o = n(2)("toStringTag"),
      i = "Arguments" == r(function() {
          return arguments
      }());
  e.exports = function(e) {
      var t, n, a;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
          try {
              return e[t]
          } catch (e) {}
      }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
  }
}, function(e, t, n) {
  "use strict";
  var r = n(14);
  e.exports.f = function(e) {
      return new function(e) {
          var t, n;
          this.promise = new e(function(e, r) {
              if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
              t = e, n = r
          }), this.resolve = r(t), this.reject = r(n)
      }(e)
  }
}, function(e, t, n) {
  var r = n(59),
      o = n(58);
  e.exports = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
          for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n)) {
                  var i = o && r ? r(e, n) : {};
                  i.get || i.set ? o(t, n, i) : t[n] = e[n]
              } return t.default = e, t
  }
}, function(e, t, n) {
  var r = n(13);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
      return "String" == r(e) ? e.split("") : Object(e)
  }
}, function(e, t, n) {
  var r = n(67),
      o = n(42);
  e.exports = Object.keys || function(e) {
      return r(e, o)
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  }), t.serverHeartbeatMaxTimeoutSeconds = t.SHARING_GET_IMAGE_DATA_WRONG = t.SHARING_RENDER_MONITOR_LOG = t.Sharing_Width_And_Height_Info = t.VIDEO_RENDER_MONITOR_LOG = t.CURRENT_VIDEO_RESOLUTION = t.MEDIA_VIDEO_RTCP = t.MEDIA_VIDEO_DATA = t.MEDIA_AUDIO_RTCP = t.MEDIA_AUDIO_DATA = t.MEDIA_VIDEO_REPORT_DROP_RATIO = t.AUDIO_CLIPPING = t.Sharing_Dec_WebSocket_FAILED = t.Sharing_Handle_FAILED = t.Audio_Mute = t.Sharing_Dec_WASM_FAILED = t.Video_Enc_Handle_FAILED = t.Video_Enc_WASM_FAILED = t.Video_Dec_WebSocket_FAILED = t.Video_Dec_Handle_FAILED = t.Video_Dec_WASM_FAILED = t.Audio_Enc_Handle_FAILED = t.Audio_Enc_WASM_FAILED = t.Audio_Dec_WebSocket_FAILED = t.Audio_Dec_Handle_FAILED = t.Audio_Dec_WASM_FAILED = t.THREAD_STATE_CREATED = t.THREAD_STATE_CREATING = t.THREAD_STATE_IDLE = t.AUDIO_ENCODED_DATA = t.VIDEO_DATA_DROP_RATIO = t.VIDEO_DROP_RATIO_FROM_WCL = t.VIDEO_ENCODED_DATA = t.SHARING_DECODE_MESSAGE = t.MOUSE_DATA_VIDEO_MODE = t.SHARING_DATA_VIDEO_MODE = t.WCL_TROUBLESHOOTING_INFO = t.DELTA_S = t.DELTA_C = t.DELTA_D = t.APP_TROUBLESHOOTING_INFO = t.DOWNLOAD_WASM_FROM_MAIN_THREAD = t.MONITOR_MESSAGE = t.Video_Capture_Tick = t.DECODE_MESSAGE = t.Sharing_Data = t.Sharing_Handle_OK = t.Sharing_Dec_WebSocket_OK = t.AUDIO_DELAY = t.Sharing_Dec_PICTURE = t.Sharing_Dec_WASM_OK = t.Video_Enc_Handle_OK = t.Video_Enc_WASM_OK = t.Video_Dec_WebSocket_OK = t.Video_Dec_Handle_OK = t.Video_Dec_WASM_OK = t.Audio_Enc_Handle_OK = t.Audio_Enc_WASM_OK = t.Audio_Dec_WebSocket_OK = t.Audio_Dec_Handle_OK = t.Audio_Dec_WASM_OK = void 0, t.Audio_Dec_WASM_OK = 1, t.Audio_Dec_Handle_OK = 2, t.Audio_Dec_WebSocket_OK = 3, t.Audio_Enc_WASM_OK = 4, t.Audio_Enc_Handle_OK = 5, t.Video_Dec_WASM_OK = 7, t.Video_Dec_Handle_OK = 8, t.Video_Dec_WebSocket_OK = 9, t.Video_Enc_WASM_OK = 10, t.Video_Enc_Handle_OK = 11, t.Sharing_Dec_WASM_OK = 12, t.Sharing_Dec_PICTURE = 13, t.AUDIO_DELAY = 14, t.Sharing_Dec_WebSocket_OK = 15, t.Sharing_Handle_OK = 16, t.Sharing_Data = 17, t.DECODE_MESSAGE = 18, t.Video_Capture_Tick = 20, t.MONITOR_MESSAGE = 21, t.DOWNLOAD_WASM_FROM_MAIN_THREAD = 30, t.APP_TROUBLESHOOTING_INFO = 31, t.DELTA_D = 32, t.DELTA_C = 33, t.DELTA_S = 34, t.WCL_TROUBLESHOOTING_INFO = 35, t.SHARING_DATA_VIDEO_MODE = 36, t.MOUSE_DATA_VIDEO_MODE = 37, t.SHARING_DECODE_MESSAGE = 38, t.VIDEO_ENCODED_DATA = 39, t.VIDEO_DROP_RATIO_FROM_WCL = 40, t.VIDEO_DATA_DROP_RATIO = 41, t.AUDIO_ENCODED_DATA = 42, t.THREAD_STATE_IDLE = 43, t.THREAD_STATE_CREATING = 44, t.THREAD_STATE_CREATED = 45, t.Audio_Dec_WASM_FAILED = -1, t.Audio_Dec_Handle_FAILED = -2, t.Audio_Dec_WebSocket_FAILED = -3, t.Audio_Enc_WASM_FAILED = -4, t.Audio_Enc_Handle_FAILED = -5, t.Video_Dec_WASM_FAILED = -7, t.Video_Dec_Handle_FAILED = -8, t.Video_Dec_WebSocket_FAILED = -9, t.Video_Enc_WASM_FAILED = -10, t.Video_Enc_Handle_FAILED = -11, t.Sharing_Dec_WASM_FAILED = -12, t.Audio_Mute = -13, t.Sharing_Handle_FAILED = -14, t.Sharing_Dec_WebSocket_FAILED = -15, t.AUDIO_CLIPPING = -23, t.MEDIA_VIDEO_REPORT_DROP_RATIO = 100, t.MEDIA_AUDIO_DATA = 1, t.MEDIA_AUDIO_RTCP = 6, t.MEDIA_VIDEO_DATA = 2, t.MEDIA_VIDEO_RTCP = 7, t.CURRENT_VIDEO_RESOLUTION = 50, t.VIDEO_RENDER_MONITOR_LOG = 51, t.Sharing_Width_And_Height_Info = 52, t.SHARING_RENDER_MONITOR_LOG = 53, t.SHARING_GET_IMAGE_DATA_WRONG = 54, t.serverHeartbeatMaxTimeoutSeconds = 65
}, function(e, t, n) {
  var r = n(4);
  e.exports = function(e, t) {
      if (!r(e)) return e;
      var n, o;
      if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
      if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
      if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
      throw TypeError("Can't convert object to primitive value")
  }
}, function(e, t, n) {
  e.exports = !n(5) && !n(11)(function() {
      return 7 != Object.defineProperty(n(22)("div"), "a", {
          get: function() {
              return 7
          }
      }).a
  })
}, function(e, t, n) {
  var r = n(3),
      o = n(1),
      i = n(11);
  e.exports = function(e, t) {
      var n = (o.Object || {})[e] || Object[e],
          a = {};
      a[e] = t(n), r(r.S + r.F * i(function() {
          n(1)
      }), "Object", a)
  }
}, function(e, t, n) {
  e.exports = n(65)
}, function(e, t, n) {
  var r = n(1),
      o = n(0),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
  (e.exports = function(e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {})
  })("versions", []).push({
      version: r.version,
      mode: n(26) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
  })
}, function(e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t) {}, function(e, t, n) {
  "use strict";
  var r = n(71)(!0);
  n(28)(String, "String", function(e) {
      this._t = String(e), this._i = 0
  }, function() {
      var e, t = this._t,
          n = this._i;
      return n >= t.length ? {
          value: void 0,
          done: !0
      } : (e = r(t, n), this._i += e.length, {
          value: e,
          done: !1
      })
  })
}, function(e, t, n) {
  var r = n(9),
      o = n(74),
      i = n(42),
      a = n(25)("IE_PROTO"),
      s = function() {},
      c = function() {
          var e, t = n(22)("iframe"),
              r = i.length;
          for (t.style.display = "none", n(46).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; r--;) delete c.prototype[i[r]];
          return c()
      };
  e.exports = Object.create || function(e, t) {
      var n;
      return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = c(), void 0 === t ? n : o(n, t)
  }
}, function(e, t, n) {
  var r = n(0).document;
  e.exports = r && r.documentElement
}, function(e, t, n) {
  n(76);
  for (var r = n(0), o = n(8), i = n(15), a = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
      var u = s[c],
          f = r[u],
          l = f && f.prototype;
      l && !l[a] && o(l, a, u), i[u] = i.Array
  }
}, function(e, t) {
  e.exports = function(e, t) {
      return {
          value: t,
          done: !!e
      }
  }
}, function(e, t, n) {
  "use strict";
  var r = n(0),
      o = n(1),
      i = n(6),
      a = n(5),
      s = n(2)("species");
  e.exports = function(e) {
      var t = "function" == typeof o[e] ? o[e] : r[e];
      a && t && !t[s] && i.f(t, s, {
          configurable: !0,
          get: function() {
              return this
          }
      })
  }
}, function(e, t, n) {
  var r = n(27)("meta"),
      o = n(4),
      i = n(10),
      a = n(6).f,
      s = 0,
      c = Object.isExtensible || function() {
          return !0
      },
      u = !n(11)(function() {
          return c(Object.preventExtensions({}))
      }),
      f = function(e) {
          a(e, r, {
              value: {
                  i: "O" + ++s,
                  w: {}
              }
          })
      },
      l = e.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function(e, t) {
              if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
              if (!i(e, r)) {
                  if (!c(e)) return "F";
                  if (!t) return "E";
                  f(e)
              }
              return e[r].i
          },
          getWeak: function(e, t) {
              if (!i(e, r)) {
                  if (!c(e)) return !0;
                  if (!t) return !1;
                  f(e)
              }
              return e[r].w
          },
          onFreeze: function(e) {
              return u && l.NEED && c(e) && !i(e, r) && f(e), e
          }
      }
}, function(e, t, n) {
  var r = n(4);
  e.exports = function(e, t) {
      if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
      return e
  }
}, function(e, t, n) {
  var r = n(9),
      o = n(14),
      i = n(2)("species");
  e.exports = function(e, t) {
      var n, a = r(e).constructor;
      return void 0 === a || null == (n = r(a)[i]) ? t : o(n)
  }
}, function(e, t, n) {
  var r, o, i, a = n(7),
      s = n(99),
      c = n(46),
      u = n(22),
      f = n(0),
      l = f.process,
      _ = f.setImmediate,
      d = f.clearImmediate,
      p = f.MessageChannel,
      h = f.Dispatch,
      v = 0,
      A = {},
      E = function() {
          var e = +this;
          if (A.hasOwnProperty(e)) {
              var t = A[e];
              delete A[e], t()
          }
      },
      y = function(e) {
          E.call(e.data)
      };
  _ && d || (_ = function(e) {
      for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
      return A[++v] = function() {
          s("function" == typeof e ? e : Function(e), t)
      }, r(v), v
  }, d = function(e) {
      delete A[e]
  }, "process" == n(13)(l) ? r = function(e) {
      l.nextTick(a(E, e, 1))
  } : h && h.now ? r = function(e) {
      h.now(a(E, e, 1))
  } : p ? (i = (o = new p).port2, o.port1.onmessage = y, r = a(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(e) {
      f.postMessage(e + "", "*")
  }, f.addEventListener("message", y, !1)) : r = "onreadystatechange" in u("script") ? function(e) {
      c.appendChild(u("script")).onreadystatechange = function() {
          c.removeChild(this), E.call(e)
      }
  } : function(e) {
      setTimeout(a(E, e, 1), 0)
  }), e.exports = {
      set: _,
      clear: d
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
  var r = n(9),
      o = n(4),
      i = n(32);
  e.exports = function(e, t) {
      if (r(e), o(t) && t.constructor === e) return t;
      var n = i.f(e);
      return (0, n.resolve)(t), n.promise
  }
}, function(e, t) {
  t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
  e.exports = n(70)
}, function(e, t, n) {
  e.exports = n(63)
}, function(e, t, n) {
  e.exports = n(60)
}, function(e, t, n) {
  n(61);
  var r = n(1).Object;
  e.exports = function(e, t) {
      return r.getOwnPropertyDescriptor(e, t)
  }
}, function(e, t, n) {
  var r = n(12),
      o = n(62).f;
  n(39)("getOwnPropertyDescriptor", function() {
      return function(e, t) {
          return o(r(e), t)
      }
  })
}, function(e, t, n) {
  var r = n(56),
      o = n(21),
      i = n(12),
      a = n(37),
      s = n(10),
      c = n(38),
      u = Object.getOwnPropertyDescriptor;
  t.f = n(5) ? u : function(e, t) {
      if (e = i(e), t = a(t, !0), c) try {
          return u(e, t)
      } catch (e) {}
      if (s(e, t)) return o(!r.f.call(e, t), e[t])
  }
}, function(e, t, n) {
  n(64);
  var r = n(1).Object;
  e.exports = function(e, t, n) {
      return r.defineProperty(e, t, n)
  }
}, function(e, t, n) {
  var r = n(3);
  r(r.S + r.F * !n(5), "Object", {
      defineProperty: n(6).f
  })
}, function(e, t, n) {
  n(66), e.exports = n(1).Object.keys
}, function(e, t, n) {
  var r = n(19),
      o = n(35);
  n(39)("keys", function() {
      return function(e) {
          return o(r(e))
      }
  })
}, function(e, t, n) {
  var r = n(10),
      o = n(12),
      i = n(68)(!1),
      a = n(25)("IE_PROTO");
  e.exports = function(e, t) {
      var n, s = o(e),
          c = 0,
          u = [];
      for (n in s) n != a && r(s, n) && u.push(n);
      for (; t.length > c;) r(s, n = t[c++]) && (~i(u, n) || u.push(n));
      return u
  }
}, function(e, t, n) {
  var r = n(12),
      o = n(23),
      i = n(69);
  e.exports = function(e) {
      return function(t, n, a) {
          var s, c = r(t),
              u = o(c.length),
              f = i(a, u);
          if (e && n != n) {
              for (; u > f;)
                  if ((s = c[f++]) != s) return !0
          } else
              for (; u > f; f++)
                  if ((e || f in c) && c[f] === n) return e || f || 0;
          return !e && -1
      }
  }
}, function(e, t, n) {
  var r = n(24),
      o = Math.max,
      i = Math.min;
  e.exports = function(e, t) {
      return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
  }
}, function(e, t, n) {
  n(43), n(44), n(47), n(78), n(88), n(91), n(93), e.exports = n(1).Map
}, function(e, t, n) {
  var r = n(24),
      o = n(20);
  e.exports = function(e) {
      return function(t, n) {
          var i, a, s = String(o(t)),
              c = r(n),
              u = s.length;
          return c < 0 || c >= u ? e ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
      }
  }
}, function(e, t, n) {
  e.exports = n(8)
}, function(e, t, n) {
  "use strict";
  var r = n(45),
      o = n(21),
      i = n(18),
      a = {};
  n(8)(a, n(2)("iterator"), function() {
      return this
  }), e.exports = function(e, t, n) {
      e.prototype = r(a, {
          next: o(1, n)
      }), i(e, t + " Iterator")
  }
}, function(e, t, n) {
  var r = n(6),
      o = n(9),
      i = n(35);
  e.exports = n(5) ? Object.defineProperties : function(e, t) {
      o(e);
      for (var n, a = i(t), s = a.length, c = 0; s > c;) r.f(e, n = a[c++], t[n]);
      return e
  }
}, function(e, t, n) {
  var r = n(10),
      o = n(19),
      i = n(25)("IE_PROTO"),
      a = Object.prototype;
  e.exports = Object.getPrototypeOf || function(e) {
      return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
  }
}, function(e, t, n) {
  "use strict";
  var r = n(77),
      o = n(48),
      i = n(15),
      a = n(12);
  e.exports = n(28)(Array, "Array", function(e, t) {
      this._t = a(e), this._i = 0, this._k = t
  }, function() {
      var e = this._t,
          t = this._k,
          n = this._i++;
      return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
  }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(e, t) {
  e.exports = function() {}
}, function(e, t, n) {
  "use strict";
  var r = n(79),
      o = n(51);
  e.exports = n(83)("Map", function(e) {
      return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0)
      }
  }, {
      get: function(e) {
          var t = r.getEntry(o(this, "Map"), e);
          return t && t.v
      },
      set: function(e, t) {
          return r.def(o(this, "Map"), 0 === e ? 0 : e, t)
      }
  }, r, !0)
}, function(e, t, n) {
  "use strict";
  var r = n(6).f,
      o = n(45),
      i = n(29),
      a = n(7),
      s = n(30),
      c = n(16),
      u = n(28),
      f = n(48),
      l = n(49),
      _ = n(5),
      d = n(50).fastKey,
      p = n(51),
      h = _ ? "_s" : "size",
      v = function(e, t) {
          var n, r = d(t);
          if ("F" !== r) return e._i[r];
          for (n = e._f; n; n = n.n)
              if (n.k == t) return n
      };
  e.exports = {
      getConstructor: function(e, t, n, u) {
          var f = e(function(e, r) {
              s(e, f, t, "_i"), e._t = t, e._i = o(null), e._f = void 0, e._l = void 0, e[h] = 0, null != r && c(r, n, e[u], e)
          });
          return i(f.prototype, {
              clear: function() {
                  for (var e = p(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                  e._f = e._l = void 0, e[h] = 0
              },
              delete: function(e) {
                  var n = p(this, t),
                      r = v(n, e);
                  if (r) {
                      var o = r.n,
                          i = r.p;
                      delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[h]--
                  }
                  return !!r
              },
              forEach: function(e) {
                  p(this, t);
                  for (var n, r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                      for (r(n.v, n.k, this); n && n.r;) n = n.p
              },
              has: function(e) {
                  return !!v(p(this, t), e)
              }
          }), _ && r(f.prototype, "size", {
              get: function() {
                  return p(this, t)[h]
              }
          }), f
      },
      def: function(e, t, n) {
          var r, o, i = v(e, t);
          return i ? i.v = n : (e._l = i = {
              i: o = d(t, !0),
              k: t,
              v: n,
              p: r = e._l,
              n: void 0,
              r: !1
          }, e._f || (e._f = i), r && (r.n = i), e[h]++, "F" !== o && (e._i[o] = i)), e
      },
      getEntry: v,
      setStrong: function(e, t, n) {
          u(e, t, function(e, n) {
              this._t = p(e, t), this._k = n, this._l = void 0
          }, function() {
              for (var e = this._k, t = this._l; t && t.r;) t = t.p;
              return this._t && (this._l = t = t ? t.n : this._t._f) ? f(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, f(1))
          }, n ? "entries" : "values", !n, !0), l(t)
      }
  }
}, function(e, t, n) {
  var r = n(9);
  e.exports = function(e, t, n, o) {
      try {
          return o ? t(r(n)[0], n[1]) : t(n)
      } catch (t) {
          var i = e.return;
          throw void 0 !== i && r(i.call(e)), t
      }
  }
}, function(e, t, n) {
  var r = n(15),
      o = n(2)("iterator"),
      i = Array.prototype;
  e.exports = function(e) {
      return void 0 !== e && (r.Array === e || i[o] === e)
  }
}, function(e, t, n) {
  var r = n(31),
      o = n(2)("iterator"),
      i = n(15);
  e.exports = n(1).getIteratorMethod = function(e) {
      if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
  }
}, function(e, t, n) {
  "use strict";
  var r = n(0),
      o = n(3),
      i = n(50),
      a = n(11),
      s = n(8),
      c = n(29),
      u = n(16),
      f = n(30),
      l = n(4),
      _ = n(18),
      d = n(6).f,
      p = n(84)(0),
      h = n(5);
  e.exports = function(e, t, n, v, A, E) {
      var y = r[e],
          m = y,
          b = A ? "set" : "add",
          D = m && m.prototype,
          g = {};
      return h && "function" == typeof m && (E || D.forEach && !a(function() {
          (new m).entries().next()
      })) ? (m = t(function(t, n) {
          f(t, m, e, "_c"), t._c = new y, null != n && u(n, A, t[b], t)
      }), p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
          var t = "add" == e || "set" == e;
          e in D && (!E || "clear" != e) && s(m.prototype, e, function(n, r) {
              if (f(this, m, e), !t && E && !l(n)) return "get" == e && void 0;
              var o = this._c[e](0 === n ? 0 : n, r);
              return t ? this : o
          })
      }), E || d(m.prototype, "size", {
          get: function() {
              return this._c.size
          }
      })) : (m = v.getConstructor(t, e, A, b), c(m.prototype, n), i.NEED = !0), _(m, e), g[e] = m, o(o.G + o.W + o.F, g), E || v.setStrong(m, e, A), m
  }
}, function(e, t, n) {
  var r = n(7),
      o = n(34),
      i = n(19),
      a = n(23),
      s = n(85);
  e.exports = function(e, t) {
      var n = 1 == e,
          c = 2 == e,
          u = 3 == e,
          f = 4 == e,
          l = 6 == e,
          _ = 5 == e || l,
          d = t || s;
      return function(t, s, p) {
          for (var h, v, A = i(t), E = o(A), y = r(s, p, 3), m = a(E.length), b = 0, D = n ? d(t, m) : c ? d(t, 0) : void 0; m > b; b++)
              if ((_ || b in E) && (v = y(h = E[b], b, A), e))
                  if (n) D[b] = v;
                  else if (v) switch (e) {
              case 3:
                  return !0;
              case 5:
                  return h;
              case 6:
                  return b;
              case 2:
                  D.push(h)
          } else if (f) return !1;
          return l ? -1 : u || f ? f : D
      }
  }
}, function(e, t, n) {
  var r = n(86);
  e.exports = function(e, t) {
      return new(r(e))(t)
  }
}, function(e, t, n) {
  var r = n(4),
      o = n(87),
      i = n(2)("species");
  e.exports = function(e) {
      var t;
      return o(e) && ("function" != typeof(t = e.constructor) || t !== Array && !o(t.prototype) || (t = void 0), r(t) && null === (t = t[i]) && (t = void 0)), void 0 === t ? Array : t
  }
}, function(e, t, n) {
  var r = n(13);
  e.exports = Array.isArray || function(e) {
      return "Array" == r(e)
  }
}, function(e, t, n) {
  var r = n(3);
  r(r.P + r.R, "Map", {
      toJSON: n(89)("Map")
  })
}, function(e, t, n) {
  var r = n(31),
      o = n(90);
  e.exports = function(e) {
      return function() {
          if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
          return o(this)
      }
  }
}, function(e, t, n) {
  var r = n(16);
  e.exports = function(e, t) {
      var n = [];
      return r(e, !1, n.push, n, t), n
  }
}, function(e, t, n) {
  n(92)("Map")
}, function(e, t, n) {
  "use strict";
  var r = n(3);
  e.exports = function(e) {
      r(r.S, e, {
          of: function() {
              for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
              return new this(t)
          }
      })
  }
}, function(e, t, n) {
  n(94)("Map")
}, function(e, t, n) {
  "use strict";
  var r = n(3),
      o = n(14),
      i = n(7),
      a = n(16);
  e.exports = function(e) {
      r(r.S, e, {
          from: function(e) {
              var t, n, r, s, c = arguments[1];
              return o(this), (t = void 0 !== c) && o(c), null == e ? new this : (n = [], t ? (r = 0, s = i(c, arguments[2], 2), a(e, !1, function(e) {
                  n.push(s(e, r++))
              })) : a(e, !1, n.push, n), new this(n))
          }
      })
  }
}, function(e, t, n) {
  "use strict";
  var r = n(17);
  Object.defineProperty(t, "__esModule", {
      value: !0
  }), t.add_monitor = a, t.instantiateCachedURL = function(e, t, n) {
      var r = self.wasmSuccessEvent,
          s = self.wasmFailEvent,
          c = self.databaseName,
          u = self.databaseDataType;

      function f(e, t) {
          return function(e) {
              var t = self;
              return new o.default(function(n, r) {
                  t.addEventListener("message", function(e) {
                      var t = e.data;
                      "DOWNLOAD_WASM_FROM_MAIN_THREAD_OK" === t.command && (a("DE"), n(t.data)), "DOWNLOAD_WASM_FROM_MAIN_THREAD_FAILED" === t.command && r()
                  }), a("DS"), postMessage({
                      status: i.DOWNLOAD_WASM_FROM_MAIN_THREAD,
                      url: e
                  })
              })
          }(e)
      }
      return function(t) {
          return new o.default(function(r, o) {
              try {
                  if (indexedDB) {
                      var i, s = void 0 === IDBTransaction.READ_WRITE ? "readwrite" : IDBTransaction.READ_WRITE,
                          l = indexedDB.open(c, e);
                      l.onerror = function(e) {
                          var o = indexedDB.deleteDatabase(c);
                          o.onerror = function(e) {}, o.onsuccess = function(e) {}, r(f(t).then(function(e) {
                              a("CS");
                              var t = WebAssembly.instantiate(e, n);
                              return a("CE"), t
                          }))
                      }, l.onsuccess = function(e) {
                          var c = (i = e.target.result).transaction(["file"], s).objectStore("file").get(u);
                          c.onsuccess = function(e) {
                              if (c.result) {
                                  var o = e.target.result;
                                  a("CS");
                                  var l = WebAssembly.instantiate(o, n);
                                  return a("CE"), r(l)
                              }
                              r(f(t).then(function(e) {
                                  i.transaction(["file"], s).objectStore("file").put(e, u), a("CS");
                                  var t = WebAssembly.instantiate(e, n);
                                  return a("CE"), t
                              }))
                          }, c.onerror = function(e) {
                              r(f(t).then(function(e) {
                                  a("CS");
                                  var t = WebAssembly.instantiate(e, n);
                                  return a("CE"), t
                              }))
                          }
                      }, l.onupgradeneeded = function(e) {
                          ! function(e) {
                              e.objectStoreNames.contains("file") && e.deleteObjectStore("file"), e.createObjectStore("file")
                          }(e.target.result)
                      }
                  } else r(f(t).then(function(e) {
                      a("CS");
                      var t = WebAssembly.instantiate(e, n);
                      return a("CE"), t
                  }))
              } catch (e) {
                  r(f(t).then(function(e) {
                      a("CS");
                      var t = WebAssembly.instantiate(e, n);
                      return a("CE"), t
                  }))
              }
          })
      }(t).then(function(e) {
          t.includes("video.mt") && function(e) {
                  ! function(e, t) {
                      var n = e.exports;
                      Module.asm = n, wasmModule = t, ENVIRONMENT_IS_PTHREAD || self.removeRunDependency("wasm-instantiate")
                  }(e.instance, e.module)
              }(e),
              function(e) {
                  var t = e.exports;
                  t.memory && mergeMemory(t.memory), Module.asm = t, Module.usingWasm = !0, self.removeRunDependency("wasm-instantiate")
              }(e.instance), self.Fetch_WASM_OK = !0, postMessage({
                  status: r
              })
      }).catch(function(e) {
          postMessage({
              status: s
          })
      })
  };
  var o = r(n(96)),
      i = n(36);

  function a(e) {
      postMessage({
          status: i.WCL_TROUBLESHOOTING_INFO,
          data: e
      })
  }
}, function(e, t, n) {
  e.exports = n(97)
}, function(e, t, n) {
  n(43), n(44), n(47), n(98), n(103), n(104), e.exports = n(1).Promise
}, function(e, t, n) {
  "use strict";
  var r, o, i, a, s = n(26),
      c = n(0),
      u = n(7),
      f = n(31),
      l = n(3),
      _ = n(4),
      d = n(14),
      p = n(30),
      h = n(16),
      v = n(52),
      A = n(53).set,
      E = n(100)(),
      y = n(32),
      m = n(54),
      b = n(101),
      D = n(55),
      g = c.TypeError,
      O = c.process,
      S = O && O.versions,
      I = S && S.v8 || "",
      w = c.Promise,
      M = "process" == f(O),
      T = function() {},
      x = o = y.f,
      k = !! function() {
          try {
              var e = w.resolve(1),
                  t = (e.constructor = {})[n(2)("species")] = function(e) {
                      e(T, T)
                  };
              return (M || "function" == typeof PromiseRejectionEvent) && e.then(T) instanceof t && 0 !== I.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
          } catch (e) {}
      }(),
      R = function(e) {
          var t;
          return !(!_(e) || "function" != typeof(t = e.then)) && t
      },
      L = function(e, t) {
          if (!e._n) {
              e._n = !0;
              var n = e._c;
              E(function() {
                  for (var r = e._v, o = 1 == e._s, i = 0, a = function(t) {
                          var n, i, a, s = o ? t.ok : t.fail,
                              c = t.resolve,
                              u = t.reject,
                              f = t.domain;
                          try {
                              s ? (o || (2 == e._h && C(e), e._h = 1), !0 === s ? n = r : (f && f.enter(), n = s(r), f && (f.exit(), a = !0)), n === t.promise ? u(g("Promise-chain cycle")) : (i = R(n)) ? i.call(n, c, u) : c(n)) : u(r)
                          } catch (e) {
                              f && !a && f.exit(), u(e)
                          }
                      }; n.length > i;) a(n[i++]);
                  e._c = [], e._n = !1, t && !e._h && P(e)
              })
          }
      },
      P = function(e) {
          A.call(c, function() {
              var t, n, r, o = e._v,
                  i = N(e);
              if (i && (t = m(function() {
                      M ? O.emit("unhandledRejection", o, e) : (n = c.onunhandledrejection) ? n({
                          promise: e,
                          reason: o
                      }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
                  }), e._h = M || N(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
          })
      },
      N = function(e) {
          return 1 !== e._h && 0 === (e._a || e._c).length
      },
      C = function(e) {
          A.call(c, function() {
              var t;
              M ? O.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
                  promise: e,
                  reason: e._v
              })
          })
      },
      W = function(e) {
          var t = this;
          t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), L(t, !0))
      },
      H = function(e) {
          var t, n = this;
          if (!n._d) {
              n._d = !0, n = n._w || n;
              try {
                  if (n === e) throw g("Promise can't be resolved itself");
                  (t = R(e)) ? E(function() {
                      var r = {
                          _w: n,
                          _d: !1
                      };
                      try {
                          t.call(e, u(H, r, 1), u(W, r, 1))
                      } catch (e) {
                          W.call(r, e)
                      }
                  }): (n._v = e, n._s = 1, L(n, !1))
              } catch (e) {
                  W.call({
                      _w: n,
                      _d: !1
                  }, e)
              }
          }
      };
  k || (w = function(e) {
      p(this, w, "Promise", "_h"), d(e), r.call(this);
      try {
          e(u(H, this, 1), u(W, this, 1))
      } catch (e) {
          W.call(this, e)
      }
  }, (r = function(e) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
  }).prototype = n(29)(w.prototype, {
      then: function(e, t) {
          var n = x(v(this, w));
          return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = M ? O.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise
      },
      catch: function(e) {
          return this.then(void 0, e)
      }
  }), i = function() {
      var e = new r;
      this.promise = e, this.resolve = u(H, e, 1), this.reject = u(W, e, 1)
  }, y.f = x = function(e) {
      return e === w || e === a ? new i(e) : o(e)
  }), l(l.G + l.W + l.F * !k, {
      Promise: w
  }), n(18)(w, "Promise"), n(49)("Promise"), a = n(1).Promise, l(l.S + l.F * !k, "Promise", {
      reject: function(e) {
          var t = x(this);
          return (0, t.reject)(e), t.promise
      }
  }), l(l.S + l.F * (s || !k), "Promise", {
      resolve: function(e) {
          return D(s && this === a ? w : this, e)
      }
  }), l(l.S + l.F * !(k && n(102)(function(e) {
      w.all(e).catch(T)
  })), "Promise", {
      all: function(e) {
          var t = this,
              n = x(t),
              r = n.resolve,
              o = n.reject,
              i = m(function() {
                  var n = [],
                      i = 0,
                      a = 1;
                  h(e, !1, function(e) {
                      var s = i++,
                          c = !1;
                      n.push(void 0), a++, t.resolve(e).then(function(e) {
                          c || (c = !0, n[s] = e, --a || r(n))
                      }, o)
                  }), --a || r(n)
              });
          return i.e && o(i.v), n.promise
      },
      race: function(e) {
          var t = this,
              n = x(t),
              r = n.reject,
              o = m(function() {
                  h(e, !1, function(e) {
                      t.resolve(e).then(n.resolve, r)
                  })
              });
          return o.e && r(o.v), n.promise
      }
  })
}, function(e, t) {
  e.exports = function(e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
          case 0:
              return r ? e() : e.call(n);
          case 1:
              return r ? e(t[0]) : e.call(n, t[0]);
          case 2:
              return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
          case 3:
              return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
          case 4:
              return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
      }
      return e.apply(n, t)
  }
}, function(e, t, n) {
  var r = n(0),
      o = n(53).set,
      i = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      s = r.Promise,
      c = "process" == n(13)(a);
  e.exports = function() {
      var e, t, n, u = function() {
          var r, o;
          for (c && (r = a.domain) && r.exit(); e;) {
              o = e.fn, e = e.next;
              try {
                  o()
              } catch (r) {
                  throw e ? n() : t = void 0, r
              }
          }
          t = void 0, r && r.enter()
      };
      if (c) n = function() {
          a.nextTick(u)
      };
      else if (!i || r.navigator && r.navigator.standalone)
          if (s && s.resolve) {
              var f = s.resolve(void 0);
              n = function() {
                  f.then(u)
              }
          } else n = function() {
              o.call(r, u)
          };
      else {
          var l = !0,
              _ = document.createTextNode("");
          new i(u).observe(_, {
              characterData: !0
          }), n = function() {
              _.data = l = !l
          }
      }
      return function(r) {
          var o = {
              fn: r,
              next: void 0
          };
          t && (t.next = o), e || (e = o, n()), t = o
      }
  }
}, function(e, t, n) {
  var r = n(0).navigator;
  e.exports = r && r.userAgent || ""
}, function(e, t, n) {
  var r = n(2)("iterator"),
      o = !1;
  try {
      var i = [7][r]();
      i.return = function() {
          o = !0
      }, Array.from(i, function() {
          throw 2
      })
  } catch (e) {}
  e.exports = function(e, t) {
      if (!t && !o) return !1;
      var n = !1;
      try {
          var i = [7],
              a = i[r]();
          a.next = function() {
              return {
                  done: n = !0
              }
          }, i[r] = function() {
              return a
          }, e(i)
      } catch (e) {}
      return n
  }
}, function(e, t, n) {
  "use strict";
  var r = n(3),
      o = n(1),
      i = n(0),
      a = n(52),
      s = n(55);
  r(r.P + r.R, "Promise", {
      finally: function(e) {
          var t = a(this, o.Promise || i.Promise),
              n = "function" == typeof e;
          return this.then(n ? function(n) {
              return s(t, e()).then(function() {
                  return n
              })
          } : e, n ? function(n) {
              return s(t, e()).then(function() {
                  throw n
              })
          } : e)
      }
  })
}, function(e, t, n) {
  "use strict";
  var r = n(3),
      o = n(32),
      i = n(54);
  r(r.S, "Promise", {
      try: function(e) {
          var t = o.f(this),
              n = i(e);
          return (n.e ? t.reject : t.resolve)(n.v), t.promise
      }
  })
}, , , , , , , , , , , , , , , , , function(e, t, n) {
  "use strict";
  var r = n(33),
      o = n(17)(n(40)),
      i = r(n(122));
  (0, o.default)(i).forEach(function(e) {
      return self[e] = i[e]
  })
}, function(e, t, n) {
  "use strict";
  var r = n(33),
      o = n(17);
  Object.defineProperty(t, "__esModule", {
      value: !0
  }), t.JsSocket_Log = S, t.Channel_Agent = U, t.Open_Audio_WebSocket_Connect = V, t.audio_websocket_on_open = G, t.audio_websocket_on_message = q, t.audio_data_message_from_main_thread_datachannel = Y, t.audio_websocket_on_close = J, t.audio_websocket_on_error = X, t.Put_Audio_Frame_Buffer = Z, t.frame_aec_callback = function(e, t, n, r) {
      var o = new Uint8Array(2 * r),
          i = Module.HEAP8.subarray(e + 0, e + 2 * r);
      o.set(i, 0, 2 * r), Se({
          data: o,
          channels: n,
          sampleHZ: t
      })
  }, t.frame_callback = function(e, t, n, r, o, i, a, s) {
      var c = new Uint8Array(t),
          u = Module.HEAP8.subarray(e + 0, e + t);
      c.set(u, 0, t);
      var f = new Uint8Array(2 * s),
          l = Module.HEAP8.subarray(o + 0, o + 2 * s);
      if (f.set(l, 0, 2 * s), 0 != r) {
          var _ = new Uint8Array(r),
              d = Module.HEAP8.subarray(n + 0, n + r);
          _.set(d, 0, r), Q ? Q.postMessage({
              status: 0,
              data: c,
              time: _,
              aec: f,
              channels: a,
              sampleHz: i,
              ssrc: De
          }, [c.buffer, _.buffer, f.buffer]) : postMessage({
              status: 0,
              data: c,
              time: _,
              aec: f,
              channels: a,
              sampleHz: i,
              ssrc: De
          }, [c.buffer, _.buffer, f.buffer])
      } else Q ? Q.postMessage({
          status: 0,
          data: c,
          aec: f,
          channels: a,
          sampleHz: i
      }, [c.buffer, f.buffer]) : postMessage({
          status: 0,
          data: c,
          aec: f,
          channels: a,
          sampleHz: i
      }, [c.buffer, f.buffer])
  }, t.audio_encode_frame_callback = function(e, t) {
      var n = new Uint8Array(t),
          r = Module.HEAP8.subarray(e + 0, e + t);
      n.set(r, 0, t), null !== w && w.socket && 1 === w.socket.readyState && 1 == ce && he > 20 && 0 == T ? (T = !0, w.send(n), n.length) : null !== M && M.socket && 1 === M.socket.readyState && 1 == ce && he > 20 && 1 == T && (T = !1, M.send(n), n.length), 1 === ce && F && self.postMessage({
          status: l.AUDIO_ENCODED_DATA,
          data: n
      }, [n.buffer])
  }, t.Get_Mixed_Audio_Interval = ge, t.Encode_Audio_Data = Oe, t.send_data = function(e, t) {
      var n = new Uint8Array(t),
          r = Module.HEAP8.subarray(e + 0, e + t);
      n.set(r, 0, t), w && 1 === w.socket.readyState && w.send(n), M && 1 === M.socket.readyState && M.send(n)
  }, t.LOG_OUT = function(e, t) {
      var n = new Uint8Array(t),
          r = Module.HEAP8.subarray(e + 0, e + t);
      n.set(r, 0, t)
  }, t.put_aec_data = Se, t.TURN_DOWN_VOLUME = function() {
      postMessage({
          status: AUDIO_CLIPPING
      })
  }, t.Get_ExternalRecord = function(e, t, n) {};
  var i = o(n(123)),
      a = o(n(57)),
      s = o(n(126)),
      c = o(n(127)),
      u = o(n(40)),
      f = n(95),
      l = r(n(36));
  (0, u.default)(l).forEach(function(e) {
      return self[e] = l[e]
  }), WebAssembly.instantiateStreaming = !1, self.wasmSuccessEvent = l.Audio_Dec_WASM_OK, self.wasmFailEvent = l.Audio_Dec_WASM_FAILED, self.databaseName = "AUDIO_FILE", self.databaseDataType = "audio", self.instantiateCachedURL = f.instantiateCachedURL;
  var _, d, p, h, v, A, E, y, m, b, D = 1,
      g = function() {
          function e(t, n) {
              if ((0, s.default)(this, e), !(t instanceof Int32Array && n | 0 === n && n >= 0 && n + D <= t.length)) throw new Error("Bad arguments to Lock constructor: ".concat(t, " ").concat(n));
              this.iab = t, this.ibase = n
          }
          return (0, c.default)(e, [{
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
                  if (!(e instanceof Int32Array && t | 0 === t && t >= 0 && t + D <= e.length)) throw new Error("Bad arguments to Lock constructor: ".concat(e, " ").concat(t));
                  return Atomics.store(e, t, 0), t
              }
          }]), e
      }();

  function O() {
      this.a = [], this.b = 0, this.residue = null
  }

  function S(e) {}
  O.prototype.getLength = function() {
      return this.a.length - this.b
  }, O.prototype.isEmpty = function() {
      return 0 == this.a.length
  }, O.prototype.enqueue = function(e) {
      this.a.push(e)
  }, O.prototype.dequeue = function() {
      if (0 != this.a.length) {
          var e = this.a[this.b];
          return 2 * ++this.b >= this.a.length && (this.a = this.a.slice(this.b), this.b = 0), e
      }
      return null
  }, O.prototype.peek = function() {
      return 0 < this.a.length ? this.a[this.b] : void 0
  }, self.onWasmModuleReady = function() {
      _ = Module.cwrap("_Audio_Init", "number", ["number", "string", "string"]), d = Module.cwrap("_Audio_UnInit", "number", ["number"]), p = Module.cwrap("_Audio_Encode", "number", ["number", "array", "number", "number", "number"]), h = Module.cwrap("_Audio_Decode", "number", ["number", "number", "array", "number"]), v = Module.cwrap("_Get_Mixed_Audio", "number", ["number", "number", "number", "number"]), A = Module.cwrap("_Put_Pre_Aec_Data", "number", ["number", "array", "number", "number", "number"]), E = Module.cwrap("_Get_Aec_Delay", "number", ["number"]), y = Module.cwrap("_Set_Aec_Delay", "number", ["number", "number"]), m = Module.cwrap("_ReSet_Aec", "number", ["number"]), b = Module.cwrap("_Audio_Set_Data_Encryption", "number", ["number", "number"])
  };
  var I = null,
      w = null,
      M = null,
      T = !1,
      x = null,
      k = null,
      R = null,
      L = !1,
      P = null,
      N = null,
      C = 0,
      W = null,
      H = !1,
      F = !1,
      j = function() {
          function e(e) {
              this.wpos = 0, this.rpos = 0, this.remaining_write_data = null, this.buf = e
          }
          return e.prototype.append = function(e) {
              var t = this;
              return function(n, r) {
                  if (t.remaining_write_data) r();
                  else {
                      var o = t._append_some(e);
                      o != e.length ? t.remaining_write_data = [e.subarray(o), n] : n()
                  }
              }
          }, e.prototype.read_some = function(e) {
              var t = this._read_some(e);
              return this.remaining_write_data && (this._append_remaining_data(), t < e.length && (t += this._read_some(e.subarray(t)))), t
          }, e.prototype._append_some = function(e) {
              var t = Math.min(e.length, this.available());
              if (0 == t) return 0;
              var n = this.wpos % this.buf.length,
                  r = Math.min(t, this.buf.length - n);
              return this.buf.set(e.subarray(0, r), n), r < t && this.buf.set(e.subarray(r, t), 0), this.wpos += t, t
          }, e.prototype._append_remaining_data = function() {
              var e = this.remaining_write_data[0],
                  t = this.remaining_write_data[1];
              this.remaining_write_data = null;
              var n = this._append_some(e);
              n == e.length ? t() : this.remaining_write_data = [e.subarray(n), t]
          }, e.prototype._read_some = function(e) {
              var t = Math.min(e.length, this.size());
              if (t < e.length) return 0;
              if (0 == t) return 0;
              var n = this.rpos % this.buf.length,
                  r = Math.min(t, this.buf.length - n);
              return e.set(this.buf.subarray(n, n + r), 0), r < t && e.set(this.buf.subarray(0, t - r), r), this.rpos += t, t
          }, e.prototype.clear = function() {
              this.rpos = this.wpos = 0, this.remaining_write_data = null
          }, e.prototype.capacity = function() {
              return this.buf.length
          }, e.prototype.size = function() {
              return this.wpos - this.rpos
          }, e.prototype.available = function() {
              return this.capacity() - this.size()
          }, e.MAX_POS = 65536, e
      }();

  function U() {
      this.socket = null, this.onopen = null, this.onmessage = null, this.onerror = null, this.onclose = null, this.websocketaddress = null, this.startwebsocketreconnecttime = null, this.reconnect = null, this.connectIndex = 0, this.activeclosewebsocket = !1, this.init = function(t, n, r, o, i) {
          this.websocketaddress = t, this.onopen = n, this.onmessage = r, this.onerror = o, this.onclose = i,
              function(e) {
                  var t = null,
                      n = l.serverHeartbeatMaxTimeoutSeconds,
                      o = null,
                      i = e.onmessage,
                      a = e.onopen,
                      s = e.onclose;
                  e.onmessage = function(n) {
                      t = (new Date).getTime(), i.call(e, n)
                  }, e.onopen = function(i) {
                      t = (new Date).getTime(), o || (o = setInterval(function() {
                          (new Date).getTime() - t >= 1e3 * n && (clearInterval(o), o = null, e.socket.close())
                      }, 1e3)), a.call(e, i, e)
                  }, e.onclose = function(t) {
                      try {
                          clearInterval(o)
                      } catch (e) {}
                      s.call(e, t, e)
                  }
              }(this)
      }, this.connect = function(e, t, n, r, o) {
          var i = this;
          (0, f.add_monitor)("SB"), i.init(e, t, n, r, o), i.reconnect = function() {
              var e = this;
              if (!i.isReconnectNow && !i.isTimerExist) {
                  i.isReconnectNow = !0, i.isTimerExist = !0;
                  var t = Math.pow(2, i.connectIndex) - 1;
                  i.connectIndex++, setTimeout(function() {
                      i.activeclosewebsocket || (i.isTimerExist = !1, i.startwebsocketreconnecttime = null, i.socket = new WebSocket(e.websocketaddress), i.socket.binaryType = "arraybuffer", i.socket.onopen = function(e) {
                          i.isReconnectNow = !1, (0, f.add_monitor)("SE"), i.startwebsocketreconnecttime = (new Date).getTime() / 1e3, i.onopen(e)
                      }, i.socket.onmessage = function(e) {
                          i.onmessage(e)
                      }, i.socket.onerror = function(e) {
                          (0, f.add_monitor)("SERR"), i.socket.close()
                      }, i.socket.onclose = function(e) {
                          (0, f.add_monitor)("SCLOSE"), i.isReconnectNow = !1, i.onclose(e), i.activeclosewebsocket || (i.connectIndex < 10 ? i.reconnect() : postMessage({
                              status: Audio_Dec_WebSocket_FAILED
                          }))
                      })
                  }, 1e3 * t)
              }
          }, i.reconnect()
      }, this.send = function(e) {
          1 === this.socket.readyState && this.socket.send(e)
      }, this.close = function() {
          try {
              this.activeclosewebsocket = !0, this.socket.close()
          } catch (e) {}
      }
  }

  function V(e, t, n, r, o) {
      var i = new U;
      return i.connect(e, t, n, r, o), i
  }

  function G() {
      postMessage({
          status: Audio_Dec_WebSocket_OK
      })
  }
  var K = new a.default,
      B = [];

  function z(e, t) {
      try {
          var n = 256 * e[2] + e[3];
          if (! function(e) {
                  var t = e[0];
                  return -1 !== [l.MEDIA_AUDIO_DATA, l.MEDIA_AUDIO_RTCP].indexOf(t)
              }(e)) return h(I, 0, e, e.length);
          ((function(e, t) {
              if (K.get(e)) return !1;
              for (B.push(e), K.set(e, !0); B.length >= 100;) {
                  var n = B.shift();
                  K.delete(n)
              }
              return !0
          })(n) || 0 === n) && h(I, 0, e, e.length)
      } catch (t) {
          h(I, 0, e, e.length)
      }
  }

  function q(e) {
      null !== I && z(new Uint8Array(e.data))
  }

  function Y(e) {
      null !== I && z(new Uint8Array(e))
  }

  function J(e) {}

  function X(e) {}

  function Z(e) {
      if (de && 0 == he && (pe || (pe = 50), I && y(I, pe)), ++he == i.default && (he = 21), de && he % 8e3 == 0) {
          var t = E(I);
          t > 0 && postMessage({
              status: AUDIO_DELAY,
              delay: t
          })
      }
      if (I) {
          if (P && P.length == e.length || (P = new Int16Array(e.length)), ++fe % _e == 0) {
              N = new Int32Array(e.buffer);
              for (var n = 0; n < N.length; n++)
                  if (0 != N[n]) {
                      le = 0;
                      break
                  } n == N.length && ++le == _e && (postMessage({
                  status: Audio_Mute
              }), le = 0)
          }
          for (var r = 0; r < e.length; r++) null == P && (P = new Int16Array(e.length)), e[r] = 32768 * e[r], e[r] > 32767 ? e[r] = 32767 : e[r] < -32768 && (e[r] = -32768), P[r] = e[r];
          var o = new Uint8Array(P.buffer);
          I && W.append(o)(function() {}, function(e) {})
      }
  }
  self.seqMap = K, self.seqList = B;
  var Q, $, ee, ne = null,
      re = 0,
      oe = !1,
      ie = null,
      ae = null,
      se = !1,
      ce = -1,
      ue = 30,
      fe = 0,
      le = 0,
      _e = 100,
      de = !1,
      pe = 0,
      he = 0,
      ve = 0,
      Ae = null,
      Ee = 9,
      ye = 0,
      me = new O,
      be = !1,
      De = 0;

  function ge() {
      if (Ae || (Ae = (new Date).getTime()), ne || (ne = (new Date).getTime()), ye || (ye = (new Date).getTime()), re++, ve++, null !== I)
          if (C > 0) C--;
          else {
              if (ve >= Ee) {
                  var e = (new Date).getTime();
                  (be || 1 == Ee || e - Ae > 10 * ve) && (oe = !0), ve = 0, Ae = null
              }
              if (v(I, x / 100, 0, x), oe && v(I, x / 100, 0, x), oe = !1, re >= 1e3) {
                  var t = (new Date).getTime() - ne;
                  if (ne = null, t > 1e4 && t < 2e4) {
                      var n = 10 * re / (t - 1e4);
                      Ee = Math.floor(n)
                  } else Ee = 9;
                  re = 0
              }
          }
  }

  function Oe(e) {
      for (var t = 0; t < e && W.read_some(ee) > 0;) {
          if (ae && ie) {
              var n = new Uint16Array(ae);
              if (ie.lock(), se) {
                  if (0 != n[2])
                      for (var r = n[2], o = 3; r > 0;) {
                          r--, n[2]--;
                          var i = n[o],
                              a = o + 2;
                          o += n[o + 1], o += 2;
                          var s = new Uint16Array(n.subarray(a, o)),
                              c = new Uint8Array(s.buffer);
                          I && A(I, c, i, 1, s.length)
                      }
              } else n[2] = 0, se = !0;
              ie.unlock()
          }
          for (; me.getLength() > 0;) {
              var u = me.dequeue();
              A(I, u.data, u.sampleHz, 1, u.data.length / 2)
          }
          t++, p(I, ee, x / 100, 0, x)
      }
  }

  function Se(e) {
      if (-1 != ce && 2 != ce && ae && ie && null != e && !(e.data.length > 960)) {
          var t = new Uint16Array(ae);
          if (ie.lock(), t[2] < ue) {
              for (var n = 3, r = t[2]; r > 0;) r--, n += t[n + 1], n += 2;
              if (e) {
                  var o = new Uint16Array(e.data.buffer);
                  t[2]++, t[n] = e.sampleHZ, t[n + 1] = o.length, n += 2, t.set(o, n)
              }
          } else t[2] = 0;
          ie.unlock()
      }
  }
  self.addEventListener("message", function(e) {
      var t = e.data;
      console.log('message', t.command, t);
      switch (t.command) {
          case "startMedia":
              try {
                  null == I && (x = t.sampleRate, W = new j(new Uint8Array(2 * x * 10 * 4 / 100)), I = _(t.userid, t.meetingnumb + "", t.meetingid), ee = new Uint8Array(x / 50), null == I ? postMessage({
                      status: Audio_Dec_Handle_FAILED
                  }) : (postMessage({
                      status: Audio_Dec_Handle_OK
                  }), t.decode && (k = !0, be = t.isEdge), t.encode && (R = !0), w = V(t.websocket_ip_address, G, q, X, J), M = V(t.websocket_ip_address, G, q, X, J)))
              } catch (e) {}
              break;
          case "EncodedAudioFrame":
              w && 1 === w.socket.readyState && w.send(t.data);
              break;
          case "closeMedia":
              if (w && w.close(), M && M.close(), R && he > 4e3) {
                  var n = E(I);
                  n > 0 && postMessage({
                      status: AUDIO_DELAY,
                      delay: n
                  })
              }
              clearInterval(k), clearInterval(R), d(I), I = null, k = null, R = null, w = null, M = null, close();
              break;
          case "delay":
              C++;
              break;
          case "failover":
              w && (w.close(), w = V(t.websocket_ip_address, G, q, X, J)), M && (M.close(), M = V(t.websocket_ip_address, G, q, X, J));
              break;
          case "EncodeAudioFrame":
              if (de && 0 == he && (pe || (pe = 50), I && y(I, pe)), ++he == i.default && (he = 21), de && he % 8e3 == 0 && (n = E(I)) > 0 && postMessage({
                      status: AUDIO_DELAY,
                      delay: n
                  }), I) {
                  if (P && P.length == t.data.length || (P = new Int16Array(t.data.length)), ++fe % _e == 0) {
                      N = new Int32Array(t.data.buffer);
                      for (var r = 0; r < N.length; r++)
                          if (0 != N[r]) {
                              le = 0;
                              break
                          } r == N.length && ++le == _e && (postMessage({
                          status: Audio_Mute
                      }), le = 0)
                  }
                  for (var o = 0; o < t.data.length; o++) null == P && (P = new Int16Array(t.data.length)), t.data[o] = 32768 * t.data[o], t.data[o] > 32767 ? t.data[o] = 32767 : t.data[o] < -32768 && (t.data[o] = -32768), P[o] = t.data[o];
                  var a = new Uint8Array(P.buffer);
                  I && W.append(a)(function() {}, function(e) {})
              }
              break;
          case "sharedBuffer":
              var s = t.data;
              ae = s, ie = new g(new Int32Array(ae), 0);
              break;
          case "modifySampleRate":
              W.clear(), W = null, W = new j(new Uint8Array(2 * t.sampleRate * 10 * 4 / 100)), ee = null, ee = new Uint8Array(t.sampleRate / 50), x = null, x = t.sampleRate;
              break;
          case "mute":
              1 != (ce = t.bOn) || L ? 2 == ce && (L = !1, k && clearInterval(k), R && clearInterval(R)) : (L = !0, k && (k = setInterval(ge, 9)), R && (R = setInterval(function() {
                  Oe(20)
              }, 20)));
              break;
          case "resetAec":
              I && m(I), he = 0;
              break;
          case "SetAECDelay":
              de = !0, pe = t.delay;
              break;
          case "EchoCancel":
              if (I) {
                  if (-1 == ce || 2 == ce) return;
                  me.enqueue({
                      data: t.data,
                      sampleHz: t.sampleHz
                  })
              }
              break;
          case "decodeAudioPort":
              Q && Q.close(), (Q = e.ports[0]).onmessage = function(e) {
                  switch (e.data.status) {
                      case "delay":
                          C++
                  }
              };
              break;
          case "encodeAudioPort":
              $ && $.close(), ($ = e.ports[0]).onmessage = function(e) {
                  switch (e.data.command) {
                      case "EncodeAudioFrame":
                          Z(e.data.data);
                          break;
                      case "EchoCancel":
                          if (I) {
                              if (-1 == ce || 2 == ce) return;
                              me.enqueue({
                                  data: e.data.data,
                                  sampleHz: e.data.sampleHz
                              })
                          }
                  }
              };
              break;
          case "updateCurrentSSRC":
              De = t.SSRC;
              break;
          case "ENCRYPT":
              H = t.encrypt, I && b(I, H ? 1 : 0);
              break;
          case "SOCKET_RECONNECT":
              self.IS_DISABLE_SOCKET_RECONNECT = !0 === t.disable;
              break;
          case "UPDATE_DATACHANNEL_STATUS":
              F = t.data.isDataChannelOpen;
              break;
          case "PUSH_MESSAGE_FROM_MAIN_TO_WORKER":
              Y(t.data)
      }
  })
}, function(e, t, n) {
  e.exports = n(124)
}, function(e, t, n) {
  n(125), e.exports = 9007199254740991
}, function(e, t, n) {
  var r = n(3);
  r(r.S, "Number", {
      MAX_SAFE_INTEGER: 9007199254740991
  })
}, function(e, t) {
  e.exports = function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
}, function(e, t, n) {
  var r = n(58);

  function o(e, t) {
      for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), r(e, o.key, o)
      }
  }
  e.exports = function(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e
  }
}]), self.__wasmCodeDataEndFlag = 1, (Module = void 0 !== Module ? Module : {}).onRuntimeInitialized = function() {
  self.onWasmModuleReady()
};
var key, Module = void 0 !== Module ? Module : {},
  moduleOverrides = {};
for (key in Module) Module.hasOwnProperty(key) && (moduleOverrides[key] = Module[key]);
var arguments_ = [],
  thisProgram = "./this.program",
  quit_ = function(status, toThrow) {
      throw toThrow
  },
  ENVIRONMENT_IS_WEB = !1,
  ENVIRONMENT_IS_WORKER = !1,
  ENVIRONMENT_IS_NODE = !1,
  ENVIRONMENT_HAS_NODE = !1,
  ENVIRONMENT_IS_SHELL = !1;
ENVIRONMENT_IS_WEB = "object" == typeof window, ENVIRONMENT_IS_WORKER = "function" == typeof importScripts, ENVIRONMENT_HAS_NODE = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER, ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
var read_, readAsync, readBinary, setWindowTitle, nodeFS, nodePath, scriptDirectory = "";

function locateFile(path) {
  return Module.locateFile ? Module.locateFile(path, scriptDirectory) : scriptDirectory + path
}
ENVIRONMENT_IS_NODE ? (scriptDirectory = __dirname + "/", read_ = function(filename, binary) {
  return nodeFS || (nodeFS = require("fs")), nodePath || (nodePath = require("path")), filename = nodePath.normalize(filename), nodeFS.readFileSync(filename, binary ? null : "utf8")
}, readBinary = function(filename) {
  var ret = read_(filename, !0);
  return ret.buffer || (ret = new Uint8Array(ret)), assert(ret.buffer), ret
}, process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")), arguments_ = process.argv.slice(2), "undefined" != typeof module && (module.exports = Module), process.on("uncaughtException", function(ex) {
  if (!(ex instanceof ExitStatus)) throw ex
}), process.on("unhandledRejection", abort), quit_ = function(status) {
  process.exit(status)
}, Module.inspect = function() {
  return "[Emscripten Module object]"
}) : ENVIRONMENT_IS_SHELL ? ("undefined" != typeof read && (read_ = function(f) {
  return read(f)
}), readBinary = function(f) {
  var data;
  return "function" == typeof readbuffer ? new Uint8Array(readbuffer(f)) : (assert("object" == typeof(data = read(f, "binary"))), data)
}, "undefined" != typeof scriptArgs ? arguments_ = scriptArgs : "undefined" != typeof arguments && (arguments_ = arguments), "function" == typeof quit && (quit_ = function(status) {
  quit(status)
}), "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && (ENVIRONMENT_IS_WORKER ? scriptDirectory = self.location.href : document.currentScript && (scriptDirectory = document.currentScript.src), scriptDirectory = 0 !== scriptDirectory.indexOf("blob:") ? scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1) : "", read_ = function(url) {
  var xhr = new XMLHttpRequest;
  return xhr.open("GET", url, !1), xhr.send(null), xhr.responseText
}, ENVIRONMENT_IS_WORKER && (readBinary = function(url) {
  var xhr = new XMLHttpRequest;
  return xhr.open("GET", url, !1), xhr.responseType = "arraybuffer", xhr.send(null), new Uint8Array(xhr.response)
}), readAsync = function(url, onload, onerror) {
  var xhr = new XMLHttpRequest;
  xhr.open("GET", url, !0), xhr.responseType = "arraybuffer", xhr.onload = function() {
      200 == xhr.status || 0 == xhr.status && xhr.response ? onload(xhr.response) : onerror()
  }, xhr.onerror = onerror, xhr.send(null)
}, setWindowTitle = function(title) {
  document.title = title
});
var out = Module.print || void 0,
  err = Module.printErr || void 0;
for (key in moduleOverrides) moduleOverrides.hasOwnProperty(key) && (Module[key] = moduleOverrides[key]);
moduleOverrides = null, Module.arguments && (arguments_ = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram), Module.quit && (quit_ = Module.quit);
var STACK_ALIGN = 16;

function dynamicAlloc(size) {
  var ret = HEAP32[DYNAMICTOP_PTR >> 2],
      end = ret + size + 15 & -16;
  return end > _emscripten_get_heap_size() && abort(), HEAP32[DYNAMICTOP_PTR >> 2] = end, ret
}

function alignMemory(size, factor) {
  return factor || (factor = STACK_ALIGN), Math.ceil(size / factor) * factor
}

function getNativeTypeSize(type) {
  switch (type) {
      case "i1":
      case "i8":
          return 1;
      case "i16":
          return 2;
      case "i32":
          return 4;
      case "i64":
          return 8;
      case "float":
          return 4;
      case "double":
          return 8;
      default:
          if ("*" === type[type.length - 1]) return 4;
          if ("i" === type[0]) {
              var bits = parseInt(type.substr(1));
              return assert(bits % 8 == 0, "getNativeTypeSize invalid bits " + bits + ", type " + type), bits / 8
          }
          return 0
  }
}

function warnOnce(text) {
  warnOnce.shown || (warnOnce.shown = {}), warnOnce.shown[text] || (warnOnce.shown[text] = 1, err(text))
}

function convertJsFunctionToWasm(func, sig) {
  var typeSection = [1, 0, 1, 96],
      sigRet = sig.slice(0, 1),
      sigParam = sig.slice(1),
      typeCodes = {
          i: 127,
          j: 126,
          f: 125,
          d: 124
      };
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) typeSection.push(typeCodes[sigParam[i]]);
  "v" == sigRet ? typeSection.push(0) : typeSection = typeSection.concat([1, typeCodes[sigRet]]), typeSection[1] = typeSection.length - 2;
  var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])),
      module = new WebAssembly.Module(bytes);
  return new WebAssembly.Instance(module, {
      e: {
          f: func
      }
  }).exports.f
}

function addFunctionWasm(func, sig) {
  var table = wasmTable,
      ret = table.length;
  try {
      table.grow(1)
  } catch (err) {
      if (!err instanceof RangeError) throw err;
      throw "Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."
  }
  try {
      table.set(ret, func)
  } catch (err) {
      if (!err instanceof TypeError) throw err;
      assert(void 0 !== sig, "Missing signature argument to addFunction");
      var wrapped = convertJsFunctionToWasm(func, sig);
      table.set(ret, wrapped)
  }
  return ret
}

function removeFunctionWasm(index) {}
var funcWrappers = {};

function dynCall(sig, ptr, args) {
  return args && args.length ? Module["dynCall_" + sig].apply(null, [ptr].concat(args)) : Module["dynCall_" + sig].call(null, ptr)
}
var wasmBinary, noExitRuntime, wasmMemory, tempRet0 = 0,
  setTempRet0 = function(value) {
      tempRet0 = value
  };

function setValue(ptr, value, type, noSafe) {
  switch ("*" === (type = type || "i8").charAt(type.length - 1) && (type = "i32"), type) {
      case "i1":
      case "i8":
          HEAP8[ptr >> 0] = value;
          break;
      case "i16":
          HEAP16[ptr >> 1] = value;
          break;
      case "i32":
          HEAP32[ptr >> 2] = value;
          break;
      case "i64":
          tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (0 | Math_min(+Math_floor(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
          break;
      case "float":
          HEAPF32[ptr >> 2] = value;
          break;
      case "double":
          HEAPF64[ptr >> 3] = value;
          break;
      default:
          abort("invalid type for setValue: " + type)
  }
}
Module.wasmBinary && (wasmBinary = Module.wasmBinary), Module.noExitRuntime && (noExitRuntime = Module.noExitRuntime), "object" != typeof WebAssembly && err("no native wasm support detected");
var wasmTable = new WebAssembly.Table({
      initial: 3022,
      maximum: 3022,
      element: "anyfunc"
  }),
  ABORT = !1,
  EXITSTATUS = 0;

function assert(condition, text) {
  condition || abort("Assertion failed: " + text)
}

function getCFunc(ident) {
  var func = Module["_" + ident];
  return assert(func, "Cannot call unknown function " + ident + ", make sure it is exported"), func
}

function ccall(ident, returnType, argTypes, args, opts) {
  var toC = {
      string: function(str) {
          var ret = 0;
          if (null != str && 0 !== str) {
              var len = 1 + (str.length << 2);
              stringToUTF8(str, ret = stackAlloc(len), len)
          }
          return ret
      },
      array: function(arr) {
          var ret = stackAlloc(arr.length);
          return writeArrayToMemory(arr, ret), ret
      }
  };
  var func = getCFunc(ident),
      cArgs = [],
      stack = 0;
  if (args)
      for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          converter ? (0 === stack && (stack = stackSave()), cArgs[i] = converter(args[i])) : cArgs[i] = args[i]
      }
  var ret = func.apply(null, cArgs);
  return ret = function(ret) {
      return "string" === returnType ? UTF8ToString(ret) : "boolean" === returnType ? Boolean(ret) : ret
  }(ret), 0 !== stack && stackRestore(stack), ret
}

function cwrap(ident, returnType, argTypes, opts) {
  var numericArgs = (argTypes = argTypes || []).every(function(type) {
      return "number" === type
  });
  return "string" !== returnType && numericArgs && !opts ? getCFunc(ident) : function() {
      return ccall(ident, returnType, argTypes, arguments, opts)
  }
}
var ALLOC_NONE = 3;

function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  "number" == typeof slab ? (zeroinit = !0, size = slab) : (zeroinit = !1, size = slab.length);
  var ret, singleType = "string" == typeof types ? types : null;
  if (ret = allocator == ALLOC_NONE ? ptr : [_malloc, stackAlloc, dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length)), zeroinit) {
      var stop;
      for (ptr = ret, assert(0 == (3 & ret)), stop = ret + (-4 & size); ptr < stop; ptr += 4) HEAP32[ptr >> 2] = 0;
      for (stop = ret + size; ptr < stop;) HEAP8[ptr++ >> 0] = 0;
      return ret
  }
  if ("i8" === singleType) return slab.subarray || slab.slice ? HEAPU8.set(slab, ret) : HEAPU8.set(new Uint8Array(slab), ret), ret;
  for (var type, typeSize, previousType, i = 0; i < size;) {
      var curr = slab[i];
      0 !== (type = singleType || types[i]) ? ("i64" == type && (type = "i32"), setValue(ret + i, curr, type), previousType !== type && (typeSize = getNativeTypeSize(type), previousType = type), i += typeSize) : i++
  }
  return ret
}
var UTF8Decoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
  for (var endIdx = idx + maxBytesToRead, endPtr = idx; u8Array[endPtr] && !(endPtr >= endIdx);) ++endPtr;
  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  for (var str = ""; idx < endPtr;) {
      var u0 = u8Array[idx++];
      if (128 & u0) {
          var u1 = 63 & u8Array[idx++];
          if (192 != (224 & u0)) {
              var u2 = 63 & u8Array[idx++];
              if ((u0 = 224 == (240 & u0) ? (15 & u0) << 12 | u1 << 6 | u2 : (7 & u0) << 18 | u1 << 12 | u2 << 6 | 63 & u8Array[idx++]) < 65536) str += String.fromCharCode(u0);
              else {
                  var ch = u0 - 65536;
                  str += String.fromCharCode(55296 | ch >> 10, 56320 | 1023 & ch)
              }
          } else str += String.fromCharCode((31 & u0) << 6 | u1)
      } else str += String.fromCharCode(u0)
  }
  return str
}

function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
}

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) return 0;
  for (var startIdx = outIdx, endIdx = outIdx + maxBytesToWrite - 1, i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);
      if (u >= 55296 && u <= 57343) u = 65536 + ((1023 & u) << 10) | 1023 & str.charCodeAt(++i);
      if (u <= 127) {
          if (outIdx >= endIdx) break;
          outU8Array[outIdx++] = u
      } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          outU8Array[outIdx++] = 192 | u >> 6, outU8Array[outIdx++] = 128 | 63 & u
      } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          outU8Array[outIdx++] = 224 | u >> 12, outU8Array[outIdx++] = 128 | u >> 6 & 63, outU8Array[outIdx++] = 128 | 63 & u
      } else {
          if (outIdx + 3 >= endIdx) break;
          outU8Array[outIdx++] = 240 | u >> 18, outU8Array[outIdx++] = 128 | u >> 12 & 63, outU8Array[outIdx++] = 128 | u >> 6 & 63, outU8Array[outIdx++] = 128 | 63 & u
      }
  }
  return outU8Array[outIdx] = 0, outIdx - startIdx
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite)
}

function lengthBytesUTF8(str) {
  for (var len = 0, i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);
      u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & str.charCodeAt(++i)), u <= 127 ? ++len : len += u <= 2047 ? 2 : u <= 65535 ? 3 : 4
  }
  return len
}
var UTF16Decoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer)
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) HEAP8[buffer++ >> 0] = str.charCodeAt(i);
  dontAddNull || (HEAP8[buffer >> 0] = 0)
}
var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64, PAGE_SIZE = 16384,
  WASM_PAGE_SIZE = 65536;

function alignUp(x, multiple) {
  return x % multiple > 0 && (x += multiple - x % multiple), x
}

function updateGlobalBufferAndViews(buf) {
  buffer = buf, Module.HEAP8 = HEAP8 = new Int8Array(buf), Module.HEAP16 = HEAP16 = new Int16Array(buf), Module.HEAP32 = HEAP32 = new Int32Array(buf), Module.HEAPU8 = HEAPU8 = new Uint8Array(buf), Module.HEAPU16 = HEAPU16 = new Uint16Array(buf), Module.HEAPU32 = HEAPU32 = new Uint32Array(buf), Module.HEAPF32 = HEAPF32 = new Float32Array(buf), Module.HEAPF64 = HEAPF64 = new Float64Array(buf)
}
var STACK_BASE = 5496176,
  DYNAMIC_BASE = 5496176,
  DYNAMICTOP_PTR = 253136,
  INITIAL_TOTAL_MEMORY = Module.TOTAL_MEMORY || 16777216;

function callRuntimeCallbacks(callbacks) {
  for (; callbacks.length > 0;) {
      var callback = callbacks.shift();
      if ("function" != typeof callback) {
          var func = callback.func;
          "number" == typeof func ? void 0 === callback.arg ? Module.dynCall_v(func) : Module.dynCall_vi(func, callback.arg) : func(void 0 === callback.arg ? null : callback.arg)
      } else callback()
  }
}(wasmMemory = Module.wasmMemory ? Module.wasmMemory : new WebAssembly.Memory({
  initial: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE
})) && (buffer = wasmMemory.buffer), INITIAL_TOTAL_MEMORY = buffer.byteLength, updateGlobalBufferAndViews(buffer), HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
var __ATPRERUN__ = [],
  __ATINIT__ = [],
  __ATMAIN__ = [],
  __ATEXIT__ = [],
  __ATPOSTRUN__ = [],
  runtimeInitialized = !1,
  runtimeExited = !1;

function preRun() {
  if (Module.preRun)
      for ("function" == typeof Module.preRun && (Module.preRun = [Module.preRun]); Module.preRun.length;) addOnPreRun(Module.preRun.shift());
  callRuntimeCallbacks(__ATPRERUN__)
}

function initRuntime() {
  runtimeInitialized = !0, SOCKFS.root = FS.mount(SOCKFS, {}, null), Module.noFSInit || FS.init.initialized || FS.init(), TTY.init(), PIPEFS.root = FS.mount(PIPEFS, {}, null), callRuntimeCallbacks(__ATINIT__)
}

function preMain() {
  FS.ignorePermissions = !1, callRuntimeCallbacks(__ATMAIN__)
}

function exitRuntime() {
  runtimeExited = !0
}

function postRun() {
  if (Module.postRun)
      for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); Module.postRun.length;) addOnPostRun(Module.postRun.shift());
  callRuntimeCallbacks(__ATPOSTRUN__)
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb)
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb)
}
var Math_abs = Math.abs,
  Math_ceil = Math.ceil,
  Math_floor = Math.floor,
  Math_min = Math.min,
  runDependencies = 0,
  runDependencyWatcher = null,
  dependenciesFulfilled = null;

function getUniqueRunDependency(id) {
  return id
}

function addRunDependency(id) {
  runDependencies++, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies)
}

function removeRunDependency(id) {
  if (runDependencies--, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies), 0 == runDependencies && (null !== runDependencyWatcher && (clearInterval(runDependencyWatcher), runDependencyWatcher = null), dependenciesFulfilled)) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null, callback()
  }
}

function abort(what) {
  throw Module.onAbort && Module.onAbort(what), out(what += ""), err(what), ABORT = !0, EXITSTATUS = 1, what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(what)
}
Module.preloadedImages = {}, Module.preloadedAudios = {};
var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
  return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : 0 === filename.indexOf(dataURIPrefix)
}
var tempDouble, tempI64, wasmBinaryFile = "audio.encode.wasm";

function getBinary() {
  try {
      if (wasmBinary) return new Uint8Array(wasmBinary);
      if (readBinary) return readBinary(wasmBinaryFile);
      throw "both async and sync fetching of the wasm failed"
  } catch (err) {
      abort(err)
  }
}

function getBinaryPromise() {
  return wasmBinary || !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER || "function" != typeof fetch ? new Promise(function(resolve, reject) {
      resolve(getBinary())
  }) : fetch(wasmBinaryFile, {
      credentials: "same-origin"
  }).then(function(response) {
      if (!response.ok) throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      return response.arrayBuffer()
  }).catch(function() {
      return getBinary()
  })
}

function createWasm() {
  var info = {
      env: asmLibraryArg,
      wasi_unstable: asmLibraryArg
  };

  function receiveInstance(instance, module) {
      var exports = instance.exports;
      Module.asm = exports, removeRunDependency("wasm-instantiate")
  }

  function receiveInstantiatedSource(output) {
      receiveInstance(output.instance)
  }

  function instantiateArrayBuffer(receiver) {
      return instantiateCachedURL(396, wasmUrl + "audio.encode.wasm", info)
  }
  if (addRunDependency("wasm-instantiate"), Module.instantiateWasm) try {
      return Module.instantiateWasm(info, receiveInstance)
  } catch (e) {
      return err("Module.instantiateWasm callback failed with error: " + e), !1
  }
  return function() {
      if (wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || isDataURI(wasmBinaryFile) || "function" != typeof fetch) return instantiateArrayBuffer();
      fetch(wasmBinaryFile, {
          credentials: "same-origin"
      }).then(function(response) {
          return WebAssembly.instantiateStreaming(response, info).then(receiveInstantiatedSource, function(reason) {
              err("wasm streaming compile failed: " + reason), err("falling back to ArrayBuffer instantiation"), instantiateArrayBuffer()
          })
      })
  }(), {}
}
isDataURI(wasmBinaryFile) || (wasmBinaryFile = locateFile(wasmBinaryFile));
var ASM_CONSTS = {
      1068: function($0, $1) {
          send_data($0, $1)
      },
      1094: function($0, $1) {
          audio_encode_frame_callback($0, $1)
      },
      1138: function($0, $1, $2) {
          Get_ExternalRecord($0, $1, $2)
      },
      1192: function($0, $1, $2, $3, $4, $5, $6, $7) {
          frame_callback($0, $1, $2, $3, $4, $5, $6, $7)
      },
      1271: function($0, $1) {
          get_edition($0, $1)
      }
  },
  _readAsmConstArgsArray = [];

function readAsmConstArgs(sigPtr, buf) {
  var args = _readAsmConstArgsArray;
  for (args.length = 0;;) {
      var ch = HEAPU8[sigPtr++];
      if (!ch) return args;
      ch === "d".charCodeAt(0) || ch === "f".charCodeAt(0) ? (buf = alignMemory(buf, 8), args.push(HEAPF64[buf >> 3]), buf += 8) : ch === "i".charCodeAt(0) && (buf = alignMemory(buf, 4), args.push(HEAP32[buf >> 2]), buf += 4)
  }
}

function _emscripten_asm_const_iii(code, sigPtr, argbuf) {
  var args = readAsmConstArgs(sigPtr, argbuf);
  return ASM_CONSTS[code].apply(null, args)
}

function demangle(func) {
  var __cxa_demangle_func = Module.___cxa_demangle || Module.__cxa_demangle;
  assert(__cxa_demangle_func);
  try {
      var s = func;
      s.startsWith("__Z") && (s = s.substr(1));
      var len = lengthBytesUTF8(s) + 1,
          buf = _malloc(len);
      stringToUTF8(s, buf, len);
      var status = _malloc(4),
          ret = __cxa_demangle_func(buf, 0, 0, status);
      if (0 === HEAP32[status >> 2] && ret) return UTF8ToString(ret)
  } catch (e) {} finally {
      buf && _free(buf), status && _free(status), ret && _free(ret)
  }
  return func
}

function demangleAll(text) {
  return text.replace(/\b_Z[\w\d_]+/g, function(x) {
      var y = demangle(x);
      return x === y ? x : y + " [" + x + "]"
  })
}

function jsStackTrace() {
  var err = new Error;
  if (!err.stack) {
      try {
          throw new Error(0)
      } catch (e) {
          err = e
      }
      if (!err.stack) return "(no stack trace available)"
  }
  return err.stack.toString()
}

function stackTrace() {
  var js = jsStackTrace();
  return Module.extraStackTrace && (js += "\n" + Module.extraStackTrace()), demangleAll(js)
}

function ___assert_fail(condition, filename, line, func) {
  abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"])
}

function ___cxa_allocate_exception(size) {
  return _malloc(size)
}

function _atexit(func, arg) {
  __ATEXIT__.unshift({
      func: func,
      arg: arg
  })
}

function ___cxa_atexit() {
  return _atexit.apply(null, arguments)
}
__ATINIT__.push({
  func: function() {
      ___wasm_call_ctors()
  }
});
var ___exception_infos = {},
  ___exception_last = 0;

function ___cxa_throw(ptr, type, destructor) {
  throw ___exception_infos[ptr] = {
      ptr: ptr,
      adjusted: [ptr],
      type: type,
      destructor: destructor,
      refcount: 0,
      caught: !1,
      rethrown: !1
  }, ___exception_last = ptr, "uncaught_exception" in __ZSt18uncaught_exceptionv ? __ZSt18uncaught_exceptionv.uncaught_exceptions++ : __ZSt18uncaught_exceptionv.uncaught_exceptions = 1, ptr
}

function ___lock() {}

function ___setErrNo(value) {
  return Module.___errno_location && (HEAP32[Module.___errno_location() >> 2] = value), value
}

function ___map_file(pathname, size) {
  return ___setErrNo(63), -1
}
var PATH = {
      splitPath: function(filename) {
          return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(filename).slice(1)
      },
      normalizeArray: function(parts, allowAboveRoot) {
          for (var up = 0, i = parts.length - 1; i >= 0; i--) {
              var last = parts[i];
              "." === last ? parts.splice(i, 1) : ".." === last ? (parts.splice(i, 1), up++) : up && (parts.splice(i, 1), up--)
          }
          if (allowAboveRoot)
              for (; up; up--) parts.unshift("..");
          return parts
      },
      normalize: function(path) {
          var isAbsolute = "/" === path.charAt(0),
              trailingSlash = "/" === path.substr(-1);
          return (path = PATH.normalizeArray(path.split("/").filter(function(p) {
              return !!p
          }), !isAbsolute).join("/")) || isAbsolute || (path = "."), path && trailingSlash && (path += "/"), (isAbsolute ? "/" : "") + path
      },
      dirname: function(path) {
          var result = PATH.splitPath(path),
              root = result[0],
              dir = result[1];
          return root || dir ? (dir && (dir = dir.substr(0, dir.length - 1)), root + dir) : "."
      },
      basename: function(path) {
          if ("/" === path) return "/";
          var lastSlash = path.lastIndexOf("/");
          return -1 === lastSlash ? path : path.substr(lastSlash + 1)
      },
      extname: function(path) {
          return PATH.splitPath(path)[3]
      },
      join: function() {
          var paths = Array.prototype.slice.call(arguments, 0);
          return PATH.normalize(paths.join("/"))
      },
      join2: function(l, r) {
          return PATH.normalize(l + "/" + r)
      }
  },
  PATH_FS = {
      resolve: function() {
          for (var resolvedPath = "", resolvedAbsolute = !1, i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
              var path = i >= 0 ? arguments[i] : FS.cwd();
              if ("string" != typeof path) throw new TypeError("Arguments to path.resolve must be strings");
              if (!path) return "";
              resolvedPath = path + "/" + resolvedPath, resolvedAbsolute = "/" === path.charAt(0)
          }
          return (resolvedAbsolute ? "/" : "") + (resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
              return !!p
          }), !resolvedAbsolute).join("/")) || "."
      },
      relative: function(from, to) {
          function trim(arr) {
              for (var start = 0; start < arr.length && "" === arr[start]; start++);
              for (var end = arr.length - 1; end >= 0 && "" === arr[end]; end--);
              return start > end ? [] : arr.slice(start, end - start + 1)
          }
          from = PATH_FS.resolve(from).substr(1), to = PATH_FS.resolve(to).substr(1);
          for (var fromParts = trim(from.split("/")), toParts = trim(to.split("/")), length = Math.min(fromParts.length, toParts.length), samePartsLength = length, i = 0; i < length; i++)
              if (fromParts[i] !== toParts[i]) {
                  samePartsLength = i;
                  break
              } var outputParts = [];
          for (i = samePartsLength; i < fromParts.length; i++) outputParts.push("..");
          return (outputParts = outputParts.concat(toParts.slice(samePartsLength))).join("/")
      }
  },
  TTY = {
      ttys: [],
      init: function() {},
      shutdown: function() {},
      register: function(dev, ops) {
          TTY.ttys[dev] = {
              input: [],
              output: [],
              ops: ops
          }, FS.registerDevice(dev, TTY.stream_ops)
      },
      stream_ops: {
          open: function(stream) {
              var tty = TTY.ttys[stream.node.rdev];
              if (!tty) throw new FS.ErrnoError(43);
              stream.tty = tty, stream.seekable = !1
          },
          close: function(stream) {
              stream.tty.ops.flush(stream.tty)
          },
          flush: function(stream) {
              stream.tty.ops.flush(stream.tty)
          },
          read: function(stream, buffer, offset, length, pos) {
              if (!stream.tty || !stream.tty.ops.get_char) throw new FS.ErrnoError(60);
              for (var bytesRead = 0, i = 0; i < length; i++) {
                  var result;
                  try {
                      result = stream.tty.ops.get_char(stream.tty)
                  } catch (e) {
                      throw new FS.ErrnoError(29)
                  }
                  if (void 0 === result && 0 === bytesRead) throw new FS.ErrnoError(6);
                  if (null == result) break;
                  bytesRead++, buffer[offset + i] = result
              }
              return bytesRead && (stream.node.timestamp = Date.now()), bytesRead
          },
          write: function(stream, buffer, offset, length, pos) {
              if (!stream.tty || !stream.tty.ops.put_char) throw new FS.ErrnoError(60);
              try {
                  for (var i = 0; i < length; i++) stream.tty.ops.put_char(stream.tty, buffer[offset + i])
              } catch (e) {
                  throw new FS.ErrnoError(29)
              }
              return length && (stream.node.timestamp = Date.now()), i
          }
      },
      default_tty_ops: {
          get_char: function(tty) {
              if (!tty.input.length) {
                  var result = null;
                  if (ENVIRONMENT_IS_NODE) {
                      var buf = Buffer.alloc ? Buffer.alloc(256) : new Buffer(256),
                          bytesRead = 0;
                      try {
                          bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, 256, null)
                      } catch (e) {
                          if (-1 == e.toString().indexOf("EOF")) throw e;
                          bytesRead = 0
                      }
                      result = bytesRead > 0 ? buf.slice(0, bytesRead).toString("utf-8") : null
                  } else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (result = window.prompt("Input: ")) && (result += "\n") : "function" == typeof readline && null !== (result = readline()) && (result += "\n");
                  if (!result) return null;
                  tty.input = intArrayFromString(result, !0)
              }
              return tty.input.shift()
          },
          put_char: function(tty, val) {
              null === val || 10 === val ? (out(UTF8ArrayToString(tty.output, 0)), tty.output = []) : 0 != val && tty.output.push(val)
          },
          flush: function(tty) {
              tty.output && tty.output.length > 0 && (out(UTF8ArrayToString(tty.output, 0)), tty.output = [])
          }
      },
      default_tty1_ops: {
          put_char: function(tty, val) {
              null === val || 10 === val ? (err(UTF8ArrayToString(tty.output, 0)), tty.output = []) : 0 != val && tty.output.push(val)
          },
          flush: function(tty) {
              tty.output && tty.output.length > 0 && (err(UTF8ArrayToString(tty.output, 0)), tty.output = [])
          }
      }
  },
  MEMFS = {
      ops_table: null,
      mount: function(mount) {
          return MEMFS.createNode(null, "/", 16895, 0)
      },
      createNode: function(parent, name, mode, dev) {
          if (FS.isBlkdev(mode) || FS.isFIFO(mode)) throw new FS.ErrnoError(63);
          MEMFS.ops_table || (MEMFS.ops_table = {
              dir: {
                  node: {
                      getattr: MEMFS.node_ops.getattr,
                      setattr: MEMFS.node_ops.setattr,
                      lookup: MEMFS.node_ops.lookup,
                      mknod: MEMFS.node_ops.mknod,
                      rename: MEMFS.node_ops.rename,
                      unlink: MEMFS.node_ops.unlink,
                      rmdir: MEMFS.node_ops.rmdir,
                      readdir: MEMFS.node_ops.readdir,
                      symlink: MEMFS.node_ops.symlink
                  },
                  stream: {
                      llseek: MEMFS.stream_ops.llseek
                  }
              },
              file: {
                  node: {
                      getattr: MEMFS.node_ops.getattr,
                      setattr: MEMFS.node_ops.setattr
                  },
                  stream: {
                      llseek: MEMFS.stream_ops.llseek,
                      read: MEMFS.stream_ops.read,
                      write: MEMFS.stream_ops.write,
                      allocate: MEMFS.stream_ops.allocate,
                      mmap: MEMFS.stream_ops.mmap,
                      msync: MEMFS.stream_ops.msync
                  }
              },
              link: {
                  node: {
                      getattr: MEMFS.node_ops.getattr,
                      setattr: MEMFS.node_ops.setattr,
                      readlink: MEMFS.node_ops.readlink
                  },
                  stream: {}
              },
              chrdev: {
                  node: {
                      getattr: MEMFS.node_ops.getattr,
                      setattr: MEMFS.node_ops.setattr
                  },
                  stream: FS.chrdev_stream_ops
              }
          });
          var node = FS.createNode(parent, name, mode, dev);
          return FS.isDir(node.mode) ? (node.node_ops = MEMFS.ops_table.dir.node, node.stream_ops = MEMFS.ops_table.dir.stream, node.contents = {}) : FS.isFile(node.mode) ? (node.node_ops = MEMFS.ops_table.file.node, node.stream_ops = MEMFS.ops_table.file.stream, node.usedBytes = 0, node.contents = null) : FS.isLink(node.mode) ? (node.node_ops = MEMFS.ops_table.link.node, node.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(node.mode) && (node.node_ops = MEMFS.ops_table.chrdev.node, node.stream_ops = MEMFS.ops_table.chrdev.stream), node.timestamp = Date.now(), parent && (parent.contents[name] = node), node
      },
      getFileDataAsRegularArray: function(node) {
          if (node.contents && node.contents.subarray) {
              for (var arr = [], i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
              return arr
          }
          return node.contents
      },
      getFileDataAsTypedArray: function(node) {
          return node.contents ? node.contents.subarray ? node.contents.subarray(0, node.usedBytes) : new Uint8Array(node.contents) : new Uint8Array
      },
      expandFileStorage: function(node, newCapacity) {
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (!(prevCapacity >= newCapacity)) {
              newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < 1048576 ? 2 : 1.125) | 0), 0 != prevCapacity && (newCapacity = Math.max(newCapacity, 256));
              var oldContents = node.contents;
              node.contents = new Uint8Array(newCapacity), node.usedBytes > 0 && node.contents.set(oldContents.subarray(0, node.usedBytes), 0)
          }
      },
      resizeFileStorage: function(node, newSize) {
          if (node.usedBytes != newSize) {
              if (0 == newSize) return node.contents = null, void(node.usedBytes = 0);
              if (!node.contents || node.contents.subarray) {
                  var oldContents = node.contents;
                  return node.contents = new Uint8Array(new ArrayBuffer(newSize)), oldContents && node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))), void(node.usedBytes = newSize)
              }
              if (node.contents || (node.contents = []), node.contents.length > newSize) node.contents.length = newSize;
              else
                  for (; node.contents.length < newSize;) node.contents.push(0);
              node.usedBytes = newSize
          }
      },
      node_ops: {
          getattr: function(node) {
              var attr = {};
              return attr.dev = FS.isChrdev(node.mode) ? node.id : 1, attr.ino = node.id, attr.mode = node.mode, attr.nlink = 1, attr.uid = 0, attr.gid = 0, attr.rdev = node.rdev, FS.isDir(node.mode) ? attr.size = 4096 : FS.isFile(node.mode) ? attr.size = node.usedBytes : FS.isLink(node.mode) ? attr.size = node.link.length : attr.size = 0, attr.atime = new Date(node.timestamp), attr.mtime = new Date(node.timestamp), attr.ctime = new Date(node.timestamp), attr.blksize = 4096, attr.blocks = Math.ceil(attr.size / attr.blksize), attr
          },
          setattr: function(node, attr) {
              void 0 !== attr.mode && (node.mode = attr.mode), void 0 !== attr.timestamp && (node.timestamp = attr.timestamp), void 0 !== attr.size && MEMFS.resizeFileStorage(node, attr.size)
          },
          lookup: function(parent, name) {
              throw FS.genericErrors[44]
          },
          mknod: function(parent, name, mode, dev) {
              return MEMFS.createNode(parent, name, mode, dev)
          },
          rename: function(old_node, new_dir, new_name) {
              if (FS.isDir(old_node.mode)) {
                  var new_node;
                  try {
                      new_node = FS.lookupNode(new_dir, new_name)
                  } catch (e) {}
                  if (new_node)
                      for (var i in new_node.contents) throw new FS.ErrnoError(55)
              }
              delete old_node.parent.contents[old_node.name], old_node.name = new_name, new_dir.contents[new_name] = old_node, old_node.parent = new_dir
          },
          unlink: function(parent, name) {
              delete parent.contents[name]
          },
          rmdir: function(parent, name) {
              var node = FS.lookupNode(parent, name);
              for (var i in node.contents) throw new FS.ErrnoError(55);
              delete parent.contents[name]
          },
          readdir: function(node) {
              var entries = [".", ".."];
              for (var key in node.contents) node.contents.hasOwnProperty(key) && entries.push(key);
              return entries
          },
          symlink: function(parent, newname, oldpath) {
              var node = MEMFS.createNode(parent, newname, 41471, 0);
              return node.link = oldpath, node
          },
          readlink: function(node) {
              if (!FS.isLink(node.mode)) throw new FS.ErrnoError(28);
              return node.link
          }
      },
      stream_ops: {
          read: function(stream, buffer, offset, length, position) {
              var contents = stream.node.contents;
              if (position >= stream.node.usedBytes) return 0;
              var size = Math.min(stream.node.usedBytes - position, length);
              if (size > 8 && contents.subarray) buffer.set(contents.subarray(position, position + size), offset);
              else
                  for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
              return size
          },
          write: function(stream, buffer, offset, length, position, canOwn) {
              if (buffer.buffer === HEAP8.buffer && (canOwn = !1), !length) return 0;
              var node = stream.node;
              if (node.timestamp = Date.now(), buffer.subarray && (!node.contents || node.contents.subarray)) {
                  if (canOwn) return node.contents = buffer.subarray(offset, offset + length), node.usedBytes = length, length;
                  if (0 === node.usedBytes && 0 === position) return node.contents = new Uint8Array(buffer.subarray(offset, offset + length)), node.usedBytes = length, length;
                  if (position + length <= node.usedBytes) return node.contents.set(buffer.subarray(offset, offset + length), position), length
              }
              if (MEMFS.expandFileStorage(node, position + length), node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position);
              else
                  for (var i = 0; i < length; i++) node.contents[position + i] = buffer[offset + i];
              return node.usedBytes = Math.max(node.usedBytes, position + length), length
          },
          llseek: function(stream, offset, whence) {
              var position = offset;
              if (1 === whence ? position += stream.position : 2 === whence && FS.isFile(stream.node.mode) && (position += stream.node.usedBytes), position < 0) throw new FS.ErrnoError(28);
              return position
          },
          allocate: function(stream, offset, length) {
              MEMFS.expandFileStorage(stream.node, offset + length), stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
          },
          mmap: function(stream, buffer, offset, length, position, prot, flags) {
              if (!FS.isFile(stream.node.mode)) throw new FS.ErrnoError(43);
              var ptr, allocated, contents = stream.node.contents;
              if (2 & flags || contents.buffer !== buffer.buffer) {
                  (position > 0 || position + length < stream.node.usedBytes) && (contents = contents.subarray ? contents.subarray(position, position + length) : Array.prototype.slice.call(contents, position, position + length)), allocated = !0;
                  var fromHeap = buffer.buffer == HEAP8.buffer;
                  if (!(ptr = _malloc(length))) throw new FS.ErrnoError(48);
                  (fromHeap ? HEAP8 : buffer).set(contents, ptr)
              } else allocated = !1, ptr = contents.byteOffset;
              return {
                  ptr: ptr,
                  allocated: allocated
              }
          },
          msync: function(stream, buffer, offset, length, mmapFlags) {
              if (!FS.isFile(stream.node.mode)) throw new FS.ErrnoError(43);
              if (2 & mmapFlags) return 0;
              MEMFS.stream_ops.write(stream, buffer, 0, length, offset, !1);
              return 0
          }
      }
  },
  FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: !1,
      ignorePermissions: !0,
      trackingDelegate: {},
      tracking: {
          openFlags: {
              READ: 1,
              WRITE: 2
          }
      },
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      handleFSError: function(e) {
          if (!(e instanceof FS.ErrnoError)) throw e + " : " + stackTrace();
          return ___setErrNo(e.errno)
      },
      lookupPath: function(path, opts) {
          if (opts = opts || {}, !(path = PATH_FS.resolve(FS.cwd(), path))) return {
              path: "",
              node: null
          };
          var defaults = {
              follow_mount: !0,
              recurse_count: 0
          };
          for (var key in defaults) void 0 === opts[key] && (opts[key] = defaults[key]);
          if (opts.recurse_count > 8) throw new FS.ErrnoError(32);
          for (var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
                  return !!p
              }), !1), current = FS.root, current_path = "/", i = 0; i < parts.length; i++) {
              var islast = i === parts.length - 1;
              if (islast && opts.parent) break;
              if (current = FS.lookupNode(current, parts[i]), current_path = PATH.join2(current_path, parts[i]), FS.isMountpoint(current) && (!islast || islast && opts.follow_mount) && (current = current.mounted.root), !islast || opts.follow)
                  for (var count = 0; FS.isLink(current.mode);) {
                      var link = FS.readlink(current_path);
                      if (current_path = PATH_FS.resolve(PATH.dirname(current_path), link), current = FS.lookupPath(current_path, {
                              recurse_count: opts.recurse_count
                          }).node, count++ > 40) throw new FS.ErrnoError(32)
                  }
          }
          return {
              path: current_path,
              node: current
          }
      },
      getPath: function(node) {
          for (var path;;) {
              if (FS.isRoot(node)) {
                  var mount = node.mount.mountpoint;
                  return path ? "/" !== mount[mount.length - 1] ? mount + "/" + path : mount + path : mount
              }
              path = path ? node.name + "/" + path : node.name, node = node.parent
          }
      },
      hashName: function(parentid, name) {
          for (var hash = 0, i = 0; i < name.length; i++) hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
          return (parentid + hash >>> 0) % FS.nameTable.length
      },
      hashAddNode: function(node) {
          var hash = FS.hashName(node.parent.id, node.name);
          node.name_next = FS.nameTable[hash], FS.nameTable[hash] = node
      },
      hashRemoveNode: function(node) {
          var hash = FS.hashName(node.parent.id, node.name);
          if (FS.nameTable[hash] === node) FS.nameTable[hash] = node.name_next;
          else
              for (var current = FS.nameTable[hash]; current;) {
                  if (current.name_next === node) {
                      current.name_next = node.name_next;
                      break
                  }
                  current = current.name_next
              }
      },
      lookupNode: function(parent, name) {
          var err = FS.mayLookup(parent);
          if (err) throw new FS.ErrnoError(err, parent);
          for (var hash = FS.hashName(parent.id, name), node = FS.nameTable[hash]; node; node = node.name_next) {
              var nodeName = node.name;
              if (node.parent.id === parent.id && nodeName === name) return node
          }
          return FS.lookup(parent, name)
      },
      createNode: function(parent, name, mode, rdev) {
          if (!FS.FSNode) {
              FS.FSNode = function(parent, name, mode, rdev) {
                  parent || (parent = this), this.parent = parent, this.mount = parent.mount, this.mounted = null, this.id = FS.nextInode++, this.name = name, this.mode = mode, this.node_ops = {}, this.stream_ops = {}, this.rdev = rdev
              }, FS.FSNode.prototype = {};
              Object.defineProperties(FS.FSNode.prototype, {
                  read: {
                      get: function() {
                          return 365 == (365 & this.mode)
                      },
                      set: function(val) {
                          val ? this.mode |= 365 : this.mode &= -366
                      }
                  },
                  write: {
                      get: function() {
                          return 146 == (146 & this.mode)
                      },
                      set: function(val) {
                          val ? this.mode |= 146 : this.mode &= -147
                      }
                  },
                  isFolder: {
                      get: function() {
                          return FS.isDir(this.mode)
                      }
                  },
                  isDevice: {
                      get: function() {
                          return FS.isChrdev(this.mode)
                      }
                  }
              })
          }
          var node = new FS.FSNode(parent, name, mode, rdev);
          return FS.hashAddNode(node), node
      },
      destroyNode: function(node) {
          FS.hashRemoveNode(node)
      },
      isRoot: function(node) {
          return node === node.parent
      },
      isMountpoint: function(node) {
          return !!node.mounted
      },
      isFile: function(mode) {
          return 32768 == (61440 & mode)
      },
      isDir: function(mode) {
          return 16384 == (61440 & mode)
      },
      isLink: function(mode) {
          return 40960 == (61440 & mode)
      },
      isChrdev: function(mode) {
          return 8192 == (61440 & mode)
      },
      isBlkdev: function(mode) {
          return 24576 == (61440 & mode)
      },
      isFIFO: function(mode) {
          return 4096 == (61440 & mode)
      },
      isSocket: function(mode) {
          return 49152 == (49152 & mode)
      },
      flagModes: {
          r: 0,
          rs: 1052672,
          "r+": 2,
          w: 577,
          wx: 705,
          xw: 705,
          "w+": 578,
          "wx+": 706,
          "xw+": 706,
          a: 1089,
          ax: 1217,
          xa: 1217,
          "a+": 1090,
          "ax+": 1218,
          "xa+": 1218
      },
      modeStringToFlags: function(str) {
          var flags = FS.flagModes[str];
          if (void 0 === flags) throw new Error("Unknown file open mode: " + str);
          return flags
      },
      flagsToPermissionString: function(flag) {
          var perms = ["r", "w", "rw"][3 & flag];
          return 512 & flag && (perms += "w"), perms
      },
      nodePermissions: function(node, perms) {
          return FS.ignorePermissions ? 0 : (-1 === perms.indexOf("r") || 292 & node.mode) && (-1 === perms.indexOf("w") || 146 & node.mode) && (-1 === perms.indexOf("x") || 73 & node.mode) ? 0 : 2
      },
      mayLookup: function(dir) {
          var err = FS.nodePermissions(dir, "x");
          return err || (dir.node_ops.lookup ? 0 : 2)
      },
      mayCreate: function(dir, name) {
          try {
              FS.lookupNode(dir, name);
              return 20
          } catch (e) {}
          return FS.nodePermissions(dir, "wx")
      },
      mayDelete: function(dir, name, isdir) {
          var node;
          try {
              node = FS.lookupNode(dir, name)
          } catch (e) {
              return e.errno
          }
          var err = FS.nodePermissions(dir, "wx");
          if (err) return err;
          if (isdir) {
              if (!FS.isDir(node.mode)) return 54;
              if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) return 10
          } else if (FS.isDir(node.mode)) return 31;
          return 0
      },
      mayOpen: function(node, flags) {
          return node ? FS.isLink(node.mode) ? 32 : FS.isDir(node.mode) && ("r" !== FS.flagsToPermissionString(flags) || 512 & flags) ? 31 : FS.nodePermissions(node, FS.flagsToPermissionString(flags)) : 44
      },
      MAX_OPEN_FDS: 4096,
      nextfd: function(fd_start, fd_end) {
          fd_start = fd_start || 0, fd_end = fd_end || FS.MAX_OPEN_FDS;
          for (var fd = fd_start; fd <= fd_end; fd++)
              if (!FS.streams[fd]) return fd;
          throw new FS.ErrnoError(33)
      },
      getStream: function(fd) {
          return FS.streams[fd]
      },
      createStream: function(stream, fd_start, fd_end) {
          FS.FSStream || (FS.FSStream = function() {}, FS.FSStream.prototype = {}, Object.defineProperties(FS.FSStream.prototype, {
              object: {
                  get: function() {
                      return this.node
                  },
                  set: function(val) {
                      this.node = val
                  }
              },
              isRead: {
                  get: function() {
                      return 1 != (2097155 & this.flags)
                  }
              },
              isWrite: {
                  get: function() {
                      return 0 != (2097155 & this.flags)
                  }
              },
              isAppend: {
                  get: function() {
                      return 1024 & this.flags
                  }
              }
          }));
          var newStream = new FS.FSStream;
          for (var p in stream) newStream[p] = stream[p];
          stream = newStream;
          var fd = FS.nextfd(fd_start, fd_end);
          return stream.fd = fd, FS.streams[fd] = stream, stream
      },
      closeStream: function(fd) {
          FS.streams[fd] = null
      },
      chrdev_stream_ops: {
          open: function(stream) {
              var device = FS.getDevice(stream.node.rdev);
              stream.stream_ops = device.stream_ops, stream.stream_ops.open && stream.stream_ops.open(stream)
          },
          llseek: function() {
              throw new FS.ErrnoError(70)
          }
      },
      major: function(dev) {
          return dev >> 8
      },
      minor: function(dev) {
          return 255 & dev
      },
      makedev: function(ma, mi) {
          return ma << 8 | mi
      },
      registerDevice: function(dev, ops) {
          FS.devices[dev] = {
              stream_ops: ops
          }
      },
      getDevice: function(dev) {
          return FS.devices[dev]
      },
      getMounts: function(mount) {
          for (var mounts = [], check = [mount]; check.length;) {
              var m = check.pop();
              mounts.push(m), check.push.apply(check, m.mounts)
          }
          return mounts
      },
      syncfs: function(populate, callback) {
          "function" == typeof populate && (callback = populate, populate = !1), FS.syncFSRequests++, FS.syncFSRequests;
          var mounts = FS.getMounts(FS.root.mount),
              completed = 0;

          function doCallback(err) {
              return FS.syncFSRequests--, callback(err)
          }

          function done(err) {
              if (err) return done.errored ? void 0 : (done.errored = !0, doCallback(err));
              ++completed >= mounts.length && doCallback(null)
          }
          mounts.forEach(function(mount) {
              if (!mount.type.syncfs) return done(null);
              mount.type.syncfs(mount, populate, done)
          })
      },
      mount: function(type, opts, mountpoint) {
          var node, root = "/" === mountpoint,
              pseudo = !mountpoint;
          if (root && FS.root) throw new FS.ErrnoError(10);
          if (!root && !pseudo) {
              var lookup = FS.lookupPath(mountpoint, {
                  follow_mount: !1
              });
              if (mountpoint = lookup.path, node = lookup.node, FS.isMountpoint(node)) throw new FS.ErrnoError(10);
              if (!FS.isDir(node.mode)) throw new FS.ErrnoError(54)
          }
          var mount = {
                  type: type,
                  opts: opts,
                  mountpoint: mountpoint,
                  mounts: []
              },
              mountRoot = type.mount(mount);
          return mountRoot.mount = mount, mount.root = mountRoot, root ? FS.root = mountRoot : node && (node.mounted = mount, node.mount && node.mount.mounts.push(mount)), mountRoot
      },
      unmount: function(mountpoint) {
          var lookup = FS.lookupPath(mountpoint, {
              follow_mount: !1
          });
          if (!FS.isMountpoint(lookup.node)) throw new FS.ErrnoError(28);
          var node = lookup.node,
              mount = node.mounted,
              mounts = FS.getMounts(mount);
          Object.keys(FS.nameTable).forEach(function(hash) {
              for (var current = FS.nameTable[hash]; current;) {
                  var next = current.name_next; - 1 !== mounts.indexOf(current.mount) && FS.destroyNode(current), current = next
              }
          }), node.mounted = null;
          var idx = node.mount.mounts.indexOf(mount);
          node.mount.mounts.splice(idx, 1)
      },
      lookup: function(parent, name) {
          return parent.node_ops.lookup(parent, name)
      },
      mknod: function(path, mode, dev) {
          var parent = FS.lookupPath(path, {
                  parent: !0
              }).node,
              name = PATH.basename(path);
          if (!name || "." === name || ".." === name) throw new FS.ErrnoError(28);
          var err = FS.mayCreate(parent, name);
          if (err) throw new FS.ErrnoError(err);
          if (!parent.node_ops.mknod) throw new FS.ErrnoError(63);
          return parent.node_ops.mknod(parent, name, mode, dev)
      },
      create: function(path, mode) {
          return mode = void 0 !== mode ? mode : 438, mode &= 4095, mode |= 32768, FS.mknod(path, mode, 0)
      },
      mkdir: function(path, mode) {
          return mode = void 0 !== mode ? mode : 511, mode &= 1023, mode |= 16384, FS.mknod(path, mode, 0)
      },
      mkdirTree: function(path, mode) {
          for (var dirs = path.split("/"), d = "", i = 0; i < dirs.length; ++i)
              if (dirs[i]) {
                  d += "/" + dirs[i];
                  try {
                      FS.mkdir(d, mode)
                  } catch (e) {
                      if (20 != e.errno) throw e
                  }
              }
      },
      mkdev: function(path, mode, dev) {
          return void 0 === dev && (dev = mode, mode = 438), mode |= 8192, FS.mknod(path, mode, dev)
      },
      symlink: function(oldpath, newpath) {
          if (!PATH_FS.resolve(oldpath)) throw new FS.ErrnoError(44);
          var parent = FS.lookupPath(newpath, {
              parent: !0
          }).node;
          if (!parent) throw new FS.ErrnoError(44);
          var newname = PATH.basename(newpath),
              err = FS.mayCreate(parent, newname);
          if (err) throw new FS.ErrnoError(err);
          if (!parent.node_ops.symlink) throw new FS.ErrnoError(63);
          return parent.node_ops.symlink(parent, newname, oldpath)
      },
      rename: function(old_path, new_path) {
          var old_dir, new_dir, old_dirname = PATH.dirname(old_path),
              new_dirname = PATH.dirname(new_path),
              old_name = PATH.basename(old_path),
              new_name = PATH.basename(new_path);
          try {
              old_dir = FS.lookupPath(old_path, {
                  parent: !0
              }).node, new_dir = FS.lookupPath(new_path, {
                  parent: !0
              }).node
          } catch (e) {
              throw new FS.ErrnoError(10)
          }
          if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
          if (old_dir.mount !== new_dir.mount) throw new FS.ErrnoError(75);
          var new_node, old_node = FS.lookupNode(old_dir, old_name),
              relative = PATH_FS.relative(old_path, new_dirname);
          if ("." !== relative.charAt(0)) throw new FS.ErrnoError(28);
          if ("." !== (relative = PATH_FS.relative(new_path, old_dirname)).charAt(0)) throw new FS.ErrnoError(55);
          try {
              new_node = FS.lookupNode(new_dir, new_name)
          } catch (e) {}
          if (old_node !== new_node) {
              var isdir = FS.isDir(old_node.mode),
                  err = FS.mayDelete(old_dir, old_name, isdir);
              if (err) throw new FS.ErrnoError(err);
              if (err = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name)) throw new FS.ErrnoError(err);
              if (!old_dir.node_ops.rename) throw new FS.ErrnoError(63);
              if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) throw new FS.ErrnoError(10);
              if (new_dir !== old_dir && (err = FS.nodePermissions(old_dir, "w"))) throw new FS.ErrnoError(err);
              try {
                  FS.trackingDelegate.willMovePath && FS.trackingDelegate.willMovePath(old_path, new_path)
              } catch (e) {}
              FS.hashRemoveNode(old_node);
              try {
                  old_dir.node_ops.rename(old_node, new_dir, new_name)
              } catch (e) {
                  throw e
              } finally {
                  FS.hashAddNode(old_node)
              }
              try {
                  FS.trackingDelegate.onMovePath && FS.trackingDelegate.onMovePath(old_path, new_path)
              } catch (e) {}
          }
      },
      rmdir: function(path) {
          var parent = FS.lookupPath(path, {
                  parent: !0
              }).node,
              name = PATH.basename(path),
              node = FS.lookupNode(parent, name),
              err = FS.mayDelete(parent, name, !0);
          if (err) throw new FS.ErrnoError(err);
          if (!parent.node_ops.rmdir) throw new FS.ErrnoError(63);
          if (FS.isMountpoint(node)) throw new FS.ErrnoError(10);
          try {
              FS.trackingDelegate.willDeletePath && FS.trackingDelegate.willDeletePath(path)
          } catch (e) {}
          parent.node_ops.rmdir(parent, name), FS.destroyNode(node);
          try {
              FS.trackingDelegate.onDeletePath && FS.trackingDelegate.onDeletePath(path)
          } catch (e) {}
      },
      readdir: function(path) {
          var node = FS.lookupPath(path, {
              follow: !0
          }).node;
          if (!node.node_ops.readdir) throw new FS.ErrnoError(54);
          return node.node_ops.readdir(node)
      },
      unlink: function(path) {
          var parent = FS.lookupPath(path, {
                  parent: !0
              }).node,
              name = PATH.basename(path),
              node = FS.lookupNode(parent, name),
              err = FS.mayDelete(parent, name, !1);
          if (err) throw new FS.ErrnoError(err);
          if (!parent.node_ops.unlink) throw new FS.ErrnoError(63);
          if (FS.isMountpoint(node)) throw new FS.ErrnoError(10);
          try {
              FS.trackingDelegate.willDeletePath && FS.trackingDelegate.willDeletePath(path)
          } catch (e) {}
          parent.node_ops.unlink(parent, name), FS.destroyNode(node);
          try {
              FS.trackingDelegate.onDeletePath && FS.trackingDelegate.onDeletePath(path)
          } catch (e) {}
      },
      readlink: function(path) {
          var link = FS.lookupPath(path).node;
          if (!link) throw new FS.ErrnoError(44);
          if (!link.node_ops.readlink) throw new FS.ErrnoError(28);
          return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
      },
      stat: function(path, dontFollow) {
          var node = FS.lookupPath(path, {
              follow: !dontFollow
          }).node;
          if (!node) throw new FS.ErrnoError(44);
          if (!node.node_ops.getattr) throw new FS.ErrnoError(63);
          return node.node_ops.getattr(node)
      },
      lstat: function(path) {
          return FS.stat(path, !0)
      },
      chmod: function(path, mode, dontFollow) {
          var node;
          "string" == typeof path ? node = FS.lookupPath(path, {
              follow: !dontFollow
          }).node : node = path;
          if (!node.node_ops.setattr) throw new FS.ErrnoError(63);
          node.node_ops.setattr(node, {
              mode: 4095 & mode | -4096 & node.mode,
              timestamp: Date.now()
          })
      },
      lchmod: function(path, mode) {
          FS.chmod(path, mode, !0)
      },
      fchmod: function(fd, mode) {
          var stream = FS.getStream(fd);
          if (!stream) throw new FS.ErrnoError(8);
          FS.chmod(stream.node, mode)
      },
      chown: function(path, uid, gid, dontFollow) {
          var node;
          "string" == typeof path ? node = FS.lookupPath(path, {
              follow: !dontFollow
          }).node : node = path;
          if (!node.node_ops.setattr) throw new FS.ErrnoError(63);
          node.node_ops.setattr(node, {
              timestamp: Date.now()
          })
      },
      lchown: function(path, uid, gid) {
          FS.chown(path, uid, gid, !0)
      },
      fchown: function(fd, uid, gid) {
          var stream = FS.getStream(fd);
          if (!stream) throw new FS.ErrnoError(8);
          FS.chown(stream.node, uid, gid)
      },
      truncate: function(path, len) {
          if (len < 0) throw new FS.ErrnoError(28);
          var node;
          "string" == typeof path ? node = FS.lookupPath(path, {
              follow: !0
          }).node : node = path;
          if (!node.node_ops.setattr) throw new FS.ErrnoError(63);
          if (FS.isDir(node.mode)) throw new FS.ErrnoError(31);
          if (!FS.isFile(node.mode)) throw new FS.ErrnoError(28);
          var err = FS.nodePermissions(node, "w");
          if (err) throw new FS.ErrnoError(err);
          node.node_ops.setattr(node, {
              size: len,
              timestamp: Date.now()
          })
      },
      ftruncate: function(fd, len) {
          var stream = FS.getStream(fd);
          if (!stream) throw new FS.ErrnoError(8);
          if (0 == (2097155 & stream.flags)) throw new FS.ErrnoError(28);
          FS.truncate(stream.node, len)
      },
      utime: function(path, atime, mtime) {
          var node = FS.lookupPath(path, {
              follow: !0
          }).node;
          node.node_ops.setattr(node, {
              timestamp: Math.max(atime, mtime)
          })
      },
      open: function(path, flags, mode, fd_start, fd_end) {
          if ("" === path) throw new FS.ErrnoError(44);
          var node;
          if (mode = void 0 === mode ? 438 : mode, mode = 64 & (flags = "string" == typeof flags ? FS.modeStringToFlags(flags) : flags) ? 4095 & mode | 32768 : 0, "object" == typeof path) node = path;
          else {
              path = PATH.normalize(path);
              try {
                  node = FS.lookupPath(path, {
                      follow: !(131072 & flags)
                  }).node
              } catch (e) {}
          }
          var created = !1;
          if (64 & flags)
              if (node) {
                  if (128 & flags) throw new FS.ErrnoError(20)
              } else node = FS.mknod(path, mode, 0), created = !0;
          if (!node) throw new FS.ErrnoError(44);
          if (FS.isChrdev(node.mode) && (flags &= -513), 65536 & flags && !FS.isDir(node.mode)) throw new FS.ErrnoError(54);
          if (!created) {
              var err = FS.mayOpen(node, flags);
              if (err) throw new FS.ErrnoError(err)
          }
          512 & flags && FS.truncate(node, 0), flags &= -641;
          var stream = FS.createStream({
              node: node,
              path: FS.getPath(node),
              flags: flags,
              seekable: !0,
              position: 0,
              stream_ops: node.stream_ops,
              ungotten: [],
              error: !1
          }, fd_start, fd_end);
          stream.stream_ops.open && stream.stream_ops.open(stream), !Module.logReadFiles || 1 & flags || (FS.readFiles || (FS.readFiles = {}), path in FS.readFiles || (FS.readFiles[path] = 1));
          try {
              if (FS.trackingDelegate.onOpenFile) {
                  var trackingFlags = 0;
                  1 != (2097155 & flags) && (trackingFlags |= FS.tracking.openFlags.READ), 0 != (2097155 & flags) && (trackingFlags |= FS.tracking.openFlags.WRITE), FS.trackingDelegate.onOpenFile(path, trackingFlags)
              }
          } catch (e) {}
          return stream
      },
      close: function(stream) {
          if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
          stream.getdents && (stream.getdents = null);
          try {
              stream.stream_ops.close && stream.stream_ops.close(stream)
          } catch (e) {
              throw e
          } finally {
              FS.closeStream(stream.fd)
          }
          stream.fd = null
      },
      isClosed: function(stream) {
          return null === stream.fd
      },
      llseek: function(stream, offset, whence) {
          if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
          if (!stream.seekable || !stream.stream_ops.llseek) throw new FS.ErrnoError(70);
          if (0 != whence && 1 != whence && 2 != whence) throw new FS.ErrnoError(28);
          return stream.position = stream.stream_ops.llseek(stream, offset, whence), stream.ungotten = [], stream.position
      },
      read: function(stream, buffer, offset, length, position) {
          if (length < 0 || position < 0) throw new FS.ErrnoError(28);
          if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
          if (1 == (2097155 & stream.flags)) throw new FS.ErrnoError(8);
          if (FS.isDir(stream.node.mode)) throw new FS.ErrnoError(31);
          if (!stream.stream_ops.read) throw new FS.ErrnoError(28);
          var seeking = void 0 !== position;
          if (seeking) {
              if (!stream.seekable) throw new FS.ErrnoError(70)
          } else position = stream.position;
          var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
          return seeking || (stream.position += bytesRead), bytesRead
      },
      write: function(stream, buffer, offset, length, position, canOwn) {
          if (length < 0 || position < 0) throw new FS.ErrnoError(28);
          if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
          if (0 == (2097155 & stream.flags)) throw new FS.ErrnoError(8);
          if (FS.isDir(stream.node.mode)) throw new FS.ErrnoError(31);
          if (!stream.stream_ops.write) throw new FS.ErrnoError(28);
          1024 & stream.flags && FS.llseek(stream, 0, 2);
          var seeking = void 0 !== position;
          if (seeking) {
              if (!stream.seekable) throw new FS.ErrnoError(70)
          } else position = stream.position;
          var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
          seeking || (stream.position += bytesWritten);
          try {
              stream.path && FS.trackingDelegate.onWriteToFile && FS.trackingDelegate.onWriteToFile(stream.path)
          } catch (e) {}
          return bytesWritten
      },
      allocate: function(stream, offset, length) {
          if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
          if (offset < 0 || length <= 0) throw new FS.ErrnoError(28);
          if (0 == (2097155 & stream.flags)) throw new FS.ErrnoError(8);
          if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) throw new FS.ErrnoError(43);
          if (!stream.stream_ops.allocate) throw new FS.ErrnoError(138);
          stream.stream_ops.allocate(stream, offset, length)
      },
      mmap: function(stream, buffer, offset, length, position, prot, flags) {
          if (0 != (2 & prot) && 0 == (2 & flags) && 2 != (2097155 & stream.flags)) throw new FS.ErrnoError(2);
          if (1 == (2097155 & stream.flags)) throw new FS.ErrnoError(2);
          if (!stream.stream_ops.mmap) throw new FS.ErrnoError(43);
          return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags)
      },
      msync: function(stream, buffer, offset, length, mmapFlags) {
          return stream && stream.stream_ops.msync ? stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags) : 0
      },
      munmap: function(stream) {
          return 0
      },
      ioctl: function(stream, cmd, arg) {
          if (!stream.stream_ops.ioctl) throw new FS.ErrnoError(59);
          return stream.stream_ops.ioctl(stream, cmd, arg)
      },
      readFile: function(path, opts) {
          if ((opts = opts || {}).flags = opts.flags || "r", opts.encoding = opts.encoding || "binary", "utf8" !== opts.encoding && "binary" !== opts.encoding) throw new Error('Invalid encoding type "' + opts.encoding + '"');
          var ret, stream = FS.open(path, opts.flags),
              length = FS.stat(path).size,
              buf = new Uint8Array(length);
          return FS.read(stream, buf, 0, length, 0), "utf8" === opts.encoding ? ret = UTF8ArrayToString(buf, 0) : "binary" === opts.encoding && (ret = buf), FS.close(stream), ret
      },
      writeFile: function(path, data, opts) {
          (opts = opts || {}).flags = opts.flags || "w";
          var stream = FS.open(path, opts.flags, opts.mode);
          if ("string" == typeof data) {
              var buf = new Uint8Array(lengthBytesUTF8(data) + 1),
                  actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
              FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn)
          } else {
              if (!ArrayBuffer.isView(data)) throw new Error("Unsupported data type");
              FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn)
          }
          FS.close(stream)
      },
      cwd: function() {
          return FS.currentPath
      },
      chdir: function(path) {
          var lookup = FS.lookupPath(path, {
              follow: !0
          });
          if (null === lookup.node) throw new FS.ErrnoError(44);
          if (!FS.isDir(lookup.node.mode)) throw new FS.ErrnoError(54);
          var err = FS.nodePermissions(lookup.node, "x");
          if (err) throw new FS.ErrnoError(err);
          FS.currentPath = lookup.path
      },
      createDefaultDirectories: function() {
          FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user")
      },
      createDefaultDevices: function() {
          var random_device;
          if (FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), {
                  read: function() {
                      return 0
                  },
                  write: function(stream, buffer, offset, length, pos) {
                      return length
                  }
              }), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0)), "object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
              var randomBuffer = new Uint8Array(1);
              random_device = function() {
                  return crypto.getRandomValues(randomBuffer), randomBuffer[0]
              }
          } else if (ENVIRONMENT_IS_NODE) try {
              var crypto_module = require("crypto");
              random_device = function() {
                  return crypto_module.randomBytes(1)[0]
              }
          } catch (e) {}
          random_device || (random_device = function() {
              abort("random_device")
          }), FS.createDevice("/dev", "random", random_device), FS.createDevice("/dev", "urandom", random_device), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp")
      },
      createSpecialDirectories: function() {
          FS.mkdir("/proc"), FS.mkdir("/proc/self"), FS.mkdir("/proc/self/fd"), FS.mount({
              mount: function() {
                  var node = FS.createNode("/proc/self", "fd", 16895, 73);
                  return node.node_ops = {
                      lookup: function(parent, name) {
                          var fd = +name,
                              stream = FS.getStream(fd);
                          if (!stream) throw new FS.ErrnoError(8);
                          var ret = {
                              parent: null,
                              mount: {
                                  mountpoint: "fake"
                              },
                              node_ops: {
                                  readlink: function() {
                                      return stream.path
                                  }
                              }
                          };
                          return ret.parent = ret, ret
                      }
                  }, node
              }
          }, {}, "/proc/self/fd")
      },
      createStandardStreams: function() {
          Module.stdin ? FS.createDevice("/dev", "stdin", Module.stdin) : FS.symlink("/dev/tty", "/dev/stdin"), Module.stdout ? FS.createDevice("/dev", "stdout", null, Module.stdout) : FS.symlink("/dev/tty", "/dev/stdout"), Module.stderr ? FS.createDevice("/dev", "stderr", null, Module.stderr) : FS.symlink("/dev/tty1", "/dev/stderr");
          FS.open("/dev/stdin", "r"), FS.open("/dev/stdout", "w"), FS.open("/dev/stderr", "w")
      },
      ensureErrnoError: function() {
          FS.ErrnoError || (FS.ErrnoError = function(errno, node) {
              this.node = node, this.setErrno = function(errno) {
                  this.errno = errno
              }, this.setErrno(errno), this.message = "FS error"
          }, FS.ErrnoError.prototype = new Error, FS.ErrnoError.prototype.constructor = FS.ErrnoError, [44].forEach(function(code) {
              FS.genericErrors[code] = new FS.ErrnoError(code), FS.genericErrors[code].stack = "<generic error, no stack>"
          }))
      },
      staticInit: function() {
          FS.ensureErrnoError(), FS.nameTable = new Array(4096), FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories(), FS.filesystems = {
              MEMFS: MEMFS
          }
      },
      init: function(input, output, error) {
          FS.init.initialized = !0, FS.ensureErrnoError(), Module.stdin = input || Module.stdin, Module.stdout = output || Module.stdout, Module.stderr = error || Module.stderr, FS.createStandardStreams()
      },
      quit: function() {
          FS.init.initialized = !1;
          var fflush = Module._fflush;
          fflush && fflush(0);
          for (var i = 0; i < FS.streams.length; i++) {
              var stream = FS.streams[i];
              stream && FS.close(stream)
          }
      },
      getMode: function(canRead, canWrite) {
          var mode = 0;
          return canRead && (mode |= 365), canWrite && (mode |= 146), mode
      },
      joinPath: function(parts, forceRelative) {
          var path = PATH.join.apply(null, parts);
          return forceRelative && "/" == path[0] && (path = path.substr(1)), path
      },
      absolutePath: function(relative, base) {
          return PATH_FS.resolve(base, relative)
      },
      standardizePath: function(path) {
          return PATH.normalize(path)
      },
      findObject: function(path, dontResolveLastLink) {
          var ret = FS.analyzePath(path, dontResolveLastLink);
          return ret.exists ? ret.object : (___setErrNo(ret.error), null)
      },
      analyzePath: function(path, dontResolveLastLink) {
          try {
              path = (lookup = FS.lookupPath(path, {
                  follow: !dontResolveLastLink
              })).path
          } catch (e) {}
          var ret = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null
          };
          try {
              var lookup = FS.lookupPath(path, {
                  parent: !0
              });
              ret.parentExists = !0, ret.parentPath = lookup.path, ret.parentObject = lookup.node, ret.name = PATH.basename(path), lookup = FS.lookupPath(path, {
                  follow: !dontResolveLastLink
              }), ret.exists = !0, ret.path = lookup.path, ret.object = lookup.node, ret.name = lookup.node.name, ret.isRoot = "/" === lookup.path
          } catch (e) {
              ret.error = e.errno
          }
          return ret
      },
      createFolder: function(parent, name, canRead, canWrite) {
          var path = PATH.join2("string" == typeof parent ? parent : FS.getPath(parent), name),
              mode = FS.getMode(canRead, canWrite);
          return FS.mkdir(path, mode)
      },
      createPath: function(parent, path, canRead, canWrite) {
          parent = "string" == typeof parent ? parent : FS.getPath(parent);
          for (var parts = path.split("/").reverse(); parts.length;) {
              var part = parts.pop();
              if (part) {
                  var current = PATH.join2(parent, part);
                  try {
                      FS.mkdir(current)
                  } catch (e) {}
                  parent = current
              }
          }
          return current
      },
      createFile: function(parent, name, properties, canRead, canWrite) {
          var path = PATH.join2("string" == typeof parent ? parent : FS.getPath(parent), name),
              mode = FS.getMode(canRead, canWrite);
          return FS.create(path, mode)
      },
      createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
          var path = name ? PATH.join2("string" == typeof parent ? parent : FS.getPath(parent), name) : parent,
              mode = FS.getMode(canRead, canWrite),
              node = FS.create(path, mode);
          if (data) {
              if ("string" == typeof data) {
                  for (var arr = new Array(data.length), i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                  data = arr
              }
              FS.chmod(node, 146 | mode);
              var stream = FS.open(node, "w");
              FS.write(stream, data, 0, data.length, 0, canOwn), FS.close(stream), FS.chmod(node, mode)
          }
          return node
      },
      createDevice: function(parent, name, input, output) {
          var path = PATH.join2("string" == typeof parent ? parent : FS.getPath(parent), name),
              mode = FS.getMode(!!input, !!output);
          FS.createDevice.major || (FS.createDevice.major = 64);
          var dev = FS.makedev(FS.createDevice.major++, 0);
          return FS.registerDevice(dev, {
              open: function(stream) {
                  stream.seekable = !1
              },
              close: function(stream) {
                  output && output.buffer && output.buffer.length && output(10)
              },
              read: function(stream, buffer, offset, length, pos) {
                  for (var bytesRead = 0, i = 0; i < length; i++) {
                      var result;
                      try {
                          result = input()
                      } catch (e) {
                          throw new FS.ErrnoError(29)
                      }
                      if (void 0 === result && 0 === bytesRead) throw new FS.ErrnoError(6);
                      if (null == result) break;
                      bytesRead++, buffer[offset + i] = result
                  }
                  return bytesRead && (stream.node.timestamp = Date.now()), bytesRead
              },
              write: function(stream, buffer, offset, length, pos) {
                  for (var i = 0; i < length; i++) try {
                      output(buffer[offset + i])
                  } catch (e) {
                      throw new FS.ErrnoError(29)
                  }
                  return length && (stream.node.timestamp = Date.now()), i
              }
          }), FS.mkdev(path, mode, dev)
      },
      createLink: function(parent, name, target, canRead, canWrite) {
          var path = PATH.join2("string" == typeof parent ? parent : FS.getPath(parent), name);
          return FS.symlink(target, path)
      },
      forceLoadFile: function(obj) {
          if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return !0;
          var success = !0;
          if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          if (!read_) throw new Error("Cannot load without read() or XMLHttpRequest.");
          try {
              obj.contents = intArrayFromString(read_(obj.url), !0), obj.usedBytes = obj.contents.length
          } catch (e) {
              success = !1
          }
          return success || ___setErrNo(29), success
      },
      createLazyFile: function(parent, name, url, canRead, canWrite) {
          function LazyUint8Array() {
              this.lengthKnown = !1, this.chunks = []
          }
          if (LazyUint8Array.prototype.get = function(idx) {
                  if (!(idx > this.length - 1 || idx < 0)) {
                      var chunkOffset = idx % this.chunkSize,
                          chunkNum = idx / this.chunkSize | 0;
                      return this.getter(chunkNum)[chunkOffset]
                  }
              }, LazyUint8Array.prototype.setDataGetter = function(getter) {
                  this.getter = getter
              }, LazyUint8Array.prototype.cacheLength = function() {
                  var xhr = new XMLHttpRequest;
                  if (xhr.open("HEAD", url, !1), xhr.send(null), !(xhr.status >= 200 && xhr.status < 300 || 304 === xhr.status)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                  var header, datalength = Number(xhr.getResponseHeader("Content-length")),
                      hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && "bytes" === header,
                      usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && "gzip" === header,
                      chunkSize = 1048576;
                  hasByteServing || (chunkSize = datalength);
                  var lazyArray = this;
                  lazyArray.setDataGetter(function(chunkNum) {
                      var start = chunkNum * chunkSize,
                          end = (chunkNum + 1) * chunkSize - 1;
                      if (end = Math.min(end, datalength - 1), void 0 === lazyArray.chunks[chunkNum] && (lazyArray.chunks[chunkNum] = function(from, to) {
                              if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                              if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                              var xhr = new XMLHttpRequest;
                              if (xhr.open("GET", url, !1), datalength !== chunkSize && xhr.setRequestHeader("Range", "bytes=" + from + "-" + to), "undefined" != typeof Uint8Array && (xhr.responseType = "arraybuffer"), xhr.overrideMimeType && xhr.overrideMimeType("text/plain; charset=x-user-defined"), xhr.send(null), !(xhr.status >= 200 && xhr.status < 300 || 304 === xhr.status)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                              return void 0 !== xhr.response ? new Uint8Array(xhr.response || []) : intArrayFromString(xhr.responseText || "", !0)
                          }(start, end)), void 0 === lazyArray.chunks[chunkNum]) throw new Error("doXHR failed!");
                      return lazyArray.chunks[chunkNum]
                  }), !usesGzip && datalength || (chunkSize = datalength = 1, datalength = this.getter(0).length, chunkSize = datalength), this._length = datalength, this._chunkSize = chunkSize, this.lengthKnown = !0
              }, "undefined" != typeof XMLHttpRequest) {
              if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
              var lazyArray = new LazyUint8Array;
              Object.defineProperties(lazyArray, {
                  length: {
                      get: function() {
                          return this.lengthKnown || this.cacheLength(), this._length
                      }
                  },
                  chunkSize: {
                      get: function() {
                          return this.lengthKnown || this.cacheLength(), this._chunkSize
                      }
                  }
              });
              var properties = {
                  isDevice: !1,
                  contents: lazyArray
              }
          } else properties = {
              isDevice: !1,
              url: url
          };
          var node = FS.createFile(parent, name, properties, canRead, canWrite);
          properties.contents ? node.contents = properties.contents : properties.url && (node.contents = null, node.url = properties.url), Object.defineProperties(node, {
              usedBytes: {
                  get: function() {
                      return this.contents.length
                  }
              }
          });
          var stream_ops = {};
          return Object.keys(node.stream_ops).forEach(function(key) {
              var fn = node.stream_ops[key];
              stream_ops[key] = function() {
                  if (!FS.forceLoadFile(node)) throw new FS.ErrnoError(29);
                  return fn.apply(null, arguments)
              }
          }), stream_ops.read = function(stream, buffer, offset, length, position) {
              if (!FS.forceLoadFile(node)) throw new FS.ErrnoError(29);
              var contents = stream.node.contents;
              if (position >= contents.length) return 0;
              var size = Math.min(contents.length - position, length);
              if (contents.slice)
                  for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
              else
                  for (i = 0; i < size; i++) buffer[offset + i] = contents.get(position + i);
              return size
          }, node.stream_ops = stream_ops, node
      },
      createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
          Browser.init();
          var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent,
              dep = getUniqueRunDependency("cp " + fullname);

          function processData(byteArray) {
              function finish(byteArray) {
                  preFinish && preFinish(), dontCreateFile || FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn), onload && onload(), removeRunDependency(dep)
              }
              var handled = !1;
              Module.preloadPlugins.forEach(function(plugin) {
                  handled || plugin.canHandle(fullname) && (plugin.handle(byteArray, fullname, finish, function() {
                      onerror && onerror(), removeRunDependency(dep)
                  }), handled = !0)
              }), handled || finish(byteArray)
          }
          addRunDependency(dep), "string" == typeof url ? Browser.asyncLoad(url, function(byteArray) {
              processData(byteArray)
          }, onerror) : processData(url)
      },
      indexedDB: function() {
          return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
      },
      DB_NAME: function() {
          return "EM_FS_" + window.location.pathname
      },
      DB_VERSION: 20,
      DB_STORE_NAME: "FILE_DATA",
      saveFilesToDB: function(paths, onload, onerror) {
          onload = onload || function() {}, onerror = onerror || function() {};
          var indexedDB = FS.indexedDB();
          try {
              var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
          } catch (e) {
              return onerror(e)
          }
          openRequest.onupgradeneeded = function() {
              openRequest.result.createObjectStore(FS.DB_STORE_NAME)
          }, openRequest.onsuccess = function() {
              var transaction = openRequest.result.transaction([FS.DB_STORE_NAME], "readwrite"),
                  files = transaction.objectStore(FS.DB_STORE_NAME),
                  ok = 0,
                  fail = 0,
                  total = paths.length;

              function finish() {
                  0 == fail ? onload() : onerror()
              }
              paths.forEach(function(path) {
                  var putRequest = files.put(FS.analyzePath(path).object.contents, path);
                  putRequest.onsuccess = function() {
                      ++ok + fail == total && finish()
                  }, putRequest.onerror = function() {
                      ok + ++fail == total && finish()
                  }
              }), transaction.onerror = onerror
          }, openRequest.onerror = onerror
      },
      loadFilesFromDB: function(paths, onload, onerror) {
          onload = onload || function() {}, onerror = onerror || function() {};
          var indexedDB = FS.indexedDB();
          try {
              var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
          } catch (e) {
              return onerror(e)
          }
          openRequest.onupgradeneeded = onerror, openRequest.onsuccess = function() {
              var db = openRequest.result;
              try {
                  var transaction = db.transaction([FS.DB_STORE_NAME], "readonly")
              } catch (e) {
                  return void onerror(e)
              }
              var files = transaction.objectStore(FS.DB_STORE_NAME),
                  ok = 0,
                  fail = 0,
                  total = paths.length;

              function finish() {
                  0 == fail ? onload() : onerror()
              }
              paths.forEach(function(path) {
                  var getRequest = files.get(path);
                  getRequest.onsuccess = function() {
                      FS.analyzePath(path).exists && FS.unlink(path), FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, !0, !0, !0), ++ok + fail == total && finish()
                  }, getRequest.onerror = function() {
                      ok + ++fail == total && finish()
                  }
              }), transaction.onerror = onerror
          }, openRequest.onerror = onerror
      }
  },
  ERRNO_CODES = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135
  },
  SOCKFS = {
      mount: function(mount) {
          return Module.websocket = Module.websocket && "object" == typeof Module.websocket ? Module.websocket : {}, Module.websocket._callbacks = {}, Module.websocket.on = function(event, callback) {
              return "function" == typeof callback && (this._callbacks[event] = callback), this
          }, Module.websocket.emit = function(event, param) {
              "function" == typeof this._callbacks[event] && this._callbacks[event].call(this, param)
          }, FS.createNode(null, "/", 16895, 0)
      },
      createSocket: function(family, type, protocol) {
          protocol && assert(1 == type == (6 == protocol));
          var sock = {
                  family: family,
                  type: type,
                  protocol: protocol,
                  server: null,
                  error: null,
                  peers: {},
                  pending: [],
                  recv_queue: [],
                  sock_ops: SOCKFS.websocket_sock_ops
              },
              name = SOCKFS.nextname(),
              node = FS.createNode(SOCKFS.root, name, 49152, 0);
          node.sock = sock;
          var stream = FS.createStream({
              path: name,
              node: node,
              flags: FS.modeStringToFlags("r+"),
              seekable: !1,
              stream_ops: SOCKFS.stream_ops
          });
          return sock.stream = stream, sock
      },
      getSocket: function(fd) {
          var stream = FS.getStream(fd);
          return stream && FS.isSocket(stream.node.mode) ? stream.node.sock : null
      },
      stream_ops: {
          poll: function(stream) {
              var sock = stream.node.sock;
              return sock.sock_ops.poll(sock)
          },
          ioctl: function(stream, request, varargs) {
              var sock = stream.node.sock;
              return sock.sock_ops.ioctl(sock, request, varargs)
          },
          read: function(stream, buffer, offset, length, position) {
              var sock = stream.node.sock,
                  msg = sock.sock_ops.recvmsg(sock, length);
              return msg ? (buffer.set(msg.buffer, offset), msg.buffer.length) : 0
          },
          write: function(stream, buffer, offset, length, position) {
              var sock = stream.node.sock;
              return sock.sock_ops.sendmsg(sock, buffer, offset, length)
          },
          close: function(stream) {
              var sock = stream.node.sock;
              sock.sock_ops.close(sock)
          }
      },
      nextname: function() {
          return SOCKFS.nextname.current || (SOCKFS.nextname.current = 0), "socket[" + SOCKFS.nextname.current++ + "]"
      },
      websocket_sock_ops: {
          createPeer: function(sock, addr, port) {
              var ws;
              if ("object" == typeof addr && (ws = addr, addr = null, port = null), ws)
                  if (ws._socket) addr = ws._socket.remoteAddress, port = ws._socket.remotePort;
                  else {
                      var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
                      if (!result) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
                      addr = result[1], port = parseInt(result[2], 10)
                  }
              else try {
                  var runtimeConfig = Module.websocket && "object" == typeof Module.websocket,
                      url = "ws:#".replace("#", "//");
                  if (runtimeConfig && "string" == typeof Module.websocket.url && (url = Module.websocket.url), "ws://" === url || "wss://" === url) {
                      var parts = addr.split("/");
                      url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/")
                  }
                  var subProtocols = "binary";
                  runtimeConfig && "string" == typeof Module.websocket.subprotocol && (subProtocols = Module.websocket.subprotocol);
                  var opts = void 0;
                  "null" !== subProtocols && (subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */), opts = ENVIRONMENT_IS_NODE ? {
                      protocol: subProtocols.toString()
                  } : subProtocols), runtimeConfig && null === Module.websocket.subprotocol && (subProtocols = "null", opts = void 0), (ws = new(ENVIRONMENT_IS_NODE ? require("ws") : ENVIRONMENT_IS_WEB ? window.WebSocket : WebSocket)(url, opts)).binaryType = "arraybuffer"
              } catch (e) {
                  throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH)
              }
              var peer = {
                  addr: addr,
                  port: port,
                  socket: ws,
                  dgram_send_queue: []
              };
              return SOCKFS.websocket_sock_ops.addPeer(sock, peer), SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer), 2 === sock.type && void 0 !== sock.sport && peer.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (65280 & sock.sport) >> 8, 255 & sock.sport])), peer
          },
          getPeer: function(sock, addr, port) {
              return sock.peers[addr + ":" + port]
          },
          addPeer: function(sock, peer) {
              sock.peers[peer.addr + ":" + peer.port] = peer
          },
          removePeer: function(sock, peer) {
              delete sock.peers[peer.addr + ":" + peer.port]
          },
          handlePeerEvents: function(sock, peer) {
              var first = !0,
                  handleOpen = function() {
                      Module.websocket.emit("open", sock.stream.fd);
                      try {
                          for (var queued = peer.dgram_send_queue.shift(); queued;) peer.socket.send(queued), queued = peer.dgram_send_queue.shift()
                      } catch (e) {
                          peer.socket.close()
                      }
                  };

              function handleMessage(data) {
                  if ("string" == typeof data) {
                      data = (new TextEncoder).encode(data)
                  } else {
                      if (assert(void 0 !== data.byteLength), 0 == data.byteLength) return;
                      data = new Uint8Array(data)
                  }
                  var wasfirst = first;
                  if (first = !1, wasfirst && 10 === data.length && 255 === data[0] && 255 === data[1] && 255 === data[2] && 255 === data[3] && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
                      var newport = data[8] << 8 | data[9];
                      return SOCKFS.websocket_sock_ops.removePeer(sock, peer), peer.port = newport, void SOCKFS.websocket_sock_ops.addPeer(sock, peer)
                  }
                  sock.recv_queue.push({
                      addr: peer.addr,
                      port: peer.port,
                      data: data
                  }), Module.websocket.emit("message", sock.stream.fd)
              }
              ENVIRONMENT_IS_NODE ? (peer.socket.on("open", handleOpen), peer.socket.on("message", function(data, flags) {
                  flags.binary && handleMessage(new Uint8Array(data).buffer)
              }), peer.socket.on("close", function() {
                  Module.websocket.emit("close", sock.stream.fd)
              }), peer.socket.on("error", function(error) {
                  sock.error = ERRNO_CODES.ECONNREFUSED, Module.websocket.emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
              })) : (peer.socket.onopen = handleOpen, peer.socket.onclose = function() {
                  Module.websocket.emit("close", sock.stream.fd)
              }, peer.socket.onmessage = function(event) {
                  handleMessage(event.data)
              }, peer.socket.onerror = function(error) {
                  sock.error = ERRNO_CODES.ECONNREFUSED, Module.websocket.emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
              })
          },
          poll: function(sock) {
              if (1 === sock.type && sock.server) return sock.pending.length ? 65 : 0;
              var mask = 0,
                  dest = 1 === sock.type ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
              return (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) && (mask |= 65), (!dest || dest && dest.socket.readyState === dest.socket.OPEN) && (mask |= 4), (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) && (mask |= 16), mask
          },
          ioctl: function(sock, request, arg) {
              switch (request) {
                  case 21531:
                      var bytes = 0;
                      return sock.recv_queue.length && (bytes = sock.recv_queue[0].data.length), HEAP32[arg >> 2] = bytes, 0;
                  default:
                      return ERRNO_CODES.EINVAL
              }
          },
          close: function(sock) {
              if (sock.server) {
                  try {
                      sock.server.close()
                  } catch (e) {}
                  sock.server = null
              }
              for (var peers = Object.keys(sock.peers), i = 0; i < peers.length; i++) {
                  var peer = sock.peers[peers[i]];
                  try {
                      peer.socket.close()
                  } catch (e) {}
                  SOCKFS.websocket_sock_ops.removePeer(sock, peer)
              }
              return 0
          },
          bind: function(sock, addr, port) {
              if (void 0 !== sock.saddr || void 0 !== sock.sport) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
              if (sock.saddr = addr, sock.sport = port, 2 === sock.type) {
                  sock.server && (sock.server.close(), sock.server = null);
                  try {
                      sock.sock_ops.listen(sock, 0)
                  } catch (e) {
                      if (!(e instanceof FS.ErrnoError)) throw e;
                      if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e
                  }
              }
          },
          connect: function(sock, addr, port) {
              if (sock.server) throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
              if (void 0 !== sock.daddr && void 0 !== sock.dport) {
                  var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                  if (dest) throw dest.socket.readyState === dest.socket.CONNECTING ? new FS.ErrnoError(ERRNO_CODES.EALREADY) : new FS.ErrnoError(ERRNO_CODES.EISCONN)
              }
              var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              throw sock.daddr = peer.addr, sock.dport = peer.port, new FS.ErrnoError(ERRNO_CODES.EINPROGRESS)
          },
          listen: function(sock, backlog) {
              if (!ENVIRONMENT_IS_NODE) throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
              if (sock.server) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
              var WebSocketServer = require("ws").Server,
                  host = sock.saddr;
              sock.server = new WebSocketServer({
                  host: host,
                  port: sock.sport
              }), Module.websocket.emit("listen", sock.stream.fd), sock.server.on("connection", function(ws) {
                  if (1 === sock.type) {
                      var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol),
                          peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
                      newsock.daddr = peer.addr, newsock.dport = peer.port, sock.pending.push(newsock), Module.websocket.emit("connection", newsock.stream.fd)
                  } else SOCKFS.websocket_sock_ops.createPeer(sock, ws), Module.websocket.emit("connection", sock.stream.fd)
              }), sock.server.on("closed", function() {
                  Module.websocket.emit("close", sock.stream.fd), sock.server = null
              }), sock.server.on("error", function(error) {
                  sock.error = ERRNO_CODES.EHOSTUNREACH, Module.websocket.emit("error", [sock.stream.fd, sock.error, "EHOSTUNREACH: Host is unreachable"])
              })
          },
          accept: function(listensock) {
              if (!listensock.server) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
              var newsock = listensock.pending.shift();
              return newsock.stream.flags = listensock.stream.flags, newsock
          },
          getname: function(sock, peer) {
              var addr, port;
              if (peer) {
                  if (void 0 === sock.daddr || void 0 === sock.dport) throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                  addr = sock.daddr, port = sock.dport
              } else addr = sock.saddr || 0, port = sock.sport || 0;
              return {
                  addr: addr,
                  port: port
              }
          },
          sendmsg: function(sock, buffer, offset, length, addr, port) {
              if (2 === sock.type) {
                  if (void 0 !== addr && void 0 !== port || (addr = sock.daddr, port = sock.dport), void 0 === addr || void 0 === port) throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ)
              } else addr = sock.daddr, port = sock.dport;
              var data, dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
              if (1 === sock.type) {
                  if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                  if (dest.socket.readyState === dest.socket.CONNECTING) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)
              }
              if (ArrayBuffer.isView(buffer) && (offset += buffer.byteOffset, buffer = buffer.buffer), data = buffer.slice(offset, offset + length), 2 === sock.type && (!dest || dest.socket.readyState !== dest.socket.OPEN)) return dest && dest.socket.readyState !== dest.socket.CLOSING && dest.socket.readyState !== dest.socket.CLOSED || (dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port)), dest.dgram_send_queue.push(data), length;
              try {
                  return dest.socket.send(data), length
              } catch (e) {
                  throw new FS.ErrnoError(ERRNO_CODES.EINVAL)
              }
          },
          recvmsg: function(sock, length) {
              if (1 === sock.type && sock.server) throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              var queued = sock.recv_queue.shift();
              if (!queued) {
                  if (1 === sock.type) {
                      var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                      if (dest) {
                          if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) return null;
                          throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)
                      }
                      throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN)
                  }
                  throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)
              }
              var queuedLength = queued.data.byteLength || queued.data.length,
                  queuedOffset = queued.data.byteOffset || 0,
                  queuedBuffer = queued.data.buffer || queued.data,
                  bytesRead = Math.min(length, queuedLength),
                  res = {
                      buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
                      addr: queued.addr,
                      port: queued.port
                  };
              if (1 === sock.type && bytesRead < queuedLength) {
                  var bytesRemaining = queuedLength - bytesRead;
                  queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining), sock.recv_queue.unshift(queued)
              }
              return res
          }
      }
  };

function __inet_pton4_raw(str) {
  for (var b = str.split("."), i = 0; i < 4; i++) {
      var tmp = Number(b[i]);
      if (isNaN(tmp)) return null;
      b[i] = tmp
  }
  return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0
}

function __inet_pton6_raw(str) {
  var words, w, offset, z, parts = [];
  if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(str)) return null;
  if ("::" === str) return [0, 0, 0, 0, 0, 0, 0, 0];
  for ((str = 0 === str.indexOf("::") ? str.replace("::", "Z:") : str.replace("::", ":Z:")).indexOf(".") > 0 ? ((words = (str = str.replace(new RegExp("[.]", "g"), ":")).split(":"))[words.length - 4] = parseInt(words[words.length - 4]) + 256 * parseInt(words[words.length - 3]), words[words.length - 3] = parseInt(words[words.length - 2]) + 256 * parseInt(words[words.length - 1]), words = words.slice(0, words.length - 2)) : words = str.split(":"), offset = 0, z = 0, w = 0; w < words.length; w++)
      if ("string" == typeof words[w])
          if ("Z" === words[w]) {
              for (z = 0; z < 8 - words.length + 1; z++) parts[w + z] = 0;
              offset = z - 1
          } else parts[w + offset] = _htons(parseInt(words[w], 16));
  else parts[w + offset] = words[w];
  return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]]
}
var DNS = {
  address_map: {
      id: 1,
      addrs: {},
      names: {}
  },
  lookup_name: function(name) {
      var addr, res = __inet_pton4_raw(name);
      if (null !== res) return name;
      if (null !== (res = __inet_pton6_raw(name))) return name;
      if (DNS.address_map.addrs[name]) addr = DNS.address_map.addrs[name];
      else {
          var id = DNS.address_map.id++;
          assert(id < 65535, "exceeded max address mappings of 65535"), addr = "172.29." + (255 & id) + "." + (65280 & id), DNS.address_map.names[addr] = name, DNS.address_map.addrs[name] = addr
      }
      return addr
  },
  lookup_addr: function(addr) {
      return DNS.address_map.names[addr] ? DNS.address_map.names[addr] : null
  }
};

function __inet_ntop4_raw(addr) {
  return (255 & addr) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255)
}

function __inet_ntop6_raw(ints) {
  var str = "",
      word = 0,
      longest = 0,
      lastzero = 0,
      zstart = 0,
      len = 0,
      i = 0,
      parts = [65535 & ints[0], ints[0] >> 16, 65535 & ints[1], ints[1] >> 16, 65535 & ints[2], ints[2] >> 16, 65535 & ints[3], ints[3] >> 16],
      hasipv4 = !0,
      v4part = "";
  for (i = 0; i < 5; i++)
      if (0 !== parts[i]) {
          hasipv4 = !1;
          break
      } if (hasipv4) {
      if (v4part = __inet_ntop4_raw(parts[6] | parts[7] << 16), -1 === parts[5]) return str = "::ffff:", str += v4part;
      if (0 === parts[5]) return str = "::", "0.0.0.0" === v4part && (v4part = ""), "0.0.0.1" === v4part && (v4part = "1"), str += v4part
  }
  for (word = 0; word < 8; word++) 0 === parts[word] && (word - lastzero > 1 && (len = 0), lastzero = word, len++), len > longest && (zstart = word - (longest = len) + 1);
  for (word = 0; word < 8; word++) longest > 1 && 0 === parts[word] && word >= zstart && word < zstart + longest ? word === zstart && (str += ":", 0 === zstart && (str += ":")) : (str += Number(_ntohs(65535 & parts[word])).toString(16), str += word < 7 ? ":" : "");
  return str
}

function __read_sockaddr(sa, salen) {
  var addr, family = HEAP16[sa >> 1],
      port = _ntohs(HEAPU16[sa + 2 >> 1]);
  switch (family) {
      case 2:
          if (16 !== salen) return {
              errno: 28
          };
          addr = __inet_ntop4_raw(addr = HEAP32[sa + 4 >> 2]);
          break;
      case 10:
          if (28 !== salen) return {
              errno: 28
          };
          addr = __inet_ntop6_raw(addr = [HEAP32[sa + 8 >> 2], HEAP32[sa + 12 >> 2], HEAP32[sa + 16 >> 2], HEAP32[sa + 20 >> 2]]);
          break;
      default:
          return {
              errno: 5
          }
  }
  return {
      family: family,
      addr: addr,
      port: port
  }
}

function __write_sockaddr(sa, family, addr, port) {
  switch (family) {
      case 2:
          addr = __inet_pton4_raw(addr), HEAP16[sa >> 1] = family, HEAP32[sa + 4 >> 2] = addr, HEAP16[sa + 2 >> 1] = _htons(port);
          break;
      case 10:
          addr = __inet_pton6_raw(addr), HEAP32[sa >> 2] = family, HEAP32[sa + 8 >> 2] = addr[0], HEAP32[sa + 12 >> 2] = addr[1], HEAP32[sa + 16 >> 2] = addr[2], HEAP32[sa + 20 >> 2] = addr[3], HEAP16[sa + 2 >> 1] = _htons(port), HEAP32[sa + 4 >> 2] = 0, HEAP32[sa + 24 >> 2] = 0;
          break;
      default:
          return {
              errno: 5
          }
  }
  return {}
}
var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  mappings: {},
  umask: 511,
  calculateAt: function(dirfd, path) {
      if ("/" !== path[0]) {
          var dir;
          if (-100 === dirfd) dir = FS.cwd();
          else {
              var dirstream = FS.getStream(dirfd);
              if (!dirstream) throw new FS.ErrnoError(8);
              dir = dirstream.path
          }
          path = PATH.join2(dir, path)
      }
      return path
  },
  doStat: function(func, path, buf) {
      try {
          var stat = func(path)
      } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) return -54;
          throw e
      }
      return HEAP32[buf >> 2] = stat.dev, HEAP32[buf + 4 >> 2] = 0, HEAP32[buf + 8 >> 2] = stat.ino, HEAP32[buf + 12 >> 2] = stat.mode, HEAP32[buf + 16 >> 2] = stat.nlink, HEAP32[buf + 20 >> 2] = stat.uid, HEAP32[buf + 24 >> 2] = stat.gid, HEAP32[buf + 28 >> 2] = stat.rdev, HEAP32[buf + 32 >> 2] = 0, tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (0 | Math_min(+Math_floor(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1], HEAP32[buf + 48 >> 2] = 4096, HEAP32[buf + 52 >> 2] = stat.blocks, HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0, HEAP32[buf + 60 >> 2] = 0, HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0, HEAP32[buf + 68 >> 2] = 0, HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0, HEAP32[buf + 76 >> 2] = 0, tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (0 | Math_min(+Math_floor(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1], 0
  },
  doMsync: function(addr, stream, len, flags) {
      var buffer = new Uint8Array(HEAPU8.subarray(addr, addr + len));
      FS.msync(stream, buffer, 0, len, flags)
  },
  doMkdir: function(path, mode) {
      return "/" === (path = PATH.normalize(path))[path.length - 1] && (path = path.substr(0, path.length - 1)), FS.mkdir(path, mode, 0), 0
  },
  doMknod: function(path, mode, dev) {
      switch (61440 & mode) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
              break;
          default:
              return -28
      }
      return FS.mknod(path, mode, dev), 0
  },
  doReadlink: function(path, buf, bufsize) {
      if (bufsize <= 0) return -28;
      var ret = FS.readlink(path),
          len = Math.min(bufsize, lengthBytesUTF8(ret)),
          endChar = HEAP8[buf + len];
      return stringToUTF8(ret, buf, bufsize + 1), HEAP8[buf + len] = endChar, len
  },
  doAccess: function(path, amode) {
      if (-8 & amode) return -28;
      var node;
      if (!(node = FS.lookupPath(path, {
              follow: !0
          }).node)) return -44;
      var perms = "";
      return 4 & amode && (perms += "r"), 2 & amode && (perms += "w"), 1 & amode && (perms += "x"), perms && FS.nodePermissions(node, perms) ? -2 : 0
  },
  doDup: function(path, flags, suggestFD) {
      var suggest = FS.getStream(suggestFD);
      return suggest && FS.close(suggest), FS.open(path, flags, 0, suggestFD, suggestFD).fd
  },
  doReadv: function(stream, iov, iovcnt, offset) {
      for (var ret = 0, i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[iov + 8 * i >> 2],
              len = HEAP32[iov + (8 * i + 4) >> 2],
              curr = FS.read(stream, HEAP8, ptr, len, offset);
          if (curr < 0) return -1;
          if (ret += curr, curr < len) break
      }
      return ret
  },
  doWritev: function(stream, iov, iovcnt, offset) {
      for (var ret = 0, i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[iov + 8 * i >> 2],
              len = HEAP32[iov + (8 * i + 4) >> 2],
              curr = FS.write(stream, HEAP8, ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr
      }
      return ret
  },
  varargs: 0,
  get: function(varargs) {
      return SYSCALLS.varargs += 4, HEAP32[SYSCALLS.varargs - 4 >> 2]
  },
  getStr: function() {
      return UTF8ToString(SYSCALLS.get())
  },
  getStreamFromFD: function(fd) {
      void 0 === fd && (fd = SYSCALLS.get());
      var stream = FS.getStream(fd);
      if (!stream) throw new FS.ErrnoError(8);
      return stream
  },
  get64: function() {
      var low = SYSCALLS.get();
      SYSCALLS.get();
      return low
  },
  getZero: function() {
      SYSCALLS.get()
  }
};

function ___syscall102(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var call = SYSCALLS.get(),
          socketvararg = SYSCALLS.get();
      SYSCALLS.varargs = socketvararg;
      var getSocketFromFD = function() {
              var socket = SOCKFS.getSocket(SYSCALLS.get());
              if (!socket) throw new FS.ErrnoError(8);
              return socket
          },
          getSocketAddress = function(allowNull) {
              var addrp = SYSCALLS.get(),
                  addrlen = SYSCALLS.get();
              if (allowNull && 0 === addrp) return null;
              var info = __read_sockaddr(addrp, addrlen);
              if (info.errno) throw new FS.ErrnoError(info.errno);
              return info.addr = DNS.lookup_addr(info.addr) || info.addr, info
          };
      switch (call) {
          case 1:
              var domain = SYSCALLS.get(),
                  type = SYSCALLS.get(),
                  protocol = SYSCALLS.get();
              return (sock = SOCKFS.createSocket(domain, type, protocol)).stream.fd;
          case 2:
              var sock = getSocketFromFD(),
                  info = getSocketAddress();
              return sock.sock_ops.bind(sock, info.addr, info.port), 0;
          case 3:
              sock = getSocketFromFD(), info = getSocketAddress();
              return sock.sock_ops.connect(sock, info.addr, info.port), 0;
          case 4:
              sock = getSocketFromFD();
              var backlog = SYSCALLS.get();
              return sock.sock_ops.listen(sock, backlog), 0;
          case 5:
              sock = getSocketFromFD();
              var addr = SYSCALLS.get(),
                  newsock = (SYSCALLS.get(), sock.sock_ops.accept(sock));
              if (addr) __write_sockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport);
              return newsock.stream.fd;
          case 6:
              sock = getSocketFromFD(), addr = SYSCALLS.get(), SYSCALLS.get(), __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport);
              return 0;
          case 7:
              sock = getSocketFromFD(), addr = SYSCALLS.get(), SYSCALLS.get();
              if (!sock.daddr) return -53;
              __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport);
              return 0;
          case 11:
              sock = getSocketFromFD();
              var message = SYSCALLS.get(),
                  length = SYSCALLS.get(),
                  dest = (SYSCALLS.get(), getSocketAddress(!0));
              return dest ? sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port) : FS.write(sock.stream, HEAP8, message, length);
          case 12:
              sock = getSocketFromFD();
              var buf = SYSCALLS.get(),
                  len = SYSCALLS.get();
              SYSCALLS.get(), addr = SYSCALLS.get(), SYSCALLS.get();
              if (!(msg = sock.sock_ops.recvmsg(sock, len))) return 0;
              if (addr) __write_sockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port);
              return HEAPU8.set(msg.buffer, buf), msg.buffer.byteLength;
          case 14:
              return -50;
          case 15:
              sock = getSocketFromFD();
              var level = SYSCALLS.get(),
                  optname = SYSCALLS.get(),
                  optval = SYSCALLS.get(),
                  optlen = SYSCALLS.get();
              return 1 === level && 4 === optname ? (HEAP32[optval >> 2] = sock.error, HEAP32[optlen >> 2] = 4, sock.error = null, 0) : -50;
          case 16:
              sock = getSocketFromFD(), message = SYSCALLS.get(), SYSCALLS.get();
              var port, iov = HEAP32[message + 8 >> 2],
                  num = HEAP32[message + 12 >> 2],
                  name = HEAP32[message >> 2],
                  namelen = HEAP32[message + 4 >> 2];
              if (name) {
                  if ((info = __read_sockaddr(name, namelen)).errno) return -info.errno;
                  port = info.port, addr = DNS.lookup_addr(info.addr) || info.addr
              }
              for (var total = 0, i = 0; i < num; i++) total += HEAP32[iov + (8 * i + 4) >> 2];
              var view = new Uint8Array(total),
                  offset = 0;
              for (i = 0; i < num; i++)
                  for (var iovbase = HEAP32[iov + (8 * i + 0) >> 2], iovlen = HEAP32[iov + (8 * i + 4) >> 2], j = 0; j < iovlen; j++) view[offset++] = HEAP8[iovbase + j >> 0];
              return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
          case 17:
              for (sock = getSocketFromFD(), message = SYSCALLS.get(), SYSCALLS.get(), iov = HEAP32[message + 8 >> 2], num = HEAP32[message + 12 >> 2], total = 0, i = 0; i < num; i++) total += HEAP32[iov + (8 * i + 4) >> 2];
              var msg;
              if (!(msg = sock.sock_ops.recvmsg(sock, total))) return 0;
              if (name = HEAP32[message >> 2]) __write_sockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port);
              var bytesRead = 0,
                  bytesRemaining = msg.buffer.byteLength;
              for (i = 0; bytesRemaining > 0 && i < num; i++) {
                  iovbase = HEAP32[iov + (8 * i + 0) >> 2];
                  if (iovlen = HEAP32[iov + (8 * i + 4) >> 2]) {
                      length = Math.min(iovlen, bytesRemaining), buf = msg.buffer.subarray(bytesRead, bytesRead + length);
                      HEAPU8.set(buf, iovbase + bytesRead), bytesRead += length, bytesRemaining -= length
                  }
              }
              return bytesRead;
          default:
              abort("unsupported socketcall syscall " + call)
      }
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall142(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      for (var nfds = SYSCALLS.get(), readfds = SYSCALLS.get(), writefds = SYSCALLS.get(), exceptfds = SYSCALLS.get(), total = (SYSCALLS.get(), 0), srcReadLow = readfds ? HEAP32[readfds >> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >> 2] : 0, srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >> 2] : 0, srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0, dstReadLow = 0, dstReadHigh = 0, dstWriteLow = 0, dstWriteHigh = 0, dstExceptLow = 0, dstExceptHigh = 0, allLow = (readfds ? HEAP32[readfds >> 2] : 0) | (writefds ? HEAP32[writefds >> 2] : 0) | (exceptfds ? HEAP32[exceptfds >> 2] : 0), allHigh = (readfds ? HEAP32[readfds + 4 >> 2] : 0) | (writefds ? HEAP32[writefds + 4 >> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0), check = function(fd, low, high, val) {
              return fd < 32 ? low & val : high & val
          }, fd = 0; fd < nfds; fd++) {
          var mask = 1 << fd % 32;
          if (check(fd, allLow, allHigh, mask)) {
              var stream = FS.getStream(fd);
              if (!stream) throw new FS.ErrnoError(8);
              var flags = SYSCALLS.DEFAULT_POLLMASK;
              stream.stream_ops.poll && (flags = stream.stream_ops.poll(stream)), 1 & flags && check(fd, srcReadLow, srcReadHigh, mask) && (fd < 32 ? dstReadLow |= mask : dstReadHigh |= mask, total++), 4 & flags && check(fd, srcWriteLow, srcWriteHigh, mask) && (fd < 32 ? dstWriteLow |= mask : dstWriteHigh |= mask, total++), 2 & flags && check(fd, srcExceptLow, srcExceptHigh, mask) && (fd < 32 ? dstExceptLow |= mask : dstExceptHigh |= mask, total++)
          }
      }
      return readfds && (HEAP32[readfds >> 2] = dstReadLow, HEAP32[readfds + 4 >> 2] = dstReadHigh), writefds && (HEAP32[writefds >> 2] = dstWriteLow, HEAP32[writefds + 4 >> 2] = dstWriteHigh), exceptfds && (HEAP32[exceptfds >> 2] = dstExceptLow, HEAP32[exceptfds + 4 >> 2] = dstExceptHigh), total
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall168(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      for (var fds = SYSCALLS.get(), nfds = SYSCALLS.get(), nonzero = (SYSCALLS.get(), 0), i = 0; i < nfds; i++) {
          var pollfd = fds + 8 * i,
              fd = HEAP32[pollfd >> 2],
              events = HEAP16[pollfd + 4 >> 1],
              mask = 32,
              stream = FS.getStream(fd);
          stream && (mask = SYSCALLS.DEFAULT_POLLMASK, stream.stream_ops.poll && (mask = stream.stream_ops.poll(stream))), (mask &= 24 | events) && nonzero++, HEAP16[pollfd + 6 >> 1] = mask
      }
      return nonzero
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall183(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var buf = SYSCALLS.get(),
          size = SYSCALLS.get();
      if (0 === size) return -28;
      var cwd = FS.cwd();
      return size < lengthBytesUTF8(cwd) + 1 ? -68 : (stringToUTF8(cwd, buf, size), buf)
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall191(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      SYSCALLS.get();
      var rlim = SYSCALLS.get();
      return HEAP32[rlim >> 2] = -1, HEAP32[rlim + 4 >> 2] = -1, HEAP32[rlim + 8 >> 2] = -1, HEAP32[rlim + 12 >> 2] = -1, 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall195(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var path = SYSCALLS.getStr(),
          buf = SYSCALLS.get();
      return SYSCALLS.doStat(FS.stat, path, buf)
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall197(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var stream = SYSCALLS.getStreamFromFD(),
          buf = SYSCALLS.get();
      return SYSCALLS.doStat(FS.stat, stream.path, buf)
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall202(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      return 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall199(a0, a1) {
  return ___syscall202(a0, a1)
}
var PROCINFO = {
  ppid: 1,
  pid: 42,
  sid: 42,
  pgid: 42
};

function ___syscall20(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      return PROCINFO.pid
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall221(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var stream = SYSCALLS.getStreamFromFD();
      switch (SYSCALLS.get()) {
          case 0:
              return (arg = SYSCALLS.get()) < 0 ? -28 : FS.open(stream.path, stream.flags, 0, arg).fd;
          case 1:
          case 2:
              return 0;
          case 3:
              return stream.flags;
          case 4:
              var arg = SYSCALLS.get();
              return stream.flags |= arg, 0;
          case 12:
              arg = SYSCALLS.get();
              return HEAP16[arg + 0 >> 1] = 2, 0;
          case 13:
          case 14:
              return 0;
          case 16:
          case 8:
              return -28;
          case 9:
              return ___setErrNo(28), -1;
          default:
              return -28
      }
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall3(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var stream = SYSCALLS.getStreamFromFD(),
          buf = SYSCALLS.get(),
          count = SYSCALLS.get();
      return FS.read(stream, HEAP8, buf, count)
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall340(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      SYSCALLS.get(), SYSCALLS.get(), SYSCALLS.get();
      var old_limit = SYSCALLS.get();
      return old_limit && (HEAP32[old_limit >> 2] = -1, HEAP32[old_limit + 4 >> 2] = -1, HEAP32[old_limit + 8 >> 2] = -1, HEAP32[old_limit + 12 >> 2] = -1), 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall4(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var stream = SYSCALLS.getStreamFromFD(),
          buf = SYSCALLS.get(),
          count = SYSCALLS.get();
      return FS.write(stream, HEAP8, buf, count)
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}
var PIPEFS = {
  BUCKET_BUFFER_SIZE: 8192,
  mount: function(mount) {
      return FS.createNode(null, "/", 16895, 0)
  },
  createPipe: function() {
      var pipe = {
          buckets: []
      };
      pipe.buckets.push({
          buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0
      });
      var rName = PIPEFS.nextname(),
          wName = PIPEFS.nextname(),
          rNode = FS.createNode(PIPEFS.root, rName, 4096, 0),
          wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
      rNode.pipe = pipe, wNode.pipe = pipe;
      var readableStream = FS.createStream({
          path: rName,
          node: rNode,
          flags: FS.modeStringToFlags("r"),
          seekable: !1,
          stream_ops: PIPEFS.stream_ops
      });
      rNode.stream = readableStream;
      var writableStream = FS.createStream({
          path: wName,
          node: wNode,
          flags: FS.modeStringToFlags("w"),
          seekable: !1,
          stream_ops: PIPEFS.stream_ops
      });
      return wNode.stream = writableStream, {
          readable_fd: readableStream.fd,
          writable_fd: writableStream.fd
      }
  },
  stream_ops: {
      poll: function(stream) {
          var pipe = stream.node.pipe;
          if (1 == (2097155 & stream.flags)) return 260;
          if (pipe.buckets.length > 0)
              for (var i = 0; i < pipe.buckets.length; i++) {
                  var bucket = pipe.buckets[i];
                  if (bucket.offset - bucket.roffset > 0) return 65
              }
          return 0
      },
      ioctl: function(stream, request, varargs) {
          return ERRNO_CODES.EINVAL
      },
      fsync: function(stream) {
          return ERRNO_CODES.EINVAL
      },
      read: function(stream, buffer, offset, length, position) {
          for (var pipe = stream.node.pipe, currentLength = 0, i = 0; i < pipe.buckets.length; i++) {
              var bucket = pipe.buckets[i];
              currentLength += bucket.offset - bucket.roffset
          }
          assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
          var data = buffer.subarray(offset, offset + length);
          if (length <= 0) return 0;
          if (0 == currentLength) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
          var toRead = Math.min(currentLength, length),
              totalRead = toRead,
              toRemove = 0;
          for (i = 0; i < pipe.buckets.length; i++) {
              var currBucket = pipe.buckets[i],
                  bucketSize = currBucket.offset - currBucket.roffset;
              if (toRead <= bucketSize) {
                  var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
                  toRead < bucketSize ? (tmpSlice = tmpSlice.subarray(0, toRead), currBucket.roffset += toRead) : toRemove++, data.set(tmpSlice);
                  break
              }
              tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
              data.set(tmpSlice), data = data.subarray(tmpSlice.byteLength), toRead -= tmpSlice.byteLength, toRemove++
          }
          return toRemove && toRemove == pipe.buckets.length && (toRemove--, pipe.buckets[toRemove].offset = 0, pipe.buckets[toRemove].roffset = 0), pipe.buckets.splice(0, toRemove), totalRead
      },
      write: function(stream, buffer, offset, length, position) {
          var pipe = stream.node.pipe;
          assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
          var data = buffer.subarray(offset, offset + length),
              dataLen = data.byteLength;
          if (dataLen <= 0) return 0;
          var currBucket = null;
          0 == pipe.buckets.length ? (currBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: 0,
              roffset: 0
          }, pipe.buckets.push(currBucket)) : currBucket = pipe.buckets[pipe.buckets.length - 1], assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
          var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
          if (freeBytesInCurrBuffer >= dataLen) return currBucket.buffer.set(data, currBucket.offset), currBucket.offset += dataLen, dataLen;
          freeBytesInCurrBuffer > 0 && (currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset), currBucket.offset += freeBytesInCurrBuffer, data = data.subarray(freeBytesInCurrBuffer, data.byteLength));
          for (var numBuckets = data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0, remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE, i = 0; i < numBuckets; i++) {
              var newBucket = {
                  buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
                  offset: PIPEFS.BUCKET_BUFFER_SIZE,
                  roffset: 0
              };
              pipe.buckets.push(newBucket), newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE)), data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength)
          }
          if (remElements > 0) {
              newBucket = {
                  buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
                  offset: data.byteLength,
                  roffset: 0
              };
              pipe.buckets.push(newBucket), newBucket.buffer.set(data)
          }
          return dataLen
      },
      close: function(stream) {
          stream.node.pipe.buckets = null
      }
  },
  nextname: function() {
      return PIPEFS.nextname.current || (PIPEFS.nextname.current = 0), "pipe[" + PIPEFS.nextname.current++ + "]"
  }
};

function ___syscall42(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var fdPtr = SYSCALLS.get();
      if (0 == fdPtr) throw new FS.ErrnoError(21);
      var res = PIPEFS.createPipe();
      return HEAP32[fdPtr >> 2] = res.readable_fd, HEAP32[fdPtr + 4 >> 2] = res.writable_fd, 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall5(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var pathname = SYSCALLS.getStr(),
          flags = SYSCALLS.get(),
          mode = SYSCALLS.get();
      return FS.open(pathname, flags, mode).fd
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall54(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      var stream = SYSCALLS.getStreamFromFD(),
          op = SYSCALLS.get();
      switch (op) {
          case 21509:
          case 21505:
              return stream.tty ? 0 : -59;
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508:
              return stream.tty ? 0 : -59;
          case 21519:
              if (!stream.tty) return -59;
              var argp = SYSCALLS.get();
              return HEAP32[argp >> 2] = 0, 0;
          case 21520:
              return stream.tty ? -28 : -59;
          case 21531:
              argp = SYSCALLS.get();
              return FS.ioctl(stream, op, argp);
          case 21523:
          case 21524:
              return stream.tty ? 0 : -59;
          default:
              abort("bad ioctl syscall " + op)
      }
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___syscall75(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      return 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function __emscripten_syscall_munmap(addr, len) {
  if (-1 === addr || 0 === len) return -28;
  var info = SYSCALLS.mappings[addr];
  if (!info) return 0;
  if (len === info.len) {
      var stream = FS.getStream(info.fd);
      SYSCALLS.doMsync(addr, stream, len, info.flags), FS.munmap(stream), SYSCALLS.mappings[addr] = null, info.allocated && _free(info.malloc)
  }
  return 0
}

function ___syscall91(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
      return __emscripten_syscall_munmap(SYSCALLS.get(), SYSCALLS.get())
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), -e.errno
  }
}

function ___unlock() {}

function _abort() {
  abort()
}

function _emscripten_get_now() {
  abort()
}

function _emscripten_get_now_is_monotonic() {
  return ENVIRONMENT_IS_NODE || "undefined" != typeof dateNow || "object" == typeof performance && performance && "function" == typeof performance.now
}

function _clock_gettime(clk_id, tp) {
  var now;
  if (0 === clk_id) now = Date.now();
  else {
      if (1 !== clk_id || !_emscripten_get_now_is_monotonic()) return ___setErrNo(28), -1;
      now = _emscripten_get_now()
  }
  return HEAP32[tp >> 2] = now / 1e3 | 0, HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0, 0
}

function _emscripten_get_heap_size() {
  return HEAP8.length
}

function _emscripten_get_sbrk_ptr() {
  return 253136
}

function _emscripten_memcpy_big(dest, src, num) {
  HEAPU8.set(HEAPU8.subarray(src, src + num), dest)
}

function emscripten_realloc_buffer(size) {
  try {
      return wasmMemory.grow(size - buffer.byteLength + 65535 >> 16), updateGlobalBufferAndViews(wasmMemory.buffer), 1
  } catch (e) {}
}

function _emscripten_resize_heap(requestedSize) {
  var oldSize = _emscripten_get_heap_size();
  if (requestedSize > 2147418112) return !1;
  for (var newSize = Math.max(oldSize, 16777216); newSize < requestedSize;) newSize = newSize <= 536870912 ? alignUp(2 * newSize, 65536) : Math.min(alignUp((3 * newSize + 2147483648) / 4, 65536), 2147418112);
  return !!emscripten_realloc_buffer(newSize)
}
var ENV = {};

function _emscripten_get_environ() {
  if (!_emscripten_get_environ.strings) {
      var env = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
          _: thisProgram
      };
      for (var x in ENV) env[x] = ENV[x];
      var strings = [];
      for (var x in env) strings.push(x + "=" + env[x]);
      _emscripten_get_environ.strings = strings
  }
  return _emscripten_get_environ.strings
}

function _environ_get(__environ, environ_buf) {
  var strings = _emscripten_get_environ(),
      bufSize = 0;
  return strings.forEach(function(string, i) {
      var ptr = environ_buf + bufSize;
      HEAP32[__environ + 4 * i >> 2] = ptr, writeAsciiToMemory(string, ptr), bufSize += string.length + 1
  }), 0
}

function _environ_sizes_get(penviron_count, penviron_buf_size) {
  var strings = _emscripten_get_environ();
  HEAP32[penviron_count >> 2] = strings.length;
  var bufSize = 0;
  return strings.forEach(function(string) {
      bufSize += string.length + 1
  }), HEAP32[penviron_buf_size >> 2] = bufSize, 0
}

function _epoll_create() {
  err("missing function: epoll_create"), abort(-1)
}

function _epoll_ctl() {
  err("missing function: epoll_ctl"), abort(-1)
}

function _epoll_wait() {
  err("missing function: epoll_wait"), abort(-1)
}

function _fd_close(fd) {
  try {
      var stream = SYSCALLS.getStreamFromFD(fd);
      return FS.close(stream), 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), e.errno
  }
}

function _fd_fdstat_get(fd, pbuf) {
  try {
      var stream = SYSCALLS.getStreamFromFD(fd),
          type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
      return HEAP8[pbuf >> 0] = type, 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), e.errno
  }
}

function _fd_read(fd, iov, iovcnt, pnum) {
  try {
      var stream = SYSCALLS.getStreamFromFD(fd),
          num = SYSCALLS.doReadv(stream, iov, iovcnt);
      return HEAP32[pnum >> 2] = num, 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), e.errno
  }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  try {
      var stream = SYSCALLS.getStreamFromFD(fd),
          offset = 4294967296 * offset_high + (offset_low >>> 0);
      return offset <= -9007199254740992 || offset >= 9007199254740992 ? -61 : (FS.llseek(stream, offset, whence), tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (0 | Math_min(+Math_floor(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1], stream.getdents && 0 === offset && 0 === whence && (stream.getdents = null), 0)
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), e.errno
  }
}

function _fd_write(fd, iov, iovcnt, pnum) {
  try {
      var stream = SYSCALLS.getStreamFromFD(fd),
          num = SYSCALLS.doWritev(stream, iov, iovcnt);
      return HEAP32[pnum >> 2] = num, 0
  } catch (e) {
      return void 0 !== FS && e instanceof FS.ErrnoError || abort(e), e.errno
  }
}

function _getpagesize() {
  return PAGE_SIZE
}

function _gettimeofday(ptr) {
  var now = Date.now();
  return HEAP32[ptr >> 2] = now / 1e3 | 0, HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0, 0
}
var ___tm_current = 253152,
  ___tm_timezone = (stringToUTF8("GMT", 253200, 4), 253200);

function _gmtime_r(time, tmPtr) {
  var date = new Date(1e3 * HEAP32[time >> 2]);
  HEAP32[tmPtr >> 2] = date.getUTCSeconds(), HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes(), HEAP32[tmPtr + 8 >> 2] = date.getUTCHours(), HEAP32[tmPtr + 12 >> 2] = date.getUTCDate(), HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth(), HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900, HEAP32[tmPtr + 24 >> 2] = date.getUTCDay(), HEAP32[tmPtr + 36 >> 2] = 0, HEAP32[tmPtr + 32 >> 2] = 0;
  var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
      yday = (date.getTime() - start) / 864e5 | 0;
  return HEAP32[tmPtr + 28 >> 2] = yday, HEAP32[tmPtr + 40 >> 2] = ___tm_timezone, tmPtr
}

function _gmtime(time) {
  return _gmtime_r(time, ___tm_current)
}

function _memset(ptr, value, num) {
  value |= 0;
  var end, aligned_end = 0,
      block_aligned_end = 0,
      value4 = 0;
  if (end = (ptr |= 0) + (num |= 0) | 0, value &= 255, (0 | num) >= 67) {
      for (; 0 != (3 & ptr);) HEAP8[ptr >> 0] = value, ptr = ptr + 1 | 0;
      for (value4 = value | value << 8 | value << 16 | value << 24, block_aligned_end = (aligned_end = -4 & end | 0) - 64 | 0;
          (0 | ptr) <= (0 | block_aligned_end);) HEAP32[ptr >> 2] = value4, HEAP32[ptr + 4 >> 2] = value4, HEAP32[ptr + 8 >> 2] = value4, HEAP32[ptr + 12 >> 2] = value4, HEAP32[ptr + 16 >> 2] = value4, HEAP32[ptr + 20 >> 2] = value4, HEAP32[ptr + 24 >> 2] = value4, HEAP32[ptr + 28 >> 2] = value4, HEAP32[ptr + 32 >> 2] = value4, HEAP32[ptr + 36 >> 2] = value4, HEAP32[ptr + 40 >> 2] = value4, HEAP32[ptr + 44 >> 2] = value4, HEAP32[ptr + 48 >> 2] = value4, HEAP32[ptr + 52 >> 2] = value4, HEAP32[ptr + 56 >> 2] = value4, HEAP32[ptr + 60 >> 2] = value4, ptr = ptr + 64 | 0;
      for (;
          (0 | ptr) < (0 | aligned_end);) HEAP32[ptr >> 2] = value4, ptr = ptr + 4 | 0
  }
  for (;
      (0 | ptr) < (0 | end);) HEAP8[ptr >> 0] = value, ptr = ptr + 1 | 0;
  return end - num | 0
}

function _usleep(useconds) {
  var msec = useconds / 1e3;
  if ((ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && self.performance && self.performance.now)
      for (var start = self.performance.now(); self.performance.now() - start < msec;);
  else
      for (start = Date.now(); Date.now() - start < msec;);
  return 0
}

function _nanosleep(rqtp, rmtp) {
  if (0 === rqtp) return ___setErrNo(28), -1;
  var seconds = HEAP32[rqtp >> 2],
      nanoseconds = HEAP32[rqtp + 4 >> 2];
  return nanoseconds < 0 || nanoseconds > 999999999 || seconds < 0 ? (___setErrNo(28), -1) : (0 !== rmtp && (HEAP32[rmtp >> 2] = 0, HEAP32[rmtp + 4 >> 2] = 0), _usleep(1e6 * seconds + nanoseconds / 1e3))
}

function _prctl() {
  err("missing function: prctl"), abort(-1)
}

function _pthread_attr_destroy(attr) {
  return 0
}

function _pthread_attr_init(attr) {
  return 0
}

function _pthread_attr_setdetachstate() {}

function _pthread_attr_setstacksize() {}

function _pthread_cancel() {}

function _pthread_cond_destroy() {
  return 0
}

function _pthread_cond_init() {
  return 0
}

function _pthread_cond_timedwait() {
  return 0
}

function _pthread_condattr_destroy() {
  return 0
}

function _pthread_condattr_init() {
  return 0
}

function _pthread_condattr_setclock() {
  return 0
}

function _pthread_create() {
  return 6
}

function _pthread_join() {}

function _pthread_mutexattr_destroy() {}

function _pthread_mutexattr_init() {}

function _pthread_rwlock_destroy() {
  return 0
}

function _pthread_rwlock_init() {
  return 0
}

function _pthread_rwlock_rdlock() {
  return 0
}

function _pthread_rwlock_unlock() {
  return 0
}

function _pthread_rwlock_wrlock() {
  return 0
}

function _pthread_setcancelstate() {
  return 0
}

function _pthread_setcanceltype() {
  return 0
}

function _pthread_setschedparam() {
  err("missing function: pthread_setschedparam"), abort(-1)
}

function _sched_get_priority_max() {
  err("missing function: sched_get_priority_max"), abort(-1)
}

function _sched_get_priority_min() {
  err("missing function: sched_get_priority_min"), abort(-1)
}

function _sched_setaffinity() {
  err("missing function: sched_setaffinity"), abort(-1)
}

function _setTempRet0($i) {
  setTempRet0(0 | $i)
}

function __isLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

function __arraySum(array, index) {
  for (var sum = 0, i = 0; i <= index; sum += array[i++]);
  return sum
}
var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function __addDays(date, days) {
  for (var newDate = new Date(date.getTime()); days > 0;) {
      var leap = __isLeapYear(newDate.getFullYear()),
          currentMonth = newDate.getMonth(),
          daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
      if (!(days > daysInCurrentMonth - newDate.getDate())) return newDate.setDate(newDate.getDate() + days), newDate;
      days -= daysInCurrentMonth - newDate.getDate() + 1, newDate.setDate(1), currentMonth < 11 ? newDate.setMonth(currentMonth + 1) : (newDate.setMonth(0), newDate.setFullYear(newDate.getFullYear() + 1))
  }
  return newDate
}

function _strftime(s, maxsize, format, tm) {
  var tm_zone = HEAP32[tm + 40 >> 2],
      date = {
          tm_sec: HEAP32[tm >> 2],
          tm_min: HEAP32[tm + 4 >> 2],
          tm_hour: HEAP32[tm + 8 >> 2],
          tm_mday: HEAP32[tm + 12 >> 2],
          tm_mon: HEAP32[tm + 16 >> 2],
          tm_year: HEAP32[tm + 20 >> 2],
          tm_wday: HEAP32[tm + 24 >> 2],
          tm_yday: HEAP32[tm + 28 >> 2],
          tm_isdst: HEAP32[tm + 32 >> 2],
          tm_gmtoff: HEAP32[tm + 36 >> 2],
          tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
      },
      pattern = UTF8ToString(format),
      EXPANSION_RULES_1 = {
          "%c": "%a %b %d %H:%M:%S %Y",
          "%D": "%m/%d/%y",
          "%F": "%Y-%m-%d",
          "%h": "%b",
          "%r": "%I:%M:%S %p",
          "%R": "%H:%M",
          "%T": "%H:%M:%S",
          "%x": "%m/%d/%y",
          "%X": "%H:%M:%S",
          "%Ec": "%c",
          "%EC": "%C",
          "%Ex": "%m/%d/%y",
          "%EX": "%H:%M:%S",
          "%Ey": "%y",
          "%EY": "%Y",
          "%Od": "%d",
          "%Oe": "%e",
          "%OH": "%H",
          "%OI": "%I",
          "%Om": "%m",
          "%OM": "%M",
          "%OS": "%S",
          "%Ou": "%u",
          "%OU": "%U",
          "%OV": "%V",
          "%Ow": "%w",
          "%OW": "%W",
          "%Oy": "%y"
      };
  for (var rule in EXPANSION_RULES_1) pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
  var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function leadingSomething(value, digits, character) {
      for (var str = "number" == typeof value ? value.toString() : value || ""; str.length < digits;) str = character[0] + str;
      return str
  }

  function leadingNulls(value, digits) {
      return leadingSomething(value, digits, "0")
  }

  function compareByDay(date1, date2) {
      function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0
      }
      var compare;
      return 0 === (compare = sgn(date1.getFullYear() - date2.getFullYear())) && 0 === (compare = sgn(date1.getMonth() - date2.getMonth())) && (compare = sgn(date1.getDate() - date2.getDate())), compare
  }

  function getFirstWeekStartDate(janFourth) {
      switch (janFourth.getDay()) {
          case 0:
              return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
              return janFourth;
          case 2:
              return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
              return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
              return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
              return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
              return new Date(janFourth.getFullYear() - 1, 11, 30)
      }
  }

  function getWeekBasedYear(date) {
      var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday),
          janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4),
          janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4),
          firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear),
          firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
      return compareByDay(firstWeekStartThisYear, thisDate) <= 0 ? compareByDay(firstWeekStartNextYear, thisDate) <= 0 ? thisDate.getFullYear() + 1 : thisDate.getFullYear() : thisDate.getFullYear() - 1
  }
  var EXPANSION_RULES_2 = {
      "%a": function(date) {
          return WEEKDAYS[date.tm_wday].substring(0, 3)
      },
      "%A": function(date) {
          return WEEKDAYS[date.tm_wday]
      },
      "%b": function(date) {
          return MONTHS[date.tm_mon].substring(0, 3)
      },
      "%B": function(date) {
          return MONTHS[date.tm_mon]
      },
      "%C": function(date) {
          return leadingNulls((date.tm_year + 1900) / 100 | 0, 2)
      },
      "%d": function(date) {
          return leadingNulls(date.tm_mday, 2)
      },
      "%e": function(date) {
          return leadingSomething(date.tm_mday, 2, " ")
      },
      "%g": function(date) {
          return getWeekBasedYear(date).toString().substring(2)
      },
      "%G": function(date) {
          return getWeekBasedYear(date)
      },
      "%H": function(date) {
          return leadingNulls(date.tm_hour, 2)
      },
      "%I": function(date) {
          var twelveHour = date.tm_hour;
          return 0 == twelveHour ? twelveHour = 12 : twelveHour > 12 && (twelveHour -= 12), leadingNulls(twelveHour, 2)
      },
      "%j": function(date) {
          return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3)
      },
      "%m": function(date) {
          return leadingNulls(date.tm_mon + 1, 2)
      },
      "%M": function(date) {
          return leadingNulls(date.tm_min, 2)
      },
      "%n": function() {
          return "\n"
      },
      "%p": function(date) {
          return date.tm_hour >= 0 && date.tm_hour < 12 ? "AM" : "PM"
      },
      "%S": function(date) {
          return leadingNulls(date.tm_sec, 2)
      },
      "%t": function() {
          return "\t"
      },
      "%u": function(date) {
          return date.tm_wday || 7
      },
      "%U": function(date) {
          var janFirst = new Date(date.tm_year + 1900, 0, 1),
              firstSunday = 0 === janFirst.getDay() ? janFirst : __addDays(janFirst, 7 - janFirst.getDay()),
              endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
          if (compareByDay(firstSunday, endDate) < 0) {
              var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31,
                  days = 31 - firstSunday.getDate() + februaryFirstUntilEndMonth + endDate.getDate();
              return leadingNulls(Math.ceil(days / 7), 2)
          }
          return 0 === compareByDay(firstSunday, janFirst) ? "01" : "00"
      },
      "%V": function(date) {
          var daysDifference, janFourthThisYear = new Date(date.tm_year + 1900, 0, 4),
              janFourthNextYear = new Date(date.tm_year + 1901, 0, 4),
              firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear),
              firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear),
              endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
          return compareByDay(endDate, firstWeekStartThisYear) < 0 ? "53" : compareByDay(firstWeekStartNextYear, endDate) <= 0 ? "01" : (daysDifference = firstWeekStartThisYear.getFullYear() < date.tm_year + 1900 ? date.tm_yday + 32 - firstWeekStartThisYear.getDate() : date.tm_yday + 1 - firstWeekStartThisYear.getDate(), leadingNulls(Math.ceil(daysDifference / 7), 2))
      },
      "%w": function(date) {
          return date.tm_wday
      },
      "%W": function(date) {
          var janFirst = new Date(date.tm_year, 0, 1),
              firstMonday = 1 === janFirst.getDay() ? janFirst : __addDays(janFirst, 0 === janFirst.getDay() ? 1 : 7 - janFirst.getDay() + 1),
              endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
          if (compareByDay(firstMonday, endDate) < 0) {
              var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31,
                  days = 31 - firstMonday.getDate() + februaryFirstUntilEndMonth + endDate.getDate();
              return leadingNulls(Math.ceil(days / 7), 2)
          }
          return 0 === compareByDay(firstMonday, janFirst) ? "01" : "00"
      },
      "%y": function(date) {
          return (date.tm_year + 1900).toString().substring(2)
      },
      "%Y": function(date) {
          return date.tm_year + 1900
      },
      "%z": function(date) {
          var off = date.tm_gmtoff,
              ahead = off >= 0;
          return off = (off = Math.abs(off) / 60) / 60 * 100 + off % 60, (ahead ? "+" : "-") + String("0000" + off).slice(-4)
      },
      "%Z": function(date) {
          return date.tm_zone
      },
      "%%": function() {
          return "%"
      }
  };
  for (var rule in EXPANSION_RULES_2) pattern.indexOf(rule) >= 0 && (pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date)));
  var bytes = intArrayFromString(pattern, !1);
  return bytes.length > maxsize ? 0 : (writeArrayToMemory(bytes, s), bytes.length - 1)
}

function _strftime_l(s, maxsize, format, tm) {
  return _strftime(s, maxsize, format, tm)
}

function _sysconf(name) {
  switch (name) {
      case 30:
          return PAGE_SIZE;
      case 85:
          return 2147418112 / PAGE_SIZE;
      case 132:
      case 133:
      case 12:
      case 137:
      case 138:
      case 15:
      case 235:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 149:
      case 13:
      case 10:
      case 236:
      case 153:
      case 9:
      case 21:
      case 22:
      case 159:
      case 154:
      case 14:
      case 77:
      case 78:
      case 139:
      case 80:
      case 81:
      case 82:
      case 68:
      case 67:
      case 164:
      case 11:
      case 29:
      case 47:
      case 48:
      case 95:
      case 52:
      case 51:
      case 46:
          return 200809;
      case 79:
          return 0;
      case 27:
      case 246:
      case 127:
      case 128:
      case 23:
      case 24:
      case 160:
      case 161:
      case 181:
      case 182:
      case 242:
      case 183:
      case 184:
      case 243:
      case 244:
      case 245:
      case 165:
      case 178:
      case 179:
      case 49:
      case 50:
      case 168:
      case 169:
      case 175:
      case 170:
      case 171:
      case 172:
      case 97:
      case 76:
      case 32:
      case 173:
      case 35:
          return -1;
      case 176:
      case 177:
      case 7:
      case 155:
      case 8:
      case 157:
      case 125:
      case 126:
      case 92:
      case 93:
      case 129:
      case 130:
      case 131:
      case 94:
      case 91:
          return 1;
      case 74:
      case 60:
      case 69:
      case 70:
      case 4:
          return 1024;
      case 31:
      case 42:
      case 72:
          return 32;
      case 87:
      case 26:
      case 33:
          return 2147483647;
      case 34:
      case 1:
          return 47839;
      case 38:
      case 36:
          return 99;
      case 43:
      case 37:
          return 2048;
      case 0:
          return 2097152;
      case 3:
          return 65536;
      case 28:
          return 32768;
      case 44:
          return 32767;
      case 75:
          return 16384;
      case 39:
          return 1e3;
      case 89:
          return 700;
      case 71:
          return 256;
      case 40:
          return 255;
      case 2:
          return 100;
      case 180:
          return 64;
      case 25:
          return 20;
      case 5:
          return 16;
      case 6:
          return 6;
      case 73:
          return 4;
      case 84:
          return "object" == typeof navigator && navigator.hardwareConcurrency || 1
  }
  return ___setErrNo(28), -1
}

function _time(ptr) {
  var ret = Date.now() / 1e3 | 0;
  return ptr && (HEAP32[ptr >> 2] = ret), ret
}

function _times(buffer) {
  return 0 !== buffer && _memset(buffer, 0, 16), 0
}
FS.staticInit(), _emscripten_get_now = ENVIRONMENT_IS_NODE ? function() {
  var t = process.hrtime();
  return 1e3 * t[0] + t[1] / 1e6
} : "undefined" != typeof dateNow ? dateNow : "object" == typeof performance && performance && "function" == typeof performance.now ? function() {
  return performance.now()
} : Date.now;
var ASSERTIONS = !1;

function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1,
      u8array = new Array(len),
      numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  return dontAddNull && (u8array.length = numBytesWritten), u8array
}
var asmLibraryArg = {
      __assert_fail: ___assert_fail,
      __cxa_allocate_exception: ___cxa_allocate_exception,
      __cxa_atexit: ___cxa_atexit,
      __cxa_throw: ___cxa_throw,
      __lock: ___lock,
      __map_file: ___map_file,
      __syscall102: ___syscall102,
      __syscall142: ___syscall142,
      __syscall168: ___syscall168,
      __syscall183: ___syscall183,
      __syscall191: ___syscall191,
      __syscall195: ___syscall195,
      __syscall197: ___syscall197,
      __syscall199: ___syscall199,
      __syscall20: ___syscall20,
      __syscall221: ___syscall221,
      __syscall3: ___syscall3,
      __syscall340: ___syscall340,
      __syscall4: ___syscall4,
      __syscall42: ___syscall42,
      __syscall5: ___syscall5,
      __syscall54: ___syscall54,
      __syscall75: ___syscall75,
      __syscall91: ___syscall91,
      __unlock: ___unlock,
      abort: _abort,
      clock_gettime: _clock_gettime,
      emscripten_asm_const_iii: _emscripten_asm_const_iii,
      emscripten_get_sbrk_ptr: _emscripten_get_sbrk_ptr,
      emscripten_memcpy_big: _emscripten_memcpy_big,
      emscripten_resize_heap: _emscripten_resize_heap,
      environ_get: _environ_get,
      environ_sizes_get: _environ_sizes_get,
      epoll_create: _epoll_create,
      epoll_ctl: _epoll_ctl,
      epoll_wait: _epoll_wait,
      fd_close: _fd_close,
      fd_fdstat_get: _fd_fdstat_get,
      fd_read: _fd_read,
      fd_seek: _fd_seek,
      fd_write: _fd_write,
      getpagesize: _getpagesize,
      gettimeofday: _gettimeofday,
      gmtime: _gmtime,
      memory: wasmMemory,
      nanosleep: _nanosleep,
      prctl: _prctl,
      pthread_attr_destroy: _pthread_attr_destroy,
      pthread_attr_init: _pthread_attr_init,
      pthread_attr_setdetachstate: _pthread_attr_setdetachstate,
      pthread_attr_setstacksize: _pthread_attr_setstacksize,
      pthread_cancel: _pthread_cancel,
      pthread_cond_destroy: _pthread_cond_destroy,
      pthread_cond_init: _pthread_cond_init,
      pthread_cond_timedwait: _pthread_cond_timedwait,
      pthread_condattr_destroy: _pthread_condattr_destroy,
      pthread_condattr_init: _pthread_condattr_init,
      pthread_condattr_setclock: _pthread_condattr_setclock,
      pthread_create: _pthread_create,
      pthread_join: _pthread_join,
      pthread_mutexattr_destroy: _pthread_mutexattr_destroy,
      pthread_mutexattr_init: _pthread_mutexattr_init,
      pthread_rwlock_destroy: _pthread_rwlock_destroy,
      pthread_rwlock_init: _pthread_rwlock_init,
      pthread_rwlock_rdlock: _pthread_rwlock_rdlock,
      pthread_rwlock_unlock: _pthread_rwlock_unlock,
      pthread_rwlock_wrlock: _pthread_rwlock_wrlock,
      pthread_setcancelstate: _pthread_setcancelstate,
      pthread_setcanceltype: _pthread_setcanceltype,
      pthread_setschedparam: _pthread_setschedparam,
      sched_get_priority_max: _sched_get_priority_max,
      sched_get_priority_min: _sched_get_priority_min,
      sched_setaffinity: _sched_setaffinity,
      setTempRet0: _setTempRet0,
      strftime: _strftime,
      strftime_l: _strftime_l,
      sysconf: _sysconf,
      table: wasmTable,
      time: _time,
      times: _times
  },
  asm = createWasm();
Module.asm = asm;
var calledRun, ___wasm_call_ctors = Module.___wasm_call_ctors = function() {
      return Module.asm.__wasm_call_ctors.apply(null, arguments)
  },
  __Audio_Init = Module.__Audio_Init = function() {
      return Module.asm._Audio_Init.apply(null, arguments)
  },
  __Audio_UnInit = Module.__Audio_UnInit = function() {
      return Module.asm._Audio_UnInit.apply(null, arguments)
  },
  __Audio_Encode = Module.__Audio_Encode = function() {
      return Module.asm._Audio_Encode.apply(null, arguments)
  },
  __Audio_Decode = Module.__Audio_Decode = function() {
      return Module.asm._Audio_Decode.apply(null, arguments)
  },
  __Put_Pre_Aec_Data = Module.__Put_Pre_Aec_Data = function() {
      return Module.asm._Put_Pre_Aec_Data.apply(null, arguments)
  },
  __Set_Aec_Delay = Module.__Set_Aec_Delay = function() {
      return Module.asm._Set_Aec_Delay.apply(null, arguments)
  },
  __ReSet_Aec = Module.__ReSet_Aec = function() {
      return Module.asm._ReSet_Aec.apply(null, arguments)
  },
  __Get_Aec_Delay = Module.__Get_Aec_Delay = function() {
      return Module.asm._Get_Aec_Delay.apply(null, arguments)
  },
  __Get_Mixed_Audio = Module.__Get_Mixed_Audio = function() {
      return Module.asm._Get_Mixed_Audio.apply(null, arguments)
  },
  __Get_Audio_Edition = Module.__Get_Audio_Edition = function() {
      return Module.asm._Get_Audio_Edition.apply(null, arguments)
  },
  __Audio_Set_Data_Encryption = Module.__Audio_Set_Data_Encryption = function() {
      return Module.asm._Audio_Set_Data_Encryption.apply(null, arguments)
  },
  _malloc = Module._malloc = function() {
      return Module.asm.malloc.apply(null, arguments)
  },
  _free = Module._free = function() {
      return Module.asm.free.apply(null, arguments)
  },
  ___errno_location = Module.___errno_location = function() {
      return Module.asm.__errno_location.apply(null, arguments)
  },
  _htons = Module._htons = function() {
      return Module.asm.htons.apply(null, arguments)
  },
  _ntohs = Module._ntohs = function() {
      return Module.asm.ntohs.apply(null, arguments)
  },
  _htonl = Module._htonl = function() {
      return Module.asm.htonl.apply(null, arguments)
  },
  __get_tzname = Module.__get_tzname = function() {
      return Module.asm._get_tzname.apply(null, arguments)
  },
  __get_daylight = Module.__get_daylight = function() {
      return Module.asm._get_daylight.apply(null, arguments)
  },
  __get_timezone = Module.__get_timezone = function() {
      return Module.asm._get_timezone.apply(null, arguments)
  },
  _setThrew = Module._setThrew = function() {
      return Module.asm.setThrew.apply(null, arguments)
  },
  __ZSt18uncaught_exceptionv = Module.__ZSt18uncaught_exceptionv = function() {
      return Module.asm._ZSt18uncaught_exceptionv.apply(null, arguments)
  },
  ___cxa_demangle = Module.___cxa_demangle = function() {
      return Module.asm.__cxa_demangle.apply(null, arguments)
  },
  stackSave = Module.stackSave = function() {
      return Module.asm.stackSave.apply(null, arguments)
  },
  stackAlloc = Module.stackAlloc = function() {
      return Module.asm.stackAlloc.apply(null, arguments)
  },
  stackRestore = Module.stackRestore = function() {
      return Module.asm.stackRestore.apply(null, arguments)
  },
  __growWasmMemory = Module.__growWasmMemory = function() {
      return Module.asm.__growWasmMemory.apply(null, arguments)
  },
  dynCall_ii = Module.dynCall_ii = function() {
      return Module.asm.dynCall_ii.apply(null, arguments)
  },
  dynCall_iiiii = Module.dynCall_iiiii = function() {
      return Module.asm.dynCall_iiiii.apply(null, arguments)
  },
  dynCall_vi = Module.dynCall_vi = function() {
      return Module.asm.dynCall_vi.apply(null, arguments)
  },
  dynCall_iiij = Module.dynCall_iiij = function() {
      return Module.asm.dynCall_iiij.apply(null, arguments)
  },
  dynCall_iij = Module.dynCall_iij = function() {
      return Module.asm.dynCall_iij.apply(null, arguments)
  },
  dynCall_iii = Module.dynCall_iii = function() {
      return Module.asm.dynCall_iii.apply(null, arguments)
  },
  dynCall_v = Module.dynCall_v = function() {
      return Module.asm.dynCall_v.apply(null, arguments)
  },
  dynCall_iiiiiiiii = Module.dynCall_iiiiiiiii = function() {
      return Module.asm.dynCall_iiiiiiiii.apply(null, arguments)
  },
  dynCall_iiiiii = Module.dynCall_iiiiii = function() {
      return Module.asm.dynCall_iiiiii.apply(null, arguments)
  },
  dynCall_iiii = Module.dynCall_iiii = function() {
      return Module.asm.dynCall_iiii.apply(null, arguments)
  },
  dynCall_iiiiiiii = Module.dynCall_iiiiiiii = function() {
      return Module.asm.dynCall_iiiiiiii.apply(null, arguments)
  },
  dynCall_iiiiiiifi = Module.dynCall_iiiiiiifi = function() {
      return Module.asm.dynCall_iiiiiiifi.apply(null, arguments)
  },
  dynCall_iiiiiii = Module.dynCall_iiiiiii = function() {
      return Module.asm.dynCall_iiiiiii.apply(null, arguments)
  },
  dynCall_iiiiifii = Module.dynCall_iiiiifii = function() {
      return Module.asm.dynCall_iiiiifii.apply(null, arguments)
  },
  dynCall_iiiiiiiiiiiii = Module.dynCall_iiiiiiiiiiiii = function() {
      return Module.asm.dynCall_iiiiiiiiiiiii.apply(null, arguments)
  },
  dynCall_viii = Module.dynCall_viii = function() {
      return Module.asm.dynCall_viii.apply(null, arguments)
  },
  dynCall_iiiiifi = Module.dynCall_iiiiifi = function() {
      return Module.asm.dynCall_iiiiifi.apply(null, arguments)
  },
  dynCall_iiiifi = Module.dynCall_iiiifi = function() {
      return Module.asm.dynCall_iiiifi.apply(null, arguments)
  },
  dynCall_viiii = Module.dynCall_viiii = function() {
      return Module.asm.dynCall_viiii.apply(null, arguments)
  },
  dynCall_vii = Module.dynCall_vii = function() {
      return Module.asm.dynCall_vii.apply(null, arguments)
  },
  dynCall_viiiiiiii = Module.dynCall_viiiiiiii = function() {
      return Module.asm.dynCall_viiiiiiii.apply(null, arguments)
  },
  dynCall_viiiii = Module.dynCall_viiiii = function() {
      return Module.asm.dynCall_viiiii.apply(null, arguments)
  },
  dynCall_i = Module.dynCall_i = function() {
      return Module.asm.dynCall_i.apply(null, arguments)
  },
  dynCall_viid = Module.dynCall_viid = function() {
      return Module.asm.dynCall_viid.apply(null, arguments)
  },
  dynCall_iiiiiifii = Module.dynCall_iiiiiifii = function() {
      return Module.asm.dynCall_iiiiiifii.apply(null, arguments)
  },
  dynCall_iiif = Module.dynCall_iiif = function() {
      return Module.asm.dynCall_iiif.apply(null, arguments)
  },
  dynCall_iiiiiiif = Module.dynCall_iiiiiiif = function() {
      return Module.asm.dynCall_iiiiiiif.apply(null, arguments)
  },
  dynCall_iiiiiif = Module.dynCall_iiiiiif = function() {
      return Module.asm.dynCall_iiiiiif.apply(null, arguments)
  },
  dynCall_iiiiiiiiiii = Module.dynCall_iiiiiiiiiii = function() {
      return Module.asm.dynCall_iiiiiiiiiii.apply(null, arguments)
  },
  dynCall_iiiff = Module.dynCall_iiiff = function() {
      return Module.asm.dynCall_iiiff.apply(null, arguments)
  },
  dynCall_viiiiii = Module.dynCall_viiiiii = function() {
      return Module.asm.dynCall_viiiiii.apply(null, arguments)
  },
  dynCall_viij = Module.dynCall_viij = function() {
      return Module.asm.dynCall_viij.apply(null, arguments)
  },
  dynCall_iiiiiiiiiiii = Module.dynCall_iiiiiiiiiiii = function() {
      return Module.asm.dynCall_iiiiiiiiiiii.apply(null, arguments)
  },
  dynCall_viiiiiii = Module.dynCall_viiiiiii = function() {
      return Module.asm.dynCall_viiiiiii.apply(null, arguments)
  },
  dynCall_vij = Module.dynCall_vij = function() {
      return Module.asm.dynCall_vij.apply(null, arguments)
  },
  dynCall_fi = Module.dynCall_fi = function() {
      return Module.asm.dynCall_fi.apply(null, arguments)
  },
  dynCall_viif = Module.dynCall_viif = function() {
      return Module.asm.dynCall_viif.apply(null, arguments)
  },
  dynCall_vif = Module.dynCall_vif = function() {
      return Module.asm.dynCall_vif.apply(null, arguments)
  },
  dynCall_viifi = Module.dynCall_viifi = function() {
      return Module.asm.dynCall_viifi.apply(null, arguments)
  },
  dynCall_iiiiifiii = Module.dynCall_iiiiifiii = function() {
      return Module.asm.dynCall_iiiiifiii.apply(null, arguments)
  },
  dynCall_iiiifiii = Module.dynCall_iiiifiii = function() {
      return Module.asm.dynCall_iiiifiii.apply(null, arguments)
  },
  dynCall_iif = Module.dynCall_iif = function() {
      return Module.asm.dynCall_iif.apply(null, arguments)
  },
  dynCall_jiji = Module.dynCall_jiji = function() {
      return Module.asm.dynCall_jiji.apply(null, arguments)
  },
  dynCall_iidiiii = Module.dynCall_iidiiii = function() {
      return Module.asm.dynCall_iidiiii.apply(null, arguments)
  },
  dynCall_viijii = Module.dynCall_viijii = function() {
      return Module.asm.dynCall_viijii.apply(null, arguments)
  },
  dynCall_iiiiij = Module.dynCall_iiiiij = function() {
      return Module.asm.dynCall_iiiiij.apply(null, arguments)
  },
  dynCall_iiiiid = Module.dynCall_iiiiid = function() {
      return Module.asm.dynCall_iiiiid.apply(null, arguments)
  },
  dynCall_iiiiijj = Module.dynCall_iiiiijj = function() {
      return Module.asm.dynCall_iiiiijj.apply(null, arguments)
  },
  dynCall_iiiiiijj = Module.dynCall_iiiiiijj = function() {
      return Module.asm.dynCall_iiiiiijj.apply(null, arguments)
  };

function ExitStatus(status) {
  this.name = "ExitStatus", this.message = "Program terminated with exit(" + status + ")", this.status = status
}

function run(args) {
  function doRun() {
      calledRun || (calledRun = !0, ABORT || (initRuntime(), preMain(), Module.onRuntimeInitialized && Module.onRuntimeInitialized(), postRun()))
  }
  args = args || arguments_, runDependencies > 0 || (preRun(), runDependencies > 0 || (Module.setStatus ? (Module.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
          Module.setStatus("")
      }, 1), doRun()
  }, 1)) : doRun()))
}
if (Module.asm = asm, Module.cwrap = cwrap, dependenciesFulfilled = function runCaller() {
      calledRun || run(), calledRun || (dependenciesFulfilled = runCaller)
  }, Module.run = run, Module.preInit)
  for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); Module.preInit.length > 0;) Module.preInit.pop()();
noExitRuntime = !0, run();