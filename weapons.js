// weapons.js
const WeaponDatabase = {
    "group_superior": {
        name: "スペリオル",
        weapons: {
            "excalibur_fire": {
                label: "エクスカリバー", element: "fire", level: 200,
                skill1: "紅蓮の堅守20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "竜巻の渾身20", skill3Val: 0,
                skill4: "", skill4Val: 0
            },
            "excalibur_water": {
                label: "エクスカリバー", element: "water", level: 200,
                skill1: "霧氷の堅守20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "渦潮の渾身20", skill3Val: 0,
                skill4: "", skill4Val: 0
            },
            "excalibur_earth": {
                label: "エクスカリバー", element: "earth", level: 200,
                skill1: "地裂の堅守20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "大地の渾身20", skill3Val: 0,
                skill4: "", skill4Val: 0
            },
            "excalibur_wind": {
                label: "エクスカリバー", element: "wind", level: 200,
                skill1: "乱気の堅守20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "竜巻の渾身20", skill3Val: 0,
                skill4: "", skill4Val: 0
            },
            "excalibur_light": {
                label: "エクスカリバー", element: "light", level: 200,
                skill1: "天光の堅守20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "雷電の渾身20", skill3Val: 0,
                skill4: "", skill4Val: 0
            },
            "excalibur_dark": {
                label: "エクスカリバー", element: "dark", level: 200,
                skill1: "奈落の堅守20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "憎悪の渾身20", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_Illustrious": {
        name: "ルミナス",
        weapons: {
            "higurashi": {
                label: "晩蝉", element: "fire", level: 200,
                skill1: "虚蝉", skill1Val: 0,
                skill2: "炎天の聯鎖", skill2Val: 0,
                skill3: "紅蓮の英傑20", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_limited": {
        name: "リミテッド",
        weapons: {
            "limit_parsival": {
                label: "ロード・オブ・フレイム", element: "fire", level: 150,
                skill1: "スカーレット・コンバージェンス", skill1Val: 0,
                skill2: "火の神威15", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_season": {
        name: "季節限定",
        weapons: {
            "summer_teena": {
                label: "トロピカルフェアリー", element: "fire", level: 150,
                skill1: "紅蓮の攻刃15", skill1Val: 0,
                skill2: "火の渾身15", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_Regular": {
        name: "ガチャ恒常",
        weapons: {
            "Reg_miranda": {
                label: "チャーミングブルーム", element: "fire", level: 150,
                skill1: "紅蓮の神威15", skill1Val: 0,
                skill2: "火の守護15", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_vintage": {
        name: "ヴィンテージ",
        weapons: {
            "durandal": {
                label: "デュランダル", element: "water", level: 150,
                skill1: "霧氷の攻刃15", skill1Val: 0,
                skill2: "渦潮の技巧15", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_syumatu": {
        name: "終末神器",
        weapons: {
            "god_syumatu": {
                label: "絶対否定の大鎌", element: "fire", level: 250,
                skill1: "紅蓮の神醒25", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            },
            "magna_syumatu": {
                label: "永遠拒絶の大鎌", element: "fire", level: 250,
                skill1: "機炎方陣・神醒Ⅲ25", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_dragon_weapon": {
        name: "ドラポン",
        weapons: {
            "god_dragon_fire": {
                label: "ドラポン火（神）", element: "fire", level: 200,
                skill1: "ウィルナスの炎威20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "紅蓮の神威20", skill3Val: 0,
                skill4: "", skill4Val: 0
            },
            "magna_dragon_fire": {
                label: "ドラポン火（マグナ）", element: "fire", level: 200,
                skill1: "ウィルナスの炎威20", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "機炎方陣・神威Ⅲ20", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_hakai": {
        name: "破壊の標",
        weapons: {
            "hakai_fire": {
                label: "万象尽滅の宝剣", element: "fire", level: 200,
                skill1: "破壊の神刃Ⅱ20", skill1Val: 0,
                skill2: "再生の神守Ⅱ20", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_isizue": {
        name: "新世界の礎",
        weapons: {
            "sun_katana": {
                label: "サン刀", element: "fire", level: 150,
                skill1: "教皇と太陽の祝福", skill1Val: 0,
                skill2: "セフィラマキシ・ファイア20", skill2Val: 0,
                skill3: "火の神威20", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
        "group_astral": {
        name: "アストラル",
        weapons: {
            "astral_fire": {
                label: "ソル・レムナント", element: "fire", level: 200,
                skill1: "紅蓮の支配者", skill1Val: 0,
                skill2: "アストラル・ブローⅡ", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
        "group_omega": {
        name: "オメガ",
        weapons: {
            "omega_ken": {
                label: "オメガ剣", element: "all", level: 200,
                skill1: "", skill1Val: 0,
                skill2: "", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
        "group_baha": {
        name: "バハムート",
        weapons: {
            "baha_ken": {
                label: "バハ剣", element: "dark", level: 200,
                skill1: "コンキリオ・イグニス20", skill1Val: 0,
                skill2: "ヴィータ・イグニス20", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_magna": {
        name: "マグナ",
        weapons: {
            "tia_gun": {
                label: "ティアマトボルト・マグナ", element: "wind", level: 200,
                skill1: "嵐竜方陣・攻刃Ⅱ20", skill1Val: 0,
                skill2: "嵐竜方陣・背水20", skill1Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_magna2": {
        name: "レガリア",
        weapons: {
            "shiva_ken": {
                label: "ブラフマンシミター", element: "fire", level: 150,
                skill1: "機炎方陣・無双Ⅱ15", skill1Val: 0,
                skill2: "機炎方陣・守護15", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_magna3": {
        name: "マグナ3",
        weapons: {
            "colo3_staff": {
                label: "イラマグナ杖", element: "fire", level: 150,
                skill1: "マグナ・ブーストファイア", skill1Val: 0,
                skill2: "機炎方陣・攻刃Ⅲ15", skill2Val: 0,
                skill3: "機炎の星醒", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_ennead": {
        name: "エニアド",
        weapons: {
            "atum_spear": {
                label: "ベンベネト", element: "fire", level: 150,
                skill1: "焔の果断", skill1Val: 0,
                skill2: "先制の炎刃", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_odious": {
        name: "禁禍",
        weapons: {
            "kinei_spear": {
                label: "禁栄の禍槍", element: "fire", level: 150,
                skill1: "終炎禁呪・神威Ⅳ15", skill1Val: 0,
                skill2: "終炎禁呪・衝刃Ⅲ15", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_malice": {
        name: "マリス",
        weapons: {
            "malice_maje": {
                label: "マジェスタス", element: "dark", level: 150,
                skill1: "憎悪の堅守15", skill1Val: 0,
                skill2: "憎悪の神威15", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_menace": {
        name: "メナス",
        weapons: {
            "menace_ougi": {
                label: "扇抜", element: "water", level: 150,
                skill1: "渦潮の堅守15", skill1Val: 0,
                skill2: "渦潮の神威15", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_six_dragon": {
        name: "六竜",
        weapons: {
            "six_finger": {
                label: "ウィルナスフィンガー", element: "fire", level: 150,
                skill1: "炎威の背水15", skill1Val: 0,
                skill2: "朱の誓約", skill2Val: 0,
                skill3: "", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    },
    "group_revans": {
        name: "レヴァンス",
        weapons: {
            "mugen_ken": {
                label: "滅尽剣", element: "fire", level: 150,
                skill1: "紅蓮の堅守15", skill1Val: 0,
                skill2: "火の刹那15", skill2Val: 0,
                skill3: "スカーレットクラフト", skill3Val: 0,
                skill4: "", skill4Val: 0
            }
        }
    }
};

window.defaultWeaponDatabase = WeaponDatabase;