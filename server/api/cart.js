require("dotenv").config();

const express = require("express");
const app = express();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5050",
  })
);

const products = await Product.findAll();

const storeItems = products.map((product) => product);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
