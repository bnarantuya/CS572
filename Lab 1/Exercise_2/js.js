
Array.prototype.removeNum = async function(num) {
    try {
        let myArr = this;
        let result = await filt(myArr, num);
        console.log(result);
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

function filt(arr,num) {
    return new Promise(function(resolve, reject) {
        if(arr.length != 0) {
            let newArr = arr.filter(val => val != num);
            resolve(newArr);
        }
        else {
            reject("no result");
        }
    });
}

let example = [1,2,3,4,5,6,1,1,2,3,4];

console.log("start");

example.removeNum(1);

console.log("finish");

