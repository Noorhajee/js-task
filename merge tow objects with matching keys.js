//merge tow objects with matching keys
function myFunction(x,y){
	let a
	for(let item in y){
	if(Object.keys(x).includes(item)){
	y.d=y[item];
	delete y[item]
	}
	}
	return {...x,...y}
	}

	console.log(myFunction({a:5,b:4},{c:3,b:1,e:2}))