import {IpInfoData} from "../src/IpInfo";
import {AxiosResponse} from "axios";

export const IP_INFO_DATA_RESPONSE: AxiosResponse<IpInfoData> = {
  status: 200,
  statusText: "Ok",
  config: {},
  headers: {},
  data: {
    ip: '0.0.0.0',
    hostname: 'mock'
  }
};
