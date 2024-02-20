import { defineStore } from "pinia";
import {
  buildDefaultPlayer,
  buildCharacterList,
  buildCardList,
  buildPlayerList,
} from "@/core/init";
import { getRandomNumber, getIdentityList, getNoRepeatNum } from "@/utils";

const useGameStore = defineStore({
  id: "gameStore",
  state: () => {
    return {
      mode: "",
      cardPackage: [],
      playerNum: 8,
      isDouble: false,
      status: "", // begin(游戏开始)   inprogress(游戏进行中)    pause(游戏暂停)    end(游戏结束)
      background: "background2",
      characterList: [],
      cardList: [],
      playerList: [],
      controlIndex: 0,
    };
  },
  actions: {
    // 开始游戏，确定游戏模式、游戏卡包、游戏人数
    startGame(mode, cardPackage, playerNum) {
      this.$reset();
      this.mode = mode;
      this.cardPackage = cardPackage;
      this.playerNum = playerNum;
      // 生成默认玩家占位
      this.playerList = buildDefaultPlayer(playerNum);
      // 生成游戏角色
      this.characterList = buildCharacterList(mode, cardPackage);
      // 生成游戏卡牌
      this.cardList = buildCardList(cardPackage);
    },

    // 玩家选择身份、武将。游戏开始
    initGame(selectedIdentity, selectedCharacter = []) {
      if (selectedCharacter.length !== (this.isDouble ? 2 : 1)) {
        console.error("initGame---参数错误");
        return;
      }
      // 判断游戏模式
      if (this.mode === "basic") {
        // 获取身份牌列表且确定控制者所在位置
        const identityList = getIdentityList(this.playerNum);
        if (selectedIdentity) {
          this.controlIndex = identityList.findIndex(
            (i) => i === selectedIdentity
          );
        } else {
          this.controlIndex = getRandomNumber(0, this.playerNum - 1);
        }
        // 获取排除已选武将的随机武将
        const gameCharacter = getNoRepeatNum(
          this.characterList
            .map((i) => i.characterType)
            .filter((i) => !selectedCharacter.includes(i)),
          (this.playerNum - 1) * (this.isDouble ? 2 : 1)
        );
        // 填充已选择的武将
        gameCharacter.splice(
          this.controlIndex * (this.isDouble ? 2 : 1),
          0,
          ...selectedCharacter
        );
        // 构造玩家信息 seatNum  identity  characterGroup
        const playerListConfig = identityList.map((i, index) => {
          return {
            seatNum: index,
            identity: i,
            characterGroup: gameCharacter.slice(
              index * (this.isDouble ? 2 : 1),
              (index + 1) * (this.isDouble ? 2 : 1)
            ),
          };
        });
        this.playerList = buildPlayerList(playerListConfig, this.characterList);
      }
      // 游戏开始
      this.status = "begin";
    },
  },
});

export default useGameStore;
