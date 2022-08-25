// merge tow array with dublicate items
function mergeUniqe(arr1, arr2){
	let mergeArr =[...arr1, ...arr2];
	let uniqeArr = new Set(mergeArr);
	return uniqeArr ;
}
console.log(mergeUniqe([1, 2, 3], [3, 6, 8]));
