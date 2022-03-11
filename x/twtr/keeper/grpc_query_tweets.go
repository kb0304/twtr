package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/kb0304/twtr/x/twtr/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Tweets(c context.Context, req *types.QueryTweetsRequest) (*types.QueryTweetsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tweets []*types.Tweet

	ctx := sdk.UnwrapSDKContext(c)
	store := ctx.KVStore(k.storeKey)

	tweetStore := prefix.NewStore(store, []byte(types.TweetKey))
	pageRes, err := query.Paginate(tweetStore, req.Pagination, func(key []byte, value []byte) error {
		var tweet types.Tweet
		if err := k.cdc.Unmarshal(value, &tweet); err != nil {
			return err
		}
		tweets = append(tweets, &tweet)
		return nil
	})
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &types.QueryTweetsResponse{Tweet: tweets, Pagination: pageRes}, nil
}
