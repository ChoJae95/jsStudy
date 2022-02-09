// 속성 삭제

let user = {};
user.name = "JaeYoung";
user.surname = "Cho";
user.name = "JaeYoung2";
delete user.name; // name 삭제

console.log(user.name); // underfined
