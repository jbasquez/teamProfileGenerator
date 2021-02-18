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
        name:'officeNum'
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

const done =[
    {
        type:'list',
        message: 'would you like to add another?',
        name:'done',
        choices:["yes", "no"]
    }
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
                        createNewManager(data.name, data.id, data.email, managerData.officeNum);
                        inquirer.prompt(done).then(addAnother);
                    })
            }
            else if(data.role==="intern"){
                inquirer
                    .prompt(internQuestion).then(function(internData){
                        console.log(internData);
                        createNewIntern(data.name, data.id, data.email, internData.school);
                        inquirer.prompt(done).then(addAnother);
                })
            }
            else{
                inquirer
                    .prompt(engineerQuestion).then(function(engineerData){
                        console.log(engineerData);
                        createNewEngineer(data.name, data.id, data.email, engineerData.github);
                        inquirer.prompt(done).then(addAnother);
                })
            }

        })
    }
function addAnother(){
    if(done==="yes"){
        companyPrompt();
    }else{
        console.log(productionTeam)
    }
}

function createNewManager(name, id, email, officenum){
    // figure out how to create new manager object to push into prodcution team array
    let newManager = new  Manager(name, id, email, officenum);
    productionTeam.push(newManager);
    console.log(newManager);
}

 
function createNewIntern(name, id, email, school){
    let newIntern = new Intern(name, id, email, school);
    productionTeam.push(newIntern);
    console.log(newIntern);
}

function createNewEngineer(name, id, email, github){
    let newEngineer = new Engineer(name, id, email, github);
    productionTeam.push(newEngineer);
    console.log(newEngineer);
}

companyPrompt();


const htmlTop = `
   <html>
   <head>
   <title>Managers Contact Card</title>
   </head>
   <body>`
const htmlEnd = `
</body>
   </html>`
for(var i=0; i<productionTeam.length, i++){
    var card = `
    <h4>Name: </h4>
    <h5> ${this.name}</h5>
    <h4>Id: </h4>
    <h5> ${this.id}</h5>
    <h4>Email: </h4>
    <h5> ${this.email}</h5>
    <h4>Office Number: </h4>
    <h5> ${this.officenum}</h5>
    <h4>Role</h4>
    <h5>${this}</h5>`
    htmlTop = htmlTop + card
};
htmlTop = htmlTop + htmlEnd