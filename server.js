import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
let app = express()
const __dirname = import.meta.dirname

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {title: 'Welcome to Pug', message: 'Welcome to Pug'})
})

app.listen(process.env.PORT, () => {
  console.log(`D3 listening on port ${process.env.PORT}`)
})