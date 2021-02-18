const { getgroups } = require("process");

class Manager {
    constructor(name, id, email, officenum) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officenum= officenum;
    }
        getRole() {
        return ("manager")
        }
        getName() {
            return this.name;
        }
        getId() {
            return this.id;
        }
        getEmail() {
            return this.email;
        }
        officeNumber() {
            return this.officenum;
        }
    }
    module.exports = 
        Manager;