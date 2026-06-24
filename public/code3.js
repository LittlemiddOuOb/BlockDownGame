gdjs.EasyGamemodeCode = {};
gdjs.EasyGamemodeCode.localVariables = [];
gdjs.EasyGamemodeCode.idToCallbackMap = new Map();
gdjs.EasyGamemodeCode.GDBlueBlockObjects1= [];
gdjs.EasyGamemodeCode.GDBlueBlockObjects2= [];
gdjs.EasyGamemodeCode.GDBlueBlockObjects3= [];
gdjs.EasyGamemodeCode.GDGroundObjects1= [];
gdjs.EasyGamemodeCode.GDGroundObjects2= [];
gdjs.EasyGamemodeCode.GDGroundObjects3= [];
gdjs.EasyGamemodeCode.GDScoreTextObjects1= [];
gdjs.EasyGamemodeCode.GDScoreTextObjects2= [];
gdjs.EasyGamemodeCode.GDScoreTextObjects3= [];
gdjs.EasyGamemodeCode.GDRedBlockObjects1= [];
gdjs.EasyGamemodeCode.GDRedBlockObjects2= [];
gdjs.EasyGamemodeCode.GDRedBlockObjects3= [];
gdjs.EasyGamemodeCode.GDNewSpriteObjects1= [];
gdjs.EasyGamemodeCode.GDNewSpriteObjects2= [];
gdjs.EasyGamemodeCode.GDNewSpriteObjects3= [];
gdjs.EasyGamemodeCode.GDLeftObjects1= [];
gdjs.EasyGamemodeCode.GDLeftObjects2= [];
gdjs.EasyGamemodeCode.GDLeftObjects3= [];
gdjs.EasyGamemodeCode.GDAObjects1= [];
gdjs.EasyGamemodeCode.GDAObjects2= [];
gdjs.EasyGamemodeCode.GDAObjects3= [];
gdjs.EasyGamemodeCode.GDDObjects1= [];
gdjs.EasyGamemodeCode.GDDObjects2= [];
gdjs.EasyGamemodeCode.GDDObjects3= [];
gdjs.EasyGamemodeCode.GDorObjects1= [];
gdjs.EasyGamemodeCode.GDorObjects2= [];
gdjs.EasyGamemodeCode.GDorObjects3= [];
gdjs.EasyGamemodeCode.GDCorrectObjects1= [];
gdjs.EasyGamemodeCode.GDCorrectObjects2= [];
gdjs.EasyGamemodeCode.GDCorrectObjects3= [];
gdjs.EasyGamemodeCode.GDWrongObjects1= [];
gdjs.EasyGamemodeCode.GDWrongObjects2= [];
gdjs.EasyGamemodeCode.GDWrongObjects3= [];
gdjs.EasyGamemodeCode.GDBackObjects1= [];
gdjs.EasyGamemodeCode.GDBackObjects2= [];
gdjs.EasyGamemodeCode.GDBackObjects3= [];
gdjs.EasyGamemodeCode.GDNewSprite2Objects1= [];
gdjs.EasyGamemodeCode.GDNewSprite2Objects2= [];
gdjs.EasyGamemodeCode.GDNewSprite2Objects3= [];


gdjs.EasyGamemodeCode.mapOfGDgdjs_9546EasyGamemodeCode_9546GDBlueBlockObjects1Objects = Hashtable.newFrom({"BlueBlock": gdjs.EasyGamemodeCode.GDBlueBlockObjects1});
gdjs.EasyGamemodeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 3);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).div(1.75);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 10);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).mul(1.15);
}
}

}


};gdjs.EasyGamemodeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 5454545);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}

{ //Subevents
gdjs.EasyGamemodeCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.EasyGamemodeCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects1[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.EasyGamemodeCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects1[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.EasyGamemodeCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects1[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.EasyGamemodeCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects1[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.EasyGamemodeCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects1[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.EasyGamemodeCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects1[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.EasyGamemodeCode.mapOfGDgdjs_9546EasyGamemodeCode_9546GDBlueBlockObjects1Objects = Hashtable.newFrom({"BlueBlock": gdjs.EasyGamemodeCode.GDBlueBlockObjects1});
gdjs.EasyGamemodeCode.mapOfGDgdjs_9546EasyGamemodeCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.EasyGamemodeCode.GDGroundObjects1});
gdjs.EasyGamemodeCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.EasyGamemodeCode.GDBlueBlockObjects1, gdjs.EasyGamemodeCode.GDBlueBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects2.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects2[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects2[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.EasyGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(11).add(1);
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11))));
}
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects2.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
}

}


{

gdjs.copyArray(gdjs.EasyGamemodeCode.GDBlueBlockObjects1, gdjs.EasyGamemodeCode.GDBlueBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects2.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects2[i].getAngle() == 360 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects2[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects2[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.EasyGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(11).add(1);
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11))));
}
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects2.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
}

}


{

/* Reuse gdjs.EasyGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects1[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() != 360 ) {
        isConditionTrue_0 = true;
        gdjs.EasyGamemodeCode.GDBlueBlockObjects1[k] = gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)));
}
}

}


};gdjs.EasyGamemodeCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawner");
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(6);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BlockSpawner");
}
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(23).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(24).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BlockSpawner") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BlockSpawner");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.EasyGamemodeCode.mapOfGDgdjs_9546EasyGamemodeCode_9546GDBlueBlockObjects1Objects, gdjs.randomInRange(50, 750), -(50), "");
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.randomInRange(0, 3) * 90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}

{ //Subevents
gdjs.EasyGamemodeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawner") >= 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber() < 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.EasyGamemodeCode.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.EasyGamemodeCode.GDCorrectObjects1);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.EasyGamemodeCode.GDDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.EasyGamemodeCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong"), gdjs.EasyGamemodeCode.GDWrongObjects1);
gdjs.copyArray(runtimeScene.getObjects("or"), gdjs.EasyGamemodeCode.GDorObjects1);
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "spawner");
}
{runtimeScene.getGame().getVariables().getFromIndex(21).add(1);
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDLeftObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDAObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDAObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDDObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDDObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDorObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDorObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDCorrectObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDWrongObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDWrongObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13575964);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.EasyGamemodeCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13577284);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.EasyGamemodeCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13578740);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.EasyGamemodeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13580180);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.EasyGamemodeCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13581564);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.EasyGamemodeCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13582708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.EasyGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.EasyGamemodeCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.EasyGamemodeCode.GDBlueBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.EasyGamemodeCode.GDGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EasyGamemodeCode.mapOfGDgdjs_9546EasyGamemodeCode_9546GDBlueBlockObjects1Objects, gdjs.EasyGamemodeCode.mapOfGDgdjs_9546EasyGamemodeCode_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EasyGamemodeCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() >= 50);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(1);
}
}

}


};

gdjs.EasyGamemodeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = 0;
gdjs.EasyGamemodeCode.GDBlueBlockObjects2.length = 0;
gdjs.EasyGamemodeCode.GDBlueBlockObjects3.length = 0;
gdjs.EasyGamemodeCode.GDGroundObjects1.length = 0;
gdjs.EasyGamemodeCode.GDGroundObjects2.length = 0;
gdjs.EasyGamemodeCode.GDGroundObjects3.length = 0;
gdjs.EasyGamemodeCode.GDScoreTextObjects1.length = 0;
gdjs.EasyGamemodeCode.GDScoreTextObjects2.length = 0;
gdjs.EasyGamemodeCode.GDScoreTextObjects3.length = 0;
gdjs.EasyGamemodeCode.GDRedBlockObjects1.length = 0;
gdjs.EasyGamemodeCode.GDRedBlockObjects2.length = 0;
gdjs.EasyGamemodeCode.GDRedBlockObjects3.length = 0;
gdjs.EasyGamemodeCode.GDNewSpriteObjects1.length = 0;
gdjs.EasyGamemodeCode.GDNewSpriteObjects2.length = 0;
gdjs.EasyGamemodeCode.GDNewSpriteObjects3.length = 0;
gdjs.EasyGamemodeCode.GDLeftObjects1.length = 0;
gdjs.EasyGamemodeCode.GDLeftObjects2.length = 0;
gdjs.EasyGamemodeCode.GDLeftObjects3.length = 0;
gdjs.EasyGamemodeCode.GDAObjects1.length = 0;
gdjs.EasyGamemodeCode.GDAObjects2.length = 0;
gdjs.EasyGamemodeCode.GDAObjects3.length = 0;
gdjs.EasyGamemodeCode.GDDObjects1.length = 0;
gdjs.EasyGamemodeCode.GDDObjects2.length = 0;
gdjs.EasyGamemodeCode.GDDObjects3.length = 0;
gdjs.EasyGamemodeCode.GDorObjects1.length = 0;
gdjs.EasyGamemodeCode.GDorObjects2.length = 0;
gdjs.EasyGamemodeCode.GDorObjects3.length = 0;
gdjs.EasyGamemodeCode.GDCorrectObjects1.length = 0;
gdjs.EasyGamemodeCode.GDCorrectObjects2.length = 0;
gdjs.EasyGamemodeCode.GDCorrectObjects3.length = 0;
gdjs.EasyGamemodeCode.GDWrongObjects1.length = 0;
gdjs.EasyGamemodeCode.GDWrongObjects2.length = 0;
gdjs.EasyGamemodeCode.GDWrongObjects3.length = 0;
gdjs.EasyGamemodeCode.GDBackObjects1.length = 0;
gdjs.EasyGamemodeCode.GDBackObjects2.length = 0;
gdjs.EasyGamemodeCode.GDBackObjects3.length = 0;
gdjs.EasyGamemodeCode.GDNewSprite2Objects1.length = 0;
gdjs.EasyGamemodeCode.GDNewSprite2Objects2.length = 0;
gdjs.EasyGamemodeCode.GDNewSprite2Objects3.length = 0;

gdjs.EasyGamemodeCode.eventsList9(runtimeScene);
gdjs.EasyGamemodeCode.GDBlueBlockObjects1.length = 0;
gdjs.EasyGamemodeCode.GDBlueBlockObjects2.length = 0;
gdjs.EasyGamemodeCode.GDBlueBlockObjects3.length = 0;
gdjs.EasyGamemodeCode.GDGroundObjects1.length = 0;
gdjs.EasyGamemodeCode.GDGroundObjects2.length = 0;
gdjs.EasyGamemodeCode.GDGroundObjects3.length = 0;
gdjs.EasyGamemodeCode.GDScoreTextObjects1.length = 0;
gdjs.EasyGamemodeCode.GDScoreTextObjects2.length = 0;
gdjs.EasyGamemodeCode.GDScoreTextObjects3.length = 0;
gdjs.EasyGamemodeCode.GDRedBlockObjects1.length = 0;
gdjs.EasyGamemodeCode.GDRedBlockObjects2.length = 0;
gdjs.EasyGamemodeCode.GDRedBlockObjects3.length = 0;
gdjs.EasyGamemodeCode.GDNewSpriteObjects1.length = 0;
gdjs.EasyGamemodeCode.GDNewSpriteObjects2.length = 0;
gdjs.EasyGamemodeCode.GDNewSpriteObjects3.length = 0;
gdjs.EasyGamemodeCode.GDLeftObjects1.length = 0;
gdjs.EasyGamemodeCode.GDLeftObjects2.length = 0;
gdjs.EasyGamemodeCode.GDLeftObjects3.length = 0;
gdjs.EasyGamemodeCode.GDAObjects1.length = 0;
gdjs.EasyGamemodeCode.GDAObjects2.length = 0;
gdjs.EasyGamemodeCode.GDAObjects3.length = 0;
gdjs.EasyGamemodeCode.GDDObjects1.length = 0;
gdjs.EasyGamemodeCode.GDDObjects2.length = 0;
gdjs.EasyGamemodeCode.GDDObjects3.length = 0;
gdjs.EasyGamemodeCode.GDorObjects1.length = 0;
gdjs.EasyGamemodeCode.GDorObjects2.length = 0;
gdjs.EasyGamemodeCode.GDorObjects3.length = 0;
gdjs.EasyGamemodeCode.GDCorrectObjects1.length = 0;
gdjs.EasyGamemodeCode.GDCorrectObjects2.length = 0;
gdjs.EasyGamemodeCode.GDCorrectObjects3.length = 0;
gdjs.EasyGamemodeCode.GDWrongObjects1.length = 0;
gdjs.EasyGamemodeCode.GDWrongObjects2.length = 0;
gdjs.EasyGamemodeCode.GDWrongObjects3.length = 0;
gdjs.EasyGamemodeCode.GDBackObjects1.length = 0;
gdjs.EasyGamemodeCode.GDBackObjects2.length = 0;
gdjs.EasyGamemodeCode.GDBackObjects3.length = 0;
gdjs.EasyGamemodeCode.GDNewSprite2Objects1.length = 0;
gdjs.EasyGamemodeCode.GDNewSprite2Objects2.length = 0;
gdjs.EasyGamemodeCode.GDNewSprite2Objects3.length = 0;


return;

}

gdjs['EasyGamemodeCode'] = gdjs.EasyGamemodeCode;
