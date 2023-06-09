import {
  Configuration as AlgodConfiguration,
  DefaultApi as AlgodDefaultApi,
} from "../algod/index";

import {
  Configuration as IndexerConfiguration,
  DefaultApi as IndexerDefaultApi,
} from "../indexer/index";

import CONFIG from "./config";
import { logger } from "./utils/logger";

class Api {
  private algod: AlgodDefaultApi;
  private indexer: IndexerDefaultApi;

  constructor(
    algoNodeApiToken: string,
    algoNodeBaseUrl: string,
  ) {
    const algodConfig = new AlgodConfiguration({
      apiKey: algoNodeApiToken,
      basePath: `${algoNodeBaseUrl}/ps2`,
    });
    const indexerConfig = new IndexerConfiguration({
      apiKey: algoNodeApiToken,
      basePath: `${algoNodeBaseUrl}/idx2`,
    });

    this.algod = new AlgodDefaultApi(algodConfig);
    this.indexer = new IndexerDefaultApi(indexerConfig);
  }

  getAlgod() {
    return this.algod;
  }

  getIndexer() {
    return this.indexer;
  }
}

export default Api;

logger("API Initialised");
