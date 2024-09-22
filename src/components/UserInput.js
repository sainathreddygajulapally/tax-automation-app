import React, { useState } from 'react';

function UserInput({ onSubmit }) {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ income, deductions });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Income:
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </label>
      <br />
      <label>
        Deductions:
        <input
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Calculate Tax</button>
    </form>
  );
}

export default UserInput;
