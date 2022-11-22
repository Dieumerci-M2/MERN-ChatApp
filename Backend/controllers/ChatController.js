const Chat = require( '../Model/ModelChat' );
const User = require( '../Model/MessageModel.js' )

const chatEnter = async( req, res ) => {
   
    const { idChat } = req.body
    
    if ( !idChat ) {
        console.log( 'idChat not send user request' );
        res.sendStatus(400)
    }

    let isChat = await Chat.find( {

        isGroupChat : false,
        $and: [
            {userChat : {elemMatch : {$eq : req.user._id}}},
            {userChat : {elemMatch : {$eq : idChat}}}
        ]
    } )
        .populate( 'users', '-password' )
        .populate('latestMessages')

    isChat = await User.populate( isChat, {
        path: 'latestMessages.sender',
        select : 'nom email picture'
    } )
    
    if ( isChat.lenght > 0 ) {
        res.send(isChat[0])
    } else {
        let DataChat = {
            chatName: 'sender',
            isGroupChat: false,
            users: [req.user._id, idChat]
        }

        try {
            const createChat = await Chat.create( DataChat )
            
            const FullChat = await Chat.findOne( { _id: createChat._id } ).populate(
                'users',
                '-password'
            )

            res.status(200).send(FullChat)
        } catch (error) {
            res.status( 400 )
            throw new Error(error.message)
        }
    }

}


// const chatOut = ( req, res, next ) => {
    
// }

module.exports = {chatEnter}