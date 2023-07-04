export default function (stacks: string[][], move: { moves: number; fromColumn: number; toColumn: number; }): string[][] {
    const itemsToMove = stacks[move.fromColumn].splice(-move.moves); // Remove the last two items from the source column
    stacks[move.toColumn].push(...itemsToMove); // Add the removed items to the target column
    return stacks;
}
