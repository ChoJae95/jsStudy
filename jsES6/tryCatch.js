
try {
  // 이곳의 코드를 실행
} catch(err) {
  // 에러가 발생하면, 여기부터 실행됨
  // err는 에러 객체
} finally {
  // 에러 발생 여부와 상관없이 try/catch 이후에 실행됨
}



let json = "{ json }";
// let json = '{"name":"choJaeYoung", "age": 28}';

try {
  let user = JSON.parse(json);
  console.log( user.name ); 
} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  console.log( "데이터에 에러" );
  // console.log( e.name );
  // console.log( e.message );
} finally {
  console.log('초기화')
}