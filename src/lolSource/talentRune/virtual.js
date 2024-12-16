function importModule() {
  return [
    {
      type: "virtual",
      id: "Attack",
      name: "攻击",
      image: "Attack.png",
      description: "攻击,造成一点伤害",
      cost: 1,
      effects: {
        Attack: {
          attrs: {
            enable: true,
            toSelf: false,
            selectTarget: true,
            allowMultiple: false,
            multipleNum: 0,
          },
          ai: {
            basic: {
              order: 1,
              value: 1,
              addedValue: 0,
            },
            choose: {
              player: 0,
              target: 0,
            },
          },
          content: () => {},
        },
      },
    },
    {
      type: "virtual",
      id: "Recover",
      name: "回复",
      image: "Recover.png",
      description: "回复,自身回2血，目标回1血",
      cost: 1,
      effects: {
        Recover: {
          attrs: {
            enable: true,
            toSelf: true,
            selectTarget: true,
            allowMultiple: false,
            multipleNum: 0,
          },
          ai: {
            basic: {
              order: 2,
              value: 1,
              addedValue: 0,
            },
            choose: {
              player: 2,
              target: 1,
            },
          },
          content: () => {},
        },
      },
    },
  ];
}

export { importModule };
