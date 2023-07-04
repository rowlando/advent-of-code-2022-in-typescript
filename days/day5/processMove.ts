export default function (stacks: string[][], move: { moves: number; fromColumn: number; toColumn: number; }): string[][] {
    for (let i = 0; i < move.moves; i++) {
        let token: string | undefined = stacks[move.fromColumn].pop();
        if (token !== undefined) { // Check if token is not undefined
            stacks[move.toColumn].push(token);
        }
    }
    return stacks;
}
