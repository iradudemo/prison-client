import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/auth/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "#21295C",
          marginTop: "50px",
          marginLeft: "5px",
        }}
      >
        <Table
          sx={{ minWidth: 650, color: "black" }}
          size='small'
          aria-label='a dense table'
        >
          <TableHead style={{ padding: "10px 15px" }}>
            <TableRow>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                first name
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                last name
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Email
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                phone number
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Transaction
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Regitered Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ padding: "10px 15px" }}>
            {users.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.firstname}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "16px" }}
                >
                  {row.lastname}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "16px" }}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "16px" }}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "16px" }}
                >
                  {row.transactions.length}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "16px" }}
                >
                  {new Date(row.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users;
