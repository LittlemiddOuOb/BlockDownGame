const express = require('express');
const bodyParser = require('body-parser'); 
const DB = require('nedb-promises');

const app = express();


// 改用動態 Port，如果 Render 雲端沒有指定，就預設使用 3000 或 80
const port = process.env.PORT || 3000;

// 使用 body-parser 解析資料並加大接收容量限制至 30mb
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb' }));

// 將 public 資料夾設為對外的網頁大門
app.use(express.static(__dirname + '/public'));

// 建立 NeDB 資料庫連線 (自動建立 game.db 檔案)
const db = DB.create({ filename: 'game.db', autoload: true });
console.log('✅ NeDB 資料庫載入成功！');

// =================【1. 儲存與更新資料 API (POST)】=================
app.post('/api/saveData', async (req, res) => {
    try {
        // 直接從 req.body 拿資料
        const { 
            playername,
            EasyHighestScore,
            HellHighestScore,
            DuoHighestScore
        } = req.body;

        // 安全檢查：如果沒傳名字過來，就擋掉
        if (!playername) {
            return res.status(400).json({ error: '找不到玩家名稱 (playername)' });
        }

        console.log(`📥 收到玩家 [${playername}] 的存檔更新！`);

        // 整理要存入的資料
        const recordToSave = {
            player_name: playername, 
            EasyHighestScore: Number(EasyHighestScore) || 0,
            HellHighestScore: Number(HellHighestScore) || 0,
            DuoHighestScore: Number(DuoHighestScore) || 0,
            last_saved: new Date() 
        };

        // 使用 upsert 功能
        await db.update(
            { player_name: playername }, 
            { $set: recordToSave }, 
            { upsert: true }
        );
        
        console.log(`💾 玩家 [${playername}] 資料已成功更新儲存！`);
        res.json({ message: '資料與成就儲存成功！', success: true });
        
    } catch (err) {
        console.error('❌ 寫入資料庫失敗:', err);
        res.status(500).json({ error: '資料庫寫入失敗' });
    }
});

// =================【2. 讀取資料 API (GET)】=================
app.get('/api/loadData/:playername', async (req, res) => {
    try {
        const playername = req.params.playername;
        console.log(`📤 準備讀取玩家 [${playername}] 的雲端資料...`);

        const userRecord = await db.findOne({ player_name: playername });
        
        if (userRecord) {
            console.log(`✅ 成功找到玩家 [${playername}] 的歷史存檔！Easy分數: ${userRecord.EasyHighestScore}`);
            res.json(userRecord); 
        } else {
            console.log(`⚠️ 找不到玩家 [${playername}] 的資料，這是一位新玩家。`);
            res.json({ message: 'new_player' });
        }
    } catch (err) {
        console.error('❌ 讀取資料庫失敗:', err);
        res.status(500).json({ error: '資料庫讀取失敗' });
    }
});

// =================【3. 刪除資料 API (DELETE)】=================


// 監聽埠號
app.listen(port, () => {
    console.log(`🚀 遊戲伺服器已啟動，正在監聽 Port: ${port}`);
});