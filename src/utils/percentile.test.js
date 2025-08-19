const percentile = require('../src/utils/percentile');

test('percentile 0', () => {
  expect(percentile(0, [1,2,3])).toBe(1.00);
});

test('percentile 100', () => {
  expect(percentile(100, [1,2,3])).toBe(3.00);
});

test('percentile 50 en lista par', () => {
  expect(percentile(50, [1,2,3,4])).toBe(2.00);
});

