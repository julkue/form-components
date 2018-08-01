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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FormComponent = function () {\n  function FormComponent(context, field, errorField, name, options) {\n    _classCallCheck(this, FormComponent);\n\n    this.context = context;\n    this.field = field;\n    this.errorField = errorField;\n    this.name = name;\n    this.options = Object.assign({}, {\n      tabbed: true,\n      debug: true\n    }, options);\n    this.label = this.context.querySelector('label');\n  }\n\n  _createClass(FormComponent, [{\n    key: 'init',\n    value: function init() {\n      if (this.field.hasAttribute('disabled')) {\n        this.context.classList.add('is-disabled');\n      }\n      if (!this.label) {\n        this.context.classList.add('has-no-label');\n      }\n      if (this.errorField) {\n        this.setInvalid();\n      }\n      this.setIsFilledIn();\n      this.initFocus();\n      this.context.classList.add('is-initialized');\n      if (this.options.debug) {\n        console.debug(this.name + ' initialized');\n      }\n    }\n  }, {\n    key: 'initFocus',\n    value: function initFocus() {\n      var _this = this;\n\n      if (this.options.tabbed) {\n        document.addEventListener('keyup', function (event) {\n          if (event.keyCode === 9) {\n            var chk = document.activeElement;\n            if (chk === _this.context || _this.context.contains(chk)) {\n              _this.context.classList.add('is-tabbed');\n              var listener = function listener(event) {\n                var chk = event.target;\n                if (chk === _this.context || _this.context.contains(chk)) {\n                  _this.context.classList.remove('is-tabbed');\n                  document.removeEventListener('focusout', listener);\n                }\n              };\n              document.addEventListener('focusout', listener);\n            } else {\n              if (_this.context.classList.contains('is-tabbed')) {\n                _this.context.classList.remove('is-tabbed');\n              }\n            }\n          }\n        });\n      }\n      this.field.addEventListener('focus', function () {\n        _this.context.classList.add('is-focused');\n      });\n      this.field.addEventListener('focusout', function () {\n        _this.context.classList.remove('is-focused');\n      });\n      this.field.addEventListener('fieldReset', function () {\n        _this.setIsFilledIn();\n      });\n    }\n  }, {\n    key: 'setInvalid',\n    value: function setInvalid() {\n      if (this.field.tagName === 'INPUT') {\n        var type = this.field.getAttribute('type');\n        if (type && type === 'radio') {\n          // Also mark other fields of the same radio group as invalid.\n          // This is necessary as an error message can be located after all\n          // grouped radios and in this case the error element will only be\n          // relocated to the last radio of this group. But invalid applies to all\n          // of the radios (see also radio component).\n          // Make sure to apply invalid only to radios of the same form\n          var name = this.field.getAttribute('name'),\n              form = this.getParentByTagName(this.field, 'form');\n          if (name && form) {\n            var elements = [].concat(_toConsumableArray(form.querySelectorAll('input[type=\"radio\"][name=\"' + name + '\"]')));\n            elements.forEach(function (element) {\n              // the wrapper is always two levels above the field\n              var context = element.parentElement.parentElement;\n              if (context) {\n                context.classList.add('is-invalid');\n              }\n            });\n          }\n          return;\n        }\n      }\n      this.context.classList.add('is-invalid');\n    }\n  }, {\n    key: 'setIsFilledIn',\n    value: function setIsFilledIn() {\n      var isFilledIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !!this.field.value;\n\n      this.context.classList[isFilledIn ? 'add' : 'remove']('is-filled-in');\n    }\n  }, {\n    key: 'getParentByTagName',\n    value: function getParentByTagName(node, tagName) {\n      var parent = void 0;\n      if (node === null || tagName === '') {\n        return parent;\n      }\n      parent = node.parentNode;\n      tagName = tagName.toUpperCase();\n      while (parent.tagName !== 'HTML') {\n        if (parent.tagName === tagName) {\n          return parent;\n        }\n        parent = parent.parentNode;\n      }\n      return parent;\n    }\n  }]);\n\n  return FormComponent;\n}();\n\nexports.default = FormComponent;\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/form-component.js?");

/***/ }),

/***/ "./src/components/text-field/text-field-material-like/text-field-material-like-bundle.js":
/*!***********************************************************************************************!*\
  !*** ./src/components/text-field/text-field-material-like/text-field-material-like-bundle.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _textFieldMaterialLike = __webpack_require__(/*! ./text-field-material-like */ \"./src/components/text-field/text-field-material-like/text-field-material-like.js\");\n\nObject.keys(_textFieldMaterialLike).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _textFieldMaterialLike[key];\n    }\n  });\n});\n\n__webpack_require__(/*! ./text-field-material-like.scss */ \"./src/components/text-field/text-field-material-like/text-field-material-like.scss\");\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/text-field/text-field-material-like/text-field-material-like-bundle.js?");

/***/ }),

/***/ "./src/components/text-field/text-field-material-like/text-field-material-like.js":
/*!****************************************************************************************!*\
  !*** ./src/components/text-field/text-field-material-like/text-field-material-like.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.selector = exports.TextField = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _formComponent = __webpack_require__(/*! ../../form-component */ \"./src/components/form-component.js\");\n\nvar _formComponent2 = _interopRequireDefault(_formComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TextField = exports.TextField = function (_FormComponent) {\n  _inherits(TextField, _FormComponent);\n\n  function TextField(context, options) {\n    _classCallCheck(this, TextField);\n\n    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, context, context.querySelector('.text-field__input'), context.querySelector('.text-field__error'), 'Text Field', options));\n\n    _get(TextField.prototype.__proto__ || Object.getPrototypeOf(TextField.prototype), 'init', _this).call(_this);\n    _this.initEvents();\n    return _this;\n  }\n\n  _createClass(TextField, [{\n    key: 'initEvents',\n    value: function initEvents() {\n      var _this2 = this;\n\n      if (this.field.type === 'date' || this.field.type === 'time') {\n        this.setIsFilledIn(true);\n      } else {\n        this.field.addEventListener('focus', function () {\n          return _this2.setIsFilledIn(true);\n        });\n        this.field.addEventListener('blur', function () {\n          return _this2.setIsFilledIn();\n        });\n        this.field.addEventListener('input', function () {\n          // Don't just call setIsFilledIn() for the case where you've removed\n          // the text field value but are still focusing the text field\n          _this2.setIsFilledIn(_this2.field.value || _this2.field === document.activeElement);\n        });\n      }\n    }\n  }]);\n\n  return TextField;\n}(_formComponent2.default);\n\nvar selector = exports.selector = '[class^=\"text-field--\"]';\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/text-field/text-field-material-like/text-field-material-like.js?");

/***/ }),

/***/ "./src/components/text-field/text-field-material-like/text-field-material-like.scss":
/*!******************************************************************************************!*\
  !*** ./src/components/text-field/text-field-material-like/text-field-material-like.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/text-field/text-field-material-like/text-field-material-like.scss?");

/***/ })

/******/ });
});