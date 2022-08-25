import fetch from "node-fetch";
 function getInfo(info){
	let promise1 = fetch('https://gorest.co.in/public/v2/users');
	promise1.then(function(response){
		console.log(response);
	});
}
getInfo()