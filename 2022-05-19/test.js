let obj = {
	a:1,
	b:2,
	c:1,
	d:2,
	sum:function(one, two){
		if(typeof one === "number" && typeof two === "number"){
			return one+two;

		} else {
			console.error("데이터 타입 입력이 잘못되었습니다.");
		}
	}
}

console.log(obj.a !== obj.b ||  obj.a===obj.c); 
console.log(obj.a !== obj.b &&  obj.a===obj.c); 
// 부정연산자

console.log(obj.sum(obj.a,2));

// 복잡하면?
// console
// true or false 알아보기
// 추적

