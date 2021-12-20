const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const articleRouter = require('./routes/Article')

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/article', articleRouter)


// Edit here
const db_user = "yourusername"
const db_pass = "yourpass"
const db_name = "yourdbname"
const port = 3000

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@movie-app-api.du88b.mongodb.net/${db_name}?retryWrites=true&w=majority`)

app.get('/api/', (req, res) => {
    res.send('<h1>API Sayfası</h1>')
})


app.listen(port, ()=> {
    console.log(`listening on ${port}`)
    console.log(`--------> http://localhost:${port}`)
    console.log(`--------> Articles: http://localhost:${port}/api/articles`)
})