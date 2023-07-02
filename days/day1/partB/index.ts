import fs from 'fs'; // Importing the 'fs' module to handle file system operations

// Main function to read a text file line by line, convert each line to an integer, and find the maximum

const filePath: string = '../input.txt';
const data: string = fs.readFileSync(filePath, 'utf-8'); // Read the file synchronously and store its content as a string

const groups: string[] = data.split('\n\n'); // Split the file content into an array of groups
let maximumCalories: number = 0; // Variable to store the maximum calories

let elves: number[] = [];

for (let elf of groups) { // Iterate over each group
  const calories: string[] = elf.split('\n'); // Split the group into an array of lines
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

  elves.push(totalCalories);

}

elves.sort((a, b) => a - b);

const top3 = elves.slice(elves.length - 3, elves.length);

// sum the top3
let sum = 0;
for (let i = 0; i < top3.length; i++) {
  sum += top3[i];
}
console.log(sum);
