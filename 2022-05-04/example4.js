let a = 1;
// console.log(a);
// global 함수 어디는 함수에 연결된 무엇이든 접근이 가능하다.
// 꺼내올 수 있다.
// global scope

function b(){
	// 함수 b는 목적이 콘솔 찍고 종료하는 기계
	// return 값은 없다. → undifined 값이 리턴된다.
	// console.log(a);
	var c = "오늘 점심은 무얼 먹을까요";
	return c;
}

console.log(b());
b();
// local 중괄호 안에 있는 함수 내용은 local 이다.
// return 을 하지않으면 중괄호 안에서 끝난다.
