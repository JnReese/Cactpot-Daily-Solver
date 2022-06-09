import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: number, value: number) {
  return { name, value };
}

const rows = [
  createData(6, 10000),
  createData(7, 36),
  createData(8, 720),
  createData(9, 360),
  createData(10, 80),
  createData(11, 252),
  createData(12, 180),
  createData(13, 72),
  createData(14, 54),
  createData(15, 180),
  createData(16, 72),
  createData(17, 180),
  createData(18, 119),
  createData(19, 36),
  createData(20, 306),
  createData(21, 1080),
  createData(22, 144),
  createData(23, 1800),
  createData(24, 3600),
];

export default function BasicTable() {
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Roll</TableCell>
              <TableCell align="right">MGP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

const Layout = styled.div`
  width: 25%;
  margin: 0 auto;
  margin-top: 25px;
`;
