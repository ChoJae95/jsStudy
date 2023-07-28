// 선입선출(FIFO - First In, First Out) 원칙을 따르는 자료구조로, 데이터가 큐의 뒤에 추가되고 앞에서 제거

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue("X");
queue.enqueue("Y");

console.log(queue.front());

queue.dequeue();
console.log(queue.front());
