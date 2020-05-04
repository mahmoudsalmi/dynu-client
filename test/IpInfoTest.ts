import IpInfo, {IpInfoData} from "../lib/IpInfo";
import axios, {AxiosResponse} from "axios";
import {mocked} from "ts-jest/utils";
import {IP_INFO_DATA_RESPONSE} from "./mockData";

const ipInfo = new IpInfo();
jest.mock('axios');

describe('IpInfo [axios mocked] : get my public IP', () => {

  mocked(axios.get).mockResolvedValue(IP_INFO_DATA_RESPONSE);

  it('without detail', () => {
    ipInfo.getPublicIp()
      .then(ip => expect(ip).toBe('0.0.0.0'));
  });

  it('with detail', () => {
    ipInfo.getPublicIpDetails()
      .then(ipInfoData => expect(ipInfoData).toStrictEqual({
        ip: '0.0.0.0',
        hostname: 'mock'
      }));
  });

});

