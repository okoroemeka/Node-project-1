const user = require('./user');

const headers = {
  'Content-type': 'application/json',
  'Cache-control': 'no-cache',
};

module.exports = function app(req, res) {
  const { method, url, header, body } = req;
  // console.log('body', req);
  switch (method) {
    case 'GET':
      if (url == '/user') {
        return user.getUser(req, res);
      }
    case 'POST':
      if (url == '/user') {
        return user.createUser(req, res);
      }
    case 'PATCH':
      break;
    case 'DELETE':
      break;
    default:
      res.writeHead(404, headers);
      return res.end(
        JSON.stringify({
          status: 'error',
          message: 'Endpoint/page not found',
        })
      );
  }
};
