var fs = require('fs'); // Importing the 'fs' module to handle file system operations
// Main function to read a text file line by line, convert each line to an integer, and find the maximum
function readFileAndFindMaximum(filePath) {
    var data = fs.readFileSync(filePath, 'utf-8'); // Read the file synchronously and store its content as a string
    var elvesCalories = data.split('\n\n'); // Split the file content into an array of groups
    var maximumCalories = 0; // Variable to store the maximum calories
    for (var _i = 0, elvesCalories_1 = elvesCalories; _i < elvesCalories_1.length; _i++) { // Iterate over each group
        var elfCalories = elvesCalories_1[_i];
        var calories = elfCalories.split('\n'); // Split the group into an array of lines
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
        if (totalCalories > maximumCalories) { // Update the maximum calories if the current group's total exceeds the current maximum
            maximumCalories = totalCalories;
        }
    }
    console.log('The maximum number is ' + maximumCalories); // Print the maximum number
}
// Usage: Replace 'path/to/file.txt' with the actual file path
var filePath = 'input.txt';
readFileAndFindMaximum(filePath); // Call the function to read the file and find the maximum number
