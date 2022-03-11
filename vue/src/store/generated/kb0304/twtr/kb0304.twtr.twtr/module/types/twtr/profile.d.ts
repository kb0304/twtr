import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "kb0304.twtr.twtr";
export interface Profile {
    user: string;
    followed: string[];
    tweetHead: number;
}
export declare const Profile: {
    encode(message: Profile, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Profile;
    fromJSON(object: any): Profile;
    toJSON(message: Profile): unknown;
    fromPartial(object: DeepPartial<Profile>): Profile;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
