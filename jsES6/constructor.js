// ------constructor -------//
// object 생성 기계

function constructor(이름) {
  // this는 constructor에서 새로 생성되는 object(instance)
  this.name = 이름;
  this.age = 28;
  this.sayHi = function() {
    console.log('안녕하세요 ' + this.name + ' 입니다' )  
  }
}

var constructor1 = new constructor('ChoJaeYoung'); 
var constructor2 = new constructor('ChoJaeYoung2');

constructor1.sayHi(); // 결과 : 안녕하세요 ChoJaeYoung 입니다
constructor2.sayHi(); // 결과 : 안녕하세요 ChoJaeYoung2 입니다