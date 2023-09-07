
const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine'); 
require('dotenv').config();
const mongoose = require('mongoose');

// import logs data and schema
const Log = require('./models/logs');
const manyLogs = require('./models/manyLogs');

const PORT = 3000;

// * App Config
app.set('view engine', 'jsx');
app.engine('jsx',jsxEngine());

// middleware
app.use((req, res, next) => {
  // console.log(req.method, req.url);
  next();
})
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
app.post('/logs', async (req, res) => {
  //res.send('received');
  // setting on/off value to true/false
  req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
  
  try {
    await Log.create(req.body);
  } catch (e) {
    console.log(e);
  }

  console.log(req.body);
  // res.send(req.body);
  res.redirect('/logs');

})


/**
 * Seed Route
 */
app.get('/api/logs/seed', async(req, res) => {
  const createdLogs = await Log.insertMany(manyLogs);
  res.send(createdLogs);
})


// CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_URI);
// test connection
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB');
})

app.listen(PORT, () => {
  console.log('listining on port ', PORT);
})