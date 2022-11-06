const mongoose = require( 'mongoose' )

const UserModel = mongoose.Schema( {
    name : {type : String, required : true},
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10
    },
    password: {type : Sting, required : true}
} )

const user = mongoose.Model( 'User', UserModel )

module.exports = user