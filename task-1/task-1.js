function getChars(numbr) {
	var str = 'x';

	if(typeof numbr === 'string' || numbr < 0) {
		return false;
	}else if(numbr === undefined) {
		return str;
	}else if(Number(numbr) === numbr && numbr % 1 !== 0) {
		return false;
	}else {
		return str.repeat(numbr);
	}
}

/*
console.log( 'без параметров', getChars() );
console.log( 'передана строка', getChars('3' ) );
console.log( 'передана дробь', getChars(2.7 ) );
console.log( 'передано отрицательное число', getChars(-3 ) );
console.log( 'передано 1', getChars(1 ) );
console.log( 'передано 3', getChars(3 ) );
console.log( 'передано 7', getChars(7 ) );
*/