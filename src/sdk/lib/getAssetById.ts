import Api from "../api";

export const getAssetById = async (api: Api, assetId: number) =>
  await api.getAlgod().getAssetByID(`${assetId}`);
