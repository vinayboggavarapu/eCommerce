import mongoose from "mongoose";

const mongooseConnect = () => {
  if (mongoose.connection.readyState === 1) {
    console.log("connection established");
    return mongoose.connection.asPromise();
  } else {
    const uri: any = process.env.MONGODB_URI;
    console.log("connection established");
    return mongoose.connect(uri);
  }
};

export default mongooseConnect;
