var player = require('./player');
var express = require('express');
var http = require('http');
var app = express();

app.set('port', process.env.PORT || 1337);
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function(req, res){
  res.send(200, 'OK')
});

app.post('/', function(req, res){
  if(req.body.action == 'bet_request') {
    res.send(200, player.bet_request(JSON.parse(req.body.game_state)).toString());
  } else if(req.body.action == 'showdown') {
    player.showdown(JSON.parse(req.body.game_state));
    res.send(200, 'OK');
  } else if(req.body.action == 'version') {
    res.send(200, player.VERSION);
  } else {
    res.send(200, 'OK')
  }

});

port = 1337;
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
console.log('Listening at http://localhost:' + port)
