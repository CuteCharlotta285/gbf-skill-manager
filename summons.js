// --- 召喚石デフォルトデータベース (JSONの最新構造を反映) ---
const defaultSummonDatabase = {
  "group_magna": {
    "name": "マグナシリーズ",
    "summons": {
      "colossus_magna_200": {
        "label": "コロッサス・マグナ",
        "element": "fire",
        "type": "マグナ",
        "mainValue1": 170,
        "mainValue2": 0,
        "friendValue": 200,
        "subValue": 0,
        "mainType1": "マグナ",
        "mainType2": "",
        "friendType": "マグナ",
        "subType": "サブ加護",
        "subType2": "サブ加護",
        "subValue2": 0
      },
      "leviathan_magna_200": {
        "label": "リヴァイアサン・マグナ",
        "element": "water",
        "type": "マグナ",
        "mainValue1": 170,
        "mainValue2": 0,
        "friendValue": 200,
        "subValue": 0,
        "mainType1": "マグナ",
        "mainType2": "",
        "friendType": "マグナ",
        "subType": "サブ加護",
        "subType2": "サブ加護",
        "subValue2": 0
      }
    }
  },
  "group_optimus": {
    "name": "オプティマスシリーズ",
    "summons": {
      "agnis_280": {
        "label": "アグニス",
        "element": "fire",
        "type": "神石",
        "mainValue1": 170,
        "mainValue2": 20,
        "friendValue": 170,
        "subValue": 0,
        "mainType1": "通常",
        "mainType2": "HP",
        "friendType": "通常",
        "subType": "サブ加護",
        "subType2": "サブ加護",
        "subValue2": 0
      },
      "varuna_280": {
        "label": "ヴァルナ",
        "element": "water",
        "type": "神石",
        "mainValue1": 170,
        "mainValue2": 20,
        "friendValue": 170,
        "subValue": 0,
        "mainType1": "通常",
        "mainType2": "HP",
        "friendType": "通常",
        "subType": "サブ加護",
        "subType2": "サブ加護",
        "subValue2": 0
      }
    }
  },
  "group_archangel": {
    "name": "天司シリーズ",
    "summons": {
      "michael_sub": {
        "label": "ミカエル",
        "element": "fire",
        "type": "天司",
        "mainValue1": 140,
        "mainValue2": 0,
        "friendValue": 140,
        "subValue": 20,
        "mainType1": "属性",
        "mainType2": "加護なし",
        "friendType": "属性",
        "subType": "サブ加護",
        "subType2": "サブ加護",
        "subValue2": 0
      }
    }
  }
};

// --- グローバル変数への保持と初期化ロジック ---

// 1. デフォルト値を保持
window.defaultSummonDatabase = defaultSummonDatabase;

// 2. ローカルストレージからデータを読み込む (保存キー: gbf_summon_db)
const savedSummonData = localStorage.getItem('gbf_summon_db');

// 3. データがあればそれを使い、なければデフォルトをコピーして使用する
if (savedSummonData) {
    try {
        window.summonDatabase = JSON.parse(savedSummonData);
    } catch (e) {
        console.error("召喚石データのパースに失敗しました。デフォルトを使用します。");
        window.summonDatabase = JSON.parse(JSON.stringify(defaultSummonDatabase));
    }
} else {
    window.summonDatabase = JSON.parse(JSON.stringify(defaultSummonDatabase));
}

/**
 * 召喚石データベースを現在の状態に保存する
 */
window.saveSummonDatabase = function() {
    localStorage.setItem('gbf_summon_db', JSON.stringify(window.summonDatabase));
    console.log("Summon database saved successfully.");
};