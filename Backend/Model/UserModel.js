const mongoose = require( 'mongoose' )

const UserModel = mongoose.Schema( {
    name : {type : String, required : true},
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength: 10,
        unique: true
    },
    password: { type: String, required: true },
    picture: {
        type: String,
        default : '../assets/chatApp.svg'
    }
},
    {
    timestamps : true
    }
)

const User = mongoose.model( 'User', UserModel )

module.exports = User