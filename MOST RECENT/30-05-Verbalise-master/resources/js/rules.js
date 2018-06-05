// Show and hide rules
function showRules() {
  document.getElementById('closeRules').className = 'hidden';
  document.getElementById('mainTitle').className = 'hidden';
  document.getElementById('game').className = 'hidden';
  document.getElementById('modal').className = 'rulesBeginToAppear';
  document.getElementById('modal-container').className = 'rulesBeginToAppear';
  setTimeout(function(){
    document.getElementById('modal').className = 'rulesAppear';
    document.getElementById('modal-container').className = 'rulesAppear';
  }, 1);

  rulesContent.innerHTML = rulesNo1;
  nextArrow.className = 'rulesArrows';
  nextArrow.addEventListener('click', rulesContentChangeNo2);
}

function rulesContentChangeNo2() {
  document.getElementById('closeRules').className = 'hidden';
  nextArrow.className = 'rulesArrows';
  rulesContent.innerHTML = rulesNo2;
  nextArrow.removeEventListener('click', rulesContentChangeNo2);
  nextArrow.addEventListener('click', rulesContentChangeNo3);
}
function rulesContentChangeNo3() {
  document.getElementById('closeRules').className = 'hidden';
  nextArrow.className = 'rulesArrows';
  rulesContent.innerHTML = rulesNo3;
  nextArrow.removeEventListener('click', rulesContentChangeNo3);
  nextArrow.addEventListener('click', rulesContentChangeNo4)
}
function rulesContentChangeNo4() {
  nextArrow.className = 'hidden';
  rulesContent.innerHTML = rulesNo4;
  document.getElementById('closeRules').className = 'deleteBtn';
}

// Hide Rules
function hideRules() {
  document.getElementById('modal').className = 'hidden';
  document.getElementById('modal-container').className = 'initialModal';
  document.getElementById('game').className = '';
  document.getElementById('mainTitle').className = '';
  nextArrow.className = 'rulesArrows';
 // list.className = ' ';
}
