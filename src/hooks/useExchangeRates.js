// src/hooks/useExchangeRates.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useExchangeRates = (base = 'USD') => {
  const [rates, setRates] = useState({});
  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/633b40db8f0183d1c4fba738/latest/USD`)
      .then(res => setRates(res.data.conversion_rates))
      .catch(() => setRates({}));
  }, [base]);
  return rates;
};

export default useExchangeRates;
