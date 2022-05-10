// 고차함수 : 제작자가 만드는 것
// higher order function
// 알고리즘 제작법

function typeA() {
	console.log('아이워즈카');
}
// typeA();

function typeB() {
	// typeB의 함수 알고리즘은
	// 무슨 문자열을 콘솔에 찍은 다음
	// typeA() 함수를 호출해준다.
	// console.log('날쌔게 달려봐요 햄토리')
	// typeA();
}
// typeB();
// 얘는 위로 올려도 가장 최상단으로 처리돼서 어디에 놔도 상관없다.

function typeC(target) {
	target.addEventListener("click", function(){});
	target.addEventListener("scroll",function(){});
	target.addEventListener("wheel", function(){});
}
// 이렇게 써도 된다. arrow function 을 사용
// function typeC(target) {
// 	target.addEventListener("click", ()=> {});
// 	target.addEventListener("scroll",()=> {});
// 	target.addEventListener("wheel", ()=> {});
// }
// typeC(root);
// typeC(items);

// 객체로 묶어서 관리한다. 객체지향 (백엔드에서 주로 사용)
const typeP = {

	ObjectA : function(string){
		console.log(string);
	},
	ObjectB : function(){

	}

}
// typeP.ObjectA("hello");

// console.log(console);