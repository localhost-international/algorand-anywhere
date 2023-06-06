const ALGO_NODE_API_TOKEN: string = `${process.env.ALGO_NODE_API_TOKEN}`;
const ALGO_NODE_SERVER: string = `${process.env.ALGO_NODE_MAINNET}`;

const ALGO_NODE_DAEMON: string = `${ALGO_NODE_SERVER}/ps2`;
const ALGO_NODE_INDEXER: string = `${ALGO_NODE_SERVER}/idx2`;
console.log("ALGO_NODE_DAEMON", ALGO_NODE_DAEMON);

const ALGO_TEST_ACCOUNT: string = `${process.env.ALGO_TEST_ACCOUNT}`;

const IPFS_GATEWAY: string = `${process.env.IPFS_GATEWAY}`;

export default {
  ALGO_NODE_API_TOKEN,
  ALGO_NODE_SERVER,
  ALGO_NODE_DAEMON,
  ALGO_NODE_INDEXER,
  ALGO_TEST_ACCOUNT,
  IPFS_GATEWAY,
};
