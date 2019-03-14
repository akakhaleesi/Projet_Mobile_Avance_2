var mongoose = require('mongoose');

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});
mongoose.connect('mongodb://localhost:27017/cnfz', {useNewUrlParser: true});
console.log(mongoose.connection.readyState);
