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

function Transactions() {
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransaction = () => {
    setIsLoading(true);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/transactions")
      .then((res) => {
        setTransaction(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTransaction();
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
              <TableCell style={{ padding: "10px 15px", fontSize: "16px" }}>
                #
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Transaction ID
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Amount
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Inmate
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Status
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Sender Names
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Phone number
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Address
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <h3>Fetching transactions....</h3>
            ) : (
              transaction.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {i + 1}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{ padding: "10px 15px", fontSize: "12px" }}
                  >
                    {row.transactionId}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{ padding: "10px 15px", fontSize: "12px" }}
                  >
                    {row.amount}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{ padding: "10px 15px", fontSize: "12px" }}
                  >
                    {row.prisoner.names}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{ padding: "10px 15px", fontSize: "12px" }}
                  >
                    {row.transactionStatus}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{ padding: "10px 15px", fontSize: "12px" }}
                  >
                    {row.senderName}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{ padding: "10px 15px", fontSize: "12px" }}
                  >
                    {row.telephoneNumber}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{ padding: "10px 15px", fontSize: "12px" }}
                  >
                    {row.address}
                  </TableCell>
                  <TableCell
                    align='left'
                    style={{ padding: "10px 15px", fontSize: "12px" }}
                  >
                    {new Date(row.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Transactions;
