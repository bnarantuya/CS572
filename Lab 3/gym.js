

let EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
    }

    printer() {
        this.emit("GYM", 'boom');
    }
}


let mygym = new Gym();
let interval = null;
mygym.on('GYM', function(data) {
    interval = setInterval(function() {
        console.log(data);
    },1000);
});
mygym.printer();


setTimeout(function() {
    clearInterval(interval);
},5000)