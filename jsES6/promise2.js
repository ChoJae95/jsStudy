// ------프로 미스 -------// 
// 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

const pr = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
    reject(new Error("err..."));

  }, 1000);
});

console.log("---시작---");
pr.then((result) => {
    console.log(result);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("---끝---");
  });

// 결과 : 
// ---시작---
// ok
// ---끝---


// Promise all
// all() 은 주어진 모든 Promise 를 실행한 후 진행되는 하나의 Promise 를 반환합니다.
const pAll1 = new Promise(resolve => {
  setTimeout(resolve, 2000, "First");
})

const pAll2 = new Promise(resolve => {
  setTimeout(resolve, 1000, "Second");
})

const pAll3 = new Promise(resolve => {
  setTimeout(resolve, 3000, "Third");
})

const allPromise = Promise.all([pAll1,pAll2,pAll3]);
allPromise.then(values => console.log(values)); // 결과 : [ 'First', 'Second', 'Third' ]


// Promise race
// race() 는 주어진 Promise 중 가장 먼저 완료된 것의 결과값을 이행하거나 거부합니다.
const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "First reject");
})

const p2 = new Promise(resolve => {
  setTimeout(resolve, 4000, "Second");
})

const p3 = new Promise(resolve => {
  setTimeout(resolve, 3000, "Third");
})

const racePromise = Promise.race([p1,p2,p3]);
racePromise
.then(values => console.log(values)) 
.catch(error => console.log(error)); // 결과 : First reject