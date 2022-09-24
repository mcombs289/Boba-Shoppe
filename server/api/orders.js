const router = require("express").Router();
const {
  models: { Order },
  models: { User },
} = require("../db");

//api/orders
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//post an order
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body));
  } catch (error) {
    next(error);
  }
});

//returns orders for a single user
router.get("/user/:userId", async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

//returns a single order
router.get("/:id", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    res.json(order);
  } catch (err) {
    next(err);
  }
});

//delete a specific order
router.delete("/:id", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    await order.destroy();
    res.send(order);
  } catch (error) {
    next(error);
  }
});

//edit a order - will be for admins
router.put("/:id", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    res.send(await order.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
