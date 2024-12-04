const LogConfig = {
  log: {
    level: 0,
    color: "",
  },
  debug: {
    level: 1,
    color: "#168cff",
  },
  info: {
    level: 2,
    color: "#86909c",
  },
  warn: {
    level: 3,
    color: "#E6A23C",
  },
  success: {
    level: 3,
    color: "#67C23A",
  },
  error: {
    level: 4,
    color: "#ff0000",
  },
};
function prettyPrint(title, text, color) {
  if (!color) {
    console.log(text);
  } else {
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
      "background:transparent"
    );
  }
}
class GameLog {
  /**  level 0  */
  static log(...args) {
    if (logLevel > LogConfig.log.level) {
      return;
    }
    if (args.length === 2) {
      prettyPrint(args[0], args[1], LogConfig.log.color);
    } else {
      prettyPrint("log", args.join(""), LogConfig.log.color);
    }
  }

  /**  level 1  */
  static debug(...args) {
    if (logLevel > LogConfig.debug.level) {
      return;
    }
    if (args.length === 2) {
      prettyPrint(args[0], args[1], LogConfig.debug.color);
    } else {
      prettyPrint("Debug", args.join(""), LogConfig.debug.color);
    }
  }

  /**  level 2  */
  static info(...args) {
    if (logLevel > LogConfig.info.level) {
      return;
    }
    if (args.length === 2) {
      prettyPrint(args[0], args[1], LogConfig.info.color);
    } else {
      prettyPrint("Info", args.join(""), LogConfig.info.color);
    }
  }

  /**  level 3  */
  static warn(...args) {
    if (logLevel > LogConfig.warn.level) {
      return;
    }
    if (args.length === 2) {
      prettyPrint(args[0], args[1], LogConfig.warn.color);
    } else {
      prettyPrint("Warn", args.join(""), LogConfig.warn.color);
    }
  }

  /**  level 3  */
  static success(...args) {
    if (logLevel > LogConfig.success.level) {
      return;
    }
    if (args.length === 2) {
      prettyPrint(args[0], args[1], LogConfig.success.color);
    } else {
      prettyPrint("Success", args.join(""), LogConfig.success.color);
    }
  }

  /**  level 4  */
  static error(...args) {
    if (logLevel > LogConfig.error.level) {
      return;
    }
    if (args.length === 2) {
      prettyPrint(args[0], args[1], LogConfig.error.color);
    } else {
      prettyPrint("Error", args.join(""), LogConfig.error.color);
    }
  }

  /**  level Infinity  */
  static prettyLog(title, text, color) {
    prettyPrint(title, text, color);
  }
}
export default GameLog;

const logLevel = 0;
