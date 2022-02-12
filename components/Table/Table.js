import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CustomTable({ data, headerColor, fontColor = "#000" }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", minWidth: "800px" }}
        aria-label="simple table"
      >
        <TableHead sx={{ background: headerColor }}>
          <TableRow>
            {data.headings.map((item, idx) => (
              <TableCell key={idx} sx={{ color: fontColor }}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map((cell, idx) => (
                <TableCell key={idx}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
