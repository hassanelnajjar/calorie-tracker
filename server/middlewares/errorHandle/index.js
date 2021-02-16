const clientError = (req, res) => {
  res.status(404).json({ statusCode: 404, message: 'page not found' });
};
// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  console.log(err);
  const message = err.message || 'internal server error';
  const status = err.output.statusCode || 500;

  res.status(status).json({ statusCode: status, message });
};

module.exports = { clientError, serverError };
