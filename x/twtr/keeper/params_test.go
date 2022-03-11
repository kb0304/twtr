package keeper_test

import (
	"testing"

	testkeeper "github.com/kb0304/twtr/testutil/keeper"
	"github.com/kb0304/twtr/x/twtr/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.TwtrKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
