'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.device = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _actions = require('../actions');

var defaultDevice = {
  orientation: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.innerWidth < window.innerHeight ? 'portrait' : 'landscape',
  width: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? window.innerWidth : 0,
  height: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? window.innerHeight : 0,
  size: 'small'
};

var breakPoints = {
  large: 0,
  medium: 1024,
  small: 768
};

var device = exports.device = function device() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultDevice : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actions.ORIENTATION_CHANGE:
    case _actions.WINDOW_RESIZE:
      var width = action.width || 0;
      var height = action.height || 0;
      var size = state.size;
      if (width > breakPoints.medium) {
        size = 'large';
      } else if (width > breakPoints.small) {
        size = 'medium';
      } else if (width > 0) {
        size = 'small';
      }
      var orientation = action.width > action.height ? 'landscape' : 'portrait';
      return _extends({}, state, { size: size, width: width, orientation: orientation, height: height });
  }
  return state;
};

exports.default = device;