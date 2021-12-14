import css from "../styles/styles.css";
import { addProject, removeProject } from "./index.js";

// responsible for creating each part of the page
class PageCreation {
  constructor(content) {
    this.contentName = content;
    this.content = document.querySelector(content);
  }

  // wrapping function
  create() {
    this.content.append(this.heading(), this.middle());
  }

  heading() {
    var div = document.createElement("div");
    var title = document.createElement("h1");

    div.classList.add("heading-container");
    title.classList.add("heading-title");

    title.textContent = "Todo List";

    div.appendChild(title);

    return div;
  }

  // includes projects and tasks (under heading, above footer)
  middle() {
    var bigDiv = document.createElement("div");

    bigDiv.classList.add("middle-container");

    bigDiv.append(this.projects(), this.tasks());

    return bigDiv;
  }
  projects() {
    var div = document.createElement("div");
    var heading = document.createElement("h2");
    var addButton = document.createElement("button");

    heading.textContent = "Projects";
    addButton.textContent = "+";
    addButton.addEventListener("click", addProject);

    div.classList.add("projects-container");
    heading.classList.add("projects-heading");
    addButton.classList.add("projects-add");

    heading.append(addButton);
    div.append(heading);

    return div;
  }
  tasks() {
    // javascript to add

    var div = document.createElement("div");

    div.classList.add("tasks-container");

    return div;
  }
}

var ProjectManagement = (function () {
  // adding a project
  function add(containerName, project, id) {
    var container = document.querySelector(containerName);

    var div = document.createElement("div");
    var remove = document.createElement("button");
    div.classList.add("project", "noselect");
    remove.classList.add("noselect", "project-remove");
    remove.style.opacity = 0;

    // to have the remove button show up when hovered over only
    div.addEventListener("mouseover", () => {
      mouseover(remove);
    });
    div.addEventListener("mouseout", () => {
      mouseout(remove);
    });

    remove.addEventListener("click", () => {
      removeProject(id);
    });

    div.textContent = project.name;
    remove.textContent = "+";

    // so that main cannot be removed
    if (id !== 0) {
      div.append(remove);
    }

    container.append(div);

    div.id = "project" + String(id);

    return div;
  }
  function remove(id) {
    var project = document.querySelector("#project" + String(id));
    project.parentNode.removeChild(project);
  }

  function mouseover(button) {
    button.style.opacity = 1;
  }
  function mouseout(button) {
    button.style.opacity = 0;
  }

  return { add, remove };
})();

export { PageCreation, ProjectManagement };
