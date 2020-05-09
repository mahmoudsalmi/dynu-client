import IpInfo, {IpInfoData} from "./IpInfo";
import AppConfig, {version, AppConfigData, AppConfigOpts} from "./AppConfig";
import DynuClient, {DynuClientResult} from "./DynuClient";

export default class DynuDDNSUpdater {
  private ipInfo: IpInfo;
  private config: AppConfig;

  constructor() {
    this.ipInfo = new IpInfo();
    this.config = new AppConfig();
  }

  /**
   * Get the current version of DynuDDNSUpdater
   *
   * @returns {string} current version of DynuDDNSUpdater
   */
  static version(): string {
    return version;
  }

  /**
   * Verify if the current config is valid (or not)
   *
   * @returns {boolean} true if current config is valid
   */
  isConfigValid(): boolean {
    return this.config.valid;
  }

  /**
   * Get the current config stored by configStore.
   * Example :
   * ```json
   * {
   *   "hostname": "myddns.dynu.com",
   *   "username": "_username_",
   *   "password": "_md5_hashed_password_"
   * }
   * ```
   * @returns {AppConfigData} the current config
   */
  getConfig(): AppConfigData {
    return this.config.getConfig();
  }

  /**
   * Update current config with newConfig.
   * Options :
   *   -  *passwordHashed* : the new password is hashed (or not)
   *                       : true if newConfig.password is md5 hashed
   *                       : (default) true
   *
   * @param newConfig {AppConfigData}
   * @param opts {AppConfigOpts}
   * @throws error if newConfig is not valid
   */
  updateConfig(newConfig: AppConfigData, opts: AppConfigOpts): void {
    this.config.updateConfig(newConfig, opts);
  }

  /**
   * Update DDNS IP adress
   *
   * @returns {Promise<DynuClientResult>} detail of execution
   * @throws error if current config is not valid
   */
  updateDDNSIp(): Promise<DynuClientResult> {
    const dynuClient = new DynuClient();
    return dynuClient.updateDDNSIp();
  }

  /**
   * Get public ip Details based on [ipInfo.io](http://ipinfo.io/json)
   *
   * @returns {Promise<IpInfoData>}
   */
  getPublicIpDetails(): Promise<IpInfoData> {
    return this.ipInfo.getPublicIpDetails();
  }
}
