// src/components/AmortizationTable.js
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const AmortizationTable = ({ schedule }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Month</TableCell>
        <TableCell>Payment</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {schedule.map((row, i) => (
        <TableRow key={i}>
          <TableCell>{row.month}</TableCell>
          <TableCell>{row.payment}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default AmortizationTable;
