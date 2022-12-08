import { getColorAlpha } from 'utils/colors';

describe('colors', () => {
  describe('getColorAlpha', () => {
    it('should return user from localstorage', () => {
      const colorAlpha = getColorAlpha('#ffffff', 0.5);
      expect(colorAlpha).toBe('#ffffff80');
    });
  });
});
