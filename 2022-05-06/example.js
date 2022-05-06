// console.log('test');

let value=0;
// 변수 선언과 동시에 값을 대입했다. : 초기화 했다.
// initialize, init
// value = 100;
console.log(value);
// 값을 새로 할당 (assignmnet)
// = (대입연산자를 활용)

// 첫 번째 파라미터(매개변수) 함수, 매개변수 자리에 실행할 함수가 자리가잡은 것을 "callbackfunction" "콜백함수" 라고 한다.
// callback function 
// callback function hell : 굉장히 헷갈리는 포인트가 있게 된다.
let interval = 100;
const timer = setInterval(function() {
	// 함수를 변수에 담는 코딩패턴 = 함수 리터럴, 함수 표현식
	// clearInterval을 작동시키려고 식별을 위해 변수에 대입했다.
	// 변수 timer 는 함수 setInterval을 가리킨다.
	console.log(value);
	value++;
	// 이렇게 해야 콘솔을 찍고 value가 증가된다.
	// value = value + 2;
	// 같은 방식은 value +=2;
	if(value>100){
		clearInterval(timer);
	}
}, interval);