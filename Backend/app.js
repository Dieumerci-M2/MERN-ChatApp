const http = require( 'http' )
const express = require( 'express' )
const app = express()

const Port = process.env.Port || 6500


const server = http.createServer((app)=>{
   
}) 

server.listen(Port, ()=>console.log(`server is running to port http://localhost:${Port}`))