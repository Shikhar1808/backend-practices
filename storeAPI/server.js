const express = require('express');
const dotenv = require('dotenv').config();
require('express-async-errors');
const connectDb = require('./config/dbConnection');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const productRoutes = require('./routes/productRouter');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("<h1>Store API</h1> <a href='/api/v1/products'>Products</a>");
})

app.use('/api/v1/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const start = async() =>{
    try{
        await connectDb();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch(err){
        console.log(err);
    }
}
start();