const pokemonList = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '또가스'];

// todo : Q1. pokemonList의 총 길이값이 얼마인지 프로그래밍을 통해서 console에 출력하시오.
console.log(pokemonList.length);
// 8

// length를 지원하지 않는다면? 잘 쓰는 방식은 아니지만

let isStatus = true;
count = 0;
while(isStatus === true && count < 5){
	console.log('test');
	if(pokemonList[count] !==""){
		count++;
	} else {
		isStatus = false;
	}
}






// todo : Q2. "야도란" 이라는 원소(element)가 몇번째에 있는지 프로그래밍을 통해서 console에 출력하시오.
console.log(pokemonList.indexOf("야도란"));
// 선언형 프로그래밍

// 5가 나오는데 6번째니까 5가 맞다. 0부터 시작하니까!

for (let i =0; i<pokemonList.length; i++){
	if(pokemonList[i] === "야도란");
	console.log(i);
}
// 절차형 , 명령형 프로그래밍  : 절차형으로 먼저 쓰고 이해한 뒤에 indexOf 를 사용해보자!
// 짝수번째의 포켓몬, 홀수 번째의 포켓몬도 한 번 어떻게 할지 고민해보자!


// todo : Q3. "야도란" 이라는 원소(element)를 "메타몽" 이라는 string으로 변환하여 배열 전체를 console을 통해 조회하시오.

// const test = "하이하이";
// let re = test.replaceAll('이','의');
// console.log(re);
// 문자열은 해결

// let result = pokemonList.replaceAll('야도란','메타몽');
// console.log(result);
pokemonList.splice(5,1,"메타몽");
console.log(pokemonList);
// 이거는 5번째 배열에 있는 요소 (6번째인 야도란)를 1개 제거하고 "메타몽"을 추가한 함수이다.
//  문자열을 바꿔버릴 수 있는 방법은 없을까??

for (let i =0; i<pokemonList.length; i++){
	console.log(i);
	if(pokemonList[i] === "야도란"){
		pokemonList[i] = "메타몽";
	}
}
console.log(pokemonList);

// todo : Q4. "리자몽"을 pokemonList 맨 마지막 원소로 프로그래밍을 통해 추가하시오.
pokemonList.push("리자몽");
console.log(pokemonList);
// 리자몽을 push한 시점부터 pokemonList의 원소에 리자몽이 추가가 된다.
pokemonList[pokemonList.length] = "리자몽";

