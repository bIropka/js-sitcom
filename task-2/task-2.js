function whenNY() {
    let nyTime = new Date((new Date().getFullYear()+1), 0, 1, 0, 0, 0).getTime(),
        nowTime = new Date().getTime();
    return Math.round((nyTime - nowTime)/(1000*60*60*24));
}

console.log(whenNY());
