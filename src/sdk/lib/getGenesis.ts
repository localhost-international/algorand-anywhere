import api from "../api";

export const getGenesis = async () => await api.algod.getGenesis();
