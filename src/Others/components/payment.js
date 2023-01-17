import React from "react";
import { Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import "./payment.css";

const currencies = [
  {
    value: "MOMO",
    label: "Mobile Money",
  },
  {
    value: "MASTERCARD",
    label: "Mastercard",
  },
  {
    value: "Bank",
    label: "Bank account",
  },
];

function Payments() {
  alert("your payment successfull done");
}
function Payment() {
  const [currency, setCurrency] = React.useState("MOMO");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="payment-container">
      <form className="payment-form">
        <h1> Transfer money</h1>

        <div>
          {/* <label>sender name</label> <br /> */}
          <TextField
            id="outlined-basic"
            label="sender name"
            variant="outlined"
            fullWidth
          />{" "}
          <br />
          {/* <label>reciver name</label> */}
          <br />
          <TextField
            id="outlined-basic"
            label="reciver name"
            variant="outlined"
            fullWidth
          />{" "}
        </div>
        {/* <label>Sender address</label> */}
        <br />
        <TextField
          id="outlined-basic"
          label="Sender address"
          fullWidth
          variant="outlined"
        />
        <br />
        <br />

        <TextField
          id="outlined-number"
          label="phone number"
          type="number"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-number"
          label="Ammount"
          type="number"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-select-payment"
          select
          label="Select"
          fullWidth
          value={currency}
          onChange={handleChange}
          helperText="Please select your payment mode"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <br />
        <button className="button payment-btn" onClick={Payments}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Payment;
