// ------findIndex -------// 

var arr = [11, 22, 33, 44, 55, 66, 77];

//조건에 맞는 첫번째 요소의 index 반환
//조건에 맞는 값이 없으면 -1을 반환
var result2 = arr.findIndex(el => el > 33);
console.log(result2); // 결과 : 3