
const dns = require('dns');

console.log('start');
async function getIp() {
    try {
        let ip = await converter();
        console.log(ip);
    }
    catch (err) {
        console.log(err);
    }
}
getIp();
console.log('end');

function converter() {
    return new Promise(function(resolve) {
        dns.resolve4('www.mum.edu', function (err, ip) {
            if(ip[0] != '') resolve(ip[0]);
        });
    });
}
