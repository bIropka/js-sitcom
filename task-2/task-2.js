function whenNY() {
	var today = new Date(),
		newYearDate = new Date(2020, 0, 1);

	return Math.trunc((newYearDate - today) / 86400000); //24*60*60*1000ms
}

console.log(whenNY());
