const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fareroute = require('./routes/fareroute');
const port = 5555;




dotenv.config();

/**
 * Middleware that parses incoming requests with JSON payloads.
 */

app.use(express.json());

/**
 * Connect to the MongoDB database using Mongoose.
 */

require('./db/mongoose');

/**
 * Middleware that handles fare-related routes.
 * 
 */

app.use("/api", fareroute);



/**
 * Start the Express server.
 */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});