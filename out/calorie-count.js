var fs = require('fs'); // Importing the 'fs' module to handle file system operations
// Main function to read a text file line by line, convert each line to an integer, and store it in an array
function readFileAndConvertToNumbers(filePath) {
    var numbers = []; // Create an empty array to store the converted numbers
    var data = fs.readFileSync(filePath, 'utf-8'); // Read the file synchronously and store its content as a string
    var lines = data.split('\n'); // Split the file content into an array of lines
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) { // Iterate over each line
        var line = lines_1[_i];
        var trimmedLine = line.trim(); // Remove leading and trailing whitespace from the line
        if (trimmedLine !== '') { // Skip empty lines
            var number = parseInt(trimmedLine, 10); // Convert the trimmed line to an integer
            if (!isNaN(number)) { // Check if the conversion was successful and the number is not NaN
                numbers.push(number); // Add the converted number to the array
            }
        }
    }
    return numbers; // Return the array of converted numbers
}
// Usage: Replace 'path/to/file.txt' with the actual file path
var filePath = 'input.txt';
var numbersFromFile = readFileAndConvertToNumbers(filePath); // Call the function to read the file and convert its content to numbers
// Print the numbers
numbersFromFile.forEach(function (number) {
    console.log(number);
});
