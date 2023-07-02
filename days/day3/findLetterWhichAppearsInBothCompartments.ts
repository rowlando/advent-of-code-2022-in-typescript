
module.exports = {
    findLetterWhichAppearsInBothCompartments: function (ruckSackCompartments: string[]): string {
        const firstCompartment = ruckSackCompartments[0];
        const secondCompartment = ruckSackCompartments[1];
        for (let i = 0; i < firstCompartment.length; i++) {
            const letter = firstCompartment[i];
            if (secondCompartment.includes(letter)) {
                return letter;
            }
        }
        return "";
    }
};