class Tasks {
    constructor(taskName, taskDescription, startDate, dueDate, userStatus, user) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.userStatus = userStatus;
        this.user = user;
    }
    getRow() {
        return `<tr>
        <td>${this.taskName}</td>
        <td>${this.taskDescription}</td>
        <td>${this.startDate}</td>
        <td>${this.dueDate}</td>
        <td>${this.userStatus}</td>
        <td>${this.user}</td>
        <td><button type="button" class="btn btn-secondary delete">Remove</button></td>
        </tr>`;
    }

   
   
}




