const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  trimPackage: {
    type: String,
  },
  customerId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

OrderSchema.pre('save', function (next) {
  const order = this;
  if (validateAddress(order.customerId)) {
    return next();
  }

  const err = 'Invalid Address';
  return next(err);
});

function validateAddress(customerId) {
  return true;
}

module.exports = mongoose.model('Order', OrderSchema);