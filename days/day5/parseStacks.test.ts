import parseStacks from './parseStacks';

const text = `[J]             [F] [M]            
[Z] [F]     [G] [Q] [F]            
[G] [P]     [H] [Z] [S] [Q]        
[V] [W] [Z] [P] [D] [G] [P]        
[T] [D] [S] [Z] [N] [W] [B] [N]    
[D] [M] [R] [J] [J] [P] [V] [P] [J]
[B] [R] [C] [T] [C] [V] [C] [B] [P]
[N] [S] [V] [R] [T] [N] [G] [Z] [W]
 1   2   3   4   5   6   7   8   9`;

 const text2 = `[J]             [F] [M]            
 [Z] [F]     [G] [Q] [F]            
 [G] [P]     [H] [Z] [S] [Q]        
 [V] [W] [Z] [P] [D] [G] [P]        
 [T] [D] [S] [Z] [N] [W] [B] [N]    
 [D] [M] [R] [J] [J] [P] [V] [P]
 [B] [R] [C] [T] [C] [V] [C] [B]
 [N] [S] [V] [R] [T] [N] [G] [Z]
  1   2   3   4   5   6   7   8 `;

test('parseStacks works with example stacks', () => {
    expect(parseStacks(text)).toEqual([
        ['N', 'B', 'D', 'T', 'V', 'G', 'Z', 'J'],
        ['S', 'R', 'M', 'D', 'W', 'P', 'F'],
        ['V', 'C', 'R', 'S', 'Z'],
        ['R', 'T', 'J', 'Z', 'P', 'H', 'G'],
        ['T', 'C', 'J', 'N', 'D', 'Z', 'Q', 'F'],
        ['N', 'V', 'P', 'W', 'G', 'S', 'F', 'M'],
        ['G', 'C', 'V', 'B', 'P', 'Q'],
        ['Z', 'B', 'P', 'N'],
        ['W', 'P', 'J']
    ]);
});

test('parseStacks works with example2 stacks', () => {
    expect(parseStacks(text2)).toEqual([
        ['N', 'B', 'D', 'T', 'V', 'G', 'Z', 'J'],
        ['S', 'R', 'M', 'D', 'W', 'P', 'F'],
        ['V', 'C', 'R', 'S', 'Z'],
        ['R', 'T', 'J', 'Z', 'P', 'H', 'G'],
        ['T', 'C', 'J', 'N', 'D', 'Z', 'Q', 'F'],
        ['N', 'V', 'P', 'W', 'G', 'S', 'F', 'M'],
        ['G', 'C', 'V', 'B', 'P', 'Q'],
        ['Z', 'B', 'P', 'N']
    ]);
});