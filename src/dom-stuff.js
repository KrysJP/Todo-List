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
        this.content.append(
            this.heading(),
            this.middle(projectTitle),
            this.modal()
        );
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

    modal() {
        // dark background
        var bg = document.createElement("div");
        bg.classList.add("modal-bg");

        // modal itself
        var modal = document.createElement("div");
        modal.classList.add("edit-task-modal");

        // modal innards
        var title = document.createElement("h2");
        title.classList.add("modal-title");

        var date = document.createElement("input");
        date.type = "date";
        date.classList.add("modal-date");

        var description = document.createElement("textarea");
        description.classList.add("modal-description");
        description.placeholder = "description...";

        var save = document.createElement("div");
        save.classList.add("modal-save", "material-icons", "noselect");
        save.textContent = "edit";

        // closing modal via clicking bg or pressing escape
        bg.addEventListener("click", () => {
            bg.style.display = "none";
        });
        // clicking modal doesn't close modal
        modal.addEventListener("click", (event) => {
            event.stopPropagation();
        });
        title.addEventListener("click", () => {
            TaskManagement.editModalTitle();
        });

        // removing weird text in modal after adding EL
        modal.textContent = "";

        // putting everything together
        modal.append(title, date, description, save);
        bg.append(modal);

        return bg;
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
        projectTitleInProjectsTab.classList.add("project-tab-name");

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
        button.style.opacity = 0.5;
    }
    function hide(button) {
        button.style.opacity = 0;
    }

    function eventListeners(project, div, remove, id) {
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
        inputBox.setAttribute("required", "");
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
        newTitle.addEventListener("click", () => {
            editProjectTitle(project);
        });

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

    // this gives the project title the INITIAL event listener, because default project is main and main does not require the event listener
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
    function add(containerName, task) {
        var container = document.querySelector(containerName);

        var div = document.createElement("div");
        var left = document.createElement("div");
        var right = document.createElement("div");
        var title = document.createElement("h4");
        var complete = document.createElement("button");
        var remove = document.createElement("button");
        var date = document.createElement("p");

        remove.textContent = "+";
        complete.innerHTML = "&#10004;";
        date.textContent = task.date;

        // adding all classes
        addClasses(div, remove, complete, title, left, right, date);

        eventListeners(div, complete, remove, task);

        title.textContent = task.title;

        left.append(complete, title);
        right.append(date, remove);
        div.append(left, right);
        container.append(div);

        div.id = "task" + String(task.id);

        changeDateColor(task, date);

        return div;
    }

    // changing colour depending on date
    function changeDateColor(task, dateElement) {
        var currentDate = new Date();
        if (task.dateObject) {
            // if on the day
            if (currentDate.toDateString() === task.dateObject.toDateString()) {
                dateElement.style.color = "darkorange";
            }
            // if past
            else if (currentDate > task.dateObject) {
                dateElement.style.color = "red";
            }
            // if due
            else {
                dateElement.style.color = "var(--primary)";
            }
        }
    }

    function mouseover(button) {
        button.style.opacity = 0.5;
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

    function eventListeners(div, complete, remove, task) {
        // to have the remove button show up when hovered over only
        div.addEventListener("mouseover", () => {
            mouseover(remove);
            mouseover(edit);
        });
        div.addEventListener("mouseout", () => {
            mouseout(remove);
            mouseout(edit);
        });
        div.addEventListener("click", () => {
            openModal(task);
        });

        remove.addEventListener("click", (e) => {
            removeTask(task.id);
            e.stopPropagation();
        });

        // complete and edit event listeners ***
        complete.addEventListener("click", (e) => {
            // temporary until actual completion functionality is added
            removeTask(task.id);
            e.stopPropagation();
        });
    }

    function addClasses(div, remove, complete, title, left, right, date) {
        div.classList.add("task", "noselect");
        remove.classList.add("remove", "noselect");
        complete.classList.add("complete", "noselect");
        title.classList.add("task-title");
        left.classList.add("task-half");
        right.classList.add("task-half");
        date.classList.add("task-date");
    }

    function openModal(task) {
        // making it appear
        var modalBg = document.querySelector(".modal-bg");
        modalBg.style.display = "flex";
        replaceSaveButton(task);

        document.querySelector(".modal-title").textContent = task.title;
        document.querySelector(".modal-date").value = null;
        document.querySelector(".modal-description").value = task.description;
    }

    function editModalTitle() {
        // needed elements
        var modal = document.querySelector(".edit-task-modal");
        var modalTitle = document.querySelector(".modal-title");

        // saving title
        var value = modalTitle.textContent;
        // removing the modal title
        modal.removeChild(modalTitle);

        // creating the input box
        var inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.setAttribute("required", "");
        inputBox.value = value;
        inputBox.classList.add("modal-title-input");

        // enter key event listener
        inputBox.addEventListener("keypress", function (e) {
            if (e.key == "Enter") {
                setModalTitle(modal, inputBox);
            }
        });

        // replacing the title
        modal.insertBefore(inputBox, document.querySelector(".modal-date"));
        // so it is selected automatically
        inputBox.select();
    }
    function setModalTitle(modal, inputBox) {
        var value = inputBox.value;

        // removing inputBox
        modal.removeChild(inputBox);

        // inserting heading with new name
        var newTitle = document.createElement("h3");
        newTitle.textContent = value;
        newTitle.classList.add("modal-title");
        modal.insertBefore(newTitle, document.querySelector(".modal-date"));
        newTitle.addEventListener("click", () => {
            editModalTitle();
        });
    }
    // this gives the save button the event listener to actually save the changes to the title
    function replaceSaveButton(task) {
        var saveButton = document.querySelector(".modal-save");
        var newSaveButton = saveButton.cloneNode(true);
        newSaveButton.addEventListener("click", () => {
            setTaskDetails(task);
        });
        saveButton.parentNode.replaceChild(newSaveButton, saveButton);
    }

    function setTaskDetails(task) {
        if (!document.querySelector(".modal-title")) {
            setModalTitle(
                document.querySelector(".edit-task-modal"),
                document.querySelector(".modal-title-input")
            );
        }
        // saving to the object
        task.title = document.querySelector(".modal-title").textContent;
        task.storedDate = document.querySelector(".modal-date").value;
        task.description = document.querySelector(".modal-description").value;

        // changing the task in task list
        var taskListTask = document.querySelector("#task" + String(task.id));
        taskListTask.children[0].children[1].textContent = task.title;
        taskListTask.children[1].children[0].textContent = task.date;

        // closing the modal
        document.querySelector(".modal-bg").style.display = "none";

        // updating color of date
        changeDateColor(task, taskListTask.children[1].children[0]);
    }

    return { add, remove, load, editModalTitle };
})();

// removes all of an element's
function clearContainer(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}

export { PageCreation, ProjectManagement, TaskManagement, clearContainer };
