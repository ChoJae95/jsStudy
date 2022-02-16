// ------스프레드 연산자 -------// 

// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]) // 결과 : 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Hello');  // 결과 : H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']]));  // 결과 : [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 결과 : 1 2 3

// 이터러블이 아닌 일반 객체는 Spread 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 });
// 결과 : TypeError: Found non-callable @@iterator


function sum(a,b,c) {
  console.log(a + b + c)
}

var array = [10,20,30];

sum.apply(undefined, array);
sum(...array);