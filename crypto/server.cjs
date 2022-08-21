const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');


app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017');

const cryptoSchema = {
    base_unit: String,
    last: Number,
    volume: Number,
    sell: Number,
    buy: Number,
    name: String
}

const crypto = mongoose.model('post', cryptoSchema)

app.get('/', (req, res) =>{
    crypto.find({}, function(err, name1){
        res.render('index',{
            cryptoList: name1
        })
    })
})

app.listen(4000,function(){
    console.log('server is running');
})