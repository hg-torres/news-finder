const { model, Schema } = require('mongoose')

const News = new Schema({
  title: String,
  description: String,
  link: String,
  date: String,
  source: String,
  image: String
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true} )

module.exports = model('News', News)