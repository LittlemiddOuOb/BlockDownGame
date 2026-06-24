gdjs.DuoGamemodeMenuCode = {};
gdjs.DuoGamemodeMenuCode.localVariables = [];
gdjs.DuoGamemodeMenuCode.idToCallbackMap = new Map();
gdjs.DuoGamemodeMenuCode.GDInsaneGamemodeObjects1= [];
gdjs.DuoGamemodeMenuCode.GDInsaneGamemodeObjects2= [];
gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1= [];
gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects2= [];
gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects1= [];
gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects2= [];
gdjs.DuoGamemodeMenuCode.GDBackObjects1= [];
gdjs.DuoGamemodeMenuCode.GDBackObjects2= [];
gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1= [];
gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects2= [];
gdjs.DuoGamemodeMenuCode.GDGroundObjects1= [];
gdjs.DuoGamemodeMenuCode.GDGroundObjects2= [];
gdjs.DuoGamemodeMenuCode.GDScoreTextObjects1= [];
gdjs.DuoGamemodeMenuCode.GDScoreTextObjects2= [];
gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1= [];
gdjs.DuoGamemodeMenuCode.GDRedBlockObjects2= [];
gdjs.DuoGamemodeMenuCode.GDNewSpriteObjects1= [];
gdjs.DuoGamemodeMenuCode.GDNewSpriteObjects2= [];
gdjs.DuoGamemodeMenuCode.GDLeftObjects1= [];
gdjs.DuoGamemodeMenuCode.GDLeftObjects2= [];
gdjs.DuoGamemodeMenuCode.GDAObjects1= [];
gdjs.DuoGamemodeMenuCode.GDAObjects2= [];
gdjs.DuoGamemodeMenuCode.GDDObjects1= [];
gdjs.DuoGamemodeMenuCode.GDDObjects2= [];
gdjs.DuoGamemodeMenuCode.GDorObjects1= [];
gdjs.DuoGamemodeMenuCode.GDorObjects2= [];
gdjs.DuoGamemodeMenuCode.GDCorrectObjects1= [];
gdjs.DuoGamemodeMenuCode.GDCorrectObjects2= [];
gdjs.DuoGamemodeMenuCode.GDWrongObjects1= [];
gdjs.DuoGamemodeMenuCode.GDWrongObjects2= [];
gdjs.DuoGamemodeMenuCode.GDBackObjects1= [];
gdjs.DuoGamemodeMenuCode.GDBackObjects2= [];
gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1= [];
gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects2= [];


gdjs.DuoGamemodeMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


};gdjs.DuoGamemodeMenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


};gdjs.DuoGamemodeMenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighestScore2"), gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("SaveData", "DuoHighestScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(17));
}
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects1[i].getBehavior("Text").setText("Highest Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(20).getChild("DuoHighestScore"))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "button");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13691580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1[i].getAngle() + (90));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13692476);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1[i].getAngle() - (90));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13693340);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1[i].getAngle() - (90));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13686268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NormalGamemode"), gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1[k] = gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DuoGamemode", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DuoGamemodeMenuCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeMenuCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeMenuCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeMenuCode.GDBackObjects1[k] = gdjs.DuoGamemodeMenuCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeMenuCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13695748);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}

{ //Subevents
gdjs.DuoGamemodeMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13697404);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}

{ //Subevents
gdjs.DuoGamemodeMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NormalGamemode"), gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1[i].setX((( gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1.length === 0 ) ? 0 :gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1[i].setY((( gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1.length === 0 ) ? 0 :gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1[0].getY()));
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
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DuoGamemodeMenuCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1[i].setX((( gdjs.DuoGamemodeMenuCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.DuoGamemodeMenuCode.GDBackObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1[i].setY((( gdjs.DuoGamemodeMenuCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.DuoGamemodeMenuCode.GDBackObjects1[0].getY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
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
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13701676);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DuoGamemode", false);
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "button") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13703220);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};

gdjs.DuoGamemodeMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DuoGamemodeMenuCode.GDInsaneGamemodeObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDInsaneGamemodeObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDBackObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDBackObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDGroundObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDGroundObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDScoreTextObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDScoreTextObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDRedBlockObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDLeftObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDLeftObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDAObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDAObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDDObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDDObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDorObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDorObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDCorrectObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDCorrectObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDWrongObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDWrongObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDBackObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDBackObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects2.length = 0;

gdjs.DuoGamemodeMenuCode.eventsList2(runtimeScene);
gdjs.DuoGamemodeMenuCode.GDInsaneGamemodeObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDInsaneGamemodeObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDNormalGamemodeObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDHighestScore2Objects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDBackObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDBackObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDBlueBlockObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDGroundObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDGroundObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDScoreTextObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDScoreTextObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDRedBlockObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDRedBlockObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDLeftObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDLeftObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDAObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDAObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDDObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDDObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDorObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDorObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDCorrectObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDCorrectObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDWrongObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDWrongObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDBackObjects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDBackObjects2.length = 0;
gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.DuoGamemodeMenuCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['DuoGamemodeMenuCode'] = gdjs.DuoGamemodeMenuCode;
