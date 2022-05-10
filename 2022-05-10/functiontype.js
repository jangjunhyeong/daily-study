
// 선언 (declaration)
function typeA(){

}
// * 전역 스코프 (global)


typeA();

// 기명(이름이 있는) 선언방식
// 

// 함수 리터럴 우리는 setInterval에 썼었음
// 익명함수(anonymous function) / 함수 리터럴 (literal) : 직접 새긴다.
// 함수 표현식(function expression)
const typeB = function() { 

}
//  제작자는 알지만 외부사람은 모르는 방식 : 권장되는 방식
typeB();

// arrow function (화살표 함수)
// 함수표현식과 같은 기능
// 축약형(개발자가 귀찮아서)
// 특정 작동 때문에 -> 최신 문법 중 하나

// 일단 소괄호면 무조건 함수
// >= 이게 비교연산자 / => 이건 arrow function
// var 버전에는 없다.
const typeC = () => {}

const typeE = a => {} // 매개변수가 하나일 때는 소괄호도 삭제해도 된다.
// const typeE = (a) => {} // 매개변수가 하나일 때는 소괄호도 삭제해도 된다. 근데 인간적으로 소괄호는 쓰자. 헷갈리니까


const typeD = function() {}
//  같은 말


// 얘는 뭐니.
(function() {})
// 선언이고, 호출이고 모르겠고, 즉시 실행하겠다.
// 즉시 실행함수

// 문서 시작할 때 많이 씀 -> 즉시 시작 함수구나 하면 됨

let test;
test.addEventListener("type",function(){})
// 함수의 매개변수 자리에 함수가 들어가 있는 것 "콜백 함수"
// 콜백함수는 익명이 기본이다.
// 매우 많이 사용하기 때문에 눈에 익혀야된다.

test.addEventListener('test',testFunction); // function() <- 소괄호를 사용하지 않는다 라는 특징이 있다.

function testFunction(){
	// 밖으로 빼낸 콜백함수
	// 기명으로 함수를 만들어줌
	// 
}