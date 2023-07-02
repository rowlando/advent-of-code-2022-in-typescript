module.exports = {
    separateRucksackInHalf: function (rucksack: string): string[] {
        const rucksackLength = rucksack.length;
        const halfRucksackLength = rucksackLength / 2;
        const firstCompartment = rucksack.substring(0, halfRucksackLength);
        const secondCompartment = rucksack.substring(halfRucksackLength, rucksackLength);
        return [firstCompartment, secondCompartment];
    }
};