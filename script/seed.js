"use strict";

const {
  db,
  models: { User, Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      id: 1,
      firstName: "Abby",
      lastName: "Lee",
      email: "a@l.com",
      imageUrl: "",
      adminAccess: false,
      username: "Abby",
      password: "123",
    }),
    User.create({
      id: 2,
      firstName: "Bea",
      lastName: "Bosch",
      email: "b@b.com",
      imageUrl: "",
      adminAccess: true,
      username: "Bea",
      password: "123",
    }),
    User.create({
      id: 3,
      firstName: "Zach",
      lastName: "Pram",
      email: "z@p.com",
      imageUrl: "",
      adminAccess: false,
      username: "Zach",
      password: "123",
    }),
    User.create({
      id: 4,
      firstName: "Eric",
      lastName: "Fan",
      email: "e@f.com",
      imageUrl: "",
      adminAccess: false,
      username: "Eric",
      password: "123",
    }),
  ]);

  // Creating Products
  const products = await Promise.all([
    Product.create({
      id: 1,
      name: "Strawberry",
      quantity: 10,
      imageUrl:
        "https://www.besthealthmag.ca/wp-content/uploads/2019/03/Strawberry-Benefits.jpg",
      price: 5.45,
      description: "yummy",
      category: "Fruit",
    }),
    Product.create({
      id: 2,
      name: "Mango",
      quantity: 7,
      imageUrl:
        "https://www.saveur.com/uploads/2021/07/09/Mangoes-Its-Mango-Time-Vaughn-Stafford-Gray-Belle-Morizio.jpg?auto=webp",
      price: 6.95,
      description: "delicious",
      category: "Fruit",
    }),
    Product.create({
      id: 3,
      name: "Chocolate",
      quantity: 7,
      imageUrl:
        "https://thumbs.dreamstime.com/b/dark-chocolate-pink-background-top-view-dark-chocolate-pink-background-115593402.jpg",
      price: 6.25,
      description: "Oooooh lala",
      category: "Sweet",
    }),
    Product.create({
      id: 4,
      name: "Matcha",
      quantity: 3,
      imageUrl:
        "https://thumbs.dreamstime.com/b/matcha-dry-green-powder-pink-background-making-japanese-natural-tea-171510135.jpg",
      price: 3.99,
      description: "green",
      category: "Tea",
    }),
  ]);

  console.log(`seeded ${users.length} users && ${products.length} products`);
  console.log(`seeded successfully`);
  return {
    users: {
      abby: users[0],
      bea: users[1],
      zach: users[2],
      eric: users[3],
    },
    products: {
      strawberry: products[0],
      mango: products[1],
      chocolate: products[2],
      matcha: products[3],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
