import fs from 'fs';
import parseStacks from './parseStacks';
import parseMove from './parseMove';
import processMove from './processMove';

const input = fs.readFileSync('input.txt', 'utf8');
const [inputStacks, inputMoves] = input.split('\n\n');

let stacks = parseStacks(inputStacks);

const commands = inputMoves.split("\n");
for (const command of commands) {
    const move = parseMove(command);
    if (move) {
        stacks = processMove(stacks, move);
    }
}

// print the stacks
stacks.forEach((stack, index) => {
    console.log(`Column ${index + 1}: ${stack.join(' ')}`);
});