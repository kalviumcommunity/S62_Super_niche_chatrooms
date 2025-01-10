// const express = require("express");
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import express from "express";
const app = express();
// console.log(process.env.PORT);
const port = process.env.PORT || 3001;
// import mongoose from "mongoose";
// import mongodb from "mongodb";
import { getDB } from "./db/mongo-client.js";
import { ObjectId } from "mongodb";
app.use(express.json());

app.get("/user", async (req, res) => {
  try {
    const db = await getDB();
    // console.log(db);
    const userData = await db.find().toArray();
    return res.status(200).send(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const db = await getDB();
    // console.log(db);
    const insertData = await db.insertOne(req.body);
    return res
      .status(201)
      .send({ message: "Inserted succcessfully.", insertData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const db = await getDB();
    // console.log(db);
    const { id } = req.params;
    const deleteUser = db.deleteOne({ id });
    return res.status(200).send({ message: "deleted successfully", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    const db = await getDB();
    // console.log(db);
    const { id } = req.params;
    const updateUser = await db.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...req.body } }
    );
    return res
      .status(200)
      .send({ message: "updated successfully", updateUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//milestone3 completed.
