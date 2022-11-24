const express = require( 'express' )
const dotenv = require('dotenv')
const app = express()
const ConnectionDB = require('./config/db')
const colors = require( 'colors' )
const userRoute = require( './Routes/UserRoute' )
const chatRoute = require( './Routes/ChatRoute' )
const messageRoute = require( './Routes/MessageRoute' )

// const notFound = require('./middlewares/errorMiddleware')
const Port = process.env.Port || 6600

dotenv.config()

ConnectionDB()

app.use( (req, res, next) => {
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    next();
} )

app.use( express.json() )
app.use( express.urlencoded({extended: false}) )

app.get( '/', ( req, res ) => {
    res.send('API is Runnig verry Well')
} )

app.options(/.*/,( req, res ) => {
    res.setHeader( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );
    res.setHeader( 'Access-Control-Allow-Headers', '*' );
    res.setHeader( 'Access-Control-Allow-Origin',`http://${req.hostname}:5173`)
    res.end();
})
app.use( '/api/user', userRoute )
app.use( '/api/chat', chatRoute )
app.use('/api/message', messageRoute)

//app.use( notFound )



app.listen(Port, ()=>console.log(`server is running to port http://localhost:${Port}`.yellow.bold))