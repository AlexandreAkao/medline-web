export const getColorAlpha = (color: string, alpha = 1) => {
  const alphaLevel = Math.round(255 * alpha).toString(16);
  return color + alphaLevel;
};
