const express = require('express')

const app = express()
app.use(express.json())

app.get('/projects', (req, res) => {
  const { title, owner } = req.query;

  console.log(title)
  console.log(owner)

  return res.send([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ])
})

app.post('/projects', (req, res) => {
  const {title, owner} = req.body;
  console.log(title)
  console.log(owner)

  return res.send([
    'projeto 1',
    'projeto 2',
    'projeto 3',
    'projeto 4',
  ])
})

app.put('/projects/:id', (req, res) => {
  const { id } = req.params

  console.log(id)

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