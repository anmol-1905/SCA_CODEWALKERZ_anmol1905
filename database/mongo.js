const mongoose = require("mongoose");
require('dotenv').config();

const username = 'scanitjsr';
const password = 'scanitjsr';

// const uri = `mongodb+srv://${username}:${password}@cluster0.ftniq.mongodb.net/?retryWrites=true&w=majority?directConnection=true`;
const uri = "mongodb+srv://scanitjsr:scanitjsr@cluster0.xl7zvty.mongodb.net/SCA_quiz";
const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connectDB = () => {
   mongoose.connect(uri, connectionParams).then(()=>{
    console.log("connected succesfully to the database");
   })
   .catch(err=>{
    console.log("connection failed: ",err);
   })
}

module.exports = connectDB;

