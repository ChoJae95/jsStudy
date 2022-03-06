// ------ symbol -------// 
// 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용
// Symbol() 함수는 String, Number, Boolean과 같이 래퍼 객체를 생성하는 생성자 함수와는 달리 new 연산자를 사용하지 않는다.

const obj = {};

const mySymbol = Symbol('ChoJaeYoung');
obj[mySymbol] = 28;

console.log(obj); // 결과 : { [Symbol(mySymbol)]: 28 }
console.log(obj[mySymbol]); // 결과 : 28