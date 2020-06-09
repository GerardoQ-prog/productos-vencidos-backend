const express =require('express')
const bodyParser= require('body-parser')
const routes = require('./routes')
const connectDB=require('./DB/connection')
const cors=require('cors')

const app = express()

connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors()) 

app.use('/',routes())


app.listen(5000,() => {
    console.log('se escucha')
})