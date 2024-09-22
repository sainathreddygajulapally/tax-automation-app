import React, { useState } from 'react';
import axios from 'axios';
import UserInput from './components/UserInput';

function App() {
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5001/api/calculate-tax', data);
      setResult(`Taxable Income: $${response.data.taxableIncome}, Tax Owed: $${response.data.taxOwed}`);
    } catch (error) {
      console.error('Error calculating tax:', error);
    }
  };

  return (
    <div className="App">
      <h1>Tax Automation App</h1>
      <UserInput onSubmit={handleFormSubmit} />
      {result && <div>{result}</div>}
    </div>
  );
}

export default App;
