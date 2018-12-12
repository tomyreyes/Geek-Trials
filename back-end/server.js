const express = require('express')
const PORT = 8080
const cors = require('cors')
const app = express()
const api = require('./routes/api')
const root = require('./routes/root')

app.use(cors())
app.use('/', root)
app.use('/api', api)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`)
  })
}

module.exports = app