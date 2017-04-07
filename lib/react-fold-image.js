(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["ReactFoldImage"] = factory(require("react"), require("styled-components"));
	else
		root["ReactFoldImage"] = factory(root["React"], root["styled-components"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  perspective: 500px;\n\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: flex;\n  perspective: 500px;\n\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n']),
	    _templateObject3 = _taggedTemplateLiteral(['perspective-origin: left;'], ['perspective-origin: left;']),
	    _templateObject4 = _taggedTemplateLiteral(['perspective-origin: right;'], ['perspective-origin: right;']),
	    _templateObject5 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n  ']),
	    _templateObject6 = _taggedTemplateLiteral(['\n      perspective-origin: top;\n    '], ['\n      perspective-origin: top;\n    ']),
	    _templateObject7 = _taggedTemplateLiteral(['\n      perspective-origin: left;\n    '], ['\n      perspective-origin: left;\n    ']),
	    _templateObject8 = _taggedTemplateLiteral(['\n  transition: transform ', 's ', ', opacity ', 's ', ';\n\n  // When it\'s not animating and it\'s visible\n  ', '\n\n  opacity: 1;\n  ', '\n'], ['\n  transition: transform ', 's ', ', opacity ', 's ', ';\n\n  // When it\'s not animating and it\'s visible\n  ', '\n\n  opacity: 1;\n  ', '\n']),
	    _templateObject9 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  ']),
	    _templateObject10 = _taggedTemplateLiteral(['\n      transform-origin: right;\n      &:hover {\n        transform: rotateY(-10deg);\n      }\n    '], ['\n      transform-origin: right;\n      &:hover {\n        transform: rotateY(-10deg);\n      }\n    ']),
	    _templateObject11 = _taggedTemplateLiteral(['\n      transform-origin: left;\n      &:hover {\n        transform: rotateY(10deg);\n      }\n    '], ['\n      transform-origin: left;\n      &:hover {\n        transform: rotateY(10deg);\n      }\n    ']),
	    _templateObject12 = _taggedTemplateLiteral(['\n      transform-origin: bottom;\n      &:hover {\n        transform: rotateX(10deg);\n      }\n    '], ['\n      transform-origin: bottom;\n      &:hover {\n        transform: rotateX(10deg);\n      }\n    ']),
	    _templateObject13 = _taggedTemplateLiteral(['\n      transform-origin: top;\n      &:hover {\n        transform: rotateX(-10deg);\n      }\n    '], ['\n      transform-origin: top;\n      &:hover {\n        transform: rotateX(-10deg);\n      }\n    ']),
	    _templateObject14 = _taggedTemplateLiteral(['\n      transform-origin: 100% 100%;\n      &:hover {\n        transform: rotateX(5deg) rotateY(-5deg);\n      }\n    '], ['\n      transform-origin: 100% 100%;\n      &:hover {\n        transform: rotateX(5deg) rotateY(-5deg);\n      }\n    ']),
	    _templateObject15 = _taggedTemplateLiteral(['\n      transform-origin: 100% 0;\n      &:hover {\n        transform: rotateX(-5deg) rotateY(-5deg);\n      }\n    '], ['\n      transform-origin: 100% 0;\n      &:hover {\n        transform: rotateX(-5deg) rotateY(-5deg);\n      }\n    ']),
	    _templateObject16 = _taggedTemplateLiteral(['\n      transform-origin: 0 100%;\n      &:hover {\n        transform: rotateX(5deg) rotateY(5deg);\n      }\n    '], ['\n      transform-origin: 0 100%;\n      &:hover {\n        transform: rotateX(5deg) rotateY(5deg);\n      }\n    ']),
	    _templateObject17 = _taggedTemplateLiteral(['\n      transform-origin: 0 0;\n      &:hover {\n        transform: rotateX(-5deg) rotateY(5deg);\n      }\n    '], ['\n      transform-origin: 0 0;\n      &:hover {\n        transform: rotateX(-5deg) rotateY(5deg);\n      }\n    ']),
	    _templateObject18 = _taggedTemplateLiteral(['\n      ', '\n      ', '\n    '], ['\n      ', '\n      ', '\n    ']),
	    _templateObject19 = _taggedTemplateLiteral(['\n        opacity: 0;\n      '], ['\n        opacity: 0;\n      ']),
	    _templateObject20 = _taggedTemplateLiteral(['\n          ', '\n          ', '\n        '], ['\n          ', '\n          ', '\n        ']),
	    _templateObject21 = _taggedTemplateLiteral(['\n            transform-origin: top;\n          '], ['\n            transform-origin: top;\n          ']),
	    _templateObject22 = _taggedTemplateLiteral(['\n            transform: rotateX(90deg);'], ['\n            transform: rotateX(90deg);']),
	    _templateObject23 = _taggedTemplateLiteral(['\n            transform-origin: left;\n          '], ['\n            transform-origin: left;\n          ']),
	    _templateObject24 = _taggedTemplateLiteral(['\n            transform: rotateY(-90deg);'], ['\n            transform: rotateY(-90deg);']),
	    _templateObject25 = _taggedTemplateLiteral(['\n            transform-origin: bottom;\n          '], ['\n            transform-origin: bottom;\n          ']),
	    _templateObject26 = _taggedTemplateLiteral(['\n            transform-origin: right;\n          '], ['\n            transform-origin: right;\n          ']),
	    _templateObject27 = _taggedTemplateLiteral(['\n            transform: rotateY(90deg);'], ['\n            transform: rotateY(90deg);']),
	    _templateObject28 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(2);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var Container = _styledComponents2.default.div(_templateObject);
	
	var CanvasContainer = _styledComponents2.default.div(_templateObject2, function (_ref) {
	  var left = _ref.left;
	  return left && (0, _styledComponents.css)(_templateObject3);
	}, function (_ref2) {
	  var right = _ref2.right;
	  return right && (0, _styledComponents.css)(_templateObject4);
	}, function (_ref3) {
	  var hide = _ref3.hide;
	  return hide && (0, _styledComponents.css)(_templateObject5, function (_ref4) {
	    var direction = _ref4.direction;
	    return direction === 'down' && (0, _styledComponents.css)(_templateObject6);
	  }, function (_ref5) {
	    var direction = _ref5.direction;
	    return direction === 'toRight' && (0, _styledComponents.css)(_templateObject7);
	  });
	}, function (_ref6) {
	  var animating = _ref6.animating;
	  return animating && (0, _styledComponents.css)(_templateObject5, function (_ref7) {
	    var direction = _ref7.direction;
	    return direction === 'down' && (0, _styledComponents.css)(_templateObject6);
	  }, function (_ref8) {
	    var direction = _ref8.direction;
	    return direction === 'toRight' && (0, _styledComponents.css)(_templateObject7);
	  });
	});
	
	var easing = 'cubic-bezier(0.360, 0.000, 0.000, 1.525)';
	var Canvas = _styledComponents2.default.canvas(_templateObject8, function (_ref9) {
	  var duration = _ref9.duration;
	  return duration || 0.3;
	}, easing, function (_ref10) {
	  var duration = _ref10.duration;
	  return duration || 0.3;
	}, easing, function (_ref11) {
	  var animating = _ref11.animating,
	      hide = _ref11.hide;
	  return !animating && !hide && (0, _styledComponents.css)(_templateObject9, function (_ref12) {
	    var left = _ref12.left;
	    return left && (0, _styledComponents.css)(_templateObject10);
	  }, function (_ref13) {
	    var right = _ref13.right;
	    return right && (0, _styledComponents.css)(_templateObject11);
	  }, function (_ref14) {
	    var top = _ref14.top;
	    return top && (0, _styledComponents.css)(_templateObject12);
	  }, function (_ref15) {
	    var bottom = _ref15.bottom;
	    return bottom && (0, _styledComponents.css)(_templateObject13);
	  }, function (_ref16) {
	    var left = _ref16.left,
	        top = _ref16.top;
	    return left && top && (0, _styledComponents.css)(_templateObject14);
	  }, function (_ref17) {
	    var left = _ref17.left,
	        bottom = _ref17.bottom;
	    return left && bottom && (0, _styledComponents.css)(_templateObject15);
	  }, function (_ref18) {
	    var right = _ref18.right,
	        top = _ref18.top;
	    return right && top && (0, _styledComponents.css)(_templateObject16);
	  }, function (_ref19) {
	    var right = _ref19.right,
	        bottom = _ref19.bottom;
	    return right && bottom && (0, _styledComponents.css)(_templateObject17);
	  });
	}, function (_ref20) {
	  var hide = _ref20.hide,
	      direction = _ref20.direction,
	      animating = _ref20.animating;
	
	  return (0, _styledComponents.css)(_templateObject18, hide && (0, _styledComponents.css)(_templateObject19), function () {
	    if (direction === 'down') return (0, _styledComponents.css)(_templateObject20, (hide || animating) && (0, _styledComponents.css)(_templateObject21), hide && (0, _styledComponents.css)(_templateObject22));
	    if (direction === 'toRight') return (0, _styledComponents.css)(_templateObject20, (hide || animating) && (0, _styledComponents.css)(_templateObject23), hide && (0, _styledComponents.css)(_templateObject24));
	    if (direction === 'up') return (0, _styledComponents.css)(_templateObject20, (hide || animating) && (0, _styledComponents.css)(_templateObject25), hide && (0, _styledComponents.css)(_templateObject22));
	    if (direction === 'toLeft') return (0, _styledComponents.css)(_templateObject20, (hide || animating) && (0, _styledComponents.css)(_templateObject26), hide && (0, _styledComponents.css)(_templateObject27));
	  });
	});
	
	var Relative = _styledComponents2.default.div(_templateObject28);
	
	// --------------- Component -------------------
	
	var FoldImage = function (_Component) {
	  _inherits(FoldImage, _Component);
	
	  function FoldImage(props) {
	    _classCallCheck(this, FoldImage);
	
	    var _this = _possibleConstructorReturn(this, (FoldImage.__proto__ || Object.getPrototypeOf(FoldImage)).call(this, props));
	
	    _this.getNthRow = function (index) {
	      var noCol = _this.props.noCol;
	
	      return Math.ceil((index + 1) / noCol);
	    };
	
	    _this.getNthCol = function (index) {
	      var noCol = _this.props.noCol;
	
	      return (index + 1) % noCol || noCol;
	    };
	
	    _this.getIndex = function (colNth, rowNth) {
	      return colNth + _this.props.noCol * (rowNth - 1) - 1;
	    };
	
	    _this.canvasRef = function (nth) {
	      return function (elem) {
	        _this.canvases[nth] = elem;
	      };
	    };
	
	    _this.canvases = [];
	    _this.animationMatrix = {};
	    _this.timeouts = [];
	    _this.currentTimestamp = 0;
	    _this.state = {
	      canvas: {
	        width: 0,
	        height: 0
	      },
	      canvasProps: Array(4 * 4).fill({
	        animating: false,
	        hide: props.hide
	      })
	    };
	    return _this;
	  }
	
	  _createClass(FoldImage, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.isChanged(this.props, nextProps, 'hide')) {
	        if (nextProps.hide) {
	          this.animate(false);
	        } else {
	          this.animate(true);
	        }
	      }
	
	      if (this.isChanged(this.props, nextProps, ['startingPoint', 'noCol', 'noRow'])) {
	        this.generateAnimationMatrix(nextProps.startingPoint, this.props.foldingSpeed, 0, nextProps.startingDirection);
	      }
	    }
	  }, {
	    key: 'isChanged',
	    value: function isChanged(oldScope, newScope, props) {
	      var _props = Array.isArray(props) ? props : [props];
	      return _props.some(function (prop) {
	        return oldScope[prop] !== newScope[prop];
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.img = new Image();
	      this.img.src = this.props.src;
	      var _props2 = this.props,
	          startingPoint = _props2.startingPoint,
	          startingDirection = _props2.startingDirection;
	
	
	      this.img.onload = function () {
	        var _img = _this2.img,
	            width = _img.width,
	            height = _img.height;
	
	        _this2.setState({ canvas: { width: width, height: height } });
	
	        _this2.draw();
	      };
	
	      this.generateAnimationMatrix(startingPoint, this.props.foldingSpeed, 0, startingDirection);
	      if (!this.props.hide) {
	        this.animate(true);
	      }
	    }
	  }, {
	    key: 'generateAnimationMatrix',
	    value: function generateAnimationMatrix(start) {
	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var startingTimestamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	      var _this3 = this;
	
	      var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	      var trace = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	
	      if (start < 0 || start > this.props.noCol * this.props.noRow) return;
	
	      var AM_SLOW = this.props.foldingSpeed;
	      var AM_FAST = AM_SLOW * 0.8;
	
	      if (!this.animationMatrix[start]) {
	        // console.log(`${start}: ${startingTimestamp}. ${direction}. Prev ${last(trace)}`);
	        this.animationMatrix[start] = {
	          duration: duration,
	          startingTimestamp: startingTimestamp,
	          direction: direction
	        };
	      } else {
	        var oldStartingTimestamp = this.animationMatrix[start].duration + this.animationMatrix[start].startingTimestamp;
	        var newStartingTimestamp = duration + startingTimestamp;
	
	        if (oldStartingTimestamp > newStartingTimestamp) {
	          // console.log(`${start}: ${oldStartingTimestamp}->${newStartingTimestamp}. ${this.animationMatrix[start].direction}->${direction}. Prev: ${last(trace)}`);
	          this.animationMatrix[start] = {
	            duration: duration,
	            startingTimestamp: startingTimestamp,
	            direction: direction
	          };
	        }
	      }
	
	      this.setState(function (prevState) {
	        return {
	          canvasProps: Object.assign({}, prevState.canvasProps, _defineProperty({}, start, Object.assign({}, prevState.canvasProps[start], {
	            direction: _this3.animationMatrix[start].direction,
	            duration: _this3.animationMatrix[start].duration,
	            hide: true
	          })))
	        };
	      });
	
	      if (this.getNthRow(start) < this.props.noRow) {
	        var nextPosition = this.getIndex(this.getNthCol(start), this.getNthRow(start) + 1);
	        if (trace.indexOf(nextPosition) === -1) {
	          this.generateAnimationMatrix(nextPosition, AM_FAST, startingTimestamp + duration, 'down', [].concat(_toConsumableArray(trace), [start]));
	        }
	      }
	
	      if (this.getNthCol(start) < this.props.noCol) {
	        var _nextPosition = this.getIndex(this.getNthCol(start) + 1, this.getNthRow(start));
	        if (trace.indexOf(_nextPosition) === -1) {
	          this.generateAnimationMatrix(_nextPosition, AM_SLOW, startingTimestamp + duration, 'toRight', [].concat(_toConsumableArray(trace), [start]));
	        }
	      }
	
	      if (this.getNthRow(start) > 1) {
	        var _nextPosition2 = this.getIndex(this.getNthCol(start), this.getNthRow(start) - 1);
	        if (trace.indexOf(_nextPosition2) === -1) {
	          this.generateAnimationMatrix(_nextPosition2, AM_FAST, startingTimestamp + duration, 'up', [].concat(_toConsumableArray(trace), [start]));
	        }
	      }
	
	      if (this.getNthCol(start) > 1) {
	        var _nextPosition3 = this.getIndex(this.getNthCol(start) - 1, this.getNthRow(start));
	        if (trace.indexOf(_nextPosition3) === -1) {
	          this.generateAnimationMatrix(this.getIndex(this.getNthCol(start) - 1, this.getNthRow(start)), AM_SLOW, startingTimestamp + duration, 'toLeft', [].concat(_toConsumableArray(trace), [start]));
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.draw();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearTimeouts();
	    }
	  }, {
	    key: 'clearTimeouts',
	    value: function clearTimeouts() {
	      this.timeouts.forEach(function (timeout) {
	        timeout && clearTimeout(timeout);
	      });
	    }
	  }, {
	    key: 'animate',
	    value: function animate(foldOut) {
	      var _this4 = this;
	
	      // foldOut = true -> animate in = expand the image
	      // foldOut = false -> animate out = contract the image
	      this.clearTimeouts();
	      var EARLY_RATIO = this.props.earlyRatio;
	
	      var _loop = function _loop(i) {
	        var _animationMatrix$i = _this4.animationMatrix[i],
	            startingTimestamp = _animationMatrix$i.startingTimestamp,
	            duration = _animationMatrix$i.duration;
	
	        var timeout = setTimeout(function () {
	          _this4.currentTimestamp = startingTimestamp;
	          _this4.setState(function (_ref21) {
	            var canvasProps = _ref21.canvasProps;
	            return {
	              canvasProps: Object.assign({}, canvasProps, _defineProperty({}, i, Object.assign({}, canvasProps[i], {
	                animating: true,
	                hide: foldOut ? false : true
	              })))
	            };
	          });
	
	          var timeout2 = setTimeout(function () {
	            _this4.setState(function (_ref22) {
	              var canvasProps = _ref22.canvasProps;
	              return {
	                canvasProps: Object.assign({}, canvasProps, _defineProperty({}, i, Object.assign({}, canvasProps[i], {
	                  animating: false
	                })))
	              };
	            });
	          }, duration * 1000);
	          _this4.timeouts = [].concat(_toConsumableArray(_this4.timeouts), [timeout2]);
	        }, (startingTimestamp - _this4.currentTimestamp) * (foldOut ? 1 : -1) * 1000 * EARLY_RATIO);
	        _this4.timeouts = [].concat(_toConsumableArray(_this4.timeouts), [timeout]);
	      };
	
	      for (var i in this.animationMatrix) {
	        _loop(i);
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var _this5 = this;
	
	      var _img2 = this.img,
	          width = _img2.width,
	          height = _img2.height;
	      var _props3 = this.props,
	          noRow = _props3.noRow,
	          noCol = _props3.noCol;
	
	      var blockWidth = width / noCol;
	      var blockHeight = height / noRow;
	      this.canvases.forEach(function (canvas, index) {
	        var nthRow = _this5.getNthRow(index);
	        var nthCol = _this5.getNthCol(index);
	
	        canvas.getContext('2d').drawImage(_this5.img, (nthCol - 1) * blockWidth, (nthRow - 1) * blockHeight, blockWidth, blockHeight, 0, 0, canvas.width, canvas.height);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this6 = this;
	
	      var canvasProps = this.state.canvasProps;
	
	      var _props4 = this.props,
	          src = _props4.src,
	          hide = _props4.hide,
	          startingPoint = _props4.startingPoint,
	          startingDirection = _props4.startingDirection,
	          noCol = _props4.noCol,
	          noRow = _props4.noRow,
	          others = _objectWithoutProperties(_props4, ['src', 'hide', 'startingPoint', 'startingDirection', 'noCol', 'noRow']);
	
	      return _react2.default.createElement(
	        Relative,
	        others,
	        _react2.default.createElement('img', { style: { width: '100%', visibility: 'hidden' }, src: this.props.src, alt: '' }),
	        _react2.default.createElement(
	          Container,
	          {
	            style: {
	              position: 'absolute',
	              top: 0,
	              width: '100%',
	              height: '100%'
	            }
	          },
	          Array(noCol * noRow).fill(null).map(function (_, i) {
	            return _react2.default.createElement(
	              CanvasContainer,
	              Object.assign({
	                key: i,
	                style: {
	                  width: 1 / noCol * 100 + '%',
	                  height: 1 / noRow * 100 + '%'
	                },
	                left: _this6.getNthCol(i) === 1,
	                top: _this6.getNthRow(i) === 1,
	                bottom: _this6.getNthRow(i) === noRow,
	                right: _this6.getNthCol(i) === noCol
	              }, canvasProps[i]),
	              _react2.default.createElement(Canvas, Object.assign({
	                left: _this6.getNthCol(i) === 1,
	                top: _this6.getNthRow(i) === 1,
	                bottom: _this6.getNthRow(i) === noRow,
	                right: _this6.getNthCol(i) === noCol,
	                innerRef: _this6.canvasRef(i),
	                style: {
	                  width: '100%',
	                  height: '100%'
	                }
	              }, canvasProps[i]))
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return FoldImage;
	}(_react.Component);
	
	FoldImage.propTypes = {
	  src: _react.PropTypes.string.isRequired,
	  noCol: _react.PropTypes.number,
	  noRow: _react.PropTypes.number,
	  startingPoint: _react.PropTypes.number,
	  startingDirection: _react.PropTypes.string,
	  hide: _react.PropTypes.bool,
	  foldingSpeed: _react.PropTypes.number,
	  earlyRatio: _react.PropTypes.number
	};
	FoldImage.defaultProps = {
	  noCol: 4,
	  noRow: 4,
	  foldingSpeed: 0.7, // s
	  earlyRatio: 0.3
	};
	exports.default = FoldImage;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-fold-image.map