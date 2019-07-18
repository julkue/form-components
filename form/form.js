/*!***************************************************
 * form-components v0.14.0
 * https://github.com/julmot/form-components
 * Copyright (c) 2017–2019, Julian Kühnel
 * Released under the MIT license https://git.io/v5XLY
 *****************************************************/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory();
	else
		root["form"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/form/form-bundle.js");
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

/***/ "./src/components/form/form-bundle.js":
/*!********************************************!*\
  !*** ./src/components/form/form-bundle.js ***!
  \********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/components/form/form.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return _form__WEBPACK_IMPORTED_MODULE_0__[\"Form\"]; });\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/form/form-bundle.js?");

/***/ }),

/***/ "./src/components/form/form.js":
/*!*************************************!*\
  !*** ./src/components/form/form.js ***!
  \*************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ \"./node_modules/moveto/dist/moveTo.js\");\n/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Form =\n/*#__PURE__*/\nfunction () {\n  function Form(form, options) {\n    _classCallCheck(this, Form);\n\n    if (form) {\n      this.form = form;\n      this.message = this.form.querySelector('.message--error');\n      this.options = Object.assign({}, {\n        message: true,\n        focusMessage: true,\n        onValid: function onValid() {},\n        onInvalid: function onInvalid() {}\n      }, options);\n      this.initEvents();\n    }\n  }\n\n  _createClass(Form, [{\n    key: \"initEvents\",\n    value: function initEvents() {\n      var _this = this;\n\n      this.form.setAttribute('novalidate', '');\n      this.form.addEventListener('submit', function (event) {\n        var valid = true;\n\n        _this.formElements.forEach(function (field) {\n          // validate with browser's rules\n          if (!field.checkValidity()) {\n            valid = false;\n\n            _this.createError(field);\n\n            _this.setInvalid(field);\n          } else {\n            _this.removeError(field);\n\n            _this.setValid(field);\n          }\n        });\n\n        if (!valid) {\n          event.preventDefault();\n\n          _this.showMessage();\n\n          _this.options.onInvalid(event);\n\n          return false;\n        } else {\n          _this.hideMessage();\n\n          _this.options.onValid(event);\n\n          return true;\n        }\n      });\n      this.form.addEventListener('reset', function () {\n        _this.formElements.forEach(function (field) {\n          _this.removeError(field);\n\n          _this.setValid(field);\n\n          var ev = document.createEvent('CustomEvent');\n          ev.initCustomEvent('fieldReset', true, true, {});\n          field.dispatchEvent(ev);\n        });\n\n        _this.hideMessage();\n      });\n    }\n  }, {\n    key: \"setInvalid\",\n    value: function setInvalid(field) {\n      var target = field.parentElement.parentElement;\n\n      if (target) {\n        target.classList.add('is-invalid');\n        target.setAttribute('aria-invalid', 'true');\n      }\n    }\n  }, {\n    key: \"setValid\",\n    value: function setValid(field) {\n      var target = field.parentElement.parentElement;\n\n      if (target) {\n        target.classList.remove('is-invalid');\n        target.removeAttribute('aria-invalid');\n      }\n    }\n  }, {\n    key: \"getType\",\n    value: function getType(element) {\n      if (element.tagName === 'SELECT') {\n        return 'select';\n      } else if (element.tagName === 'TEXTAREA') {\n        return 'text-area';\n      }\n\n      switch (element.getAttribute('type')) {\n        case 'checkbox':\n          return 'checkbox';\n\n        case 'radio':\n          return 'radio';\n\n        default:\n          return 'text-field';\n      }\n    }\n  }, {\n    key: \"getExistingError\",\n    value: function getExistingError(field) {\n      var type = this.getType(field);\n      var element;\n\n      if (type !== 'radio') {\n        element = field;\n      } else {\n        element = this.getLastRadio(field.name);\n      }\n\n      return element.parentElement.parentElement.querySelector(\".\".concat(type, \"__error\"));\n    }\n  }, {\n    key: \"getLastRadio\",\n    value: function getLastRadio(name) {\n      var ret = null;\n\n      _toConsumableArray(this.form.querySelectorAll(\"input[type=\\\"radio\\\"][name=\\\"\".concat(name, \"\\\"]\"))).forEach(function (field, idx, items) {\n        if (idx === items.length - 1) {\n          ret = field;\n        }\n      });\n\n      return ret;\n    }\n  }, {\n    key: \"createError\",\n    value: function createError(field) {\n      var type = this.getType(field);\n      var error = this.getExistingError(field);\n\n      if (!error) {\n        error = document.createElement('div');\n        error.classList.add(\"\".concat(type, \"__error\"));\n        var target = null,\n            insertBefore = null;\n\n        if (type !== 'radio') {\n          var next = field.parentElement.nextSibling,\n              dropdown = field.parentElement.nextElementSibling;\n\n          if (dropdown && dropdown.classList.contains('select__dropdown')) {\n            next = dropdown.nextSibling; // insert after dropdown\n          }\n\n          target = field.parentElement.parentElement;\n          insertBefore = next;\n        } else {\n          var radio = this.getLastRadio(field.name);\n          target = radio.parentElement.parentElement;\n          insertBefore = radio.parentElement.nextSibling;\n        }\n\n        target.insertBefore(error, insertBefore);\n      }\n\n      this.setErrorDescribedBy(field, error);\n      error.innerText = field.validationMessage || 'Please fill out this field';\n    }\n  }, {\n    key: \"setErrorDescribedBy\",\n    value: function setErrorDescribedBy(field, error) {\n      var id;\n\n      if (error.hasAttribute('id')) {\n        id = error.getAttribute('id');\n      } else {\n        if (field.hasAttribute('id')) {\n          id = \"error-\".concat(field.getAttribute('id'));\n        } else if (field.hasAttribute('name')) {\n          id = \"error-\".concat(field.getAttribute('name'));\n        }\n      }\n\n      if (id) {\n        error.setAttribute('id', id);\n        field.setAttribute('aria-describedby', id);\n      }\n    }\n  }, {\n    key: \"removeErrorDescribedBy\",\n    value: function removeErrorDescribedBy(field) {\n      field.removeAttribute('aria-describedby');\n    }\n  }, {\n    key: \"removeError\",\n    value: function removeError(field) {\n      var type = this.getType(field),\n          target = field.parentElement.parentElement,\n          error = target.querySelector(\".\".concat(type, \"__error\"));\n\n      if (error) {\n        target.removeChild(error);\n        this.removeErrorDescribedBy(field);\n      }\n    }\n  }, {\n    key: \"showMessage\",\n    value: function showMessage() {\n      if (this.message && this.options.message) {\n        var messageClose = this.message.querySelector('.message__close-button'); // Remove the role temporarily in order to notify the screen reader that\n        // this is a new notification and he should read it\n\n        var role = this.message.getAttribute('role');\n        this.message.removeAttribute('role');\n        this.message.classList.remove('is-hidden');\n\n        if (messageClose) {\n          messageClose.setAttribute('tabindex', '0');\n        }\n\n        if (this.options.focusMessage) {\n          new moveto__WEBPACK_IMPORTED_MODULE_0___default.a({\n            duration: 400,\n            tolerance: 10\n          }).move(this.message);\n        }\n\n        this.message.setAttribute('role', role);\n      }\n    }\n  }, {\n    key: \"hideMessage\",\n    value: function hideMessage() {\n      if (this.message && this.options.message) {\n        var messageClose = this.message.querySelector('.message__close-button');\n        this.message.classList.add('is-hidden');\n\n        if (messageClose) {\n          messageClose.setAttribute('tabindex', '-1');\n        }\n      }\n    }\n  }, {\n    key: \"formElements\",\n    get: function get() {\n      return _toConsumableArray(this.form.querySelectorAll(['[class^=\"text-field--\"] .text-field__input', '[class^=\"text-area--\"] .text-area__input', '[class^=\"select--\"] .select__select', '[class^=\"radio--\"] .radio__input', '[class^=\"checkbox--\"] .checkbox__input'].join(',')));\n    }\n  }]);\n\n  return Form;\n}();\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/form/form.js?");

/***/ })

/******/ });
});