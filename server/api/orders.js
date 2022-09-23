const router = require("express").Router();
const {
  models: { Order },
  models: { User },
} = require("../db");

//api/orders
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: [User] });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//post a product
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body));
  } catch (error) {
    next(error);
  }
});

//returns a single product
router.get("/:id", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    res.json(order);
  } catch (err) {
    next(err);
  }
});

//delete a specific product
router.delete("/:id", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    await order.destroy();
    res.send(order);
  } catch (error) {
    next(error);
  }
});

//edit a product - will be for admins
router.put("/:id", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    res.send(await order.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
