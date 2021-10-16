//call elenmts by query selector
let song = document.querySelector("#songTextInput");
let btn = document.querySelector("#addButton");
let playList = document.getElementById("playlist");

//add event listener
btn.addEventListener("click", addSong);

//============== q7 part a =========================================================================

//create fuction to create li for every new song and append it to the parent
function addSong() {
    //take input value 
  let songValue = song.value;
  //create li to display the new song in it
  let songElement = document.createElement("li");
  //create text node 
  let textInput = document.createTextNode(songValue);
//append elemnts to parents
  songElement.appendChild(textInput);
  playList.appendChild(songElement);

  //==========q7 part b ==============================================================================

  //create delete btn
  let delBtn = document.createElement("button");
  //append it to the parent
  songElement.appendChild(delBtn);
  //write in it
  delBtn.innerHTML = "delete";
  //add margin
  delBtn.style.marginLeft = "20px";
  //create evebtlisener
  delBtn.addEventListener("click", deleteFun);

  //create fuction to delete the added song - nested function
  function deleteFun() {
    songElement.style.display = "none";
  }
}
