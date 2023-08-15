const mongoose = require('mongoose');

require('dotenv').config();

const {DB_HOST} = process.env;

const app = require('./app')

mongoose.connect(DB_HOST)
    .then(() => {
      app.listen()
      console.log("Darabase connect success")
    })
    .catch(error => {
      console.log(error.message);
      process.exit(1)
    })

