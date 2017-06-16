var corey = {
	name: "Corey",
	age: 23,
	ethnicity: "Native American",
	stateBorn: "Minnesota",
	home: {
		address: "1121 North 2830 West",
		town: "Provo",
		zip: 84601
	}
}


// I want this function to take the object and return a new object unchanged

function newObj(obj) {
	var clone = Object.assign({}, obj);
	return clone;
}

var corClone = newObj(corey);
corey.age = 50;

console.log(corey);
console.log(corClone);
