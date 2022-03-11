import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kb0304.twtr.twtr";
export interface MsgCreateTweet {
    creator: string;
    body: string;
}
export interface MsgCreateTweetResponse {
    id: number;
}
export interface MsgFollow {
    follower: string;
    followee: string;
}
export interface MsgFollowResponse {
}
export declare const MsgCreateTweet: {
    encode(message: MsgCreateTweet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTweet;
    fromJSON(object: any): MsgCreateTweet;
    toJSON(message: MsgCreateTweet): unknown;
    fromPartial(object: DeepPartial<MsgCreateTweet>): MsgCreateTweet;
};
export declare const MsgCreateTweetResponse: {
    encode(message: MsgCreateTweetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTweetResponse;
    fromJSON(object: any): MsgCreateTweetResponse;
    toJSON(message: MsgCreateTweetResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTweetResponse>): MsgCreateTweetResponse;
};
export declare const MsgFollow: {
    encode(message: MsgFollow, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFollow;
    fromJSON(object: any): MsgFollow;
    toJSON(message: MsgFollow): unknown;
    fromPartial(object: DeepPartial<MsgFollow>): MsgFollow;
};
export declare const MsgFollowResponse: {
    encode(_: MsgFollowResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFollowResponse;
    fromJSON(_: any): MsgFollowResponse;
    toJSON(_: MsgFollowResponse): unknown;
    fromPartial(_: DeepPartial<MsgFollowResponse>): MsgFollowResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateTweet(request: MsgCreateTweet): Promise<MsgCreateTweetResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    Follow(request: MsgFollow): Promise<MsgFollowResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateTweet(request: MsgCreateTweet): Promise<MsgCreateTweetResponse>;
    Follow(request: MsgFollow): Promise<MsgFollowResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
