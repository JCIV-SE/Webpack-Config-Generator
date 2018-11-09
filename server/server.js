const app = require('./app');
const PORT = process.env.PORT || 4000;
const path = require('path');
const http = require('http');

const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});

module.exports = server;
