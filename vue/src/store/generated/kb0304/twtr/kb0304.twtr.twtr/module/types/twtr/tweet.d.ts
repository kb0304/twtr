import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "kb0304.twtr.twtr";
export interface Tweet {
    creator: string;
    id: number;
    body: string;
}
export declare const Tweet: {
    encode(message: Tweet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Tweet;
    fromJSON(object: any): Tweet;
    toJSON(message: Tweet): unknown;
    fromPartial(object: DeepPartial<Tweet>): Tweet;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
