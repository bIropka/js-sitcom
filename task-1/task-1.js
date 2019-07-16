function getChars( n ) {
    let result = 'x';
    if (n === 0 || n === undefined){
        return result;
    } else if( typeof(n) != 'number' || n < 0 || (n ^ 0) != n ){
        return false
    } else {
        while (n > 1) {
            result += 'x';
            n -= 1;
        }
        return result;
    }
}

console.log( 'без параметров', getChars() );
console.log( 'передана строка', getChars('3' ) );
console.log( 'передана дробь', getChars(2.7 ) );
console.log( 'передано отрицательное число', getChars(-3 ) );
console.log( 'передано 1', getChars(1 ) );
console.log( 'передано 3', getChars(3 ) );
console.log( 'передано 7', getChars(7 ) );
