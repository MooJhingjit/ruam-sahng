const mongoose = require('mongoose');

const product = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  jobId: {type: String, required: true},
  name: {type: String, required: true},
  amount: {type: Number, required: true},
  thickness: {type: String, required: false},
  note: {type: String, required: false},
  dateEnd: {type: Date, required: true},
  type: {type: String, required: true},
  departmentSelected: {type: Array, required: true},
  equipment: {type: Number, required: false},
  colorType: {type: Number, required: false},
  accessory: {type: Array, required: false},
  surface: {type: String, required: false},
  colorName: {type: String, required: false},
  status: {type: String, required: true}
},
{
    timestamps: true
});

module.exports = mongoose.model('Product', product);