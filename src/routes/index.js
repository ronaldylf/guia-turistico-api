const express = require('express');
const lugares = require('./lugarRoutes');

module.exports = app => {
    app.use(
        express.json(),
        lugares
    );
}