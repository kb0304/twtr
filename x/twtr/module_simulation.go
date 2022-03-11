package twtr

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/kb0304/twtr/testutil/sample"
	twtrsimulation "github.com/kb0304/twtr/x/twtr/simulation"
	"github.com/kb0304/twtr/x/twtr/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = twtrsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateTweet = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTweet int = 100

	opWeightMsgFollow = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgFollow int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	twtrGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&twtrGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateTweet int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTweet, &weightMsgCreateTweet, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTweet = defaultWeightMsgCreateTweet
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTweet,
		twtrsimulation.SimulateMsgCreateTweet(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgFollow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgFollow, &weightMsgFollow, nil,
		func(_ *rand.Rand) {
			weightMsgFollow = defaultWeightMsgFollow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgFollow,
		twtrsimulation.SimulateMsgFollow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
