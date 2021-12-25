class Task {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.description = "";
        this.storedDate = "";
    }

    get date() {
        if (this.storedDate === "") {
            return "no date";
        }
        return this.storedDate;
    }
}

export default Task;
