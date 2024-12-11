function importModule() {
  return [
    {
      type: "virtual",
      id: "Virtual",
      name: "虚无",
      image: "Virtual.png",
      description: "虚无,造成一点伤害",
      effects: {
        Virtual: () => {},
      },
      attrs: {
        cost: 1,
        toSelf: false,
        enable: true,
        allowMultiple: false,
      },
      ai: {
        basic: {
          order: 0,
          value: 0,
          addedValue: 0,
        },
        result: {
          player: 0,
          target: 0,
        },
        tag: {
          damage: 0,
          recover: 0,
          multiple: 0,
          useful: 0,
        },
      },
    },
  ];
}

export { importModule };
