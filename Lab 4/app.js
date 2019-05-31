
const myHttp = require('http');
const rxjs = require('rx');
const url = require('url');
const fs = require('fs');
const path = require('path');

myHttp.createServer(function (req, res) {

    const durl = url.parse(req.url);
    if (req.url === '/') {
        console.log(durl);
        fs.createReadStream(__dirname + '/text.txt').pipe(res);
    }
}).listen(8000, () => { console.log("SERVER STARTED") });
