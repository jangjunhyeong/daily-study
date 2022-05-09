let a = 1;
let b = 1;
let c = 2;
// 지역변수, 변역변수 local scope, global scope
function valueTest() {

if(typeof a ==="number"){
	console.log("변수 a는 데이터타입이 숫자입니다.")
}
if (typeof b ==="number"){
	console.log("변수 b는 숫자타입이 아닙니다.")
} else {
console.log("변수 b는 데이터타입이 숫자가 아닙니다.");
}
}
// valueTest();

// function valueTestTwo(){

// 	// 앰퍼샌드 사용(&&)
// 	// 버티컬바(원 표시에서 shift)||
// 	if(typeof a==="number" && typeof b ==="string"){
// 		console.log("변수 a와 b는 모두 number 타입입니다.")
// 	} else {
// 		console.log("다 모르겠는데, 둘 중 하나 이거나 둘 다 number 아닐 수 있습니다.");

// 	}

// }
// valueTestTwo();

// if / else 중에 하나가 메인 알고리즘인 경우가 많다.
// function valueTestTwo(){
// 	if(typeof a === "string"){
// 		console.log('a는 string 입니다.');
// 	} else{
// 	if(typeof a ==="number"){
// 		console.log("a는 number입니다.");
// 		if (a===1){
// 			console.log('a는 1입니다.');
// 		} else{
// 			console.log("a는 1이 아닙니다.")
// 		}
// 	} else {
// 		console.log("a는 number가 아닙니다.")
// 	}
// 	}
// }
// valueTestTwo();

function valueTestThree(){
	if(a===c){
		console.log('a와 c는 같습니다.');
	}
	else{
		console.log('a와 c는 값이 다릅니다.')
	}
	if (typeof a!=="string"){
		console.log('a는 string이 아닙니다.')
	}
	if(a===b){
		console.log('a와 b는 같습니다.')
	}
	if(a===b===c){
		console.log('a와 b와 c는 같습니다.')
	}
	else{
		console.log('a와 b와 c중 하나 이상은 값이 다릅니다.')
		let a=1;
		let b=1;
		let c=1;
		console.log(a);
		console.log(b);
		console.log(c);



		//Q1. 질문
		if(a===b===c){
			console.log('이제 a와 b와 c는 같습니다.')
		}
			else{
				console.log('여전히 a와 b와 c는 다릅니다.')
			}
	}
}
valueTestThree();