const crypto = require('crypto');
const StringDecoder = require('string_decoder').StringDecoder;

const mockData = require('../../db/mockData');

const decoder = new StringDecoder('utf-8');

const headers = {
  'Content-type': 'application/json',
  'Cache-control': 'no-cache',
};

module.exports = {
  getUser: function (req, res) {
    res.writeHead(200, headers);
    return res.end(
      JSON.stringify({
        status: 'success',
        data: mockData,
      })
    );
  },

  createUser: function (req, res) {
    let buffer = '';
    req.on('data', (chunk) => {
      buffer += decoder.write(chunk);
    });
    req.on('end', () => {
      buffer += decoder.end();
      const body = {};

      buffer.split('&').forEach((item) => {
        const newItem = item.split('=');
        body[newItem[0]] = newItem[1];
      });
      body.id = mockData.length + 1;
      mockData.push(body);
      res.writeHead(201, headers);
      return res.end(
        JSON.stringify({
          status: 'success',
          body: mockData,
        })
      );
    });
  },

  updateUser: function (req, res) {
    return;
  },
};
