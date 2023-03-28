import * as dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import { Configuration, DefaultApi } from "api";

export const config = new Configuration({
  apiKey: process.env.ALGO_NODE_API_KEY,
  basePath: process.env.ALGO_NODE_TESTNET,
});

export const api = new DefaultApi(config);

export const getGenesis = async () => {
  return await api.accountInformation(`${process.env.ALGO_DEBUG_WALLET}`);
};

console.log("React Native Algorand SDK", config);

getGenesis().then((result) => {
  console.log("Genesis", result);
});
