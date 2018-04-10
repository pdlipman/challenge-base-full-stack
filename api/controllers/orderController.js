const Order = require('../models/order');

module.exports.addOrder = function(req, res, next) {
  const make = req.body.make;
  const model = req.body.model;
  const trimPackage = req.body.trimPackage;
  const customerId = req.body.customerId;

  const order = new Order({
    make,
    model,
    trimPackage,
    customerId,
  });

  order.save(function(err, order) {
    if (err) {
      return next(err);
    }

    res
      .status(201)
      .json({
        message: `order created: ${order._id}`
      });
  });

};

module.exports.getOrders = function(req, res, next) {
  Order
    .find({}, function(err, orders) {
      if (err) {
        return next(err);
      }

      res
        .status(201)
        .json({
          orders
        });
    })
    .sort({date: 'desc'})
  ;
};