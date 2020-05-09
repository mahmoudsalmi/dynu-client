let DynuDDNSUpdater = require("@mahmoudsalmi/dynu-ddns-updater").DynuDDNSUpdater;

new DynuDDNSUpdater()
  .getPublicIpDetails()
  .then(details => console.log(details));
