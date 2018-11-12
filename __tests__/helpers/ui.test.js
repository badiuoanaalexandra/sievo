import { getViewportWidth, getViewportHeight, tabletBreakpoint, mobileBreakpoint } from '../../src/helpers/ui';

describe('ui', () => {

  describe('getViewportWidth', () => {
    test('is working', () => {
      global.innerWidth = 500;
      const vwWidth = getViewportWidth();
      expect(vwWidth).toEqual(500);
    });
  });

  describe('getViewportHeight', () => {
    test('is working', () => {
      global.innerHeight = 600;
      const vwHeight = getViewportHeight();
      expect(vwHeight).toEqual(600);
    });
  });

  describe('tabletBreakpoint', () => {
    test('exists', () => {
      expect(typeof tabletBreakpoint).toEqual("number");
    });
  });

  describe('mobileBreakpoint', () => {
    test('exists', () => {
      expect(typeof mobileBreakpoint).toEqual("number");
    });
  });

});
