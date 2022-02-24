// ------classes(클래스) -------//
// 객체를 생성하기 위한 템플릿입니다. 클래스는 데이터와 이를 조작하는 코드를 하나로 추상화합니다.

// 기존의 프로토타입 문법
function Circle1 (height) {
  this.height = height;
}
 
Circle1.prototype = {
  area: function () {
    return this.height * Math.PI;
  }
}
 
console.log(new Circle1(1).area()); // 결과 : 3.141592653589793


// 클래스 문법
class Circle2 {

  // 생성자
  constructor(height) {
    this.height = height;
  }
  area() {
    return this.height * Math.PI;
  }
};
 
console.log(new Circle2(1).area()); // 결과 : 3.141592653589793