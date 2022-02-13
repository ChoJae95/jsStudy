// ------ 맵 -------// 

// key와 value의 형태로 데이터를 저장한다는 것입니다. 
// Map의 키는 문자열뿐만 아니라 함수 혹은 다른 데이터 타입도 키로 사용할 수 있습니다.

const map = new Map( [ ['a', 1], ['b', 2], ['c', 3], ['9', 4], ['e', 'Hello'] ])
console.log('------- Map 1 -------')
for (let [k, v] of map) {
    console.log(k, v) // 
}

console.log('------- Map 2 -------')
for (let k of map.keys()) {
    console.log(k, map.get(k))
}

console.log('------- Map 3 -------')
for (let v of map.values()) {
    console.log(v)
}

console.log('------- Map 4 -------')
for (let [k, v] of map.entries()) {
    console.log(k, v)
}

console.log('------- Map 5 -------')
map.forEach(function(v, k) {
    console.log(k, v)
})

//  결과 : a 1
//         b 2
//         c 3
//         9 4
//         e Hello