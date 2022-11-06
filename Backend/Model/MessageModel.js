const mongoose = require( 'mongoose' )

const MessageModel = mongoose.Schema( {
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    content: { type: String, trim: true },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Chat'
    }
} )

const message = mongoose.Model( 'Message', MessageModel )

module.exports = message