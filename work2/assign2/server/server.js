const express = require("express");
const app = express(); 
app.use(express.json({limit: '50mb'}))

const cors = require('cors');
app.use(cors())

const connectToDB = require("./dbConnection")
connectToDB();


app.use('/api/',require("./routes/productApi"))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));