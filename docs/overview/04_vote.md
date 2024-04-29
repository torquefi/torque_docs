# Vote

## Torque

One key characteristic of Torque is its autonomous nature. To accomplish this, TORQ is distributed to protocol participants across Boost and Borrow. Holders delegate voting power to themselves or an aligned entity to shape the future of Torque. Complete decentralization will be effective once ownership of TORQ has been transferred to the Hamilton governor contract. This and other items will be voted on by the community.

![Torque Boost](/gitbook/assets/dao-voting.png)

## Hamilton

The Hamilton contract is a governance mechanism using OpenZeppelin's framework. It operates based on a specified token, represented by `_token` in the constructor. It is integrated with a Timelock Controller, ensuring approved proposals are delayed before execution to provide participants time to react against malicious proposals.

There is a 7-day delay before a proposal can be voted on and a 7-day voting period during which token holders may cast their votes. There is an initial quorum set at 10% of the total supply. Holders may propose changes by specifying `targets`, `values`, `functions`, `calldatas`, and a description.