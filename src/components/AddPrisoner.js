import { Box, Button, Modal, TextField } from "@mui/material";
import axios from "axios";
import { errorHandler, toastMessage } from "helpers";
import React from "react";
import { useState } from "react";

export default function AddPrisoner({ open, setOpen, style, fetchInmate }) {
  const handleClose = () => setOpen(false);
  const [names, setNames] = useState("");
  const [dOB, setDoB] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [district, setDistrict] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState(0);
  const handleSave = (e) => {
    e.preventDefault();
    if (
      names.trim() === "" ||
      dOB.trim() === "" ||
      fathername.trim() === "" ||
      mothername.trim() === "" ||
      district.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === ""
    ) {
      toastMessage("error", "All fields on the form are required");
    } else {
      axios
        .post(process.env.REACT_APP_BACKEND_URL + "/prisoners/", {
          names,
          dOB,
          fathername,
          mothername,
          district,
          phone,
          email,
          account,
        })
        .then((res) => {
          console.log("resp", res);
          fetchInmate();
          setNames("");
          setDoB("");
          setFathername("");
          setMothername("");
          setDistrict("");
          setPhone("");
          setEmail("");
          setAccount("");
          toastMessage("success", res.data.msg);
        })
        .catch((error) => errorHandler(error));
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h2 style={{ textAlign: "center" }}>Add prisoner </h2>
          <div style={{ display: "flex" }}>
            <TextField
              id='standard-basic'
              label='enter full name'
              variant='standard'
              style={{ width: "300px", marginRight: "30px" }}
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
            <TextField
              id='standard-basic'
              type='date'
              label='enter Date of birth'
              variant='standard'
              style={{ width: "300px" }}
              value={dOB}
              onChange={(e) => setDoB(e.target.value)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              id='standard-basic'
              label='father name'
              variant='standard'
              style={{ marginRight: "30px", width: "300px" }}
              value={fathername}
              onChange={(e) => setFathername(e.target.value)}
            />
            <TextField
              id='standard-basic'
              label='Mather name'
              variant='standard'
              style={{ width: "300px" }}
              value={mothername}
              onChange={(e) => setMothername(e.target.value)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              id='standard-basic'
              label='email'
              variant='standard'
              style={{ marginRight: "30px", width: "300px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id='standard-basic'
              label='Telephone'
              variant='standard'
              style={{ width: "300px" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              id='standard-basic'
              label='District'
              variant='standard'
              style={{ marginRight: "30px", width: "300px" }}
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <TextField
              id='standard-basic'
              label='Balance'
              variant='standard'
              style={{ width: "300px" }}
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </div>
          <Button
            style={{
              background: "white",
              marginLeft: "45%",
              marginTop: "20px",
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
