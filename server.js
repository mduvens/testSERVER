let express = require('express')
let app = express()
// let http = require('http').createServer(app)
var bodyParser = require('body-parser')

let PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// http.listen(PORT, function(){
//     console.log(`listening on port ${PORT}`)
// })

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})
app.get('/workouts', function(req,res){
    res.sendFile(__dirname + '/workouts.html')
})
app.get('/app', function(req,res){
    res.sendFile(__dirname + '/app.html')
})
app.get('/about', function(req,res){
    res.sendFile(__dirname + '/about.html')
})