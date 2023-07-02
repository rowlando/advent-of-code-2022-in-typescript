export function convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52(letter: string): number {
    const letterCode = letter.charCodeAt(0);
    if (letterCode >= 97 && letterCode <= 122) {
        return letterCode - 96;
    }
    return letterCode - 38;
}
