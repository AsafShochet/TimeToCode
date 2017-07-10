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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Time2CodeLearnerView = __webpack_require__(2);

	var _Time2CodeLearnerView2 = _interopRequireDefault(_Time2CodeLearnerView);

	var _Time2CodeInstructorView = __webpack_require__(4);

	var _Time2CodeInstructorView2 = _interopRequireDefault(_Time2CodeInstructorView);

	var component = _react2['default'].createElement(_Time2CodeInstructorView2['default'], null);

	if (window.location.search.indexOf('learner') !== -1) {
		component = _react2['default'].createElement(_Time2CodeLearnerView2['default'], null);
	}

	_react2['default'].render(component, document.getElementById('content'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _servicesRestService = __webpack_require__(3);

	var _servicesRestService2 = _interopRequireDefault(_servicesRestService);

	var LearnerApp = (function (_Component) {
		_inherits(LearnerApp, _Component);

		function LearnerApp() {
			_classCallCheck(this, LearnerApp);

			_get(Object.getPrototypeOf(LearnerApp.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(LearnerApp, [{
			key: 'onSubmitClick',
			value: function onSubmitClick(_ref) {
				var title = _ref.title;
				var description = _ref.description;
				var testCases = _ref.testCases;
				var lintSettings = _ref.lintSettings;
				var copyFromCheck = _ref.copyFromCheck;

				return _servicesRestService2['default'].setNewQuestion({ title: title, description: description, testCases: testCases, lintSettings: lintSettings, copyFromCheck: copyFromCheck });
			}
		}, {
			key: 'render',
			value: function render() {
				var _this = this;

				return _react2['default'].createElement(
					'div',
					{ className: 'learnerApp' },
					_react2['default'].createElement(
						'h1',
						null,
						'INs Yo'
					),
					_react2['default'].createElement(
						'button',
						{ onClick: function () {
								return _this.onSubmitClick({ title: 'WOW' });
							} },
						'ClickMe'
					)
				);
			}
		}]);

		return LearnerApp;
	})(_react.Component);

	exports['default'] = LearnerApp;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var RestService = (function () {
		function RestService() {
			_classCallCheck(this, RestService);
		}

		_createClass(RestService, [{
			key: 'setNewQuestion',
			value: function setNewQuestion(_ref) {
				var title = _ref.title;
				var description = _ref.description;
				var testCases = _ref.testCases;
				var lintSettings = _ref.lintSettings;
				var copyFromCheck = _ref.copyFromCheck;

				console.log('sending new question:', title);
			}
		}]);

		return RestService;
	})();

	exports['default'] = new RestService();
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _servicesRestService = __webpack_require__(3);

	var _servicesRestService2 = _interopRequireDefault(_servicesRestService);

	var _testCase = __webpack_require__(5);

	var _testCase2 = _interopRequireDefault(_testCase);

	var InstructorApp = (function (_React$Component) {
		_inherits(InstructorApp, _React$Component);

		function InstructorApp(props) {
			_classCallCheck(this, InstructorApp);

			_get(Object.getPrototypeOf(InstructorApp.prototype), 'constructor', this).call(this, props);
			this.state = {
				title: '123',
				description: '4567',
				testCaseList: [],
				lintSettings: {},
				copyFromCheck: true
			};

			this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
			this.handleTitleChange = this.handleTitleChange.bind(this);
		}

		_createClass(InstructorApp, [{
			key: 'onSubmitClick',
			value: function onSubmitClick() {
				var _state = this.state;
				var title = _state.title;
				var description = _state.description;
				var testCaseList = _state.testCaseList;
				var lintSettings = _state.lintSettings;
				var copyFromCheck = _state.copyFromCheck;

				return _servicesRestService2['default'].setNewQuestion({ title: title, description: description, testCases: testCaseList, lintSettings: lintSettings, copyFromCheck: copyFromCheck });
			}
		}, {
			key: 'render',
			value: function render() {
				var _this = this;

				return _react2['default'].createElement(
					'div',
					{ className: 'instructorApp' },
					_react2['default'].createElement(
						'h3',
						null,
						'Your task'
					),
					this.renderTitle(),
					this.renderDescriptionArea(),
					_react2['default'].createElement(_testCase2['default'], {
						testCaseList: this.state.testCaseList
					}),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement(
						'button',
						{ onClick: function () {
								return _this.onSubmitClick();
							} },
						'Submit'
					)
				);
			}
		}, {
			key: 'renderTitle',
			value: function renderTitle() {
				var title = this.state.title;

				return _react2['default'].createElement(
					'div',
					{ className: 'row' },
					_react2['default'].createElement(
						'label',
						{ className: 'col-md-2' },
						'Title: '
					),
					_react2['default'].createElement('input', {
						className: 'col-md-9',
						value: title,
						onChange: this.handleTitleChange
					})
				);
			}
		}, {
			key: 'renderDescriptionArea',
			value: function renderDescriptionArea() {
				var description = this.state.description;

				return _react2['default'].createElement(
					'div',
					{ className: 'row' },
					_react2['default'].createElement(
						'label',
						{ className: 'col-md-2' },
						'Description: '
					),
					_react2['default'].createElement('textarea', {
						className: 'col-md-9',
						rows: '6',
						value: description,
						onChange: this.handleDescriptionChange
					})
				);
			}
		}, {
			key: 'handleTitleChange',
			value: function handleTitleChange(e) {
				var title = e.target.value;
				this.setState({ title: title });
			}
		}, {
			key: 'handleDescriptionChange',
			value: function handleDescriptionChange(e) {
				var description = e.target.value;
				this.setState({ description: description });
			}
		}]);

		return InstructorApp;
	})(_react2['default'].Component);

	exports['default'] = InstructorApp;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var TestCase = (function (_React$Component) {
		_inherits(TestCase, _React$Component);

		function TestCase(props) {
			_classCallCheck(this, TestCase);

			_get(Object.getPrototypeOf(TestCase.prototype), "constructor", this).call(this, props);

			this.addTestCase = this.addTestCase.bind(this);
			this.updateTestCaseField = this.updateTestCaseField.bind(this);
			this.updateTestCaseArgument = this.updateTestCaseArgument.bind(this);
			this.addTestCaseArgument = this.addTestCaseArgument.bind(this);
			this.removeTestCaseArgument = this.removeTestCaseArgument.bind(this);
		}

		_createClass(TestCase, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "tests-case-area row" },
					_react2["default"].createElement(
						"h3",
						null,
						"Test cases"
					),
					this.renderTestCasesTable(),
					this.renderAddTestCase()
				);
			}
		}, {
			key: "renderTestCasesTable",
			value: function renderTestCasesTable() {
				var _this = this;

				var testCaseList = this.props.testCaseList;

				return _react2["default"].createElement(
					"table",
					{ className: "table table-striped" },
					_react2["default"].createElement(
						"thead",
						null,
						_react2["default"].createElement(
							"tr",
							null,
							_react2["default"].createElement(
								"th",
								null,
								"#"
							),
							_react2["default"].createElement(
								"th",
								null,
								"Arguments"
							),
							_react2["default"].createElement(
								"th",
								null,
								"Expected Output"
							),
							_react2["default"].createElement(
								"th",
								null,
								"Score"
							),
							_react2["default"].createElement(
								"th",
								null,
								"Comments"
							),
							_react2["default"].createElement("th", null)
						)
					),
					_react2["default"].createElement(
						"tbody",
						null,
						testCaseList.map(function (testCase, index) {
							return _react2["default"].createElement(
								"tr",
								null,
								_react2["default"].createElement(
									"th",
									{ scope: "row" },
									index + 1
								),
								_react2["default"].createElement(
									"td",
									null,
									_this.renderTestCaseArguments(testCase)
								),
								_react2["default"].createElement(
									"td",
									null,
									_react2["default"].createElement("input", {
										value: testCase.expectedOutput,
										onChange: function (e) {
											return _this.updateTestCaseField(testCase, e.target.value, 'expectedOutput');
										}
									})
								),
								_react2["default"].createElement(
									"td",
									null,
									_react2["default"].createElement("input", {
										type: "number",
										style: { maxWidth: '55px' },
										value: testCase.score,
										onChange: function (e) {
											return _this.updateTestCaseField(testCase, e.target.value, 'score');
										}
									})
								),
								_react2["default"].createElement(
									"td",
									null,
									_react2["default"].createElement("input", {
										value: testCase.comment,
										onChange: function (e) {
											return _this.updateTestCaseField(testCase, e.target.value, 'comment');
										}
									})
								),
								_react2["default"].createElement(
									"td",
									null,
									_react2["default"].createElement(
										"button",
										{
											className: "btn btn-link",
											onClick: function () {
												return _this.removeTestCase(index);
											}
										},
										"Remove test"
									)
								)
							);
						})
					)
				);
			}
		}, {
			key: "renderAddTestCase",
			value: function renderAddTestCase() {
				var _this2 = this;

				return _react2["default"].createElement(
					"button",
					{
						className: "add-test-case btn btn-primary",
						onClick: function () {
							return _this2.addTestCase();
						} },
					"+ Add test"
				);
			}
		}, {
			key: "renderTestCaseArguments",
			value: function renderTestCaseArguments(testCase) {
				var _this3 = this;

				return _react2["default"].createElement(
					"div",
					{ className: "test-case-arguments no-padding" },
					testCase.arguments.map(function (arg, index) {
						return _react2["default"].createElement(
							"div",
							{ className: "test-case-argument no-padding" },
							_react2["default"].createElement("input", { value: arg,
								onChange: function (e) {
									return _this3.updateTestCaseArgument(testCase, index, e.target.value);
								}
							}),
							_this3.renderRemoveArgumentButton(testCase, index)
						);
					}),
					_react2["default"].createElement(
						"button",
						{
							className: "add-test-case-argument btn btn-link",
							onClick: function () {
								return _this3.addTestCaseArgument(testCase);
							} },
						"+ New argument"
					)
				);
			}
		}, {
			key: "renderRemoveArgumentButton",
			value: function renderRemoveArgumentButton(testCase, index) {
				var _this4 = this;

				if (testCase.arguments.length < 2) {
					return null;
				}
				return _react2["default"].createElement(
					"button",
					{
						className: "btn btn-link",
						onClick: function () {
							return _this4.removeTestCaseArgument(testCase, index);
						}
					},
					"Remove"
				);
			}
		}, {
			key: "addTestCase",
			value: function addTestCase() {
				var newTestCase = {
					title: '',
					arguments: [''],
					expectedOutput: '',
					score: 0,
					comment: ''
				};
				var testCaseList = this.props.testCaseList;
				testCaseList.push(newTestCase);
				this.setState({ testCaseList: testCaseList });
			}
		}, {
			key: "removeTestCase",
			value: function removeTestCase(index) {
				var testCaseList = this.props.testCaseList;
				testCaseList.splice(index, 1);
				this.setState({ testCaseList: testCaseList });
			}
		}, {
			key: "updateTestCaseField",
			value: function updateTestCaseField(testCase, fieldValue, fieldName) {
				var value = {};
				value[fieldName] = fieldValue;
				Object.assign(testCase, value);
				this.forceUpdate();
			}
		}, {
			key: "updateTestCaseArgument",
			value: function updateTestCaseArgument(testCase, index, fieldValue) {
				testCase.arguments[index] = fieldValue;
				this.forceUpdate();
			}
		}, {
			key: "addTestCaseArgument",
			value: function addTestCaseArgument(testCase) {
				testCase.arguments.push('');
				this.forceUpdate();
			}
		}, {
			key: "removeTestCaseArgument",
			value: function removeTestCaseArgument(testCase, index) {
				testCase.arguments.splice(index, 1);
				this.forceUpdate();
			}
		}]);

		return TestCase;
	})(_react2["default"].Component);

	exports["default"] = TestCase;
	module.exports = exports["default"];

/***/ })
/******/ ]);