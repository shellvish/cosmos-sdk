package keeper

import (
	"context"
	"fmt"

	"cosmossdk.io/collections"
	addresscodec "cosmossdk.io/core/address"
	storetypes "cosmossdk.io/core/store"
	"cosmossdk.io/log"
	"cosmossdk.io/math"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/staking/types"
)

// Implements ValidatorSet interface
var _ types.ValidatorSet = Keeper{}

// Implements DelegationSet interface
var _ types.DelegationSet = Keeper{}

// Keeper of the x/staking store
type Keeper struct {
	storeService          storetypes.KVStoreService
	cdc                   codec.BinaryCodec
	authKeeper            types.AccountKeeper
	bankKeeper            types.BankKeeper
	hooks                 types.StakingHooks
	authority             string
	validatorAddressCodec addresscodec.Codec
	consensusAddressCodec addresscodec.Codec

	Schema           collections.Schema
	HistoricalInfo   collections.Map[uint64, types.HistoricalInfo]
	LastTotalPower   collections.Item[math.Int]
	ValidatorUpdates collections.Item[types.ValidatorUpdates]
	Validators       collections.Map[sdk.ValAddress, types.Validator]
	UnbondingIndex   collections.Map[uint64, []byte]
	// UnbondingDelegation              collections.Map[collections.Pair[sdk.AccAddress, sdk.ValAddress], types.UnbondingDelegation]
	UnbondingDelegation                     collections.Map[sdk.AccAddress, types.UnbondingDelegation]
	UnbondingDelegationByValidatorDelegator collections.Map[collections.Pair[sdk.ValAddress, sdk.AccAddress], types.UnbondingDelegation]
	UnbondingDelegationByValIndex           collections.Map[collections.Pair[sdk.AccAddress, sdk.ValAddress], []byte]
}

// NewKeeper creates a new staking Keeper instance
func NewKeeper(
	cdc codec.BinaryCodec,
	storeService storetypes.KVStoreService,
	ak types.AccountKeeper,
	bk types.BankKeeper,
	authority string,
	validatorAddressCodec addresscodec.Codec,
	consensusAddressCodec addresscodec.Codec,
) *Keeper {
	sb := collections.NewSchemaBuilder(storeService)
	// ensure bonded and not bonded module accounts are set
	if addr := ak.GetModuleAddress(types.BondedPoolName); addr == nil {
		panic(fmt.Sprintf("%s module account has not been set", types.BondedPoolName))
	}

	if addr := ak.GetModuleAddress(types.NotBondedPoolName); addr == nil {
		panic(fmt.Sprintf("%s module account has not been set", types.NotBondedPoolName))
	}

	// ensure that authority is a valid AccAddress
	if _, err := ak.AddressCodec().StringToBytes(authority); err != nil {
		panic("authority is not a valid acc address")
	}

	if validatorAddressCodec == nil || consensusAddressCodec == nil {
		panic("validator and/or consensus address codec are nil")
	}

	k := &Keeper{
		storeService:          storeService,
		cdc:                   cdc,
		authKeeper:            ak,
		bankKeeper:            bk,
		hooks:                 nil,
		authority:             authority,
		validatorAddressCodec: validatorAddressCodec,
		consensusAddressCodec: consensusAddressCodec,
		LastTotalPower:        collections.NewItem(sb, types.LastTotalPowerKey, "last_total_power", sdk.IntValue),
		HistoricalInfo:        collections.NewMap(sb, types.HistoricalInfoKey, "historical_info", collections.Uint64Key, codec.CollValue[types.HistoricalInfo](cdc)),
		ValidatorUpdates:      collections.NewItem(sb, types.ValidatorUpdatesKey, "validator_updates", codec.CollValue[types.ValidatorUpdates](cdc)),
		Validators:            collections.NewMap(sb, types.ValidatorsKey, "validators", sdk.ValAddressKey, codec.CollValue[types.Validator](cdc)),
		UnbondingIndex:        collections.NewMap(sb, types.UnbondingIndexKey, "unbonding_index", collections.Uint64Key, collections.BytesValue),
		// UnbondingDelegation:              collections.NewMap(sb, types.UnbondingDelegationKey, "unbonding_delegation", collections.PairKeyCodec(sdk.AccAddressKey, sdk.ValAddressKey), codec.CollValue[types.UnbondingDelegation](cdc)),
		UnbondingDelegation: collections.NewMap(sb, types.UnbondingDelegationKey, "unbonding_delegation", sdk.AccAddressKey, codec.CollValue[types.UnbondingDelegation](cdc)),
		// UnbondingDelegation:              collections.NewMap(sb, types.UnbondingDelegationKey, "unbonding_delegation", collections.PairKeyCodec(collections.Uint64Key, sdk.AccAddressKey), codec.CollValue[types.UnbondingDelegation](cdc)),
		UnbondingDelegationByValidatorDelegator: collections.NewMap(sb, types.UnbondingDelegationByValIndexKey, "unbonding_delegation_by_val_del", collections.PairKeyCodec(sdk.ValAddressKey, sdk.AccAddressKey), codec.CollValue[types.UnbondingDelegation](cdc)),
		UnbondingDelegationByValIndex:           collections.NewMap(sb, types.UnbondingIDKey, "unbonding_delegation_by_val_index", collections.PairKeyCodec(sdk.AccAddressKey, sdk.ValAddressKey), collections.BytesValue),
	}

	schema, err := sb.Build()
	if err != nil {
		panic(err)
	}
	k.Schema = schema
	return k
}

// Logger returns a module-specific logger.
func (k Keeper) Logger(ctx context.Context) log.Logger {
	sdkCtx := sdk.UnwrapSDKContext(ctx)
	return sdkCtx.Logger().With("module", "x/"+types.ModuleName)
}

// Hooks gets the hooks for staking *Keeper {
func (k *Keeper) Hooks() types.StakingHooks {
	if k.hooks == nil {
		// return a no-op implementation if no hooks are set
		return types.MultiStakingHooks{}
	}

	return k.hooks
}

// SetHooks sets the validator hooks.  In contrast to other receivers, this method must take a pointer due to nature
// of the hooks interface and SDK start up sequence.
func (k *Keeper) SetHooks(sh types.StakingHooks) {
	if k.hooks != nil {
		panic("cannot set validator hooks twice")
	}

	k.hooks = sh
}

// GetAuthority returns the x/staking module's authority.
func (k Keeper) GetAuthority() string {
	return k.authority
}

// ValidatorAddressCodec returns the app validator address codec.
func (k Keeper) ValidatorAddressCodec() addresscodec.Codec {
	return k.validatorAddressCodec
}

// ConsensusAddressCodec returns the app consensus address codec.
func (k Keeper) ConsensusAddressCodec() addresscodec.Codec {
	return k.consensusAddressCodec
}
