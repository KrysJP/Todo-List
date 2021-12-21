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

  // DOM stuff
  unhighlight() {
    var domProject = document.querySelector("#project" + String(this.id));
    domProject.style["background"] = "rgb(238, 238, 238)";
  }
  highlight() {
    var domProject = document.querySelector("#project" + String(this.id));
    domProject.style["background"] = "rgb(201, 201, 201)";
  }
}

export default Project;
