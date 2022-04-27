const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { request } = require("express");
const stripe = require("stripe")('sk_test_51KjYt8HKeqKNymNgC4fadDOuAbJBzliHIjx0NyXGoKynYA8MqwUkd1Ufu6AIGJ4fbmUcahwLgtID4YFvn0JAP11o00D5z4CK9v')

// API


// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send("hello world"))

app.post('/payments/create', async (request, response) => {
   const total = request.query.total;

   console.log("Payment Request Received for this amount >>> ", total)

   const paymentIntent = await stripe.paymentIntent.create({
       amount: total,
       currency: "usd",
   });

   response.status(201).send({
       clientSecret: paymentIntent.client_secret,
   })
})

// Listern command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-136fa/us-central1/api

