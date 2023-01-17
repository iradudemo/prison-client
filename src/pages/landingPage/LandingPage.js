import { React, useState } from "react";
import "./landingPage.css";

import { TextField } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import deliver from "../../assets/images/deliver.png";
import money from "../../assets/images/accurate.png";
import park from "../../assets/images/park.png";
import message from "../../assets/images/undraw_Modern_life_re_8pdp.png";
import undraw from "../../assets/images/undraw_Credit_card_payment_re_o911.png";

import { Drawer } from "antd";
import Footer from "../../components/footer";
import HeaderLand from "../../components/headerLand";
import UserPayment from "pages/userPayment/UserPayment";
import axios from "axios";
import { toastMessage } from "helpers";

function Home() {
  const [open, setOpen] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (
      firstname.trim() == "" ||
      lastname.trim() == "" ||
      email.trim() == "" ||
      content == ""
    ) {
      toastMessage("error", "All field are required");
      setLoading(false);
    } else {
      setLoading(true);
      axios
        .post(process.env.REACT_APP_BACKEND_URL + "/messages", {
          firstname,
          lastname,
          email,
          content,
        })
        .then((res) => {
          console.log("data saved message", res);
          setFirstname("");
          setLastname("");
          setEmail("");
          setContent("");
          toastMessage("success", "Message Sent");
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  };

  return (
    <div className="home-container">
      <Drawer
        placement="right"
        width="40%"
        style={{
          backgroundImage: "linear-gradient(to top,  #77889c, #0c2a4e79)",
        }}
        className="drawer"
        onClose={onCloseDrawer}
        open={open}
      >
        <div className="drawerContent">
          <div className="contact-content">
            <h2>Contact Us</h2>

            <div className="contact-form">
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "30px", width: "250px" }}>
                  <TextField
                    fullWidth
                    margin="danse"
                    id="standard-basic"
                    label="First name"
                    variant="standard"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div style={{ width: "250px" }}>
                  <TextField
                    id="standard-basic"
                    label="Second name"
                    variant="standard"
                    fullWidth
                    margin="danse"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <TextField
                id="standard-basic"
                fullWidth
                margin="danse"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br /> <br /> <br />
              <TextField
                fullWidth
                label="Message"
                id="fullWidth"
                height="300px"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  margin: "60px 70px 60px 60px ",
                  width: "200px",
                  padding: "15px 20px",
                  fontSize: "18px",

                  justifyContent: "center",
                }}
              >
                {loading ? "sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </Drawer>

      <HeaderLand />
      <div className="home-background">
        <div className="home-opacity">
          <div className="background-content" id="transaction">
            <h2>
              Make your Transaction & it will be derivered to your inmate very
              soon as possible
            </h2>
            <div className="buttons">
              <button className="button btn">How is it done</button>
              <button
                className="button btn"
                onClick={() => setOpenPayment(true)}
              >
                <a>Make Transaction</a>{" "}
              </button>
            </div>
          </div>
          <div className="home-text">
            <h1>Let us support our Inmates</h1>
          </div>
        </div>
      </div>
      <UserPayment openPayment={openPayment} setOpenPayment={setOpenPayment} />
      <main className="home-main">
        <div className="main-part1">
          <h2>Our core services</h2>
          <p>
            Make your Transaction & it will be derivered to your <br /> inmate
            very soon as possible <br />
            Make your Transaction & it will be derivered to your <br /> inmate
            very soon as possible
          </p>
        </div>
        <div className="main-part2">
          <div className="card-left">
            <div className="card-leftOne">
              <img src={deliver} />
              <p>Transfer money to inmate</p>
            </div>

            <div className="card-leftTwo">
              <img src={money} />
              <p>Faster deliver and accurate</p>
            </div>
          </div>

          <div className="card-right">
            <img src={park} />
            <p>visit inmate </p>
          </div>
        </div>
        <div className="home-services">
          <div className="servicesCardOne"></div>
          <div className="servicesCardTwo"></div>
        </div>
      </main>

      <div className="About-content" id="about">
        <div className="About-image">
          <img src={undraw} />
        </div>
        <div className="About-text">
          <h2>
            <b>
              We provide a solution through quick and efficiency transaction
            </b>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled it to make a type specimen book. It has survived not
            <br />
            only five centuries, but also the leap into electronic typesetting,
            <br />
            remaining essentially unchanged
          </p>
        </div>
      </div>

      <div className="home-contact" id="contact">
        <div className="contact-one">
          <h1>Chart with us</h1>
          <h1>
            <b>Let's talk About our product to you!!</b>
          </h1>
        </div>
        <div className="contact-two">
          <div>
            <button
              style={{
                marginTop: "100px",
                width: "200px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={showDrawer}
            >
              Contact with Us
              <ArrowCircleRightIcon style={{ marginLeft: "5px" }} />
            </button>
          </div>

          <div>
            <img src={message} style={{ width: "400px" }} />
          </div>
        </div>
      </div>
      <div className="comment">
        <div className="comment-partone">
          <h3>
            Leave comment about our services so that our service will be more
            effectivelly and efficiantlly
          </h3>
        </div>
        <div className="comment-parttwo">
          <h3>your email</h3>
          <button className="comment-button">subscribe</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
