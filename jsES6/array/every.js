// ------every -------// 

var arr = [11, 22, 33, 44, 55, 66, 77];

//배열의 모든 요소가 조건에 맞으면 true, 아니면 false를 반환
var test2 = arr.every(x => x > 66);
console.log(test2); // 결과 : false