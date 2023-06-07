import Api from "../api";

export const healthCheck = async (api: Api) => await api.getAlgod().healthCheck();
