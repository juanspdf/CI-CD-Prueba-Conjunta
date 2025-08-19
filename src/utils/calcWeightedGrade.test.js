import calcWeightedGrade from './calcWeightedGrade.js';

test('calcula nota ponderada simple', () => {
  expect(calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]))
    .toBe(86.00);
});

test('lanza error si pesos no suman 1', () => {
  expect(() => calcWeightedGrade([{score:80,weight:0.5}]))
    .toThrow(RangeError);
});

