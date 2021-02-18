const { getgroups } = require("process");

class Engineer {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.emaiil = email;
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
  }
  module.exports = Engineer;