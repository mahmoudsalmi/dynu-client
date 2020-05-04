import DynuDDNSUpdater from "./src/DynuDDNSUpdater";

export default DynuDDNSUpdater;

const dynuDDNSUpdater = new DynuDDNSUpdater();
dynuDDNSUpdater.getPublicIpDetails().then(ip => console.log(ip))
