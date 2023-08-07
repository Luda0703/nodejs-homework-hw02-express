const mongoose = require('mongoose');

const DB_HOST = "mongodb+srv://Ludmila:gDTmToTiSDYtS2R2@cluster0.0pjysdr.mongodb.net/db-contacts?retryWrites=true&w=majority"

const app = require('./app')

mongoose.connect(DB_HOST)
    .then(() => {
      app.listen(3000)
    })
    .catch(error => {
      console.log(error.message);
      process.exit(1)
    })

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
