package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kb0304/twtr/x/twtr/types"
)

func stringInSlice(a string, list []string) bool {
	for _, b := range list {
		if b == a {
			return true
		}
	}
	return false
}

func (k msgServer) Follow(goCtx context.Context, msg *types.MsgFollow) (*types.MsgFollowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	profile := k.GetOrCreateProfile(ctx, msg.Follower)
	if !stringInSlice(msg.Followee, profile.Followed) && msg.Followee != msg.Follower {
		profile.Followed = append(profile.Followed, msg.Followee)
		k.SetProfile(ctx, profile)
	}

	return &types.MsgFollowResponse{}, nil
}
