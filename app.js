const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 5050
const dbconfig = require('./config/dbconfig')
const cors = require('cors')

mongoose.connect(dbconfig.mongoURL, {
    useNewUrlParser: true
}).then(() => console.log("connect mongodb"))
.catch(err => console.log(err))

app.use(cors())

app.use(bodyParser.json({
    extends: true,
    limit:'50mb'
}))

app.use(bodyParser.urlencoded({
    extends: true,
    limit:'50mb'
}))

app.use('/user', require('./routers/user'))

app.listen(port, function () {
    console.log(' Server berjalan di port'+ port)

})