var express = require("express");
var server = express();
var bodyParser = require("body-parser");

// 靜態檔案路徑（可以放網頁前端檔案）
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// 初始化資料庫
const Datastore = require('nedb-promises');
let GameDB = Datastore.create(__dirname + '/game.db');

// 測試用路由
server.get("/score", function (req, res) {
    console.log(req.query);
    res.send("Server is running!");
});

/**
 * 1. 獲取排行榜 (POST /rank)
 * 傳入參數範例 (JSON): { "mode": "easy" } 或 { "mode": "hell" }
 */
server.post("/rank", (req, res) => {
    // 如果沒傳 mode，預設查詢 easy
    let mode = req.body.mode || "easy"; 

    // 根據模式篩選，並依分數由高到低排序，只取前3名
    GameDB.find({ mode: mode }, { _id: 0 })
          .sort({ "score": -1 })
          .limit(3)
          .then((docs) => {
              if (docs != null) {
                  res.send(docs);
              } else {
                  res.send([]);
              }
          })
          .catch(err => {
              res.status(500).send({ error: "查詢失敗" });
          });
});

/**
 * 2. 上傳分數並回傳該模式的新排行榜 (POST /postscore)
 * 傳入參數範例 (JSON): { "name": "Player1", "score": 150, "mode": "easy" }
 */
server.post("/postscore", (req, res) => {
    console.log("收到分數資料:", req.body);
    
    // 建立要存入的資料物件
    let newData = {
        name: req.body.name || "Unknown",
        score: Number(req.body.score), // 強制轉成數字，確保排序正確
        mode: req.body.mode || "easy"  // 紀錄是 easy 還是 hell
    };

    // 1. 存入資料庫
    GameDB.insert(newData).then(doc => {
        // 2. 存完後，立刻查詢該模式最新的前三名排行榜回傳給遊戲
        GameDB.find({ mode: newData.mode }, { _id: 0 })
              .sort({ "score": -1 })
              .limit(3)
              .then((docs) => {
                  if (docs != null) {
                      res.send(docs);
                  }
              });
    }).catch(err => {
        res.status(500).send({ error: "儲存失敗" });
    });
});

// 啟動伺服器在 Port 80
server.listen(80, () => {
    console.log("【遊戲伺服器已啟動】正在監聽 Port 80...");
});