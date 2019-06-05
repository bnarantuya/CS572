const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const client = new MongoClient('mongodb://localhost:27017');

const app = express();

const PORT_NUMBER = 3000;

app.get('/', function(req,res,next) {
    res.render("Hello!");
});

app.get('/search/:query', function(req, res, next) {
    client.connect(function(err) {
        var data = '';
        let db = client.db('homework07');
        db.collection('lectures').find({course : req.params.query}).toArray(function(err, docs) {
            if(err) { throw err; }
            res.json(docs);
        });
    });
});

app.listen(PORT_NUMBER, () => {
    console.log(`Server started on port: ${PORT_NUMBER}`);
});
