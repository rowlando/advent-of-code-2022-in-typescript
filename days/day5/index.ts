import fs from 'fs';
import parseStacks from './parseStacks';
import parseMove from './parseMove';
import processMove from './processMove';
import processMultipleMoves from './processMultipleMoves';

const input = fs.readFileSync('input.txt', 'utf8');
const [inputStacks, inputMoves] = input.split('\n\n');

let stacks = parseStacks(inputStacks);

const commands = inputMoves.split("\n");
for (const command of commands) {
    const move = parseMove(command);
    if (move) {
        stacks = processMultipleMoves(stacks, move);
    }
}

// print the last item in each stack with no newlines
console.log(stacks.map(stack => stack[stack.length - 1]).join(''));
