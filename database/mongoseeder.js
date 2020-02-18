// Run by typing command: node database/mongoseeder.js FROM project folder
const faker = require('faker');
const { MongoClient } = require('mongodb');
// Connection URL -- don't need to change
const url = 'mongodb://localhost:27017';
// Database & Collection Name
const dbName = 'SDCTay'; //*** Change to Database name
const collectionName = 'SDCTay'; //*** Change to Collection name
const quantity = 10000000; //*** Total number of data instances to add to db
const dataBlockSize = 1000; //*** Size of each Array that is pushed to db
let db;
let counter = 1;
let rating = Math.ceil(Math.random() * 5)
// Create data instances
const seed = (collect) => {
  let products = [];
  for (let i = counter; i < counter + dataBlockSize; i++) {
    const productName = faker.commerce.productName();
    const newProduct = {
      productId: i,
      productName,
      rating: rating,
      image: 'https://picsum.photos/640/480',
    };
    products.push(newProduct);
    // console.log(newProduct.productId, newProduct.productName, newProduct.image);
  }
  db.collection(collect).insertMany(products)
    .then(products = [])
    .then(console.log(`Seeded ${Math.ceil(counter / dataBlockSize)} of ${Math.floor(quantity / dataBlockSize)}`))
    .then(() => {
      if (counter + dataBlockSize <= quantity) {
        counter += dataBlockSize;
        seed(collect);
      } else {
        console.log('Ya done seeded, son');
      }
    });
};
// Delete database and run seed
const mongoSeeder = (collection, overwrite) => {
  MongoClient.connect(url, (err, client) => {
    // assert.equal(null, err);
    db = client.db(dbName);
    if (overwrite) {
      db.collection(collection).drop((error, del) => {
        if (error) throw error;
        if (del) console.log('you dropped that table so gud');
        seed(collection);
      });
    } else {
      seed(collection);
    }
    // client.close();
  });
};
//setting to true will drop the existing database and rewrite it
mongoSeeder(collectionName, false);