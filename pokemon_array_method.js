const pokemon = require('pokemon');

// console.log(pokemon);
// console.log(pokemon.getName(150, "ko"));
// console.log(pokemon.getName(905, "ko"));
// pokemon에서 n번째 포켓몬을 한국말로 불러줘!

// console.dir(pokemon);
// console.log(pokemon.all());

// Q1. j로 시작하는 포켓몬 찾기
// " "맨 앞 글자"가 j"
// " 영어로 값 가져오기"
// filter 와 string.startsWith( searchString, length ) 를 사용하면 될듯하다.
// includes는 정확하게 맞는 요소를 가져오는 메서드이기 때문에 적합하지 않음.



// console.log(pokemon.getName(1,"en"));


// console.log(pokemon.all());
// console.log(Array.from(pokemon.all()));
// 이미 배열

// const A1 = "Abra"
// console.log(A1.startsWith('A'));
//true

// console.log('abc'.startsWith('a'));
// true;
// console.log(pokemon.getName(1,"en"));
// console.log(pokemon.getName(2,"en"));
// console.log(pokemon.getName(3,"en"));
// console.log(pokemon.getName(4,"en"));
// console.log(pokemon.getName(5,"en"));

// console.log(pokemon.getName(5).startsWith('C'));
//true;

// console.log(pokemon.getName(1).startsWith('C'));\
// false;





// let value = 1;
// console.log(pokemon.getName(value,"en"));
// Bulbasaur
// console.log(pokemon.getName(value).startsWith('B'));
// true
// 이거까진 완료 

// for (let i=1; i<pokemon.all().length; i++){
// 	console.log(pokemon.getName(i,"en"));
// }
// 여기까지 완료

// for (let i=1; i<10; i++){
// 	console.log(pokemon.getName(i,"en"));
// }
// 얘도 완료


// 문 제 : 포 켓 몬 전 체 리 스 트 에 서 J 로 시 작 하 는 포 켓 몬 찾 기 // 

// ★ 풀어야 하는 문제 ★
// for문과 if문을 함께 사용하여 값을 추출하기 → 실패

// ★ 기본형으로 탐구하기 ★
// 포켓몬의 값을 영어로 가져오기 → 성공
// 해당 String이 해당 text로 시작하는지 startsWith method를 사용하여 알아보기 → 성공
// for문으로 N 번째부터  N+ x 번째까지의 값 가져오기 → 성공

// 최종은 이게 될 것 같다.

// for (let i=1; i<pokemon.all().length; i++){
// 	if(pokemon.getName(i)===pokemon.getName(i).startsWith('J')){
// 		console.log(pokemon.getName(i,"en"));
// 	}
// }
// pokemon.all()을 5로 해도 안된다.
// === 를 !==으로 찍으니까 콘솔이 찍히긴 한다.
// 안되는 이유 = if의 조건식이 잘못됐다 → 이게 가장 유력하다.
let count = 0;
for (let i=1; i<pokemon.all().length; i++){
	if(pokemon.getName(i).startsWith('J')){
		console.log(pokemon.getName(i,"en"));
		count++;
	}
}
// 이제야 해결 if 조건식이 잘못되었다.
console.log(count);
// count라는 변수까지 넣어서 J로 시작하는 포켓몬이 몇마리인지까지 야무지게 알 수 있었다.




