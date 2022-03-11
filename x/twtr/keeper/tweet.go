package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kb0304/twtr/x/twtr/types"
)

func (k Keeper) AppendTweet(ctx sdk.Context, tweet types.Tweet) uint64 {
	// Get the current number of tweets in the store
	count := k.GetTweetCount(ctx)
	// Assign an ID to the tweet based on the number of tweets in the store
	tweet.Id = count
	// Get the store
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.TweetKey))
	// Convert the tweet ID into bytes
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, tweet.Id)
	// Marshal the tweet into bytes
	appendedValue := k.cdc.MustMarshal(&tweet)
	// Insert the tweet bytes using tweet ID as a key
	store.Set(byteKey, appendedValue)
	// Update the tweet count
	k.SetTweetCount(ctx, count+1)
	return count
}

func (k Keeper) GetTweetCount(ctx sdk.Context) uint64 {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.TweetCountKey))

	byteKey := []byte(types.TweetCountKey)

	bz := store.Get(byteKey)

	if bz == nil {
		return 0
	}
	// Convert the count into a uint64
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetTweetCount(ctx sdk.Context, count uint64) {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.TweetCountKey))

	byteKey := []byte(types.TweetCountKey)

	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	store.Set(byteKey, bz)
}

// GetAllTTweets returns all tweets
func (k Keeper) GetAllTweets(ctx sdk.Context) (list []types.Tweet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Tweet
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return list
}
