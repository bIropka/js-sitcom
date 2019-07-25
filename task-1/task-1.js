var str = 'x';
function getChars(n) {
    if (Number(n) === n && n % 1 === 0 && n > 0 || n === undefined) {
        str = 'x';
        for(i = 1; i < n; i++) {
            str+= 'x';
        }
    } else {
        return false;
    }
    return str;
}

console.log( 'без параметров', getChars() );
console.log( 'передана строка', getChars('3' ) );
console.log( 'передана дробь', getChars(2.7 ) );
console.log( 'передано отрицательное число', getChars(-3 ) );
console.log( 'передано 1', getChars(1 ) );
console.log( 'передано 3', getChars(3 ) );
console.log( 'передано 7', getChars(7 ) );
