import fetch from 'node-fetch';
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/crypto");

const postSchema = new mongoose.Schema({
    
    base_unit:{
        type: String,
        required:true
    },
    last:{
        type: Number,
        required:true
    },
    volume:{
        type: Number,
        required:true
    },
    sell:{
        type: Number,
        required:true
    },
    buy:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    }
});

const Post = mongoose.model('Post',postSchema);

async function getPost(){
   const myPost = await fetch ("https://api.wazirx.com/api/v2/tickers");
    const response = await myPost.json();
    for( let i=0; i<=response.length; i++){
        const post = new Post({
            base_unit: response[i]['base_unit'],
            last: response[i]['last'],
            volume: response[i]['volume'],
            sell: response[i]['sell'],
            buy: response[i]['buy'],
            name: response[i]['name']
        });
        post.save();
    }
}

getPost();