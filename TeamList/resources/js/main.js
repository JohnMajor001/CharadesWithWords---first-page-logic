window.onload = function() {

// add Item button can add children
addItemBtn.addEventListener("click", addItem);

// getting team names as long as more than 2 are created
readyBtn.addEventListener("click", grabTeamNames);

function addItem() {
noOfTeams += 1;
noOfPlayers += 2;
var randNum = ((Math.random() * 999999999999999) * (Math.random() * 999999999999999));
var randNumId = randNum + noOfTeams;
var listItem = document.createElement("li");
listItem.innerHTML = `<input class="teamNames" value='Team ${noOfTeams}'></input>
                      <img class='deleteBtn' id='deleteBtn_${randNumId}' src='./resources/images/crossButton.jpg'/>
                      <div class='playerContainer' id='playerContainer_${randNumId}'>
                      <input class='playerNames' value='Enter Player name 1'/>
                      <input class='playerNames' value='Enter Player name 2'/>
                      </div>
                      <button class='addPlayerBtn' id='addPlayer_${randNumId}'>Add third player to Team</button>`;
document.getElementById('list').appendChild(listItem);
var buttonDelete = document.getElementById(`deleteBtn_${randNumId}`);
buttonDelete.addEventListener("click", deleteItem);
document.getElementById(`addPlayer_${randNumId}`).addEventListener('click', addPlayer);

}

function addPlayer() {
  noOfPlayers += 1;
  var id = this.id;
  var nOsInId = id.substring(10, id.length);
  var playerContainerId = 'playerContainer_' + nOsInId;
  var player3Id = 'player3Id' + nOsInId;
  var z = document.createElement('li');
  var text = `<input class='playerNames' id='${player3Id}' value='Enter Player name 3'/>`;
  z.innerHTML = text;
  var playerContainer = document.getElementById(`${playerContainerId}`);
  playerContainer.appendChild(z);
  this.removeEventListener("click", addPlayer);
  this.innerHTML = 'Delete Third Player';
  this.addEventListener('click', deleteThirdPlayer);
}

function deleteThirdPlayer() {
  noOfPlayers -=1;

  var identity = this.id;
  var identityNos = identity.substring(10, this.id.length);
  var player3Identity = 'player3Id' + identityNos;
  var player3Box = document.getElementById(`${player3Identity}`);
  var playerContainerHere = 'playerContainer_' + identityNos;
  document.getElementById(`${playerContainerHere}`).removeChild(player3Box.parentNode);
  this.removeEventListener('click', deleteThirdPlayer);
  this.addEventListener('click', addPlayer);
  this.innerHTML = 'Add Third Player';
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
