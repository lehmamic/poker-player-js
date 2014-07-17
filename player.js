var _ = require('underscore');
module.exports = {

  VERSION: "0.0.8",

  bet_request: function(game_state) {
        return playRound(game_state);
  },

  showdown: function(game_state) {

  }
};

function getCallValue(game_state) {
    return getDifferenceToHighestBet(game_state);
}

function playRound(game_state){
    var me = getPlayer(game_state);

    if(hasPair(game_state)) {
        return game_state.current_buy_in + game_state.minimum_raise;
    }
    else if(hasHighCard(me.hole_cards)){
            return getCallValue(game_state);
    }
    return 0;
}

function getPlayer (game_state) {
    for (var i = 0; i< game_state.players.length; i++)
    {
        var player = game_state.players[i];
        if(player.hole_cards)
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
    return isNaN(card.rank) ||  card.rank === '10';
}

function isBeforeFlop(game_state) {
    return game_state.community_cards.length == 0;
}

function getDifferenceToHighestBet(game_state) {
    return game_state.current_buy_in - getPlayer(game_state).bet;
}

function getBigBlind(game_state) {
    return game_state.small_blind * 2;
}

function hasAllInCards(game_state) {
        if (hasPair(game_state)) {
        return true;
    }

    return false;
}

function hasPair(game_state) {
    var me = getPlayer(game_state);
    var counters =  _.chain(me.hole_cards)
    .union(game_state.community_cards)
    .countBy(function(card){
        return card.rank;
    }).value();

    for(var card in counters) {
        var value = counters[card];
        if(value > 1 && playerHasCard(me, card)) {
            return true;
        };
    }

    return false;
}

function playerHasCard(me, card) {
    return _.some(me.hole_cards, function(cardInHand) {
        return cardInHand.rank === card;
    });
}
