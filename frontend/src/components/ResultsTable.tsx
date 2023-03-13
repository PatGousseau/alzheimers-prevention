import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FC } from 'react';
import { AlzheimersBarChart } from './BarChart';

function createData(
  gene: string,
  location: number,
  death: number,
) {
  return { gene, location, death};
}

const rows = [
  createData('AEO', 159, 6),
  createData('EAAE', 237, 9),
  createData('CCEECA', 262, 16),
  createData('CEEEEAA', 305, 3),
];

export const ResultsTable: FC = () => {

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Gene</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Death Rate&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.gene}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.gene}
                  </TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  {/* <TableCell align="right">{row.death}</TableCell> */}
                  <TableCell align="right">
                    <AlzheimersBarChart/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}