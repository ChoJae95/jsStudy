// ------화살표 함수 -------// 
// Branch Test11

let arrow = () => console.log("화살표 함수 공부");
arrow(); // 결과 : 화살표 함수 공부


let plus = (num) => num + 1;
console.log(plus(1)); // 결과 : 2


let sum = (a, b) => a + b;
console.log((sum(1, 2))); // 결과 : 3


let double = n => n;
console.log( double(1) ); // 결과 : 1

const nameNum = [
  'JaeYoung', // 8
  'Goeun', // 5
];
console.log(nameNum.map(nameNums => nameNums.length)); // 결과 : [8, 5]



let sum2 = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
  let result = a + b;
  return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
};
console.log(( sum2(1, 2) )); // 결과 : 3