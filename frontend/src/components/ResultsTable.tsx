import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FC } from "react";
import { AlzheimersBarChart } from "./BarChart";

export interface ResultsProps {
  data: {
    apoe4genotype: string;
    risk_factors: [string, number, string][];
    risk_increase: number;
  };
}

export const ResultsTable: FC<ResultsProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Genotype</TableCell>
            <TableCell>Affect Size&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.risk_factors.map(([location, affectSize, genotype]) => (
            <TableRow
              key={genotype}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {location}
              </TableCell>
              <TableCell>{genotype}</TableCell>
              <TableCell>
                <AlzheimersBarChart affectSize={affectSize} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
