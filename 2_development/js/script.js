/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(2);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi main\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _classesStatesBoot = __webpack_require__(4);\n\nvar _classesStatesBoot2 = _interopRequireDefault(_classesStatesBoot);\n\nvar _classesStatesPreload = __webpack_require__(5);\n\nvar _classesStatesPreload2 = _interopRequireDefault(_classesStatesPreload);\n\nvar _classesStatesPlay = __webpack_require__(6);\n\nvar _classesStatesPlay2 = _interopRequireDefault(_classesStatesPlay);\n\nvar game = undefined;\n\nvar init = function init() {\n\n\tgame = new Phaser.Game(800, 600, Phaser.AUTO);\n\tgame.state.add('Boot', _classesStatesBoot2['default'], true);\n\tgame.state.add('Preload', _classesStatesPreload2['default'], false);\n\tgame.state.add('Play', _classesStatesPlay2['default'], false);\n};\n\ninit();\n\n//////////////////\n// WEBPACK FOOTER\n// ./_js/script.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./_scss/style.scss\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n\tvalue: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Boot = (function (_Phaser$State) {\n\t_inherits(Boot, _Phaser$State);\n\n\tfunction Boot() {\n\t\t_classCallCheck(this, Boot);\n\n\t\t_get(Object.getPrototypeOf(Boot.prototype), 'constructor', this).apply(this, arguments);\n\t}\n\n\t_createClass(Boot, [{\n\t\tkey: 'preload',\n\t\tvalue: function preload() {\n\t\t\t//this.load.image('preloader', 'assets/preloader.gif');\n\t\t\tconsole.log('booting');\n\t\t}\n\t}, {\n\t\tkey: 'create',\n\t\tvalue: function create() {\n\t\t\tconsole.log('Boot State');\n\t\t\tthis.game.state.start('Preload');\n\t\t}\n\t}]);\n\n\treturn Boot;\n})(Phaser.State);\n\nexports['default'] = Boot;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_js/classes/states/Boot.js\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///./_js/classes/states/Boot.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n\tvalue: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Preload = (function (_Phaser$State) {\n\t_inherits(Preload, _Phaser$State);\n\n\tfunction Preload() {\n\t\t_classCallCheck(this, Preload);\n\n\t\t_get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);\n\t}\n\n\t_createClass(Preload, [{\n\t\tkey: 'preload',\n\t\tvalue: function preload() {\n\t\t\tthis.load.onLoadComplete.addOnce(this.onLoadComplete, this);\n\t\t\tconsole.log('prload preload');\n\t\t\tthis.load.image('start', 'assets/start.png');\n\t\t}\n\t}, {\n\t\tkey: 'create',\n\t\tvalue: function create() {\n\n\t\t\t//this.sound.mute = false;\n\t\t}\n\t}, {\n\t\tkey: 'onLoadComplete',\n\t\tvalue: function onLoadComplete() {\n\t\t\tconsole.log('load complete');\n\t\t\tthis.game.state.start('Play');\n\t\t}\n\t}]);\n\n\treturn Preload;\n})(Phaser.State);\n\nexports['default'] = Preload;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_js/classes/states/Preload.js\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///./_js/classes/states/Preload.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n\tvalue: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Play = (function (_Phaser$State) {\n\t_inherits(Play, _Phaser$State);\n\n\tfunction Play() {\n\t\t_classCallCheck(this, Play);\n\n\t\t_get(Object.getPrototypeOf(Play.prototype), 'constructor', this).apply(this, arguments);\n\t}\n\n\t_createClass(Play, [{\n\t\tkey: 'preload',\n\t\tvalue: function preload() {\n\n\t\t\tconsole.log('play preload');\n\t\t}\n\t}, {\n\t\tkey: 'create',\n\t\tvalue: function create() {\n\t\t\tconsole.log('play create');\n\t\t\t//this.sound.mute = false;\n\t\t}\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\tconsole.log('play update');\n\t\t}\n\t}, {\n\t\tkey: 'onLoadComplete',\n\t\tvalue: function onLoadComplete() {}\n\t}]);\n\n\treturn Play;\n})(Phaser.State);\n\nexports['default'] = Play;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_js/classes/states/Play.js\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///./_js/classes/states/Play.js?");

/***/ }
/******/ ]);