import Api from "../api";

export const getTransactions = async (api: Api, account: string) => {
  return await api.getIndexer().lookupAccountTransactions(account);
};
