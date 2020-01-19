const express =  require('express')
const configureDB = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const app = express()
const port = 3001
// const path = require('path')
configureDB()
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send('welcome to the ticket master app')
})
app.use('/',router)
// app.use(express.static(path.join(__dirname,"client/build"))) 
// app.get("*",(req,res) => { 
//     res.sendFile(path.join(__dirname + "/client/build/index.html")) 
// }) 
app.listen(port,()=>{
    console.log('listening on port ',port)
})