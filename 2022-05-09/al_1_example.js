let a = 0;

let test=setInterval(function(){
	console.log(a);
	a++;
	if(a===10){
		console.log('hello');
		// clearInterval(test);
		console.log(a);
		a=0;
	}
},100);




