const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.

// let count = 0;
// for(let i=0; i<dummyText.length; i++){
// 	if(dummyText[i]==="of"){
// 		count++;
// 	}
// }
// console.log(count);

// let count1 = 0;
// let result = dummyText.filter(function(index){
// 	if(index === "of"){
// 		count1++;
// 		return count1;
// 	};
// });
// console.log(result);
// console.log(result.length);
// filter는 무조건 배열

// let test = dummyText.filter(index =>){})


// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.

let tempArr = []
let mapping = dummyText.map(function(value,index){
	if(value === "dummy"){
		value="sementic"
	}
});

let test = dummyText.map(value => {if(value ==="dummy") {value ="sementic"}})
// ? 포함이면 includes 랑 같이 써야하나요?

// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.
dummyText.forEach(function(value,index){
	if(value === "the"){
		dummyText[index+1] ="web"
	}
});

// 또는 splice 써보기 

// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.

const countTextLength = dummyText.reduce(function(beforeValue,currentValue){
	return beforeValue + currentValue;
})
console.log(countTextLength.length);

// reduce가 잘 이해가 안됨. 


// map과 reduce는 매우매우 많이 쓴다.