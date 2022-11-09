const express = require( 'express' )
const registerUser = require('../controllers/userController')
const router = express.Router()

router.route( '/' ).post( registerUser )
router.post( '/Login', athUser )

module.exports = router