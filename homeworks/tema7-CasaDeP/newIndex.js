$(document).ready(function () {
    function onActorsLoaded(actors) {
        actors.forEach(({ id, characterName, actorName, pictureURL, yearOfBirth = 'Not provided' }) => {
            var row = `<tr>
                <td>${id}</td>
                <td>${characterName}</td>
                <td>${actorName}</td>
                <td><img src="${pictureURL}"></td>
                <td>${yearOfBirth}</td>
                <td><button id="delete">Remove</button></td></tr>`;
            $('#crew-list tbody').append(row);
            $('#crew-list tbody').on('click', '#delete', function(){
                $(this).closest('tr').remove();
            })  
        })
        
        }
        function onError(jqXhr, textStatus) {
            console.log('textStatus: ', textStatus);
        }
        $.ajax({
            method: 'GET',
            url: '/actors.json',
            success: onActorsLoaded,
            error: onError
        });
        // $("#save").on("click", function () {
        //     var people=[];
        //     var fs = require('fs')
        //     var id = $("#id").val();
        //     var characterName = $("#character-name").val();
        //     var actorName = $("#actor-name").val();
        //     var pictureURL = $("#pictureURL").val();
        //    var pers ={id,characterName, actorName, pictureURL};
        //    people.push(pers);
        //    var jsonData = JSON.stringify(people)  
           
        //    fs.writeFile('actors.json', jsonData)
        // })
          
    }

    
);
$(document).ready(function () {
    $("#add-crew").on("click", function () {
        var id = $("#id").val();
        var characterName = $("#character-name").val();
        var actorName = $("#actor-name").val();
        var pictureURL = $("#image_input").val();
        var yearOfBirth =$("#yearOfBirth").val();
        var tr =`<tr>
        <td>${id}</td>
        <td>${characterName}</td>
        <td>${actorName}</td>
        <td><img src="${pictureURL}"></td>
        <td>${yearOfBirth}</td>
        <td><button type="button" id="delete" onclick="deletePers(this)" class="btn btn-secondary">Remove</button></td>
        </tr>`;
        $("#myTable").append(tr);

        })
        resetPers();

        $("#submit").on("click", function (event) {
            event.preventDefault();
            $("#crew-form").fadeOut();
        }) 
    })

function deletePers() {
    $(this).closest("tr").remove();
}
function resetPers() {
    $("#id").val("");
    $("#characterName").val("");
    $("#actorName").val("");
    $("#pictureURL").val("");
    $("#yearOfBirth").val("")
}



