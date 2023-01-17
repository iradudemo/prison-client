import { React, useState } from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
// import "../components/payment.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { Button, Modal } from "antd";
import "./view.css";
function View() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
  }

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
              // value={currency}
              // onChange={handleChange}
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
      </Modal>
      <Header />
      <div className="view-container">
        <div className="viewcontent">
          <div className="viewfirst">
            <h1>Send money to an inmate </h1>
            <p>
              Prison transactions provides simple and reliable money transfer
              options, <br />
              available 24/7, to loved ones currently in a correctional
              facility.
            </p>

            <button
              style={{
                margin: "60px 70px 60px 130px ",
                width: "200px",
                padding: "10px",
                borderRadius: "8px",
                border: "none",

                justifyContent: "center",
              }}
            >
              {" "}
              <a href="/sendmoney">Get Started</a>
            </button>
          </div>
          <div className="viewsecond"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default View;
