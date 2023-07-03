import findBadgeInGroupsRucksacks from "./findBadgeInGroupsRucksacks";

test('test findBadgeInGroupsRucksacks', function () {
    expect(findBadgeInGroupsRucksacks([
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg"
    ])).toEqual('r');

    expect(findBadgeInGroupsRucksacks([
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw"
    ])).toEqual('Z');

});
