const express = require('express')
const root = express()
root.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})
module.exports = root
