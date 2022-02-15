// ------호이스팅 -------//
// 변수나 함수의 선언부분을 변수의 범위 맨 위로 강제로 끌고가서 가장 먼저 해석합니다.


// 아직 변수 선언 안했는데 먼저 출력되면 error : 변수 age is not defined
console.log(age); // 결과 : undefined (아직 할당 하기 전 자료형)

var age = 28; // 변수 선언

console.log(age); // 결과 : 28