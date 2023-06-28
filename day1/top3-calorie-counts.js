var fs = require('fs'); // Importing the 'fs' module to handle file system operations
// Main function to read a text file line by line, convert each line to an integer, and find the maximum
var filePath = 'input.txt';
var data = fs.readFileSync(filePath, 'utf-8'); // Read the file synchronously and store its content as a string
var groups = data.split('\n\n'); // Split the file content into an array of groups
var maximumCalories = 0; // Variable to store the maximum calories
var elves = [];
for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) { // Iterate over each group
    var elf = groups_1[_i];
    var calories = elf.split('\n'); // Split the group into an array of lines
    var totalCalories = 0; // Create a variable to store the total calories for the group
    for (var _a = 0, calories_1 = calories; _a < calories_1.length; _a++) { // Iterate over each line in the group
        var calorie = calories_1[_a];
        var trimmedCalorie = calorie.trim(); // Remove leading and trailing whitespace from the line
        if (trimmedCalorie !== '') { // Skip empty lines
            var number = parseInt(trimmedCalorie, 10); // Convert the trimmed line to an integer
            if (!isNaN(number)) { // Check if the conversion was successful and the number is not NaN
                totalCalories += number; // Add the number to the total calories
            }
        }
    }
    elves.push(totalCalories);
}
elves.sort(function (a, b) { return a - b; });
var top3 = elves.slice(elves.length - 3, elves.length);
// sum the top3
var sum = 0;
for (var i = 0; i < top3.length; i++) {
    sum += top3[i];
}
console.log(sum);
