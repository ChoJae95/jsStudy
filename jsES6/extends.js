// ------extends -------//
// class를 상속한 class를 만들고 싶을 때 씀

class extends1 {
  constructor(name) {
    this.name1 = 'Cho'
    this.name2 = name;
  }
}

class extends2 extends extends1 {
  constructor(name) {
    // super는 class의 constructor(extends1) 속성들 그대로 물려 받는 것
    super(name);
    this.age = 50;
  }
}

var extends3 = new extends2('JaeYoung');

console.log(extends3); // 결과 : extends2 { name1: 'Cho', name2: 'JaeYoung', age: 50 }

