const express = require('express')
const { userCreate } = require('../controller/user/userController')
const router = express.Router()

// =========== User Api endpoint ==============
router.post('/create-user', userCreate)

module.exports = router