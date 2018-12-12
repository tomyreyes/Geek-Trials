const express = require('express')
const api = express.Router()
// const api = express() this way seems to work 
const axios = require('axios')

api.get('/get-questions', (req, res) => {
  if (!Object.keys(req.query).length) {
    //return early if queries are not there
    return res
      .status(500)
      .json({ status: 500, message: 'An error occurred: No queries sent' })
  }
  const { categoryId, difficulty } = req.query
  return axios
    .get(
      `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple&difficulty=${difficulty}`
    )
    .then(results => res.status(200).json(results.data.results))
    .catch(error => res.status(404).json(error))
})

module.exports = api
