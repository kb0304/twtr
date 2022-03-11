package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kb0304/twtr/x/twtr/types"
)

func (k msgServer) Follow(goCtx context.Context, msg *types.MsgFollow) (*types.MsgFollowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgFollowResponse{}, nil
}
