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
    password: { type: Sting, required: true },
    picture: {
        type: String,
        default : '../assets/chatApp.svg'
    }
},
    {
    timestamps : true
    }
)

const user = mongoose.Model( 'User', UserModel )

module.exports = user