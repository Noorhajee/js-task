//sort array by object property

function sortObject(arr){
	let sortVal = arr.sort((x , y) => (x.b > y.b) ? 1 : -1);
  return sortVal;
}
console.log(sortObject([{a:1,b:6},{a:5,b:3}]))
console.log(sortObject([{a:1,b:2},{a:5,b:3}]))