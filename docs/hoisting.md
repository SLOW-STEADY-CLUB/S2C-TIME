- 호이스팅
    - 자바스크립트 엔진이 변수, 클래스, 함수의 선언을 최상단으로 끌어올리는 것
    - 변수의 호이스팅
        - 변수 선언만 호이스팅 됨
            - 예외) var는 선언과 초기화까지 호이스팅 됨
- 함수의 호이스팅
    - 함수의 선언문은 함수 전체가 호이스팅이 됨
    - 함수의 표현식(화살표 함수)는 선언만 호이스팅 됨 → 에러 발생

```jsx
//전역변수 => 블럭 내부에서 참조 가능함
let dog = "rive";
{
///////이곳에서 dog에 대한 선언만 호이스팅 됨
console.log(dog) // 초기화가 되어 있지 않아 ReferencdError : Cannot access "dog" before initialization가 발생함
let dog;
dog = "mung"
}
```