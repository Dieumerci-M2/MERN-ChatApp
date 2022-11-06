const mongoDB = require( 'mongoose' )


const ModelChats = mongoose.schemas(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        userChat: [
            {
                type: mongoose.schemas.Types.ObjectId,
                ref : 'User'
            }
        ],
        latestMessages: {
            type: mongoose.schemas.Types.ObjectId,
            ref: 'Message'
        },
        groupAdmin: {
            type: mongoose.schemas.Types.ObjectId,
            ref : 'User'
        },
       
    },
    {
        timestamps : true
    }
)

const chat = mongoose.Models( 'Chat', ModelChats )

module.exports = chat;
