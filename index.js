// TODO: Include packages needed for this application

// add package that would import the generateMarkdown.js file
// const generateMarkdown = require('./utils/generateMarkdown.js'); 
const generateMarkdown = require('./utils/generateMarkdown.js');
// export from "badmath"
const mathsAreBad = require('./badmath.js');
const { default: inquirer } = require('inquirer');
// to import we will use require keyword ex: const badmath = require('./badmath.js'); 
// > use your own word to name the variable (not matching the 'badmath' name)
// node index.js ; to run the file

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to initialize app
// ask the user questions - array of questions []
    // we need to store the answers as one object {}
    // we need to generate the markdown 
    // > calling generate markdown function
    // > insert object of answers
    // invoke the writeToFile function
function init() {
    
    inquirer
        .prompt([
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
        })
        .catch((error) => {
            console.log(error);
        });
        console.log("hello")
}

// then we need to call the init function

init();

// var result = init();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // create the readme

}