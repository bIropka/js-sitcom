function getChars_ES5(n) {

    if (typeof n === 'undefined') {
        return 'x';
    }

    if (typeof n === 'number') {

        if (n > 0 && (n ^ 0) === n) {
            return new Array(n).fill('x').join('');
        }

    }

    return false;

}

const getChars = (n = 1) => typeof n === 'number' && n > 0 && (n ^ 0) === n ? 'x'.repeat(n) : false;

console.log(getChars());
