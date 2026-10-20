# 伯虎在二樓 收支總覽

恆春本店、台南・小伯虎、百貨櫃位三點一起管理：每日結帳、當日支出、營業分析、百貨對帳、薪資、現金結算。

- 網頁程式放在這裡（GitHub Pages）；帳務資料存在 Firebase，需登入才能讀取。
- `config.js` 是 Firebase 的公開設定（不是密碼）。
- `firestore.rules` 是資料庫安全規則，貼到 Firebase 主控台「Firestore → 規則」。
- `preview.html` 是展示模式（假資料、不存檔）。
