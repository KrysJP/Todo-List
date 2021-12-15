import css from "../styles/styles.css";
import { addProject, removeProject } from "./index.js";

// responsible for creating each part of the page
class PageCreation {
  constructor(content) {
    this.contentName = content;
    this.content = document.querySelector(content);
  }

  // wrapping function
  create(projectTitle = "") {
    this.content.append(this.heading(), this.middle(projectTitle));
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
  middle(title) {
    var bigDiv = document.createElement("div");

    bigDiv.classList.add("middle-container");

    bigDiv.append(this.projects(), this.tasks(title));

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
  tasks(title) {
    // javascript to add

    var div = document.createElement("div");

    div.classList.add("tasks-container");

    this.projectTitle(div, title);

    return div;
  }
  projectTitle(div, title) {
    var theTitle = document.createElement("h3");
    theTitle.classList.add("project-title");

    theTitle.textContent = title;

    div.append(theTitle);
  }
}

var ProjectManagement = (function () {
  // adding a project
  function add(containerName, project, id) {
    var container = document.querySelector(containerName);

    var div = document.createElement("div");
    var remove = document.createElement("button");
    div.classList.add("project", "noselect");
    remove.classList.add("noselect", "remove");

    eventListeners(project, div, remove, id);

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

  function reveal(button) {
    button.style.opacity = 1;
  }
  function hide(button) {
    button.style.opacity = 0;
  }
  function highlight(div) {
    div.style["background-color"] = "rgb(201, 201, 201)";
  }
  function highlightOff(div) {
    div.style["background"] = "none";
  }

  function eventListeners(project, div, remove, id) {
    // to have the remove button show up when hovered over only
    div.addEventListener("mouseover", () => {
      reveal(remove);
    });
    div.addEventListener("mouseout", () => {
      hide(remove);
    });

    // removing after clicking the remove button
    remove.addEventListener("click", () => {
      removeProject(id);
    });

    // making it stay highlighted
    div.addEventListener("click", () => {
      console.log(project.selected);
      if (project.selected === false) {
        highlight(div);
        project.selected = true;
      } else {
        highlightOff(div);
        project.selected = false;
      }
    });
  }

  return { add, remove };
})();

var TaskManagement = (function () {
  function add(containerName, task, id) {
    var container = document.querySelector(containerName);

    var div = document.createElement("div");
    var left = document.createElement("div");
    var right = document.createElement("div");
    var title = document.createElement("h4");
    var complete = document.createElement("button");
    var edit = document.createElement("button");
    var remove = document.createElement("button");

    remove.textContent = "+";
    edit.textContent = "e";
    complete.innerHTML = "&#10004;";

    div.classList.add("task", "noselect");
    remove.classList.add("remove", "noselect");
    edit.classList.add("edit", "noselect");
    complete.classList.add("complete", "noselect");
    title.classList.add("task-title");
    left.classList.add("task-half");
    right.classList.add("task-half");
    // add complete, edit, remove and title classes *********************

    eventListeners(div, complete, edit, remove, id);

    title.textContent = task.title;

    left.append(complete, title);
    right.append(edit, remove);
    div.append(left, right);
    container.append(div);

    div.id = "task" + String(id);

    return div;
  }

  function mouseover(button) {
    button.style.opacity = 1;
  }
  function mouseout(button) {
    button.style.opacity = 0;
  }

  function eventListeners(div, complete, edit, remove, id) {
    // to have the remove button show up when hovered over only
    div.addEventListener("mouseover", () => {
      mouseover(remove);
      mouseover(edit);
    });
    div.addEventListener("mouseout", () => {
      mouseout(remove);
      mouseout(edit);
    });

    remove.addEventListener("click", () => {
      // removeProject(id);
    });

    // complete and edit event listeners ***************
  }

  return { add };
})();

export { PageCreation, ProjectManagement, TaskManagement };
