import mongoose from "mongoose";

const connctToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to mongoDB!!");
  } catch (error) {
    console.log("Error Connecting to the database");
  }
};

export default connctToMongoDB;
