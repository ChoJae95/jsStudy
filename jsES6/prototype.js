// ------prototype -------// 

function prototype(){
  this.name = 'ChoJaeYoung';
  this.age = 28;
}

// { gender : '남' } key/Value 저장
// prototype 함수에 prototype, 즉 유전자에 gender : '남'이라는 데이터를 추가
// 이제 student1, student1 같은 prototype로부터 생성되는 모든 자식들은 gender라는 속성을 사용할 수 있음
prototype.prototype.gender = '남';
var student1 = new prototype();
var student1 = new prototype();

console.log(student1.gender); // 결과 : 남