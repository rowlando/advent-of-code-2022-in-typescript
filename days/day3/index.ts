import fs from 'fs';
import convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52 from "./convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52";
import findLetterWhichAppearsInBothCompartments from "./findLetterWhichAppearsInBothCompartments";
import separateRucksackInHalf from "./separateRucksackInHalf";

fs.readFile('input.txt', 'utf8', (err: any, data: string) => {
    if (err) throw err;
    let sumOfPriorities = 0;
    data.split('\n').forEach((rucksack: string) => {
        const compartments = separateRucksackInHalf(rucksack);
        const item = findLetterWhichAppearsInBothCompartments(compartments);
        const priority = convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52(item);
        if (priority) {
            sumOfPriorities += priority;
        }
    });
    console.log(sumOfPriorities);
});