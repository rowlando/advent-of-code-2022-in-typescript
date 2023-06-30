import fs from 'fs';
let totalScore:number = 0;

fs.readFile('input.txt', 'utf8', (err: any, data: string) => {
    if (err) throw err;
    data.split('\n').forEach((line: string) => {
        const player1Move: Move = convertToMove(line[0]);
        const outcome = convertToOutcome(line[2]);
        let move2: Move;

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

enum Outcome {
    Lose = 0,
    Draw = 3,
    Win = 6,
}

function convertToOutcome(value: string): Outcome {
    const mapping: Record<string, Outcome> = {
        X: Outcome.Lose,
        Y: Outcome.Draw,
        Z: Outcome.Win,
    };

    return mapping[value];
}

enum Move {
    Rock = 1,
    Paper = 2,
    Scissors = 3,
}

function convertToMove(value: string): Move {
    const mapping: Record<string, Move> = {
        A: Move.Rock,
        B: Move.Paper,
        C: Move.Scissors,
        X: Move.Rock,      // Mapping for X
        Y: Move.Paper,     // Mapping for Y
        Z: Move.Scissors,  // Mapping for Z
    };

    return mapping[value];
}

function getLosingMove(move: Move): Move {
    const losingMoves: Record<Move, Move> = {
        [Move.Rock]: Move.Scissors,
        [Move.Paper]: Move.Rock,
        [Move.Scissors]: Move.Paper,
    };

    return losingMoves[move];
}


function findTheWinningMove(move: Move): Move {
    const lookupTable: Record<Move, Move> = {
        [Move.Rock]: Move.Paper,
        [Move.Paper]: Move.Scissors,
        [Move.Scissors]: Move.Rock,
    };

    return lookupTable[move];
}

function findTheDrawMove(move: Move): Move {
    return move;
}