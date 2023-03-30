const inquirer = require("inquirer")
const fs = require("fs")

const prompts = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project you want displayed?"
    },
    {
        type: "input",
        name: "introduction",
        message: "Give a introduction to your product and a brief description:",
    },
    {
        type: "input",
        name: "instalation",
        message: "Provide an overview of the instalation process and what technologies are used:",
    },
]