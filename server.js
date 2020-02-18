const express = require ('express');
const app = express();
const path = require ('path');
// app.use(express.static(path.join(__dirname, 'dist')));

// const bodyParser = require ('body-parser');
// const database = require (path.join (__dirname, 'database', 'index.js'))
// const port = 3004;
// const port = 5432;

// const MongoClient = require('mongodb').MongoClient
const pg = require('pg');
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '07062014',
    database: 'image_render',
    port: 5432
});

client.connect( err => {
  if (err) {
    console.error("nope")
  } else {
    console.log("ya good")
  }
});












//original get request
// app.get('/images', (req, res) => {
//     database.get((err, images) =>{
//         if (err){
//             console.error('prob in server get request');
//             res.sendStatus(500);
//             return;
//         }
//         else {
//             res.send(images);
//         }
//     })
// })

// app.get('/Lionheart%20Helm', (req, res) => {
//     res.sendStatus(999)
// })


// app.listen (port, () => {console.log(`listening on port ${port}!`)})