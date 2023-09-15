const { sum } = require('./sum');

test('sumar 1 + 2 debe ser igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
  });