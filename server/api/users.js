const router = require("express").Router();
const { Products } = require("../db");
const {
  models: { User },
} = require("../db");
module.exports = router;

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
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await Student.findByPk(req.params.userId, {
      include: [{ model: Products }],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//delete a specific user
router.delete("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//edit a user - will be for user to edit their own log in
router.put("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});
