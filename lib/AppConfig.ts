// global config value
import {version, name as longAppName} from "../package.json";

const appName = longAppName.replace('@mahmoudsalmi/', '');
export {version, appName};

export interface AppConfigData {
  hostname: string;
  username: string;
  password: string;
}

export interface AppConfigOpts {
  passwordHashed: boolean;
}

const defaultConfig: AppConfigData = {
  hostname: "",
  username: "",
  password: ""
}

import {Logger, md5} from "./utils";
import * as inquirer from "inquirer";

export default class AppConfig {
  private config;

  constructor() {
    this.config = new (require('configstore'))(appName, defaultConfig, {globalConfigPath: true});
  }

  getConfig() {
    return {
      username: this.username,
      password: this.password,
      hostname: this.hostname
    };
  }

  updateConfig(appConfig: AppConfigData, opts: AppConfigOpts = {passwordHashed: true}): void {
    if (AppConfig.isConfigValid(appConfig)) {
      this.username = appConfig.username;
      this.password = opts.passwordHashed ? appConfig.password : md5(appConfig.password);
      this.hostname = appConfig.hostname;
    } else {
      throw `the input appConfig is not valid : ${appConfig}`
    }
  }

  async editConfig(): Promise<void> {
    const {username, password, hostname} = this;
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
    Object.assign(this, answers);
  }

  log(): void {
    Logger.log(this.config.all);
  }

  static isConfigValid(appConfigOpts: AppConfigData): boolean {
    return Boolean(appConfigOpts.hostname && appConfigOpts.username && appConfigOpts.password);
  }

  get valid(): boolean {
    return AppConfig.isConfigValid(this.getConfig());
  }

  get notValid(): boolean {
    return !this.valid;
  }

  get hostname(): string {
    return this.config.get('hostname')
  }

  set hostname(hostname: string) {
    this.config.set('hostname', hostname);
  }

  get username(): string {
    return this.config.get('username');
  }

  set username(username: string) {
    this.config.set('username', username);
  }

  get password(): string {
    return this.config.get('password');
  }

  set password(password: string) {
    this.config.set('password', md5(password));
  }
}
