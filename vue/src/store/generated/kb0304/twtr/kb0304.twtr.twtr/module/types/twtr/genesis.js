/* eslint-disable */
import { Params } from "../twtr/params";
import { Profile } from "../twtr/profile";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "kb0304.twtr.twtr";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.profileList) {
            Profile.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.profileList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.profileList.push(Profile.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.profileList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.profileList !== undefined && object.profileList !== null) {
            for (const e of object.profileList) {
                message.profileList.push(Profile.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.profileList) {
            obj.profileList = message.profileList.map((e) => e ? Profile.toJSON(e) : undefined);
        }
        else {
            obj.profileList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.profileList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.profileList !== undefined && object.profileList !== null) {
            for (const e of object.profileList) {
                message.profileList.push(Profile.fromPartial(e));
            }
        }
        return message;
    },
};
