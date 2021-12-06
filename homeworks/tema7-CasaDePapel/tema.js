$(document).ready(function () {
    $("#add-crew").on("click", function () {
        var _id = $("#id").val();
        var _characterName = $("#character-name").val();
        var _actorName = $("#actor-name").val();
        var _picture = $("#image_input").val();
        var _tr = '<tr><td>' + _id + '</td><td>' + _characterName + '</td><td>' + _actorName + '</td><td>' + _picture + '</td><td>' + '<button type="button" id="delete" onclick="deletePers(this)" class="btn btn-secondary">Remove</button></td></tr>';
        $("#myTable").append(_tr);

        })
        $("#submit").on("click", function (event) {
            event.preventDefault();
            $("#crew-form").fadeOut();
        })

        resetPers();
    })
})
function deletePers() {
    $("#delete").parents("tr").remove();
}
function resetPers() {
    $("#id").val("");
    $("#character-name").val("");
    $("#actor-name").val("");
    $("#typeURL").val("");
}




