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

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), () => {
	console.log("Env: " + process.env.NODE_ENV);
	console.log("Server opened!");
});