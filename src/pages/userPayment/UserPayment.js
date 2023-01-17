import * as React from "react";
import "./userPayment.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import axios from "axios";
import uuid from "react-uuid";

import { useState } from "react";
import { toastMessage } from "helpers";
import { useEffect } from "react";

export default function UserPayment({ openPayment, setOpenPayment }) {
  const [transactionId, setTransactionId] = useState(uuid());
  const [prisoner, setPrisoner] = useState("");
  const [amount, setAmount] = useState(0);
  const [senderName, setSenderName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [inmate, setInmate] = useState([]);

  const [inmateName, setInmateName] = useState("");

  const fetchInmate = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/prisoners")
      .then((res) => {
        setInmate(res.data);
      })
      .catch((error) => {
        toastMessage("error", error.message);
        console.log("fetch inmate erro", error);
      });
  };
  useEffect(() => {
    fetchInmate();
  }, []);

  useEffect(() => {
    const inNma = inmate.find((item) => item.code === prisoner);
    if (inNma) {
      setInmateName(inNma.names);
    } else {
      setInmateName("Inmate not found");
    }
  }, [prisoner]);

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOpenPayment(false);
  };

  const handlePayment = async () => {
    setLoading(true);
    if (
      prisoner.trim() === "" ||
      amount === "" ||
      senderName === "" ||
      telephoneNumber.trim() === "" ||
      address.trim() === ""
    ) {
      toastMessage("error", "All fields on the form are required");
      setLoading(false);
    } else if (inmateName == "Inmate not found" || inmateName == "") {
      toastMessage("error", "INMATE NOT FOUND");
      setLoading(false);
    } else {
      try {
        setTransactionId(uuid());
        if (transactionId) {
          console.log(`Generated transaction Id: ${transactionId}`);
          const organizationId = "d64924c8-8ebe-4510-8f2c-91495483fe22";
          const description =
            "payment request with endpoints for prison mageragere";
          let callbackUrl = `https://prison-backend.onrender.com/transactions/callback/payment/${transactionId}`;
          const paymentRes = await axios.post(
            "https://opay-api.oltranz.com/opay/paymentrequest",
            {
              telephoneNumber,
              amount,
              organizationId: organizationId,
              description: description,
              callbackUrl: callbackUrl,
              transactionId: transactionId,
            }
          );
          if (paymentRes) {
            console.log("payment result", paymentRes);
            toastMessage("success", paymentRes.data.description);
            const data = {
              transactionId,
              prisoner,
              amount,
              transactionStatus: paymentRes.data.status,
              senderName,
              telephoneNumber,
              address,
            };
            console.log("data to sent in database", data);
            const localSave = await axios.post(
              process.env.REACT_APP_BACKEND_URL + "/transactions/",
              data
            );

            if (localSave) {
              console.log("data is already saved in db");
              toastMessage("success", localSave);
              setPrisoner("");
              setAmount("");
              setSenderName("");
              setTelephoneNumber("");
              setAddress("");
              setInmateName("");
              handleClose(true);
              setLoading(false);
              console.log("response from saving data", localSave);
            } else {
              setLoading(false);
              console.log("error in save data to database");
              toastMessage("error", "transaction not saved");
            }
          } else {
            console.log("payment to oltranz error");
          }
        } else {
          toastMessage("error", "Network error");
          setLoading(false);
          console.log("generate transaction is error");
        }
      } catch (error) {
        setLoading(false);
        setLoading(false);
      }
    }
  };

  const getInmateName = (prisoner) => {
    const xxx = inmate.filter((i) => i.code === prisoner);
    return setInmateName(xxx.names);
  };
  return (
    <div>
      <Modal
        open={openPayment}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='modl'
      >
        <Box className='box'>
          <Close className='cloze' onClick={() => handleClose(true)} />
          <form>
            <TextField
              label='Inmate Code'
              className='textfield'
              value={prisoner}
              onChange={(e) => {
                setPrisoner(e.target.value);
                getInmateName(prisoner);
              }}
              InputLabelProps={{ className: "textfield__label" }}
              required
            />
            <TextField
              // label='Inmate Name'
              disabled
              value={inmateName}
              className='textfield'
              placeholder='inmate names'
              InputLabelProps={{ className: "textfield__label" }}
            />
            <TextField
              label='Amount'
              className='textfield'
              type='number'
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              InputLabelProps={{ className: "textfield__label" }}
            />
            <TextField
              label='Telephone'
              className='textfield'
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
              InputLabelProps={{ className: "textfield__label" }}
            />
            <TextField
              label='Sender Names'
              className='textfield'
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              InputLabelProps={{ className: "textfield__label" }}
            />
            <TextField
              label='Sender Address'
              className='textfield'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              InputLabelProps={{ className: "textfield__label" }}
            />
            <Button
              variant='contained'
              className='buton'
              onClick={() => handlePayment()}
            >
              {loading ? "Sending..." : "Send money"}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
