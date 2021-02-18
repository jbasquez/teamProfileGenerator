// packges needed
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

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

const internQuestion = [
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
                        createNewManager();
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
                    .prompt(engineerQuestion).then(function(engineerData){
                        console.log(engineerData);
                })
            }

        })
    }
function addAnother(){
    //this will be another inquier function for the user to add more functions
}

function createNewManager(name, id, email, officenum){
    // figure out how to create new manager object to push into prodcution team array
    let newManager = new  Manager(name, id, email, officenum);
    productionTeam.push(newManager);
    console.log(newManager);
}

 
function createNewIntern(data, internData){
    
}

function createNewEngineer(data, engineerData){
    
}

companyPrompt();
