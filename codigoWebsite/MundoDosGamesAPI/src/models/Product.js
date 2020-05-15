const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    launch: {
        type: Date,
        required: true,
    },
    developer: {
        type: String,
        required: true,
    },
    distributor: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    gameMode: {
        type: String,
        required: true,
    },
    consoles: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    sku: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);