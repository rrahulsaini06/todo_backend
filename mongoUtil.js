
const { MongoClient } = require('mongodb');
class MongoBot {
  client;
  constructor() {

    const url = `mongodb://0.0.0.0:27017`;

    this.client = new MongoClient(url);
  }
  async init() {
    await this.client.connect();
    console.log('Succesfully connected to database server');

   return this.client.db('todo');
  }

}
let abc = new MongoBot();
module.exports =abc;
