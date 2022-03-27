// ------stringify -------//
// 객체를 JSON 형식의 문자열로 변환한다.

const o = { name: "cho", gender: "JaeYoung", age: 28 };

// 객체 => JSON 형식의 문자열
const strObject = JSON.stringify(o);
console.log(typeof strObject, strObject);
// 결과 : string {"name":"Lee","gender":"male","age":20}

// 객체 => JSON 형식의 문자열 + prettify
const strPrettyObject = JSON.stringify(o, null, 2);
console.log(typeof strPrettyObject, strPrettyObject);
// 결과 : string {
//       "name": "cho",
//       "gender": "JaeYoung",
//       "age": 28
//    }
