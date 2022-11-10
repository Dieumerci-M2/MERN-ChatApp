const express = require( 'express' )
const dotenv = require('dotenv')
const app = express()
const ConnectionDB = require('./config/db')
const colors = require( 'colors' )
const userRoute = require('./Routes/UserRoute')
const Port = process.env.Port || 6500

dotenv.config()

ConnectionDB()

app.use( (req, res, next) => {
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    next();
} )

app.use( express.json() )

app.get( '/', ( req, res ) => {
    res.send('API is Runnig verry Well')
} )
app.use( '/api/user', userRoute)

app.options(/.*/,( req, res ) => {
    res.setHeader( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );
    res.setHeader( 'Access-Control-Allow-Headers', '*' );
    res.end();
})

app.listen(Port, ()=>console.log(`server is running to port http://localhost:${Port}`.yellow.bold))