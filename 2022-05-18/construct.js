// console.log("test")

// const memberOne = {
// 	name : "호빵맨",
// 	gender : "male",
// 	age : 17,
// 	deskNumber : 18,
// 	glasses : false,
// 	married : false,
// 	like : "redbean"
// }

// const memberTwo = {
// 	name : "버터",
// 	gender : "female",
// 	age : 20,
// 	deskNumber : 21,
// 	glasses : false,
// 	married : false,
// 	like : "butter"
// }

// console.log(memberOne.name);
// console.log(memberTwo.name);

//* 생성자 함수 : constructor function
//* 객체를 찍어내는 거푸집 틀
//* 석고 뜨는 함수

// function Member(name, gender, age, deskNumber, glasses, married, like){	
// 	this.name = name;
// 	this.gender = gender;
// 	this.age = age;
// 	this.deskNumber =deskNumber;
// 	this.glasses = glasses;
// 	this.married = married;
// 	this.like = like;
// }

// const memberOne = new Member("식빵맨","male","17","11","false","no","toast");
// console.dir(memberOne);


// const test1 = new Date();
// console.dir(test1.getHours());

// function ampm(hour,msg) {
// 	if(hour>=12){
// 		console.log(msg+(hour-12) + "시 입니다." );
// 		console.log(memberOne.like);
// 	} else {
// 		console.log("오전 입니다." + hour);
// 	}
// }

// ampm(test1.getHours(), "오후입니다.");


// console.dir(Array().concat);
// Array(). 뒤에 다양한 method가 있다.

// const week = new Date();
// console.log(week);
// 현재 시간이 나온다.

// function clock(){
// 	const date = new Date();

	let HH =Date.getHours();
	let MM =Date.getMinutes();
	let SS =Date.getSeconds();

// 	return <div>{`${HH}:${MM}:${SS}`}</div>
// }
console.log(`${HH}:${MM}:${SS}`)

