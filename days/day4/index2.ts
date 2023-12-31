import fs from 'fs';
import doRangesOverlap from './doRangesOverlap';

const input = fs.readFileSync('input.txt', 'utf8');
const count = input.split('\n').reduce((count: number, line: string) => {
    const [range1, range2] = line.split(',');
    if (doRangesOverlap(range1, range2)) {
        count++;
    }
    return count;
}, 0);

console.log(count);

