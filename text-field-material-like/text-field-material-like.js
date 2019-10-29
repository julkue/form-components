/*!***************************************************
 * form-components v1.0.3
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
		exports["text-field-material-like"] = factory();
	else
		root["text-field-material-like"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/text-field/text-field-material-like/text-field-material-like-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/form-component.js":
/*!******************************************!*\
  !*** ./src/components/form-component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormComponent; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FormComponent =\n/*#__PURE__*/\nfunction () {\n  function FormComponent(context, field, errorField, name, options) {\n    _classCallCheck(this, FormComponent);\n\n    this.context = context;\n    this.field = field;\n    this.errorField = errorField;\n    this.name = name;\n    this.options = Object.assign({}, {\n      tabbed: true,\n      debug: true\n    }, options);\n    this.label = this.context.querySelector('label');\n  }\n\n  _createClass(FormComponent, [{\n    key: \"init\",\n    value: function init() {\n      var reinit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      this.context.classList[this.field.hasAttribute('disabled') ? 'add' : 'remove']('is-disabled');\n      this.context.classList[!this.label ? 'add' : 'remove']('has-no-label');\n\n      if (this.errorField) {\n        this.setInvalid();\n      }\n\n      this.setIsFilledIn();\n\n      if (!reinit) {\n        this.initFocus();\n        this.context.classList.add('is-initialized');\n\n        if (this.options.debug) {\n          console.debug(\"\".concat(this.name, \" initialized\"));\n        }\n      }\n    }\n  }, {\n    key: \"initFocus\",\n    value: function initFocus() {\n      var _this = this;\n\n      if (this.options.tabbed) {\n        document.addEventListener('keyup', function (event) {\n          if (event.keyCode === 9) {\n            var chk = document.activeElement;\n\n            if (chk === _this.context || _this.context.contains(chk)) {\n              _this.context.classList.add('is-tabbed');\n\n              var listener = function listener(event) {\n                var chk = event.target;\n\n                if (chk === _this.context || _this.context.contains(chk)) {\n                  _this.context.classList.remove('is-tabbed');\n\n                  document.removeEventListener('focusout', listener);\n                }\n              };\n\n              document.addEventListener('focusout', listener);\n            } else {\n              if (_this.context.classList.contains('is-tabbed')) {\n                _this.context.classList.remove('is-tabbed');\n              }\n            }\n          }\n        });\n      }\n\n      this.field.addEventListener('focus', function () {\n        _this.context.classList.add('is-focused');\n      });\n      this.field.addEventListener('focusout', function () {\n        _this.context.classList.remove('is-focused');\n      });\n      this.field.addEventListener('fieldReset', function () {\n        _this.setIsFilledIn();\n\n        _this.init(true);\n      });\n    }\n  }, {\n    key: \"setInvalid\",\n    value: function setInvalid() {\n      if (this.field.tagName === 'INPUT') {\n        var type = this.field.getAttribute('type');\n\n        if (type && type === 'radio') {\n          // Also mark other fields of the same radio group as invalid.\n          // This is necessary as an error message can be located after all\n          // grouped radios and in this case the error element will only be\n          // relocated to the last radio of this group. But invalid applies to all\n          // of the radios (see also radio component).\n          // Make sure to apply invalid only to radios of the same form\n          var name = this.field.getAttribute('name'),\n              form = this.getParentByTagName(this.field, 'form');\n\n          if (name && form) {\n            var elements = _toConsumableArray(form.querySelectorAll(\"input[type=\\\"radio\\\"][name=\\\"\".concat(name, \"\\\"]\")));\n\n            elements.forEach(function (element) {\n              // the wrapper is always two levels above the field\n              var context = element.parentElement.parentElement;\n\n              if (context) {\n                context.classList.add('is-invalid');\n              }\n            });\n          }\n\n          return;\n        }\n      }\n\n      this.context.classList.add('is-invalid');\n    }\n  }, {\n    key: \"setIsFilledIn\",\n    value: function setIsFilledIn() {\n      var isFilledIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !!this.field.value;\n      this.context.classList[isFilledIn ? 'add' : 'remove']('is-filled-in');\n    }\n  }, {\n    key: \"getParentByTagName\",\n    value: function getParentByTagName(node, tagName) {\n      var parent;\n\n      if (node === null || tagName === '') {\n        return parent;\n      }\n\n      parent = node.parentNode;\n      tagName = tagName.toUpperCase();\n\n      while (parent.tagName !== 'HTML') {\n        if (parent.tagName === tagName) {\n          return parent;\n        }\n\n        parent = parent.parentNode;\n      }\n\n      return parent;\n    }\n  }]);\n\n  return FormComponent;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/form-component.js?");

/***/ }),

/***/ "./src/components/text-field/text-field-material-like/text-field-material-like-bundle.js":
/*!***********************************************************************************************!*\
  !*** ./src/components/text-field/text-field-material-like/text-field-material-like-bundle.js ***!
  \***********************************************************************************************/
/*! exports provided: TextField, selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text_field_material_like_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-field-material-like.scss */ \"./src/components/text-field/text-field-material-like/text-field-material-like.scss\");\n/* harmony import */ var _text_field_material_like_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_field_material_like_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _text_field_material_like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-field-material-like */ \"./src/components/text-field/text-field-material-like/text-field-material-like.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return _text_field_material_like__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return _text_field_material_like__WEBPACK_IMPORTED_MODULE_1__[\"selector\"]; });\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/text-field/text-field-material-like/text-field-material-like-bundle.js?");

/***/ }),

/***/ "./src/components/text-field/text-field-material-like/text-field-material-like.js":
/*!****************************************************************************************!*\
  !*** ./src/components/text-field/text-field-material-like/text-field-material-like.js ***!
  \****************************************************************************************/
/*! exports provided: TextField, selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return TextField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return selector; });\n/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../form-component */ \"./src/components/form-component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar TextField =\n/*#__PURE__*/\nfunction (_FormComponent) {\n  _inherits(TextField, _FormComponent);\n\n  function TextField(context, options) {\n    var _this;\n\n    _classCallCheck(this, TextField);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextField).call(this, context, context.querySelector('.text-field__input'), context.querySelector('.text-field__error'), 'Text Field', options));\n\n    _get(_getPrototypeOf(TextField.prototype), \"init\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this));\n\n    _this.initEvents();\n\n    return _this;\n  }\n\n  _createClass(TextField, [{\n    key: \"initEvents\",\n    value: function initEvents() {\n      var _this2 = this;\n\n      if (this.field.type === 'date' || this.field.type === 'time') {\n        this.setIsFilledIn(true);\n      } else {\n        this.field.addEventListener('focus', function () {\n          return _this2.setIsFilledIn(true);\n        });\n        this.field.addEventListener('blur', function () {\n          return _this2.setIsFilledIn();\n        });\n        this.field.addEventListener('input', function () {\n          // Don't just call setIsFilledIn() for the case where you've removed\n          // the text field value but are still focusing the text field\n          _this2.setIsFilledIn(_this2.field.value || _this2.field === document.activeElement);\n        });\n      }\n    }\n  }]);\n\n  return TextField;\n}(_form_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar selector = '[class^=\"text-field--\"]';\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/text-field/text-field-material-like/text-field-material-like.js?");

/***/ }),

/***/ "./src/components/text-field/text-field-material-like/text-field-material-like.scss":
/*!******************************************************************************************!*\
  !*** ./src/components/text-field/text-field-material-like/text-field-material-like.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/text-field/text-field-material-like/text-field-material-like.scss?");

/***/ })

/******/ });
});