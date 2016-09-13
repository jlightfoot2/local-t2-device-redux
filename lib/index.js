'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deviceMiddleware = exports.deviceActions = exports.deviceReducer = undefined;

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
const deviceMiddleware = store => next => action => {
  let result = next(action);
  var lastCall = 0;
  window.addEventListener('resize', () => {
    next(windowResize(window.innerWidth, window.innerHeight));
  });
  window.addEventListener('orientationchange', () => {
    setTimeout(() => (next(windowResize(window.innerWidth, window.innerHeight))), 500);
  });
  return result;
};
*/
var timeoutId = null;
var defaultDelay = 250;
var firstLoad = true;
var filterDispatches = function filterDispatches(ms, next) {
  timeoutId && clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    next();
  }, defaultDelay);
};

var deviceMiddleware = function deviceMiddleware(store) {
  return function (next) {
    var loadDate = new Date();
    var lastMS = loadDate.getTime();
    window.addEventListener('resize', function () {
      filterDispatches(lastMS, function () {
        next((0, _actions.windowResize)(window.innerWidth, window.innerHeight));
      });
    });
    window.addEventListener('orientationchange', function () {
      filterDispatches(lastMS, function () {
        setTimeout(function () {
          return next((0, _actions.windowResize)(window.innerWidth, window.innerHeight));
        }, 500);
      });
    });
    return function (action) {
      lastMS = loadDate.getTime();
      var result = next(action);
      console.log('device action');
      if (firstLoad) {
        console.log('first Load');
        firstLoad = false;
        next((0, _actions.windowResize)(window.innerWidth, window.innerHeight));
      }
      return result;
    };
  };
};

exports.deviceReducer = _reducers2.default;
exports.deviceActions = _actions2.default;
exports.deviceMiddleware = deviceMiddleware;
exports.default = {
  deviceReducer: _reducers2.default,
  deviceActions: _actions2.default,
  deviceMiddleware: deviceMiddleware
};