#!/usr/bin/env ts-node
// require("../lib/cli")
//  .execute(process.argv);

import DynuClient from "../lib/DynuClient";
let dynuClient = new DynuClient();

dynuClient.updateDDNSIp().then(res => console.log(res));
