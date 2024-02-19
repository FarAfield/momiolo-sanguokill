import Card from "@/core/card";
import Player from "@/core/player";

const Decor = {
  Spade: 1,
  Heart: 2,
  Club: 3,
  Diamond: 4,
};
const Group = {
  WEI: "魏",
  SHU: "蜀",
  WU: "吴",
  QUN: "群",
  SHEN: "神",
  MO: "魔",
  XIAN: "仙",
};
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getCardNum() {
  return getRandomNumber(1, 13);
}
function generateList(config) {
  const list = [];
  Object.keys(config)
    .sort((a, b) => a - b)
    .forEach((key) => {
      list.push(
        ...new Array(config[key])
          .fill()
          .map(() => ({ num: getCardNum(), decor: key }))
      );
    });
  return list;
}

// 基础卡牌包，总计160张  基础牌85 锦囊牌50 装备牌25
function generateBasicCard() {
  const result = {};
  // 【杀】共有30张，黑桃7张、红桃3张、梅花14张、方块6张
  result["sha"] = {
    name: "杀",
    des: "出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，否则你对其造成1点伤害。",
    list: generateList({
      [Decor.Spade]: 7,
      [Decor.Heart]: 3,
      [Decor.Club]: 14,
      [Decor.Diamond]: 6,
    }),
  };
  // 【闪】共有24张，红桃7张、方块17张
  result["shan"] = {
    name: "闪",
    des: "抵消一张【杀】。",
    list: generateList({
      [Decor.Heart]: 7,
      [Decor.Diamond]: 17,
    }),
  };
  // 【桃】共有12张，红桃9张、方块3张
  result["tao"] = {
    name: "桃",
    des: "出牌阶段，对自己使用，目标角色回复1点体力。当有角色处于濒死状态时，对该角色使用。目标角色回复1点体力。",
    list: generateList({
      [Decor.Heart]: 9,
      [Decor.Diamond]: 3,
    }),
  };
  // 【火杀】共5张，红桃3张、方块2张
  result["huosha"] = {
    name: "火杀",
    des: "出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，否则你对其造成1点火焰伤害。",
    list: generateList({
      [Decor.Heart]: 3,
      [Decor.Diamond]: 2,
    }),
  };
  // 【雷杀】共9张，黑桃5张、梅花4张
  result["leisha"] = {
    name: "雷杀",
    des: "出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，否则你对其造成1点雷电伤害。",
    list: generateList({
      [Decor.Spade]: 5,
      [Decor.Club]: 4,
    }),
  };
  // 【酒】共有5张，黑桃2张、梅花2张、方块1张    todo
  result["jiu"] = {
    name: "酒",
    des: "",
    list: generateList({
      [Decor.Spade]: 2,
      [Decor.Club]: 2,
      [Decor.Diamond]: 1,
    }),
  };
  // 【万箭齐发】共有1张，红桃
  result["wanjianqifa"] = {
    name: "万箭齐发",
    des: "出牌阶段，对所有其他角色使用。每名目标角色需打出一张【闪】，否则受到1点伤害。",
    list: generateList({
      [Decor.Heart]: 1,
    }),
  };
  // 【南蛮入侵】共有3张，黑桃2张、梅花1张
  result["nanmanruqin"] = {
    name: "南蛮入侵",
    des: "出牌阶段，对所有其他角色使用。每名目标角色需打出一张【杀】，否则受到1点伤害。",
    list: generateList({
      [Decor.Spade]: 2,
      [Decor.Club]: 1,
    }),
  };
  // 【桃园结义】共有1张，红桃
  result["taoyuanjieyi"] = {
    name: "桃园结义",
    des: "出牌阶段，对所有角色使用。每名目标角色回复1点体力。",
    list: generateList({
      [Decor.Heart]: 1,
    }),
  };
  // 【五谷丰登】共有2张，红桃
  result["wugufengdeng"] = {
    name: "五谷丰登",
    des: "出牌阶段，对所有角色使用。你从牌堆顶亮出等同于目标数量的牌，每名目标角色获得这些牌中（剩余的）的任意一张。",
    list: generateList({
      [Decor.Heart]: 2,
    }),
  };
  // 【乐不思蜀】共有3张，黑桃1张、红桃1张、梅花1张
  result["lebusishu"] = {
    name: "乐不思蜀",
    des: "出牌阶段，对一名其他角色使用。若判定结果不为红桃，跳过其出牌阶段。",
    list: generateList({
      [Decor.Spade]: 1,
      [Decor.Heart]: 1,
      [Decor.Club]: 1,
    }),
  };
  // 【闪电】共有2张，黑桃1张、红桃1张
  result["shandian"] = {
    name: "闪电",
    des: "出牌阶段，对自己使用。若判定结果为黑桃2~9，则目标角色受到3点雷电伤害。若判定不为黑桃2~9，将之移动到下家的判定区里。",
    list: generateList({
      [Decor.Spade]: 1,
      [Decor.Heart]: 1,
    }),
  };
  // 【兵粮寸断】共2张，黑桃1张、梅花1张  todo
  result["bingliangcunduan"] = {
    name: "兵粮寸断",
    des: "",
    list: generateList({
      [Decor.Spade]: 1,
      [Decor.Club]: 1,
    }),
  };
  // 【无中生有】共有4张，红桃
  result["wuzhongshengyou"] = {
    name: "无中生有",
    des: "出牌阶段，对你使用。你摸两张牌。",
    list: generateList({
      [Decor.Heart]: 4,
    }),
  };
  // 【顺手牵羊】共有5张，黑桃3张、方块2张
  result["shunshouqianyang"] = {
    name: "顺手牵羊",
    des: "出牌阶段，对距离为1且区域里有牌的一名其他角色使用。你获得其区域里的一张牌。",
    list: generateList({
      [Decor.Spade]: 3,
      [Decor.Diamond]: 2,
    }),
  };
  // 【过河拆桥】共有6张，黑桃3张、红桃1张、梅花2张
  result["guohechaiqiao"] = {
    name: "过河拆桥",
    des: "出牌阶段，对区域里有牌的一名其他角色使用。你弃置其区域里的一张牌。",
    list: generateList({
      [Decor.Spade]: 3,
      [Decor.Heart]: 1,
      [Decor.Club]: 2,
    }),
  };
  // 【借刀杀人】共有2张，梅花
  result["jiedaosharen"] = {
    name: "借刀杀人",
    des: "出牌阶段，对装备区里有武器牌且有使用【杀】的目标的一名其他角色使用。令其对你指定的一名角色使用一张【杀】，否则将其装备区里的武器牌交给你。",
    list: generateList({
      [Decor.Club]: 2,
    }),
  };
  // 【铁索连环】共有6张，黑桃2张、梅花4张   todo
  result["tiesuolianhuan"] = {
    name: "铁索连环",
    des: "",
    list: generateList({
      [Decor.Spade]: 2,
      [Decor.Club]: 4,
    }),
  };
  // 【无懈可击】共有7张，黑桃2张、红桃2张、梅花2张、方块1张
  result["wuxiekeji"] = {
    name: "无懈可击",
    des: "一张锦囊牌生效前，对此牌使用。抵消此牌对一名角色产生的效果，或抵消另一张【无懈可击】产生的效果。",
    list: generateList({
      [Decor.Spade]: 2,
      [Decor.Heart]: 2,
      [Decor.Club]: 2,
      [Decor.Diamond]: 1,
    }),
  };
  // 【决斗】共有3张，黑桃1张、梅花1张、方块1张
  result["juedou"] = {
    name: "决斗",
    des: "出牌阶段，对一名其他角色使用。由其开始，其与你轮流打出一张【杀】，直到其中一方未打出【杀】为止。未打出【杀】的一方受到另一方对其造成的1点伤害。",
    list: generateList({
      [Decor.Spade]: 1,
      [Decor.Club]: 1,
      [Decor.Diamond]: 1,
    }),
  };
  // 【火攻】共有3张，红桃2张、方块1张   todo
  result["huogong"] = {
    name: "火攻",
    des: "",
    list: generateList({
      [Decor.Heart]: 2,
      [Decor.Diamond]: 1,
    }),
  };
  // +1马  【绝影】黑桃、【爪黄飞电】红桃、【的卢】梅花、【骅骝】方块
  result["jueying"] = {
    name: "绝影",
    des: "锁定技，其他角色计算与你的距离+1。",
    list: generateList({
      [Decor.Spade]: 1,
    }),
  };
  result["zhuahuangfeidian"] = {
    name: "爪黄飞电",
    des: "锁定技，其他角色计算与你的距离+1。",
    list: generateList({
      [Decor.Heart]: 1,
    }),
  };
  result["dilu"] = {
    name: "的卢",
    des: "锁定技，其他角色计算与你的距离+1。",
    list: generateList({
      [Decor.Club]: 1,
    }),
  };
  result["hualiu"] = {
    name: "骅骝",
    des: "锁定技，其他角色计算与你的距离+1。",
    list: generateList({
      [Decor.Diamond]: 1,
    }),
  };
  // -1马  【大宛】黑桃、【赤兔】红桃、【紫骍】方块
  result["dawan"] = {
    name: "大宛",
    des: "锁定技，你计算与其他角色的距离-1。",
    list: generateList({
      [Decor.Spade]: 1,
    }),
  };
  result["chitu"] = {
    name: "赤兔",
    des: "锁定技，你计算与其他角色的距离-1。",
    list: generateList({
      [Decor.Heart]: 1,
    }),
  };
  result["zixing"] = {
    name: "紫骍",
    des: "锁定技，你计算与其他角色的距离-1。",
    list: generateList({
      [Decor.Diamond]: 1,
    }),
  };
  // 【八卦阵】2张（黑桃、梅花）
  result["baguazhen"] = {
    name: "八卦阵",
    des: "当你需要使用或打出一张【闪】时，你可以进行判定。若结果为红色，则你视为使用或打出一张【闪】。",
    list: generateList({
      [Decor.Spade]: 1,
      [Decor.Club]: 1,
    }),
  };
  // 【藤甲】2张（黑桃、梅花）   todo
  result["tengjia"] = {
    name: "藤甲",
    des: "",
    list: generateList({
      [Decor.Spade]: 1,
      [Decor.Club]: 1,
    }),
  };
  // 【白银狮子】梅花   todo
  result["baiyinshizi"] = {
    name: "白银狮子",
    des: "",
    list: generateList({
      [Decor.Club]: 1,
    }),
  };
  // 【仁王盾】梅花
  result["renwangdun"] = {
    name: "仁王盾",
    des: "锁定技，黑色【杀】对你无效。",
    list: generateList({
      [Decor.Club]: 1,
    }),
  };
  //  黑桃：【青釭剑】【雌雄双股剑】【青龙偃月刀】【丈八蛇矛】【古锭刀】【寒冰剑】
  result["qinggangjian"] = {
    name: "青釭剑",
    des: "锁定技，当你使用【杀】指定一名目标角色后，你令其防具技能无效直到此【杀】被抵消或造成伤害。",
    list: generateList({
      [Decor.Spade]: 1,
    }),
  };
  result["cixiongshuanggujian"] = {
    name: "雌雄双股剑",
    des: "当你使用【杀】指定一名异性的目标角色后，你可以令其选择一项：1.弃置一张手牌；2.令你摸一张牌。",
    list: generateList({
      [Decor.Spade]: 1,
    }),
  };
  result["qinglongyanyuedao"] = {
    name: "青龙偃月刀",
    des: "当你使用的【杀】被目标角色使用的【闪】抵消时，你可以对其使用一张【杀】（无距离限制）。",
    list: generateList({
      [Decor.Spade]: 1,
    }),
  };
  result["zhangbashemao"] = {
    name: "丈八蛇矛",
    des: "你可以将两张手牌当【杀】使用或打出。",
    list: generateList({
      [Decor.Spade]: 1,
    }),
  };
  // todo
  result["gudingdao"] = {
    name: "古锭刀",
    des: "",
    list: generateList({
      [Decor.Spade]: 1,
    }),
  };
  result["hanbingjian"] = {
    name: "寒冰剑",
    des: "当你因执行【杀】的效果而造成伤害时，若目标角色有能被弃置的牌，则你可以防止此伤害，然后依次弃置目标角色的两张牌。",
    list: generateList({
      [Decor.Spade]: 1,
    }),
  };
  //  红桃：【麒麟弓】
  result["qilingong"] = {
    name: "麒麟弓",
    des: "当你使用【杀】对目标角色造成伤害时，你可以弃置其装备区里的一张坐骑牌。",
    list: generateList({
      [Decor.Heart]: 1,
    }),
  };
  // 【诸葛连弩】2张（梅花、方块）
  result["zhugeliannu"] = {
    name: "诸葛连弩",
    des: "锁定技，你于出牌阶段内使用【杀】无次数限制。",
    list: generateList({
      [Decor.Club]: 1,
      [Decor.Diamond]: 1,
    }),
  };
  //  方块：【贯石斧】【方天画戟】【朱雀羽扇】
  result["guanshifu"] = {
    name: "贯石斧",
    des: "当你使用的【杀】被目标角色使用的【闪】抵消时，你可以弃置两张牌，令此【杀】依然对其造成伤害。",
    list: generateList({
      [Decor.Diamond]: 1,
    }),
  };
  result["fangtianhuaji"] = {
    name: "方天画戟",
    des: "你使用的【杀】若是你最后的手牌，你可以额外选择至多两个目标。",
    list: generateList({
      [Decor.Diamond]: 1,
    }),
  };
  // todo
  result["zhuqueyushan"] = {
    name: "朱雀羽扇",
    des: "",
    list: generateList({
      [Decor.Diamond]: 1,
    }),
  };
  return result;
}

// 基础武将包
function generateBasicCharacter() {
  //25  刘备、关羽、张飞、赵云、马超、诸葛亮、黄月英、曹操、郭嘉、司马懿、夏侯惇、张辽、许褚、甄姬、孙权、甘宁、吕蒙、黄盖、周瑜、大乔、陆逊、孙尚香、华佗、吕布、貂蝉
  //风8+2  魏延、黄忠、曹仁、夏侯渊、周泰、小乔、张角、于吉、神关羽、神吕蒙
  //火8+2  典韦、荀彧、庞统、卧龙诸葛亮、太史慈、庞德、颜良&文丑、袁绍、神周瑜、神诸葛亮
  //林8+2  徐晃、曹丕、孟获、祝融夫人、孙坚、鲁肃、董卓、贾诩、神吕布、神曹操
  //山8+2 张颌、蔡文姬、张昭、邓艾、孙策、姜维、刘禅、左慈、神司马懿、神赵云SP
  //一将成名11  曹植、张春华、于禁、徐庶、法正、马谡、吴国太、凌统、徐盛、陈宫、高顺
  //一将成名11  荀攸、王异、曹彰、关兴&张苞、廖化、马岱、步练师、程普、韩当、华雄、刘表
  const result = {};
  // 基础包
  const basicPackage = [
    ["liubei", "刘备", "male", Group.SHU, 4, []],
    ["guanyu", "关羽", "male", Group.SHU, 4, []],
    ["zhangfei", "张飞", "male", Group.SHU, 4, []],
    ["zhaoyun", "赵云", "male", Group.SHU, 4, []],
    ["machao", "马超", "male", Group.SHU, 4, []],
    ["zhugeliang", "诸葛亮", "male", Group.SHU, 4, []],
    ["huangyueying", "黄月英", "female", Group.SHU, 3, []],

    ["caochao", "曹操", "male", Group.WEI, 4, []],
    ["guojia", "郭嘉", "male", Group.WEI, 3, []],
    ["simayi", "司马懿", "male", Group.WEI, 3, []],
    ["xiahoudun", "夏侯惇", "male", Group.WEI, 4, []],
    ["zhangliao", "张辽", "male", Group.WEI, 4, []],
    ["xuzhu", "许诸", "male", Group.WEI, 4, []],
    ["zhenji", "甄姬", "female", Group.WEI, 3, []],

    ["sunquan", "孙权", "male", Group.WU, 4, []],
    ["ganning", "甘宁", "male", Group.WU, 4, []],
    ["lvmeng", "吕蒙", "male", Group.WU, 4, []],
    ["huanggai", "黄盖", "male", Group.WU, 4, []],
    ["zhouyu", "周瑜", "male", Group.WU, 3, []],
    ["daqiao", "大乔", "female", Group.WU, 3, []],
    ["luxun", "陆逊", "male", Group.WU, 3, []],

    ["sunshangxiang", "孙尚香", "female", Group.QUN, 3, []],
    ["huatuo", "华佗", "male", Group.QUN, 3, []],
    ["lvbu", "吕布", "male", Group.QUN, 4, []],
    ["diaochan", "貂蝉", "female", Group.QUN, 3, []],
  ];
  basicPackage.forEach((item) => {
    result[[item[0]]] = {
      name: item[1],
      sex: item[2],
      group: item[3],
      maxHp: item[4],
      skills: item[5],
    };
  });
  result["shenguojia"] = {
    name: "神郭嘉",
    sex: "male",
    group: Group.SHEN,
    maxHp: 3,
    skills: [],
  };
  return result;
}

function gameInit() {
  // todo 洗牌  角色指定
  const cardList = Card.$createCard("basic", generateBasicCard());
  const playerList = Player.$createCharacter(generateBasicCharacter());
  return { cardList, playerList };
}

export { gameInit };
