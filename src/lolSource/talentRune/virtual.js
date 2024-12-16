function importModule() {
  return [
    {
      type: "virtual",
      id: "Virtual",
      name: "虚无",
      image: "Virtual.png",
      description: "虚无,造成一点伤害",
      cost: 1,
      effects: {
        Virtual: {
          attrs: {
            enable: true,
            toSelf: true,
            selectTarget: true,
            allowMultiple: true,
            multipleNum: 2,
          },
          ai: {
            basic: {
              order: 1,
              value: 1,
              addedValue: 0,
            },
            choose: {
              player: 1,
              target: 4,
            },
          },
          content: () => {},
        },
      },
    },
  ];
}

export { importModule };
