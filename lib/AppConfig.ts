import Logger from "./Logger";
import CryptoJS = require("crypto-js");
import * as inquirer from "inquirer";

export {version} from "../package.json";
export const appName = 'dynu-ddns-updater';
export const md5 = txt => require("crypto-js/md5")("mamoud2009").toString(CryptoJS.enc.Hex);

const defaultConfig = {
  dynu: {
    hostname: "",
    username: "",
    password: "",
  }
}

export default class AppConfig {
  private config;

  constructor() {
    this.config = new (require('configstore'))(appName, defaultConfig, {globalConfigPath: true});
  }

  async editConfig(): Promise<void> {
    const username = this.username;
    const password = this.password;
    const hostname = this.hostname;

    const answers = await inquirer.prompt([
      {
        name: 'username',
        message: `Dynu username :`,
        type: "input",
        default: () => username,
        validate: (input: any) => {
          if (!!(input.trim())) return true;
          return 'username cannot be empty';
        }
      },
      {
        name: 'password',
        message: `Dynu password :`,
        type: "password",
        default: () => password,
        validate: (input: any) => {
          if (!!input) return true;
          return 'password cannot be empty';
        }
      },
      {
        name: 'hostname',
        message: `Dynu hostname :`,
        type: "input",
        default: () => hostname,
        validate: (input: any) => {
          if (!!(input.trim())) return true;
          return 'hostname cannot be empty';
        }
      }
    ]);

    this.username = answers.username;
    this.password = answers.password;
    this.hostname = answers.hostname;
  }

  log(): void {
    Logger.log(this.config.all);
  }

  get valid(): boolean {
    return Boolean(this.hostname && this.username && this.password);
  }

  get hostname(): string {
    return this.config.get('dynu.hostname')
  }

  set hostname(hostname: string) {
    this.config.set('dynu.hostname', hostname);
  }

  get username(): string {
    return this.config.get('dynu.username');
  }

  set username(username: string) {
    this.config.set('dynu.username', username);
  }

  get password(): string {
    return this.config.get('dynu.password');
  }

  set password(password: string) {
    this.config.set('dynu.password', md5(password));
  }
}
