const express = require( 'express' )
const router = express.Router()
const protecte = require('../middlewares/AuthMiddleware')
const { route } = require( './UserRoute' )
const {chatEnter} = require('../controllers/ChatController')

router.post( '/', protecte,chatEnter )
// router.get( '/', protecte, chatOut )
// router.post( '/group', protecte, createGroup )
// router.put( '/grouprename', protecte, remanegroup )
// router.delete( '/delegroup', protecte, deleteGroup )
// router.post('/add', protecte, addPersonGroup)

module.exports = router