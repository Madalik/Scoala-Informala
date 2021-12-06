function Actor(id, characterName,actorName, pictureURL, yearOfBirth){
    this.id = id;
    this.characterName = characterName;
    this.actorName = actorName;
    this.pictureURL = pictureURL;
    this.yearOfBirth = yearOfBirth;
    this.getRow = function(){
      return `<tr>
      <td>${this.id}</td>
      <td>${this.characterName}</td>
      <td>${this.actorName}</td>
      <td><img src="${this.pictureURL}"></td>
      <td>${this.yearOfBirth}</td>
      <td><button>Remove</button></td></tr>`;
    }
}

// $(document).ready(function () {
//     $("button").on("click", function () {
//       $(this).closest("tr").remove();
//     });
//     $('#add-crew').on("click", function(){
//         // $("#crew-form").show();
//         // $("#crew-form").fadeIn();
//         // $("#crew-form").slideDown();
//         $("#crew-form").slideToggle();
//     });
//   });

$(document).ready(function () {
  /*function reqListener () {
    console.log(this);
    //console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://jsonplaceholder.typicode.com/todos1/");
  oReq.send();*/
  // function onActorsLoaded(actors) {
  //     actors.forEach( ({ id, characterName, actorName, pictureURL, yearOfBirth = 'Not provided' }) => {
  //         var row = `<tr>
  //             <td>${id}</td>
  //             <td>${characterName}</td>
  //             <td>${actorName}</td>
  //             <td><img src="${pictureURL}"></td>
  //             <td>${yearOfBirth}</td>
  //             <td><button>Remove</button></td></tr>`;
  //         $('#crew-list tbody').append(row);
  //     })
  // }
  
  function onActorsLoaded(actors){
    actors.forEach(({id, characterName, actorName,pictureURL, yearOfBirth}) =>{
      
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
});