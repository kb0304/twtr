/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "kb0304.twtr.twtr";

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

export interface MsgFollowResponse {}

const baseMsgCreateTweet: object = { creator: "", body: "" };

export const MsgCreateTweet = {
  encode(message: MsgCreateTweet, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTweet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTweet } as MsgCreateTweet;
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

  fromJSON(object: any): MsgCreateTweet {
    const message = { ...baseMsgCreateTweet } as MsgCreateTweet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTweet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTweet>): MsgCreateTweet {
    const message = { ...baseMsgCreateTweet } as MsgCreateTweet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseMsgCreateTweetResponse: object = { id: 0 };

export const MsgCreateTweetResponse = {
  encode(
    message: MsgCreateTweetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTweetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTweetResponse } as MsgCreateTweetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTweetResponse {
    const message = { ...baseMsgCreateTweetResponse } as MsgCreateTweetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTweetResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTweetResponse>
  ): MsgCreateTweetResponse {
    const message = { ...baseMsgCreateTweetResponse } as MsgCreateTweetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgFollow: object = { follower: "", followee: "" };

export const MsgFollow = {
  encode(message: MsgFollow, writer: Writer = Writer.create()): Writer {
    if (message.follower !== "") {
      writer.uint32(10).string(message.follower);
    }
    if (message.followee !== "") {
      writer.uint32(18).string(message.followee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFollow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFollow } as MsgFollow;
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

  fromJSON(object: any): MsgFollow {
    const message = { ...baseMsgFollow } as MsgFollow;
    if (object.follower !== undefined && object.follower !== null) {
      message.follower = String(object.follower);
    } else {
      message.follower = "";
    }
    if (object.followee !== undefined && object.followee !== null) {
      message.followee = String(object.followee);
    } else {
      message.followee = "";
    }
    return message;
  },

  toJSON(message: MsgFollow): unknown {
    const obj: any = {};
    message.follower !== undefined && (obj.follower = message.follower);
    message.followee !== undefined && (obj.followee = message.followee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFollow>): MsgFollow {
    const message = { ...baseMsgFollow } as MsgFollow;
    if (object.follower !== undefined && object.follower !== null) {
      message.follower = object.follower;
    } else {
      message.follower = "";
    }
    if (object.followee !== undefined && object.followee !== null) {
      message.followee = object.followee;
    } else {
      message.followee = "";
    }
    return message;
  },
};

const baseMsgFollowResponse: object = {};

export const MsgFollowResponse = {
  encode(_: MsgFollowResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFollowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFollowResponse } as MsgFollowResponse;
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

  fromJSON(_: any): MsgFollowResponse {
    const message = { ...baseMsgFollowResponse } as MsgFollowResponse;
    return message;
  },

  toJSON(_: MsgFollowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgFollowResponse>): MsgFollowResponse {
    const message = { ...baseMsgFollowResponse } as MsgFollowResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateTweet(request: MsgCreateTweet): Promise<MsgCreateTweetResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Follow(request: MsgFollow): Promise<MsgFollowResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateTweet(request: MsgCreateTweet): Promise<MsgCreateTweetResponse> {
    const data = MsgCreateTweet.encode(request).finish();
    const promise = this.rpc.request(
      "kb0304.twtr.twtr.Msg",
      "CreateTweet",
      data
    );
    return promise.then((data) =>
      MsgCreateTweetResponse.decode(new Reader(data))
    );
  }

  Follow(request: MsgFollow): Promise<MsgFollowResponse> {
    const data = MsgFollow.encode(request).finish();
    const promise = this.rpc.request("kb0304.twtr.twtr.Msg", "Follow", data);
    return promise.then((data) => MsgFollowResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
