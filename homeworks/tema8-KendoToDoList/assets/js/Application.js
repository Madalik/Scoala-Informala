const getTasks = new Promise((resolve, reject) => {
    $.ajax({
        method: 'GET',
        url: '/data/list.json',
        success: function (list) {
            resolve(list);
        },
        error: function (textStatus, errorThrown) {
            reject(textStatus, errorThrown)
        }
    });
})

class Application {
    constructor(...listOfTasks) {
        const { taskName, taskDescription, startDate, dueDate, userStatus, user } = listOfTasks;
        this.name = 'Task list';
        this.tableElement = $('#crew-list');
        this.tableBodyElement = $('#crew-list').find('tbody');
        this.taskList = [];
        this.addCrew = $('#add-crew');
        this.init();
    }
    init() {
        this._addEventListeners();
        this.loadTasks();

    }

    _onRemoveButton() {
        $(this).closest("tr").remove();
    }

    _resetTask() {
        this.taskName = '';
        this.taskDescription = '';
        this.startDate = '';
        this.dueDate = '';
        this.userStatus = '';
        this.user = '';
    }

    _addEventListeners() {
        this.tableElement.on('click', '.delete', this._onRemoveButton);
        this.tableBodyElement.on('click', '#submit', this._resetTask);
    }
    async loadTasks() {
        try {
            const list = await getTasks;
            this.onListLoaded(list);
        } catch (error) {
            console.error(error)

        }
    }

    render() {
        this.destroyTable();
        this.taskList.forEach(list => {
            let row = list.getRow();
            this.tableBodyElement.append(row);
        });
    }

    onListLoaded(list) {

        list.forEach(({ taskName, taskDescription, startDate, dueDate, userStatus, user }) => {
            let task = new Tasks(taskName, taskDescription, startDate, dueDate, userStatus, user);
            this.taskList.push(task);
        });
        this.render();
    }

    // onError(jqXhr, textStatus) {
    //     console.log('textStatus: ', textStatus);
    // };

    destroyTable() {
        this.tableBodyElement.empty();

    };
}