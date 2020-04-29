const server = require('./server.js');
const PORT = 5200;

server.listen(PORT, () => {
	console.log(`Running at http://localhost:${PORT}`);
});

module.exports = server;
