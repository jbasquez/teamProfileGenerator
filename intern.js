const { getgroups } = require("process");

class Intern {
    constructor(name, id, email, school) {
      this.name = name;
      this.id = id;
      this.emaiil = email;
      this.school = school;
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
    getSchool() {
        return this.school;
    }
    
    }
  module.exports = {
    Intern
  };