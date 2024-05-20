
const { MongoClient } = require('mongodb');
class MongoBot {
  client;
  constructor() {
    const url = `mongodb://0.0.0.0:27017`;

    this.client = new MongoClient(url);
  }
  async init() {
    await this.client.connect();
    console.log('connected');

   return this.client.db('todo');
  }

}
module.exports = new MongoBot();
