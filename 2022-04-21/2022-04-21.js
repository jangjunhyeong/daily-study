// console.log(typeof yaho);
// console.log(typeof text);
let yaho = "야호";
let text = "무야호!"
let san = "산에"
let ga = "가면"

let foodObject = { //객체가 생겨난 이유 - 한 두개일 때는 문제가 안되는데 수백개 일경우 힘드니까 생겨남//
	chobab : "초밥",
	guaja : "과자",
	cof : "커피"
}

//알고리즘, 프로그래밍을 하기 따라서 객체, 배열, 변수로 얼마든지, 바꾸어 사용해도 된다.
// 자료 구조 - 알고리즘을 편하게 쓰기위해서 범주화시킨 것
// 변수에 작명할 때 "데이터타입을" 살짝 표시해주는 버릇을 가지면 → 애둘러 찾을 필요가 없다.
// "yaho" 라는 변수는 foodObject라는 객체의 무언가는 가져다 쓰겠지" → 예상할 수 있게 된다.
//? 값이 별로 중요해지지 않는다.
//? 타입이 중요하다.

// console.log(foodObject);
// foodObject의 항목들을 찾아줘

// let stringSum = `${yaho}가 무 ${san}${ga} ${text} ${food.cof}`;
// 변수 stringSum 이라는 녀석은 변수 yaho 라는 변수와 text라는 변수를 앞뒤로 합쳤다.
// console.log(stringSum)

let pokemon = ["이상해씨", "이상해풀", "이상해꽃", "파이리", "리자드", "리자몽"]
// 배열에는 원소(요소=element), length 값이 6인 데이터를 → 변수 pokemon에 대입했다.
console.log(pokemon);
console.log(pokemon.length);
// 배열의 키값 중에 길이값을 가져오는 length라는 프로퍼티를 접근했다. getter 
console.log(pokemon[3]);
// index값은 0부터 시작한다.
console.log(pokemon[pokemon.length-1]);
// 마지막 값을 → 길이값의 -1 = 무조건 마지막 원소 

let three = 3;
console.log(pokemon[three]);


let max = `포켓몬 ${pokemon[0]}의 최종진화는 ${pokemon[0+2]}`
console.log(max);


let coffeeArray = ["얼그레이", "캐모마일", "페퍼민트", "녹차"]
console.log(coffeeArray);
console.log(coffeeArray.length);
let compare1 = `저기 모퉁이 옆 카페에서는 ${coffeeArray[0]}보단 역시 ${coffeeArray[0+1]}(이/가) 맛있지~`
console.log(compare1);
let compare2 = `뭐라는 거야, ${coffeeArray[0+1]}(을/를) 왜 먹냐, ${coffeeArray[0]}(을/를) 먹어야지!`
console.log(compare2);

let lunch = ["국밥", "파스타", "김밥", "치킨", "피자"]
console.log(lunch);
console.log(lunch.length);
let p1 = `오늘 점심은 ${lunch[1]} 먹자`
console.log(p1);
let p2 = `${lunch[1]}(을/를) 왜먹냐~ 뜨끈~한 ${lunch[0]} 든든~하게 먹고말지`
console.log(p2);

// 카페에는 무엇이 필요할까?
//*원두 : 20000
//*우유 : 30000
//*물 : 100
//*설탕 : 3000
//*시럽 : 10000
//*시나몬 : 500
//*빨대 : 1000
//*머그컵 : 17000
//*플라스틱컵 : 10000
//*얼음 : 2500

const jaeryoObject = {
	bean : 20000,
	milk : 30000,
	water : 100,
	sugar : 3000,
	syrup : 200,
	cinamon : 500,
	mug : 17000,
	takeout : 10000,
	ice : 2500
}

const americano = {
	one:jaeryoObject.bean,
	two:jaeryoObject.water,
	three:jaeryoObject.takeout	
}

const sugarwater = {
	one:jaeryoObject.sugar,
	two:jaeryoObject.water
}

const mugice = {
	one :jaeryoObject.mug,
	two : jaeryoObject.ice
}
const mug10dc = {
	one : jaeryoObject.mug
}
console.log(jaeryoObject);
let americanoPrice = americano.one+americano.two+americano.three;
console.log(americanoPrice);

// ice americanoPrice//
console.log(americanoPrice + jaeryoObject.ice);

// sugarwater//
let sugarwaterPrice = sugarwater.one+sugarwater.two;
console.log(sugarwaterPrice);

//mug,ice//
let mugicePrice = mugice.one+mugice.two;
console.log(mugicePrice);




let asPrice = americanoPrice +sugarwaterPrice;
console.log(asPrice);

let notice = `아메리카노 가격은 ${americanoPrice} 원 입니다.`;
console.log(notice);

let notice2 = `설탕물 가격은 ${sugarwaterPrice} 원 입니다.`;
console.log(notice2);

let notice3 = `머그컵과 얼음을 같이 사시면 ${mugicePrice} 원 입니다.`;
console.log(notice3);

let notice4 = `아메리카노와 설탕물의 가격은 각각 ${americanoPrice}원, ${sugarwaterPrice}원 이며, 총 합은 ${asPrice}원 입니다.`
console.log(notice4);

if(americanoPrice > 1000) {
	console.log(`아메리카노 가격은 ${americanoPrice}원 입니다. 살려말려?`);
}else{
	console.log(`${americanoPrice}원입니다. 사세요.`);
}



let snowman = ["두유워너빌드어스노우맨~?", "고웨이! 안나" ,"오케이,바이..."]
console.log(snowman);
console.log(snowman.length);

let anna1 = `안나 : ${snowman[0]}`
console.log(anna1);

let elsa =`엘사 : ${snowman[1]}`
console.log(elsa);

let  anna2 = `안나 : ${snowman[2]}`
console.log(anna2);


let todaylunch = ["소불고기샐러드", "서브웨이", "한솥도시락", "연어스테이크샐러드"]
console.log(todaylunch);
// todaylunch의 목록 불러와줘~
console.log(todaylunch.length);
// todaylunch의 목록이 몇개인지 알려줘~
