// console.log('test'); 
// 실행에는 문제가 없음
let one;  // Todo : 변수 선언은 했고, 값은 무엇을 '가리키지는' 않는 상태
1; // 
// todo : 식별을 위해서 값과 변수를 대입하는 과정을 통한다. = (등호 표시)

let test = 1;  // ? 변수 선언과 동시에 값을 가리켰다. 초기화가 되었다.
// ? RAM 이라는 메모리에 일단 담긴다. "식별할 방법" === 변수의 큰 의미

// 값은 존재하는 상태
// 활용이 아직 안된 상태
// 변수를 왜 쓰는가?
// 데이터 숫자타입 1이라는 저 값을 쓸 방법이 없음. → 변수를 사용하지 않으면
console.log(one);
//undefined 값이 정해지지 않았다 → 변수는 존재하지만 무엇을 가리키지는 않는다.


// console.log(two);
// const two;
// SyntaxError: Missing initializer in const declaration  : 작성법 에러 - 상수 선언할 때 값이 초기화가 안되어서 못 찾았다.

const two = 1;
// 변수 선언과 동시에 값도 같이 가리키게 만든다. const 의 규칙
// 에러가 났다 === 해결만 한다면 무결해진다.
// 

console.log(1 === "1"); 
// 1 == "1" 로 작성하면, true 로 뜨는데 최악. 문자열 1과 숫자를 동일하게 처리하는 js

let a = 1;
let b = "2름";

// console.log(a===b);
// console.log(typeof a === typeof b)

let change = String (b);

console.log(typeof change);

let cha = null;
// todo : null 존재는 하지만 비어있는 값, 프로그래밍에만 있는 개념 "빈공간"
// todo : null 이라는 값이 존재하면 : 아직 값이 정해지지 않았다.

// console.log(typeof cha);

let arr = ["피카츄", "라이츄", "파이리", "꼬부기"];

console.log(typeof arr); 
console.log(Array. isArray (arr));
// 배열을 검출하고 싶으면 console.log(Array. isArray (arr));

// 

let text = "나는 잘생긴 토마토";

console.log(text.length);
console.log(text[7],text[8],text[9]);