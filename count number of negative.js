//count number of negative
function countNegative(numbers){
	let negativeNumber = 0;
	for(let number of numbers){
		if(number < 0){
			negativeNumber++;
		}
	}
	return negativeNumber;
}
console.log(countNegative([1,-2, 2, -4, -7]))