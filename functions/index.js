const functions = require("firebase-functions"); // Import functions properly
const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const express =require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const { messaging } = require("firebase-admin");
dotenv.config();
const stripe =require("stripe")(process.env.STRIPE_KEY ||
     functions.config().stripe.key);
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (req, res)=>{
  res.status(200).json({message: "Success"});
});
app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });
      console.log("Payment Intent:", paymentIntent);
      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  } else if (isNaN(total) || total <= 0) {
    res.status(403).json({
      message: "Total must be greater than 0",
    });
  }
});
exports.api =onRequest(app);
