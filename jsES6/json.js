// ------ JSON -------//

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
}

// JSON.stringify - 객체를 JSON 으로 바꿔줌
let json = JSON.stringify(student);

// typeof은 데이터의 타입을 확인
console.log(typeof json); // 결과 : string
console.log(json); // 결과 : {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}