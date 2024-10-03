"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  // <stdin>
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
  var stdin_default = MobileMenu;
})();
