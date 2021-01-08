//IMPORT PACKAGES
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// JS VARIABLES
const questions = [
  {
    type: "input",
    message: "Please enter your project name:",
    name: "projectName",
  },
  {
    type: "input",
    message: "Please enter a project description in a few short sentences:",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Please enter installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter usage information",
    name: "usage",
  },
  {
    type: "list",
    choices: ["Please contact the author to be added as a collaborator to this project and to discuss contribution guidelines.","No contributions are being accepted at this time."],
    message: "Please select an option for contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please enter test information:",
    name: "test",
  },
  {
    type: "list",
    choices: ["GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Mozilla Public License 2.0","Apache License 2.0","MIT License","Boost Software License 1.0","The Unlicense"],
    message: "Please select a license from the list:",
    name: "license",
  },
  {
    type: "input",
    message: "Please enter your GitHub user name:",
    name: "userName",
  },
  {
    type: "input",
    message: "Please enter your email address:",
    name: "email",
  },
];

// FUNCTION DEFINITIONS
const promptUser = () => {
  inquirer.prompt([...questions]).then((response) => {
    console.log(response);
  });
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

}

// TODO: Create a function to initialize app
const init = () => {
  promptUser();
};

// Function call to initialize app
init();
