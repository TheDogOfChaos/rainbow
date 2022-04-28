const ui = require("ui-lib/library");
var dialog = null;
var button = null;
var team = Vars.state.rules.defaultTeam;
var rainbow = false;

// let the rainbow begin
function changeTeam(){
    rainbow = true;
    while(rainbow = true){
        team++;
        Vars.player.team(team);
        if(team == 255){
             team = 1;
        }
    }
}

// no more rainbow
function stopChangeTeam(){
    rainbow = false;
}

// executed once ui button is pressed
ui.onLoad(() => {
    var placeButtons = table.table().bottom().get();
    placeButtons.left().button("initiate rainbow", Icon.refresh, changeTeam);
    placeButtons.right().button("cancel rainbow", Icon.cancel, stopChangeTeam);
    dialog.addCloseButton();
});

// ui button itself
ui.addButton("rainbow", "brush", () => {
    dialog.show();
});
