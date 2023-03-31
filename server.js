const express = require('express');

const db = require('./db');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port} using nodemon`);
});