const mongoose = require('mongoose');

const donutSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    tasty: Boolean,
    expirationDate: Date
})

const Donut = mongoose.model('Donut', donutSchema)

module.exports = Donut;