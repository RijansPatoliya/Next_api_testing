// src/app/api/mongodb/mongoClient.js
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://rijanspatoliyacg_db_user:QfdL6R76QVshwhSQ@cluster0.pxtoqon.mongodb.net/";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
