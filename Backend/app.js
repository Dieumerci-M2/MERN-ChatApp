const express = require( 'express' )
const dotenv = require('dotenv')
const app = express()
const data = require('./data/datas')

const Port = process.env.Port || 6500
dotenv.config()
app.use( (req, res, next) => {
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    next();
})
app.get( '/md', ( req, res ) => {
    res.send('Hello API')
} )

app.get( '/md/chats', ( req, res ) => {
    res.send(data)
} )

app.get( '/md/chats/:id', ( req, res ) => {
    const id = req.params.id
    res.send(data[id])
} )

app.options(/.*/,( req, res ) => {
    res.setHeader( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );
    res.setHeader( 'Access-Control-Allow-Headers', '*' );
    res.end();
})

app.listen(Port, ()=>console.log(`server is running to port http://localhost:${Port}`))