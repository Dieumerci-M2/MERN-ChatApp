const express = require( 'express' )
const app = express()

const Port = process.env.Port || 6500

app.get( '/', ( req, res ) => {
    res.send('API start')
})

app.listen(Port, ()=>console.log(`server is running to port http://localhost:${Port}`))