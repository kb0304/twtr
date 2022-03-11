package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/kb0304/twtr/x/twtr/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdFeed() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "feed",
		Short: "Query feed",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryFeedRequest{}

			res, err := queryClient.Feed(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
