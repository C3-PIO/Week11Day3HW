const express = require('express')
const app = express()
const port = 3000

// Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
app.use((req, res, next)=>{
    console.log("I'm da middleware")
    next()
})
app.use(express.urlencoded({extended:false}))

// Data
const turtles = require('./models/turtles')
const villians = require('./models/villians')
const others = require('./models/others')

// Routes

app.get('/', (req, res)=>{
    res.send('<h1>Main Page</h1><br/><a href="/turtles" >Turtles</a><br/><a href="/villians" >Villians</a><br/><a href="/others" >Others</a>')
})

// Index : Show all the things! - GET /fruits

app.get('/turtles', (req, res)=>{
    res.render('turtles/Index', {turtles: turtles})
})

app.get('/villians', (req, res)=>{
    res.render('villians/Index', {villians: villians})
})

app.get('/others', (req, res)=>{
    res.render('others/Index', {other: others})
})

// New : An empty form for a new thing - GET /fruits/new

app.get('/turtles/new', (req, res)=>{
    res.render('turtles/New')
})

app.get('/villians/new', (req, res)=>{
    res.render('villians/New')
})

// Delete : Get rid of this particular thing! - DELETE /fruits/:id
// Update : Update this specific thing with this updated form - PUT /fruits/:id
// Create : Make a new thing with this filled out form - POST /fruits

app.post('/turtles', (req, res)=>{
    turtles.push(req.body); // Pushing new fruit into fruits array
    console.log(turtles); // So we can see fruits w/ new
    res.redirect('/turtles'); //send the user back to /fruits
})

app.post('/villians', (req, res)=>{
    villians.push(req.body); // Pushing new fruit into fruits array
    console.log(villians); // So we can see fruits w/ new
    res.redirect('/villians'); // send the user back to /fruits
})

// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
// Show : Show me this one thing! - GET /fruits/:id

app.get('/turtles/:indexNumber', (req, res)=>{
    res.render('turtles/Show', {
        turtle: turtles[req.params.indexNumber]
    })
})

app.get('/villians/:indexNumber', (req, res)=>{
    res.render('villians/Show', {
        villian: villians[req.params.indexNumber]
    })
})

app.listen(3000, ()=>{
    console.log(`Listening on port ${port}`)
})