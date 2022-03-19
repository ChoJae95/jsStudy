// ------ 메소드 축약 -------//
// function 키워드를 생략한 축약 표현을 사용할 수 있음

// ES5
var es5_Obj = {
  name: 'Cho',
  method: function() {
    console.log('Hi! ' + this.name);
  }
};
es5_Obj.method(); // 결과 : Hi! Cho



// ES6
const es6_Obj = {
  name: 'Cho',
  method() {
    console.log('hello ' + this.name); 
  }
}
es6_Obj.method(); // 결과 : hello Cho