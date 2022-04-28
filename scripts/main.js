const ui = require("ui-lib/library");
var dialog = null;
var button = null;
var team = Vars.state.rules.defaultTeam;
var curTeam = Vars.state.rules.defaultTeam;
var rainbow = false

// clientside change, purely visual unless playing in singleplayer
function teamLocal(){
    while(rainbow = true){
        team++;
        curTeam = team;
        Vars.player.team(curTeam);
        if(team == 255){
             team = 1;
        }
    }
}

// calls teamLocal
function changeTeam(){
    rainbow = true;
    (Vars.net.client() ? teamLocal)();
}

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
