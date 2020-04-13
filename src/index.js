const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send({ msg: 'ok' })
})

app.listen(4200, () => {
  console.log('🚀️ Back-end started')
})