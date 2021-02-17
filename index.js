// packges needed
const fs = require("fs");
const inquirer = require("inquirer");
// const PORT =3007;

//area of questions for managers input

let productionTeam = []

const coreQuestion = [
    {
        type:'input',
        message: 'What is your name?',
        name:'name'
    },
    {
        type:'input',
        message: 'What is your id number?',
        name:'id'
    },
    {
        type:'input',
        message: 'What is your email?',
        name:'email'
    },
    {
        type:'list',
        message: 'What is your role?',
        name:'role',
        choices:[ "manager", "intern", "engineer"]
    }
]
const managerQuestion =[
    {
        type:'input',
        message: 'What is your office number?',
        name:'oficeNum'
    }
]

const engineerQuestion =[
    {
        type:'input',
        message: 'What school did you go to?',
        name:'school'
    }
]

const interQuestions = [
    {   type:'input',
        message: 'What is your github username',
        name:'github'}
]

function companyPrompt(){
    console.log("Please fill out teams info:");
    inquirer
        .prompt(coreQuestion).then(function(data){
            console.log(data);
            if(data.role==="manager"){
                inquirer
                    .prompt(managerQuestion).then(function(managerData){
                        console.log(managerData);
                    })
            }
            else if(data.role==="intern"){
                inquirer
                    .prompt(internQuestion).then(function(internData){
                        console.log(internData);
                })
            }
            else{
                inquirer
                    .prompt(employeeQuestion).then(function(employeeData){
                        console.log(employeeData);
                })
            }

        })
    }
function addAnother(){
    //this will be another inquier function for the user to add more functions
}

function createNewManager(data, managerData){
    // figure out how to create new manager object to push into prodcution team array
}


function createNewIntern(){
    
}

function createNewEngineer(){
    
}

companyPrompt();