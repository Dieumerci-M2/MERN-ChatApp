const express = require( 'express' )
const { registerUser } = require('../controllers/userController')
const router = express.Router()

router.post( '/', registerUser )
//router.post( '/Login', athUser )

module.exports = router