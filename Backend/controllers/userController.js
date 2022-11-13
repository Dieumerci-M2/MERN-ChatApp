const asyncHandler = require( 'express-async-handler' )
const User = require('../Model/UserModel')
const generateToken = require( '../config/generateToken' )
const bcrypt=require("bcrypt")

const registerUser = async(req, res) => {
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
            _id: user._id,
            name: user.name,
            password: user.password,
            picture: user.picture,
            token: generateToken(user._id)
        })
    } else {
        res.status( 404 )
        throw new error('user not found')
    }
    
} 

const authUser =  async (req, res,next) => {
    

    try {
    const { email, password } = req.body
    const user = await User.findOne( { email } )
        if (!user) {
              return res.json( {
                  message: "pas d'utilisateur a cet email",
                  statut:false
        }) 
        }
        const isOk = await bcrypt.compare( password, user.password )
        if (!isOk) {
            return res.json( {
                message: "mot de passe incorrect",
                statut:false
            })
        }
        delete user.password
        res.json({message:"bien enregistre",user})
    } catch(ex) {
        next(ex)
    }
}

module.exports = { registerUser, authUser };