package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kb0304/twtr/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgFollow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgFollow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgFollow{
				Follower: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgFollow{
				Follower: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
