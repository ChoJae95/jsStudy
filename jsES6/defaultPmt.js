// ------기본값 매개변수 -------// 
// 함수를 만들 때 파라미터값을 실수로 안적거나 했을 경우 
// 파라미터에 기본값(default 값)을 줄 수 있습니다. 

function hamsu() {
  return 10
}

hamsu();

// b 자리에 파라미터를 안넣을 때만 발동
function sum(a, b = hamsu()) {
  console.log(a + b) // 결과 : 3
}

sum(1);