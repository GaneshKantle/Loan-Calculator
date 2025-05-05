// src/pages/Home.js
import { Container } from '@mui/material';
import { useState } from 'react';
import Header from '../components/Header';
import Calculator from '../components/Calculator';
import AmortizationTable from '../components/AmortizationTable';
import ExchangeRates from '../components/ExchangeRates';

const Home = () => {
  const [emi, setEMI] = useState(0);
  const [schedule, setSchedule] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <Calculator setEMI={setEMI} setSchedule={setSchedule} />
        {emi > 0 && (
          <>
            <h3>EMI: {emi}</h3>
            <AmortizationTable schedule={schedule} />
            <ExchangeRates emi={emi} />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;