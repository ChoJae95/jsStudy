// ------ 중첩 함수 -------//

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

console.log(counter()); // 결과 : 0
console.log(counter()); // 결과 : 1
console.log(counter()); // 결과 : 2
