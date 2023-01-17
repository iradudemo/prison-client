import React from "react";
import { Box, useTheme, Button, TextField } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddPrisoner from "components/AddPrisoner";
import WithDrawer from "components/WithDrawer";
import ViewHistory from "components/ViewHistory";
import { useEffect } from "react";
import axios from "axios";
import { errorHandler } from "helpers";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "gray",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Prisoners = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [selectedInmate, setSelectedInmate] = useState(null);
  const [selectedInmateId, setSelectedInmateId] = useState(null);
  const [openWithdrawer, setOpenWithdrawer] = React.useState(false);
  const handleOpenWithdrawer = () => {
    setOpenWithdrawer(true);
  };
  const [deleting, setDeleting] = useState(false);

  const [openView, setOpenView] = React.useState(false);
  const handleOpenView = () => {
    setOpenView(true);
  };

  const [inmates, setInmates] = useState([]);

  useEffect(() => {
    fetchInmate();
  }, []);

  const fetchInmate = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/prisoners")
      .then((res) => {
        setInmates(res.data);
      })
      .catch((error) => errorHandler(error));
  };

  const handleDelete = async (id) => {
    setDeleting(true);
    try {
      await axios.delete(
        process.env.REACT_APP_BACKEND_URL + `/prisoners/${id}`
      );
      setInmates(inmates.filter((item) => item._id !== id));
      setDeleting(false);
    } catch (error) {
      setDeleting(false);
      console.log(error);
    }
  };

  return (
    <div className='app'>
      <Button
        style={{
          backgroundColor: "black",
          color: "white",
          margin: "10px 20px",
        }}
        onClick={handleOpen}
      >
        Add
      </Button>
      <AddPrisoner
        open={open}
        setOpen={setOpen}
        style={style}
        fetchInmate={fetchInmate}
      />
      <div>
        <WithDrawer
          openWithdrawer={openWithdrawer}
          setOpenWithdrawer={setOpenWithdrawer}
          style={style}
          selectedInmate={selectedInmate}
        />
        <ViewHistory
          openView={openView}
          setOpenView={setOpenView}
          style={style}
          selectedInmateId={selectedInmateId}
        />
      </div>
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
              <TableCell style={{ padding: "10px 15px", fontSize: "16px" }}>
                Code
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                name
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Father name
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Mather name
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                dOB
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                district
              </TableCell>
              <TableCell
                align='left'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                email
              </TableCell>
              <TableCell
                align='center'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Balance
              </TableCell>
              <TableCell
                align='center'
                style={{ padding: "10px 15px", fontSize: "16px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inmates.map((p, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align='left'
                  style={{ fontSize: "12px" }}
                  component='th'
                  scope='row'
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ fontSize: "12px" }}
                  component='th'
                  scope='row'
                >
                  {p.code}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "12px" }}
                >
                  {p.names}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "12px" }}
                >
                  {p.fathername}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "12px" }}
                >
                  {p.mothername}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "12px" }}
                >
                  {new Date(p.dOB).toLocaleDateString()}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "12px" }}
                >
                  {p.district}
                </TableCell>
                <TableCell
                  align='left'
                  style={{ padding: "10px 15px", fontSize: "12px" }}
                >
                  {p.email}
                </TableCell>
                <TableCell
                  align='center'
                  style={{ padding: "10px 15px", fontSize: "12px" }}
                >
                  {p.account}
                </TableCell>
                <TableCell
                  align='center'
                  style={{ padding: "10px 15px", fontSize: "12px" }}
                >
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleOpenWithdrawer();
                      setSelectedInmate(p);
                    }}
                  >
                    View
                  </a>
                  <a
                    style={{ paddingLeft: "15px", cursor: "pointer" }}
                    onClick={() => {
                      handleOpenView();
                      setSelectedInmateId(p);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    style={{
                      color: "red",
                      paddingLeft: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to detele this Inmate?"
                        )
                      ) {
                        handleDelete(p._id);
                      }
                    }}
                  >
                    Delete
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Prisoners;
