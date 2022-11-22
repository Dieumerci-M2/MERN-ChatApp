const express = require( 'express' )
const { registerUser, authUser, SomeUsers } = require('../controllers/userController')
const router = express.Router()
const protecte = require('../middlewares/AuthMiddleware')

router.post( '/', registerUser )
router.post( '/login', authUser )
router.get('/', SomeUsers, protecte)


module.exports = router;