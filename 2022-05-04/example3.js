// function a() {
// 	console.log('test');
// 	// return "메롱";

// }
// a();
// console.log(a());




function b(first, second){
	if(typeof first==="number"){
	// "타입체크"
	return first-second;
} else {
	console.log("첫 번째 매개변수가타입이 숫자가 아닙니다.");
}
}
console.log(b(2,5))
console.log(b("ㅇ",5))
// a= 15*3
// console.log(a);
