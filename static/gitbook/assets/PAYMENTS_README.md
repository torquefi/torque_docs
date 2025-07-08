# 💰 TorquePayments: Multi-Currency Payment System

## Overview

TorquePayments is a comprehensive, multi-currency payment system that allows merchants to accept payments in any supported stablecoin while receiving settlements in their preferred currency. The system handles currency orchestration on the user side, providing maximum flexibility for both payers and merchants.

## 🏦 Supported Currencies

### **Torque Currency Ecosystem (OFTs)**
TorquePayments exclusively supports Torque currencies, which are Omnichain Fungible Tokens (OFTs) that can be minted and burned across chains without requiring liquidity pools.

- **TUSD (Torque USD)** - USD stablecoin
- **TEUR (Torque EUR)** - Euro stablecoin  
- **TGBP (Torque GBP)** - British Pound stablecoin
- **TJPY (Torque JPY)** - Japanese Yen stablecoin
- **TAUD (Torque AUD)** - Australian Dollar stablecoin
- **TCAD (Torque CAD)** - Canadian Dollar stablecoin
- **TCHF (Torque CHF)** - Swiss Franc stablecoin
- **TNZD (Torque NZD)** - New Zealand Dollar stablecoin
- **TXAU (Torque XAU)** - Gold token
- **TXAG (Torque XAG)** - Silver token

### **Why Torque Currencies?**
- ✅ **Cross-Chain Native**: Built as OFTs for seamless cross-chain transfers
- ✅ **No Liquidity Required**: Mint/burn instead of swap for cross-chain payments
- ✅ **Guaranteed Success**: No failed transfers due to insufficient liquidity
- ✅ **Lower Fees**: No DEX swap fees for cross-chain payments
- ✅ **Instant Settlement**: Direct minting on destination chain

## 🎯 Key Features

### **1. Merchant Currency Preferences**
- Merchants can set their preferred settlement currency
- Automatic currency conversion handling
- No fees for currency conversion
- Flexible payment acceptance

### **2. Torque Currency Support**
- Accept payments in any Torque currency (OFTs)
- Automatic cross-chain currency validation
- Seamless cross-chain transfers via mint/burn
- Real-time currency conversion within Torque ecosystem

### **3. Payment Types**
- **Crypto-to-Crypto Payments**
- **Subscription Payments** 
- **Invoice Payments**
- **Donations** - Charitable giving and creator support
- **Buy Now, Pay Later (BNPL)** - Deferred payment agreements with installment plans
- **Mass Payments** - Bulk payouts to multiple recipients worldwide
- **Cross-Chain Payments**

### **4. Settlement Methods**
- **Instant Settlement** - Immediate payment processing
- **Batch Settlement** - Grouped payments for efficiency
- **Escrow Settlement** - Secure payment holding

### **5. Buy Now, Pay Later (BNPL)**
- **Flexible Terms** - Configurable down payments and installment schedules
- **Multiple Schedules** - Weekly, bi-weekly, monthly, or custom intervals
- **Late Fee Management** - Automatic late fee calculation and collection
- **Default Protection** - Configurable default thresholds and monitoring
- **Merchant Control** - Merchants can enable/disable BNPL support

### **6. Mass Payments**
- **Bulk Payouts** - Send payments to up to 1,000 recipients simultaneously
- **Batch Processing** - Efficient processing in configurable batches
- **Recipient Types** - Support for contractors, freelancers, sellers, claimants, employees
- **Multi-Currency** - Send payments in any supported stablecoin
- **Global Reach** - Instant payouts worldwide with cross-chain support
- **Failure Handling** - Robust error handling and retry mechanisms

## 🔧 Technical Implementation

### **Payment Structure**
```solidity
struct Payment {
    bytes32 paymentId;
    address payer;
    address payee;
    uint256 amount;
    address currency;           // Currency user pays with
    address settlementCurrency; // Currency merchant receives
    PaymentType paymentType;
    PaymentStatus status;
    SettlementMethod settlementMethod;
    uint256 createdAt;
    uint256 processedAt;
    uint256 expiresAt;
    string description;
    bytes metadata;
    bool isCrossChain;
    uint16 dstChainId;
    address dstAddress;
}
```

### **Payment Request Structure**
```solidity
struct PaymentRequest {
    address payee;
    uint256 amount;
    address currency;           // Currency user pays with
    address settlementCurrency; // Currency merchant receives (optional)
    PaymentType paymentType;
    SettlementMethod settlementMethod;
    uint256 expiresAt;
    string description;
    bytes metadata;
}
```

## 💳 Payment Flow Examples

### **Example 1: TEUR Payment to TUSD Settlement**
```solidity
// Merchant prefers TUSD settlements
merchant.setMerchantSettlementPreference(tusdAddress);

// User pays with TEUR, merchant receives TUSD
PaymentRequest memory request = PaymentRequest({
    payee: merchantAddress,
    amount: 1000 * 10**6, // 1000 TEUR (6 decimals)
    currency: teurAddress,
    settlementCurrency: tusdAddress, // Explicit settlement currency
    paymentType: PaymentType.CRYPTO_TO_CRYPTO,
    settlementMethod: SettlementMethod.INSTANT,
    expiresAt: block.timestamp + 24 hours,
    description: "Payment for services",
    metadata: ""
});
```

### **Example 2: TGBP Payment with Default Settlement**
```solidity
// User pays with TGBP, merchant receives their preferred currency
PaymentRequest memory request = PaymentRequest({
    payee: merchantAddress,
    amount: 1000 * 10**6, // 1000 TGBP (6 decimals)
    currency: tgbpAddress,
    settlementCurrency: address(0), // Use merchant's preference
    paymentType: PaymentType.CRYPTO_TO_CRYPTO,
    settlementMethod: SettlementMethod.INSTANT,
    expiresAt: block.timestamp + 24 hours,
    description: "Payment for services",
    metadata: ""
});
```

### **Example 3: Cross-Chain Payment**
```solidity
// Cross-chain payment with Torque currencies
PaymentRequest memory request = PaymentRequest({
    payee: merchantAddress,
    amount: 1000 * 10**6, // 1000 TUSD
    currency: tusdAddress,
    settlementCurrency: teurAddress, // Different settlement currency
    paymentType: PaymentType.CRYPTO_TO_CRYPTO,
    settlementMethod: SettlementMethod.INSTANT,
    expiresAt: block.timestamp + 24 hours,
    description: "Cross-chain payment",
    metadata: ""
});

// Set cross-chain parameters
payment.isCrossChain = true;
payment.dstChainId = 137; // Polygon
payment.dstAddress = polygonPaymentsAddress;
```

## 💝 Donation Examples

### **Example 1: Charity Donation**
```solidity
// Create donation to a charity
DonationRequest memory request = DonationRequest({
    recipient: charityAddress,
    amount: 100 * 10**6, // 100 TUSD
    currency: tusdAddress,
    donationType: DonationType.CHARITY,
    message: "Supporting disaster relief efforts",
    cause: "Disaster Relief",
    anonymous: false,
    expiresAt: block.timestamp + 24 hours,
    metadata: ""
});

bytes32 donationId = payments.createDonation(request, 0);
```

### **Example 2: Creator Support (Anonymous)**
```solidity
// Anonymous donation to content creator
DonationRequest memory request = DonationRequest({
    recipient: creatorAddress,
    amount: 50 * 10**6, // 50 TUSD
    currency: tusdAddress,
    donationType: DonationType.CREATOR,
    message: "Love your content! Keep it up!",
    cause: "Content Creation",
    anonymous: true, // Anonymous donation
    expiresAt: block.timestamp + 24 hours,
    metadata: ""
});

bytes32 donationId = payments.createDonation(request, 0);
```

### **Example 3: Project Funding**
```solidity
// Support for open source project
DonationRequest memory request = DonationRequest({
    recipient: projectAddress,
    amount: 1000 * 10**6, // 1000 TUSD
    currency: tusdAddress,
    donationType: DonationType.PROJECT,
    message: "Supporting the development of this amazing project",
    cause: "Open Source Development",
    anonymous: false,
    expiresAt: block.timestamp + 7 days,
    metadata: ""
});

bytes32 donationId = payments.createDonation(request, 0);
```

### **Example 4: Cross-Chain Donation**
```solidity
// Cross-chain donation to international charity
DonationRequest memory request = DonationRequest({
    recipient: internationalCharityAddress,
    amount: 500 * 10**6, // 500 TUSD
    currency: tusdAddress,
    donationType: DonationType.CHARITY,
    message: "Supporting global education initiatives",
    cause: "Global Education",
    anonymous: false,
    expiresAt: block.timestamp + 24 hours,
    metadata: ""
});

bytes32 donationId = payments.createDonation(request, 0);

// Set cross-chain parameters
Donation storage donation = donations[donationId];
donation.isCrossChain = true;
donation.dstChainId = 137; // Polygon
donation.dstAddress = polygonDonationsAddress;
```

## 💳 Buy Now, Pay Later (BNPL) Examples

### **Example 1: Basic BNPL Agreement**
```solidity
// Create BNPL agreement for electronics purchase
BNPLRequest memory request = BNPLRequest({
    merchant: electronicsStoreAddress,
    totalAmount: 1000 * 10**6, // 1000 TUSD
    downPayment: 200 * 10**6,  // 200 TUSD (20% down)
    currency: tusdAddress,
    schedule: BNPLSchedule.MONTHLY,
    installmentCount: 4,       // 4 monthly installments
    defaultThreshold: 30,      // 30 days default threshold
    expiresAt: block.timestamp + 24 hours,
    description: "iPhone 15 Pro - BNPL",
    metadata: ""
});

bytes32 bnplId = payments.createBNPLAgreement(request, 0);
```

### **Example 2: Activate BNPL Agreement**
```solidity
// Pay down payment and activate the agreement
payments.activateBNPLAgreement(bnplId, 0);

// This will:
// 1. Transfer 200 TUSD down payment to merchant
// 2. Set up 4 monthly installments of 200 TUSD each
// 3. Schedule first payment in 30 days
```

### **Example 3: Pay Installment**
```solidity
// Pay the first installment (with late fees if applicable)
payments.payInstallment(bnplId, 1, 0);

// If paid on time: 200 TUSD
// If paid late: 200 TUSD + late fees (0.5% per day)
```

### **Example 4: Weekly BNPL Schedule**
```solidity
// Create BNPL with weekly payments
BNPLRequest memory request = BNPLRequest({
    merchant: clothingStoreAddress,
    totalAmount: 500 * 10**6,  // 500 TUSD
    downPayment: 50 * 10**6,   // 50 TUSD (10% down)
    currency: tusdAddress,
    schedule: BNPLSchedule.WEEKLY,
    installmentCount: 6,       // 6 weekly installments
    defaultThreshold: 14,      // 14 days default threshold
    expiresAt: block.timestamp + 24 hours,
    description: "Designer Clothing - Weekly BNPL",
    metadata: ""
});

bytes32 bnplId = payments.createBNPLAgreement(request, 0);
```

### **Example 5: Cancel BNPL Agreement**
```solidity
// Cancel agreement before activation (no fees)
payments.cancelBNPLAgreement(bnplId);
```

## 🏪 BNPL Merchant Setup

### **1. Enable BNPL Support**
```solidity
// Admin enables BNPL for merchant
payments.setBNPLMerchantEnabled(merchantAddress, true);
```

### **2. Create BNPL Offer**
```solidity
// Merchant creates BNPL offer
BNPLRequest memory request = BNPLRequest({
    merchant: merchantAddress,
    totalAmount: 1000 * 10**6,
    downPayment: 200 * 10**6,
    currency: tusdAddress,
    schedule: BNPLSchedule.MONTHLY,
    installmentCount: 4,
    defaultThreshold: 30,
    expiresAt: block.timestamp + 24 hours,
    description: "Product BNPL Offer",
    metadata: ""
});
```

### **3. Monitor BNPL Agreements**
```solidity
// Get merchant's BNPL agreements
bytes32[] memory agreements = payments.getMerchantBNPLAgreements(merchantAddress);

// Get specific agreement details
BNPLAgreement memory agreement = payments.getBNPLAgreement(agreementId);
```

## 📊 BNPL Statistics

### **Get User BNPL Stats**
```solidity
// Get user's BNPL statistics
(uint256 totalAgreements, uint256 activeAgreements, uint256 completedAgreements, uint256 totalAmount, uint256 totalLateFees) = 
    payments.getUserBNPLStats(userAddress);
```

### **Get Installment Details**
```solidity
// Get specific installment information
Installment memory installment = payments.getInstallment(bnplId, installmentNumber);
```

## 💸 Mass Payment Examples

### **Example 1: Basic Mass Payment**
```solidity
// Create mass payment for contractor payouts
MassPaymentRequest memory request = MassPaymentRequest({
    currency: usdcAddress,
    totalAmount: 10000 * 10**6, // 10,000 USDC
    expiresAt: block.timestamp + 24 hours,
    description: "Q4 Contractor Payouts",
    metadata: ""
});

bytes32 massPaymentId = payments.createMassPayment(request, 0);

// Add recipients
MassPaymentRecipient[] memory recipients = new MassPaymentRecipient[](3);
recipients[0] = MassPaymentRecipient({
    recipient: contractor1Address,
    amount: 3000 * 10**6, // 3,000 USDC
    recipientType: RecipientType.CONTRACTOR,
    description: "Web Development Services",
    metadata: "",
    processed: false,
    processedAt: 0,
    failureReason: ""
});
recipients[1] = MassPaymentRecipient({
    recipient: contractor2Address,
    amount: 4000 * 10**6, // 4,000 USDC
    recipientType: RecipientType.CONTRACTOR,
    description: "Design Services",
    metadata: "",
    processed: false,
    processedAt: 0,
    failureReason: ""
});
recipients[2] = MassPaymentRecipient({
    recipient: contractor3Address,
    amount: 3000 * 10**6, // 3,000 USDC
    recipientType: RecipientType.CONTRACTOR,
    description: "Marketing Services",
    metadata: "",
    processed: false,
    processedAt: 0,
    failureReason: ""
});

payments.addMassPaymentRecipients(massPaymentId, recipients);
```

### **Example 2: Process Mass Payment**
```solidity
// Process the entire mass payment
payments.processMassPayment(massPaymentId, 0);

// This will:
// 1. Transfer 10,000 USDC from payer to contract
// 2. Distribute payments to all 3 contractors
// 3. Update payment status and statistics
```

### **Example 3: Batch Processing for Large Payments**
```solidity
// For large payments with many recipients, use batch processing
// Process first batch (recipients 0-49)
payments.processMassPaymentBatch(massPaymentId, 0);

// Process second batch (recipients 50-99)
payments.processMassPaymentBatch(massPaymentId, 1);

// Continue until all batches are processed
```

### **Example 4: Freelancer Payouts**
```solidity
// Create mass payment for freelancer platform
MassPaymentRequest memory request = MassPaymentRequest({
    currency: usdtAddress,
    totalAmount: 50000 * 10**6, // 50,000 USDT
    expiresAt: block.timestamp + 24 hours,
    description: "Freelancer Platform Payouts",
    metadata: ""
});

bytes32 massPaymentId = payments.createMassPayment(request, 0);

// Add multiple freelancers
MassPaymentRecipient[] memory freelancers = new MassPaymentRecipient[](100);
for (uint256 i = 0; i < 100; i++) {
    freelancers[i] = MassPaymentRecipient({
        recipient: freelancerAddresses[i],
        amount: 500 * 10**6, // 500 USDT each
        recipientType: RecipientType.FREELANCER,
        description: "Project completion payment",
        metadata: "",
        processed: false,
        processedAt: 0,
        failureReason: ""
    });
}

payments.addMassPaymentRecipients(massPaymentId, freelancers);
```

### **Example 5: Cross-Chain Mass Payment**
```solidity
// Create cross-chain mass payment
MassPaymentRequest memory request = MassPaymentRequest({
    currency: usdcAddress,
    totalAmount: 25000 * 10**6, // 25,000 USDC
    expiresAt: block.timestamp + 24 hours,
    description: "Global Team Payouts",
    metadata: ""
});

bytes32 massPaymentId = payments.createMassPayment(request, 0);

// Set cross-chain parameters
MassPayment storage massPayment = massPayments[massPaymentId];
massPayment.isCrossChain = true;
massPayment.dstChainId = 137; // Polygon
massPayment.dstAddress = polygonPaymentsAddress;
```

## 🏢 Mass Payment Setup

### **1. Enable Mass Payments**
```solidity
// Admin enables mass payments for user
payments.setMassPaymentEnabled(userAddress, true);
```

### **2. Create Mass Payment**
```solidity
// Create mass payment request
MassPaymentRequest memory request = MassPaymentRequest({
    currency: usdcAddress,
    totalAmount: 10000 * 10**6,
    expiresAt: block.timestamp + 24 hours,
    description: "Team Payouts",
    metadata: ""
});

bytes32 massPaymentId = payments.createMassPayment(request, 0);
```

### **3. Add Recipients**
```solidity
// Add recipients to mass payment
MassPaymentRecipient[] memory recipients = new MassPaymentRecipient[](5);
// ... populate recipients array
payments.addMassPaymentRecipients(massPaymentId, recipients);
```

### **4. Process Payments**
```solidity
// Process entire payment or use batch processing
payments.processMassPayment(massPaymentId, 0);
// OR
payments.processMassPaymentBatch(massPaymentId, 0);
```

## 📊 Mass Payment Statistics

### **Get User Mass Payment Stats**
```solidity
// Get user's mass payment statistics
(uint256 totalPayments, uint256 totalRecipients, uint256 totalAmount, uint256 totalProcessed, uint256 totalFailed) = 
    payments.getUserMassPaymentStats(userAddress);
```

### **Get Recipient Stats**
```solidity
// Get recipient's payment statistics
(uint256 totalReceived, uint256 paymentCount, uint256[] memory recipientTypeCounts) = 
    payments.getRecipientStats(recipientAddress);
```

### **Get Mass Payment Details**
```solidity
// Get mass payment information
MassPayment memory massPayment = payments.getMassPayment(massPaymentId);
MassPaymentRecipient[] memory recipients = payments.getMassPaymentRecipients(massPaymentId);
MassPaymentBatch[] memory batches = payments.getMassPaymentBatches(massPaymentId);
```

## 🏪 Merchant Setup

### **1. Authorization**
```solidity
// Admin authorizes merchant
payments.authorizeMerchant(merchantAddress, true);
```

### **2. Set Settlement Preference**
```solidity
// Merchant sets preferred settlement currency
payments.setMerchantSettlementPreference(usdcAddress);
```

### **3. Get Settlement Preference**
```solidity
// Get merchant's preferred settlement currency
address preference = payments.getMerchantSettlementPreference(merchantAddress);
```

## 🎗️ Donation Setup

### **1. Authorize Recipient**
```solidity
// Admin authorizes donation recipient
payments.setRecipientAuthorization(recipientAddress, true);
```

### **2. Create Donation**
```solidity
// Create donation request
DonationRequest memory request = DonationRequest({
    recipient: recipientAddress,
    amount: 100 * 10**6, // 100 USDC
    currency: usdcAddress,
    donationType: DonationType.CHARITY,
    message: "Supporting your cause",
    cause: "Environmental Protection",
    anonymous: false,
    expiresAt: block.timestamp + 24 hours,
    metadata: ""
});

bytes32 donationId = payments.createDonation(request, 0);
```

### **3. Process Donation**
```solidity
// Process the donation
payments.processDonation(donationId, 0);
```

### **4. Get Donation Statistics**
```solidity
// Get recipient's donation statistics
(uint256 totalDonations, uint256 totalAmount, uint256 donorCount, uint256[] memory typeCounts) = 
    payments.getRecipientDonationStats(recipientAddress);
```

## 🔄 Currency Management

### **Add Supported Stablecoin**
```solidity
// Admin adds new supported stablecoin
payments.setSupportedStablecoin(usdtAddress, true);
```

### **Check Currency Support**
```solidity
// Check if currency is supported
bool isSupported = payments.isSupportedStablecoin(currencyAddress);
```

### **Currency Conversion**
The system handles currency conversion automatically:
- **Same Currency**: Direct transfer
- **Different Currencies**: Automatic conversion via DEX integration
- **Cross-Chain**: LayerZero bridge with conversion

## 📊 Payment Statistics

### **Supported Features**
- ✅ **Multi-Currency Payments**: Any supported stablecoin
- ✅ **Merchant Preferences**: Choose settlement currency
- ✅ **Cross-Chain Support**: Payments across networks
- ✅ **No Fees**: 0% merchant fees
- ✅ **Instant Settlement**: Real-time processing
- ✅ **Subscription Support**: Recurring payments
- ✅ **Invoice System**: Professional invoicing
- ✅ **Donation System**: Charitable giving and creator support
- ✅ **Buy Now, Pay Later (BNPL)**: Deferred payment agreements with installment plans
- ✅ **Mass Payments**: Bulk payouts to multiple recipients worldwide
- ✅ **Refund Support**: Full refund capabilities

### **Security Features**
- ✅ **Reentrancy Protection**: Secure payment processing
- ✅ **Pausable**: Emergency pause functionality
- ✅ **Access Control**: Merchant authorization
- ✅ **Expiry Protection**: Payment timeout handling
- ✅ **Cross-Chain Validation**: Secure bridging

## 🚀 Getting Started

### **For Merchants**
1. **Get Authorized**: Contact admin for merchant authorization
2. **Set Preferences**: Choose your preferred settlement currency
3. **Accept Payments**: Start accepting multi-currency payments
4. **Monitor Activity**: Track payments and settlements

### **For Users**
1. **Choose Currency**: Pay with any supported stablecoin
2. **Set Amount**: Specify payment amount
3. **Process Payment**: Complete the transaction
4. **Track Status**: Monitor payment status

### **For Developers**
1. **Integrate API**: Connect to TorquePayments contract
2. **Handle Currencies**: Support multiple payment currencies
3. **Manage Preferences**: Handle merchant settlement preferences
4. **Monitor Events**: Track payment events and status

## 📈 Benefits

### **For Merchants**
- **Currency Flexibility**: Accept payments in any stablecoin
- **Settlement Choice**: Receive funds in preferred currency
- **No Conversion Fees**: Free currency conversion
- **Global Reach**: Cross-chain payment support
- **Instant Settlement**: Real-time payment processing
- **BNPL Support**: Offer flexible payment terms to increase sales
- **Risk Management**: Configurable down payments and default thresholds
- **Mass Payment Support**: Efficient bulk payouts to contractors and freelancers

### **For Donation Recipients**
- **Multi-Currency Support**: Accept donations in any stablecoin
- **Anonymous Options**: Support for anonymous donations
- **Transparency**: Public donation tracking and statistics
- **Cross-Chain**: Receive donations from any supported network
- **No Platform Fees**: 100% of donations go to recipients

### **For Users**
- **Payment Choice**: Pay with preferred stablecoin
- **No Restrictions**: Use any supported currency
- **Cross-Chain**: Send payments across networks
- **Low Fees**: Minimal transaction costs
- **Fast Processing**: Instant payment confirmation
- **Flexible Payments**: BNPL options for larger purchases
- **Transparent Terms**: Clear installment schedules and late fees
- **Mass Payment Support**: Efficient bulk payouts to multiple recipients

### **For Donors**
- **Charitable Giving**: Support causes and creators directly
- **Anonymous Options**: Make anonymous donations when desired
- **Multi-Currency**: Donate in any supported stablecoin
- **Transparency**: Track donation impact and recipient statistics
- **Cross-Chain**: Support global causes across networks

### **For Ecosystem**
- **Liquidity**: Increased stablecoin liquidity
- **Adoption**: Broader currency support
- **Interoperability**: Cross-chain compatibility
- **Innovation**: Flexible payment solutions

## 🎯 Success Metrics

### **Key Performance Indicators**
- **Supported Currencies**: 10+ stablecoins
- **Payment Volume**: $1M+ monthly volume
- **Merchant Adoption**: 1000+ active merchants
- **Donation Volume**: $500K+ monthly donations
- **Cross-Chain Transactions**: 50%+ cross-chain usage
- **Currency Diversity**: 80%+ currency variety

### **Long-term Goals**
- **Universal Support**: All major stablecoins
- **Global Network**: 100+ supported chains
- **Enterprise Adoption**: Fortune 500 merchants
- **Charitable Impact**: $100M+ in donations processed
- **Regulatory Compliance**: Global payment standards
- **DeFi Integration**: Seamless DeFi ecosystem

---

**TorquePayments transforms the payment landscape by providing universal currency support with merchant-driven settlement preferences, creating a truly flexible and user-friendly payment ecosystem.** 