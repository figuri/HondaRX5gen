// TODO: Include packages needed for this application

// add package that would import the generateMarkdown.js file
// const generateMarkdown = require('./utils/generateMarkdown.js'); 
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// to import we will use require keyword and the name of the package 
// > use your own word to name the variable we used fs
// node index.js ; to run the file

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'apptitle',
        message: 'What is the title of your app?',
    },
    {
        type: 'input',
        name: 'appdescription',
        message: 'What is the description of your app?',
    },
    {
        type: 'input',
        name: 'appinstallation',
        message: 'What are the installation instructions for your app?',
    },
    {
        type: 'input',
        name: 'appusage',
        message: 'What is the usage information for your app?',
    },
    {
        type: 'input',
        name: 'appcontribution',
        message: 'What are the contribution guidelines for your app?',
    },
    {
        type: 'input',
        name: 'apptest',
        message: 'What are the test instructions for your app?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to initialize app
// ask the user questions - array of questions []
    // we need to store the answers as one object {}
    // we need to generate the markdown 
    // > calling generate markdown function
    // > insert object of answers
    // invoke the writeToFile function
    
function init() {
    
    inquirer
        .prompt(questions)
        .then((answers) => {
            const userAnswer = generateMarkdown(answers);
            writeToFile('README.md', userAnswer);
            // Use user answer feedback for the question objects that will be used to generate the README
        }).catch((error) => {
            console.log(error);
            // catches error and logs it to the console
        });
}

// then we need to call the init function

init();

// var result = init();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // create the readme file
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }
    );
}

