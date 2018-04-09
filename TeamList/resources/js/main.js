window.onload = function() {

addItemBtn.addEventListener("click", addItem);
readyBtn.addEventListener("click", begin);

function addItem() {
noOfTeams += 1;
var listItem = document.createElement("li");
listItem.innerHTML = `<input class="teamNames" value='Item ${noOfTeams}'></input>
                      <img class='deleteBtn' id='deleteBtn_${noOfTeams}' src='./resources/images/crossButton.jpg'/>`;
document.getElementById('list').appendChild(listItem);
var buttonDelete = document.getElementById(`deleteBtn_${noOfTeams}`);
buttonDelete.addEventListener("click", deleteItem);
}

function deleteItem() {
  var item = this.parentNode;
  document.getElementById('list').removeChild(item);
  noOfTeams -= 1;
}

function begin() {
  if(noOfTeams < 2) {
    alert("You have to have at least two teams");
  } else {
    var teamNamesObject = document.querySelectorAll('.teamNames');
    for(i=0; i < teamNamesObject.length; i++) {
      teamNamesArray.push(teamNamesObject[i].value);
    }
  }
}




}
