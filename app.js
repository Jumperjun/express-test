const express = require('express')
const app = express()
const port = 3000

// require handlebars in the project
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.get('/',(req,res)=>{
  res.render('1')
})

app.get('/about', (req, res) => {
  res.render('2')
})

app.get('/portfolio', (req, res) => {
  res.render('3')
})

app.get('/contact', (req, res) => {
  res.render('4')
})

app.listen(port,()=>{
  console.log(`Express is running on http://localhost:${port}`)
})