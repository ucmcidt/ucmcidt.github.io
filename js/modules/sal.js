"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = function __commonJS(cb, mod) {
    return function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
        exports: {}
      }).exports, mod), mod.exports;
    };
  };

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>": function stdin(exports, module) {
      !function (e, t) {
        "object" == _typeof(exports) && "object" == _typeof(module) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == _typeof(exports) ? exports.sal = t() : e.sal = t();
      }(exports, function () {
        return function () {
          "use strict";

          var e = {
              d: function d(t2, n2) {
                for (var r2 in n2) e.o(n2, r2) && !e.o(t2, r2) && Object.defineProperty(t2, r2, {
                  enumerable: true,
                  get: n2[r2]
                });
              },
              o: function o(e2, t2) {
                return Object.prototype.hasOwnProperty.call(e2, t2);
              }
            },
            t = {};
          function n(e2, t2) {
            var n2 = Object.keys(e2);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(e2);
              t2 && (r2 = r2.filter(function (t3) {
                return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          function r(e2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var r2 = null != arguments[t2] ? arguments[t2] : {};
              t2 % 2 ? n(Object(r2), true).forEach(function (t3) {
                o(e2, t3, r2[t3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : n(Object(r2)).forEach(function (t3) {
                Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
              });
            }
            return e2;
          }
          function o(e2, t2, n2) {
            return t2 in e2 ? Object.defineProperty(e2, t2, {
              value: n2,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e2[t2] = n2, e2;
          }
          e.d(t, {
            "default": function _default() {
              return j;
            }
          });
          var a = "Sal was not initialised! Probably it is used in SSR.",
            s = "Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",
            i = {
              root: null,
              rootMargin: "0% 50%",
              threshold: 0.5,
              animateClassName: "sal-animate",
              disabledClassName: "sal-disabled",
              enterEventName: "sal:in",
              exitEventName: "sal:out",
              selector: "[data-sal]",
              once: true,
              disabled: false
            },
            l = [],
            c = null,
            u = function u(e2) {
              e2 && e2 !== i && (i = r(r({}, i), e2));
            },
            d = function d(e2) {
              e2.classList.remove(i.animateClassName);
            },
            f = function f(e2, t2) {
              var n2 = new CustomEvent(e2, {
                bubbles: true,
                detail: t2
              });
              t2.target.dispatchEvent(n2);
            },
            b = function b() {
              document.body.classList.add(i.disabledClassName);
            },
            p = function p() {
              c.disconnect(), c = null;
            },
            m = function m() {
              return i.disabled || "function" == typeof i.disabled && i.disabled();
            },
            v = function v(e2, t2) {
              e2.forEach(function (e3) {
                var n2 = e3.target,
                  r2 = void 0 !== n2.dataset.salRepeat,
                  o2 = void 0 !== n2.dataset.salOnce,
                  a2 = r2 || !(o2 || i.once);
                e3.intersectionRatio >= i.threshold ? (function (e4) {
                  e4.target.classList.add(i.animateClassName), f(i.enterEventName, e4);
                }(e3), a2 || t2.unobserve(n2)) : a2 && function (e4) {
                  d(e4.target), f(i.exitEventName, e4);
                }(e3);
              });
            },
            y = function y() {
              var e2 = [].filter.call(document.querySelectorAll(i.selector), function (e3) {
                return !function (e4) {
                  return e4.classList.contains(i.animateClassName);
                }(e3, i.animateClassName);
              });
              return e2.forEach(function (e3) {
                return c.observe(e3);
              }), e2;
            },
            O = function O() {
              b(), p();
            },
            h = function h() {
              document.body.classList.remove(i.disabledClassName), c = new IntersectionObserver(v, {
                root: i.root,
                rootMargin: i.rootMargin,
                threshold: i.threshold
              }), l = y();
            },
            g = function g() {
              var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              p(), Array.from(document.querySelectorAll(i.selector)).forEach(d), u(e2), h();
            },
            w = function w() {
              var e2 = y();
              l.push(e2);
            };
          var j = function j() {
            var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
            if (u(e2), "undefined" == typeof window) return console.warn(a), {
              elements: l,
              disable: O,
              enable: h,
              reset: g,
              update: w
            };
            if (!window.IntersectionObserver) throw b(), Error(s);
            return m() ? b() : h(), {
              elements: l,
              disable: O,
              enable: h,
              reset: g,
              update: w
            };
          };
          return t["default"];
        }();
      });
    }
  });
  require_stdin();
})();
