export default function (range1: string, range2: string): boolean {
    const [start1, end1] = range1.split("-").map(Number);
    const [start2, end2] = range2.split("-").map(Number);
    return (start1 <= end2 && end1 >= start2) || (start2 <= end1 && end2 >= start1);
}