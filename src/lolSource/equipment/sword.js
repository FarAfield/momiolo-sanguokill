function importModule() {
  return [
    {
      type: "sword",
      id: "bloodThirstSword",
      name: "饮血剑",
      image: "bloodThirst.png",
      description: "每造成3点伤害，获得1点护盾（累计最多10点）",
      effects: {
        bloodThirstSword: () => {},
      },
    },
  ];
}

export { importModule };
