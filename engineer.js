const { getgroups } = require("process");

class Engineer {
    constructor(name, id, email, github) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
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
  getGithub() {
    return this.github;
  }
  }
  module.exports = Engineer;