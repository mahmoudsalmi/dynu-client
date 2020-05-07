import AppConfig, {appName, version} from "./AppConfig";

import DynuDDNSUpdater from "./DynuDDNSUpdater";
import Logger from "./Logger";

import {program} from "commander";

export function execute(args) {
  // 00 - General config
  program
    .name(appName)
    .version(version, '-v, --version')
    .usage("[options] <command>")
    .option("-s, --silent", "activate silent mode", false);

  // 01 - Config command
  program
    .command('config')
    .alias('c')
    .description('show/edit credentials config')
    .option("-e, --edit", "edit config", false)
    .action(async (cmd) => {
      let appConfig = new AppConfig();
      if (!appConfig.valid || cmd.edit) {
        await appConfig.editConfig();
        Logger.warn('config updated :')
        appConfig.log();
      } else {
        Logger.done('config details :')
        appConfig.log();
      }
    });

  // 02 - Dynu command
  program
    .command('dynu')
    .alias('d')
    .description('update dynu ddns ip')
    .action(() => {
      Logger.warn("Not implemented !")
    });

  // 03 - public-ip command
  program
    .command('public-ip')
    .alias('i')
    .description('get current public ip based on ipinfo.io')
    .action(() => {
      new DynuDDNSUpdater()
        .getPublicIpDetails()
        .then(
          details => {
            if (program.silent) {
              Logger.log(details.ip);
            } else {
              Logger.done("Details of public IP :")
              Logger.log(details);
            }
          },
          error => {
            Logger.error(`impossible to get public ip ! Cause : ${error}`);
          }
        );
    });

  // 04 - RUN
  program.parse(args);
}
