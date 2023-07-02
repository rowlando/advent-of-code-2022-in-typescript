import compartments from './compartments';
import convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52 from './convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52';
import findLetterWhichAppearsInBothCompartments from './findLetterWhichAppearsInBothCompartments';

const rucksack = "CrZsJsPPZsGzwwsLwLmpwMDw";
const ruckSackCompartments = compartments(rucksack);

const letter = findLetterWhichAppearsInBothCompartments(ruckSackCompartments);
console.log(letter);

const number = convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52(letter);
console.log(number);