(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(5);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(259);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(301);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(106);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _server = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(2);

var _reactRouterRedux = __webpack_require__(3);

var _history = __webpack_require__(4);

var _aspnetPrerendering = __webpack_require__(8);

var _routes = __webpack_require__(9);

var _configureStore = __webpack_require__(15);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _aspnetPrerendering.createServerRenderer)(function (params) {
    return new Promise(function (resolve, reject) {
        // Prepare Redux store with in-memory history, and dispatch a navigation event
        // corresponding to the incoming URL
        var basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
        var urlAfterBasename = params.url.substring(basename.length);
        var store = (0, _configureStore2.default)((0, _history.createMemoryHistory)());
        store.dispatch((0, _reactRouterRedux.replace)(urlAfterBasename));

        // Prepare an instance of the application and perform an inital render that will
        // cause any async tasks (e.g., data access) to begin
        var routerContext = {};
        var app = _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_reactRouterDom.StaticRouter, { basename: basename, context: routerContext, location: params.location.path, children: _routes.routes })
        );
        (0, _server.renderToString)(app);

        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }

        // Once any async tasks are done, we can perform the final render
        // We also send the redux store state, so the client can continue execution where the server left off
        params.domainTasks.then(function () {
            resolve({
                html: (0, _server.renderToString)(app),
                globals: { initialReduxState: store.getState() }
            });
        }, reject); // Also propagate any errors back into the host application 
    });
});

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Mikhail/Documents/Projects/react-base/src/boot-server.jsx');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(274);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(168);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(166);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routes = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _Layout = __webpack_require__(10);

var _Layout2 = _interopRequireDefault(_Layout);

var _Error = __webpack_require__(12);

var _Error2 = _interopRequireDefault(_Error);

var _Home = __webpack_require__(13);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(14);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -- Views -------------------------------------------------
var routes = exports.routes = _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _Error2.default })
    )
);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(routes, 'routes', 'C:/Users/Mikhail/Documents/Projects/react-base/src/routes.jsx');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _NavLink = __webpack_require__(11);

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_React$Component) {
    _inherits(Controller, _React$Component);

    function Controller() {
        _classCallCheck(this, Controller);

        return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _NavLink2.default,
                        { to: '/about' },
                        'About'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return Controller;
}(_react2.default.Component);

var _default = Controller;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Controller, 'Controller', 'C:/Users/Mikhail/Documents/Projects/react-base/src/views/shared/Layout.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Mikhail/Documents/Projects/react-base/src/views/shared/Layout.jsx');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(264);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_React$Component) {
    _inherits(Controller, _React$Component);

    function Controller() {
        _classCallCheck(this, Controller);

        return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                {
                    style: {
                        fontSize: 28,
                        color: '#303030'
                    } },
                'Page 404'
            );
        }
    }]);

    return Controller;
}(_react2.default.Component);

var _default = Controller;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Controller, 'Controller', 'C:/Users/Mikhail/Documents/Projects/react-base/src/views/shared/Error.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Mikhail/Documents/Projects/react-base/src/views/shared/Error.jsx');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_React$Component) {
    _inherits(Controller, _React$Component);

    function Controller() {
        _classCallCheck(this, Controller);

        return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                'Home Page'
            );
        }
    }]);

    return Controller;
}(_react2.default.Component);

var _default = Controller;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Controller, 'Controller', 'C:/Users/Mikhail/Documents/Projects/react-base/src/views/Home.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Mikhail/Documents/Projects/react-base/src/views/Home.jsx');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_React$Component) {
    _inherits(Controller, _React$Component);

    function Controller() {
        _classCallCheck(this, Controller);

        return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                'About Page'
            );
        }
    }]);

    return Controller;
}(_react2.default.Component);

var _default = Controller;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Controller, 'Controller', 'C:/Users/Mikhail/Documents/Projects/react-base/src/views/About.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Mikhail/Documents/Projects/react-base/src/views/About.jsx');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(16);

var _reduxThunk = __webpack_require__(17);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(3);

var _store = __webpack_require__(18);

var StoreModule = _interopRequireWildcard(_store);

var _history = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)), devToolsExtension ? devToolsExtension() : function (next) {
        return next;
    })(_redux.createStore);

    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(_store.reducers);
    var store = createStoreWithMiddleware(allReducers, initialState);

    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }

    return store;
}

function buildRootReducer(allReducers) {
    return (0, _redux.combineReducers)(Object.assign({}, allReducers, { routing: _reactRouterRedux.routerReducer }));
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(configureStore, 'configureStore', 'C:/Users/Mikhail/Documents/Projects/react-base/src/configureStore.js');

    __REACT_HOT_LOADER__.register(buildRootReducer, 'buildRootReducer', 'C:/Users/Mikhail/Documents/Projects/react-base/src/configureStore.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(123);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(300);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = exports.reducers = {};
//# sourceMappingURL=index.js.map

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, "reducers", "C:/Users/Mikhail/Documents/Projects/react-base/src/store/index.js");
}();

;

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTEwM2MzOTNmN2U3ZTU4MTA4ODAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9ib290LXNlcnZlci5qc3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2hhcmVkL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL05hdkxpbmsuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zaGFyZWQvRXJyb3IuanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImJhc2VuYW1lIiwicGFyYW1zIiwiYmFzZVVybCIsInN1YnN0cmluZyIsImxlbmd0aCIsInVybEFmdGVyQmFzZW5hbWUiLCJ1cmwiLCJzdG9yZSIsImRpc3BhdGNoIiwicm91dGVyQ29udGV4dCIsImFwcCIsImxvY2F0aW9uIiwicGF0aCIsInJlZGlyZWN0VXJsIiwiZG9tYWluVGFza3MiLCJ0aGVuIiwiaHRtbCIsImdsb2JhbHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImdldFN0YXRlIiwicm91dGVzIiwiQ29udHJvbGxlciIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJmb250U2l6ZSIsImNvbG9yIiwiY29uZmlndXJlU3RvcmUiLCJTdG9yZU1vZHVsZSIsImhpc3RvcnkiLCJpbml0aWFsU3RhdGUiLCJ3aW5kb3dJZkRlZmluZWQiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUiLCJuZXh0IiwiYWxsUmVkdWNlcnMiLCJidWlsZFJvb3RSZWR1Y2VyIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwibmV4dFJvb3RSZWR1Y2VyIiwicmVxdWlyZSIsInJlcGxhY2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJyb3V0aW5nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEscUM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O2VBRWUsOENBQXFCLGtCQUFVO0FBQzFDLFdBQU8sSUFBSUEsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQztBQUNBO0FBQ0EsWUFBTUMsV0FBV0MsT0FBT0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCLENBQXpCLEVBQTRCRixPQUFPQyxPQUFQLENBQWVFLE1BQWYsR0FBd0IsQ0FBcEQsQ0FBakIsQ0FIb0MsQ0FHcUM7QUFDekUsWUFBTUMsbUJBQW1CSixPQUFPSyxHQUFQLENBQVdILFNBQVgsQ0FBcUJILFNBQVNJLE1BQTlCLENBQXpCO0FBQ0EsWUFBTUcsUUFBUSw4QkFBZSxtQ0FBZixDQUFkO0FBQ0FBLGNBQU1DLFFBQU4sQ0FBZSwrQkFBUUgsZ0JBQVIsQ0FBZjs7QUFFQTtBQUNBO0FBQ0EsWUFBTUksZ0JBQWdCLEVBQXRCO0FBQ0EsWUFBTUMsTUFDRjtBQUFBO0FBQUEsY0FBVSxPQUFRSCxLQUFsQjtBQUNJLDBFQUFjLFVBQVdQLFFBQXpCLEVBQW9DLFNBQVVTLGFBQTlDLEVBQThELFVBQVdSLE9BQU9VLFFBQVAsQ0FBZ0JDLElBQXpGLEVBQWdHLHdCQUFoRztBQURKLFNBREo7QUFLQSxvQ0FBZUYsR0FBZjs7QUFFQTtBQUNBLFlBQUlELGNBQWNILEdBQWxCLEVBQXVCO0FBQ25CUixvQkFBUSxFQUFFZSxhQUFhSixjQUFjSCxHQUE3QixFQUFSO0FBQ0E7QUFDSDs7QUFFRDtBQUNBO0FBQ0FMLGVBQU9hLFdBQVAsQ0FBbUJDLElBQW5CLENBQXdCLFlBQU07QUFDMUJqQixvQkFBUTtBQUNKa0Isc0JBQU0sNEJBQWVOLEdBQWYsQ0FERjtBQUVKTyx5QkFBUyxFQUFFQyxtQkFBbUJYLE1BQU1ZLFFBQU4sRUFBckI7QUFGTCxhQUFSO0FBSUgsU0FMRCxFQUtHcEIsTUFMSCxFQTFCb0MsQ0ErQnhCO0FBQ2YsS0FoQ00sQ0FBUDtBQWlDSCxDQWxDYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmYsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7QUFGQTtBQUlPLElBQU1xQiwwQkFBUztBQUFBO0FBQUE7QUFDbEI7QUFBQTtBQUFBO0FBQ0ksK0RBQU8sV0FBUCxFQUFhLE1BQUssR0FBbEIsRUFBc0IseUJBQXRCLEdBREo7QUFFSSwrREFBTyxNQUFLLFFBQVosRUFBcUIsMEJBQXJCLEdBRko7QUFHSSwrREFBTywwQkFBUDtBQUhKO0FBRGtCLENBQWY7Ozs7Ozs7O2tDQUFNQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUYjs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUMsVTs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQVMsSUFBRyxRQUFaO0FBQUE7QUFBQTtBQURKLGlCQURKO0FBSUk7QUFBQTtBQUFBO0FBQ0sseUJBQUtDLEtBQUwsQ0FBV0M7QUFEaEI7QUFKSixhQURKO0FBVUg7Ozs7RUFab0IsZ0JBQU1DLFM7O2VBZWhCSCxVOzs7Ozs7Ozs7a0NBZlRBLFU7Ozs7Ozs7Ozs7O0FDSE4sK0M7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSwyQkFBTztBQUNISSxrQ0FBVSxFQURQO0FBRUhDLCtCQUFPO0FBRkoscUJBRFg7QUFBQTtBQUFBLGFBREo7QUFTSDs7OztFQVhvQixnQkFBTUYsUzs7ZUFjaEJILFU7Ozs7Ozs7OztrQ0FkVEEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTjs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7O2lDQUNPO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0g7Ozs7RUFMb0IsZ0JBQU1HLFM7O2VBUWhCSCxVOzs7Ozs7Ozs7a0NBUlRBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk47Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdIOzs7O0VBTG9CLGdCQUFNRyxTOztlQVFoQkgsVTs7Ozs7Ozs7O2tDQVJUQSxVOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNpQmtCTSxjOztBQW5CeEI7O0FBVUE7Ozs7QUFDQTs7QUFJQTs7SUFBWUMsVzs7QUFFWjs7Ozs7O0FBRWUsU0FBU0QsY0FBVCxDQUF3QkUsT0FBeEIsRUFBaUNDLFlBQWpDLEVBQStDO0FBQzFEO0FBQ0EsUUFBTUMsa0JBQWtCLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0MsSUFBaEMsR0FBdUNBLE1BQS9EO0FBQ0E7QUFDQSxRQUFNQyxvQkFBb0JGLG1CQUFtQkEsZ0JBQWdCRSxpQkFBN0Q7QUFDQSxRQUFNQyw0QkFBNEIsb0JBQzlCLGtEQUF1Qix3Q0FBaUJMLE9BQWpCLENBQXZCLENBRDhCLEVBRTlCSSxvQkFBb0JBLG1CQUFwQixHQUEwQyxVQUFDRSxJQUFEO0FBQUEsZUFBVUEsSUFBVjtBQUFBLEtBRloscUJBQWxDOztBQUtBO0FBQ0EsUUFBTUMsY0FBY0MsaUNBQXBCO0FBQ0EsUUFBTTlCLFFBQVEyQiwwQkFBMEJFLFdBQTFCLEVBQXVDTixZQUF2QyxDQUFkOztBQUVBO0FBQ0EsUUFBSSxLQUFKLEVBQWdCO0FBQ1pRLGVBQU9DLEdBQVAsQ0FBV0MsTUFBWCxDQUFrQixTQUFsQixFQUE2QixZQUFNO0FBQy9CLGdCQUFNQyxrQkFBa0JDLFFBQVEsU0FBUixDQUF4QjtBQUNBbkMsa0JBQU1vQyxjQUFOLENBQXFCTixpQkFBaUJJLGdCQUFnQkcsUUFBakMsQ0FBckI7QUFDSCxTQUhEO0FBSUg7O0FBRUQsV0FBT3JDLEtBQVA7QUFDSDs7QUFFRCxTQUFTOEIsZ0JBQVQsQ0FBMEJELFdBQTFCLEVBQXVDO0FBQ25DLFdBQU8sNEJBQWdCUyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlYsV0FBbEIsRUFBK0IsRUFBRVcsd0NBQUYsRUFBL0IsQ0FBaEIsQ0FBUDtBQUNIOzs7Ozs7OztrQ0EzQnVCcEIsYzs7a0NBeUJmVSxnQjs7Ozs7Ozs7O0FDNUNULCtDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ08sSUFBSU8sOEJBQVcsRUFBZjtBQUNQOzs7Ozs7Ozs7Z0NBRFdBLFEiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDExMDNjMzkzZjdlN2U1ODEwODgwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMjU5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMzAxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBQcmVwYXJlIFJlZHV4IHN0b3JlIHdpdGggaW4tbWVtb3J5IGhpc3RvcnksIGFuZCBkaXNwYXRjaCBhIG5hdmlnYXRpb24gZXZlbnRcclxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBpbmNvbWluZyBVUkxcclxuICAgICAgICBjb25zdCBiYXNlbmFtZSA9IHBhcmFtcy5iYXNlVXJsLnN1YnN0cmluZygwLCBwYXJhbXMuYmFzZVVybC5sZW5ndGggLSAxKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoXHJcbiAgICAgICAgY29uc3QgdXJsQWZ0ZXJCYXNlbmFtZSA9IHBhcmFtcy51cmwuc3Vic3RyaW5nKGJhc2VuYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShjcmVhdGVNZW1vcnlIaXN0b3J5KCkpO1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlcGxhY2UodXJsQWZ0ZXJCYXNlbmFtZSkpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cclxuICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgYmFzZW5hbWU9eyBiYXNlbmFtZSB9IGNvbnRleHQ9eyByb3V0ZXJDb250ZXh0IH0gbG9jYXRpb249eyBwYXJhbXMubG9jYXRpb24ucGF0aCB9IGNoaWxkcmVuPXsgcm91dGVzIH0gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgIGlmIChyb3V0ZXJDb250ZXh0LnVybCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJvdXRlckNvbnRleHQudXJsIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9uY2UgYW55IGFzeW5jIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcclxuICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvbiBcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb3Qtc2VydmVyLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDI3NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTY4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTY2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0ICAgICAgICAgICAgICAgIGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9ICAgIGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTGF5b3V0ICAgICAgICAgICAgICAgZnJvbSAnLi92aWV3cy9zaGFyZWQvTGF5b3V0JztcclxuaW1wb3J0IEVycm9yUGFnZSAgICAgICAgICAgIGZyb20gJy4vdmlld3Mvc2hhcmVkL0Vycm9yJztcclxuXHJcbi8vIC0tIFZpZXdzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IEhvbWUgICAgICAgICAgICAgICAgIGZyb20gJy4vdmlld3MvSG9tZSc7XHJcbmltcG9ydCBBYm91dCAgICAgICAgICAgICAgICBmcm9tICcuL3ZpZXdzL0Fib3V0JztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSA8TGF5b3V0PlxyXG4gICAgPFN3aXRjaD5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPScvYWJvdXQnIGNvbXBvbmVudD17QWJvdXR9IC8+XHJcbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17RXJyb3JQYWdlfSAvPlxyXG4gICAgPC9Td2l0Y2g+XHJcbjwvTGF5b3V0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzLmpzeCIsImltcG9ydCBSZWFjdCAgIGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSAncmVhY3Qtcm91dGVyLWRvbS9OYXZMaW5rJztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIj5BYm91dDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3Mvc2hhcmVkL0xheW91dC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgyNjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL05hdkxpbmsuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzAzMDMwJ1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFnZSA0MDRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL3NoYXJlZC9FcnJvci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXdzL0hvbWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGgxPkFib3V0IFBhZ2U8L2gxPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlld3MvQWJvdXQuanN4IiwiaW1wb3J0IHtcclxuICAgIGNyZWF0ZVN0b3JlLFxyXG4gICAgYXBwbHlNaWRkbGV3YXJlLFxyXG4gICAgY29tcG9zZSwgXHJcbiAgICBjb21iaW5lUmVkdWNlcnMsIFxyXG4gICAgR2VuZXJpY1N0b3JlRW5oYW5jZXIsIFxyXG4gICAgU3RvcmUsIFxyXG4gICAgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciwgXHJcbiAgICBSZWR1Y2Vyc01hcE9iamVjdCBcclxufSAgICAgICAgICAgICAgIGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rICAgIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgXHJcbiAgICByb3V0ZXJSZWR1Y2VyLCBcclxuICAgIHJvdXRlck1pZGRsZXdhcmUgXHJcbn0gICAgICAgICAgICAgICBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeSwgaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xyXG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XHJcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb247XHJcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkpLFxyXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IChuZXh0KSA9PiBuZXh0XHJcbiAgICApKGNyZWF0ZVN0b3JlKTtcclxuXHJcbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXHJcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuL3N0b3JlJyk7XHJcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzKSB7XHJcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzKE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmVTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEyMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDMwMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xyXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cclxuZXhwb3J0IHZhciByZWR1Y2VycyA9IHt9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9