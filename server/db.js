import mongoose from "mongoose";

const connection = () => {
  mongoose.connect(process.env.MONGO_URI);

  const db = mongoose.connection;

  db.once("open", () => console.log("Database conneted"));
};

export default connection;
