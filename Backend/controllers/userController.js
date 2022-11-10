const asyncHandler = require( 'express-async-handler' )
const User = require('../Model/UserModel')
const generateToken = require('../config/generateToken')

const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password, picture } = req.body

    if ( !name || !email || !password ) {

        res.status( 400 )
        throw new error('Please complete all the field')
    } 
    
    const existUser = await User.findOne( { email } )
    
    if ( existUser ) {
        res.status( 400 )
        throw new error('This user are already exist')
    }

    const user = await User.create( {
        name,
        email, 
        password,
        picture,
    } )
    
    if ( user ) {
        res.status( 201 ).json( {
            id: user.id,
            name: user.name,
            password: user.password,
            picture: user.picture,
            token: generateToken(user.id)
        })
    } else {
        res.status( 404 )
        throw new error('user not found')
    }
    
} )

module.exports = { registerUser };