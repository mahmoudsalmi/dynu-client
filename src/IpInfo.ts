import axios from "axios";

export interface IpInfoData {
  "ip": string;
  "hostname"?: string;
  "city"?: string;
  "region"?: string;
  "country"?: string;
  "loc"?: string;
  "org"?: string;
  "postal"?: string;
  "timezone"?: string;
  "readme"?: string;
}

const IP_INFO_URL = "http://ipinfo.io/json";
const ipInfoData = async () => (await axios.get<IpInfoData>(IP_INFO_URL)).data;

class IpInfo {
  constructor() {
  }

  async getPublicIpDetails(): Promise<IpInfoData> {
      return await ipInfoData();
  }

  async getPublicIp(): Promise<string> {
      return (await ipInfoData()).ip;
  }
}

export default IpInfo;
