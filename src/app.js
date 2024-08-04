const dotenv = require("dotenv"); dotenv.config();
const express = require('express');
const routes = require('./routes');

app = express();
routes(app);

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running");
});

module.exports = app;