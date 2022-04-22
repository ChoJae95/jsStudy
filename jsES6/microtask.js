let promise = Promise.resolve();

Promise.resolve()
  .then(() => console.log("프라미스 성공!"))
  .then(() => console.log("코드 종료"));
