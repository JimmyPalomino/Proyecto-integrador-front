//Install express server
const express = require('express');
var proxy = require('express-http-proxy');
const path = require('path');

const app = express();

app.use('/api', proxy('https://proyecto-dev-full-stack.herokuapp.com', {
    https: true,
    preserveHostHdr: true
  }));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/proyecto-integrador-front'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/proyecto-integrador-front/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);