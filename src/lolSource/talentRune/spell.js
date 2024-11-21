function importModule() {
  return [
    {
      type: "spell",
      id: "flash",
      name: "闪现",
      image: "SummonerFlash.png",
      description: "使你朝着你的指针位置瞬间传送一小段距离。",
      effects: {
        flash: () => {},
      },
    },
  ];
}

export { importModule };
