
module.exports = {

  VERSION: "0.0.2",

  bet_request: function(game_state) {
      var me = getPlayer(game_state);

      var hasHigh = hasHighCard(me.hole_cards);

      if(hasHigh && isBeforeFlop(game_state)) {
          return me.stack;
      }
      else {
          return 0;
      }
  },

  showdown: function(game_state) {

  }
};

function getPlayer (game_state) {
    for (var i = 0; i< game_state.players.length; i++)
    {
        var player = hole_cards.players[i];
        if(player.hole_cards.length > 0)
        {
            return player;
        }
    }

    return null;
}

function hasHighCard(hole_cards) {
    var isHigh = false;
    for(var i = 0; i < hole_cards.length; i++) {
        isHigh = isHighCard(hole_cards[i]);
        if(isHigh) {
            break;
        }
    }

    return isHigh;
}

function isHighCard(card) {
    return !IsNumeric(card.rank) ||  card.rank === '10';
}

function isBeforeFlop(game_state) {
    return game_state.community_cards.length == 0;
}
