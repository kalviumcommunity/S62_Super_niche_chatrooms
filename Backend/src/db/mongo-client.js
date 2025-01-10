// import connection from "mongoose";
import dotenv from "dotenv";
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "./config/.env",
  });
}
console.log("NODE_ENV: ", process.env.NODE_ENV);

const DB_URL = process.env.CONN_STR;
import { MongoClient } from "mongodb";

const connection = new MongoClient(DB_URL);

// db.collection('users').find();

export async function getDB() {
  const checkConnect = await connection.connect();
  const db = checkConnect.db("Super-Niche-Chatrooms");
  return db.collection("users");
}
