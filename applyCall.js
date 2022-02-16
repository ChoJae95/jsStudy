// ------ apply / call -------// 

var person = {
  hello : function(){
    console.log(this.name + ' 안녕') 
  }
}

var person2 = {
  name : '손흥민'
}

// apply는 파라미터를 [array]로 한꺼번에 집어넣을 수 있음
person.hello.apply(person2, [1,2,3]); // 결과 : 손흥민 안녕

// call은 그냥 1,2,3 이렇게 일반 함수처럼만 집어넣을 수 있음
person.hello.call(person2, 1,2,3); // 결과 : 손흥민 안녕


function sum(a,b,c){
  console.log(a + b + c)
}

var 어레이 = [10, 20, 30];
sum(...어레이);  // 요즘방식 넣기 (Spread Operator)
sum.apply(undefined, 어레이);  // 옛날방식 넣기