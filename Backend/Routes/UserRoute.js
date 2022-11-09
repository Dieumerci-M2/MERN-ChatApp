const express = require( 'express' )

const router = express.Router()

router.route( '/' ).post( registerUser )
router.post( '/Login', athUser )

module.exports = router