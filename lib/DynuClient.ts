import axios from "axios";

import AppConfig, {AppConfigData} from "./AppConfig";
import IpInfo from "./IpInfo";
import {DynuResponseDescription, dynuResponseDescription} from '../data/dynuResponseDescription'


export interface DynuClientResult {
  status: string,
  executionDate: Date;
  newip?: string;
  config?: AppConfigData;
  details: DynuResponseDescription;
}

const DYNU_API_URL = "http://api.dynu.com/nic/update";

export default class DynuClient {
  private config: AppConfig;
  private ipInfo: IpInfo;
  private readonly respDescs: DynuResponseDescription[];

  constructor() {
    this.config = new AppConfig();
    if (this.config.notValid) throw 'Please verify your config!';

    this.ipInfo = new IpInfo();
    this.respDescs = dynuResponseDescription;
  }

  private getDescription(response: string): DynuResponseDescription {
    const responseCode: string = response.split(" ")[0];
    for (const respDesc of this.respDescs) {
      if (respDesc.responseCode === responseCode) return {...respDesc, response};
    }
    return {
      code: "error",
      responseCode,
      description: `unknown response code [${responseCode}] !`,
      response
    }
  }

  async updateDDNSIp(): Promise<DynuClientResult> {
    const newIp = await this.ipInfo.getPublicIp();
    const result: string = (await axios.get(DYNU_API_URL, {
      params: {
        hostname: this.config.hostname,
        myip: newIp,
        username: this.config.username,
        password: this.config.password
      }
    })).data;

    let desc = this.getDescription(result);
    return {
      status: desc.code,
      executionDate: new Date(),
      newip: newIp,
      config: this.config.getConfig(),
      details: desc
    }
  }
}
