"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var totalScore = 0;
fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    data.split('\n').forEach(function (line) {
        var player1Move = convertToMove(line[0]);
        var outcome = convertToOutcome(line[2]);
        var move2;
        switch (outcome) {
            case Outcome.Lose:
                move2 = getLosingMove(player1Move);
                break;
            case Outcome.Draw:
                move2 = findTheDrawMove(player1Move);
                break;
            case Outcome.Win:
                move2 = findTheWinningMove(player1Move);
                break;
        }
        totalScore += outcome;
        totalScore += move2;
    });
    console.log(totalScore);
});
var Outcome;
(function (Outcome) {
    Outcome[Outcome["Lose"] = 0] = "Lose";
    Outcome[Outcome["Draw"] = 3] = "Draw";
    Outcome[Outcome["Win"] = 6] = "Win";
})(Outcome || (Outcome = {}));
function convertToOutcome(value) {
    var mapping = {
        X: Outcome.Lose,
        Y: Outcome.Draw,
        Z: Outcome.Win,
    };
    return mapping[value];
}
var Move;
(function (Move) {
    Move[Move["Rock"] = 1] = "Rock";
    Move[Move["Paper"] = 2] = "Paper";
    Move[Move["Scissors"] = 3] = "Scissors";
})(Move || (Move = {}));
function convertToMove(value) {
    var mapping = {
        A: Move.Rock,
        B: Move.Paper,
        C: Move.Scissors,
        X: Move.Rock,
        Y: Move.Paper,
        Z: Move.Scissors, // Mapping for Z
    };
    return mapping[value];
}
function getLosingMove(move) {
    var _a;
    var losingMoves = (_a = {},
        _a[Move.Rock] = Move.Scissors,
        _a[Move.Paper] = Move.Rock,
        _a[Move.Scissors] = Move.Paper,
        _a);
    return losingMoves[move];
}
function findTheWinningMove(move) {
    var _a;
    var lookupTable = (_a = {},
        _a[Move.Rock] = Move.Paper,
        _a[Move.Paper] = Move.Scissors,
        _a[Move.Scissors] = Move.Rock,
        _a);
    return lookupTable[move];
}
function findTheDrawMove(move) {
    return move;
}
