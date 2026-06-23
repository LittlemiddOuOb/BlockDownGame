gdjs.RewardCode = {};
gdjs.RewardCode.localVariables = [];
gdjs.RewardCode.idToCallbackMap = new Map();
gdjs.RewardCode.GDDuo_9595PlaymodeObjects1= [];
gdjs.RewardCode.GDDuo_9595PlaymodeObjects2= [];
gdjs.RewardCode.GDSingle_9595PlaymodeObjects1= [];
gdjs.RewardCode.GDSingle_9595PlaymodeObjects2= [];
gdjs.RewardCode.GDHighestScore2Objects1= [];
gdjs.RewardCode.GDHighestScore2Objects2= [];
gdjs.RewardCode.GDSettingObjects1= [];
gdjs.RewardCode.GDSettingObjects2= [];
gdjs.RewardCode.GDBlueBlockReward1Objects1= [];
gdjs.RewardCode.GDBlueBlockReward1Objects2= [];
gdjs.RewardCode.GDRedBlockReward2Objects1= [];
gdjs.RewardCode.GDRedBlockReward2Objects2= [];
gdjs.RewardCode.GDReward1Objects1= [];
gdjs.RewardCode.GDReward1Objects2= [];
gdjs.RewardCode.GDReward2Objects1= [];
gdjs.RewardCode.GDReward2Objects2= [];
gdjs.RewardCode.GDBlueBlockReward2Objects1= [];
gdjs.RewardCode.GDBlueBlockReward2Objects2= [];
gdjs.RewardCode.GDBlueBlockObjects1= [];
gdjs.RewardCode.GDBlueBlockObjects2= [];
gdjs.RewardCode.GDGroundObjects1= [];
gdjs.RewardCode.GDGroundObjects2= [];
gdjs.RewardCode.GDScoreTextObjects1= [];
gdjs.RewardCode.GDScoreTextObjects2= [];
gdjs.RewardCode.GDRedBlockObjects1= [];
gdjs.RewardCode.GDRedBlockObjects2= [];
gdjs.RewardCode.GDNewSpriteObjects1= [];
gdjs.RewardCode.GDNewSpriteObjects2= [];
gdjs.RewardCode.GDLeftObjects1= [];
gdjs.RewardCode.GDLeftObjects2= [];
gdjs.RewardCode.GDAObjects1= [];
gdjs.RewardCode.GDAObjects2= [];
gdjs.RewardCode.GDDObjects1= [];
gdjs.RewardCode.GDDObjects2= [];
gdjs.RewardCode.GDorObjects1= [];
gdjs.RewardCode.GDorObjects2= [];
gdjs.RewardCode.GDCorrectObjects1= [];
gdjs.RewardCode.GDCorrectObjects2= [];
gdjs.RewardCode.GDWrongObjects1= [];
gdjs.RewardCode.GDWrongObjects2= [];
gdjs.RewardCode.GDBackObjects1= [];
gdjs.RewardCode.GDBackObjects2= [];
gdjs.RewardCode.GDNewSprite2Objects1= [];
gdjs.RewardCode.GDNewSprite2Objects2= [];


gdjs.RewardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.RewardCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.RewardCode.GDNewSprite2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.RewardCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.RewardCode.GDNewSprite2Objects1[i].setX((( gdjs.RewardCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.RewardCode.GDBackObjects1[0].getX()) - 70);
}
}
{for(var i = 0, len = gdjs.RewardCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.RewardCode.GDNewSprite2Objects1[i].setY((( gdjs.RewardCode.GDBackObjects1.length === 0 ) ? 0 :gdjs.RewardCode.GDBackObjects1[0].getY()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() >= 50);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlockReward1"), gdjs.RewardCode.GDBlueBlockReward1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Reward1"), gdjs.RewardCode.GDReward1Objects1);
{for(var i = 0, len = gdjs.RewardCode.GDBlueBlockReward1Objects1.length ;i < len;++i) {
    gdjs.RewardCode.GDBlueBlockReward1Objects1[i].getBehavior("Animation").setAnimationName("blue");
}
}
{for(var i = 0, len = gdjs.RewardCode.GDReward1Objects1.length ;i < len;++i) {
    gdjs.RewardCode.GDReward1Objects1[i].setColor("0;59;255");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() >= 50);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlockReward2"), gdjs.RewardCode.GDBlueBlockReward2Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedBlockReward2"), gdjs.RewardCode.GDRedBlockReward2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Reward2"), gdjs.RewardCode.GDReward2Objects1);
{for(var i = 0, len = gdjs.RewardCode.GDRedBlockReward2Objects1.length ;i < len;++i) {
    gdjs.RewardCode.GDRedBlockReward2Objects1[i].getBehavior("Animation").setAnimationName("assets/NewSprite7");
}
}
{for(var i = 0, len = gdjs.RewardCode.GDReward2Objects1.length ;i < len;++i) {
    gdjs.RewardCode.GDReward2Objects1[i].setColor("252;74;74");
}
}
{for(var i = 0, len = gdjs.RewardCode.GDBlueBlockReward2Objects1.length ;i < len;++i) {
    gdjs.RewardCode.GDBlueBlockReward2Objects1[i].getBehavior("Animation").setAnimationName("blue");
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.RewardCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RewardCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.RewardCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.RewardCode.GDBackObjects1[k] = gdjs.RewardCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.RewardCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};

gdjs.RewardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RewardCode.GDDuo_9595PlaymodeObjects1.length = 0;
gdjs.RewardCode.GDDuo_9595PlaymodeObjects2.length = 0;
gdjs.RewardCode.GDSingle_9595PlaymodeObjects1.length = 0;
gdjs.RewardCode.GDSingle_9595PlaymodeObjects2.length = 0;
gdjs.RewardCode.GDHighestScore2Objects1.length = 0;
gdjs.RewardCode.GDHighestScore2Objects2.length = 0;
gdjs.RewardCode.GDSettingObjects1.length = 0;
gdjs.RewardCode.GDSettingObjects2.length = 0;
gdjs.RewardCode.GDBlueBlockReward1Objects1.length = 0;
gdjs.RewardCode.GDBlueBlockReward1Objects2.length = 0;
gdjs.RewardCode.GDRedBlockReward2Objects1.length = 0;
gdjs.RewardCode.GDRedBlockReward2Objects2.length = 0;
gdjs.RewardCode.GDReward1Objects1.length = 0;
gdjs.RewardCode.GDReward1Objects2.length = 0;
gdjs.RewardCode.GDReward2Objects1.length = 0;
gdjs.RewardCode.GDReward2Objects2.length = 0;
gdjs.RewardCode.GDBlueBlockReward2Objects1.length = 0;
gdjs.RewardCode.GDBlueBlockReward2Objects2.length = 0;
gdjs.RewardCode.GDBlueBlockObjects1.length = 0;
gdjs.RewardCode.GDBlueBlockObjects2.length = 0;
gdjs.RewardCode.GDGroundObjects1.length = 0;
gdjs.RewardCode.GDGroundObjects2.length = 0;
gdjs.RewardCode.GDScoreTextObjects1.length = 0;
gdjs.RewardCode.GDScoreTextObjects2.length = 0;
gdjs.RewardCode.GDRedBlockObjects1.length = 0;
gdjs.RewardCode.GDRedBlockObjects2.length = 0;
gdjs.RewardCode.GDNewSpriteObjects1.length = 0;
gdjs.RewardCode.GDNewSpriteObjects2.length = 0;
gdjs.RewardCode.GDLeftObjects1.length = 0;
gdjs.RewardCode.GDLeftObjects2.length = 0;
gdjs.RewardCode.GDAObjects1.length = 0;
gdjs.RewardCode.GDAObjects2.length = 0;
gdjs.RewardCode.GDDObjects1.length = 0;
gdjs.RewardCode.GDDObjects2.length = 0;
gdjs.RewardCode.GDorObjects1.length = 0;
gdjs.RewardCode.GDorObjects2.length = 0;
gdjs.RewardCode.GDCorrectObjects1.length = 0;
gdjs.RewardCode.GDCorrectObjects2.length = 0;
gdjs.RewardCode.GDWrongObjects1.length = 0;
gdjs.RewardCode.GDWrongObjects2.length = 0;
gdjs.RewardCode.GDBackObjects1.length = 0;
gdjs.RewardCode.GDBackObjects2.length = 0;
gdjs.RewardCode.GDNewSprite2Objects1.length = 0;
gdjs.RewardCode.GDNewSprite2Objects2.length = 0;

gdjs.RewardCode.eventsList0(runtimeScene);
gdjs.RewardCode.GDDuo_9595PlaymodeObjects1.length = 0;
gdjs.RewardCode.GDDuo_9595PlaymodeObjects2.length = 0;
gdjs.RewardCode.GDSingle_9595PlaymodeObjects1.length = 0;
gdjs.RewardCode.GDSingle_9595PlaymodeObjects2.length = 0;
gdjs.RewardCode.GDHighestScore2Objects1.length = 0;
gdjs.RewardCode.GDHighestScore2Objects2.length = 0;
gdjs.RewardCode.GDSettingObjects1.length = 0;
gdjs.RewardCode.GDSettingObjects2.length = 0;
gdjs.RewardCode.GDBlueBlockReward1Objects1.length = 0;
gdjs.RewardCode.GDBlueBlockReward1Objects2.length = 0;
gdjs.RewardCode.GDRedBlockReward2Objects1.length = 0;
gdjs.RewardCode.GDRedBlockReward2Objects2.length = 0;
gdjs.RewardCode.GDReward1Objects1.length = 0;
gdjs.RewardCode.GDReward1Objects2.length = 0;
gdjs.RewardCode.GDReward2Objects1.length = 0;
gdjs.RewardCode.GDReward2Objects2.length = 0;
gdjs.RewardCode.GDBlueBlockReward2Objects1.length = 0;
gdjs.RewardCode.GDBlueBlockReward2Objects2.length = 0;
gdjs.RewardCode.GDBlueBlockObjects1.length = 0;
gdjs.RewardCode.GDBlueBlockObjects2.length = 0;
gdjs.RewardCode.GDGroundObjects1.length = 0;
gdjs.RewardCode.GDGroundObjects2.length = 0;
gdjs.RewardCode.GDScoreTextObjects1.length = 0;
gdjs.RewardCode.GDScoreTextObjects2.length = 0;
gdjs.RewardCode.GDRedBlockObjects1.length = 0;
gdjs.RewardCode.GDRedBlockObjects2.length = 0;
gdjs.RewardCode.GDNewSpriteObjects1.length = 0;
gdjs.RewardCode.GDNewSpriteObjects2.length = 0;
gdjs.RewardCode.GDLeftObjects1.length = 0;
gdjs.RewardCode.GDLeftObjects2.length = 0;
gdjs.RewardCode.GDAObjects1.length = 0;
gdjs.RewardCode.GDAObjects2.length = 0;
gdjs.RewardCode.GDDObjects1.length = 0;
gdjs.RewardCode.GDDObjects2.length = 0;
gdjs.RewardCode.GDorObjects1.length = 0;
gdjs.RewardCode.GDorObjects2.length = 0;
gdjs.RewardCode.GDCorrectObjects1.length = 0;
gdjs.RewardCode.GDCorrectObjects2.length = 0;
gdjs.RewardCode.GDWrongObjects1.length = 0;
gdjs.RewardCode.GDWrongObjects2.length = 0;
gdjs.RewardCode.GDBackObjects1.length = 0;
gdjs.RewardCode.GDBackObjects2.length = 0;
gdjs.RewardCode.GDNewSprite2Objects1.length = 0;
gdjs.RewardCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['RewardCode'] = gdjs.RewardCode;
