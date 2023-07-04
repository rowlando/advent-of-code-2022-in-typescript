export default function (text: string): string[][] {
    // Split the text into lines
    let lines = text.trim().split('\n');

    // Read the last character of last line
    const numberOfColumns: number = Number.parseInt(lines[lines.length - 1].trim().slice(-1));

    // remove the last line
    lines = lines.slice(0, -1);

    // Create an array of nine empty arrays
    const columns: string[][] = Array.from({ length: numberOfColumns }, () => []);

    // Iterate over each line
    lines.forEach(line => {
        // Remove leading and trailing spaces from the line
        const trimmedLine = line;
    
        // Chunk the line into cells by splitting it every 4 characters
        const cells = trimmedLine.match(/.{1,4}/g);
    
        if (cells) {
            // Iterate over each cell and add it to the corresponding column array
            cells.forEach((cell, index) => {
              const column = columns[index];
              const value = cell.replace(/[\[\]]/g, '').trim();
              if (value.length > 0) {
                column.push(value);
              }
            });
          }
    });

    // reverse the columns
    columns.forEach(column => column.reverse());

    return columns;
}

