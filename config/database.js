const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(process.env.DATABASE_URL)
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

//Find out what database to connect to 