const root = document.getElementById('root');

const ul = document.createElement('ul');

root.appendChild(ul);

// for(let i=0; i<10; i++) {
// 	const li = document.createElement('li');
// 	li.textContent = i;
// 	ul.appendChild(li);
// }

let liElement = [];
for(let i =0; i<10; i++){
	liElement.push(`<li>${i}</li>`);
}
console.log(liElement.join(""));
ul.innerHTML = liElement.join("");

// crateElement : 부모자식 관계까 너무 복잡해
/* 엉뚱한 데 붙으니까, innerHTML 으로 해결하기
이게 react와 vue의 관점


한줄로 쭉 잡혀도(배열이) 상관없는 특성을 활용

.textContent : HTML을 해석하지 않는다.
.innerHTML, .outerHTML : HTML을 해석한다.

문자열을 잘 다루면 -> 붙이기만 하면 된다.
'배열'

JS의 '복잡도'를 낮출 수 있게 된다.
-> createElement의 사용이 익숙해져야 안다.

*/