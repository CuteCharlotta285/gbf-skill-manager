// skills.js																									
const skillDatabase = {																									
normal_kojin: {																									
name: "通常攻刃",																									
skills: {																									
fire_kojin_s_10: { label: "火の攻刃10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_s_10: { label: "水の攻刃10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_s_10: { label: "土の攻刃10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_s_10: { label: "風の攻刃10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_s_10: { label: "光の攻刃10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_s_10: { label: "闇の攻刃10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin_s_15: { label: "火の攻刃15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_s_15: { label: "水の攻刃15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_s_15: { label: "土の攻刃15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_s_15: { label: "風の攻刃15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_s_15: { label: "光の攻刃15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_s_15: { label: "闇の攻刃15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin_s_20: { label: "火の攻刃20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_s_20: { label: "水の攻刃20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_s_20: { label: "土の攻刃20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_s_20: { label: "風の攻刃20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_s_20: { label: "光の攻刃20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_s_20: { label: "闇の攻刃20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin_m_10: { label: "業火の攻刃10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_m_10: { label: "渦潮の攻刃10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_m_10: { label: "大地の攻刃10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_m_10: { label: "竜巻の攻刃10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_m_10: { label: "雷電の攻刃10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_m_10: { label: "憎悪の攻刃10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin_m_15: { label: "業火の攻刃15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_m_15: { label: "渦潮の攻刃15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_m_15: { label: "大地の攻刃15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_m_15: { label: "竜巻の攻刃15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_m_15: { label: "雷電の攻刃15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_m_15: { label: "憎悪の攻刃15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin_m_20: { label: "業火の攻刃20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_m_20: { label: "渦潮の攻刃20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_m_20: { label: "大地の攻刃20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_m_20: { label: "竜巻の攻刃20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_m_20: { label: "雷電の攻刃20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_m_20: { label: "憎悪の攻刃20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin_l_10: { label: "紅蓮の攻刃10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_l_10: { label: "霧氷の攻刃10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_l_10: { label: "地裂の攻刃10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_l_10: { label: "乱気の攻刃10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_l_10: { label: "天光の攻刃10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_l_10: { label: "奈落の攻刃10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin_l_15: { label: "紅蓮の攻刃15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_l_15: { label: "霧氷の攻刃15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_l_15: { label: "地裂の攻刃15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_l_15: { label: "乱気の攻刃15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_l_15: { label: "天光の攻刃15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_l_15: { label: "奈落の攻刃15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin_l_20: { label: "紅蓮の攻刃20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin_l_20: { label: "霧氷の攻刃20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin_l_20: { label: "地裂の攻刃20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin_l_20: { label: "乱気の攻刃20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin_l_20: { label: "天光の攻刃20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin_l_20: { label: "奈落の攻刃20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin2_xl_15: { label: "紅蓮の攻刃Ⅱ15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin2_xl_15: { label: "霧氷の攻刃Ⅱ15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin2_xl_15: { label: "地裂の攻刃Ⅱ15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin2_xl_15: { label: "乱気の攻刃Ⅱ15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin2_xl_15: { label: "天光の攻刃Ⅱ15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin2_xl_15: { label: "奈落の攻刃Ⅱ15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin2_xl_20: { label: "紅蓮の攻刃Ⅱ20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin2_xl_20: { label: "霧氷の攻刃Ⅱ20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin2_xl_20: { label: "地裂の攻刃Ⅱ20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin2_xl_20: { label: "乱気の攻刃Ⅱ20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin2_xl_20: { label: "天光の攻刃Ⅱ20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin2_xl_20: { label: "奈落の攻刃Ⅱ20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kojin3_xxl_15: { label: "紅蓮の攻刃Ⅲ15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kojin3_xxl_15: { label: "霧氷の攻刃Ⅲ15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kojin3_xxl_15: { label: "地裂の攻刃Ⅲ15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kojin3_xxl_15: { label: "乱気の攻刃Ⅲ15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kojin3_xxl_15: { label: "天光の攻刃Ⅲ15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kojin3_xxl_15: { label: "奈落の攻刃Ⅲ15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 22 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
custom_1777073044897: {label: "劫風の攻刃15", element: "wind", level: 10, effects: [ { type: "通常攻刃", value: 33 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 } ] }																									
}																									
},																									
																									
normal_gikou: {																									
name: "通常技巧",																									
skills: {																									
fire_craft_s_10: { label: "火の技巧10", element: "fire", level: 10, effects: [{ type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_s_10: { label: "水の技巧10", element: "water", level: 10, effects: [{ type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_s_10: { label: "土の技巧10", element: "earth", level: 10, effects: [{ type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_s_10: { label: "風の技巧10", element: "wind", level: 10, effects: [{ type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_s_10: { label: "光の技巧10", element: "light", level: 10, effects: [{ type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_s_10: { label: "闇の技巧10", element: "dark", level: 10, effects: [{ type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_s_15: { label: "火の技巧15", element: "fire", level: 15, effects: [{ type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_s_15: { label: "水の技巧15", element: "water", level: 15, effects: [{ type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_s_15: { label: "土の技巧15", element: "earth", level: 15, effects: [{ type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_s_15: { label: "風の技巧15", element: "wind", level: 15, effects: [{ type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_s_15: { label: "光の技巧15", element: "light", level: 15, effects: [{ type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_s_15: { label: "闇の技巧15", element: "dark", level: 15, effects: [{ type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_s_20: { label: "火の技巧20", element: "fire", level: 20, effects: [{ type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_s_20: { label: "水の技巧20", element: "water", level: 20, effects: [{ type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_s_20: { label: "土の技巧20", element: "earth", level: 20, effects: [{ type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_s_20: { label: "風の技巧20", element: "wind", level: 20, effects: [{ type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_s_20: { label: "光の技巧20", element: "light", level: 20, effects: [{ type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_s_20: { label: "闇の技巧20", element: "dark", level: 20, effects: [{ type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_m_10: { label: "業火の技巧10", element: "fire", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_m_10: { label: "渦潮の技巧10", element: "water", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_m_10: { label: "大地の技巧10", element: "earth", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_m_10: { label: "竜巻の技巧10", element: "wind", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_m_10: { label: "雷電の技巧10", element: "light", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_m_10: { label: "憎悪の技巧10", element: "dark", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_m_15: { label: "業火の技巧15", element: "fire", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_m_15: { label: "渦潮の技巧15", element: "water", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_m_15: { label: "大地の技巧15", element: "earth", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_m_15: { label: "竜巻の技巧15", element: "wind", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_m_15: { label: "雷電の技巧15", element: "light", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_m_15: { label: "憎悪の技巧15", element: "dark", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_m_20: { label: "業火の技巧20", element: "fire", level: 20, effects: [{ type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_m_20: { label: "渦潮の技巧20", element: "water", level: 20, effects: [{ type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_m_20: { label: "大地の技巧20", element: "earth", level: 20, effects: [{ type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_m_20: { label: "竜巻の技巧20", element: "wind", level: 20, effects: [{ type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_m_20: { label: "雷電の技巧20", element: "light", level: 20, effects: [{ type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_m_20: { label: "憎悪の技巧20", element: "dark", level: 20, effects: [{ type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_l_10: { label: "紅蓮の技巧10", element: "fire", level: 10, effects: [{ type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_l_10: { label: "霧氷の技巧10", element: "water", level: 10, effects: [{ type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_l_10: { label: "地裂の技巧10", element: "earth", level: 10, effects: [{ type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_l_10: { label: "乱気の技巧10", element: "wind", level: 10, effects: [{ type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_l_10: { label: "天光の技巧10", element: "light", level: 10, effects: [{ type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_l_10: { label: "奈落の技巧10", element: "dark", level: 10, effects: [{ type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_l_15: { label: "紅蓮の技巧15", element: "fire", level: 15, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_l_15: { label: "霧氷の技巧15", element: "water", level: 15, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_l_15: { label: "地裂の技巧15", element: "earth", level: 15, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_l_15: { label: "乱気の技巧15", element: "wind", level: 15, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_l_15: { label: "天光の技巧15", element: "light", level: 15, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_l_15: { label: "奈落の技巧15", element: "dark", level: 15, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_l_20: { label: "紅蓮の技巧20", element: "fire", level: 20, effects: [{ type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_l_20: { label: "霧氷の技巧20", element: "water", level: 20, effects: [{ type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_l_20: { label: "地裂の技巧20", element: "earth", level: 20, effects: [{ type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_l_20: { label: "乱気の技巧20", element: "wind", level: 20, effects: [{ type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_l_20: { label: "天光の技巧20", element: "light", level: 20, effects: [{ type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_l_20: { label: "奈落の技巧20", element: "dark", level: 20, effects: [{ type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_l2_10: { label: "紅蓮の技巧Ⅱ10", element: "fire", level: 10, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_l2_10: { label: "霧氷の技巧Ⅱ10", element: "water", level: 10, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_l2_10: { label: "地裂の技巧Ⅱ10", element: "earth", level: 10, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_l2_10: { label: "乱気の技巧Ⅱ10", element: "wind", level: 10, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_l2_10: { label: "天光の技巧Ⅱ10", element: "light", level: 10, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_l2_10: { label: "奈落の技巧Ⅱ10", element: "dark", level: 10, effects: [{ type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_craft_l2_15: { label: "紅蓮の技巧Ⅱ15", element: "fire", level: 15, effects: [{ type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_craft_l2_15: { label: "霧氷の技巧Ⅱ15", element: "water", level: 15, effects: [{ type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_craft_l2_15: { label: "地裂の技巧Ⅱ15", element: "earth", level: 15, effects: [{ type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_craft_l2_15: { label: "乱気の技巧Ⅱ15", element: "wind", level: 15, effects: [{ type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_craft_l2_15: { label: "天光の技巧Ⅱ15", element: "light", level: 15, effects: [{ type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_craft_l2_15: { label: "奈落の技巧Ⅱ15", element: "dark", level: 15, effects: [{ type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_setuna: {																									
name: "通常刹那",																									
skills: {																									
fire_setsuna_s_10: { label: "火の刹那10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_s_10: { label: "水の刹那10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_s_10: { label: "土の刹那10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_s_10: { label: "風の刹那10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_s_10: { label: "光の刹那10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_s_10: { label: "闇の刹那10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_s_15: { label: "火の刹那15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_s_15: { label: "水の刹那15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_s_15: { label: "土の刹那15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_s_15: { label: "風の刹那15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_s_15: { label: "光の刹那15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_s_15: { label: "闇の刹那15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_s_20: { label: "火の刹那20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_s_20: { label: "水の刹那20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_s_20: { label: "土の刹那20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_s_20: { label: "風の刹那20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_s_20: { label: "光の刹那20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_s_20: { label: "闇の刹那20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 13 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_m_10: { label: "業火の刹那10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_m_10: { label: "渦潮の刹那10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_m_10: { label: "大地の刹那10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_m_10: { label: "竜巻の刹那10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_m_10: { label: "雷電の刹那10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_m_10: { label: "憎悪の刹那10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_m_15: { label: "業火の刹那15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_m_15: { label: "渦潮の刹那15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_m_15: { label: "大地の刹那15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_m_15: { label: "竜巻の刹那15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_m_15: { label: "雷電の刹那15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_m_15: { label: "憎悪の刹那15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_m_20: { label: "業火の刹那20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_m_20: { label: "渦潮の刹那20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_m_20: { label: "大地の刹那20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_m_20: { label: "竜巻の刹那20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_m_20: { label: "雷電の刹那20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_m_20: { label: "憎悪の刹那20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_l_10: { label: "紅蓮の刹那10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_l_10: { label: "霧氷の刹那10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_l_10: { label: "地裂の刹那10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_l_10: { label: "乱気の刹那10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_l_10: { label: "天光の刹那10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_l_10: { label: "奈落の刹那10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "クリティカル", value: 8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_l_15: { label: "紅蓮の刹那15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_l_15: { label: "霧氷の刹那15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_l_15: { label: "地裂の刹那15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_l_15: { label: "乱気の刹那15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_l_15: { label: "天光の刹那15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_l_15: { label: "奈落の刹那15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_l_20: { label: "紅蓮の刹那20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_l_20: { label: "霧氷の刹那20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_l_20: { label: "地裂の刹那20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_l_20: { label: "乱気の刹那20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_l_20: { label: "天光の刹那20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_l_20: { label: "奈落の刹那20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 11 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_l2_10: { label: "紅蓮の刹那Ⅱ10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_l2_10: { label: "霧氷の刹那Ⅱ10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_l2_10: { label: "地裂の刹那Ⅱ10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_l2_10: { label: "乱気の刹那Ⅱ10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_l2_10: { label: "天光の刹那Ⅱ10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_l2_10: { label: "奈落の刹那Ⅱ10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_setsuna_l2_15: { label: "紅蓮の刹那Ⅱ15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_setsuna_l2_15: { label: "霧氷の刹那Ⅱ15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_setsuna_l2_15: { label: "地裂の刹那Ⅱ15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_setsuna_l2_15: { label: "乱気の刹那Ⅱ15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_setsuna_l2_15: { label: "天光の刹那Ⅱ15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_setsuna_l2_15: { label: "奈落の刹那Ⅱ15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "クリティカル", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_ranbu: {																									
name: "通常乱舞",																									
skills: {																									
fire_ranbu_s_10: { label: "火の乱舞10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "TA確率", value: 1.35 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_ranbu_s_10: { label: "水の乱舞10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "TA確率", value: 1.35 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_ranbu_s_10: { label: "土の乱舞10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "TA確率", value: 1.35 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_ranbu_s_10: { label: "風の乱舞10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "TA確率", value: 1.35 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_ranbu_s_10: { label: "光の乱舞10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "TA確率", value: 1.35 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_ranbu_s_10: { label: "闇の乱舞10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "TA確率", value: 1.35 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_ranbu_s_15: { label: "火の乱舞15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_ranbu_s_15: { label: "水の乱舞15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_ranbu_s_15: { label: "土の乱舞15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_ranbu_s_15: { label: "風の乱舞15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_ranbu_s_15: { label: "光の乱舞15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_ranbu_s_15: { label: "闇の乱舞15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_ranbu_m_10: { label: "業火の乱舞10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2.15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_ranbu_m_10: { label: "渦潮の乱舞10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2.15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_ranbu_m_10: { label: "大地の乱舞10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2.15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_ranbu_m_10: { label: "竜巻の乱舞10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2.15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_ranbu_m_10: { label: "雷電の乱舞10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2.15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_ranbu_m_10: { label: "憎悪の乱舞10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "TA確率", value: 2.15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_ranbu_m_15: { label: "業火の乱舞15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "TA確率", value: 2.9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_ranbu_m_15: { label: "渦潮の乱舞15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "TA確率", value: 2.9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_ranbu_m_15: { label: "大地の乱舞15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "TA確率", value: 2.9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_ranbu_m_15: { label: "竜巻の乱舞15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "TA確率", value: 2.9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_ranbu_m_15: { label: "雷電の乱舞15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "TA確率", value: 2.9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_ranbu_m_15: { label: "憎悪の乱舞15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "TA確率", value: 2.9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_ranbu_m_20: { label: "業火の乱舞20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "TA確率", value: 3.65 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_ranbu_m_20: { label: "渦潮の乱舞20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "TA確率", value: 3.65 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_ranbu_m_20: { label: "大地の乱舞20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "TA確率", value: 3.65 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_ranbu_m_20: { label: "竜巻の乱舞20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "TA確率", value: 3.65 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_ranbu_m_20: { label: "雷電の乱舞20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "TA確率", value: 3.65 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_ranbu_m_20: { label: "憎悪の乱舞20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "TA確率", value: 3.65 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_ranbu_l_10: { label: "紅蓮の乱舞10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "TA確率", value: 3.45 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_ranbu_l_10: { label: "霧氷の乱舞10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "TA確率", value: 3.45 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_ranbu_l_10: { label: "地裂の乱舞10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "TA確率", value: 3.45 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_ranbu_l_10: { label: "乱気の乱舞10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "TA確率", value: 3.45 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_ranbu_l_10: { label: "天光の乱舞10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "TA確率", value: 3.45 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_ranbu_l_10: { label: "奈落の乱舞10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "TA確率", value: 3.45 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_ranbu_l_15: { label: "紅蓮の乱舞15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "TA確率", value: 4.2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_ranbu_l_15: { label: "霧氷の乱舞15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "TA確率", value: 4.2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_ranbu_l_15: { label: "地裂の乱舞15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "TA確率", value: 4.2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_ranbu_l_15: { label: "乱気の乱舞15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "TA確率", value: 4.2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_ranbu_l_15: { label: "天光の乱舞15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "TA確率", value: 4.2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_ranbu_l_15: { label: "奈落の乱舞15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "TA確率", value: 4.2 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_kamui: {																									
name: "通常神威",																									
skills: {																									
fire_kamui_s_10: { label: "火の神威10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "通常守護", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_s_10: { label: "水の神威10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "通常守護", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_s_10: { label: "土の神威10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "通常守護", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_s_10: { label: "風の神威10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "通常守護", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_s_10: { label: "光の神威10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "通常守護", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_s_10: { label: "闇の神威10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 10 }, { type: "通常守護", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kamui_s_15: { label: "火の神威15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_s_15: { label: "水の神威15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_s_15: { label: "土の神威15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_s_15: { label: "風の神威15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_s_15: { label: "光の神威15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_s_15: { label: "闇の神威15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kamui_s_20: { label: "火の神威20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 12.5 }, { type: "通常守護", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_s_20: { label: "水の神威20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 12.5 }, { type: "通常守護", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_s_20: { label: "土の神威20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 12.5 }, { type: "通常守護", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_s_20: { label: "風の神威20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 12.5 }, { type: "通常守護", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_s_20: { label: "光の神威20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 12.5 }, { type: "通常守護", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_s_20: { label: "闇の神威20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 12.5 }, { type: "通常守護", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kamui_m_10: { label: "業火の神威10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_m_10: { label: "渦潮の神威10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_m_10: { label: "大地の神威10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_m_10: { label: "竜巻の神威10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_m_10: { label: "雷電の神威10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_m_10: { label: "憎悪の神威10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kamui_m_15: { label: "業火の神威15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_m_15: { label: "渦潮の神威15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_m_15: { label: "大地の神威15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_m_15: { label: "竜巻の神威15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_m_15: { label: "雷電の神威15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_m_15: { label: "憎悪の神威15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kamui_m_20: { label: "業火の神威20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 15.5 }, { type: "通常守護", value: 15.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_m_20: { label: "渦潮の神威20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 15.5 }, { type: "通常守護", value: 15.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_m_20: { label: "大地の神威20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 15.5 }, { type: "通常守護", value: 15.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_m_20: { label: "竜巻の神威20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 15.5 }, { type: "通常守護", value: 15.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_m_20: { label: "雷電の神威20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 15.5 }, { type: "通常守護", value: 15.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_m_20: { label: "憎悪の神威20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 15.5 }, { type: "通常守護", value: 15.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kamui_l_10: { label: "紅蓮の神威10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_l_10: { label: "霧氷の神威10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_l_10: { label: "地裂の神威10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_l_10: { label: "乱気の神威10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_l_10: { label: "天光の神威10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_l_10: { label: "奈落の神威10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kamui_l_15: { label: "紅蓮の神威15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_l_15: { label: "霧氷の神威15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_l_15: { label: "地裂の神威15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_l_15: { label: "乱気の神威15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_l_15: { label: "天光の神威15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_l_15: { label: "奈落の神威15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kamui_l_20: { label: "紅蓮の神威20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "通常守護", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kamui_l_20: { label: "霧氷の神威20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "通常守護", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kamui_l_20: { label: "地裂の神威20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "通常守護", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kamui_l_20: { label: "乱気の神威20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "通常守護", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kamui_l_20: { label: "天光の神威20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "通常守護", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kamui_l_20: { label: "奈落の神威20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "通常守護", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_jinkai: {																									
name: "通常刃界",																									
skills: {																									
fire_jinkai_s_10: { label: "火の刃界10", element: "fire", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_jinkai_s_10: { label: "水の刃界10", element: "water", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_jinkai_s_10: { label: "土の刃界10", element: "earth", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_jinkai_s_10: { label: "風の刃界10", element: "wind", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_jinkai_s_10: { label: "光の刃界10", element: "light", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_jinkai_s_10: { label: "闇の刃界10", element: "dark", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_jinkai_s_15: { label: "火の刃界15", element: "fire", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_jinkai_s_15: { label: "水の刃界15", element: "water", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_jinkai_s_15: { label: "土の刃界15", element: "earth", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_jinkai_s_15: { label: "風の刃界15", element: "wind", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_jinkai_s_15: { label: "光の刃界15", element: "light", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_jinkai_s_15: { label: "闇の刃界15", element: "dark", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_kokki: {																									
name: "通常克己",																									
skills: {																									
fire_kokki_s_10: { label: "火の克己10", element: "fire", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kokki_s_10: { label: "水の克己10", element: "water", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kokki_s_10: { label: "土の克己10", element: "earth", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kokki_s_10: { label: "風の克己10", element: "wind", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kokki_s_10: { label: "光の克己10", element: "light", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kokki_s_10: { label: "闇の克己10", element: "dark", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "クリティカル", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kokki_s_15: { label: "火の克己15", element: "fire", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kokki_s_15: { label: "水の克己15", element: "water", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kokki_s_15: { label: "土の克己15", element: "earth", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kokki_s_15: { label: "風の克己15", element: "wind", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kokki_s_15: { label: "光の克己15", element: "light", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kokki_s_15: { label: "闇の克己15", element: "dark", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kokki_s_20: { label: "火の克己20", element: "fire", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kokki_s_20: { label: "水の克己20", element: "water", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kokki_s_20: { label: "土の克己20", element: "earth", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kokki_s_20: { label: "風の克己20", element: "wind", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kokki_s_20: { label: "光の克己20", element: "light", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kokki_s_20: { label: "闇の克己20", element: "dark", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "クリティカル", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kokki_m_10: { label: "業火の克己10", element: "fire", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kokki_m_10: { label: "渦潮の克己10", element: "water", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kokki_m_10: { label: "大地の克己10", element: "earth", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kokki_m_10: { label: "竜巻の克己10", element: "wind", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kokki_m_10: { label: "雷電の克己10", element: "light", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kokki_m_10: { label: "憎悪の克己10", element: "dark", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "クリティカル", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kokki_m_15: { label: "業火の克己15", element: "fire", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kokki_m_15: { label: "渦潮の克己15", element: "water", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kokki_m_15: { label: "大地の克己15", element: "earth", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kokki_m_15: { label: "竜巻の克己15", element: "wind", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kokki_m_15: { label: "雷電の克己15", element: "light", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kokki_m_15: { label: "憎悪の克己15", element: "dark", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "クリティカル", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_kokki_m_20: { label: "業火の克己20", element: "fire", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_kokki_m_20: { label: "渦潮の克己20", element: "water", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_kokki_m_20: { label: "大地の克己20", element: "earth", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_kokki_m_20: { label: "竜巻の克己20", element: "wind", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_kokki_m_20: { label: "雷電の克己20", element: "light", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_kokki_m_20: { label: "憎悪の克己20", element: "dark", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "クリティカル", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_nite: {																									
name: "通常二手",																									
skills: {																									
fire_nite_s_10: { label: "火の二手10", element: "fire", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_nite_s_10: { label: "水の二手10", element: "water", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_nite_s_10: { label: "土の二手10", element: "earth", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_nite_s_10: { label: "風の二手10", element: "wind", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_nite_s_10: { label: "光の二手10", element: "light", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_nite_s_10: { label: "闇の二手10", element: "dark", level: 10, effects: [{ type: "DA確率", value: 2.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_nite_s_15: { label: "火の二手15", element: "fire", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_nite_s_15: { label: "水の二手15", element: "water", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_nite_s_15: { label: "土の二手15", element: "earth", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_nite_s_15: { label: "風の二手15", element: "wind", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_nite_s_15: { label: "光の二手15", element: "light", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_nite_s_15: { label: "闇の二手15", element: "dark", level: 15, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_nite_s_20: { label: "火の二手20", element: "fire", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_nite_s_20: { label: "水の二手20", element: "water", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_nite_s_20: { label: "土の二手20", element: "earth", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_nite_s_20: { label: "風の二手20", element: "wind", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_nite_s_20: { label: "光の二手20", element: "light", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_nite_s_20: { label: "闇の二手20", element: "dark", level: 20, effects: [{ type: "DA確率", value: 4.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_nite_m_10: { label: "業火の二手10", element: "fire", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_nite_m_10: { label: "渦潮の二手10", element: "water", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_nite_m_10: { label: "大地の二手10", element: "earth", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_nite_m_10: { label: "竜巻の二手10", element: "wind", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_nite_m_10: { label: "雷電の二手10", element: "light", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_nite_m_10: { label: "憎悪の二手10", element: "dark", level: 10, effects: [{ type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_nite_m_15: { label: "業火の二手15", element: "fire", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_nite_m_15: { label: "渦潮の二手15", element: "water", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_nite_m_15: { label: "大地の二手15", element: "earth", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_nite_m_15: { label: "竜巻の二手15", element: "wind", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_nite_m_15: { label: "雷電の二手15", element: "light", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_nite_m_15: { label: "憎悪の二手15", element: "dark", level: 15, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_nite_m_20: { label: "業火の二手20", element: "fire", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_nite_m_20: { label: "渦潮の二手20", element: "water", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_nite_m_20: { label: "大地の二手20", element: "earth", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_nite_m_20: { label: "竜巻の二手20", element: "wind", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_nite_m_20: { label: "雷電の二手20", element: "light", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_nite_m_20: { label: "憎悪の二手20", element: "dark", level: 20, effects: [{ type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_nite_l_10: { label: "紅蓮の二手10", element: "fire", level: 10, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_nite_l_10: { label: "霧氷の二手10", element: "water", level: 10, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_nite_l_10: { label: "地裂の二手10", element: "earth", level: 10, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_nite_l_10: { label: "乱気の二手10", element: "wind", level: 10, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_nite_l_10: { label: "天光の二手10", element: "light", level: 10, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_nite_l_10: { label: "奈落の二手10", element: "dark", level: 10, effects: [{ type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_nite_l_15: { label: "紅蓮の二手15", element: "fire", level: 15, effects: [{ type: "DA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_nite_l_15: { label: "霧氷の二手15", element: "water", level: 15, effects: [{ type: "DA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_nite_l_15: { label: "地裂の二手15", element: "earth", level: 15, effects: [{ type: "DA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_nite_l_15: { label: "乱気の二手15", element: "wind", level: 15, effects: [{ type: "DA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_nite_l_15: { label: "天光の二手15", element: "light", level: 15, effects: [{ type: "DA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_nite_l_15: { label: "奈落の二手15", element: "dark", level: 15, effects: [{ type: "DA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_sante: {																									
name: "通常三手",																									
skills: {																									
fire_sante_s_10: { label: "火の三手10", element: "fire", level: 10, effects: [{ type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_sante_s_10: { label: "水の三手10", element: "water", level: 10, effects: [{ type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_sante_s_10: { label: "土の三手10", element: "earth", level: 10, effects: [{ type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_sante_s_10: { label: "風の三手10", element: "wind", level: 10, effects: [{ type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_sante_s_10: { label: "光の三手10", element: "light", level: 10, effects: [{ type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_sante_s_10: { label: "闇の三手10", element: "dark", level: 10, effects: [{ type: "TA確率", value: 2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_sante_s_15: { label: "火の三手15", element: "fire", level: 15, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_sante_s_15: { label: "水の三手15", element: "water", level: 15, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_sante_s_15: { label: "土の三手15", element: "earth", level: 15, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_sante_s_15: { label: "風の三手15", element: "wind", level: 15, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_sante_s_15: { label: "光の三手15", element: "light", level: 15, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_sante_s_15: { label: "闇の三手15", element: "dark", level: 15, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_sante_m_10: { label: "業火の三手10", element: "fire", level: 10, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_sante_m_10: { label: "渦潮の三手10", element: "water", level: 10, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_sante_m_10: { label: "大地の三手10", element: "earth", level: 10, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_sante_m_10: { label: "竜巻の三手10", element: "wind", level: 10, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_sante_m_10: { label: "雷電の三手10", element: "light", level: 10, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_sante_m_10: { label: "憎悪の三手10", element: "dark", level: 10, effects: [{ type: "TA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_sante_m_15: { label: "業火の三手15", element: "fire", level: 15, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_sante_m_15: { label: "渦潮の三手15", element: "water", level: 15, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_sante_m_15: { label: "大地の三手15", element: "earth", level: 15, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_sante_m_15: { label: "竜巻の三手15", element: "wind", level: 15, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_sante_m_15: { label: "雷電の三手15", element: "light", level: 15, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_sante_m_15: { label: "憎悪の三手15", element: "dark", level: 15, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_sante_m_20: { label: "業火の三手20", element: "fire", level: 20, effects: [{ type: "TA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_sante_m_20: { label: "渦潮の三手20", element: "water", level: 20, effects: [{ type: "TA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_sante_m_20: { label: "大地の三手20", element: "earth", level: 20, effects: [{ type: "TA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_sante_m_20: { label: "竜巻の三手20", element: "wind", level: 20, effects: [{ type: "TA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_sante_m_20: { label: "雷電の三手20", element: "light", level: 20, effects: [{ type: "TA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_sante_m_20: { label: "憎悪の三手20", element: "dark", level: 20, effects: [{ type: "TA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_sante_l_10: { label: "紅蓮の三手10", element: "fire", level: 10, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_sante_l_10: { label: "霧氷の三手10", element: "water", level: 10, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_sante_l_10: { label: "地裂の三手10", element: "earth", level: 10, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_sante_l_10: { label: "乱気の三手10", element: "wind", level: 10, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_sante_l_10: { label: "天光の三手10", element: "light", level: 10, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_sante_l_10: { label: "奈落の三手10", element: "dark", level: 10, effects: [{ type: "TA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_sante_l_15: { label: "紅蓮の三手15", element: "fire", level: 15, effects: [{ type: "TA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_sante_l_15: { label: "霧氷の三手15", element: "water", level: 15, effects: [{ type: "TA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_sante_l_15: { label: "地裂の三手15", element: "earth", level: 15, effects: [{ type: "TA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_sante_l_15: { label: "乱気の三手15", element: "wind", level: 15, effects: [{ type: "TA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_sante_l_15: { label: "天光の三手15", element: "light", level: 15, effects: [{ type: "TA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_sante_l_15: { label: "奈落の三手15", element: "dark", level: 15, effects: [{ type: "TA確率", value: 7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_seisho: {																									
name: "通常星晶",																									
skills: {																									
fire_seisho_m_10: { label: "業火の星晶10", element: "fire", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "通常攻刃", value: 12 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }] },																									
water_seisho_m_10: { label: "渦潮の星晶10", element: "water", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "通常攻刃", value: 12 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }] },																									
earth_seisho_m_10: { label: "大地の星晶10", element: "earth", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "通常攻刃", value: 12 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }] },																									
wind_seisho_m_10: { label: "竜巻の星晶10", element: "wind", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "通常攻刃", value: 12 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }] },																									
light_seisho_m_10: { label: "雷電の星晶10", element: "light", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "通常攻刃", value: 12 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }] },																									
dark_seisho_m_10: { label: "憎悪の星晶10", element: "dark", level: 10, effects: [{ type: "クリティカル", value: 5 }, { type: "通常攻刃", value: 12 }, { type: "通常守護", value: 15 }, { type: "", value: 0 }] },																									
																									
fire_seisho_m_15: { label: "業火の星晶15", element: "fire", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 17 }, { type: "", value: 0 }] },																									
water_seisho_m_15: { label: "渦潮の星晶15", element: "water", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 17 }, { type: "", value: 0 }] },																									
earth_seisho_m_15: { label: "大地の星晶15", element: "earth", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 17 }, { type: "", value: 0 }] },																									
wind_seisho_m_15: { label: "竜巻の星晶15", element: "wind", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 17 }, { type: "", value: 0 }] },																									
light_seisho_m_15: { label: "雷電の星晶15", element: "light", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 17 }, { type: "", value: 0 }] },																									
dark_seisho_m_15: { label: "憎悪の星晶15", element: "dark", level: 15, effects: [{ type: "クリティカル", value: 6.5 }, { type: "通常攻刃", value: 14.5 }, { type: "通常守護", value: 17 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_musou: {																									
name: "通常無双",																									
skills: {																									
fire_musou_m_10: { label: "業火の無双10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_musou_m_10: { label: "渦潮の無双10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_musou_m_10: { label: "大地の無双10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_musou_m_10: { label: "竜巻の無双10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_musou_m_10: { label: "雷電の無双10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_musou_m_10: { label: "憎悪の無双10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 12 }, { type: "DA確率", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_musou_m_15: { label: "業火の無双15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_musou_m_15: { label: "渦潮の無双15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_musou_m_15: { label: "大地の無双15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_musou_m_15: { label: "竜巻の無双15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_musou_m_15: { label: "雷電の無双15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_musou_m_15: { label: "憎悪の無双15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 14.5 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_musou_m_20: { label: "業火の無双20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_musou_m_20: { label: "渦潮の無双20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_musou_m_20: { label: "大地の無双20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_musou_m_20: { label: "竜巻の無双20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_musou_m_20: { label: "雷電の無双20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_musou_m_20: { label: "憎悪の無双20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 16 }, { type: "DA確率", value: 6 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_musou_l_10: { label: "紅蓮の無双Ⅱ10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_musou_l_10: { label: "霧氷の無双Ⅱ10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_musou_l_10: { label: "地裂の無双Ⅱ10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_musou_l_10: { label: "乱気の無双Ⅱ10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_musou_l_10: { label: "天光の無双Ⅱ10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_musou_l_10: { label: "奈落の無双Ⅱ10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_musou_l_15: { label: "紅蓮の無双Ⅱ15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_musou_l_15: { label: "霧氷の無双Ⅱ15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_musou_l_15: { label: "地裂の無双Ⅱ15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_musou_l_15: { label: "乱気の無双Ⅱ15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_musou_l_15: { label: "天光の無双Ⅱ15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 9 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_musou_l_15: { label: "奈落の無双Ⅱ15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 20 }, { type: "DA確率", value: 9 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_boukun: {																									
name: "通常暴君",																									
skills: {																									
fire_boukun_l_10: { label: "紅蓮の暴君10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_boukun_l_10: { label: "霧氷の暴君10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_boukun_l_10: { label: "地裂の暴君10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_boukun_l_10: { label: "乱気の暴君10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_boukun_l_10: { label: "天光の暴君10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_boukun_l_10: { label: "奈落の暴君10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_boukun_l_15: { label: "紅蓮の暴君15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_boukun_l_15: { label: "霧氷の暴君15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_boukun_l_15: { label: "地裂の暴君15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_boukun_l_15: { label: "乱気の暴君15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_boukun_l_15: { label: "天光の暴君15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_boukun_l_15: { label: "奈落の暴君15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_boukun_l_20: { label: "紅蓮の暴君20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_boukun_l_20: { label: "霧氷の暴君20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_boukun_l_20: { label: "地裂の暴君20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_boukun_l_20: { label: "乱気の暴君20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_boukun_l_20: { label: "天光の暴君20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_boukun_l_20: { label: "奈落の暴君20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_boukun2_xl_10: { label: "紅蓮の暴君Ⅱ10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_boukun2_xl_10: { label: "霧氷の暴君Ⅱ10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_boukun2_xl_10: { label: "地裂の暴君Ⅱ10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_boukun2_xl_10: { label: "乱気の暴君Ⅱ10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_boukun2_xl_10: { label: "天光の暴君Ⅱ10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_boukun2_xl_10: { label: "奈落の暴君Ⅱ10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_boukun2_xl_15: { label: "紅蓮の暴君Ⅱ15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 23 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_boukun2_xl_15: { label: "霧氷の暴君Ⅱ15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 23 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_boukun2_xl_15: { label: "地裂の暴君Ⅱ15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 23 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_boukun2_xl_15: { label: "乱気の暴君Ⅱ15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 23 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_boukun2_xl_15: { label: "天光の暴君Ⅱ15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 23 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_boukun2_xl_15: { label: "奈落の暴君Ⅱ15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 23 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_boukun2_xl_20: { label: "紅蓮の暴君Ⅱ20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 25.5 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_boukun2_xl_20: { label: "霧氷の暴君Ⅱ20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 25.5 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_boukun2_xl_20: { label: "地裂の暴君Ⅱ20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 25.5 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_boukun2_xl_20: { label: "乱気の暴君Ⅱ20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 25.5 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_boukun2_xl_20: { label: "天光の暴君Ⅱ20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 25.5 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_boukun2_xl_20: { label: "奈落の暴君Ⅱ20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 25.5 }, { type: "HP上昇", value: -10 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
bahamut_fthulus: {																									
name: "バハ武器",																									
skills: {																									
baha_ignis_10: { label: "コンキリオ・イグニス10", element: "all", level: 10, effects: [{ type: "通常攻刃", value: 30 }, { type: "通常守護", value: 15 }, { type: "通常攻刃", value: 2 }, { type: "通常守護", value: 2 }] },																									
baha_ventus_10: { label: "コンキリオ・ウェントス10", element: "all", level: 10, effects: [{ type: "通常攻刃", value: 30 }, { type: "通常守護", value: 15 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_cornu_10: { label: "コンキリオ・コルヌ10", element: "all", level: 10, effects: [{ type: "通常攻刃", value: 30 }, { type: "通常守護", value: 15 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_terra_10: { label: "コンキリオ・テラ10", element: "all", level: 10, effects: [{ type: "通常攻刃", value: 30 }, { type: "通常守護", value: 15 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_invel_10: { label: "コンキリオ・インベル10", element: "all", level: 10, effects: [{ type: "通常攻刃", value: 30 }, { type: "通常守護", value: 15 }, { type: "通常攻刃", value: 2 }, { type: "通常守護", value: 2 }] },																									
baha_arbos_10: { label: "コンキリオ・アルボス10", element: "all", level: 10, effects: [{ type: "通常攻刃", value: 30 }, { type: "通常守護", value: 15 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_hym_10: { label: "ヒュムアニムス・メンス10", element: "all", level: 10, effects: [{ type: "通常守護", value: 30 }, { type: "DA確率", value: 5 }, { type: "TA確率", value: 5 }, { type: "TA確率", value: 2 }] },																									
baha_eln_10: { label: "エルンアニムス・メンス10", element: "all", level: 10, effects: [{ type: "通常守護", value: 30 }, { type: "DA確率", value: 5 }, { type: "TA確率", value: 5 }, { type: "TA確率", value: 2 }] },																									
baha_havn_10: { label: "ハヴンアニムス・メンス10", element: "all", level: 10, effects: [{ type: "通常守護", value: 30 }, { type: "DA確率", value: 5 }, { type: "TA確率", value: 5 }, { type: "TA確率", value: 2 }] },																									
baha_dora_10: { label: "ドーラアニムス・メンス10", element: "all", level: 10, effects: [{ type: "通常守護", value: 30 }, { type: "DA確率", value: 5 }, { type: "TA確率", value: 5 }, { type: "TA確率", value: 2 }] },																									
																									
baha_ignis_15: { label: "コンキリオ・イグニス15", element: "all", level: 15, effects: [{ type: "通常攻刃", value: 32 }, { type: "通常守護", value: 18 }, { type: "通常攻刃", value: 2 }, { type: "通常守護", value: 2 }] },																									
baha_ventus_15: { label: "コンキリオ・ウェントス15", element: "all", level: 15, effects: [{ type: "通常攻刃", value: 32 }, { type: "通常守護", value: 18 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_cornu_15: { label: "コンキリオ・コルヌ15", element: "all", level: 15, effects: [{ type: "通常攻刃", value: 32 }, { type: "通常守護", value: 18 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_terra_15: { label: "コンキリオ・テラ15", element: "all", level: 15, effects: [{ type: "通常攻刃", value: 32 }, { type: "通常守護", value: 18 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_invel_15: { label: "コンキリオ・インベル15", element: "all", level: 15, effects: [{ type: "通常攻刃", value: 32 }, { type: "通常守護", value: 18 }, { type: "通常攻刃", value: 2 }, { type: "通常守護", value: 2 }] },																									
baha_arbos_15: { label: "コンキリオ・アルボス15", element: "all", level: 15, effects: [{ type: "通常攻刃", value: 32 }, { type: "通常守護", value: 18 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_hym_15: { label: "ヒュムアニムス・メンス15", element: "all", level: 15, effects: [{ type: "通常守護", value: 40 }, { type: "DA確率", value: 8 }, { type: "TA確率", value: 8 }, { type: "TA確率", value: 2 }] },																									
baha_eln_15: { label: "エルンアニムス・メンス15", element: "all", level: 15, effects: [{ type: "通常守護", value: 40 }, { type: "DA確率", value: 8 }, { type: "TA確率", value: 8 }, { type: "TA確率", value: 2 }] },																									
baha_havn_15: { label: "ハヴンアニムス・メンス15", element: "all", level: 15, effects: [{ type: "通常守護", value: 40 }, { type: "DA確率", value: 8 }, { type: "TA確率", value: 8 }, { type: "TA確率", value: 2 }] },																									
baha_dora_15: { label: "ドーラアニムス・メンス15", element: "all", level: 15, effects: [{ type: "通常守護", value: 40 }, { type: "DA確率", value: 8 }, { type: "TA確率", value: 8 }, { type: "TA確率", value: 2 }] },																									
																									
baha_ignis_20: { label: "コンキリオ・イグニス20", element: "all", level: 20, effects: [{ type: "通常攻刃", value: 35 }, { type: "通常守護", value: 21 }, { type: "通常攻刃", value: 2 }, { type: "通常守護", value: 2 }] },																									
baha_ventus_20: { label: "コンキリオ・ウェントス20", element: "all", level: 20, effects: [{ type: "通常攻刃", value: 35 }, { type: "通常守護", value: 21 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_cornu_20: { label: "コンキリオ・コルヌ20", element: "all", level: 20, effects: [{ type: "通常攻刃", value: 35 }, { type: "通常守護", value: 21 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_terra_20: { label: "コンキリオ・テラ20", element: "all", level: 20, effects: [{ type: "通常攻刃", value: 35 }, { type: "通常守護", value: 21 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_invel_20: { label: "コンキリオ・インベル20", element: "all", level: 20, effects: [{ type: "通常攻刃", value: 35 }, { type: "通常守護", value: 21 }, { type: "通常攻刃", value: 2 }, { type: "通常守護", value: 2 }] },																									
baha_arbos_20: { label: "コンキリオ・アルボス20", element: "all", level: 20, effects: [{ type: "通常攻刃", value: 35 }, { type: "通常守護", value: 21 }, { type: "通常攻刃", value: 4 }, { type: "", value: 0 }] },																									
baha_hym_20: { label: "ヒュムアニムス・メンス20", element: "all", level: 20, effects: [{ type: "通常守護", value: 45 }, { type: "DA確率", value: 11 }, { type: "TA確率", value: 11 }, { type: "TA確率", value: 2 }] },																									
baha_eln_20: { label: "エルンアニムス・メンス20", element: "all", level: 20, effects: [{ type: "通常守護", value: 45 }, { type: "DA確率", value: 11 }, { type: "TA確率", value: 11 }, { type: "TA確率", value: 2 }] },																									
baha_havn_20: { label: "ハヴンアニムス・メンス20", element: "all", level: 20, effects: [{ type: "通常守護", value: 45 }, { type: "DA確率", value: 11 }, { type: "TA確率", value: 11 }, { type: "TA確率", value: 2 }] },																									
baha_dora_20: { label: "ドーラアニムス・メンス20", element: "all", level: 20, effects: [{ type: "通常守護", value: 45 }, { type: "DA確率", value: 11 }, { type: "TA確率", value: 11 }, { type: "TA確率", value: 2 }] }																									
}																									
},																									
																									
normal_juin: {																									
name: "通常呪印",																									
skills: {																									
fire_juin_l_10: { label: "紅蓮の呪印10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_juin_l_10: { label: "霧氷の呪印10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_juin_l_10: { label: "地裂の呪印10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_juin_l_10: { label: "乱気の呪印10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_juin_l_10: { label: "天光の呪印10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_juin_l_10: { label: "奈落の呪印10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_juin_l_15: { label: "紅蓮の呪印15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_juin_l_15: { label: "霧氷の呪印15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_juin_l_15: { label: "地裂の呪印15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_juin_l_15: { label: "乱気の呪印15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_juin_l_15: { label: "天光の呪印15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_juin_l_15: { label: "奈落の呪印15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_juin_l_20: { label: "紅蓮の呪印20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_juin_l_20: { label: "霧氷の呪印20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_juin_l_20: { label: "地裂の呪印20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_juin_l_20: { label: "乱気の呪印20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_juin_l_20: { label: "天光の呪印20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_juin_l_20: { label: "奈落の呪印20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "ターンダメージ", value: -5 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_syura: {																									
name: "通常修羅",																									
skills: {																									
fire_syura_l_10: { label: "紅蓮の修羅10", element: "fire", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_syura_l_10: { label: "霧氷の修羅10", element: "water", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_syura_l_10: { label: "地裂の修羅10", element: "earth", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_syura_l_10: { label: "乱気の修羅10", element: "wind", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_syura_l_10: { label: "天光の修羅10", element: "light", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_syura_l_10: { label: "奈落の修羅10", element: "dark", level: 10, effects: [{ type: "通常攻刃", value: 15 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_syura_l_15: { label: "紅蓮の修羅15", element: "fire", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_syura_l_15: { label: "霧氷の修羅15", element: "water", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_syura_l_15: { label: "地裂の修羅15", element: "earth", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_syura_l_15: { label: "乱気の修羅15", element: "wind", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_syura_l_15: { label: "天光の修羅15", element: "light", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_syura_l_15: { label: "奈落の修羅15", element: "dark", level: 15, effects: [{ type: "通常攻刃", value: 18 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_syura_l_20: { label: "紅蓮の修羅20", element: "fire", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_syura_l_20: { label: "霧氷の修羅20", element: "water", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_syura_l_20: { label: "地裂の修羅20", element: "earth", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_syura_l_20: { label: "乱気の修羅20", element: "wind", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_syura_l_20: { label: "天光の修羅20", element: "light", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_syura_l_20: { label: "奈落の修羅20", element: "dark", level: 20, effects: [{ type: "通常攻刃", value: 20 }, { type: "HP上昇", value: -20 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_oncho: {																									
name: "通常恩寵",																									
skills: {																									
fire_oncho_s_10: { label: "火の恩寵10", element: "fire", level: 10, effects: [{ type: "HP上昇", value: 12 }, { type: "弱体耐性", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_oncho_s_10: { label: "水の恩寵10", element: "water", level: 10, effects: [{ type: "HP上昇", value: 12 }, { type: "弱体耐性", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_oncho_s_10: { label: "土の恩寵10", element: "earth", level: 10, effects: [{ type: "HP上昇", value: 12 }, { type: "弱体耐性", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_oncho_s_10: { label: "風の恩寵10", element: "wind", level: 10, effects: [{ type: "HP上昇", value: 12 }, { type: "弱体耐性", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_oncho_s_10: { label: "光の恩寵10", element: "light", level: 10, effects: [{ type: "HP上昇", value: 12 }, { type: "弱体耐性", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_oncho_s_10: { label: "闇の恩寵10", element: "dark", level: 10, effects: [{ type: "HP上昇", value: 12 }, { type: "弱体耐性", value: 3 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_oncho_s_15: { label: "火の恩寵15", element: "fire", level: 15, effects: [{ type: "HP上昇", value: 14 }, { type: "弱体耐性", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_oncho_s_15: { label: "水の恩寵15", element: "water", level: 15, effects: [{ type: "HP上昇", value: 14 }, { type: "弱体耐性", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_oncho_s_15: { label: "土の恩寵15", element: "earth", level: 15, effects: [{ type: "HP上昇", value: 14 }, { type: "弱体耐性", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_oncho_s_15: { label: "風の恩寵15", element: "wind", level: 15, effects: [{ type: "HP上昇", value: 14 }, { type: "弱体耐性", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_oncho_s_15: { label: "光の恩寵15", element: "light", level: 15, effects: [{ type: "HP上昇", value: 14 }, { type: "弱体耐性", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_oncho_s_15: { label: "闇の恩寵15", element: "dark", level: 15, effects: [{ type: "HP上昇", value: 14 }, { type: "弱体耐性", value: 4 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_oncho_m_10: { label: "業火の恩寵10", element: "fire", level: 10, effects: [{ type: "HP上昇", value: 15 }, { type: "弱体耐性", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_oncho_m_10: { label: "渦潮の恩寵10", element: "water", level: 10, effects: [{ type: "HP上昇", value: 15 }, { type: "弱体耐性", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_oncho_m_10: { label: "大地の恩寵10", element: "earth", level: 10, effects: [{ type: "HP上昇", value: 15 }, { type: "弱体耐性", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_oncho_m_10: { label: "竜巻の恩寵10", element: "wind", level: 10, effects: [{ type: "HP上昇", value: 15 }, { type: "弱体耐性", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_oncho_m_10: { label: "雷電の恩寵10", element: "light", level: 10, effects: [{ type: "HP上昇", value: 15 }, { type: "弱体耐性", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_oncho_m_10: { label: "憎悪の恩寵10", element: "dark", level: 10, effects: [{ type: "HP上昇", value: 15 }, { type: "弱体耐性", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_oncho_m_15: { label: "業火の恩寵15", element: "fire", level: 15, effects: [{ type: "HP上昇", value: 17 }, { type: "弱体耐性", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_oncho_m_15: { label: "渦潮の恩寵15", element: "water", level: 15, effects: [{ type: "HP上昇", value: 17 }, { type: "弱体耐性", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_oncho_m_15: { label: "大地の恩寵15", element: "earth", level: 15, effects: [{ type: "HP上昇", value: 17 }, { type: "弱体耐性", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_oncho_m_15: { label: "竜巻の恩寵15", element: "wind", level: 15, effects: [{ type: "HP上昇", value: 17 }, { type: "弱体耐性", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_oncho_m_15: { label: "雷電の恩寵15", element: "light", level: 15, effects: [{ type: "HP上昇", value: 17 }, { type: "弱体耐性", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_oncho_m_15: { label: "憎悪の恩寵15", element: "dark", level: 15, effects: [{ type: "HP上昇", value: 17 }, { type: "弱体耐性", value: 6.5 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_shugo: {																									
name: "通常守護",																									
skills: {																									
fire_shugo_s_10: { label: "火の守護10", element: "fire", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo_s_10: { label: "水の守護10", element: "water", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo_s_10: { label: "土の守護10", element: "earth", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo_s_10: { label: "風の守護10", element: "wind", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo_s_10: { label: "光の守護10", element: "light", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo_s_10: { label: "闇の守護10", element: "dark", level: 10, effects: [{ type: "通常守護", value: 12 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo_s_15: { label: "火の守護15", element: "fire", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo_s_15: { label: "水の守護15", element: "water", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo_s_15: { label: "土の守護15", element: "earth", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo_s_15: { label: "風の守護15", element: "wind", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo_s_15: { label: "光の守護15", element: "light", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo_s_15: { label: "闇の守護15", element: "dark", level: 15, effects: [{ type: "通常守護", value: 14 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo_s_20: { label: "火の守護20", element: "fire", level: 20, effects: [{ type: "通常守護", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo_s_20: { label: "水の守護20", element: "water", level: 20, effects: [{ type: "通常守護", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo_s_20: { label: "土の守護20", element: "earth", level: 20, effects: [{ type: "通常守護", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo_s_20: { label: "風の守護20", element: "wind", level: 20, effects: [{ type: "通常守護", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo_s_20: { label: "光の守護20", element: "light", level: 20, effects: [{ type: "通常守護", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo_s_20: { label: "闇の守護20", element: "dark", level: 20, effects: [{ type: "通常守護", value: 16 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo_m_10: { label: "業火の守護10", element: "fire", level: 10, effects: [{ type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo_m_10: { label: "渦潮の守護10", element: "water", level: 10, effects: [{ type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo_m_10: { label: "大地の守護10", element: "earth", level: 10, effects: [{ type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo_m_10: { label: "竜巻の守護10", element: "wind", level: 10, effects: [{ type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo_m_10: { label: "雷電の守護10", element: "light", level: 10, effects: [{ type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo_m_10: { label: "憎悪の守護10", element: "dark", level: 10, effects: [{ type: "通常守護", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo_m_15: { label: "業火の守護15", element: "fire", level: 15, effects: [{ type: "通常守護", value: 17 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo_m_15: { label: "渦潮の守護15", element: "water", level: 15, effects: [{ type: "通常守護", value: 17 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo_m_15: { label: "大地の守護15", element: "earth", level: 15, effects: [{ type: "通常守護", value: 17 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo_m_15: { label: "竜巻の守護15", element: "wind", level: 15, effects: [{ type: "通常守護", value: 17 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo_m_15: { label: "雷電の守護15", element: "light", level: 15, effects: [{ type: "通常守護", value: 17 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo_m_15: { label: "憎悪の守護15", element: "dark", level: 15, effects: [{ type: "通常守護", value: 17 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo_l_10: { label: "紅蓮の守護10", element: "fire", level: 10, effects: [{ type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo_l_10: { label: "霧氷の守護10", element: "water", level: 10, effects: [{ type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo_l_10: { label: "地裂の守護10", element: "earth", level: 10, effects: [{ type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo_l_10: { label: "乱気の守護10", element: "wind", level: 10, effects: [{ type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo_l_10: { label: "天光の守護10", element: "light", level: 10, effects: [{ type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo_l_10: { label: "奈落の守護10", element: "dark", level: 10, effects: [{ type: "通常守護", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo_l_15: { label: "紅蓮の守護15", element: "fire", level: 15, effects: [{ type: "通常守護", value: 21 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo_l_15: { label: "霧氷の守護15", element: "water", level: 15, effects: [{ type: "通常守護", value: 21 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo_l_15: { label: "地裂の守護15", element: "earth", level: 15, effects: [{ type: "通常守護", value: 21 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo_l_15: { label: "乱気の守護15", element: "wind", level: 15, effects: [{ type: "通常守護", value: 21 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo_l_15: { label: "天光の守護15", element: "light", level: 15, effects: [{ type: "通常守護", value: 21 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo_l_15: { label: "奈落の守護15", element: "dark", level: 15, effects: [{ type: "通常守護", value: 21 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo_l_20: { label: "紅蓮の守護20", element: "fire", level: 20, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo_l_20: { label: "霧氷の守護20", element: "water", level: 20, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo_l_20: { label: "地裂の守護20", element: "earth", level: 20, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo_l_20: { label: "乱気の守護20", element: "wind", level: 20, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo_l_20: { label: "天光の守護20", element: "light", level: 20, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo_l_20: { label: "奈落の守護20", element: "dark", level: 20, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo2_xl_10: { label: "紅蓮の守護Ⅱ10", element: "fire", level: 10, effects: [{ type: "通常守護", value: 19 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo2_xl_10: { label: "霧氷の守護Ⅱ10", element: "water", level: 10, effects: [{ type: "通常守護", value: 19 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo2_xl_10: { label: "地裂の守護Ⅱ10", element: "earth", level: 10, effects: [{ type: "通常守護", value: 19 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo2_xl_10: { label: "乱気の守護Ⅱ10", element: "wind", level: 10, effects: [{ type: "通常守護", value: 19 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo2_xl_10: { label: "天光の守護Ⅱ10", element: "light", level: 10, effects: [{ type: "通常守護", value: 19 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo2_xl_10: { label: "奈落の守護Ⅱ10", element: "dark", level: 10, effects: [{ type: "通常守護", value: 19 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shugo2_xl_15: { label: "紅蓮の守護Ⅱ15", element: "fire", level: 15, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shugo2_xl_15: { label: "霧氷の守護Ⅱ15", element: "water", level: 15, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shugo2_xl_15: { label: "地裂の守護Ⅱ15", element: "earth", level: 15, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shugo2_xl_15: { label: "乱気の守護Ⅱ15", element: "wind", level: 15, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shugo2_xl_15: { label: "天光の守護Ⅱ15", element: "light", level: 15, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shugo2_xl_15: { label: "奈落の守護Ⅱ15", element: "dark", level: 15, effects: [{ type: "通常守護", value: 24 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_konshin_detail: {																									
name: "通常渾身",																									
skills: {																									
fire_konshin_s_10: { label: "火の渾身10", element: "fire", level: 10, effects: [{ type: "通常渾身100%", value: 4.92 }, { type: "通常渾身75%", value: 3.33 }, { type: "通常渾身50%", value: 2.48 }, { type: "通常渾身25%", value: 2.15 }] },																									
water_konshin_s_10: { label: "水の渾身10", element: "water", level: 10, effects: [{ type: "通常渾身100%", value: 4.92 }, { type: "通常渾身75%", value: 3.33 }, { type: "通常渾身50%", value: 2.48 }, { type: "通常渾身25%", value: 2.15 }] },																									
earth_konshin_s_10: { label: "土の渾身10", element: "earth", level: 10, effects: [{ type: "通常渾身100%", value: 4.92 }, { type: "通常渾身75%", value: 3.33 }, { type: "通常渾身50%", value: 2.48 }, { type: "通常渾身25%", value: 2.15 }] },																									
wind_konshin_s_10: { label: "風の渾身10", element: "wind", level: 10, effects: [{ type: "通常渾身100%", value: 4.92 }, { type: "通常渾身75%", value: 3.33 }, { type: "通常渾身50%", value: 2.48 }, { type: "通常渾身25%", value: 2.15 }] },																									
light_konshin_s_10: { label: "光の渾身10", element: "light", level: 10, effects: [{ type: "通常渾身100%", value: 4.92 }, { type: "通常渾身75%", value: 3.33 }, { type: "通常渾身50%", value: 2.48 }, { type: "通常渾身25%", value: 2.15 }] },																									
dark_konshin_s_10: { label: "闇の渾身10", element: "dark", level: 10, effects: [{ type: "通常渾身100%", value: 4.92 }, { type: "通常渾身75%", value: 3.33 }, { type: "通常渾身50%", value: 2.48 }, { type: "通常渾身25%", value: 2.15 }] },																									
																									
fire_konshin_s_15: { label: "火の渾身15", element: "fire", level: 15, effects: [{ type: "通常渾身100%", value: 5.59 }, { type: "通常渾身75%", value: 3.62 }, { type: "通常渾身50%", value: 2.57 }, { type: "通常渾身25%", value: 2.17 }] },																									
water_konshin_s_15: { label: "水の渾身15", element: "water", level: 15, effects: [{ type: "通常渾身100%", value: 5.59 }, { type: "通常渾身75%", value: 3.62 }, { type: "通常渾身50%", value: 2.57 }, { type: "通常渾身25%", value: 2.17 }] },																									
earth_konshin_s_15: { label: "土の渾身15", element: "earth", level: 15, effects: [{ type: "通常渾身100%", value: 5.59 }, { type: "通常渾身75%", value: 3.62 }, { type: "通常渾身50%", value: 2.57 }, { type: "通常渾身25%", value: 2.17 }] },																									
wind_konshin_s_15: { label: "風の渾身15", element: "wind", level: 15, effects: [{ type: "通常渾身100%", value: 5.59 }, { type: "通常渾身75%", value: 3.62 }, { type: "通常渾身50%", value: 2.57 }, { type: "通常渾身25%", value: 2.17 }] },																									
light_konshin_s_15: { label: "光の渾身15", element: "light", level: 15, effects: [{ type: "通常渾身100%", value: 5.59 }, { type: "通常渾身75%", value: 3.62 }, { type: "通常渾身50%", value: 2.57 }, { type: "通常渾身25%", value: 2.17 }] },																									
dark_konshin_s_15: { label: "闇の渾身15", element: "dark", level: 15, effects: [{ type: "通常渾身100%", value: 5.59 }, { type: "通常渾身75%", value: 3.62 }, { type: "通常渾身50%", value: 2.57 }, { type: "通常渾身25%", value: 2.17 }] },																									
																									
fire_konshin_m_10: { label: "業火の渾身10", element: "fire", level: 10, effects: [{ type: "通常渾身100%", value: 7.76 }, { type: "通常渾身75%", value: 4.55 }, { type: "通常渾身50%", value: 2.85 }, { type: "通常渾身25%", value: 2.2 }] },																									
water_konshin_m_10: { label: "渦潮の渾身10", element: "water", level: 10, effects: [{ type: "通常渾身100%", value: 7.76 }, { type: "通常渾身75%", value: 4.55 }, { type: "通常渾身50%", value: 2.85 }, { type: "通常渾身25%", value: 2.2 }] },																									
earth_konshin_m_10: { label: "大地の渾身10", element: "earth", level: 10, effects: [{ type: "通常渾身100%", value: 7.76 }, { type: "通常渾身75%", value: 4.55 }, { type: "通常渾身50%", value: 2.85 }, { type: "通常渾身25%", value: 2.2 }] },																									
wind_konshin_m_10: { label: "竜巻の渾身10", element: "wind", level: 10, effects: [{ type: "通常渾身100%", value: 7.76 }, { type: "通常渾身75%", value: 4.55 }, { type: "通常渾身50%", value: 2.85 }, { type: "通常渾身25%", value: 2.2 }] },																									
light_konshin_m_10: { label: "雷電の渾身10", element: "light", level: 10, effects: [{ type: "通常渾身100%", value: 7.76 }, { type: "通常渾身75%", value: 4.55 }, { type: "通常渾身50%", value: 2.85 }, { type: "通常渾身25%", value: 2.2 }] },																									
dark_konshin_m_10: { label: "憎悪の渾身10", element: "dark", level: 10, effects: [{ type: "通常渾身100%", value: 7.76 }, { type: "通常渾身75%", value: 4.55 }, { type: "通常渾身50%", value: 2.85 }, { type: "通常渾身25%", value: 2.2 }] },																									
																									
fire_konshin_m_15: { label: "業火の渾身15", element: "fire", level: 15, effects: [{ type: "通常渾身100%", value: 9.56 }, { type: "通常渾身75%", value: 5.34 }, { type: "通常渾身50%", value: 3.1 }, { type: "通常渾身25%", value: 2.23 }] },																									
water_konshin_m_15: { label: "渦潮の渾身15", element: "water", level: 15, effects: [{ type: "通常渾身100%", value: 9.56 }, { type: "通常渾身75%", value: 5.34 }, { type: "通常渾身50%", value: 3.1 }, { type: "通常渾身25%", value: 2.23 }] },																									
earth_konshin_m_15: { label: "大地の渾身15", element: "earth", level: 15, effects: [{ type: "通常渾身100%", value: 9.56 }, { type: "通常渾身75%", value: 5.34 }, { type: "通常渾身50%", value: 3.1 }, { type: "通常渾身25%", value: 2.23 }] },																									
wind_konshin_m_15: { label: "竜巻の渾身15", element: "wind", level: 15, effects: [{ type: "通常渾身100%", value: 9.56 }, { type: "通常渾身75%", value: 5.34 }, { type: "通常渾身50%", value: 3.1 }, { type: "通常渾身25%", value: 2.23 }] },																									
light_konshin_m_15: { label: "雷電の渾身15", element: "light", level: 15, effects: [{ type: "通常渾身100%", value: 9.56 }, { type: "通常渾身75%", value: 5.34 }, { type: "通常渾身50%", value: 3.1 }, { type: "通常渾身25%", value: 2.23 }] },																									
dark_konshin_m_15: { label: "憎悪の渾身15", element: "dark", level: 15, effects: [{ type: "通常渾身100%", value: 9.56 }, { type: "通常渾身75%", value: 5.34 }, { type: "通常渾身50%", value: 3.1 }, { type: "通常渾身25%", value: 2.23 }] },																									
																									
fire_konshin_m_20: { label: "業火の渾身20", element: "fire", level: 20, effects: [{ type: "通常渾身100%", value: 10.5 }, { type: "通常渾身75%", value: 5.75 }, { type: "通常渾身50%", value: 3.23 }, { type: "通常渾身25%", value: 2.25 }] },																									
water_konshin_m_20: { label: "渦潮の渾身20", element: "water", level: 20, effects: [{ type: "通常渾身100%", value: 10.5 }, { type: "通常渾身75%", value: 5.75 }, { type: "通常渾身50%", value: 3.23 }, { type: "通常渾身25%", value: 2.25 }] },																									
earth_konshin_m_20: { label: "大地の渾身20", element: "earth", level: 20, effects: [{ type: "通常渾身100%", value: 10.5 }, { type: "通常渾身75%", value: 5.75 }, { type: "通常渾身50%", value: 3.23 }, { type: "通常渾身25%", value: 2.25 }] },																									
wind_konshin_m_20: { label: "竜巻の渾身20", element: "wind", level: 20, effects: [{ type: "通常渾身100%", value: 10.5 }, { type: "通常渾身75%", value: 5.75 }, { type: "通常渾身50%", value: 3.23 }, { type: "通常渾身25%", value: 2.25 }] },																									
light_konshin_m_20: { label: "雷電の渾身20", element: "light", level: 20, effects: [{ type: "通常渾身100%", value: 10.5 }, { type: "通常渾身75%", value: 5.75 }, { type: "通常渾身50%", value: 3.23 }, { type: "通常渾身25%", value: 2.25 }] },																									
dark_konshin_m_20: { label: "憎悪の渾身20", element: "dark", level: 20, effects: [{ type: "通常渾身100%", value: 10.5 }, { type: "通常渾身75%", value: 5.75 }, { type: "通常渾身50%", value: 3.23 }, { type: "通常渾身25%", value: 2.25 }] },																									
																									
fire_konshin_l_10: { label: "紅蓮の渾身10", element: "fire", level: 10, effects: [{ type: "通常渾身100%", value: 11.37 }, { type: "通常渾身75%", value: 6.12 }, { type: "通常渾身50%", value: 3.34 }, { type: "通常渾身25%", value: 2.26 }] },																									
water_konshin_l_10: { label: "霧氷の渾身10", element: "water", level: 10, effects: [{ type: "通常渾身100%", value: 11.37 }, { type: "通常渾身75%", value: 6.12 }, { type: "通常渾身50%", value: 3.34 }, { type: "通常渾身25%", value: 2.26 }] },																									
earth_konshin_l_10: { label: "地裂の渾身10", element: "earth", level: 10, effects: [{ type: "通常渾身100%", value: 11.37 }, { type: "通常渾身75%", value: 6.12 }, { type: "通常渾身50%", value: 3.34 }, { type: "通常渾身25%", value: 2.26 }] },																									
wind_konshin_l_10: { label: "乱気の渾身10", element: "wind", level: 10, effects: [{ type: "通常渾身100%", value: 11.37 }, { type: "通常渾身75%", value: 6.12 }, { type: "通常渾身50%", value: 3.34 }, { type: "通常渾身25%", value: 2.26 }] },																									
light_konshin_l_10: { label: "天光の渾身10", element: "light", level: 10, effects: [{ type: "通常渾身100%", value: 11.37 }, { type: "通常渾身75%", value: 6.12 }, { type: "通常渾身50%", value: 3.34 }, { type: "通常渾身25%", value: 2.26 }] },																									
dark_konshin_l_10: { label: "奈落の渾身10", element: "dark", level: 10, effects: [{ type: "通常渾身100%", value: 11.37 }, { type: "通常渾身75%", value: 6.12 }, { type: "通常渾身50%", value: 3.34 }, { type: "通常渾身25%", value: 2.26 }] },																									
																									
fire_konshin_l_15: { label: "紅蓮の渾身15", element: "fire", level: 15, effects: [{ type: "通常渾身100%", value: 15 }, { type: "通常渾身75%", value: 7.7 }, { type: "通常渾身50%", value: 3.82 }, { type: "通常渾身25%", value: 2.33 }] },																									
water_konshin_l_15: { label: "霧氷の渾身15", element: "water", level: 15, effects: [{ type: "通常渾身100%", value: 15 }, { type: "通常渾身75%", value: 7.7 }, { type: "通常渾身50%", value: 3.82 }, { type: "通常渾身25%", value: 2.33 }] },																									
earth_konshin_l_15: { label: "地裂の渾身15", element: "earth", level: 15, effects: [{ type: "通常渾身100%", value: 15 }, { type: "通常渾身75%", value: 7.7 }, { type: "通常渾身50%", value: 3.82 }, { type: "通常渾身25%", value: 2.33 }] },																									
wind_konshin_l_15: { label: "乱気の渾身15", element: "wind", level: 15, effects: [{ type: "通常渾身100%", value: 15 }, { type: "通常渾身75%", value: 7.7 }, { type: "通常渾身50%", value: 3.82 }, { type: "通常渾身25%", value: 2.33 }] },																									
light_konshin_l_15: { label: "天光の渾身15", element: "light", level: 15, effects: [{ type: "通常渾身100%", value: 15 }, { type: "通常渾身75%", value: 7.7 }, { type: "通常渾身50%", value: 3.82 }, { type: "通常渾身25%", value: 2.33 }] },																									
dark_konshin_l_15: { label: "奈落の渾身15", element: "dark", level: 15, effects: [{ type: "通常渾身100%", value: 15 }, { type: "通常渾身75%", value: 7.7 }, { type: "通常渾身50%", value: 3.82 }, { type: "通常渾身25%", value: 2.33 }] },																									
																									
fire_konshin_l_20: { label: "紅蓮の渾身20", element: "fire", level: 20, effects: [{ type: "通常渾身100%", value: 16.99 }, { type: "通常渾身75%", value: 8.56 }, { type: "通常渾身50%", value: 4.09 }, { type: "通常渾身25%", value: 2.36 }] },																									
water_konshin_l_20: { label: "霧氷の渾身20", element: "water", level: 20, effects: [{ type: "通常渾身100%", value: 16.99 }, { type: "通常渾身75%", value: 8.56 }, { type: "通常渾身50%", value: 4.09 }, { type: "通常渾身25%", value: 2.36 }] },																									
earth_konshin_l_20: { label: "地裂の渾身20", element: "earth", level: 20, effects: [{ type: "通常渾身100%", value: 16.99 }, { type: "通常渾身75%", value: 8.56 }, { type: "通常渾身50%", value: 4.09 }, { type: "通常渾身25%", value: 2.36 }] },																									
wind_konshin_l_20: { label: "乱気の渾身20", element: "wind", level: 20, effects: [{ type: "通常渾身100%", value: 16.99 }, { type: "通常渾身75%", value: 8.56 }, { type: "通常渾身50%", value: 4.09 }, { type: "通常渾身25%", value: 2.36 }] },																									
light_konshin_l_20: { label: "天光の渾身20", element: "light", level: 20, effects: [{ type: "通常渾身100%", value: 16.99 }, { type: "通常渾身75%", value: 8.56 }, { type: "通常渾身50%", value: 4.09 }, { type: "通常渾身25%", value: 2.36 }] },																									
dark_konshin_l_20: { label: "奈落の渾身20", element: "dark", level: 20, effects: [{ type: "通常渾身100%", value: 16.99 }, { type: "通常渾身75%", value: 8.56 }, { type: "通常渾身50%", value: 4.09 }, { type: "通常渾身25%", value: 2.36 }] },																									
																									
fire_konshin2_xl_15: { label: "紅蓮の渾身Ⅱ15", element: "fire", level: 15, effects: [{ type: "通常渾身100%", value: 17.79 }, { type: "通常渾身75%", value: 8.91 }, { type: "通常渾身50%", value: 4.2 }, { type: "通常渾身25%", value: 2.38 }] },																									
water_konshin2_xl_15: { label: "霧氷の渾身Ⅱ15", element: "water", level: 15, effects: [{ type: "通常渾身100%", value: 17.79 }, { type: "通常渾身75%", value: 8.91 }, { type: "通常渾身50%", value: 4.2 }, { type: "通常渾身25%", value: 2.38 }] },																									
earth_konshin2_xl_15: { label: "地裂の渾身Ⅱ15", element: "earth", level: 15, effects: [{ type: "通常渾身100%", value: 17.79 }, { type: "通常渾身75%", value: 8.91 }, { type: "通常渾身50%", value: 4.2 }, { type: "通常渾身25%", value: 2.38 }] },																									
wind_konshin2_xl_15: { label: "乱気の渾身Ⅱ15", element: "wind", level: 15, effects: [{ type: "通常渾身100%", value: 17.79 }, { type: "通常渾身75%", value: 8.91 }, { type: "通常渾身50%", value: 4.2 }, { type: "通常渾身25%", value: 2.38 }] },																									
light_konshin2_xl_15: { label: "天光の渾身Ⅱ15", element: "light", level: 15, effects: [{ type: "通常渾身100%", value: 17.79 }, { type: "通常渾身75%", value: 8.91 }, { type: "通常渾身50%", value: 4.2 }, { type: "通常渾身25%", value: 2.38 }] },																									
dark_konshin2_xl_15: { label: "奈落の渾身Ⅱ15", element: "dark", level: 15, effects: [{ type: "通常渾身100%", value: 17.79 }, { type: "通常渾身75%", value: 8.91 }, { type: "通常渾身50%", value: 4.2 }, { type: "通常渾身25%", value: 2.38 }] },																									
																									
dark_konshin_special_15: { label: "呪触の渾身15", element: "dark", level: 15, effects: [{ type: "通常渾身100%", value: 22.41 }, { type: "通常渾身75%", value: 10.92 }, { type: "通常渾身50%", value: 4.82 }, { type: "通常渾身25%", value: 2.46 }] }																									
}																									
},																									
																									
normal_haisui_detail: {																									
name: "通常背水",																									
skills: {																									
fire_haisui_s_10: { label: "火の背水10", element: "fire", level: 10, effects: [{ type: "通常背水1%", value: 17.99 }, { type: "通常背水25%", value: 11.2 }, { type: "通常背水50%", value: 6 }, { type: "通常背水100%", value: 0 }] },																									
water_haisui_s_10: { label: "水の背水10", element: "water", level: 10, effects: [{ type: "通常背水1%", value: 17.99 }, { type: "通常背水25%", value: 11.2 }, { type: "通常背水50%", value: 6 }, { type: "通常背水100%", value: 0 }] },																									
earth_haisui_s_10: { label: "土の背水10", element: "earth", level: 10, effects: [{ type: "通常背水1%", value: 17.99 }, { type: "通常背水25%", value: 11.2 }, { type: "通常背水50%", value: 6 }, { type: "通常背水100%", value: 0 }] },																									
wind_haisui_s_10: { label: "風の背水10", element: "wind", level: 10, effects: [{ type: "通常背水1%", value: 17.99 }, { type: "通常背水25%", value: 11.2 }, { type: "通常背水50%", value: 6 }, { type: "通常背水100%", value: 0 }] },																									
light_haisui_s_10: { label: "光の背水10", element: "light", level: 10, effects: [{ type: "通常背水1%", value: 17.99 }, { type: "通常背水25%", value: 11.2 }, { type: "通常背水50%", value: 6 }, { type: "通常背水100%", value: 0 }] },																									
dark_haisui_s_10: { label: "闇の背水10", element: "dark", level: 10, effects: [{ type: "通常背水1%", value: 17.99 }, { type: "通常背水25%", value: 11.2 }, { type: "通常背水50%", value: 6 }, { type: "通常背水100%", value: 0 }] },																									
																									
fire_haisui_s_15: { label: "火の背水15", element: "fire", level: 15, effects: [{ type: "通常背水1%", value: 20.99 }, { type: "通常背水25%", value: 13.1 }, { type: "通常背水50%", value: 7 }, { type: "通常背水100%", value: 0 }] },																									
water_haisui_s_15: { label: "水の背水15", element: "water", level: 15, effects: [{ type: "通常背水1%", value: 20.99 }, { type: "通常背水25%", value: 13.1 }, { type: "通常背水50%", value: 7 }, { type: "通常背水100%", value: 0 }] },																									
earth_haisui_s_15: { label: "土の背水15", element: "earth", level: 15, effects: [{ type: "通常背水1%", value: 20.99 }, { type: "通常背水25%", value: 13.1 }, { type: "通常背水50%", value: 7 }, { type: "通常背水100%", value: 0 }] },																									
wind_haisui_s_15: { label: "風の背水15", element: "wind", level: 15, effects: [{ type: "通常背水1%", value: 20.99 }, { type: "通常背水25%", value: 13.1 }, { type: "通常背水50%", value: 7 }, { type: "通常背水100%", value: 0 }] },																									
light_haisui_s_15: { label: "光の背水15", element: "light", level: 15, effects: [{ type: "通常背水1%", value: 20.99 }, { type: "通常背水25%", value: 13.1 }, { type: "通常背水50%", value: 7 }, { type: "通常背水100%", value: 0 }] },																									
dark_haisui_s_15: { label: "闇の背水15", element: "dark", level: 15, effects: [{ type: "通常背水1%", value: 20.99 }, { type: "通常背水25%", value: 13.1 }, { type: "通常背水50%", value: 7 }, { type: "通常背水100%", value: 0 }] },																									
																									
fire_haisui_m_10: { label: "業火の背水10", element: "fire", level: 10, effects: [{ type: "通常背水1%", value: 23.99 }, { type: "通常背水25%", value: 15 }, { type: "通常背水50%", value: 8 }, { type: "通常背水100%", value: 0 }] },																									
water_haisui_m_10: { label: "渦潮の背水10", element: "water", level: 10, effects: [{ type: "通常背水1%", value: 23.99 }, { type: "通常背水25%", value: 15 }, { type: "通常背水50%", value: 8 }, { type: "通常背水100%", value: 0 }] },																									
earth_haisui_m_10: { label: "大地の背水10", element: "earth", level: 10, effects: [{ type: "通常背水1%", value: 23.99 }, { type: "通常背水25%", value: 15 }, { type: "通常背水50%", value: 8 }, { type: "通常背水100%", value: 0 }] },																									
wind_haisui_m_10: { label: "竜巻の背水10", element: "wind", level: 10, effects: [{ type: "通常背水1%", value: 23.99 }, { type: "通常背水25%", value: 15 }, { type: "通常背水50%", value: 8 }, { type: "通常背水100%", value: 0 }] },																									
light_haisui_m_10: { label: "雷電の背水10", element: "light", level: 10, effects: [{ type: "通常背水1%", value: 23.99 }, { type: "通常背水25%", value: 15 }, { type: "通常背水50%", value: 8 }, { type: "通常背水100%", value: 0 }] },																									
dark_haisui_m_10: { label: "憎悪の背水10", element: "dark", level: 10, effects: [{ type: "通常背水1%", value: 23.99 }, { type: "通常背水25%", value: 15 }, { type: "通常背水50%", value: 8 }, { type: "通常背水100%", value: 0 }] },																									
																									
fire_haisui_m_15: { label: "業火の背水15", element: "fire", level: 15, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
water_haisui_m_15: { label: "渦潮の背水15", element: "water", level: 15, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
earth_haisui_m_15: { label: "大地の背水15", element: "earth", level: 15, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
wind_haisui_m_15: { label: "竜巻の背水15", element: "wind", level: 15, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
light_haisui_m_15: { label: "雷電の背水15", element: "light", level: 15, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
dark_haisui_m_15: { label: "憎悪の背水15", element: "dark", level: 15, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
																									
fire_haisui_l_10: { label: "紅蓮の背水10", element: "fire", level: 10, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
water_haisui_l_10: { label: "霧氷の背水10", element: "water", level: 10, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
earth_haisui_l_10: { label: "地裂の背水10", element: "earth", level: 10, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
wind_haisui_l_10: { label: "乱気の背水10", element: "wind", level: 10, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
light_haisui_l_10: { label: "天光の背水10", element: "light", level: 10, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
dark_haisui_l_10: { label: "奈落の背水10", element: "dark", level: 10, effects: [{ type: "通常背水1%", value: 29.99 }, { type: "通常背水25%", value: 18.7 }, { type: "通常背水50%", value: 10 }, { type: "通常背水100%", value: 0 }] },																									
																									
fire_haisui_l_15: { label: "紅蓮の背水15", element: "fire", level: 15, effects: [{ type: "通常背水1%", value: 36.49 }, { type: "通常背水25%", value: 23.4 }, { type: "通常背水50%", value: 12.5 }, { type: "通常背水100%", value: 0 }] },																									
water_haisui_l_15: { label: "霧氷の背水15", element: "water", level: 15, effects: [{ type: "通常背水1%", value: 36.49 }, { type: "通常背水25%", value: 23.4 }, { type: "通常背水50%", value: 12.5 }, { type: "通常背水100%", value: 0 }] },																									
earth_haisui_l_15: { label: "地裂の背水15", element: "earth", level: 15, effects: [{ type: "通常背水1%", value: 36.49 }, { type: "通常背水25%", value: 23.4 }, { type: "通常背水50%", value: 12.5 }, { type: "通常背水100%", value: 0 }] },																									
wind_haisui_l_15: { label: "乱気の背水15", element: "wind", level: 15, effects: [{ type: "通常背水1%", value: 36.49 }, { type: "通常背水25%", value: 23.4 }, { type: "通常背水50%", value: 12.5 }, { type: "通常背水100%", value: 0 }] },																									
light_haisui_l_15: { label: "天光の背水15", element: "light", level: 15, effects: [{ type: "通常背水1%", value: 36.49 }, { type: "通常背水25%", value: 23.4 }, { type: "通常背水50%", value: 12.5 }, { type: "通常背水100%", value: 0 }] },																									
dark_haisui_l_15: { label: "奈落の背水15", element: "dark", level: 15, effects: [{ type: "通常背水1%", value: 36.49 }, { type: "通常背水25%", value: 23.4 }, { type: "通常背水50%", value: 12.5 }, { type: "通常背水100%", value: 0 }] },																									
																									
fire_haisui_l_20: { label: "紅蓮の背水20", element: "fire", level: 20, effects: [{ type: "通常背水1%", value: 40.49 }, { type: "通常背水25%", value: 25.3 }, { type: "通常背水50%", value: 13.5 }, { type: "通常背水100%", value: 0 }] },																									
water_haisui_l_20: { label: "霧氷の背水20", element: "water", level: 20, effects: [{ type: "通常背水1%", value: 40.49 }, { type: "通常背水25%", value: 25.3 }, { type: "通常背水50%", value: 13.5 }, { type: "通常背水100%", value: 0 }] },																									
earth_haisui_l_20: { label: "地裂の背水20", element: "earth", level: 20, effects: [{ type: "通常背水1%", value: 40.49 }, { type: "通常背水25%", value: 25.3 }, { type: "通常背水50%", value: 13.5 }, { type: "通常背水100%", value: 0 }] },																									
wind_haisui_l_20: { label: "乱気の背水20", element: "wind", level: 20, effects: [{ type: "通常背水1%", value: 40.49 }, { type: "通常背水25%", value: 25.3 }, { type: "通常背水50%", value: 13.5 }, { type: "通常背水100%", value: 0 }] },																									
light_haisui_l_20: { label: "天光の背水20", element: "light", level: 20, effects: [{ type: "通常背水1%", value: 40.49 }, { type: "通常背水25%", value: 25.3 }, { type: "通常背水50%", value: 13.5 }, { type: "通常背水100%", value: 0 }] },																									
dark_haisui_l_20: { label: "奈落の背水20", element: "dark", level: 20, effects: [{ type: "通常背水1%", value: 40.49 }, { type: "通常背水25%", value: 25.3 }, { type: "通常背水50%", value: 13.5 }, { type: "通常背水100%", value: 0 }] },																									
																									
fire_haisui_special_15: { label: "炎威の背水15", element: "fire", level: 15, effects: [{ type: "通常背水1%", value: 56.24 }, { type: "通常背水25%", value: 35.1 }, { type: "通常背水50%", value: 18.75 }, { type: "通常背水100%", value: 0 }] }																									
}																									
},																									
																									
normal_shinkyou: {																									
name: "通常進境",																									
skills: {																									
fire_shinkyou_m_10: { label: "業火の進境10", element: "fire", level: 10, effects: [{ type: "通常進境", value: 0.7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shinkyou_m_10: { label: "渦潮の進境10", element: "water", level: 10, effects: [{ type: "通常進境", value: 0.7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shinkyou_m_10: { label: "大地の進境10", element: "earth", level: 10, effects: [{ type: "通常進境", value: 0.7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shinkyou_m_10: { label: "竜巻の進境10", element: "wind", level: 10, effects: [{ type: "通常進境", value: 0.7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shinkyou_m_10: { label: "雷電の進境10", element: "light", level: 10, effects: [{ type: "通常進境", value: 0.7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shinkyou_m_10: { label: "憎悪の進境10", element: "dark", level: 10, effects: [{ type: "通常進境", value: 0.7 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shinkyou_m_15: { label: "業火の進境15", element: "fire", level: 15, effects: [{ type: "通常進境", value: 0.8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shinkyou_m_15: { label: "渦潮の進境15", element: "water", level: 15, effects: [{ type: "通常進境", value: 0.8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shinkyou_m_15: { label: "大地の進境15", element: "earth", level: 15, effects: [{ type: "通常進境", value: 0.8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shinkyou_m_15: { label: "竜巻の進境15", element: "wind", level: 15, effects: [{ type: "通常進境", value: 0.8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shinkyou_m_15: { label: "雷電の進境15", element: "light", level: 15, effects: [{ type: "通常進境", value: 0.8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shinkyou_m_15: { label: "憎悪の進境15", element: "dark", level: 15, effects: [{ type: "通常進境", value: 0.8 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shinkyou_l_10: { label: "紅蓮の進境10", element: "fire", level: 10, effects: [{ type: "通常進境", value: 1 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shinkyou_l_10: { label: "霧氷の進境10", element: "water", level: 10, effects: [{ type: "通常進境", value: 1 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shinkyou_l_10: { label: "地裂の進境10", element: "earth", level: 10, effects: [{ type: "通常進境", value: 1 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shinkyou_l_10: { label: "乱気の進境10", element: "wind", level: 10, effects: [{ type: "通常進境", value: 1 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shinkyou_l_10: { label: "天光の進境10", element: "light", level: 10, effects: [{ type: "通常進境", value: 1 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shinkyou_l_10: { label: "奈落の進境10", element: "dark", level: 10, effects: [{ type: "通常進境", value: 1 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shinkyou_l_15: { label: "紅蓮の進境15", element: "fire", level: 15, effects: [{ type: "通常進境", value: 1.2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shinkyou_l_15: { label: "霧氷の進境15", element: "water", level: 15, effects: [{ type: "通常進境", value: 1.2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shinkyou_l_15: { label: "地裂の進境15", element: "earth", level: 15, effects: [{ type: "通常進境", value: 1.2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shinkyou_l_15: { label: "乱気の進境15", element: "wind", level: 15, effects: [{ type: "通常進境", value: 1.2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shinkyou_l_15: { label: "天光の進境15", element: "light", level: 15, effects: [{ type: "通常進境", value: 1.2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shinkyou_l_15: { label: "奈落の進境15", element: "dark", level: 15, effects: [{ type: "通常進境", value: 1.2 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_shinkyou_l_20: { label: "紅蓮の進境20", element: "fire", level: 20, effects: [{ type: "通常進境", value: 1.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_shinkyou_l_20: { label: "霧氷の進境20", element: "water", level: 20, effects: [{ type: "通常進境", value: 1.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_shinkyou_l_20: { label: "地裂の進境20", element: "earth", level: 20, effects: [{ type: "通常進境", value: 1.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_shinkyou_l_20: { label: "乱気の進境20", element: "wind", level: 20, effects: [{ type: "通常進境", value: 1.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_shinkyou_l_20: { label: "天光の進境20", element: "light", level: 20, effects: [{ type: "通常進境", value: 1.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_shinkyou_l_20: { label: "奈落の進境20", element: "dark", level: 20, effects: [{ type: "通常進境", value: 1.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_kenju_detail: {																									
name: "通常堅守",																									
skills: {																									
fire_kenju_s_10: { label: "火の堅守10", element: "fire", level: 10, effects: [{ type: "通常堅守1%", value: 17.99 }, { type: "通常堅守25%", value: 15.46 }, { type: "通常堅守50%", value: 11.25 }, { type: "通常堅守100%", value: 0 }] },																									
water_kenju_s_10: { label: "水の堅守10", element: "water", level: 10, effects: [{ type: "通常堅守1%", value: 17.99 }, { type: "通常堅守25%", value: 15.46 }, { type: "通常堅守50%", value: 11.25 }, { type: "通常堅守100%", value: 0 }] },																									
earth_kenju_s_10: { label: "土の堅守10", element: "earth", level: 10, effects: [{ type: "通常堅守1%", value: 17.99 }, { type: "通常堅守25%", value: 15.46 }, { type: "通常堅守50%", value: 11.25 }, { type: "通常堅守100%", value: 0 }] },																									
wind_kenju_s_10: { label: "風の堅守10", element: "wind", level: 10, effects: [{ type: "通常堅守1%", value: 17.99 }, { type: "通常堅守25%", value: 15.46 }, { type: "通常堅守50%", value: 11.25 }, { type: "通常堅守100%", value: 0 }] },																									
light_kenju_s_10: { label: "光の堅守10", element: "light", level: 10, effects: [{ type: "通常堅守1%", value: 17.99 }, { type: "通常堅守25%", value: 15.46 }, { type: "通常堅守50%", value: 11.25 }, { type: "通常堅守100%", value: 0 }] },																									
dark_kenju_s_10: { label: "闇の堅守10", element: "dark", level: 10, effects: [{ type: "通常堅守1%", value: 17.99 }, { type: "通常堅守25%", value: 15.46 }, { type: "通常堅守50%", value: 11.25 }, { type: "通常堅守100%", value: 0 }] },																									
																									
fire_kenju_s_15: { label: "火の堅守15", element: "fire", level: 15, effects: [{ type: "通常堅守1%", value: 20.99 }, { type: "通常堅守25%", value: 18.05 }, { type: "通常堅守50%", value: 13.13 }, { type: "通常堅守100%", value: 0 }] },																									
water_kenju_s_15: { label: "水の堅守15", element: "water", level: 15, effects: [{ type: "通常堅守1%", value: 20.99 }, { type: "通常堅守25%", value: 18.05 }, { type: "通常堅守100%", value: 13.13 }, { type: "通常堅守100%", value: 0 }] },																									
earth_kenju_s_15: { label: "土の堅守15", element: "earth", level: 15, effects: [{ type: "通常堅守1%", value: 20.99 }, { type: "通常堅守25%", value: 18.05 }, { type: "通常堅守50%", value: 13.13 }, { type: "通常堅守100%", value: 0 }] },																									
wind_kenju_s_15: { label: "風の堅守15", element: "wind", level: 15, effects: [{ type: "通常堅守1%", value: 20.99 }, { type: "通常堅守25%", value: 18.05 }, { type: "通常堅守50%", value: 13.13 }, { type: "通常堅守100%", value: 0 }] },																									
light_kenju_s_15: { label: "光の堅守15", element: "light", level: 15, effects: [{ type: "通常堅守1%", value: 20.99 }, { type: "通常堅守25%", value: 18.05 }, { type: "通常堅守50%", value: 13.13 }, { type: "通常堅守100%", value: 0 }] },																									
dark_kenju_s_15: { label: "闇の堅守15", element: "dark", level: 15, effects: [{ type: "通常堅守1%", value: 20.99 }, { type: "通常堅守25%", value: 18.05 }, { type: "通常堅守50%", value: 13.13 }, { type: "通常堅守100%", value: 0 }] },																									
																									
fire_kenju_m_10: { label: "業火の堅守10", element: "fire", level: 10, effects: [{ type: "通常堅守1%", value: 23.99 }, { type: "通常堅守25%", value: 20.63 }, { type: "通常堅守50%", value: 15 }, { type: "通常堅守100%", value: 0 }] },																									
water_kenju_m_10: { label: "渦潮の堅守10", element: "water", level: 10, effects: [{ type: "通常堅守1%", value: 23.99 }, { type: "通常堅守25%", value: 20.63 }, { type: "通常堅守50%", value: 15 }, { type: "通常堅守100%", value: 0 }] },																									
earth_kenju_m_10: { label: "大地の堅守10", element: "earth", level: 10, effects: [{ type: "通常堅守1%", value: 23.99 }, { type: "通常堅守25%", value: 20.63 }, { type: "通常堅守50%", value: 15 }, { type: "通常堅守100%", value: 0 }] },																									
wind_kenju_m_10: { label: "竜巻の堅守10", element: "wind", level: 10, effects: [{ type: "通常堅守1%", value: 23.99 }, { type: "通常堅守25%", value: 20.63 }, { type: "通常堅守50%", value: 15 }, { type: "通常堅守100%", value: 0 }] },																									
light_kenju_m_10: { label: "雷電の堅守10", element: "light", level: 10, effects: [{ type: "通常堅守1%", value: 23.99 }, { type: "通常堅守25%", value: 20.63 }, { type: "通常堅守50%", value: 15 }, { type: "通常堅守100%", value: 0 }] },																									
dark_kenju_m_10: { label: "憎悪の堅守10", element: "dark", level: 10, effects: [{ type: "通常堅守1%", value: 23.99 }, { type: "通常堅守25%", value: 20.63 }, { type: "通常堅守50%", value: 15 }, { type: "通常堅守100%", value: 0 }] },																									
																									
fire_kenju_m_15: { label: "業火の堅守15", element: "fire", level: 15, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
water_kenju_m_15: { label: "渦潮の堅守15", element: "water", level: 15, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
earth_kenju_m_15: { label: "大地の堅守15", element: "earth", level: 15, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
wind_kenju_m_15: { label: "竜巻の堅守15", element: "wind", level: 15, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
light_kenju_m_15: { label: "雷電の堅守15", element: "light", level: 15, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
dark_kenju_m_15: { label: "憎悪の堅守15", element: "dark", level: 15, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
																									
fire_kenju_m_20: { label: "業火の堅守20", element: "fire", level: 20, effects: [{ type: "通常堅守1%", value: 32.99 }, { type: "通常堅守25%", value: 28.35 }, { type: "通常堅守50%", value: 20.62 }, { type: "通常堅守100%", value: 0 }] },																									
water_kenju_m_20: { label: "渦潮の堅守20", element: "water", level: 20, effects: [{ type: "通常堅守1%", value: 32.99 }, { type: "通常堅守25%", value: 28.35 }, { type: "通常堅守50%", value: 20.62 }, { type: "通常堅守100%", value: 0 }] },																									
earth_kenju_m_20: { label: "大地の堅守20", element: "earth", level: 20, effects: [{ type: "通常堅守1%", value: 32.99 }, { type: "通常堅守25%", value: 28.35 }, { type: "通常堅守50%", value: 20.62 }, { type: "通常堅守100%", value: 0 }] },																									
wind_kenju_m_20: { label: "竜巻の堅守20", element: "wind", level: 20, effects: [{ type: "通常堅守1%", value: 32.99 }, { type: "通常堅守25%", value: 28.35 }, { type: "通常堅守50%", value: 20.62 }, { type: "通常堅守100%", value: 0 }] },																									
light_kenju_m_20: { label: "雷電の堅守20", element: "light", level: 20, effects: [{ type: "通常堅守1%", value: 32.99 }, { type: "通常堅守25%", value: 28.35 }, { type: "通常堅守50%", value: 20.62 }, { type: "通常堅守100%", value: 0 }] },																									
dark_kenju_m_20: { label: "憎悪の堅守20", element: "dark", level: 20, effects: [{ type: "通常堅守1%", value: 32.99 }, { type: "通常堅守25%", value: 28.35 }, { type: "通常堅守50%", value: 20.62 }, { type: "通常堅守100%", value: 0 }] },																									
																									
fire_kenju_l_10: { label: "紅蓮の堅守10", element: "fire", level: 10, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
water_kenju_l_10: { label: "霧氷の堅守10", element: "water", level: 10, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
earth_kenju_l_10: { label: "地裂の堅守10", element: "earth", level: 10, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
wind_kenju_l_10: { label: "乱気の堅守10", element: "wind", level: 10, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
light_kenju_l_10: { label: "天光の堅守10", element: "light", level: 10, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
dark_kenju_l_10: { label: "奈落の堅守10", element: "dark", level: 10, effects: [{ type: "通常堅守1%", value: 29.99 }, { type: "通常堅守25%", value: 25.78 }, { type: "通常堅守50%", value: 18.75 }, { type: "通常堅守100%", value: 0 }] },																									
																									
fire_kenju_l_15: { label: "紅蓮の堅守15", element: "fire", level: 15, effects: [{ type: "通常堅守1%", value: 36.49 }, { type: "通常堅守25%", value: 32.23 }, { type: "通常堅守50%", value: 23.44 }, { type: "通常堅守100%", value: 0 }] },																									
water_kenju_l_15: { label: "霧氷の堅守15", element: "water", level: 15, effects: [{ type: "通常堅守1%", value: 36.49 }, { type: "通常堅守25%", value: 32.23 }, { type: "通常堅守50%", value: 23.44 }, { type: "通常堅守100%", value: 0 }] },																									
earth_kenju_l_15: { label: "地裂の堅守15", element: "earth", level: 15, effects: [{ type: "通常堅守1%", value: 36.49 }, { type: "通常堅守25%", value: 32.23 }, { type: "通常堅守50%", value: 23.44 }, { type: "通常堅守100%", value: 0 }] },																									
wind_kenju_l_15: { label: "乱気の堅守15", element: "wind", level: 15, effects: [{ type: "通常堅守1%", value: 36.49 }, { type: "通常堅守25%", value: 32.23 }, { type: "通常堅守50%", value: 23.44 }, { type: "通常堅守100%", value: 0 }] },																									
light_kenju_l_15: { label: "天光の堅守15", element: "light", level: 15, effects: [{ type: "通常堅守1%", value: 36.49 }, { type: "通常堅守25%", value: 32.23 }, { type: "通常堅守50%", value: 23.44 }, { type: "通常堅守100%", value: 0 }] },																									
dark_kenju_l_15: { label: "奈落の堅守15", element: "dark", level: 15, effects: [{ type: "通常堅守1%", value: 36.49 }, { type: "通常堅守25%", value: 32.23 }, { type: "通常堅守50%", value: 23.44 }, { type: "通常堅守100%", value: 0 }] },																									
																									
fire_kenju_l_20: { label: "紅蓮の堅守20", element: "fire", level: 20, effects: [{ type: "通常堅守1%", value: 40.49 }, { type: "通常堅守25%", value: 34.8 }, { type: "通常堅守50%", value: 25.31 }, { type: "通常堅守100%", value: 0 }] },																									
water_kenju_l_20: { label: "霧氷の堅守20", element: "water", level: 20, effects: [{ type: "通常堅守1%", value: 40.49 }, { type: "通常堅守25%", value: 34.8 }, { type: "通常堅守50%", value: 25.31 }, { type: "通常堅守100%", value: 0 }] },																									
earth_kenju_l_20: { label: "地裂の堅守20", element: "earth", level: 20, effects: [{ type: "通常堅守1%", value: 40.49 }, { type: "通常堅守25%", value: 34.8 }, { type: "通常堅守50%", value: 25.31 }, { type: "通常堅守100%", value: 0 }] },																									
wind_kenju_l_20: { label: "乱気の堅守20", element: "wind", level: 20, effects: [{ type: "通常堅守1%", value: 40.49 }, { type: "通常堅守25%", value: 34.8 }, { type: "通常堅守50%", value: 25.31 }, { type: "通常堅守100%", value: 0 }] },																									
light_kenju_l_20: { label: "天光の堅守20", element: "light", level: 20, effects: [{ type: "通常堅守1%", value: 40.49 }, { type: "通常堅守25%", value: 34.8 }, { type: "通常堅守50%", value: 25.31 }, { type: "通常堅守100%", value: 0 }] },																									
dark_kenju_l_20: { label: "奈落の堅守20", element: "dark", level: 20, effects: [{ type: "通常堅守1%", value: 40.49 }, { type: "通常堅守25%", value: 34.8 }, { type: "通常堅守50%", value: 25.31 }, { type: "通常堅守100%", value: 0 }] }																									
}																									
},																									
																									
normal_chiyu: {																									
name: "通常治癒",																									
skills: {																									
fire_chiyu_s_10: { label: "火の治癒10", element: "fire", level: 10, effects: [{ type: "通常治癒", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_chiyu_s_10: { label: "水の治癒10", element: "water", level: 10, effects: [{ type: "通常治癒", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_chiyu_s_10: { label: "土の治癒10", element: "earth", level: 10, effects: [{ type: "通常治癒", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_chiyu_s_10: { label: "風の治癒10", element: "wind", level: 10, effects: [{ type: "通常治癒", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_chiyu_s_10: { label: "光の治癒10", element: "light", level: 10, effects: [{ type: "通常治癒", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_chiyu_s_10: { label: "闇の治癒10", element: "dark", level: 10, effects: [{ type: "通常治癒", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_chiyu_s_15: { label: "火の治癒15", element: "fire", level: 15, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_chiyu_s_15: { label: "水の治癒15", element: "water", level: 15, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_chiyu_s_15: { label: "土の治癒15", element: "earth", level: 15, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_chiyu_s_15: { label: "風の治癒15", element: "wind", level: 15, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_chiyu_s_15: { label: "光の治癒15", element: "light", level: 15, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_chiyu_s_15: { label: "闇の治癒15", element: "dark", level: 15, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_chiyu_m_10: { label: "業火の治癒10", element: "fire", level: 10, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_chiyu_m_10: { label: "渦潮の治癒10", element: "water", level: 10, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_chiyu_m_10: { label: "大地の治癒10", element: "earth", level: 10, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_chiyu_m_10: { label: "竜巻の治癒10", element: "wind", level: 10, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_chiyu_m_10: { label: "雷電の治癒10", element: "light", level: 10, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_chiyu_m_10: { label: "憎悪の治癒10", element: "dark", level: 10, effects: [{ type: "通常治癒", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_chiyu_m_15: { label: "業火の治癒15", element: "fire", level: 15, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_chiyu_m_15: { label: "渦潮の治癒15", element: "water", level: 15, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_chiyu_m_15: { label: "大地の治癒15", element: "earth", level: 15, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_chiyu_m_15: { label: "竜巻の治癒15", element: "wind", level: 15, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_chiyu_m_15: { label: "雷電の治癒15", element: "light", level: 15, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_chiyu_m_15: { label: "憎悪の治癒15", element: "dark", level: 15, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_chiyu_l_10: { label: "紅蓮の治癒10", element: "fire", level: 10, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_chiyu_l_10: { label: "霧氷の治癒10", element: "water", level: 10, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_chiyu_l_10: { label: "地裂の治癒10", element: "earth", level: 10, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_chiyu_l_10: { label: "乱気の治癒10", element: "wind", level: 10, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_chiyu_l_10: { label: "天光の治癒10", element: "light", level: 10, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_chiyu_l_10: { label: "奈落の治癒10", element: "dark", level: 10, effects: [{ type: "通常治癒", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_chiyu_l_15: { label: "紅蓮の治癒15", element: "fire", level: 15, effects: [{ type: "通常治癒", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_chiyu_l_15: { label: "霧氷の治癒15", element: "water", level: 15, effects: [{ type: "通常治癒", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_chiyu_l_15: { label: "地裂の治癒15", element: "earth", level: 15, effects: [{ type: "通常治癒", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_chiyu_l_15: { label: "乱気の治癒15", element: "wind", level: 15, effects: [{ type: "通常治癒", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_chiyu_l_15: { label: "天光の治癒15", element: "light", level: 15, effects: [{ type: "通常治癒", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_chiyu_l_15: { label: "奈落の治癒15", element: "dark", level: 15, effects: [{ type: "通常治癒", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_hio: {																									
name: "通常秘奥",																									
skills: {																									
fire_hio_s_10: { label: "火の秘奥10", element: "fire", level: 10, effects: [{ type: "奥義ダメUP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hio_s_10: { label: "水の秘奥10", element: "water", level: 10, effects: [{ type: "奥義ダメUP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hio_s_10: { label: "土の秘奥10", element: "earth", level: 10, effects: [{ type: "奥義ダメUP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hio_s_10: { label: "風の秘奥10", element: "wind", level: 10, effects: [{ type: "奥義ダメUP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hio_s_10: { label: "光の秘奥10", element: "light", level: 10, effects: [{ type: "奥義ダメUP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hio_s_10: { label: "闇の秘奥10", element: "dark", level: 10, effects: [{ type: "奥義ダメUP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hio_s_15: { label: "火の秘奥15", element: "fire", level: 15, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hio_s_15: { label: "水の秘奥15", element: "water", level: 15, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hio_s_15: { label: "土の秘奥15", element: "earth", level: 15, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hio_s_15: { label: "風の秘奥15", element: "wind", level: 15, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hio_s_15: { label: "光の秘奥15", element: "light", level: 15, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hio_s_15: { label: "闇の秘奥15", element: "dark", level: 15, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hio_m_10: { label: "業火の秘奥10", element: "fire", level: 10, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hio_m_10: { label: "渦潮の秘奥10", element: "water", level: 10, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hio_m_10: { label: "大地の秘奥10", element: "earth", level: 10, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hio_m_10: { label: "竜巻の秘奥10", element: "wind", level: 10, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hio_m_10: { label: "雷電の秘奥10", element: "light", level: 10, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hio_m_10: { label: "憎悪の秘奥10", element: "dark", level: 10, effects: [{ type: "奥義ダメUP", value: 7.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hio_m_15: { label: "業火の秘奥15", element: "fire", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hio_m_15: { label: "渦潮の秘奥15", element: "water", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hio_m_15: { label: "大地の秘奥15", element: "earth", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hio_m_15: { label: "竜巻の秘奥15", element: "wind", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hio_m_15: { label: "雷電の秘奥15", element: "light", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hio_m_15: { label: "憎悪の秘奥15", element: "dark", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hio_l_10: { label: "紅蓮の秘奥10", element: "fire", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hio_l_10: { label: "霧氷の秘奥10", element: "water", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hio_l_10: { label: "地裂の秘奥10", element: "earth", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hio_l_10: { label: "乱気の秘奥10", element: "wind", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hio_l_10: { label: "天光の秘奥10", element: "light", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hio_l_10: { label: "奈落の秘奥10", element: "dark", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hio_l_15: { label: "紅蓮の秘奥15", element: "fire", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hio_l_15: { label: "霧氷の秘奥15", element: "water", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hio_l_15: { label: "地裂の秘奥15", element: "earth", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hio_l_15: { label: "乱気の秘奥15", element: "wind", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hio_l_15: { label: "天光の秘奥15", element: "light", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hio_l_15: { label: "奈落の秘奥15", element: "dark", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
earth_hio_sp_15: { label: "巌迫の秘奥15", element: "earth", level: 15, effects: [{ type: "奥義ダメUP", value: 25 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_hissatsu: {																									
name: "通常必殺",																									
skills: {																									
fire_hissatsu_m_10: { label: "業火の必殺10", element: "fire", level: 10, effects: [{ type: "奥義ダメUP", value: 7 }, { type: "奥義上限UP", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hissatsu_m_10: { label: "渦潮の必殺10", element: "water", level: 10, effects: [{ type: "奥義ダメUP", value: 7 }, { type: "奥義上限UP", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hissatsu_m_10: { label: "大地の必殺10", element: "earth", level: 10, effects: [{ type: "奥義ダメUP", value: 7 }, { type: "奥義上限UP", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hissatsu_m_10: { label: "竜巻の必殺10", element: "wind", level: 10, effects: [{ type: "奥義ダメUP", value: 7 }, { type: "奥義上限UP", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hissatsu_m_10: { label: "雷電の必殺10", element: "light", level: 10, effects: [{ type: "奥義ダメUP", value: 7 }, { type: "奥義上限UP", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hissatsu_m_10: { label: "憎悪の必殺10", element: "dark", level: 10, effects: [{ type: "奥義ダメUP", value: 7 }, { type: "奥義上限UP", value: 3.5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hissatsu_m_15: { label: "業火の必殺15", element: "fire", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "奥義上限UP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hissatsu_m_15: { label: "渦潮の必殺15", element: "water", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "奥義上限UP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hissatsu_m_15: { label: "大地の必殺15", element: "earth", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "奥義上限UP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hissatsu_m_15: { label: "竜巻の必殺15", element: "wind", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "奥義上限UP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hissatsu_m_15: { label: "雷電の必殺15", element: "light", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "奥義上限UP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hissatsu_m_15: { label: "憎悪の必殺15", element: "dark", level: 15, effects: [{ type: "奥義ダメUP", value: 9.5 }, { type: "奥義上限UP", value: 5 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hissatsu_l_10: { label: "紅蓮の必殺10", element: "fire", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hissatsu_l_10: { label: "霧氷の必殺10", element: "water", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hissatsu_l_10: { label: "地裂の必殺10", element: "earth", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hissatsu_l_10: { label: "乱気の必殺10", element: "wind", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hissatsu_l_10: { label: "天光の必殺10", element: "light", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hissatsu_l_10: { label: "奈落の必殺10", element: "dark", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hissatsu_l_15: { label: "紅蓮の必殺15", element: "fire", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hissatsu_l_15: { label: "霧氷の必殺15", element: "water", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hissatsu_l_15: { label: "地裂の必殺15", element: "earth", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hissatsu_l_15: { label: "乱気の必殺15", element: "wind", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hissatsu_l_15: { label: "天光の必殺15", element: "light", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hissatsu_l_15: { label: "奈落の必殺15", element: "dark", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_hissatsu_l_20: { label: "紅蓮の必殺20", element: "fire", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_hissatsu_l_20: { label: "霧氷の必殺20", element: "water", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_hissatsu_l_20: { label: "地裂の必殺20", element: "earth", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_hissatsu_l_20: { label: "乱気の必殺20", element: "wind", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_hissatsu_l_20: { label: "天光の必殺20", element: "light", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_hissatsu_l_20: { label: "奈落の必殺20", element: "dark", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_eikeitsu_10: { label: "紅蓮の英傑10", element: "fire", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "CBダメUP", value: 12 }, { type: "CB上限UP", value: 4.8 }] },																									
water_eikeitsu_10: { label: "霧氷の英傑10", element: "water", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "CBダメUP", value: 12 }, { type: "CB上限UP", value: 4.8 }] },																									
earth_eikeitsu_10: { label: "地裂の英傑10", element: "earth", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "CBダメUP", value: 12 }, { type: "CB上限UP", value: 4.8 }] },																									
wind_eikeitsu_10: { label: "乱気の英傑10", element: "wind", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "CBダメUP", value: 12 }, { type: "CB上限UP", value: 4.8 }] },																									
light_eikeitsu_10: { label: "天光の英傑10", element: "light", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "CBダメUP", value: 12 }, { type: "CB上限UP", value: 4.8 }] },																									
dark_eikeitsu_10: { label: "奈落の英傑10", element: "dark", level: 10, effects: [{ type: "奥義ダメUP", value: 10 }, { type: "奥義上限UP", value: 4.8 }, { type: "CBダメUP", value: 12 }, { type: "CB上限UP", value: 4.8 }] },																									
																									
fire_eikeitsu_15: { label: "紅蓮の英傑15", element: "fire", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "CBダメUP", value: 14.5 }, { type: "CB上限UP", value: 6.8 }] },																									
water_eikeitsu_15: { label: "霧氷の英傑15", element: "water", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "CBダメUP", value: 14.5 }, { type: "CB上限UP", value: 6.8 }] },																									
earth_eikeitsu_15: { label: "地裂の英傑15", element: "earth", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "CBダメUP", value: 14.5 }, { type: "CB上限UP", value: 6.8 }] },																									
wind_eikeitsu_15: { label: "乱気の英傑15", element: "wind", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "CBダメUP", value: 14.5 }, { type: "CB上限UP", value: 6.8 }] },																									
light_eikeitsu_15: { label: "天光の英傑15", element: "light", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "CBダメUP", value: 14.5 }, { type: "CB上限UP", value: 6.8 }] },																									
dark_eikeitsu_15: { label: "奈落の英傑15", element: "dark", level: 15, effects: [{ type: "奥義ダメUP", value: 12.5 }, { type: "奥義上限UP", value: 6.8 }, { type: "CBダメUP", value: 14.5 }, { type: "CB上限UP", value: 6.8 }] },																									
																									
fire_eikeitsu_20: { label: "紅蓮の英傑20", element: "fire", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "CBダメUP", value: 16.5 }, { type: "CB上限UP", value: 7.8 }] },																									
water_eikeitsu_20: { label: "霧氷の英傑20", element: "water", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "CBダメUP", value: 16.5 }, { type: "CB上限UP", value: 7.8 }] },																									
earth_eikeitsu_20: { label: "地裂の英傑20", element: "earth", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "CBダメUP", value: 16.5 }, { type: "CB上限UP", value: 7.8 }] },																									
wind_eikeitsu_20: { label: "乱気の英傑20", element: "wind", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "CBダメUP", value: 16.5 }, { type: "CB上限UP", value: 7.8 }] },																									
light_eikeitsu_20: { label: "天光の英傑20", element: "light", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "CBダメUP", value: 16.5 }, { type: "CB上限UP", value: 7.8 }] },																									
dark_eikeitsu_20: { label: "奈落の英傑20", element: "dark", level: 20, effects: [{ type: "奥義ダメUP", value: 14.5 }, { type: "奥義上限UP", value: 7.8 }, { type: "CBダメUP", value: 16.5 }, { type: "CB上限UP", value: 7.8 }] }																									
}																									
},																									
																									
normal_exceed: {																									
name: "イクシード",																									
skills: {																									
all_exceed_10: { label: "イクシード10", element: "all", level: 10, effects: [ { type: "奥義上限UP", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 } ] },																									
all_exceed_15: { label: "イクシード15", element: "all", level: 15, effects: [ { type: "奥義上限UP", value: 15 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 } ] }																									
}																									
},																									
																									
normal_gokui: {																									
name: "通常極意",																									
skills: {																									
fire_gokui_10: { label: "紅蓮の極意10", element: "fire", level: 10, effects: [{ type: "奥義与ダメ上昇", value: 80000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_gokui_10: { label: "霧氷の極意10", element: "water", level: 10, effects: [{ type: "奥義与ダメ上昇", value: 80000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_gokui_10: { label: "地裂の極意10", element: "earth", level: 10, effects: [{ type: "奥義与ダメ上昇", value: 80000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_gokui_10: { label: "乱気の極意10", element: "wind", level: 10, effects: [{ type: "奥義与ダメ上昇", value: 80000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_gokui_10: { label: "天光の極意10", element: "light", level: 10, effects: [{ type: "奥義与ダメ上昇", value: 80000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_gokui_10: { label: "奈落の極意10", element: "dark", level: 10, effects: [{ type: "奥義与ダメ上昇", value: 80000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_gokui_15: { label: "紅蓮の極意15", element: "fire", level: 15, effects: [{ type: "奥義与ダメ上昇", value: 105000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_gokui_15: { label: "霧氷の極意15", element: "water", level: 15, effects: [{ type: "奥義与ダメ上昇", value: 105000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_gokui_15: { label: "地裂の極意15", element: "earth", level: 15, effects: [{ type: "奥義与ダメ上昇", value: 105000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_gokui_15: { label: "乱気の極意15", element: "wind", level: 15, effects: [{ type: "奥義与ダメ上昇", value: 105000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_gokui_15: { label: "天光の極意15", element: "light", level: 15, effects: [{ type: "奥義与ダメ上昇", value: 105000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_gokui_15: { label: "奈落の極意15", element: "dark", level: 15, effects: [{ type: "奥義与ダメ上昇", value: 105000 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
normal_garen: {																									
name: "通常技錬",																									
skills: {																									
fire_garen_s_10: { label: "火の技錬10", element: "fire", level: 10, effects: [{ type: "アビダメ上限UP", value: 2.5 }, { type: "アビ与ダメ上昇", value: 10000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_garen_s_10: { label: "水の技錬10", element: "water", level: 10, effects: [{ type: "アビダメ上限UP", value: 2.5 }, { type: "アビ与ダメ上昇", value: 10000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_garen_s_10: { label: "土の技錬10", element: "earth", level: 10, effects: [{ type: "アビダメ上限UP", value: 2.5 }, { type: "アビ与ダメ上昇", value: 10000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_garen_s_10: { label: "風の技錬10", element: "wind", level: 10, effects: [{ type: "アビダメ上限UP", value: 2.5 }, { type: "アビ与ダメ上昇", value: 10000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_garen_s_10: { label: "光の技錬10", element: "light", level: 10, effects: [{ type: "アビダメ上限UP", value: 2.5 }, { type: "アビ与ダメ上昇", value: 10000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_garen_s_10: { label: "闇の技錬10", element: "dark", level: 10, effects: [{ type: "アビダメ上限UP", value: 2.5 }, { type: "アビ与ダメ上昇", value: 10000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_garen_s_15: { label: "火の技錬15", element: "fire", level: 15, effects: [{ type: "アビダメ上限UP", value: 3.5 }, { type: "アビ与ダメ上昇", value: 12500 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_garen_s_15: { label: "水の技錬15", element: "water", level: 15, effects: [{ type: "アビダメ上限UP", value: 3.5 }, { type: "アビ与ダメ上昇", value: 12500 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_garen_s_15: { label: "土の技錬15", element: "earth", level: 15, effects: [{ type: "アビダメ上限UP", value: 3.5 }, { type: "アビ与ダメ上昇", value: 12500 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_garen_s_15: { label: "風の技錬15", element: "wind", level: 15, effects: [{ type: "アビダメ上限UP", value: 3.5 }, { type: "アビ与ダメ上昇", value: 12500 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_garen_s_15: { label: "光の技錬15", element: "light", level: 15, effects: [{ type: "アビダメ上限UP", value: 3.5 }, { type: "アビ与ダメ上昇", value: 12500 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_garen_s_15: { label: "闇の技錬15", element: "dark", level: 15, effects: [{ type: "アビダメ上限UP", value: 3.5 }, { type: "アビ与ダメ上昇", value: 12500 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_garen_m_10: { label: "業火の技錬10", element: "fire", level: 10, effects: [{ type: "アビダメ上限UP", value: 0 }, { type: "アビ与ダメ上昇", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_garen_m_10: { label: "渦潮の技錬10", element: "water", level: 10, effects: [{ type: "アビダメ上限UP", value: 0 }, { type: "アビ与ダメ上昇", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_garen_m_10: { label: "大地の技錬10", element: "earth", level: 10, effects: [{ type: "アビダメ上限UP", value: 0 }, { type: "アビ与ダメ上昇", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_garen_m_10: { label: "竜巻の技錬10", element: "wind", level: 10, effects: [{ type: "アビダメ上限UP", value: 0 }, { type: "アビ与ダメ上昇", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_garen_m_10: { label: "雷電の技錬10", element: "light", level: 10, effects: [{ type: "アビダメ上限UP", value: 0 }, { type: "アビ与ダメ上昇", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_garen_m_10: { label: "憎悪の技錬10", element: "dark", level: 10, effects: [{ type: "アビダメ上限UP", value: 0 }, { type: "アビ与ダメ上昇", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_garen_m_15: { label: "業火の技錬15", element: "fire", level: 15, effects: [{ type: "アビダメ上限UP", value: 4.5 }, { type: "アビ与ダメ上昇", value: 18000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_garen_m_15: { label: "渦潮の技錬15", element: "water", level: 15, effects: [{ type: "アビダメ上限UP", value: 4.5 }, { type: "アビ与ダメ上昇", value: 18000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_garen_m_15: { label: "大地の技錬15", element: "earth", level: 15, effects: [{ type: "アビダメ上限UP", value: 4.5 }, { type: "アビ与ダメ上昇", value: 18000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_garen_m_15: { label: "竜巻の技錬15", element: "wind", level: 15, effects: [{ type: "アビダメ上限UP", value: 4.5 }, { type: "アビ与ダメ上昇", value: 18000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_garen_m_15: { label: "雷電の技錬15", element: "light", level: 15, effects: [{ type: "アビダメ上限UP", value: 4.5 }, { type: "アビ与ダメ上昇", value: 18000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_garen_m_15: { label: "憎悪の技錬15", element: "dark", level: 15, effects: [{ type: "アビダメ上限UP", value: 4.5 }, { type: "アビ与ダメ上昇", value: 18000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_garen_l_10: { label: "紅蓮の技錬10", element: "fire", level: 10, effects: [{ type: "アビダメ上限UP", value: 4 }, { type: "アビ与ダメ上昇", value: 20000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_garen_l_10: { label: "霧氷の技錬10", element: "water", level: 10, effects: [{ type: "アビダメ上限UP", value: 4 }, { type: "アビ与ダメ上昇", value: 20000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_garen_l_10: { label: "地裂の技錬10", element: "earth", level: 10, effects: [{ type: "アビダメ上限UP", value: 4 }, { type: "アビ与ダメ上昇", value: 20000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_garen_l_10: { label: "乱気の技錬10", element: "wind", level: 10, effects: [{ type: "アビダメ上限UP", value: 4 }, { type: "アビ与ダメ上昇", value: 20000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_garen_l_10: { label: "天光の技錬10", element: "light", level: 10, effects: [{ type: "アビダメ上限UP", value: 4 }, { type: "アビ与ダメ上昇", value: 20000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_garen_l_10: { label: "奈落の技錬10", element: "dark", level: 10, effects: [{ type: "アビダメ上限UP", value: 4 }, { type: "アビ与ダメ上昇", value: 20000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
fire_garen_l_15: { label: "紅蓮の技錬15", element: "fire", level: 15, effects: [{ type: "アビダメ上限UP", value: 5.5 }, { type: "アビ与ダメ上昇", value: 25000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_garen_l_15: { label: "霧氷の技錬15", element: "water", level: 15, effects: [{ type: "アビダメ上限UP", value: 5.5 }, { type: "アビ与ダメ上昇", value: 25000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_garen_l_15: { label: "地裂の技錬15", element: "earth", level: 15, effects: [{ type: "アビダメ上限UP", value: 5.5 }, { type: "アビ与ダメ上昇", value: 25000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_garen_l_15: { label: "乱気の技錬15", element: "wind", level: 15, effects: [{ type: "アビダメ上限UP", value: 5.5 }, { type: "アビ与ダメ上昇", value: 25000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_garen_l_15: { label: "天光の技錬15", element: "light", level: 15, effects: [{ type: "アビダメ上限UP", value: 5.5 }, { type: "アビ与ダメ上昇", value: 25000 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_garen_l_15: { label: "奈落の技錬15", element: "dark", level: 15, effects: [{ type: "アビダメ上限UP", value: 5.5 }, { type: "アビ与ダメ上昇", value: 25000 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																									
																									
magna_atk: {																									
name: "方陣攻刃",																									
skills: {																									
// 方陣攻刃I (SLv10: 10%, SLv15: 12%)																									
fire_magna_1_10: { label: "機炎方陣・攻刃10", element: "fire", level: 10, effects: [{ type: "マグナ攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_magna_1_10: { label: "海神方陣・攻刃10", element: "water", level: 10, effects: [{ type: "マグナ攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_magna_1_10: { label: "創樹方陣・攻刃10", element: "earth", level: 10, effects: [{ type: "マグナ攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_magna_1_10: { label: "嵐竜方陣・攻刃10", element: "wind", level: 10, effects: [{ type: "マグナ攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_magna_1_10: { label: "騎解方陣・攻刃10", element: "light", level: 10, effects: [{ type: "マグナ攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_magna_1_10: { label: "黒霧方陣・攻刃10", element: "dark", level: 10, effects: [{ type: "マグナ攻刃", value: 10 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
// 方陣攻刃II (SLv15: 14.5%)																									
fire_magna_2_15: { label: "機炎方陣・攻刃II15", element: "fire", level: 15, effects: [{ type: "マグナ攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_magna_2_15: { label: "海神方陣・攻刃II15", element: "water", level: 15, effects: [{ type: "マグナ攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
earth_magna_2_15: { label: "創樹方陣・攻刃II15", element: "earth", level: 15, effects: [{ type: "マグナ攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
wind_magna_2_15: { label: "嵐竜方陣・攻刃II15", element: "wind", level: 15, effects: [{ type: "マグナ攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
light_magna_2_15: { label: "騎解方陣・攻刃II15", element: "light", level: 15, effects: [{ type: "マグナ攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
dark_magna_2_15: { label: "黒霧方陣・攻刃II15", element: "dark", level: 15, effects: [{ type: "マグナ攻刃", value: 14.5 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
																									
// 方陣攻刃III (SLv15: 18%, SLv20: 20%)																									
fire_magna_3_15: { label: "機炎方陣・攻刃III15", element: "fire", level: 15, effects: [{ type: "マグナ攻刃", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
fire_magna_3_20: { label: "機炎方陣・攻刃III20", element: "fire", level: 20, effects: [{ type: "マグナ攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_magna_3_15: { label: "海神方陣・攻刃III15", element: "water", level: 15, effects: [{ type: "マグナ攻刃", value: 18 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] },																									
water_magna_3_20: { label: "海神方陣・攻刃III20", element: "water", level: 20, effects: [{ type: "マグナ攻刃", value: 20 }, { type: "", value: 0 }, { type: "", value: 0 }, { type: "", value: 0 }] }																									
}																									
},																								
};																									
																									
																									
let activeGroupId = "normal_atk";																									
																									
																								