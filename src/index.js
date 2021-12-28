import {
    PageCreation,
    ProjectManagement,
    TaskManagement,
    clearContainer,
} from "./dom-stuff.js";
import Project from "./projects.js";
import Task from "./tasks.js";

window.currentProjectId = 0;
var projects = [];

// constants
var taskTitleLength = 11;
var projectTitleWordLength = 10;

var page = new PageCreation("#content");
page.create();

// testing if storage is populated
if (!localStorage.getItem("projects")) {
    // creating the default project
    projects.push(new Project("General", 0));
    populateStorage(window.currentProjectId, projects);
} else {
    projects = setStyles();
}

// adding the methods back
// projects
projects.forEach((project) => {
    project.unhighlight = function () {
        var domProject = document.querySelector("#project" + String(this.id));
        domProject.style["background"] = "rgb(238, 238, 238)";
    };
    project.highlight = function () {
        var domProject = document.querySelector("#project" + String(this.id));
        domProject.style["background"] = "rgb(201, 201, 201)";
    };
});

// tasks
projects.forEach((project) => {
    project.tasks.forEach((task) => {
        Object.defineProperty(task, "date", {
            get: function () {
                if (this.storedDate === "") {
                    return "no date";
                }
                var dateObject = new Date(this.storedDate);
                return dateObject.toLocaleDateString();
            },
        });

        Object.defineProperty(task, "dateObject", {
            get: function () {
                if (this.storedDate === "") {
                    return false;
                }
                var dateObject = new Date(this.storedDate);
                return dateObject;
            },
        });
    });
});

// loading projects
projects.forEach((project) => {
    ProjectManagement.add(".projects-container", project, project.id);
});

switchProject(window.currentProjectId);

// localStorage stuff
function populateStorage() {
    localStorage.setItem(
        "currentProjectId",
        JSON.stringify(window.currentProjectId)
    );
    localStorage.setItem("projects", JSON.stringify(projects));
}

function setStyles() {
    var currentProjectIdData = localStorage.getItem("currentProjectId");
    window.currentProjectId = JSON.parse(currentProjectIdData);
    var projectsData = localStorage.getItem("projects");
    projects = JSON.parse(projectsData);
    return projects;
}

// adding a project to the list
function addProject() {
    var name = prompt("Enter Project name");
    if (name === "" || name === null) {
        return;
    }
    var fine = true;
    var separatedName = name.match(/[\w]+/g);
    separatedName.every((word) => {
        if (word.length > projectTitleWordLength) {
            fine = false;
            return false;
        }
    });
    if (!fine) {
        alert(
            `Max word length for project names is ${projectTitleWordLength} chararacters`
        );
        return;
    }

    var id = 0;
    while (projects.some((project) => project.id === id)) {
        id++;
    }

    projects.push(new Project(name, id));
    // adding it to the DOM
    ProjectManagement.add(
        ".projects-container",
        projects[projects.length - 1],
        id
    );

    populateStorage();
}

// removing a project from the DOM and projects list
function removeProject(id) {
    var index = findProjectIndex(projects, id);

    // checking if it was selected
    var isSelected = projects[index].selected;

    // removing from the DOM
    ProjectManagement.remove(id);

    // removing from projects list
    projects.splice(index, 1);

    // switching to the project after removal if it was selected
    if (isSelected) {
        switchProject(projects[index - 1].id);
    }
    populateStorage();
}

function switchProject(id) {
    // changing the current project
    window.currentProjectId = id;

    var index = findProjectIndex(projects, id);

    // replacing the event listener on the project title
    ProjectManagement.replaceProjectTitle(projects[index]);

    // highlighting current task and unhighlighting the rest
    projects[index].highlight();
    projects[index].selected = true;
    projects.forEach((project) => {
        if (project.id !== id) {
            project.unhighlight();
            project.selected = false;
        }
    });

    // clearing all the tasks
    var tasksContainer = document.querySelector(".tasks-container");
    clearContainer(tasksContainer);

    // loading all project's tasks
    TaskManagement.load(projects[index]);

    // removing event listener on title if main
    if (id === 0) {
        ProjectManagement.removeProjectTitleEventListener();
    }
    populateStorage();
}

function addTask() {
    var title = prompt("Enter Task Name");
    if (title === "" || title === null) {
        return;
    }
    var fine = true;
    var separatedTitle = title.match(/[\w]+/g);
    separatedTitle.every((word) => {
        if (word.length > taskTitleLength) {
            fine = false;
            return false;
        }
    });
    if (!fine) {
        alert(
            `Max word length for task titles is ${taskTitleLength} chararacters`
        );
        return;
    }

    var projectIndex = findProjectIndex(projects, currentProjectId);
    var id = 0;
    // keep incrementing id until no tasks share the id
    // therefore id will always be unique to the projects
    while (
        projects.some((project) => {
            return project.tasks.some((task) => {
                return task.id == id;
            });
        })
    ) {
        id++;
    }

    // adding the task to the project
    projects[projectIndex].tasks.push(new Task(title, id));

    TaskManagement.add(
        ".tasks-container",
        projects[projectIndex].tasks[projects[projectIndex].tasks.length - 1]
    );

    // save
    populateStorage();
}
function removeTask(id) {
    TaskManagement.remove(id);
    projects.forEach((project) => {
        project.tasks.forEach((task) => {
            if (task.id == id) {
                project.tasks = project.tasks.filter(
                    (filterTask) => task !== filterTask
                );
            }
        });
    });
    populateStorage();
}

export {
    addProject,
    removeProject,
    addTask,
    removeTask,
    switchProject,
    populateStorage,
    taskTitleLength,
    projectTitleWordLength,
};

function findProjectIndex(projects, id) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id === id) {
            return i;
        }
    }
}
