// src/components/ExchangeRates.js
import { useContext } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import useExchangeRates from '../hooks/useExchangeRates';
import { AppContext } from '../context/AppContext';

const ExchangeRates = ({ emi }) => {
  const { currency } = useContext(AppContext);
  const rates = useExchangeRates(currency);

  return (
    <>
      <Typography variant="h6">Converted EMI in Other Currencies</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>EMI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rates).slice(0, 10).map(([curr, rate]) => (
            <TableRow key={curr}>
              <TableCell>{curr}</TableCell>
              <TableCell>{(emi * rate).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ExchangeRates;