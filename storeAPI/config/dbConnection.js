const mongoose = require('mongoose');

const conncetDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB connected: ${connect.connection.host} and name: ${connect.connection.name}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = conncetDB;