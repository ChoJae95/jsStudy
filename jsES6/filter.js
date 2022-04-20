// ------filter -------//
// 배열에서 특정 항목을 제거해 새로운 배열을 만듦

const numbers = [1, 2, 3, 4, 5];
const filterd = numbers.filter((number) => number > 2);

console.log(filterd); // 결과 : 3 4 5

const numbers1 = [-3, -2, -1, 0, 1, 2, 3];
const nextNumbers = numbers1.map((number) => (number === 0 ? 10 : number));

console.log(nextNumbers);

const items = [
  {
    id: 1,
    text: "안녕하세요.",
  },
  {
    id: 2,
    text: "환영합니다.",
  },
  {
    id: 3,
    text: "반갑습니다.",
  },
];

const nextItems = items.map((item) =>
  item.id === 2 ? { ...item, text: "ㅎㅇㅎㅇ" } : item
);

console.log(nextItems);

// 4. 20
const fruits = ["apple", "Banana", "Watemelon"];
const fruitsFilter = fruits.filter((word) => word.length > 4);

console.log(fruitsFilter);
