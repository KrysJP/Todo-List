import { PageCreation, ProjectManagement } from "./dom-stuff.js";
import Project from "./projects.js";

var page = new PageCreation("#content");

page.create();

var projects = [];

// default project
projects.push(new Project("Main", 0));
ProjectManagement.add(".projects-container", projects[0], 0);

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
// removing a project from the FOM a
function removeProject(id) {
  projects.forEach((project) => {
    if (project.id === id) {
      ProjectManagement.remove(id);
      projects.splice(projects.indexOf(project), projects.indexOf(project));
    }
  });
}
export { addProject, removeProject };
