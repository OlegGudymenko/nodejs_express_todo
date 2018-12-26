const mongoose = require('mongoose');

mongoose.connect(require('../config/db').dbPath, {
  connectTimeoutMS: 10000
});


module.exports = mongoose;