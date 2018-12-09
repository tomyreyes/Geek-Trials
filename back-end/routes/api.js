const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/get-questions', (req, res) => {
  if (!req.params) {
    res.send('An error occurred: No parameters sent')
  }
  const { categoryId, difficulty } = req.params
  return axios
    .get(
      `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple&difficulty=${difficulty}`
    )
    .then(results => res.json(results.data.results))
    .catch(error => res.json(error))
})
