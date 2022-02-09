// 속성 접근자

const user = {};
user['firstname'] = 'JaeYoung';
user['lastname'] = 'goEun';

console.log(user.firstname); // JaeYoung

const user2 = {
  firstname: 'dog',
  lastname: 'cat'
};

console.log(user2['lastname']); // cat