export default function (rucksacks: string[]): string {
    // find the letter which appears in all rucksacks
    // return that letter
    for (let i = 0; i < rucksacks[0].length; i++) {
        const letter = rucksacks[0][i];
        let letterIsInAllRucksacks = true;
        for (let j = 1; j < rucksacks.length; j++) {
            if (!rucksacks[j].includes(letter)) {
                letterIsInAllRucksacks = false;
                break;
            }
        }
        if (letterIsInAllRucksacks) {
            return letter;
        }
    }
    return "";
}