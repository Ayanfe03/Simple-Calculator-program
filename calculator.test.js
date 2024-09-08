const { calculate } = require('./calculator');

test('testing for addition operation', () => {
  expect(calculate(4, 5, "add")).toBe(9);
})
 
test('testing for subtraction operation', () => {
  expect(calculate(4, 5, "subtract")).toBe(1);
})

test('testing for division operation', () => {
  expect(calculate(10, 5, "divide")).toBe(2);
})

test('testing for multipication operation', () => {
  expect(calculate(4, 5, "multiply")).toBe(20);
})

test('testing for incorrect argument', () => {
  expect(calculate(4, 5, "bdma")).toBe('cannot compute operation');
})

test('testing for invalid input', () => {
  expect(calculate(null, 5, "add")).toBe('Invalid input detected, input valid number...');
})



