import { addDomProject } from "./dom-stuff.js";

class Project {
  constructor(name, id) {
    this.name = name;
    this.tasks = [];
    this.id = id;
  }
}

export default Project;
