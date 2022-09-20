const { db } = require("./server/db");
const User = require("./server/db/user");
const Product = require("./server/db/product");

const seed = async () => {
    const users = [
        {
            id: 1,
            firstName: "Abby",
            lastName: "Lee",
            email: "a@l.com",
            imageUrl: "",
            adminAccess: false,
            username: "Abby",
            password: "123"
        },
        {
            id: 2,
            firstName: "Bea",
            lastName: "Bosch",
            email: "b@b.com",
            imageUrl: "",
            adminAccess: true,
            username: "Bea",
            password: "123"
        },
        {
            id: 3,
            firstName: "Zach",
            lastName: "Pram",
            email: "z@p.com",
            imageUrl: "",
            adminAccess: false,
            username: "Zach",
            password: "123"
        },
        {
            id: 4,
            firstName: "Eric",
            lastName: "Fan",
            email: "e@f.com",
            imageUrl: "",
            adminAccess: false,
            username: "Eric",
            password: "123"
        },
    ]

    const products = [
        {
            id: 1,
            name: "Strawberry",
            quantity: 10,
            imageUrl: "",
            price: 5.45,
            description: "yummy",
            category: "Fruit"
        },
        {
            id: 2,
            name: "Mango",
            quantity: 7,
            imageUrl: "",
            price: 6.95,
            description: "delicious",
            category: "Fruit"
        },
        {
            id: 3,
            name: "Chocolate",
            quantity: 7,
            imageUrl: "",
            price: 6.25,
            description: "Oooooh lala",
            category: "Sweet"
        },
        {
            id: 4,
            name: "Matcha",
            quantity: 3,
            imageUrl: "",
            price: 3.99,
            description: "green",
            category: "Tea"
        },
    ];
    try{
        await db.sync({force: true});
        await Promise.all(users.map((user) => User.create(user)));
        await Promise.all(products.create((product) => Product.create(product)));
    }catch (error){
        console.log(error)
    }
};

module.exports = seed;

if(require.main === module){
    seed()
        .then(() => {
            console.log("seeding successful");
            db.close();
        })
        .catch((error) => {
            console.error("something went wrong");
            console.error(error);
            db.close();
        })
}
