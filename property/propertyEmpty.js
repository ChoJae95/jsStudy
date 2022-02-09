// 비어 있는 속성 구분

let user = {};
console.log( empty(user));
user = { name: "jaeYoung", age: "28" }
console.log( empty(user));

function empty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}