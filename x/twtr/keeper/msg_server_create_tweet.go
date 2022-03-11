package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kb0304/twtr/x/twtr/types"
)

func (k msgServer) CreateTweet(goCtx context.Context, msg *types.MsgCreateTweet) (*types.MsgCreateTweetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	var tweet = types.Tweet{
		Creator: msg.Creator,
		Body:    msg.Body,
	}

	id := k.AppendTweet(ctx, tweet)

	return &types.MsgCreateTweetResponse{Id: id}, nil
}
