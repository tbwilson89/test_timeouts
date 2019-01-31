const express = require('express')
const passport = require('passport')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
  res.send('Hello World!')
})

app.listen(port, (req, res)=>{
  console.log('Server is listening on port: ' + port)
})
