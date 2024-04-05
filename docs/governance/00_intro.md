---
sidebar_position: 1
sidebar_label: Intro
---
# Governance

Torque is governed and upgraded by tokenholders using three components:

1. TORQ token
2. Governor
3. Multisig

Together, these components enable the community to propose, vote on, and implement changes to the Torque system. Proposals can modify system parameters, activate or deactivate policies, and install or upgrade modules, effectively allowing the addition of new features and the mutation of the protocol.

## TORQ
TORQ, or Torque, is an ERC-20 token used for proposing upgrades to Torque protocol. TORQ can be obtained by trading for it on Uniswap (Arbitrum network). The use cases of TORQ today include voting and collateral at Ajna.

### Delegation
TORQ allows the owner to delegate voting rights to any address, including their own. There's a few considerations to keep in mind when delegating:

* Users can delegate to only one address at a time
* The entire TORQ balance of the delegator is added to the delegatee’s vote count
* Changes to the delegator's token balance automatically adjust the voting rights of the delegatee
* Votes are delegated from the current block and onward, until the delegator delegates again or transfers

Delegation can be achieved by calling the `delegate()` function or via a valid off-chain signature using `delegateBySig()`. Torque provides a frontend for managing delegations [here](https://app.torque.fi/vote).
<!--  
:::info
You must delegate your TORQ in Cooler Loans to be eligible to vote in both Snapshot and Governor Bravo. Visit [Torque Govern](https://app.Torquedao.finance/#/governance) page for more information.
::: -->

<!-- ### Parameters
| Variable | Description | Value |
|-|-|-|
| proposalThreshold | % of total supply required in order for a voter to become a proposer |  0.017% of supply |
| quorumPct | minimum % of total supply voting FOR in order for a proposal to qualify to pass | 20% |
| highRiskQuorum | Same as quorumPct but specific to a high risk module in the Default system | 20% |
| approvalThresholdPct | minimum % of voting supply voting FOR in order for a proposal to qualify to pass | 60% |
| proposalMaxOperations | The maximum number of actions that can be included in a proposal | 15 actions |
| votingDelay | The delay before voting on a proposal may take place, once proposed, in blocks | 3 days |
| votingPeriod | The duration of voting on a proposal, in blocks | 7 days |
| activationGracePeriod |The amount of time once a proposal is eligible for activation that it can be activated before considered expired | 1 day |
| GRACE_PERIOD | How long after a proposal is eligible for execution it can still be executed before it is considered expired | 1 day |
| delay (execution delay) | The time a proposal must be queued for before it can be executed | 1 day |
| vetoGuardian | Address which has veto power over all proposals | Emergency MS |
| MIN_TORQ_SUPPLY   | The minimum level of TORQ supply acceptable for OCG operations | 1000 TORQ |



## Multisig
Multisigs perform protocol upgrades for roles that are not yet under Governor Bravo control. The multisigs queue and execute
on-chain actions that are approved by the community through [Snapshot](https://docs.snapshot.org/), an off-chain governance client. Today, the following roles are under multisig control:


| Role | Responsibility | Systems affected | Multisig |
|-------- | -------- | -------------- | -------------- |
| executor | Ability to install modules and policies on Kernel | Kernel | DAO MS |
| admin | Assign roles to any policy | Kernel | DAO MS |
| price_admin | Calculates price metrics to use for RBS | RBS | DAO MS |
| heart_admin | Manages heartbeats | RBS | DAO MS |
| operator_admin | Initialize RBS operator | RBS | DAO MS |
| operator_reporter | Records a bond purchase and updates capacity accordingly. Limited to the `BondCallback` contract. | RBS | DAO MS
| operator_policy | Manages RBS ranges | RBS | DAO MS |
| callback_admin | Callback to interface with Bond system | RBS | DAO MS |
| heart_admin | Heart beat manager | RBS and Staking | DAO MS |
| custodian | Treasury custodian that can approve, remove assets from TRSY | TRSRY | DAO MS |
| bridge_admin | Creates/manages bridges | Cross Chain | DAO MS |
| bondmanager_admin | Create and manage new bond markets | OHM and other non-RBS managed bonds | DAO MS |
| distributor_admin | Manages reward rate + pools to distribute OHM into | Distributor | DAO MS |
| burner_admin | Burn OHM | MINTR | DAO MS |
| minter_admin | Mint OHM | MINTR | DAO MS |
| bunni_admin | Deploy/deposit/withdraw UniV3 pool, Configure fee harvesting | TRSRY, MINTR, RBS | DAO MS |
| supplyconfig_admin | Installs/upgrades SPPLY submodules | RBS | DAO MS |
| supplyconfig_policy | Add/remove SPPLY categories, Add locations to SPPLY categories, Execute function on submodule | RBS | DAO MS |
| treasuryconfig_policy | Manages asset registration, location and categories | RBS | DAO MS |
| priceconfig_policy | Manage asset price feeds, moving average, strategy. Execute function on submodule | RBS | DAO MS |
| priceconfig_admin | Install/upgrades PRICE submodules | RBS | DAO MS |
| emergency_admin | Emergency shutdown for BLV | All systems | Emergency MS |
| emergency_shutdown | Shutdown MINTR, TRSRY | All systems | DAO MS, Emergency MS |
| emergency_restart | Restart MINTR, TRSRY | All systems | DAO MS, Emergency MS |

Per [OIP-152](https://forum.Torquedao.finance/d/4088-oip-152-on-chain-governance), additional roles will be transfered from multisig management to Governor Bravo. This phase is expected to complete by Q3 2024. -->
