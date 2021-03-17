const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
let cors = require('cors')
let mongoose = require('mongoose')
const URI = require('./config')
const path = require('path')

app.use(cors())

// Connect to mongodb database
mongoose
  .connect(process.env.MONGODB_URI || URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch(error => console.log(error))

mongoose.connection.on('error', err => {
  console.error(
    `something is not working with the mongo db connection :( ${err.message})`
  )
})

mongoose.connection.on('connected', () => {
  console.log('🐕 Mongo connection is running')
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})

// connect to our api routes

app.use('/api', require('./server/api'))

// serve static files

app.use(express.static(path.join(__dirname, './client/build')))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// error handling

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

// Listen on Port
app.listen(PORT, () => console.log(`🐕 server running on port ${PORT}`))

module.exports = app
