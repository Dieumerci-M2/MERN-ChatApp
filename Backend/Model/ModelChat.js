const mongoose = require( 'mongoose' )


const ModelChats = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        userChat: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref : 'User'
            }
        ],
        latestMessages: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'User'
        },
       
    },
    {
        timestamps : true
    }
)

const chat = mongoose.model( 'Chat', ModelChats )

module.exports = chat;
