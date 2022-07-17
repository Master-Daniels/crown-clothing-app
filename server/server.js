const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToBuildFolder = path.join(__dirname, "../Client/build");
if (process.env.NODE_ENV === "production")
  app.use(express.static(pathToBuildFolder));

app.get("*", (req, res) => {
  res.sendFile(pathToBuildFolder, "index.html");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}`);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ err: stripeErr });
    }
    res.status(200).send({ success: stripeRes });
  });
});
