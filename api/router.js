const express = require('express');

const OrderController = require('./controllers/orderController');

module.exports = function(app) {
  const apiRoutes = express.Router();
  const orderRoutes = express.Router();

  apiRoutes.use('/order', orderRoutes);

  // orders
  orderRoutes.post('/add-order', OrderController.addOrder);
  orderRoutes.get('/get-orders', OrderController.getOrders);

  app.use('/api', apiRoutes);
};