let a = 0;

console.log(a);

let timer = setInterval(function(){
	a++
	console.log(a);

if(a>=10){
	clearInterval(timer);
}

},64);


