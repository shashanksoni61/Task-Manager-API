const notFound = (req, res) => {
  res.status(404).send('Resourse Not found');
};

module.exports = notFound;
