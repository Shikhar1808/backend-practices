require('dotenv').config();

const connectDb = require('./config/dbConnection');
const Product = require('./models/productModel');

const jsonProducts = require('./data/products.json');

const start = async() =>{
    try{
        await connectDb();
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Success');
        process.exit(0);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
start();