const mysql = require ('mysql');
const fs = require ('fs');
const path = require('path');
const config = require(path.join(__dirname, 'config.js'));

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : config.mySQLpassword,
//   database: 'image_render'
// });

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});


fs.readFile (path.join(__dirname, 'jsonData.json'), 'utf8', (err, data) => {
    if (err) {
        throw err;
    } else {
        let obj = JSON.parse(data.slice(1));
        for ( let i = 0; i < obj.Sheet1.length; i++){
            let entry = obj.Sheet1[i];
            connection.query(`INSERT INTO products (name, rating) VALUES (?,?)`, [entry.name, entry.rating], (err, msg) => {
                if (err){
                    throw err;
                }
                console.log('WOOHOO!')
            })
            if (entry.image){
                connection.query(`INSERT INTO images (image, product_id) VALUES (?,?)`, [entry.image, entry.id], (err, msg) => {
                    if (err){
                        throw err;
                    }
                    console.log('WOOHOO!')
                })
            }

            if (entry.extra_url1){
                connection.query(`INSERT INTO images (image, product_id) VALUES (?,?)`, [entry.extra_url1, entry.id], (err, msg) => {
                    if (err){
                        throw err;
                    }
                    console.log('WOOHOO!')
                })
            }
            if (entry.extra_url2){
                connection.query(`INSERT INTO images (image, product_id) VALUES (?,?)`, [entry.extra_url2, entry.id], (err, msg) => {
                    if (err){
                        throw err;
                    }
                    console.log('WOOHOO!')
                })
            }

            if (entry.extra_url3){
                connection.query(`INSERT INTO images (image, product_id) VALUES (?,?)`, [entry.extra_url3, entry.id], (err, msg) => {
                    if (err){
                        throw err;
                    }
                    console.log('WOOHOO!')
                })
            }

            if (entry.extra_url4){
                connection.query(`INSERT INTO images (image, product_id) VALUES (?,?)`, [entry.extra_url4, entry.id], (err, msg) => {
                    if (err){
                        throw err;
                    }
                    console.log('WOOHOO!')
                })
            }

            if (entry.extra_url5){
                connection.query(`INSERT INTO images (image, product_id) VALUES (?,?)`, [entry.extra_url5, entry.id], (err, msg) => {
                    if (err){
                        throw err;
                    }
                    console.log('WOOHOO!')
                })
            }
        }

    }
})