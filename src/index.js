const express = require('express')
const app = express()

app.get('/projects', (req, res) => {
  return res.send({ msg: 'ok' })
})

app.listen()