// 속성 더하기

let propertySum = {
  JaeYoung: 150,
  Goeun: 200
};

let sum = 0;

for (let key in propertySum) {
  sum += propertySum[key];
}

console.log(sum);