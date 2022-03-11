import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../twtr/params";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Tweet } from "../twtr/tweet";
import { Profile } from "../twtr/profile";
export declare const protobufPackage = "kb0304.twtr.twtr";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryTweetsRequest {
    /** Adding pagination to request */
    pagination: PageRequest | undefined;
}
export interface QueryTweetsResponse {
    /** Returning a list of tweets */
    Tweet: Tweet[];
    /** Adding pagination to response */
    pagination: PageResponse | undefined;
}
export interface QueryGetProfileRequest {
    user: string;
}
export interface QueryGetProfileResponse {
    profile: Profile | undefined;
}
export interface QueryAllProfileRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllProfileResponse {
    profile: Profile[];
    pagination: PageResponse | undefined;
}
export interface QueryFeedRequest {
    user: string;
}
export interface QueryFeedResponse {
    Tweet: Tweet[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryTweetsRequest: {
    encode(message: QueryTweetsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryTweetsRequest;
    fromJSON(object: any): QueryTweetsRequest;
    toJSON(message: QueryTweetsRequest): unknown;
    fromPartial(object: DeepPartial<QueryTweetsRequest>): QueryTweetsRequest;
};
export declare const QueryTweetsResponse: {
    encode(message: QueryTweetsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryTweetsResponse;
    fromJSON(object: any): QueryTweetsResponse;
    toJSON(message: QueryTweetsResponse): unknown;
    fromPartial(object: DeepPartial<QueryTweetsResponse>): QueryTweetsResponse;
};
export declare const QueryGetProfileRequest: {
    encode(message: QueryGetProfileRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProfileRequest;
    fromJSON(object: any): QueryGetProfileRequest;
    toJSON(message: QueryGetProfileRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetProfileRequest>): QueryGetProfileRequest;
};
export declare const QueryGetProfileResponse: {
    encode(message: QueryGetProfileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProfileResponse;
    fromJSON(object: any): QueryGetProfileResponse;
    toJSON(message: QueryGetProfileResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetProfileResponse>): QueryGetProfileResponse;
};
export declare const QueryAllProfileRequest: {
    encode(message: QueryAllProfileRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProfileRequest;
    fromJSON(object: any): QueryAllProfileRequest;
    toJSON(message: QueryAllProfileRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllProfileRequest>): QueryAllProfileRequest;
};
export declare const QueryAllProfileResponse: {
    encode(message: QueryAllProfileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProfileResponse;
    fromJSON(object: any): QueryAllProfileResponse;
    toJSON(message: QueryAllProfileResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllProfileResponse>): QueryAllProfileResponse;
};
export declare const QueryFeedRequest: {
    encode(message: QueryFeedRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryFeedRequest;
    fromJSON(object: any): QueryFeedRequest;
    toJSON(message: QueryFeedRequest): unknown;
    fromPartial(object: DeepPartial<QueryFeedRequest>): QueryFeedRequest;
};
export declare const QueryFeedResponse: {
    encode(message: QueryFeedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryFeedResponse;
    fromJSON(object: any): QueryFeedResponse;
    toJSON(message: QueryFeedResponse): unknown;
    fromPartial(object: DeepPartial<QueryFeedResponse>): QueryFeedResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Tweets items. */
    Tweets(request: QueryTweetsRequest): Promise<QueryTweetsResponse>;
    /** Queries a Profile by index. */
    Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse>;
    /** Queries a list of Profile items. */
    ProfileAll(request: QueryAllProfileRequest): Promise<QueryAllProfileResponse>;
    /** Queries a list of Feed items. */
    Feed(request: QueryFeedRequest): Promise<QueryFeedResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Tweets(request: QueryTweetsRequest): Promise<QueryTweetsResponse>;
    Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse>;
    ProfileAll(request: QueryAllProfileRequest): Promise<QueryAllProfileResponse>;
    Feed(request: QueryFeedRequest): Promise<QueryFeedResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
