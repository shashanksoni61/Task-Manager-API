const errorHandlerMiddleware = (err, req, res, next) => {
  console.log('accessing custom error handler');
  return res.status(404).json({ error: err });
};

module.exports = errorHandlerMiddleware;
