// 똑딱이를 만들어보자!

let b = "부먹";
let j = "찍먹"
// 일단 2개의 text를 정해본다.
console.log(b);
console.log(j);

let isStatus = true;
let current = 0;

const timer = setInterval(function(){
	if(isStatus===true){
		console.log(b);
		isStatus=false;
	} else {
		console.log(j);
		isStatus=true;
		current++;
		console.log(`부먹과 찍먹 때문에 ${current}번째 싸우고 있습니다. 그냥 먹지`)
	}

	if (current===5){
		clearInterval(timer)
	}


},500)


// if (isStatus===true){
// 	console.log(b);
// 	// isStatus가 true와 같으면 console.log(b);를 찍어주고,
// 	isStatus=false;
// 	// isStatus에 false를 대입해줘!
// 	console.log(isStatus);
// } else {
// 	console.lob(j);
// 	isStatus = true;
// }

