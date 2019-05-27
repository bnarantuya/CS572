
Array.prototype.removeNum = function(num) {
    return this.filter(val => val != num);
}

let example = [1,2,3,4,5,6,1,1,2,3,4];


console.log("start");

console.log(example.removeNum(1));

console.log("finish");

