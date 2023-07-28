// 키-값 쌍으로 이루어진 데이터의 집합으로, 효율적인 검색을 위해 사용됩니다.

const personMap = new Map();

personMap.set("name", "Alice");
personMap.set("age", 25);

console.log(personMap.get("name"));
console.log(personMap.get("age"));
