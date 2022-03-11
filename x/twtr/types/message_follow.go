package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgFollow = "follow"

var _ sdk.Msg = &MsgFollow{}

func NewMsgFollow(follower string, followee string) *MsgFollow {
	return &MsgFollow{
		Follower: follower,
		Followee: followee,
	}
}

func (msg *MsgFollow) Route() string {
	return RouterKey
}

func (msg *MsgFollow) Type() string {
	return TypeMsgFollow
}

func (msg *MsgFollow) GetSigners() []sdk.AccAddress {
	follower, err := sdk.AccAddressFromBech32(msg.Follower)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{follower}
}

func (msg *MsgFollow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgFollow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Follower)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid follower address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(msg.Followee)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid followee address (%s)", err)
	}
	return nil
}
