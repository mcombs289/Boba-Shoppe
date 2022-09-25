const router = require("express").Router();
const {
  models: { Order_Products },
} = require("../db");

//api/ordersProducts
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order_Products.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
