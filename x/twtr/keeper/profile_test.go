package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/kb0304/twtr/testutil/keeper"
	"github.com/kb0304/twtr/testutil/nullify"
	"github.com/kb0304/twtr/x/twtr/keeper"
	"github.com/kb0304/twtr/x/twtr/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNProfile(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Profile {
	items := make([]types.Profile, n)
	for i := range items {
		items[i].User = strconv.Itoa(i)

		keeper.SetProfile(ctx, items[i])
	}
	return items
}

func TestProfileGet(t *testing.T) {
	keeper, ctx := keepertest.TwtrKeeper(t)
	items := createNProfile(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetProfile(ctx,
			item.User,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestProfileRemove(t *testing.T) {
	keeper, ctx := keepertest.TwtrKeeper(t)
	items := createNProfile(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProfile(ctx,
			item.User,
		)
		_, found := keeper.GetProfile(ctx,
			item.User,
		)
		require.False(t, found)
	}
}

func TestProfileGetAll(t *testing.T) {
	keeper, ctx := keepertest.TwtrKeeper(t)
	items := createNProfile(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllProfile(ctx)),
	)
}
