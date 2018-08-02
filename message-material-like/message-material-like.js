/*!***************************************************
 * form-components v0.13.2
 * https://github.com/julmot/form-components
 * Copyright (c) 2017–2018, Julian Kühnel
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
eval("/*!\n * MoveTo - A lightweight scroll animation javascript library without any dependency.\n * Version 1.7.3 (03-05-2018 10:05)\n * Licensed under MIT\n * Copyright 2018 Hasan Aydoğdu <hsnaydd@gmail.com>\n */\n\n\nvar MoveTo = function () {\n  /**\n                           * Defaults\n                           * @type {object}\n                           */\n  var defaults = {\n    tolerance: 0,\n    duration: 800,\n    easing: 'easeOutQuart',\n    callback: function callback() {} };\n\n\n  /**\n                                         * easeOutQuart Easing Function\n                                         * @param  {number} t - current time\n                                         * @param  {number} b - start value\n                                         * @param  {number} c - change in value\n                                         * @param  {number} d - duration\n                                         * @return {number} - calculated value\n                                         */\n  function easeOutQuart(t, b, c, d) {\n    t /= d;\n    t--;\n    return -c * (t * t * t * t - 1) + b;\n  }\n\n  /**\n     * Merge two object\n     *\n     * @param  {object} obj1\n     * @param  {object} obj2\n     * @return {object} merged object\n     */\n  function mergeObject(obj1, obj2) {\n    var obj3 = {};\n    Object.keys(obj1).forEach(function (propertyName) {\n      obj3[propertyName] = obj1[propertyName];\n    });\n\n    Object.keys(obj2).forEach(function (propertyName) {\n      obj3[propertyName] = obj2[propertyName];\n    });\n    return obj3;\n  };\n\n  /**\n      * Converts camel case to kebab case\n      * @param  {string} val the value to be converted\n      * @return {string} the converted value\n      */\n  function kebabCase(val) {\n    return val.replace(/([A-Z])/g, function ($1) {\n      return '-' + $1.toLowerCase();\n    });\n  };\n\n  /**\n      * MoveTo Constructor\n      * @param {object} options Options\n      * @param {object} easeFunctions Custom ease functions\n      */\n  function MoveTo() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    this.options = mergeObject(defaults, options);\n    this.easeFunctions = mergeObject({ easeOutQuart: easeOutQuart }, easeFunctions);\n  }\n\n  /**\n     * Register a dom element as trigger\n     * @param  {HTMLElement} dom Dom trigger element\n     * @param  {function} callback Callback function\n     * @return {function|void} unregister function\n     */\n  MoveTo.prototype.registerTrigger = function (dom, callback) {var _this = this;\n    if (!dom) {\n      return;\n    }\n\n    var href = dom.getAttribute('href') || dom.getAttribute('data-target');\n    // The element to be scrolled\n    var target = href && href !== '#' ?\n    document.getElementById(href.substring(1)) :\n    document.body;\n    var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));\n\n    if (typeof callback === 'function') {\n      options.callback = callback;\n    }\n\n    var listener = function listener(e) {\n      e.preventDefault();\n      _this.move(target, options);\n    };\n\n    dom.addEventListener('click', listener, false);\n\n    return function () {return dom.removeEventListener('click', listener, false);};\n  };\n\n  /**\n      * Move\n      * Scrolls to given element by using easeOutQuart function\n      * @param  {HTMLElement|number} target Target element to be scrolled or target position\n      * @param  {object} options Custom options\n      */\n  MoveTo.prototype.move = function (target) {var _this2 = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    if (target !== 0 && !target) {\n      return;\n    }\n\n    options = mergeObject(this.options, options);\n\n    var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;\n    var from = window.pageYOffset;\n    var startTime = null;\n    var lastPageYOffset = void 0;\n    distance -= options.tolerance;\n\n    // rAF loop\n    var loop = function loop(currentTime) {\n      var currentPageYOffset = window.pageYOffset;\n\n      if (!startTime) {\n        // To starts time from 1, we subtracted 1 from current time\n        // If time starts from 1 The first loop will not do anything,\n        // because easing value will be zero\n        startTime = currentTime - 1;\n      }\n\n      var timeElapsed = currentTime - startTime;\n\n      if (lastPageYOffset) {\n        if (\n        distance > 0 && lastPageYOffset > currentPageYOffset ||\n        distance < 0 && lastPageYOffset < currentPageYOffset)\n        {\n          return options.callback(target);\n        }\n      }\n      lastPageYOffset = currentPageYOffset;\n\n      var val = _this2.easeFunctions[options.easing](\n      timeElapsed, from, distance, options.duration);\n\n\n      window.scroll(0, val);\n\n      if (timeElapsed < options.duration) {\n        window.requestAnimationFrame(loop);\n      } else {\n        window.scroll(0, distance + from);\n        options.callback(target);\n      }\n    };\n\n    window.requestAnimationFrame(loop);\n  };\n\n  /**\n      * Adds custom ease function\n      * @param {string}   name Ease function name\n      * @param {function} fn   Ease function\n      */\n  MoveTo.prototype.addEaseFunction = function (name, fn) {\n    this.easeFunctions[name] = fn;\n  };\n\n  /**\n      * Returns options which created from trigger dom element\n      * @param  {HTMLElement} dom Trigger dom element\n      * @param  {object} options The instance's options\n      * @return {object} The options which created from trigger dom element\n      */\n  function _getOptionsFromTriggerDom(dom, options) {\n    var domOptions = {};\n\n    Object.keys(options).forEach(function (key) {\n      var value = dom.getAttribute('data-mt-' + kebabCase(key));\n      if (value) {\n        domOptions[key] = isNaN(value) ? value : parseInt(value, 10);\n      }\n    });\n    return domOptions;\n  }\n\n  return MoveTo;\n}();\n\nif (true) {\n  module.exports = MoveTo;\n} else {}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/moveto/dist/moveTo.js?");

/***/ }),

/***/ "./src/components/message/message-material-like/message-material-like-bundle.js":
/*!**************************************************************************************!*\
  !*** ./src/components/message/message-material-like/message-material-like-bundle.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _messageMaterialLike = __webpack_require__(/*! ./message-material-like */ \"./src/components/message/message-material-like/message-material-like.js\");\n\nObject.keys(_messageMaterialLike).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _messageMaterialLike[key];\n    }\n  });\n});\n\n__webpack_require__(/*! ./message-material-like.scss */ \"./src/components/message/message-material-like/message-material-like.scss\");\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/message/message-material-like/message-material-like-bundle.js?");

/***/ }),

/***/ "./src/components/message/message-material-like/message-material-like.js":
/*!*******************************************************************************!*\
  !*** ./src/components/message/message-material-like/message-material-like.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.selector = exports.Message = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _moveto = __webpack_require__(/*! moveto */ \"./node_modules/moveto/dist/moveTo.js\");\n\nvar _moveto2 = _interopRequireDefault(_moveto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Message = exports.Message = function () {\n  function Message(context, options) {\n    _classCallCheck(this, Message);\n\n    this.options = Object.assign({}, {\n      focusOnStart: true,\n      debug: true\n    }, options);\n    this.message = context;\n    this.messages = [].concat(_toConsumableArray(document.querySelectorAll(selector)));\n    this.closeButton = context.querySelector('.message__close-button');\n    this.determineInlineMessage();\n    this.initCloseButton();\n    this.focusFirstMessage();\n    if (this.options.debug) {\n      console.debug('Message initialized');\n    }\n  }\n\n  _createClass(Message, [{\n    key: 'determineInlineMessage',\n    value: function determineInlineMessage() {\n      // check if the parent element of the message (or the parents parent in case\n      // one div is wrapped our) is matching the <main> tag. Otherwise we can\n      // assume it's an inline message\n      var parent = this.message.parentElement;\n      if (parent) {\n        if (parent.nodeName !== 'MAIN' && parent.nodeName !== 'BODY') {\n          var parentParent = parent.parentElement;\n          if (parentParent && parentParent.nodeName !== 'MAIN') {\n            if (parentParent.nodeName !== 'BODY') {\n              this.message.classList.add('is-inline');\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: 'initCloseButton',\n    value: function initCloseButton() {\n      var _this = this;\n\n      if (this.closeButton) {\n        // set role button if not available already\n        if (!this.closeButton.hasAttribute('role')) {\n          this.closeButton.setAttribute('role', 'button');\n        }\n        this.closeButton.addEventListener('click', function () {\n          return _this.hide();\n        });\n        this.closeButton.addEventListener('keydown', function (event) {\n          if (event.keyCode === 13) {\n            event.preventDefault(); // in case message is located in a <form>\n            _this.hide();\n          }\n        });\n        if (this.message.classList.contains('is-hidden')) {\n          this.hide(); // make sure tabindex is correctly\n        }\n      }\n    }\n  }, {\n    key: 'focusFirstMessage',\n    value: function focusFirstMessage() {\n      var _this2 = this;\n\n      if (this.messages[0] === this.message && this.options.focusOnStart) {\n        if (!this.message.classList.contains('is-hidden')) {\n          // the browser focuses the document on init by default. Wait for it\n          // with setTimeout and focus the message instead. Also, remove and add\n          // the class otherwise the browser won't focus the message since it's\n          // not focusable by default (has no tabindex)\n          this.message.classList.add('is-hidden');\n          setTimeout(function () {\n            _this2.message.classList.remove('is-hidden');\n            _this2.message.focus();\n            new _moveto2.default({\n              duration: 400,\n              tolerance: 10\n            }).move(_this2.message);\n          }, 100);\n        }\n      }\n    }\n  }, {\n    key: 'hide',\n    value: function hide() {\n      this.message.classList.add('is-hidden');\n      this.closeButton.setAttribute('tabindex', '-1');\n      // in case it was focused and there's a custom focus library like flying\n      // focus that still highlights the now hidden button\n      this.closeButton.blur();\n    }\n  }]);\n\n  return Message;\n}();\n\nvar selector = exports.selector = '[class^=\"message--\"]';\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/message/message-material-like/message-material-like.js?");

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