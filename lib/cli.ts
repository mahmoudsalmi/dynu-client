import AppConfig, {appName, version} from "./AppConfig";

import DynuDDNSUpdater from "./DynuDDNSUpdater";

import {Logger} from "./utils";
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
    .action(async () => {
      let appConfig = new AppConfig();
      if (!appConfig.valid) {
        await appConfig.editConfig();
      }
      new DynuDDNSUpdater()
        .updateDDNSIp()
        .then(
          res => {
            if (res.details.code === "ok")
              Logger.done("the IP of your DDNS is up to date.");
            if (res.details.code === "warning")
              Logger.warn("the IP of your DDNS is up to date.");
            if (res.details.code === "error" || res.details.code === "inputError" || res.details.code === "unknown" )
              Logger.error("the IP of your DDNS is up to date.");

            Logger.log(res);
          }
        );
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
