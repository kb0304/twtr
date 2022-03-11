package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/kb0304/twtr/x/twtr/keeper"
	"github.com/kb0304/twtr/x/twtr/types"
)

func SimulateMsgFollow(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgFollow{
			Follower: simAccount.Address.String(),
		}

		// TODO: Handling the Follow simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Follow simulation not implemented"), nil, nil
	}
}
