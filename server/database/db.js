import mongoose from "mongoose";

const Connection = async () => {
    mongoose.set("strictQuery", false);
    const URL = "mongodb://127.0.0.1:27017/ECOMMERCE_APP";
    try {
        await mongoose.connect(URL, {});
        console.log("Database Connected Succesfully");
    } catch (error) {
        console.log("Error: ", error.message);
    }
};

export default Connection;
