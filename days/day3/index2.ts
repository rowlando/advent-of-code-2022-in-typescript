import fs from 'fs';
import findBadgeInGroupsRucksacks from "./findBadgeInGroupsRucksacks";
import convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52 from "./convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52";

fs.readFile('input.txt', 'utf8', (err: any, data: string) => {
    if (err) throw err;
    let sumOfPriorities = 0;

    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i += 3) {
        // Get the current group of lines
        const currentLines = lines.slice(i, i + 3);

        // Pass the group of lines to the processing function
        const badge = findBadgeInGroupsRucksacks(currentLines);
        const priority = convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52(badge);
        if (priority) {
            sumOfPriorities += priority;
        }
    }

    console.log(sumOfPriorities);
});