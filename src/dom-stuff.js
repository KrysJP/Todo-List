import css from "../styles/styles.css";
import {
    addProject,
    removeProject,
    addTask,
    removeTask,
    switchProject,
} from "./index.js";

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
        var bigDiv = document.createElement("div");
        var tasksDiv = document.createElement("div");

        bigDiv.classList.add("tasks-and-title-container");
        tasksDiv.classList.add("tasks-container");

        this.projectTitleDiv(bigDiv, title);

        bigDiv.append(tasksDiv);

        return bigDiv;
    }
    projectTitleDiv(div, title) {
        var titleDiv = document.createElement("div");
        var theTitle = document.createElement("h3");
        var addButton = document.createElement("button");
        theTitle.classList.add("project-title");
        addButton.classList.add("tasks-add");
        theTitle.textContent = title;
        addButton.textContent = "+";
        titleDiv.classList.add("project-title-div");

        addButton.addEventListener("click", addTask);

        titleDiv.append(theTitle, addButton);

        div.append(titleDiv);
    }
}

var ProjectManagement = (function () {
    // adding a project
    function add(containerName, project, id) {
        var container = document.querySelector(containerName);

        var div = document.createElement("div");
        var projectTitleInProjectsTab = document.createElement("h4");
        var remove = document.createElement("button");
        div.classList.add("project", "noselect");
        remove.classList.add("noselect", "remove");

        // individual project title functionality
        var projectTitle = document.querySelector(".project-title");

        eventListeners(project, div, remove, id, projectTitle);

        projectTitleInProjectsTab.textContent = project.name;
        remove.textContent = "+";

        div.append(projectTitleInProjectsTab);
        // so that main cannot be removed
        if (id !== 0) {
            div.append(remove);
        }

        container.append(div);

        // settings the div's id
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

    function eventListeners(project, div, remove, id, projectTitle) {
        // to have the remove button show up when hovered over only
        div.addEventListener("mouseover", () => {
            reveal(remove);
            project.highlight();
        });
        div.addEventListener("mouseout", () => {
            hide(remove);
            if (project.selected === false) {
                project.unhighlight();
            }
        });

        // removing after clicking the remove button
        remove.addEventListener("click", (event) => {
            removeProject(id);
            event.stopPropagation();
        });

        // making it stay highlighted
        div.addEventListener("click", () => {
            switchProject(id);
        });
    }

    function editProjectTitle(project) {
        if (project.id === 0) {
            return;
        }
        // needed elements
        var projectTitleDiv = document.querySelector(".project-title-div");
        var projectTitle = document.querySelector(".project-title");

        // removing the project title
        projectTitleDiv.removeChild(projectTitle);

        // creating the input box
        var inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.required = "true";
        inputBox.value = project.name;
        inputBox.classList.add("project-title-input");

        // enter key event listener
        inputBox.addEventListener("keypress", function (e) {
            if (e.key == "Enter") {
                setProjectTitle(project, projectTitleDiv, inputBox);
            }
        });

        // replacing the title
        projectTitleDiv.insertBefore(
            inputBox,
            document.querySelector(".tasks-add")
        );
        // so it is selected automatically
        inputBox.select();
    }

    function setProjectTitle(project, projectTitleDiv, inputBox) {
        var value = inputBox.value;
        // setting new project name
        project.name = value;

        // removing inputBox
        projectTitleDiv.removeChild(inputBox);

        // inserting heading with new name
        var newTitle = document.createElement("h3");
        newTitle.textContent = value;
        newTitle.classList.add("project-title");
        projectTitleDiv.insertBefore(
            newTitle,
            document.querySelector(".tasks-add")
        );
        newTitle.addEventListener("click", editProjectTitle);

        // editing project in project tab
        var domProject = document.querySelector(
            "#project" + String(project.id)
        );
        domProject.children[0].textContent = value;
    }

    function removeProjectTitleEventListener() {
        var element = document.querySelector(".project-title");
        // clone and replace
        var newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
    }

    function replaceProjectTitle(project) {
        var projectTitle = document.querySelector(".project-title");
        var newProjectTitle = projectTitle.cloneNode(true);
        newProjectTitle.addEventListener("click", () => {
            editProjectTitle(project);
        });
        projectTitle.parentNode.replaceChild(newProjectTitle, projectTitle);
    }

    return {
        add,
        remove,
        removeProjectTitleEventListener,
        replaceProjectTitle,
    };
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

        // adding all classes
        addClasses(div, remove, complete, edit, title, left, right);

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

    function remove(id) {
        var task = document.querySelector("#task" + String(id));
        task.parentNode.removeChild(task);
    }

    function load(project) {
        var projectTitle = document.querySelector(".project-title");

        projectTitle.textContent = project.name;
        project.tasks.forEach((task) => {
            add(".tasks-container", task, task.id);
        });
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
            removeTask(id);
        });

        // complete and edit event listeners ***
        complete.addEventListener("click", () => {
            // temporary until actual completion functionality is added
            removeTask(id);
        });
    }

    function addClasses(div, remove, complete, edit, title, left, right) {
        div.classList.add("task", "noselect");
        remove.classList.add("remove", "noselect");
        edit.classList.add("edit", "noselect");
        complete.classList.add("complete", "noselect");
        title.classList.add("task-title");
        left.classList.add("task-half");
        right.classList.add("task-half");
    }

    return { add, remove, load };
})();

// removes all of an element's
function clearContainer(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}

export { PageCreation, ProjectManagement, TaskManagement, clearContainer };
