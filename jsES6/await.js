// ------filter -------//
// await는 anync 함수 안에서만 동작함

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000);
  });

  let result = await promise;

  console.log(result);
}

f();
