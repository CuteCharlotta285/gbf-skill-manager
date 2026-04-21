// skills.js
const skillDatabase = {
  "normal_atk": {
    name: "通常攻刃",
    skills: {
      "fire_atk_10": {
        label: "火の攻刃10",
        element: "fire",
        level: 10,
        effects: [
          { type: "通常攻刃", value: 10 },
          { type: "", value: 0 },
          { type: "", value: 0 },
          { type: "", value: 0 }
        ]
      },
      // 例：複合スキルの場合
      "fire_setsuna_10": {
        label: "火の刹那10",
        element: "fire",
        level: 10,
        effects: [
          { type: "通常攻刃", value: 7 },
          { type: "通常技巧", value: 3 },
          { type: "", value: 0 },
          { type: "", value: 0 }
        ]
      }
    }
  },
  "normal_ranbu": { name: "通常乱舞", skills: {} },
  "magna_atk": { name: "方陣枠", skills: {} }
};

let activeGroupId = "normal_atk";