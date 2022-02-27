// ------if / else, function -------// 

function test(a, b) {
  if (a < 40 || b < 40) {
    console.log("불합격");
  } else if (a + b >= 120) {
   console.log("합격");
  } else {
    console.log("불합격");
  }
 }
 
 test(80, 50); // 결과 : 합격
 test(30, 50); // 결과 : 불합격
 test(10, 100); // 결과 : 불합격
