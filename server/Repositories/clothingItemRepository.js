const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'ECommerce';
const collectionName = 'Products';

// Insert a clothing item into the MongoDB collection
async function insertClothingItem(clothingItem) {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertOne(clothingItem);
    console.log('Clothing item inserted:', result.insertedId);
  } catch (err) {
    console.log('Error occurred:', err);
  } finally {
    client.close();
  }
}

module.exports = {
  insertClothingItem
};