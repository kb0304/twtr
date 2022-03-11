/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "kb0304.twtr.twtr";
const baseProfile = { user: "", followed: "", tweetHead: 0 };
export const Profile = {
    encode(message, writer = Writer.create()) {
        if (message.user !== "") {
            writer.uint32(10).string(message.user);
        }
        for (const v of message.followed) {
            writer.uint32(18).string(v);
        }
        if (message.tweetHead !== 0) {
            writer.uint32(24).uint64(message.tweetHead);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProfile };
        message.followed = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.followed.push(reader.string());
                    break;
                case 3:
                    message.tweetHead = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseProfile };
        message.followed = [];
        if (object.user !== undefined && object.user !== null) {
            message.user = String(object.user);
        }
        else {
            message.user = "";
        }
        if (object.followed !== undefined && object.followed !== null) {
            for (const e of object.followed) {
                message.followed.push(String(e));
            }
        }
        if (object.tweetHead !== undefined && object.tweetHead !== null) {
            message.tweetHead = Number(object.tweetHead);
        }
        else {
            message.tweetHead = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user);
        if (message.followed) {
            obj.followed = message.followed.map((e) => e);
        }
        else {
            obj.followed = [];
        }
        message.tweetHead !== undefined && (obj.tweetHead = message.tweetHead);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseProfile };
        message.followed = [];
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        }
        else {
            message.user = "";
        }
        if (object.followed !== undefined && object.followed !== null) {
            for (const e of object.followed) {
                message.followed.push(e);
            }
        }
        if (object.tweetHead !== undefined && object.tweetHead !== null) {
            message.tweetHead = object.tweetHead;
        }
        else {
            message.tweetHead = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
