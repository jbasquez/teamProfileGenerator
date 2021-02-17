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