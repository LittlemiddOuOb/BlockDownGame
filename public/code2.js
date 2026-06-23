gdjs.SingleGamemodeCode = {};
gdjs.SingleGamemodeCode.localVariables = [];
gdjs.SingleGamemodeCode.idToCallbackMap = new Map();
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1= [];
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects2= [];
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects3= [];
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1= [];
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects2= [];
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects3= [];
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects1= [];
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects2= [];
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects3= [];
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects1= [];
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects2= [];
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects3= [];
gdjs.SingleGamemodeCode.GDBlueBlockObjects1= [];
gdjs.SingleGamemodeCode.GDBlueBlockObjects2= [];
gdjs.SingleGamemodeCode.GDBlueBlockObjects3= [];
gdjs.SingleGamemodeCode.GDGroundObjects1= [];
gdjs.SingleGamemodeCode.GDGroundObjects2= [];
gdjs.SingleGamemodeCode.GDGroundObjects3= [];
gdjs.SingleGamemodeCode.GDScoreTextObjects1= [];
gdjs.SingleGamemodeCode.GDScoreTextObjects2= [];
gdjs.SingleGamemodeCode.GDScoreTextObjects3= [];
gdjs.SingleGamemodeCode.GDRedBlockObjects1= [];
gdjs.SingleGamemodeCode.GDRedBlockObjects2= [];
gdjs.SingleGamemodeCode.GDRedBlockObjects3= [];
gdjs.SingleGamemodeCode.GDNewSpriteObjects1= [];
gdjs.SingleGamemodeCode.GDNewSpriteObjects2= [];
gdjs.SingleGamemodeCode.GDNewSpriteObjects3= [];
gdjs.SingleGamemodeCode.GDLeftObjects1= [];
gdjs.SingleGamemodeCode.GDLeftObjects2= [];
gdjs.SingleGamemodeCode.GDLeftObjects3= [];
gdjs.SingleGamemodeCode.GDAObjects1= [];
gdjs.SingleGamemodeCode.GDAObjects2= [];
gdjs.SingleGamemodeCode.GDAObjects3= [];
gdjs.SingleGamemodeCode.GDDObjects1= [];
gdjs.SingleGamemodeCode.GDDObjects2= [];
gdjs.SingleGamemodeCode.GDDObjects3= [];
gdjs.SingleGamemodeCode.GDorObjects1= [];
gdjs.SingleGamemodeCode.GDorObjects2= [];
gdjs.SingleGamemodeCode.GDorObjects3= [];
gdjs.SingleGamemodeCode.GDCorrectObjects1= [];
gdjs.SingleGamemodeCode.GDCorrectObjects2= [];
gdjs.SingleGamemodeCode.GDCorrectObjects3= [];
gdjs.SingleGamemodeCode.GDWrongObjects1= [];
gdjs.SingleGamemodeCode.GDWrongObjects2= [];
gdjs.SingleGamemodeCode.GDWrongObjects3= [];
gdjs.SingleGamemodeCode.GDBackObjects1= [];
gdjs.SingleGamemodeCode.GDBackObjects2= [];
gdjs.SingleGamemodeCode.GDBackObjects3= [];
gdjs.SingleGamemodeCode.GDNewSprite2Objects1= [];
gdjs.SingleGamemodeCode.GDNewSprite2Objects2= [];
gdjs.SingleGamemodeCode.GDNewSprite2Objects3= [];


gdjs.SingleGamemodeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Button") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EasyGamemode"), gdjs.SingleGamemodeCode.GDEasyGamemodeObjects2);
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDEasyGamemodeObjects2.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDEasyGamemodeObjects2[i].Activate(true, null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Button");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Button");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Button") < 2;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SingleGamemode", false);
}
}

}


};gdjs.SingleGamemodeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


};gdjs.SingleGamemodeCode.eventsList2 = function(runtimeScene) {

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


};gdjs.SingleGamemodeCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EasyHighestScore3"), gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects1);
gdjs.copyArray(runtimeScene.getObjects("HellHighestScore2"), gdjs.SingleGamemodeCode.GDHellHighestScore2Objects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("SaveData", "EasyHighestScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(17));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("SaveData", "HellHighestScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(18));
}
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects1[i].getBehavior("Text").setText("Easy Highest Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17))));
}
}
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDHellHighestScore2Objects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDHellHighestScore2Objects1[i].getBehavior("Text").setText("Insane Highest Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Button");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}

{ //Subevents
gdjs.SingleGamemodeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13439428);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.SingleGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.SingleGamemodeCode.GDRedBlockObjects1[i].getAngle() + (90));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13440268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.SingleGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.SingleGamemodeCode.GDRedBlockObjects1[i].getAngle() - (90));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13441268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.SingleGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.SingleGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (90));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13441820);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.SingleGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.SingleGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EasyGamemode"), gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1.length;i<l;++i) {
    if ( gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1[k] = gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1[i];
        ++k;
    }
}
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyGamemode", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InsaneGamemode"), gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1.length;i<l;++i) {
    if ( gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1[k] = gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1[i];
        ++k;
    }
}
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HellGamemode", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SingleGamemodeCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SingleGamemodeCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.SingleGamemodeCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SingleGamemodeCode.GDBackObjects1[k] = gdjs.SingleGamemodeCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.SingleGamemodeCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13444860);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}

{ //Subevents
gdjs.SingleGamemodeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13446636);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}

{ //Subevents
gdjs.SingleGamemodeCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EasyGamemode"), gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SingleGamemodeCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDNewSprite2Objects1[i].setX((( gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1.length === 0 ) ? 0 :gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDNewSprite2Objects1[i].setY((( gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1.length === 0 ) ? 0 :gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InsaneGamemode"), gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SingleGamemodeCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDNewSprite2Objects1[i].setX((( gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1.length === 0 ) ? 0 :gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDNewSprite2Objects1[i].setY((( gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1.length === 0 ) ? 0 :gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SingleGamemodeCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SingleGamemodeCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDNewSprite2Objects1[i].setX((( gdjs.SingleGamemodeCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.SingleGamemodeCode.GDBackObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.SingleGamemodeCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SingleGamemodeCode.GDNewSprite2Objects1[i].setY((( gdjs.SingleGamemodeCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.SingleGamemodeCode.GDBackObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Button") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13453444);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyGamemode", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13454692);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Button") >= 2;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HellGamemode", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13455940);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Button") >= 2;
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
{
}

}


};

gdjs.SingleGamemodeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1.length = 0;
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects2.length = 0;
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects3.length = 0;
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1.length = 0;
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects2.length = 0;
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects3.length = 0;
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects1.length = 0;
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects2.length = 0;
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects3.length = 0;
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects1.length = 0;
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects2.length = 0;
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects3.length = 0;
gdjs.SingleGamemodeCode.GDBlueBlockObjects1.length = 0;
gdjs.SingleGamemodeCode.GDBlueBlockObjects2.length = 0;
gdjs.SingleGamemodeCode.GDBlueBlockObjects3.length = 0;
gdjs.SingleGamemodeCode.GDGroundObjects1.length = 0;
gdjs.SingleGamemodeCode.GDGroundObjects2.length = 0;
gdjs.SingleGamemodeCode.GDGroundObjects3.length = 0;
gdjs.SingleGamemodeCode.GDScoreTextObjects1.length = 0;
gdjs.SingleGamemodeCode.GDScoreTextObjects2.length = 0;
gdjs.SingleGamemodeCode.GDScoreTextObjects3.length = 0;
gdjs.SingleGamemodeCode.GDRedBlockObjects1.length = 0;
gdjs.SingleGamemodeCode.GDRedBlockObjects2.length = 0;
gdjs.SingleGamemodeCode.GDRedBlockObjects3.length = 0;
gdjs.SingleGamemodeCode.GDNewSpriteObjects1.length = 0;
gdjs.SingleGamemodeCode.GDNewSpriteObjects2.length = 0;
gdjs.SingleGamemodeCode.GDNewSpriteObjects3.length = 0;
gdjs.SingleGamemodeCode.GDLeftObjects1.length = 0;
gdjs.SingleGamemodeCode.GDLeftObjects2.length = 0;
gdjs.SingleGamemodeCode.GDLeftObjects3.length = 0;
gdjs.SingleGamemodeCode.GDAObjects1.length = 0;
gdjs.SingleGamemodeCode.GDAObjects2.length = 0;
gdjs.SingleGamemodeCode.GDAObjects3.length = 0;
gdjs.SingleGamemodeCode.GDDObjects1.length = 0;
gdjs.SingleGamemodeCode.GDDObjects2.length = 0;
gdjs.SingleGamemodeCode.GDDObjects3.length = 0;
gdjs.SingleGamemodeCode.GDorObjects1.length = 0;
gdjs.SingleGamemodeCode.GDorObjects2.length = 0;
gdjs.SingleGamemodeCode.GDorObjects3.length = 0;
gdjs.SingleGamemodeCode.GDCorrectObjects1.length = 0;
gdjs.SingleGamemodeCode.GDCorrectObjects2.length = 0;
gdjs.SingleGamemodeCode.GDCorrectObjects3.length = 0;
gdjs.SingleGamemodeCode.GDWrongObjects1.length = 0;
gdjs.SingleGamemodeCode.GDWrongObjects2.length = 0;
gdjs.SingleGamemodeCode.GDWrongObjects3.length = 0;
gdjs.SingleGamemodeCode.GDBackObjects1.length = 0;
gdjs.SingleGamemodeCode.GDBackObjects2.length = 0;
gdjs.SingleGamemodeCode.GDBackObjects3.length = 0;
gdjs.SingleGamemodeCode.GDNewSprite2Objects1.length = 0;
gdjs.SingleGamemodeCode.GDNewSprite2Objects2.length = 0;
gdjs.SingleGamemodeCode.GDNewSprite2Objects3.length = 0;

gdjs.SingleGamemodeCode.eventsList3(runtimeScene);
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects1.length = 0;
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects2.length = 0;
gdjs.SingleGamemodeCode.GDInsaneGamemodeObjects3.length = 0;
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects1.length = 0;
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects2.length = 0;
gdjs.SingleGamemodeCode.GDEasyGamemodeObjects3.length = 0;
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects1.length = 0;
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects2.length = 0;
gdjs.SingleGamemodeCode.GDEasyHighestScore3Objects3.length = 0;
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects1.length = 0;
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects2.length = 0;
gdjs.SingleGamemodeCode.GDHellHighestScore2Objects3.length = 0;
gdjs.SingleGamemodeCode.GDBlueBlockObjects1.length = 0;
gdjs.SingleGamemodeCode.GDBlueBlockObjects2.length = 0;
gdjs.SingleGamemodeCode.GDBlueBlockObjects3.length = 0;
gdjs.SingleGamemodeCode.GDGroundObjects1.length = 0;
gdjs.SingleGamemodeCode.GDGroundObjects2.length = 0;
gdjs.SingleGamemodeCode.GDGroundObjects3.length = 0;
gdjs.SingleGamemodeCode.GDScoreTextObjects1.length = 0;
gdjs.SingleGamemodeCode.GDScoreTextObjects2.length = 0;
gdjs.SingleGamemodeCode.GDScoreTextObjects3.length = 0;
gdjs.SingleGamemodeCode.GDRedBlockObjects1.length = 0;
gdjs.SingleGamemodeCode.GDRedBlockObjects2.length = 0;
gdjs.SingleGamemodeCode.GDRedBlockObjects3.length = 0;
gdjs.SingleGamemodeCode.GDNewSpriteObjects1.length = 0;
gdjs.SingleGamemodeCode.GDNewSpriteObjects2.length = 0;
gdjs.SingleGamemodeCode.GDNewSpriteObjects3.length = 0;
gdjs.SingleGamemodeCode.GDLeftObjects1.length = 0;
gdjs.SingleGamemodeCode.GDLeftObjects2.length = 0;
gdjs.SingleGamemodeCode.GDLeftObjects3.length = 0;
gdjs.SingleGamemodeCode.GDAObjects1.length = 0;
gdjs.SingleGamemodeCode.GDAObjects2.length = 0;
gdjs.SingleGamemodeCode.GDAObjects3.length = 0;
gdjs.SingleGamemodeCode.GDDObjects1.length = 0;
gdjs.SingleGamemodeCode.GDDObjects2.length = 0;
gdjs.SingleGamemodeCode.GDDObjects3.length = 0;
gdjs.SingleGamemodeCode.GDorObjects1.length = 0;
gdjs.SingleGamemodeCode.GDorObjects2.length = 0;
gdjs.SingleGamemodeCode.GDorObjects3.length = 0;
gdjs.SingleGamemodeCode.GDCorrectObjects1.length = 0;
gdjs.SingleGamemodeCode.GDCorrectObjects2.length = 0;
gdjs.SingleGamemodeCode.GDCorrectObjects3.length = 0;
gdjs.SingleGamemodeCode.GDWrongObjects1.length = 0;
gdjs.SingleGamemodeCode.GDWrongObjects2.length = 0;
gdjs.SingleGamemodeCode.GDWrongObjects3.length = 0;
gdjs.SingleGamemodeCode.GDBackObjects1.length = 0;
gdjs.SingleGamemodeCode.GDBackObjects2.length = 0;
gdjs.SingleGamemodeCode.GDBackObjects3.length = 0;
gdjs.SingleGamemodeCode.GDNewSprite2Objects1.length = 0;
gdjs.SingleGamemodeCode.GDNewSprite2Objects2.length = 0;
gdjs.SingleGamemodeCode.GDNewSprite2Objects3.length = 0;


return;

}

gdjs['SingleGamemodeCode'] = gdjs.SingleGamemodeCode;
