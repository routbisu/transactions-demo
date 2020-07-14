import accountsData from '../mock-data/accounts.json';

// Get list of all accounts
export const getAllAccounts = () => {
  return accountsData;
};

// Get transaction for an account
export const getTransactions = async (accId) => {
  const result = await import(`../mock-data/transactions-${accId}.json`);
  if (result) {
    return result.default;
  }
};
