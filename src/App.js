
import React from 'react';
import { BalanceProvider } from './BalanceContext';
import { DepositPage } from './DepositPage';
import { WithdrawPage } from './WithdrawPage';

const App = () => {
  return (
    <BalanceProvider>
      <div>
        <DepositPage />
        <WithdrawPage />
      </div>
    </BalanceProvider>
  );
};

export default App;
