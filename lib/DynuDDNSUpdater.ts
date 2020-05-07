import IpInfo, {IpInfoData} from "./IpInfo";

export default class DynuDDNSUpdater {
  private ipInfo: IpInfo;

  constructor() {
    this.ipInfo = new IpInfo();
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
