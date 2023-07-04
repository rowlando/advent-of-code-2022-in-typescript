export default function (text: string): { moves: number; fromColumn: number; toColumn: number; } | null {
    const match = text.match(/move (\d+) from (\d+) to (\d+)/);

    return match ? {
        moves: parseInt(match[1]),
        fromColumn: parseInt(match[2]) - 1,
        toColumn: parseInt(match[3]) - 1
    } : null;
}
