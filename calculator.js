const calculate = (a, b, c) => {
    if (typeof a === "number" && typeof b === "number") {
      if (c === "add") {
        return a + b;
      } else if (c === "subtract") {
        if (b > a) {
          return b - a;
        } else {
          return a - b;
        }
      } else if (c === 'multiply') {
        return a * b;
      } else if (c === 'divide') {
          return a / b;
      } else {
        return 'cannot compute operation';
      }
  } else {
    return 'Invalid input detected, input valid number...';
  }
  }
  


// calculate(6, 5, 'add'); // 11
// calculate(2, 5, 'subtract'); // 3
// calculate(6, 5, 'multiply'); // 30
// calculate(6, 5, 'divide'); // 1.2
// calculate(4, 3, 'bodmas'); // cannot compute operation
// calculate(null, 3, "add"); // Invalid input detected, input valid number...


module.exports = {
  calculate,
}