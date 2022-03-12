// ------ optional -------//
// ?. 을 사용하면 프로퍼티가 없는 객체에 에러 없이 안전하게 접근이 가능하다.

let user1 = {
  admin() {
    console.log("ChoJaeYoung");
  }
}

let user2 = {};

user1.admin?.(); // 결과 : ChoJaeYoung
user2.admin?.(); // 