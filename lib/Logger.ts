const chalk = require('chalk');

export default class Logger {
  static log(msg) {
    console.log(msg);
  }

  static done(msg) {
    console.log(chalk`{bgGreen.black.bold  DONE } ${msg}`);
  }

  static error(msg) {
    console.log(chalk`{bgRed.black.bold  ERROR } ${msg}`);
  }

  static warn(msg) {
    console.log(chalk`{bgYellow.black.bold  WARN } ${msg}`);
  }
}
