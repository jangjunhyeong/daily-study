https://codepen.io/evilpaper/pen/dyyZjLQ

const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// key들을 배열로 작성을 했는데 그냥 A,B,C,D,E,F,G... 가 아니라 ABCDEFG..이렇게 다 묶었네? 어차피 문자"열" 이니까 상관없겠지?
const timestamps = [];
//  타임스탬프라는 상수를 선언해줬고, 그 값은 배열인데 배열 안이 텅 비어있네, 그런거 보면 배열 안에 뭐가 들어가니까 비워놨겠지?
// 넣을 자리를 만들어 놨다거나?

timestamps.unshift(getTimestamp());
// unshift는 뭔데 - MDN에 따르면 요소를 배열 안에다가 두고, 맨 앞으로 보낸대
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
		// 보니까 최소값, 최대값을 지정해주는 거 같은데
		// ceil는 뭘까 크거나 같은 숫자중에 가장 작은 숫자를 integer로 반환한대
		// floor는 작거나 같은 숫자 중에 가장 큰 숫자를 반환한대
		// 그리고 뭔가 뱉어내는 거 같은데 랜덤으로? * 이게 애스터리스크로 쓰는건지 곱셈의 의미인지는 모르겠어 근데 max-min을 하고..? +1을 더하고 min값을 또 더하네
		//  왜그럴까 음수가 나올 수도 있으니까 최소한의 장치를 마련하는 거겠지?
}
// getRandomNumber - 랜덤으로 숫자를 가져온다는 거 같은데?
// crptoRandomValues() 함수로 뭐 암호도 만들 수 있나봐
function getRandomKey() {
	// RandomKey라는 뭐를 가져오는 함수인듯함..?
  return keys[getRandomNumber(0, keys.length-1)]
	// 0과 key 배열의 길이-1 사이에 숫자를 랜덤으로 가져오는듯?
}
// 여긴 또 getRandomKey네
function targetRandomKey() {
	// targetRandomKey는 뭘까..?
  const key = document.getElementById(getRandomKey());

  key.classList.add("selected");
  let start = Date.now()
	// 이건 배움 selectied라는 css style class를 붙혀주려고 쓰는듯
	// start라는 변수 = ..Date는 뭔데..? now()
}
// 여긴 targetRandomKey인데 
function getTimestamp() {
	// 타임스탬프를 가져오는듯 뭔진 모르겠는데.. 당최 타임스탬프 (그거 날짜 저거를 왜 가져오는건지..?)
  return Math.floor(Date.now() / 1000)
	// Math.floor Date.now() / 1000으로 나눈건가..? 그것중에 가장 같거나 큰 값을 반환한대 아! 타임스탬프를 쓰는 이유는 
	// 실시간으로 바뀌는 시간값으로 랜덤하게 가져오려는 게 아닐까?
}
// 타임스탬프를 가져오나봐
document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);
	// string은 어쨌든 뭐 문자열일테고, formCharCode는 뭔디? MDN 보니까 String.formCharCode가 유니코드 기반으로 뭔가를 뱉어내는 거래
	// 그러면 뭐 유니코드에서 1~9랑 A~Z를 뱉는 그..범위를 지정해줘서 키값을 입력하게 만드는 그런게 아닐까?
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
	// 이건 상수 이름을 보니까 Key 누를때 무슨 하이라이트..? 어떤 누를때 효과를 주려고 style값 만든 class를 상수로 해줬나봐
  
  keyElement.classList.add("hit")
	// hit이라는 클래스가 있는데 그걸 추가시키나봐
  keyElement.addEventListener('animationend', () => {
		// => 이건 화살표일까 뭐 작거나 같은 그런걸까 animaition end? 그니까 anmaitionend는 애니메이션이 완료되면~ 이런 거 같아.
    keyElement.classList.remove("hit")
		// hit 이라는 클래스를 삭제시켜줘!

  })
  
  if (keyPressed === highlightedKey.innerHTML) {
		//keyPressed 랑 highlughtedKey의 삽입한 HTML이랑 같으면~
    timestamps.unshift(getTimestamp());
		// 타임스탬프 찍어주고 그 값을 맨앞으로 보내주래 (어떤 값이냐면 타임스탬프를 가져온 값을)
    const elapsedTime = timestamps[0] - timestamps[1];
		// 경과시간이라고 하는 상수를 해줄건데 타임스탬프 첫 번째 배열에서 두번째 배열을 뺀거래 
    console.log(`Character per minute ${60/elapsedTime}`)
		// 여긴 백틱을 썼네, 다른 변수를 불러와서 그런거같은데 Charter per minute 음..1분이 60초..니까 60이 있는거 같은데 elaspsedTime으로 나누어준 값을 콘솔로 찍으라했네
    highlightedKey.classList.remove("selected");
		// 하이라이티드키의 클래스에서 선택됨을 삭제해달래
		// 아 키를 때면 그 선택된거같은 style.class를 삭제하려고 하는 거 같아.
    targetRandomKey();
		// targetRandomKey를 호출했네
  } 
})
// 키up이면 키를 눌렀다가 뗐을 때 뭐가 생기는듯
targetRandomKey();