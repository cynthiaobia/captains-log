
const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine'); 

const PORT = 3000;

// * App Config
app.set('view engine', 'jsx');
app.engine('jsx',jsxEngine());

// middleware


app.use(express.urlencoded({extended:false}));

// ROUTES

app.get('/', (req, res) => {
  res.send(`App is working, <a href='/logs'>view all logs</a>`);
})

app.get('/logs', (req, res) => {
  res.send(`All logs, <a href='/logs/new'>create a new log</a>`);
})


app.get('/logs/new', (req, res) => {
  res.render('New');
})


// create route
app.post('/logs', (req, res) => {
  //res.send('received');
  req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
  console.log(req.body);
  res.send(req.body);
  // redirect later
})




app.listen(PORT, () => {
  console.log('listining on port ', PORT);
})