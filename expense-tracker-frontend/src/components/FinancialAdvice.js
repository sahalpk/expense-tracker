import React, { useState } from 'react';
import axios from 'axios';

function FinancialAdvice() {
  const [advice, setAdvice] = useState('');

  const getAdvice = () => {
    axios.post('https://api.groq.com/chat/completions', {
      messages: [{ "role": "user", "content": "Give me advice on controlling expenses" }],
      model: "llama3-8b-8192"
    }, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_GROQ_API_KEY}` }
    })
    .then(response => setAdvice(response.data.choices[0].message.content))
    .catch(error => console.log(error));
  };

  return (
    <div>
      <button onClick={getAdvice}>Get Financial Advice</button>
      <p>{advice}</p>
    </div>
  );
}

export default FinancialAdvice;
