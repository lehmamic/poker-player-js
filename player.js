
module.exports = {

  VERSION: "0.0.1",

  bet_request: function(game_state) {
      var me = getPlayer(game_state);
      //for(var i = 0; i< player.hole_cards.length; i++) {

      //}


    return me.stack;
  },

  showdown: function(game_state) {

  }
};

function getPlayer (game_state) {
    for (var i = 0; i< game_state.players.length; i++)
    {
        var player = hole_cards.players;
        if(player.hole_cards.length > 0)
        {
            return player;
        }
    }

    return null;
}
