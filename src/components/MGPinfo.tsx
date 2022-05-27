import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../components/MGPcss.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(rowSum: number, mgp: number) {
  return { rowSum, mgp };
}
const rows = [
  createData(10000, 6),
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

export default function CustomizedTables() {
  return (
    <div className="container__table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>MGP</StyledTableCell>
              <StyledTableCell align="right">Row Sum</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.rowSum}>
                <StyledTableCell component="th" scope="row">
                  {row.rowSum}
                </StyledTableCell>
                <StyledTableCell align="right" component="th" scope="row">
                  {row.mgp}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
