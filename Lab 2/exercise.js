
Array.prototype.pluck = function (ismax) {
    let value = 0;
    process.nextTick(() => {
        if (ismax)
            value = this.reduce((prev, current) => (prev.y > current.y) ? prev : current)
        else
            value = this.reduce((prev, current) => (prev.y < current.y) ? current : prev)
        console.log(value);
    });

}
console.log('start');
[1, 2, 3, 4, 5, 6, 7, 8].pluck(true);
[1, 2, 3, 4, 5, 6, 7, 8].pluck(false);
console.log('end');