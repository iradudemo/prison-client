import { React, useState } from "react";
import "./home.css";
import MessageIcon from "@mui/icons-material/Message";
import { TextField } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import money from "../assets/images/pexels-cottonbro-studio-5909808.jpg";
import message from "../assets/images/undraw_Modern_life_re_8pdp.png";
import undraw from "../assets/images/undraw_Credit_card_payment_re_o911.png";
import Header from "../components/header";
import { Button, Drawer, Modal } from "antd";
import Footer from "../components/footer";
// import "antd/dist/antd.css";
function Home() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="home-container">
      <Drawer placement="right" width="50%" onClose={onClose} open={open}>
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
                  />
                </div>
                <div style={{ width: "250px" }}>
                  <TextField
                    id="standard-basic"
                    label="Second name"
                    variant="standard"
                    fullWidth
                    margin="danse"
                  />
                </div>
              </div>
              <TextField
                id="standard-basic"
                fullWidth
                margin="danse"
                label="Email"
                variant="standard"
              />
              <br /> <br /> <br />
              <TextField
                fullWidth
                label="Message"
                id="fullWidth"
                height="300px"
              />
              <button
                style={{
                  margin: "60px 70px 60px 130px ",
                  width: "200px",
                  padding: "10px",

                  justifyContent: "center",
                }}
              >
                {" "}
                Send
              </button>
            </div>
          </div>
        </div>
      </Drawer>

      <Header />
      <div className="home-background">
        <div className="home-opacity">
          <div className="background-content">
            <h2>
              Make your Transaction & it will be derivered to your inmate very
              soon as possible
            </h2>
            <div className="buttons">
              <button className="button btn">How is it done</button>
              <button className="button btn">
                {" "}
                <a href="/login">Make Transaction</a>{" "}
              </button>
            </div>
          </div>
          <div className="home-text">
            <h1>Let us support our Inmates</h1>
          </div>
        </div>
      </div>
      <main className="home-main">
        <div className="main-part1">
          <h2>Our core services</h2>
          <p>
            Make your Transaction & it will be derivered to your <br /> inmate
            very soon as possible <br />
            Make your Transaction & it will be derivered to your <br /> inmate
            very soon as possible
          </p>
          <button className="button btn">View more</button>
        </div>
        <div className="main-part2">
          <div className="card-left">
            <div className="card-leftOne">
              <img src={money} />
              <p>card oneasdDsdvasfvfvfvffvv</p>
            </div>

            <div className="card-leftTwo">
              <img src={money} />
              <p>card oneasdDsdvasfvfvfvffvv</p>
            </div>
          </div>

          <div className="card-right">
            <img src={money} />
            <p>card oneasdDsdvasfvfvfvffvv</p>
          </div>
        </div>
        <div className="home-services">
          <div className="servicesCardOne"></div>
          <div className="servicesCardTwo"></div>
        </div>
      </main>

      <div className="About-content">
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

      <div className="home-contact">
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
              {" "}
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
          <button className="comment-button">Leave a comment</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
