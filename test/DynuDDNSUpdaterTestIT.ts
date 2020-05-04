import IpInfo, {IpInfoData} from "../lib/IpInfo";
import DynuDDNSUpdater from "../lib/DynuDDNSUpdater";

describe('IpInfo [ipInfo.io]', () => {
  let dynuDDNSUpdater = new DynuDDNSUpdater();

  it('get my public IP', () => {
    dynuDDNSUpdater.getPublicIpDetails()
      .then(ipInfoData => {
        expect(ipInfoData.ip).toMatch(/\d+\.\d+\.\d+\.\d+/);
      });
  });
});
