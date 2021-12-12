class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  editName(text) {
    this.name = text;
  }
  editColor(color) {
    this.color = color;
  }
}

export default Project;
