import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { styled } from "@mui/material/styles";

const columns = [
  { id: "Usuario", label: "USUARIO", maxWidth: 100 },
  { id: "IdPersonaPK", label: "ID PERSONA", minWidth: 100 },
  { id: "IdUsuarioOK", label: "ID USUARIO", minWidth: 100 },
  { id: "Expira", label: "¿EXPIRA?", minWidth: 100 },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const TableUserTest = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result2 = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/users/`
    );
    setUser(result2.data);
    console.log("objectMyUsers:", result2.data);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log(">>users", users);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                return (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={user.idPersonaOK}
                  >
                    {columns.map((column) => {
                      const value = user[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableUserTest;
