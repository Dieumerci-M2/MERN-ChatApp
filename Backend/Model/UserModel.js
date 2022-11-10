const mongoose = require( 'mongoose' )
const bcrypt = require('bcrypt')

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

// UserModel.methods.matchPassword = async(enterPassword) => {
//     const result = await bcrypt.compareSync( enterPassword, this.password )
//     return result
// }

UserModel.pre( 'save', async function ( next ){
    if ( !this.isModified ) {
        next()
    }
    const salt = await bcrypt.genSalt( 10 )
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model( 'User', UserModel )

module.exports = User