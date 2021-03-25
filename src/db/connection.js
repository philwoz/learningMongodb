const mongoose = require("mongoose")
require("dotenv").config()



const connection = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log("successfully connected to catcusdb");
    } catch (error) {
      console.log(error);
    }
  };
  
  connection();