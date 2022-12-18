const ui = require("ui-lib-nobl/scripts/library");
var dialog = null;
var button = null;
var team = Vars.state.rules.defaultTeam;
var rainbow = false;

// let the ra// Delay between team changes, in milliseconds
const DELAY = 500;

function changeTeam() {
  // Set the player's team to the next team in the list
  team++;
  Vars.player.team(Vars.state.teams.get(team));

  // If the team number is out of range, reset it to the first team
  if (team == Vars.state.teams.length - 1) {
    team = 1;
  }

  // If the rainbow mode is still active, schedule another team change
  if (rainbow) {
    setTimeout(changeTeam, DELAY);
  }
}


// no more rainbow
function stopChangeTeam(){
    rainbow = false;
}

// executed once ui button is pressed
ui.onLoad(() => {
    dialog = new BaseDialog("Change team");
    const table = dialog.cont;
    var placeButtons = table.table().bottom().get();
    placeButtons.left().button("initiate rainbow", Icon.refresh, changeTeam);
    placeButtons.right().button("cancel rainbow", Icon.cancel, stopChangeTeam);
    dialog.addCloseButton();
});

// ui button itself
ui.addButton("rainbow", "brush", () => {
    dialog.show();l
});
