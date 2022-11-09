const express = require( 'express' )
const dotenv = require('dotenv')
const app = express()
const ConnectionDB = require('./data/db')

const Port = process.env.Port || 6500
dotenv.config()
ConnectionDB()

app.use( (req, res, next) => {
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    next();
})
app.get( '/md', ( req, res ) => {
    res.send('Hello API')
} )

app.get( '/md/chats', ( req, res ) => {
    
} )

app.get( '/md/chats/:id', ( req, res ) => {
    
} )

app.options(/.*/,( req, res ) => {
    res.setHeader( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );
    res.setHeader( 'Access-Control-Allow-Headers', '*' );
    res.end();
})

app.listen(Port, ()=>console.log(`server is running to port http://localhost:${Port}`))