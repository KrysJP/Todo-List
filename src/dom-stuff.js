import css from "../styles/styles.css";

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
    // javascript to add

    var div = document.createElement("div");
    var heading = document.createElement("h2");

    heading.textContent = "Projects";

    div.classList.add("projects-container");
    heading.classList.add("projects-heading");

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

export { PageCreation };
