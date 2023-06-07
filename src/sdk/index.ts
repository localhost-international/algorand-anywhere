import Api from "./api";

import { accountInformation } from "./lib/accountInformation";
import { getAssetById } from "./lib/getAssetById";
import { getGenesis } from "./lib/getGenesis";
import { getStatus } from "./lib/getStatus";
import { getTransactions } from "./lib/getTransactions";
import { healthCheck } from "./lib/healthCheck";

export default class AlgorandAnywhere {
  private api: Api;
  constructor(
    algoNodeApiToken: string,
    algoNodeDaemonUrl: string,
    algoNodeIndexerUrl: string
  ) {
    this.api = new Api(algoNodeApiToken, algoNodeDaemonUrl, algoNodeIndexerUrl);
  }
  accountInformation(account: string) {
    return accountInformation(this.api, account);
  }
  getAssetById(assetId: number) {
    return getAssetById(this.api, assetId);
  }
  getGenesis() {
    return getGenesis(this.api);
  }
  getStatus() {
    return getStatus(this.api);
  }
  getTransactions(account: string) {
    return getTransactions(this.api, account);
  }
  healthCheck() {
    return healthCheck(this.api);
  }
}
