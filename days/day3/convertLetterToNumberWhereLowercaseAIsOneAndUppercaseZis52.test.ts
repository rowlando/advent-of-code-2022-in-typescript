import convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52 from "./convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52";

test('test src.convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52', function() {
    expect(convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52('a')).toEqual(1);
    expect(convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52('z')).toEqual(26);
    expect(convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52('A')).toEqual(27);
    expect(convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52('Z')).toEqual(52);
});
