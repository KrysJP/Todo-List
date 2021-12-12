import { PageCreation, addProject } from "./dom-stuff.js";
import Project from "./projects.js";

var page = new PageCreation("#content");

page.create();

var temp = new Project("temporary", "blue");
addProject(".projects-container", temp);
