import mongoose from "mongoose";

mongoose.connect("mongodb+srv://zanlucaslaiz:twtWgOikAwHV6sxZ@cluster0.enuex8h.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;