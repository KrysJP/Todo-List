class Task {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  setDescription(desc) {
    this.description = desc;
  }
  setDate(date) {
    this.date = date;
  }
}

export default Task;
