var fs = require('fs');
var totalScore = 0;
fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    data.split('\n').forEach(function (line) {
        var move1 = line[0];
        var move2 = line[2];
        if (move2 === 'X') {
            totalScore += 1;
        }
        else if (move2 === 'Y') {
            totalScore += 2;
        }
        else if (move2 === 'Z') {
            totalScore += 3;
        }
        if (draw(move1, move2)) {
            totalScore += 3;
        }
        else if (!playerOneWins(move1, move2)) {
            totalScore += 6;
        }
    });
    console.log(totalScore);
});
function draw(move1, move2) {
    var lookupTable = {
        A: 'X',
        B: 'Y',
        C: 'Z'
    };
    return lookupTable[move1] === move2;
}
function playerOneWins(move1, move2) {
    return (move1 === 'A' && move2 === 'Z') ||
        (move1 === 'C' && move2 === 'Y') ||
        (move1 === 'B' && move2 === 'X');
}
