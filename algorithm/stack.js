// 후입선출(LIFO - Last In, First Out) 원칙을 따르는 자료구조로, 데이터가 스택의 상단에 추가되고 제거
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
console.log(stack.peek()); // 출력: 'B'
stack.pop();
console.log(stack.peek()); // 출력: 'A'
