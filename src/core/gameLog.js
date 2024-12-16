const LogConfig = {
  debug: {
    level: 1,
    color: "#2d8cf0",
  },
  info: {
    level: 2,
    color: "#909399",
  },
  warning: {
    level: 3,
    color: "#ff9900",
  },
  success: {
    level: 3,
    color: "#19be6b",
  },
  error: {
    level: 4,
    color: "#f03f14",
  },
};

function prettyPrint() {
  if (arguments.length === 2) {
    const [text, color] = Array.from(arguments);
    console.log(
      `%c ${text} `,
      `background:${color}; padding: 2px; border-radius: 4px;color: #fff;`
    );
  } else if (arguments.length === 3) {
    const [title, text, color] = Array.from(arguments);
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 4px 4px 0; color: ${color};`,
      "background:transparent"
    );
  } else {
    const args = Array.from(arguments);
    const color = args.at(-1);
    const str = args.slice(0, args.length - 1).join("");
    console.log(
      `%c ${str} %c`,
      `border:1px solid ${color}; padding: 1px; border-radius:4px; color: ${color};`,
      "background:transparent"
    );
  }
}
class GameLog {
  /**  level 0  */
  static log(...args) {
    console.log(...args);
  }

  /**  level 1  */
  static debug(...args) {
    prettyPrint(...args, LogConfig.debug.color);
  }

  /**  level 2  */
  static info(...args) {
    prettyPrint(...args, LogConfig.info.color);
  }

  /**  level 3  */
  static warning(...args) {
    prettyPrint(...args, LogConfig.warning.color);
  }

  /**  level 3  */
  static success(...args) {
    prettyPrint(...args, LogConfig.success.color);
  }

  /**  level 4  */
  static error(...args) {
    prettyPrint(...args, LogConfig.error.color);
  }
}
export default GameLog;
