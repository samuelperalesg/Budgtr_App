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
app.use(express.json())
app.use(express.static('public'))

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

// post
app.post('/budgets', (req, res) => {
  budgets.push(req.body)
  res.redirect('/budgets')
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
    title: `${budgets[req.params.indexOfBudgetsArray].name}`,
    date: `${budgets[req.params.indexOfBudgetsArray].date}`,
    name: `${budgets[req.params.indexOfBudgetsArray].name}`,
    from: `${budgets[req.params.indexOfBudgetsArray].from}`,
    amount: `${budgets[req.params.indexOfBudgetsArray].amount}`,
    tags: `${budgets[req.params.indexOfBudgetsArray].tags}`
  })
})


// tell the app to listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})