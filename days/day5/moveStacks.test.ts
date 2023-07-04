import parseMove from "./parseMove";
import processMove from "./processMove";

const inputMoves = `move 2 from 4 to 6
move 1 from 9 to 5
move 3 from 2 to 4`;

const inputStacks: string[][] = [
    ['N', 'B', 'D', 'T', 'V', 'G', 'Z', 'J'],
    ['S', 'R', 'M', 'D', 'W', 'P', 'F'],
    ['V', 'C', 'R', 'S', 'Z'],
    ['R', 'T', 'J', 'Z', 'P', 'H', 'G'],
    ['T', 'C', 'J', 'N', 'D', 'Z', 'Q', 'F'],
    ['N', 'V', 'P', 'W', 'G', 'S', 'F', 'M'],
    ['G', 'C', 'V', 'B', 'P', 'Q'],
    ['Z', 'B', 'P', 'N'],
    ['W', 'P', 'J']
];

test("moveStacks works with example moves", () => {
    let stacks = Array.from(inputStacks);
    const commands = inputMoves.split("\n");
    for (const command of commands) {
        const move = parseMove(command);
        if (move) {
            stacks = processMove(stacks, move);
        }
    }
    expect(stacks).toEqual([
        ['N', 'B', 'D', 'T', 'V', 'G', 'Z', 'J'],
        ['S', 'R', 'M', 'D'],
        ['V', 'C', 'R', 'S', 'Z'],
        ['R', 'T', 'J', 'Z', 'P', 'F', 'P', 'W'],
        ['T', 'C', 'J', 'N', 'D', 'Z', 'Q', 'F', 'J'],
        ['N', 'V', 'P', 'W', 'G', 'S', 'F', 'M', 'G', 'H'],
        ['G', 'C', 'V', 'B', 'P', 'Q'],
        ['Z', 'B', 'P', 'N'],
        ['W', 'P']
    ]);
});


