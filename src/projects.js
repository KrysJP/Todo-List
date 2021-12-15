import { addDomProject } from "./dom-stuff.js";

class Project {
  constructor(name, id) {
    this.name = name;
    this.tasks = [];
    this.id = id;
    this.selected = false;
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

export default Project;
