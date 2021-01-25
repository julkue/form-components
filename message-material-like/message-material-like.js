/*!***************************************************
 * form-components v1.1.3
 * https://github.com/julmot/form-components
 * Copyright (c) 2017–2021, Julian Kühnel
 * Released under the MIT license https://git.io/v5XLY
 *****************************************************/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["message-material-like"] = factory();
	else
		root["message-material-like"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/message/message-material-like/message-material-like-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moveto/dist/moveTo.js":
/*!********************************************!*\
  !*** ./node_modules/moveto/dist/moveTo.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * MoveTo - A lightweight scroll animation javascript library without any dependency.\n * Version 1.8.2 (28-06-2019 14:30)\n * Licensed under MIT\n * Copyright 2019 Hasan Aydoğdu <hsnaydd@gmail.com>\n */\n\n\n\nvar MoveTo = function () {\n  /**\n   * Defaults\n   * @type {object}\n   */\n  var defaults = {\n    tolerance: 0,\n    duration: 800,\n    easing: 'easeOutQuart',\n    container: window,\n    callback: function callback() {}\n  };\n  /**\n   * easeOutQuart Easing Function\n   * @param  {number} t - current time\n   * @param  {number} b - start value\n   * @param  {number} c - change in value\n   * @param  {number} d - duration\n   * @return {number} - calculated value\n   */\n\n  function easeOutQuart(t, b, c, d) {\n    t /= d;\n    t--;\n    return -c * (t * t * t * t - 1) + b;\n  }\n  /**\n   * Merge two object\n   *\n   * @param  {object} obj1\n   * @param  {object} obj2\n   * @return {object} merged object\n   */\n\n\n  function mergeObject(obj1, obj2) {\n    var obj3 = {};\n    Object.keys(obj1).forEach(function (propertyName) {\n      obj3[propertyName] = obj1[propertyName];\n    });\n    Object.keys(obj2).forEach(function (propertyName) {\n      obj3[propertyName] = obj2[propertyName];\n    });\n    return obj3;\n  }\n\n  ;\n  /**\n   * Converts camel case to kebab case\n   * @param  {string} val the value to be converted\n   * @return {string} the converted value\n   */\n\n  function kebabCase(val) {\n    return val.replace(/([A-Z])/g, function ($1) {\n      return '-' + $1.toLowerCase();\n    });\n  }\n\n  ;\n  /**\n   * Count a number of item scrolled top\n   * @param  {Window|HTMLElement} container\n   * @return {number}\n   */\n\n  function countScrollTop(container) {\n    if (container instanceof HTMLElement) {\n      return container.scrollTop;\n    }\n\n    return container.pageYOffset;\n  }\n\n  ;\n  /**\n   * MoveTo Constructor\n   * @param {object} options Options\n   * @param {object} easeFunctions Custom ease functions\n   */\n\n  function MoveTo() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    this.options = mergeObject(defaults, options);\n    this.easeFunctions = mergeObject({\n      easeOutQuart: easeOutQuart\n    }, easeFunctions);\n  }\n  /**\n   * Register a dom element as trigger\n   * @param  {HTMLElement} dom Dom trigger element\n   * @param  {function} callback Callback function\n   * @return {function|void} unregister function\n   */\n\n\n  MoveTo.prototype.registerTrigger = function (dom, callback) {\n    var _this = this;\n\n    if (!dom) {\n      return;\n    }\n\n    var href = dom.getAttribute('href') || dom.getAttribute('data-target'); // The element to be scrolled\n\n    var target = href && href !== '#' ? document.getElementById(href.substring(1)) : document.body;\n    var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));\n\n    if (typeof callback === 'function') {\n      options.callback = callback;\n    }\n\n    var listener = function listener(e) {\n      e.preventDefault();\n\n      _this.move(target, options);\n    };\n\n    dom.addEventListener('click', listener, false);\n    return function () {\n      return dom.removeEventListener('click', listener, false);\n    };\n  };\n  /**\n   * Move\n   * Scrolls to given element by using easeOutQuart function\n   * @param  {HTMLElement|number} target Target element to be scrolled or target position\n   * @param  {object} options Custom options\n   */\n\n\n  MoveTo.prototype.move = function (target) {\n    var _this2 = this;\n\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    if (target !== 0 && !target) {\n      return;\n    }\n\n    options = mergeObject(this.options, options);\n    var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;\n    var from = countScrollTop(options.container);\n    var startTime = null;\n    var lastYOffset;\n    distance -= options.tolerance; // rAF loop\n\n    var loop = function loop(currentTime) {\n      var currentYOffset = countScrollTop(_this2.options.container);\n\n      if (!startTime) {\n        // To starts time from 1, we subtracted 1 from current time\n        // If time starts from 1 The first loop will not do anything,\n        // because easing value will be zero\n        startTime = currentTime - 1;\n      }\n\n      var timeElapsed = currentTime - startTime;\n\n      if (lastYOffset) {\n        if (distance > 0 && lastYOffset > currentYOffset || distance < 0 && lastYOffset < currentYOffset) {\n          return options.callback(target);\n        }\n      }\n\n      lastYOffset = currentYOffset;\n\n      var val = _this2.easeFunctions[options.easing](timeElapsed, from, distance, options.duration);\n\n      options.container.scroll(0, val);\n\n      if (timeElapsed < options.duration) {\n        window.requestAnimationFrame(loop);\n      } else {\n        options.container.scroll(0, distance + from);\n        options.callback(target);\n      }\n    };\n\n    window.requestAnimationFrame(loop);\n  };\n  /**\n   * Adds custom ease function\n   * @param {string}   name Ease function name\n   * @param {function} fn   Ease function\n   */\n\n\n  MoveTo.prototype.addEaseFunction = function (name, fn) {\n    this.easeFunctions[name] = fn;\n  };\n  /**\n   * Returns options which created from trigger dom element\n   * @param  {HTMLElement} dom Trigger dom element\n   * @param  {object} options The instance's options\n   * @return {object} The options which created from trigger dom element\n   */\n\n\n  function _getOptionsFromTriggerDom(dom, options) {\n    var domOptions = {};\n    Object.keys(options).forEach(function (key) {\n      var value = dom.getAttribute(\"data-mt-\".concat(kebabCase(key)));\n\n      if (value) {\n        domOptions[key] = isNaN(value) ? value : parseInt(value, 10);\n      }\n    });\n    return domOptions;\n  }\n\n  return MoveTo;\n}();\n\nif (true) {\n  module.exports = MoveTo;\n} else {}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/moveto/dist/moveTo.js?");

/***/ }),

/***/ "./src/components/message/message-material-like/message-material-like-bundle.js":
/*!**************************************************************************************!*\
  !*** ./src/components/message/message-material-like/message-material-like-bundle.js ***!
  \**************************************************************************************/
/*! exports provided: Message, selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _message_material_like_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-material-like.scss */ \"./src/components/message/message-material-like/message-material-like.scss\");\n/* harmony import */ var _message_material_like_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_message_material_like_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _message_material_like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-material-like */ \"./src/components/message/message-material-like/message-material-like.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return _message_material_like__WEBPACK_IMPORTED_MODULE_1__[\"Message\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return _message_material_like__WEBPACK_IMPORTED_MODULE_1__[\"selector\"]; });\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/message/message-material-like/message-material-like-bundle.js?");

/***/ }),

/***/ "./src/components/message/message-material-like/message-material-like.js":
/*!*******************************************************************************!*\
  !*** ./src/components/message/message-material-like/message-material-like.js ***!
  \*******************************************************************************/
/*! exports provided: Message, selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return selector; });\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ \"./node_modules/moveto/dist/moveTo.js\");\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Message = /*#__PURE__*/function () {\n  function Message(context, options) {\n    _classCallCheck(this, Message);\n\n    this.options = Object.assign({}, {\n      focusOnStart: true,\n      debug: true\n    }, options);\n    this.message = context;\n    this.messages = _toConsumableArray(document.querySelectorAll(selector));\n    this.closeButton = context.querySelector('.message__close-button');\n    this.determineInlineMessage();\n    this.initCloseButton();\n    this.focusFirstMessage();\n\n    if (this.options.debug) {\n      console.debug('Message initialized');\n    }\n  }\n\n  _createClass(Message, [{\n    key: \"determineInlineMessage\",\n    value: function determineInlineMessage() {\n      // check if the parent element of the message (or the parents parent in case\n      // one div is wrapped our) is matching the <main> tag. Otherwise we can\n      // assume it's an inline message\n      var parent = this.message.parentElement;\n\n      if (parent) {\n        if (parent.nodeName !== 'MAIN' && parent.nodeName !== 'BODY') {\n          var parentParent = parent.parentElement;\n\n          if (parentParent && parentParent.nodeName !== 'MAIN') {\n            if (parentParent.nodeName !== 'BODY') {\n              this.message.classList.add('is-inline');\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"initCloseButton\",\n    value: function initCloseButton() {\n      var _this = this;\n\n      if (this.closeButton) {\n        // set role button if not available already\n        if (!this.closeButton.hasAttribute('role')) {\n          this.closeButton.setAttribute('role', 'button');\n        }\n\n        this.closeButton.addEventListener('click', function () {\n          return _this.hide();\n        });\n        this.closeButton.addEventListener('keydown', function (event) {\n          if (event.keyCode === 13) {\n            event.preventDefault(); // in case message is located in a <form>\n\n            _this.hide();\n          }\n        });\n\n        if (this.message.classList.contains('is-hidden')) {\n          this.hide(); // make sure tabindex is correctly\n        }\n      }\n    }\n  }, {\n    key: \"focusFirstMessage\",\n    value: function focusFirstMessage() {\n      var _this2 = this;\n\n      if (this.messages[0] === this.message && this.options.focusOnStart) {\n        if (!this.message.classList.contains('is-hidden')) {\n          // the browser focuses the document on init by default. Wait for it\n          // with setTimeout and focus the message instead. Also, remove and add\n          // the class otherwise the browser won't focus the message since it's\n          // not focusable by default (has no tabindex)\n          this.message.classList.add('is-hidden');\n          setTimeout(function () {\n            _this2.message.classList.remove('is-hidden');\n\n            _this2.message.focus();\n\n            new moveto__WEBPACK_IMPORTED_MODULE_0___default.a({\n              duration: 400,\n              tolerance: 10\n            }).move(_this2.message);\n          }, 100);\n        }\n      }\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.message.classList.add('is-hidden');\n      this.closeButton.setAttribute('tabindex', '-1'); // in case it was focused and there's a custom focus library like flying\n      // focus that still highlights the now hidden button\n\n      this.closeButton.blur();\n    }\n  }]);\n\n  return Message;\n}();\nvar selector = '[class^=\"message--\"]';\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/message/message-material-like/message-material-like.js?");

/***/ }),

/***/ "./src/components/message/message-material-like/message-material-like.scss":
/*!*********************************************************************************!*\
  !*** ./src/components/message/message-material-like/message-material-like.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/message/message-material-like/message-material-like.scss?");

/***/ })

/******/ });
});