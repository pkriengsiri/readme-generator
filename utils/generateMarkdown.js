// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if(license === "") {
    return ""
  } else if (license === "MIT") {
    
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection(license) => {

};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => 
  return `#${data.projectName}

  ## Description
  ${data.projectDescription}
  
  License badge goes here
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  
  ## Contributing
  ${data.contribution}
  
  ## Tests 
  ${data.test} 
`;


module.exports = generateMarkdown;
