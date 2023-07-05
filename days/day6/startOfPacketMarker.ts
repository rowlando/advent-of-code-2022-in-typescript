// The start of packet marker is a string that consists of n unique letters somewhere in the input.
// If a character is repeated within n characters of itself, then it is not a start of packet marker.
export default function(input: string, size: number): number {
    // split the input into an array of characters
    const characters = input.split("");
    // look for 4 characters in a row that are not repeated and return the index of the last character
    for (let i = 0; i < characters.length - size; i++) {
        const subArray = characters.slice(i, i + size);
        const unique = new Set(subArray);
        if (unique.size === size) {
            return i + size;
        }
    }
    return -1;
}
