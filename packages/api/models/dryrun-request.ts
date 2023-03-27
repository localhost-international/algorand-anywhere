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
import { Account } from './account';
import { Application } from './application';
import { DryrunSource } from './dryrun-source';
/**
 * Request data type for dryrun endpoint. Given the Transactions and simulated ledger state upload, run TEAL scripts and return debugging information.
 * @export
 * @interface DryrunRequest
 */
export interface DryrunRequest {
    /**
     * 
     * @type {Array<DryrunSource>}
     * @memberof DryrunRequest
     */
    sources: Array<DryrunSource>;
    /**
     * Round is available to some TEAL scripts. Defaults to the current round on the network this algod is attached to.
     * @type {number}
     * @memberof DryrunRequest
     */
    round: number;
    /**
     * 
     * @type {Array<Account>}
     * @memberof DryrunRequest
     */
    accounts: Array<Account>;
    /**
     * ProtocolVersion specifies a specific version string to operate under, otherwise whatever the current protocol of the network this algod is running in.
     * @type {string}
     * @memberof DryrunRequest
     */
    protocolVersion: string;
    /**
     * LatestTimestamp is available to some TEAL scripts. Defaults to the latest confirmed timestamp this algod is attached to.
     * @type {number}
     * @memberof DryrunRequest
     */
    latestTimestamp: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof DryrunRequest
     */
    txns: Array<string>;
    /**
     * 
     * @type {Array<Application>}
     * @memberof DryrunRequest
     */
    apps: Array<Application>;
}
