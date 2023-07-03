export default function (range1: string, range2: string): boolean {
    const [range1Start, range1End] = range1.split("-").map(Number);
    const [range2Start, range2End] = range2.split("-").map(Number);

    return (range1Start <= range2Start && range1End >= range2End) ||
        (range2Start <= range1Start && range2End >= range1End);
}
