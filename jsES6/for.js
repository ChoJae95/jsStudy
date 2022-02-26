
let obj = { name : 'choJaeYoung', age : 28 };

// object에 있던 값을 전부 하나씩 꺼내서 사용할 때
for (let key in obj) {
  console.log(obj[key]); // 결과  : ChojyeYoung 28
}


var array = [2,3,4,5];

// Array,문자,arguments, nodeList, Map, set
// iterable(반복가능한 객체)한 자료형에만 사용가능
for(let data of array) {
  console.log(data) // 결과 : 2 3 4 5 
}