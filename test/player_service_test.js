var assert = require("assert");
var player = require('../player');
var data = require('./data');

describe('Version', function(){
    describe('#indexOf()', function(){
        it('should return Version', function(){
            player.VERSION;
        })
    })
});

describe('bet_request', function(){
    describe('with a pair in hand', function(){
        it('should raise minimum amount', function(){
            var bet = player.bet_request(data.gameStatWithPairInHand);

            assert.equal(bet, 560);
        })
    })

    describe('with a pair in community cards and low cards in hand', function(){
        it('should call', function(){
            var bet = player.bet_request(data.gameStatWithPairInCommunityCards);

            assert.equal(bet, 0);
        })
    })

    describe('with high cards in hand', function(){
        it('should call', function(){
            var bet = player.bet_request(data.gameStatWithHighCards);

            assert.equal(bet, 240);
        })
    })
});