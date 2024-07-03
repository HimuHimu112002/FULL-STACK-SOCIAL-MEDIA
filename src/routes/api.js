const express = require('express')
const { userCreate } = require('../controller/user/userController')
const { userSignUp } = require('../controller/auth/userRegistrationController')
const { userLogin } = require('../controller/auth/userLoginController')
const { tokenVerify } = require('../controller/auth/userVerify')
const auth = require('../middleware/Authentication')
const router = express.Router()

// =========== User Api endpoint ==============
router.post('/create-user', userCreate)
router.post('/user-signup', userSignUp)
router.post('/user-login', userLogin)
router.get('/user-token-veify/:token', auth, tokenVerify)

module.exports = router