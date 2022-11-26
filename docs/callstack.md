- 비동기 통신
    - Javascript의 **비동기 처리**란 **특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고
    다음 코드를 먼저 실행**하는 Javascript의 특성을 의미한다.
- Promise를 사용한 비동기 통신과 async, await 를 사용한 비동기 통신의 차이
    - Promise를 사용한 비동기 통신
        - 반복되는 콜백지옥을 피하기 위해 등장
        - resolve 의 값은 .then(),
        reject의 값은 .catch()를 이용한 후처리 메소드 이용 가능
    - async, await 를 사용한 비동기 통신
        - promise.then() 반복(프로미스 체이닝)을 피하기 위해 등장
        - 가독성이 좋아짐 try-catch()문을 이용한 에러 핸들링 필요
    

# Demo

- Callstack

```jsx
**//1
function a() {
    setTimeout(()=>{
        for(let i = 0; i < 9000000000000000000000000000000000000000000000; i++);
    },[3000] )
    
    return 1;
}
//2
function b() {
    return a() + 1;
}
//3
function c() {
    return b() + 1;
}
console.log('실행됐다.');
const result = c();
console.log(result)
//하 3-2-1, 3
//선 1-2-3, 3
//수 1-2-3, 3
console.clear();
console.log(rive);
console.log(sieo);
// console.log(dog);
var rive;
var sieo = 'cute';
let dog;
dog = 'mung';

console.log(typeof noah);**
```