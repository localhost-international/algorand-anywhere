import Api from "../api";

export const getGenesis = async (api: Api) => await api.getAlgod().getGenesis();
