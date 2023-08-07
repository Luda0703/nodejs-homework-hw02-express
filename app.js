const express = require('express')
const logger = require('morgan')
const cors = require('cors')
// const mongoose = require('mongoose');

// const DB_HOST = "mongodb+srv://Ludmila:gDTmToTiSDYtS2R2@cluster0.0pjysdr.mongodb.net/db-contacts?retryWrites=true&w=majority"

// // mongoose.set('scriptQuery', true);

// mongoose.connect(DB_HOST)
//     .then(() => console.log("Darabase connect success"))
//     .catch(error => console.log(error.message))

const contactsRouter = require('./routes/api/contacts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = 'Server error'} = err;
  res.status(status).json({ message })
})

module.exports = app

// gDTmToTiSDYtS2R2
// mongodb+srv://Ludmila:gDTmToTiSDYtS2R2@cluster0.0pjysdr.mongodb.net/
