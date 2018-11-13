const mongoose = require('mongoose');

const task = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productId: {type: String, required: true},
  departmentId: {type: String, required: true},
  dateStart: {type: Date, required: false},
  dateEnd: {type: Date, required: false},
  note: {type: String, required: false},
  status: {type: String, required: true},
  isDisable: {type: Boolean, required: true}
},
{
    timestamps: true
});

module.exports = mongoose.model('Task', task);