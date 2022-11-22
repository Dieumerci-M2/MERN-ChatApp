const Chat = require( '../Model/ModelChat' );
const User = require( '../Model/UserModel' )

const chatEnter = async( req, res ) => {
   
    const { userId } = req.body;

  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.params._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "nom picture email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    let chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.params._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }

}


const chatOut = ( req, res ) => {
    try {
        Chat.find( { users: { $elemMatch: { $eq: req.params._id } } } )
            .populate('users', '-password') 
            .populate('groupAdmin', '-password')
            .populate( 'latestMessage' )
            .sort( { updateAt: -1 } )
            .then( async( result ) => {
                result = await User.populate( result, {
                    path: "latestMessage.sender",
                    select: "nom picture email",    
                } )
                res.status(200).send(result)
            })   
            } catch (error) {
                throw new Error(error)
            }
}

module.exports = {chatEnter, chatOut}