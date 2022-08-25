//convert set to array
  function convertSet(newset){

  let set = new Set(newset);
	let values = set.values();
	let array = Array.from(values);
	   return array;
	}

	console.log(convertSet(new Set([1, 2, 3])));
