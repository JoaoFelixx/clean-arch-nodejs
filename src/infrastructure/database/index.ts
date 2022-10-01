import mongoose from "mongoose";

mongoose.connect(process.env.URL_MONGO)
  .then(() => console.log('Connected with successful'));