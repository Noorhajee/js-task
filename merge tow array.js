//merge tow array

function f1(arr1, arr2){
	let allArr = [...arr1, ...arr2];
	return allArr;
}
console.log(f1([1,1,2],[2,3,4]));