const express = require('express')
const app = new express();
const cors = require('cors')
require('dotenv').config()


app.use(cors())

// api in-point
//app.use("/api/v1",router)

module.exports = app