const express = require(express)
const router = express.Router()
const axios = require('axios')

router.get('/get-questions', (req, res) => {
  const { categoryId, difficulty } = req.params
  return axios
    .get(
      `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple&difficulty=${difficulty}`
    )
    .then(results => res.json(results.data.results))
    .catch(error => res.json(error))
})
