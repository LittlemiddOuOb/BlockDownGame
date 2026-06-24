gdjs.DuoGamemodeCode = {};
gdjs.DuoGamemodeCode.localVariables = [];
gdjs.DuoGamemodeCode.idToCallbackMap = new Map();
gdjs.DuoGamemodeCode.GDBlueBlockObjects1= [];
gdjs.DuoGamemodeCode.GDBlueBlockObjects2= [];
gdjs.DuoGamemodeCode.GDBlueBlockObjects3= [];
gdjs.DuoGamemodeCode.GDGroundObjects1= [];
gdjs.DuoGamemodeCode.GDGroundObjects2= [];
gdjs.DuoGamemodeCode.GDGroundObjects3= [];
gdjs.DuoGamemodeCode.GDScoreTextObjects1= [];
gdjs.DuoGamemodeCode.GDScoreTextObjects2= [];
gdjs.DuoGamemodeCode.GDScoreTextObjects3= [];
gdjs.DuoGamemodeCode.GDRedBlockObjects1= [];
gdjs.DuoGamemodeCode.GDRedBlockObjects2= [];
gdjs.DuoGamemodeCode.GDRedBlockObjects3= [];
gdjs.DuoGamemodeCode.GDNewSpriteObjects1= [];
gdjs.DuoGamemodeCode.GDNewSpriteObjects2= [];
gdjs.DuoGamemodeCode.GDNewSpriteObjects3= [];
gdjs.DuoGamemodeCode.GDLeftObjects1= [];
gdjs.DuoGamemodeCode.GDLeftObjects2= [];
gdjs.DuoGamemodeCode.GDLeftObjects3= [];
gdjs.DuoGamemodeCode.GDAObjects1= [];
gdjs.DuoGamemodeCode.GDAObjects2= [];
gdjs.DuoGamemodeCode.GDAObjects3= [];
gdjs.DuoGamemodeCode.GDDObjects1= [];
gdjs.DuoGamemodeCode.GDDObjects2= [];
gdjs.DuoGamemodeCode.GDDObjects3= [];
gdjs.DuoGamemodeCode.GDorObjects1= [];
gdjs.DuoGamemodeCode.GDorObjects2= [];
gdjs.DuoGamemodeCode.GDorObjects3= [];
gdjs.DuoGamemodeCode.GDCorrectObjects1= [];
gdjs.DuoGamemodeCode.GDCorrectObjects2= [];
gdjs.DuoGamemodeCode.GDCorrectObjects3= [];
gdjs.DuoGamemodeCode.GDWrongObjects1= [];
gdjs.DuoGamemodeCode.GDWrongObjects2= [];
gdjs.DuoGamemodeCode.GDWrongObjects3= [];
gdjs.DuoGamemodeCode.GDBackObjects1= [];
gdjs.DuoGamemodeCode.GDBackObjects2= [];
gdjs.DuoGamemodeCode.GDBackObjects3= [];
gdjs.DuoGamemodeCode.GDNewSprite2Objects1= [];
gdjs.DuoGamemodeCode.GDNewSprite2Objects2= [];
gdjs.DuoGamemodeCode.GDNewSprite2Objects3= [];


gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDBlueBlockObjects1Objects = Hashtable.newFrom({"BlueBlock": gdjs.DuoGamemodeCode.GDBlueBlockObjects1});
gdjs.DuoGamemodeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() != 0);
}
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
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() != 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).mul(1.2);
}
}

}


};gdjs.DuoGamemodeCode.eventsList1 = function(runtimeScene) {

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
gdjs.DuoGamemodeCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDRedBlockObjects1Objects = Hashtable.newFrom({"RedBlock": gdjs.DuoGamemodeCode.GDRedBlockObjects1});
gdjs.DuoGamemodeCode.eventsList2 = function(runtimeScene) {

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


};gdjs.DuoGamemodeCode.eventsList3 = function(runtimeScene) {

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
gdjs.DuoGamemodeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.DuoGamemodeCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDBlueBlockObjects1[k] = gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.DuoGamemodeCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDBlueBlockObjects1[k] = gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.DuoGamemodeCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDBlueBlockObjects1[k] = gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.DuoGamemodeCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDBlueBlockObjects1[k] = gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDBlueBlockObjects1Objects = Hashtable.newFrom({"BlueBlock": gdjs.DuoGamemodeCode.GDBlueBlockObjects1});
gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.DuoGamemodeCode.GDGroundObjects1});
gdjs.DuoGamemodeCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.DuoGamemodeCode.GDBlueBlockObjects1, gdjs.DuoGamemodeCode.GDBlueBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDBlueBlockObjects2.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDBlueBlockObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDBlueBlockObjects2[k] = gdjs.DuoGamemodeCode.GDBlueBlockObjects2[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDBlueBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.DuoGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects2.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{

gdjs.copyArray(gdjs.DuoGamemodeCode.GDBlueBlockObjects1, gdjs.DuoGamemodeCode.GDBlueBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDBlueBlockObjects2.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDBlueBlockObjects2[i].getAngle() == 360 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDBlueBlockObjects2[k] = gdjs.DuoGamemodeCode.GDBlueBlockObjects2[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDBlueBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.DuoGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects2.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{

/* Reuse gdjs.DuoGamemodeCode.GDBlueBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDBlueBlockObjects1[k] = gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() != 360 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDBlueBlockObjects1[k] = gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DuoGameover", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)));
}
{runtimeScene.getGame().getVariables().getFromIndex(22).add(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(24).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(20).getChild("DuoHighestScore").setNumber(runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber());
}
}

}


};gdjs.DuoGamemodeCode.eventsList9 = function(runtimeScene) {

{

/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDRedBlockObjects1[k] = gdjs.DuoGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.DuoGamemodeCode.eventsList10 = function(runtimeScene) {

{

/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDRedBlockObjects1[k] = gdjs.DuoGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() + (360));
}
}
}

}


};gdjs.DuoGamemodeCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDRedBlockObjects1[k] = gdjs.DuoGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.DuoGamemodeCode.eventsList12 = function(runtimeScene) {

{

/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDRedBlockObjects1[k] = gdjs.DuoGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() - (360));
}
}
}

}


};gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDRedBlockObjects1Objects = Hashtable.newFrom({"RedBlock": gdjs.DuoGamemodeCode.GDRedBlockObjects1});
gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.DuoGamemodeCode.GDGroundObjects1});
gdjs.DuoGamemodeCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.DuoGamemodeCode.GDRedBlockObjects1, gdjs.DuoGamemodeCode.GDRedBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDRedBlockObjects2.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDRedBlockObjects2[i].getAngle() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDRedBlockObjects2[k] = gdjs.DuoGamemodeCode.GDRedBlockObjects2[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDRedBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.DuoGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects2.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
}

}


{

gdjs.copyArray(gdjs.DuoGamemodeCode.GDRedBlockObjects1, gdjs.DuoGamemodeCode.GDRedBlockObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDRedBlockObjects2.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDRedBlockObjects2[i].getAngle() == 360 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDRedBlockObjects2[k] = gdjs.DuoGamemodeCode.GDRedBlockObjects2[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDRedBlockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.DuoGamemodeCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects2.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Score Effect2.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}
}

}


{

/* Reuse gdjs.DuoGamemodeCode.GDRedBlockObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDRedBlockObjects1[k] = gdjs.DuoGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length;i<l;++i) {
    if ( gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() != 360 ) {
        isConditionTrue_0 = true;
        gdjs.DuoGamemodeCode.GDRedBlockObjects1[k] = gdjs.DuoGamemodeCode.GDRedBlockObjects1[i];
        ++k;
    }
}
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DuoGameover", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)));
}
{runtimeScene.getGame().getVariables().getFromIndex(22).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(24).add(1);
}
}

}


};gdjs.DuoGamemodeCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawner");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawner2");
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
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
{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(200);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BlueBlockSpawner") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3));
if (isConditionTrue_0) {
gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDBlueBlockObjects1Objects, gdjs.randomInRange(50, 750), -(50), "");
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.randomInRange(0, 3) * 90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BlueBlockSpawner");
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RedBlockSpawner") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4));
if (isConditionTrue_0) {
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDRedBlockObjects1Objects, gdjs.randomInRange(50, 750), -(50), "");
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.randomInRange(0, 3) * 90);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RedBlockSpawner");
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
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
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13756772);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13758380);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13759820);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13761156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeCode.GDBlueBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeCode.GDBlueBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.DuoGamemodeCode.GDGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDBlueBlockObjects1Objects, gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.DuoGamemodeCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13767620);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Left", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13769508);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() - (90));
}
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13770948);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Right", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13772284);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].setAngle(gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].getAngle() + (90));
}
}

{ //Subevents
gdjs.DuoGamemodeCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.DuoGamemodeCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeCode.GDRedBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDRedBlockObjects1Objects, gdjs.DuoGamemodeCode.mapOfGDgdjs_9546DuoGamemodeCode_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.DuoGamemodeCode.eventsList13(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.DuoGamemodeCode.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.DuoGamemodeCode.GDBlueBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.DuoGamemodeCode.GDDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.DuoGamemodeCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.DuoGamemodeCode.GDRedBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("or"), gdjs.DuoGamemodeCode.GDorObjects1);
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDBlueBlockObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDRedBlockObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "spawner");
}
{runtimeScene.getGame().getVariables().getFromIndex(21).add(1);
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDLeftObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDAObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDAObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDDObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDDObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.DuoGamemodeCode.GDorObjects1.length ;i < len;++i) {
    gdjs.DuoGamemodeCode.GDorObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() >= 50);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(1);
}
}

}


};

gdjs.DuoGamemodeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = 0;
gdjs.DuoGamemodeCode.GDBlueBlockObjects2.length = 0;
gdjs.DuoGamemodeCode.GDBlueBlockObjects3.length = 0;
gdjs.DuoGamemodeCode.GDGroundObjects1.length = 0;
gdjs.DuoGamemodeCode.GDGroundObjects2.length = 0;
gdjs.DuoGamemodeCode.GDGroundObjects3.length = 0;
gdjs.DuoGamemodeCode.GDScoreTextObjects1.length = 0;
gdjs.DuoGamemodeCode.GDScoreTextObjects2.length = 0;
gdjs.DuoGamemodeCode.GDScoreTextObjects3.length = 0;
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = 0;
gdjs.DuoGamemodeCode.GDRedBlockObjects2.length = 0;
gdjs.DuoGamemodeCode.GDRedBlockObjects3.length = 0;
gdjs.DuoGamemodeCode.GDNewSpriteObjects1.length = 0;
gdjs.DuoGamemodeCode.GDNewSpriteObjects2.length = 0;
gdjs.DuoGamemodeCode.GDNewSpriteObjects3.length = 0;
gdjs.DuoGamemodeCode.GDLeftObjects1.length = 0;
gdjs.DuoGamemodeCode.GDLeftObjects2.length = 0;
gdjs.DuoGamemodeCode.GDLeftObjects3.length = 0;
gdjs.DuoGamemodeCode.GDAObjects1.length = 0;
gdjs.DuoGamemodeCode.GDAObjects2.length = 0;
gdjs.DuoGamemodeCode.GDAObjects3.length = 0;
gdjs.DuoGamemodeCode.GDDObjects1.length = 0;
gdjs.DuoGamemodeCode.GDDObjects2.length = 0;
gdjs.DuoGamemodeCode.GDDObjects3.length = 0;
gdjs.DuoGamemodeCode.GDorObjects1.length = 0;
gdjs.DuoGamemodeCode.GDorObjects2.length = 0;
gdjs.DuoGamemodeCode.GDorObjects3.length = 0;
gdjs.DuoGamemodeCode.GDCorrectObjects1.length = 0;
gdjs.DuoGamemodeCode.GDCorrectObjects2.length = 0;
gdjs.DuoGamemodeCode.GDCorrectObjects3.length = 0;
gdjs.DuoGamemodeCode.GDWrongObjects1.length = 0;
gdjs.DuoGamemodeCode.GDWrongObjects2.length = 0;
gdjs.DuoGamemodeCode.GDWrongObjects3.length = 0;
gdjs.DuoGamemodeCode.GDBackObjects1.length = 0;
gdjs.DuoGamemodeCode.GDBackObjects2.length = 0;
gdjs.DuoGamemodeCode.GDBackObjects3.length = 0;
gdjs.DuoGamemodeCode.GDNewSprite2Objects1.length = 0;
gdjs.DuoGamemodeCode.GDNewSprite2Objects2.length = 0;
gdjs.DuoGamemodeCode.GDNewSprite2Objects3.length = 0;

gdjs.DuoGamemodeCode.eventsList14(runtimeScene);
gdjs.DuoGamemodeCode.GDBlueBlockObjects1.length = 0;
gdjs.DuoGamemodeCode.GDBlueBlockObjects2.length = 0;
gdjs.DuoGamemodeCode.GDBlueBlockObjects3.length = 0;
gdjs.DuoGamemodeCode.GDGroundObjects1.length = 0;
gdjs.DuoGamemodeCode.GDGroundObjects2.length = 0;
gdjs.DuoGamemodeCode.GDGroundObjects3.length = 0;
gdjs.DuoGamemodeCode.GDScoreTextObjects1.length = 0;
gdjs.DuoGamemodeCode.GDScoreTextObjects2.length = 0;
gdjs.DuoGamemodeCode.GDScoreTextObjects3.length = 0;
gdjs.DuoGamemodeCode.GDRedBlockObjects1.length = 0;
gdjs.DuoGamemodeCode.GDRedBlockObjects2.length = 0;
gdjs.DuoGamemodeCode.GDRedBlockObjects3.length = 0;
gdjs.DuoGamemodeCode.GDNewSpriteObjects1.length = 0;
gdjs.DuoGamemodeCode.GDNewSpriteObjects2.length = 0;
gdjs.DuoGamemodeCode.GDNewSpriteObjects3.length = 0;
gdjs.DuoGamemodeCode.GDLeftObjects1.length = 0;
gdjs.DuoGamemodeCode.GDLeftObjects2.length = 0;
gdjs.DuoGamemodeCode.GDLeftObjects3.length = 0;
gdjs.DuoGamemodeCode.GDAObjects1.length = 0;
gdjs.DuoGamemodeCode.GDAObjects2.length = 0;
gdjs.DuoGamemodeCode.GDAObjects3.length = 0;
gdjs.DuoGamemodeCode.GDDObjects1.length = 0;
gdjs.DuoGamemodeCode.GDDObjects2.length = 0;
gdjs.DuoGamemodeCode.GDDObjects3.length = 0;
gdjs.DuoGamemodeCode.GDorObjects1.length = 0;
gdjs.DuoGamemodeCode.GDorObjects2.length = 0;
gdjs.DuoGamemodeCode.GDorObjects3.length = 0;
gdjs.DuoGamemodeCode.GDCorrectObjects1.length = 0;
gdjs.DuoGamemodeCode.GDCorrectObjects2.length = 0;
gdjs.DuoGamemodeCode.GDCorrectObjects3.length = 0;
gdjs.DuoGamemodeCode.GDWrongObjects1.length = 0;
gdjs.DuoGamemodeCode.GDWrongObjects2.length = 0;
gdjs.DuoGamemodeCode.GDWrongObjects3.length = 0;
gdjs.DuoGamemodeCode.GDBackObjects1.length = 0;
gdjs.DuoGamemodeCode.GDBackObjects2.length = 0;
gdjs.DuoGamemodeCode.GDBackObjects3.length = 0;
gdjs.DuoGamemodeCode.GDNewSprite2Objects1.length = 0;
gdjs.DuoGamemodeCode.GDNewSprite2Objects2.length = 0;
gdjs.DuoGamemodeCode.GDNewSprite2Objects3.length = 0;


return;

}

gdjs['DuoGamemodeCode'] = gdjs.DuoGamemodeCode;
