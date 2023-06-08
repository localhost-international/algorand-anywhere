import Api from "../api";
import { AssetHolding, AssetParams } from "../../algod";
import { Asset } from "../types";

export const getAssetsByIds = async (
  api: Api,
  assetIds: AssetHolding[]
): Promise<Asset[]> => {
  const assetsWithMetadata: Asset[] = [];
  await Promise.all(
    assetIds.map(async (asset) => {
      let assetDataCombined: Asset;
      try {
        const response = await api
          .getAlgod()
          .getAssetByID(`${asset["asset-id"]}`);
        const responseData = response as unknown as {
          data: { params: AssetParams };
        };
        const assetByIdData = responseData.data.params;
        assetDataCombined = {
          ...assetByIdData,
          ...asset,
        };
        console.log("\nassetsWithMetadata", assetDataCombined);
      } catch (err) {
        console.log("Error or nah?", err);
        // Error? Just return asset data
        assetDataCombined = { ...asset, error: JSON.stringify(err) };
      }
      assetsWithMetadata.push(assetDataCombined);
    })
  );
  return assetsWithMetadata;
};
