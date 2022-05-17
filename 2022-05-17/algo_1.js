const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.
// for(i=0; i<dummyText.length; i++){
// 	if(dummyText[i]==="of"){
// 		console.log(i);
// 	}
// }
// 8번 나오긴 함. 6, 32, 69, 88, 108, 128, 154, 167

// of가 들어가있는? 포함되어 있는 함수를 만들어 줘서 그 새로운 배열의 length값을 가져오면
// 될 것 같음.
let indices = [];
let offind = "of";
let idx = dummyText.indexOf(offind);
while (idx !=-1){
	indices.push(idx);
	idx = dummyText.indexOf(offind, idx+1);
}
// -1이면 계속 돌려주면서 1씩 추가해줘~
console.log(indices);
console.log(indices.length);
//  MDN 참고


// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.
// for(i=0; i<dummyText.length; i++){
// 	if(dummyText[i]==="dummy"){
// 		dummyText[i]='sementic';
// 		console.log(i);
// 	}
// }
// console.log(dummyText);

// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.
// for(i=0; i<dummyText.length; i++){
// 	if(dummyText[i]==="the"){
// 		dummyText[i]='the web';
// 		console.log(i);
// 	}
// }
// console.log(dummyText);

// const map1 = dummyText.map();
// console.log(map1);


// Todo : Q-4. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.
// - 배열을 join으로 다 합친다음에 length 구하면 되겠네
// console.log(dummyText.join('').length);
// 981
// console.log(dummyText.length);