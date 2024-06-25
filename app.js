const express = require('express')
const app = new express();
const cors = require('cors');
const router = require('./src/routes/api');
require('dotenv').config()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(cors())

// api in-point
app.use("/api/v1",router)

module.exports = app