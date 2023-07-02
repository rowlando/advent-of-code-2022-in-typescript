import findLetterWhichAppearsInBothCompartments from "./findLetterWhichAppearsInBothCompartments";

test('test src.convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52', function() {
    const compartment1 = "vJrwpWtwJgWr";
    const compartment2 = "hcsFMMfFFhFp";
    
    expect(findLetterWhichAppearsInBothCompartments([compartment1, compartment2])).toEqual('p');
});