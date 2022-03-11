package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kb0304/twtr/x/twtr/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Feed(goCtx context.Context, req *types.QueryFeedRequest) (*types.QueryFeedResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	profile := k.GetOrCreateProfile(ctx, req.User)

	tweets := k.GetAllTweets(ctx)

	var feed []*types.Tweet

	// Can be optimised for time & memory complexity,
	for i := 0; i < len(tweets); i++ {
		tweet := tweets[i]
		if stringInSlice(tweet.Creator, profile.Followed) {
			feed = append(feed, &tweet)
		}
	}

	// if err != nil {
	// 	return nil, status.Error(codes.Internal, err.Error())
	// }
	return &types.QueryFeedResponse{Tweet: feed}, nil
}
