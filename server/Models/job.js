const mongoose = require('mongoose');

const job = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   code: {type: String, required: true},
   cusId: {type: Object, required: true},
   createDate: {type: Date, required: false}
},
{
    timestamps: true
});

module.exports = mongoose.model('Job', job);