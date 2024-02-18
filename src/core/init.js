import Card from "@/core/card";
import Player from "@/core/player";
import { getCharacterImage } from "@/utils";

const Decor = {
  Spade: 1,
  Heart: 2,
  Club: 3,
  Diamond: 4,
};
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getCardNum() {
  return getRandomNumber(1, 13);
}
function generateList(num, decor) {
  return new Array(num).fill().map(() => ({ num: getCardNum(), decor }));
}

// 基础卡牌包，总计160张  基础牌85 锦囊牌50 装备牌25
function generateBasicCard() {
  const result = {};
  // 【杀】共有30张，黑桃7张、红桃3张、梅花14张、方块6张
  result["sha"] = {
    name: "杀",
    skin: "",
    des: "",
    list: [...generateList(7, Decor.Spade)]
      .concat(...[generateList(3, Decor.Heart)])
      .concat(...[generateList(14, Decor.Club)])
      .concat(...[generateList(6, Decor.Diamond)]),
  };
  // 【闪】共有24张，红桃7张、方块17张
  result["shan"] = {
    name: "闪",
    skin: "",
    des: "",
    list: [...generateList(7, Decor.Heart)].concat(
      ...[generateList(17, Decor.Diamond)]
    ),
  };
  // 【桃】共有12张，红桃9张、方块3张
  result["tao"] = {
    name: "桃",
    skin: "",
    des: "",
    list: [...generateList(9, Decor.Heart)].concat(
      ...[generateList(3, Decor.Diamond)]
    ),
  };
  // 【火杀】共5张，红桃3张、方块2张
  result["huosha"] = {
    name: "火杀",
    skin: "",
    des: "",
    list: [...generateList(3, Decor.Heart)].concat(
      ...[generateList(2, Decor.Diamond)]
    ),
  };
  // 【雷杀】共9张，黑桃5张、梅花4张
  result["leisha"] = {
    name: "雷杀",
    skin: "",
    des: "",
    list: [...generateList(5, Decor.Spade)].concat(
      ...[generateList(4, Decor.Club)]
    ),
  };
  // 【酒】共有5张，黑桃2张、梅花2张、方块1张
  result["jiu"] = {
    name: "酒",
    skin: "",
    des: "",
    list: [...generateList(2, Decor.Spade)]
      .concat(...[generateList(2, Decor.Club)])
      .concat(...[generateList(1, Decor.Diamond)]),
  };
  // 【万箭齐发】共有1张，红桃
  result["wanjianqifa"] = {
    name: "万箭齐发",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Heart)],
  };
  // 【南蛮入侵】共有3张，黑桃2张、梅花1张
  result["nanmanruqin"] = {
    name: "南蛮入侵",
    skin: "",
    des: "",
    list: [...generateList(2, Decor.Spade)].concat(
      ...[generateList(1, Decor.Club)]
    ),
  };
  // 【桃园结义】共有1张，红桃
  result["taoyuanjieyi"] = {
    name: "桃园结义",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Heart)],
  };
  // 【五谷丰登】共有2张，红桃
  result["wugufengdeng"] = {
    name: "五谷丰登",
    skin: "",
    des: "",
    list: [...generateList(2, Decor.Heart)],
  };
  // 【乐不思蜀】共有3张，黑桃1张、红桃1张、梅花1张
  result["lebusishu"] = {
    name: "乐不思蜀",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)]
      .concat(...[generateList(1, Decor.Heart)])
      .concat(...[generateList(1, Decor.Club)]),
  };
  // 【闪电】共有2张，黑桃1张、红桃1张
  result["shandian"] = {
    name: "闪电",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)].concat(
      ...[generateList(1, Decor.Heart)]
    ),
  };
  // 【兵粮寸断】共2张，黑桃1张、梅花1张
  result["bingliangcunduan"] = {
    name: "兵粮寸断",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)].concat(
      ...[generateList(1, Decor.Club)]
    ),
  };
  // 【无中生有】共有4张，红桃
  result["wuzhongshengyou"] = {
    name: "无中生有",
    skin: "",
    des: "",
    list: [...generateList(4, Decor.Heart)],
  };
  // 【顺手牵羊】共有5张，黑桃3张、方块2张
  result["shunshouqianyang"] = {
    name: "顺手牵羊",
    skin: "",
    des: "",
    list: [...generateList(3, Decor.Spade)].concat(
      ...[generateList(2, Decor.Diamond)]
    ),
  };
  // 【过河拆桥】共有6张，黑桃3张、红桃1张、梅花2张
  result["guohechaiqiao"] = {
    name: "过河拆桥",
    skin: "",
    des: "",
    list: [...generateList(3, Decor.Spade)]
      .concat(...[generateList(1, Decor.Heart)])
      .concat(...[generateList(2, Decor.Club)]),
  };
  // 【借刀杀人】共有2张，梅花
  result["jiedaosharen"] = {
    name: "借刀杀人",
    skin: "",
    des: "",
    list: [...generateList(2, Decor.Club)],
  };
  // 【铁索连环】共有6张，黑桃2张、梅花4张
  result["tiesuolianhuan"] = {
    name: "铁索连环",
    skin: "",
    des: "",
    list: [...generateList(2, Decor.Spade)].concat(
      ...[generateList(4, Decor.Club)]
    ),
  };
  // 【无懈可击】共有7张，黑桃2张、红桃2张、梅花2张、方块1张
  result["wuxiekeji"] = {
    name: "无懈可击",
    skin: "",
    des: "",
    list: [...generateList(2, Decor.Spade)]
      .concat(...[generateList(2, Decor.Heart)])
      .concat(...[generateList(2, Decor.Club)])
      .concat(...[generateList(1, Decor.Diamond)]),
  };
  // 【决斗】共有3张，黑桃1张、梅花1张、方块1张
  result["juedou"] = {
    name: "决斗",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)]
      .concat(...[generateList(1, Decor.Club)])
      .concat(...[generateList(1, Decor.Diamond)]),
  };
  // 【火攻】共有3张，红桃2张、方块1张
  result["huogong"] = {
    name: "火攻",
    skin: "",
    des: "",
    list: [...generateList(2, Decor.Heart)].concat(
      ...[generateList(1, Decor.Diamond)]
    ),
  };
  // +1马  【绝影】黑桃、【爪黄飞电】红桃、【的卢】梅花、【骅骝】方块
  result["jueying"] = {
    name: "绝影",
    skin: "",
    des: "+1马",
    list: [...generateList(1, Decor.Spade)],
  };
  result["zhuahuangfeidian"] = {
    name: "爪黄飞电",
    skin: "",
    des: "+1马",
    list: [...generateList(1, Decor.Heart)],
  };
  result["dilu"] = {
    name: "的卢",
    skin: "",
    des: "+1马",
    list: [...generateList(1, Decor.Club)],
  };
  result["hualiu"] = {
    name: "骅骝",
    skin: "",
    des: "+1马",
    list: [...generateList(1, Decor.Diamond)],
  };
  // -1马  【大宛】黑桃、【赤兔】红桃、【紫骍】方块
  result["dawan"] = {
    name: "大宛",
    skin: "",
    des: "-1马",
    list: [...generateList(1, Decor.Spade)],
  };
  result["chitu"] = {
    name: "赤兔",
    skin: "",
    des: "-1马",
    list: [...generateList(1, Decor.Heart)],
  };
  result["zixing"] = {
    name: "紫骍",
    skin: "",
    des: "-1马",
    list: [...generateList(1, Decor.Diamond)],
  };
  // 【八卦阵】2张（黑桃、梅花）
  result["baguazhen"] = {
    name: "八卦阵",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)].concat(
      ...[generateList(1, Decor.Club)]
    ),
  };
  // 【藤甲】2张（黑桃、梅花）
  result["tengjia"] = {
    name: "藤甲",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)].concat(
      ...[generateList(1, Decor.Club)]
    ),
  };
  // 【白银狮子】梅花
  result["baiyinshizi"] = {
    name: "白银狮子",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Club)],
  };
  // 【仁王盾】梅花
  result["renwangdun"] = {
    name: "仁王盾",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Club)],
  };
  //  黑桃：【青釭剑】【雌雄双股剑】【青龙偃月刀】【丈八蛇矛】【古锭刀】【寒冰剑】
  result["qinggangjian"] = {
    name: "青釭剑",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)],
  };
  result["cixiongshuanggujian"] = {
    name: "雌雄双股剑",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)],
  };
  result["qinglongyanyuedao"] = {
    name: "青龙偃月刀",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)],
  };
  result["zhangbashemao"] = {
    name: "丈八蛇矛",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)],
  };
  result["gudingdao"] = {
    name: "古锭刀",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)],
  };
  result["hanbingjian"] = {
    name: "寒冰剑",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Spade)],
  };
  //  红桃：【麒麟弓】
  result["qilingong"] = {
    name: "麒麟弓",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Heart)],
  };
  // 【诸葛连弩】2张（梅花、方块）
  result["zhugeliannu"] = {
    name: "诸葛连弩",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Club)].concat(
      ...[generateList(1, Decor.Diamond)]
    ),
  };
  //  方块：【贯石斧】【方天画戟】【朱雀羽扇】
  result["guanshifu"] = {
    name: "贯石斧",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Diamond)],
  };
  result["fangtianhuaji"] = {
    name: "方天画戟",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Diamond)],
  };
  result["zhuqueyushan"] = {
    name: "朱雀羽扇",
    skin: "",
    des: "",
    list: [...generateList(1, Decor.Diamond)],
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

  return [
    {
      name: "神郭嘉",
      enName: "shenguojia",
      sex: "male",
      group: ["shen"],
      avatar: getCharacterImage("shenguojia", "l"),
      maxHp: 3,
      skills: [],
    },
    {
      name: "神郭嘉",
      enName: "shenguojia",
      sex: "male",
      group: ["shen"],
      avatar: getCharacterImage("shenguojia", "l"),
      maxHp: 3,
      skills: [],
    },
  ];
}

function gameInit() {
  const playerList = generateBasicCharacter().map((i) => new Player(i));
  const cardList = Card.$createCard("basic", generateBasicCard());
  return { playerList, cardList };
}

export { gameInit };
