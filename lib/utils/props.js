'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayName = exports.hasProperty = exports.numberToPx = exports.composeFunctions = exports.pickDOMProps = undefined;

var _filterReactDomProps = require('filter-react-dom-props');

var _filterReactDomProps2 = _interopRequireDefault(_filterReactDomProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// filters out / prevents invalid props from being rendered to the dom
// which would generate an error/warning
var pickDOMProps = exports.pickDOMProps = _filterReactDomProps2.default;

var composeFunctions = exports.composeFunctions = function composeFunctions() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn && fn.apply(undefined, _toConsumableArray(args));
    });
  };
};

var numberToPx = exports.numberToPx = function numberToPx(val) {
  return typeof val === 'number' ? val + 'px' : val;
};

var hasProperty = exports.hasProperty = function hasProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
};

var getDisplayName = exports.getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name;
};
//# sourceMappingURL=props.js.map