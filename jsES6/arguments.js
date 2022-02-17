// ------arguments -------// 
//  파라미터들을 한꺼번에 다루고 싶을 때 자주 활용

function 함수(a,b,c) {
  console.log(arguments); // 결과 : { '0': 1, '1': 2, '2': 3 }
}

함수(1,2,3);


function 함수2(a,b,c){
  // 모든 파라미터를 []안에 넣은 변수
  console.log(arguments[0]) // 첫째 파라미터  결과 : 2
  console.log(arguments[1]) // 둘째 파라미터  결과 : 3
  console.log(arguments[2]) // 셋째 파라미터  결과 : 4
}

함수2(2,3,4);