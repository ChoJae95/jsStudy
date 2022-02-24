// ------ set -------// 

// 1. 데이터 변경하는 함수
// 2. set 함수들은 파라미터가 1개 있어야 합니다.
// 3. () 소괄호 안써도 됨

var setter = {
  name : 'ChoJaeYoung',
  age : 28,
  set setAge(나이) {
    this.age = parseInt(나이);
  }
}

console.log(setter.setAge = 40); // 결과 : 40
