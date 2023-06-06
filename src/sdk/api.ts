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

export const algodConfig = new AlgodConfiguration({
  apiKey: CONFIG.ALGO_NODE_API_TOKEN,
  basePath: CONFIG.ALGO_NODE_DAEMON,
});
export const indexerConfig = new IndexerConfiguration({
  apiKey: CONFIG.ALGO_NODE_API_TOKEN,
  basePath: CONFIG.ALGO_NODE_INDEXER,
});
const api = {
  algod: new AlgodDefaultApi(algodConfig),
  indexer: new IndexerDefaultApi(indexerConfig),
};

export default api;

logger("API Initialised");
