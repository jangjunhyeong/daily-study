// 자동화

// let current=0;

// let timer = setInterval(function() {
// 	console.log(current);
// 	current++;
// 	if(current===60){
// 	console.log('1분이 경과되었습니다.');
// 	clearInterval(timer);
// 	}
// },1000);


let current=0;

let timer = setInterval(function() {
	console.log(current);
	current++;
	if(current===60){
	console.log('1분이 경과되었습니다.');
	clearInterval(timer);
	}
},1000);
