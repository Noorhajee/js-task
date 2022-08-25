//AllTheSame
function AllTheSame(array) {
	var first = array[0];
	 let x = array.every(element =>
{
	return element === first;
	})
	return x;

}
console.log(AllTheSame([1, 1, 2, 1]));