//cala average
function f1(arr){
	const average =arr.reduce((a,b) => a + b, 0) / arr.length;
  return average;
}
console.log(f1([10, 100, 40]));