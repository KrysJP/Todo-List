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
        var dateObject = new Date(this.storedDate);
        return dateObject.toLocaleDateString();
    }

    get dateObject() {
        if (this.storedDate === "") {
            return false;
        }
        var dateObject = new Date(this.storedDate);
        return dateObject;
    }
}

export default Task;
