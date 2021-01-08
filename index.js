//IMPORT PACKAGES
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
    type: "input",
    message: "Please enter any credits for this application:",
    name: "credits",
  },
  {
    type: "list",
    choices: [
      "Please contact the author to be added as a collaborator to this project and to discuss contribution guidelines.",
      "No contributions are being accepted at this time.",
    ],
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
    choices: [
      "GNU GPLv3",
      "Apache License 2.0",
      "MIT License",
    ],
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
  {
      type: "input",
      message: "Please enter your full name for the license",
      name: "fullName",
  },
  {
      type: "input",
      message: "Please enter the year the application was created",
      name: "year",
  }
];

// FUNCTION DEFINITIONS
const promptUser = () => {
  inquirer.prompt([...questions]).then((response) => {
    const markdown = generateMarkdown(response);
    writeToFile("SAMPLEREADME.md",generateMarkdown(response));
  });
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName,data, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
};

// TODO: Create a function to initialize app
const init = () => {
  promptUser();
};

// Function call to initialize app
init();
