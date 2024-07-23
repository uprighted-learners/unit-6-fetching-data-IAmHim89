// Your code goes here
require("dotenv").config();

//? express intialization
const express = require("express");

const app = express();

PORT = process.env.MYNUMBER || 8080;

app.get("/bringmeallthestuff", async (req, res) => {
  //find all the stuff in my database
  //send that stuff to the page
});

app.post("/addnewstuff", async (req, res) => {
  //create new stuff using user input
  //save the new stuff to the database
  //redirect the user back to the page they were on
});

app.listen(PORT, () => {
  console.log("*".repeat(10));
  console.log(`You are connected to ${PORT}`);
  console.log("*".repeat(10));
});
