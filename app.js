/*
 *         I'm using: https://docs.opendota.com/
 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// the static we want is the css file
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3338;
app.listen(PORT, () => {
	console.log("Env: " + process.env.NODE_ENV);
	console.log("Server opened! Port: " + PORT);
});