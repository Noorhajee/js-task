// Extract keys from object
function f1(obj){
 let x = (Object.keys(obj));
return x;
}
console.log(f1({a: 1, b: 2, c: 3}))