// 伯虎宅配 共用設定
export const firebaseConfig = {
  apiKey: "AIzaSyCGwXWPKVAb0ipDqyfMjNh-lO0f3ngrh2w",
  authDomain: "butwho9527.firebaseapp.com",
  projectId: "butwho9527",
  storageBucket: "butwho9527.firebasestorage.app",
  messagingSenderId: "559697634199",
  appId: "1:559697634199:web:9bfd60c782d6c9e13e9ad2"
};

export const SDK = "https://www.gstatic.com/firebasejs/10.12.2";

// 狀態名稱（前後台共用）
export const STATUS = {
  pending:   "待付款",
  paid:      "已付款",
  shipped:   "已出貨",
  done:      "已完成",
  cancelled: "已取消"
};

export const DEFAULT_SETTINGS = {
  open: true,
  closedText: "這段時間暫停宅配，謝謝你記得我們。",
  intro: "恆春中山路老屋二樓的烤箱，每天清晨開始工作。走不到南方海邊的日子，我們把剛出爐的那一份仔細冷凍封好，寄到你的餐桌上，讓你在自己的地方，也能慢慢吃完一個下午。",
  lineOaId: "",
  lineQr: "",
  shipFee: 180,
  freeShipOver: 1500,
  leadDays: 4
};

export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
export const money = n => "$" + Number(n || 0).toLocaleString();
