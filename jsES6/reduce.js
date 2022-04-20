// ------ reduce -------//
// 배열에서 하나의 결과값을 반환

const numbers = [1, 2, 3, 4];
const numbersSum = numbers.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
});

console.log(numbersSum);

// 1 2
// 3 3
// 6 4
// 10
