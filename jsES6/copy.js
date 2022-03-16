const arr = [1, 2, 3];

const copy = [...arr];

console.log(copy); // 결과 : [1, 2, 3]

// copy을 변경
copy.push(4);
console.log(copy); // 결과 : [1, 2, 3, 4]

// arr은 변경 X
console.log(arr); // 결과 : [1, 2, 3]