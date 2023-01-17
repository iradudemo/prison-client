import {
  Box,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { errorHandler } from "helpers";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ViewHistory({ openView, style, setOpenView }) {
  const handleCloseView = () => setOpenView(false);

  const [transactions, setTransactions] = useState([]);

  const fetchtx = () => {
    // axios
    //   .get(
    //     process.env.REACT_APP_BACKEND_URL +
    //       "/transactions/prisoner/" +
    //       selectedInmateId
    //   )
    //   .then((res) => {
    //     // setTransactions(res.data);
    //     console.log(res.data.transaction);
    //   })
    //   .catch((error) => errorHandler(error));
  };

  fetchtx();

  return (
    <div>
      <Modal
        open={openView}
        onClose={handleCloseView}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} style={{ width: "70vw", height: "70vh" }}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <h1 style={{ textAlign: "center" }}>View transaction History</h1>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <TableContainer
              component={Paper}
              style={{ backgroundColor: "#21295C", margin: "5px" }}
            >
              <Table
                sx={{ minWidth: 650, color: "black" }}
                size='small'
                aria-label='a dense table'
              >
                <TableHead style={{ padding: "10px 15px" }}>
                  <TableRow>
                    <TableCell
                      align='right'
                      style={{ padding: "10px 15px", fontSize: "16px" }}
                    >
                      #
                    </TableCell>
                    <TableCell
                      style={{ padding: "10px 15px", fontSize: "16px" }}
                    >
                      transaction Id
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
                      Sender Name
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
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align='left'
                      style={{ fontSize: "12px" }}
                      component='th'
                      scope='row'
                    >
                      #
                    </TableCell>
                    <TableCell
                      align='left'
                      style={{ fontSize: "12px" }}
                      component='th'
                      scope='row'
                    >
                      Hi data table
                    </TableCell>
                    <TableCell
                      align='left'
                      style={{ padding: "10px 15px", fontSize: "12px" }}
                    >
                      Hi data table
                    </TableCell>
                    <TableCell
                      align='left'
                      style={{ padding: "10px 15px", fontSize: "12px" }}
                    >
                      Hi data table
                    </TableCell>
                    <TableCell
                      align='left'
                      style={{ padding: "10px 15px", fontSize: "12px" }}
                    >
                      Hi data table
                    </TableCell>
                    <TableCell
                      align='left'
                      style={{ padding: "10px 15px", fontSize: "12px" }}
                    >
                      Hi data table
                    </TableCell>
                    <TableCell
                      align='left'
                      style={{ padding: "10px 15px", fontSize: "12px" }}
                    >
                      Hi data table
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
