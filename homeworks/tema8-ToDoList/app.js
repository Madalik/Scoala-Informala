
$(document).ready(function () {
    function onListLoaded(list) {
        list.forEach(({ taskName, taskDescription, startDate, dueDate, userStatus, user }) => {
            var row = `<tr>
            <td>${taskName}</td>
            <td>${taskDescription}</td>
            <td>${startDate}</td>
            <td>${dueDate}</td>
            <td>${userStatus}</td>
            <td>${user}</td>
            <td><button type="button" class="btn btn-secondary delete">Remove</button></td>
            </tr>`;
            $('#crew-list tbody').append(row);
        })
    }
    function onError(jqXhr, textStatus) {
        console.log('textStatus: ', textStatus);
    }
    $("#add-crew").on("click", function () {
        var taskName = $("#task-name").val();
        var taskDescription = $("#task-description").val();
        var startDate = $("#start-date").val();
        var dueDate = $("#due-date").val();
        var userStatus = $("#user-status").val();
        var user = $("#user").val();
        var row = `<tr>
        <td>${taskName}</td>
        <td>${taskDescription}</td>
        <td>${startDate}</td>
        <td>${dueDate}</td>
        <td>${userStatus}</td>
        <td>${user}</td>
        <td><button type="button" class="btn btn-secondary delete">Remove</button></td></tr>`;
        $('#crew-list tbody').append(row);
        resetPers();
    })
    $.ajax({
        method: 'GET',
        url: '/list.json',
        success: onListLoaded,
        error: onError
    });
})
// $.post({
//     url:'list.jason',
//     data:{}

// })
$(document).ready(function () {
    
})

$(document).on("click", ".delete", function () {
    $(this).closest("tr").remove();

})
function resetPers() {
    $("#taskName").val("");
    $("#taskDescription").val("");
    $("#startDate").val("");
    $("#dueDate").val("");
    $("#userStatus").val("");
    $("#user").val("");
}




