import Api from "../api";

export const getStatus = async (api: Api) => await api.getAlgod().getStatus();
