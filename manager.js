const { getgroups } = require("process");

class Manager {
    constructor(name, id, email, officenum) {
      this.name = name;
      this.id = id;
      this.emaiil = email;
      this.officenum= officenum;
    }
        getRole() {
        return (this)
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
    module.exports = {
        Manager
    };