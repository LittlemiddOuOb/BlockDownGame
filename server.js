const express = require('express');
const bodyParser = require('body-parser'); 
const DB = require('nedb-promises');


const app = express();


// 改用動態 Port，如果 Render 雲端沒有指定，就預設使用 3000 (或 80)
const port = process.env.PORT || 80;

// 使用 body-parser 解析資料並加大接收容量限制至 30mb
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb' }));

// 將 public 資料夾設為對外的網頁大門
app.use(express.static(__dirname + '/public'));

// 建立 NeDB 資料庫連線 (自動建立 game.db 檔案)
const db = DB.create({ filename: 'game.db', autoload: true });
console.log('✅ NeDB 資料庫載入成功！');

// =================【1. 儲存與更新資料 API (POST)】=================
app.post('https://blockdowngame.onrender.com/api/saveData/:playerName', async (req, res) => {
    try {
        // 從遊戲端接收完整的資料包
        const { 
            SavePack: {
                EasyHighestScore,
                HellHighestScore,
                DuoHighestScore
            }
        } = req.body;

        // 將變數轉成底線格式 (snake_case)，並確保分數是數字
        const recordToSave = {
           EasyHighestScore: Number(EasyHighestScore) || 0,
            HellHighestScore: Number(HellHighestScore) || 0,
            DuoHighestScore: Number(DuoHighestScore) || 0,
            last_saved: new Date() // 順便記錄最後存檔時間
        };

        // 【優化】使用 upsert 功能：尋找該玩家名稱，找到就更新，找不到就新增
        await db.update(
            { player_name: playerName }, 
            { $set: recordToSave }, 
            { upsert: true }
        );
        
        console.log(`💾 玩家 [${playerName}] 資料已成功更新儲存！`);
        res.json({ message: '資料與成就儲存成功！', success: true });
        
    } catch (err) {
        console.error('❌ 寫入資料庫失敗:', err);
        res.status(500).json({ error: '資料庫寫入失敗' });
    }
});

// =================【2. 讀取資料 API (GET)】=================
app.get('https://blockdowngame.onrender.com/api/saveData/:playerName', async (req, res) => {
    try {
        const playerName = req.params.playerName;
        console.log(`📤 準備讀取玩家 [${playerName}] 的雲端資料...`);

        // 【優化】因為用了 upsert，資料庫裡每個玩家只會有一筆最新資料，直接用 findOne 即可
        const userRecord = await db.findOne({ player_name: playerName });
        
        if (userRecord) {
            console.log(`最高分數: ${userRecord.score}`);
            res.json(userRecord); 
        } else {
            console.log(`⚠️ 找不到玩家 [${playerName}] 的資料，這是一位新玩家。`);
            res.json({ message: 'new_player' });
        }
    } catch (err) {
        console.error('❌ 讀取資料庫失敗:', err);
        res.status(500).json({ error: '資料庫讀取失敗' });
    }
});

// =================【3. 刪除資料 API (DELETE)】=================
app.delete('/api/deleteData/:playerName', async (req, res) => {
    try {
        const playerName = req.params.playerName;
        console.log(`🗑️ 收到刪除指令！準備清除玩家 [${playerName}] 的雲端資料...`);

        // 刪除該玩家所有紀錄
        const numRemoved = await db.remove({ player_name: playerName }, { multi: true });
        
        console.log(`✅ 玩家 [${playerName}] 的資料已從雲端徹底清除！共刪除 ${numRemoved} 筆紀錄。`);
        res.json({ message: '雲端存檔已清除！' });
    } catch (err) {
        console.error('❌ 刪除資料庫失敗:', err);
        res.status(500).json({ error: '資料庫刪除失敗' });
    }
});

app.listen(port, () => {
    
})