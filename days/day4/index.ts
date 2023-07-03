// Prompt for Copilot:
// each line from file contains two number ranges, split by a comma.
// Call the function doRangesContainEachOther with the two ranges as arguments
// and count the number of times it returns true.

import fs from 'fs';
import path from 'path';
import doRangesContainEachOther from './doRangesContainEachOther';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const count = input.split('\n').reduce((count: number, line: string) => {
    const [range1, range2] = line.split(',');
    if (doRangesContainEachOther(range1, range2)) {
        count++;
    }
    return count;
}, 0);

console.log(count);