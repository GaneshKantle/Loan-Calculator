// src/components/Calculator.js
import { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import useEMI from '../hooks/useEMI';
import { AppContext } from '../context/AppContext';

const Calculator = ({ setEMI, setSchedule }) => {
  const [P, setP] = useState(100000);
  const [rate, setRate] = useState(10);
  const [months, setMonths] = useState(12);

  const calcEMI = () => {
    const emi = useEMI(P, rate, months);
    setEMI(emi);
    const schedule = Array.from({ length: months }, (_, i) => ({
      month: i + 1,
      payment: emi,
    }));
    setSchedule(schedule);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', my: 2 }}>
      <TextField label="Principal" type="number" value={P} onChange={e => setP(+e.target.value)} />
      <TextField label="Annual Interest (%)" type="number" value={rate} onChange={e => setRate(+e.target.value)} />
      <TextField label="Duration (months)" type="number" value={months} onChange={e => setMonths(+e.target.value)} />
      <Button variant="contained" onClick={calcEMI}>Calculate</Button>
    </Box>
  );
};

export default Calculator;