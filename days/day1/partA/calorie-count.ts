const fs = require('fs'); // Importing the 'fs' module to handle file system operations

// Main function to read a text file line by line, convert each line to an integer, and find the maximum
function readFileAndFindMaximum(filePath: string): void {
  const data: string = fs.readFileSync(filePath, 'utf-8'); // Read the file synchronously and store its content as a string

  const elvesCalories: string[] = data.split('\n\n'); // Split the file content into an array of groups

  let maximumCalories: number = 0; // Variable to store the maximum calories

  for (let elfCalories of elvesCalories) { // Iterate over each group
    const calories: string[] = elfCalories.split('\n'); // Split the group into an array of lines
    let totalCalories: number = 0; // Create a variable to store the total calories for the group

    for (let calorie of calories) { // Iterate over each line in the group
      const trimmedCalorie: string = calorie.trim(); // Remove leading and trailing whitespace from the line

      if (trimmedCalorie !== '') { // Skip empty lines
        const number: number = parseInt(trimmedCalorie, 10); // Convert the trimmed line to an integer

        if (!isNaN(number)) { // Check if the conversion was successful and the number is not NaN
          totalCalories += number; // Add the number to the total calories
        }
      }
    }

    if (totalCalories > maximumCalories) { // Update the maximum calories if the current group's total exceeds the current maximum
      maximumCalories = totalCalories;
    }
  }

  console.log('The maximum number is ' + maximumCalories); // Print the maximum number
}

// Usage: Replace 'path/to/file.txt' with the actual file path
const filePath: string = '../input.txt';
readFileAndFindMaximum(filePath); // Call the function to read the file and find the maximum number
