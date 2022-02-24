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
