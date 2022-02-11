// ------템플릿 리터럴 -------//
// 문서 작성 시 ""(작은 따옴표) 혹은 ""(큰 따옴표)를 사용했으나 ES6에선 ``(백틱 문자)를 사용한다.

const first = 'JaeYoung';
const last = 'Cho';

// ES5
console.log('My name is ' + first + ' ' + last + '.'); // 결과 : My name is JaeYoung Cho.

// ES6
                  // ${표현식} < 문자열 인터폴레이션 
console.log(`My name is ${first} ${last}.`); // 결과 : My name is JaeYoung Cho.

console.log(`2 + 3 = ${2+3}`); // 결과 : 5