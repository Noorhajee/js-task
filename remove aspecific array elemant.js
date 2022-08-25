//remove aspecific array elemant
function myfunction(arr,target){

	var newNumberArray = arr.filter(m => {
		return m !== target ;
	});
	return newNumberArray;
}

	console.log(myfunction([1, 2, 3],2));
