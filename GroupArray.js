// Group array of strings by first letter
function groupByLetters(arr) {
	const sorted = arr.sort();
	let groupedNames = {};
	sorted.forEach(name => {
			if(groupedNames[name[0]])
			{
				console.log(groupedNames[name[0]])
					groupedNames[name[0]].push(name);
			} else {
					groupedNames[name[0]] = [];
					groupedNames[name[0]].push(name);
			}
	});

	return groupedNames;
}
console.log( groupByLetters(['Alf', 'Alice', 'Ben']))