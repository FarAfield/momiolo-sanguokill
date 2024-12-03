function importModule() {
  return [
    {
      type: "sword",
      id: "BloodThirstSword",
      name: "饮血剑",
      image: "BloodThirstSword.png",
      description: "每造成3点伤害，获得1点护盾（累计最多10点）",
      effects: {
        BloodThirstSword: () => {},
      },
    },
  ];
}

export { importModule };
