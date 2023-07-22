// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// if license is MIT
// return the badge for MIT
// else if license is Apache
// return the badge for Apache
// else if license is GPL
// return the badge for GPL
// else if license is BSD
// return the badge for BSD
// else
// return an empty string

function renderLicenseBadge(license) {

  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache)'
  }
  else if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD)'
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache'
  }
  else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  else if (license === 'BSD') {
    return 'https://opensource.org/licenses/BSD'
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === 'MIT') {
    return 'MIT License'
  }
  else if (license === 'Apache') {
    return 'Apache License 2.0'
  }
  else if (license === 'GPL') {
    return 'GNU General Public License v3.0'
  }
  else if (license === 'BSD') {
    return 'BSD 3-Clause License'
  }
  else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.apptitle}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.appdescription}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.appinstallation}
  
  ## Usage
  ${data.appusage}
  
  ## Contribution Guidelines
  ${data.appcontribution}
  
  ## Tests
  ${data.apptest}
  
  ## License
  This project is licensed under the ${renderLicenseSection(data.license)}.
  For more details, see the [License](LICENSE) file.
  
  ## Questions
  For any questions or feedback, feel free to contact me through GitHub or email:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  `;

  // return the markdown

  // inject the stuff (can use markdown language)
  // use the backticks to inject the data
  // use the ${} to inject the data (data.title) for example: # ${data.title} 

}

module.exports = generateMarkdown;
