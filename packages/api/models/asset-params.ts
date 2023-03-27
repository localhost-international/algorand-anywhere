/* tslint:disable */
/* eslint-disable */
/**
 * Algod Testnet V3 API v2
 * V2 API endpoint for algod operations.
 *
 * OpenAPI spec version: 3.15.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * AssetParams specifies the parameters for an asset.  \\[apar\\] when part of an AssetConfig transaction.  Definition: data/transactions/asset.go : AssetParams
 * @export
 * @interface AssetParams
 */
export interface AssetParams {
    /**
     * The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.
     * @type {string}
     * @memberof AssetParams
     */
    creator: string;
    /**
     * \\[un\\] Name of a unit of this asset, as supplied by the creator.
     * @type {string}
     * @memberof AssetParams
     */
    unitName?: string;
    /**
     * \\[m\\] Address of account used to manage the keys of this asset and to destroy it.
     * @type {string}
     * @memberof AssetParams
     */
    manager?: string;
    /**
     * \\[am\\] A commitment to some unspecified asset metadata. The format of this metadata is up to the application.
     * @type {string}
     * @memberof AssetParams
     */
    metadataHash?: string;
    /**
     * Base64 encoded URL where more information about the asset can be retrieved.
     * @type {string}
     * @memberof AssetParams
     */
    urlB64?: string;
    /**
     * \\[au\\] URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.
     * @type {string}
     * @memberof AssetParams
     */
    url?: string;
    /**
     * \\[c\\] Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.
     * @type {string}
     * @memberof AssetParams
     */
    clawback?: string;
    /**
     * \\[df\\] Whether holdings of this asset are frozen by default.
     * @type {boolean}
     * @memberof AssetParams
     */
    defaultFrozen?: boolean;
    /**
     * Base64 encoded name of a unit of this asset, as supplied by the creator.
     * @type {string}
     * @memberof AssetParams
     */
    unitNameB64?: string;
    /**
     * \\[t\\] The total number of units of this asset.
     * @type {number}
     * @memberof AssetParams
     */
    total: number;
    /**
     * \\[f\\] Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.
     * @type {string}
     * @memberof AssetParams
     */
    freeze?: string;
    /**
     * \\[dc\\] The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).
     * @type {number}
     * @memberof AssetParams
     */
    decimals: number;
    /**
     * \\[an\\] Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.
     * @type {string}
     * @memberof AssetParams
     */
    name?: string;
    /**
     * \\[r\\] Address of account holding reserve (non-minted) units of this asset.
     * @type {string}
     * @memberof AssetParams
     */
    reserve?: string;
    /**
     * Base64 encoded name of this asset, as supplied by the creator.
     * @type {string}
     * @memberof AssetParams
     */
    nameB64?: string;
}
