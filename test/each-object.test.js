// Note :
// Kadang, saat menggunakan data Array, jika terlalu banyak parameternya, maka akan membingungkan
// Each Function juga bisa menggunakan data Object, namun kita perlu melakukan destructuring

import { sumAll } from "../src/sum.js";

const table = [
  {
    numbers: [],
    expected: 0,
  },
  {
    numbers: [10],
    expected: 10,
  },
  {
    numbers: [10, 10, 10],
    expected: 30,
  },
  {
    numbers: [10, 10, 10, 10, 10],
    expected: 50,
  },
  {
    numbers: [10, 10, 10, 10, 10, 10, 10],
    expected: 70,
  },
];

test.each(table)(
  "test sumAll($numbers) should result $expected",
  ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected);
  }
);
