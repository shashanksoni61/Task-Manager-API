const mongoose = require('mongoose');

const connectDB = uri => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
//   .then(() => console.log('connected to the database'))
//   .catch(err => console.log(err));

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('connected sycce');
//   })
//   .catch(err => console.log(err));

module.exports = connectDB;
