'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WINDOW_RESIZE = exports.WINDOW_RESIZE = 'WINDOW_RESIZE';
var ORIENTATION_CHANGE = exports.ORIENTATION_CHANGE = 'ORIENTATION_CHANGE';

var windowResize = exports.windowResize = function windowResize(width, height) {
  return {
    type: WINDOW_RESIZE,
    width: width,
    height: height
  };
};

exports.default = {
  windowResize: windowResize,
  WINDOW_RESIZE: WINDOW_RESIZE,
  ORIENTATION_CHANGE: ORIENTATION_CHANGE
};