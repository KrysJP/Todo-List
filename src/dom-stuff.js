import css from "../styles/styles.css";

class PageCreation {
  constructor(content) {
    this.contentName = content;
    this.content = document.querySelector(content);
  }

  create() {
    this.heading();
  }

  heading() {
    var headingDiv = document.createElement("div");
    var headingTitle = document.createElement("h1");

    headingDiv.classList.add("heading-div");
    headingTitle.classList.add("heading-title");

    headingTitle.textContent = "Todo List";

    headingDiv.appendChild(headingTitle);
    this.content.append(headingDiv);
  }
}

export { PageCreation };
