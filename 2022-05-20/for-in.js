const poke ={
	a:'꼬부기',
	b:'파이리',
	c:'뚜벅초',
	d:'푸린',
}

// for (let key in poke){

// }
// 객체의 key 값만큼 반복해줘 key는 다른거 써도 됨
// for (let key in poke){
// 	console.log(key);
// 	console.log(poke.a);
// }
// syntax 외우기 key 말고 props도 많이 쓰는 편

// for (let key in poke){
// 	console.log(typeof key);
// }
// string

// for in
// for(let props in poke){
// 	console.log(poke[props]);
// }

// // 꼬부기 가져오기
// console.log(poke.a); 		// 이건 변형
// console.log(poke["a"]); //이게 원형


// for(let props of poke){
// 	console.log(poke[props]);
// }

let pokeArr = [];
for(let props in poke) {
	console.log(poke[props]);
	pokeArr.push(poke[props]);
}
console.log(pokeArr);