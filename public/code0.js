gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.idToCallbackMap = new Map();
gdjs.MainCode.GDDuo_9595PlaymodeObjects1= [];
gdjs.MainCode.GDDuo_9595PlaymodeObjects2= [];
gdjs.MainCode.GDSingle_9595PlaymodeObjects1= [];
gdjs.MainCode.GDSingle_9595PlaymodeObjects2= [];
gdjs.MainCode.GDHighestScore2Objects1= [];
gdjs.MainCode.GDHighestScore2Objects2= [];
gdjs.MainCode.GDSettingObjects1= [];
gdjs.MainCode.GDSettingObjects2= [];
gdjs.MainCode.GDRewardObjects1= [];
gdjs.MainCode.GDRewardObjects2= [];
gdjs.MainCode.GDBackToWebButtonObjects1= [];
gdjs.MainCode.GDBackToWebButtonObjects2= [];
gdjs.MainCode.GDBlueBlockObjects1= [];
gdjs.MainCode.GDBlueBlockObjects2= [];
gdjs.MainCode.GDGroundObjects1= [];
gdjs.MainCode.GDGroundObjects2= [];
gdjs.MainCode.GDScoreTextObjects1= [];
gdjs.MainCode.GDScoreTextObjects2= [];
gdjs.MainCode.GDRedBlockObjects1= [];
gdjs.MainCode.GDRedBlockObjects2= [];
gdjs.MainCode.GDNewSpriteObjects1= [];
gdjs.MainCode.GDNewSpriteObjects2= [];
gdjs.MainCode.GDLeftObjects1= [];
gdjs.MainCode.GDLeftObjects2= [];
gdjs.MainCode.GDAObjects1= [];
gdjs.MainCode.GDAObjects2= [];
gdjs.MainCode.GDDObjects1= [];
gdjs.MainCode.GDDObjects2= [];
gdjs.MainCode.GDorObjects1= [];
gdjs.MainCode.GDorObjects2= [];
gdjs.MainCode.GDCorrectObjects1= [];
gdjs.MainCode.GDCorrectObjects2= [];
gdjs.MainCode.GDWrongObjects1= [];
gdjs.MainCode.GDWrongObjects2= [];
gdjs.MainCode.GDBackObjects1= [];
gdjs.MainCode.GDBackObjects2= [];
gdjs.MainCode.GDNewSprite2Objects1= [];
gdjs.MainCode.GDNewSprite2Objects2= [];


gdjs.MainCode.asyncCallback12946604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(27).setString("Guest");
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(12946604, gdjs.MainCode.asyncCallback12946604);
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/api/loadData/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(27)), "", "GET", "application/json", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(4)), (runtimeScene) => (gdjs.MainCode.asyncCallback12946604(runtimeScene, asyncObjectsList)), 12946604, asyncObjectsList);
}
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "button");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BackToWeb");
}

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13314956);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.MainCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.MainCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRedBlockObjects1[i].setAngle(gdjs.MainCode.GDRedBlockObjects1[i].getAngle() + (90));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13315940);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.MainCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.MainCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDRedBlockObjects1[i].setAngle(gdjs.MainCode.GDRedBlockObjects1[i].getAngle() - (90));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13316804);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.MainCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueBlockObjects1[i].setAngle(gdjs.MainCode.GDBlueBlockObjects1[i].getAngle() - (90));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13310492);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.MainCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueBlockObjects1[i].setAngle(gdjs.MainCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "button") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13318532);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SingleGamemode", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13319804);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "button") >= 2;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DuoGamemodeMenu", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13321052);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "button") >= 2;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reward", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13321916);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13323724);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}

{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, null);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 2, null);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MainCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Single_Playmode"), gdjs.MainCode.GDSingle_9595PlaymodeObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewSprite2Objects1[i].setX((( gdjs.MainCode.GDSingle_9595PlaymodeObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSingle_9595PlaymodeObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.MainCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewSprite2Objects1[i].setY((( gdjs.MainCode.GDSingle_9595PlaymodeObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSingle_9595PlaymodeObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duo_Playmode"), gdjs.MainCode.GDDuo_9595PlaymodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MainCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewSprite2Objects1[i].setX((( gdjs.MainCode.GDDuo_9595PlaymodeObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDDuo_9595PlaymodeObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.MainCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewSprite2Objects1[i].setY((( gdjs.MainCode.GDDuo_9595PlaymodeObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDDuo_9595PlaymodeObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MainCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Reward"), gdjs.MainCode.GDRewardObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewSprite2Objects1[i].setX((( gdjs.MainCode.GDRewardObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDRewardObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.MainCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewSprite2Objects1[i].setY((( gdjs.MainCode.GDRewardObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDRewardObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Single_Playmode"), gdjs.MainCode.GDSingle_9595PlaymodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDSingle_9595PlaymodeObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSingle_9595PlaymodeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDSingle_9595PlaymodeObjects1[k] = gdjs.MainCode.GDSingle_9595PlaymodeObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSingle_9595PlaymodeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SingleGamemode", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duo_Playmode"), gdjs.MainCode.GDDuo_9595PlaymodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDDuo_9595PlaymodeObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDDuo_9595PlaymodeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDDuo_9595PlaymodeObjects1[k] = gdjs.MainCode.GDDuo_9595PlaymodeObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDDuo_9595PlaymodeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DuoGamemodeMenu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Reward"), gdjs.MainCode.GDRewardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDRewardObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDRewardObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDRewardObjects1[k] = gdjs.MainCode.GDRewardObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDRewardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reward", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToWebButton"), gdjs.MainCode.GDBackToWebButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDBackToWebButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDBackToWebButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDBackToWebButtonObjects1[k] = gdjs.MainCode.GDBackToWebButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDBackToWebButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BackToWeb") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13332316);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "javascript:history.back()", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BackToWeb") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13333436);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "javascript:history.back()", null);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDDuo_9595PlaymodeObjects1.length = 0;
gdjs.MainCode.GDDuo_9595PlaymodeObjects2.length = 0;
gdjs.MainCode.GDSingle_9595PlaymodeObjects1.length = 0;
gdjs.MainCode.GDSingle_9595PlaymodeObjects2.length = 0;
gdjs.MainCode.GDHighestScore2Objects1.length = 0;
gdjs.MainCode.GDHighestScore2Objects2.length = 0;
gdjs.MainCode.GDSettingObjects1.length = 0;
gdjs.MainCode.GDSettingObjects2.length = 0;
gdjs.MainCode.GDRewardObjects1.length = 0;
gdjs.MainCode.GDRewardObjects2.length = 0;
gdjs.MainCode.GDBackToWebButtonObjects1.length = 0;
gdjs.MainCode.GDBackToWebButtonObjects2.length = 0;
gdjs.MainCode.GDBlueBlockObjects1.length = 0;
gdjs.MainCode.GDBlueBlockObjects2.length = 0;
gdjs.MainCode.GDGroundObjects1.length = 0;
gdjs.MainCode.GDGroundObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDRedBlockObjects1.length = 0;
gdjs.MainCode.GDRedBlockObjects2.length = 0;
gdjs.MainCode.GDNewSpriteObjects1.length = 0;
gdjs.MainCode.GDNewSpriteObjects2.length = 0;
gdjs.MainCode.GDLeftObjects1.length = 0;
gdjs.MainCode.GDLeftObjects2.length = 0;
gdjs.MainCode.GDAObjects1.length = 0;
gdjs.MainCode.GDAObjects2.length = 0;
gdjs.MainCode.GDDObjects1.length = 0;
gdjs.MainCode.GDDObjects2.length = 0;
gdjs.MainCode.GDorObjects1.length = 0;
gdjs.MainCode.GDorObjects2.length = 0;
gdjs.MainCode.GDCorrectObjects1.length = 0;
gdjs.MainCode.GDCorrectObjects2.length = 0;
gdjs.MainCode.GDWrongObjects1.length = 0;
gdjs.MainCode.GDWrongObjects2.length = 0;
gdjs.MainCode.GDBackObjects1.length = 0;
gdjs.MainCode.GDBackObjects2.length = 0;
gdjs.MainCode.GDNewSprite2Objects1.length = 0;
gdjs.MainCode.GDNewSprite2Objects2.length = 0;

gdjs.MainCode.eventsList3(runtimeScene);
gdjs.MainCode.GDDuo_9595PlaymodeObjects1.length = 0;
gdjs.MainCode.GDDuo_9595PlaymodeObjects2.length = 0;
gdjs.MainCode.GDSingle_9595PlaymodeObjects1.length = 0;
gdjs.MainCode.GDSingle_9595PlaymodeObjects2.length = 0;
gdjs.MainCode.GDHighestScore2Objects1.length = 0;
gdjs.MainCode.GDHighestScore2Objects2.length = 0;
gdjs.MainCode.GDSettingObjects1.length = 0;
gdjs.MainCode.GDSettingObjects2.length = 0;
gdjs.MainCode.GDRewardObjects1.length = 0;
gdjs.MainCode.GDRewardObjects2.length = 0;
gdjs.MainCode.GDBackToWebButtonObjects1.length = 0;
gdjs.MainCode.GDBackToWebButtonObjects2.length = 0;
gdjs.MainCode.GDBlueBlockObjects1.length = 0;
gdjs.MainCode.GDBlueBlockObjects2.length = 0;
gdjs.MainCode.GDGroundObjects1.length = 0;
gdjs.MainCode.GDGroundObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDRedBlockObjects1.length = 0;
gdjs.MainCode.GDRedBlockObjects2.length = 0;
gdjs.MainCode.GDNewSpriteObjects1.length = 0;
gdjs.MainCode.GDNewSpriteObjects2.length = 0;
gdjs.MainCode.GDLeftObjects1.length = 0;
gdjs.MainCode.GDLeftObjects2.length = 0;
gdjs.MainCode.GDAObjects1.length = 0;
gdjs.MainCode.GDAObjects2.length = 0;
gdjs.MainCode.GDDObjects1.length = 0;
gdjs.MainCode.GDDObjects2.length = 0;
gdjs.MainCode.GDorObjects1.length = 0;
gdjs.MainCode.GDorObjects2.length = 0;
gdjs.MainCode.GDCorrectObjects1.length = 0;
gdjs.MainCode.GDCorrectObjects2.length = 0;
gdjs.MainCode.GDWrongObjects1.length = 0;
gdjs.MainCode.GDWrongObjects2.length = 0;
gdjs.MainCode.GDBackObjects1.length = 0;
gdjs.MainCode.GDBackObjects2.length = 0;
gdjs.MainCode.GDNewSprite2Objects1.length = 0;
gdjs.MainCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
