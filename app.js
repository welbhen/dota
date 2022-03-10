/*
 *         I'm using: https://docs.opendota.com/
 */

var express = require('express')
const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// the static we want is the css file
app.use(express.static(__dirname + '/public'));

app.listen(8000, () => {
	console.log("Server opened! Use: http://localhost:8000");
});