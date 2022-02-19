// ------rest -------// 
// 모든 파라미터를 []에 담아줌

// 함수 파라미터 자리에 붙으면 rest 나머지는 spread
// ...rest는 가장 뒤에 써야 함 / 한 번만 쓸 수 있음
function rest(a, b, ...parameter2) {
  console.log(parameter2) // 결과 : [ 3, 4, 5, 6, 7 ]
}

rest(1,2,3,4,5,6,7);

function rest2(...rest2) {
  for(var i = 0; i < rest2.length; i++) {
    console.log(rest2[i]); 
  }
}

rest2(1,2,3,4,5,76,88,89,100); // 결과 : 1 2 3 4 5 76 88 89 100