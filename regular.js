// ------reqular -------//

// 정규 표현식 리터럴
const tel1 = '0101234567';
const tel2 = '0101234567ㅈ';
const myRegExp = /^[0-9]+$/;
console.log(myRegExp.test(tel1)); // true
console.log(myRegExp.test(tel2)); // false


// 'A'가 한번이상 반복되는 문자열('A', 'AA', 'AAA', ...)을 반복 검색
const targetStr = 'AA AAA BB Aa Bb';
const regexr = /A+/g;
console.log(targetStr.match(regexr)); // 결과 : [ 'AA', 'AAA', 'A' ]


// 'A' 또는 'B'가 한번 이상 반복되는 문자열을 반복 검색
const targetStr2 = 'AA BB Aa Bb';
const regexr2 = /[AB]+/g;
console.log(targetStr2.match(regexr2)); // 결과 : [ 'AA', 'BB', 'A', 'B' ]