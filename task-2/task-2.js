function whenNY() {
	let today = new Date();
	let dateNY = new Date((new Date().getFullYear() + 1), 0, 1, 0, 0, 0);
	const msPerDay = 24*60*60*1000; 
	return Math.round((dateNY.getTime() - today.getTime())/msPerDay);
}
console.log("До нового года осталось " + whenNY() + " дня");
