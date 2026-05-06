// ==========================================
// 1. データの初期化（ファイルの最上部に置く）
// ==========================================
weaponDatabase = JSON.parse(localStorage.getItem('weapon_db_data')) || window.defaultWeaponDatabase;
let activeWeaponGroupId = Object.keys(weaponDatabase)[0] || null;

// 現在の編成（13本分）を保持する配列。中身は武器データオブジェクトを入れる
let currentDeckWeapons = Array(13).fill(null);

// 実際にアプリで使う変数の初期化
// localStorage に保存されているデータがあればそれを使い、なければ今作ったデフォルトを使う
summonDatabase = JSON.parse(localStorage.getItem('summon_db_data')) || window.defaultSummonDatabase;

// 選択中のグループID（最初のグループを選択状態にする）
activeSummonGroupId = Object.keys(summonDatabase)[0] || null;


// ==========================================
// 2. ページ読み込み時の起動処理
// ==========================================

function findValueFromSkillDb(label) {
    if (!label || label === "" || label === "(なし)") return 0;
    
    // skills.js で定義されている skillDatabase をループ
    for (const gid in skillDatabase) {
        const group = skillDatabase[gid];
        if (!group.skills) continue;
        const found = Object.values(group.skills).find(s => s.label === label);
        if (found && found.effects && found.effects[0]) {
            return found.effects[0].value;
        }
    }
    return 0;
}

function refreshAllWeaponSkillValues() {
    console.log("全スキルの数値を最新化しています...");
    if (!weaponDatabase) return;

    Object.keys(weaponDatabase).forEach(groupId => {
        const group = weaponDatabase[groupId];
        Object.keys(group.weapons).forEach(weaponId => {
            const wp = group.weapons[weaponId];
            for (let i = 1; i <= 4; i++) {
                const skillLabel = wp[`skill${i}`];
                if (skillLabel && skillLabel !== "" && skillLabel !== "(なし)") {
                    // findValueFromSkillDb を使って数値を最新にする
                    wp[`skill${i}Val`] = findValueFromSkillDb(skillLabel);
                }
            }
        });
    });
}

window.onload = () => {
    console.log("初期化開始...");
    
    // 1. まず数値を最新化
    refreshAllWeaponSkillValues(); 
    
    // 2. その数値を使って画面を作る
    renderWeaponSidebar();
    renderWeaponMasterDB(); 
    
    console.log("初期化完了");
};


// 属性のIDを表示用の日本語に変換するマップ
const elementMap = {
    "all": "全属性",
    "fire": "火",
    "water": "水",
    "earth": "土",
    "wind": "風",
    "light": "光",
    "dark": "闇",
    "hakai": "破壊"
};

// --- 1. 要素の取得 ---
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
const btnOpen = document.getElementById('btn-open');
const btnOpenMain = document.getElementById('btn-open-main');
const btnClose = document.getElementById('btn-close');
const btnSave = document.getElementById('btn-save');
const dialReg = document.getElementById('dial-reg');
const skillList = document.getElementById('skill-list');
const masterBody = document.getElementById('master-body');
const weaponMasterBody = document.getElementById('weapon-master-body');
const weaponGroupListContainer = document.getElementById('weapon-group-list');

// 武器追加ボタン（メインエリアのボタンなど）にイベント登録
const btnAddWeapon = document.getElementById('add-weapon-btn');
const dialWeaponReg = document.getElementById('dial-weapon-reg');
const btnWeaponClose = document.getElementById('weapon-dialog-close'); // キャンセルボタン等
// 武器の保存処理
const btnWeaponSave = document.getElementById('btn-weapon-save-exec');


// --- 2. タブ切り替え機能 ---
tabs.forEach(tab => {
    tab.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.target;
        contents.forEach(c => c.classList.add('hidden'));
        document.getElementById(target).classList.remove('hidden');
        

        if(target === 'main-screen') { 
            console.log("計算機を再描画します");
            setupWeaponGrid();
            setupOthers();
        }

        if(target === 'weapon-screen') renderWeaponMasterDB();
        if(target === 'db-screen') renderMasterDB();
        if(target === 'summon-screen') refreshSummonDB();
    };
});


// ****************************
// **  武器編成ページ         **
// ****************************

// --- 武器選択の状態管理 ---
let currentSelectingIndex = null; // 今どのスロット（0〜12）を選んでいるか保持

// --- 武器選択モーダルを開く ---
function openWeaponSelectModal(index) {
    currentSelectingIndex = index;
    const modal = document.getElementById("dial-weapon-select");
    if (!modal) return console.error("モーダル(dial-weapon-select)が見つかりません");

    renderModalWeaponList();
    modal.showModal();
}

// --- ×ボタンでモーダルを閉じる設定 ---
document.getElementById("btn-weapon-select-close")?.addEventListener("click", () => {
    document.getElementById("dial-weapon-select").close();
});

// --- 属性フィルタが変更された時の処理 ---
document.getElementById("modal-filter-element")?.addEventListener("change", () => {
    renderModalWeaponList(); // 選択された属性に基づいて再描画
});

// --- 武器を選択した時の処理 ---
function selectWeapon(weapon) {
    // 1. 選択したスロット（index）に武器データを保存
    currentDeckWeapons[currentSelectingIndex] = weapon;
    
    // 【追加】ローカルストレージに保存する
    // 武器そのものを保存すると重くなるので、武器のID（あれば）や名前を保存するのが理想ですが、
    // まずは今の仕組みに合わせて currentDeckWeapons を丸ごと保存します。
    localStorage.setItem('gbf_weapon_deck', JSON.stringify(currentDeckWeapons));

    if (weapon) {
        console.log(`${currentSelectingIndex}番のスロットに「${weapon.label}」をセットしました`);
    } else {
        console.log(`${currentSelectingIndex}番のスロットを解除しました`);
    }

    // 2. モーダルを閉じる
    document.getElementById("dial-weapon-select").close();
    
    // 3. 画面を再描画して、武器名を表示させる
    setupWeaponGrid(); 
    
    // 4. スキル合計値の計算
    updateSkillTotals(); 
}

// --- モーダル内に武器一覧を描画する ---
function renderModalWeaponList() {
    const listContainer = document.getElementById("modal-weapon-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

// 修正：要素がない場合は "all" として扱う安全策を追加
    const filterSelect = document.getElementById("modal-filter-element");
    const filterElement = filterSelect ? filterSelect.value : "all";
    const filterSeries = document.getElementById("modal-filter-series")?.value || "all";

// --- 追加：【外す】ボタンを先頭に作成 ---
    const removeDiv = document.createElement("div");
    removeDiv.className = "modal-weapon-item remove-item"; // 専用のクラスを付与
    removeDiv.innerHTML = `
        <div class="weapon-icon-circle">✕</div>
        <div class="weapon-name-label">外す</div>
    `;
    // selectWeaponに null を渡して、装備を空にする
    removeDiv.onclick = () => selectWeapon(null); 
    listContainer.appendChild(removeDiv);

    Object.keys(weaponDatabase).forEach(groupId => {
        const group = weaponDatabase[groupId];
        Object.keys(group.weapons).forEach(weaponKey => {
            const wpn = group.weapons[weaponKey];

            // 【フィルタ処理】属性が一致しない場合はスキップ（all以外の場合）
            if (filterElement !== "all" && wpn.element !== filterElement) {
                return;
            }
            
            const div = document.createElement("div");
            div.className = "modal-weapon-item"; // スタイルはすべてCSS側で管理します
            
            // 5列で見やすくするため、アイコンと名前を分けた構造にします
            div.innerHTML = `
                <div class="weapon-icon-circle ${wpn.element}">
                    ${elementMap[wpn.element] || ''}
                </div>
                <div class="weapon-name-label">${wpn.label}</div>
            `;
            
            div.onclick = () => selectWeapon(wpn);
            listContainer.appendChild(div);
        });
    });
}

function setWeapon(index, weaponData) {
    // 1. データを保存
    currentDeckWeapons[index] = weaponData;
    
    // 2. 見た目を更新
    renderAllSlots(); 
    
    // 3. ★ここで計算を実行
    updateSkillTotals(); 
}















/**
 * スキル名からレベル数値を抽出する補助関数
 */
function extractLevelFromName(name) {
    if (!name) return null;
    const matches = name.match(/\d+/g);
    if (matches && matches.length > 0) {
        return parseInt(matches[matches.length - 1], 10);
    }
    return null;
}

/**
 * 渾身の効果量を数式から算出する
 */
function getKonshinDynamicValue(hp, sLv, weaponSkillName) {
    if (hp < 25) return 0;
    
    let safeSLv = sLv;
    if (!Number.isInteger(sLv) || sLv < 1 || sLv > 20) {
        const extracted = extractLevelFromName(weaponSkillName);
        safeSLv = extracted || 15;
    }

    const sLvKisu = safeSLv <= 15 ? safeSLv : 15 + (safeSLv - 15) * 0.4;
    let konshinKisu = 65; 

    if (weaponSkillName.includes("方陣")) {
        if (weaponSkillName.includes("渾身Ⅲ")) {
            konshinKisu = 56.4; 
        } else if (weaponSkillName.includes("渾身Ⅱ")) {
            konshinKisu = 60.4; 
        } else {
            konshinKisu = 60.4; 
        }
    } 
    else if (weaponSkillName.includes("渾身Ⅱ")) {
        konshinKisu = 45.4; 
    } 
    else if (/(紅蓮|霧氷|地裂|乱気|天光|奈落|\(大\))/.test(weaponSkillName)) {
        konshinKisu = 56.4; 
    } 
    else if (/(業火|渦潮|大地|竜巻|雷電|憎悪|\(中\))/.test(weaponSkillName)) {
        konshinKisu = 65;   
    } 
    else if (/(火の|水の|土の|風の|光の|闇の|\(小\))/.test(weaponSkillName)) {
        konshinKisu = 80;   
    }

    const base = hp / (konshinKisu - sLvKisu);
    const result = 2.1 + Math.pow(base, 2.9);

    return result;
}

/**
 * 全スキル計算・UI更新
 */
function updateSkillTotals() {
    const hpSliderEl = document.getElementById('hp-slider');
    const currentHpPercent = hpSliderEl ? parseInt(hpSliderEl.value) : 100;

    if (document.getElementById('hp-display')) {
        document.getElementById('hp-display').innerText = currentHpPercent;
    }

    function getKagoPower(typeName) {
        const displayEl = document.getElementById('summon-total-list');
        if (!displayEl) return 0;
        const rows = displayEl.querySelectorAll('.total-row');
        for (let row of rows) {
            if (row.innerText.includes(typeName)) {
                const valText = row.querySelector('span:last-child').innerText;
                return parseFloat(valText.replace('%', '')) || 0;
            }
        }
        return 0;
    }

    const skillMap = {
        "通常攻刃": "val-atk", "マグナ攻刃": "val-m-atk", "EX攻刃": "val-ex-atk",
        "EX攻刃(特殊)": "val-ex-atk-sp", "渾身": "val-konshin", "M渾身": "val-m-konshin",
        "背水": "val-haisui", "M背水": "val-m-haisui", "属性攻撃": "val-ele-atk",
        "属性攻撃(進境)": "val-ele-shinkyo", "クリティカル": "val-crit", "カウンター率": "val-counter",
        "DA確率": "val-da", "TA確率": "val-ta", "神石ブースト": "val-boost", "マグナブースト": "val-magna-boost", "通常襲刃": "val-shujin", "防御無視": "val-kanpa",
        "HP": "val-hp", "通常守護": null, "マグナ守護": null, "回復上限": "val-heal-limit",
        "防御": "val-def", "弱体耐性": "val-deb-res", "属性軽減": "val-ele-red",
        "ダメ上限": "val-dmg-limit", "ダメ上限(特殊)": "val-dmg-limit-sp", "与ダメ": "val-yodmg-base",
        "与ダメ(汎用)": "val-yodmg-gen", "対有利与ダメ": "val-fav-yodmg", "対無属性与ダメ": "val-none-yodmg",
        "通常ダメ上限": "val-norm-limit", "通常ダメ上限(特殊)": "val-norm-limit-sp", "通常与ダメ(特殊)": "val-norm-yodmg-sp",
        "アビダメUP": "val-abil-dmg", "アビダメ上限": "val-abil-limit", "アビダメ上限(特殊)": "val-abil-limit-sp",
        "アビ与ダメ(特殊)": "val-abil-yodmg-sp", "奥義ダメUP": "val-ougi-dmg", "奥義上限UP": "val-ougi-limit",
        "奥義ダメ上限(特殊)": "val-ougi-limit-sp", "奥義与ダメ(特殊)": "val-ougi-yodmg-sp", "アビ与ダメ": "val-abil-yodmg",
        "奥義与ダメ": "val-ougi-yodmg", "CBダメ": "val-cb-dmg", "CBダメ上限": "val-cb-limit",
        "奥義ゲージ上昇": "val-ougi-up", "オーバーHP": "val-over-hp", "ダメ上限緩和": "val-limit-relax",
        "オーバークリティカル": "val-over-crit", "オーバー連撃": "val-over-rengeki"
    };

    const totals = {};
    Object.keys(skillMap).forEach(key => totals[key] = 0);

    function findSkillByLabel(labelName) {
        if (typeof skillDatabase === 'undefined') return null;
        for (const cat in skillDatabase) {
            for (const key in skillDatabase[cat].skills) {
                if (skillDatabase[cat].skills[key].label === labelName) return skillDatabase[cat].skills[key];
            }
        }
        return null;
    }

    // --- 修正点1: 最初にブースト合計を算出して加護倍率を確定させる ---
    let preBoostOpti = 0;
    let preBoostMagna = 0;

    for (const wpn of currentDeckWeapons) {
        if (!wpn) continue;
        for (let i = 1; i <= 4; i++) {
            const skillName = String(wpn[`skill${i}`] || "").trim();
            const master = findSkillByLabel(skillName);
            if (!master || !master.effects) continue;

            for (const eff of master.effects) {
                const userV = parseFloat(wpn[`skill${i}Val`]);
                const masterV = parseFloat(eff.value) || 0;
                const masterFirstV = parseFloat(master.effects[0].value) || 1;
                const baseVal = (Number.isInteger(userV) && userV > 0) ? (masterV * (userV / masterFirstV)) : masterV;

                if (eff.type === "ブースト" || eff.type === "神石ブースト") preBoostOpti += baseVal;
                if (eff.type === "マグナブースト") preBoostMagna += baseVal;
            }
        }
    }

    // 加護倍率の確定 (召喚石 + ブースト)
    const shinshiMult = 1 + ((getKagoPower("神石") + preBoostOpti) / 100);
    const magnaMult = 1 + ((getKagoPower("マグナ") + preBoostMagna) / 100);

    // --- 修正点2: メインループ ---
    for (const wpn of currentDeckWeapons) {
        if (!wpn) continue;
        for (let i = 1; i <= 4; i++) {
            const weaponSkillName = String(wpn[`skill${i}`] || "").trim();
            if (!weaponSkillName) continue;

            const masterData = findSkillByLabel(weaponSkillName);
            if (!masterData || !masterData.effects) continue;

            const userVal = parseFloat(wpn[`skill${i}Val`]);
            const isKago = wpn[`skill${i}Kago`] !== false;

            // --- 注目：ここからスキルの効果ループ ---
            for (const eff of masterData.effects) {
                const categoryName = eff.type;
                const isKonshinEffect = categoryName.includes("渾身");

                if (isKonshinEffect) {
                    let sLv = (Number.isInteger(userVal) && userVal >= 1 && userVal <= 20) ? userVal : (extractLevelFromName(weaponSkillName) || 15);
                    
                    // getKonshinDynamicValue自体がHPに応じた計算をするので、DBの複数データを使う必要がない
                    const finalVal = getKonshinDynamicValue(currentHpPercent, sLv, weaponSkillName);

                    let targetKey = (categoryName.includes("マグナ") || categoryName.startsWith("M")) ? "M渾身" : "渾身";
                    let currentMult = isKago ? ((targetKey === "M渾身") ? magnaMult : shinshiMult) : 1;

                    totals[targetKey] += (finalVal * currentMult) + 0.0000001;

                    // 【重要】渾身の計算が終わったら、このスキルのループ(eff)を抜ける
                    // これにより、DBにある75%や50%のデータで二重加算されるのを防ぎます
                    break; 

                } else {
                    // 渾身以外のスキル（攻刃など）は今まで通り全効果を処理
                    const masterVal = parseFloat(eff.value) || 0;
                    const masterFirstVal = parseFloat(masterData.effects[0].value) || 1;
                    const calcVal = (Number.isInteger(userVal) && userVal > 0) ? (masterVal * (userVal / masterFirstVal)) : masterVal;
                    
                    let targetKey = categoryName;
                    if (categoryName === "ブースト" || categoryName === "神石ブースト") targetKey = "神石ブースト";
                    else if (categoryName === "マグナブースト") targetKey = "マグナブースト";

                    if (targetKey && totals.hasOwnProperty(targetKey)) {
                        let currentMult = 1;
                        if (isKago) {
                            currentMult = (targetKey === "神石ブースト" || targetKey === "マグナブースト") ? 1 : ((targetKey.startsWith("M") || targetKey.includes("マグナ")) ? magnaMult : shinshiMult);
                        }
                        totals[targetKey] += (calcVal * currentMult) + 0.0000001;
                    }
                }
            }
        }
    }

    // --- 上限・超過フロー処理 ---
    
    // クリティカル
    const totalCrit = totals["クリティカル"] || 0;
    if (totalCrit > 100) {
        totals["オーバークリティカル"] += ((totalCrit - 100) / 2);
        totals["クリティカル"] = 100;
    }
    if (totals["オーバークリティカル"] > 100) totals["オーバークリティカル"] = 100;

    // 連撃
    const totalDA = totals["DA確率"] || 0;
    const totalTA = totals["TA確率"] || 0;
    if (totalDA > 75) {
        totals["オーバー連撃"] += ((totalDA - 75) * 0.4);
        totals["DA確率"] = 75;
    }
    if (totalTA > 75) {
        totals["オーバー連撃"] += ((totalTA - 75) * 0.6);
        totals["TA確率"] = 75;
    }
    if (totals["オーバー連撃"] > 100) totals["オーバー連撃"] = 100;

    // ダメ上限
    const totalDmgLimit = totals["ダメ上限"] || 0;
    if (totalDmgLimit > 20) {
        totals["ダメ上限緩和"] += ((totalDmgLimit - 20) / 2);
        totals["ダメ上限"] = 20;
    }
    if (totals["ダメ上限緩和"] > 20) totals["ダメ上限緩和"] = 20;

    // HP
    const totalRawHP = (totals["通常守護"] || 0) + (totals["マグナ守護"] || 0);
    if (totalRawHP > 400) {
        totals["オーバーHP"] += ((totalRawHP - 400) * 0.05);
        totals["HP"] = 400;
    } else {
        totals["HP"] = totalRawHP;
    }
    if (totals["オーバーHP"] > 20) totals["オーバーHP"] = 20;

    // --- 修正点3: HPバーの下のブースト表示枠の更新 ---
    const optiBox = document.getElementById('box-boost-opti');
    const magnaBox = document.getElementById('box-boost-magna');
    
    if (optiBox) {
        if (preBoostOpti > 0) {
            optiBox.style.display = "block";
            document.getElementById('display-boost-opti').innerText = `+${preBoostOpti.toFixed(2)}%`;
        } else {
            optiBox.style.display = "none";
        }
    }
    if (magnaBox) {
        if (preBoostMagna > 0) {
            magnaBox.style.display = "block";
            document.getElementById('display-boost-magna').innerText = `+${preBoostMagna.toFixed(2)}%`;
        } else {
            magnaBox.style.display = "none";
        }
    }

    // --- 最終表示更新 ---
    Object.keys(skillMap).forEach(category => {
        const htmlId = skillMap[category];
        if (!htmlId) return;
        const element = document.getElementById(htmlId);
        if (!element) return;

        const val = totals[category];
        const row = element.closest('tr') || element.parentElement;

        // クラスのリセット
        element.classList.remove('status-max', 'over-skill-val');
        if (row) row.classList.remove('over-skill-row');

        if (val !== 0) {
            if (row) row.style.display = "";

            // --- 上限判定のロジック ---
            let isMax = false;
            if (category === "クリティカル" && val >= 100) isMax = true;
            if ((category === "DA確率" || category === "TA確率") && val >= 75) isMax = true;
            if (category === "ダメ上限" && val >= 20) isMax = true;
            if (category === "HP" && val >= 400) isMax = true;
            if (category === "ダメ上限緩和" && val >= 20) isMax = true;

            // オレンジ色にするクラスの適用
            if (isMax) {
                element.classList.add('status-max');
            }

            // オーバー枠（超過分）のスタイル適用
            if (category.startsWith("オーバー")) {
                element.classList.add('over-skill-val');
                if (row) row.classList.add('over-skill-row');
            }

            // 数値の表示処理
            if (category.includes("与ダメ") || category === "オーバーHP") {
                element.innerText = Math.round(val).toLocaleString();
            } else {
                element.innerText = (Math.round((val + 0.0001) * 100) / 100).toFixed(2) + "%";
            }
        } else {
            if (row) row.style.display = "none";
        }
    });
}





















// ****************************
// **  編成画面ページ       **
// ****************************

// ==========================================
// 武器・召喚石・キャラ共通のスロット作成関数
// ==========================================
function createSlot(containerId, label, typeClass, index = null, style = "") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const slot = document.createElement("div");
  // typeClassに 'weapon-slot' が含まれていなければ足す
  slot.className = `weapon-slot ${typeClass}`;
  if (style) slot.style = style;
  
  // index が数値として存在する場合のみ、武器選択モーダルのイベントをつける
  if (index !== null && typeof index === 'number') {
    slot.onclick = () => openWeaponSelectModal(index);

    // 編成データ（currentDeckWeapons）から装備中の武器を取得
    const wpn = currentDeckWeapons[index];
    
    if (wpn) {
      // --- 武器がセットされている場合 ---
      // スキルがある場合だけHTML行を生成
      const s1HTML = wpn.skill1 ? `<div class="slot-skill-row"><span>${wpn.skill1}</span><span>${wpn.skill1Val}%</span></div>` : "";
      const s2HTML = wpn.skill2 ? `<div class="slot-skill-row"><span>${wpn.skill2}</span><span>${wpn.skill2Val}%</span></div>` : "";
      const s3HTML = wpn.skill3 ? `<div class="slot-skill-row"><span>${wpn.skill3}</span><span>${wpn.skill3Val}%</span></div>` : "";
      const s4HTML = wpn.skill4 ? `<div class="slot-skill-row"><span>${wpn.skill4}</span><span>${wpn.skill4Val}%</span></div>` : "";

// 武器種（wpn.type）を表示に含める修正案
slot.innerHTML = `
  <div class="slot-label">
    <span class="label-text">${label}</span>
    <span class="weapon-type-badge">${wpn.type}</span>
  </div>
  <div class="slot-main-info">
    <div class="weapon-title-row">
      <span class="element-icon el-${wpn.element}">${elementMap[wpn.element] || ''}</span>
      <span class="slot-weapon-name">${wpn.label}</span>
    </div>
  </div>
  <div class="slot-skill-container">
    ${s1HTML}
    ${s2HTML}
    ${s3HTML}
    ${s4HTML}
  </div>
`;
    } else {
      // --- 未設定の場合 ---
      slot.innerHTML = `
        <div class="slot-label">${label}</div>
        <div class="slot-icon">＋</div>
        <div class="slot-name">未設定</div>
      `;
    }
  } else {
    // 召喚石やキャラなど、indexがない場合の汎用表示
    slot.innerHTML = `
      <div class="slot-label">${label}</div>
      <div class="slot-icon">＋</div>
      <div class="slot-name">未設定</div>
    `;
  }

  container.appendChild(slot);
}

// ==========================================
// 武器編成を組み立てる関数
// ==========================================
function setupWeaponGrid() {
  const container = document.getElementById("weapon-slots");
  if (!container) return;
  container.className = "weapon-grid-layout";
  container.innerHTML = "";

  // メイン武器 (index: 0)
  createSlot("weapon-slots", "メイン", "main-slot", 0);

  // サブ武器 9本 (index: 1 ~ 9)
  for (let i = 1; i <= 9; i++) {
    createSlot("weapon-slots", `サブ ${i}`, "sub-slot", i);
  }

  // EX武器 3本 (index: 10 ~ 12)
  for (let i = 1; i <= 3; i++) {
    createSlot("weapon-slots", `EX ${i}`, "ex-slot", 9 + i, `--ex-index: ${i - 1}`);
  }
}

// 4. その他の編成（召喚石・キャラ）
function setupOthers() {

// 各スロットのIDを取得して、中身を一度空にする
  const ids = ["sub-slot-1", "sub-slot-2", "sub-slot-3", "sub-slot-4", "blessing-slot-1", "blessing-slot-2"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = ""; // ここで重複をクリア
  });

// --- 召喚石・加護スロットの描画（2行4列グリッド用） ---
  
  // 1行目
  createSlot("sub-slot-1", "サブ1", "summon-slot", 101);
  createSlot("sub-slot-2", "サブ2", "summon-slot", 102);
  // 加護スロット1（メイン加護用）
  createSlot("blessing-slot-1", "加護のみ1", "blessing-slot", 100); 

  // 2行目
  createSlot("sub-slot-3", "サブ3", "summon-slot", 103);
  createSlot("sub-slot-4", "サブ4", "summon-slot", 104);
  // 加護スロット2（フレンド加護用）
  createSlot("blessing-slot-2", "加護のみ2", "blessing-slot", 200);

  // --- キャラクター編成 ---
  const cContainer = document.getElementById("chara-slots");
  if (cContainer) {
    cContainer.className = "chara-grid-layout";
    cContainer.innerHTML = "";

    // 1. 主人公
    createSlot("chara-slots", "主人公", "slot-card chara-slot chara-hero");

    // 2. メイン 1〜3
    for (let i = 1; i <= 3; i++) {
      const isEnd = i === 3 ? "chara-main-end" : "";
      createSlot(
        "chara-slots",
        `メイン ${i}`,
        `slot-card chara-slot chara-main ${isEnd}`
      );
    }

    // 3. サブ 1〜2
    for (let i = 1; i <= 2; i++) {
      createSlot("chara-slots", `サブ ${i}`, "slot-card chara-slot chara-sub");
    }
  }
}



let currentSelectingSummonSlot = null; // どのスロットを編集中かメモ

// --- 1. ダイアログを開く関数 ---
function openSummonSelect(slotId) {
    currentSelectingSummonSlot = slotId;
    const dialog = document.getElementById('dial-summon-select');
    
    if (dialog) {
        renderSummonSelectionList(); // リストを作成
        dialog.showModal();
    } else {
        console.error("ダイアログ 'dial-summon-select' が見つかりません");
    }
}

// --- 2. リストの中身を作る関数 ---
function renderSummonSelectionList() {
// HTML側のIDがどちらでも動くようにする（ここが真っ暗の原因！）
    const listContainer = document.getElementById('modal-summon-list') || 
                          document.getElementById('summon-selection-list');
    
    if (!listContainer) {
        console.error("表示用のコンテナが見つかりません。HTMLに id='modal-summon-list' があるか確認してください。");
        return;
    }

    // --- ここを修正： IDが違ってもエラーにならないようにする ---
    // HTML側のIDが 'summon-modal-filter-element' か 'summon-select-filter-element' のどちらかを探す
    const filterEl = document.getElementById('summon-modal-filter-element') || 
                     document.getElementById('summon-select-filter-element');
    
    // 見つかればその値を使い、なければ 'all' にする
    const filterValue = filterEl ? filterEl.value : 'all';

    listContainer.innerHTML = '';

    // --- 「外す」ボタンの追加 ---
    const removeDiv = document.createElement('div');
    removeDiv.className = 'summon-selection-item'; 
    removeDiv.style.borderColor = '#c0392b';
    removeDiv.style.backgroundColor = 'rgba(192, 57, 43, 0.1)';
    removeDiv.innerHTML = `
        <div style="color: #e74c3c; font-size: 20px; margin-bottom: 4px;">×</div>
        <div class="sl-name" style="color: #e74c3c; font-weight: bold;">外す</div>
    `;
    removeDiv.onclick = () => {
        removeSummonFromSlot(currentSelectingSummonSlot);
        const dial = document.getElementById('dial-summon-select');
        if (dial) dial.close();
    };
    listContainer.appendChild(removeDiv);

    // --- リスト表示 ---
    Object.values(summonDatabase).forEach(group => {
        if (!group.summons) return;
        Object.entries(group.summons).forEach(([sId, s]) => {
            // 修正した filterValue を使って判定
            if (filterValue !== 'all' && s.element !== filterValue) return;

            const div = document.createElement('div');
            div.className = 'summon-selection-item';
            div.innerHTML = `
                <div class="sl-el el-${s.element}">${elementMap[s.element] || ''}</div>
                <div class="sl-name">${s.label}</div>
                <div class="sl-info">${s.type || ''} 加護:${s.mainValue || 0}%</div>
            `;
            div.onclick = () => {
                applySummonToSlot(sId, s);
                const dial = document.getElementById('dial-summon-select');
                if (dial) dial.close();
            };
            listContainer.appendChild(div);
        });
    });
}

// 装備を外す専用の関数
function removeSummonFromSlot(slotId) {
    const slot = document.getElementById(`slot-${slotId}`);
    if (!slot) return;

    // 1. 見た目を初期状態に戻す
// --- ここを追加：属性背景クラスをすべて消す ---
    slot.classList.remove('bg-fire', 'bg-water', 'bg-earth', 'bg-wind', 'bg-light', 'bg-dark');

    slot.innerHTML = '未設定'; // または元のラベル

    // 2. 編成データ（currentDeck）から削除
    if (window.currentDeck && window.currentDeck.summons) {
        currentDeck.summons[slotId] = null; 
        
        // ★重要：最新の状態（外した状態）を保存する
        localStorage.setItem('gbf_summon_deck', JSON.stringify(currentDeck.summons));
    }

    // --- ここを追加！：召喚石選択ダイアログを閉じる ---
    const dial = document.getElementById('dial-summon-select');
    if (dial) {
        dial.close();
    }

    console.log(`${slotId} の装備を外しました`);
    
    // 3. 加護合計の再計算
    updateSummonTotal(); // 石の合計を更新
    updateSkillTotals(); // ★石が減ったので、武器スキルの計算（加護倍率）もやり直す
}

// 第3引数に = false を入れることで、エラーを防ぎつつ復元判定ができるようになります
function applySummonToSlot(summonId, summonData, isRestoring = false) {
    const slotKey = currentSelectingSummonSlot; 
    const slotId = `slot-${slotKey}`;
    const slot = document.getElementById(slotId);
    
    if (!slot) {
        console.error("スロットが見つかりません:", slotId);
        return;
    }

// --- ここを追加：以前の属性クラスを一度リセット ---
    slot.classList.remove('bg-fire', 'bg-water', 'bg-earth', 'bg-wind', 'bg-light', 'bg-dark');
    
// 属性クラスを付与
    if (summonData.element) {
        const bgClass = `bg-${summonData.element}`;
        slot.classList.add(bgClass);
        console.log("付与したクラス:", bgClass); // コンソールで bg-fire 等が出ているか確認
    }

    slot.classList.add('equipped');

    // --- 加護情報のリスト生成 (ここは既存のロジック) ---
    const kagoList = [];
    if (slotKey === 'main') {
        kagoList.push({
            label: "メイン加護1",
            value: summonData.main1Value || summonData.mainValue || 0,
            type: summonData.main1Type || summonData.mainType || "属性"
        });
        if (summonData.main2Value && summonData.main2Value > 0) {
            kagoList.push({ label: "メイン加護2", value: summonData.main2Value, type: summonData.main2Type || "その他" });
        }
    } else if (slotKey === 'friend') {
        kagoList.push({
            label: "フレ加護",
            value: summonData.friendValue || summonData.main1Value || summonData.mainValue || 0,
            type: summonData.friendType || summonData.main1Type || summonData.mainType || "属性"
        });
    } else {
        kagoList.push({
            label: "サブ加護1",
            value: summonData.sub1Value || summonData.subValue || 0,
            type: summonData.sub1Type || summonData.subType || "サブ"
        });
        if (summonData.sub2Value > 0 || (summonData.sub2Type && summonData.sub2Type !== "なし")) {
            kagoList.push({ label: "サブ加護2", value: summonData.sub2Value || 0, type: summonData.sub2Type || "サブ" });
        }
    }

    // --- HTMLの書き換え ---
    const kagoHtml = kagoList.map(kago => `
        <div class="slot-skill-container" style="width: 100%; border-top: 1px solid #444; margin-top: 2px; padding-top: 2px;">
            <div class="slot-skill-row" style="font-size: 14px; font-weight: bold;">
                <span>${kago.label}</span>
                <span>${kago.value}${kago.type === '与ダメ上昇' ? '' : '%'}</span>
            </div>
            <div class="slot-skill-row" style="font-size: 16px; color: #58a6ff;">
                <span>${kago.type}</span>
            </div>
        </div>
    `).join('');

    slot.innerHTML = `
        <div class="slot-main-info">
            <span class="el-${summonData.element}">${elementMap[summonData.element] || ''}</span>
            <span class="slot-name" style="font-size: 16px;">${summonData.label}</span>
        </div>
        ${kagoHtml}
    `;

    // --- 保存と終了処理 ---
    
    // 復元中ではない場合のみ、ダイアログを閉じてデータを保存する
    if (!isRestoring) {
        const dialog = document.getElementById('dial-summon-select');
        if (dialog) dialog.close();

        // currentDeck変数が無ければ作成して保存
        if (!window.currentDeck) window.currentDeck = { summons: {} };
        currentDeck.summons[slotKey] = summonId;

        // localStorageに保存
        localStorage.setItem('gbf_summon_deck', JSON.stringify(currentDeck.summons));
    }

    // 合計値を計算（これは常に実行）
    updateSummonTotal(); // 石の合計を更新
    updateSkillTotals(); // ★石が減ったので、武器スキルの計算（加護倍率）もやり直す
}


// 最後に実行して画面を作る
setupWeaponGrid();
setupOthers();

function updateSummonTotal() {
    const displayEl = document.getElementById('summon-total-list');
    if (!displayEl) return;

    // 武器エリアと混ざらないよう、召喚石のスロットが並んでいる親要素のIDを指定してください
    // 例として 'summon-slots-container' としていますが、実際のHTMLのIDに合わせてください
    const summonArea = document.getElementById('summon-slots-container') || document.body;
    
    // summonArea の中にあるものだけを探す
    const skillContainers = summonArea.querySelectorAll('.slot-skill-container');

    const totals = {};      
    const subMaxValues = {}; 

    skillContainers.forEach(container => {
        const slotEl = container.closest('.summon-slot');
        if (!slotEl) return; // 召喚石スロット以外（武器など）なら無視
        const isSubSlot = slotEl && (slotEl.id.includes('sub') || slotEl.id.includes('support'));

        // 石の属性を取得 (slot-main-infoの中にある el-xxx クラスを探す)
        const elementEl = slotEl.querySelector('.slot-main-info span[class*="el-"]');
        let elementPrefix = "";
        if (elementEl) {
            // クラス名から 'el-' を除いた部分（fire, waterなど）を取得し、日本語ラベルに変換
            const elKey = elementEl.className.match(/el-(\w+)/)[1];
            elementPrefix = `（${elementMap[elKey] || elKey}）`;
        }

        const row = container.querySelector('.slot-skill-row:first-child');
        const typeEl = container.querySelector('.slot-skill-row[style*="color"]');

        if (row && typeEl) {
            let type = typeEl.innerText.trim();
            const valueText = row.querySelector('span:last-child').innerText;
            const value = parseFloat(valueText.replace('%', '')) || 0;

            if (type && type !== 'なし' && value !== 0) {
                // --- 「属性」タイプの場合のみ、属性名を付与する ---
                if (type === "属性") {
                    type = `属性攻撃力${elementPrefix}`;
                }

                if (isSubSlot) {
                    if (!subMaxValues[type] || value > subMaxValues[type]) {
                        subMaxValues[type] = value;
                    }
                } else {
                    totals[type] = (totals[type] || 0) + value;
                }
            }
        }
    });

    for (const [type, maxVal] of Object.entries(subMaxValues)) {
        totals[type] = (totals[type] || 0) + maxVal;
    }

    // --- 表示処理 ---
    const entries = Object.entries(totals);
    if (entries.length === 0) {
        displayEl.innerHTML = '<div style="color: #666; font-size: 12px; padding: 10px; text-align: center;">石をセットしてください</div>';
        return;
    }

    // 属性別に並び替えると見やすい
    entries.sort();

    displayEl.innerHTML = entries.map(([type, val]) => `
        <div class="total-row" style="display: flex; justify-content: space-between; padding: 4px 12px; border-bottom: 1px solid #333;">
            <span style="color: #58a6ff; font-size: 13px;">${type}</span>
            <span style="font-weight: bold; color: #fff; font-size: 13px;">${val}${type.includes('与ダメ上昇') ? '' : '%'}</span>
        </div>
    `).join('');
}








// ****************************
// **  武器リストページ       **
// ****************************

// --- 1. 武器データ管理変数 ---
// スキルリスト(gbfSkillManagerData)とは別のキーで保存

// 2. イベント登録（ここに追加！）
if (btnAddWeapon) {
    btnAddWeapon.onclick = () => {
        // スキル選択肢を最新の状態にする関数があればここで呼ぶ
        if (typeof updateSkillSelects === 'function') updateSkillSelects();
        
        const dial = document.getElementById('dial-weapon-reg');
        if (dial) dial.showModal();
    };
}

// --- 武器登録ダイアログ操作 ---
const openWeaponDial = () => {
    if (dialWeaponReg) {
        // スキル選択肢を最新にする関数があればここで呼ぶ
        if (typeof updateSkillSelects === 'function') updateSkillSelects();

        // 【追加】シリーズ（グループ）の選択肢をプルダウンに反映
        updateWeaponGroupSelect();
        dialWeaponReg.showModal();
    }
};

// ダイアログを開く
if(btnAddWeapon) btnAddWeapon.onclick = openWeaponDial;
// キャンセルボタンの動作
if(btnWeaponClose) {   
btnWeaponClose.onclick = () => dialWeaponReg.close();
}

if(btnWeaponSave) btnWeaponSave.onclick = () => {
    const nameEl = document.getElementById('we-name');
    const elementEl = document.getElementById('we-element');
    const typeEl = document.getElementById('we-type');
    
    // --- 1. 追加：ダイアログで選択されたグループIDを取得 ---
    const groupSelect = document.getElementById('we-group-select');
    const targetGroupId = groupSelect ? groupSelect.value : activeWeaponGroupId;
    
    if(!nameEl || !nameEl.value) return alert("武器名称を入力してください");

    const newWeaponKey = "wp_" + Date.now();
    
    // --- 2. 修正：activeWeaponGroupId ではなく targetGroupId に保存する ---
    weaponDatabase[targetGroupId].weapons[newWeaponKey] = {
        label: nameEl.value,
        element: elementEl.value,
        type: typeEl ? typeEl.value : "剣",
        skill1: "", skill1Val: 0,
        skill2: "", skill2Val: 0,
        skill3: "", skill3Val: 0,
        skill4: "", skill4Val: 0
    };

    saveWeaponToLocalStorage();
    
    // --- 3. 任意：保存したグループへ自動的に画面を切り替える ---
    activeWeaponGroupId = targetGroupId; 
    
    renderWeaponMasterDB();
    if (typeof renderWeaponSidebar === 'function') renderWeaponSidebar(); // サイドバーの選択状態も更新
    
    dialWeaponReg.close();
    nameEl.value = "";
};

/**
 * スキル名が変更された際に、効果量を自動セットする
 */
window.handleSkillChange = (weaponKey, skillIndex, selectEl) => {
    const selectedLabel = selectEl.value;
    // IDを使って入力欄を特定
    const valInput = document.getElementById(`val-${weaponKey}-${skillIndex}`);
    
    console.log("選択されたスキル:", selectedLabel); // デバッグ用

    let autoValue = 0;

    if (selectedLabel !== "") {
        // skillDatabaseの中を総当たりで検索
        for (const groupId in skillDatabase) {
            const group = skillDatabase[groupId];
            if (!group.skills) continue;

            for (const sKey in group.skills) {
                const skill = group.skills[sKey];
                // ラベル名が一致するかチェック
                if (skill.label === selectedLabel) {
                    if (skill.effects && skill.effects.length > 0) {
                        autoValue = skill.effects[0].value;
                        console.log("マッチした数値:", autoValue);
                        break;
                    }
                }
            }
            if (autoValue !== 0) break;
        }
    }

    // 画面に反映
    if (valInput) {
        valInput.value = autoValue;
    } else {
        console.error("入力欄が見つかりません: " + `val-${weaponKey}-${skillIndex}`);
    }

    // データベース保存
    const currentGroup = weaponDatabase[activeWeaponGroupId];
    if (currentGroup && currentGroup.weapons[weaponKey]) {
        currentGroup.weapons[weaponKey][`skill${skillIndex}`] = selectedLabel;
        currentGroup.weapons[weaponKey][`skill${skillIndex}Val`] = autoValue;
        saveWeaponToLocalStorage();
    }
};

// --- 2. 武器テーブル描画関数 ---
function renderWeaponMasterDB() {
    if (!weaponMasterBody) return;
    weaponMasterBody.innerHTML = "";

const filterEl = document.getElementById('weapon-filter-element').value;
    const currentGroup = weaponDatabase[activeWeaponGroupId];
    const currentWeapons = currentGroup.weapons;

    // 件数カウント更新
    const weaponKeys = Object.keys(currentWeapons);
    const countEl = document.getElementById('weapon-current-count');
    if (countEl) {
        countEl.innerText = `(全 ${weaponKeys.length} 件)`;
    }

weaponKeys.forEach(key => {
        const wp = currentWeapons[key];

        // フィルタリング
        if (filterEl !== 'all' && wp.element !== filterEl) return;

        const tr = document.createElement('tr');
        const elLabel = wp.element || 'none';
        const elJapanese = elementMap[elLabel] || elLabel;

// スキル選択肢の生成（スキルデータベースから動的に取得する想定）
        // ここでは4枠分ループ
let skillsHtml = "";
        for (let i = 1; i <= 4; i++) {
            const sKey = wp[`skill${i}`] || "";
            const sVal = wp[`skill${i}Val`] || 0;
            // 追加：加護フラグの状態を取得（未定義ならtrueをデフォルトにする）
            const isKago = wp[`skill${i}Kago`] !== false;

            skillsHtml += `
    <td>
        <select class="weapon-edit-skill" data-index="${i}" 
                onchange="handleSkillChange('${key}', ${i}, this)"> 
            <option value="">(なし)</option>
            ${generateSkillOptions(sKey)} 
        </select>
    </td>
    <td>
        <div style="display: flex; align-items: center; gap: 4px;">
            <input type="number" value="${sVal}" class="weapon-edit-eff-val" 
                   id="val-${key}-${i}"  
                   readonly 
                   tabindex="-1"
                   style="width: 50px; background-color: #1c2128; color: #8b949e; cursor: not-allowed; border: 1px solid #30363d;">
            
            <label class="kago-toggle" title="加護対象">
                <input type="checkbox" ${isKago ? 'checked' : ''} 
                       onchange="updateKagoFlag('${key}', ${i}, this)" 
                       style="display: none;">
                <span class="kago-icon" style="cursor: pointer; font-size: 14px; filter: ${isKago ? 'none' : 'grayscale(1) opacity(0.3)'};">✨</span>
            </label>
        </div>
    </td>
`;
        }

tr.innerHTML = `
    <td class="el-${elLabel}">${elJapanese}</td>
    <td><input type="text" value="${wp.label}" class="we-edit-label" onblur="saveWeaponDetail('${key}', this)"></td>
    
    <td>
      <input type="text" value="${wp.type || ''}" class="we-edit-type" placeholder="武器種" onblur="saveWeaponDetail('${key}', this)">
    </td>
    
    ${skillsHtml}
<td class="master-action-cell">
        <button class="move-btn" onclick="moveWeapon(event, '${key}', -1)" title="上へ">▲</button>
        <button class="move-btn" onclick="moveWeapon(event, '${key}', 1)" title="下へ">▼</button>
        <button class="delete-btn" onclick="deleteWeapon('${key}')">削除</button>
    </td>
`;
        weaponMasterBody.appendChild(tr);
    });
}

// スキル選択肢を生成するヘルパー（スキルリスト側のデータを利用）
function generateSkillOptions(selectedLabel) { // 引数名をlabelに合わせておくと分かりやすい
    let options = "";
    Object.keys(skillDatabase).forEach(gid => {
        const group = skillDatabase[gid];
        options += `<optgroup label="${group.name}">`;
        Object.keys(group.skills).forEach(sk => {
            const skill = group.skills[sk];
            // valueを sk(ID) ではなく skill.label(名前) にする
            const isSelected = skill.label === selectedLabel ? "selected" : "";
            options += `<option value="${skill.label}" ${isSelected}>${skill.label}</option>`;
        });
        options += `</optgroup>`;
    });
    return options;
}

// --- 3. 保存・編集ロジック ---
window.saveWeaponMaster = (key, element) => {
    const row = element.closest('tr');
    const targetWp = weaponDatabase[activeWeaponGroupId].weapons[key];
    
    targetWp.label = row.querySelector('.weapon-edit-label').value;
    targetWp.level = Number(row.querySelector('.weapon-edit-lv').value);
    targetWp.element = row.cells[0].className.replace('weapon-el-', '');

    const skillSelects = row.querySelectorAll('.weapon-edit-skill');
    const valInputs = row.querySelectorAll('.weapon-edit-eff-val');

    for (let i = 0; i < 4; i++) {
        targetWp[`skill${i+1}`] = skillSelects[i].value;
        targetWp[`skill${i+1}Val`] = Number(valInputs[i].value);
    }

    saveWeaponToLocalStorage();
    element.classList.add('weapon-saved-flash');
    setTimeout(() => element.classList.remove('weapon-saved-flash'), 500);
};

// --- 4. グループ（シリーズ）管理 ---
function renderWeaponSidebar() {
    if (!weaponGroupListContainer) return;
    weaponGroupListContainer.innerHTML = "";
    
    const groupIds = Object.keys(weaponDatabase);
    groupIds.forEach((id, index) => {
        const li = document.createElement('li');
        li.className = `weapon-group-item ${id === activeWeaponGroupId ? 'active' : ''}`;
        
        const isFirst = index === 0;
        const isLast = index === groupIds.length - 1;

        li.innerHTML = `
            <span class="weapon-group-name">${weaponDatabase[id].name}</span>
            <div class="weapon-group-controls">
                <button class="weapon-move-btn ${isFirst ? 'is-hidden' : ''}" onclick="moveWeaponGroup(event, ${index}, -1)">▲</button>
                <button class="weapon-move-btn ${isLast ? 'is-hidden' : ''}" onclick="moveWeaponGroup(event, ${index}, 1)">▼</button>
                <button class="weapon-edit-group-btn" onclick="renameWeaponGroup(event, '${id}')">✎</button>
                <button class="weapon-delete-group-btn" onclick="deleteWeaponGroup(event, '${id}')">×</button>
            </div>
        `;
        li.onclick = () => selectWeaponGroup(id);
        weaponGroupListContainer.appendChild(li);
    });
}

function selectWeaponGroup(id) {
    activeWeaponGroupId = id;
    renderWeaponSidebar();
    const titleEl = document.getElementById('weapon-current-group-name');
    if (titleEl) titleEl.innerText = weaponDatabase[activeWeaponGroupId].name;
    renderWeaponMasterDB();
}

// 武器追加ボタン（ダイアログ表示）
// 「シリーズ」の横にある「＋」ボタン
const weaponAddGroupBtn = document.getElementById('weapon-add-group-btn'); 

if (weaponAddGroupBtn) {
    weaponAddGroupBtn.onclick = () => {
        const groupName = prompt("新しいシリーズ名を入力してください");
        if (groupName) {
            const groupId = "wgroup_" + Date.now();
            weaponDatabase[groupId] = {
                name: groupName,
                weapons: {}
            };
            saveWeaponToLocalStorage();
            renderWeaponSidebar();
            selectWeaponGroup(groupId);
        }
    };
}

// シリーズの選択肢を更新する関数
function updateWeaponGroupSelect() {
    const selectEl = document.getElementById('we-group-select');
    if (!selectEl) return;

    selectEl.innerHTML = ""; // 一旦クリア

    Object.keys(weaponDatabase).forEach(groupId => {
        const group = weaponDatabase[groupId];
        const option = document.createElement('option');
        option.value = groupId;
        option.innerText = group.name || groupId; // グループ名を表示
        
        // 現在選択中のグループを初期選択状態にする
        if (groupId === activeWeaponGroupId) {
            option.selected = true;
        }
        
        selectEl.appendChild(option);
    });
}

// --- 武器シリーズの並び替え関数 ---
window.moveWeaponGroup = (event, index, direction) => {
    event.stopPropagation(); // 親要素（li）のクリックイベントを止める

    const keys = Object.keys(weaponDatabase);
    const newIndex = index + direction;

    // 範囲外なら何もしない
    if (newIndex < 0 || newIndex >= keys.length) return;

    // キーの配列を並び替え
    const targetKeys = [...keys];
    const [movedKey] = targetKeys.splice(index, 1);
    targetKeys.splice(newIndex, 0, movedKey);

    // 新しい順番でオブジェクトを再構築
    const newDatabase = {};
    targetKeys.forEach(key => {
        newDatabase[key] = weaponDatabase[key];
    });

    // 元のデータベースの中身を入れ替え
    for (let key in weaponDatabase) delete weaponDatabase[key];
    Object.assign(weaponDatabase, newDatabase);

    // 保存と再描画（武器専用の関数名であることを確認してください）
    if (typeof saveWeaponToLocalStorage === 'function') {
        saveWeaponToLocalStorage();
    }
    renderWeaponSidebar();
};

// --- 武器シリーズ名の変更関数 ---
window.renameWeaponGroup = (event, id) => {
    event.stopPropagation();
    const oldName = weaponDatabase[id].name;
    const newName = prompt("新しいシリーズ名を入力してください", oldName);

    if (newName && newName !== oldName) {
        weaponDatabase[id].name = newName;
        saveWeaponToLocalStorage();
        renderWeaponSidebar();
    }
};

// --- 武器シリーズの削除関数 ---
window.deleteWeaponGroup = (event, id) => {
    event.stopPropagation();
    if (!confirm(`シリーズ「${weaponDatabase[id].name}」を削除してもよろしいですか？`)) return;

    delete weaponDatabase[id];

    // 削除したグループを表示中だった場合の処理
    if (activeWeaponGroupId === id) {
        const keys = Object.keys(weaponDatabase);
        activeWeaponGroupId = keys.length > 0 ? keys[0] : null;
    }

    saveWeaponToLocalStorage();
    renderWeaponSidebar();
    renderWeaponMasterDB();
};

window.saveWeaponDetail = (key, element) => {
    // 現在表示されている（アクティブな）グループを取得
    const group = weaponDatabase[activeWeaponGroupId];
    if (!group || !group.weapons[key]) {
        console.error("保存先の武器が見つかりません:", key);
        return;
    }

    const wp = group.weapons[key];
    const row = element.closest('tr');

    // 武器名と武器種を取得してデータに反映
    const nameInput = row.querySelector('.we-edit-label');
    const typeInput = row.querySelector('.we-edit-type');

    if (nameInput) wp.label = nameInput.value;
    if (typeInput) wp.type = typeInput.value;

    // ローカルストレージに書き込み
    saveWeaponToLocalStorage();
    
    // 保存したことがわかるように一瞬光らせる（任意）
    element.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
    setTimeout(() => {
        element.style.backgroundColor = "";
    }, 100);

    console.log(`保存完了: ${wp.label} (${wp.type})`);
};

// --- 5. 共通処理 (LocalStorage / インポート・エクスポート) ---

function saveWeaponToLocalStorage() {
    // 修正: weaponDatabase を JSON 文字列にして保存
    localStorage.setItem('weapon_db_data', JSON.stringify(weaponDatabase));
    console.log("武器データをLocalStorageに保存しました");
}

function saveAllWeapons() {
    saveWeaponToLocalStorage();
    alert("全ての武器データを保存しました。");
    renderWeaponMasterDB();
}

// 武器削除
window.deleteWeaponMaster = (key) => {
    if (!confirm("この武器データを削除しますか？")) return;
    delete weaponDatabase[activeWeaponGroupId].weapons[key];
    saveWeaponToLocalStorage();
    renderWeaponMasterDB();
};

// 武器の並び替え
window.moveWeapon = (event, key, direction) => {
    const currentWps = weaponDatabase[activeWeaponGroupId].weapons;
    const keys = Object.keys(currentWps);
    const index = keys.indexOf(key);
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= keys.length) return;

    const targetKeys = [...keys];
    const [movedKey] = targetKeys.splice(index, 1);
    targetKeys.splice(newIndex, 0, movedKey);

    const newWps = {};
    targetKeys.forEach(k => newWps[k] = currentWps[k]);
    weaponDatabase[activeWeaponGroupId].weapons = newWps;
    saveWeaponToLocalStorage();
    renderWeaponMasterDB();
};

// 加護フラグを更新して保存する関数
window.updateKagoFlag = (weaponKey, skillIndex, checkbox) => {
    const wp = weaponDatabase[activeWeaponGroupId].weapons[weaponKey];
    if (wp) {
        wp[`skill${skillIndex}Kago`] = checkbox.checked;
        
        // アイコンの見た目を即座に変える（グレースケール制御）
        const icon = checkbox.nextElementSibling;
        icon.style.filter = checkbox.checked ? 'none' : 'grayscale(1) opacity(0.3)';
        
        saveWeaponToLocalStorage();
        // 編成画面の計算結果にも影響するので、必要なら再計算を走らせる
        if (typeof updateSkillTotals === 'function') updateSkillTotals();
    }
};

// 初期化実行
document.getElementById('weapon-filter-element').onchange = renderWeaponMasterDB;
renderWeaponSidebar();
renderWeaponMasterDB();

// --- 武器バックアップ（エクスポート）機能 ---
const weaponBtnExport = document.getElementById('weapon-btn-export');
if (weaponBtnExport) {
    weaponBtnExport.onclick = () => {
        // 武器データをJSON文字列に変換
        const dataStr = JSON.stringify(weaponDatabase, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // ダウンロード用のリンクを作成して実行
        const a = document.createElement('a');
        const date = new Date().toISOString().split('T')[0];
        a.href = url;
        a.download = `gbf_weapons_backup_${date}.json`; // ファイル名を武器用に変更
        a.click();
        
        URL.revokeObjectURL(url);
    };
}

// --- 武器復元（インポート）機能 ---
const weaponImportFile = document.getElementById('weapon-import-file');
const weaponBtnImport = document.getElementById('weapon-btn-import');

if (weaponBtnImport && weaponImportFile) {
    weaponBtnImport.onclick = () => weaponImportFile.click();

    weaponImportFile.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);
                
                // バリデーション：インポートされたデータが武器データっぽいか簡易チェック
                // (データ構造が武器グループ形式であることを確認)
                const firstKey = Object.keys(importedData)[0];
                if (firstKey && !importedData[firstKey].weapons && !importedData[firstKey].list) {
                     throw new Error("Invalid format");
                }

                if (confirm("武器データを上書きして復元しますか？現在の武器データは消去されます。")) {
                    // 既存の武器データを削除
                    for (let key in weaponDatabase) delete weaponDatabase[key];
                    // 新しいデータを流し込む
                    Object.assign(weaponDatabase, importedData);
                    
                    // 武器専用の保存関数を実行
                    saveWeaponToLocalStorage();
                    
                    alert("武器データを復元しました。");
                    location.reload(); 
                }
            } catch (err) {
                alert("武器バックアップファイルの形式が正しくないか、ファイルが壊れています。");
            }
        };
        reader.readAsText(file);
        
        // 同じファイルを再度選択しても発火するようにリセット
        e.target.value = '';
    };
}









// --- 3. ダイアログ操作 ---
const openDial = () => dialReg.showModal();
if(btnOpen) btnOpen.onclick = openDial;
if(btnOpenMain) btnOpenMain.onclick = openDial;
if(btnClose) btnClose.onclick = () => dialReg.close();

// 保存処理
if(btnSave) btnSave.onclick = () => {
    const name = document.getElementById('in-name').value;
    const element = document.getElementById('in-element').value;
    
    if(!name) return alert("名称を入力してください");

    // skillMasterに新規追加（キーは簡易的に名称から生成）
    const newKey = "custom_" + Date.now();
    skillDatabase[activeGroupId].skills[newKey] = {
        label: name,
        element: element,
        level: 10, // デフォルト値
        effects: [
            { type: "通常攻刃", value: 0 },
            { type: "", value: 0 },
            { type: "", value: 0 },
            { type: "", value: 0 }
        ]
    };

    saveToLocalStorage(); // 保存を実行！
    renderMasterDB();
    dialReg.close();
    document.getElementById('in-name').value = "";
};

// --- テーブル描画関数の修正 (skillDatabase[activeGroupId]を参照するように変更) ---
// app.js の renderMasterDB 関数を差し替え
function renderMasterDB() {
    if(!masterBody) return;

    // --- 追加: 安全チェック ---
    if (!activeGroupId || !skillDatabase[activeGroupId]) {
        console.warn("有効なスキルグループが選択されていません。ID:", activeGroupId);
        masterBody.innerHTML = '<tr><td colspan="11" style="text-align:center;">グループを選択してください</td></tr>';
        
        // 件数表示も0にリセット
        const countEl = document.querySelector('.weapon-count'); // クラス名はご自身の環境に合わせてください
        if (countEl) countEl.innerText = `(全 0 件)`;
        return; 
    }
    // --- ここまで ---

    masterBody.innerHTML = "";
    
    const filterEl = document.getElementById('filter-element').value;
    const currentGroup = skillDatabase[activeGroupId]; // 現在のグループデータ
    const currentSkills = currentGroup.skills;

    // --- ここから件数カウントと表示更新 ---
    const skillKeys = Object.keys(currentSkills);
    const totalCount = skillKeys.length; // 登録されている全件数
    
    // HTML上の (全 22 件) の部分を書き換え
    const countEl = document.querySelector('.count');
    if (countEl) {
        countEl.innerText = `(全 ${totalCount} 件)`;
    }

    for (const key in currentSkills) {
        const skill = currentSkills[key];

        // フィルタリング（表示上のみ除外するが、合計件数には含める場合）
        if(filterEl !== 'all' && skill.element !== filterEl) continue;

        const tr = document.createElement('tr');
        const elLabel = skill.element || 'none';
        const elJapanese = elementMap[elLabel] || elLabel;

// 効果量4枠分のHTMLを生成
        let effectsHtml = "";
        for(let i = 0; i < 4; i++) {
            const eff = skill.effects[i] || { type: "", value: 0 };
            effectsHtml += `
                <td>
                    <input type="text" value="${eff.type}" class="edit-eff-type" 
                           data-index="${i}" onblur="saveMaster('${key}', this)">
                </td>
                <td>
                    <input type="number" value="${eff.value}" class="edit-eff-val" 
                           data-index="${i}" onblur="saveMaster('${key}', this)">
                </td>
            `;
        }

// renderMasterDB関数内のループ処理の中
tr.innerHTML = `
    <td class="el-${elLabel}">${elJapanese}</td>
    <td><input type="text" value="${skill.label}" class="edit-label" onblur="saveMaster('${key}', this)"></td>
    <td><input type="number" value="${skill.level}" class="edit-lv" onblur="saveMaster('${key}', this)"></td>
    ${effectsHtml}
    <td>
        <button class="move-btn" onclick="moveSkill(event, '${key}', -1)" title="上へ">▲</button>
        <button class="move-btn" onclick="moveSkill(event, '${key}', 1)" title="下へ">▼</button>
        <button class="delete-btn" onclick="deleteMaster('${key}')">削除</button>
    </td>
`;
        masterBody.appendChild(tr);
    }
}

// フィルタイベント
document.getElementById('filter-element').onchange = renderMasterDB;

window.saveMaster = (key, element) => {
    // element がボタンでも入力欄でも、一番近い <tr> (行) を探すように変更
    const row = element.closest('tr');
    const targetSkill = skillDatabase[activeGroupId].skills[key];
    
    targetSkill.label = row.querySelector('.edit-label').value;
    targetSkill.level = Number(row.querySelector('.edit-lv').value);

    const types = row.querySelectorAll('.edit-eff-type');
    const vals = row.querySelectorAll('.edit-eff-val');

    targetSkill.effects = [];
    for(let i = 0; i < 4; i++) {
        targetSkill.effects.push({
            type: types[i].value,
            value: Number(vals[i].value)
        });
    }

    saveToLocalStorage();

    // 演出：もし呼び出し元がボタンなら「DONE」にする
    if (element.tagName === "BUTTON") {
        element.innerText = "DONE";
        setTimeout(() => element.innerText = "保存", 1000);
    } else {
        // もし呼び出し元が入力欄（input）なら、一瞬光らせる
        element.classList.add('saved-flash');
        setTimeout(() => element.classList.remove('saved-flash'), 500);
    }
};

// スキル（武器）を削除する関数
window.deleteMaster = (key) => {
    // こちらも確認を入れるとより安全です
    if (!confirm("このスキルデータを削除しますか？")) {
        return;
    }

    delete skillDatabase[activeGroupId].skills[key];
    saveToLocalStorage();
    renderMasterDB();
};

// --- 5. グループ管理機能 (app.js の一番最後に追加) ---

const addGroupBtn = document.getElementById('add-group-btn');
const groupListContainer = document.getElementById('group-list');

// グループ追加ボタンのクリックイベント
if (addGroupBtn) {
    addGroupBtn.onclick = () => {
        const groupName = prompt("新しいグループ名を入力してください");
        if (groupName) {
            const groupId = "group_" + Date.now(); // ユニークなIDを生成
            
            // データ構造に追加
            skillDatabase[groupId] = {
                name: groupName,
                skills: {}
            };
            
            // 再描画して選択
            saveToLocalStorage();
            renderSidebar(); 
            selectGroup(groupId);
        }
    };
}

// サイドバーの表示を更新する関数
function renderSidebar() {
    if (!groupListContainer) return;
    groupListContainer.innerHTML = "";
    
// skillDatabaseのキー（ID）を配列にして、現在の順番を管理
    const groupIds = Object.keys(skillDatabase);
    
    groupIds.forEach((id, index) => {
        const li = document.createElement('li');
        li.className = `group-item ${id === activeGroupId ? 'active' : ''}`;
        
// 最初なら「上へ」を隠し、最後なら「下へ」を隠す判定
        const isFirst = index === 0;
        const isLast = index === groupIds.length - 1;

        li.innerHTML = `
            <span class="group-name">${skillDatabase[id].name}</span>
            <div class="group-controls">
                <button class="move-btn ${isFirst ? 'is-hidden' : ''}" 
                        onclick="moveGroup(event, ${index}, -1)" title="上へ">▲</button>
                <button class="move-btn ${isLast ? 'is-hidden' : ''}" 
                        onclick="moveGroup(event, ${index}, 1)" title="下へ">▼</button>
                <button class="edit-group-btn" onclick="renameGroup(event, '${id}')" title="名前を変更">✎</button>
                <button class="delete-group-btn" onclick="deleteGroup(event, '${id}')" title="削除">×</button>
            </div>
        `;
        
        li.onclick = () => selectGroup(id);
        groupListContainer.appendChild(li);
    });
}

// グループを切り替える関数
function selectGroup(id) {
    activeGroupId = id;
    
    // サイドバーの見た目を更新
    renderSidebar();
    
    // 右側のメインタイトルを更新
    const groupData = skillDatabase[activeGroupId];
    const titleEl = document.getElementById('current-group-name');
    if (titleEl) titleEl.innerText = groupData.name;
    
    // テーブルの中身を現在のグループのデータで描き変え
    renderMasterDB();
}

// データをブラウザに保存する関数
function saveToLocalStorage() {
    localStorage.setItem('gbfSkillManagerData', JSON.stringify(skillDatabase));
}

// 保存したデータを読み込む関数
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('gbfSkillManagerData');
    if (savedData) {
        // 保存されたデータがあれば、今のskillDatabaseを上書きする
        const parsedData = JSON.parse(savedData);
        // 既存のデータを消して、保存されていたデータを入れ直す
        for (let key in skillDatabase) delete skillDatabase[key];
        Object.assign(skillDatabase, parsedData);
    }
}

// グループを削除する関数
window.deleteGroup = (event, id) => {
    event.stopPropagation();
    
    // 確認ダイアログを表示
    if (!confirm(`グループ「${skillDatabase[id].name}」を削除してもよろしいですか？\n中に入っているスキルデータもすべて消去されます。`)) {
        return; // 「キャンセル」を押したらここで処理を終了
    }

    delete skillDatabase[id];
    
    if (activeGroupId === id) {
        const keys = Object.keys(skillDatabase);
        activeGroupId = keys.length > 0 ? keys[0] : null;
    }
    
    saveToLocalStorage();
    renderSidebar();
    renderMasterDB();
};

// グループ名を変更する関数
window.renameGroup = (event, id) => {
    event.stopPropagation(); // 親要素のクリック（グループ選択）が動かないようにする
    
    const oldName = skillDatabase[id].name;
    const newName = prompt("新しいグループ名を入力してください", oldName);
    
    if (newName && newName !== oldName) {
        // 1. データを更新
        skillDatabase[id].name = newName;
        
        // 2. ブラウザに保存
        saveToLocalStorage();
        
        // 3. サイドバーの表示を更新
        renderSidebar();
        
        // 4. 今開いているグループなら右側のタイトルも更新
        if (activeGroupId === id) {
            const titleEl = document.getElementById('current-group-name');
            if (titleEl) titleEl.innerText = newName;
        }
    }
};

// ==========================================
// グループ名入れ替えボタンの動作
// ==========================================

window.moveGroup = (event, index, direction) => {
    event.stopPropagation(); 
    
    const keys = Object.keys(skillDatabase);
    const newIndex = index + direction;
    
    if (newIndex < 0 || newIndex >= keys.length) return;
    
    const targetKeys = [...keys];
    const [movedKey] = targetKeys.splice(index, 1);
    targetKeys.splice(newIndex, 0, movedKey);
    
    const newDatabase = {};
    targetKeys.forEach(key => {
        newDatabase[key] = skillDatabase[key];
    });
    
    for (let key in skillDatabase) delete skillDatabase[key];
    Object.assign(skillDatabase, newDatabase);
    
    saveToLocalStorage();
    renderSidebar();
};

// --- バックアップ（エクスポート）機能 ---
document.getElementById('btn-export').onclick = () => {
    // 現在のデータをJSON文字列に変換
    const dataStr = JSON.stringify(skillDatabase, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // ダウンロード用のリンクを作成して実行
    const a = document.createElement('a');
    const date = new Date().toISOString().split('T')[0];
    a.href = url;
    a.download = `gbf_skills_backup_${date}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
};

// --- 復元（インポート）機能 ---
const importFile = document.getElementById('import-file');
document.getElementById('btn-import').onclick = () => importFile.click();

importFile.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const importedData = JSON.parse(event.target.result);
            
            if (confirm("データを上書きして復元しますか？現在のデータは消去されます。")) {
                // データを入れ替え
                for (let key in skillDatabase) delete skillDatabase[key];
                Object.assign(skillDatabase, importedData);
                
                // 保存して画面を更新
                saveToLocalStorage();
                location.reload(); // 確実に反映させるためリロード
            }
        } catch (err) {
            alert("ファイルの形式が正しくありません。");
        }
    };
    reader.readAsText(file);
};

/**
 * 表示されている全てのスキルを一括で保存する
 */
function saveAllSkills() {
    // テーブル内の全ての「保存」ボタンを取得
    const saveButtons = document.querySelectorAll('.edit-btn');
    
    if (saveButtons.length === 0) {
        alert("保存するデータがありません。");
        return;
    }

    // 全ての保存ボタンを順番にクリック実行
    saveButtons.forEach(btn => btn.click());
    
    alert("全てのスキルを保存しました！");
}

// スキルの順番を入れ替える関数
window.moveSkill = (event, key, direction) => {
    const currentSkills = skillDatabase[activeGroupId].skills;
    const keys = Object.keys(currentSkills);
    const index = keys.indexOf(key);
    const newIndex = index + direction;

    // 範囲外なら何もしない
    if (newIndex < 0 || newIndex >= keys.length) return;

    // キーの配列を並べ替える
    const targetKeys = [...keys];
    const [movedKey] = targetKeys.splice(index, 1);
    targetKeys.splice(newIndex, 0, movedKey);

    // 新しい順番でオブジェクトを再構築
    const newSkills = {};
    targetKeys.forEach(k => {
        newSkills[k] = currentSkills[k];
    });

    // データを上書きして保存・再描画
    skillDatabase[activeGroupId].skills = newSkills;
    saveToLocalStorage();
    renderMasterDB();
};





// 召喚石画面のすべてを更新する
function refreshSummonDB() {
  renderSummonGroups();
  renderSummonTable();
}

// サイドバーのグループ一覧を描画
function renderSummonGroups() {
  const list = document.getElementById('summon-group-list');
  if (!list) return;
  list.innerHTML = '';

  Object.keys(summonDatabase).forEach(id => {
    const group = summonDatabase[id];
    const li = document.createElement('li');
        li.className = `group-item ${id === activeSummonGroupId ? 'active' : ''}`;
        li.innerHTML = `<span class="group-name">${group.name}</span>`;
        li.onclick = () => {
      activeSummonGroupId = id;
      refreshSummonDB();
    };
    list.appendChild(li);
  });
}

function addNewSummonGroup() {
    const groupName = prompt("新しい召喚石シリーズの名前を入力してください", "新シリーズ");

    if (groupName === null || groupName.trim() === "") return;

    const newGroupId = "group_" + Date.now();

    // 1. データベースに追加
    summonDatabase[newGroupId] = {
        name: groupName,
        summons: {}
    };

    activeSummonGroupId = newGroupId;

    // 2. 画面を更新
    if (typeof refreshSummonDB === 'function') {
        refreshSummonDB();
    } else {
        renderSummonGroups();
        renderSummonTable();
    }
    
    // 3. 【重要】ここを確実に保存される書き方に変更
    // 関数があれば実行し、なければ直接localStorageに書き込む
    if (typeof saveSummonDatabase === 'function') {
        saveSummonDatabase();
    } else {
        localStorage.setItem('gbf_summon_db', JSON.stringify(summonDatabase));
        console.log("直接保存を実行しました");
    }
}

// メインテーブルの石一覧を描画
function renderSummonTable() {
    const body = document.getElementById('summon-master-body');
    if (!body || !activeSummonGroupId) return;

    const group = summonDatabase[activeSummonGroupId];
    const filterEl = document.getElementById('summon-filter-element').value;
    document.getElementById('current-summon-group-name').innerText = group.name;
    const count = Object.keys(group.summons).length;
    document.getElementById('summon-count').innerText = `(全 ${count} 件)`;
    
    body.innerHTML = '';

    Object.entries(group.summons).forEach(([sId, s]) => {
        
        if (filterEl !== 'all' && s.element !== filterEl) {
            return; 
        }

        const tr = document.createElement('tr');
        const elementLabel = elementMap[s.element] || s.element;

        // タイプ選択の共通パーツ
        const typeOptions1 = (val) => `
            <option value="神石" ${val === '神石' ? 'selected' : ''}>神石</option>
            <option value="マグナ" ${val === 'マグナ' ? 'selected' : ''}>マグナ</option>
            <option value="属性" ${val === '属性' ? 'selected' : ''}>属性</option>
            <option value="その他" ${val === 'その他' ? 'selected' : ''}>その他</option>
            <option value="加護なし" ${val === '加護なし' ? 'selected' : ''}>加護なし</option>
        `;

        const typeOptions2 = (val) => `
            <option value="神石" ${val === '神石' ? 'selected' : ''}>神石</option>
            <option value="マグナ" ${val === 'マグナ' ? 'selected' : ''}>マグナ</option>
            <option value="属性" ${val === '属性' ? 'selected' : ''}>属性</option>
            <option value="TA率" ${val === 'TA率' ? 'selected' : ''}>TA率</option>
            <option value="HP" ${val === 'HP' ? 'selected' : ''}>HP</option>
            <option value="加護なし" ${val === '加護なし' ? 'selected' : ''}>加護なし</option>
        `;

// --- renderSummonTable 関数内 ---

// サブ加護用の選択肢パーツ
const subTypeOptions = (val) => {
    const opts = ["サブ加護", "属性", "攻撃力", "防御力", "HP", "与ダメ上昇", "与ダメUP", "ダメ上限", "なし"];
    return opts.map(opt => 
        `<option value="${opt}" ${val === opt ? 'selected' : ''}>${opt}</option>`
    ).join('');
};

// ★ tr.innerHTML を以下に差し替え
tr.innerHTML = `
    <td><span class="el-${s.element}">${elementLabel}</span></td>
    <td><input type="text" value="${s.label}" class="edit-summon-label"></td>
    
    <td><select class="edit-summon-main1-type">${typeOptions1(s.main1Type || s.mainType)}</select></td>
    <td><input type="number" value="${s.main1Value || s.mainValue || 0}" class="edit-summon-main1-val">%</td>
    
    <td><select class="edit-summon-main2-type">${typeOptions2(s.main2Type || '加護なし')}</select></td>
    <td><input type="number" value="${s.main2Value || 0}" class="edit-summon-main2-val">%</td>
    
    <td><select class="edit-summon-friend-type">${typeOptions1(s.friendType || s.mainType)}</select></td>
    <td><input type="number" value="${s.friendValue || s.mainValue || 0}" class="edit-summon-friend-val">%</td>
    
    <td>
        <select class="edit-summon-sub1-type">
            ${subTypeOptions(s.sub1Type || s.subType || 'なし')}
        </select>
    </td>
    <td><input type="number" value="${s.sub1Value || s.subValue || 0}" class="edit-summon-sub1-val">%</td>

    <td>
        <select class="edit-summon-sub2-type">
            ${subTypeOptions(s.sub2Type || s.subType2 || 'なし')}
        </select>
    </td>
    <td><input type="number" value="${s.sub2Value || s.subValue2 || 0}" class="edit-summon-sub2-val">%</td>
    
    <td>
        <div class="action-cell">
            <button class="move-btn" onclick="moveSummon('${sId}', -1)">▲</button>
            <button class="move-btn" onclick="moveSummon('${sId}', 1)">▼</button>
            <button class="delete-btn" onclick="deleteSummon('${sId}')">削除</button>
        </div>
    </td>
`;
    body.appendChild(tr);
    });
}

function saveSummonChanges() {
    if (!activeSummonGroupId) return;
    const group = summonDatabase[activeSummonGroupId];
    const rows = document.querySelectorAll('#summon-master-body tr');

    // フィルタリング（属性絞り込み）の状態を考慮して、
    // 画面に表示されている行から正しいsIdを特定して保存します
    rows.forEach((tr) => {
        // 削除ボタンや移動ボタンに埋め込んだ sId を取得するのが最も確実です
        // もしボタンに sId がない場合は、行のデータ属性などから取得する必要があります
        // ここでは、以前作成したボタンの onclick 属性から sId を抽出する例にします
        const deleteBtn = tr.querySelector('.delete-btn');
        if (!deleteBtn) return;
        
        // onclick="deleteSummon('ID')" から ID を抽出
        const sId = deleteBtn.getAttribute('onclick').match(/'([^']+)'/)[1];
        const s = group.summons[sId];
        if (!s) return;

        // 名称
        s.label = tr.querySelector('.edit-summon-label').value;
        
        // メイン1 (mainType/mainValue から main1Type/main1Value に移行)
        s.main1Type = tr.querySelector('.edit-summon-main1-type').value;
        s.main1Value = parseInt(tr.querySelector('.edit-summon-main1-val').value) || 0;

        // メイン2
        s.main2Type = tr.querySelector('.edit-summon-main2-type').value;
        s.main2Value = parseInt(tr.querySelector('.edit-summon-main2-val').value) || 0;
        
        // フレンド
        s.friendType = tr.querySelector('.edit-summon-friend-type').value;
        s.friendValue = parseInt(tr.querySelector('.edit-summon-friend-val').value) || 0;
        
        // サブ1
        s.sub1Type = tr.querySelector('.edit-summon-sub1-type').value;
        s.sub1Value = parseInt(tr.querySelector('.edit-summon-sub1-val').value) || 0;

        // サブ2
        s.sub2Type = tr.querySelector('.edit-summon-sub2-type').value;
        s.sub2Value = parseInt(tr.querySelector('.edit-summon-sub2-val').value) || 0;
        
        // 互換性のために古いプロパティも更新しておく（任意）
        s.mainType = s.main1Type;
        s.mainValue = s.main1Value;
        s.subType = s.sub1Type;
        s.subValue = s.sub1Value;
    });

    // ストレージへの保存（保存キーが 'summon_db_data' か 'gbf_summon_db' か統一してください）
    localStorage.setItem('summon_db_data', JSON.stringify(summonDatabase));
    
    // もし共通の保存関数があるならそれも呼ぶ
    if (window.saveSummonDatabase) window.saveSummonDatabase();

    alert('保存しました');
}

// ページが完全に読み込まれてからボタンを探す設定
document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('summon-save-all-btn');
    if (saveBtn) {
        saveBtn.onclick = saveSummonChanges;
        console.log("召喚石の保存ボタンを有効化しました");
    } else {
        console.error("保存ボタン(id='summon-save-all-btn')が見つかりません");
    }
});


// 石追加ボタンの動作設定
const addSummonBtn = document.getElementById('summon-btn-open');
if (addSummonBtn) {
    addSummonBtn.onclick = () => {
        const dial = document.getElementById('dial-summon-add'); 
        if (dial) {
            dial.showModal(); // ダイアログを表示
        } else {
            console.error("ダイアログ 'dial-summon-add' が見つかりません");
        }
    };
}

// 「＋」ボタンをクリックしたときにaddNewSummonGroupを実行する
document.getElementById('summon-add-group-btn')?.addEventListener('click', addNewSummonGroup);

function addNewSummon() {
    if (!activeSummonGroupId) return;

    const label = document.getElementById('new-summon-label').value;
    const element = document.getElementById('new-summon-element').value;

    if (!label) {
        alert("名前を入力してください");
        return;
    }

    // IDを生成（現在のタイムスタンプなどで重複回避）
    const newId = "summon_" + Date.now();

    // 新しいデータ構造でオブジェクトを作成
    const newSummon = {
        label: label,
        element: element,
        type: "属性",        // デフォルト値
        mainType: "属性",    // 追加
        mainValue: 0,
        friendType: "属性",  // 追加
        friendValue: 0,
        subType: "サブ加護", // 追加
        subValue: 0,
        subType2: "サブ加護",// 追加
        subValue2: 0
    };

    // データベースに追加
    summonDatabase[activeSummonGroupId].summons[newId] = newSummon;

    // ローカルストレージに保存
    localStorage.setItem('summon_db_data', JSON.stringify(summonDatabase));

    // 画面を更新してダイアログを閉じる
    renderSummonTable();
    document.getElementById('dial-summon-add').close();
    
    // 入力欄をクリア
    document.getElementById('new-summon-label').value = "";
}

function deleteSummon(sId) {
    // 1. ユーザーに確認（誤操作防止）
    const isConfirmed = confirm("この召喚石を削除してもよろしいですか？\n※一括保存を押すまでブラウザには保存されません。");
    
    if (!isConfirmed) return;

    // 2. メモリ上のデータベースから削除
    if (activeSummonGroupId && summonDatabase[activeSummonGroupId].summons[sId]) {
        delete summonDatabase[activeSummonGroupId].summons[sId];
        
        // 3. 画面を再描画（削除されたことを即座に反映）
        renderSummonTable();
        
        // 4. 注意：この時点ではまだ localStorage には書き込まれていません。
        // 「一括保存」ボタンを押すか、ここで自動保存させるか選べます。
        // 自動保存させたい場合は以下の1行を追加してください。
        // localStorage.setItem('summon_db_data', JSON.stringify(summonDatabase));
    } else {
        console.error("削除対象の石が見つかりませんでした:", sId);
    }
}

// --- 1. エクスポート処理 ---
function exportSummonData() {
    if (!summonDatabase || Object.keys(summonDatabase).length === 0) {
        alert("エクスポートするデータがありません。");
        return;
    }
    const dataStr = JSON.stringify(summonDatabase, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    // ファイル名に今日の日付を入れる（親切設計）
    a.download = `gbf_summons_${new Date().toLocaleDateString().replace(/\//g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// --- 2. インポート処理 ---
function importSummonData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            // 武器データとの取り違えを防ぐ簡単なチェック
            if (data && typeof data === 'object') {
                summonDatabase = data; 
                
                // 【重要】ここの関数名が「実際にlocalStorageへ保存する関数名」と合っているか確認！
                if (typeof saveSummonDatabase === 'function') {
                    saveSummonDatabase(); 
                } else {
                    // もし保存関数がない場合は直接書く
                    localStorage.setItem('gbf_summon_db', JSON.stringify(summonDatabase));
                }
                
                alert("召喚石データを復元しました。");
                location.reload(); 
            }
        } catch (err) {
            console.error(err);
            alert("ファイルの形式が正しくありません。");
        }
    };
    reader.readAsText(file);
}

// --- 3. イベントの紐付け ---
function initSummonEvents() {
    const exportBtn = document.getElementById('summon-btn-export');
    if (exportBtn) {
        exportBtn.onclick = exportSummonData;
    }

    const importBtn = document.getElementById('summon-btn-import');
    const fileInput = document.getElementById('summon-import-file');
    if (importBtn && fileInput) {
        importBtn.onclick = () => fileInput.click(); 
        fileInput.onchange = (e) => importSummonData(e); 
    }
}

// 初期化時に実行
initSummonEvents();

/**
 * 召喚石の順番を入れ替える関数
 */
function moveSummon(targetId, direction) {
    const group = summonDatabase[activeSummonGroupId];
    if (!group) return;

    // オブジェクトを [ID, データ] の配列に変換
    const entries = Object.entries(group.summons);
    const index = entries.findIndex(([id]) => id === targetId);

    // 移動先を計算
    const newIndex = index + direction;

    // 配列の範囲外なら何もしない
    if (newIndex < 0 || newIndex >= entries.length) return;

    // 要素を入れ替え
    [entries[index], entries[newIndex]] = [entries[newIndex], entries[index]];

    // 新しいオブジェクトを再構築して順番を確定させる
    const newSummons = {};
    entries.forEach(([id, data]) => {
        newSummons[id] = data;
    });

    // データベースを更新
    group.summons = newSummons;

    // 再描画（並び替えた結果を画面に反映）
    renderSummonTable();
    
    // 必要であればここで保存
    // saveSummonDatabase(); 
}







// 属性フィルタを切り替えたら表を再描画
const filterSelect = document.getElementById('summon-filter-element');
if (filterSelect) {
    filterSelect.onchange = renderSummonTable;
}








function setSummonToSlot(slotKey, summonId) {
    // ...既存のセット処理...

    // 最後に合計値を更新
    updateSummonTotal();
}

// app.js の最後の方（app.js:697付近を含む場所）

function initApp() {
    // 1. データを読み込む
    loadFromLocalStorage(); 

    // 2. スキルグループの初期値設定
    const skillKeys = Object.keys(skillDatabase);
    if (skillKeys.length > 0) {
        // activeGroupId が空、もしくは存在しないIDなら、最初のIDを入れる
        if (!activeGroupId || !skillDatabase[activeGroupId]) {
            activeGroupId = skillKeys[0];
        }
    }

    // 3. 武器グループの初期値設定
    const weaponKeys = Object.keys(weaponDatabase);
    if (weaponKeys.length > 0) {
        if (!activeWeaponGroupId || !weaponDatabase[activeWeaponGroupId]) {
            activeWeaponGroupId = weaponKeys[0];
        }
    }

window.addEventListener('DOMContentLoaded', () => {

    // --- 召喚石の復元 ---
    const savedSummonData = localStorage.getItem('gbf_summon_deck');
    if (savedSummonData) {
        const summons = JSON.parse(savedSummonData);
        if (!window.currentDeck) window.currentDeck = { summons: {} };
        currentDeck.summons = summons;

        Object.entries(summons).forEach(([slotKey, sId]) => {
            if (!sId) return;
            const sData = findSummonDataById(sId);
            if (sData) {
                currentSelectingSummonSlot = slotKey;
                applySummonToSlot(sId, sData, true);
            }
        });
        // 全ての石をセットし終えた後に、加護の数値を画面に反映
        updateSummonTotal();
    }

    // --- 武器の復元 ---
    const savedWeaponData = localStorage.getItem('gbf_weapon_deck');
    if (savedWeaponData) {
        const restoredWeapons = JSON.parse(savedWeaponData);
        restoredWeapons.forEach((w, index) => {
            currentDeckWeapons[index] = w;
        });
        setupWeaponGrid(); 
    } // ← ここで if 文を閉じる

    // --- 【重要】最後に一括で再計算 ---
    setTimeout(() => {
        if (typeof updateSkillTotals === 'function') {
            console.log("復元後の最終計算（加護乗算を含む）を実行します");
            updateSkillTotals();
        }
    }, 100); 

});

// IDから石を探す関数
function findSummonDataById(id) {
    for (const group of Object.values(summonDatabase)) {
        if (group.summons && group.summons[id]) return group.summons[id];
    }
    return null;
}








/**
 * 武器計算機に渡すための加護合計データを取得する
 */
function getSummonKagoBoss() {
    const totals = {
        magna: 0,   // マグナ加護合計 (%)
        optimum: 0, // 神石加護合計 (%)
        element: {},// 属性別攻撃力 { "火": 150, ... }
        special: {} // 与ダメUP、HPなど
    };

    // currentDeck.summons をスキャンして集計するロジックをここに書く
    // (updateSummonTotalで行っている集計と似ていますが、戻り値としてデータを返します)
    
    return totals;
}



































// app.jsの最後に記述
setupWeaponGrid();
setupOthers();
loadFromLocalStorage(); // データを読み込む
renderSidebar();        // スキルサイドバー
renderMasterDB();       // スキルテーブル
renderWeaponSidebar();  // 武器サイドバー
renderWeaponMasterDB(); // 武器テーブル

}

// 最後に実行
initApp();