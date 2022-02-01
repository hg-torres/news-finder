const router = require('express').Router()
const { News, User} = require('../models')
const passport = require('passport')

router.get('/news', passport.authenticate('jwt'), async function (req, res) {
  const news = await News.find({})
  res.json(news)
})

router.post('/news', passport.authenticate('jwt'), async function (req, res) {
  const news = await News.create(req.body)
  await User.findByIdAndUpdate(req.user._id, { $push: { news: news._id } })
  res.json(news)
})

router.put('/news/:id', passport.authenticate('jwt'), async function (req, res) {
  await News.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

router.delete('/news/:id', passport.authenticate('jwt'), async function (req, res) {
  await News.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router