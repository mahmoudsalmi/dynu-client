const chalk = require('chalk');
import CryptoJS = require("crypto-js");

export function md5(txt) {
  return require("crypto-js/md5")(txt).toString(CryptoJS.enc.Hex);
}

export class Logger {
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
