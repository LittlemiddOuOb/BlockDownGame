gdjs.DuoGameoverCode = {};
gdjs.DuoGameoverCode.localVariables = [];
gdjs.DuoGameoverCode.idToCallbackMap = new Map();
gdjs.DuoGameoverCode.GDGameOverObjects1= [];
gdjs.DuoGameoverCode.GDGameOverObjects2= [];
gdjs.DuoGameoverCode.GDGameOverObjects3= [];
gdjs.DuoGameoverCode.GDMainMenuObjects1= [];
gdjs.DuoGameoverCode.GDMainMenuObjects2= [];
gdjs.DuoGameoverCode.GDMainMenuObjects3= [];
gdjs.DuoGameoverCode.GDTotalScore2Objects1= [];
gdjs.DuoGameoverCode.GDTotalScore2Objects2= [];
gdjs.DuoGameoverCode.GDTotalScore2Objects3= [];
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects1= [];
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2= [];
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects3= [];
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects1= [];
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2= [];
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects3= [];
gdjs.DuoGameoverCode.GD_9530495_9526834Objects1= [];
gdjs.DuoGameoverCode.GD_9530495_9526834Objects2= [];
gdjs.DuoGameoverCode.GD_9530495_9526834Objects3= [];
gdjs.DuoGameoverCode.GDBlueBlockObjects1= [];
gdjs.DuoGameoverCode.GDBlueBlockObjects2= [];
gdjs.DuoGameoverCode.GDBlueBlockObjects3= [];
gdjs.DuoGameoverCode.GDGroundObjects1= [];
gdjs.DuoGameoverCode.GDGroundObjects2= [];
gdjs.DuoGameoverCode.GDGroundObjects3= [];
gdjs.DuoGameoverCode.GDScoreTextObjects1= [];
gdjs.DuoGameoverCode.GDScoreTextObjects2= [];
gdjs.DuoGameoverCode.GDScoreTextObjects3= [];
gdjs.DuoGameoverCode.GDRedBlockObjects1= [];
gdjs.DuoGameoverCode.GDRedBlockObjects2= [];
gdjs.DuoGameoverCode.GDRedBlockObjects3= [];
gdjs.DuoGameoverCode.GDNewSpriteObjects1= [];
gdjs.DuoGameoverCode.GDNewSpriteObjects2= [];
gdjs.DuoGameoverCode.GDNewSpriteObjects3= [];
gdjs.DuoGameoverCode.GDLeftObjects1= [];
gdjs.DuoGameoverCode.GDLeftObjects2= [];
gdjs.DuoGameoverCode.GDLeftObjects3= [];
gdjs.DuoGameoverCode.GDAObjects1= [];
gdjs.DuoGameoverCode.GDAObjects2= [];
gdjs.DuoGameoverCode.GDAObjects3= [];
gdjs.DuoGameoverCode.GDDObjects1= [];
gdjs.DuoGameoverCode.GDDObjects2= [];
gdjs.DuoGameoverCode.GDDObjects3= [];
gdjs.DuoGameoverCode.GDorObjects1= [];
gdjs.DuoGameoverCode.GDorObjects2= [];
gdjs.DuoGameoverCode.GDorObjects3= [];
gdjs.DuoGameoverCode.GDCorrectObjects1= [];
gdjs.DuoGameoverCode.GDCorrectObjects2= [];
gdjs.DuoGameoverCode.GDCorrectObjects3= [];
gdjs.DuoGameoverCode.GDWrongObjects1= [];
gdjs.DuoGameoverCode.GDWrongObjects2= [];
gdjs.DuoGameoverCode.GDWrongObjects3= [];
gdjs.DuoGameoverCode.GDBackObjects1= [];
gdjs.DuoGameoverCode.GDBackObjects2= [];
gdjs.DuoGameoverCode.GDBackObjects3= [];
gdjs.DuoGameoverCode.GDNewSprite2Objects1= [];
gdjs.DuoGameoverCode.GDNewSprite2Objects2= [];
gdjs.DuoGameoverCode.GDNewSprite2Objects3= [];


gdjs.DuoGameoverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(22).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(24).getAsNumber() != 2);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("戰犯Blue"), gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2);
gdjs.copyArray(runtimeScene.getObjects("戰犯Red"), gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2);
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(22).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(24).getAsNumber() != 2);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("戰犯Blue"), gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2);
gdjs.copyArray(runtimeScene.getObjects("戰犯Red"), gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2);
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(22).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("戰犯Blue"), gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2);
gdjs.copyArray(runtimeScene.getObjects("戰犯Red"), gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2);
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("戰犯Blue"), gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2);
gdjs.copyArray(runtimeScene.getObjects("戰犯Red"), gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2);
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(25).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.DuoGameoverCode.GD_9530495_9526834Objects1, gdjs.DuoGameoverCode.GD_9530495_9526834Objects2);

{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9530495_9526834Objects2.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9530495_9526834Objects2[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10813100);
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://blockdowngame.onrender.com/api/saveData", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(20)), "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
}

}


};gdjs.DuoGameoverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 2, null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};gdjs.DuoGameoverCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.DuoGameoverCode.GDMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("TotalScore2"), gdjs.DuoGameoverCode.GDTotalScore2Objects1);
gdjs.copyArray(runtimeScene.getObjects("真棒"), gdjs.DuoGameoverCode.GD_9530495_9526834Objects1);
{for(var i = 0, len = gdjs.DuoGameoverCode.GDMainMenuObjects1.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GDMainMenuObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameOver");
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GDTotalScore2Objects1.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GDTotalScore2Objects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16))));
}
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GD_9530495_9526834Objects1.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GD_9530495_9526834Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "lose game.mp3", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "button");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(20).getChild("DuoHighestScore").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)));
}
{runtimeScene.getGame().getVariables().getFromIndex(20).getChild("EasyHighestScore").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)));
}
{runtimeScene.getGame().getVariables().getFromIndex(20).getChild("playername").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(27)));
}
{runtimeScene.getGame().getVariables().getFromIndex(20).getChild("HellHighestScore").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("HellHIghestScore")));
}

{ //Subevents
gdjs.DuoGameoverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameOver") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.DuoGameoverCode.GDMainMenuObjects1);
{for(var i = 0, len = gdjs.DuoGameoverCode.GDMainMenuObjects1.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GDMainMenuObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}

{ //Subevents
gdjs.DuoGameoverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("SaveData", "DuoHighestScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1).getAsString()) >= 2;
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://blockdowngame.onrender.com/api/saveData", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(20)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.DuoGameoverCode.GDMainMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGameoverCode.GDMainMenuObjects1.length;i<l;++i) {
    if ( gdjs.DuoGameoverCode.GDMainMenuObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.DuoGameoverCode.GDMainMenuObjects1[k] = gdjs.DuoGameoverCode.GDMainMenuObjects1[i];
        ++k;
    }
}
gdjs.DuoGameoverCode.GDMainMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(24).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16593356);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DuoGameoverCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.DuoGameoverCode.GDNewSprite2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GDNewSprite2Objects1[i].setX((( gdjs.DuoGameoverCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.DuoGameoverCode.GDBackObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GDNewSprite2Objects1[i].setY((( gdjs.DuoGameoverCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.DuoGameoverCode.GDBackObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12277996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DuoGameoverCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.DuoGameoverCode.GDNewSprite2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GDNewSprite2Objects1[i].setX((( gdjs.DuoGameoverCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.DuoGameoverCode.GDBackObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.DuoGameoverCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.DuoGameoverCode.GDNewSprite2Objects1[i].setY((( gdjs.DuoGameoverCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.DuoGameoverCode.GDBackObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "button") >= 2;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};

gdjs.DuoGameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DuoGameoverCode.GDGameOverObjects1.length = 0;
gdjs.DuoGameoverCode.GDGameOverObjects2.length = 0;
gdjs.DuoGameoverCode.GDGameOverObjects3.length = 0;
gdjs.DuoGameoverCode.GDMainMenuObjects1.length = 0;
gdjs.DuoGameoverCode.GDMainMenuObjects2.length = 0;
gdjs.DuoGameoverCode.GDMainMenuObjects3.length = 0;
gdjs.DuoGameoverCode.GDTotalScore2Objects1.length = 0;
gdjs.DuoGameoverCode.GDTotalScore2Objects2.length = 0;
gdjs.DuoGameoverCode.GDTotalScore2Objects3.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects1.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects3.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects1.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects3.length = 0;
gdjs.DuoGameoverCode.GD_9530495_9526834Objects1.length = 0;
gdjs.DuoGameoverCode.GD_9530495_9526834Objects2.length = 0;
gdjs.DuoGameoverCode.GD_9530495_9526834Objects3.length = 0;
gdjs.DuoGameoverCode.GDBlueBlockObjects1.length = 0;
gdjs.DuoGameoverCode.GDBlueBlockObjects2.length = 0;
gdjs.DuoGameoverCode.GDBlueBlockObjects3.length = 0;
gdjs.DuoGameoverCode.GDGroundObjects1.length = 0;
gdjs.DuoGameoverCode.GDGroundObjects2.length = 0;
gdjs.DuoGameoverCode.GDGroundObjects3.length = 0;
gdjs.DuoGameoverCode.GDScoreTextObjects1.length = 0;
gdjs.DuoGameoverCode.GDScoreTextObjects2.length = 0;
gdjs.DuoGameoverCode.GDScoreTextObjects3.length = 0;
gdjs.DuoGameoverCode.GDRedBlockObjects1.length = 0;
gdjs.DuoGameoverCode.GDRedBlockObjects2.length = 0;
gdjs.DuoGameoverCode.GDRedBlockObjects3.length = 0;
gdjs.DuoGameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.DuoGameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.DuoGameoverCode.GDNewSpriteObjects3.length = 0;
gdjs.DuoGameoverCode.GDLeftObjects1.length = 0;
gdjs.DuoGameoverCode.GDLeftObjects2.length = 0;
gdjs.DuoGameoverCode.GDLeftObjects3.length = 0;
gdjs.DuoGameoverCode.GDAObjects1.length = 0;
gdjs.DuoGameoverCode.GDAObjects2.length = 0;
gdjs.DuoGameoverCode.GDAObjects3.length = 0;
gdjs.DuoGameoverCode.GDDObjects1.length = 0;
gdjs.DuoGameoverCode.GDDObjects2.length = 0;
gdjs.DuoGameoverCode.GDDObjects3.length = 0;
gdjs.DuoGameoverCode.GDorObjects1.length = 0;
gdjs.DuoGameoverCode.GDorObjects2.length = 0;
gdjs.DuoGameoverCode.GDorObjects3.length = 0;
gdjs.DuoGameoverCode.GDCorrectObjects1.length = 0;
gdjs.DuoGameoverCode.GDCorrectObjects2.length = 0;
gdjs.DuoGameoverCode.GDCorrectObjects3.length = 0;
gdjs.DuoGameoverCode.GDWrongObjects1.length = 0;
gdjs.DuoGameoverCode.GDWrongObjects2.length = 0;
gdjs.DuoGameoverCode.GDWrongObjects3.length = 0;
gdjs.DuoGameoverCode.GDBackObjects1.length = 0;
gdjs.DuoGameoverCode.GDBackObjects2.length = 0;
gdjs.DuoGameoverCode.GDBackObjects3.length = 0;
gdjs.DuoGameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.DuoGameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.DuoGameoverCode.GDNewSprite2Objects3.length = 0;

gdjs.DuoGameoverCode.eventsList2(runtimeScene);
gdjs.DuoGameoverCode.GDGameOverObjects1.length = 0;
gdjs.DuoGameoverCode.GDGameOverObjects2.length = 0;
gdjs.DuoGameoverCode.GDGameOverObjects3.length = 0;
gdjs.DuoGameoverCode.GDMainMenuObjects1.length = 0;
gdjs.DuoGameoverCode.GDMainMenuObjects2.length = 0;
gdjs.DuoGameoverCode.GDMainMenuObjects3.length = 0;
gdjs.DuoGameoverCode.GDTotalScore2Objects1.length = 0;
gdjs.DuoGameoverCode.GDTotalScore2Objects2.length = 0;
gdjs.DuoGameoverCode.GDTotalScore2Objects3.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects1.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects2.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359RedObjects3.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects1.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects2.length = 0;
gdjs.DuoGameoverCode.GD_9525136_9529359BlueObjects3.length = 0;
gdjs.DuoGameoverCode.GD_9530495_9526834Objects1.length = 0;
gdjs.DuoGameoverCode.GD_9530495_9526834Objects2.length = 0;
gdjs.DuoGameoverCode.GD_9530495_9526834Objects3.length = 0;
gdjs.DuoGameoverCode.GDBlueBlockObjects1.length = 0;
gdjs.DuoGameoverCode.GDBlueBlockObjects2.length = 0;
gdjs.DuoGameoverCode.GDBlueBlockObjects3.length = 0;
gdjs.DuoGameoverCode.GDGroundObjects1.length = 0;
gdjs.DuoGameoverCode.GDGroundObjects2.length = 0;
gdjs.DuoGameoverCode.GDGroundObjects3.length = 0;
gdjs.DuoGameoverCode.GDScoreTextObjects1.length = 0;
gdjs.DuoGameoverCode.GDScoreTextObjects2.length = 0;
gdjs.DuoGameoverCode.GDScoreTextObjects3.length = 0;
gdjs.DuoGameoverCode.GDRedBlockObjects1.length = 0;
gdjs.DuoGameoverCode.GDRedBlockObjects2.length = 0;
gdjs.DuoGameoverCode.GDRedBlockObjects3.length = 0;
gdjs.DuoGameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.DuoGameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.DuoGameoverCode.GDNewSpriteObjects3.length = 0;
gdjs.DuoGameoverCode.GDLeftObjects1.length = 0;
gdjs.DuoGameoverCode.GDLeftObjects2.length = 0;
gdjs.DuoGameoverCode.GDLeftObjects3.length = 0;
gdjs.DuoGameoverCode.GDAObjects1.length = 0;
gdjs.DuoGameoverCode.GDAObjects2.length = 0;
gdjs.DuoGameoverCode.GDAObjects3.length = 0;
gdjs.DuoGameoverCode.GDDObjects1.length = 0;
gdjs.DuoGameoverCode.GDDObjects2.length = 0;
gdjs.DuoGameoverCode.GDDObjects3.length = 0;
gdjs.DuoGameoverCode.GDorObjects1.length = 0;
gdjs.DuoGameoverCode.GDorObjects2.length = 0;
gdjs.DuoGameoverCode.GDorObjects3.length = 0;
gdjs.DuoGameoverCode.GDCorrectObjects1.length = 0;
gdjs.DuoGameoverCode.GDCorrectObjects2.length = 0;
gdjs.DuoGameoverCode.GDCorrectObjects3.length = 0;
gdjs.DuoGameoverCode.GDWrongObjects1.length = 0;
gdjs.DuoGameoverCode.GDWrongObjects2.length = 0;
gdjs.DuoGameoverCode.GDWrongObjects3.length = 0;
gdjs.DuoGameoverCode.GDBackObjects1.length = 0;
gdjs.DuoGameoverCode.GDBackObjects2.length = 0;
gdjs.DuoGameoverCode.GDBackObjects3.length = 0;
gdjs.DuoGameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.DuoGameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.DuoGameoverCode.GDNewSprite2Objects3.length = 0;


return;

}

gdjs['DuoGameoverCode'] = gdjs.DuoGameoverCode;
