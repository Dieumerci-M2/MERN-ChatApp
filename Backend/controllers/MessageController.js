const Message = require( '../Model/MessageModel' )
const User = require( '../Model/UserModel' )
const Chat = require('../Model/ModelChat')
const sendMessage = async ( req, res ) => {
    
    const { content, chatId } = req.body
    
     if ( !content || !chatId ) {

        return res.status( 400 ).send( { message: 'Please complete all the field' } )
        
     }
    console.log(req.user);
    let newMessage = {
        sender: req.user._id || '', 
        content: content,
        chat: chatId
    }

    try {
        let message = await Message.create( newMessage )
        
        message = await message.populate( 'sender', {nom:1, picture:1} )
        message = await message.populate( 'chat' )
        message = await User.populate( message, {
            path: 'chat.users',
            select: 'nom email picture'
        })
        
        await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
        
        res.json(message)

    } catch (error) {
        res.status( 400 )
        throw new Error(error)
    }
}

const ViewMessages = async ( req, res ) => {
    


}

module.exports = {sendMessage, ViewMessages}