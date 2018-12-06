const express = require('express')
const PORT = 8080
const app = express()

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`)
})
