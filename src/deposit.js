
import React, { useState } from 'react';
import { useBalance } from './BalanceContext';

const DepositPage = () => {
  const { deposit } = useBalance();
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    deposit(amount);
    setAmount(0);
  };

  return (
    <div>
      <h2>Deposit Page</h2>
      <label>
        Enter Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default DepositPage;
