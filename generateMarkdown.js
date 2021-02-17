if(req.url ==='/manager'){
    const html = `
    <html>
    <head>
    <title>Managers Contact Card</title>
    </head>
    </body>
    <h1>Managers Contact Card</h1>
    <h4>Name: </h4>
    <h5> ${this.name}</h5>
    <h4>Id: </h4>
    <h5> ${this.id}</h5>
    <h4>Email: </h4>
    <h5> ${this.email}</h5>
    <h4>Office Number: </h4>
    <h5> ${this.officenum}</h5>
    </body>
    </html>
    `
}
// let bodyEl =document.body;
// let cardEl = document.createElement('div');
// let headerEl = document.createElement('h2');
// headerEl.classname = employee.name;


// function generateMarkdown(data) {
//     return `
// # Project Title: ${data.title}
// ## About:
// - Repo-name: ${data.repoName}
// - Discription: ${data.discription}
// - License: ${renderLicenseBadge(data.license)}
// - Version of installation needed for deployment: ${data.installation}
// *Is this ready for deployment: ${data.ready}
// ## Contact info:
// - Contributors: ${data.contributors}
// - Username: ${data.username}
// - Email: ${data.email}
// `;
// }

// module.exports = generateMarkdown;