const arr = [];
console.log(arr[0]); // 결과 : undefined

arr[1] = 1;
arr[5] = 5;

console.log(arr); // 결과 : [ <1 empty item>, 1, <3 empty items>, 5 ]
console.log(arr.length); // 결과 : 6
