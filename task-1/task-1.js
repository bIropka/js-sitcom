function getChars(numb) {
	if (typeof numb === 'undefined') {
  	return 'x'
  } else {
      if (typeof numb === "number" && (numb > 0)  && (numb.toString().indexOf('.') == -1)) {
      let str = '';
      for (let i = 0; i < numb; i++) {
        str+='x'; 
      }
      return str
    } else {
      return false
  	}
  }
} 

console.log( 'без параметров', getChars() );
console.log( 'передана строка', getChars('3' ) );
console.log( 'передана дробь', getChars(2.7 ) );
console.log( 'передано отрицательное число', getChars(-3 ) );
console.log( 'передано 1', getChars(1 ) );
console.log( 'передано 3', getChars(3 ) );
console.log( 'передано 7', getChars(7 ) );


console.log(getChars('3')); // false
console.log(getChars(-3)); // false
console.log(getChars(2.7)); // false
console.log(getChars()); // x
console.log(getChars('/')); // false
console.log(getChars(NaN)); // false
console.log(getChars(1)); // x
console.log(getChars(3)); // xxx
console.log(getChars(7)); // xxxxxxx
