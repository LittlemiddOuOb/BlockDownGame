gdjs.GameoverCode = {};
gdjs.GameoverCode.localVariables = [];
gdjs.GameoverCode.idToCallbackMap = new Map();
gdjs.GameoverCode.GDGameOverObjects1= [];
gdjs.GameoverCode.GDGameOverObjects2= [];
gdjs.GameoverCode.GDGameOverObjects3= [];
gdjs.GameoverCode.GDMainMenuObjects1= [];
gdjs.GameoverCode.GDMainMenuObjects2= [];
gdjs.GameoverCode.GDMainMenuObjects3= [];
gdjs.GameoverCode.GDTotalScore2Objects1= [];
gdjs.GameoverCode.GDTotalScore2Objects2= [];
gdjs.GameoverCode.GDTotalScore2Objects3= [];
gdjs.GameoverCode.GDTry_9595AgainObjects1= [];
gdjs.GameoverCode.GDTry_9595AgainObjects2= [];
gdjs.GameoverCode.GDTry_9595AgainObjects3= [];
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects1= [];
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2= [];
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects3= [];
gdjs.GameoverCode.GDBlueBlockObjects1= [];
gdjs.GameoverCode.GDBlueBlockObjects2= [];
gdjs.GameoverCode.GDBlueBlockObjects3= [];
gdjs.GameoverCode.GDGroundObjects1= [];
gdjs.GameoverCode.GDGroundObjects2= [];
gdjs.GameoverCode.GDGroundObjects3= [];
gdjs.GameoverCode.GDScoreTextObjects1= [];
gdjs.GameoverCode.GDScoreTextObjects2= [];
gdjs.GameoverCode.GDScoreTextObjects3= [];
gdjs.GameoverCode.GDRedBlockObjects1= [];
gdjs.GameoverCode.GDRedBlockObjects2= [];
gdjs.GameoverCode.GDRedBlockObjects3= [];
gdjs.GameoverCode.GDNewSpriteObjects1= [];
gdjs.GameoverCode.GDNewSpriteObjects2= [];
gdjs.GameoverCode.GDNewSpriteObjects3= [];
gdjs.GameoverCode.GDLeftObjects1= [];
gdjs.GameoverCode.GDLeftObjects2= [];
gdjs.GameoverCode.GDLeftObjects3= [];
gdjs.GameoverCode.GDAObjects1= [];
gdjs.GameoverCode.GDAObjects2= [];
gdjs.GameoverCode.GDAObjects3= [];
gdjs.GameoverCode.GDDObjects1= [];
gdjs.GameoverCode.GDDObjects2= [];
gdjs.GameoverCode.GDDObjects3= [];
gdjs.GameoverCode.GDorObjects1= [];
gdjs.GameoverCode.GDorObjects2= [];
gdjs.GameoverCode.GDorObjects3= [];
gdjs.GameoverCode.GDCorrectObjects1= [];
gdjs.GameoverCode.GDCorrectObjects2= [];
gdjs.GameoverCode.GDCorrectObjects3= [];
gdjs.GameoverCode.GDWrongObjects1= [];
gdjs.GameoverCode.GDWrongObjects2= [];
gdjs.GameoverCode.GDWrongObjects3= [];
gdjs.GameoverCode.GDBackObjects1= [];
gdjs.GameoverCode.GDBackObjects2= [];
gdjs.GameoverCode.GDBackObjects3= [];
gdjs.GameoverCode.GDNewSprite2Objects1= [];
gdjs.GameoverCode.GDNewSprite2Objects2= [];
gdjs.GameoverCode.GDNewSprite2Objects3= [];


gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(22).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TotalScore2"), gdjs.GameoverCode.GDTotalScore2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.GameoverCode.GDTry_9595AgainObjects2);
gdjs.copyArray(runtimeScene.getObjects("You_did_Great"), gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2);
{for(var i = 0, len = gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameoverCode.GDTry_9595AgainObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTry_9595AgainObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.GameoverCode.GDTotalScore2Objects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTotalScore2Objects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TotalScore2"), gdjs.GameoverCode.GDTotalScore2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.GameoverCode.GDTry_9595AgainObjects2);
gdjs.copyArray(runtimeScene.getObjects("You_did_Great"), gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2);
{for(var i = 0, len = gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.GameoverCode.GDTry_9595AgainObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTry_9595AgainObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameoverCode.GDTotalScore2Objects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTotalScore2Objects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(22).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TotalScore2"), gdjs.GameoverCode.GDTotalScore2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.GameoverCode.GDTry_9595AgainObjects2);
gdjs.copyArray(runtimeScene.getObjects("You_did_Great"), gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2);
{for(var i = 0, len = gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameoverCode.GDTry_9595AgainObjects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTry_9595AgainObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.GameoverCode.GDTotalScore2Objects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDTotalScore2Objects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12))));
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
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TotalScore2"), gdjs.GameoverCode.GDTotalScore2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.GameoverCode.GDTry_9595AgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("You_did_Great"), gdjs.GameoverCode.GDYou_9595did_9595GreatObjects1);
{for(var i = 0, len = gdjs.GameoverCode.GDYou_9595did_9595GreatObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDYou_9595did_9595GreatObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.GameoverCode.GDTry_9595AgainObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDTry_9595AgainObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.GameoverCode.GDTotalScore2Objects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDTotalScore2Objects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12))));
}
}
}

}


};gdjs.GameoverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13591996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.GameoverCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameoverCode.GDNewSprite2Objects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.GameoverCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.GameoverCode.GDNewSprite2Objects2[i].setX((( gdjs.GameoverCode.GDBackObjects2.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackObjects2[0].getX()) - 70);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13593268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.GameoverCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameoverCode.GDNewSprite2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.GameoverCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDNewSprite2Objects1[i].setX((( gdjs.GameoverCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.GameoverCode.GDBackObjects1[0].getX()) - 70);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


};gdjs.GameoverCode.asyncCallback13916156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameoverCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
gdjs.GameoverCode.localVariables.length = 0;
}
gdjs.GameoverCode.idToCallbackMap.set(13916156, gdjs.GameoverCode.asyncCallback13916156);
gdjs.GameoverCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameoverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/api/saveData/", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(20)), "POST", "application/json", runtimeScene.getScene().getVariables().get("ServerResponse"), runtimeScene.getScene().getVariables().get("ServerWrongResponse")), (runtimeScene) => (gdjs.GameoverCode.asyncCallback13916156(runtimeScene, asyncObjectsList)), 13916156, asyncObjectsList);
}
}

}


};gdjs.GameoverCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.GameoverCode.GDMainMenuObjects1);
{for(var i = 0, len = gdjs.GameoverCode.GDMainMenuObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDMainMenuObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameOver");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "lose game.mp3", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Button");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}

{ //Subevents
gdjs.GameoverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameOver") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.GameoverCode.GDMainMenuObjects1);
{for(var i = 0, len = gdjs.GameoverCode.GDMainMenuObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDMainMenuObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}

{ //Subevents
gdjs.GameoverCode.eventsList1(runtimeScene);} //End of subevents
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Button") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13594900);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("SaveData", "EasyHighestScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("SaveData", "HellHighestScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameoverCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.GameoverCode.GDMainMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameoverCode.GDMainMenuObjects1.length;i<l;++i) {
    if ( gdjs.GameoverCode.GDMainMenuObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameoverCode.GDMainMenuObjects1[k] = gdjs.GameoverCode.GDMainMenuObjects1[i];
        ++k;
    }
}
gdjs.GameoverCode.GDMainMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDGameOverObjects1.length = 0;
gdjs.GameoverCode.GDGameOverObjects2.length = 0;
gdjs.GameoverCode.GDGameOverObjects3.length = 0;
gdjs.GameoverCode.GDMainMenuObjects1.length = 0;
gdjs.GameoverCode.GDMainMenuObjects2.length = 0;
gdjs.GameoverCode.GDMainMenuObjects3.length = 0;
gdjs.GameoverCode.GDTotalScore2Objects1.length = 0;
gdjs.GameoverCode.GDTotalScore2Objects2.length = 0;
gdjs.GameoverCode.GDTotalScore2Objects3.length = 0;
gdjs.GameoverCode.GDTry_9595AgainObjects1.length = 0;
gdjs.GameoverCode.GDTry_9595AgainObjects2.length = 0;
gdjs.GameoverCode.GDTry_9595AgainObjects3.length = 0;
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects1.length = 0;
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2.length = 0;
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects3.length = 0;
gdjs.GameoverCode.GDBlueBlockObjects1.length = 0;
gdjs.GameoverCode.GDBlueBlockObjects2.length = 0;
gdjs.GameoverCode.GDBlueBlockObjects3.length = 0;
gdjs.GameoverCode.GDGroundObjects1.length = 0;
gdjs.GameoverCode.GDGroundObjects2.length = 0;
gdjs.GameoverCode.GDGroundObjects3.length = 0;
gdjs.GameoverCode.GDScoreTextObjects1.length = 0;
gdjs.GameoverCode.GDScoreTextObjects2.length = 0;
gdjs.GameoverCode.GDScoreTextObjects3.length = 0;
gdjs.GameoverCode.GDRedBlockObjects1.length = 0;
gdjs.GameoverCode.GDRedBlockObjects2.length = 0;
gdjs.GameoverCode.GDRedBlockObjects3.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects3.length = 0;
gdjs.GameoverCode.GDLeftObjects1.length = 0;
gdjs.GameoverCode.GDLeftObjects2.length = 0;
gdjs.GameoverCode.GDLeftObjects3.length = 0;
gdjs.GameoverCode.GDAObjects1.length = 0;
gdjs.GameoverCode.GDAObjects2.length = 0;
gdjs.GameoverCode.GDAObjects3.length = 0;
gdjs.GameoverCode.GDDObjects1.length = 0;
gdjs.GameoverCode.GDDObjects2.length = 0;
gdjs.GameoverCode.GDDObjects3.length = 0;
gdjs.GameoverCode.GDorObjects1.length = 0;
gdjs.GameoverCode.GDorObjects2.length = 0;
gdjs.GameoverCode.GDorObjects3.length = 0;
gdjs.GameoverCode.GDCorrectObjects1.length = 0;
gdjs.GameoverCode.GDCorrectObjects2.length = 0;
gdjs.GameoverCode.GDCorrectObjects3.length = 0;
gdjs.GameoverCode.GDWrongObjects1.length = 0;
gdjs.GameoverCode.GDWrongObjects2.length = 0;
gdjs.GameoverCode.GDWrongObjects3.length = 0;
gdjs.GameoverCode.GDBackObjects1.length = 0;
gdjs.GameoverCode.GDBackObjects2.length = 0;
gdjs.GameoverCode.GDBackObjects3.length = 0;
gdjs.GameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.GameoverCode.GDNewSprite2Objects3.length = 0;

gdjs.GameoverCode.eventsList3(runtimeScene);
gdjs.GameoverCode.GDGameOverObjects1.length = 0;
gdjs.GameoverCode.GDGameOverObjects2.length = 0;
gdjs.GameoverCode.GDGameOverObjects3.length = 0;
gdjs.GameoverCode.GDMainMenuObjects1.length = 0;
gdjs.GameoverCode.GDMainMenuObjects2.length = 0;
gdjs.GameoverCode.GDMainMenuObjects3.length = 0;
gdjs.GameoverCode.GDTotalScore2Objects1.length = 0;
gdjs.GameoverCode.GDTotalScore2Objects2.length = 0;
gdjs.GameoverCode.GDTotalScore2Objects3.length = 0;
gdjs.GameoverCode.GDTry_9595AgainObjects1.length = 0;
gdjs.GameoverCode.GDTry_9595AgainObjects2.length = 0;
gdjs.GameoverCode.GDTry_9595AgainObjects3.length = 0;
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects1.length = 0;
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects2.length = 0;
gdjs.GameoverCode.GDYou_9595did_9595GreatObjects3.length = 0;
gdjs.GameoverCode.GDBlueBlockObjects1.length = 0;
gdjs.GameoverCode.GDBlueBlockObjects2.length = 0;
gdjs.GameoverCode.GDBlueBlockObjects3.length = 0;
gdjs.GameoverCode.GDGroundObjects1.length = 0;
gdjs.GameoverCode.GDGroundObjects2.length = 0;
gdjs.GameoverCode.GDGroundObjects3.length = 0;
gdjs.GameoverCode.GDScoreTextObjects1.length = 0;
gdjs.GameoverCode.GDScoreTextObjects2.length = 0;
gdjs.GameoverCode.GDScoreTextObjects3.length = 0;
gdjs.GameoverCode.GDRedBlockObjects1.length = 0;
gdjs.GameoverCode.GDRedBlockObjects2.length = 0;
gdjs.GameoverCode.GDRedBlockObjects3.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects3.length = 0;
gdjs.GameoverCode.GDLeftObjects1.length = 0;
gdjs.GameoverCode.GDLeftObjects2.length = 0;
gdjs.GameoverCode.GDLeftObjects3.length = 0;
gdjs.GameoverCode.GDAObjects1.length = 0;
gdjs.GameoverCode.GDAObjects2.length = 0;
gdjs.GameoverCode.GDAObjects3.length = 0;
gdjs.GameoverCode.GDDObjects1.length = 0;
gdjs.GameoverCode.GDDObjects2.length = 0;
gdjs.GameoverCode.GDDObjects3.length = 0;
gdjs.GameoverCode.GDorObjects1.length = 0;
gdjs.GameoverCode.GDorObjects2.length = 0;
gdjs.GameoverCode.GDorObjects3.length = 0;
gdjs.GameoverCode.GDCorrectObjects1.length = 0;
gdjs.GameoverCode.GDCorrectObjects2.length = 0;
gdjs.GameoverCode.GDCorrectObjects3.length = 0;
gdjs.GameoverCode.GDWrongObjects1.length = 0;
gdjs.GameoverCode.GDWrongObjects2.length = 0;
gdjs.GameoverCode.GDWrongObjects3.length = 0;
gdjs.GameoverCode.GDBackObjects1.length = 0;
gdjs.GameoverCode.GDBackObjects2.length = 0;
gdjs.GameoverCode.GDBackObjects3.length = 0;
gdjs.GameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.GameoverCode.GDNewSprite2Objects3.length = 0;


return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
