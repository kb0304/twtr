package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/kb0304/twtr/x/twtr/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdFollow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "follow [followee]",
		Short: "Broadcast message follow",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFollowee := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgFollow(
				clientCtx.GetFromAddress().String(),
				argFollowee,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
