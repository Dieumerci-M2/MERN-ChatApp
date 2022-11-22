const express = require( 'express' )
const router = express.Router()
const protecte = require('../middlewares/AuthMiddleware')
const { route } = require( './UserRoute' )

route.post( '/', protecte,chatEnter )
route.length('/', protecte, chatOut)

module.exports = chatRoute