let i = 100;
//work 1. 1번 행동에는 i가 10이 덧셈되고 콘솔레 출력된다. -> 110
//work 2. 2번 행동에는 i를 30을 빼고 콘솔에 출력된다. -> 80
// todo : 총 2초간 두 번의 계산을 진행시킨다.


// i = i+10;
// console.log(i);
// i = i-30;
// console.log(i);

// 모션작업과 외부 API를 끌고오는데 매우 유용한 편.

function first() {
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			i=i+10;
			console.log(i);
			resolve();
		},1000);
	});
}
first()
	.then(function(data){
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				i=i-30;
				console.log(i);
				resolve();
			},1000);
		});
	});
