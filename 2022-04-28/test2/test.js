console.log('test');
console.log(5+3);
console.log(18+4);
console.log(1554333+45);
console.log(12345151+3245151);
console.log(123134+24534);
console.log(4235+2346);
console.log(564+3);
console.log(4211+8499);
console.log(123+357);

let one = 1232135;
let two = 5477775;
let three = 1255;
console.log(one+two);
console.log(two+three);
// 매번 어떻게 다쓰지?

// function sum(front, back) {

// 	return front + back;

// 	// 값은 무엇인지 모르겠지만, 어쨌거나 front와 back을 더하는 함수//
// 	// front와 back은 매개변수(=parameter)
// 	// 들어가는 값 = argument
// }

// sum(1,2);
// console.log(sum(1,2));


function sum(front, back) {


	if(typeof front === true){
		let result = front + back
		return  result

	} else{
		console.log("당신이 작성한 front 매개변수는 타입이 숫자가 아닙니다.")
	}

}
console.log(sum("흠",3));