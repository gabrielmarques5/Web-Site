const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birth: {
        type: Date,
        required: true,
    },
    cep: {
        type: String,
        required: true,
    },
    numberandlength: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        required: true,
    },
    cellphone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    confirmpassowrd: {
        type: String,
        required: true,
    },
})

ClientSchema.plugin(mongoosePaginate);

mongoose.model('Client', ClientSchema);