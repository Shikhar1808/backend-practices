const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConnection');
const router = require('./routes/urlRouter');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use("/url", router)

const start = async() =>{
    try{
        await connectDB()
        app.listen(PORT, () => {    
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch(err){
        console.log(err);
    }
}
start();