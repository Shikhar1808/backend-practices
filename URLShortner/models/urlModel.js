const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortid:{
        type: String,
        required: [true, 'Please provide a shortid'],
        unique: true
    },
    redirectId:{
        type: String,
        required: [true, 'Please provide a redirectId']
    },
    visitedHistory:[{
        timeStamp:{
            type: Number,
        }
    }]
},
{
    timestamps: true
}
);

module.exports = mongoose.model('URL', urlSchema);