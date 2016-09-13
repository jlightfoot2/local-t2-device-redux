import {deviceReducer, deviceActions, deviceMiddleware} from '../lib';

import configureMockStore from 'redux-mock-store';
import {combineReducers} from 'redux';
import expect from 'expect'; // You can use any testing library

import {createStore, applyMiddleware, compose} from 'redux';

const mockStore = configureMockStore();

describe('actions', () => {
  it('should create a window resize action', () => {
    const id = 45;
    const height = 432;
    const width = 1000;
    const expectedAction = {
      type: deviceActions.WINDOW_RESIZE,
      width,
      height
    };
    expect(deviceActions.windowResize(width, height)).toEqual(expectedAction);
  });

  it('checks landscape and portraite detection', () => {
    var lastState;
    const lsWidth = 501;
    const lsHeight = 500;
    lastState = deviceReducer(lastState, deviceActions.windowResize(lsWidth, lsHeight));
    expect(lastState.orientation).toEqual('landscape');
    const ptWidth = 500;
    const ptHeight = 501;
    lastState = deviceReducer(lastState, deviceActions.windowResize(ptWidth, ptHeight));
    expect(lastState.orientation).toEqual('portrait');
    const squareWidth = 500;
    const squareHeight = 500;
    lastState = deviceReducer(lastState, deviceActions.windowResize(squareWidth, squareHeight));
    expect(lastState.orientation).toEqual('portrait');

    
  });
});
