
// add Item button can add children
addItemBtn.addEventListener("click", addItem);
// getting team names as long as more than 2 are created
readyBtn.addEventListener("click", showSettings);
// add ruleBtn event listener
rulesBtn.addEventListener('click', showRules);
// close rules btn event addEventListener
document.getElementById('closeRules').addEventListener('click', hideRules);
// Add Teams and players
function addItem() {
  noOfTeams += 1;
  noOfPlayers += 2;
  var randNum = ((Math.random() * 9999999999) * (Math.random() * 99999999999));
  var randNumId = randNum + noOfTeams;
  var listItem = document.createElement("li");
  listItem.innerHTML = `<img class='deleteBtn teamBtn' id='deleteBtn_${randNumId}' src='./resources/images/x_delete_button.png'/>
                        <input maxlength="20" class="teamNames" placeholder='Team ${noOfTeams}'></input>
                        <div class='playerContainer' id='playerContainer_${randNumId}'>
                        <input maxlength="20" class='playerNames' placeholder='Player 1'/>
                        <input maxlength="20" class='playerNames' placeholder='Player 2'/>
                        </div>
                        <button class='addPlayerBtn btn' id='addPlayer_${randNumId}'>Add third player</button>`;
  document.getElementById('list').appendChild(listItem);
  var buttonDelete = document.getElementById(`deleteBtn_${randNumId}`);
  buttonDelete.addEventListener("click", deleteItem);
  document.getElementById(`addPlayer_${randNumId}`).addEventListener('click', addPlayer);
  nextArrow.addEventListener('click', rulesContentChangeNo2);
}
function addPlayer() {
  noOfPlayers += 1;
  var id = this.id;
  var nOsInId = id.substring(10, id.length);
  var playerContainerId = 'playerContainer_' + nOsInId;
  var player3Id = 'player3Id' + nOsInId;
  var z = document.createElement('li');
  var text = `<input maxlength="20" class='playerNames' id='${player3Id}' placeholder='Player 3'/>`;
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
function hideSettings() {
  document.getElementById('settings-modal').className = 'hidden';
  document.getElementById('settings-container').className = 'hidden';
}
// Takes message, let's it appear and then it disappears
function inputErrorMessage(message, containerId, messageBoxId) {
  var sign = document.getElementById(containerId);
  var messageBox = document.getElementById(messageBoxId);
  messageBox.innerHTML = message;
  sign.className = '';
  setTimeout(function(){
    sign.className = 'hidden';
  }, 2200);
}
function showSettings() {
  // Check if it's ok to make everything appear
    // 1. Honey Pot
  if(document.getElementById('computer').value != '') {
    alert('something\'s not quite right');
    return;
  }
    // 2. Check correct number of teams
    if(noOfTeams < 2) {
      var message = "You need at least two teams";
      inputErrorMessage(message, 'errorMessageContainer-two-teams', 'errorMessages-two-teams'); // CHANGE THIS TO SOMETHING GOOD - DOES THE MESSAGE APPEAR AND DISSAPPEAR correctly?
      return;
    }
    // 3. Check Teams have a value entered
    var teamNames = document.querySelectorAll('.teamNames');
    for(i = 0; i < teamNames.length; i++) {
      if(teamNames[i].value.length < 2) {
        var message = 'Enter a team name in all boxes provided'; // CHANGE THIS TO SOMETHING GOOD
        inputErrorMessage(message, 'errorMessageContainer-team-names', 'errorMessages-team-names');
        return;
      }
    }
    // 4. Check playerNames all have a value
    var playerNames = document.querySelectorAll('.playerNames');
    for(i = 0; i < playerNames.length; i++) {
      if(playerNames[i].value.length < 2) {
        var message = 'Enter a player name in all boxes provided'; // CHANGE THIS TO SOMETHING GOOD
        inputErrorMessage(message, 'errorMessageContainer-player-names', 'errorMessages-player-names');
        return;
      }
    }
  // Make everything appear
  document.getElementById('game').className = 'hidden';
  document.getElementById('settings-modal').className = 'initialSettings';
  document.getElementById('settings-container').className = 'initialSettings';
 // slight delay to create fade in
setTimeout(function(){
  document.getElementById('settings-modal').className = 'settings-modal';
  document.getElementById('settings-container').className = 'modal-container';
}, 1);
    let zero = 0;
    let one = 1;
    let two = 2;
    let three = 3;
    let four = 4;
    let five = 5;

    let twenty = 20;
    let forty = 40;
    let sixty = 60;
    let eighty = 80;
    let hundred = 100;
    let twohundred = 200;

    let easy = 'Easy';
    let regular = 'Regular';

    let thirty = 30;
    let fortyfive = 45;

    let spicy = 'Spicy';
    let standard = 'Standard'
    //                                            CHANGE THIS BACK WHEN DONE TESTING!! Change timer here and in variables
  let settingsHTML = `<h1>Settings</h1>
                      <div class='settings-row'>
                        <span>Points needed to win</span>
                        <select id='pointsToWinSelect'>
                        <option value='${sixty}'>${sixty}</option>
                          <option value='${twenty}'>${twenty}</option>
                          <option value='${thirty}'>${thirty}</option>
                          <option value='${forty}'>${forty}</option>
                          <option value='${eighty}'>${eighty}</option>
                          <option value='${hundred}'>${hundred}</option>
                          <option value='${twohundred}'>${twohundred}</option>
                        </select>
                      </div>
                      <div class='settings-row'>
                        <span>Timer for each Round(seconds)</span>
                        <select id='timerSelect'>
                          <option value='${thirty}'>${thirty}</option>
                          <option value='${fortyfive}'>${fortyfive}</option>
                          <option value='${sixty}'>${sixty}</option>
                        </select>
                      </div>
                      <div class='settings-row'>
                        <span>Passes per Round</span>
                        <select id='passesSelect'>
                          <option value='${three}'>${three}</option>
                          <option value='${zero}'>${zero}</option>
                          <option value='${one}'>${one}</option>
                          <option value='${two}'>${two}</option>
                          <option value='${four}'>${four}</option>
                          <option value='${five}'>${five}</option>
                        </select>
                      </div>
                      <div class='settings-row'>
                        <span>Drinking Rules?</span>
                        <select id='drinkingSelect'>
                          <option value='Disabled'>Not Today</option>
                          <option value='Enabled'>Yes, baby!</option>
                        </select>
                      </div>
                      <div class='settings-row'>
                        <span>Difficulty</span>
                        <select id='difficultySetting'>
                          <option value='${regular}'>Regular</option>
                          <option value='${easy}'>Kids</option>
                        </select>
                      </div>
                      <div class='settings-row'>
                        <span>Choose your theme</span>
                        <select id='themes'>
                          <option value='${zero}'>Standard</option>
                          <option value='${one}'>Spicy</option>
                        </select>
                      </div>`;
                      /**/
                      // INSERT SOMETHING SO THAT PEOPLE KNOW THAT THEY ARE DRINKING AT THEIR OWN RISK/SHOULD DRINK RESPONSIBLY ETC
// Change relevant button functions
  document.getElementById('settingsContent').innerHTML = settingsHTML;
  document.getElementById('closeSettings').addEventListener('click', hideSettings);
  document.getElementById('saveSettings').addEventListener('click', saveSettings);
}
function saveSettings() {
  // Gather Team and Player Names in an array
  var teamNames = document.querySelectorAll('.teamNames');
  var playerNames = document.querySelectorAll('.playerNames');
  for(i = 0; i < teamNames.length; i++) {
    teamNamesArray.push(teamNames[i].value);
  }
  for(i = 0; i < playerNames.length; i++) {
    playerNamesArray.push(playerNames[i].value);
  }
  // grab values
    let pointsToWinSelect = document.getElementById('pointsToWinSelect').value;
    let timerSelect = document.getElementById('timerSelect').value;
    let passesSelect = document.getElementById('passesSelect').value;
    let drinkingSelect = document.getElementById('drinkingSelect').value;
    if(document.getElementById('difficultySetting').value == 'Easy') {
      ifEasy = true;
    } else {
      ifEasy = false;
    }
    let themeSelected = document.getElementById('themes').value;
        // edit global variables
        timer = timerSelect;
        toWin = pointsToWinSelect;
        maximumPasses = passesSelect;
        // Check if drinking rules should be enabled
        if(drinkingSelect == 'Enabled') {
          drinkRules = true;
        } else {
          drinkRules = false;
        }
        // create team Objects
            for(i=0; i < noOfTeams; i++) {
              var numberOfPlayers = list.children[i].querySelector('div').children.length;
              var specificTeamPlayerNames = [];
              for(var k=numberOfPlayers - 1; k >= 0; k--) {
                specificTeamPlayerNames.push(playerNamesArray[k]);
                playerNamesArray.splice(k, 1);
              }
                teamObjectsArray[i] = {
                  name: teamNamesArray[i],
                  players: specificTeamPlayerNames,
                  score: 0,
                  roundsPlayed: 0,
                  passesUsed: 0,
                  position: 1,
                  whichPlayersTurn: 0,
                };
              }
              // Find out which categories are to be used
              categories = allThemes[themeSelected];
              // Add and Fill Random Category
              for(i=0; i<categories.length; i++) {
                for(var j = 0; j<categories[i].array.length; j++) {
                  randomCategory.array.push(categories[i].array[j]);
                }
                for(var k = 0; k<categories[i].easyArray.length; k++) {
                  randomCategory.easyArray.push(categories[i].easyArray[k]);
                }
              }
              categories.push(randomCategory);
              // Push each option in the array of categories into their respective backups
        for(let poop = 0; poop < categories.length; poop++) {
          for(let yo = 0; yo < categories[poop].array.length; yo++) {
            categories[poop].backUpArray.push(categories[poop].array[yo]);
          }
        }
        for(let poop = 0; poop < categories.length; poop++) {
          for(let yo = 0; yo < categories[poop].easyArray.length; yo++) {
            categories[poop].easyBackUpArray.push(categories[poop].easyArray[yo]);
          }
        }
        function startDaGame() {
          document.getElementById('game').className = '';
          // Ensure first team that starts is random
        let randomStart = Math.floor(Math.random() * noOfTeams);
        whichTeamPlays += randomStart;



        roundPrep(teamObjectsArray[whichTeamPlays%teamObjectsArray.length]);
          }
          hideSettings();
          // Get rid of what's left on the screen and no longer needed event listeners
          clearStuff();
          addItemBtn.className = 'hidden';
          readyBtn.removeEventListener("click", showSettings);
          startDaGame();
}
