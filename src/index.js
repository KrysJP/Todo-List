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
var page = new PageCreation("#content");

// creating the default project
projects.push(new Project("Main", 0));
page.create(projects[0].name);
ProjectManagement.add(".projects-container", projects[0], 0);
switchProject(0);
// adding a project to the list
function addProject() {
    var id = 0;
    while (projects.some((project) => project.id === id)) {
        id++;
    }
    var name = prompt("Enter Project name");
    projects.push(new Project(name, id));
    // adding it to the DOM
    ProjectManagement.add(
        ".projects-container",
        projects[projects.length - 1],
        id
    );
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
}

function addTask() {
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

    var title = prompt("Enter Task name");

    // adding the task to the project
    projects[projectIndex].tasks.push(new Task(title, id));

    TaskManagement.add(
        ".tasks-container",
        projects[projectIndex].tasks[projects[projectIndex].tasks.length - 1],
        id
    );
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
}

export { addProject, removeProject, addTask, removeTask, switchProject };

function findProjectIndex(projects, id) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id === id) {
            return i;
        }
    }
}
