const express = require('express');
const connectDB = require('./db/connect.js');

const tasks = require('./routes/tasks');

require('dotenv').config();

//Middlewares
const notFound = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
//app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    const connected = await connectDB(process.env.MONGO_URI);
    if (connected) console.log('database connected');
    app.listen(port, console.log(`server running on port ${port}`));
    console.log(process.env.PORT);
  } catch (error) {
    console.log(error.message);
  }
};

start();
