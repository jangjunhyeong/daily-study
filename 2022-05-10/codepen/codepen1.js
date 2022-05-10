https://codepen.io/syrizaldev/pen/YzGeQxP

// function이 4번 있네, setError , setSuccess, validEmail, validateForm
// setError, setSuccess 이거 리액트 같은데
// 


// Set Error Message (개발자 주석)
function setError(input, errormsg) {
	// setError 라는 기능을 주고 싶어보이는데
	// input 이면 뭘 넣는 건가?
	// errormsg는 에러메시지인듯한데
	const formGroup = input.parentElement;
	// formGroup이라고 상수 선언한거 같고, parentElement를 input- 삽입하는듯
	const inputAlert = formGroup.querySelector(".input-alert");
	// inputAlert : alert 이라는 알림창 뜨게 상수 선언한 듯. input-alert의 class를 선택해줬구나
	formGroup.className = "form-group error";
	//  formGroup의 class이름은 form-group error 구나
	inputAlert.innerText = errormsg;
	// inputAlert에 텍스트를 넣어줬고 그 텍스트는 errormsg인가보네
}

// Set Success Message (개발자 주석)
function setSuccess(input) {
	const formGroup = input.parentElement;
	// formGroup을 또 선언했네?
	formGroup.className = "form-group success";
	// formGroup의 클래스 이름은 form-group 성공이야!
}

// Check Valid Email (개발자 주석)
function validEmail(email) {
	// ? validEmail 이 있네 js에서 email 관련한 녀석도 있네
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	//  이 이상한 배열들은 뭐지..?
	return re.test(String(email).toLowerCase());
	// 뭐를 뱉어내는거같은데 re 위에 뭐 이상한 것들 있고..test를 하는 거 같고..스트링 email..toLowerCase는 뭔데..예전해 했음 소문자 배열로 변환시키는 거
}

// Form Validation Check (개발자 주석)
function validateForm(form) {
	// validateForm? valid 라는 뭔가 있나봐 근데 무슨 라이브러리 같은데 제이쿼리인가?? $는 없었는데
	if (form.fullname.value.trim() === "") {
		setError(form.fullname, "Fullname cannot be blank");
		// fullname은 뭐지 "Fullname cannot be blank" 라는 문구가 뜨는듯
		return false;
		// 그리고 false를 뱉고,
	} else {
		setSuccess(form.fullname);
		// 아니면 setSuccess 
		//https://www.tabnine.com/code/javascript/functions/react/setSuccess
		// 탭나인에서 알려주기는 함 근데 리액트 써져있음
	}

	if (form.email.value.trim() === "") {
		setError(form.email, "Email cannot be blank");
		// 이거 보니까 약간 ==="" 이 공백이면? 그런 뜻 같지 않냐
		return false;
		//  그럼 false를 뱉네
	} else if (!validEmail(form.email.value.trim())) {
		setError(form.email, "Email is not valid");
		return false;
		// 또다른 if ...이것도 false를 뱉네
	} else {
		setSuccess(form.email);
		// 이건 setSuccess를 뱉는거같네
	}

	if (form.message.value.trim() === "") {
		setError(form.message, "Message cannot be blank");
		// 아 공백은 불가능하다는 뭐 그런 뜻 같은데?
		return false;
		//  fals를 뱉는대
	} else {
		setSuccess(form.message);
		// 어떤 메시지를 전달하는듯?
	}

	return true;
}
