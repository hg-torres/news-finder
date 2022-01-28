const { Schema, model } = require('mongoose')

const User = new Schema({
  name: String,
  username: String,
  email: String,
  news: [{
    type: Schema.Types.ObjectId,
    ref: 'News'
  }]
}, {timestamps: true})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)

