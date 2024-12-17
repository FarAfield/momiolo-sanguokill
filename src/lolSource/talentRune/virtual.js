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
              target: 10,
            },
          },
          content: function ({ event, game, get, set, ui }) {
            function step1() {
              const { targets } = event;
              event.baseDamage = 1;
              // 是否闪避
              event.result.isDodge = false;
            }
            function step2() {
              if (!event.result.isDodge) {
                const next = event.trigger("damage", true);
                next.copy(event);
              }
            }
            return {
              step1,
              step2,
            };
          },
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
        },
      },
    },
  ];
}

export { importModule };
