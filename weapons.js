// weapons.js
const WeaponDatabase = {
    "group_superior": {
        name: "スペリオル",
        weapons: {
            "excalibur_fire": {
                label: "エクスカリバー",
                element: "fire",
                level: 200,
                skill1: "紅蓮の堅守20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "竜巻の渾身20", skill3Val: 0,
                skill4: "", skill4Val: 0
            },
            "excalibur_water": {
                label: "エクスカリバー",
                element: "water",
                level: 200,
                skill1: "霧氷の堅守20",
                skill1Val: 0,
                skill2: "",
                skill2Val: 0,
                skill3: "渦潮の渾身20", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_magna": {
        name: "マグナ1",
        weapons: {
            "tia_gun": {
                label: "ティアマトボルト・マグナ",
                element: "wind",
                level: 200,
                skill1: "嵐竜方陣・攻刃Ⅱ20",
                skill1Val: 0,
                skill2: "嵐竜方陣・背水20",
                skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    }
};

// グローバル変数として公開
window.defaultWeaponDatabase = WeaponDatabase;