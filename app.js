// ==========================================
// 1. データの初期化（ファイルの最上部に置く）
// ==========================================
weaponDatabase = JSON.parse(localStorage.getItem('weapon_db_data')) || window.defaultWeaponDatabase;
let activeWeaponGroupId = Object.keys(weaponDatabase)[0] || null;

// 現在の編成（13本分）を保持する配列。中身は武器データオブジェクトを入れる
let currentDeckWeapons = Array(13).fill(null);

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
    // 選択したスロット（index）に武器データを保存
    currentDeckWeapons[currentSelectingIndex] = weapon;
    
// エラー防止：weaponが存在するときだけ名前を表示する
    if (weapon) {
        console.log(`${currentSelectingIndex}番のスロットに「${weapon.label}」をセットしました`);
    } else {
        console.log(`${currentSelectingIndex}番のスロットを解除しました`);
    }

// 2. モーダルを閉じる
    document.getElementById("dial-weapon-select").close();
    
    // 3. 画面を再描画して、武器名を表示させる
    setupWeaponGrid(); 
    
    // 4. 【重要】スキル合計値の計算を呼び出す
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
 * 武器スキルの合計値を計算して画面に反映する
 */
function updateSkillTotals() {
  console.log("--- 精精密計開始 ---");

  if (typeof skillDatabase === 'undefined') {
    console.error("エラー: skillDatabase が定義されていません。");
    return;
  }

  const skillMap = {
    "通常攻刃": "val-atk",
    "マグナ攻刃": "val-m-atk",
    "EX攻刃": "val-ex-atk",
    "EX攻刃(特殊)": "val-ex-atk-sp",
    "渾身": "val-konshin",
    "M渾身": "val-m-konshin",
    "背水": "val-haisui",
    "M背水": "val-m-haisui",
    "属性攻撃": "val-ele-atk",
    "属性攻撃(進境)": "val-ele-shinkyo",
    "クリティカル": "val-crit",
    "カウンター率": "val-counter",
    "DA確率": "val-da",
    "TA確率": "val-ta",
    "ブースト": "val-boost",
    "襲刃": "val-shujin",
    "HP": "val-hp",
    "通常守護": null,
    "マグナ守護": null,
    "回復上限": "val-heal-limit",
    "防御": "val-def",
    "弱体耐性": "val-deb-res",
    "属性軽減": "val-ele-red",
    "ダメ上限": "val-dmg-limit",
    "ダメ上限(特殊)": "val-dmg-limit-sp",
    "与ダメ": "val-yodmg-base",
    "与ダメ(汎用)": "val-yodmg-gen",
    "対有利与ダメ": "val-fav-yodmg",
    "対無属性与ダメ": "val-none-yodmg",
    "通常ダメ上限": "val-norm-limit",
    "通常ダメ上限(特殊)": "val-norm-limit-sp",
    "通常与ダメ(特殊)": "val-norm-yodmg-sp",
    "アビダメ": "val-abil-dmg",
    "アビダメ上限": "val-abil-limit",
    "アビダメ上限(特殊)": "val-abil-limit-sp",
    "アビ与ダメ(特殊)": "val-abil-yodmg-sp",
    "奥義ダメ": "val-ougi-dmg",
    "奥義ダメ上限": "val-ougi-limit",
    "奥義ダメ上限(特殊)": "val-ougi-limit-sp",
    "奥義与ダメ(特殊)": "val-ougi-yodmg-sp",
    "アビ与ダメ": "val-abil-yodmg",
    "奥義与ダメ": "val-ougi-yodmg",
    "CBダメ": "val-cb-dmg",
    "CBダメ上限": "val-cb-limit",
    "奥義ゲージ上昇": "val-ougi-up",
    "オーバーHP": "val-over-hp",
    "ダメ上限緩和": "val-limit-relax",
    "オーバークリ": "val-over-crit",
    "オーバー連撃": "val-over-rengeki"
  };

  const totals = {};
  Object.keys(skillMap).forEach(key => totals[key] = 0);

  // --- 手順② & ③：全階層からLabelが一致するスキルを探す関数 ---
  function findSkillByLabel(labelName) {
    for (const categoryKey in skillDatabase) {
      const category = skillDatabase[categoryKey];
      if (category.skills) {
        for (const skillKey in category.skills) {
          const skillData = category.skills[skillKey];
          if (skillData.label === labelName) {
            return skillData;
          }
        }
      }
    }
    return null;
  }

  // 編成武器のループ
  currentDeckWeapons.forEach((wpn, idx) => {
    if (!wpn) return;

    // ① 武器のskill1〜skill4（名前）を走査
    for (let i = 1; i <= 4; i++) {
      let weaponSkillName = wpn[`skill${i}`];
      if (!weaponSkillName) continue;
      weaponSkillName = String(weaponSkillName).trim();

      // ② & ③ 深い階層から一致するスキルデータを検索
      const masterData = findSkillByLabel(weaponSkillName);

      if (masterData && masterData.effects) {
        // ④ effects配列を走査して合算
        masterData.effects.forEach(eff => {
          const categoryName = eff.type; // "通常攻刃" など
          const val = parseFloat(eff.value) || 0;

          if (categoryName && totals.hasOwnProperty(categoryName)) {
            totals[categoryName] += val;
            console.log(`✅ [合算] ${weaponSkillName} -> ${categoryName}: +${val}`);
          }
        });
      } else {
        console.warn(`❌ [不一致] "${weaponSkillName}" が skillDatabase に見つかりません。`);
      }
    }
  });

  totals["HP"] = totals["通常守護"] + totals["マグナ守護"];

// 画面反映
  Object.keys(skillMap).forEach(category => {
    const htmlId = skillMap[category];
    if (!htmlId) return; // IDがない項目（通常守護など）は表示をスキップ

    const element = document.getElementById(htmlId);
    if (element) {
      const val = totals[category];

      // 表示形式の出し分け
      if (category.includes("与ダメ") || category === "オーバーHP") {
        element.innerText = val.toLocaleString();
      } else {
        // HPも含め、基本は % 表示
        element.innerText = `${Math.round(val * 100) / 100}%`;
      }
    }
  });

  console.log("集計完了:", totals);
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

      slot.innerHTML = `
        <div class="slot-label">${label}</div>
        <div class="slot-main-info">
          <span class="element-icon ${wpn.element}">${elementMap[wpn.element] || ''}</span>
          <span class="slot-weapon-name">${wpn.label}</span>
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

// 最後に実行して画面を作る
setupWeaponGrid();
setupOthers();










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
    
    if(!nameEl || !nameEl.value) return alert("武器名称を入力してください");

    // 新規武器IDの生成
    const newWeaponKey = "wp_" + Date.now();
    
    // 現在選択中の武器シリーズ（グループ）にデータを追加
    // ※武器はレベル200、スキル1〜4の構造で初期化
    weaponDatabase[activeWeaponGroupId].weapons[newWeaponKey] = {
        label: nameEl.value,
        element: elementEl.value,
        level: 200, 
        skill1: "", skill1Val: 0,
        skill2: "", skill2Val: 0,
        skill3: "", skill3Val: 0,
        skill4: "", skill4Val: 0
    };

    saveWeaponToLocalStorage(); // 武器専用の保存関数を実行
    renderWeaponMasterDB();    // 武器テーブルを再描画
    
    dialWeaponReg.close();      // ダイアログを閉じる
    
    // 入力欄をリセット
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
            
            // スキル名のプルダウン（簡易版：実際は全スキルリストからoptionを生成）
// skillsHtml を生成しているループ内
skillsHtml += `
    <td>
        <select class="weapon-edit-skill" data-index="${i}" 
                onchange="handleSkillChange('${key}', ${i}, this)"> 
            <option value="">(なし)</option>
            ${generateSkillOptions(sKey)} 
        </select>
    </td>
    <td>
        <input type="number" value="${sVal}" class="weapon-edit-eff-val" 
               id="val-${key}-${i}"  
               readonly 
               tabindex="-1"
               style="background-color: #1c2128; color: #8b949e; cursor: not-allowed; border: 1px solid #30363d;">
    </td>
`;
        }

        tr.innerHTML = `
            <td class="weapon-el-${elLabel}">${elJapanese}</td>
            <td><input type="text" value="${wp.label}" class="weapon-edit-label" onblur="saveWeaponMaster('${key}', this)"></td>
            <td><input type="number" value="${wp.level}" class="weapon-edit-lv" onblur="saveWeaponMaster('${key}', this)"></td>
            ${skillsHtml}
            <td>
                <button class="weapon-move-btn" onclick="moveWeapon(event, '${key}', -1)">▲</button>
                <button class="weapon-move-btn" onclick="moveWeapon(event, '${key}', 1)">▼</button>
                <button class="weapon-delete-btn" onclick="deleteWeaponMaster('${key}')">削除</button>
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

// --- 5. 共通処理 (LocalStorage / インポート・エクスポート) ---

function saveWeaponToLocalStorage() {
    localStorage.setItem('gbfWeaponManagerData', JSON.stringify(weaponDatabase));
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