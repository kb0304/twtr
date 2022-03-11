package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/kb0304/twtr/x/twtr/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdTweets() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "tweets",
		Short: "Query tweets",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryTweetsRequest{}

			res, err := queryClient.Tweets(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
