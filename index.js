var express = require('express')
var bodyParser = require('body-parser')

var userRoute = require('./routes/user.route')
var port = 3000

var app = express()
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { // path
        name: 'AAA'
    })
    // du lieu render o phia server
})

app.use('/users', userRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})