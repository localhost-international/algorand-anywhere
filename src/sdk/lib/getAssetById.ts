import api from "../api";

export const getAssetById = async (assetId: number) =>
  await api.algod.getAssetByID(`${assetId}`);
