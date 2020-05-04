import IpInfo, {IpInfoData} from "../src/IpInfo";
import DynuDDNSUpdater from "../src/DynuDDNSUpdater";

describe('IpInfo [ipInfo.io]', () => {
  let dynuDDNSUpdater = new DynuDDNSUpdater();

  it('get my public IP', () => {
    dynuDDNSUpdater.getPublicIpDetails()
      .then(ipInfoData => {
        expect(ipInfoData.ip).toMatch(/\d+\.\d+\.\d+\.\d+/);
      });
  });
});
