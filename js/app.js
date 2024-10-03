"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = function __commonJS(cb, mod) {
    return function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
        exports: {}
      }).exports, mod), mod.exports;
    };
  };
  var __copyProps = function __copyProps(to, from, except, desc) {
    if (from && _typeof(from) === "object" || typeof from === "function") {
      var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
        _step;
      try {
        var _loop = function _loop() {
          var key = _step.value;
          if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: function get() {
              return from[key];
            },
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return to;
  };
  var __toESM = function __toESM(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
      value: mod,
      enumerable: true
    }) : target, mod);
  };

  // node_modules/sal.js/dist/sal.js
  var require_sal = __commonJS({
    "node_modules/sal.js/dist/sal.js": function node_modulesSalJsDistSalJs(exports, module) {
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

  // ns-hugo:C:\Users\anton\ownCloud\Others\UCMCIDT_webpage\cidt\assets\js\modules\_mobileMenu.js
  var MobileMenu = /*#__PURE__*/function () {
    function MobileMenu() {
      _classCallCheck(this, MobileMenu);
      this.menuIcon = document.querySelector(".menu__menu_icon");
      this.menuContent = document.querySelector(".menu__content");
      this.menuContentLinks = document.querySelectorAll(".menu__content a");
      this.siteHeader = document.querySelector(".menu");
      this.events();
    }
    //link the events with the functions
    _createClass(MobileMenu, [{
      key: "events",
      value: function events() {
        var _this = this;
        this.menuIcon.addEventListener("click", this.toggleTheMenu.bind(this));
        this.menuContentLinks.forEach(function (link) {
          return link.addEventListener("click", _this.toggleTheMenu.bind(_this));
        });
      }
    }, {
      key: "toggleTheMenu",
      value: function toggleTheMenu() {
        this.menuContent.classList.toggle("menu__content--is-visible");
        this.siteHeader.classList.toggle("menu--is-expanded");
        this.menuIcon.classList.toggle("menu__menu_icon--close-x");
      }
    }]);
    return MobileMenu;
  }();
  var mobileMenu_default = MobileMenu;

  // <stdin>
  var import_sal = __toESM(require_sal());
  new mobileMenu_default();
  (0, import_sal["default"])();
})();
