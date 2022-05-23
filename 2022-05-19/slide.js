
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
const textArray = ['1','2','3','4','5'];
console.log(textArray);

const con = document.getElementById("con");
console.log(con);
con.style.width='100vw';
con.style.height='100vh';
con.style.display='flex';
con.style.justifyContent='center';
con.style.alignItems='center';
text.style.display='flex';

for(let i=0; i<textArray.length; i++){
	text.children[i].textContent=textArray[i];
}
// for문을 돌려 children div의 값을 채워주었다.
// const text =Document.getElementById("text"); 
// Document와 document의 차이는 뭘까.

// 얘는 왜 안될까? 변수를 안쓴거 말고는 다른게 없는데?
// btnA.addEventListener("click",function(){
// 	// console.log("test왼")
// 	textArray.shift();
// 	console.log(textArray.shift());
// 	textArray.push(textArray.shift());
// 	for(let index=0; index<textArray.length; index++){
// 		text.children[index].textContent=textArray[index];
// 		console.log(textArray);
// 	}
// })

// array[0] (배열의 0번째는 temp라는 변수로 선언했던 방식을 토대로)
// 삭제했던 배열의 N번째 (첫번째 또는 마지막 번째)를 변수로 선언해서
// 불러오는 방식을 시도해보았다.


// 해볼만한 것 위에는 안되고 왜 아래는 되는지? 위아래 addEventListener가 어떻게 다른지
// 연구해보기 - 사실 변수를 썼냐 안썼냐의 차이인데 왜 결과물이 다른지를 생각해보아야 했다.

// 얘는 왜 잘 될까? 변수를 쓴 것 뿐인데?
btnA.addEventListener("click",function(){
	console.log("test왼");
	let left = textArray.shift();
	console.log(left);
	let leftpush = textArray.push(left);
	// 가비지 콜렉션(GC);
	// 아깐 떴는데 지금은 또 안뜬다. 회색으로 되었던 GC
	console.log(leftpush);
	// 출력값  5
	console.dir(leftpush);
	// 출력값  5
	console.log(leftpush.length);
	// undefined 출력 
	console.log(textArray);
	for(let i=0; i<textArray.length; i++){
		text.children[i].textContent=textArray[i];
	}
})
btnB.addEventListener("click",function(){
	console.log("test오");
	let right = textArray.pop();
	console.log(right);
	let rightunshift = textArray.unshift(right);
	// GC 발생
	console.log(textArray);
	for (let i=0; i<textArray.length; i++){
		text.children[i].textContent=textArray[i];
	}
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





