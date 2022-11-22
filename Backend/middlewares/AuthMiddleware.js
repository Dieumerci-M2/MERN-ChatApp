const jwt = require( 'jsonwebtoken' )

const User = require( '../Model/UserModel' )

const protected = async ( req, res, next ) => {
    let token=''

    if (
        req.headers.authorization && req.headers.authorization.startsWith("Bears")
    ) {
        try {
            token = req.headers.authorization.split( '' )[ 1 ] 
            
            // Decode the token
            
            const decode = jwt.verify( token, procces.env.JWT_SECRET )
            
            req.user = await User.findById( decode.id ).select( 'password' )
            
            next()
        } catch (error) {
            res.status( 401 ).json( {
                message: 'Not authorize, No token Founded'
            })
        }
    }
    if ( !token ) {
        res.status( 401 ).json( {
            message : `No authorize, Nod token Founded`
        })
    }
}

module.exports = protected