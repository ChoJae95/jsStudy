// ------구조 분해 할당 -------// 

// 배열 분해 할당
let array1 = ['a', 'b'];
let first = array1[0];
let second = array1[1];
console.log(first, second); // 결과 : a b
let [third, fourth] = array1;
console.log(third, fourth); // 결과 : a b

// 변수 교환하기
let admin1 = 'Tom';
let admin2 = 'Liam';
let admin3 = 'Daniel';
[admin1, admin3, admin2] = [admin1, admin2, admin3];
console.log(admin1, admin2, admin3); // 결과 : a b

// 객체 분해 할당
let book = {
  title: 'study',
  writer: 'Cho Jae Young',
  price: '10000',
};
let { title, writer, price } = book; // 변수명에 대응하는 키를 찾고 그 값을 대입한다.
console.log(title, writer, price); // 결과 : study Cho Jae Young 10000

// 키와 다른 이름을 가지는 변수에 분해 할당하기
let book1 = {
  title: 'study',
  writer: 'Cho Jae Young',
  price: '15000',
};
let { title: a, writer: b, price: c } = book1;
console.log(a, b, c); // 결과 : study Cho Jae Young 15000

// 콜론과 대입연산자의 동시사용
let fruit = {
  name1: 'banana',
  name2: 'pineapple',
  name3: 'apple',
};
let { vegetable: vg = 'carrot', name1, name3 } = fruit;
console.log(name1, vg, name3); // 결과 : banana carrot apple