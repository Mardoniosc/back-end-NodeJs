const express = require('express')
const app = express()

app.get('/projects', (req, res) => {
  return res.send([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ])
})

app.post('/projects', (req, res) => {
  return res.send([
    'projeto 1',
    'projeto 2',
    'projeto 3',
    'projeto 4',
  ])
})

app.put('/projects/:id', (req, res) => {
  return res.send([
    'projeto 5',
    'projeto 2',
    'projeto 3',
    'projeto 4',
  ])
})

app.delete('/projects/:id', (req, res) => {
  return res.send([
    'projeto 5',
    'projeto 2',
    'projeto 4',
  ])
})

app.listen(4200, () => {
  console.log('🚀️ Back-end started')
})