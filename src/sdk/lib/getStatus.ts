import api from "../api";

export const getStatus = async () => await api.algod.getStatus();
