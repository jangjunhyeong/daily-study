function text(){
	return `<div>hello</div>`;
}

function section (){
	return `<section>bye<section>`;
}

console.log(text());
console.log(section());

let timer = setTimeout(() => {
	console.log(text());
}, 1000);


