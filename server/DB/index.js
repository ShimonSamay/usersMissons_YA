const mongoose = require("mongoose");

const CONNECTION_STRING = process.env.CONNECTIONSTRING;

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('mongoDB is connected'))
.catch(() => console.log('connection to mongoDB has failed'))

module.exports = mongoose.connection;