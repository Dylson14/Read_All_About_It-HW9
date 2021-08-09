/* 
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README 
*/

/* creating the ReadMe.md with this bit of code */
const fs = require("fs");

fs.mkdir("./assets", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("folder created");
});

fs.touch("./assets/ReadMe.md", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file created");
});

/* 
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
*/

/* The idea is to create all the questions and answers here and then use the writefile to create the readme and then combine template literals to fill the answers in */
var inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "Project_Title",
    message: "What is your project title?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid title";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Description",
    message: "What is your project description?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid description";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Installation_Instructions",
    message: "How do you install your project?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid instructional text";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Usage",
    message: "How does someone use your project?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid set of usage instructions";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Contribution_Guidelines",
    message: "What are your project's contribution guidelines?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid set of project guidelines";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Tests",
    message: "How is your project tested?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid set of testing methods";
      }
      return true;
    },
  },
];

inquirer
  .prompt(questions)

  .then((answers) => {
    console.log(answers);
  });
