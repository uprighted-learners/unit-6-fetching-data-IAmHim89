// Your code goes here
//?library import
const Library = require("../library");

//compass connection string
const collectionString = "mongodb://localhost:27017";

//initializng a new library
const collection = new Library(collectionString, "Library", "Books");

//?new library variable test connection to compass
collection.test();
