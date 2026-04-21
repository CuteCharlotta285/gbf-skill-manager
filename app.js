
// 属性のIDを表示用の日本語に変換するマップ
const elementMap = {
    "fire": "火",
    "water": "水",
    "earth": "土",
    "wind": "風",
    "light": "光",
    "dark": "闇"
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

// --- 2. タブ切り替え機能 ---
tabs.forEach(tab => {
    tab.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.target;
        contents.forEach(c => c.classList.add('hidden'));
        document.getElementById(target).classList.remove('hidden');

        if(target === 'db-screen') renderMasterDB();
    };
});

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
    // --- ここまで ---

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
                <td><input type="text" value="${eff.type}" class="edit-eff-type" data-index="${i}"></td>
                <td><input type="number" value="${eff.value}" class="edit-eff-val" data-index="${i}"></td>
            `;
        }

        tr.innerHTML = `
            <td class="el-${elLabel}">${elJapanese}</td>
            <td><input type="text" value="${skill.label}" class="edit-label"></td>
            <td><input type="number" value="${skill.level}" class="edit-lv"></td>
            ${effectsHtml}
            <td>
                <button class="edit-btn" onclick="saveMaster('${key}', this)">保存</button>
                <button class="delete-btn" onclick="deleteMaster('${key}')">削除</button>
            </td>
        `;
        masterBody.appendChild(tr);
    }
}

// フィルタイベント
document.getElementById('filter-element').onchange = renderMasterDB;

// 保存処理も4枠分取得するように修正
window.saveMaster = (key, btn) => {
    const row = btn.parentElement.parentElement;
    const targetSkill = skillDatabase[activeGroupId].skills[key];
    
    targetSkill.label = row.querySelector('.edit-label').value;
    targetSkill.level = Number(row.querySelector('.edit-lv').value);

    // 4枠分のスキル情報を取得
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

    btn.innerText = "DONE";
    setTimeout(() => btn.innerText = "保存", 1000);
};

window.deleteMaster = (key) => {
    if(confirm("このスキルを削除しますか？")) {
        // 現在のグループから削除
        delete skillDatabase[activeGroupId].skills[key];
        saveToLocalStorage(); // 保存を実行！
        renderMasterDB();
    }
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
    
    for (const id in skillDatabase) {
        const li = document.createElement('li');
        li.className = `group-item ${id === activeGroupId ? 'active' : ''}`;
        
        // 名前、編集ボタン、削除ボタンの順で構成
        li.innerHTML = `
            <span class="group-name">${skillDatabase[id].name}</span>
            <div class="group-controls">
                <button class="edit-group-btn" onclick="renameGroup(event, '${id}')" title="名前を変更">✎</button>
                <button class="delete-group-btn" onclick="deleteGroup(event, '${id}')" title="削除">×</button>
            </div>
        `;
        
        li.onclick = () => selectGroup(id);
        groupListContainer.appendChild(li);
    }
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

window.deleteGroup = (event, id) => {
    // リストのクリックイベント（グループ選択）が動かないようにする
    event.stopPropagation();

    if (Object.keys(skillDatabase).length <= 1) {
        alert("これ以上グループを削除できません。");
        return;
    }

    if (confirm(`グループ「${skillDatabase[id].name}」を削除しますか？\n中のスキルデータもすべて消去されます。`)) {
        // 1. データを削除
        delete skillDatabase[id];
        
        // 2. もし削除したのが「今開いているグループ」だったら、別のグループに移動する
        if (activeGroupId === id) {
            activeGroupId = Object.keys(skillDatabase)[0];
        }
        
        // 3. 保存して再描画
        saveToLocalStorage();
        renderSidebar();
        selectGroup(activeGroupId);
    }
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

// app.jsの最後に記述
loadFromLocalStorage(); // データを読み込む
renderSidebar();        // サイドバーを表示する
renderMasterDB();       // テーブルを表示する