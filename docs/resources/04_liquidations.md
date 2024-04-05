# Liquidations

## Specs

To liquidate a user who has an underwater loan, call `liquidate` at the TUSDEngine and pass `collateral` address, `user` address, and `debtToCover` amount in TUSD. This is the debt a liquidator is repaying for the borrower to ensure protocol health. Liquidators receive a 10% bonus from the borrowers collateral for performing the `liquidate` function.
