/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "kb0304.twtr.twtr";
const baseMsgCreateTweet = { creator: "", body: "" };
export const MsgCreateTweet = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.body !== "") {
            writer.uint32(18).string(message.body);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTweet };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.body = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTweet };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = String(object.body);
        }
        else {
            message.body = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.body !== undefined && (obj.body = message.body);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTweet };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        else {
            message.body = "";
        }
        return message;
    },
};
const baseMsgCreateTweetResponse = { id: 0 };
export const MsgCreateTweetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTweetResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTweetResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTweetResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgFollow = { follower: "", followee: "" };
export const MsgFollow = {
    encode(message, writer = Writer.create()) {
        if (message.follower !== "") {
            writer.uint32(10).string(message.follower);
        }
        if (message.followee !== "") {
            writer.uint32(18).string(message.followee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgFollow };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.follower = reader.string();
                    break;
                case 2:
                    message.followee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgFollow };
        if (object.follower !== undefined && object.follower !== null) {
            message.follower = String(object.follower);
        }
        else {
            message.follower = "";
        }
        if (object.followee !== undefined && object.followee !== null) {
            message.followee = String(object.followee);
        }
        else {
            message.followee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.follower !== undefined && (obj.follower = message.follower);
        message.followee !== undefined && (obj.followee = message.followee);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgFollow };
        if (object.follower !== undefined && object.follower !== null) {
            message.follower = object.follower;
        }
        else {
            message.follower = "";
        }
        if (object.followee !== undefined && object.followee !== null) {
            message.followee = object.followee;
        }
        else {
            message.followee = "";
        }
        return message;
    },
};
const baseMsgFollowResponse = {};
export const MsgFollowResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgFollowResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgFollowResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgFollowResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateTweet(request) {
        const data = MsgCreateTweet.encode(request).finish();
        const promise = this.rpc.request("kb0304.twtr.twtr.Msg", "CreateTweet", data);
        return promise.then((data) => MsgCreateTweetResponse.decode(new Reader(data)));
    }
    Follow(request) {
        const data = MsgFollow.encode(request).finish();
        const promise = this.rpc.request("kb0304.twtr.twtr.Msg", "Follow", data);
        return promise.then((data) => MsgFollowResponse.decode(new Reader(data)));
    }
}
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
