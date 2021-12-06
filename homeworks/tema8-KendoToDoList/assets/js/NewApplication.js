class NewApplication {
    constructor(name) {
        this.name = 'Task list';
        this.tableElement = $('#crew-list');
        this.tableBodyElement = $('#crew-list').find('tbody');
        this.taskList = [];
        this.addCrew = $('#add-crew');
        this.init();
    }

    init() {

        this.tableElement.kendoGrid({
            dataSource: {
                datatype: "json",
                transport: {
                    read: "/data/list.json"
                },
                schema: {
                    model: {
                        fields: {
                            taskName: { type: "string" },
                            taskDescription: { type: "string" },
                            startDate: { type: "date" },
                            dueDate: { type: "date" },
                            userStatus: { type: "string" },
                            user: { type: "string" }
                        }
                    }
                },
                serverFiltering: false,
                serverSorting: false
            },
            // sortable: true,
            resizable: true,
            reorderable: true,
            // pageable: true,
            scrollable: true,
            filterable: {
                extra: false,
                operators: {
                    string: {
                        // startswith: "Starts with",
                        eq: "Is equal to",
                        // neq: "Is not equal to"
                    }
                }
            },
            columns: [{
                field: "taskName",
                title: "Task Name",
                width: 150,
                filterable: true
            }, {
                field: "taskDescription",
                title: "Task  Description",
                width: 150,
                filterable: false
            }, {
                field: "startDate",
                title: "Start date",
                format: "{0: dd/MM/yyyy}",
                width: 150,
                filterable: false
            }, {
                field: "dueDate",
                title: "Due date",
                format: "{0: dd/MM/yyyy}",
                width: 150,
                filterable: false
            }, {
                field: "userStatus",
                title: "Status",
                width: 150,
                filterable: true
            }, {
                field: "user",
                title: "User",
                width: 150,
                filterable: false
            }]
        });

    }
}

