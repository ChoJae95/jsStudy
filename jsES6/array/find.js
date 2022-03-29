// ------find -------// 

var arr = [11, 22, 33, 44, 55, 66, 77];

//조건에 맞는 첫번째 요소의 값을 반환
//조건에 맞는 요소가 없으면 undefined를 반환
var result = arr.find(el => el > 33);
console.log(result); // 결과  : 44
