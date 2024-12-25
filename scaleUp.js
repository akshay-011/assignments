const scaleUp = function (arrayToScale, [scaleFrom, scaleTo]) {
  if (scaleFrom === scaleTo) {
    return Array(arrayToScale.length).fill(scaleFrom);
  }
};

// testing
const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!isSame(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
};

const isSame = function (value1, value2) {
  if (Array.isArray(value1)) {
    return areArraysEqual(value1, value2);
  }

  return value1 === value2;
};

const testCases = [
  {
    fn: scaleUp,
    inputs: [
      [1, 2, 3, 4, 5],
      [10, 10],
    ],
    expected: [10, 10, 10, 10, 10],
  },
  {
    fn: scaleUp,
    inputs: [
      [0.1, 0.2, 0.3, 0.4, 0.5],
      [1, 100],
    ],
    expected: [20, 40, 60, 80, 100],
  },
  {
    fn: scaleUp,
    inputs: [
      [0.1, 0.2, 0.3, 0.4, 0.5],
      [1, 50],
    ],
    expected: [10, 20, 30, 40, 50],
  },
];

const test = function (failed, { fn, inputs, expected }) {
  const actual = fn(...inputs);

  if (isSame(actual, expected)) {
    return failed;
  }

  return [...failed, { fn, inputs, expected, actual }];
};

const testAll = function () {
  const failed = testCases.reduce(test, []);
  console.table(failed);
};

testAll();
