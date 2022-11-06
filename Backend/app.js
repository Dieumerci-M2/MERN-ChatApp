const express = require( 'express' )
const dotenv = require('dotenv')
const app = express()
const data = require('./data/datas')

const Port = process.env.Port || 6500
dotenv.config()

app.get( '/md', ( req, res ) => {
    res.send('Hello API')
} )

app.get( '/md/chats', ( req, res ) => {
    
    res.send(data)
} )

app.get( '/md/chats/:id', ( req, res ) => {
    const id = req.params.id
    res.send(data[id])
})

app.listen(Port, ()=>console.log(`server is running to port http://localhost:${Port}`))