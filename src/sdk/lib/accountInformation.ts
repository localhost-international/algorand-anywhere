import Api from "../api";

export const accountInformation = async (api: Api, account: string) =>
  await api.getAlgod().accountInformation(account);
