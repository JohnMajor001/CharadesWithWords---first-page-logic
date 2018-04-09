window.onload = function() {

// add Item button can add children
addItemBtn.addEventListener("click", addItem);

// getting team names as long as more than 2 are created
readyBtn.addEventListener("click", grabTeamNames);

function addItem() {
noOfTeams += 1;
noOfPlayers += 2;
var listItem = document.createElement("li");
listItem.innerHTML = `<input class="teamNames" value='Team ${noOfTeams}'></input>
                      <img class='deleteBtn' id='deleteBtn_${noOfTeams}' src='./resources/images/crossButton.jpg'/>
                      <div class='playerContainer'>
                      <input class='playerNames' value='Enter Player name 1'/>
                      <input class='playerNames' value='Enter Player name 2'/>
                      <button id='addPlayer_${noOfPlayers}'>Add player to Team</button>
                      </div>`;
document.getElementById('list').appendChild(listItem);
var buttonDelete = document.getElementById(`deleteBtn_${noOfTeams}`);
buttonDelete.addEventListener("click", deleteItem);
}

function deleteItem() {
  var item = this.parentNode;
  document.getElementById('list').removeChild(item);
  noOfTeams -= 1;
}

function grabTeamNames() {
  if(noOfTeams < 2) {
    alert("You have to have at least two teams");
    return;
  } else {
    var teamNamesObject = document.querySelectorAll('.teamNames');
    for(i=0; i < teamNamesObject.length; i++) {
      teamNamesArray.push(teamNamesObject[i].value);
    }
  }
}




}
