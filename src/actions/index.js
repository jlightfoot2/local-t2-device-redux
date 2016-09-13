export const WINDOW_RESIZE = 'WINDOW_RESIZE';
export const ORIENTATION_CHANGE = 'ORIENTATION_CHANGE';

export const windowResize = (width, height) => {
  return {
    type: WINDOW_RESIZE,
    width,
    height
  };
};

export default {
  windowResize,
  WINDOW_RESIZE,
  ORIENTATION_CHANGE
};
