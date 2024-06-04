const express = require('express');
const dotenv = require('dotenv').config();
const tasksRouter = require("./routes/tasksRoutes")
const connectDB = require("./config/dbConncetion");
const notFound  = require("./middlewares/notFound");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use("/api/v1/tasks",tasksRouter);
app.use(notFound);

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
