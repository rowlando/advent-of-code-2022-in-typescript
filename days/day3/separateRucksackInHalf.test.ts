import separateRucksackInHalf from "./separateRucksackInHalf";

test('test separateRucksackInHalf', function() {
    const rucksack = "vJrwpWtwJgWrhcsFMMfFFhFp";

    expect(separateRucksackInHalf(rucksack)).toEqual(["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
});