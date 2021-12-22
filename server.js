// require dependencies
const express = require('express')
const budgets = require('./models/budgets')
const morgan = require('morgan')
const app = express()
const port = 3000


// configure server settings

// configure a data source

// mount middleware
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))

// mount routes

// index
app.get('/budgets', (req, res) => {
  res.render('index.ejs', {
    allBudgets: budgets
  })
})

// new
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs')
})

// create
app.post('/budgets', (req, res) => {
  res.redirect('/budgets')
  budgets.push(req.body)
})

// show
app.get('/budgets/:indexOfBudgetsArray', (req, res) => {
  res.render('show.ejs', {
    budget: budgets[req.params.indexOfBudgetsArray],
    title: `${budgets[req.params.indexOfBudgetsArray].name} Show Page`
  })
})


// tell the app to listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})