// Your code goes here
require("dotenv").config();

//Mongodb initialization
const { MongoClient, ObjectId } = require("mongodb");

//class Library
class Library {
  constructor(dbName, dbUrl, collName) {
    this.dbName = dbName;
    this.dbUrl = dbUrl;
    this.collName = collName;
    this.dbClient;
  }
  //mogo client connection
  async client() {
    console.log(`Your connected to ${this.dbUrl}`);
    this.dbClient = MongoClient.connect(this.dbUrl);
    console.log("Your connection is succesful!");
    return this.dbClient;
  }

  async test() {
    const client = await this.client();
    client.close();
  }
}
