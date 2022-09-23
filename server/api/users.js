const router = require("express").Router();

const {
  models: { User },
  models: { Product },
} = require("../db");

//api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//create a new user NOT SURE IF WE NEED
// router.post("/", async (req, res, next) => {
//   try {
//     res.status(201).send(await User.create(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

//get specific user and their products
router.get("/:username", async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: {
        username: req.params.username,
      },
      include: [Product],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//edit a user - will be for user to edit their own log in
router.put("/:username", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.username);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

//delete a specific user
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
