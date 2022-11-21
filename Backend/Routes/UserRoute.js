const express = require( 'express' )
const { registerUser, authUser, SomeUsers } = require('../controllers/userController')
const router = express.Router()

router.post( '/', registerUser )
router.post( '/login', authUser )
// router.get( '/', Allusers )
router.get('/', SomeUsers)


module.exports = router;