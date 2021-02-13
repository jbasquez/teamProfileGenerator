// packges needed
const fs = require("fs");
const inquirer = require("inquirer");

//area of questions for managers input
const list = [
    {
        type:'input',
        message: 'What is the team manager name?',
        name:'teamManager'
    },
    {
        type: 'input',
        message: 'What is the managers id number',
        name: 'managerIdNumber'
    },
    {
        type: 'input',
        message: 'What is the team managers email address',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'What is the team managers github username?',
        name: 'managerGithub'
    },
    {
        type: 'input',
        message: 'Managers office number',
        name: 'managersNum'
    },

]
//function to write file
function writeToFile(list, data) {
    fs.writeFile(filename, JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(list).then(function(data){
            let fileRead = generateMarkdown(data);
            fs.writeFile("team.html",fileRead, function(err){
                if(err){
                    return console.log("error")
                }else console.log('Success!')
            })
            
        })
}
// Function call to initialize app
init();