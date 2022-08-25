//swap object keys and values

function myFunction(obj){

	let object={};
	Object.keys(obj).forEach(key => {
			object[obj[key]] = key;


});
return object;
}
console.log(myFunction({a:1, b:2, c:3}))