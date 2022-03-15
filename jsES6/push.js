// ------ push -------//
// 배열의 끝에 데이터를 추가하기 위해 사용

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1); // 결과 : [1, 2, 3, 4, 5, 6]
