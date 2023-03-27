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
import { ApplicationParams } from './application-params';
/**
 * Application index and its parameters
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * \\[appidx\\] application index.
     * @type {number}
     * @memberof Application
     */
    id: number;
    /**
     * 
     * @type {ApplicationParams}
     * @memberof Application
     */
    params: ApplicationParams;
}
