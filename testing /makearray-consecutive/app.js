function makeArrayConsecutive2(statues) {
	var total = 0;
	var sorted = statues.sort();
	for (var i = 0; i < statues.length - 1; i++) {
		var arr = (sorted[i + 1] - sorted[i])
		if ((sorted[i + 1] - sorted[i]) !== 1) {
			total += 1;
		} else {
			total += (sorted[i + 1] - sorted[i]) - 1;
		}
	}
	return total;
}

console.log(makeArrayConsecutive2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
