import { Box, Button, Modal, TextField } from "@mui/material";
import axios from "axios";
import { toastMessage } from "helpers";

import React, { useRef } from "react";
import { useState } from "react";
import ReactToPrint from "react-to-print";

export default function WithDrawer({
  openWithdrawer,
  setOpenWithdrawer,
  style,
  selectedInmate,
}) {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const componentRef = useRef();

  const handleWithdraw = () => {
    setLoading(true);
    const code = selectedInmate.code;
    axios
      .put(process.env.REACT_APP_BACKEND_URL + "/transactions/withdraw", {
        code,
        amount,
      })
      .then((res) => {
        setLoading(false);
        toastMessage(
          "success",
          `amount ${amount} is removed from this Inmate your new balance is ${res.data.balance}`
        );
        setAmount("");
      })
      .catch((error) => {
        setLoading(false);
        console.log("error in withdrw", error);
        toastMessage("error", error.response.data.error);
      });
  };

  const handleCloseWithdrawer = () => setOpenWithdrawer(false);
  return (
    <div>
      <Modal
        style={{ backgroundColor: "#79859334" }}
        open={openWithdrawer}
        onClose={handleCloseWithdrawer}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div style={{ width: "80%" }} ref={componentRef}>
            <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
              Recept of money status
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px",
              }}
            >
              <h3>Name of Inmate</h3> <h3>{selectedInmate?.names}</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px",
              }}
            >
              <h3>Address</h3> <h3>{selectedInmate?.district}</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px",
              }}
            >
              <h3>Father</h3> <h3>{selectedInmate?.fathername}</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px",
              }}
            >
              <h3>Balance</h3> <h3>{selectedInmate?.account} Rwf</h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <h3>Withdraw amount</h3>{" "}
            <TextField
              id='outlined-basic'
              label='Amount'
              variant='outlined'
              style={{ marginLeft: "10px" }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              padding: "20%",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleWithdraw}
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px 15px",
                width: "150px",
              }}
            >
              {loading ? "Wait..." : "Withdraw"}
            </Button>
            <ReactToPrint
              trigger={() => (
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px 15px",
                    width: "150px",
                  }}
                >
                  Print
                </button>
              )}
              content={() => componentRef.current}
            ></ReactToPrint>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
