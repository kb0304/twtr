/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../twtr/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Tweet } from "../twtr/tweet";
import { Profile } from "../twtr/profile";

export const protobufPackage = "kb0304.twtr.twtr";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryTweetsRequest: object = {};

export const QueryTweetsRequest = {
  encode(
    message: QueryTweetsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTweetsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTweetsRequest } as QueryTweetsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTweetsRequest {
    const message = { ...baseQueryTweetsRequest } as QueryTweetsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTweetsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTweetsRequest>): QueryTweetsRequest {
    const message = { ...baseQueryTweetsRequest } as QueryTweetsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryTweetsResponse: object = {};

export const QueryTweetsResponse = {
  encode(
    message: QueryTweetsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Tweet) {
      Tweet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTweetsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTweetsResponse } as QueryTweetsResponse;
    message.Tweet = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Tweet.push(Tweet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTweetsResponse {
    const message = { ...baseQueryTweetsResponse } as QueryTweetsResponse;
    message.Tweet = [];
    if (object.Tweet !== undefined && object.Tweet !== null) {
      for (const e of object.Tweet) {
        message.Tweet.push(Tweet.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTweetsResponse): unknown {
    const obj: any = {};
    if (message.Tweet) {
      obj.Tweet = message.Tweet.map((e) => (e ? Tweet.toJSON(e) : undefined));
    } else {
      obj.Tweet = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTweetsResponse>): QueryTweetsResponse {
    const message = { ...baseQueryTweetsResponse } as QueryTweetsResponse;
    message.Tweet = [];
    if (object.Tweet !== undefined && object.Tweet !== null) {
      for (const e of object.Tweet) {
        message.Tweet.push(Tweet.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetProfileRequest: object = { user: "" };

export const QueryGetProfileRequest = {
  encode(
    message: QueryGetProfileRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProfileRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileRequest {
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    return message;
  },

  toJSON(message: QueryGetProfileRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileRequest>
  ): QueryGetProfileRequest {
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    return message;
  },
};

const baseQueryGetProfileResponse: object = {};

export const QueryGetProfileResponse = {
  encode(
    message: QueryGetProfileResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileResponse {
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileResponse>
  ): QueryGetProfileResponse {
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },
};

const baseQueryAllProfileRequest: object = {};

export const QueryAllProfileRequest = {
  encode(
    message: QueryAllProfileRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProfileRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfileRequest {
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProfileRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfileRequest>
  ): QueryAllProfileRequest {
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProfileResponse: object = {};

export const QueryAllProfileResponse = {
  encode(
    message: QueryAllProfileResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.profile) {
      Profile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProfileResponse,
    } as QueryAllProfileResponse;
    message.profile = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile.push(Profile.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfileResponse {
    const message = {
      ...baseQueryAllProfileResponse,
    } as QueryAllProfileResponse;
    message.profile = [];
    if (object.profile !== undefined && object.profile !== null) {
      for (const e of object.profile) {
        message.profile.push(Profile.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProfileResponse): unknown {
    const obj: any = {};
    if (message.profile) {
      obj.profile = message.profile.map((e) =>
        e ? Profile.toJSON(e) : undefined
      );
    } else {
      obj.profile = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfileResponse>
  ): QueryAllProfileResponse {
    const message = {
      ...baseQueryAllProfileResponse,
    } as QueryAllProfileResponse;
    message.profile = [];
    if (object.profile !== undefined && object.profile !== null) {
      for (const e of object.profile) {
        message.profile.push(Profile.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryFeedRequest: object = { user: "" };

export const QueryFeedRequest = {
  encode(message: QueryFeedRequest, writer: Writer = Writer.create()): Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryFeedRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeedRequest } as QueryFeedRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeedRequest {
    const message = { ...baseQueryFeedRequest } as QueryFeedRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    return message;
  },

  toJSON(message: QueryFeedRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeedRequest>): QueryFeedRequest {
    const message = { ...baseQueryFeedRequest } as QueryFeedRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    return message;
  },
};

const baseQueryFeedResponse: object = {};

export const QueryFeedResponse = {
  encode(message: QueryFeedResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Tweet) {
      Tweet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryFeedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeedResponse } as QueryFeedResponse;
    message.Tweet = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Tweet.push(Tweet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeedResponse {
    const message = { ...baseQueryFeedResponse } as QueryFeedResponse;
    message.Tweet = [];
    if (object.Tweet !== undefined && object.Tweet !== null) {
      for (const e of object.Tweet) {
        message.Tweet.push(Tweet.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryFeedResponse): unknown {
    const obj: any = {};
    if (message.Tweet) {
      obj.Tweet = message.Tweet.map((e) => (e ? Tweet.toJSON(e) : undefined));
    } else {
      obj.Tweet = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeedResponse>): QueryFeedResponse {
    const message = { ...baseQueryFeedResponse } as QueryFeedResponse;
    message.Tweet = [];
    if (object.Tweet !== undefined && object.Tweet !== null) {
      for (const e of object.Tweet) {
        message.Tweet.push(Tweet.fromPartial(e));
      }
    }
    return message;
  },
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

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kb0304.twtr.twtr.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Tweets(request: QueryTweetsRequest): Promise<QueryTweetsResponse> {
    const data = QueryTweetsRequest.encode(request).finish();
    const promise = this.rpc.request("kb0304.twtr.twtr.Query", "Tweets", data);
    return promise.then((data) => QueryTweetsResponse.decode(new Reader(data)));
  }

  Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse> {
    const data = QueryGetProfileRequest.encode(request).finish();
    const promise = this.rpc.request("kb0304.twtr.twtr.Query", "Profile", data);
    return promise.then((data) =>
      QueryGetProfileResponse.decode(new Reader(data))
    );
  }

  ProfileAll(
    request: QueryAllProfileRequest
  ): Promise<QueryAllProfileResponse> {
    const data = QueryAllProfileRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kb0304.twtr.twtr.Query",
      "ProfileAll",
      data
    );
    return promise.then((data) =>
      QueryAllProfileResponse.decode(new Reader(data))
    );
  }

  Feed(request: QueryFeedRequest): Promise<QueryFeedResponse> {
    const data = QueryFeedRequest.encode(request).finish();
    const promise = this.rpc.request("kb0304.twtr.twtr.Query", "Feed", data);
    return promise.then((data) => QueryFeedResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
