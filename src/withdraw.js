
import React, { useState } from 'react';
import { useBalance } from './BalanceContext';

const WithdrawPage = () => {
  const { withdraw, getBalance } = useBalance();
  const [amount, setAmount] = useState(0);

  const handleWithdraw = () => {
    withdraw(amount);
    setAmount(0);
  };

  const balance = getBalance();

  return (
    <div>
      <h2>Withdraw Page</h2>
      <p>Your Balance: ${balance}</p>
      <label>
        Enter Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default WithdrawPage;
