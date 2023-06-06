import api from "../api";

export const getTransactions = async (account: string) => {
  return await api.indexer.lookupAccountTransactions(account);
};
