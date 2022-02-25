// ------ get -------// 

// 1. 데이터 꺼내쓰는 함수
// 2. get 함수들은 return이 있어야 합니다.
// 3. 파라미터가 없어야 한다.

var getter = {
  name : 'ChoJaeYoung',
  age : 28,
  get nextAge(){
    return this.age + 1
  }
}

console.log(getter.nextAge); // 결과 : 29

class dog {
  constructor(Type , Color) {
    this.type = Type
    this.color = Color
  }
};


var dog1 = new dog('똥개', 'black');
console.log(dog1); // 결과 : { type: '똥개', color: 'black' }


class Cat extends dog {
  constructor(Type, Color, age){
    super(Type,Color)
    this.age = age;
  }
  get nextAge() {
    return this.age + 1;
  }
}

var cat1 = new Cat('동네고양이','Wite', 2).nextAge;
console.log(cat1); // 결과 : 3




