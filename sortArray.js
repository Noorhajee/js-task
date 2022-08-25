//sort an array of numbers in descendig order
function myFunction(a){
	a.sort((a,b)=>a.a-b.b)
	return a
	}

	console.log(myFunction([{a:1,b:2},{a:5,b:4}]))