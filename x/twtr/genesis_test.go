package twtr_test

import (
	"testing"

	keepertest "github.com/kb0304/twtr/testutil/keeper"
	"github.com/kb0304/twtr/testutil/nullify"
	"github.com/kb0304/twtr/x/twtr"
	"github.com/kb0304/twtr/x/twtr/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TwtrKeeper(t)
	twtr.InitGenesis(ctx, *k, genesisState)
	got := twtr.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
