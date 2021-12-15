import {
  PageCreation,
  ProjectManagement,
  TaskManagement,
} from "./dom-stuff.js";
import Project from "./projects.js";
import Task from "./tasks.js";

var projects = [];
var page = new PageCreation("#content");

// creating the default project
projects.push(new Project("Main", 0));
page.create(projects[0].title);
ProjectManagement.add(".projects-container", projects[0], 0);

// test tasks
addTask(projects[0]);
addTask(projects[0]);

function addProject() {
  var id = 0;
  while (projects.some((project) => project.id === id)) {
    id++;
  }
  var name = prompt("Enter Project name");
  projects.push(new Project(name, id));
  ProjectManagement.add(
    ".projects-container",
    projects[projects.length - 1],
    id
  );
}
// removing a project from the DOM
function removeProject(id) {
  projects.forEach((project) => {
    if (project.id === id) {
      ProjectManagement.remove(id);
      projects.splice(projects.indexOf(project), projects.indexOf(project));
    }
  });
}

function addTask(project) {
  var id = 0;
  // keep incrementing id until no tasks share the id
  while (
    projects.some(function (project) {
      project.tasks.some((task) => {
        task.id == id;
      });
    })
  ) {
    id++;
  }

  // var title = prompt("Enter Task name");
  var title = "example";
  project.tasks.push(new Task(title, id));

  TaskManagement.add(
    ".tasks-container",
    project.tasks[project.tasks.length - 1],
    id
  );
}
export { addProject, removeProject };
