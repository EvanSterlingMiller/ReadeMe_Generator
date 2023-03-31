const inquirer = require("inquirer")
const fs = require("fs")

const prompts = [
    { // TITLE INPUT
        type: "input",
        name: "title",
        message: "What is the name of your project you want displayed?"
    },
    { //INTRODUCTION
        type: "input",
        name: "introduction",
        message: "Give a introduction to your product and a brief description:",
    },
    { //INSTALLATION
        type: "input",
        name: "installation",
        message: "Provide an overview of the installation process and what technologies are used:",
    },
    { //USAGE
        type: "input",
        name: "use",
        message: "How do you use this product?"
    },
    { //CONTRIBUTION
        type: "input",
        name: "contributers",
        message: "Who contributed to this project?"
    },
    { //LICENSE
        type: "list",
        name: "license",
        message: "What license do you want for your project?",
        choices: ["NONE", "Apache 2.0", "GNU", "MIT", "BSD 2-clause", "BSD 3-clause", "Boost Software 1.0", "Creative Commons Zero", "Eclipse Public", "Mozilla Public 2.0", "The Unilicense"],
    },
]
function makeReadME(answer){
    return `# ${answer.title}
    
    ## Introduction
    
    ${answer.introduction}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Use](#use)
    - [Contributers](#contributers)
    - [License](#liscense)
    
    ## Installation
    
    ${answer.installation}
    
    ## Use
    
    ${answer.use}
    
    ## Contributers

    ${answer.contributers}

    ## License

    ${answer.license}
    `
}
inquirer.prompt(prompts).then((answer) => {
    const readMeContent = makeReadME(answer)

    fs.writeFile('README.md', readMeContent, (err) => {
        if (err) {
            console.error('There was an error in making your ReadMe!', err)
        } else {
            console.log("Your ReadMe has been generated!")
        }
    })
})