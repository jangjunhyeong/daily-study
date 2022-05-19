
	// <!-- 1, 2, 3, 4, 5, 라는 배열이 있다. -->
	// <!-- 처음 배열 shift()로 빼고, 뒤에 push() -->
	// <!-- div 배열의 -->
const root = document.getElementById("root");
console.log(root);
// root div 선언완료
const btnA = document.getElementById("A");
const btnB = document.getElementById("B");
console.log(btnA);
console.log(btnB);
// button 선언 완료
const text =document.getElementById("text");
console.dir(text);
console.log(text.children);
const textArray = [1,2,3,4,5];
console.log(textArray);

const con = document.getElementById("con");
console.log(con);
con.style.display='flex';
text.style.display='flex';

for(let i=0; i<textArray.length; i++){
	text.children[i].textContent=textArray[i];
}
// for문을 돌려 children div의 값을 채워주었다.
// const text =Document.getElementById("text"); 
// Document와 document의 차이는 뭘까.


// btnA.addEventListener("click",function(){
// 	// console.log("test왼")
// 	textArray.shift();
// 	for(let index=0; index<textArray.length; index++){
// 		textArray.push(textArray.shift());
// 		text.children[index].textContent=textArray[index];
// 		console.log(textArray);
// 		if(index>=4){
// 			index=0;
// 		}
// 	}
// })

btnA.addEventListener("click",function(){
	// console.log("test왼")
	let index=0;
	textArray.shift();
	textArray.push(textArray.shift());
	
})

	// 앞 배열 요소가 삭제되고, 뒤로 붙긴 하는데 i가 증가하니까
	// 함수값 위치만 바꿔주면 될 듯 하다.
	// 일단 킾
	
	// 왼쪽 누르면
	// text.children[0].textContent=textArray[1];
	// text.children[1].textContent=textArray[2];
	// text.children[2].textContent=textArray[3];
	// text.children[3].textContent=textArray[4];
	// text.children[4].textContent=textArray[0];
	// 이 순서임

	// 구조 확인
// 	let zero=0;
// 	let index=1;
// 	btnA.addEventListener("click",function(){
// 		console.log(zero);
// 		zero++;
// 		for(index=1; index<textArray.length; i){
// 			text.children[zero].textContent=textArray[index];
// 		}
// });
// 이것도 일단 킾



// try to solve3 각각의 배열에 각각에 번호를 붙혀서 제어해보기
// for문과 if문이 겹치는 상황이라고 생각했기 때문에 충돌을 막기 위해
// 일일이 숫자변수를 상속시켜주었다.
// 일단 안되는 상태.
// let zero=0;
// let one=1;
// let two=2;
// let three=3;
// let four=4;
// btnA.addEventListener("click",function(){
// 	console.log("testLeft");
// 	zero++;
// 	one++;
// 	two++;
// 	three++;
// 	four++;
// 	if(four>=4){
// 		four=0;
// 	}
// 	text.children[0].textContent=textArray[zero];
// 	console.log(zero);
// 	text.children[1].textContent=textArray[one];
// 	console.log(one);
// 	text.children[2].textContent=textArray[two];
// 	console.log(two);
// 	text.children[3].textContent=textArray[three];
// 	console.log(three);
// 	text.children[4].textContent=textArray[four];
// 	console.log(four);

// })
// text.children[0~4].textContent는 고정으로 넣고 Array[index]에서 index값만 조정해주면 될 것 같다.

btnB.addEventListener("click",function(){
	console.log("testRight")
})



