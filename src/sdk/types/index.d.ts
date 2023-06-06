import type { AssetHolding, AssetParams } from "../../algod/index";

export interface AssetArcData {
  name: string;
  decimals: number;
  description: string;
  image: string;
  image_integrity: string;
  image_mimetype: string;
  unitName: string;
  assetName: string;
  properties: {
    creator: {
      name: string;
      description: string;
      address: string;
    };
    royalties: [
      {
        name: string;
        addr: string;
        share: number;
      }
    ];
    collection: {
      name: string;
    };
    keyWords: string[];
    publisher: string;
    itemListElement: number;
    numberOfItems: number;
    arc69: {
      standard: string;
      attributes: string[];
    };
  };
}

export interface AssetMediaData {
  media: {
    type: string;
    remote_uri: string;
    local_uri?: string;
  };
}

export interface Asset extends Partial<AssetParams>, Partial<AssetHolding> {
  metadata?: Partial<AssetArcData> | Partial<AssetMediaData>;
  error?: unknown;
}
