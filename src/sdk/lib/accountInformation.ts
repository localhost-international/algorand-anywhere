import api from "../api";

export const accountInformation = async (account: string) =>
  await api.algod.accountInformation(account);
