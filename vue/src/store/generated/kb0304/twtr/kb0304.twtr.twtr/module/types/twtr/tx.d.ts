import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kb0304.twtr.twtr";
export interface MsgCreateTweet {
    creator: string;
    body: string;
}
export interface MsgCreateTweetResponse {
}
export declare const MsgCreateTweet: {
    encode(message: MsgCreateTweet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTweet;
    fromJSON(object: any): MsgCreateTweet;
    toJSON(message: MsgCreateTweet): unknown;
    fromPartial(object: DeepPartial<MsgCreateTweet>): MsgCreateTweet;
};
export declare const MsgCreateTweetResponse: {
    encode(_: MsgCreateTweetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTweetResponse;
    fromJSON(_: any): MsgCreateTweetResponse;
    toJSON(_: MsgCreateTweetResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateTweetResponse>): MsgCreateTweetResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateTweet(request: MsgCreateTweet): Promise<MsgCreateTweetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateTweet(request: MsgCreateTweet): Promise<MsgCreateTweetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
