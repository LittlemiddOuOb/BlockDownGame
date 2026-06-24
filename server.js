// =================【1. 儲存與更新資料 API (POST)】=================
app.post('/api/saveData', async (req, res) => {
    try {
        // ✨【修正】直接從 req.body 拿資料，不用再包一層 SavePack
        const { 
            playerName,
            EasyHighestScore,
            HellHighestScore,
            DuoHighestScore
        } = req.body;

        // 安全檢查：如果沒傳名字過來，就擋掉
        if (!playerName) {
            return res.status(400).json({ error: '找不到玩家名稱 (playerName)' });
        }

        console.log(`📥 收到玩家 [${playerName}] 的存檔更新！(Easy: ${EasyHighestScore} | Hell: ${HellHighestScore})`);

        // 整理要存入的資料
        const recordToSave = {
            player_name: playerName, 
            EasyHighestScore: Number(EasyHighestScore) || 0,
            HellHighestScore: Number(HellHighestScore) || 0,
            DuoHighestScore: Number(DuoHighestScore) || 0,
            last_saved: new Date() 
        };

        // 使用 upsert 功能
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