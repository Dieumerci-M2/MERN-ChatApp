const express = require( 'express' )
const router = express.Router()
const protecte = require('../middlewares/AuthMiddleware')
const { route } = require( './UserRoute' )
const {chatEnter, chatOut, createGroup, remaneGroup, deleteGroup} = require('../controllers/ChatController')

router.post( '/',protecte, chatEnter )
router.get( '/', protecte, chatOut )
router.post( '/group', protecte, createGroup )
router.put( '/grouprename', protecte, remaneGroup )
router.delete( '/delegroup', protecte, deleteGroup )
router.post('/add', protecte, addPersonGroup)

module.exports = router