function solution(num1, num2) {
  var answer = ~~(num1 / num2);
  return answer;
}

function solution2(n, k) {
  if (n >= 10) {
    k -= ~~(n / 10);
  }

  return 12000 * n + 2000 * k;
}

// 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성
function solution_5(n) {
  n.reduce((acc, ver, asd) => {});
}
