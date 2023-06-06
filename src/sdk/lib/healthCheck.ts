import api from "../api";

export const healthCheck = async () => await api.algod.healthCheck();
