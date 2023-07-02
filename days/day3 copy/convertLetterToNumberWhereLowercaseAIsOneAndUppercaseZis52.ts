export default function convertLetterToNumberWhereLowercaseAIsOneAndUppercaseZis52(letter: string): number {
    const asciiCode = letter.charCodeAt(0);
    if (asciiCode >= 97 && asciiCode <= 122) {
        return asciiCode - 96;
    }
    if (asciiCode >= 65 && asciiCode <= 90) {
        return asciiCode - 38;
    }
    return 0;
}
