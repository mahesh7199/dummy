const mongoose = require("mongoose");
const dbURI = "mongodb+srv://mahesh:MyPass123!@cluster0.zhpxcsm.mongodb.net/?retryWrites=true&w=majority"

const connectToDB = () =>{
    mongoose.connect(dbURI).then(() => console.log('DB connected!'))
}

module.exports = connectToDB;

    