const mongoose = require('mongoose');

const customer = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   name: {type: String, required: true}
},
{
    timestamps: true
});

module.exports = mongoose.model('Customer', customer);