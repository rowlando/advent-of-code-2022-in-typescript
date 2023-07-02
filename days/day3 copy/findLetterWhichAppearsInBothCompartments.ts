export default function findLetterWhichAppearsInBothCompartments(compartments: string[]): string {
    const firstCompartment = compartments[0];
    const secondCompartment = compartments[1];
    for (let i = 0; i < firstCompartment.length; i++) {
        const letter = firstCompartment[i];
        if (secondCompartment.includes(letter)) {
            return letter;
        }
    }
    return "";
}
