gdjs.HellGamemodeCode = {};
gdjs.HellGamemodeCode.localVariables = [];
gdjs.HellGamemodeCode.idToCallbackMap = new Map();
gdjs.HellGamemodeCode.GDBlueBlockObjects1= [];
gdjs.HellGamemodeCode.GDBlueBlockObjects2= [];
gdjs.HellGamemodeCode.GDBlueBlockObjects3= [];
gdjs.HellGamemodeCode.GDGroundObjects1= [];
gdjs.HellGamemodeCode.GDGroundObjects2= [];
gdjs.HellGamemodeCode.GDGroundObjects3= [];
gdjs.HellGamemodeCode.GDScoreTextObjects1= [];
gdjs.HellGamemodeCode.GDScoreTextObjects2= [];
gdjs.HellGamemodeCode.GDScoreTextObjects3= [];
gdjs.HellGamemodeCode.GDRedBlockObjects1= [];
gdjs.HellGamemodeCode.GDRedBlockObjects2= [];
gdjs.HellGamemodeCode.GDRedBlockObjects3= [];
gdjs.HellGamemodeCode.GDNewSpriteObjects1= [];
gdjs.HellGamemodeCode.GDNewSpriteObjects2= [];
gdjs.HellGamemodeCode.GDNewSpriteObjects3= [];
gdjs.HellGamemodeCode.GDLeftObjects1= [];
gdjs.HellGamemodeCode.GDLeftObjects2= [];
gdjs.HellGamemodeCode.GDLeftObjects3= [];
gdjs.HellGamemodeCode.GDAObjects1= [];
gdjs.HellGamemodeCode.GDAObjects2= [];
gdjs.HellGamemodeCode.GDAObjects3= [];
gdjs.HellGamemodeCode.GDDObjects1= [];
gdjs.HellGamemodeCode.GDDObjects2= [];
gdjs.HellGamemodeCode.GDDObjects3= [];
gdjs.HellGamemodeCode.GDorObjects1= [];
gdjs.HellGamemodeCode.GDorObjects2= [];
gdjs.HellGamemodeCode.GDorObjects3= [];
gdjs.HellGamemodeCode.GDCorrectObjects1= [];
gdjs.HellGamemodeCode.GDCorrectObjects2= [];
gdjs.HellGamemodeCode.GDCorrectObjects3= [];
gdjs.HellGamemodeCode.GDWrongObjects1= [];
gdjs.HellGamemodeCode.GDWrongObjects2= [];
gdjs.HellGamemodeCode.GDWrongObjects3= [];
gdjs.HellGamemodeCode.GDBackObjects1= [];
gdjs.HellGamemodeCode.GDBackObjects2= [];
gdjs.HellGamemodeCode.GDBackObjects3= [];
gdjs.HellGamemodeCode.GDNewSprite2Objects1= [];
gdjs.HellGamemodeCode.GDNewSprite2Objects2= [];
gdjs.HellGamemodeCode.GDNewSprite2Objects3= [];


gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDBlueBlockObjects1Objects = Hashtable.newFrom({"BlueBlock": gdjs.HellGamemodeCode.GDBlueBlockObjects1});
gdjs.HellGamemodeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 4);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).div(1.2);
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
{runtimeScene.getGame().getVariables().getFromIndex(0).mul(1.2);
}
}

}


};gdjs.HellGamemodeCode.eventsList1 = function(runtimeScene) {

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
gdjs.HellGamemodeCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDRedBlockObjects1Objects = Hashtable.newFrom({"RedBlock": gdjs.HellGamemodeCode.GDRedBlockObjects1});
gdjs.HellGamemodeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 4);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).div(1.2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 10);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).mul(1.2);
}
}

}


};gdjs.HellGamemodeCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 5454545);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.HellGamemodeCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDBlueBlockObjects1[k] = gdjs.HellGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.HellGamemodeCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDBlueBlockObjects1[k] = gdjs.HellGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.HellGamemodeCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDBlueBlockObjects1[k] = gdjs.HellGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.HellGamemodeCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDBlueBlockObjects1[k] = gdjs.HellGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDBlueBlockObjects1Objects = Hashtable.newFrom({"BlueBlock": gdjs.HellGamemodeCode.GDBlueBlockObjects1});
gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.HellGamemodeCode.GDGroundObjects1});
gdjs.HellGamemodeCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.HellGamemodeCode.GDBlueBlockObjects1, gdjs.HellGamemodeCode.GDBlueBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDBlueBlockObjects2.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDBlueBlockObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDBlueBlockObjects2[k] = gdjs.HellGamemodeCode.GDBlueBlockObjects2[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDBlueBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.HellGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(12).add(1);
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12))));
}
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects2.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
}

}


{

gdjs.copyArray(gdjs.HellGamemodeCode.GDBlueBlockObjects1, gdjs.HellGamemodeCode.GDBlueBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDBlueBlockObjects2.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDBlueBlockObjects2[i].getAngle() == 360 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDBlueBlockObjects2[k] = gdjs.HellGamemodeCode.GDBlueBlockObjects2[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDBlueBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDBlueBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.HellGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(12).add(1);
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12))));
}
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects2.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
}

}


{

gdjs.copyArray(gdjs.HellGamemodeCode.GDBlueBlockObjects1, gdjs.HellGamemodeCode.GDBlueBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDBlueBlockObjects2.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDBlueBlockObjects2[i].getAngle() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDBlueBlockObjects2[k] = gdjs.HellGamemodeCode.GDBlueBlockObjects2[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDBlueBlockObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDBlueBlockObjects2.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDBlueBlockObjects2[i].getAngle() != 360 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDBlueBlockObjects2[k] = gdjs.HellGamemodeCode.GDBlueBlockObjects2[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDBlueBlockObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() >= 30);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(22).add(1);
}
}

}


};gdjs.HellGamemodeCode.eventsList9 = function(runtimeScene) {

{

/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDRedBlockObjects1[k] = gdjs.HellGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects1 */
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.HellGamemodeCode.eventsList10 = function(runtimeScene) {

{

/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDRedBlockObjects1[k] = gdjs.HellGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects1 */
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.HellGamemodeCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDRedBlockObjects1[k] = gdjs.HellGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects1 */
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.HellGamemodeCode.eventsList12 = function(runtimeScene) {

{

/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDRedBlockObjects1[k] = gdjs.HellGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects1 */
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDRedBlockObjects1Objects = Hashtable.newFrom({"RedBlock": gdjs.HellGamemodeCode.GDRedBlockObjects1});
gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.HellGamemodeCode.GDGroundObjects1});
gdjs.HellGamemodeCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.HellGamemodeCode.GDRedBlockObjects1, gdjs.HellGamemodeCode.GDRedBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDRedBlockObjects2.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDRedBlockObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDRedBlockObjects2[k] = gdjs.HellGamemodeCode.GDRedBlockObjects2[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDRedBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.HellGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(12).add(1);
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12))));
}
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects2.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
}

}


{

gdjs.copyArray(gdjs.HellGamemodeCode.GDRedBlockObjects1, gdjs.HellGamemodeCode.GDRedBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDRedBlockObjects2.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDRedBlockObjects2[i].getAngle() == 360 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDRedBlockObjects2[k] = gdjs.HellGamemodeCode.GDRedBlockObjects2[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDRedBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HellGamemodeCode.GDRedBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.HellGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(12).add(1);
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12))));
}
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects2.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
}

}


{

gdjs.copyArray(gdjs.HellGamemodeCode.GDRedBlockObjects1, gdjs.HellGamemodeCode.GDRedBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDRedBlockObjects2.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDRedBlockObjects2[i].getAngle() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDRedBlockObjects2[k] = gdjs.HellGamemodeCode.GDRedBlockObjects2[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDRedBlockObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HellGamemodeCode.GDRedBlockObjects2.length;i<l;++i) {
    if ( gdjs.HellGamemodeCode.GDRedBlockObjects2[i].getAngle() != 360 ) {
        isConditionTrue_0 = true;
        gdjs.HellGamemodeCode.GDRedBlockObjects2[k] = gdjs.HellGamemodeCode.GDRedBlockObjects2[i];
        ++k;
    }
}
gdjs.HellGamemodeCode.GDRedBlockObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() >= 30);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(22).add(1);
}
}

}


};gdjs.HellGamemodeCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawner");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawner2");
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(5);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BlueBlockSpawner");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RedBlockSpawner");
}
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(23).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(200);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(200);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BlueBlockSpawner") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3));
if (isConditionTrue_0) {
gdjs.HellGamemodeCode.GDBlueBlockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDBlueBlockObjects1Objects, gdjs.randomInRange(50, 750), -(50), "");
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.randomInRange(0, 3) * 90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BlueBlockSpawner");
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RedBlockSpawner") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4));
if (isConditionTrue_0) {
gdjs.HellGamemodeCode.GDRedBlockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDRedBlockObjects1Objects, gdjs.randomInRange(50, 750), -(50), "");
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.randomInRange(0, 3) * 90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RedBlockSpawner");
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.HellGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
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
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.HellGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13616460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.HellGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13617916);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.HellGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13619356);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.HellGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13620740);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.HellGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.HellGamemodeCode.GDBlueBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.HellGamemodeCode.GDGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDBlueBlockObjects1Objects, gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.HellGamemodeCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Right", "Left", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13627164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.HellGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Right", "Right", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13628532);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.HellGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13629972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.HellGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13631356);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.HellGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.HellGamemodeCode.GDRedBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.HellGamemodeCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.HellGamemodeCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.HellGamemodeCode.GDRedBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDRedBlockObjects1Objects, gdjs.HellGamemodeCode.mapOfGDgdjs_9546HellGamemodeCode_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.HellGamemodeCode.eventsList13(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.HellGamemodeCode.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.HellGamemodeCode.GDBlueBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.HellGamemodeCode.GDDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.HellGamemodeCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.HellGamemodeCode.GDRedBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("or"), gdjs.HellGamemodeCode.GDorObjects1);
{for(var i = 0, len = gdjs.HellGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDBlueBlockObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDRedBlockObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "spawner");
}
{runtimeScene.getGame().getVariables().getFromIndex(21).add(1);
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDLeftObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDAObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDAObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDDObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDDObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.HellGamemodeCode.GDorObjects1.length ;i < len;++i) {
    gdjs.HellGamemodeCode.GDorObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};

gdjs.HellGamemodeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HellGamemodeCode.GDBlueBlockObjects1.length = 0;
gdjs.HellGamemodeCode.GDBlueBlockObjects2.length = 0;
gdjs.HellGamemodeCode.GDBlueBlockObjects3.length = 0;
gdjs.HellGamemodeCode.GDGroundObjects1.length = 0;
gdjs.HellGamemodeCode.GDGroundObjects2.length = 0;
gdjs.HellGamemodeCode.GDGroundObjects3.length = 0;
gdjs.HellGamemodeCode.GDScoreTextObjects1.length = 0;
gdjs.HellGamemodeCode.GDScoreTextObjects2.length = 0;
gdjs.HellGamemodeCode.GDScoreTextObjects3.length = 0;
gdjs.HellGamemodeCode.GDRedBlockObjects1.length = 0;
gdjs.HellGamemodeCode.GDRedBlockObjects2.length = 0;
gdjs.HellGamemodeCode.GDRedBlockObjects3.length = 0;
gdjs.HellGamemodeCode.GDNewSpriteObjects1.length = 0;
gdjs.HellGamemodeCode.GDNewSpriteObjects2.length = 0;
gdjs.HellGamemodeCode.GDNewSpriteObjects3.length = 0;
gdjs.HellGamemodeCode.GDLeftObjects1.length = 0;
gdjs.HellGamemodeCode.GDLeftObjects2.length = 0;
gdjs.HellGamemodeCode.GDLeftObjects3.length = 0;
gdjs.HellGamemodeCode.GDAObjects1.length = 0;
gdjs.HellGamemodeCode.GDAObjects2.length = 0;
gdjs.HellGamemodeCode.GDAObjects3.length = 0;
gdjs.HellGamemodeCode.GDDObjects1.length = 0;
gdjs.HellGamemodeCode.GDDObjects2.length = 0;
gdjs.HellGamemodeCode.GDDObjects3.length = 0;
gdjs.HellGamemodeCode.GDorObjects1.length = 0;
gdjs.HellGamemodeCode.GDorObjects2.length = 0;
gdjs.HellGamemodeCode.GDorObjects3.length = 0;
gdjs.HellGamemodeCode.GDCorrectObjects1.length = 0;
gdjs.HellGamemodeCode.GDCorrectObjects2.length = 0;
gdjs.HellGamemodeCode.GDCorrectObjects3.length = 0;
gdjs.HellGamemodeCode.GDWrongObjects1.length = 0;
gdjs.HellGamemodeCode.GDWrongObjects2.length = 0;
gdjs.HellGamemodeCode.GDWrongObjects3.length = 0;
gdjs.HellGamemodeCode.GDBackObjects1.length = 0;
gdjs.HellGamemodeCode.GDBackObjects2.length = 0;
gdjs.HellGamemodeCode.GDBackObjects3.length = 0;
gdjs.HellGamemodeCode.GDNewSprite2Objects1.length = 0;
gdjs.HellGamemodeCode.GDNewSprite2Objects2.length = 0;
gdjs.HellGamemodeCode.GDNewSprite2Objects3.length = 0;

gdjs.HellGamemodeCode.eventsList14(runtimeScene);
gdjs.HellGamemodeCode.GDBlueBlockObjects1.length = 0;
gdjs.HellGamemodeCode.GDBlueBlockObjects2.length = 0;
gdjs.HellGamemodeCode.GDBlueBlockObjects3.length = 0;
gdjs.HellGamemodeCode.GDGroundObjects1.length = 0;
gdjs.HellGamemodeCode.GDGroundObjects2.length = 0;
gdjs.HellGamemodeCode.GDGroundObjects3.length = 0;
gdjs.HellGamemodeCode.GDScoreTextObjects1.length = 0;
gdjs.HellGamemodeCode.GDScoreTextObjects2.length = 0;
gdjs.HellGamemodeCode.GDScoreTextObjects3.length = 0;
gdjs.HellGamemodeCode.GDRedBlockObjects1.length = 0;
gdjs.HellGamemodeCode.GDRedBlockObjects2.length = 0;
gdjs.HellGamemodeCode.GDRedBlockObjects3.length = 0;
gdjs.HellGamemodeCode.GDNewSpriteObjects1.length = 0;
gdjs.HellGamemodeCode.GDNewSpriteObjects2.length = 0;
gdjs.HellGamemodeCode.GDNewSpriteObjects3.length = 0;
gdjs.HellGamemodeCode.GDLeftObjects1.length = 0;
gdjs.HellGamemodeCode.GDLeftObjects2.length = 0;
gdjs.HellGamemodeCode.GDLeftObjects3.length = 0;
gdjs.HellGamemodeCode.GDAObjects1.length = 0;
gdjs.HellGamemodeCode.GDAObjects2.length = 0;
gdjs.HellGamemodeCode.GDAObjects3.length = 0;
gdjs.HellGamemodeCode.GDDObjects1.length = 0;
gdjs.HellGamemodeCode.GDDObjects2.length = 0;
gdjs.HellGamemodeCode.GDDObjects3.length = 0;
gdjs.HellGamemodeCode.GDorObjects1.length = 0;
gdjs.HellGamemodeCode.GDorObjects2.length = 0;
gdjs.HellGamemodeCode.GDorObjects3.length = 0;
gdjs.HellGamemodeCode.GDCorrectObjects1.length = 0;
gdjs.HellGamemodeCode.GDCorrectObjects2.length = 0;
gdjs.HellGamemodeCode.GDCorrectObjects3.length = 0;
gdjs.HellGamemodeCode.GDWrongObjects1.length = 0;
gdjs.HellGamemodeCode.GDWrongObjects2.length = 0;
gdjs.HellGamemodeCode.GDWrongObjects3.length = 0;
gdjs.HellGamemodeCode.GDBackObjects1.length = 0;
gdjs.HellGamemodeCode.GDBackObjects2.length = 0;
gdjs.HellGamemodeCode.GDBackObjects3.length = 0;
gdjs.HellGamemodeCode.GDNewSprite2Objects1.length = 0;
gdjs.HellGamemodeCode.GDNewSprite2Objects2.length = 0;
gdjs.HellGamemodeCode.GDNewSprite2Objects3.length = 0;


return;

}

gdjs['HellGamemodeCode'] = gdjs.HellGamemodeCode;
