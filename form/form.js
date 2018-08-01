/*!***************************************************
 * form-components v0.13.1
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
eval("/*!\n * MoveTo - A lightweight scroll animation javascript library without any dependency.\n * Version 1.7.3 (03-05-2018 10:05)\n * Licensed under MIT\n * Copyright 2018 Hasan Aydoğdu <hsnaydd@gmail.com>\n */\n\n\nvar MoveTo = function () {\n  /**\n                           * Defaults\n                           * @type {object}\n                           */\n  var defaults = {\n    tolerance: 0,\n    duration: 800,\n    easing: 'easeOutQuart',\n    callback: function callback() {} };\n\n\n  /**\n                                         * easeOutQuart Easing Function\n                                         * @param  {number} t - current time\n                                         * @param  {number} b - start value\n                                         * @param  {number} c - change in value\n                                         * @param  {number} d - duration\n                                         * @return {number} - calculated value\n                                         */\n  function easeOutQuart(t, b, c, d) {\n    t /= d;\n    t--;\n    return -c * (t * t * t * t - 1) + b;\n  }\n\n  /**\n     * Merge two object\n     *\n     * @param  {object} obj1\n     * @param  {object} obj2\n     * @return {object} merged object\n     */\n  function mergeObject(obj1, obj2) {\n    var obj3 = {};\n    Object.keys(obj1).forEach(function (propertyName) {\n      obj3[propertyName] = obj1[propertyName];\n    });\n\n    Object.keys(obj2).forEach(function (propertyName) {\n      obj3[propertyName] = obj2[propertyName];\n    });\n    return obj3;\n  };\n\n  /**\n      * Converts camel case to kebab case\n      * @param  {string} val the value to be converted\n      * @return {string} the converted value\n      */\n  function kebabCase(val) {\n    return val.replace(/([A-Z])/g, function ($1) {\n      return '-' + $1.toLowerCase();\n    });\n  };\n\n  /**\n      * MoveTo Constructor\n      * @param {object} options Options\n      * @param {object} easeFunctions Custom ease functions\n      */\n  function MoveTo() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    this.options = mergeObject(defaults, options);\n    this.easeFunctions = mergeObject({ easeOutQuart: easeOutQuart }, easeFunctions);\n  }\n\n  /**\n     * Register a dom element as trigger\n     * @param  {HTMLElement} dom Dom trigger element\n     * @param  {function} callback Callback function\n     * @return {function|void} unregister function\n     */\n  MoveTo.prototype.registerTrigger = function (dom, callback) {var _this = this;\n    if (!dom) {\n      return;\n    }\n\n    var href = dom.getAttribute('href') || dom.getAttribute('data-target');\n    // The element to be scrolled\n    var target = href && href !== '#' ?\n    document.getElementById(href.substring(1)) :\n    document.body;\n    var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));\n\n    if (typeof callback === 'function') {\n      options.callback = callback;\n    }\n\n    var listener = function listener(e) {\n      e.preventDefault();\n      _this.move(target, options);\n    };\n\n    dom.addEventListener('click', listener, false);\n\n    return function () {return dom.removeEventListener('click', listener, false);};\n  };\n\n  /**\n      * Move\n      * Scrolls to given element by using easeOutQuart function\n      * @param  {HTMLElement|number} target Target element to be scrolled or target position\n      * @param  {object} options Custom options\n      */\n  MoveTo.prototype.move = function (target) {var _this2 = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    if (target !== 0 && !target) {\n      return;\n    }\n\n    options = mergeObject(this.options, options);\n\n    var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;\n    var from = window.pageYOffset;\n    var startTime = null;\n    var lastPageYOffset = void 0;\n    distance -= options.tolerance;\n\n    // rAF loop\n    var loop = function loop(currentTime) {\n      var currentPageYOffset = window.pageYOffset;\n\n      if (!startTime) {\n        // To starts time from 1, we subtracted 1 from current time\n        // If time starts from 1 The first loop will not do anything,\n        // because easing value will be zero\n        startTime = currentTime - 1;\n      }\n\n      var timeElapsed = currentTime - startTime;\n\n      if (lastPageYOffset) {\n        if (\n        distance > 0 && lastPageYOffset > currentPageYOffset ||\n        distance < 0 && lastPageYOffset < currentPageYOffset)\n        {\n          return options.callback(target);\n        }\n      }\n      lastPageYOffset = currentPageYOffset;\n\n      var val = _this2.easeFunctions[options.easing](\n      timeElapsed, from, distance, options.duration);\n\n\n      window.scroll(0, val);\n\n      if (timeElapsed < options.duration) {\n        window.requestAnimationFrame(loop);\n      } else {\n        window.scroll(0, distance + from);\n        options.callback(target);\n      }\n    };\n\n    window.requestAnimationFrame(loop);\n  };\n\n  /**\n      * Adds custom ease function\n      * @param {string}   name Ease function name\n      * @param {function} fn   Ease function\n      */\n  MoveTo.prototype.addEaseFunction = function (name, fn) {\n    this.easeFunctions[name] = fn;\n  };\n\n  /**\n      * Returns options which created from trigger dom element\n      * @param  {HTMLElement} dom Trigger dom element\n      * @param  {object} options The instance's options\n      * @return {object} The options which created from trigger dom element\n      */\n  function _getOptionsFromTriggerDom(dom, options) {\n    var domOptions = {};\n\n    Object.keys(options).forEach(function (key) {\n      var value = dom.getAttribute('data-mt-' + kebabCase(key));\n      if (value) {\n        domOptions[key] = isNaN(value) ? value : parseInt(value, 10);\n      }\n    });\n    return domOptions;\n  }\n\n  return MoveTo;\n}();\n\nif (true) {\n  module.exports = MoveTo;\n} else {}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/moveto/dist/moveTo.js?");

/***/ }),

/***/ "./src/components/form/form-bundle.js":
/*!********************************************!*\
  !*** ./src/components/form/form-bundle.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _form = __webpack_require__(/*! ./form */ \"./src/components/form/form.js\");\n\nObject.keys(_form).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _form[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/form/form-bundle.js?");

/***/ }),

/***/ "./src/components/form/form.js":
/*!*************************************!*\
  !*** ./src/components/form/form.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Form = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _moveto = __webpack_require__(/*! moveto */ \"./node_modules/moveto/dist/moveTo.js\");\n\nvar _moveto2 = _interopRequireDefault(_moveto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Form = exports.Form = function () {\n  function Form(form, options) {\n    _classCallCheck(this, Form);\n\n    if (form) {\n      this.form = form;\n      this.message = this.form.querySelector('.message--error');\n      this.options = Object.assign({}, {\n        message: true,\n        onValid: function onValid() {},\n        onInvalid: function onInvalid() {}\n      }, options);\n      this.initEvents();\n    }\n  }\n\n  _createClass(Form, [{\n    key: 'initEvents',\n    value: function initEvents() {\n      var _this = this;\n\n      this.form.setAttribute('novalidate', '');\n      this.form.addEventListener('submit', function (event) {\n        var valid = true;\n        _this.formElements.forEach(function (field) {\n          // validate with browser's rules\n          if (!field.checkValidity()) {\n            valid = false;\n            _this.createError(field);\n            _this.setInvalid(field);\n          } else {\n            _this.removeError(field);\n            _this.setValid(field);\n          }\n        });\n        if (!valid) {\n          event.preventDefault();\n          _this.showMessage();\n          _this.options.onInvalid(event);\n          return false;\n        } else {\n          _this.hideMessage();\n          _this.options.onValid(event);\n          return true;\n        }\n      });\n      this.form.addEventListener('reset', function () {\n        _this.formElements.forEach(function (field) {\n          _this.removeError(field);\n          _this.setValid(field);\n          var ev = document.createEvent('CustomEvent');\n          ev.initCustomEvent('fieldReset', true, true, {});\n          field.dispatchEvent(ev);\n        });\n        _this.hideMessage();\n      });\n    }\n  }, {\n    key: 'setInvalid',\n    value: function setInvalid(field) {\n      var target = field.parentElement.parentElement;\n      if (target) {\n        target.classList.add('is-invalid');\n        target.setAttribute('aria-invalid', 'true');\n      }\n    }\n  }, {\n    key: 'setValid',\n    value: function setValid(field) {\n      var target = field.parentElement.parentElement;\n      if (target) {\n        target.classList.remove('is-invalid');\n        target.removeAttribute('aria-invalid');\n      }\n    }\n  }, {\n    key: 'getType',\n    value: function getType(element) {\n      if (element.tagName === 'SELECT') {\n        return 'select';\n      } else if (element.tagName === 'TEXTAREA') {\n        return 'text-area';\n      }\n      switch (element.getAttribute('type')) {\n        case 'checkbox':\n          return 'checkbox';\n        case 'radio':\n          return 'radio';\n        default:\n          return 'text-field';\n      }\n    }\n  }, {\n    key: 'getExistingError',\n    value: function getExistingError(field) {\n      var type = this.getType(field);\n      var element = void 0;\n      if (type !== 'radio') {\n        element = field;\n      } else {\n        element = this.getLastRadio(field.name);\n      }\n      return element.parentElement.parentElement.querySelector('.' + type + '__error');\n    }\n  }, {\n    key: 'getLastRadio',\n    value: function getLastRadio(name) {\n      var ret = null;\n      [].concat(_toConsumableArray(this.form.querySelectorAll('input[type=\"radio\"][name=\"' + name + '\"]'))).forEach(function (field, idx, items) {\n        if (idx === items.length - 1) {\n          ret = field;\n        }\n      });\n      return ret;\n    }\n  }, {\n    key: 'createError',\n    value: function createError(field) {\n      var type = this.getType(field);\n      var error = this.getExistingError(field);\n      if (!error) {\n        error = document.createElement('div');\n        error.classList.add(type + '__error');\n        var target = null,\n            insertBefore = null;\n        if (type !== 'radio') {\n          var next = field.parentElement.nextSibling,\n              dropdown = field.parentElement.nextElementSibling;\n          if (dropdown && dropdown.classList.contains('select__dropdown')) {\n            next = dropdown.nextSibling; // insert after dropdown\n          }\n          target = field.parentElement.parentElement;\n          insertBefore = next;\n        } else {\n          var radio = this.getLastRadio(field.name);\n          target = radio.parentElement.parentElement;\n          insertBefore = radio.parentElement.nextSibling;\n        }\n        target.insertBefore(error, insertBefore);\n      }\n      this.setErrorDescribedBy(field, error);\n      error.innerText = field.validationMessage || 'Please fill out this field';\n    }\n  }, {\n    key: 'setErrorDescribedBy',\n    value: function setErrorDescribedBy(field, error) {\n      var id = void 0;\n      if (error.hasAttribute('id')) {\n        id = error.getAttribute('id');\n      } else {\n        if (field.hasAttribute('id')) {\n          id = 'error-' + field.getAttribute('id');\n        } else if (field.hasAttribute('name')) {\n          id = 'error-' + field.getAttribute('name');\n        }\n      }\n      if (id) {\n        error.setAttribute('id', id);\n        field.setAttribute('aria-describedby', id);\n      }\n    }\n  }, {\n    key: 'removeErrorDescribedBy',\n    value: function removeErrorDescribedBy(field) {\n      field.removeAttribute('aria-describedby');\n    }\n  }, {\n    key: 'removeError',\n    value: function removeError(field) {\n      var type = this.getType(field),\n          target = field.parentElement.parentElement,\n          error = target.querySelector('.' + type + '__error');\n      if (error) {\n        target.removeChild(error);\n        this.removeErrorDescribedBy(field);\n      }\n    }\n  }, {\n    key: 'showMessage',\n    value: function showMessage() {\n      if (this.message && this.options.message) {\n        var messageClose = this.message.querySelector('.message__close-button');\n        // Remove the role temporarily in order to notify the screen reader that\n        // this is a new notification and he should read it\n        var role = this.message.getAttribute('role');\n        this.message.removeAttribute('role');\n        this.message.classList.remove('is-hidden');\n        if (messageClose) {\n          messageClose.setAttribute('tabindex', '0');\n        }\n        new _moveto2.default({\n          duration: 400,\n          tolerance: 10\n        }).move(this.message);\n        this.message.setAttribute('role', role);\n      }\n    }\n  }, {\n    key: 'hideMessage',\n    value: function hideMessage() {\n      if (this.message && this.options.message) {\n        var messageClose = this.message.querySelector('.message__close-button');\n        this.message.classList.add('is-hidden');\n        if (messageClose) {\n          messageClose.setAttribute('tabindex', '-1');\n        }\n      }\n    }\n  }, {\n    key: 'formElements',\n    get: function get() {\n      return [].concat(_toConsumableArray(this.form.querySelectorAll(['[class^=\"text-field--\"] .text-field__input', '[class^=\"text-area--\"] .text-area__input', '[class^=\"select--\"] .select__select', '[class^=\"radio--\"] .radio__input', '[class^=\"checkbox--\"] .checkbox__input'].join(','))));\n    }\n  }]);\n\n  return Form;\n}();\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/form/form.js?");

/***/ })

/******/ });
});