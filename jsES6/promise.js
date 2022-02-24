// ------promise(프로 미스) -------// 
// 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

const promise1 = () => {
  let data = [1, 2, 3, 4, 5];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promise 1sec');
      if (data.length == 4) {
        reject(new Error('errrrrrr'));
      } else {
        resolve(data);
      }
    }, 1000);
  });
};

const f = () => {
  return promise1().then((result) => {
    return result;
  });
};

(async () => {
  console.log('___ start2');

  try {
    let tmp = await f();
    console.log(tmp);
  } catch (e) {
    console.log('err', e);
  }

  console.log('___ end2');
})();
