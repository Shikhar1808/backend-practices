const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required']
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    company: {
        type: String,
        required: [true, 'Product brand is required'],
        enum:{
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
}, {timestamps: true}
);

module.exports = mongoose.model('Product', productSchema);