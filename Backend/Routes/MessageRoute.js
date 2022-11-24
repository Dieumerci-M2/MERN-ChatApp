const express = require( 'express' )
const router = express.Router()

const {sendMessage, ViewMessages} = require('../controllers/MessageController')

router.post( '/', sendMessage )
router.get(':chatId', ViewMessages)

module.exports = router;