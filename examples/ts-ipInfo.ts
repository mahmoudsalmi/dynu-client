import {DynuDDNSUpdater, IpInfoData} from "@mahmoudsalmi/dynu-ddns-updater";

new DynuDDNSUpdater()
  .getPublicIpDetails()
  .then(
    (details: IpInfoData) => {
      console.log(details.ip);
    }
  );
