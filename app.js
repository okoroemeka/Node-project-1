const http = require('http');
const app = require('./src/controllers');

const PORT = 4500;
const httpserv = http.createServer(app);

main();
function main() {
  httpserv.listen(PORT);
  console.log(`sever listening on port http://localhost:${PORT}`);
}
