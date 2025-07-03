function calculateRectangle(width, length) {
  const perimeter = 2 * (width + length);
  const area = length * width;
  return { area, perimeter };
}
