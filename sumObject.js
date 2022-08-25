// Return an array with all object keys
function myFunction(a){
	let arr=[]

	arr=Object.values(a)
	let sum= arr.reduce(
	(previousValue,currentValue)=>
	previousValue+currentValue
	)
	return sum
	}
console.log(myFunction({a: 4, b: 6, c: 5, d: 0}));
