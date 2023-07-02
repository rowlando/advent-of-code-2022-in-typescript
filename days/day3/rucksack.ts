import { convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52 } from "./convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52";
import { findLetterWhichAppearsInBothCompartments } from "./findLetterWhichAppearsInBothCompartments";
import { separateRucksackInHalf } from "./separateRucksackInHalf";
const rucksack = "vJrwpWtwJgWrhcsFMMfFFhFp";

console.log(separateRucksackInHalf(rucksack));

const letter = findLetterWhichAppearsInBothCompartments(separateRucksackInHalf(rucksack));
console.log(letter);

const number = convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52(letter);
console.log(number);