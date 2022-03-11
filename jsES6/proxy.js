// ------ proxy ------- //
// 화면과 데이터의 양방향 바인딩 구현 용이

// 점수 계산
let dummy = {
  score: 0,
  lines: 0
}

let prx = new Proxy(dummy, {
  set: (obj, prop, value) => {
    // 대상 객체, set이 일어난 대상, 할당된 값
    console.log("set동작", obj, prop, value);
  },
  get: (obj, prop) => {
    // 대상 객체, get이 일어난 대상
    console.log("get동작", obj, prop)
  }
});

// set
prx.score = 1; // 결과 : set동작 { score: 0, lines: 0 } score 1
prx.lines = 2; // 결과 : set동작 { score: 0, lines: 0 } lines 2

// get
let s = prx.score; // 결과 : get동작 { score: 0, lines: 0 } score
let l = prx.lines; // 결과 : get동작 { score: 0, lines: 0 } lines